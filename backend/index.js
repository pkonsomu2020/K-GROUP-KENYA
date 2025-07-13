import express from 'express';
import multer from 'multer';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 4000;
const __dirname = path.resolve();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});
const upload = multer({ storage });

const METADATA_FILE = path.join(__dirname, 'mixes.json');

// Helper to read/write metadata
function readMixes() {
  if (!fs.existsSync(METADATA_FILE)) return [];
  return JSON.parse(fs.readFileSync(METADATA_FILE, 'utf-8'));
}
function writeMixes(mixes) {
  fs.writeFileSync(METADATA_FILE, JSON.stringify(mixes, null, 2));
}

// MySQL connection pool
const db = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'djkach',
});

// Upload endpoint
app.post('/api/mixes/upload', upload.single('file'), (req, res) => {
  const { title, description, category, type, date, duration, size } = req.body;
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  const mixes = readMixes();
  const newMix = {
    id: Date.now(),
    title,
    description,
    category,
    type, // 'audio' or 'video'
    date,
    duration,
    size,
    filename: req.file.filename,
    originalname: req.file.originalname,
    url: `/uploads/${req.file.filename}`
  };
  mixes.unshift(newMix);
  writeMixes(mixes);
  res.json({ success: true, mix: newMix });
});

// List mixes endpoint
app.get('/api/mixes', (req, res) => {
  const mixes = readMixes();
  res.json(mixes);
});

// Delete mix endpoint
app.delete('/api/mixes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  let mixes = readMixes();
  const mix = mixes.find(m => m.id === id);
  if (!mix) return res.status(404).json({ error: 'Mix not found' });
  // Remove file
  const filePath = path.join(__dirname, 'uploads', mix.filename);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
  // Remove from metadata
  mixes = mixes.filter(m => m.id !== id);
  writeMixes(mixes);
  res.json({ success: true });
});

// Download endpoint for mixes (forces download)
app.get('/api/mixes/download/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'uploads', filename);
  if (!fs.existsSync(filePath)) return res.status(404).send('File not found');
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
  res.setHeader('Content-Type', 'application/octet-stream');
  fs.createReadStream(filePath).pipe(res);
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const {
    firstName, lastName, email, phone,
    eventType, eventDate, venue, guests, budget, message
  } = req.body;
  if (!firstName || !lastName || !email || !phone || !eventType || !eventDate || !venue) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    await db.query(
      `INSERT INTO contacts (firstName, lastName, email, phone, eventType, eventDate, venue, guests, budget, message)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)` ,
      [firstName, lastName, email, phone, eventType, eventDate, venue, guests || null, budget || null, message || null]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Serve uploaded files (handled by express.static)

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
}); 
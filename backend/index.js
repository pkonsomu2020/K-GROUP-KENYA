import express from 'express';
import multer from 'multer';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
dotenv.config();

const app = express();
const PORT = 4000;
const __dirname = path.resolve();

// Middleware
app.use(cors({
  origin: [
    'https://kgroupkenya.netlify.app',
    'http://localhost:5173', // allow local dev
    'http://localhost:8080' // allow Vite/React dev server
  ],
  credentials: true
}));
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

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendNotificationEmail(subject, html) {
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: 'kgroupkenya@gmail.com',
    subject,
    html,
  });
}

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
      `INSERT INTO Bookings (firstName, lastName, email, phone, eventType, eventDate, venue, guests, budget, message)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)` ,
      [firstName, lastName, email, phone, eventType, eventDate, venue, guests || null, budget || null, message || null]
    );
    res.json({ success: true });
    // Send email notification in the background
    sendNotificationEmail(
      'New Kach Sound Media Booking',
      `<h2>New Booking (Kach Sound Media)</h2>
      <ul>
        <li><b>First Name:</b> ${firstName}</li>
        <li><b>Last Name:</b> ${lastName}</li>
        <li><b>Email:</b> ${email}</li>
        <li><b>Phone:</b> ${phone}</li>
        <li><b>Event Type:</b> ${eventType}</li>
        <li><b>Event Date:</b> ${eventDate}</li>
        <li><b>Venue:</b> ${venue}</li>
        <li><b>Guests:</b> ${guests || ''}</li>
        <li><b>Budget:</b> ${budget || ''}</li>
        <li><b>Additional Details:</b> ${message || ''}</li>
      </ul>`
    ).catch(err => console.error('Email send error:', err));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Booking form endpoint for subsidiary pages
app.post('/api/bookings', async (req, res) => {
  const {
    firstName, lastName, email, phone, companyEnquire, additionalDetails
  } = req.body;
  if (!firstName || !lastName || !email || !phone || !companyEnquire) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    await db.query(
      `INSERT INTO CompanyEnquiries (firstName, lastName, email, phone, companyEnquire, additionalDetails)
       VALUES (?, ?, ?, ?, ?, ?)` ,
      [firstName, lastName, email, phone, companyEnquire, additionalDetails || null]
    );
    res.json({ success: true });
    // Send email notification in the background
    sendNotificationEmail(
      'New Company Enquiry',
      `<h2>New Company Enquiry</h2>
      <ul>
        <li><b>First Name:</b> ${firstName}</li>
        <li><b>Last Name:</b> ${lastName}</li>
        <li><b>Email:</b> ${email}</li>
        <li><b>Phone:</b> ${phone}</li>
        <li><b>Company Enquire:</b> ${companyEnquire}</li>
        <li><b>Additional Details:</b> ${additionalDetails || ''}</li>
      </ul>`
    ).catch(err => console.error('Email send error:', err));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Serve uploaded files (handled by express.static)

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
}); 
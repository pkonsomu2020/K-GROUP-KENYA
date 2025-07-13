# K-GROUP KENYA Website

A modern, full-stack web platform for K-GROUP KENYA, a multidisciplinary holding company with subsidiaries in media, automotive, events, education, and digital broadcasting.

---

## 🌟 Project Overview

K-GROUP KENYA brings together diverse ventures under one brand, each operating as an independent entity but sharing a commitment to quality, impact, and innovation. This site provides:
- A dynamic homepage with hero, sectors, core values, and subsidiaries overview
- Individual pages for each subsidiary (Kach Sound Media, Links Auto Motors, Breakout Events, KBR TV, KBR Radio, Breakout Bible Fellowship, KBR Academy)
- About, Contact, Gallery, Events, Services, Audio/Video Mixes, and more
- Modern navigation, dark/light mode, scroll animations, and WhatsApp integration

---

## 🚀 Live Demo
- **Frontend (Netlify):** [https://kgroupkenya.netlify.app/](https://kgroupkenya.netlify.app/)
- **Backend (Render):** [https://k-group-kenya-22.onrender.com/](https://k-group-kenya-22.onrender.com/)

---

## 🏗️ Tech Stack

### Frontend
- Vite + React + TypeScript
- Tailwind CSS (custom theming, dark mode)
- shadcn/ui component library
- AOS (Animate On Scroll)
- React Router DOM
- Query Client (TanStack React Query)

### Backend
- Node.js + Express
- MySQL (with connection pool)
- Multer (file uploads)
- CORS (Netlify/localhost allowed)
- dotenv (env config)

---

## 📁 Project Structure

```
DJ KACH/
  backend/           # Node.js/Express backend (API, uploads, MySQL)
  src/               # Frontend source (React, pages, components)
  public/            # Static assets (logos, favicon, _redirects)
  ...
```

---

## ✨ Key Features
- **Homepage:** Hero, sectors, core values, subsidiaries overview
- **Subsidiary Pages:** Each with logo, banner, overview, services, Facebook link
- **About Page:** Company story, vision, mission, leadership, timeline
- **Contact Page:** Form (saves to backend), info, social links
- **Gallery, Events, Services, Audio/Video Mixes:** Rich, interactive content
- **Dark/Light Mode:** Toggle, persistent, fully themed
- **WhatsApp Button:** Floating, direct chat to +254 723 157309
- **Responsive Design:** Mobile-first, modern UI
- **SPA Routing:** Netlify `_redirects` for client-side navigation

---

## ⚙️ Setup & Development

### Prerequisites
- Node.js (v18+ recommended)
- npm or bun
- MySQL (for backend)

### Frontend
```sh
# Install dependencies
npm install
# Start dev server
npm run dev
```

### Backend
```sh
cd backend
npm install
# Create a .env file with your MySQL credentials
cp .env.example .env
# Start backend
npm run dev
```

### Environment Variables
- **Frontend:**
  - `VITE_API_URL` (e.g. your Render backend URL)
- **Backend:**
  - `MYSQL_HOST`, `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_DATABASE`

---

## 🛠️ Deployment

### Frontend
- Deploy to Netlify. Ensure `public/_redirects` exists for SPA routing.
- Set `VITE_API_URL` in Netlify environment variables.

### Backend
- Deploy to Render as a Web Service.
- Set environment variables for MySQL.
- CORS is configured for Netlify and localhost.

---

## 🗺️ Navigation
- Home
- About
- Subsidiaries (dropdown: Kach Sound Media, Links Auto Motors, Breakout Events, KBR TV, KBR Radio, Breakout Bible Fellowship, KBR Academy)
- Events, Services, Audio Mixes, Video Mixes, Gallery, Contacts

---

## 📝 License
This project is for K-GROUP KENYA. All rights reserved.

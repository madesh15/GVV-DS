# 🚗 GVV Driving School — Official Website

A professional, full-featured React website for **GVV Driving School**, Chennai.

---

## ✨ Features

- **Luxury Dark Theme** — Gold & dark palette with Playfair Display + Barlow fonts
- **Hero Section** — Full-screen background, animated counters, CTAs
- **About Section** — Photo collage, highlights, story
- **Courses Section** — 4 course cards with pricing, hover effects
- **Experience Section** — Why GVV, feature grid, inspirational quote banner
- **Gallery** — Masonry grid with lightbox zoom
- **Testimonials** — Auto-rotating carousel with 5 reviews
- **Contact Form** — Full enquiry form with success state
- **Footer** — Multi-column with links
- **WhatsApp Button** — Floating quick-contact
- **Fully Responsive** — Works on mobile, tablet, desktop
- **Smooth Navigation** — Sticky navbar with scroll detection

---

## 🛠️ Tech Stack

- **React 18**
- **Lucide React** (icons)
- **Google Fonts** — Playfair Display, Barlow, Barlow Condensed
- **Unsplash** — Real driving/car images (no download needed)
- Zero external CSS frameworks — all custom styles

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
cd gvv-driving-school
npm install
```

### 2. Start development server

```bash
npm start
```

Opens at **http://localhost:3000**

### 3. Build for production

```bash
npm run build
```

Output goes to the `build/` folder — ready to deploy!

---

## 🌐 Deploy to Live

### Option A — Netlify (Free, Easiest)
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com) → Drop `build/` folder → Live in seconds!

### Option B — Vercel (Free)
```bash
npm install -g vercel
vercel
```

### Option C — GitHub Pages
```bash
npm install -g gh-pages
# Add to package.json: "homepage": "https://yourusername.github.io/gvv-driving-school"
npm run build
npx gh-pages -d build
```

---

## 📁 Project Structure

```
gvv-driving-school/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js        ← Sticky navigation
│   │   ├── Hero.js          ← Hero + animated counters
│   │   ├── About.js         ← School story
│   │   ├── Courses.js       ← 4 course cards
│   │   ├── Experience.js    ← Why GVV features
│   │   ├── Gallery.js       ← Photo gallery + lightbox
│   │   ├── Testimonials.js  ← Review carousel
│   │   ├── Contact.js       ← Enquiry form
│   │   └── Footer.js        ← Footer
│   ├── App.js               ← Main app + global styles
│   └── index.js             ← React entry point
├── package.json
└── README.md
```

---

## 🎨 Customization

| What to change | Where |
|---|---|
| School name/address/phone | `Contact.js`, `Footer.js` |
| Course names/prices | `Courses.js` → `courses` array |
| Testimonials | `Testimonials.js` → `testimonials` array |
| Colors | Search `#d4a636` (gold) or `#06060a` (dark) in any file |
| WhatsApp number | `App.js` → `WhatsAppBtn` component |
| Images | Replace Unsplash URLs with your own photos |

---

## 📞 Business Details to Update

Replace these placeholders with your actual details:

- **Phone**: `+91 98765 43210`
- **Email**: `info@gvvdriving.com`
- **Address**: `14, Anna Salai, Teynampet, Chennai`
- **WhatsApp**: Update the `wa.me/91XXXXXXXXXX` link in `App.js`
- **Google Rating**: Update star count in `Hero.js` and `Footer.js`

---

Built with ❤️ for GVV Driving School, Chennai

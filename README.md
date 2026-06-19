# stellr.grafix — Website

## Quick Start

```bash
npm install
npm run dev
```

## EmailJS Setup

1. Sign up at https://www.emailjs.com
2. Create a service (Gmail recommended)
3. Create an email template with variables:
   - `{{from_name}}`, `{{from_email}}`, `{{service}}`, `{{message}}`
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Open `src/components/Contact/Contact.jsx` and replace:
   ```js
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
   ```

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2 — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to https://vercel.com → New Project
3. Import your repo
4. Framework: **Vite**
5. Click **Deploy**

`vercel.json` is already configured for SPA routing.

## Folder Structure

```
src/
├── components/
│   ├── Loader/         # 2s intro animation
│   ├── Navbar/         # Fixed nav + hamburger
│   ├── Hero/           # Landing hero
│   ├── About/          # Mission, Vision, Why Us
│   ├── Services/       # 7 service cards
│   ├── Portfolio/      # Filterable gallery
│   ├── Testimonials/   # 6 review cards
│   ├── Contact/        # EmailJS form + info
│   └── Footer/         # Links + socials
├── styles/
│   └── global.css      # Design tokens + resets
├── App.jsx
└── main.jsx
```

# Urban Edge Portfolio

Urban Edge is a premium social media marketing agency portfolio built with React, Vite, and Tailwind CSS. The design focuses on sleek typography, modern aesthetics, and fluid animations using Framer Motion.

This project operates completely as a **Static Single Page Application (SPA)** with no backend server required.

## Development setup

Install dependencies:
```bash
npm install
```

Run the local development server:
```bash
npm run dev
```

## Deployment & Production

Since this app operates completely without a backend (serverless), it can be hosted on any static hosting environment (Vercel, Netlify, GitHub Pages, Firebase Hosting, AWS S3, etc.).

1. **Build the production assets:**
   ```bash
   npm run build
   ```
   This will generate a `dist` directory containing your optimized HTML, CSS, and JS files.

2. **Deploy the `dist` directory:**
   Upload or point your hosting provider to the generated `dist` folder. All routing is handled client-side by React Router, so be sure your static host is configured to rewrite all paths to `index.html`.

## File Structure
- `src/components/` - All UI sections isolated into reusable files (`Hero.tsx`, `About.tsx`, `Contact.tsx`, etc.).
- `src/pages/` - App pages combining components (`Home.tsx`).
- `src/App.tsx` - Base routing setup.
- `.env.example` - Stubbed env vars.
- `package.json` - Required for NPM dependencies.
- `vite.config.ts` - Vite bundler configuration.

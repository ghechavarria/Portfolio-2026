# Portfolio Homepage

React + Vite single-page portfolio for [gracie.cloud](https://gracie.cloud).

## Stack
- React 19
- Vite 6
- Plain CSS (`src/index.css`)

## Favicon
- `public/favicon.svg` — source artwork (GH initials on pink-to-violet gradient rounded square, matching `.brand-mark`)
- `public/favicon.ico` — primary tab icon (16/32/48 multi-size ICO)
- `public/favicon-32x32.png` — PNG fallback for browsers that prefer raster icons
- `public/apple-touch-icon.png` — 180×180 home-screen icon for iOS
- Regenerate raster files after editing the SVG: `npm run generate:favicons` (uses `sharp` + `to-ico` in `scripts/generate-favicons.js`)
- `index.html` links ICO first, then PNG sizes and `apple-touch-icon`

## Project structure
- `index.html` — Vite entry HTML
- `src/main.jsx` — React bootstrap
- `src/App.jsx` — page layout
- `src/index.css` — global styles (dark/light theme, waves, timeline, cards)
- `src/data/portfolioData.js` — site content used by components
- `src/components/` — Topbar, Hero, About, Skills, Experience, Projects, Contact, Footer
- `src/hooks/useTheme.js` — persisted dark/light theme toggle
- `public/assets/` — SVG icons

## Commands
```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview production build
```

## Deployment
Build with `npm run build` and deploy the `dist/` folder. On Netlify, `netlify.toml` configures the build, scheduled LinkedIn photo sync, and `profile-photo` function — see `docs/linkedin-photo-sync.md`.

## Content updates
Edit `src/data/portfolioData.js`, then run `npm run dev` or `npm run build` to verify.

For weekly LinkedIn alignment, see `docs/linkedin-sync.md` and `scripts/sync-linkedin.md`.

Grace's current tracked resume lives in `docs/resume/`. Reference resumes live in `docs/sample resumes/` (gitignored).

## Portrait image
Production serves the photo from `/.netlify/functions/profile-photo` (Netlify Blobs, synced weekly). Local dev uses `public/assets/profile.jpg` via `npm run sync:linkedin`. `ProfileAvatar` shows initials when the image is missing — see `docs/linkedin-photo-sync.md`.

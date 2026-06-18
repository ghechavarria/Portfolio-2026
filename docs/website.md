# Portfolio Homepage

React + Vite single-page portfolio aligned with `docs/resume.md`.

## Stack
- React 19
- Vite 6
- Plain CSS (`src/index.css`)

## Project structure
- `index.html` — Vite entry HTML
- `src/main.jsx` — React bootstrap
- `src/App.jsx` — page layout
- `src/index.css` — global styles (dark/light theme, waves, timeline, cards)
- `src/data/portfolioData.js` — resume content used by components
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
Build with `npm run build` and deploy the `dist/` folder (Netlify, Vercel, GitHub Pages, etc.).

## Content updates
Edit `src/data/portfolioData.js` or `docs/resume.md`, then mirror changes in the data file.

## Portrait image
Add `public/assets/me.png` and replace the `GH` placeholder in `src/components/About.jsx` with an `<img>` when ready.

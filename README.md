# Grace Hechavarria — Portfolio 2026

Personal portfolio site for Grace Hechavarria: analyst, ERP programmer, and technical developer based in Miami, FL. Built with React 19 and Vite, deployed on Netlify with scheduled LinkedIn profile-photo sync.

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (20+ recommended)
- npm (included with Node.js)

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve dist/ locally
```

### Optional scripts

```bash
npm run sync:linkedin      # download LinkedIn photo → public/assets/profile.jpg (local dev)
npm run generate:favicons  # rasterize public/favicon.svg → .ico / .png for index.html
```

Run `sync:linkedin` once after clone if the About portrait should show your LinkedIn photo locally. Without it, `ProfileAvatar` falls back to initials.

## Environment variables

Copy `.env.example` to `.env` for local overrides (never commit `.env`):

| Variable | Required | Purpose |
|----------|----------|---------|
| `LINKEDIN_PROFILE_URL` | No | Override LinkedIn profile URL (default: `site.linkedin` in `portfolioData.js`) |
| `LINKEDIN_IMAGE_URL` | No | Direct CDN image URL when LinkedIn blocks page scraping |
| `VITE_PROFILE_PHOTO_URL` | No | Image URL for `ProfileAvatar` (Netlify sets this in `netlify.toml` for production) |

Leave `VITE_PROFILE_PHOTO_URL` unset locally to use `/assets/profile.jpg`.

## Netlify deployment

### Build settings

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Publish directory | `dist` |

These are configured in `netlify.toml` at the project root.

### `netlify.toml` summary

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  VITE_PROFILE_PHOTO_URL = "/.netlify/functions/profile-photo"

[functions]
  directory = "netlify/functions"

[functions."sync-linkedin-photo"]
  schedule = "0 9 * * 0"   # Sunday 09:00 UTC
```

### Functions

| Function | URL | Role |
|----------|-----|------|
| `profile-photo` | `/.netlify/functions/profile-photo` | Serves the cached LinkedIn photo from Netlify Blobs |
| `sync-linkedin-photo` | (scheduled) | Weekly fetch; updates blob when the image hash changes |

**Schedule:** `0 9 * * 0` — every **Sunday at 09:00 UTC** (04:00 EST / 05:00 EDT).

### Netlify environment variables

Set in **Site configuration → Environment variables**:

| Variable | Required | Purpose |
|----------|----------|---------|
| `LINKEDIN_PROFILE_URL` | No | Override profile URL for the sync function |
| `LINKEDIN_IMAGE_URL` | No | Direct image URL fallback for scraping failures |

`VITE_PROFILE_PHOTO_URL` is set in `netlify.toml` for production builds.

### First deploy

1. Connect the repo and deploy (build settings come from `netlify.toml`).
2. After the first deploy, run **`sync-linkedin-photo` once** in the Netlify dashboard (**Functions → sync-linkedin-photo → Run now**) to seed the profile photo blob before the Sunday schedule runs.
3. Confirm `/.netlify/functions/profile-photo` returns the image on the live site.

Local `npm run sync:linkedin` only updates `public/assets/profile.jpg` for dev; it does not seed Netlify Blobs.

## Project structure

```
src/                  React components, hooks, portfolio data
public/               Static assets, favicon source (favicon.svg)
netlify/functions/    profile-photo + sync-linkedin-photo
scripts/              LinkedIn photo sync + favicon generator
docs/                 Detailed feature and deployment docs
```

## Documentation

See [`docs/`](docs/) for deeper references:

- [`docs/website.md`](docs/website.md) — site overview and architecture
- [`docs/linkedin-photo-sync.md`](docs/linkedin-photo-sync.md) — photo sync (local + Netlify)
- [`docs/linkedin-sync.md`](docs/linkedin-sync.md) — portfolio data sync from LinkedIn
- [`docs/hero-gutter-fix.md`](docs/hero-gutter-fix.md) — layout gutter tokens
- [`docs/light-mode-glass.md`](docs/light-mode-glass.md) — light theme surfaces
- [`docs/generate-favicons.md`](docs/generate-favicons.md) — favicon regeneration

## Tech stack

- React 19 + Vite 6
- CSS custom properties (light/dark themes)
- Netlify Functions + Netlify Blobs (profile photo)

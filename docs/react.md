# React Portfolio

## Overview
The portfolio is a React single-page app built with Vite. Content lives in `src/data/portfolioData.js`.

## Components
| Component | Purpose |
|-----------|---------|
| `ScrollProgress` | Top gradient scroll progress bar |
| `Topbar` | Fixed nav with active section highlight, scroll state, mobile drawer |
| `Hero` | Name, syntax-colored roles, CTAs, waves |
| `About` | Bio and portrait placeholder |
| `Skills` | Languages, systems, certifications |
| `Experience` | Work history timeline |
| `Education` | Degree cards grid |
| `Projects` | Hackathon project cards |
| `Contact` | Email and links |
| `Footer` | Social links with gradient wave |
| `RevealSection` | Scroll-reveal wrapper using IntersectionObserver |

## Hooks
- `useTheme` — reads/writes `localStorage` theme and sets `data-theme` on `<html>`

## Adding content
1. Update the matching arrays/objects in `src/data/portfolioData.js`.
2. Run `npm run dev` to preview locally.

## Build output
`npm run build` writes static files to `dist/` for deployment.

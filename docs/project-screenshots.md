# Project screenshots

Website showcase screenshots live in `public/assets/projects/`:

| File | Site |
|------|------|
| `mooric-erp.png` | [mooricerp.com](https://mooricerp.com) |
| `powerup-personnel.png` | [poweruppersonnel.com](https://poweruppersonnel.com) |

Paths are referenced from `src/data/portfolioData.js` via the `screenshot` field on each website entry and rendered in `src/components/Projects.jsx`.

To replace a screenshot, overwrite the PNG in `public/assets/projects/` and keep the filename the same, or update the `screenshot` path in `portfolioData.js`.

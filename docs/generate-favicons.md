# Favicon generation

Raster favicons are generated from `public/favicon.svg` so browsers that do not reliably show SVG tab icons still get the GH brand mark.

## Command

```bash
npm run generate:favicons
```

## Output

| File | Size | Purpose |
|------|------|---------|
| `public/favicon.ico` | 16, 32, 48 px | Primary tab icon |
| `public/favicon-32x32.png` | 32×32 | PNG fallback |
| `public/apple-touch-icon.png` | 180×180 | iOS home screen |

Vite copies these from `public/` into `dist/` on `npm run build`.

## Implementation

`scripts/generate-favicons.js` uses:

- **sharp** — rasterizes the SVG at each target size
- **to-ico** — bundles 16/32/48 PNG buffers into a multi-size `.ico`

Edit `public/favicon.svg` first, then rerun the script. `index.html` links ICO and PNG assets (see `docs/website.md`).

# Light Mode Sharp Surfaces

Light mode block surfaces use **solid white fills**, **crisp 1px borders**, and **minimal shadows** — no diffuse gray halo or large blur-radius box-shadow bloom. Depth comes from border contrast and a tight `0 1px 2px` drop, not outer glow.

**Scope:** `[data-theme="light"]` only. Dark mode is unchanged.

## Design tokens

Defined in `:root[data-theme="light"]` in `src/index.css`:

| Token | Value | Purpose |
|-------|-------|---------|
| `--border` | `rgba(26, 21, 38, 0.1)` | Default edge |
| `--border-strong` | `rgba(26, 21, 38, 0.16)` | Hover / emphasis |
| `--frost-blur` | `blur(12px) saturate(1.1)` | Light backdrop (panels only) |
| `--shadow-card` | inset highlight + `0 1px 2px rgba(0,0,0,0.04)` | Crisp lift |
| `--shadow-card-hover` | inset highlight + `0 2px 4px rgba(0,0,0,0.06)` | Hover lift |

## Surfaces — shadow / border per component

| Surface | Background | Border | Shadow |
|---------|------------|--------|--------|
| `.panel`, `.card` | `#fff` | `rgba(26,21,38,0.14)` | `--shadow-card` |
| `.hero-panel.card` | `#fff` | inherits card | `--shadow-card` |
| `.hero-stats` | `#fff` | `rgba(26,21,38,0.14)` | inset + `0 1px 2px` |
| `.topbar` | `rgba(255,255,255,0.96)` | `rgba(26,21,38,0.14)` | inset + `0 1px 2px` |
| `.contact-panel` | `#fff` | `rgba(26,21,38,0.16)` | `--shadow-card`; `::after` accent removed |
| `.project-card` | `#fff` (tint overlays removed) | `rgba(26,21,38,0.14)` | `--shadow-card` |
| `.education-item` | `#fff` | `rgba(26,21,38,0.14)` | inset + `0 1px 2px` |
| `.mobile-menu` | `#fff` | `rgba(26,21,38,0.14)` | inset + `0 1px 2px` + `0 4px 12px` (drawer only) |
| `.hero-badge`, `.btn-ghost`, `.role-pill` | `#fff` or tinted fill | `rgba(26,21,38,0.12–0.14)` | inset only or none |
| `.contact-glow` | — | — | `display: none` |

## Intentionally unchanged

- `.btn-primary`, `.contact-link` — gradient CTAs keep colored shadows
- `.brand-mark` — logo gradient glow
- Dark mode tokens and surfaces
- Text contrast (`--text`, `--muted`)

## QA checklist

- **1440px light:** Card corners show sharp edge, no gray haze bleed
- **390px light:** Hero stats, mobile menu, about Currently panel match sharp treatment
- **Dark mode:** No `[data-theme="light"]` selectors apply
- **Build:** `npm run build` passes

## Files

- `src/index.css` — light-mode tokens and "Light theme extras" overrides

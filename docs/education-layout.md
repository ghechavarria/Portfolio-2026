# Education Section Layout

Two-column layout pairing the section header with degree cards.

## Structure

`Education.jsx` uses a single `.education-layout` grid:

- **Left:** `SectionHeader` (unchanged component; same look as other sections)
- **Right:** `.education-cards` stack of `.education-item` cards (card styling unchanged)

## Desktop (≥1025px)

| Property | Value | Intent |
|----------|-------|--------|
| `grid-template-columns` | `minmax(220px, 1fr) minmax(280px, 1fr)` | Equal tracks so header + cards span full `.page` width |
| `gap` | `clamp(12px, 2vw, 18px)` | Matches About section rhythm |
| `width` / `max-width` | `100%` | Uses full page content width (same as About, Projects) |
| `margin-inline` | `auto` | Inherits centering from `.page` container |
| `align-items` | `start` | Top-anchored grid; children use `align-self: center` for vertical pairing |
| Cards `width` | `100%` | Cards fill the right column (no `max-width` cap or `justify-self: start`) |

## Mobile (≤1024px)

Single column stack; cards span full width.

## Comparison

- **About:** header above grid; content uses `1.45fr 0.85fr`
- **Contact:** centered panel `max-width: 920px`; inner grid `1.1fr 0.9fr`
- **Education:** full `.page` width; balanced `1fr / 1fr` columns with cards filling the right track

## QA breakpoints

- 1440px, 1280px, 1025px — two columns, paired spacing
- 1024px, 390px — single column stack
- Dark and light themes — no theme-specific rules; uses CSS variables

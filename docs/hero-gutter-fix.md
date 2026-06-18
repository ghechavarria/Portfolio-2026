# Hero horizontal gutter fix

## Problem

At certain viewport widths (especially between the 1100px compact/desktop breakpoint and ~1280px), hero content (badge, name, Currently panel) appeared flush against the left/right screen edges with little or no visible side space.

## Root cause

1. **Hero sits outside `.page`** — `Hero` is a sibling of `<main class="page">`, so it relied on its own `.hero-inner` width rule, not `.page` padding.
2. **Single-subtraction width pattern** — `width: min(1180px, calc(100% - clamp(24px, 4vw, 40px)))` treated the clamp as *total* horizontal inset. With `margin-inline: auto`, that split evenly (~12–20px per side at many widths), which felt like no gutter.
3. **`overflow: visible` on `.hero`** — decorative layers (`.hero-glow` at `100vw`, compact `115vw`) could bleed past the viewport and weaken perceived containment.
4. **Topbar used a fixed `20px` inset** — misaligned with page/hero gutters at intermediate widths.

## Fix

Introduced shared layout tokens in `:root`:

```css
--content-max: 1180px;
--page-gutter: clamp(16px, 4vw, 48px);
```

Applied to `.page`, `.hero-inner`, `.footer-inner`, and `.topbar`:

- `width: 100%` + `max-width: var(--content-max)` + `margin-inline: auto`
- `padding-inline: var(--page-gutter)` for true per-side gutters

Additional changes:

- `.hero { overflow-x: clip; }` — horizontal containment without clipping vertical scroll affordances
- `.hero-glow` — `100vw` / `115vw` replaced with `100%` (parent-relative)
- Compact `.hero-inner` — keeps centered `max-width` but uses the same `--page-gutter` padding
- Mobile menu width uses `calc(100% - 2 * var(--page-gutter))`

## QA viewports

Verify side gutters and no horizontal overflow at:

| Width | Mode |
|-------|------|
| 1280px | Desktop 2-col |
| 1101px | Desktop 2-col (breakpoint edge) |
| 1100px | Compact centered |
| 1024px | Compact |
| 900px | Compact |
| 768px | Compact |
| 390px | Compact mobile |

Check both dark and light themes. Topbar outer edges should roughly align with hero/page gutters.

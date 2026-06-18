# Scroll to Top Pill

Floating pill button that appears after the user scrolls past the hero and smooth-scrolls back to `#top`.

## Files

| File | Role |
|------|------|
| `src/components/ScrollToTop.jsx` | Visibility logic and click handler |
| `src/App.jsx` | Renders `<ScrollToTop />` alongside global chrome |
| `src/index.css` | `.scroll-to-top` pill styles (dark + light) |

## Behavior

- **Threshold:** `min(#top.offsetHeight × 0.35, 280px)`, with a **220px** fallback if the hero is missing.
- **Show:** After `window.scrollY` exceeds the threshold; fades and slides up via `.is-visible`.
- **Click:** `window.scrollTo({ top: 0, behavior: 'smooth' })` (also inherits `html { scroll-behavior: smooth; }`).
- **Accessibility:** `aria-label="Back to top"`, keyboard focus ring, chevron marked `aria-hidden`.

## Layout

- `position: fixed`, bottom-right with `clamp()` insets so it stays clear of centered footer social icons.
- `z-index: 95` — above page content and menu backdrop (`90`), below topbar (`100`) and mobile menu (`120`).

## Styling

Matches topbar / ghost button aesthetic:

- Pill shape (`border-radius: 999px`)
- Frosted dark glass (`--topbar-bg`, blur, `--shadow-card`)
- Light mode sharp frost (inset highlight, tight shadow) per `docs/light-mode-glass.md`
- Hover lift on the pill and inner chevron circle

## QA checklist

- [ ] Scroll ~220–280px on ~1440px and ~390px — pill appears (well before leaving hero)
- [ ] Click returns to hero smoothly
- [ ] Light and dark themes
- [ ] No overlap with footer social row (bottom-right placement)
- [ ] `npm run build` passes

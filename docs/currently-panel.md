# CurrentlyPanel

Shared component for the “Currently” highlight card shown in the hero (desktop) and About section (mobile).

## Data source

Content lives in `src/data/portfolioData.js` under the `currently` export:

- `label` — eyebrow text (e.g. “Currently”)
- `title` — headline
- `highlights` — bullet list items
- `stack` — tech stack pills

## Usage

```jsx
import CurrentlyPanel from './components/CurrentlyPanel';

// Hero sidebar (desktop layout)
<CurrentlyPanel />

// About intro (mobile only via `.about-currently` CSS)
<div className="about-currently">
  <CurrentlyPanel />
</div>
```

## Responsive behavior

| Viewport | Location |
|----------|----------|
| Desktop (`> 760px`) | Hero right column |
| Mobile (`≤ 760px`) | Top of About section, before the about grid |

Styles reuse existing `.hero-panel*` classes. Visibility is controlled in `index.css`, not in the component.

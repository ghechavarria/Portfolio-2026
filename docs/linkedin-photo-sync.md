# LinkedIn profile photo sync

Keeps the portfolio profile photo in sync with your public LinkedIn profile image. **Production** uses a Netlify Scheduled Function plus Netlify Blobs; **local dev** uses `npm run sync:linkedin` to write `public/assets/profile.jpg`.

The Topbar brand mark and About portrait both use `ProfileAvatar`, with `GH` initials as fallback when the image is missing or fails to load.

## Architecture

```
LinkedIn (og:image) ──► sync-linkedin-photo (scheduled) ──► Netlify Blobs (profile-photo store)
                                                                    │
                                                                    ▼
                                              profile-photo (GET) ◄── ProfileAvatar
```

| Piece | Path | Role |
|-------|------|------|
| Shared fetch logic | `scripts/lib/linkedin-photo.js` | Resolve URL, download image, SHA-256 hash |
| Local sync | `scripts/sync-linkedin-photo.js` | Writes `public/assets/profile.jpg` for dev |
| Scheduled sync | `netlify/functions/sync-linkedin-photo.mjs` | Weekly fetch → compare hash → update blob |
| Image endpoint | `netlify/functions/profile-photo.mjs` | Serves blob with cache headers |
| UI | `src/components/ProfileAvatar.jsx` | `VITE_PROFILE_PHOTO_URL` or `/assets/profile.jpg` |

### Why Netlify Blobs?

Static sites cannot write to `public/` at runtime. Blobs persist the image across deploys without committing binary files or triggering rebuilds. Netlify Blobs is included on all Netlify plans (no separate addon).

## Schedule

Configured in `netlify.toml`:

```toml
[functions."sync-linkedin-photo"]
  schedule = "0 9 * * 0"
```

**Netlify cron uses UTC.** The expression above runs every **Sunday at 09:00 UTC**, which is **4:00 AM EST** (UTC−5). During daylight saving (EDT, UTC−4), that is **5:00 AM local**.

| Target local time | Cron (UTC) |
|-------------------|------------|
| Sunday 4:00 AM EST | `0 9 * * 0` |
| Sunday 4:00 AM EDT | `0 8 * * 0` |
| Sunday 4:00 AM UTC | `0 4 * * 0` |

Adjust `netlify.toml` if you prefer a different timezone offset.

Scheduled functions run on **published** deploys only. You can also trigger a run manually: Netlify dashboard → **Functions** → `sync-linkedin-photo` → **Run now**.

## Netlify setup

1. Connect the repo to Netlify (or update an existing site).
2. Confirm `netlify.toml` is at the site root (`Portfolio 2026`).
3. Build command: `npm run build`, publish directory: `dist` (set in `netlify.toml`).
4. Set environment variables in **Site configuration → Environment variables** (or rely on defaults from `portfolioData.js`):

| Variable | Required | Purpose |
|----------|----------|---------|
| `LINKEDIN_PROFILE_URL` | No | Override `site.linkedin` in `portfolioData.js` |
| `LINKEDIN_IMAGE_URL` | No | Direct CDN URL when LinkedIn blocks scraping |

`VITE_PROFILE_PHOTO_URL` is set in `netlify.toml` for production builds so `ProfileAvatar` requests `/.netlify/functions/profile-photo`.

5. Deploy. After the first scheduled run (or a manual **Run now**), the blob store is populated and the live site shows the photo.

### First photo before schedule

Either:

- Run **Run now** on `sync-linkedin-photo` in the Netlify UI after deploy, or
- Run `npm run sync:linkedin` locally (updates `public/assets/profile.jpg` for dev only; does not seed Blobs)

To seed production immediately, use **Run now** on the scheduled function once.

## Local development

```bash
npm install
npm run sync:linkedin   # optional: refresh public/assets/profile.jpg
npm run dev
```

Without `VITE_PROFILE_PHOTO_URL`, dev serves `/assets/profile.jpg` from `public/`. Use `netlify dev` to exercise functions locally (requires [Netlify CLI](https://docs.netlify.com/cli/get-started/)).

## Commands

```bash
# One-off sync to public/assets/profile.jpg (local dev)
npm run sync:linkedin
```

`sync:linkedin:watch` (local node-cron) was removed in favor of the Netlify schedule.

## How fetch works

1. Resolve profile URL from `LINKEDIN_PROFILE_URL` or `site.linkedin` in `portfolioData.js`.
2. Fetch public profile HTML with a browser-like `User-Agent`, read `og:image` (or `twitter:image`).
3. Download the image from LinkedIn’s CDN.
4. Compare SHA-256 hash with the stored copy (file locally, blob on Netlify).
5. Skip write if unchanged.

Set `LINKEDIN_IMAGE_URL` to the direct CDN URL (right-click photo on LinkedIn → copy image address) if scraping fails.

## UI wiring

| Location | Component | Production source | Dev fallback |
|----------|-----------|-------------------|--------------|
| Topbar brand mark | `ProfileAvatar` (`brand-mark`) | `/.netlify/functions/profile-photo` | `/assets/profile.jpg` |
| About portrait | `ProfileAvatar` (`portrait-frame`) | same | same |

Default path in `portfolioData.js`: `site.profilePhoto = '/assets/profile.jpg'`.

## Troubleshooting

| Symptom | Action |
|---------|--------|
| Sync fails with “Could not find og:image” | Set `LINKEDIN_IMAGE_URL` in Netlify env |
| HTTP 429 / 999 from LinkedIn | Wait and retry; use direct image URL fallback |
| Site shows `GH` initials | Run sync manually; confirm blob exists via function logs |
| Photo works locally, not on Netlify | Trigger **Run now** on `sync-linkedin-photo`; check function logs |
| Wrong run time | Adjust cron in `netlify.toml` (UTC); redeploy |

## Related

- `docs/website.md` — general site maintenance
- `docs/linkedin-sync.md` — weekly portfolio *content* sync (separate from photo)

# LinkedIn → Portfolio sync

Weekly automation keeps [Portfolio 2026](https://github.com/ghechavarria/Portfolio-2026) aligned with the public LinkedIn profile.

**LinkedIn URL:** https://www.linkedin.com/in/grace-hechavarria-a817b2209

**Primary data file:** `src/data/portfolioData.js`

Resume files (LaTeX, PDF, markdown) live in `docs/resume/` and are **not** part of this sync.

---

## What syncs (field mapping)

LinkedIn does not expose a stable public API without OAuth. The automation agent reads the **public profile page** (browser snapshot or fetch) and maps visible sections into portfolio data.

| LinkedIn section | `portfolioData.js` export | Notes |
|------------------|---------------------------|-------|
| Name (top card) | `site.name` | Keep display name consistent |
| Headline | `site.roles[]`, `site.summary`, `currently.title` | Split headline into role chips + summary; update “Currently” title if it reflects current focus |
| About | `about.paragraphs`, `site.summary` | Prefer LinkedIn About for long-form; keep `summary` as one-line site tagline |
| Location | `site.location` | City/region only on site |
| Experience (each role) | `experience[]` | Map: `title` ← job title, `org` ← company · location, `date` ← dates, `description` ← role description |
| Education | `education[]` | Map: `degree`, `meta` (field of study), `school` (institution · year) |
| Licenses & certifications | `skills.certifications[]` | One string per cert |
| Skills (endorsed list) | `skills.languages[]`, `skills.systems[]` | Split into languages vs tools/systems using judgment; do not drop ERP-specific items unless removed on LinkedIn |
| Featured / current role context | `currently.highlights[]`, `currently.stack[]` | Derive from latest role + skills; stack is curated, not auto-imported wholesale |
| Contact links | `site.github`, `site.linkedin`, `site.email`, `site.website` | Email/phone usually not on public LinkedIn; do not overwrite email unless user confirms |
| Languages | `site.languages` | From LinkedIn Languages section if present |
| Stats / hero chips | `site.stats` | **Manual curation** — years, degree progress; update only when education dates change on LinkedIn |
| Projects / hackathons | `projects[]` | **Not on LinkedIn** — do not delete; only add if LinkedIn Featured clearly lists a new project |
| Nav, labels, tones | `navLinks`, `about.label`, project `tone` | Site UI only — never overwrite from LinkedIn |

### Intentionally out of scope

- Profile photo (`public/assets/me.png`) — separate asset workflow
- Theme, layout, component copy (`about.heading`, `currently.label`)
- GitHub activity or repos
- `docs/resume/` — tracked resume files, updated separately
- `docs/sample resumes/` — gitignored reference resumes

---

## How the agent checks LinkedIn

1. **Open public profile** in a browser (preferred) or attempt HTTP fetch.
2. **Capture:** name, headline, about, experience, education, certifications, skills, location, languages.
3. **Compare** each mapped field to `src/data/portfolioData.js`.
4. **Update** only changed fields; preserve portfolio-specific wording where LinkedIn text is shorter or generic.
5. **Run** `npm run build` in the repo root (`Portfolio 2026`).
6. **Report** a concise diff summary; open a PR if configured — **do not commit to main directly** unless the automation explicitly allows it.

### LinkedIn access limitations

| Issue | Impact | Mitigation |
|-------|--------|------------|
| Login wall | Logged-out visitors may see limited or no content | Use a browser session where you are logged into LinkedIn, or run automation from a machine with an active LinkedIn session |
| Rate limiting / bot detection | Snapshots fail or show challenges | Retry once; if blocked, stop and report — do not hammer the page |
| No public API | No structured JSON export | Manual field extraction from page snapshot |
| Headline ≠ summary | One line on LinkedIn vs multi-paragraph About | Merge thoughtfully; do not duplicate verbatim in three places |
| Duplicate Broward roles | LinkedIn may list one or two current titles | Keep both site roles if both still appear on LinkedIn |
| Projects | Hackathons rarely on LinkedIn | Never remove `projects[]` entries during sync |

---

## Diff and update process

```
LinkedIn (browser) → extract fields → diff vs portfolioData.js
       → edit files → npm run build → summarize changes → PR (optional)
```

### Editing rules

- Match existing code style in `portfolioData.js` (single quotes, trailing commas).
- Keep `experience` in reverse chronological order.
- Date format on site: `YYYY – Present` or `YYYY – YYYY` (en dash).
- If LinkedIn removes a job, **confirm** before deleting from the portfolio (stale LinkedIn vs intentional removal).

### Build verification

```bash
cd "Portfolio 2026"   # or repo root if automation checks out Portfolio-2026
npm run build
```

Build must exit 0 before opening a PR. Fix any syntax errors in `portfolioData.js` immediately.

### Git / PR workflow

- **Repo:** `ghechavarria/Portfolio-2026`
- **Branch:** `linkedin-sync/YYYY-MM-DD` (use run date)
- **Commit message:** `sync: update portfolio from LinkedIn (YYYY-MM-DD)`
- **PR title:** `Weekly LinkedIn sync — YYYY-MM-DD`
- **PR body:** bullet list of changed sections; note any fields skipped due to LinkedIn access issues
- If no differences: close run with “No changes detected” — no PR

---

## Cursor Automation (weekly Sunday)

| Setting | Value |
|---------|--------|
| **Name** | Weekly LinkedIn → Portfolio sync |
| **Description** | Compares Grace’s LinkedIn profile to portfolio data every Sunday, updates files if needed, verifies build, and summarizes diffs. |
| **Trigger** | Schedule — custom cron: `0 10 * * 0` (10:00 UTC every Sunday). Adjust hour in the Automations editor for your timezone (cron has no timezone field). |
| **Repo** | `ghechavarria/Portfolio-2026` |
| **Tools** | Agent default tools (shell, file edit). Browser for LinkedIn is used via agent environment when available — not a separate MCP row in the editor. |
| **To finish in editor** | Confirm repo + branch, Cloud Agent compute if desired, save automation |

### Agent instructions (paste into automation prompt)

```
Weekly LinkedIn → Portfolio sync for Portfolio 2026.

LinkedIn: https://www.linkedin.com/in/grace-hechavarria-a817b2209

Read docs/linkedin-sync.md and scripts/sync-linkedin.md for field mapping and checklist.

1. Fetch the public LinkedIn profile (browser snapshot preferred). If login is required, use an authenticated browser session. If blocked, stop and report — do not scrape repeatedly.

2. Compare LinkedIn content to src/data/portfolioData.js only.

3. Update only fields that changed per the mapping table in docs/linkedin-sync.md. Do not remove projects[] unless explicitly removed on LinkedIn Featured. Preserve site-only UI fields. Do not edit docs/resume/ or docs/sample resumes/.

4. Run npm run build in the repository root. Fix errors until build passes.

5. If changes were made:
   - Create branch linkedin-sync/YYYY-MM-DD
   - Commit with message: sync: update portfolio from LinkedIn (YYYY-MM-DD)
   - Open a PR against default branch with a summary of diffs
   Do NOT push directly to main.

6. If no changes: report "No changes detected" and stop.

7. End with a short summary: what changed, what was skipped, and any LinkedIn access limitations hit.
```

### Manual setup (when editor is not opened from chat)

1. In Cursor, open **Automations** → **New automation**.
2. Set trigger to **On a schedule** → custom cron `0 10 * * 0`.
3. Set repository to **ghechavarria/Portfolio-2026**.
4. Paste the agent instructions above into the prompt field.
5. Enable **memory** if you want the agent to remember past sync quirks.
6. Save and enable the automation.

### Opening the editor from Agents chat

When `cursor-app-control` is available in the Agents Window, ask to create the automation from this doc; the agent can call **open automation** with a pre-filled workflow. This chat session may not have that integration — use manual setup above if the editor did not open.

---

## Related files

| File | Purpose |
|------|---------|
| `scripts/sync-linkedin.md` | Step-by-step checklist for the automation agent |
| `src/data/portfolioData.js` | Site content consumed by React components |
| `docs/website.md` | General site maintenance notes |

---

## Troubleshooting

- **Build fails after sync:** Usually a missing quote or comma in `portfolioData.js`. Run build locally and fix syntax.
- **LinkedIn shows different content than site:** LinkedIn is source of truth for employment/education/certs; site may have richer project and copy details.
- **Automation never opens PR:** Confirm GitHub integration and branch permissions on the Cursor automation repo settings.

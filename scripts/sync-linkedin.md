# LinkedIn sync — agent checklist

Run weekly (Sunday) or on demand. Full mapping: `docs/linkedin-sync.md`.

**Profile URL:** https://www.linkedin.com/in/grace-hechavarria-a817b2209  
**Repo root:** `Portfolio 2026` (package.json at root)

---

## 1. Prepare

- [ ] Read `docs/linkedin-sync.md` (field mapping + limits)
- [ ] Confirm working directory is the Portfolio-2026 repo root
- [ ] Note today’s date for branch name `linkedin-sync/YYYY-MM-DD`

## 2. Fetch LinkedIn

- [ ] Open profile in browser (logged-in session if public view is limited)
- [ ] Capture: name, headline, about, location, experience, education, certifications, skills, languages
- [ ] If login wall, CAPTCHA, or empty page → **stop**, report limitation, do not retry in a loop

## 3. Diff

Compare LinkedIn → `src/data/portfolioData.js`:

- [ ] `site` — name, location, languages, summary (if About/headline changed)
- [ ] `currently` — title, highlights, stack (if current role context changed)
- [ ] `about.paragraphs` — if About section changed materially
- [ ] `skills` — languages, systems, certifications
- [ ] `experience[]` — all roles (title, org, date, description)
- [ ] `education[]` — degree, meta, school
- [ ] `projects[]` — **skip unless** new Featured project on LinkedIn; **never delete** hackathon entries without explicit LinkedIn removal

## 4. Update

- [ ] Edit only changed fields; keep existing quote style and ordering
- [ ] Use en dash in dates: `2021 – Present`
- [ ] Do not change `site.email` unless user confirmed a new email on LinkedIn

## 5. Verify

```bash
npm run build
```

- [ ] Build exits 0
- [ ] Fix any syntax errors and rebuild

## 6. Publish (if changes)

- [ ] `git checkout -b linkedin-sync/YYYY-MM-DD`
- [ ] Stage `src/data/portfolioData.js` (and `docs/linkedin-sync.md` only if you updated docs)
- [ ] Commit: `sync: update portfolio from LinkedIn (YYYY-MM-DD)`
- [ ] Push branch and open PR — **do not** commit to main from automation unless explicitly configured

## 7. Report

Include in completion message:

- Fields updated (or “No changes detected”)
- Fields skipped (projects, stats, email, etc.)
- LinkedIn access issues if any
- Build status
- PR link if created

---

## Quick reference — experience row shape

```js
{
  date: 'YYYY – Present',
  title: 'Job Title',
  org: 'Company · City, ST',
  description: 'One or two sentences from LinkedIn role description.',
}
```

## Quick reference — education row shape

```js
{
  degree: 'MS in Information Technology',
  meta: 'Software Development',
  school: 'Florida International University · Projected 2027',
}
```

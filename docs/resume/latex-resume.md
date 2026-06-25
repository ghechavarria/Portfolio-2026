# LaTeX Resume

`Grace_Hechavarria_Resume.tex` is a one-page LaTeX resume for Grace Hechavarria.

## Sources

| Source | What was used |
|--------|----------------|
| `resume.md` | Roles, education, skills, certifications, projects, contact links |
| `../sample resumes/Old_Resume_GraceHechavarria.pdf` | Phone number, Code Explorers internship, Power UP Personnel payroll role, expanded WordPress intern bullets |
| `../sample resumes/Jakes Resume.pdf` | Layout and LaTeX structure (Jake's Resume template) |
| `../sample resumes/IBM_Resume.pdf` | Bullet style and section ordering reference |

## Compile

### Overleaf (recommended if LaTeX is not installed locally)

1. Create a new blank project on [Overleaf](https://www.overleaf.com).
2. Upload `Grace_Hechavarria_Resume.tex` from `docs/resume/`.
3. Set the main document to `Grace_Hechavarria_Resume.tex`.
4. Click **Recompile** to produce `Grace_Hechavarria_Resume.pdf`.

### Local (TeX Live / MiKTeX)

```bash
cd "docs/resume"
pdflatex Grace_Hechavarria_Resume.tex
```

Run `pdflatex` twice if references or bookmarks need a second pass.

## Updating content

1. Edit `resume.md` in this folder.
2. Mirror those updates in `Grace_Hechavarria_Resume.tex`.
3. Recompile to refresh the PDF.

## Sections

- **Education** — MS (FIU, projected 2027), BAS and AS (Broward College)
- **Experience** — Broward College Analyst/ERP Programmer and Technical Developer roles, lab support, WordPress intern, 3D HoloGroup, Code Explorers, Power UP Personnel
- **Leadership** — PlutoHacks organizer (2020–2025)
- **Projects** — Client websites (Mooric ERP, Power UP Personnel)
- **Hackathons** — PlutoHacks 2019 (Winner), Technica/Silly Hacks/ShellHacks/BrickHack submissions and wins
- **Technical Skills & Certifications** — Languages, frameworks, systems/tools, design tools (Figma, Illustrator), CIW and CompTIA certs

# Contact form (Netlify)

The contact section opens a modal form instead of a `mailto:` link. Submissions are handled by [Netlify Forms](https://docs.netlify.com/forms/setup/).

## Files

| File | Role |
|------|------|
| `index.html` | Hidden `contact` form so Netlify detects fields at build time |
| `src/components/ContactFormModal.jsx` | Modal UI and AJAX submission |
| `src/components/Contact.jsx` | Opens the modal from the Contact CTA |

## Form fields

- `name` (required)
- `email` (required)
- `message` (required)
- `bot-field` (honeypot, hidden)

## Email notifications

After deploy, in the Netlify dashboard:

1. **Site configuration → Forms → Form notifications**
2. Add **Email notification** for the `contact` form
3. Set recipient to `gracehechavarria@gmail.com`
4. Use the submitter's `email` field as the reply-to address when prompted

Netlify delivers form submissions to that inbox; the address is not hard-coded in the repo.

## Local testing

Netlify Forms only process submissions on Netlify (or with `netlify dev`). Plain `npm run dev` will show the modal but submission may fail until deployed or run via Netlify CLI.

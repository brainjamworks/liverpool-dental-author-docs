# liverpool-dental-author-docs

Course author guide for the Liverpool Dental Learning Hub.

Intended audience: **Liverpool Dental staff building CPD courses in Studio** (`studio.learning.endo360.uk`). Not for learners — learner help lives at `learning.endo360.uk/help`.

Built with [Astro Starlight](https://starlight.astro.build/).

## Local dev

```bash
npm install
npm run dev    # http://localhost:4321
```

## Content

Pages live under `src/content/docs/`, organised to mirror the upstream
[Open edX Educators Documentation](https://docs.openedx.org/en/latest/educators/index.html).

Each page is a stub with:

- a short Liverpool-Dental-flavoured intro,
- a screenshot placeholder,
- a link to the upstream Open edX source.

The Liverpool Dental Open edX deployment is mostly standard, so the upstream
wording is broadly correct — the main job is **replacing screenshots** with
ones taken in the Liverpool theme, and tightening wording where useful.

## Branding

- Primary: `#212b58` (Liverpool Blue)
- Accent: `#00A689` (Teal Green)
- Font: Poppins (matches LMS legacy theme)

Tokens live in `src/styles/brand.css`.

## Hosting

GitHub Pages at `authors.learning.endo360.uk`. The workflow at
`.github/workflows/deploy.yml` builds the Astro site and publishes to Pages
on every push to `main`.

### One-time setup (per environment)

1. Create the repo at `brainjamworks/liverpool-dental-author-docs` and push
   `main`.
2. **Repo → Settings → Pages → Build and deployment → Source**: select
   *GitHub Actions*.
3. **Repo → Settings → Pages → Custom domain**: enter
   `authors.learning.endo360.uk`. GitHub creates a verification challenge.
4. In Route 53, add:
   - A verification `TXT` record (per GitHub's challenge).
   - A `CNAME` `authors.learning.endo360.uk` →
     `brainjamworks.github.io`.
5. Back in Pages settings, tick **Enforce HTTPS** once the cert provisions
   (5–15 min).

The repo already contains:

- `public/CNAME` — written into `dist/` at build time, so Pages keeps the
  custom domain on every deploy.
- `astro.config.mjs` `site: 'https://authors.learning.endo360.uk'` —
  required for canonical URLs and sitemap.

## Logo

Drop a Liverpool Dental logo at `src/assets/logo.png` before building.
The path is referenced in `astro.config.mjs`.

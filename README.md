# Astro Portfolio (migrated from React)

This project is a migration of the original **Vite + React + Tailwind** portfolio to **Astro (latest stable v5.17.x)** with Astro Content Collections.

- Astro latest release: **5.17.2** citeturn1search5
- Astro v6 exists as a **beta** at the time of writing. citeturn1search12turn0search16
- Tailwind v4 in Astro is recommended via the official **Vite plugin** rather than `@astrojs/tailwind`. citeturn1search8turn1search4

## Requirements

- Node.js 20+ recommended (Tailwind v4 + modern Astro setups).
- npm / pnpm / yarn.

## Install & run

```bash
npm install
npm run dev
```

## Content

All texts and structured content live in:

- `src/content/portfolio/profile.md`

And are loaded via:

- `src/pages/index.astro` using `getCollection('portfolio')`.

Schema lives in:

- `src/content/config.ts`

## Notes

- The projects filter pills are implemented with a tiny inline script (no React) and can optionally hide/show collage images based on tags.
- Resume “Certifications/Courses” and “Job Experiences” are placeholders in the original React project too; add your entries to the markdown frontmatter when ready and render them similarly to services/skills.

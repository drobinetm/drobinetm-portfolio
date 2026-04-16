# Astro Portfolio

A modern, high-performance portfolio website built with **Astro v5**, **Tailwind CSS v4**, and **Astro Content Collections**.

Live site: [https://drobinetm.github.io/drobinetm-portfolio](https://drobinetm.github.io/drobinetm-portfolio)

## Requirements

- Node.js 20+
- pnpm (recommended) / npm / yarn

## Install & run

```bash
pnpm install
pnpm dev
```

> The dev server runs at `http://localhost:4321/drobinetm-portfolio/` (note the base path).

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start the dev server |
| `pnpm build` | Type-check (`astro check`) and build to `dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm check:types` | Run Astro type-checker only |
| `pnpm lint` | Lint `src/` with Biome |
| `pnpm format` | Auto-format `src/` with Biome |

## Deploy to GitHub Pages

Deployments are automated via GitHub Actions on every push to `main`.

### One-time setup

1. Go to the repository **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main` — the workflow at `.github/workflows/deploy.yml` will build and publish automatically.

You can also trigger a deploy manually from the **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**.

### How it works

```
push to main
  └── build job
        ├── pnpm install --frozen-lockfile
        ├── astro check && astro build  →  dist/
        └── upload Pages artifact
  └── deploy job
        └── actions/deploy-pages  →  https://drobinetm.github.io/drobinetm-portfolio
```

### Configuration

The deploy URL and base path are set in `astro.config.mjs`:

```js
const SITE = 'https://drobinetm.github.io';
const BASE = '/drobinetm-portfolio'; // change to '/' for a custom domain
```

If you use a **custom domain** or publish from a **root repo** (`<username>.github.io`):

```js
const SITE = 'https://your-domain.com';
const BASE = '/';
```

### Public assets

All static assets (images, icons) live in `public/` and must be referenced using the `withBase` helper so paths resolve correctly under the base sub-path:

```astro
---
import { withBase } from '../../utils/withBase';
---
<img src={withBase('/photo.jpg')} alt="..." />
<img src={withBase(data.image)} alt="..." />  <!-- paths from profile.md -->
```

## Content

All texts and structured data live in a single file:

- `src/content/portfolio/profile.md`

Loaded in:

- `src/pages/index.astro` via `getCollection('portfolio')`

Schema defined in:

- `src/content/config.ts`

## Notes

- Tailwind v4 is integrated via the official Vite plugin (`@tailwindcss/vite`), not `@astrojs/tailwind`.
- Project filter pills use a small inline script — no framework dependency.
- Resume timeline entries are defined in the `resume.sections` frontmatter array in `profile.md`.

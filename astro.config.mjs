// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// GitHub Pages deployment config:
//   - `site`  → canonical URL used for sitemaps, OG tags, etc.
//   - `base`  → sub-path when the repo is NOT published at the account root
//               (e.g. username.github.io/<repo-name>).
//               Set to '/' only if you use a custom domain or the repo is
//               named exactly <username>.github.io.
const SITE = 'https://drobinetm.github.io';
const BASE = '/drobinetm-portfolio'; // change to '/' for custom domain or root repo

export default defineConfig({
  site: SITE,
  base: BASE,

  // Static output — no server required, perfect for GitHub Pages.
  output: 'static',

  build: {
    // Emit a trailing slash so every page is a real directory (index.html).
    // Avoids 404s on GitHub Pages when navigating directly to a route.
    format: 'directory',
  },

  vite: {
    plugins: [tailwind()],
  },
});

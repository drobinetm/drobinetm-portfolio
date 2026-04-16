/**
 * Prepend the Astro BASE_URL to a public asset path.
 *
 * Handles both cases Astro may produce:
 *   - BASE_URL with trailing slash:    "/drobinetm-portfolio/"
 *   - BASE_URL without trailing slash: "/drobinetm-portfolio"
 *
 * Usage:
 *   import { withBase } from '../../utils/withBase';
 *   <img src={withBase('/photo.jpg')} />
 *   <img src={withBase('photo.jpg')} />   // leading slash optional
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL ?? '/';
  // Normalise: ensure base ends with exactly one slash
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  // Normalise: strip leading slash from path to avoid double slashes
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${normalizedBase}${normalizedPath}`;
}

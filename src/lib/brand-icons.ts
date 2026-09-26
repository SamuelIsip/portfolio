/*
 * Brand logos from Simple Icons (CC0). Imported only in component frontmatter,
 * so the SVG paths are inlined at build time and nothing ships to the browser.
 * Slugs: https://simpleicons.org (e.g. "react", "postgresql").
 */
import * as simpleIcons from 'simple-icons';

type SimpleIcon = { title: string; path: string };
const registry = simpleIcons as unknown as Record<string, SimpleIcon>;

export function brandIcon(slug: string): SimpleIcon {
  const icon = registry[`si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`];
  // Fail the build rather than render an empty gap for a mistyped slug.
  if (!icon) throw new Error(`Unknown Simple Icons slug "${slug}"`);
  return icon;
}

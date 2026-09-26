# Portfolio — Samuel Isip

Single-page portfolio for a full stack developer, in Spanish (default), English and Romanian.
Design reference: `reference/` (structure, rhythm, palette — never copy its brand or content).

## Stack

- **Astro 7** + TypeScript strict, static output. Zero client JS unless a feature needs it.
- **Tailwind CSS v4** via `@tailwindcss/vite`. Tokens live in `@theme` (CSS variables), not in a JS config.
- Fonts via **fontsource** (self-hosted, variable): Schibsted Grotesk + Source Serif 4.
- `@astrojs/sitemap` for the sitemap. CSS is inlined (`build.inlineStylesheets: 'always'`).
- Hosting: **Cloudflare (free plan)**, connected to GitHub, serving `dist/` as a static site. **No adapter,
  no server routes** — keep it that way unless Samuel asks; it was tried and removed on purpose.
- Contact form posts to **Formspree** (`https://formspree.io/f/xzezjbgb`, the default of `PUBLIC_CONTACT_ENDPOINT`
  in `astro.config.mjs` → `env.schema`, read from `astro:env/client`) with our own fetch script — not
  `@formspree/ajax`, which would lose the localized messages. Validation rules live in `src/lib/contact.ts`.
- Motion: CSS + a small IntersectionObserver script. No animation library.

Every new dependency must be justified in the PR/summary. Prefer writing 20 lines over adding a package.

## Commands

```
npm run dev       # dev server on http://localhost:4321
npm run build     # astro check (types) + static build — must finish with 0 errors, 0 warnings
npm run preview   # serve dist/
```

## Where things live

| What | Where |
|---|---|
| All editable content (text, projects, jobs, links) | `src/data/*.ts` |
| Types for that content | `src/types/content.ts` |
| Interface copy (nav labels, buttons, form messages) | `src/i18n/ui.ts` |
| Locales, default locale, URL helpers | `src/i18n/config.ts` |
| Design tokens (color, type, spacing, radius, motion) | `src/styles/tokens.css` — the only place for raw values |
| Base styles, `.page` container, reveal utility | `src/styles/global.css` |
| `<head>`, SEO, fonts, skip link | `src/layouts/BaseLayout.astro` |
| Page composition (section order) | `src/components/HomePage.astro` |
| One component per section | `src/components/sections/` |
| Reusable UI pieces | `src/components/ui/` — `Section` (hairline + sticky title column + content), `StackList` (slash-separated list), `ProjectCase`, `Button`, `Icon`, `LanguageSwitcher`, `Landscape` |
| Formatting helpers (dates, Localized-or-string) | `src/lib/format.ts` |
| Contact form rules (limits, validation, honeypot) | `src/lib/contact.ts` + `src/scripts/contact-form.ts` |
| SEO: meta, Open Graph, hreflang, JSON-LD Person | `src/layouts/BaseLayout.astro`; `public/og.png`, `public/robots.txt` |
| Client scripts (menu, reveal, form) | `src/scripts/` |
| Images processed by astro:assets | `src/assets/` |
| Static files served as-is (favicon, CV, OG image) | `public/` |

Routes: `/` (es), `/en/`, `/ro/`. `src/pages/index.astro` and `src/pages/[lang]/index.astro` both render
`HomePage.astro`; never duplicate markup per language.

## Conventions

- **Content never goes in components.** A component receives `locale`, reads from `src/data/` and
  resolves text with `pick(value, locale)`. UI strings go through `useTranslations(locale)`.
- Every `Localized` value must have `es`, `en` and `ro`. TypeScript enforces it; don't bypass with casts.
- Unconfirmed content is marked with a `// PLACEHOLDER:` comment in `src/data/`. Keep that marker until
  Samuel confirms the value.
- Use token utilities (`bg-surface`, `text-muted`, `font-display`, `max-w-(--container-prose)`),
  never arbitrary hex/px values in components. Tailwind's default palette is disabled on purpose.
- Section components wrap their content in `ui/Section.astro` (gives `id`, `aria-labelledby`, hairline and
  the asymmetric grid); the id must match `src/data/navigation.ts`. Full-width content goes in `slot="full"`.
- Scroll reveal: add `data-reveal` to at most one block per section (or per project); never to every element.
- Components stay small; extract to `src/components/ui/` when markup repeats.
- Comments explain *why*, not *what*.
- Iterating: when asked to change one thing, edit only the relevant component or data file.
  Don't reformat or rewrite unrelated code.
- After each change: `npm run build` must pass with 0 errors and 0 warnings.

## Design system

- **Palette**: night navy + one blue accent (see `tokens.css`). The accent has two tones:
  `accent` for text/links on dark, `accent-strong` for fills behind white text (plain #2F80ED fails AA).
  Accent is only used for: active nav link, primary CTA, project stack, focus ring.
- **Type**: `font-display` (Schibsted Grotesk) for headings, nav, buttons, labels and data;
  `font-serif` (Source Serif 4) for reading text. Body defaults to serif.
  The hero name is the one oversized typographic moment (`text-display`).
- **Layout**: content column max 72rem; section titles sit in a narrow left column and content in the
  wide one (asymmetric). Prose max width `--container-prose`. Mobile first.
- **Shape**: radii 4–8px, 1px hairlines in `line`, no drop shadows — depth comes from `surface` tone.
- **Motion**: one orchestrated hero entrance + discreet scroll reveals (`data-reveal`), hovers that
  answer the user. Always respect `prefers-reduced-motion`.
- **Hero**: the name is the typographic moment; `src/components/ui/Landscape.astro` draws La Mancha at
  night (Sierra de Altomira, windmills, ploughed field) in SVG using the `land-*`/`mill` tokens.
  `src/assets/portrait.png` is the cut-out of `reference/portada/` — background removed, graded cooler,
  and **mirrored** so the cropped shoulder sits against the right edge of the viewport. Keep it anchored
  there (md+) with the bottom fade mask.
- **Projects** are client work under NDA: no screenshots; they are presented as short case studies
  with metrics.
- Numbering (01, 02…) only where content is a real sequence (timeline, project index).

### Forbidden (the "AI look")

- Purple/blue/cyan gradients, gradient text, glows, aurora backgrounds.
- Widespread glassmorphism; identical cards with soft shadows and large radii.
- Inter/Poppins or default system stacks as the design font; emojis as icons; generic icons in
  colored circles.
- Centered hero with "Hola, soy X 👋" + two buttons + particle background.
- 3-column grids with symmetric title+description in every section.
- Filler copy ("passionate about creating innovative experiences"). Copy is first person, direct and
  specific — numbers, names, what was actually done.
- Also avoid: ALL-CAPS tracked eyebrow above every heading, one highlighted word in a headline,
  `→` appended to every link, fade-up on every single element.

## Quality bar

- Responsive at 360, 768 and 1440 px, no horizontal scroll.
- Semantic HTML, AA contrast, visible focus, full keyboard navigation, `alt` on every image.
- Images through `astro:assets` (`<Image>`/`<Picture>`), lazy below the fold.
- Lighthouse 95+ in all categories. Metadata, Open Graph, hreflang, sitemap, favicon.

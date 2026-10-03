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
- Motion: CSS + two tiny scripts (IntersectionObserver reveal, hero typewriter). No animation library.
- **simple-icons** (devDependency) for tech logos in the stack list: read in component frontmatter via
  `src/lib/brand-icons.ts`, so paths are inlined at build time and no icon code ships to the browser.

Every new dependency must be justified in the PR/summary. Prefer writing 20 lines over adding a package.

## Commands

```
npm run dev       # dev server on http://localhost:4321 (/en/, /ro/ for other languages)
npm run build     # astro check (types) + static build — must finish with 0 errors, 0 warnings
npm run preview   # serve dist/
```

## Deploy

- Cloudflare Pages, connected to `github.com/SamuelIsip/portfolio`: build `npm run build`, output `dist`.
  Pushing to `main` deploys. No environment variables needed.
- Domain: `samuelisip.es`. If it changes, update `site` in `astro.config.mjs` and the sitemap URL in
  `public/robots.txt`.
- `PUBLIC_CONTACT_ENDPOINT` only needs setting (`.env` locally, Cloudflare build variable) to use a
  different Formspree form.

`README.md` is public-facing: a short, non-technical description of the portfolio. Keep technical
documentation here, not there.

## Where things live

| What | Where |
|---|---|
| All editable content (text, projects, jobs, links) | `src/data/*.ts` |
| Hero role + typed phrases, availability, CV path per language | `src/data/site.ts` (`role`, `roleRotation`, `availability`, `cv`) |
| Stack list and each item's logo (Simple Icons slug) | `src/data/skills.ts` |
| CV PDFs (one per language) | `public/cv/CV_Samuel_Isip_{es,en,ro}.pdf` |
| Types for that content | `src/types/content.ts` |
| Interface copy (nav labels, buttons, form messages) | `src/i18n/ui.ts` |
| Locales, default locale, URL helpers | `src/i18n/config.ts` |
| Design tokens (color, type, spacing, radius, motion) | `src/styles/tokens.css` — the only place for raw values |
| Base styles, `.page` container, reveal utility | `src/styles/global.css` |
| `<head>`, SEO, fonts, skip link | `src/layouts/BaseLayout.astro` |
| Page composition (section order) | `src/components/HomePage.astro` |
| One component per section | `src/components/sections/` |
| Reusable UI pieces | `src/components/ui/` — `Section` (hairline + sticky title column + content), `StackList` (slash-separated or grid list, optional muted logos), `ProjectCase`, `Button`, `Icon`, `LanguageSwitcher`, `Topography` |
| Formatting helpers (dates, Localized-or-string) | `src/lib/format.ts` |
| Brand logo lookup by slug (fails the build on unknown slugs) | `src/lib/brand-icons.ts` |
| Contact form rules (limits, validation, honeypot) | `src/lib/contact.ts` + `src/scripts/contact-form.ts` |
| SEO: meta, Open Graph, hreflang, JSON-LD Person | `src/layouts/BaseLayout.astro`; `public/og.png`, `public/robots.txt` |
| Client scripts (menu, reveal, typewriter, form) | `src/scripts/` — each ends with `export {}` so top-level names stay module-scoped |
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

- **Palette**: night navy (lifted from near-black on purpose) + one blue accent (see `tokens.css`). The accent has two tones:
  `accent` for text/links on dark, `accent-strong` for fills behind white text (plain #2F80ED fails AA).
  Accent is only used for: active nav link, primary CTA, project stack, focus ring, the monogram
  underline and the typewriter caret.
- **Type**: `font-display` (Schibsted Grotesk) for headings, nav, buttons, labels and data;
  `font-serif` (Source Serif 4) for reading text. Body defaults to serif.
  The hero name is the one oversized typographic moment (`text-display`).
- **Layout**: content column max 72rem; section titles sit in a narrow left column and content in the
  wide one (asymmetric). Prose max width `--container-prose`. Mobile first.
- **Shape**: radii 4–8px, 1px hairlines in `line`, no drop shadows — depth comes from `surface` tone.
- **Motion**: one orchestrated hero entrance + discreet scroll reveals (`data-reveal`), hovers that
  answer the user. Always respect `prefers-reduced-motion`.
- **Header**: the brand is a monogram ("SI", derived from `site.name`) with an accent underline, the same
  mark as the favicon. Samuel didn't want name + role there because the hero repeats them right below.
- **Hero**: name → role (typewriter) → headline → CTA + CV download → clients. No availability line here
  (it lives in the About fact sheet). The role line types/deletes `role` + `roleRotation`; the animated
  span is `aria-hidden` with the plain role in `sr-only` text, and reduced motion keeps it static.
  `src/components/ui/Topography.astro` draws a contour map of an imagined Sierra de Altomira (hairlines in
  the `contour*` tokens, every fourth line stronger), computed at build time by `src/lib/contours.ts`
  (marching squares, no dependency). It covers the hero fading in and out (`fade="both"`), and is reused
  as a band above the footer and on the 404. It replaced a windmill landscape Samuel found too literal.
  `src/assets/portrait.png` is the cut-out of `reference/portada/` — background removed, graded cooler,
  and **mirrored** so the cropped shoulder sits against the right edge of the viewport.
  - Phones (< md): portrait **behind the text** at 25 % opacity, fading out downwards, so it is visible
    on first load without scrolling (Samuel's choice among 3 mocked options).
  - md+: full opacity, anchored bottom-right of the section with the bottom fade mask.
- **Stack list**: each tool shows its logo small (0.72em) and in `muted` grey before the name — never in
  brand colours (keeps the single-accent palette; chosen over brand-colour and watermark variants).
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

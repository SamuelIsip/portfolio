# Samuel Isip — portfolio

Personal single-page site in Spanish, English and Romanian. Built with Astro, TypeScript and Tailwind CSS.

## Run it

Requires Node 22.12+.

```
npm install
npm run dev       # http://localhost:4321  (/en/ and /ro/ for other languages)
npm run build     # type-check + build into dist/
npm run preview   # serve the build
```

## Edit content

You don't need to touch components to change what the site says:

| To change… | Edit |
|---|---|
| Name, role, intro, about, availability, languages | `src/data/site.ts` |
| Projects | `src/data/projects.ts` |
| Jobs and education | `src/data/experience.ts` |
| Stack | `src/data/skills.ts` |
| GitHub / LinkedIn / email links | `src/data/social.ts` |
| Buttons, menu labels, form messages | `src/i18n/ui.ts` |
| CV PDF | `public/cv/` (and the path in `site.ts`) |

Every text has an `es`, `en` and `ro` version. Values marked `// PLACEHOLDER:` still need confirming.

To change the look globally (colors, fonts, sizes, spacing), edit `src/styles/tokens.css`.

## Contact form

Copy `.env.example` to `.env` and fill it in. In production, set the same variables as Cloudflare secrets.

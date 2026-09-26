# Samuel Isip — portfolio

Personal single-page site in Spanish, English and Romanian. Built with Astro, TypeScript and Tailwind CSS.
Fully static: the output in `dist/` can be served by any static host.

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
| Link preview image | `public/og.png` (1200×630) |

Every text has an `es`, `en` and `ro` version. Values marked `// PLACEHOLDER:` still need confirming.

To change the look globally (colors, fonts, sizes, spacing), edit `src/styles/tokens.css`.

## Contact form

The form posts to [Formspree](https://formspree.io) (free plan: 50 messages/month), so no server is needed.
The endpoint `https://formspree.io/f/xzezjbgb` is the default in `astro.config.mjs`; nothing to configure.
To use a different form, set `PUBLIC_CONTACT_ENDPOINT` (in `.env` locally, or as a Cloudflare build variable).

## Deploy on Cloudflare (free plan)

1. Push this repository to GitHub.
2. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**, pick the repository.
3. Build settings: framework preset **Astro**, build command `npm run build`, output directory `dist`.
4. Deploy.
5. When you buy the domain: **Custom domains → Set up a domain**. If it isn't `samuelisipcv.com`,
   update `site` in `astro.config.mjs` and the sitemap URL in `public/robots.txt`.

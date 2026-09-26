// @ts-check
import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://samuelisipcv.com',
  // A single page with ~15 kB of CSS: inlining it saves a render-blocking request.
  build: { inlineStylesheets: 'always' },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'ro'],
    routing: { prefixDefaultLocale: false },
  },
  env: {
    schema: {
      // Form endpoint (e.g. https://formspree.io/f/xxxx). Public by nature: it ships in the HTML.
      PUBLIC_CONTACT_ENDPOINT: envField.string({ context: 'client', access: 'public', optional: true, url: true }),
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404/'),
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES', en: 'en', ro: 'ro-RO' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

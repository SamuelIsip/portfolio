// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://samuelisipcv.com',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'ro'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
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

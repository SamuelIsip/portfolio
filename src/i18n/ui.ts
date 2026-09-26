import type { Localized } from '@/types/content';
import type { Locale } from './config';

/** Interface copy (labels, buttons, messages). Portfolio content lives in src/data/. */
export const ui = {
  'a11y.skip': {
    es: 'Saltar al contenido',
    en: 'Skip to content',
    ro: 'Sari la conținut',
  },
  'a11y.language': {
    es: 'Idioma',
    en: 'Language',
    ro: 'Limbă',
  },
  'nav.label': {
    es: 'Principal',
    en: 'Main',
    ro: 'Principal',
  },
  'nav.about': { es: 'Sobre mí', en: 'About', ro: 'Despre mine' },
  'nav.skills': { es: 'Stack', en: 'Stack', ro: 'Stack' },
  'nav.projects': { es: 'Proyectos', en: 'Work', ro: 'Proiecte' },
  'nav.experience': { es: 'Experiencia', en: 'Experience', ro: 'Experiență' },
  'nav.contact': { es: 'Contacto', en: 'Contact', ro: 'Contact' },
  'nav.cta': { es: 'Escríbeme', en: 'Get in touch', ro: 'Scrie-mi' },
  'nav.open': { es: 'Abrir menú', en: 'Open menu', ro: 'Deschide meniul' },
  'nav.close': { es: 'Cerrar menú', en: 'Close menu', ro: 'Închide meniul' },
} satisfies Record<string, Localized>;

export type UiKey = keyof typeof ui;

/** Returns a translator bound to one locale: `const t = useTranslations(locale); t('nav.about')`. */
export function useTranslations(locale: Locale) {
  return (key: UiKey): string => ui[key][locale];
}

/** Picks the current language from any Localized value in src/data/. */
export function pick<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

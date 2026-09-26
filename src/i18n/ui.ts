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
  'nav.menu': { es: 'Menú', en: 'Menu', ro: 'Meniu' },
  'nav.home': { es: 'Inicio', en: 'Home', ro: 'Acasă' },

  'hero.cta': { es: 'Ver proyectos', en: 'See my work', ro: 'Vezi proiectele' },
  'hero.cv': { es: 'Descargar CV (PDF)', en: 'Download CV (PDF)', ro: 'Descarcă CV-ul (PDF)' },
  /** Shown instead of hero.cv when the CV isn't available in the visitor's language. */
  'hero.cvOtherLang': {
    es: 'Descargar CV (PDF)',
    en: 'Download CV (PDF, in Spanish)',
    ro: 'Descarcă CV-ul (PDF, în spaniolă)',
  },
  'hero.clients': {
    es: 'He desarrollado software para',
    en: 'I have built software for',
    ro: 'Am dezvoltat software pentru',
  },
  'hero.portraitAlt': {
    es: 'Samuel Isip, con las gafas sobre la cabeza y un polo blanco',
    en: 'Samuel Isip with glasses pushed up, wearing a white polo shirt',
    ro: 'Samuel Isip, cu ochelarii ridicați pe cap, purtând un tricou polo alb',
  },
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

export const locales = ['es', 'en', 'ro'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

/** Native names, so each visitor recognises their own language in the switcher. */
export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  ro: 'Română',
};

/** BCP 47 tags for <html lang>, hreflang and Open Graph. */
export const localeTags: Record<Locale, string> = {
  es: 'es-ES',
  en: 'en',
  ro: 'ro-RO',
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

/** Home URL for a locale; the default locale lives at the root. */
export function localePath(locale: Locale, hash = ''): string {
  const base = locale === defaultLocale ? '/' : `/${locale}/`;
  return hash ? `${base}#${hash}` : base;
}

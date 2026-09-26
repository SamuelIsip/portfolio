import { localeTags, type Locale } from '@/i18n/config';
import type { Localized, YearMonth } from '@/types/content';

/** Resolves values that are either language-neutral strings or Localized. */
export function text(value: string | Localized, locale: Locale): string {
  return typeof value === 'string' ? value : value[locale];
}

/** "2025-12" → "dic 2025" / "Dec 2025" / "dec. 2025". */
export function formatMonth(value: YearMonth, locale: Locale): string {
  const [year, month] = value.split('-').map(Number);
  return new Intl.DateTimeFormat(localeTags[locale], { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(Date.UTC(year, month - 1, 1)),
  );
}
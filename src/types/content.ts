import type { Locale } from '@/i18n/config';

/** A value written once per language. */
export type Localized<T = string> = Record<Locale, T>;

/** "YYYY-MM"; `null` as an end date means "present". */
export type YearMonth = `${number}-${number}`;

export interface Site {
  name: string;
  fullName: string;
  role: Localized;
  /** Extra phrases the hero types after `role`, in order. */
  roleRotation: Localized<string[]>;
  location: string;
  timeZone: string;
  email: string;
  /** As stated in the CV; kept explicit rather than computed from the first job. */
  experienceYears: number;
  /** Hero sentence: what I build and for whom. */
  headline: Localized;
  /** About section, one string per paragraph. */
  about: Localized<string[]>;
  availability: Localized;
  languages: Localized<{ name: string; level: string }[]>;
  /** Companies I have shipped work for, shown in the hero. */
  clients: string[];
  /** CV PDF path per language, under public/. */
  cv: Localized;
  seo: { title: Localized; description: Localized };
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail';
}

export interface StackItem {
  name: string;
  /** Simple Icons slug, shown as a small muted logo before the name. */
  icon?: string;
}

export interface SkillGroup {
  title: Localized;
  items: StackItem[];
}

export interface Metric {
  /** Plain string for numbers ("−70 %"), Localized when the value is a word. */
  value: string | Localized;
  label: Localized;
}

export interface Project {
  slug: string;
  title: Localized;
  client: string;
  summary: Localized;
  /** Case-study beats: what was wrong, what I did. */
  problem: Localized;
  work: Localized;
  metrics?: Metric[];
  stack: string[];
  links?: { demo?: string; repo?: string };
  /** The first featured project gets the full-width layout. */
  featured?: boolean;
}

export interface Job {
  role: Localized;
  company: string;
  context?: Localized;
  start: YearMonth;
  end: YearMonth | null;
  highlights: Localized<string[]>;
}

export interface Education {
  title: Localized;
  start: YearMonth;
  end: YearMonth;
}

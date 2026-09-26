import type { UiKey } from '@/i18n/ui';

/** In-page anchors, in page order. `id` must match the section's id attribute. */
export const navigation: { id: string; label: UiKey }[] = [
  { id: 'about', label: 'nav.about' },
  { id: 'skills', label: 'nav.skills' },
  { id: 'projects', label: 'nav.projects' },
  { id: 'experience', label: 'nav.experience' },
  { id: 'contact', label: 'nav.contact' },
];

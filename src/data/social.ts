import type { SocialLink } from '@/types/content';
import { site } from './site';

export const social: SocialLink[] = [
  // PLACEHOLDER: replace with your real GitHub profile, or delete this entry.
  { label: 'GitHub', href: 'https://github.com/samuelisip', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/samuelisip', icon: 'linkedin' },
  { label: 'Email', href: `mailto:${site.email}`, icon: 'mail' },
];

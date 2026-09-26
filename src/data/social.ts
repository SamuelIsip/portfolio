import type { SocialLink } from '@/types/content';
import { site } from './site';

export const social: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/SamuelIsip', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/samuelisip', icon: 'linkedin' },
  { label: 'Email', href: `mailto:${site.email}`, icon: 'mail' },
];

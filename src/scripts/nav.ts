/*
 * Header behaviour: mobile menu, hairline once the page scrolls,
 * and aria-current on the nav link of the section in view.
 */
const header = document.querySelector<HTMLElement>('[data-header]');
const toggle = header?.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.getElementById('mobile-menu');

if (header && toggle && menu) {
  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';

  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', (open ? toggle.dataset.labelClose : toggle.dataset.labelOpen) ?? '');
    menu.hidden = !open;
  };

  toggle.addEventListener('click', () => {
    setOpen(!isOpen());
    if (isOpen()) menu.querySelector<HTMLElement>('a')?.focus();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  menu.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).closest('a[href^="#"]')) setOpen(false);
  });

  // The menu only exists below the lg breakpoint; don't leave it open after a resize.
  matchMedia('(min-width: 64rem)').addEventListener('change', (event) => {
    if (event.matches) setOpen(false);
  });

  const onScroll = () => header.toggleAttribute('data-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]')];
const sections = [...new Set(links.map((link) => link.hash.slice(1)))]
  .map((id) => document.getElementById(id))
  .filter((section): section is HTMLElement => section !== null);

if (sections.length > 0) {
  const setCurrent = (id: string | null) => {
    for (const link of links) {
      if (link.hash === `#${id}`) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    }
  };

  // A thin band across the middle of the viewport decides which section is "current".
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setCurrent(entry.target.id);
      }
      if (window.scrollY < 80) setCurrent(null);
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  sections.forEach((section) => observer.observe(section));
}

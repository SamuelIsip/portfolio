/*
 * Scroll reveal for [data-reveal]. Content is visible without JS; the hidden
 * start state only applies once this script adds .js-reveal to <html>.
 */
const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (targets.length > 0 && !reduceMotion && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('js-reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -12% 0px' },
  );

  targets.forEach((target) => observer.observe(target));
}

// Module scope: keeps top-level names from clashing with the other scripts.
export {};

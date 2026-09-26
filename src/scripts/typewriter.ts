/*
 * Types and deletes the hero role phrases in a loop. Visual only: the element is
 * aria-hidden and the real role sits next to it in sr-only text. With reduced
 * motion the first phrase simply stays put.
 */
const target = document.querySelector<HTMLElement>('[data-typewriter]');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (target && !reduceMotion) {
  const phrases = JSON.parse(target.dataset.phrases ?? '[]') as string[];

  if (phrases.length > 1) {
    const typeDelay = 70;
    const deleteDelay = 35;
    const holdDelay = 2200;
    const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    const run = async () => {
      // Let the hero entrance finish before the first phrase starts disappearing.
      await wait(holdDelay + 600);
      for (let index = 0; ; index = (index + 1) % phrases.length) {
        const current = phrases[index];
        const next = phrases[(index + 1) % phrases.length];
        for (let length = current.length; length >= 0; length--) {
          target.textContent = current.slice(0, length);
          await wait(deleteDelay);
        }
        for (let length = 1; length <= next.length; length++) {
          target.textContent = next.slice(0, length);
          await wait(typeDelay);
        }
        await wait(holdDelay);
      }
    };

    void run();
  }
}

// Module scope: keeps top-level names from clashing with the other scripts.
export {};

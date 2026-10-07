import React, { useEffect, useRef } from 'react';

/**
 * - Barre de progression de lecture en haut de page.
 * - Apparition progressive des blocs de chaque section au défilement
 *   (en cascade pour les grilles de cartes).
 */
export const ScrollEffects: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);

  // Barre de progression
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      if (barRef.current) barRef.current.style.width = `${pct}%`;
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  // Apparition au défilement
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targets: HTMLElement[] = [];
    const mark = (el: Element, mode: string, delay: number) => {
      const node = el as HTMLElement;
      node.setAttribute('data-reveal', mode);
      node.style.setProperty('--reveal-delay', `${delay}ms`);
      targets.push(node);
    };

    const blocks = document.querySelectorAll(
      'main > section:not(#accueil) > div > *, main > div > div'
    );
    blocks.forEach((block) => {
      const isGrid = block.classList.contains('grid');
      const inGallery = Boolean(block.closest('#galerie'));

      if (isGrid && inGallery) return; // la galerie anime ses propres cartes

      if (isGrid && block.children.length > 1) {
        const kids = Array.from(block.children);
        const twoColumns = kids.length === 2;
        kids.forEach((child, i) => {
          const mode = twoColumns ? (i === 0 ? 'left' : 'right') : 'up';
          mark(child, mode, twoColumns ? 0 : Math.min(i, 8) * 90);
        });
      } else {
        mark(block, block.matches('main > div > div') ? 'zoom' : 'up', 0);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add('is-visible');
          observer.unobserve(el);
          // Une fois l'animation finie, on rend l'élément à ses propres styles
          // (pour que ses effets de survol retrouvent leur transition normale).
          const delay = parseInt(el.style.getPropertyValue('--reveal-delay') || '0', 10);
          window.setTimeout(() => {
            el.removeAttribute('data-reveal');
            el.classList.remove('is-visible');
            el.style.removeProperty('--reveal-delay');
          }, delay + 1000);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[60] pointer-events-none">
      <div
        ref={barRef}
        className="h-full w-0 bg-gradient-to-r from-[#0066B1] via-[#4aa3e0] to-[#EBF4FC] shadow-[0_0_8px_rgba(0,102,177,0.6)]"
      />
    </div>
  );
};

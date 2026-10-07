import React, { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  /** Ex : '95 %', '16', 'Plusieurs' (le texte sans chiffre reste tel quel). */
  value: string;
  duration?: number;
}

export const CountUp: React.FC<CountUpProps> = ({ value, duration = 1600 }) => {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const rest = match ? match[2] : '';
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (target === null) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setCurrent(target);
      return;
    }
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setCurrent(Math.round(target * eased));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  if (target === null) return <span>{value}</span>;
  return (
    <span ref={ref}>
      {current}
      {rest}
    </span>
  );
};

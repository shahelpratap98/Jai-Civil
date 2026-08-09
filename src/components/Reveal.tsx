import { useEffect, useRef, type ReactNode } from 'react';

type Props = {
  className?: string;
  children: ReactNode;
};

/**
 * Scroll reveal for inner-page sections. SSR renders the plain content;
 * the reveal class is only added on the client so prerendered HTML is
 * never hidden for crawlers or no-JS visitors.
 */
export default function Reveal({ className = '', children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    el.classList.add('reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

import { useEffect, useState, type ReactNode } from 'react';

type Props = {
  /** Delay before the fade starts, in ms. */
  delay?: number;
  /** Transition duration, in ms. */
  duration?: number;
  className?: string;
  children: ReactNode;
};

/** Starts at opacity 0 and fades in after `delay`. */
export default function FadeIn({ delay = 0, duration = 1000, className = '', children }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={`transition-opacity ${visible ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
}

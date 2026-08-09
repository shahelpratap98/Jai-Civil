import { useEffect, useState } from 'react';

type Props = {
  /** Text with literal \n line breaks. */
  text: string;
  className?: string;
  /** Delay before the whole animation starts, in ms. */
  initialDelay?: number;
  style?: React.CSSProperties;
};

const CHAR_DELAY = 30;
const CHAR_DURATION = 500;

/**
 * Character-by-character entrance: each char starts at opacity 0 /
 * translateX(-18px) and staggers in left to right, line by line.
 */
export default function AnimatedHeading({
  text,
  className = '',
  initialDelay = 200,
  style,
}: Props) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), initialDelay);
    return () => clearTimeout(t);
  }, [initialDelay]);

  const lines = text.split('\n');

  return (
    <h1 className={className} style={style}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              className="inline-block"
              style={{
                opacity: started ? 1 : 0,
                transform: started ? 'translateX(0)' : 'translateX(-18px)',
                transition: `opacity ${CHAR_DURATION}ms ease-out, transform ${CHAR_DURATION}ms ease-out`,
                transitionDelay: `${lineIndex * line.length * CHAR_DELAY + charIndex * CHAR_DELAY}ms`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}

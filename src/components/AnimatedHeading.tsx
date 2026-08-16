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
 *
 * Characters are grouped into non-breaking word spans. Every char is its own
 * inline-block, and an inline-block is a break opportunity, so without the
 * grouping the browser happily wrapped the headline mid-word ("Aucklan / d").
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

  const charStyle = (delayMs: number): React.CSSProperties => ({
    opacity: started ? 1 : 0,
    transform: started ? 'translateX(0)' : 'translateX(-18px)',
    transition: `opacity ${CHAR_DURATION}ms ease-out, transform ${CHAR_DURATION}ms ease-out`,
    transitionDelay: `${delayMs}ms`,
  });

  return (
    <h1 className={className} style={style}>
      {lines.map((line, lineIndex) => {
        const lineOffset = lineIndex * line.length * CHAR_DELAY;
        // Running index so the stagger keeps flowing across word boundaries.
        let charIndex = 0;

        return (
          <span key={lineIndex} className="block">
            {line.split(' ').map((word, wordIndex, words) => {
              const wordSpan = (
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                  {word.split('').map((char) => {
                    const delay = lineOffset + charIndex * CHAR_DELAY;
                    charIndex++;
                    return (
                      <span key={charIndex} className="inline-block" style={charStyle(delay)}>
                        {char}
                      </span>
                    );
                  })}
                  {wordIndex < words.length - 1 && (
                    <span
                      className="inline-block"
                      style={charStyle(lineOffset + charIndex++ * CHAR_DELAY)}
                    >
                      {' '}
                    </span>
                  )}
                </span>
              );
              return wordSpan;
            })}
          </span>
        );
      })}
    </h1>
  );
}

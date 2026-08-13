type Props = {
  /** Path to the full size photo, e.g. /projects/grader-platform.jpg */
  src: string;
  alt: string;
  className?: string;
  /** Tells the browser the rendered width so it can pick the right candidate. */
  sizes: string;
  /** Set on anything above the fold; everything else stays lazy. */
  eager?: boolean;
};

/**
 * Serves the smallest width that covers the slot. `npm run optimize:images`
 * writes the -640 and -1280 variants next to each master; the gallery was
 * previously downloading 1920px files into 350px tiles.
 */
export default function Photo({ src, alt, className = '', sizes, eager = false }: Props) {
  const base = src.replace(/\.jpg$/, '');

  return (
    <img
      src={`${base}-1280.jpg`}
      srcSet={`${base}-640.jpg 640w, ${base}-1280.jpg 1280w, ${src} 1920w`}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}

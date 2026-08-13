import { Star } from 'lucide-react';

/** Filled star row. Decorative by default: the rating is always written out in
 *  text beside it, so screen readers get the number, not five icon names. */
export default function Stars({ rating = 5, size = 16 }: { rating?: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={size}
          className={i < Math.round(rating) ? 'fill-clay-400 text-clay-400' : 'text-sand-500'}
        />
      ))}
    </span>
  );
}

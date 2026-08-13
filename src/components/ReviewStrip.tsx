import Stars from './Stars';
import { REVIEW_SUMMARY } from '../data/reviews';

/** Compact rating badge for hero and page intros. */
export default function ReviewStrip({ className = '' }: { className?: string }) {
  return (
    <a
      href={REVIEW_SUMMARY.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`liquid-glass inline-flex items-center gap-3 rounded-lg border border-sand-50/20 px-4 py-2 text-sm transition-colors hover:border-clay-400/60 ${className}`}
    >
      <Stars rating={REVIEW_SUMMARY.rating} />
      <span className="text-sand-200">
        <span className="font-medium text-sand-50">{REVIEW_SUMMARY.rating.toFixed(1)}</span> from{' '}
        {REVIEW_SUMMARY.count} {REVIEW_SUMMARY.source} reviews
      </span>
    </a>
  );
}

import { ArrowUpRight, Quote } from 'lucide-react';
import Reveal from './Reveal';
import Stars from './Stars';
import { REVIEWS, REVIEW_SUMMARY } from '../data/reviews';

/**
 * Full reviews section. `limit` trims the cards on pages where reviews are a
 * supporting note rather than the point of the page.
 */
export default function Reviews({
  heading = 'What our customers say',
  limit,
}: {
  heading?: string;
  limit?: number;
}) {
  const shown = limit ? REVIEWS.slice(0, limit) : REVIEWS;

  return (
    <section className="px-6 md:px-12 lg:px-16 pt-20">
      <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="accent-rule text-3xl md:text-4xl font-normal" style={{ letterSpacing: '-0.03em' }}>
            {heading}
          </h2>
          <p className="mt-3 flex flex-wrap items-center gap-3 text-sand-300">
            <Stars rating={REVIEW_SUMMARY.rating} size={18} />
            <span>
              <span className="font-medium text-sand-50">{REVIEW_SUMMARY.rating.toFixed(1)}</span>{' '}
              out of 5 from {REVIEW_SUMMARY.count} {REVIEW_SUMMARY.source} reviews
            </span>
          </p>
        </div>
        <a
          href={REVIEW_SUMMARY.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm text-sand-300 transition-colors hover:text-clay-300"
        >
          Read them on Google
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3">
        {shown.map((review) => (
          <Reveal key={review.author}>
            <figure className="liquid-glass flex h-full flex-col rounded-xl border border-sand-50/20 p-6">
              <Quote size={22} className="mb-4 text-clay-400" aria-hidden="true" />
              <blockquote className="text-sand-100 leading-relaxed">
                {review.body}
                {review.truncated && <span className="text-sand-400"> …</span>}
              </blockquote>
              <figcaption className="mt-6 border-t border-sand-50/10 pt-4">
                <Stars rating={review.rating} />
                <span className="sr-only">{review.rating} out of 5</span>
                <p className="mt-2 font-medium">{review.author}</p>
                <p className="text-sm text-sand-400">{review.credential}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

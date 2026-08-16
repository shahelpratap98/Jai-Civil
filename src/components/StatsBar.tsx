/**
 * Credibility bar under the hero, modelled on the reference site's first
 * screen: four figures divided by hairlines, big accent numerals over small
 * spaced caps.
 *
 * The reference used "200+ projects" and "100% safety record". Nothing on this
 * site claims a number the company has not given us, so these four are the
 * defensible ones: trading since 2014 (the owner's own copyright instruction),
 * the real Google rating, the two confirmed yards and the confirmed coverage.
 * Swap in project counts or a safety record once the owner supplies them.
 */
import { REVIEW_SUMMARY } from '../data/reviews';

const FOUNDED = 2014;

export default function StatsBar() {
  const years = new Date().getFullYear() - FOUNDED;

  const STATS = [
    { figure: `${years}+`, label: 'Years experience' },
    { figure: REVIEW_SUMMARY.rating.toFixed(1), label: `${REVIEW_SUMMARY.source} rating` },
    { figure: '2', label: 'Yards, Papakura & Huntly' },
    { figure: 'NZ wide', label: 'Coverage' },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-16">
      <dl className="grid grid-cols-2 border-t border-sand-50/15 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-2 py-7 md:px-8 ${
              i % 2 === 1 ? 'border-l border-sand-50/15' : ''
            } ${i >= 2 ? 'border-t border-sand-50/15 md:border-t-0' : ''} ${
              i === 2 ? 'md:border-l md:border-sand-50/15' : ''
            }`}
          >
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block text-3xl font-semibold uppercase tracking-tight text-clay-400 md:text-4xl">
                {stat.figure}
              </span>
              <span className="mt-2 block text-xs uppercase tracking-[0.14em] text-sand-400">
                {stat.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

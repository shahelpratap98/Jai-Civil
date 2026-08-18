/**
 * Real Google reviews for Jai Civil Limited, transcribed verbatim from the
 * business's Google listing (5.0 from 3 reviews as at August 2026).
 *
 * Rules for this file, same as everywhere else on the site: never invent a
 * review, a rating, a name or a count. If the listing gains reviews, update
 * SUMMARY.count and add the new entries here.
 *
 * Ashby's review is truncated on the listing itself ("… More"), so only the
 * visible portion is stored. `truncated: true` keeps the card honest about it.
 * Dates are deliberately omitted: "a month ago" goes stale the moment it ships.
 */

export type Review = {
  author: string;
  /** What Google shows under the name, e.g. "Local Guide · 45 reviews". */
  credential: string;
  rating: number;
  body: string;
  truncated?: boolean;
};

export const REVIEW_SUMMARY = {
  rating: 5.0,
  count: 3,
  source: 'Google',
  /** The business's own Google listing. */
  url: 'https://share.google/EFDtIkTQVHiTQQrD0',
} as const;

export const REVIEWS: Review[] = [
  {
    author: 'Praveen Chand',
    credential: '4 reviews',
    rating: 5,
    body: 'Awesome service by provider, with amazing skills, very easy to work with and outstanding service. My recommendations to everyone to acquire their services as they are excellent.',
  },
  {
    author: 'Porky Ashby',
    credential: 'Local Guide · 45 reviews',
    rating: 5,
    body: "A great company servicing Tamaki Makaurau and Waikato area's that has skill and experience within the civil construction sector.",
    truncated: true,
  },
  {
    author: 'Rawiri Tengu',
    credential: '1 review',
    rating: 5,
    body: 'Great service mate',
  },
];

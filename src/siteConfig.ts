/**
 * Single place for company facts. Everything here is sourced from the NZ
 * Companies Register (#8175655) and the company's public listings.
 *
 * PLACEHOLDERS (swap before launch):
 *  - url: no domain registered yet
 */
export const SITE = {
  name: 'Jai Civil Limited',
  shortName: 'Jai Civil',
  /** Canonical host. The apex 308s to www, so www is the canonical form. */
  url: 'https://www.jaicivil.com',
  email: 'jaicivilltd@gmail.com', // confirmed by the owner 2026-08-18
  phoneDisplay: '021 215 4714',
  phoneHref: 'tel:+64212154714',
  /** E.164 without "+", as wa.me requires. */
  whatsappNumber: '64212154714',
  whatsappMessage: 'Hi Jai Civil, I would like a quote for some work.',
  address: {
    street: '43 Wellfield Drive',
    suburb: 'Papakura',
    city: 'Auckland',
    postcode: '2110',
  },
  /** Second base, confirmed by the owner 2026-08-13. No street address has
   *  been supplied, so it is described as a yard rather than mapped. */
  depot: {
    suburb: 'Huntly',
    region: 'Waikato',
  },
  /** Grouped by region because the company now works from two bases. Auckland
   *  areas come from the Builderscrack profile; the Waikato list was confirmed
   *  by the owner along with the Huntly yard. */
  areaGroups: [
    {
      region: 'Auckland',
      areas: [
        'Papakura',
        'Manukau',
        'Franklin',
        'Auckland Central',
        'North Shore',
        'Waitākere',
        'Rodney',
        'Waiheke Island',
        'Hauraki Gulf Islands',
      ],
    },
    {
      region: 'Waikato',
      areas: [
        'Huntly',
        'Ngāruawāhia',
        'Hamilton',
        'Te Kauwhata',
        'Pōkeno',
        'Tuakau',
        'Raglan',
        'Morrinsville',
      ],
    },
  ],
  hours: 'Mon to Fri, 8am to 5pm',
  hoursSchema: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
  ogImage: '/og-image.jpg',
} as const;

/** Flat list of every area served, for copy that reads them out in a line. */
export const ALL_AREAS: string[] = SITE.areaGroups.flatMap((group) => [...group.areas]);

export function whatsappLink(message?: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    message ?? SITE.whatsappMessage
  )}`;
}

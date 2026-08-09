/**
 * Single place for company facts. Everything here is sourced from the NZ
 * Companies Register (#8175655) and the company's public listings.
 *
 * PLACEHOLDERS (swap before launch):
 *  - url:   no domain registered yet
 *  - email: inquiries inbox not confirmed yet (contact form env vars too)
 */
export const SITE = {
  name: 'Jai Civil Limited',
  shortName: 'Jai Civil',
  url: 'https://jaicivil.co.nz', // PLACEHOLDER domain
  email: '', // PLACEHOLDER: unknown, deliberately blank so schema omits it
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
  /** Service areas listed on the company's Builderscrack profile. */
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
  hours: 'Mon to Fri, 8am to 5pm',
  hoursSchema: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
  ogImage: '/og-image.jpg',
} as const;

export function whatsappLink(message?: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    message ?? SITE.whatsappMessage
  )}`;
}

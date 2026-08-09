import { SERVICES } from './data/services';
import { SITE } from './siteConfig';

export type RouteMeta = {
  path: string;
  title: string;
  description: string;
  /** Sitemap priority, 0 to 1. */
  priority: number;
};

/** Kept short: the suffix spends SERP title budget on every page. */
const suffix = ` | ${SITE.shortName}`;

export const ROUTES: RouteMeta[] = [
  {
    path: '/',
    title: 'Jai Civil: Earthworks & Civil Construction Auckland',
    description:
      'Papakura based civil and earthworks contractor serving greater Auckland. Earthworks, roading, driveways, site preparation, LBP building, renovations and electrical. Free quotes.',
    priority: 1.0,
  },
  {
    path: '/services',
    title: `Civil, Earthworks & Building Services Auckland${suffix}`,
    description:
      'Earthworks, roading and driveways, site preparation, landscaping, LBP building, renovations, kitchens and electrical across Auckland from one Papakura based crew.',
    priority: 0.9,
  },
  {
    path: '/projects',
    title: `Our Projects: Civil & Building Work Auckland${suffix}`,
    description:
      'The kind of work Jai Civil takes on across Auckland: earthworks, driveways, site preparation, building and renovation projects from Papakura to the wider region.',
    priority: 0.7,
  },
  {
    path: '/contact',
    title: `Contact Jai Civil: Free Quotes Auckland${suffix}`,
    description:
      'Get a free quote from Jai Civil. Call, WhatsApp or message us about earthworks, driveways, site preparation, building or renovation work anywhere in Auckland.',
    priority: 0.8,
  },
  ...SERVICES.map((service) => ({
    path: `/services/${service.slug}`,
    title: `${service.seoTitle}${suffix}`,
    description: service.metaDescription,
    priority: 0.8,
  })),
];

export function metaFor(path: string): RouteMeta {
  return ROUTES.find((r) => r.path === path) ?? ROUTES[0];
}

/** LocalBusiness plus per-page schema. Fields are omitted when unknown:
 *  never populate structured data with guessed values. */
export function schemasFor(path: string): object[] {
  const business: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    description: ROUTES[0].description,
    url: SITE.url,
    image: `${SITE.url}${SITE.ogImage}`,
    telephone: SITE.phoneHref.replace(/^tel:/, ''),
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.suburb,
      addressRegion: SITE.address.city,
      postalCode: SITE.address.postcode,
      addressCountry: 'NZ',
    },
    areaServed: { '@type': 'City', name: 'Auckland', addressCountry: 'NZ' },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: SITE.hoursSchema.days,
        opens: SITE.hoursSchema.opens,
        closes: SITE.hoursSchema.closes,
      },
    ],
  };
  if (SITE.email) business.email = SITE.email;

  const schemas: object[] = [business];

  const match = path.match(/^\/services\/([^/]+)$/);
  if (match) {
    const service = SERVICES.find((s) => s.slug === match[1]);
    if (service) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name,
        serviceType: service.name,
        description: service.metaDescription,
        areaServed: { '@type': 'City', name: 'Auckland', addressCountry: 'NZ' },
        provider: { '@type': 'LocalBusiness', name: SITE.name, url: SITE.url },
      });
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      });
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
          { '@type': 'ListItem', position: 3, name: service.name },
        ],
      });
    }
  }
  return schemas;
}

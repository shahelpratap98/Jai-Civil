import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { SITE, whatsappLink } from '../siteConfig';
import { SERVICES } from '../data/services';
import { REVIEW_SUMMARY } from '../data/reviews';
import Logo from './Logo';
import Stars from './Stars';

/** Jai Civil has been trading since 2014, so the notice runs as a range. */
const FOUNDED_YEAR = 2014;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-sand-50/10 mt-24">
      <div className="px-6 md:px-12 lg:px-16 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <Logo markSize={42} className="mb-4" />
          <p className="text-sand-300 text-sm leading-relaxed max-w-xs">
            Civil, earthworks and building contractor. Auckland, Waikato and New
            Zealand wide.
          </p>
          <a
            href={REVIEW_SUMMARY.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-sand-300 transition-colors hover:text-clay-300"
          >
            <Stars rating={REVIEW_SUMMARY.rating} size={14} />
            {REVIEW_SUMMARY.rating.toFixed(1)} from {REVIEW_SUMMARY.count}{' '}
            {REVIEW_SUMMARY.source} reviews
          </a>
          <div className="mt-5 space-y-2 text-sm text-sand-300">
            <a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-clay-300 transition-colors">
              <Phone size={15} aria-hidden="true" /> {SITE.phoneDisplay}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-clay-300 transition-colors"
            >
              <MessageCircle size={15} aria-hidden="true" /> WhatsApp us
            </a>
            <p className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
              <span>
                {SITE.address.suburb}, {SITE.address.city}
                <br />
                Yard at {SITE.depot.suburb}, {SITE.depot.region}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Clock size={15} aria-hidden="true" /> {SITE.hours}
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium mb-4 text-clay-400">Services</p>
          <ul className="space-y-2 text-sm text-sand-300">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="hover:text-clay-300 transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium mb-4 text-clay-400">Areas we serve</p>
          {SITE.areaGroups.map((group) => (
            <div key={group.region} className="mb-4">
              <p className="text-xs uppercase tracking-wider text-sand-400 mb-2">{group.region}</p>
              <p className="text-sm leading-relaxed text-sand-300">{group.areas.join(', ')}</p>
            </div>
          ))}
          <p className="text-sm text-sand-100">+ New Zealand wide for larger projects</p>
        </div>
      </div>
      <div className="px-6 md:px-12 lg:px-16 py-6 border-t border-sand-50/10 flex flex-wrap items-center justify-between gap-3 text-xs text-sand-400">
        <p>
          © {FOUNDED_YEAR}
          {currentYear > FOUNDED_YEAR && `–${currentYear}`} {SITE.name}. All rights reserved.
        </p>
        <p>NZ Company 8175655</p>
      </div>
    </footer>
  );
}

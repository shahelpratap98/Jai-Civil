import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { SITE, whatsappLink } from '../siteConfig';
import { SERVICES } from '../data/services';

/** Jai Civil has been trading since 2014, so the notice runs as a range. */
const FOUNDED_YEAR = 2014;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-sand-50/10 mt-24">
      <div className="px-6 md:px-12 lg:px-16 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <p className="text-2xl font-semibold tracking-tight mb-3">JAI CIVIL LIMITED</p>
          <p className="text-sand-300 text-sm leading-relaxed max-w-xs">
            Papakura based civil, earthworks and building contractor. Auckland and New Zealand
            wide.
          </p>
          <div className="mt-5 space-y-2 text-sm text-sand-300">
            <a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-sand-50 transition-colors">
              <Phone size={15} aria-hidden="true" /> {SITE.phoneDisplay}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-sand-50 transition-colors"
            >
              <MessageCircle size={15} aria-hidden="true" /> WhatsApp us
            </a>
            <p className="flex items-center gap-2">
              <MapPin size={15} aria-hidden="true" /> {SITE.address.suburb}, {SITE.address.city}
            </p>
            <p className="flex items-center gap-2">
              <Clock size={15} aria-hidden="true" /> {SITE.hours}
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium mb-4 text-sand-100">Services</p>
          <ul className="space-y-2 text-sm text-sand-300">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="hover:text-sand-50 transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium mb-4 text-sand-100">Areas we serve</p>
          <ul className="space-y-2 text-sm text-sand-300">
            {SITE.areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
            <li className="pt-1 text-sand-100">+ New Zealand wide</li>
          </ul>
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

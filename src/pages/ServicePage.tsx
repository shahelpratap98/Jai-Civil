import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, Check, FileDown } from 'lucide-react';
import Header from '../components/Header';
import Reveal from '../components/Reveal';
import ServiceIcon from '../components/ServiceIcon';
import { SERVICES, serviceBySlug } from '../data/services';
import { SITE, whatsappLink } from '../siteConfig';

export default function ServicePage() {
  const { slug } = useParams();
  const service = slug ? serviceBySlug(slug) : undefined;

  if (!service) return <Navigate to="/services" replace />;

  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Header />

      <section className="px-6 md:px-12 lg:px-16 pt-16 md:pt-24">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-sand-400">
          <Link to="/" className="transition-colors hover:text-sand-50">
            Home
          </Link>
          <span aria-hidden="true"> / </span>
          <Link to="/services" className="transition-colors hover:text-sand-50">
            Services
          </Link>
          <span aria-hidden="true"> / </span>
          <span className="text-sand-200">{service.name}</span>
        </nav>
        <div className="max-w-3xl">
          <ServiceIcon icon={service.icon} size={36} className="mb-6 text-clay-400" />
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            {service.h1}
          </h1>
          {service.intro.map((paragraph, i) => (
            <p key={i} className="text-sand-300 text-base md:text-lg leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
        {service.image && (
          <figure className="mt-8 max-w-4xl overflow-hidden rounded-xl border border-sand-50/20">
            <img
              src={service.image}
              alt={service.imageAlt ?? service.name}
              className="h-auto w-full"
              loading="lazy"
            />
          </figure>
        )}
      </section>

      <section className="px-6 md:px-12 lg:px-16 pt-14">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-normal mb-8" style={{ letterSpacing: '-0.03em' }}>
            {service.includesTitle}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 max-w-4xl">
            {service.includes.map((item) => (
              <li
                key={item}
                className="liquid-glass flex items-start gap-3 rounded-lg border border-sand-50/20 px-4 py-3 text-sm text-sand-100"
              >
                <Check size={16} className="mt-0.5 shrink-0 text-clay-400" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="px-6 md:px-12 lg:px-16 pt-16">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-normal mb-8" style={{ letterSpacing: '-0.03em' }}>
            Common questions
          </h2>
          <div className="max-w-3xl space-y-3">
            {service.faqs.map((faq) => (
              <details
                key={faq.question}
                className="liquid-glass group rounded-xl border border-sand-50/20 px-6 py-4"
              >
                <summary className="cursor-pointer list-none font-medium marker:content-none flex items-center justify-between gap-4">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="text-sand-400 transition-transform group-open:rotate-45 text-xl leading-none"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-sand-300">{faq.answer}</p>
              </details>
            ))}
            <a
              href="/docs/jai-civil-safety-documentation.pdf"
              download
              className="mt-2 inline-flex items-center gap-2 rounded-lg border border-sand-50/20 liquid-glass px-6 py-3 text-sm font-medium transition-colors hover:bg-sand-100 hover:text-soil-950"
            >
              <FileDown size={16} aria-hidden="true" />
              Download our safety documentation
            </a>
          </div>
        </Reveal>
      </section>

      <section className="px-6 md:px-12 lg:px-16 pt-16">
        <Reveal>
          <div className="liquid-glass rounded-xl border border-sand-50/20 px-8 py-10 md:px-12">
            <h2 className="text-2xl md:text-3xl font-normal mb-3" style={{ letterSpacing: '-0.03em' }}>
              Get a free quote for {service.name.toLowerCase()}
            </h2>
            <p className="max-w-xl text-sand-300 leading-relaxed mb-6">
              Based in {SITE.address.suburb}, serving Auckland and New Zealand wide. Send
              through the address and a short description and we will take it from there.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-sand-100 text-soil-950 px-8 py-3 rounded-lg font-medium transition-colors hover:bg-sand-200"
              >
                Get a Quote
              </Link>
              <a
                href={whatsappLink(`Hi Jai Civil, I would like a quote for ${service.name.toLowerCase()}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass border border-sand-50/20 text-sand-50 px-8 py-3 rounded-lg font-medium transition-colors hover:bg-sand-100 hover:text-soil-950"
              >
                WhatsApp {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-6 md:px-12 lg:px-16 pt-16">
        <Reveal>
          <h2 className="text-xl font-medium mb-6">Related services</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="liquid-glass group flex items-center justify-between gap-3 rounded-xl border border-sand-50/20 px-5 py-4 transition-colors hover:border-sand-50/40"
              >
                <span className="text-sm font-medium">{s.name}</span>
                <ArrowRight
                  size={16}
                  className="shrink-0 text-sand-300 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}

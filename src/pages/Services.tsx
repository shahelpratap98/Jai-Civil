import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Reveal from '../components/Reveal';
import Reviews from '../components/Reviews';
import ReviewStrip from '../components/ReviewStrip';
import ServiceIcon from '../components/ServiceIcon';
import { SERVICES } from '../data/services';
import { whatsappLink, SITE } from '../siteConfig';

export default function Services() {
  return (
    <>
      <Header />
      <section className="px-6 md:px-12 lg:px-16 pt-16 md:pt-24">
        <div className="max-w-3xl">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            Civil, earthworks and building services in Auckland
          </h1>
          <p className="text-sand-300 text-base md:text-lg leading-relaxed">
            Twelve services, one contractor. Jai Civil covers the ground work, the steel and the
            structure, so your project does not get lost between trades. Every service below has
            its own page with what is included and answers to common questions.
          </p>
          <ReviewStrip className="mt-6" />
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-16 pt-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Reveal key={service.slug}>
              <Link
                to={`/services/${service.slug}`}
                className="liquid-glass group flex h-full flex-col rounded-xl border border-sand-50/20 p-6 transition-colors hover:border-clay-400/60"
              >
                <span className="mb-4 inline-flex w-fit rounded-lg border border-clay-500/25 bg-clay-500/10 p-2.5 transition-colors group-hover:bg-clay-500/20">
                  <ServiceIcon icon={service.icon} size={24} className="text-clay-400" />
                </span>
                <h2 className="text-lg font-medium mb-2">{service.name}</h2>
                <p className="text-sm leading-relaxed text-sand-300 mb-4">{service.short}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm text-sand-300 transition-colors group-hover:text-clay-400">
                  View service
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Reviews />

      <section className="px-6 md:px-12 lg:px-16 pt-20">
        <Reveal>
          <div className="liquid-glass rounded-xl border border-sand-50/20 px-8 py-10 md:px-12">
            <h2 className="text-2xl md:text-3xl font-normal mb-3" style={{ letterSpacing: '-0.03em' }}>
              Not sure which service you need?
            </h2>
            <p className="max-w-xl text-sand-300 leading-relaxed mb-6">
              Describe the job in a sentence or two and we will point you in the right direction,
              even if the answer is that you do not need us.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-clay-500 text-soil-950 px-8 py-3 rounded-lg font-medium transition-colors hover:bg-clay-400"
              >
                Get a Quote
              </Link>
              <a
                href={whatsappLink('Hi Jai Civil, I have a project and I am not sure which service fits. Here is what I need done: ')}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass border border-sand-50/20 text-sand-50 px-8 py-3 rounded-lg font-medium transition-colors hover:bg-clay-500 hover:text-soil-950"
              >
                WhatsApp {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

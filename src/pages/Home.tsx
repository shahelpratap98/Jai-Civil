import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import AnimatedHeading from '../components/AnimatedHeading';
import FadeIn from '../components/FadeIn';
import Reveal from '../components/Reveal';
import ServiceIcon from '../components/ServiceIcon';
import { SERVICES } from '../data/services';
import { SITE, whatsappLink } from '../siteConfig';

/**
 * PLACEHOLDER hero clip (approved for build-out): reused from an earlier
 * Higgsfield generation. A Jai Civil specific seamless loop will replace it
 * once the user signs off on the generation prompt and credits.
 */
const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4';

export default function Home() {
  return (
    <>
      {/* Hero: raw video background, no overlay of any kind. */}
      <div className="relative flex flex-col min-h-dvh">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-1 flex-col">
          <Header />
          <div className="flex flex-1 flex-col justify-end px-6 pb-12 md:px-12 lg:px-16 lg:pb-16">
            <div className="lg:grid lg:grid-cols-2 lg:items-end">
              <div>
                <AnimatedHeading
                  text={'Shaping Auckland\nfrom the ground up.'}
                  className="text-4xl font-normal md:text-5xl lg:text-6xl xl:text-7xl mb-4"
                  style={{ letterSpacing: '-0.04em' }}
                  initialDelay={200}
                />
                <FadeIn delay={800} duration={1000}>
                  <p className="text-base md:text-lg text-gray-300 mb-5">
                    Earthworks, roading and civil construction across Auckland, with licensed
                    building trades under one roof.
                  </p>
                </FadeIn>
                <FadeIn delay={1200} duration={1000}>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="bg-white text-black px-8 py-3 rounded-lg font-medium transition-colors hover:bg-gray-100"
                    >
                      Get a Quote
                    </Link>
                    <Link
                      to="/services"
                      className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors hover:bg-white hover:text-black"
                    >
                      Our Services
                    </Link>
                  </div>
                </FadeIn>
              </div>
              <div className="mt-10 flex items-end justify-start lg:mt-0 lg:justify-end">
                <FadeIn delay={1400} duration={1000}>
                  <div className="liquid-glass rounded-xl border border-white/20 px-6 py-3">
                    <p className="text-lg font-light md:text-xl lg:text-2xl">
                      Earthworks. Roading. Building.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* One crew, start to finish */}
      <section className="px-6 md:px-12 lg:px-16 pt-24">
        <Reveal className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-normal mb-6" style={{ letterSpacing: '-0.03em' }}>
            One crew, from the first cut to the final fit off
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Jai Civil Limited is a Papakura based contractor that covers the whole chain: we cut
            and prepare the site, build the driveway, put up the structure under a Licensed
            Building Practitioner and wire it. No handover gaps between an earthworks company, a
            builder and an electrician, because we are all three.
          </p>
          <p className="text-gray-300 leading-relaxed">
            We work across greater Auckland, from Papakura and Franklin to the North Shore,
            Rodney and Waiheke Island.
          </p>
        </Reveal>
      </section>

      {/* Services grid */}
      <section className="px-6 md:px-12 lg:px-16 pt-20">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-normal" style={{ letterSpacing: '-0.03em' }}>
            What we do
          </h2>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
          >
            All services
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Reveal key={service.slug}>
              <Link
                to={`/services/${service.slug}`}
                className="liquid-glass group flex h-full flex-col rounded-xl border border-white/20 p-6 transition-colors hover:border-white/40"
              >
                <ServiceIcon icon={service.icon} size={28} className="mb-4 text-gray-100" />
                <h3 className="text-lg font-medium mb-2">{service.name}</h3>
                <p className="text-sm leading-relaxed text-gray-300 mb-4">{service.short}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm text-gray-300 transition-colors group-hover:text-white">
                  Learn more
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Areas */}
      <section className="px-6 md:px-12 lg:px-16 pt-20">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-normal mb-6" style={{ letterSpacing: '-0.03em' }}>
            Areas we serve
          </h2>
          <p className="max-w-2xl text-gray-300 leading-relaxed mb-8">
            Based in {SITE.address.suburb}, working across the whole Auckland region.
          </p>
          <ul className="flex flex-wrap gap-3">
            {SITE.areas.map((area) => (
              <li
                key={area}
                className="liquid-glass rounded-lg border border-white/20 px-4 py-2 text-sm text-gray-100"
              >
                {area}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-16 pt-24">
        <Reveal>
          <div className="liquid-glass rounded-xl border border-white/20 px-8 py-12 md:px-12 md:py-16">
            <h2 className="text-3xl md:text-4xl font-normal mb-4" style={{ letterSpacing: '-0.03em' }}>
              Tell us about your project
            </h2>
            <p className="max-w-xl text-gray-300 leading-relaxed mb-8">
              Send a few details or photos and we will come back to you with an honest read on
              the job and a free quote.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-black px-8 py-3 rounded-lg font-medium transition-colors hover:bg-gray-100"
              >
                Get a Quote
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors hover:bg-white hover:text-black"
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

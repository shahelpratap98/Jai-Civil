import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import AnimatedHeading from '../components/AnimatedHeading';
import FadeIn from '../components/FadeIn';
import Reveal from '../components/Reveal';
import Reviews from '../components/Reviews';
import ReviewStrip from '../components/ReviewStrip';
import ServiceIcon from '../components/ServiceIcon';
import { SERVICES } from '../data/services';
import { SITE, whatsappLink } from '../siteConfig';

/**
 * Jai Civil hero loop: MiniMax H3, generated 2026-08-09 with the same
 * golden-hour excavator frame as start and end frame so the loop is seamless.
 * Self-hosted, produced by `npm run compress:video` from the master in
 * video-src/: 1080p, half speed baked in with motion-interpolated 30fps
 * (browser playbackRate slow-mo showed 12 unique fps and read as lag).
 */
const HERO_VIDEO = '/jai-hero.mp4';
const HERO_POSTER = '/jai-hero-poster.jpg';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Mobile autoplay rescue. iOS Low Power Mode and Android Data Saver block
  // autoplay and paint a play glyph over the poster. A muted video may still
  // be started programmatically once the user touches the page, so retry on
  // mount, on the first interaction, and when the tab becomes visible again.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = () => {
      if (v.paused) v.play().catch(() => {});
    };
    tryPlay();
    window.addEventListener('touchstart', tryPlay, { passive: true });
    window.addEventListener('pointerdown', tryPlay);
    document.addEventListener('visibilitychange', tryPlay);
    return () => {
      window.removeEventListener('touchstart', tryPlay);
      window.removeEventListener('pointerdown', tryPlay);
      document.removeEventListener('visibilitychange', tryPlay);
    };
  }, []);

  return (
    <>
      {/* Hero: raw video background, no overlay of any kind. */}
      <div className="relative flex flex-col min-h-dvh">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO}
          poster={HERO_POSTER}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
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
                  <p className="text-base md:text-lg text-sand-300 mb-5">
                    Earthworks, roading and civil construction, Auckland and New Zealand wide,
                    with licensed building trades under one roof.
                  </p>
                </FadeIn>
                <FadeIn delay={1200} duration={1000}>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="bg-clay-500 text-soil-950 px-8 py-3 rounded-lg font-medium transition-colors hover:bg-clay-400"
                    >
                      Get a Quote
                    </Link>
                    <Link
                      to="/services"
                      className="liquid-glass border border-sand-50/20 text-sand-50 px-8 py-3 rounded-lg font-medium transition-colors hover:bg-clay-500 hover:text-soil-950"
                    >
                      Our Services
                    </Link>
                  </div>
                </FadeIn>
              </div>
              <div className="mt-10 flex flex-col items-start gap-3 lg:mt-0 lg:items-end">
                <FadeIn delay={1400} duration={1000}>
                  <div className="liquid-glass rounded-xl border border-sand-50/20 px-6 py-3">
                    <p className="text-lg font-light md:text-xl lg:text-2xl">
                      Earthworks. Roading. Building.
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={1700} duration={1000}>
                  <ReviewStrip />
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* One crew, start to finish */}
      <section className="px-6 md:px-12 lg:px-16 pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="accent-rule text-3xl md:text-4xl font-normal mb-6" style={{ letterSpacing: '-0.03em' }}>
              One crew, from the first cut to the final fit off
            </h2>
            <p className="text-sand-300 leading-relaxed mb-4">
              Jai Civil Limited is a Papakura based contractor that covers the whole chain: we
              cut and prepare the site, build the driveway and put up the structure under a
              Licensed Building Practitioner. No handover gaps between an earthworks company and
              a builder, because we are both.
            </p>
            <p className="text-sand-300 leading-relaxed mb-6">
              We work across greater Auckland, from Papakura and Franklin to the North Shore and
              Waiheke Island, and travel New Zealand wide for the right projects.
            </p>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-sm text-sand-300 transition-colors hover:text-clay-300"
            >
              See our recent work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
          <Reveal>
            <figure className="overflow-hidden rounded-xl border border-sand-50/20">
              <img
                src="/projects/excavators-sunset.jpg"
                alt="Two Jai Civil excavators parked on a cut building platform at sunset"
                className="h-auto w-full"
                loading="lazy"
              />
              <figcaption className="liquid-glass px-5 py-3 text-sm text-sand-200">
                Machines parked up after a day cutting platforms.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="px-6 md:px-12 lg:px-16 pt-20">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="accent-rule text-3xl md:text-4xl font-normal" style={{ letterSpacing: '-0.03em' }}>
            What we do
          </h2>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm text-sand-300 transition-colors hover:text-clay-300"
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
                className="liquid-glass group flex h-full flex-col rounded-xl border border-sand-50/20 p-6 transition-colors hover:border-clay-400/60"
              >
                <span className="mb-4 inline-flex w-fit rounded-lg border border-clay-500/25 bg-clay-500/10 p-2.5 transition-colors group-hover:bg-clay-500/20">
                  <ServiceIcon icon={service.icon} size={24} className="text-clay-400" />
                </span>
                <h3 className="text-lg font-medium mb-2">{service.name}</h3>
                <p className="text-sm leading-relaxed text-sand-300 mb-4">{service.short}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm text-sand-300 transition-colors group-hover:text-clay-400">
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
          <h2 className="accent-rule text-3xl md:text-4xl font-normal mb-6" style={{ letterSpacing: '-0.03em' }}>
            Areas we serve
          </h2>
          <p className="max-w-2xl text-sand-300 leading-relaxed mb-8">
            Based in {SITE.address.suburb}, working across the whole Auckland region, and New
            Zealand wide for larger projects.
          </p>
          <ul className="flex flex-wrap gap-3">
            {SITE.areas.map((area) => (
              <li
                key={area}
                className="liquid-glass rounded-lg border border-sand-50/20 px-4 py-2 text-sm text-sand-100"
              >
                {area}
              </li>
            ))}
            <li className="liquid-glass rounded-lg border border-clay-400/40 px-4 py-2 text-sm text-clay-400">
              + New Zealand wide
            </li>
          </ul>
        </Reveal>
      </section>

      <Reviews />

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-16 pt-24">
        <Reveal>
          <div className="liquid-glass rounded-xl border border-sand-50/20 px-8 py-12 md:px-12 md:py-16">
            <h2 className="text-3xl md:text-4xl font-normal mb-4" style={{ letterSpacing: '-0.03em' }}>
              Tell us about your project
            </h2>
            <p className="max-w-xl text-sand-300 leading-relaxed mb-8">
              Send a few details or photos and we will come back to you with an honest read on
              the job and a free quote.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-clay-500 text-soil-950 px-8 py-3 rounded-lg font-medium transition-colors hover:bg-clay-400"
              >
                Get a Quote
              </Link>
              <a
                href={whatsappLink()}
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

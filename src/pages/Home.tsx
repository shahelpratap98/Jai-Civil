import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import AnimatedHeading from '../components/AnimatedHeading';
import FadeIn from '../components/FadeIn';
import Photo from '../components/Photo';
import Reveal from '../components/Reveal';
import Reviews from '../components/Reviews';
import StatsBar from '../components/StatsBar';
import ReviewStrip from '../components/ReviewStrip';
import ServiceIcon from '../components/ServiceIcon';
import { FEATURED_SERVICES, SERVICES } from '../data/services';
import { GALLERY } from '../data/gallery';
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
        <div
          className="hero-scrim pointer-events-none absolute inset-x-0 bottom-0 h-3/5"
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-1 flex-col">
          <Header />
          <div className="flex flex-1 flex-col justify-end px-6 pb-12 md:px-12 lg:px-16 lg:pb-16">
            <div className="lg:grid lg:grid-cols-2 lg:items-end">
              <div>
                <AnimatedHeading
                  text={'Shaping Auckland\nfrom the ground up.'}
                  className="hero-copy text-4xl font-normal md:text-5xl lg:text-6xl xl:text-7xl mb-4"
                  style={{ letterSpacing: '-0.04em' }}
                  initialDelay={200}
                />
                <FadeIn delay={800} duration={1000}>
                  <p className="hero-copy text-base md:text-lg text-sand-200 mb-5">
                    Earthworks, roading and civil construction across Auckland and the Waikato,
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
                  <div className="liquid-glass over-media rounded-xl border border-sand-50/20 px-6 py-3">
                    <p className="text-lg font-light md:text-xl lg:text-2xl">
                      Earthworks. Roading. Building.
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={1700} duration={1000}>
                  <ReviewStrip className="over-media" />
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StatsBar />

      {/* Services: the three the business leads with */}
      <section className="px-6 md:px-12 lg:px-16 pt-20">
        <Reveal className="mb-10 max-w-3xl">
          <h2 className="accent-rule text-3xl md:text-4xl font-normal" style={{ letterSpacing: '-0.03em' }}>
            What we do
          </h2>
          <p className="mt-4 text-sand-300 leading-relaxed">
            One crew from the first cut to the final fit off. We cut and prepare the site, build
            the access and put up the structure under a Licensed Building Practitioner, out of
            two yards in {SITE.address.city} and {SITE.depot.suburb}.
          </p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {FEATURED_SERVICES.map((service) => (
            <Reveal key={service.slug}>
              <Link
                to={`/services/${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-sand-50/20 transition-colors hover:border-clay-400/60"
              >
                <div className="relative overflow-hidden">
                  <Photo
                    src={service.cardImage!}
                    alt={service.cardImageAlt ?? service.name}
                    sizes="(min-width: 768px) 32vw, 92vw"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 inline-flex rounded-lg border border-clay-500/30 bg-soil-950/70 p-2.5">
                    <ServiceIcon icon={service.icon} size={22} className="text-clay-400" />
                  </span>
                </div>
                <div className="liquid-glass flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-medium mb-2">{service.name}</h3>
                  <p className="text-sm leading-relaxed text-sand-300 mb-4">{service.short}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm text-sand-300 transition-colors group-hover:text-clay-400">
                    Learn more
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm text-sand-300 transition-colors hover:text-clay-300"
          >
            All {SERVICES.length} services
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      {/* Our work */}
      <section className="px-6 md:px-12 lg:px-16 pt-20">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="accent-rule text-3xl md:text-4xl font-normal" style={{ letterSpacing: '-0.03em' }}>
            Our work
          </h2>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm text-sand-300 transition-colors hover:text-clay-300"
          >
            See all projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.slice(0, 6).map((photo) => (
            <Reveal key={photo.src}>
              <figure className="liquid-glass overflow-hidden rounded-xl border border-sand-50/20">
                <Photo
                  src={photo.src}
                  alt={photo.alt}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="px-5 py-4 text-sm leading-relaxed text-sand-200">
                  {photo.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
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

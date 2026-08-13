import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Photo from '../components/Photo';
import Reveal from '../components/Reveal';
import Reviews from '../components/Reviews';
import { SITE, whatsappLink } from '../siteConfig';

/** The original golden-hour excavator loop. Generated with the same still as
 *  its start and end frame, so it loops without a dissolve. */
const PROJECTS_VIDEO = '/projects-hero.mp4';
const PROJECTS_POSTER = '/projects-hero-poster.jpg';

/** Real job photos supplied by the owner 2026-08-11; captions describe what
 *  is visible rather than claiming named clients or locations. */
const GALLERY = [
  {
    src: '/projects/earthworks-cut-to-fill.jpg',
    alt: 'SANY excavator loading an articulated dump truck with earth',
    caption: 'Bulk earthworks: excavator loading the dump truck on a cut to fill job.',
  },
  {
    src: '/projects/grader-platform.jpg',
    alt: 'Caterpillar 140G grader on a shaped rural building platform',
    caption: 'Grader shaping a rural platform ready for metal.',
  },
  {
    src: '/projects/rural-road-metal.jpg',
    alt: 'Freshly metalled gravel road running over a rural hill',
    caption: 'Fresh metal courses laid and compacted on a rural road.',
  },
  {
    src: '/projects/foundation-setout.jpg',
    alt: 'Crew setting out strip footings with a laser level beside a commercial building',
    caption: 'Setting out strip footings to the engineer’s levels.',
  },
  {
    src: '/projects/reinforcing-steel.jpg',
    alt: 'Reinforcing steel cage tied in a footing trench',
    caption: 'Reinforcing steel tied, spaced and ready for inspection.',
  },
  {
    src: '/projects/foundation-pour.jpg',
    alt: 'Concrete mixer truck discharging into a reinforced footing while a worker screeds',
    caption: 'Pour day: placing and screeding a reinforced footing.',
  },
  {
    src: '/projects/foundation-finished.jpg',
    alt: 'Finished concrete foundation wall and freshly floated footing',
    caption: 'Formed, poured and floated: a finished retaining foundation.',
  },
  {
    src: '/projects/retaining-wall-poles.jpg',
    alt: 'Excavator mounted post driver setting timber poles for a retaining wall, with a second excavator trimming the cut behind',
    caption:
      'Timber pole retaining wall going in: post driver on the arm, digger trimming the cut behind.',
  },
  {
    src: '/projects/retention-pond.jpg',
    alt: 'Stormwater retention pond shaped and lined on a subdivision',
    caption: 'Stormwater retention pond shaped, lined and rock armoured.',
  },
  {
    src: '/projects/excavators-sunset.jpg',
    alt: 'Two excavators parked on a cut building platform at sunset',
    caption: 'Machines parked up after a day cutting platforms.',
  },
];

/** Project types the company takes on, linking to the matching service. */
const PROJECT_TYPES = [
  {
    title: 'Residential driveways and right of ways',
    body: 'Excavation, boxing, compacted metal courses and drainage for new driveways, driveway extensions and shared access ways.',
    service: 'roading-driveways',
  },
  {
    title: 'Section clearing and site preparation',
    body: 'Overgrown sections cleared, topsoil stripped and stockpiled, and building platforms cut ready for construction.',
    service: 'site-preparation',
  },
  {
    title: 'New build platforms and foundations',
    body: 'Site cuts to engineered levels, service trenches and floor slab preparation, followed by the build itself under an LBP.',
    service: 'building',
  },
  {
    title: 'Rural access roads and farm races',
    body: 'Long rural driveways, farm races and access roads built up in compacted courses with water tables and culverts.',
    service: 'roading-driveways',
  },
  {
    title: 'Renovations and kitchens',
    body: 'Interior renovations, kitchen replacements and structural alterations, with the sub trades coordinated in the same job.',
    service: 'renovations-kitchens',
  },
  {
    title: 'Landscaping and drainage',
    body: 'Ground regrades, lawn preparation and subsoil drainage that stops lawns and gardens flooding in winter.',
    service: 'landscaping',
  },
];

export default function Projects() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Same mobile autoplay rescue as the home hero: iOS Low Power Mode and
  // Android Data Saver block autoplay, so retry once the visitor touches.
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
      {/* Video header: kept short so the crop lands on the digger itself and
          the gallery starts near the fold. */}
      <div className="relative flex min-h-[46vh] flex-col md:min-h-[52vh]">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={PROJECTS_VIDEO}
          poster={PROJECTS_POSTER}
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
            <div className="max-w-3xl">
              <h1
                className="hero-copy text-4xl md:text-5xl lg:text-6xl font-normal mb-4"
                style={{ letterSpacing: '-0.04em' }}
              >
                Our projects
              </h1>
              <p className="hero-copy text-sand-200 text-base md:text-lg leading-relaxed">
                Real jobs, straight off our machines: earthworks, roading, foundations and
                drainage from {SITE.address.suburb} out across Auckland, the Waikato and
                beyond.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Photo gallery */}
      <section className="px-6 md:px-12 lg:px-16 pt-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((photo) => (
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

      <section className="px-6 md:px-12 lg:px-16 pt-20">
        <Reveal className="mb-10">
          <h2 className="accent-rule text-3xl md:text-4xl font-normal" style={{ letterSpacing: '-0.03em' }}>
            The kind of work we take on
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECT_TYPES.map((project) => (
            <Reveal key={project.title}>
              <div className="liquid-glass flex h-full flex-col rounded-xl border border-sand-50/20 p-6">
                <h2 className="text-lg font-medium mb-2">{project.title}</h2>
                <p className="text-sm leading-relaxed text-sand-300 mb-5">{project.body}</p>
                <Link
                  to={`/services/${project.service}`}
                  className="group mt-auto inline-flex items-center gap-2 text-sm text-sand-300 transition-colors hover:text-clay-300"
                >
                  About this service
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reviews heading="What our customers say about the work" />

      <section className="px-6 md:px-12 lg:px-16 pt-20">
        <Reveal>
          <div className="liquid-glass rounded-xl border border-sand-50/20 px-8 py-10 md:px-12">
            <h2 className="text-2xl md:text-3xl font-normal mb-3" style={{ letterSpacing: '-0.03em' }}>
              Want to see more examples of our work?
            </h2>
            <p className="max-w-xl text-sand-300 leading-relaxed mb-6">
              WhatsApp us what you are planning and we will send through photos of similar jobs
              we have done, along with an honest read on yours.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={whatsappLink('Hi Jai Civil, could you send me some examples of your work? My project: ')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-clay-500 text-soil-950 px-8 py-3 rounded-lg font-medium transition-colors hover:bg-clay-400"
              >
                WhatsApp {SITE.phoneDisplay}
              </a>
              <Link
                to="/contact"
                className="liquid-glass border border-sand-50/20 text-sand-50 px-8 py-3 rounded-lg font-medium transition-colors hover:bg-clay-500 hover:text-soil-950"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

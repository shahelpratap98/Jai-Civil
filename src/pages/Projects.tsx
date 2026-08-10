import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Reveal from '../components/Reveal';
import { SITE, whatsappLink } from '../siteConfig';

/**
 * Honest projects page: no invented client names, suburbs or photos.
 * These are the project types the company actually takes on; the photo
 * gallery slots in once real job photos are supplied.
 */
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
    body: 'Interior renovations, kitchen replacements and structural alterations, with the electrical work coordinated in the same job.',
    service: 'renovations-kitchens',
  },
  {
    title: 'Landscaping and drainage',
    body: 'Ground regrades, lawn preparation and subsoil drainage that stops lawns and gardens flooding in winter.',
    service: 'landscaping',
  },
];

export default function Projects() {
  return (
    <>
      <Header />
      <section className="px-6 md:px-12 lg:px-16 pt-16 md:pt-24">
        <div className="max-w-3xl">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            Our projects
          </h1>
          <p className="text-sand-300 text-base md:text-lg leading-relaxed">
            The kind of work Jai Civil takes on across Auckland, from {SITE.address.suburb} out
            to the wider region. We are compiling a photo gallery of recent jobs; in the
            meantime, message us and we will send photos of work relevant to your project.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-16 pt-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECT_TYPES.map((project) => (
            <Reveal key={project.title}>
              <div className="liquid-glass flex h-full flex-col rounded-xl border border-sand-50/20 p-6">
                <h2 className="text-lg font-medium mb-2">{project.title}</h2>
                <p className="text-sm leading-relaxed text-sand-300 mb-5">{project.body}</p>
                <Link
                  to={`/services/${project.service}`}
                  className="group mt-auto inline-flex items-center gap-2 text-sm text-sand-300 transition-colors hover:text-sand-50"
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

      <section className="px-6 md:px-12 lg:px-16 pt-20">
        <Reveal>
          <div className="liquid-glass rounded-xl border border-sand-50/20 px-8 py-10 md:px-12">
            <h2 className="text-2xl md:text-3xl font-normal mb-3" style={{ letterSpacing: '-0.03em' }}>
              Want to see examples of our work?
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
                className="bg-sand-100 text-soil-950 px-8 py-3 rounded-lg font-medium transition-colors hover:bg-sand-200"
              >
                WhatsApp {SITE.phoneDisplay}
              </a>
              <Link
                to="/contact"
                className="liquid-glass border border-sand-50/20 text-sand-50 px-8 py-3 rounded-lg font-medium transition-colors hover:bg-sand-100 hover:text-soil-950"
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

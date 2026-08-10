/**
 * Single source of truth for the service pages. Nav, the services index, each
 * service page, the sitemap and the JSON-LD all derive from this list.
 *
 * Copy rules (SEO playbook): no invented stats, prices, review counts or
 * certifications. Everything stated here comes from what the company publicly
 * says about itself: civil and earthworks, roads, LBP building, renovations,
 * kitchens, landscaping, retaining and decks, Papakura based, Auckland and NZ wide.
 */

export type Faq = { question: string; answer: string };

export type Service = {
  slug: string;
  name: string;
  /** Icon name from lucide-react, resolved in components. */
  icon: 'Mountain' | 'Route' | 'LandPlot' | 'Trees' | 'HardHat' | 'Hammer' | 'Layers' | 'Fence';
  /** Card blurb on the index and home page. */
  short: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  includesTitle: string;
  includes: string[];
  faqs: Faq[];
};

export const SERVICES: Service[] = [
  {
    slug: 'earthworks',
    name: 'Earthworks & Excavation',
    icon: 'Mountain',
    short:
      'General earthworks and excavation for residential and commercial sites: cuts, fills, trenching and site shaping.',
    seoTitle: 'Earthworks & Excavation Auckland',
    metaDescription:
      'Earthworks and excavation across Auckland from a Papakura based civil contractor. Site cuts, fills, trenching and ground shaping for residential and commercial projects. Free quotes.',
    h1: 'Earthworks and excavation across Auckland',
    intro: [
      'Jai Civil is a Papakura based civil and earthworks contractor working across greater Auckland. Earthworks is the core of what we do: cutting, filling, shaping and compacting ground so the next stage of your project starts on a solid, accurate platform.',
      'We handle jobs from tight residential sections through to larger commercial and rural sites. Because we also build, we understand what the trades that follow us need: correct levels, clean benches, stable batters and a site that drains the right way.',
    ],
    includesTitle: 'Earthworks services we provide',
    includes: [
      'Site cuts and fills to engineered levels',
      'Building platforms and floor slabs preparation',
      'Trenching for services and drainage',
      'Ground shaping, benching and batters',
      'Compaction and metal placement',
      'Spoil removal and clean site handover',
    ],
    faqs: [
      {
        question: 'What size earthworks jobs do you take on?',
        answer:
          'From single residential section cuts through to larger commercial and rural earthworks. Send through your plans or a description of the job and we will tell you straight away whether it is a fit.',
      },
      {
        question: 'Which areas do you cover for earthworks?',
        answer:
          'We are based in Papakura and work across greater Auckland, including Manukau, Franklin, the North Shore, Waitākere, Rodney and Waiheke Island, and we travel New Zealand wide for larger projects.',
      },
      {
        question: 'Can you work to engineered drawings?',
        answer:
          'Yes. We regularly work to engineered levels and drawings, and we coordinate with your engineer or surveyor where the job requires it.',
      },
    ],
  },
  {
    slug: 'roading-driveways',
    name: 'Roading & Driveways',
    icon: 'Route',
    short:
      'Road construction, farm races, right of ways and driveways: boxed, metalled and finished to handle Auckland weather.',
    seoTitle: 'Roading & Driveway Construction Auckland',
    metaDescription:
      'Driveway and road construction across Auckland. Excavation, boxing, metal courses and finishing for driveways, right of ways, farm races and small roads. Papakura based. Free quotes.',
    h1: 'Roading and driveway construction',
    intro: [
      'A driveway or private road only lasts as long as what is underneath it. We build ours from the ground up: correct excavation, proper basecourse, compaction in layers and drainage that moves water off the surface instead of under it.',
      'From a straight residential driveway to shared right of ways, rural driveways and farm access, Jai Civil constructs surfaces that stand up to daily use and Auckland rain.',
    ],
    includesTitle: 'Roading and driveway work we do',
    includes: [
      'New driveway construction and driveway extensions',
      'Right of way and shared access construction',
      'Farm races and rural access roads',
      'Excavation, boxing and metal courses',
      'Drainage, water tables and culverts',
      'Repairs, regrading and resurfacing preparation',
    ],
    faqs: [
      {
        question: 'Do you build both residential and rural driveways?',
        answer:
          'Yes. We build standard residential driveways as well as long rural driveways, farm races and shared right of ways across the Auckland region.',
      },
      {
        question: 'What is involved in building a driveway that lasts?',
        answer:
          'The ground is excavated to a stable base, boxed to the right depth, then built up in compacted metal courses with drainage falls. Skipping any of those steps is why driveways rut and pothole.',
      },
      {
        question: 'Can you fix an existing driveway?',
        answer:
          'Often, yes. We assess whether the base is sound and quote either a regrade and re-metal or a rebuild of the failed sections.',
      },
    ],
  },
  {
    slug: 'site-preparation',
    name: 'Site Preparation & Clearing',
    icon: 'LandPlot',
    short:
      'Section clearing, demolition preparation and site establishment so your build starts on a clean, workable site.',
    seoTitle: 'Site Preparation & Section Clearing Auckland',
    metaDescription:
      'Site preparation and section clearing across Auckland. Vegetation removal, strip and stockpile, access, hardstands and building platform preparation from a Papakura based contractor.',
    h1: 'Site preparation and section clearing',
    intro: [
      'Before anything can be built, the site has to be ready: cleared, stripped, accessible and safe. Jai Civil prepares residential sections and commercial sites across Auckland so that builders, drainlayers and other trades can start work without delays.',
      'We combine clearing, earthworks and access construction in one visit wherever possible, which keeps machine time down and your costs with it.',
    ],
    includesTitle: 'Site preparation services',
    includes: [
      'Section and vegetation clearing',
      'Topsoil strip and stockpile',
      'Temporary access and hardstands',
      'Building platform preparation',
      'Silt control measures',
      'Site cleanups and spoil removal',
    ],
    faqs: [
      {
        question: 'Can you clear a fully overgrown section?',
        answer:
          'Yes. We clear vegetation and scrub, strip topsoil where required and leave the section ready for setout and construction.',
      },
      {
        question: 'Do you prepare sites for new builds?',
        answer:
          'Yes. Building platforms, access ways and service trenches are our bread and butter, and our own building background means we prepare sites the way builders actually need them.',
      },
      {
        question: 'How do I get a price for site preparation?',
        answer:
          'Call, WhatsApp or send the address and a few photos through the contact form. For most sections we can give an accurate quote after one site visit.',
      },
    ],
  },
  {
    slug: 'landscaping',
    name: 'Landscaping',
    icon: 'Trees',
    short:
      'Structural landscaping backed by real earthmoving gear: levelling, lawns, drainage and outdoor areas that last.',
    seoTitle: 'Landscaping Papakura & South Auckland',
    metaDescription:
      'Structural landscaping in Papakura and across Auckland. Ground levelling, lawn preparation, drainage and outdoor areas built by a civil and earthworks contractor. Free quotes.',
    h1: 'Landscaping built on proper groundwork',
    intro: [
      'Good landscaping starts under the surface. As an earthworks contractor, Jai Civil brings the machines and groundwork knowledge that most landscape jobs actually need: shaping, drainage and compaction done properly before anything decorative goes in.',
      'We take on structural landscaping across Papakura, South Auckland and the wider region, working in alongside your planting or design plans.',
    ],
    includesTitle: 'Landscaping work we take on',
    includes: [
      'Ground shaping and levelling',
      'Lawn preparation and topsoil spreading',
      'Garden drainage solutions',
      'Excavation for patios, paths and decks',
      'Section tidy ups and regrades',
      'Truck and digger hire for landscape projects',
    ],
    faqs: [
      {
        question: 'Do you do full landscape design?',
        answer:
          'Our strength is the structural side: earthworks, levelling, drainage and hard surfaces. We are happy to work to your design or alongside your landscape designer.',
      },
      {
        question: 'My lawn floods every winter. Can you fix it?',
        answer:
          'Usually the cause is poor falls or no subsoil drainage. We assess the levels, then regrade and install drainage so water moves where it should.',
      },
      {
        question: 'Do you remove green waste and spoil?',
        answer: 'Yes. We cart away vegetation, spoil and old material as part of the job.',
      },
    ],
  },
  {
    slug: 'retaining-walls',
    name: 'Retaining Walls',
    icon: 'Layers',
    short:
      'Timber, concrete and block retaining walls, engineered where required, with the drainage behind them done properly.',
    seoTitle: 'Retaining Wall Builders Auckland',
    metaDescription:
      'Retaining wall construction in Auckland and New Zealand wide. Timber, concrete and block walls with proper drainage, built by a civil and earthworks contractor. Free quotes.',
    h1: 'Retaining walls built to hold',
    intro: [
      'A retaining wall is only as good as what you cannot see: the founding, the drainage behind it and the compaction around it. As an earthworks and civil contractor, Jai Civil builds retaining walls from the ground conditions up, not just from the timber out.',
      'We build walls for driveways, building platforms, section boundaries and slips, from Papakura across Auckland and New Zealand wide for larger projects.',
    ],
    includesTitle: 'Retaining wall work we do',
    includes: [
      'Timber pole and timber post walls',
      'Concrete and masonry block walls',
      'Engineered walls to producer statements',
      'Subsoil drainage and backfill behind every wall',
      'Excavation, benching and site reinstatement',
      'Slip repairs and wall replacements',
    ],
    faqs: [
      {
        question: 'Does my retaining wall need a consent?',
        answer:
          'In most of New Zealand a wall over 1.5 metres, or one supporting a surcharge like a driveway or building, needs engineering input and building consent. We tell you straight away which side of the line your wall sits on and work with the engineer where needed.',
      },
      {
        question: 'Why do retaining walls fail?',
        answer:
          'Almost always water: no drainage behind the wall, so the ground swells and pushes it over. Every wall we build gets subsoil drainage and free draining backfill as standard.',
      },
      {
        question: 'Timber, block or concrete: which should I choose?',
        answer:
          'Timber is usually the most economical for boundary and garden walls; concrete and block suit higher walls, tight sites and walls that carry load. We quote the option that fits the ground and the budget, not the dearest one.',
      },
    ],
  },
  {
    slug: 'decks-outdoor-living',
    name: 'Decks & Outdoor Living',
    icon: 'Fence',
    short:
      'Decks, pergolas and outdoor living areas, built under an LBP with the groundwork and drainage handled by the same crew.',
    seoTitle: 'Deck Builders & Outdoor Living Auckland',
    metaDescription:
      'Deck building and outdoor living areas in Auckland and New Zealand wide. Decks, pergolas, patios and landscaped outdoor spaces built under an LBP by Jai Civil. Free quotes.',
    h1: 'Decks and outdoor living areas',
    intro: [
      'A good outdoor area is part build, part groundwork. Jai Civil designs and builds decks, pergolas and outdoor living spaces with the advantage that the excavation, drainage and landscaping around them are done by the same crew, in the same job.',
      'Building work is carried out under a Licensed Building Practitioner, which matters for larger and higher decks where the structure is restricted building work.',
    ],
    includesTitle: 'Outdoor living work we build',
    includes: [
      'Timber and composite decks',
      'Pergolas, louvres and shade structures',
      'Patios, paths and paved areas',
      'Outdoor steps and platforms on sloped sections',
      'Drainage and ground preparation around outdoor areas',
      'Landscaping to finish the space',
    ],
    faqs: [
      {
        question: 'Do decks need building consent?',
        answer:
          'In New Zealand a deck generally needs consent when it is more than 1.5 metres above ground, and lower decks still have to meet the Building Code. Our LBP cover means the structural side is done and documented properly either way.',
      },
      {
        question: 'Timber or composite decking?',
        answer:
          'Timber costs less up front and can be re-sanded; composite costs more but skips the oiling and staining. We price both if you are weighing it up.',
      },
      {
        question: 'Can you handle a sloped or difficult section?',
        answer:
          'Yes, that is where we are strongest. We bring earthmoving gear and retaining experience, so decks and outdoor areas on slopes, fill or soft ground are engineered and built as one piece of work.',
      },
    ],
  },
  {
    slug: 'building',
    name: 'LBP Building',
    icon: 'HardHat',
    short:
      'Licensed Building Practitioner building work, from decks and fences to full builds, with the site works done in house.',
    seoTitle: 'LBP Builders South Auckland',
    metaDescription:
      'LBP building work in Papakura and across Auckland from Jai Civil. New builds, decks, fences and structural work, with earthworks and site preparation handled by the same crew.',
    h1: 'Building work, licensed and done in house',
    intro: [
      'Jai Civil carries out building work under a Licensed Building Practitioner, which means restricted building work is done and signed off by someone licensed to do it.',
      'What makes us different from a standalone building company is that the ground side of the project, the excavation, the platform, the drainage trenches and the access, is handled by the same crew. One contractor, one point of contact, no gap between the site works and the build.',
    ],
    includesTitle: 'Building services',
    includes: [
      'New builds and structural building work under an LBP',
      'Decks, fences and outdoor structures',
      'Sleepouts and minor dwellings',
      'Foundations and floor slabs',
      'Coordination of earthworks, drainage and build in one contract',
      'Project management with your council consent documents',
    ],
    faqs: [
      {
        question: 'What does LBP mean for my project?',
        answer:
          'A Licensed Building Practitioner is licensed by the government to carry out or supervise restricted building work, the structural and weathertightness critical parts of a build. It is a legal requirement for that work.',
      },
      {
        question: 'Can you do both my earthworks and my build?',
        answer:
          'Yes, that is the point of Jai Civil. We cut the site, prepare the platform and then build on it, which removes the usual handover gap between an earthworks contractor and a builder.',
      },
      {
        question: 'Do you work with council consents?',
        answer:
          'Yes. We build to your consented plans and work in with your designer and the council inspection process.',
      },
    ],
  },
  {
    slug: 'renovations-kitchens',
    name: 'Renovations & Kitchens',
    icon: 'Hammer',
    short:
      'Home renovations and kitchen installations, managed end to end by the same team that handles the structural work.',
    seoTitle: 'Home Renovations & Kitchens Auckland',
    metaDescription:
      'Home renovations and kitchen installations in Papakura and across Auckland. Structural alterations, interior upgrades and kitchens from a contractor with LBP building cover.',
    h1: 'Renovations and kitchens',
    intro: [
      'Renovations go wrong in the gaps between trades. Jai Civil takes on home renovations and kitchen projects as one managed job: demolition, structural changes, building work and the finishing trades coordinated together.',
      'Because our building work is covered by a Licensed Building Practitioner, we can take on renovations that involve structural walls and other restricted building work, not just cosmetic upgrades.',
    ],
    includesTitle: 'Renovation work we take on',
    includes: [
      'Kitchen removals and new kitchen installations',
      'Interior renovations and reconfigurations',
      'Structural alterations under an LBP',
      'Bathroom and laundry renovations',
      'Decks, extensions and indoor outdoor flow',
      'Electrical work coordinated in house',
    ],
    faqs: [
      {
        question: 'Do you renovate kitchens only, or whole homes?',
        answer:
          'Both. We take on single room projects like a kitchen or bathroom as well as larger whole home renovations and alterations.',
      },
      {
        question: 'Can you move or remove walls?',
        answer:
          'Yes. Structural alterations are restricted building work, and ours is carried out under a Licensed Building Practitioner with the correct consents.',
      },
      {
        question: 'Who handles the electrical side of a renovation?',
        answer:
          'We coordinate electrical work within the same project, so the wiring, switchboard and fit off are planned with the build instead of after it.',
      },
    ],
  },
];

export function serviceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

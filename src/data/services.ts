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
  icon:
    | 'Mountain'
    | 'Route'
    | 'LandPlot'
    | 'Trees'
    | 'HardHat'
    | 'Hammer'
    | 'Layers'
    | 'Fence'
    | 'Truck'
    | 'Construction'
    | 'Waves'
    | 'TreePine';
  /** Card image on the home page, for the featured three. */
  cardImage?: string;
  cardImageAlt?: string;
  /** Optional photo shown on the service page (path under public/). */
  image?: string;
  imageAlt?: string;
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
    cardImage: '/projects/svc-earthworks.jpg',
    cardImageAlt: 'Excavator cutting a benched building platform into a hillside at golden hour',
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
          'We are based in Papakura and work across greater Auckland, including Manukau, Franklin, the North Shore, Waitākere, Rodney and Waiheke Island, as well as the Waikato, and we travel New Zealand wide for larger projects.',
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
    cardImage: '/projects/svc-roading.jpg',
    cardImageAlt: 'Newly built gravel driveway curving through a rural property',
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
    slug: 'equipment-hire',
    name: 'Equipment Hire',
    icon: 'Truck',
    image: '/projects/tipper-hire.jpg',
    imageAlt:
      'Jai Civil Isuzu 6 wheeler tipper truck with transporter trailer carrying a roller',
    short:
      'Operated equipment hire, headlined by our Isuzu 6W tipper truck with transporter trailer for cartage and machine moves.',
    seoTitle: 'Equipment & 6W Tipper Truck Hire Auckland',
    metaDescription:
      'Equipment hire in Auckland and New Zealand wide. 6 wheeler tipper truck hire with driver for metal, topsoil and spoil cartage, machine transport on the trailer, and operated earthmoving gear by arrangement.',
    h1: 'Equipment hire',
    intro: [
      'Jai Civil hires out the same gear that services our own jobs, with operators who know sites, not just roads. The headline unit is our 6W tipper truck hire: an Isuzu 6 wheeler tipper with a transporter trailer, available with an experienced driver for cartage and machine moves.',
      'The tipper covers metal and aggregate deliveries, topsoil in, spoil and cleanfill out, and machine shifts on the trailer. Our earthmoving machines are also available with operators by arrangement. Based in Papakura, working across Auckland and New Zealand wide.',
    ],
    includesTitle: 'What is available for hire',
    includes: [
      '6W tipper truck hire with driver',
      'Metal, aggregate and topsoil cartage to site',
      'Spoil and cleanfill removal',
      'Machine transport on the transporter trailer',
      'Site to site shifts for diggers and rollers',
      'Operated earthmoving gear by arrangement',
    ],
    faqs: [
      {
        question: 'Does the tipper come with a driver?',
        answer:
          'Yes. The 6W tipper is hired with an experienced driver, so your load or machine move is handled start to finish.',
      },
      {
        question: 'Can you move my digger or roller?',
        answer:
          'Yes. The transporter trailer handles small and mid size machines. Tell us the machine and where it needs to go and we will confirm it fits.',
      },
      {
        question: 'Do you dry hire machines without an operator?',
        answer:
          'Our gear goes out with our own operators. Tell us what the job needs and we will quote the machine and operator together.',
      },
      {
        question: 'How do I get a price?',
        answer:
          'Call, WhatsApp or use the quote form with what needs moving or doing, where, and rough quantities. We come back with an hourly or per load rate.',
      },
    ],
  },
  {
    slug: 'steelfixing',
    name: 'Steelfixing',
    icon: 'Construction',
    short:
      'Reinforcing steel cut, bent, tied and spaced to the engineer’s drawings, ready to pass inspection before the pour.',
    seoTitle: 'Steelfixing & Reinforcing Auckland, Waikato',
    metaDescription:
      'Steelfixing and reinforcing steel across Auckland and the Waikato. Footings, slabs, walls and structures tied to engineered drawings and ready for inspection. Free quotes.',
    h1: 'Steelfixing and reinforcing',
    intro: [
      'Concrete is only as strong as the steel inside it. Jai Civil fixes reinforcing for footings, slabs, retaining walls and structures, tied and spaced to the engineer’s drawings so it passes inspection first time.',
      'Because we also do the excavation and the pour, the steel goes in between our own trades rather than waiting on a separate crew. That is usually where programmes slip.',
    ],
    image: '/projects/reinforcing-steel.jpg',
    imageAlt: 'Reinforcing steel cage tied and spaced in a footing trench',
    includesTitle: 'Steelfixing work we do',
    includes: [
      'Footing and foundation cages',
      'Slab mesh and starter bars',
      'Retaining and structural wall steel',
      'Cutting, bending and tying on site',
      'Cover spacers and correct placement for inspection',
      'Coordination with the pour so steel is not left standing',
    ],
    faqs: [
      {
        question: 'Do you work to engineered drawings?',
        answer:
          'Yes. Reinforcing is fixed to the structural drawings and schedule, with the cover and spacing the engineer specifies, ready for inspection before any concrete is placed.',
      },
      {
        question: 'Can you supply the steel as well as fix it?',
        answer:
          'We can arrange supply and fixing together, or fix steel you or your supplier have already delivered to site. Tell us which suits and we will price it that way.',
      },
      {
        question: 'Do you take on steelfixing on its own?',
        answer:
          'Yes. Steelfixing is often part of a larger job for us, but we take it on as a standalone package for builders and main contractors too.',
      },
    ],
  },
  {
    slug: 'erosion-protection',
    name: 'Sea & River Protection',
    icon: 'Waves',
    short:
      'Erosion control on coastal and river edges: rock armour, revetments, batter protection and bank stabilisation.',
    seoTitle: 'Erosion Control, Sea & River Protection NZ',
    metaDescription:
      'Coastal and river erosion protection across Auckland, the Waikato and New Zealand wide. Rock armour, revetments, bank stabilisation and scour protection by a civil contractor.',
    h1: 'Sea and river protection',
    intro: [
      'Water takes ground away quietly, then all at once. Jai Civil builds the works that stop it: rock armour and revetments on coastal edges, bank stabilisation and scour protection along rivers and streams, and batter protection wherever water is cutting into a site.',
      'This is machine and ground work at its most demanding, on tidal and river edges with tight windows and consent conditions to meet. It is exactly the kind of civil work our plant and crew are set up for, anywhere in Auckland, the Waikato or further afield.',
    ],
    image: '/projects/retention-pond.jpg',
    imageAlt: 'Shaped and rock armoured stormwater basin on a subdivision',
    includesTitle: 'Erosion and protection work',
    includes: [
      'Rock armour and rip rap placement',
      'Revetments and coastal edge protection',
      'River and stream bank stabilisation',
      'Scour protection around structures and outlets',
      'Stormwater basins, swales and outlet protection',
      'Silt and sediment control during the works',
    ],
    faqs: [
      {
        question: 'Do coastal and river works need consent?',
        answer:
          'Usually yes. Works in the coastal marine area or a river bed generally need resource consent from the regional council. We build to the consented design and its conditions, and work in with your engineer or consultant.',
      },
      {
        question: 'Can you fix a bank that is already washing out?',
        answer:
          'Yes. We assess what the water is actually doing, then quote the repair: reshaping the batter, armouring the toe, and protecting the outlet or structure causing the scour.',
      },
      {
        question: 'How far do you travel for this work?',
        answer:
          'From Papakura and our Huntly yard we cover Auckland and the greater Waikato as standard, and travel New Zealand wide for larger protection projects.',
      },
    ],
  },
  {
    slug: 'tree-felling-clearing',
    name: 'Tree Felling & Clearing',
    icon: 'TreePine',
    short:
      'Tree felling, removals and vegetation clearing with a qualified arborist on the team and machines to clear the site after.',
    seoTitle: 'Tree Felling, Arborist & Clearing Auckland',
    metaDescription:
      'Tree felling, removals and vegetation clearing across Auckland and the Waikato. Qualified arborist plus the machines to mulch, cart away and leave the site clear. Free quotes.',
    h1: 'Tree felling and site clearing',
    intro: [
      'Most tree jobs end with a section full of timber and a customer chasing a second contractor to shift it. Jai Civil has a qualified arborist on the team and the machines to clear up afterwards, so the tree comes down and the site goes away clean in one job.',
      'We take on single tree removals through to full section and lot clearing ahead of earthworks, across Auckland and the greater Waikato.',
    ],
    includesTitle: 'Tree and clearing work',
    includes: [
      'Tree felling and dismantling by a qualified arborist',
      'Stump grinding and root removal',
      'Vegetation, scrub and hedge clearing',
      'Full section and lot clearing before earthworks',
      'Mulching, chipping and green waste removal',
      'Access tracks cut in for difficult sites',
    ],
    faqs: [
      {
        question: 'Do you have a qualified arborist?',
        answer:
          'Yes. Tree work is carried out by a qualified arborist on our team, backed by our own machines and trucks for the clearing and cartage.',
      },
      {
        question: 'Do I need council approval to remove a tree?',
        answer:
          'Some trees are protected, whether scheduled individually, covered by a notable tree listing, or protected in a significant ecological area. We tell you when a job looks like it needs council approval before anything starts.',
      },
      {
        question: 'What happens to the timber and green waste?',
        answer:
          'We chip, mulch or cart it away as part of the job. You are not left with a section full of logs to deal with.',
      },
    ],
  },
  {
    slug: 'retaining-walls',
    name: 'Retaining Walls',
    icon: 'Layers',
    short:
      'Timber, concrete and block retaining walls, engineered where required, with the drainage behind them done properly.',
    cardImage: '/projects/svc-retaining.jpg',
    cardImageAlt: 'Finished timber pole retaining wall holding a cut bank, with gravel backfill',
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
      'Sub trades coordinated within the one project',
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
        question: 'Do you manage the other trades?',
        answer:
          'Yes. We coordinate the sub trades a renovation needs within the same project, so their work is planned with the build instead of after it.',
      },
    ],
  },
];

/**
 * The three the home page leads with. Everything else stays one click away on
 * /services, which keeps the home page short without losing any SEO page.
 * These three are the company's core civil trade: the excavating work its
 * Companies Register classification names, the roading that follows it, and
 * retaining, which is the job its own supplied photos show most.
 */
export const FEATURED_SLUGS = ['earthworks', 'roading-driveways', 'retaining-walls'] as const;

export const FEATURED_SERVICES: Service[] = FEATURED_SLUGS.map(
  (slug) => SERVICES.find((s) => s.slug === slug)!
);

export function serviceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

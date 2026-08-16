/**
 * Real job photos supplied by the owner. Captions describe what is visible
 * rather than claiming named clients or locations. Shared by the projects
 * gallery and the "our work" strip on the home page, so a photo added here
 * shows up in both.
 */
export type GalleryPhoto = { src: string; alt: string; caption: string };

export const GALLERY: GalleryPhoto[] = [
  {
    src: '/projects/earthworks-cut-to-fill.jpg',
    alt: 'SANY excavator loading an articulated dump truck with earth',
    caption: 'Bulk earthworks: excavator loading the dump truck on a cut to fill job.',
  },
  {
    src: '/projects/retaining-wall-poles.jpg',
    alt: 'Excavator mounted post driver setting timber poles for a retaining wall, with a second excavator trimming the cut behind',
    caption:
      'Timber pole retaining wall going in: post driver on the arm, digger trimming the cut behind.',
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
    src: '/projects/foundation-setout.jpg',
    alt: 'Crew setting out strip footings with a laser level beside a commercial building',
    caption: 'Setting out strip footings to the engineer’s levels.',
  },
  {
    src: '/projects/foundation-finished.jpg',
    alt: 'Finished concrete foundation wall and freshly floated footing',
    caption: 'Formed, poured and floated: a finished retaining foundation.',
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

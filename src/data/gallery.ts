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
    src: '/projects/road-shoulder-drainage.jpg',
    alt: 'Excavator and tipper truck working the shoulder of a rural highway behind a cone taper, with traffic queued past the site',
    caption: 'Shoulder widening and drainage on a main road, under live traffic management.',
  },
  {
    src: '/projects/road-drain-excavator.jpg',
    alt: 'Excavator cutting a drain along the edge of a sealed rural road with cones and a stop go controller',
    caption: 'Cutting the side drain back in along the road edge.',
  },
  {
    src: '/projects/road-shoulder-loading.jpg',
    alt: 'Excavator loading spoil into a tipper truck on the road shoulder with cones and a variable message board',
    caption: 'Loading spoil straight to the truck so the lane reopens the same day.',
  },
  {
    src: '/projects/road-shoulder-diggers.jpg',
    alt: 'Two excavators working a metalled road shoulder past a temporary 30 kilometre speed sign',
    caption: 'Two machines on the shoulder behind a temporary 30 zone.',
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
  {
    src: '/projects/raft-slab-steel.jpg',
    alt: 'Reinforcing steel and void formers laid out across a raft slab inside a sheet piled excavation, apartment tower behind',
    caption: 'Raft slab steel and void formers tied out inside the shored excavation.',
  },
  {
    src: '/projects/deck-steel-cranes.jpg',
    alt: 'Beam cages and slab reinforcing on a commercial deck with tower cranes overhead',
    caption: 'Beam cages and deck steel on a commercial build, cranes overhead.',
  },
  {
    src: '/projects/column-starters.jpg',
    alt: 'Column starter bars standing above a formed foundation beam on an urban construction site',
    caption: 'Column starters set and the ground beam boxed, ready to pour.',
  },
  {
    src: '/projects/precast-panels.jpg',
    alt: 'Propped precast concrete wall panels standing beside a reinforced footing on a new build',
    caption: 'Precast panels propped and the footing steel run out alongside.',
  },
];

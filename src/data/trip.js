// ============================================================================
//  OLIVIA + DAD  •  NEW YORK CITY  •  OCTOBER 2026
//  -------------------------------------------------------------------------
//  This is the ONE file to edit. Everything the site shows comes from here.
//  Anything marked  tbd: true  shows as "coming soon" instead of fake info.
// ============================================================================

export const trip = {
  travelerName: 'Olivia',
  // Countdown target. Thursday, October 22, 2026.
  // Format: 'YYYY-MM-DDTHH:MM:SS' in local time.
  startDate: '2026-10-22T09:00:00',
  city: 'New York City',
  month: 'October 2026',
  philosophy: ['Amazing > packed.', "We're leaving room for New York to surprise us."],
}

// ---------------------------------------------------------------------------
//  IMAGES
//  Ambiance shots set the NYC mood. Venue photos are intentionally left as
//  labeled placeholders so nothing is mislabeled. Drop a real URL or a file
//  in /public and point to it here whenever you want.
// ---------------------------------------------------------------------------
export const images = {
  heroSkyline:
    'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1600&q=80', // NYC skyline / bridge
  taxi:
    'https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?auto=format&fit=crop&w=1200&q=80', // yellow taxi
  broadway:
    'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1200&q=80', // Broadway lights
  liberty:
    'https://images.unsplash.com/photo-1602940659805-770d1b3b9911?auto=format&fit=crop&w=1200&q=80', // Statue of Liberty
  ballet:
    'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1200&q=80', // ballet
  bakery:
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80', // pastries
  omakase:
    'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=1200&q=80', // sushi omakase
  fashion:
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80', // fashion / design
  tea:
    'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80', // afternoon tea
  subway:
    'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?auto=format&fit=crop&w=1200&q=80', // subway
}

// ---------------------------------------------------------------------------
//  THE FOUR BOOKED ANCHORS  (shown on the hero)
// ---------------------------------------------------------------------------
export const anchors = [
  {
    id: 'liberty',
    title: 'Statue of Liberty',
    detail: 'Pedestal Reserve tickets',
    when: 'Friday',
    image: images.liberty,
    stamp: 'BOOKED',
  },
  {
    id: 'hamilton',
    title: 'Hamilton',
    detail: 'Broadway • Friday, 7:00 PM',
    when: 'Friday night',
    image: images.broadway,
    stamp: 'BOOKED',
  },
  {
    id: 'omakase',
    title: 'Omakase Dinner',
    detail: 'A surprise from the chef',
    when: 'Thursday',
    image: images.omakase,
    stamp: 'BOOKED',
  },
  {
    id: 'ballet',
    title: 'American Ballet Theatre',
    detail: 'Saturday • tickets bought',
    when: 'Saturday',
    image: images.ballet,
    stamp: 'BOOKED',
  },
]

// ---------------------------------------------------------------------------
//  WEEKEND AT A GLANCE
//  "open" blocks are intentionally larger + styled as breathing room.
// ---------------------------------------------------------------------------
export const days = [
  {
    id: 'thu',
    day: 'Thursday',
    tag: 'Arrive',
    items: ['Land in New York', 'Omakase dinner', 'First NYC night walk'],
    open: false,
  },
  {
    id: 'fri',
    day: 'Friday',
    tag: 'Liberty + Broadway',
    items: ['Statue of Liberty', 'Breathing room', 'Hamilton at 7:00'],
    open: false,
  },
  {
    id: 'sat',
    day: 'Saturday',
    tag: 'The slower day',
    items: ['Bakery walk', 'One creative stop', 'Big open afternoon', 'Ballet at night'],
    open: true,
  },
  {
    id: 'sun',
    day: 'Sunday',
    tag: 'Easy',
    items: ['Slow breakfast', 'Head home'],
    open: false,
  },
]

// ---------------------------------------------------------------------------
//  OMAKASE
//  Restaurant currently recorded as "Karami" — no address/menu invented.
// ---------------------------------------------------------------------------
export const omakase = {
  restaurantName: 'Karami',
  reservationTbd: true, // when the confirmation arrives, fill the fields below and flip to false
  reservationTime: '',
  address: '',
  bookingUrl: '',
  videoUrl: '', // paste a YouTube link to watch before the trip
  foods: [
    { name: 'Salmon', note: 'silky, a little sweet' },
    { name: 'Tuna', note: 'clean and mild' },
    { name: 'Shrimp', note: 'often cooked' },
    { name: 'Eel', note: 'warm, sweet glaze' },
    { name: 'Wagyu', note: 'melt-in-your-mouth beef' },
    { name: 'Tamago', note: 'sweet Japanese omelet' },
    { name: 'Seared fish', note: 'torched on top, warm' },
  ],
}

// ---------------------------------------------------------------------------
//  STATUE OF LIBERTY
// ---------------------------------------------------------------------------
export const liberty = {
  steps: [
    { n: 1, title: 'Ferry from The Battery', body: 'Board the boat and watch the skyline shrink behind you.' },
    { n: 2, title: 'Liberty Island', body: 'Walk right up to her. She is bigger than you think.' },
    { n: 3, title: 'Inside the Pedestal', body: 'Go up to the observation level — a view only some visitors get.' },
    { n: 4, title: 'The Museum + Original Torch', body: 'See the real original torch that used to light the harbor.' },
  ],
  fact: 'She was dedicated in 1886 and stands about 305 feet from the ground to the tip of her torch.',
}

// ---------------------------------------------------------------------------
//  HAMILTON
// ---------------------------------------------------------------------------
export const hamilton = {
  when: 'Friday, 7:00 PM',
  venue: 'Richard Rodgers Theatre',
  address: '226 W 46th St, New York, NY',
  kidExplainer:
    'Hamilton tells the true story of Alexander Hamilton using hip-hop, R&B, pop, and Broadway — all at once.',
  songs: ['Alexander Hamilton', 'My Shot', 'The Schuyler Sisters'], // swap for your favorites
  watchFor: [
    { title: 'The choreography', body: 'The dancers never really stop moving.' },
    { title: 'The costumes', body: 'History, but make it stylish.' },
    { title: 'Rapid-fire lyrics', body: 'See how many words fit in one breath.' },
    { title: 'The live orchestra', body: 'Real musicians, playing it all live.' },
  ],
}

// ---------------------------------------------------------------------------
//  BAKERIES  — the locals' recommendations (East Village / LES cluster)
//  Goal: pick your top 3–4. NOT all six.
// ---------------------------------------------------------------------------
export const bakeries = [
  { id: 'maryos', name: "Mary O's Irish Soda Bread Shop", address: '93 1/2 E 7th St', blurb: 'Warm Irish soda bread, made the old-fashioned way.' },
  { id: 'hanis', name: "Hani's", address: '67 Cooper Square', blurb: 'Cozy spot with a cult-favorite pastry case.' },
  { id: 'librae', name: 'Librae Bakery', address: '35 Cooper Sq', blurb: 'Golden, buttery bakes with a Middle Eastern twist.' },
  { id: 'fromlucie', name: 'From Lucie', address: '263 E 10th St', blurb: 'Beautiful French-style pastries worth a photo.' },
  { id: 'pastrybox', name: 'The Pastry Box', address: '515 E 12th St', blurb: 'A tiny box of very good things.' },
  { id: 'ladywong', name: 'Lady Wong', address: '332 E 9th St', blurb: 'Southeast Asian cakes and jewel-like treats.' },
]

// ---------------------------------------------------------------------------
//  FASHION / CREATIVE
// ---------------------------------------------------------------------------
export const fashion = {
  primary: {
    name: 'The Museum at FIT',
    address: '227 W 27th St, New York, NY',
    free: true,
    exhibition: 'Doll Dressing (Sep 16, 2026 – Jan 3, 2027)',
    mission: "Find one look, shape, detail, texture, or color combo you'd borrow for your own design.",
  },
  bonus: {
    name: 'Mood Fabrics',
    address: '225 W 37th St, 3rd Floor, New York, NY',
    note: 'The giant Garment District fabric store from Project Runway.',
    mission: "Choose one fabric you'd build an outfit around. What would you make?",
  },
  note: 'We do NOT have to do both. FIT is the plan. Mood is a bonus only if energy + timing are good.',
}

// ---------------------------------------------------------------------------
//  TEA — optional, configurable shortlist (empty until you decide)
// ---------------------------------------------------------------------------
export const tea = {
  shortlist: [], // e.g. [{ name: '', address: '' }]
}

// ---------------------------------------------------------------------------
//  BALLET
// ---------------------------------------------------------------------------
export const ballet = {
  performanceTbd: true, // fill in from the tickets, then flip to false
  performanceName: '',
  theater: '',
  time: '',
  watchFor: ['Favorite costume', 'Favorite movement', 'Favorite musical moment', 'One thing to remember'],
}

// ---------------------------------------------------------------------------
//  TRANSPORTATION CHALLENGE
// ---------------------------------------------------------------------------
export const transport = [
  { id: 'taxi', mode: 'Yellow Taxi', copy: 'You asked for it. We\u2019re doing it.', icon: '🚕' },
  { id: 'subway', mode: 'Subway', copy: 'A real New York rite of passage.', icon: '🚇' },
  { id: 'walk', mode: 'Walking', copy: 'How you notice the little things.', icon: '🚶‍♀️' },
  { id: 'ferry', mode: 'Ferry', copy: 'Lady Liberty gets us this one.', icon: '⛴️' },
]

// ---------------------------------------------------------------------------
//  "YOUR TURN, PLANNER"  open-ended prompts
// ---------------------------------------------------------------------------
export const plannerPrompts = [
  { id: 'nervous', q: 'What food are you nervous to try?' },
  { id: 'excited', q: 'What are you MOST excited about?' },
  { id: 'unplanned', q: 'What should we leave completely unplanned?' },
  { id: 'nextvideo', q: 'What NYC video should Dad and I watch next?' },
]

export const dreamCategories = ['Food', 'Fashion', 'Broadway', 'Ballet', 'NYC', 'Other']

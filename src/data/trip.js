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
  philosophy: ['Amazing > packed.', 'A few big things, great food, and a whole lot of New York.'],
}

// ---------------------------------------------------------------------------
//  IMAGES
//  Ambiance shots set the NYC mood. Venue photos are intentionally left as
//  labeled placeholders so nothing is mislabeled. Drop a real URL or a file
//  in /public and point to it here whenever you want.
// ---------------------------------------------------------------------------
export const images = {
  // Hero: Manhattan skyline at golden dusk (verified skyline).
  heroSkyline:
    'https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?auto=format&fit=crop&w=1600&q=80',
  taxi:
    'https://images.unsplash.com/photo-1546436836-07a91091f160?auto=format&fit=crop&w=1200&q=80', // NYC street
  // Broadway: theatrical stage silhouettes + red curtain (verified performance image).
  broadway:
    'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80',
  // Statue of Liberty (verified: statue + harbor skyline).
  liberty:
    'https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?auto=format&fit=crop&w=1400&q=80',
  // Ballet: a dancer mid-movement.
  ballet:
    'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1200&q=80',
  // Grand ornate theater interior with red curtain, the ABT page hero.
  balletHall:
    'https://images.unsplash.com/photo-1580809361436-42a7ec204889?auto=format&fit=crop&w=1600&q=80',
  bakery:
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80', // pastries
  omakase:
    'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=1200&q=80', // sushi omakase
  fashion:
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80', // fashion / design
  tea:
    'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80', // afternoon tea
}

// Appetizing pastry photos used as tasteful ambiance on the bakery cards.
// These are STOCK photos (labeled as such on the card), not the actual shops,
// so nothing is mislabeled. Swap for your own photos anytime.
export const pastryPhotos = {
  maryos: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=75',
  hanis: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=700&q=75',
  librae: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=75',
  fromlucie: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=700&q=75',
  pastrybox: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=700&q=75',
  ladywong: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=700&q=75',
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
//  "open" blocks are simply lighter days with fewer fixed items.
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
    items: ['Statue of Liberty', 'Time to explore', 'Hamilton at 7:00'],
    open: false,
  },
  {
    id: 'sat',
    day: 'Saturday',
    tag: 'Sweets + Ballet',
    items: ['Bakery walk', 'One creative stop', 'Free afternoon', 'Ballet at night'],
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
//  Restaurant currently recorded as "Karami". No address/menu invented.
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
    { n: 3, title: 'Inside the Pedestal', body: 'Go up to the observation level, a view only some visitors get.' },
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
    'Hamilton tells the true story of Alexander Hamilton using hip-hop, R&B, pop, and Broadway, all at once.',
  songs: ['Alexander Hamilton', 'My Shot', 'The Schuyler Sisters'], // swap for your favorites
  watchFor: [
    { title: 'The choreography', body: 'The dancers never really stop moving.' },
    { title: 'The costumes', body: 'History, but make it stylish.' },
    { title: 'Rapid-fire lyrics', body: 'See how many words fit in one breath.' },
    { title: 'The live orchestra', body: 'Real musicians, playing it all live.' },
  ],
}

// ---------------------------------------------------------------------------
//  BAKERIES: the locals' recommendations (East Village / LES cluster)
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
//  TEA: optional, configurable shortlist (empty until you decide)
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
  intro:
    'American Ballet Theatre is one of the greatest ballet companies in the world. Dancers train their whole lives to stand on that stage, and tonight we get to watch them.',
  facts: [
    { icon: '🌟', label: 'World-class', text: 'ABT is one of only a handful of truly world-famous ballet companies.' },
    { icon: '🩰', label: 'On pointe', text: 'Ballerinas dance on the very tips of their toes in special pointe shoes.' },
    { icon: '🎻', label: 'Live music', text: 'A full orchestra usually plays every note, live, while they dance.' },
    { icon: '🤫', label: 'No words', text: 'Dancers tell the whole story with only their bodies and the music.' },
  ],
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

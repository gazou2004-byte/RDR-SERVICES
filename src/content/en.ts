/**
 * Site content in English — the mirror of `site.ts`.
 *
 * Same shape, same keys, same order: the types imported below are what keeps
 * the two files from drifting apart. Adding a field on one side without the
 * other will not compile.
 *
 * What is deliberately *not* translated: slugs, image paths, links, phone
 * numbers and every legal identifier. A slug that differed between languages
 * would mean two sets of URLs to maintain for the same page.
 */

import type {
  Activite,
  Company,
  Destination,
  Experience,
  NavItem,
  Service,
} from "./site";

export const company: Company = {
  name: "RDR Services",
  legalName: "RDR SERVICES",
  tagline: "Private concierge & bespoke travel",
  baseline: "The art of travelling in South-West France",

  phone: "+33 6 00 00 00 00",
  phoneHref: "+33600000000",
  email: "contact@rdr-services.fr",

  address: "22 rue de la Marne, 33500 Libourne, France",
  city: "Libourne",

  legal: {
    form: "SASU — French simplified joint-stock company, sole shareholder",
    capital: "€2,500",
    siren: "920 247 517",
    siret: "920 247 517 00013",
    rcs: "Libourne",
    tva: "FR52920247517",
    naf: "7420Z",
    director: "Romain Da Rugna",
    createdAt: "25 October 2022",
  },
  socials: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
  },
};

export const nav: NavItem[] = [
  { label: "Home", href: "/#accueil" },
  { label: "Services", href: "/#services" },
  { label: "Destinations", href: "/#sejours", regions: true },
  { label: "About", href: "/#a-propos" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export const hero = {
  eyebrow: "Immersion & experiences",
  title: "RDR Services",
  banner: "Discover South-West France, led by local experts",
  subtitle:
    "Bordeaux vineyards, Périgord, the Landes and the Basque Country. Every journey is composed by hand, for you alone.",
  primaryCta: { label: "Plan my journey", href: "/#contact" },
  secondaryCta: { label: "See what we do", href: "/#services" },
  panels: [
    {
      image: "/images/vignes-chateau.jpg",
      label: "Médoc",
      cadrage: "72% center",
    },
    {
      image: "/images/biarritz-plage.jpg",
      label: "Basque Country",
      cadrage: "center",
    },
    {
      image: "/images/bearn-ossau.jpg",
      label: "Béarn",
      cadrage: "42% center",
    },
    {
      image: "/images/svc-creations.jpg",
      label: "Gascony",
      cadrage: "center",
    },
  ],
};

export const intro = {
  eyebrow: "Independent concierge — Nouvelle-Aquitaine",
  title: "South-West France, exclusively",
  body: [
    "Five territories, one house. We arrange private journeys through South-West France for travellers who would rather have doors opened for them than a brochure handed to them.",
    "From the Bordeaux vineyards to the Atlantic dunes. The programme is built with you, adjusted along the way if the mood changes, and stays in the hands of one person from beginning to end.",
  ],
  stats: [
    { value: "10 years", label: "Clefs d'Or, luxury concierge service" },
    { value: "5", label: "territories travelled all year round" },
    { value: "24/7", label: "assistance throughout your stay" },
    { value: "100%", label: "bespoke, never in a group" },
  ],
};

export const services: Service[] = [
  {
    slug: "excursions",
    title: "Guided days",
    short: "By the day, for an occasion, or as a complete journey.",
    description:
      "We take charge of your entire day: route, bookings, lunch, transport and guiding. All you have to do is enjoy it.",
    bullets: [
      "An itinerary built around your tastes and your pace",
      "A driver-guide fluent in French and English",
      "Lunch and tastings booked in advance",
      "Departure from your hotel, château or the airport",
    ],
    image: "/images/svc-excursions.jpg",
  },
  {
    slug: "creations-sur-mesure",
    title: "Bespoke journeys",
    short: "Private occasions, stays and journeys composed from scratch.",
    description:
      "A birthday, a proposal, a company retreat or three weeks of discovery: we build the programme from nothing, around what you actually want.",
    bullets: [
      "Your wishes explored in a first conversation",
      "A detailed proposal within 72 hours",
      "Accommodation selected and negotiated for you",
      "Unlimited adjustments until you are happy",
    ],
    image: "/images/bordeaux-bourse.jpg",
  },
  {
    slug: "transport-vip",
    title: "Private driver",
    short: "Mercedes saloons and vans, with a driver of your own.",
    description:
      "Our fleet is yours for the length of your stay. The same driver from the first day to the last: he knows your habits, your timings and your addresses.",
    bullets: [
      "Recent Mercedes V-Class and E-Class",
      "Airport, station and long-distance transfers",
      "One dedicated driver for the whole stay",
      "Water, wifi and child seats on request",
    ],
    image: "/images/vans-chateau.jpg",
  },
  {
    slug: "acces-privilegies",
    title: "Private access",
    short: "Our network of châteaux and partners, opened for you alone.",
    description:
      "Classified growths closed to the public, fully booked tables, craftsmen's workshops: ten years of local relationships open doors no platform lists.",
    bullets: [
      "Classified châteaux of the Médoc and Saint-Émilion, privately",
      "Michelin-starred tables held outside public availability",
      "One-to-one workshops with craftsmen and chefs",
      "Cellars and bastides opened outside visiting hours",
    ],
    image: "/images/chateau-margaux.jpg",
  },
];

export const experiences: Experience[] = [
  {
    region: "bordeaux-medoc",
    title: "A vertical tasting in a classified growth",
    place: "Médoc",
    description:
      "Six vintages, talked through by the cellar master, inside a classified château that is normally closed to visitors.",
    image: "/images/exp-verticale.jpg",
  },
  {
    region: "bordeaux-medoc",
    title: "Harvest in Saint-Émilion",
    place: "Gironde",
    description:
      "A morning among the rows during the harvest, followed by a winemaker's lunch in the middle of the vats.",
    image: "/images/exp-vendanges.jpg",
  },
  {
    region: "perigord",
    title: "Hilltop villages of the Périgord",
    place: "Dordogne",
    description:
      "Belvès, Domme, Monpazier: three listed bastides walked with a historian who lives there, well away from the crowds.",
    image: "/images/exp-troglodyte.jpg",
  },
  {
    region: "perigord",
    title: "The Dordogne by private gabare",
    place: "Périgord",
    description:
      "Down the river on a gabare of your own, below the cliffs of La Roque-Gageac, with a hamper of local produce on board.",
    image: "/images/exp-chateau.jpg",
  },
  {
    region: "landes",
    title: "The Courant d'Huchet by rowing boat",
    place: "Landes",
    description:
      "Two hours rowing on clear water, under a vault of cork oaks, with one of the few boatmen still licensed to take you there.",
    image: "/images/exp-landes.jpg",
  },
  {
    region: "pyrenees-atlantiques",
    title: "Dusk on the Basque coast",
    place: "Basque Country",
    description:
      "The lighthouse, the rocks and the ocean at the blue hour, then a table facing the sea, held for you alone.",
    image: "/images/exp-surf.jpg",
  },
  {
    region: "pyrenees-atlantiques",
    title: "Grand hotels and remarkable houses",
    place: "Basque coast",
    description:
      "We negotiate the finest addresses in the region for you, from Belle Époque grand hotels to private estates open to a handful of guests.",
    image: "/images/exp-bayonne.jpg",
  },
  {
    region: "gascogne-armagnac",
    title: "Century-old armagnac cellars",
    place: "Gascony",
    description:
      "A family estate, its reserve of vintages older than your grandparents, and a tasting in the historic cellar.",
    image: "/images/hero-apropos.jpg",
  },
  {
    region: "gascogne-armagnac",
    title: "A Gascon table at the producer's own farm",
    place: "Gers",
    description:
      "Foie gras and duck, cooked in front of you by the lady of the house, on a farm that still raises its own birds.",
    image: "/images/hero-services.jpg",
  },
];

export const destinations: Destination[] = [
  {
    slug: "bordeaux-medoc",
    name: "Bordeaux & Médoc",
    tagline: "Classified growths, listed façades & the art of the table",
    intro:
      "The most beautiful city of pale stone in France, and thirty minutes away, the châteaux that wrote the history of wine. Bordeaux is better visited with someone: the great growths do not open their doors to everyone.",
    duration: "3 to 7 days",
    season: "All year round — harvest in September",
    highlights: [
      "Classified growths of the Médoc, visited privately",
      "Saint-Émilion and its underground churches",
      "Bordeaux walked with an architectural historian",
      "Arcachon Bay, the Dune du Pilat and an oyster tasting",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Bordeaux",
        description:
          "Met at the airport or the station, settled in, then the listed centre discovered with a historian guide. Dinner at a Bordeaux table few people know.",
      },
      {
        day: "Day 2",
        title: "Route des Châteaux",
        description:
          "Médoc: two classified growths visited privately, lunch at the château and a tasting talked through by the cellar master.",
      },
      {
        day: "Day 3",
        title: "Saint-Émilion",
        description:
          "The right bank, the medieval town and its underground quarries, a winemaker's lunch and an afternoon with an estate owner.",
      },
      {
        day: "Day 4",
        title: "Arcachon Bay",
        description:
          "An oyster farmer's cabin, a tasting facing the bay, and the Dune du Pilat at sunset.",
      },
    ],
    image: "/images/svc-acces.jpg",
  },
  {
    slug: "perigord",
    name: "Périgord & Dordogne",
    tagline: "Châteaux, prehistory & tables of the terroir",
    intro:
      "A thousand châteaux, painted caves seventeen thousand years old, and the finest country cooking in France. The Périgord is lived slowly, with a glass of Monbazillac.",
    duration: "3 to 8 days",
    season: "April to November — truffles in winter",
    highlights: [
      "Lascaux and painted caves with privileged access",
      "The Sarlat truffle market with a chef",
      "Down the Dordogne on a private gabare",
      "The châteaux of Beynac, Castelnaud and Les Milandes",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Sarlat & the Périgord Noir",
        description:
          "Arrival, settling into a Périgord manor house, and Sarlat discovered late in the day, once the town empties.",
      },
      {
        day: "Day 2",
        title: "The Dordogne valley",
        description:
          "The châteaux of Beynac and Castelnaud, lunch on a terrace above the valley, and a private gabare down the river in the afternoon.",
      },
      {
        day: "Day 3",
        title: "Prehistory",
        description:
          "Lascaux and a painted cave with restricted access, in the company of a prehistorian, then a tasting of Bergerac wines.",
      },
      {
        day: "Day 4",
        title: "Truffles & gastronomy",
        description:
          "Truffle hunting with a grower and his dog, the truffle market, and a cookery lesson with a Michelin-starred chef.",
      },
    ],
    image: "/images/dest-perigord.jpg",
  },
  {
    slug: "landes",
    name: "Landes",
    tagline: "Ocean, pine forest & silence",
    intro:
      "The largest forest in Western Europe, a hundred kilometres of beach without a single cliff, and clear streams winding beneath the trees. The Landes are not so much visited as crossed, slowly.",
    duration: "3 to 6 days",
    season: "May to October",
    highlights: [
      "The Courant d'Huchet by rowing boat, with a boatman",
      "The beaches of Moliets, Contis and Mimizan out of season",
      "The airials and sheepfolds of the Grande Lande",
      "Landes cooking: duck, sand-grown asparagus, pine nuts",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Coast and dunes",
        description:
          "Arrival, settling in among the pines, the coastline at sunset and a dinner of fish from the Adour.",
      },
      {
        day: "Day 2",
        title: "The Courant d'Huchet",
        description:
          "Down the stream by rowing boat with a boatman, between cork oaks and wild hibiscus, then lunch at the estuary.",
      },
      {
        day: "Day 3",
        title: "Grande Lande",
        description:
          "Airials, sheepfolds and the Marquèze open-air museum, a meeting with a sand-asparagus grower, and a Landes table in the evening.",
      },
    ],
    image: "/images/dest-landes.jpg",
  },
  {
    slug: "pyrenees-atlantiques",
    name: "Basque Country & Béarn",
    tagline: "Ocean, mountain & character",
    intro:
      "An identity quite unlike any other. In a single day: the waves of Biarritz in the morning, the villages below La Rhune in the afternoon, and a table where Basque is still spoken in the evening.",
    duration: "3 to 7 days",
    season: "May to October",
    highlights: [
      "Biarritz, Saint-Jean-de-Luz and the wild coast",
      "The villages of Ainhoa, Espelette and Sare",
      "Workshops on chilli, cured ham and sheep's cheese",
      "Over the border: San Sebastián and its pintxos",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Basque coast",
        description:
          "Transfer from Biarritz, the coastline, Saint-Jean-de-Luz and dinner facing the ocean.",
      },
      {
        day: "Day 2",
        title: "Inland",
        description:
          "Listed villages, an Espelette chilli workshop, lunch at a farm inn and the rack railway up La Rhune.",
      },
      {
        day: "Day 3",
        title: "San Sebastián",
        description:
          "Over into Gipuzkoa, the Bretxa market, a guided round of pintxos and a late return.",
      },
    ],
    image: "/images/dest-basque.jpg",
  },
  {
    slug: "gascogne-armagnac",
    name: "Gascony & Armagnac",
    tagline: "Bastides, armagnac & tables with character",
    intro:
      "The France people believe has disappeared: medieval bastides still intact, farms that still raise their own ducks, and cellars where vintages older than your grandparents are sleeping.",
    duration: "3 to 6 days",
    season: "All year round",
    highlights: [
      "Armagnac cellars and century-old vintages",
      "The bastides of Fourcès, Larressingle and Montréal-du-Gers",
      "Gascon farms and foie gras cooking",
      "Auch, Condom and Flaran Abbey",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "The heart of Gascony",
        description:
          "Arrival and settling into a restored bastide, Auch in the afternoon and a Gascon dinner.",
      },
      {
        day: "Day 2",
        title: "Armagnac",
        description:
          "Two family estates, a tasting of old vintages in the historic cellar, and lunch at the property.",
      },
      {
        day: "Day 3",
        title: "Bastides & farms",
        description:
          "Medieval villages, a meeting with a Gascon farmer and a foie gras cookery workshop.",
      },
    ],
    image: "/images/dest-gascogne.jpg",
  },
];

export const resume = {
  points: [
    {
      titre: "A local agency of South-West France",
      detail: "We live here, and we know the people",
    },
    {
      titre: "Programmes composed to order",
      detail: "From a single day out to a three-week journey",
    },
    {
      titre: "A dedicated driver",
      detail: "The same local expert from the first day to the last",
    },
    {
      titre: "Private access",
      detail: "Châteaux and tables that are closed to the public",
    },
    {
      titre: "One person to talk to",
      detail: "Reachable before, during and after your journey",
    },
  ],
  citation:
    "Tell us what would make you happy — we will take care of the rest",
  images: {
    gauche: "/images/exp-margaux.jpg",
    droite: "/images/exp-landes.jpg",
  },
};

export const mosaique = {
  gauche: [
    "/images/exp-verticale.jpg",
    "/images/exp-vendanges.jpg",
    "/images/exp-beynac-int.jpg",
    "/images/exp-chateau.jpg",
  ],
  droite: [
    "/images/exp-surf.jpg",
    "/images/dest-bordeaux.jpg",
    "/images/hero-accueil.jpg",
    "/images/auth-fond.jpg",
  ],
  citation:
    "You never really know a region until someone from it has taken you there",
  signature: "RDR Services",
};

export const activites: Record<string, Activite[]> = {
  "bordeaux-medoc": [
    {
      titre: "La Cité du Vin",
      detail:
        "A private visit before opening, then a tasting on the eighth-floor belvedere.",
      image: "/images/activites/act-bdx-cite-du-vin.jpg",
    },
    {
      titre: "The cellar of a classified growth",
      detail:
        "Barrels as far as the eye can see, talked through by the cellar master who blends them.",
      image: "/images/activites/act-bdx-chai.jpg",
    },
    {
      titre: "Les Bassins des Lumières",
      detail:
        "A submarine base turned into the largest digital art centre in the world.",
      image: "/images/activites/act-bdx-bassins-lumieres.jpg",
    },
    {
      titre: "The water mirror",
      detail:
        "Place de la Bourse and its reflection, early in the morning while the square is still empty.",
      image: "/images/activites/act-bdx-miroir-eau.jpg",
    },
    {
      titre: "The city from above",
      detail:
        "For those who want to see Bordeaux differently: a supervised climb with a guide.",
      image: "/images/activites/act-bdx-escalade.jpg",
    },
  ],
  "pyrenees-atlantiques": [
    {
      titre: "The La Rhune rack railway",
      detail:
        "A 1924 rack railway climbing to 900 metres, the ocean on one side and Spain on the other.",
      image: "/images/activites/act-pa-rhune.jpg",
    },
    {
      titre: "Espelette and its chilli",
      detail:
        "Red façades hung with strings of chillies, and a grower's workshop where it is all explained.",
      image: "/images/activites/act-pa-espelette.jpg",
    },
    {
      titre: "Saint-Jean-Pied-de-Port",
      detail:
        "The last French stage of the Camino de Santiago, its ramparts and its cobbled lanes.",
      image: "/images/activites/act-pa-stjean.jpg",
    },
    {
      titre: "A game of pelota",
      detail:
        "The sport at the heart of the Basque Country, watched from the stands with someone who explains the rules.",
      image: "/images/activites/act-pa-pelote.jpg",
    },
  ],
  landes: [
    {
      titre: "Surfing at Hossegor",
      detail:
        "A private lesson on one of the finest breaks in Europe, matched to your level, boards provided.",
      image: "/images/activites/act-lan-surf.jpg",
    },
    {
      titre: "A hundred kilometres of beach",
      detail:
        "Sand as far as the eye can see, without a single cliff, and lifeguarded stations all summer.",
      image: "/images/activites/act-lan-plage.jpg",
    },
    {
      titre: "A course landaise",
      detail:
        "Neither bullfight nor killing: dodgers sidestepping the cow by a hair, to the cheers of the village.",
      image: "/images/activites/act-lan-course.jpg",
    },
    {
      titre: "The thermal baths of Dax",
      detail:
        "France's leading spa town, its warm muds and its pools, with private access.",
      image: "/images/activites/act-lan-thermes.jpg",
    },
  ],
  "gascogne-armagnac": [
    {
      titre: "Flaran Abbey",
      detail:
        "A twelfth-century Cistercian cloister, among the best preserved in the South-West, opened before the visitors arrive.",
      image: "/images/activites/act-gas-flaran.jpg",
    },
    {
      titre: "Larressingle",
      detail:
        "The smallest fortified town in France: two hundred metres of intact ramparts around eight houses.",
      image: "/images/activites/act-gas-larressingle.jpg",
    },
    {
      titre: "Fourcès and the bastides",
      detail:
        "A round square lined with arcades, a river, willows: the most photographed village in the Gers.",
      image: "/images/activites/act-gas-fources.jpg",
    },
    {
      titre: "The castle of Larressingle",
      detail:
        "The keep of the bishops of Condom, a spectacular ruin at the heart of the ramparts.",
      image: "/images/activites/act-gas-chateau.jpg",
    },
  ],
  perigord: [
    {
      titre: "Canoeing on the Dordogne",
      detail:
        "Downstream below the cliffs and the châteaux, at your own pace, with a pick-up at the end.",
      image: "/images/activites/act-per-canoe.jpg",
    },
    {
      titre: "A balloon at first light",
      detail:
        "Over the valley and La Roque-Gageac in the low morning light.",
      image: "/images/activites/act-per-montgolfiere.jpg",
    },
    {
      titre: "Via ferrata",
      detail:
        "The cliffs of the Périgord in complete safety, with a qualified instructor.",
      image: "/images/activites/act-per-via-ferrata.jpg",
    },
    {
      titre: "Electric bikes, as a family",
      detail:
        "The lanes between the villages and the châteaux, without suffering on the hills.",
      image: "/images/activites/act-per-vtt.jpg",
    },
    {
      titre: "A medieval day",
      detail:
        "Costumes, archery and practice combat in a fortress: children love it.",
      image: "/images/activites/act-per-medieval.jpg",
    },
  ],
};

export const process = [
  {
    step: "01",
    title: "First conversation",
    description:
      "A thirty-minute call to understand who is travelling, when, with what tastes and what budget. No commitment.",
  },
  {
    step: "02",
    title: "Proposal",
    description:
      "Within 72 hours, a programme detailed day by day, with accommodation, experiences and a firm budget.",
  },
  {
    step: "03",
    title: "Adjustments",
    description:
      "We rework the programme as many times as it takes, until it genuinely looks like you.",
  },
  {
    step: "04",
    title: "Your journey",
    description:
      "Your dedicated driver meets you. One person stays reachable around the clock for the whole stay.",
  },
];

export const testimonials = [
  {
    quote:
      "We already knew Bordeaux, but not like this. Two classified growths opened their doors to us on a Sunday, and the driver knew every owner personally.",
    author: "Claire & Thomas L.",
    origin: "Paris — Médoc & Saint-Émilion, 5 days",
  },
  {
    quote:
      "A board retreat for twelve people in Gascony. Everything was handled, including the things we had not thought to ask for. We booked again the following year.",
    author: "Marc D.",
    origin: "Lyon — Gascony retreat, 3 days",
  },
  {
    quote:
      "The private tasting in a classified château was the highlight of our entire trip to Europe. Impeccable service from first email to last goodbye.",
    author: "Sarah M.",
    origin: "London — Bordeaux & Périgord, 10 days",
  },
];

export const faq = [
  {
    question: "Do you arrange single-day excursions?",
    answer:
      "Yes. We arrange a day in the vineyards just as readily as a three-week journey across the South-West. In high season, a day is best booked two to three weeks ahead.",
  },
  {
    question: "What kind of vehicle do you use?",
    answer:
      "Recent Mercedes E-Class and V-Class, maintained and insured for carrying passengers. Child seats, wifi and water are provided on request.",
  },
  {
    question: "Is it the same driver throughout the stay?",
    answer:
      "Yes, always. It is the heart of what we do: your driver-guide is with you from the first day to the last, and comes to know your habits.",
  },
  {
    question: "Can you get us into the classified growths?",
    answer:
      "That is our speciality. Most classified châteaux receive visitors by recommendation only. Our relationships in the Médoc, Saint-Émilion and Pomerol open those doors, out of season included.",
  },
  {
    question: "Are we free to explore on our own?",
    answer:
      "Of course. We deliberately leave open stretches in every programme, and your driver stays available if you change your mind during the day.",
  },
  {
    question: "Are meals included?",
    answer:
      "They are in the complete packages. On single-day excursions, lunch is booked for you and charged according to the table chosen. You are told everything in advance, with no surprises.",
  },
  {
    question: "Do you take groups?",
    answer:
      "Up to eight people per vehicle, and more with several vehicles. We never mix two sets of clients: every journey is private.",
  },
  {
    question: "Can you book the accommodation?",
    answer:
      "Yes. We work with a selection of hotels, château-hotels and private properties across the South-West. You are equally welcome to keep your own accommodation — we will fit around it.",
  },
  {
    question: "Do you arrange special occasions?",
    answer:
      "Birthdays, proposals, company retreats, incentive trips: yes, they are a significant part of what we do.",
  },
  {
    question: "How does payment work?",
    answer:
      "A 30% deposit when the programme is agreed, the balance fifteen days before departure. Bank transfer or card. Your documents and invoices are available in your client area.",
  },
];

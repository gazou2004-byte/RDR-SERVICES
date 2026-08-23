/**
 * Contenu du site en français — tout le texte éditable est regroupé ici.
 * Modifie ce fichier pour changer les textes, services, destinations et coordonnées.
 *
 * La version anglaise vit dans `en.ts` et suit exactement la même forme ;
 * `index.ts` choisit l'une ou l'autre selon la langue de la page. Les types
 * ci-dessous sont ce qui garantit que les deux ne divergent pas : ajouter un
 * champ ici sans l'ajouter là-bas ne compile pas.
 */

export type Company = {
  name: string;
  legalName: string;
  tagline: string;
  baseline: string;
  phone: string;
  phoneHref: string;
  email: string;
  address: string;
  city: string;
  legal: {
    form: string;
    capital: string;
    siren: string;
    siret: string;
    rcs: string;
    tva: string;
    naf: string;
    director: string;
    createdAt: string;
  };
  socials: { instagram: string; linkedin: string; facebook: string };
};

/** Une entrée du menu. `regions` déplie la liste des destinations. */
export type NavItem = { label: string; href: string; regions?: boolean };

export const company: Company = {
  name: "RDR Services",
  legalName: "RDR SERVICES",
  tagline: "Conciergerie & voyages privés",
  baseline: "L'art de voyager dans le Sud-Ouest",

  // ⚠ Les deux seules données encore fictives : à remplacer avant toute
  // communication autour du site.
  phone: "+33 6 00 00 00 00",
  phoneHref: "+33600000000",
  email: "contact@rdr-services.fr",

  address: "22 rue de la Marne, 33500 Libourne",
  city: "Libourne",

  /*
   * Identité légale, relevée au registre national des entreprises
   * (annuaire-entreprises.data.gouv.fr et societe.com, SIREN 920 247 517).
   *
   * Aucune immatriculation au registre des opérateurs de voyages et de
   * séjours n'est rattachée à ce SIREN : le site ne doit donc afficher
   * aucun numéro de licence tant qu'elle n'est pas obtenue.
   */
  legal: {
    form: "SASU — société par actions simplifiée à associé unique",
    capital: "2 500 €",
    siren: "920 247 517",
    siret: "920 247 517 00013",
    rcs: "Libourne",
    tva: "FR52920247517",
    naf: "7420Z",
    director: "Romain Da Rugna",
    createdAt: "25 octobre 2022",
  },
  socials: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
  },
};

/**
 * Le site tient sur une seule page : le menu pointe vers ses sections.
 * Seules les quatre destinations ont leur propre page, atteignable depuis
 * la section « Destinations ».
 */
export const nav: NavItem[] = [
  { label: "Accueil", href: "/#accueil" },
  { label: "Services", href: "/#services" },
  { label: "Destinations", href: "/#sejours", regions: true },
  { label: "À propos", href: "/#a-propos" },
  // Ces deux entrées n'ont plus de section dans la page : elles ouvrent la
  // fenêtre de discussion sur l'onglet correspondant (voir `chat-widget.tsx`).
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export const hero = {
  eyebrow: "Immersion & expériences",
  /** Grand titre centré : le nom de la maison, très espacé. */
  title: "RDR Services",
  /** Bandeau posé sous le titre. */
  banner: "Découvrez le Sud-Ouest, conduit par nos experts locaux",
  subtitle:
    "Vignobles bordelais, Périgord, Landes et Pyrénées-Atlantiques. Chaque séjour est composé à la main, pour vous seul.",
  primaryCta: { label: "Composer mon séjour", href: "/#contact" },
  secondaryCta: { label: "Découvrir nos services", href: "/#services" },
  /**
   * Les quatre panneaux du héros, côte à côte.
   *
   * `cadrage` indique quelle partie de la photo garder : une bande verticale
   * d'un quart d'écran ampute le sujet si on se contente de centrer. Le
   * château du Médoc, par exemple, se trouve sur la droite de son image.
   */
  panels: [
    {
      image: "/images/vignes-chateau.jpg",
      label: "Médoc",
      cadrage: "72% center",
    },
    {
      image: "/images/biarritz-plage.jpg",
      label: "Pyrénées-Atlantiques",
      cadrage: "center",
    },
    {
      image: "/images/bearn-ossau.jpg",
      // L'étiquette ne s'affiche pas : elle ne sert qu'à décrire la photo aux
      // lecteurs d'écran et aux moteurs. Elle suit donc le sujet réel.
      label: "Béarn",
      // Le pic du Midi d'Ossau est aux deux cinquièmes de la largeur ; un
      // centrage strict le sortirait du panneau, qui est étroit et haut.
      cadrage: "42% center",
    },
    {
      image: "/images/svc-creations.jpg",
      label: "Gascogne",
      cadrage: "center",
    },
  ],
};

export const intro = {
  eyebrow: "Conciergerie indépendante — Nouvelle-Aquitaine",
  title: "Le Sud-Ouest en exclusivité",
  body: [
    "Cinq territoires, une seule maison. Nous organisons des séjours privés dans le Sud-Ouest pour des voyageurs qui préfèrent qu'on leur ouvre des portes plutôt qu'on leur remette un dépliant.",
    "Du vignoble bordelais à l'océan landais. Le programme se construit avec vous, se réajuste en route si l'envie change, et reste entre les mains d'une seule personne du début à la fin.",
  ],
  stats: [
    { value: "10 ans", label: "Clefs d'Or, conciergerie de luxe" },
    { value: "5", label: "territoires parcourus toute l'année" },
    { value: "24/7", label: "assistance pendant votre séjour" },
    { value: "100 %", label: "sur mesure, jamais de groupe" },
  ],
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  image: string;
  /** Bandeau de licence, affiché seulement si le numéro existe réellement. */
  licence?: string;
};

export const services: Service[] = [
  {
    slug: "excursions",
    title: "Journées guidées",
    short: "À la journée, en événement ou en voyage complet.",
    description:
      "Nous prenons en charge l'intégralité de votre journée : itinéraire, réservations, déjeuner, transport et accompagnement. Vous n'avez qu'à profiter.",
    bullets: [
      "Itinéraire composé selon vos envies et votre rythme",
      "Guide-chauffeur francophone et anglophone",
      "Déjeuner et dégustations réservés à l'avance",
      "Départ depuis votre hôtel, château ou l'aéroport",
    ],
    image:
      "/images/svc-excursions.jpg",
  },
  {
    slug: "creations-sur-mesure",
    title: "Séjours sur mesure",
    short: "Événements privés, séjours et voyages entièrement composés.",
    description:
      "Un anniversaire, une demande en mariage, un séminaire ou trois semaines de découverte : nous construisons le programme de zéro, autour de vos envies.",
    bullets: [
      "Étude de vos envies lors d'un entretien préalable",
      "Proposition détaillée sous 72 heures",
      "Hébergements sélectionnés et négociés pour vous",
      "Ajustements illimités jusqu'à validation",
    ],
    image:
      "/images/bordeaux-bourse.jpg",
  },
  {
    slug: "transport-vip",
    title: "Chauffeur privé",
    short: "Berlines et vans Mercedes, chauffeur dédié.",
    description:
      "Notre flotte est à vous pour la durée du séjour. Le même chauffeur du premier au dernier jour : il connaît vos habitudes, vos horaires et vos adresses.",
    bullets: [
      "Mercedes Classe V et Classe E récentes",
      "Transferts aéroport, gare et longue distance",
      "Chauffeur dédié sur toute la durée du séjour",
      "Eau, wifi et sièges enfant sur demande",
    ],
    image:
      "/images/vans-chateau.jpg",
  },
  {
    slug: "acces-privilegies",
    title: "Accès réservés",
    short: "Notre réseau de châteaux et de partenaires, en privatif.",
    description:
      "Grands crus classés fermés au public, tables complètes, ateliers d'artisans : dix ans de relations locales ouvrent des portes qu'aucune plateforme ne référence.",
    bullets: [
      "Châteaux classés du Médoc et de Saint-Émilion en visite privée",
      "Tables étoilées réservées hors disponibilité publique",
      "Ateliers d'artisans et de chefs en tête-à-tête",
      "Chais et bastides ouverts en dehors des horaires",
    ],
    image:
      "/images/chateau-margaux.jpg",
  },
];

export type Experience = {
  /** Renvoie au `slug` d'une destination : l'expérience s'affiche sur sa fiche. */
  region: string;
  title: string;
  place: string;
  description: string;
  image: string;
};

export const experiences: Experience[] = [
  {
    region: "bordeaux-medoc",
    title: "Verticale en grand cru classé",
    place: "Médoc",
    description:
      "Une dégustation de six millésimes commentée par le maître de chai, dans un château classé habituellement fermé aux visites.",
    image: "/images/exp-verticale.jpg",
  },
  {
    region: "bordeaux-medoc",
    title: "Vendanges en Saint-Émilion",
    place: "Gironde",
    description:
      "Une matinée dans les rangs pendant les vendanges, suivie d'un déjeuner vigneron au milieu des cuves.",
    image: "/images/exp-vendanges.jpg",
  },
  {
    region: "perigord",
    title: "Villages perchés du Périgord",
    place: "Dordogne",
    description:
      "Belvès, Domme, Monpazier : trois bastides classées parcourues avec un historien qui y vit, loin des heures d'affluence.",
    image: "/images/exp-troglodyte.jpg",
  },
  {
    region: "perigord",
    title: "La Dordogne en gabare privée",
    place: "Périgord",
    description:
      "Descente de la rivière sur une gabare privatisée, au pied des falaises de La Roque-Gageac, avec un panier de producteurs à bord.",
    image: "/images/exp-chateau.jpg",
  },
  {
    region: "landes",
    title: "Le Courant d'Huchet en barque",
    place: "Landes",
    description:
      "Deux heures à la rame sur une eau translucide, sous une voûte de chênes-lièges, avec l'un des rares bateliers encore agréés.",
    image: "/images/exp-landes.jpg",
  },
  {
    region: "pyrenees-atlantiques",
    title: "Crépuscule sur la côte basque",
    place: "Pyrénées-Atlantiques",
    description:
      "Le phare, les rochers et l'océan à l'heure bleue, puis une table face à la mer réservée pour vous seuls.",
    image: "/images/exp-surf.jpg",
  },
  {
    region: "pyrenees-atlantiques",
    title: "Palaces et maisons d'exception",
    place: "Côte basque",
    description:
      "Nous négocions pour vous les plus belles adresses de la région, des palaces Belle Époque aux propriétés privées ouvertes à quelques hôtes.",
    image: "/images/exp-bayonne.jpg",
  },
  {
    region: "gascogne-armagnac",
    title: "Chais d'armagnac centenaires",
    place: "Gascogne",
    description:
      "Un domaine familial, sa réserve de millésimes plus vieux que vos grands-parents, et une dégustation dans le chai historique.",
    image: "/images/hero-apropos.jpg",
  },
  {
    region: "gascogne-armagnac",
    title: "Table gasconne chez le producteur",
    place: "Gers",
    description:
      "Cuisine au foie gras et au canard, préparée devant vous par la maîtresse de maison, dans une ferme qui élève encore ses bêtes.",
    image: "/images/hero-services.jpg",
  },
];

export type Destination = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  duration: string;
  season: string;
  highlights: string[];
  itinerary: { day: string; title: string; description: string }[];
  image: string;
};

export const destinations: Destination[] = [
  {
    slug: "bordeaux-medoc",
    name: "Bordeaux & Médoc",
    tagline: "Grands crus, façades classées & art de la table",
    intro:
      "La plus belle ville de pierre blonde de France, et à trente minutes, les châteaux qui ont écrit l'histoire du vin. Le Bordelais se visite mieux accompagné : les grands crus n'ouvrent pas leurs portes à tout le monde.",
    duration: "3 à 7 jours",
    season: "Toute l'année — vendanges en septembre",
    highlights: [
      "Grands crus classés du Médoc en visite privée",
      "Saint-Émilion et ses églises souterraines",
      "Bordeaux en visite architecturale avec un historien",
      "Bassin d'Arcachon, dune du Pilat et dégustation d'huîtres",
    ],
    itinerary: [
      {
        day: "Jour 1",
        title: "Bordeaux",
        description:
          "Accueil à l'aéroport ou à la gare, installation, puis découverte du centre classé avec un guide historien. Dîner dans une table bordelaise confidentielle.",
      },
      {
        day: "Jour 2",
        title: "Route des châteaux",
        description:
          "Médoc : deux grands crus classés en visite privée, déjeuner au château et dégustation commentée par le maître de chai.",
      },
      {
        day: "Jour 3",
        title: "Saint-Émilion",
        description:
          "Rive droite, cité médiévale et ses carrières souterraines, déjeuner vigneron et après-midi chez un propriétaire récoltant.",
      },
      {
        day: "Jour 4",
        title: "Bassin d'Arcachon",
        description:
          "Cabane ostréicole, dégustation face au bassin, dune du Pilat au coucher du soleil.",
      },
    ],
    image:
      "/images/svc-acces.jpg",
  },
  {
    slug: "perigord",
    name: "Périgord & Dordogne",
    tagline: "Châteaux, préhistoire & tables de terroir",
    intro:
      "Mille châteaux, des grottes ornées vieilles de dix-sept mille ans et la meilleure cuisine paysanne de France. Le Périgord se vit lentement, avec un verre de Monbazillac.",
    duration: "3 à 8 jours",
    season: "Avril à novembre — truffe en hiver",
    highlights: [
      "Lascaux et grottes ornées en accès privilégié",
      "Marché aux truffes de Sarlat avec un chef",
      "Descente de la Dordogne en gabare privatisée",
      "Châteaux de Beynac, Castelnaud et Milandes",
    ],
    itinerary: [
      {
        day: "Jour 1",
        title: "Sarlat & Périgord noir",
        description:
          "Arrivée, installation dans un manoir périgourdin, découverte de Sarlat en fin de journée quand la ville se vide.",
      },
      {
        day: "Jour 2",
        title: "Vallée de la Dordogne",
        description:
          "Châteaux de Beynac et Castelnaud, déjeuner en terrasse au-dessus de la vallée, descente en gabare privatisée l'après-midi.",
      },
      {
        day: "Jour 3",
        title: "Préhistoire",
        description:
          "Lascaux et une grotte ornée en accès restreint avec un préhistorien, puis dégustation de vins de Bergerac.",
      },
      {
        day: "Jour 4",
        title: "Truffe & gastronomie",
        description:
          "Cavage avec un trufficulteur et son chien, marché aux truffes, cours de cuisine avec un chef étoilé.",
      },
    ],
    image:
      "/images/dest-perigord.jpg",
  },
  {
    slug: "landes",
    name: "Landes",
    tagline: "Océan, pinède & silence",
    intro:
      "La plus grande forêt d'Europe occidentale, cent kilomètres de plage sans une falaise, et des courants d'eau claire qui serpentent sous les arbres. Les Landes ne se visitent pas, elles se traversent lentement.",
    duration: "3 à 6 jours",
    season: "Mai à octobre",
    highlights: [
      "Courant d'Huchet en barque à la rame, avec un batelier",
      "Plages de Moliets, Contis et Mimizan hors saison",
      "Airials et bergeries de la Grande Lande",
      "Cuisine landaise : canard, asperge des sables, pignons",
    ],
    itinerary: [
      {
        day: "Jour 1",
        title: "Côte et dunes",
        description:
          "Arrivée, installation en pinède, découverte du littoral au coucher du soleil et dîner de poissons de l'Adour.",
      },
      {
        day: "Jour 2",
        title: "Le Courant d'Huchet",
        description:
          "Descente du courant en barque à la rame avec un batelier, entre chênes-lièges et hibiscus sauvages, puis déjeuner à l'estuaire.",
      },
      {
        day: "Jour 3",
        title: "Grande Lande",
        description:
          "Airials, bergeries et écomusée de Marquèze, rencontre avec un producteur d'asperges des sables et table landaise le soir.",
      },
    ],
    image: "/images/dest-landes.jpg",
  },
  {
    slug: "pyrenees-atlantiques",
    name: "Pyrénées-Atlantiques",
    tagline: "Océan, montagne & caractère",
    intro:
      "Une identité qui ne ressemble à aucune autre. En une journée : les vagues de Biarritz le matin, les villages de la Rhune l'après-midi, et une table où l'on parle encore basque le soir.",
    duration: "3 à 7 jours",
    season: "Mai à octobre",
    highlights: [
      "Biarritz, Saint-Jean-de-Luz et la côte sauvage",
      "Villages d'Ainhoa, Espelette et Sare",
      "Ateliers de piment, jambon et fromage de brebis",
      "Passage en Espagne : Saint-Sébastien et ses pintxos",
    ],
    itinerary: [
      {
        day: "Jour 1",
        title: "Côte basque",
        description:
          "Transfert depuis Biarritz, découverte de la côte, Saint-Jean-de-Luz et dîner face à l'océan.",
      },
      {
        day: "Jour 2",
        title: "Arrière-pays",
        description:
          "Villages classés, atelier du piment d'Espelette, déjeuner en ferme-auberge et train de la Rhune.",
      },
      {
        day: "Jour 3",
        title: "Saint-Sébastien",
        description:
          "Passage en Guipuscoa, marché de la Bretxa, tournée de pintxos guidée et retour en fin de soirée.",
      },
    ],
    image:
      "/images/dest-basque.jpg",
  },
  {
    slug: "gascogne-armagnac",
    name: "Gascogne & Armagnac",
    tagline: "Bastides, armagnac & tables de caractère",
    intro:
      "La France que l'on croit disparue : des bastides médiévales intactes, des fermes qui élèvent encore leurs canards, et des chais où dorment des millésimes plus vieux que vos grands-parents.",
    duration: "3 à 6 jours",
    season: "Toute l'année",
    highlights: [
      "Chais d'armagnac et millésimes centenaires",
      "Bastides de Fourcès, Larressingle et Montréal-du-Gers",
      "Fermes gasconnes et cuisine au foie gras",
      "Auch, Condom et l'abbaye de Flaran",
    ],
    itinerary: [
      {
        day: "Jour 1",
        title: "Cœur de Gascogne",
        description:
          "Arrivée et installation dans une bastide restaurée, découverte d'Auch et dîner gascon.",
      },
      {
        day: "Jour 2",
        title: "Armagnac",
        description:
          "Deux domaines familiaux, dégustation de millésimes anciens dans le chai historique, déjeuner à la propriété.",
      },
      {
        day: "Jour 3",
        title: "Bastides & fermes",
        description:
          "Villages médiévaux, rencontre avec un éleveur gascon et atelier de cuisine au foie gras.",
      },
    ],
    image:
      "/images/dest-gascogne.jpg",
  },
];

/**
 * Panneau de synthèse : ce que fait la maison, en cinq lignes.
 * Affiché entre deux photos, comme une carte de visite au milieu du site.
 */
export const resume = {
  points: [
    {
      titre: "Agence locale du Sud-Ouest",
      detail: "Nous vivons ici, nous connaissons les gens",
    },
    {
      titre: "Programmes composés à la carte",
      detail: "De la sortie d'une journée au voyage de trois semaines",
    },
    {
      titre: "Chauffeur dédié",
      detail: "Le même expert local du premier au dernier jour",
    },
    {
      titre: "Accès privilégiés",
      detail: "Des châteaux et des tables fermés au public",
    },
    {
      titre: "Un seul interlocuteur",
      detail: "Joignable avant, pendant et après votre voyage",
    },
  ],
  citation: "Vous nous dites ce qui vous ferait plaisir, nous nous chargeons du reste",
  images: {
    gauche: "/images/exp-margaux.jpg",
    droite: "/images/exp-landes.jpg",
  },
};

/** Mosaïque de photos qui encadre le récit de la page « À propos ». */
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
    "On ne connaît pas vraiment une région tant que personne d'ici ne vous y a emmené",
  signature: "RDR Services",
};

/**
 * Activités proposées sur place, par région.
 * La clé reprend le `slug` de la destination ; une région sans entrée
 * n'affiche simplement pas la section.
 */
export type Activite = { titre: string; detail: string; image: string };

export const activites: Record<string, Activite[]> = {
  "bordeaux-medoc": [
    {
      titre: "La Cité du Vin",
      detail: "Visite privée avant l'ouverture, puis dégustation au belvédère du huitième étage.",
      image: "/images/activites/act-bdx-cite-du-vin.jpg",
    },
    {
      titre: "Chai d'un grand cru classé",
      detail: "Les barriques à perte de vue, commentées par le maître de chai qui les assemble.",
      image: "/images/activites/act-bdx-chai.jpg",
    },
    {
      titre: "Les Bassins des Lumières",
      detail: "Une base sous-marine transformée en plus grand centre d'art numérique du monde.",
      image: "/images/activites/act-bdx-bassins-lumieres.jpg",
    },
    {
      titre: "Le miroir d'eau",
      detail: "La place de la Bourse et son reflet, tôt le matin quand la place est encore vide.",
      image: "/images/activites/act-bdx-miroir-eau.jpg",
    },
    {
      titre: "Sensations en hauteur",
      detail: "Pour ceux qui veulent voir la ville autrement, une ascension encadrée par un guide.",
      image: "/images/activites/act-bdx-escalade.jpg",
    },
  ],
  "pyrenees-atlantiques": [
    {
      titre: "Le train de la Rhune",
      detail: "Un train à crémaillère de 1924 qui grimpe jusqu'à 900 mètres, avec l'océan d'un côté et l'Espagne de l'autre.",
      image: "/images/activites/act-pa-rhune.jpg",
    },
    {
      titre: "Espelette et son piment",
      detail: "Les façades rouges couvertes de cordes de piments, et l'atelier d'un producteur qui vous explique tout.",
      image: "/images/activites/act-pa-espelette.jpg",
    },
    {
      titre: "Saint-Jean-Pied-de-Port",
      detail: "La dernière étape française du chemin de Compostelle, ses remparts et ses ruelles pavées.",
      image: "/images/activites/act-pa-stjean.jpg",
    },
    {
      titre: "Une partie de pelote",
      detail: "Le sport qui fait battre le cœur du pays, vu depuis les gradins avec quelqu'un qui vous en explique les règles.",
      image: "/images/activites/act-pa-pelote.jpg",
    },
  ],
  landes: [
    {
      titre: "Surf à Hossegor",
      detail: "Cours particulier sur l'un des plus beaux spots d'Europe, adapté à votre niveau, planches fournies.",
      image: "/images/activites/act-lan-surf.jpg",
    },
    {
      titre: "Cent kilomètres de plage",
      detail: "Du sable à perte de vue, sans une falaise, et des postes de secours surveillés tout l'été.",
      image: "/images/activites/act-lan-plage.jpg",
    },
    {
      titre: "Une course landaise",
      detail: "Ni corrida ni mise à mort : des écarteurs qui esquivent la vache d'un cheveu, sous les vivats du village.",
      image: "/images/activites/act-lan-course.jpg",
    },
    {
      titre: "Les thermes de Dax",
      detail: "Première station thermale de France, ses boues chaudes et ses bassins, en accès privatisé.",
      image: "/images/activites/act-lan-thermes.jpg",
    },
  ],
  "gascogne-armagnac": [
    {
      titre: "L'abbaye de Flaran",
      detail: "Un cloître cistercien du XIIe siècle, parmi les mieux conservés du Sud-Ouest, ouvert avant les visiteurs.",
      image: "/images/activites/act-gas-flaran.jpg",
    },
    {
      titre: "Larressingle",
      detail: "La plus petite cité fortifiée de France, deux cents mètres de remparts intacts autour de huit maisons.",
      image: "/images/activites/act-gas-larressingle.jpg",
    },
    {
      titre: "Fourcès et ses bastides",
      detail: "Une place ronde bordée d'arcades, une rivière, des saules : le village le plus photographié du Gers.",
      image: "/images/activites/act-gas-fources.jpg",
    },
    {
      titre: "Le château de Larressingle",
      detail: "Le donjon des évêques de Condom, ruine spectaculaire au cœur des remparts.",
      image: "/images/activites/act-gas-chateau.jpg",
    },
  ],
  perigord: [
    {
      titre: "Canoë sur la Dordogne",
      detail: "Descente au pied des falaises et des châteaux, à votre rythme, avec récupération en fin de parcours.",
      image: "/images/activites/act-per-canoe.jpg",
    },
    {
      titre: "Montgolfière au lever du jour",
      detail: "Survol de la vallée et de La Roque-Gageac dans la lumière rasante du matin.",
      image: "/images/activites/act-per-montgolfiere.jpg",
    },
    {
      titre: "Via ferrata",
      detail: "Les falaises du Périgord en toute sécurité, encadré par un moniteur diplômé.",
      image: "/images/activites/act-per-via-ferrata.jpg",
    },
    {
      titre: "Vélo électrique en famille",
      detail: "Les chemins entre les villages et les châteaux, sans souffrir dans les côtes.",
      image: "/images/activites/act-per-vtt.jpg",
    },
    {
      titre: "Journée médiévale",
      detail: "Costumes, tir à l'arc et combats d'entraînement dans un château fort : les enfants adorent.",
      image: "/images/activites/act-per-medieval.jpg",
    },
  ],
};

export const process = [
  {
    step: "01",
    title: "Premier échange",
    description:
      "Un appel de trente minutes pour comprendre qui voyage, quand, avec quelles envies et quel budget. Sans engagement.",
  },
  {
    step: "02",
    title: "Proposition",
    description:
      "Sous 72 heures, un programme détaillé jour par jour, avec hébergements, expériences et budget ferme.",
  },
  {
    step: "03",
    title: "Ajustements",
    description:
      "Nous retravaillons le programme autant de fois que nécessaire, jusqu'à ce qu'il vous ressemble vraiment.",
  },
  {
    step: "04",
    title: "Votre séjour",
    description:
      "Votre chauffeur dédié vous accueille. Un interlocuteur unique reste joignable 24h/24 pendant tout le séjour.",
  },
];

export const testimonials = [
  {
    quote:
      "Nous connaissions déjà Bordeaux, mais pas comme ça. Deux grands crus nous ont ouvert leurs portes un dimanche, et le chauffeur connaissait chaque propriétaire personnellement.",
    author: "Claire & Thomas L.",
    origin: "Paris — séjour Médoc & Saint-Émilion, 5 jours",
  },
  {
    quote:
      "Organisation d'un séminaire de direction pour douze personnes en Gascogne. Tout était réglé, y compris ce qu'on n'avait pas pensé à demander. Nous avons rebooké l'année suivante.",
    author: "Marc D.",
    origin: "Lyon — séminaire Gascogne, 3 jours",
  },
  {
    quote:
      "The private tasting in a classified château was the highlight of our entire trip to Europe. Impeccable service from first email to last goodbye.",
    author: "Sarah M.",
    origin: "London — Bordeaux & Périgord, 10 jours",
  },
];

export const faq = [
  {
    question: "Proposez-vous des excursions à la journée ?",
    answer:
      "Oui. Nous organisons aussi bien une journée dans le vignoble qu'un séjour de trois semaines à travers le Sud-Ouest. La journée se réserve idéalement deux à trois semaines à l'avance en haute saison.",
  },
  {
    question: "Quel type de véhicule utilisez-vous ?",
    answer:
      "Des Mercedes Classe E et Classe V récentes, entretenues et assurées pour le transport de personnes. Sièges enfant, wifi et eau sont fournis sur demande.",
  },
  {
    question: "Le chauffeur reste-t-il le même pendant tout le séjour ?",
    answer:
      "Oui, systématiquement. C'est le cœur de notre service : votre chauffeur-guide vous accompagne du premier au dernier jour et connaît vos habitudes.",
  },
  {
    question: "Pouvez-vous nous faire entrer dans les grands crus classés ?",
    answer:
      "C'est notre spécialité. La plupart des châteaux classés ne reçoivent que sur recommandation. Nos relations dans le Médoc, à Saint-Émilion et à Pomerol nous permettent d'ouvrir ces portes, y compris hors saison.",
  },
  {
    question: "Peut-on explorer librement pendant le séjour ?",
    answer:
      "Bien sûr. Nous prévoyons volontairement des plages libres dans chaque programme, et votre chauffeur reste disponible si vous changez d'avis en cours de journée.",
  },
  {
    question: "Les repas sont-ils inclus ?",
    answer:
      "Ils le sont dans les formules complètes. Sur les excursions à la journée, le déjeuner est réservé pour vous et facturé selon la table choisie. Nous vous indiquons tout à l'avance, sans surprise.",
  },
  {
    question: "Acceptez-vous les groupes ?",
    answer:
      "Jusqu'à huit personnes par véhicule, et davantage avec plusieurs véhicules. Nous ne mélangeons jamais deux clientèles : tous nos séjours sont en privatif.",
  },
  {
    question: "Pouvez-vous réserver l'hébergement ?",
    answer:
      "Oui. Nous travaillons avec une sélection d'hôtels, châteaux-hôtels et propriétés privées du Sud-Ouest. Vous pouvez aussi conserver votre propre hébergement, nous nous adaptons.",
  },
  {
    question: "Organisez-vous des événements spéciaux ?",
    answer:
      "Anniversaires, demandes en mariage, séminaires, voyages de récompense : oui, c'est une part importante de notre activité.",
  },
  {
    question: "Comment se passe le paiement ?",
    answer:
      "Un acompte de 30 % à la validation du programme, le solde quinze jours avant le départ. Virement ou carte bancaire. Vos documents et factures sont accessibles dans votre espace client.",
  },
];

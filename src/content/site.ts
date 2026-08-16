/**
 * Contenu du site — tout le texte éditable est regroupé ici.
 * Modifie ce fichier pour changer les textes, services, destinations et coordonnées.
 */

export const company = {
  name: "RDR Services",
  legalName: "RDR Services",
  tagline: "Conciergerie & voyages privés",
  baseline: "L'art de voyager dans le Sud-Ouest",
  phone: "+33 6 00 00 00 00",
  phoneHref: "+33600000000",
  email: "contact@rdr-services.fr",
  address: "Bordeaux, Nouvelle-Aquitaine, France",
  // Numéros à remplacer par les vôtres une fois les licences obtenues
  licenceAtoutFrance: "IM0000000000",
  licenceTransport: "EVTC0000000000",
  socials: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
  },
} as const;

export const nav = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Expériences", href: "/experiences" },
  { label: "Destinations", href: "/destinations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
] as const;

export const hero = {
  eyebrow: "Immersion & expériences",
  /** Grand titre centré : le nom de la maison, très espacé. */
  title: "RDR Services",
  /** Bandeau posé sous le titre. */
  banner: "Découvrez le Sud-Ouest, conduit par nos experts locaux",
  subtitle:
    "Vignobles bordelais, Périgord, Pays Basque et Gascogne. Chaque séjour est composé à la main, pour vous seul.",
  primaryCta: { label: "Composer mon séjour", href: "/contact" },
  secondaryCta: { label: "Découvrir nos services", href: "/services" },
  /**
   * Quatre panneaux d'images côte à côte, chacun représentant un territoire.
   * Sur mobile, seuls les deux premiers restent visibles.
   */
  panels: [
    { image: "/images/hero-accueil.jpg", label: "Médoc" },
    { image: "/images/dest-perigord.jpg", label: "Périgord" },
    { image: "/images/dest-basque.jpg", label: "Pays Basque" },
    { image: "/images/dest-gascogne.jpg", label: "Gascogne" },
  ],
};

export const intro = {
  eyebrow: "Agence locale — services & expériences uniques",
  title: "Découvrez le meilleur du Sud-Ouest",
  body: [
    "RDR Services est une conciergerie de voyage indépendante, née d'une conviction simple : les plus beaux souvenirs ne s'achètent pas en ligne, ils se construisent avec quelqu'un qui connaît le terrain.",
    "Nous concevons des séjours privés d'une journée à trois semaines — des grands crus du Médoc aux vallées basques — avec chauffeur dédié, accès privilégiés et un interlocuteur unique disponible avant, pendant et après votre voyage.",
  ],
  stats: [
    { value: "10 ans", label: "d'expérience dans l'hôtellerie de luxe" },
    { value: "1 à 21", label: "jours, en privatif intégral" },
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
  licence?: string;
};

export const services: Service[] = [
  {
    slug: "excursions",
    title: "Excursions",
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
    title: "Créations sur mesure",
    short: "Événements privés, séjours et voyages entièrement composés.",
    description:
      "Un anniversaire, une demande en mariage, un séminaire ou trois semaines de découverte : nous construisons le programme de zéro, autour de vos contraintes réelles.",
    bullets: [
      "Étude de vos envies lors d'un entretien préalable",
      "Proposition détaillée sous 72 heures",
      "Hébergements sélectionnés et négociés pour vous",
      "Ajustements illimités jusqu'à validation",
    ],
    image:
      "/images/svc-creations.jpg",
    licence: `Licence ATOUT FRANCE n° ${company.licenceAtoutFrance}`,
  },
  {
    slug: "transport-vip",
    title: "Transport VIP",
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
      "/images/svc-transport.jpg",
    licence: `Licence de transport n° ${company.licenceTransport}`,
  },
  {
    slug: "acces-privilegies",
    title: "Accès privilégiés",
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
      "/images/svc-acces.jpg",
  },
];

export const experiences = [
  {
    title: "Verticale en grand cru classé",
    place: "Médoc",
    description:
      "Une dégustation de six millésimes commentée par le maître de chai, dans un château classé habituellement fermé aux visites.",
    image:
      "/images/exp-verticale.jpg",
  },
  {
    title: "Vendanges en Saint-Émilion",
    place: "Gironde",
    description:
      "Une matinée dans les rangs pendant les vendanges, suivie d'un déjeuner vigneron au milieu des cuves.",
    image:
      "/images/exp-vendanges.jpg",
  },
  {
    title: "Villages perchés du Périgord",
    place: "Dordogne",
    description:
      "Belvès, Domme, Monpazier : trois bastides classées parcourues avec un historien qui y vit, loin des heures d'affluence.",
    image: "/images/exp-beynac-int.jpg",
  },
  {
    title: "Retour de pêche à Saint-Jean-de-Luz",
    place: "Pays Basque",
    description:
      "Le port au petit matin, la criée, puis le déjeuner du jour préparé avec ce qui vient d'être débarqué.",
    image: "/images/exp-surf.jpg",
  },
  {
    title: "Déjeuner au cœur des vignes",
    place: "Médoc",
    description:
      "Une table dressée entre les rangs, au milieu d'un grand cru classé, avec le propriétaire pour commenter chaque bouteille.",
    image: "/images/exp-margaux.jpg",
  },
  {
    title: "La Dordogne en gabare privée",
    place: "Périgord",
    description:
      "Descente de la rivière sur une gabare privatisée, au pied des falaises de La Roque-Gageac, avec un panier de producteurs à bord.",
    image: "/images/exp-chateau.jpg",
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
      "/images/dest-bordeaux.jpg",
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
    slug: "pays-basque",
    name: "Pays Basque",
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
      titre: "Séjours privés sur mesure",
      detail: "D'une excursion à la journée à trois semaines",
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
  citation: "De votre premier appel à votre retour, nous nous occupons de tout",
  images: {
    gauche: "/images/svc-acces.jpg",
    droite: "/images/exp-verticale.jpg",
  },
};

/** Mosaïque de photos qui encadre le récit de la page « À propos ». */
export const mosaique = {
  gauche: [
    "/images/dest-perigord.jpg",
    "/images/svc-excursions.jpg",
    "/images/exp-chateau.jpg",
    "/images/dest-gascogne.jpg",
  ],
  droite: [
    "/images/exp-vendanges.jpg",
    "/images/dest-basque.jpg",
    "/images/exp-verticale.jpg",
    "/images/hero-accueil.jpg",
  ],
  citation:
    "Quoi de mieux que découvrir un territoire d'exception, pris en charge par un expert local passionné",
  signature: "Le fondateur, expert local",
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

/**
 * Contenido del sitio en español — el espejo de `site.ts`.
 *
 * Misma forma, mismas claves, mismo orden: los tipos importados abajo son lo
 * que impide que los archivos se separen con el tiempo. Añadir un campo en uno
 * sin añadirlo en el otro no compila.
 *
 * Lo que deliberadamente *no* se traduce: los identificadores de dirección
 * (slugs), las rutas de imagen, los enlaces, los teléfonos y todos los datos
 * legales. Un slug distinto por idioma significaría mantener varias
 * direcciones para la misma página.
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
  tagline: "Conserjería y viajes privados",
  baseline: "El arte de viajar por el Suroeste de Francia",

  phone: "+33 6 00 00 00 00",
  phoneHref: "+33600000000",
  email: "contact@rdr-services.fr",

  address: "22 rue de la Marne, 33500 Libourne, Francia",
  city: "Libourne",

  legal: {
    form: "SASU — sociedad por acciones simplificada de socio único",
    capital: "2.500 €",
    siren: "920 247 517",
    siret: "920 247 517 00013",
    rcs: "Libourne",
    tva: "FR52920247517",
    naf: "7420Z",
    director: "Romain Da Rugna",
    createdAt: "25 de octubre de 2022",
  },
  socials: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
  },
};

export const nav: NavItem[] = [
  { label: "Inicio", href: "/#accueil" },
  { label: "Servicios", href: "/#services" },
  { label: "Destinos", href: "/#sejours", regions: true },
  { label: "Quiénes somos", href: "/#a-propos" },
  { label: "Preguntas", href: "/#faq" },
  { label: "Contacto", href: "/#contact" },
];

export const hero = {
  eyebrow: "Inmersión y experiencias",
  title: "RDR Services",
  banner: "Descubra el Suroeste de Francia con expertos locales",
  subtitle:
    "Viñedos de Burdeos, Périgord, las Landas y el País Vasco. Cada viaje se compone a mano, solo para usted.",
  primaryCta: { label: "Diseñar mi viaje", href: "/#contact" },
  secondaryCta: { label: "Ver lo que hacemos", href: "/#services" },
  panels: [
    {
      image: "/images/vignes-chateau.jpg",
      label: "Médoc",
      cadrage: "72% center",
    },
    {
      image: "/images/biarritz-plage.jpg",
      label: "País Vasco",
      cadrage: "center",
    },
    {
      image: "/images/bearn-ossau.jpg",
      label: "Bearne",
      cadrage: "42% center",
    },
    {
      image: "/images/svc-creations.jpg",
      label: "Gascuña",
      cadrage: "center",
    },
  ],
};

export const intro = {
  eyebrow: "Conserjería independiente — Nueva Aquitania",
  title: "El Suroeste en exclusiva",
  body: [
    "Cinco territorios, una sola casa. Organizamos viajes privados por el Suroeste de Francia para viajeros que prefieren que les abran puertas antes que recibir un folleto.",
    "Del viñedo bordelés al océano de las Landas. El programa se construye con usted, se reajusta sobre la marcha si cambia el ánimo, y permanece en manos de una sola persona de principio a fin.",
  ],
  stats: [
    { value: "10 años", label: "Clefs d'Or, conserjería de lujo" },
    { value: "5", label: "territorios recorridos todo el año" },
    { value: "24/7", label: "asistencia durante su estancia" },
    { value: "100 %", label: "a medida, nunca en grupo" },
  ],
};

export const apropos = {
  histoire: [
    "RDR Services es una conserjería de viajes instalada en Nueva Aquitania. No vendemos circuitos: componemos estancias, una por una, para viajeros que quieren algo distinto de un programa impreso de antemano.",
    "Lo que marca la diferencia son cosas pequeñas: conocer al propietario que abre su bodega un domingo, saber qué mesa merece el desvío y cuál vive de su reputación, intuir que conviene invertir dos jornadas porque llega la lluvia. Ese saber no se compra, se construye sobre el terreno.",
    "Cubrimos cinco territorios, del Bordelés al País Vasco, del Périgord a las Landas y a Gascuña. Siempre en privado, siempre con el mismo chófer del primer al último día, y un único interlocutor al que puede llamar a cualquier hora durante el viaje.",
  ],
};

export const services: Service[] = [
  {
    slug: "excursions",
    title: "Jornadas guiadas",
    short: "Por días, para una ocasión o como viaje completo.",
    description:
      "Nos hacemos cargo de toda su jornada: itinerario, reservas, almuerzo, transporte y acompañamiento. Usted solo tiene que disfrutarla.",
    bullets: [
      "Itinerario compuesto según sus gustos y su ritmo",
      "Chófer-guía que habla francés e inglés",
      "Almuerzo y catas reservados con antelación",
      "Salida desde su hotel, castillo o el aeropuerto",
    ],
    image: "/images/svc-excursions.jpg",
  },
  {
    slug: "creations-sur-mesure",
    title: "Viajes a medida",
    short: "Celebraciones privadas, estancias y viajes compuestos de cero.",
    description:
      "Un cumpleaños, una pedida de mano, una convención o tres semanas de descubrimiento: construimos el programa desde cero, en torno a lo que de verdad quiere.",
    bullets: [
      "Estudio de sus deseos en una primera conversación",
      "Propuesta detallada en menos de 72 horas",
      "Alojamientos seleccionados y negociados para usted",
      "Ajustes ilimitados hasta que quede a su gusto",
    ],
    image: "/images/bordeaux-bourse.jpg",
  },
  {
    slug: "transport-vip",
    title: "Chófer privado",
    short: "Berlinas y furgonetas Mercedes, con chófer propio.",
    description:
      "Nuestra flota es suya mientras dure la estancia. El mismo chófer del primer al último día: conoce sus costumbres, sus horarios y sus direcciones.",
    bullets: [
      "Mercedes Clase V y Clase E recientes",
      "Traslados a aeropuerto, estación y larga distancia",
      "Un chófer dedicado durante toda la estancia",
      "Agua, wifi y sillas infantiles a petición",
    ],
    image: "/images/vans-chateau.jpg",
  },
  {
    slug: "acces-privilegies",
    title: "Accesos reservados",
    short: "Nuestra red de châteaux y socios, abierta solo para usted.",
    description:
      "Grandes crus clasificados cerrados al público, mesas completas, talleres de artesanos: diez años de relaciones locales abren puertas que ninguna plataforma indexa.",
    bullets: [
      "Châteaux clasificados del Médoc y Saint-Émilion, en privado",
      "Mesas con estrella reservadas fuera de disponibilidad pública",
      "Talleres de artesanos y chefs, cara a cara",
      "Bodegas y bastidas abiertas fuera de horario",
    ],
    image: "/images/chateau-margaux.jpg",
  },
];

export const experiences: Experience[] = [
  {
    region: "bordeaux-medoc",
    title: "Cata vertical en un gran cru clasificado",
    place: "Médoc",
    description:
      "Seis añadas comentadas por el maestro bodeguero, dentro de un château clasificado normalmente cerrado a las visitas.",
    image: "/images/exp-verticale.jpg",
  },
  {
    region: "bordeaux-medoc",
    title: "Vendimia en Saint-Émilion",
    place: "Gironda",
    description:
      "Una mañana entre las cepas durante la vendimia, seguida de un almuerzo del viticultor en medio de las cubas.",
    image: "/images/exp-vendanges.jpg",
  },
  {
    region: "perigord",
    title: "Pueblos encaramados del Périgord",
    place: "Dordoña",
    description:
      "Belvès, Domme, Monpazier: tres bastidas catalogadas recorridas con un historiador que vive allí, lejos de las horas de aglomeración.",
    image: "/images/exp-troglodyte.jpg",
  },
  {
    region: "perigord",
    title: "La Dordoña en gabarra privada",
    place: "Périgord",
    description:
      "Río abajo en una gabarra reservada para usted, al pie de los acantilados de La Roque-Gageac, con una cesta de productores a bordo.",
    image: "/images/exp-chateau.jpg",
  },
  {
    region: "landes",
    title: "El Courant d'Huchet en barca de remos",
    place: "Landas",
    description:
      "Dos horas a remo sobre agua translúcida, bajo una bóveda de alcornoques, con uno de los pocos barqueros que aún tienen licencia.",
    image: "/images/exp-landes.jpg",
  },
  {
    region: "pyrenees-atlantiques",
    title: "Atardecer en la costa vasca",
    place: "País Vasco",
    description:
      "El faro, las rocas y el océano a la hora azul, y después una mesa frente al mar reservada solo para ustedes.",
    image: "/images/exp-surf.jpg",
  },
  {
    region: "pyrenees-atlantiques",
    title: "Grandes hoteles y casas excepcionales",
    place: "Costa vasca",
    description:
      "Negociamos para usted las mejores direcciones de la región, de los grandes hoteles de la Belle Époque a propiedades privadas abiertas a unos pocos huéspedes.",
    image: "/images/exp-bayonne.jpg",
  },
  {
    region: "gascogne-armagnac",
    title: "Bodegas de armañac centenarias",
    place: "Gascuña",
    description:
      "Una finca familiar, su reserva de añadas más viejas que sus abuelos, y una cata en la bodega histórica.",
    image: "/images/hero-apropos.jpg",
  },
  {
    region: "gascogne-armagnac",
    title: "Mesa gascona en casa del productor",
    place: "Gers",
    description:
      "Cocina de foie gras y pato, preparada delante de usted por la señora de la casa, en una granja que aún cría sus propios animales.",
    image: "/images/hero-services.jpg",
  },
];

export const destinations: Destination[] = [
  {
    slug: "bordeaux-medoc",
    name: "Burdeos y Médoc",
    tagline: "Grandes crus, fachadas catalogadas y arte de la mesa",
    intro:
      "La ciudad de piedra dorada más hermosa de Francia y, a treinta minutos, los châteaux que escribieron la historia del vino. El Bordelés se visita mejor acompañado: los grandes crus no abren sus puertas a cualquiera.",
    duration: "3 a 7 días",
    season: "Todo el año — vendimia en septiembre",
    highlights: [
      "Grandes crus clasificados del Médoc en visita privada",
      "Saint-Émilion y sus iglesias subterráneas",
      "Burdeos recorrido con un historiador de la arquitectura",
      "Bahía de Arcachon, duna de Pilat y cata de ostras",
    ],
    itinerary: [
      {
        day: "Día 1",
        title: "Burdeos",
        description:
          "Recogida en el aeropuerto o la estación, instalación y descubrimiento del centro catalogado con un guía historiador. Cena en una mesa bordelesa poco conocida.",
      },
      {
        day: "Día 2",
        title: "Ruta de los châteaux",
        description:
          "Médoc: dos grandes crus clasificados en visita privada, almuerzo en el château y cata comentada por el maestro bodeguero.",
      },
      {
        day: "Día 3",
        title: "Saint-Émilion",
        description:
          "Orilla derecha, ciudad medieval y sus canteras subterráneas, almuerzo del viticultor y tarde en casa de un propietario cosechero.",
      },
      {
        day: "Día 4",
        title: "Bahía de Arcachon",
        description:
          "Cabaña ostrícola, cata frente a la bahía y duna de Pilat al atardecer.",
      },
    ],
    image: "/images/svc-acces.jpg",
  },
  {
    slug: "perigord",
    name: "Périgord y Dordoña",
    tagline: "Châteaux, prehistoria y mesas de la tierra",
    intro:
      "Mil châteaux, cuevas pintadas de hace diecisiete mil años y la mejor cocina campesina de Francia. El Périgord se vive despacio, con una copa de Monbazillac.",
    duration: "3 a 8 días",
    season: "De abril a noviembre — trufa en invierno",
    highlights: [
      "Lascaux y cuevas pintadas con acceso privilegiado",
      "Mercado de la trufa de Sarlat con un chef",
      "Descenso de la Dordoña en gabarra privada",
      "Châteaux de Beynac, Castelnaud y Les Milandes",
    ],
    itinerary: [
      {
        day: "Día 1",
        title: "Sarlat y el Périgord Noir",
        description:
          "Llegada, instalación en una casona del Périgord y Sarlat al final del día, cuando la ciudad se vacía.",
      },
      {
        day: "Día 2",
        title: "Valle de la Dordoña",
        description:
          "Châteaux de Beynac y Castelnaud, almuerzo en una terraza sobre el valle y descenso en gabarra privada por la tarde.",
      },
      {
        day: "Día 3",
        title: "Prehistoria",
        description:
          "Lascaux y una cueva pintada de acceso restringido con un prehistoriador, y después una cata de vinos de Bergerac.",
      },
      {
        day: "Día 4",
        title: "Trufa y gastronomía",
        description:
          "Búsqueda de trufas con un truficultor y su perro, mercado de la trufa y clase de cocina con un chef con estrella.",
      },
    ],
    image: "/images/dest-perigord.jpg",
  },
  {
    slug: "landes",
    name: "Landas",
    tagline: "Océano, pinar y silencio",
    intro:
      "El bosque más grande de Europa occidental, cien kilómetros de playa sin un solo acantilado y arroyos de agua clara que serpentean bajo los árboles. Las Landas no se visitan: se atraviesan despacio.",
    duration: "3 a 6 días",
    season: "De mayo a octubre",
    highlights: [
      "El Courant d'Huchet en barca de remos, con un barquero",
      "Las playas de Moliets, Contis y Mimizan fuera de temporada",
      "Airiales y apriscos de la Grande Lande",
      "Cocina landesa: pato, espárrago de arena, piñones",
    ],
    itinerary: [
      {
        day: "Día 1",
        title: "Costa y dunas",
        description:
          "Llegada, instalación entre los pinos, litoral al atardecer y cena de pescado del Adour.",
      },
      {
        day: "Día 2",
        title: "El Courant d'Huchet",
        description:
          "Descenso del arroyo en barca de remos con un barquero, entre alcornoques e hibiscos silvestres, y almuerzo en el estuario.",
      },
      {
        day: "Día 3",
        title: "Grande Lande",
        description:
          "Airiales, apriscos y ecomuseo de Marquèze, encuentro con un productor de espárragos de arena y mesa landesa por la noche.",
      },
    ],
    image: "/images/dest-landes.jpg",
  },
  {
    slug: "pyrenees-atlantiques",
    name: "País Vasco y Bearne",
    tagline: "Océano, montaña y carácter",
    intro:
      "Una identidad que no se parece a ninguna otra. En un solo día: las olas de Biarritz por la mañana, los pueblos de La Rhune por la tarde y una mesa donde todavía se habla euskera por la noche.",
    duration: "3 a 7 días",
    season: "De mayo a octubre",
    highlights: [
      "Biarritz, San Juan de Luz y la costa salvaje",
      "Los pueblos de Ainhoa, Espelette y Sare",
      "Talleres de pimiento, jamón y queso de oveja",
      "Paso a España: San Sebastián y sus pintxos",
    ],
    itinerary: [
      {
        day: "Día 1",
        title: "Costa vasca",
        description:
          "Traslado desde Biarritz, recorrido de la costa, San Juan de Luz y cena frente al océano.",
      },
      {
        day: "Día 2",
        title: "Interior",
        description:
          "Pueblos catalogados, taller del pimiento de Espelette, almuerzo en una granja-posada y tren cremallera de La Rhune.",
      },
      {
        day: "Día 3",
        title: "San Sebastián",
        description:
          "Paso a Guipúzcoa, mercado de la Bretxa, ronda guiada de pintxos y regreso al final del día.",
      },
    ],
    image: "/images/dest-basque.jpg",
  },
  {
    slug: "gascogne-armagnac",
    name: "Gascuña y Armañac",
    tagline: "Bastidas, armañac y mesas con carácter",
    intro:
      "La Francia que se cree desaparecida: bastidas medievales intactas, granjas que aún crían sus patos y bodegas donde duermen añadas más viejas que sus abuelos.",
    duration: "3 a 6 días",
    season: "Todo el año",
    highlights: [
      "Bodegas de armañac y añadas centenarias",
      "Las bastidas de Fourcès, Larressingle y Montréal-du-Gers",
      "Granjas gasconas y cocina de foie gras",
      "Auch, Condom y la abadía de Flaran",
    ],
    itinerary: [
      {
        day: "Día 1",
        title: "Corazón de Gascuña",
        description:
          "Llegada e instalación en una bastida restaurada, descubrimiento de Auch y cena gascona.",
      },
      {
        day: "Día 2",
        title: "Armañac",
        description:
          "Dos fincas familiares, cata de añadas antiguas en la bodega histórica y almuerzo en la propiedad.",
      },
      {
        day: "Día 3",
        title: "Bastidas y granjas",
        description:
          "Pueblos medievales, encuentro con un ganadero gascón y taller de cocina de foie gras.",
      },
    ],
    image: "/images/dest-gascogne.jpg",
  },
];

export const resume = {
  points: [
    {
      titre: "Agencia local del Suroeste",
      detail: "Vivimos aquí y conocemos a la gente",
    },
    {
      titre: "Programas compuestos a la carta",
      detail: "De la salida de un día al viaje de tres semanas",
    },
    {
      titre: "Chófer dedicado",
      detail: "El mismo experto local del primer al último día",
    },
    {
      titre: "Accesos privilegiados",
      detail: "Châteaux y mesas cerrados al público",
    },
    {
      titre: "Un único interlocutor",
      detail: "Localizable antes, durante y después del viaje",
    },
  ],
  citation: "Díganos qué le haría ilusión: del resto nos encargamos nosotros",
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
    "No se conoce de verdad una región hasta que alguien de allí le lleva a ella",
  signature: "RDR Services",
};

export const activites: Record<string, Activite[]> = {
  "bordeaux-medoc": [
    {
      titre: "La Cité du Vin",
      detail:
        "Visita privada antes de la apertura y después una cata en el mirador de la octava planta.",
      image: "/images/activites/act-bdx-cite-du-vin.jpg",
    },
    {
      titre: "La bodega de un gran cru clasificado",
      detail:
        "Barricas hasta donde alcanza la vista, comentadas por el maestro bodeguero que las ensambla.",
      image: "/images/activites/act-bdx-chai.jpg",
    },
    {
      titre: "Les Bassins des Lumières",
      detail:
        "Una base de submarinos convertida en el mayor centro de arte digital del mundo.",
      image: "/images/activites/act-bdx-bassins-lumieres.jpg",
    },
    {
      titre: "El espejo de agua",
      detail:
        "La plaza de la Bolsa y su reflejo, temprano por la mañana, cuando la plaza aún está vacía.",
      image: "/images/activites/act-bdx-miroir-eau.jpg",
    },
    {
      titre: "La ciudad desde lo alto",
      detail:
        "Para quien quiera ver Burdeos de otro modo: una ascensión guiada por un monitor.",
      image: "/images/activites/act-bdx-escalade.jpg",
    },
  ],
  "pyrenees-atlantiques": [
    {
      titre: "El tren de La Rhune",
      detail:
        "Un tren cremallera de 1924 que sube hasta los 900 metros, con el océano a un lado y España al otro.",
      image: "/images/activites/act-pa-rhune.jpg",
    },
    {
      titre: "Espelette y su pimiento",
      detail:
        "Fachadas rojas cubiertas de ristras de pimientos, y el taller de un productor que se lo explica todo.",
      image: "/images/activites/act-pa-espelette.jpg",
    },
    {
      titre: "Saint-Jean-Pied-de-Port",
      detail:
        "La última etapa francesa del Camino de Santiago, sus murallas y sus callejuelas empedradas.",
      image: "/images/activites/act-pa-stjean.jpg",
    },
    {
      titre: "Un partido de pelota",
      detail:
        "El deporte que late en el corazón del país, visto desde la grada con alguien que le explica las reglas.",
      image: "/images/activites/act-pa-pelote.jpg",
    },
  ],
  landes: [
    {
      titre: "Surf en Hossegor",
      detail:
        "Clase particular en uno de los mejores spots de Europa, adaptada a su nivel, tablas incluidas.",
      image: "/images/activites/act-lan-surf.jpg",
    },
    {
      titre: "Cien kilómetros de playa",
      detail:
        "Arena hasta donde alcanza la vista, sin un solo acantilado, y puestos de socorro vigilados todo el verano.",
      image: "/images/activites/act-lan-plage.jpg",
    },
    {
      titre: "Una course landaise",
      detail:
        "Ni corrida ni muerte del animal: esquivadores que sortean a la vaca por un pelo, entre los vítores del pueblo.",
      image: "/images/activites/act-lan-course.jpg",
    },
    {
      titre: "Los baños termales de Dax",
      detail:
        "El primer balneario de Francia, sus barros calientes y sus piscinas, con acceso privado.",
      image: "/images/activites/act-lan-thermes.jpg",
    },
  ],
  "gascogne-armagnac": [
    {
      titre: "La abadía de Flaran",
      detail:
        "Un claustro cisterciense del siglo XII, de los mejor conservados del Suroeste, abierto antes que a los visitantes.",
      image: "/images/activites/act-gas-flaran.jpg",
    },
    {
      titre: "Larressingle",
      detail:
        "La ciudad fortificada más pequeña de Francia: doscientos metros de murallas intactas alrededor de ocho casas.",
      image: "/images/activites/act-gas-larressingle.jpg",
    },
    {
      titre: "Fourcès y sus bastidas",
      detail:
        "Una plaza redonda rodeada de soportales, un río, sauces: el pueblo más fotografiado del Gers.",
      image: "/images/activites/act-gas-fources.jpg",
    },
    {
      titre: "El castillo de Larressingle",
      detail:
        "La torre del homenaje de los obispos de Condom, ruina espectacular en el corazón de las murallas.",
      image: "/images/activites/act-gas-chateau.jpg",
    },
  ],
  perigord: [
    {
      titre: "Piragua por la Dordoña",
      detail:
        "Descenso al pie de los acantilados y los châteaux, a su ritmo, con recogida al final del recorrido.",
      image: "/images/activites/act-per-canoe.jpg",
    },
    {
      titre: "Globo al amanecer",
      detail:
        "Sobrevuelo del valle y de La Roque-Gageac con la luz rasante de la mañana.",
      image: "/images/activites/act-per-montgolfiere.jpg",
    },
    {
      titre: "Vía ferrata",
      detail:
        "Los acantilados del Périgord con toda seguridad, con un monitor titulado.",
      image: "/images/activites/act-per-via-ferrata.jpg",
    },
    {
      titre: "Bicicleta eléctrica en familia",
      detail:
        "Los caminos entre los pueblos y los châteaux, sin sufrir en las cuestas.",
      image: "/images/activites/act-per-vtt.jpg",
    },
    {
      titre: "Jornada medieval",
      detail:
        "Trajes, tiro con arco y combates de entrenamiento en un castillo: a los niños les encanta.",
      image: "/images/activites/act-per-medieval.jpg",
    },
  ],
};

export const process = [
  {
    step: "01",
    title: "Primera conversación",
    description:
      "Una llamada de treinta minutos para entender quién viaja, cuándo, con qué gustos y qué presupuesto. Sin compromiso.",
  },
  {
    step: "02",
    title: "Propuesta",
    description:
      "En menos de 72 horas, un programa detallado día a día, con alojamientos, experiencias y presupuesto cerrado.",
  },
  {
    step: "03",
    title: "Ajustes",
    description:
      "Reelaboramos el programa tantas veces como haga falta, hasta que se parezca de verdad a usted.",
  },
  {
    step: "04",
    title: "Su viaje",
    description:
      "Su chófer dedicado le recibe. Un único interlocutor permanece localizable las 24 horas durante toda la estancia.",
  },
];

export const testimonials = [
  {
    quote:
      "Ya conocíamos Burdeos, pero no así. Dos grandes crus nos abrieron sus puertas un domingo, y el chófer conocía personalmente a cada propietario.",
    author: "Claire y Thomas L.",
    origin: "París — Médoc y Saint-Émilion, 5 días",
  },
  {
    quote:
      "Organización de una convención de dirección para doce personas en Gascuña. Todo estaba resuelto, incluso lo que no se nos había ocurrido pedir. Repetimos al año siguiente.",
    author: "Marc D.",
    origin: "Lyon — convención en Gascuña, 3 días",
  },
  {
    quote:
      "La cata privada en un château clasificado fue lo mejor de todo nuestro viaje por Europa. Un servicio impecable desde el primer correo hasta la despedida.",
    author: "Sarah M.",
    origin: "Londres — Burdeos y Périgord, 10 días",
  },
];

export const faq = [
  {
    question: "¿Organizan excursiones de un día?",
    answer:
      "Sí. Organizamos tanto una jornada por el viñedo como una estancia de tres semanas por el Suroeste. En temporada alta, conviene reservar la jornada con dos o tres semanas de antelación.",
  },
  {
    question: "¿Qué tipo de vehículo utilizan?",
    answer:
      "Mercedes Clase E y Clase V recientes, mantenidos y asegurados para el transporte de personas. Sillas infantiles, wifi y agua se facilitan a petición.",
  },
  {
    question: "¿Es el mismo chófer durante toda la estancia?",
    answer:
      "Sí, siempre. Es el corazón de nuestro servicio: su chófer-guía le acompaña del primer al último día y conoce sus costumbres.",
  },
  {
    question: "¿Pueden hacernos entrar en los grandes crus clasificados?",
    answer:
      "Es nuestra especialidad. La mayoría de los châteaux clasificados solo reciben por recomendación. Nuestras relaciones en el Médoc, Saint-Émilion y Pomerol nos permiten abrir esas puertas, también fuera de temporada.",
  },
  {
    question: "¿Podemos explorar por nuestra cuenta durante la estancia?",
    answer:
      "Por supuesto. Dejamos a propósito ratos libres en cada programa, y su chófer sigue disponible si cambia de idea a media jornada.",
  },
  {
    question: "¿Están incluidas las comidas?",
    answer:
      "Lo están en las fórmulas completas. En las excursiones de un día, el almuerzo se reserva para usted y se factura según la mesa elegida. Se lo indicamos todo por adelantado, sin sorpresas.",
  },
  {
    question: "¿Aceptan grupos?",
    answer:
      "Hasta ocho personas por vehículo, y más con varios vehículos. Nunca mezclamos dos clientelas: todas nuestras estancias son privadas.",
  },
  {
    question: "¿Pueden reservar el alojamiento?",
    answer:
      "Sí. Trabajamos con una selección de hoteles, châteaux-hotel y propiedades privadas del Suroeste. También puede conservar su propio alojamiento: nos adaptamos.",
  },
  {
    question: "¿Organizan celebraciones especiales?",
    answer:
      "Cumpleaños, pedidas de mano, convenciones, viajes de incentivo: sí, es una parte importante de nuestra actividad.",
  },
  {
    question: "¿Cómo funciona el pago?",
    answer:
      "Un anticipo del 30 % al validar el programa y el resto quince días antes de la salida. Transferencia o tarjeta. Sus documentos y facturas están disponibles en su área de cliente.",
  },
];

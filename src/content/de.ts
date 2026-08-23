/**
 * Inhalte der Website auf Deutsch — das Spiegelbild von `site.ts`.
 *
 * Gleiche Form, gleiche Schlüssel, gleiche Reihenfolge: die unten importierten
 * Typen verhindern, dass die Dateien auseinanderlaufen. Ein Feld auf der einen
 * Seite hinzuzufügen, ohne es auf der anderen zu ergänzen, lässt sich nicht
 * übersetzen.
 *
 * Bewusst *nicht* übersetzt: die Adress-Kennungen (Slugs), die Bildpfade, die
 * Links, die Telefonnummern und sämtliche Rechtsangaben. Ein Slug, der sich je
 * Sprache unterscheidet, hieße mehrere Adressen für dieselbe Seite zu pflegen.
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
  tagline: "Concierge-Service & private Reisen",
  baseline: "Die Kunst, den Südwesten Frankreichs zu bereisen",

  phone: "+33 6 00 00 00 00",
  phoneHref: "+33600000000",
  email: "contact@rdr-services.fr",

  address: "22 rue de la Marne, 33500 Libourne, Frankreich",
  city: "Libourne",

  legal: {
    form: "SASU — vereinfachte Aktiengesellschaft mit einem Gesellschafter",
    capital: "2.500 €",
    siren: "920 247 517",
    siret: "920 247 517 00013",
    rcs: "Libourne",
    tva: "FR52920247517",
    naf: "7420Z",
    director: "Romain Da Rugna",
    createdAt: "25. Oktober 2022",
  },
  socials: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
  },
};

export const nav: NavItem[] = [
  { label: "Start", href: "/#accueil" },
  { label: "Leistungen", href: "/#services" },
  { label: "Reiseziele", href: "/#sejours", regions: true },
  { label: "Über uns", href: "/#a-propos" },
  { label: "Fragen", href: "/#faq" },
  { label: "Kontakt", href: "/#contact" },
];

export const hero = {
  eyebrow: "Eintauchen & erleben",
  title: "RDR Services",
  banner: "Entdecken Sie Südwestfrankreich mit Kennern vor Ort",
  subtitle:
    "Die Weinberge von Bordeaux, das Périgord, die Landes und das Baskenland. Jede Reise wird von Hand zusammengestellt, für Sie allein.",
  primaryCta: { label: "Meine Reise entwerfen", href: "/#contact" },
  secondaryCta: { label: "Was wir tun", href: "/#services" },
  panels: [
    {
      image: "/images/vignes-chateau.jpg",
      label: "Médoc",
      cadrage: "72% center",
    },
    {
      image: "/images/biarritz-plage.jpg",
      label: "Baskenland",
      cadrage: "center",
    },
    {
      image: "/images/bearn-ossau.jpg",
      label: "Béarn",
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
  eyebrow: "Unabhängiger Concierge-Service — Nouvelle-Aquitaine",
  title: "Der Südwesten, exklusiv",
  body: [
    "Fünf Regionen, ein Haus. Wir gestalten private Reisen durch Südwestfrankreich für Reisende, denen lieber Türen geöffnet werden, als dass man ihnen einen Prospekt in die Hand drückt.",
    "Von den Weinbergen um Bordeaux bis zum Atlantik der Landes. Das Programm entsteht mit Ihnen, wird unterwegs angepasst, wenn sich die Lust ändert, und bleibt von Anfang bis Ende in einer Hand.",
  ],
  stats: [
    { value: "10 Jahre", label: "Clefs d'Or, Concierge-Service der Spitzenklasse" },
    { value: "5", label: "Regionen, das ganze Jahr über bereist" },
    { value: "24/7", label: "Betreuung während Ihres Aufenthalts" },
    { value: "100 %", label: "maßgeschneidert, nie in der Gruppe" },
  ],
};

export const apropos = {
  histoire: [
    "RDR Services ist ein Reise-Concierge mit Sitz in Nouvelle-Aquitaine. Wir verkaufen keine Rundreisen: wir stellen Aufenthalte zusammen, einen nach dem anderen, für Reisende, die etwas anderes wollen als ein vorab gedrucktes Programm.",
    "Den Unterschied machen Kleinigkeiten: den Eigentümer zu kennen, der seinen Keller auch am Sonntag öffnet; zu wissen, welches Lokal den Umweg wert ist und welches von seinem Ruf lebt; zu ahnen, dass man zwei Tage besser tauscht, weil Regen aufzieht. Dieses Wissen kauft man nicht, man erwirbt es vor Ort.",
    "Wir decken fünf Regionen ab, vom Bordelais bis ins Baskenland, vom Périgord über die Landes bis in die Gascogne. Immer privat, immer mit demselben Fahrer vom ersten bis zum letzten Tag, und mit einem einzigen Ansprechpartner, den Sie während der Reise zu jeder Stunde anrufen können.",
  ],
};

export const services: Service[] = [
  {
    slug: "excursions",
    title: "Begleitete Tage",
    short: "Tageweise, für einen Anlass oder als vollständige Reise.",
    description:
      "Wir übernehmen Ihren gesamten Tag: Route, Reservierungen, Mittagessen, Transport und Begleitung. Sie müssen ihn nur genießen.",
    bullets: [
      "Route nach Ihren Wünschen und Ihrem Tempo",
      "Fahrer und Führer, französisch- und englischsprachig",
      "Mittagessen und Verkostungen vorab reserviert",
      "Abfahrt von Ihrem Hotel, Schloss oder dem Flughafen",
    ],
    image: "/images/svc-excursions.jpg",
  },
  {
    slug: "creations-sur-mesure",
    title: "Reisen nach Maß",
    short: "Private Anlässe, Aufenthalte und Reisen, von Grund auf entworfen.",
    description:
      "Ein Geburtstag, ein Heiratsantrag, eine Klausurtagung oder drei Wochen Entdeckung: wir bauen das Programm von null auf, rund um das, was Sie wirklich möchten.",
    bullets: [
      "Ihre Wünsche im ersten Gespräch geklärt",
      "Ausführlicher Vorschlag binnen 72 Stunden",
      "Unterkünfte für Sie ausgewählt und verhandelt",
      "Unbegrenzte Anpassungen, bis es passt",
    ],
    image: "/images/bordeaux-bourse.jpg",
  },
  {
    slug: "transport-vip",
    title: "Privater Fahrer",
    short: "Mercedes-Limousinen und -Vans, mit eigenem Fahrer.",
    description:
      "Unsere Flotte gehört Ihnen für die Dauer des Aufenthalts. Derselbe Fahrer vom ersten bis zum letzten Tag: er kennt Ihre Gewohnheiten, Ihre Zeiten und Ihre Adressen.",
    bullets: [
      "Aktuelle Mercedes V-Klasse und E-Klasse",
      "Transfers zu Flughafen, Bahnhof und über lange Strecken",
      "Ein fester Fahrer für den gesamten Aufenthalt",
      "Wasser, WLAN und Kindersitze auf Wunsch",
    ],
    image: "/images/vans-chateau.jpg",
  },
  {
    slug: "acces-privilegies",
    title: "Geschlossene Türen",
    short: "Unser Netz aus Weingütern und Partnern, allein für Sie geöffnet.",
    description:
      "Klassifizierte Gewächse, die der Öffentlichkeit verschlossen bleiben, ausgebuchte Tische, Werkstätten von Handwerkern: zehn Jahre Beziehungen vor Ort öffnen Türen, die keine Plattform kennt.",
    bullets: [
      "Klassifizierte Schlösser des Médoc und von Saint-Émilion, privat",
      "Sternerestaurants außerhalb der offenen Verfügbarkeit",
      "Werkstätten von Handwerkern und Köchen, unter vier Augen",
      "Keller und Bastiden außerhalb der Öffnungszeiten",
    ],
    image: "/images/chateau-margaux.jpg",
  },
];

export const experiences: Experience[] = [
  {
    region: "bordeaux-medoc",
    title: "Vertikalverkostung in einem klassifizierten Gewächs",
    place: "Médoc",
    description:
      "Sechs Jahrgänge, kommentiert vom Kellermeister, in einem klassifizierten Schloss, das sonst für Besucher geschlossen bleibt.",
    image: "/images/exp-verticale.jpg",
  },
  {
    region: "bordeaux-medoc",
    title: "Weinlese in Saint-Émilion",
    place: "Gironde",
    description:
      "Ein Vormittag in den Rebzeilen während der Lese, danach ein Winzeressen inmitten der Gärtanks.",
    image: "/images/exp-vendanges.jpg",
  },
  {
    region: "perigord",
    title: "Höhendörfer des Périgord",
    place: "Dordogne",
    description:
      "Belvès, Domme, Monpazier: drei denkmalgeschützte Bastiden, erkundet mit einem Historiker, der dort lebt — weit weg von den Stoßzeiten.",
    image: "/images/exp-troglodyte.jpg",
  },
  {
    region: "perigord",
    title: "Die Dordogne auf einer privaten Gabare",
    place: "Périgord",
    description:
      "Flussabwärts auf einer Gabare nur für Sie, unterhalb der Felsen von La Roque-Gageac, mit einem Korb regionaler Erzeuger an Bord.",
    image: "/images/exp-chateau.jpg",
  },
  {
    region: "landes",
    title: "Der Courant d'Huchet im Ruderboot",
    place: "Landes",
    description:
      "Zwei Stunden rudern auf klarem Wasser, unter einem Gewölbe aus Korkeichen, mit einem der wenigen noch zugelassenen Bootsführer.",
    image: "/images/exp-landes.jpg",
  },
  {
    region: "pyrenees-atlantiques",
    title: "Dämmerung an der baskischen Küste",
    place: "Baskenland",
    description:
      "Der Leuchtturm, die Felsen und der Ozean zur blauen Stunde, danach ein Tisch mit Blick aufs Meer, für Sie allein reserviert.",
    image: "/images/exp-surf.jpg",
  },
  {
    region: "pyrenees-atlantiques",
    title: "Grandhotels und außergewöhnliche Häuser",
    place: "Baskische Küste",
    description:
      "Wir verhandeln für Sie die schönsten Adressen der Region, von Grandhotels der Belle Époque bis zu privaten Anwesen, die nur wenige Gäste aufnehmen.",
    image: "/images/exp-bayonne.jpg",
  },
  {
    region: "gascogne-armagnac",
    title: "Jahrhundertealte Armagnac-Keller",
    place: "Gascogne",
    description:
      "Ein Familienbetrieb, seine Reserve an Jahrgängen, die älter sind als Ihre Großeltern, und eine Verkostung im historischen Keller.",
    image: "/images/hero-apropos.jpg",
  },
  {
    region: "gascogne-armagnac",
    title: "Gascogner Tafel beim Erzeuger",
    place: "Gers",
    description:
      "Küche mit Foie gras und Ente, vor Ihren Augen zubereitet von der Hausherrin, auf einem Hof, der seine Tiere noch selbst aufzieht.",
    image: "/images/hero-services.jpg",
  },
];

export const destinations: Destination[] = [
  {
    slug: "bordeaux-medoc",
    name: "Bordeaux & Médoc",
    tagline: "Klassifizierte Gewächse, denkmalgeschützte Fassaden & Tafelkultur",
    intro:
      "Die schönste Stadt aus hellem Stein in Frankreich und dreißig Minuten entfernt die Schlösser, die Weingeschichte geschrieben haben. Das Bordelais besucht man besser in Begleitung: die großen Gewächse öffnen nicht jedem ihre Türen.",
    duration: "3 bis 7 Tage",
    season: "Ganzjährig — Weinlese im September",
    highlights: [
      "Klassifizierte Gewächse des Médoc, privat besichtigt",
      "Saint-Émilion und seine unterirdischen Kirchen",
      "Bordeaux mit einem Architekturhistoriker erkundet",
      "Bucht von Arcachon, Dune du Pilat und Austernverkostung",
    ],
    itinerary: [
      {
        day: "Tag 1",
        title: "Bordeaux",
        description:
          "Empfang am Flughafen oder Bahnhof, Ankommen, dann die denkmalgeschützte Innenstadt mit einem Historiker. Abendessen in einem wenig bekannten Lokal von Bordeaux.",
      },
      {
        day: "Tag 2",
        title: "Route des Châteaux",
        description:
          "Médoc: zwei klassifizierte Gewächse privat besichtigt, Mittagessen im Schloss und eine vom Kellermeister kommentierte Verkostung.",
      },
      {
        day: "Tag 3",
        title: "Saint-Émilion",
        description:
          "Das rechte Ufer, die mittelalterliche Stadt und ihre unterirdischen Steinbrüche, ein Winzeressen und der Nachmittag bei einem Weingutbesitzer.",
      },
      {
        day: "Tag 4",
        title: "Bucht von Arcachon",
        description:
          "Austernhütte, Verkostung mit Blick auf die Bucht und die Dune du Pilat bei Sonnenuntergang.",
      },
    ],
    image: "/images/svc-acces.jpg",
  },
  {
    slug: "perigord",
    name: "Périgord & Dordogne",
    tagline: "Schlösser, Vorgeschichte & Tafeln der Region",
    intro:
      "Tausend Schlösser, bemalte Höhlen aus einer Zeit vor siebzehntausend Jahren und die beste Landküche Frankreichs. Das Périgord erlebt man langsam, bei einem Glas Monbazillac.",
    duration: "3 bis 8 Tage",
    season: "April bis November — Trüffel im Winter",
    highlights: [
      "Lascaux und bemalte Höhlen mit bevorzugtem Zugang",
      "Trüffelmarkt von Sarlat mit einem Koch",
      "Die Dordogne hinab auf einer privaten Gabare",
      "Die Schlösser von Beynac, Castelnaud und Les Milandes",
    ],
    itinerary: [
      {
        day: "Tag 1",
        title: "Sarlat & das Périgord Noir",
        description:
          "Ankunft, Ankommen in einem Herrenhaus des Périgord, Sarlat am späten Nachmittag, wenn sich die Stadt leert.",
      },
      {
        day: "Tag 2",
        title: "Tal der Dordogne",
        description:
          "Die Schlösser Beynac und Castelnaud, Mittagessen auf einer Terrasse über dem Tal, nachmittags die Fahrt auf einer privaten Gabare.",
      },
      {
        day: "Tag 3",
        title: "Vorgeschichte",
        description:
          "Lascaux und eine bemalte Höhle mit beschränktem Zugang, begleitet von einem Prähistoriker, danach eine Verkostung von Bergerac-Weinen.",
      },
      {
        day: "Tag 4",
        title: "Trüffel & Gastronomie",
        description:
          "Trüffelsuche mit einem Trüffelbauern und seinem Hund, Trüffelmarkt und Kochkurs bei einem Sternekoch.",
      },
    ],
    image: "/images/dest-perigord.jpg",
  },
  {
    slug: "landes",
    name: "Landes",
    tagline: "Ozean, Pinienwald & Stille",
    intro:
      "Der größte Wald Westeuropas, hundert Kilometer Strand ohne eine einzige Klippe und klare Wasserläufe, die sich unter den Bäumen schlängeln. Die Landes besichtigt man nicht, man durchquert sie langsam.",
    duration: "3 bis 6 Tage",
    season: "Mai bis Oktober",
    highlights: [
      "Der Courant d'Huchet im Ruderboot, mit einem Bootsführer",
      "Die Strände von Moliets, Contis und Mimizan außerhalb der Saison",
      "Airials und Schafställe der Grande Lande",
      "Küche der Landes: Ente, Sandspargel, Pinienkerne",
    ],
    itinerary: [
      {
        day: "Tag 1",
        title: "Küste und Dünen",
        description:
          "Ankunft, Ankommen im Pinienwald, die Küste bei Sonnenuntergang und ein Abendessen mit Fisch aus dem Adour.",
      },
      {
        day: "Tag 2",
        title: "Der Courant d'Huchet",
        description:
          "Den Wasserlauf hinab im Ruderboot mit einem Bootsführer, zwischen Korkeichen und wildem Hibiskus, danach Mittagessen an der Mündung.",
      },
      {
        day: "Tag 3",
        title: "Grande Lande",
        description:
          "Airials, Schafställe und das Freilichtmuseum Marquèze, ein Besuch bei einem Sandspargel-Erzeuger und abends eine Tafel der Landes.",
      },
    ],
    image: "/images/dest-landes.jpg",
  },
  {
    slug: "pyrenees-atlantiques",
    name: "Baskenland & Béarn",
    tagline: "Ozean, Berge & Eigensinn",
    intro:
      "Eine Identität, die keiner anderen gleicht. An einem einzigen Tag: morgens die Wellen von Biarritz, nachmittags die Dörfer unterhalb der Rhune, und abends ein Tisch, an dem noch Baskisch gesprochen wird.",
    duration: "3 bis 7 Tage",
    season: "Mai bis Oktober",
    highlights: [
      "Biarritz, Saint-Jean-de-Luz und die wilde Küste",
      "Die Dörfer Ainhoa, Espelette und Sare",
      "Werkstätten für Chili, Schinken und Schafskäse",
      "Hinüber nach Spanien: San Sebastián und seine Pintxos",
    ],
    itinerary: [
      {
        day: "Tag 1",
        title: "Baskische Küste",
        description:
          "Transfer ab Biarritz, die Küste, Saint-Jean-de-Luz und Abendessen mit Blick auf den Ozean.",
      },
      {
        day: "Tag 2",
        title: "Das Hinterland",
        description:
          "Denkmalgeschützte Dörfer, eine Werkstatt für Espelette-Chili, Mittagessen in einem Bauerngasthof und die Zahnradbahn auf die Rhune.",
      },
      {
        day: "Tag 3",
        title: "San Sebastián",
        description:
          "Hinüber nach Gipuzkoa, Markt von La Bretxa, eine geführte Pintxos-Runde und späte Rückkehr.",
      },
    ],
    image: "/images/dest-basque.jpg",
  },
  {
    slug: "gascogne-armagnac",
    name: "Gascogne & Armagnac",
    tagline: "Bastiden, Armagnac & Tafeln mit Charakter",
    intro:
      "Das Frankreich, das man für verschwunden hält: unversehrte mittelalterliche Bastiden, Höfe, die ihre Enten noch selbst aufziehen, und Keller, in denen Jahrgänge schlafen, die älter sind als Ihre Großeltern.",
    duration: "3 bis 6 Tage",
    season: "Ganzjährig",
    highlights: [
      "Armagnac-Keller und hundertjährige Jahrgänge",
      "Die Bastiden Fourcès, Larressingle und Montréal-du-Gers",
      "Gascogner Höfe und Küche mit Foie gras",
      "Auch, Condom und die Abtei von Flaran",
    ],
    itinerary: [
      {
        day: "Tag 1",
        title: "Im Herzen der Gascogne",
        description:
          "Ankunft und Ankommen in einer restaurierten Bastide, Auch am Nachmittag und ein Gascogner Abendessen.",
      },
      {
        day: "Tag 2",
        title: "Armagnac",
        description:
          "Zwei Familienbetriebe, Verkostung alter Jahrgänge im historischen Keller und Mittagessen auf dem Anwesen.",
      },
      {
        day: "Tag 3",
        title: "Bastiden & Höfe",
        description:
          "Mittelalterliche Dörfer, ein Besuch bei einem Gascogner Züchter und ein Kochkurs rund um Foie gras.",
      },
    ],
    image: "/images/dest-gascogne.jpg",
  },
];

export const resume = {
  points: [
    {
      titre: "Agentur vor Ort im Südwesten",
      detail: "Wir leben hier und kennen die Menschen",
    },
    {
      titre: "Programme nach Wunsch zusammengestellt",
      detail: "Vom Tagesausflug bis zur dreiwöchigen Reise",
    },
    {
      titre: "Fester Fahrer",
      detail: "Derselbe Kenner vor Ort vom ersten bis zum letzten Tag",
    },
    {
      titre: "Geschlossene Türen",
      detail: "Schlösser und Tafeln, die der Öffentlichkeit verschlossen sind",
    },
    {
      titre: "Ein einziger Ansprechpartner",
      detail: "Erreichbar vor, während und nach Ihrer Reise",
    },
  ],
  citation: "Sagen Sie uns, was Ihnen Freude machen würde — um alles Übrige kümmern wir uns",
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
    "Man kennt eine Gegend erst wirklich, wenn jemand von hier einen dorthin mitgenommen hat",
  signature: "RDR Services",
};

export const activites: Record<string, Activite[]> = {
  "bordeaux-medoc": [
    {
      titre: "La Cité du Vin",
      detail:
        "Private Besichtigung vor der Öffnung, danach eine Verkostung auf der Aussichtsebene im achten Stock.",
      image: "/images/activites/act-bdx-cite-du-vin.jpg",
    },
    {
      titre: "Der Keller eines klassifizierten Gewächses",
      detail:
        "Fässer, so weit das Auge reicht, kommentiert vom Kellermeister, der sie verschneidet.",
      image: "/images/activites/act-bdx-chai.jpg",
    },
    {
      titre: "Les Bassins des Lumières",
      detail:
        "Ein U-Boot-Bunker, verwandelt in das größte Zentrum für digitale Kunst der Welt.",
      image: "/images/activites/act-bdx-bassins-lumieres.jpg",
    },
    {
      titre: "Der Wasserspiegel",
      detail:
        "Die Place de la Bourse und ihr Spiegelbild, früh am Morgen, wenn der Platz noch leer ist.",
      image: "/images/activites/act-bdx-miroir-eau.jpg",
    },
    {
      titre: "Die Stadt von oben",
      detail:
        "Für alle, die Bordeaux anders sehen wollen: ein geführter Aufstieg.",
      image: "/images/activites/act-bdx-escalade.jpg",
    },
  ],
  "pyrenees-atlantiques": [
    {
      titre: "Die Zahnradbahn auf die Rhune",
      detail:
        "Eine Zahnradbahn von 1924, die auf 900 Meter hinaufführt — auf der einen Seite der Ozean, auf der anderen Spanien.",
      image: "/images/activites/act-pa-rhune.jpg",
    },
    {
      titre: "Espelette und sein Chili",
      detail:
        "Rote Fassaden voller Chilischnüre und die Werkstatt eines Erzeugers, der Ihnen alles erklärt.",
      image: "/images/activites/act-pa-espelette.jpg",
    },
    {
      titre: "Saint-Jean-Pied-de-Port",
      detail:
        "Die letzte französische Etappe des Jakobswegs, ihre Wehrmauern und ihre gepflasterten Gassen.",
      image: "/images/activites/act-pa-stjean.jpg",
    },
    {
      titre: "Ein Pelota-Spiel",
      detail:
        "Der Sport, der das Herz des Landes schlagen lässt, von der Tribüne aus gesehen, mit jemandem, der die Regeln erklärt.",
      image: "/images/activites/act-pa-pelote.jpg",
    },
  ],
  landes: [
    {
      titre: "Surfen in Hossegor",
      detail:
        "Privatstunde an einem der schönsten Spots Europas, auf Ihr Können abgestimmt, Bretter inklusive.",
      image: "/images/activites/act-lan-surf.jpg",
    },
    {
      titre: "Hundert Kilometer Strand",
      detail:
        "Sand, so weit das Auge reicht, ohne eine einzige Klippe, und den ganzen Sommer über bewachte Rettungsposten.",
      image: "/images/activites/act-lan-plage.jpg",
    },
    {
      titre: "Eine Course landaise",
      detail:
        "Weder Stierkampf noch Tötung: Ausweicher, die der Kuh um Haaresbreite entkommen, unter dem Jubel des Dorfes.",
      image: "/images/activites/act-lan-course.jpg",
    },
    {
      titre: "Die Thermen von Dax",
      detail:
        "Frankreichs führender Kurort, seine warmen Schlämme und Becken, mit privatem Zugang.",
      image: "/images/activites/act-lan-thermes.jpg",
    },
  ],
  "gascogne-armagnac": [
    {
      titre: "Die Abtei von Flaran",
      detail:
        "Ein Zisterzienserkreuzgang aus dem 12. Jahrhundert, einer der besterhaltenen im Südwesten, geöffnet vor den Besuchern.",
      image: "/images/activites/act-gas-flaran.jpg",
    },
    {
      titre: "Larressingle",
      detail:
        "Die kleinste befestigte Stadt Frankreichs: zweihundert Meter unversehrte Mauern um acht Häuser.",
      image: "/images/activites/act-gas-larressingle.jpg",
    },
    {
      titre: "Fourcès und seine Bastiden",
      detail:
        "Ein runder Platz mit Arkaden, ein Fluss, Weiden: das meistfotografierte Dorf des Gers.",
      image: "/images/activites/act-gas-fources.jpg",
    },
    {
      titre: "Die Burg von Larressingle",
      detail:
        "Der Bergfried der Bischöfe von Condom, eine eindrucksvolle Ruine mitten in den Mauern.",
      image: "/images/activites/act-gas-chateau.jpg",
    },
  ],
  perigord: [
    {
      titre: "Kanu auf der Dordogne",
      detail:
        "Flussabwärts unterhalb der Felsen und Schlösser, in Ihrem Tempo, mit Abholung am Ende der Strecke.",
      image: "/images/activites/act-per-canoe.jpg",
    },
    {
      titre: "Ballonfahrt bei Tagesanbruch",
      detail:
        "Über das Tal und La Roque-Gageac im flachen Morgenlicht.",
      image: "/images/activites/act-per-montgolfiere.jpg",
    },
    {
      titre: "Klettersteig",
      detail:
        "Die Felsen des Périgord in aller Sicherheit, mit einem geprüften Führer.",
      image: "/images/activites/act-per-via-ferrata.jpg",
    },
    {
      titre: "E-Bike für die ganze Familie",
      detail:
        "Die Wege zwischen den Dörfern und Schlössern, ohne an den Steigungen zu leiden.",
      image: "/images/activites/act-per-vtt.jpg",
    },
    {
      titre: "Ein mittelalterlicher Tag",
      detail:
        "Kostüme, Bogenschießen und Übungskämpfe in einer Burg: Kinder lieben es.",
      image: "/images/activites/act-per-medieval.jpg",
    },
  ],
};

export const process = [
  {
    step: "01",
    title: "Erstes Gespräch",
    description:
      "Ein Anruf von dreißig Minuten, um zu verstehen, wer reist, wann, mit welchen Wünschen und welchem Budget. Unverbindlich.",
  },
  {
    step: "02",
    title: "Vorschlag",
    description:
      "Binnen 72 Stunden ein Tag für Tag ausgearbeitetes Programm, mit Unterkünften, Erlebnissen und festem Budget.",
  },
  {
    step: "03",
    title: "Anpassungen",
    description:
      "Wir überarbeiten das Programm so oft wie nötig, bis es Ihnen wirklich entspricht.",
  },
  {
    step: "04",
    title: "Ihre Reise",
    description:
      "Ihr fester Fahrer empfängt Sie. Ein einziger Ansprechpartner bleibt während des gesamten Aufenthalts rund um die Uhr erreichbar.",
  },
];

export const testimonials = [
  {
    quote:
      "Wir kannten Bordeaux bereits, aber nicht so. Zwei klassifizierte Gewächse öffneten uns an einem Sonntag ihre Türen, und der Fahrer kannte jeden Eigentümer persönlich.",
    author: "Claire & Thomas L.",
    origin: "Paris — Médoc & Saint-Émilion, 5 Tage",
  },
  {
    quote:
      "Organisation einer Klausurtagung für zwölf Personen in der Gascogne. Alles war geregelt, auch das, woran wir nicht gedacht hatten. Im Jahr darauf haben wir erneut gebucht.",
    author: "Marc D.",
    origin: "Lyon — Klausurtagung Gascogne, 3 Tage",
  },
  {
    quote:
      "Die private Verkostung in einem klassifizierten Schloss war der Höhepunkt unserer gesamten Europareise. Tadelloser Service von der ersten E-Mail bis zum Abschied.",
    author: "Sarah M.",
    origin: "London — Bordeaux & Périgord, 10 Tage",
  },
];

export const faq = [
  {
    question: "Bieten Sie auch Tagesausflüge an?",
    answer:
      "Ja. Wir organisieren einen Tag im Weinberg ebenso wie eine dreiwöchige Reise durch den Südwesten. In der Hochsaison sollte ein Tag zwei bis drei Wochen im Voraus gebucht werden.",
  },
  {
    question: "Welche Fahrzeuge setzen Sie ein?",
    answer:
      "Aktuelle Mercedes E-Klasse und V-Klasse, gewartet und für die Personenbeförderung versichert. Kindersitze, WLAN und Wasser stellen wir auf Wunsch bereit.",
  },
  {
    question: "Bleibt der Fahrer während des ganzen Aufenthalts derselbe?",
    answer:
      "Ja, immer. Das ist der Kern unseres Dienstes: Ihr Fahrer und Führer begleitet Sie vom ersten bis zum letzten Tag und kennt Ihre Gewohnheiten.",
  },
  {
    question: "Können Sie uns Zugang zu den klassifizierten Gewächsen verschaffen?",
    answer:
      "Das ist unsere Spezialität. Die meisten klassifizierten Schlösser empfangen nur auf Empfehlung. Unsere Beziehungen im Médoc, in Saint-Émilion und Pomerol öffnen diese Türen, auch außerhalb der Saison.",
  },
  {
    question: "Können wir während des Aufenthalts auch auf eigene Faust los?",
    answer:
      "Selbstverständlich. Wir lassen in jedem Programm bewusst freie Zeit, und Ihr Fahrer bleibt verfügbar, falls Sie es sich im Lauf des Tages anders überlegen.",
  },
  {
    question: "Sind die Mahlzeiten inbegriffen?",
    answer:
      "In den Komplettpaketen ja. Bei Tagesausflügen wird das Mittagessen für Sie reserviert und je nach gewähltem Lokal abgerechnet. Wir teilen Ihnen alles vorab mit, ohne Überraschungen.",
  },
  {
    question: "Nehmen Sie Gruppen an?",
    answer:
      "Bis zu acht Personen pro Fahrzeug, mehr mit mehreren Fahrzeugen. Wir mischen niemals zwei Kundschaften: alle unsere Reisen sind privat.",
  },
  {
    question: "Können Sie die Unterkunft buchen?",
    answer:
      "Ja. Wir arbeiten mit einer Auswahl an Hotels, Schlosshotels und privaten Anwesen im Südwesten. Sie können ebenso gut Ihre eigene Unterkunft behalten — wir richten uns danach.",
  },
  {
    question: "Organisieren Sie besondere Anlässe?",
    answer:
      "Geburtstage, Heiratsanträge, Klausurtagungen, Incentive-Reisen: ja, das ist ein wesentlicher Teil unserer Arbeit.",
  },
  {
    question: "Wie läuft die Bezahlung ab?",
    answer:
      "Eine Anzahlung von 30 % bei Bestätigung des Programms, der Restbetrag fünfzehn Tage vor Abreise. Überweisung oder Karte. Ihre Unterlagen und Rechnungen finden Sie in Ihrem Kundenbereich.",
  },
];

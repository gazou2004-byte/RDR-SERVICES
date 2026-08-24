/**
 * Contenuti del sito in italiano — lo specchio di `site.ts`.
 *
 * Stessa forma, stesse chiavi, stesso ordine: i tipi importati qui sotto sono
 * ciò che impedisce ai file di divergere nel tempo. Aggiungere un campo da una
 * parte senza aggiungerlo dall'altra non compila.
 *
 * Ciò che di proposito *non* viene tradotto: gli identificatori d'indirizzo
 * (slug), i percorsi delle immagini, i link, i numeri di telefono e tutti i
 * dati legali. Uno slug diverso per lingua significherebbe mantenere più
 * indirizzi per la stessa pagina.
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
  tagline: "Concierge e viaggi privati",
  baseline: "L'arte di viaggiare nel Sud-Ovest della Francia",

  phone: "+33 6 00 00 00 00",
  phoneHref: "+33600000000",
  email: "contact@rdr-services.fr",

  address: "22 rue de la Marne, 33500 Libourne, Francia",
  city: "Libourne",

  legal: {
    form: "SASU — società per azioni semplificata con socio unico",
    capital: "2.500 €",
    siren: "920 247 517",
    siret: "920 247 517 00013",
    rcs: "Libourne",
    tva: "FR52920247517",
    naf: "7420Z",
    director: "Romain Da Rugna",
    createdAt: "25 ottobre 2022",
  },
  socials: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
  },
};

export const nav: NavItem[] = [
  { label: "Home", href: "/#accueil" },
  { label: "Destinazioni", href: "/#sejours", regions: true },
];

export const hero = {
  eyebrow: "Immersione ed esperienze",
  title: "RDR Services",
  banner: "Scoprite il Sud-Ovest della Francia con esperti del posto",
  subtitle:
    "I vigneti di Bordeaux, il Périgord, le Landes e i Paesi Baschi. Ogni viaggio è composto a mano, per voi soli.",
  primaryCta: { label: "Comporre il mio viaggio", href: "/#contact" },
  secondaryCta: { label: "Che cosa facciamo", href: "/#services" },
  panels: [
    {
      image: "/images/vignes-chateau.jpg",
      label: "Médoc",
      cadrage: "72% center",
    },
    {
      image: "/images/biarritz-plage.jpg",
      label: "Paesi Baschi",
      cadrage: "center",
    },
    {
      image: "/images/bearn-ossau.jpg",
      label: "Béarn",
      cadrage: "42% center",
    },
    {
      image: "/images/svc-creations.jpg",
      label: "Guascogna",
      cadrage: "center",
    },
  ],
};

export const intro = {
  eyebrow: "Concierge indipendente — Nuova Aquitania",
  title: "Il Sud-Ovest in esclusiva",
  body: [
    "Cinque territori, una sola casa. Organizziamo viaggi privati nel Sud-Ovest della Francia per viaggiatori che preferiscono vedersi aprire porte piuttosto che ricevere un depliant.",
    "Dal vigneto bordolese all'oceano delle Landes. Il programma si costruisce con voi, si riadatta strada facendo se cambia il desiderio, e resta nelle mani di una sola persona dall'inizio alla fine.",
  ],
  stats: [
    { value: "10 anni", label: "Clefs d'Or, concierge di lusso" },
    { value: "5", label: "territori percorsi tutto l'anno" },
    { value: "24/7", label: "assistenza durante il soggiorno" },
    { value: "100 %", label: "su misura, mai in gruppo" },
  ],
};

export const apropos = {
  histoire: [
    "RDR Services è un concierge di viaggio con sede in Nuova Aquitania. Non vendiamo circuiti: componiamo soggiorni, uno per uno, per viaggiatori che vogliono qualcosa di diverso da un programma stampato in anticipo.",
    "La differenza sta in poche cose: conoscere il proprietario che apre la cantina di domenica, sapere quale tavola merita la deviazione e quale vive di reputazione, intuire che conviene invertire due giornate perché sta arrivando la pioggia. Un sapere che non si compra: si costruisce sul posto.",
    "Copriamo cinque territori, dal Bordolese ai Paesi Baschi, dal Périgord alle Landes e alla Guascogna. Sempre in privato, sempre con lo stesso autista dal primo all'ultimo giorno, e un unico interlocutore che potete chiamare a qualunque ora durante il viaggio.",
  ],
};

export const services: Service[] = [
  {
    slug: "excursions",
    title: "Giornate accompagnate",
    short: "A giornata, per un'occasione o come viaggio completo.",
    description:
      "Ci occupiamo dell'intera giornata: itinerario, prenotazioni, pranzo, trasporto e accompagnamento. A voi resta solo il piacere.",
    bullets: [
      "Itinerario composto secondo i vostri desideri e il vostro ritmo",
      "Autista-guida che parla francese e inglese",
      "Pranzo e degustazioni prenotati in anticipo",
      "Partenza dal vostro hotel, castello o dall'aeroporto",
    ],
    image: "/images/svc-excursions.jpg",
  },
  {
    slug: "creations-sur-mesure",
    title: "Viaggi su misura",
    short: "Occasioni private, soggiorni e viaggi composti da zero.",
    description:
      "Un compleanno, una proposta di matrimonio, una convention o tre settimane di scoperta: costruiamo il programma da zero, intorno a ciò che desiderate davvero.",
    bullets: [
      "I vostri desideri esplorati in un primo colloquio",
      "Proposta dettagliata entro 72 ore",
      "Alloggi selezionati e negoziati per voi",
      "Modifiche illimitate fino alla vostra approvazione",
    ],
    image: "/images/bordeaux-bourse.jpg",
  },
  {
    slug: "transport-vip",
    title: "Autista privato",
    short: "Berline e van Mercedes, con autista dedicato.",
    description:
      "La nostra flotta è vostra per tutta la durata del soggiorno. Lo stesso autista dal primo all'ultimo giorno: conosce le vostre abitudini, i vostri orari e i vostri indirizzi.",
    bullets: [
      "Mercedes Classe V e Classe E recenti",
      "Transfer da aeroporto, stazione e lunghe percorrenze",
      "Un autista dedicato per tutta la durata del soggiorno",
      "Acqua, wifi e seggiolini per bambini su richiesta",
    ],
    image: "/images/vans-chateau.jpg",
  },
  {
    slug: "acces-privilegies",
    title: "Accessi riservati",
    short: "La nostra rete di châteaux e partner, aperta solo per voi.",
    description:
      "Grandi cru classificati chiusi al pubblico, tavoli al completo, botteghe di artigiani: dieci anni di relazioni locali aprono porte che nessuna piattaforma elenca.",
    bullets: [
      "Châteaux classificati del Médoc e di Saint-Émilion, in privato",
      "Tavoli stellati riservati fuori dalla disponibilità pubblica",
      "Botteghe di artigiani e cuochi, faccia a faccia",
      "Cantine e bastide aperte fuori orario",
    ],
    image: "/images/chateau-margaux.jpg",
  },
];

export const experiences: Experience[] = [
  {
    region: "bordeaux-medoc",
    title: "Verticale in un grande cru classificato",
    place: "Médoc",
    description:
      "Sei annate commentate dal maestro di cantina, in uno château classificato normalmente chiuso alle visite.",
    image: "/images/exp-verticale.jpg",
  },
  {
    region: "bordeaux-medoc",
    title: "Vendemmia a Saint-Émilion",
    place: "Gironda",
    description:
      "Una mattina tra i filari durante la vendemmia, seguita da un pranzo del vignaiolo in mezzo alle vasche.",
    image: "/images/exp-vendanges.jpg",
  },
  {
    region: "perigord",
    title: "Borghi arroccati del Périgord",
    place: "Dordogna",
    description:
      "Belvès, Domme, Monpazier: tre bastide vincolate percorse con uno storico che ci vive, lontano dalle ore di maggiore affluenza.",
    image: "/images/exp-troglodyte.jpg",
  },
  {
    region: "perigord",
    title: "La Dordogna su gabare privata",
    place: "Périgord",
    description:
      "Lungo il fiume su una gabare riservata a voi, ai piedi delle falesie di La Roque-Gageac, con un cesto di produttori a bordo.",
    image: "/images/exp-chateau.jpg",
  },
  {
    region: "landes",
    title: "Il Courant d'Huchet in barca a remi",
    place: "Landes",
    description:
      "Due ore a remi su acqua trasparente, sotto una volta di sughere, con uno dei pochi barcaioli ancora autorizzati.",
    image: "/images/exp-landes.jpg",
  },
  {
    region: "pyrenees-atlantiques",
    title: "Crepuscolo sulla costa basca",
    place: "Paesi Baschi",
    description:
      "Il faro, gli scogli e l'oceano nell'ora blu, poi una tavola di fronte al mare riservata a voi soli.",
    image: "/images/exp-surf.jpg",
  },
  {
    region: "pyrenees-atlantiques",
    title: "Grandi alberghi e dimore d'eccezione",
    place: "Costa basca",
    description:
      "Negoziamo per voi gli indirizzi più belli della regione, dai grandi alberghi Belle Époque alle proprietà private aperte a pochi ospiti.",
    image: "/images/exp-bayonne.jpg",
  },
  {
    region: "gascogne-armagnac",
    title: "Cantine di armagnac centenarie",
    place: "Guascogna",
    description:
      "Una tenuta di famiglia, la sua riserva di annate più vecchie dei vostri nonni, e una degustazione nella cantina storica.",
    image: "/images/hero-apropos.jpg",
  },
  {
    region: "gascogne-armagnac",
    title: "Tavola guascone dal produttore",
    place: "Gers",
    description:
      "Cucina a base di foie gras e anatra, preparata davanti a voi dalla padrona di casa, in una fattoria che alleva ancora i propri animali.",
    image: "/images/hero-services.jpg",
  },
];

export const destinations: Destination[] = [
  {
    slug: "bordeaux-medoc",
    name: "Bordeaux e Médoc",
    tagline: "Grandi cru, facciate vincolate e arte della tavola",
    intro:
      "La più bella città di pietra chiara di Francia e, a trenta minuti, gli château che hanno scritto la storia del vino. Il Bordolese si visita meglio accompagnati: i grandi cru non aprono le porte a chiunque.",
    duration: "da 3 a 7 giorni",
    season: "Tutto l'anno — vendemmia a settembre",
    highlights: [
      "Grandi cru classificati del Médoc in visita privata",
      "Saint-Émilion e le sue chiese sotterranee",
      "Bordeaux percorsa con uno storico dell'architettura",
      "Bacino di Arcachon, duna del Pilat e degustazione di ostriche",
    ],
    itinerary: [
      {
        day: "Giorno 1",
        title: "Bordeaux",
        description:
          "Accoglienza in aeroporto o in stazione, sistemazione, poi il centro storico vincolato con una guida storica. Cena in una tavola bordolese poco nota.",
      },
      {
        day: "Giorno 2",
        title: "Route des Châteaux",
        description:
          "Médoc: due grandi cru classificati in visita privata, pranzo allo château e degustazione commentata dal maestro di cantina.",
      },
      {
        day: "Giorno 3",
        title: "Saint-Émilion",
        description:
          "Riva destra, borgo medievale e le sue cave sotterranee, pranzo del vignaiolo e pomeriggio da un proprietario vignaiolo.",
      },
      {
        day: "Giorno 4",
        title: "Bacino di Arcachon",
        description:
          "Capanna degli ostricoltori, degustazione di fronte al bacino e duna del Pilat al tramonto.",
      },
    ],
    image: "/images/svc-acces.jpg",
  },
  {
    slug: "perigord",
    name: "Périgord e Dordogna",
    tagline: "Château, preistoria e tavole del territorio",
    intro:
      "Mille château, grotte dipinte di diciassettemila anni fa e la migliore cucina contadina di Francia. Il Périgord si vive lentamente, con un bicchiere di Monbazillac.",
    duration: "da 3 a 8 giorni",
    season: "Da aprile a novembre — tartufo d'inverno",
    highlights: [
      "Lascaux e grotte dipinte con accesso privilegiato",
      "Mercato del tartufo di Sarlat con uno chef",
      "Discesa della Dordogna su gabare privata",
      "Gli château di Beynac, Castelnaud e Les Milandes",
    ],
    itinerary: [
      {
        day: "Giorno 1",
        title: "Sarlat e il Périgord Noir",
        description:
          "Arrivo, sistemazione in un maniero del Périgord, e Sarlat a fine giornata, quando la città si svuota.",
      },
      {
        day: "Giorno 2",
        title: "Valle della Dordogna",
        description:
          "Gli château di Beynac e Castelnaud, pranzo su una terrazza sopra la valle, discesa in gabare privata nel pomeriggio.",
      },
      {
        day: "Giorno 3",
        title: "Preistoria",
        description:
          "Lascaux e una grotta dipinta ad accesso limitato con un preistorico, poi una degustazione di vini di Bergerac.",
      },
      {
        day: "Giorno 4",
        title: "Tartufo e gastronomia",
        description:
          "Ricerca del tartufo con un tartufaio e il suo cane, mercato del tartufo, lezione di cucina con uno chef stellato.",
      },
    ],
    image: "/images/dest-perigord.jpg",
  },
  {
    slug: "landes",
    name: "Landes",
    tagline: "Oceano, pineta e silenzio",
    intro:
      "La più grande foresta dell'Europa occidentale, cento chilometri di spiaggia senza una sola falesia, e corsi d'acqua limpida che serpeggiano sotto gli alberi. Le Landes non si visitano: si attraversano lentamente.",
    duration: "da 3 a 6 giorni",
    season: "Da maggio a ottobre",
    highlights: [
      "Il Courant d'Huchet in barca a remi, con un barcaiolo",
      "Le spiagge di Moliets, Contis e Mimizan fuori stagione",
      "Airial e ovili della Grande Lande",
      "Cucina delle Landes: anatra, asparago di sabbia, pinoli",
    ],
    itinerary: [
      {
        day: "Giorno 1",
        title: "Costa e dune",
        description:
          "Arrivo, sistemazione nella pineta, il litorale al tramonto e una cena di pesce dell'Adour.",
      },
      {
        day: "Giorno 2",
        title: "Il Courant d'Huchet",
        description:
          "Discesa del corso d'acqua in barca a remi con un barcaiolo, tra sughere e ibischi selvatici, poi pranzo all'estuario.",
      },
      {
        day: "Giorno 3",
        title: "Grande Lande",
        description:
          "Airial, ovili ed ecomuseo di Marquèze, incontro con un produttore di asparagi di sabbia e tavola delle Landes la sera.",
      },
    ],
    image: "/images/dest-landes.jpg",
  },
  {
    slug: "pyrenees-atlantiques",
    name: "Paesi Baschi e Béarn",
    tagline: "Oceano, montagna e carattere",
    intro:
      "Un'identità che non somiglia a nessun'altra. In una sola giornata: le onde di Biarritz al mattino, i villaggi della Rhune il pomeriggio, e la sera una tavola dove si parla ancora basco.",
    duration: "da 3 a 7 giorni",
    season: "Da maggio a ottobre",
    highlights: [
      "Biarritz, Saint-Jean-de-Luz e la costa selvaggia",
      "I villaggi di Ainhoa, Espelette e Sare",
      "Laboratori di peperoncino, prosciutto e formaggio di pecora",
      "Passaggio in Spagna: San Sebastián e i suoi pintxos",
    ],
    itinerary: [
      {
        day: "Giorno 1",
        title: "Costa basca",
        description:
          "Transfer da Biarritz, la costa, Saint-Jean-de-Luz e cena di fronte all'oceano.",
      },
      {
        day: "Giorno 2",
        title: "Entroterra",
        description:
          "Villaggi vincolati, laboratorio del peperoncino di Espelette, pranzo in una fattoria-locanda e trenino a cremagliera della Rhune.",
      },
      {
        day: "Giorno 3",
        title: "San Sebastián",
        description:
          "Passaggio in Guipúzcoa, mercato della Bretxa, giro guidato di pintxos e rientro in serata.",
      },
    ],
    image: "/images/dest-basque.jpg",
  },
  {
    slug: "gascogne-armagnac",
    name: "Guascogna e Armagnac",
    tagline: "Bastide, armagnac e tavole di carattere",
    intro:
      "La Francia che si crede scomparsa: bastide medievali intatte, fattorie che allevano ancora le proprie anatre, e cantine dove dormono annate più vecchie dei vostri nonni.",
    duration: "da 3 a 6 giorni",
    season: "Tutto l'anno",
    highlights: [
      "Cantine di armagnac e annate centenarie",
      "Le bastide di Fourcès, Larressingle e Montréal-du-Gers",
      "Fattorie guasconi e cucina al foie gras",
      "Auch, Condom e l'abbazia di Flaran",
    ],
    itinerary: [
      {
        day: "Giorno 1",
        title: "Cuore della Guascogna",
        description:
          "Arrivo e sistemazione in una bastide restaurata, Auch nel pomeriggio e cena guascone.",
      },
      {
        day: "Giorno 2",
        title: "Armagnac",
        description:
          "Due tenute di famiglia, degustazione di annate antiche nella cantina storica e pranzo in proprietà.",
      },
      {
        day: "Giorno 3",
        title: "Bastide e fattorie",
        description:
          "Villaggi medievali, incontro con un allevatore guascone e laboratorio di cucina al foie gras.",
      },
    ],
    image: "/images/dest-gascogne.jpg",
  },
];

export const resume = {
  points: [
    {
      titre: "Agenzia locale del Sud-Ovest",
      detail: "Viviamo qui e conosciamo le persone",
    },
    {
      titre: "Programmi composti su misura",
      detail: "Dall'uscita di una giornata al viaggio di tre settimane",
    },
    {
      titre: "Autista dedicato",
      detail: "Lo stesso esperto locale dal primo all'ultimo giorno",
    },
    {
      titre: "Accessi riservati",
      detail: "Château e tavole chiusi al pubblico",
    },
    {
      titre: "Un solo interlocutore",
      detail: "Raggiungibile prima, durante e dopo il viaggio",
    },
  ],
  citation: "Diteci che cosa vi farebbe piacere: al resto pensiamo noi",
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
    "Non si conosce davvero una regione finché qualcuno di qui non ve l'ha fatta vedere",
  signature: "RDR Services",
};

export const activites: Record<string, Activite[]> = {
  "bordeaux-medoc": [
    {
      titre: "La Cité du Vin",
      detail:
        "Visita privata prima dell'apertura, poi degustazione al belvedere dell'ottavo piano.",
      image: "/images/activites/act-bdx-cite-du-vin.jpg",
    },
    {
      titre: "La cantina di un grande cru classificato",
      detail:
        "Barrique a perdita d'occhio, commentate dal maestro di cantina che le assembla.",
      image: "/images/activites/act-bdx-chai.jpg",
    },
    {
      titre: "Les Bassins des Lumières",
      detail:
        "Una base sottomarina trasformata nel più grande centro d'arte digitale del mondo.",
      image: "/images/activites/act-bdx-bassins-lumieres.jpg",
    },
    {
      titre: "Lo specchio d'acqua",
      detail:
        "Place de la Bourse e il suo riflesso, la mattina presto quando la piazza è ancora vuota.",
      image: "/images/activites/act-bdx-miroir-eau.jpg",
    },
    {
      titre: "La città dall'alto",
      detail:
        "Per chi vuole vedere Bordeaux in un altro modo: una salita accompagnata da una guida.",
      image: "/images/activites/act-bdx-escalade.jpg",
    },
  ],
  "pyrenees-atlantiques": [
    {
      titre: "Il trenino della Rhune",
      detail:
        "Un trenino a cremagliera del 1924 che sale fino a 900 metri, con l'oceano da un lato e la Spagna dall'altro.",
      image: "/images/activites/act-pa-rhune.jpg",
    },
    {
      titre: "Espelette e il suo peperoncino",
      detail:
        "Facciate rosse coperte di collane di peperoncini, e il laboratorio di un produttore che vi spiega tutto.",
      image: "/images/activites/act-pa-espelette.jpg",
    },
    {
      titre: "Saint-Jean-Pied-de-Port",
      detail:
        "L'ultima tappa francese del cammino di Santiago, le sue mura e i suoi vicoli lastricati.",
      image: "/images/activites/act-pa-stjean.jpg",
    },
    {
      titre: "Una partita di pelota",
      detail:
        "Lo sport che fa battere il cuore della regione, visto dagli spalti con qualcuno che ve ne spiega le regole.",
      image: "/images/activites/act-pa-pelote.jpg",
    },
  ],
  landes: [
    {
      titre: "Surf a Hossegor",
      detail:
        "Lezione privata su uno degli spot più belli d'Europa, adattata al vostro livello, tavole incluse.",
      image: "/images/activites/act-lan-surf.jpg",
    },
    {
      titre: "Cento chilometri di spiaggia",
      detail:
        "Sabbia a perdita d'occhio, senza una sola falesia, e postazioni di salvataggio sorvegliate tutta l'estate.",
      image: "/images/activites/act-lan-plage.jpg",
    },
    {
      titre: "Una course landaise",
      detail:
        "Né corrida né uccisione: schivatori che evitano la vacca per un soffio, tra gli applausi del paese.",
      image: "/images/activites/act-lan-course.jpg",
    },
    {
      titre: "Le terme di Dax",
      detail:
        "La prima stazione termale di Francia, i suoi fanghi caldi e le sue vasche, con accesso privato.",
      image: "/images/activites/act-lan-thermes.jpg",
    },
  ],
  "gascogne-armagnac": [
    {
      titre: "L'abbazia di Flaran",
      detail:
        "Un chiostro cistercense del XII secolo, tra i meglio conservati del Sud-Ovest, aperto prima dei visitatori.",
      image: "/images/activites/act-gas-flaran.jpg",
    },
    {
      titre: "Larressingle",
      detail:
        "La più piccola città fortificata di Francia: duecento metri di mura intatte attorno a otto case.",
      image: "/images/activites/act-gas-larressingle.jpg",
    },
    {
      titre: "Fourcès e le sue bastide",
      detail:
        "Una piazza rotonda bordata di arcate, un fiume, dei salici: il villaggio più fotografato del Gers.",
      image: "/images/activites/act-gas-fources.jpg",
    },
    {
      titre: "Il castello di Larressingle",
      detail:
        "Il torrione dei vescovi di Condom, rovina spettacolare nel cuore delle mura.",
      image: "/images/activites/act-gas-chateau.jpg",
    },
  ],
  perigord: [
    {
      titre: "Canoa sulla Dordogna",
      detail:
        "Discesa ai piedi delle falesie e degli château, al vostro ritmo, con recupero a fine percorso.",
      image: "/images/activites/act-per-canoe.jpg",
    },
    {
      titre: "Mongolfiera all'alba",
      detail:
        "Sorvolo della valle e di La Roque-Gageac nella luce radente del mattino.",
      image: "/images/activites/act-per-montgolfiere.jpg",
    },
    {
      titre: "Via ferrata",
      detail:
        "Le falesie del Périgord in tutta sicurezza, con un istruttore qualificato.",
      image: "/images/activites/act-per-via-ferrata.jpg",
    },
    {
      titre: "Bici elettrica in famiglia",
      detail:
        "I sentieri tra i villaggi e gli château, senza soffrire in salita.",
      image: "/images/activites/act-per-vtt.jpg",
    },
    {
      titre: "Giornata medievale",
      detail:
        "Costumi, tiro con l'arco e combattimenti d'allenamento in un castello: i bambini adorano.",
      image: "/images/activites/act-per-medieval.jpg",
    },
  ],
};

export const process = [
  {
    step: "01",
    title: "Primo colloquio",
    description:
      "Una telefonata di trenta minuti per capire chi viaggia, quando, con quali desideri e quale budget. Senza impegno.",
  },
  {
    step: "02",
    title: "Proposta",
    description:
      "Entro 72 ore, un programma dettagliato giorno per giorno, con alloggi, esperienze e budget definito.",
  },
  {
    step: "03",
    title: "Modifiche",
    description:
      "Rielaboriamo il programma tutte le volte che serve, finché non vi somiglia davvero.",
  },
  {
    step: "04",
    title: "Il vostro viaggio",
    description:
      "Il vostro autista dedicato vi accoglie. Un unico interlocutore resta raggiungibile 24 ore su 24 per tutta la durata del soggiorno.",
  },
];

export const testimonials = [
  {
    quote:
      "Bordeaux la conoscevamo già, ma non così. Due grandi cru ci hanno aperto le porte di domenica, e l'autista conosceva personalmente ogni proprietario.",
    author: "Claire e Thomas L.",
    origin: "Parigi — Médoc e Saint-Émilion, 5 giorni",
  },
  {
    quote:
      "Organizzazione di una convention di direzione per dodici persone in Guascogna. Tutto era risolto, comprese le cose che non avevamo pensato di chiedere. Abbiamo prenotato di nuovo l'anno successivo.",
    author: "Marc D.",
    origin: "Lione — convention Guascogna, 3 giorni",
  },
  {
    quote:
      "La degustazione privata in uno château classificato è stata il momento più bello di tutto il nostro viaggio in Europa. Servizio impeccabile dalla prima e-mail all'ultimo saluto.",
    author: "Sarah M.",
    origin: "Londra — Bordeaux e Périgord, 10 giorni",
  },
];

export const faq = [
  {
    question: "Organizzate escursioni di una giornata?",
    answer:
      "Sì. Organizziamo tanto una giornata nel vigneto quanto un soggiorno di tre settimane attraverso il Sud-Ovest. In alta stagione, la giornata va prenotata idealmente con due o tre settimane di anticipo.",
  },
  {
    question: "Che tipo di veicolo utilizzate?",
    answer:
      "Mercedes Classe E e Classe V recenti, sottoposte a manutenzione e assicurate per il trasporto di persone. Seggiolini per bambini, wifi e acqua sono forniti su richiesta.",
  },
  {
    question: "L'autista resta lo stesso per tutto il soggiorno?",
    answer:
      "Sì, sempre. È il cuore del nostro servizio: il vostro autista-guida vi accompagna dal primo all'ultimo giorno e conosce le vostre abitudini.",
  },
  {
    question: "Potete farci entrare nei grandi cru classificati?",
    answer:
      "È la nostra specialità. La maggior parte degli château classificati riceve solo su presentazione. Le nostre relazioni nel Médoc, a Saint-Émilion e a Pomerol ci permettono di aprire quelle porte, anche fuori stagione.",
  },
  {
    question: "Possiamo esplorare liberamente durante il soggiorno?",
    answer:
      "Certamente. Lasciamo di proposito spazi liberi in ogni programma, e il vostro autista resta disponibile se cambiate idea nel corso della giornata.",
  },
  {
    question: "I pasti sono inclusi?",
    answer:
      "Lo sono nelle formule complete. Nelle escursioni di una giornata, il pranzo viene prenotato per voi e fatturato secondo la tavola scelta. Vi indichiamo tutto in anticipo, senza sorprese.",
  },
  {
    question: "Accettate gruppi?",
    answer:
      "Fino a otto persone per veicolo, e di più con più veicoli. Non mescoliamo mai due clientele: tutti i nostri soggiorni sono privati.",
  },
  {
    question: "Potete prenotare l'alloggio?",
    answer:
      "Sì. Lavoriamo con una selezione di hotel, château-hotel e proprietà private del Sud-Ovest. Potete anche mantenere il vostro alloggio: ci adattiamo.",
  },
  {
    question: "Organizzate occasioni speciali?",
    answer:
      "Compleanni, proposte di matrimonio, convention, viaggi premio: sì, è una parte importante della nostra attività.",
  },
  {
    question: "Come funziona il pagamento?",
    answer:
      "Un acconto del 30 % alla conferma del programma, il saldo quindici giorni prima della partenza. Bonifico o carta. I vostri documenti e le fatture vi vengono inviati per e-mail.",
  },
];

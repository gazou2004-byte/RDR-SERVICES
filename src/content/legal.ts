/**
 * Les pages légales : mentions légales, confidentialité, crédits photo.
 *
 * Elles vivaient écrites en dur dans leurs pages. Comme ailleurs, le français
 * fait foi et l'anglais doit s'y conformer.
 *
 * Attention : ces textes ont une portée juridique. La version anglaise est une
 * traduction de courtoisie — elle décrit les mêmes engagements, mais c'est le
 * texte français qui fait référence, et il le dit lui-même en tête de page.
 */

import type { Langue } from "./langue";

const fr = {
  mentions: {
    eyebrow: "Informations légales",
    titre: "Mentions légales",
    avertissement:
      "Restent à fournir avant toute communication autour du site : le téléphone et l'e-mail réels, la garantie financière, l'assurance responsabilité civile professionnelle et le médiateur de la consommation.",
    editeur: {
      titre: "Éditeur du site",
      telephone: "Téléphone",
      email: "E-mail",
      forme: "Forme juridique",
      capital: "Capital social",
      siren: "SIREN",
      siret: "SIRET (siège)",
      rcs: "RCS",
      ape: "Code APE",
      tva: "TVA intracommunautaire",
      immatriculee: "Immatriculée le",
      directeur: "Directeur de la publication",
    },
    garanties: {
      titre: "Immatriculations et garanties",
      texte:
        "n'est pas immatriculée au registre des opérateurs de voyages et de séjours tenu par ATOUT FRANCE et ne vend pas de forfaits touristiques. Les prestations présentées sur ce site relèvent de la conciergerie et de l'organisation de services à la demande.",
      garantie: "Garantie financière : sans objet en l'état.",
      assurance: "Assurance responsabilité civile professionnelle : à compléter.",
    },
    hebergement: {
      titre: "Hébergement",
      avant:
        "Le site est hébergé par GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis",
    },
    propriete: {
      titre: "Propriété intellectuelle",
      texte:
        "L'ensemble des contenus présents sur ce site (textes, images, logos, éléments graphiques) est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.",
    },
    mediation: {
      titre: "Médiation de la consommation",
      texte:
        "Conformément à l'article L.612-1 du Code de la consommation, tout client a le droit de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d'un litige. Coordonnées du médiateur : à compléter.",
    },
  },

  confidentialite: {
    eyebrow: "Vos données",
    titre: "Politique de confidentialité",
    intro:
      "attache une importance particulière à la protection de vos données personnelles. Cette page explique simplement ce que nous collectons, pourquoi, et comment exercer vos droits.",
    sections: [
      {
        titre: "Données que nous collectons",
        body: [
          "Formulaire de devis : prénom, nom, adresse e-mail, téléphone, destination souhaitée, dates, nombre de voyageurs, budget indicatif et description de votre projet.",
        ],
      },
      {
        titre: "Pourquoi nous les collectons",
        body: [
          "Répondre à votre demande de devis et organiser votre séjour (exécution du contrat).",
          "Respecter nos obligations comptables et légales de conservation.",
        ],
      },
      {
        titre: "Durée de conservation",
        body: [
          "Demandes de devis non converties : 3 ans à compter du dernier contact.",
          "Dossiers clients et pièces comptables : 10 ans, conformément aux obligations légales.",
        ],
      },
      {
        titre: "Partage des données",
        body: [
          "Vos données ne sont ni vendues ni louées. Elles ne sont transmises qu'aux prestataires strictement nécessaires à la réalisation de votre séjour (hébergeurs, restaurants, propriétés visitées) et à notre hébergeur technique.",
        ],
      },
      {
        titre: "Vos droits",
        body: [
          "Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données.",
          "Pour l'exercer, écrivez-nous. Nous répondons sous un mois. Vous pouvez également saisir la CNIL (www.cnil.fr) si vous estimez que vos droits ne sont pas respectés.",
        ],
      },
      {
        titre: "Cookies",
        body: [
          "Ce site ne dépose aucun cookie : ni publicitaire, ni de mesure d'audience, ni technique. Rien n'est écrit sur votre appareil, hormis la langue et la position du bouton de discussion, que votre navigateur retient seul et ne nous transmet jamais.",
        ],
      },
    ],
    contactTitre: "Nous contacter",
    contactTexte: "Pour toute question relative à vos données :",
  },

  credits: {
    intro:
      "Une partie des photographies provient de Wikimedia Commons et est réutilisée dans le respect de leurs licences. Les autres ont été fournies par RDR Services. Elles ont vocation à être remplacées par les photographies propres à",
    obligation:
      "Certaines licences (CC BY, CC BY-SA, FAL) imposent de citer l'auteur. Tant que ces images sont en ligne, cette page doit le rester et rester accessible depuis le pied de page.",
  },

  /** Affiché en tête des pages légales anglaises seulement. */
  versionFrancaiseFaitFoi: "",
};

export type Legal = typeof fr;

const en: Legal = {
  mentions: {
    eyebrow: "Legal information",
    titre: "Legal notice",
    avertissement:
      "Still to be supplied before any communication about the site: the real telephone number and email address, the financial guarantee, the professional indemnity insurance and the consumer mediator.",
    editeur: {
      titre: "Site publisher",
      telephone: "Telephone",
      email: "Email",
      forme: "Legal form",
      capital: "Share capital",
      siren: "SIREN",
      siret: "SIRET (registered office)",
      rcs: "Trade register",
      ape: "APE code",
      tva: "EU VAT number",
      immatriculee: "Registered on",
      directeur: "Publication director",
    },
    garanties: {
      titre: "Registrations and guarantees",
      texte:
        "is not entered in the register of travel and holiday operators held by ATOUT FRANCE and does not sell package holidays. The services presented on this site are concierge services and the arrangement of services on request.",
      garantie: "Financial guarantee: not applicable as things stand.",
      assurance: "Professional indemnity insurance: to be completed.",
    },
    hebergement: {
      titre: "Hosting",
      avant:
        "The site is hosted by GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States",
    },
    propriete: {
      titre: "Intellectual property",
      texte:
        "All content on this site (text, images, logos, graphic elements) is protected by copyright. Any reproduction, even partial, is forbidden without prior written permission.",
    },
    mediation: {
      titre: "Consumer mediation",
      texte:
        "Under article L.612-1 of the French Consumer Code, every client has the right to call free of charge on a consumer mediator with a view to settling a dispute amicably. Mediator's details: to be completed.",
    },
  },

  confidentialite: {
    eyebrow: "Your data",
    titre: "Privacy policy",
    intro:
      "attaches particular importance to the protection of your personal data. This page explains plainly what we collect, why, and how to exercise your rights.",
    sections: [
      {
        titre: "Data we collect",
        body: [
          "Proposal form: first name, surname, email address, telephone, preferred destination, dates, number of travellers, indicative budget and a description of your project.",
        ],
      },
      {
        titre: "Why we collect it",
        body: [
          "To answer your request and arrange your journey (performance of the contract).",
          "To meet our accounting and legal record-keeping obligations.",
        ],
      },
      {
        titre: "How long we keep it",
        body: [
          "Requests that did not lead to a booking: 3 years from the last contact.",
          "Client files and accounting records: 10 years, as the law requires.",
        ],
      },
      {
        titre: "Sharing your data",
        body: [
          "Your data is neither sold nor rented. It is passed only to the providers strictly necessary to deliver your journey (accommodation, restaurants, properties visited) and to our technical host.",
        ],
      },
      {
        titre: "Your rights",
        body: [
          "You have the right to access, correct, erase, restrict, object to and port your data.",
          "To exercise it, write to us. We answer within a month. You may also refer the matter to the CNIL (www.cnil.fr), the French data protection authority, if you believe your rights are not being respected.",
        ],
      },
      {
        titre: "Cookies",
        body: [
          "This site sets no cookies at all: no advertising, no analytics, no technical ones. Nothing is written to your device apart from your language and the position of the chat button, which your browser keeps to itself and never sends to us.",
        ],
      },
    ],
    contactTitre: "Contact us",
    contactTexte: "For any question about your data:",
  },

  credits: {
    intro:
      "Some of the photographs come from Wikimedia Commons and are reused in accordance with their licences. The others were supplied by RDR Services. They are intended to be replaced by photographs belonging to",
    obligation:
      "Some licences (CC BY, CC BY-SA, FAL) require the author to be credited. For as long as these images are online, this page must stay online and reachable from the footer.",
  },

  versionFrancaiseFaitFoi:
    "This is a courtesy translation. In the event of any discrepancy, the French version of this page prevails.",
};

const es: Legal = {
  mentions: {
    eyebrow: "Información legal",
    titre: "Aviso legal",
    avertissement:
      "Pendiente de facilitar antes de cualquier comunicación sobre el sitio: el teléfono y el correo reales, la garantía financiera, el seguro de responsabilidad civil profesional y el mediador de consumo.",
    editeur: {
      titre: "Editor del sitio",
      telephone: "Teléfono",
      email: "Correo electrónico",
      forme: "Forma jurídica",
      capital: "Capital social",
      siren: "SIREN",
      siret: "SIRET (sede)",
      rcs: "Registro mercantil",
      ape: "Código APE",
      tva: "IVA intracomunitario",
      immatriculee: "Inscrita el",
      directeur: "Director de la publicación",
    },
    garanties: {
      titre: "Inscripciones y garantías",
      texte:
        "no está inscrita en el registro de operadores de viajes y estancias que lleva ATOUT FRANCE y no vende paquetes turísticos. Las prestaciones presentadas en este sitio corresponden a servicios de conserjería y a la organización de servicios a petición.",
      garantie: "Garantía financiera: no procede en la situación actual.",
      assurance: "Seguro de responsabilidad civil profesional: pendiente.",
    },
    hebergement: {
      titre: "Alojamiento web",
      avant:
        "El sitio está alojado por GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, Estados Unidos",
    },
    propriete: {
      titre: "Propiedad intelectual",
      texte:
        "Todos los contenidos de este sitio (textos, imágenes, logotipos, elementos gráficos) están protegidos por derechos de autor. Queda prohibida toda reproducción, incluso parcial, sin autorización previa por escrito.",
    },
    mediation: {
      titre: "Mediación de consumo",
      texte:
        "Conforme al artículo L.612-1 del Código de Consumo francés, todo cliente tiene derecho a recurrir gratuitamente a un mediador de consumo con vistas a la resolución amistosa de un litigio. Datos del mediador: pendiente.",
    },
  },

  confidentialite: {
    eyebrow: "Sus datos",
    titre: "Política de privacidad",
    intro:
      "concede especial importancia a la protección de sus datos personales. Esta página explica de forma sencilla qué recogemos, por qué, y cómo ejercer sus derechos.",
    sections: [
      {
        titre: "Datos que recogemos",
        body: [
          "Formulario de presupuesto: nombre, apellidos, correo electrónico, teléfono, destino deseado, fechas, número de viajeros, presupuesto orientativo y descripción de su proyecto.",
        ],
      },
      {
        titre: "Por qué los recogemos",
        body: [
          "Para responder a su solicitud y organizar su estancia (ejecución del contrato).",
          "Para cumplir nuestras obligaciones contables y legales de conservación.",
        ],
      },
      {
        titre: "Plazo de conservación",
        body: [
          "Solicitudes no convertidas en reserva: 3 años desde el último contacto.",
          "Expedientes de clientes y documentos contables: 10 años, conforme a las obligaciones legales.",
        ],
      },
      {
        titre: "Comunicación de datos",
        body: [
          "Sus datos no se venden ni se alquilan. Solo se transmiten a los proveedores estrictamente necesarios para la realización de su estancia (alojamientos, restaurantes, propiedades visitadas) y a nuestro proveedor técnico de alojamiento.",
        ],
      },
      {
        titre: "Sus derechos",
        body: [
          "Dispone de derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad de sus datos.",
          "Para ejercerlos, escríbanos. Respondemos en el plazo de un mes. También puede dirigirse a la CNIL (www.cnil.fr), la autoridad francesa de protección de datos, si considera que sus derechos no se respetan.",
        ],
      },
      {
        titre: "Cookies",
        body: [
          "Este sitio no instala ninguna cookie: ni publicitaria, ni de medición, ni técnica. En su dispositivo solo se guardan el idioma y la posición del botón de conversación, que su navegador conserva por su cuenta y nunca nos transmite.",
        ],
      },
    ],
    contactTitre: "Contactar",
    contactTexte: "Para cualquier duda sobre sus datos:",
  },

  credits: {
    intro:
      "Parte de las fotografías proviene de Wikimedia Commons y se reutiliza respetando sus licencias. Las demás las ha facilitado RDR Services. Está previsto sustituirlas por fotografías propias de",
    obligation:
      "Algunas licencias (CC BY, CC BY-SA, FAL) obligan a citar al autor. Mientras estas imágenes estén en línea, esta página debe seguir publicada y accesible desde el pie de página.",
  },

  versionFrancaiseFaitFoi:
    "Esta es una traducción de cortesía. En caso de discrepancia, prevalece la versión francesa de esta página.",
};

const de: Legal = {
  mentions: {
    eyebrow: "Rechtliche Angaben",
    titre: "Impressum",
    avertissement:
      "Vor jeder Kommunikation über die Website noch zu ergänzen: die tatsächliche Telefonnummer und E-Mail-Adresse, die finanzielle Sicherheit, die Berufshaftpflichtversicherung und die Verbraucherschlichtungsstelle.",
    editeur: {
      titre: "Herausgeber der Website",
      telephone: "Telefon",
      email: "E-Mail",
      forme: "Rechtsform",
      capital: "Stammkapital",
      siren: "SIREN",
      siret: "SIRET (Sitz)",
      rcs: "Handelsregister",
      ape: "APE-Code",
      tva: "USt-IdNr.",
      immatriculee: "Eingetragen am",
      directeur: "Verantwortlich für den Inhalt",
    },
    garanties: {
      titre: "Eintragungen und Sicherheiten",
      texte:
        "ist nicht im von ATOUT FRANCE geführten Register der Reise- und Aufenthaltsveranstalter eingetragen und verkauft keine Pauschalreisen. Die auf dieser Website dargestellten Leistungen sind Concierge-Leistungen und die Organisation von Diensten auf Anfrage.",
      garantie: "Finanzielle Sicherheit: derzeit nicht einschlägig.",
      assurance: "Berufshaftpflichtversicherung: noch zu ergänzen.",
    },
    hebergement: {
      titre: "Hosting",
      avant:
        "Die Website wird gehostet von GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA",
    },
    propriete: {
      titre: "Urheberrecht",
      texte:
        "Sämtliche Inhalte dieser Website (Texte, Bilder, Logos, grafische Elemente) sind urheberrechtlich geschützt. Jede Vervielfältigung, auch auszugsweise, ist ohne vorherige schriftliche Zustimmung untersagt.",
    },
    mediation: {
      titre: "Verbraucherschlichtung",
      texte:
        "Nach Artikel L.612-1 des französischen Verbrauchergesetzbuchs hat jeder Kunde das Recht, zur gütlichen Beilegung einer Streitigkeit kostenfrei eine Verbraucherschlichtungsstelle anzurufen. Angaben zur Schlichtungsstelle: noch zu ergänzen.",
    },
  },

  confidentialite: {
    eyebrow: "Ihre Daten",
    titre: "Datenschutzerklärung",
    intro:
      "misst dem Schutz Ihrer personenbezogenen Daten besondere Bedeutung bei. Diese Seite erklärt in einfachen Worten, was wir erheben, warum, und wie Sie Ihre Rechte ausüben.",
    sections: [
      {
        titre: "Welche Daten wir erheben",
        body: [
          "Anfrageformular: Vorname, Nachname, E-Mail-Adresse, Telefon, gewünschtes Reiseziel, Daten, Zahl der Reisenden, ungefähres Budget und eine Beschreibung Ihres Vorhabens.",
        ],
      },
      {
        titre: "Warum wir sie erheben",
        body: [
          "Um Ihre Anfrage zu beantworten und Ihre Reise zu organisieren (Vertragserfüllung).",
          "Um unseren buchhalterischen und gesetzlichen Aufbewahrungspflichten nachzukommen.",
        ],
      },
      {
        titre: "Speicherdauer",
        body: [
          "Anfragen ohne Buchung: 3 Jahre ab dem letzten Kontakt.",
          "Kundenakten und Buchhaltungsbelege: 10 Jahre, wie gesetzlich vorgeschrieben.",
        ],
      },
      {
        titre: "Weitergabe der Daten",
        body: [
          "Ihre Daten werden weder verkauft noch vermietet. Sie werden ausschließlich an die für die Durchführung Ihrer Reise unbedingt erforderlichen Dienstleister weitergegeben (Unterkünfte, Restaurants, besuchte Anwesen) sowie an unseren technischen Hoster.",
        ],
      },
      {
        titre: "Ihre Rechte",
        body: [
          "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Datenübertragbarkeit.",
          "Zur Ausübung schreiben Sie uns. Wir antworten binnen eines Monats. Sie können sich auch an die CNIL (www.cnil.fr), die französische Datenschutzbehörde, wenden, wenn Sie Ihre Rechte verletzt sehen.",
        ],
      },
      {
        titre: "Cookies",
        body: [
          "Diese Website setzt überhaupt keine Cookies: weder für Werbung noch zur Messung noch technische. Auf Ihrem Gerät werden allein Ihre Sprache und die Position der Gesprächsschaltfläche abgelegt — Ihr Browser behält beides für sich und übermittelt es uns nie.",
        ],
      },
    ],
    contactTitre: "Kontakt",
    contactTexte: "Bei Fragen zu Ihren Daten:",
  },

  credits: {
    intro:
      "Ein Teil der Fotografien stammt von Wikimedia Commons und wird unter Beachtung der jeweiligen Lizenzen verwendet. Die übrigen wurden von RDR Services bereitgestellt. Sie sollen durch eigene Aufnahmen ersetzt werden von",
    obligation:
      "Einige Lizenzen (CC BY, CC BY-SA, FAL) verlangen die Nennung des Urhebers. Solange diese Bilder online sind, muss diese Seite online und über die Fußzeile erreichbar bleiben.",
  },

  versionFrancaiseFaitFoi:
    "Dies ist eine Übersetzung aus Gefälligkeit. Bei Abweichungen ist die französische Fassung dieser Seite maßgeblich.",
};

const it: Legal = {
  mentions: {
    eyebrow: "Informazioni legali",
    titre: "Note legali",
    avertissement:
      "Ancora da fornire prima di qualsiasi comunicazione sul sito: il telefono e l'e-mail reali, la garanzia finanziaria, l'assicurazione di responsabilità civile professionale e il mediatore del consumo.",
    editeur: {
      titre: "Editore del sito",
      telephone: "Telefono",
      email: "E-mail",
      forme: "Forma giuridica",
      capital: "Capitale sociale",
      siren: "SIREN",
      siret: "SIRET (sede)",
      rcs: "Registro delle imprese",
      ape: "Codice APE",
      tva: "Partita IVA intracomunitaria",
      immatriculee: "Iscritta il",
      directeur: "Direttore della pubblicazione",
    },
    garanties: {
      titre: "Iscrizioni e garanzie",
      texte:
        "non è iscritta al registro degli operatori di viaggi e soggiorni tenuto da ATOUT FRANCE e non vende pacchetti turistici. Le prestazioni presentate su questo sito rientrano nei servizi di concierge e nell'organizzazione di servizi su richiesta.",
      garantie: "Garanzia finanziaria: non pertinente allo stato attuale.",
      assurance: "Assicurazione di responsabilità civile professionale: da completare.",
    },
    hebergement: {
      titre: "Hosting",
      avant:
        "Il sito è ospitato da GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, Stati Uniti",
    },
    propriete: {
      titre: "Proprietà intellettuale",
      texte:
        "Tutti i contenuti presenti su questo sito (testi, immagini, loghi, elementi grafici) sono protetti dal diritto d'autore. Qualsiasi riproduzione, anche parziale, è vietata senza previa autorizzazione scritta.",
    },
    mediation: {
      titre: "Mediazione del consumo",
      texte:
        "Ai sensi dell'articolo L.612-1 del Codice del consumo francese, ogni cliente ha diritto di ricorrere gratuitamente a un mediatore del consumo per la risoluzione amichevole di una controversia. Dati del mediatore: da completare.",
    },
  },

  confidentialite: {
    eyebrow: "I vostri dati",
    titre: "Informativa sulla privacy",
    intro:
      "attribuisce particolare importanza alla protezione dei vostri dati personali. Questa pagina spiega in modo semplice che cosa raccogliamo, perché, e come esercitare i vostri diritti.",
    sections: [
      {
        titre: "Dati che raccogliamo",
        body: [
          "Modulo di preventivo: nome, cognome, indirizzo e-mail, telefono, destinazione desiderata, date, numero di viaggiatori, budget indicativo e descrizione del vostro progetto.",
        ],
      },
      {
        titre: "Perché li raccogliamo",
        body: [
          "Per rispondere alla vostra richiesta e organizzare il soggiorno (esecuzione del contratto).",
          "Per rispettare i nostri obblighi contabili e legali di conservazione.",
        ],
      },
      {
        titre: "Durata di conservazione",
        body: [
          "Richieste non convertite in prenotazione: 3 anni dall'ultimo contatto.",
          "Pratiche dei clienti e documenti contabili: 10 anni, come previsto dalla legge.",
        ],
      },
      {
        titre: "Comunicazione dei dati",
        body: [
          "I vostri dati non vengono né venduti né ceduti. Sono trasmessi solo ai fornitori strettamente necessari alla realizzazione del soggiorno (alloggi, ristoranti, proprietà visitate) e al nostro fornitore tecnico di hosting.",
        ],
      },
      {
        titre: "I vostri diritti",
        body: [
          "Avete diritto di accesso, rettifica, cancellazione, limitazione, opposizione e portabilità dei vostri dati.",
          "Per esercitarli, scriveteci. Rispondiamo entro un mese. Potete anche rivolgervi alla CNIL (www.cnil.fr), l'autorità francese per la protezione dei dati, se ritenete che i vostri diritti non siano rispettati.",
        ],
      },
      {
        titre: "Cookie",
        body: [
          "Questo sito non installa alcun cookie: né pubblicitario, né di misurazione, né tecnico. Sul vostro dispositivo restano solo la lingua e la posizione del pulsante di conversazione, che il vostro browser conserva per sé e non ci trasmette mai.",
        ],
      },
    ],
    contactTitre: "Contatti",
    contactTexte: "Per qualsiasi domanda relativa ai vostri dati:",
  },

  credits: {
    intro:
      "Una parte delle fotografie proviene da Wikimedia Commons ed è riutilizzata nel rispetto delle rispettive licenze. Le altre sono state fornite da RDR Services. È previsto che vengano sostituite da fotografie proprie di",
    obligation:
      "Alcune licenze (CC BY, CC BY-SA, FAL) impongono di citare l'autore. Finché queste immagini restano online, questa pagina deve restare pubblicata e raggiungibile dal piè di pagina.",
  },

  versionFrancaiseFaitFoi:
    "Questa è una traduzione di cortesia. In caso di discordanza, prevale la versione francese di questa pagina.",
};

const dictionnaires: Record<Langue, Legal> = { fr, en, es, de, it };

export function legal(langue: Langue): Legal {
  return dictionnaires[langue];
}

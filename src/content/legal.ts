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
          "Espace client : prénom, nom, e-mail, téléphone, mot de passe (stocké sous forme chiffrée et non réversible), ainsi que les séjours, documents et messages qui vous sont rattachés.",
        ],
      },
      {
        titre: "Pourquoi nous les collectons",
        body: [
          "Répondre à votre demande de devis et organiser votre séjour (exécution du contrat).",
          "Vous donner accès à votre espace client et à vos documents de voyage.",
          "Respecter nos obligations comptables et légales de conservation.",
        ],
      },
      {
        titre: "Durée de conservation",
        body: [
          "Demandes de devis non converties : 3 ans à compter du dernier contact.",
          "Dossiers clients et pièces comptables : 10 ans, conformément aux obligations légales.",
          "Comptes de l'espace client : jusqu'à votre demande de suppression.",
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
          "Ce site n'utilise ni cookie publicitaire ni traceur tiers. Un unique cookie technique est déposé lorsque vous vous connectez à votre espace client : il sert exclusivement à vous maintenir connecté et disparaît à la déconnexion.",
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
          "Client area: first name, surname, email, telephone, password (stored encrypted and not reversible), together with the journeys, documents and messages attached to you.",
        ],
      },
      {
        titre: "Why we collect it",
        body: [
          "To answer your request and arrange your journey (performance of the contract).",
          "To give you access to your client area and your travel documents.",
          "To meet our accounting and legal record-keeping obligations.",
        ],
      },
      {
        titre: "How long we keep it",
        body: [
          "Requests that did not lead to a booking: 3 years from the last contact.",
          "Client files and accounting records: 10 years, as the law requires.",
          "Client area accounts: until you ask us to delete them.",
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
          "This site uses neither advertising cookies nor third-party trackers. A single technical cookie is set when you sign in to your client area: it serves only to keep you signed in, and disappears when you sign out.",
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

export function legal(langue: Langue): Legal {
  return langue === "en" ? en : fr;
}

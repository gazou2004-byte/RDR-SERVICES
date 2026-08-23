/**
 * Les textes d'interface : tout ce qui n'est pas du contenu éditorial mais
 * qui s'affiche quand même — titres de sections, boutons, étiquettes de
 * formulaire, messages de la fenêtre de discussion.
 *
 * Ils vivaient écrits en dur dans les composants, ce qui les rendait
 * intraduisibles. Le français ci-dessous fait foi : `Ui` en tire la forme, et
 * l'anglais doit s'y conformer, sans quoi la compilation échoue.
 */

import type { Langue } from ".";

const fr = {
  langue: { fr: "Français", en: "English", basculer: "English" },

  entete: {
    espaceClient: "Espace client",
    ouvrirMenu: "Ouvrir le menu",
    fermerMenu: "Fermer le menu",
    retourAccueil: "RDR Services — retour à l'accueil",
  },

  pied: {
    mentions: "Mentions légales",
    confidentialite: "Confidentialité",
    credits: "Crédits photo",
  },

  heros: { sectionSuivante: "Aller à la section suivante", paysage: "Paysage" },

  services: {
    eyebrow: "Un seul interlocuteur",
    titre: "Quatre métiers",
    description:
      "De la journée d'excursion au voyage de trois semaines, tout passe par la même personne. Vous n'avez jamais à répéter deux fois la même chose.",
    voirPlus: "Voir plus",
  },

  destinations: {
    eyebrow: "Cinq territoires du Sud-Ouest",
    titre: "Destinations",
    description:
      "Chaque itinéraire présenté ici est un point de départ. Nous le retravaillons entièrement selon vos envies, votre rythme et la saison.",
    decouvrir: "Découvrir",
  },

  apropos: { eyebrow: "Notre histoire", titre: "À propos" },

  etapes: { eyebrow: "De la première idée au départ", titre: "Comment ça se passe" },

  temoignages: { eyebrow: "Témoignages", titre: "Ils nous ont confié leur séjour" },

  faq: {
    eyebrow: "Questions fréquentes",
    titre: "Ce que l'on nous demande",
    relance: "Une question qui n'est pas ici ? Écrivez-nous, nous répondons sous 24 heures.",
  },

  contact: {
    eyebrow: "Demande de devis",
    titre: "Parlons de votre séjour",
    description:
      "Plus vous êtes précis, plus notre proposition sera juste du premier coup. Réponse sous 24 heures ouvrées.",
    joindre: "Nous joindre directement",
    telephone: "Téléphone",
    email: "E-mail",
    bureau: "Bureau",
    disponibilite: "Disponibilité",
    horaires: "Lundi – samedi, 9 h – 19 h",
    assistance: "Assistance 24 h/24 pendant votre séjour",
    nousContacter: "Nous contacter",
  },

  region: {
    activitesEyebrow: "Sur place",
    activitesTitre: "Quelques activités",
    activitesDescription:
      "À glisser dans votre programme, selon vos envies et la météo. Tout est réservé et organisé pour vous.",
    voir: "Voir",
    experiencesEyebrow: "Sur place, avec nous",
    experiencesTitre: "Expériences uniques",
    experiencesDescription:
      "Ces moments ne sont pas réservables en ligne : ils reposent sur des relations construites au fil des années.",
  },

  destination: {
    ideesEyebrow: "Temps forts",
    ideesTitre: "Quelques idées",
    ideesDescription:
      "Les moments qui font le séjour, et les activités à y glisser selon vos envies et la météo. Tout est réservé et organisé pour vous.",
    dureeConseillee: "Durée conseillée",
    meilleureSaison: "Meilleure saison",
    format: "Format",
    privatif: "Privatif intégral",
    itineraireEyebrow: "Itinéraire suggéré",
    itineraireTitre: "Un exemple,",
    itineraireAccent: "pas une formule",
    itineraireDescription:
      "Voici comment se déroule un séjour type. Le vôtre sera recomposé de zéro après notre premier échange.",
    autresEyebrow: "Poursuivre",
    autresTitre: "Les autres territoires",
    ctaTitre: "Composer votre séjour en",
    ctaDescription:
      "Dites-nous vos dates, le nombre de voyageurs et ce qui vous fait envie. Nous revenons vers vous sous 72 heures avec un programme complet.",
  },

  chat: {
    lanceur: "Une question ?",
    lanceurTitre:
      "Cliquez pour ouvrir — glissez vers le haut ou vers le bas pour déplacer le bouton",
    lanceurAria:
      "Ouvrir la discussion. Glissez le bouton, ou utilisez les flèches haut et bas, pour le déplacer.",
    poigneeTitre: "Glissez vers le haut ou vers le bas pour déplacer la fenêtre",
    dialogue: "Discuter avec",
    reponse: "Réponse sous 24 heures ouvrées",
    fermer: "Fermer la discussion",
    ongletQuestions: "Questions fréquentes",
    ongletProjet: "Votre projet",
    appeler: "Appeler",
    ecrire: "Écrire un e-mail",
    amorce:
      "Dites-nous où vous voulez aller, quand et à combien. Plus c'est précis, plus notre proposition sera juste du premier coup.",
  },

  formulaire: {
    prenom: "Prénom",
    nom: "Nom",
    email: "E-mail",
    telephone: "Téléphone",
    destination: "Destination souhaitée",
    inconnu: "Je ne sais pas encore",
    plusieurs: "Plusieurs régions",
    evenement: "Événement privé / séminaire",
    depart: "Date de départ approximative",
    voyageurs: "Nombre de voyageurs",
    budget: "Budget envisagé",
    preciserPlusTard: "Préciser plus tard",
    projet: "Votre projet",
    exemple:
      "Nous sommes deux couples, nous aimerions découvrir les grands crus du Médoc sur quatre jours en septembre…",
    envoyer: "Envoyer ma demande",
  },

  credits: {
    eyebrow: "Attributions",
    titre: "Crédits photographiques",
    pageWikimedia: "Page Wikimedia Commons →",
    texteLicence: "Texte de la licence →",
  },

  introuvable: {
    code: "Erreur 404",
    titre: "Page introuvable",
    texte: "Cette page n'existe pas ou a été déplacée. Revenons sur nos pas.",
    retour: "Retour à l'accueil",
    contact: "Nous contacter",
  },
};

export type Ui = typeof fr;

const en: Ui = {
  langue: { fr: "Français", en: "English", basculer: "Français" },

  entete: {
    espaceClient: "Client area",
    ouvrirMenu: "Open the menu",
    fermerMenu: "Close the menu",
    retourAccueil: "RDR Services — back to the home page",
  },

  pied: {
    mentions: "Legal notice",
    confidentialite: "Privacy",
    credits: "Photo credits",
  },

  heros: { sectionSuivante: "Go to the next section", paysage: "Landscape" },

  services: {
    eyebrow: "One person to talk to",
    titre: "Four crafts",
    description:
      "From a day out to a three-week journey, everything goes through the same person. You never have to explain yourself twice.",
    voirPlus: "See more",
  },

  destinations: {
    eyebrow: "Five territories of South-West France",
    titre: "Destinations",
    description:
      "Every itinerary shown here is a starting point. We rework it entirely around your tastes, your pace and the season.",
    decouvrir: "Discover",
  },

  apropos: { eyebrow: "Our story", titre: "About" },

  etapes: { eyebrow: "From the first idea to departure", titre: "How it works" },

  temoignages: { eyebrow: "Testimonials", titre: "They trusted us with their journey" },

  faq: {
    eyebrow: "Frequently asked",
    titre: "What people ask us",
    relance: "A question that is not here? Write to us — we answer within 24 hours.",
  },

  contact: {
    eyebrow: "Request a proposal",
    titre: "Let's talk about your journey",
    description:
      "The more precise you are, the closer our proposal will be first time. Answer within 24 working hours.",
    joindre: "Reach us directly",
    telephone: "Telephone",
    email: "Email",
    bureau: "Office",
    disponibilite: "Availability",
    horaires: "Monday – Saturday, 9 am – 7 pm",
    assistance: "Round-the-clock assistance during your stay",
    nousContacter: "Get in touch",
  },

  region: {
    activitesEyebrow: "While you are there",
    activitesTitre: "A few activities",
    activitesDescription:
      "To slip into your programme, according to your mood and the weather. Everything is booked and arranged for you.",
    voir: "See",
    experiencesEyebrow: "There, with us",
    experiencesTitre: "Singular experiences",
    experiencesDescription:
      "These moments cannot be booked online: they rest on relationships built over years.",
  },

  destination: {
    ideesEyebrow: "Highlights",
    ideesTitre: "A few ideas",
    ideesDescription:
      "The moments that make the journey, and the activities to slip in according to your mood and the weather. Everything is booked and arranged for you.",
    dureeConseillee: "Suggested length",
    meilleureSaison: "Best season",
    format: "Format",
    privatif: "Entirely private",
    itineraireEyebrow: "Suggested itinerary",
    itineraireTitre: "An example,",
    itineraireAccent: "not a formula",
    itineraireDescription:
      "Here is how a typical journey unfolds. Yours will be rebuilt from scratch after our first conversation.",
    autresEyebrow: "Keep going",
    autresTitre: "The other territories",
    ctaTitre: "Compose your journey in",
    ctaDescription:
      "Tell us your dates, how many are travelling and what appeals to you. We come back within 72 hours with a complete programme.",
  },

  chat: {
    lanceur: "A question?",
    lanceurTitre: "Click to open — drag up or down to move the button",
    lanceurAria:
      "Open the conversation. Drag the button, or use the up and down arrows, to move it.",
    poigneeTitre: "Drag up or down to move the window",
    dialogue: "Talk to",
    reponse: "Answer within 24 working hours",
    fermer: "Close the conversation",
    ongletQuestions: "Frequently asked",
    ongletProjet: "Your project",
    appeler: "Call us",
    ecrire: "Send an email",
    amorce:
      "Tell us where you want to go, when, and how many of you. The more precise, the closer our proposal will be first time.",
  },

  formulaire: {
    prenom: "First name",
    nom: "Surname",
    email: "Email",
    telephone: "Telephone",
    destination: "Preferred destination",
    inconnu: "I don't know yet",
    plusieurs: "Several regions",
    evenement: "Private occasion / retreat",
    depart: "Approximate departure date",
    voyageurs: "Number of travellers",
    budget: "Budget in mind",
    preciserPlusTard: "Decide later",
    projet: "Your project",
    exemple:
      "There are two couples of us; we would like to discover the classified growths of the Médoc over four days in September…",
    envoyer: "Send my request",
  },

  credits: {
    eyebrow: "Attributions",
    titre: "Photo credits",
    pageWikimedia: "Wikimedia Commons page →",
    texteLicence: "Licence text →",
  },

  introuvable: {
    code: "Error 404",
    titre: "Page not found",
    texte: "This page does not exist, or has moved. Let's go back.",
    retour: "Back to the home page",
    contact: "Get in touch",
  },
};

export function ui(langue: Langue): Ui {
  return langue === "en" ? en : fr;
}

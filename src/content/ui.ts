/**
 * Les textes d'interface : tout ce qui n'est pas du contenu éditorial mais
 * qui s'affiche quand même — titres de sections, boutons, étiquettes de
 * formulaire, messages de la fenêtre de discussion.
 *
 * Ils vivaient écrits en dur dans les composants, ce qui les rendait
 * intraduisibles. Le français ci-dessous fait foi : `Ui` en tire la forme, et
 * l'anglais doit s'y conformer, sans quoi la compilation échoue.
 */

import type { Langue } from "./langue";

const fr = {
  langue: { choisir: "Changer de langue" },

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
      "De la journée d'excursion au voyage de trois semaines, tout passe par la même personne. Vous n'avez jamais à réexpliquer votre dossier.",
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
    accueilQuestions:
      "Bonjour. Voici ce qu'on nous demande le plus souvent. Si votre question n'y est pas, passez à l'onglet",
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
    budgets: [
      "Moins de 3 000 €",
      "3 000 – 6 000 €",
      "6 000 – 12 000 €",
      "12 000 – 25 000 €",
      "Plus de 25 000 €",
    ],
    /* Étiquettes du courriel composé par la vitrine statique. */
    sujet: "Demande de devis",
    ligneProjet: "Projet :",
    dateDepart: "Date de départ",
    indiceDepart: "Une date indicative suffit.",
    indiceProjet:
      "Qui voyage, ce qui vous fait envie, ce que vous voulez éviter.",
    messagerieOuverte:
      "Votre logiciel de messagerie devrait s'ouvrir avec la demande pré-remplie. Sinon, écrivez-nous directement.",
    messagerieAvant:
      "Le bouton ouvre votre messagerie avec la demande déjà rédigée.",
    ecrireSoiMeme: "Vous préférez écrire vous-même ?",
  },


  portail: {
    tableauDeBord: "Tableau de bord",
    mesSejours: "Mes séjours",
    documents: "Documents",
    messages: "Messages",
    monProfil: "Mon profil",
  },

  espace: {
    titre: "Espace client",
    bonRetour: "Bon retour parmi nous",
    creerEspace: "Créer votre espace",
    deconnexion: "Se déconnecter",
    prochainsSejours: "Vos prochains séjours",
    toutVoir: "Tout voir →",
    documentsRecents: "Documents récents",
    tousDocuments: "Tous vos documents",
    ouvrir: "Ouvrir",
    aucunSejour: "Aucun séjour programmé",
    aucunSejourTexte:
      "Dès qu'un devis sera établi pour vous, il apparaîtra ici avec son programme, ses documents et son suivi.",
    aucunDocument: "Aucun document",
    aucunDocumentTexte:
      "Vos documents de voyage apparaîtront ici au fur et à mesure de la préparation de votre séjour.",
    messages: "Messages",
    nouveauMessage: "Nouveau message",
    mesInformations: "Mes informations",
    securite: "Sécurité",
    reglement: "Règlement",
    progressionReglement: "Progression du règlement",
    noteConseiller: "Note de votre conseiller",
    documentsSejour: "Documents du séjour",
    aucunDocumentSejour: "Aucun document n'a encore été déposé pour ce séjour.",
    questionSejour: "Une question sur ce séjour ?",
    ecrireConseiller: "Écrire à mon conseiller",
    sejoursAVenir: "Séjours à venir",
    historique: "Historique",
    aucunSejourAVenir: "Aucun séjour à venir",
    aucunSejourAVenirTexte:
      "Vos devis et séjours confirmés apparaîtront ici dès qu'ils seront établis par votre conseiller.",
    dates: "Dates",
    duree: "Durée",
    voyageurs: "Voyageurs",
    seConnecter: "Se connecter",
    creerMonEspace: "Créer mon espace",
    adresseEmail: "Adresse e-mail",
    exempleEmail: "vous@exemple.fr",
    motDePasse: "Mot de passe",
    confirmerMotDePasse: "Confirmer le mot de passe",
    motDePasseActuel: "Mot de passe actuel",
    nouveauMotDePasse: "Nouveau mot de passe",
    confirmer: "Confirmer",
    enregistrer: "Enregistrer",
    changerMotDePasse: "Changer le mot de passe",
    indiceEmail: "Pour modifier votre e-mail, écrivez à votre conseiller.",
    sejourConcerne: "Séjour concerné",
    questionGenerale: "Question générale",
    votreMessage: "Votre message",
    envoyer: "Envoyer",
    exempleMessage: "Bonjour, je souhaiterais savoir si…",
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
  langue: { choisir: "Change language" },

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
      "From a day out to a three-week journey, everything goes through the same person. You never have to explain your file twice.",
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
    accueilQuestions:
      "Hello. Here is what we are asked most often. If your question is not here, move to the tab",
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
    budgets: [
      "Under €3,000",
      "€3,000 – 6,000",
      "€6,000 – 12,000",
      "€12,000 – 25,000",
      "Over €25,000",
    ],
    sujet: "Proposal request",
    ligneProjet: "Project:",
    dateDepart: "Departure date",
    indiceDepart: "An approximate date is enough.",
    indiceProjet: "Who is travelling, what appeals to you, what to avoid.",
    messagerieOuverte:
      "Your email programme should open with the request already filled in. If it does not, write to us directly.",
    messagerieAvant:
      "The button opens your email programme with the request already written.",
    ecrireSoiMeme: "Would you rather write yourself?",
  },


  portail: {
    tableauDeBord: "Dashboard",
    mesSejours: "My journeys",
    documents: "Documents",
    messages: "Messages",
    monProfil: "My profile",
  },

  espace: {
    titre: "Client area",
    bonRetour: "Welcome back",
    creerEspace: "Create your account",
    deconnexion: "Sign out",
    prochainsSejours: "Your upcoming journeys",
    toutVoir: "See all →",
    documentsRecents: "Recent documents",
    tousDocuments: "All your documents",
    ouvrir: "Open",
    aucunSejour: "No journey planned",
    aucunSejourTexte:
      "As soon as a proposal is drawn up for you, it will appear here with its programme, its documents and its progress.",
    aucunDocument: "No documents",
    aucunDocumentTexte:
      "Your travel documents will appear here as your journey takes shape.",
    messages: "Messages",
    nouveauMessage: "New message",
    mesInformations: "My details",
    securite: "Security",
    reglement: "Payment",
    progressionReglement: "Payment progress",
    noteConseiller: "A note from your adviser",
    documentsSejour: "Documents for this journey",
    aucunDocumentSejour: "No document has been added for this journey yet.",
    questionSejour: "A question about this journey?",
    ecrireConseiller: "Write to my adviser",
    sejoursAVenir: "Upcoming journeys",
    historique: "Past journeys",
    aucunSejourAVenir: "No upcoming journey",
    aucunSejourAVenirTexte:
      "Your proposals and confirmed journeys will appear here as soon as your adviser has drawn them up.",
    dates: "Dates",
    duree: "Length",
    voyageurs: "Travellers",
    seConnecter: "Sign in",
    creerMonEspace: "Create my account",
    adresseEmail: "Email address",
    exempleEmail: "you@example.com",
    motDePasse: "Password",
    confirmerMotDePasse: "Confirm the password",
    motDePasseActuel: "Current password",
    nouveauMotDePasse: "New password",
    confirmer: "Confirm",
    enregistrer: "Save",
    changerMotDePasse: "Change the password",
    indiceEmail: "To change your email address, write to your adviser.",
    sejourConcerne: "Journey concerned",
    questionGenerale: "General question",
    votreMessage: "Your message",
    envoyer: "Send",
    exempleMessage: "Hello, I would like to know whether…",
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

const es: Ui = {
  langue: { choisir: "Cambiar de idioma" },

  entete: {
    espaceClient: "Área de cliente",
    ouvrirMenu: "Abrir el menú",
    fermerMenu: "Cerrar el menú",
    retourAccueil: "RDR Services — volver al inicio",
  },

  pied: {
    mentions: "Aviso legal",
    confidentialite: "Privacidad",
    credits: "Créditos fotográficos",
  },

  heros: { sectionSuivante: "Ir a la sección siguiente", paysage: "Paisaje" },

  services: {
    eyebrow: "Un único interlocutor",
    titre: "Cuatro oficios",
    description:
      "De la excursión de un día al viaje de tres semanas, todo pasa por la misma persona. Nunca tendrá que volver a explicar su expediente.",
    voirPlus: "Ver más",
  },

  destinations: {
    eyebrow: "Cinco territorios del Suroeste",
    titre: "Destinos",
    description:
      "Cada itinerario que aquí se presenta es un punto de partida. Lo reelaboramos por completo según sus deseos, su ritmo y la estación.",
    decouvrir: "Descubrir",
  },

  apropos: { eyebrow: "Nuestra historia", titre: "Quiénes somos" },

  etapes: { eyebrow: "De la primera idea a la salida", titre: "Cómo funciona" },

  temoignages: {
    eyebrow: "Testimonios",
    titre: "Nos confiaron su viaje",
  },

  faq: {
    eyebrow: "Preguntas frecuentes",
    titre: "Lo que nos preguntan",
    relance:
      "¿Su pregunta no está aquí? Escríbanos, respondemos en menos de 24 horas.",
  },

  contact: {
    eyebrow: "Solicitud de presupuesto",
    titre: "Hablemos de su viaje",
    description:
      "Cuanto más preciso sea, más ajustada será nuestra propuesta a la primera. Respuesta en 24 horas laborables.",
    joindre: "Contacto directo",
    telephone: "Teléfono",
    email: "Correo electrónico",
    bureau: "Oficina",
    disponibilite: "Disponibilidad",
    horaires: "De lunes a sábado, de 9 h a 19 h",
    assistance: "Asistencia 24 h durante su estancia",
    nousContacter: "Contactar",
  },

  region: {
    activitesEyebrow: "Sobre el terreno",
    activitesTitre: "Algunas actividades",
    activitesDescription:
      "Para incluir en su programa, según sus ganas y el tiempo. Todo queda reservado y organizado para usted.",
    voir: "Ver",
    experiencesEyebrow: "Allí, con nosotros",
    experiencesTitre: "Experiencias únicas",
    experiencesDescription:
      "Estos momentos no se reservan por internet: se apoyan en relaciones construidas a lo largo de los años.",
  },

  destination: {
    ideesEyebrow: "Momentos destacados",
    ideesTitre: "Algunas ideas",
    ideesDescription:
      "Los momentos que hacen el viaje, y las actividades que puede añadir según sus ganas y el tiempo. Todo queda reservado y organizado para usted.",
    dureeConseillee: "Duración aconsejada",
    meilleureSaison: "Mejor temporada",
    format: "Formato",
    privatif: "Totalmente privado",
    itineraireEyebrow: "Itinerario sugerido",
    itineraireTitre: "Un ejemplo,",
    itineraireAccent: "no una fórmula",
    itineraireDescription:
      "Así se desarrolla un viaje tipo. El suyo se recompondrá desde cero tras nuestra primera conversación.",
    autresEyebrow: "Seguir",
    autresTitre: "Los demás territorios",
    ctaTitre: "Componer su viaje por",
    ctaDescription:
      "Díganos sus fechas, cuántos viajan y qué les apetece. Volvemos a usted en 72 horas con un programa completo.",
  },

  chat: {
    lanceur: "¿Una pregunta?",
    lanceurTitre: "Haga clic para abrir — arrastre arriba o abajo para mover el botón",
    lanceurAria:
      "Abrir la conversación. Arrastre el botón, o use las flechas arriba y abajo, para moverlo.",
    poigneeTitre: "Arrastre arriba o abajo para mover la ventana",
    dialogue: "Hablar con",
    reponse: "Respuesta en 24 horas laborables",
    fermer: "Cerrar la conversación",
    ongletQuestions: "Preguntas frecuentes",
    ongletProjet: "Su proyecto",
    appeler: "Llamar",
    ecrire: "Escribir un correo",
    amorce:
      "Díganos adónde quiere ir, cuándo y cuántos son. Cuanto más preciso, más ajustada será nuestra propuesta a la primera.",
    accueilQuestions:
      "Hola. Esto es lo que más nos preguntan. Si su pregunta no está aquí, pase a la pestaña",
  },

  formulaire: {
    prenom: "Nombre",
    nom: "Apellidos",
    email: "Correo electrónico",
    telephone: "Teléfono",
    destination: "Destino deseado",
    inconnu: "Todavía no lo sé",
    plusieurs: "Varias regiones",
    evenement: "Celebración privada / convención",
    depart: "Fecha aproximada de salida",
    voyageurs: "Número de viajeros",
    budget: "Presupuesto previsto",
    preciserPlusTard: "Concretar más adelante",
    projet: "Su proyecto",
    exemple:
      "Somos dos parejas y nos gustaría descubrir los grandes crus del Médoc durante cuatro días en septiembre…",
    envoyer: "Enviar mi solicitud",
    budgets: [
      "Menos de 3.000 €",
      "3.000 – 6.000 €",
      "6.000 – 12.000 €",
      "12.000 – 25.000 €",
      "Más de 25.000 €",
    ],
    sujet: "Solicitud de presupuesto",
    ligneProjet: "Proyecto:",
    dateDepart: "Fecha de salida",
    indiceDepart: "Basta con una fecha orientativa.",
    indiceProjet: "Quién viaja, qué les apetece, qué prefieren evitar.",
    messagerieOuverte:
      "Su programa de correo debería abrirse con la solicitud ya redactada. Si no, escríbanos directamente.",
    messagerieAvant:
      "El botón abre su programa de correo con la solicitud ya redactada.",
    ecrireSoiMeme: "¿Prefiere escribir usted mismo?",
  },


  portail: {
    tableauDeBord: "Panel",
    mesSejours: "Mis viajes",
    documents: "Documentos",
    messages: "Mensajes",
    monProfil: "Mi perfil",
  },

  espace: {
    titre: "Área de cliente",
    bonRetour: "Bienvenido de nuevo",
    creerEspace: "Cree su cuenta",
    deconnexion: "Cerrar sesión",
    prochainsSejours: "Sus próximos viajes",
    toutVoir: "Ver todo →",
    documentsRecents: "Documentos recientes",
    tousDocuments: "Todos sus documentos",
    ouvrir: "Abrir",
    aucunSejour: "Ningún viaje programado",
    aucunSejourTexte:
      "En cuanto se le prepare un presupuesto, aparecerá aquí con su programa, sus documentos y su seguimiento.",
    aucunDocument: "Ningún documento",
    aucunDocumentTexte:
      "Sus documentos de viaje irán apareciendo aquí a medida que se prepare su estancia.",
    messages: "Mensajes",
    nouveauMessage: "Nuevo mensaje",
    mesInformations: "Mis datos",
    securite: "Seguridad",
    reglement: "Pago",
    progressionReglement: "Estado del pago",
    noteConseiller: "Nota de su asesor",
    documentsSejour: "Documentos del viaje",
    aucunDocumentSejour: "Todavía no se ha añadido ningún documento para este viaje.",
    questionSejour: "¿Una duda sobre este viaje?",
    ecrireConseiller: "Escribir a mi asesor",
    sejoursAVenir: "Próximos viajes",
    historique: "Historial",
    aucunSejourAVenir: "Ningún viaje próximo",
    aucunSejourAVenirTexte:
      "Sus presupuestos y viajes confirmados aparecerán aquí en cuanto su asesor los prepare.",
    dates: "Fechas",
    duree: "Duración",
    voyageurs: "Viajeros",
    seConnecter: "Iniciar sesión",
    creerMonEspace: "Crear mi cuenta",
    adresseEmail: "Correo electrónico",
    exempleEmail: "usted@ejemplo.com",
    motDePasse: "Contraseña",
    confirmerMotDePasse: "Confirmar la contraseña",
    motDePasseActuel: "Contraseña actual",
    nouveauMotDePasse: "Nueva contraseña",
    confirmer: "Confirmar",
    enregistrer: "Guardar",
    changerMotDePasse: "Cambiar la contraseña",
    indiceEmail: "Para cambiar su correo electrónico, escriba a su asesor.",
    sejourConcerne: "Viaje al que se refiere",
    questionGenerale: "Consulta general",
    votreMessage: "Su mensaje",
    envoyer: "Enviar",
    exempleMessage: "Hola, me gustaría saber si…",
  },
  credits: {
    eyebrow: "Atribuciones",
    titre: "Créditos fotográficos",
    pageWikimedia: "Página de Wikimedia Commons →",
    texteLicence: "Texto de la licencia →",
  },

  introuvable: {
    code: "Error 404",
    titre: "Página no encontrada",
    texte: "Esta página no existe o se ha movido. Volvamos sobre nuestros pasos.",
    retour: "Volver al inicio",
    contact: "Contactar",
  },
};

const de: Ui = {
  langue: { choisir: "Sprache wechseln" },

  entete: {
    espaceClient: "Kundenbereich",
    ouvrirMenu: "Menü öffnen",
    fermerMenu: "Menü schließen",
    retourAccueil: "RDR Services — zurück zur Startseite",
  },

  pied: {
    mentions: "Impressum",
    confidentialite: "Datenschutz",
    credits: "Bildnachweise",
  },

  heros: { sectionSuivante: "Zum nächsten Abschnitt", paysage: "Landschaft" },

  services: {
    eyebrow: "Ein einziger Ansprechpartner",
    titre: "Vier Handwerke",
    description:
      "Vom Tagesausflug bis zur dreiwöchigen Reise läuft alles über dieselbe Person. Sie müssen Ihr Anliegen nie zweimal erklären.",
    voirPlus: "Mehr sehen",
  },

  destinations: {
    eyebrow: "Fünf Regionen des Südwestens",
    titre: "Reiseziele",
    description:
      "Jede hier gezeigte Route ist ein Ausgangspunkt. Wir arbeiten sie vollständig um, nach Ihren Wünschen, Ihrem Tempo und der Jahreszeit.",
    decouvrir: "Entdecken",
  },

  apropos: { eyebrow: "Unsere Geschichte", titre: "Über uns" },

  etapes: { eyebrow: "Von der ersten Idee bis zur Abreise", titre: "So läuft es ab" },

  temoignages: {
    eyebrow: "Stimmen",
    titre: "Sie haben uns ihre Reise anvertraut",
  },

  faq: {
    eyebrow: "Häufige Fragen",
    titre: "Was man uns fragt",
    relance:
      "Ihre Frage steht nicht dabei? Schreiben Sie uns, wir antworten binnen 24 Stunden.",
  },

  contact: {
    eyebrow: "Angebot anfragen",
    titre: "Sprechen wir über Ihre Reise",
    description:
      "Je genauer Sie sind, desto treffender ist unser Vorschlag beim ersten Mal. Antwort binnen 24 Werkstunden.",
    joindre: "Direkter Kontakt",
    telephone: "Telefon",
    email: "E-Mail",
    bureau: "Büro",
    disponibilite: "Erreichbarkeit",
    horaires: "Montag bis Samstag, 9 bis 19 Uhr",
    assistance: "Rund um die Uhr erreichbar während Ihres Aufenthalts",
    nousContacter: "Kontakt aufnehmen",
  },

  region: {
    activitesEyebrow: "Vor Ort",
    activitesTitre: "Einige Vorschläge",
    activitesDescription:
      "Zum Einbauen in Ihr Programm, je nach Lust und Wetter. Alles wird für Sie reserviert und organisiert.",
    voir: "Ansehen",
    experiencesEyebrow: "Dort, mit uns",
    experiencesTitre: "Besondere Erlebnisse",
    experiencesDescription:
      "Diese Momente lassen sich nicht online buchen: sie beruhen auf über Jahre gewachsenen Beziehungen.",
  },

  destination: {
    ideesEyebrow: "Höhepunkte",
    ideesTitre: "Einige Ideen",
    ideesDescription:
      "Die Momente, die die Reise ausmachen, und die Unternehmungen, die sich je nach Lust und Wetter einfügen lassen. Alles wird für Sie reserviert und organisiert.",
    dureeConseillee: "Empfohlene Dauer",
    meilleureSaison: "Beste Zeit",
    format: "Form",
    privatif: "Vollständig privat",
    itineraireEyebrow: "Vorgeschlagene Route",
    itineraireTitre: "Ein Beispiel,",
    itineraireAccent: "keine Formel",
    itineraireDescription:
      "So verläuft eine typische Reise. Ihre wird nach unserem ersten Gespräch von Grund auf neu zusammengestellt.",
    autresEyebrow: "Weiter",
    autresTitre: "Die anderen Regionen",
    ctaTitre: "Ihre Reise gestalten:",
    ctaDescription:
      "Nennen Sie uns Ihre Daten, die Zahl der Reisenden und was Sie reizt. Wir melden uns binnen 72 Stunden mit einem vollständigen Programm.",
  },

  chat: {
    lanceur: "Eine Frage?",
    lanceurTitre: "Klicken zum Öffnen — nach oben oder unten ziehen, um die Schaltfläche zu verschieben",
    lanceurAria:
      "Gespräch öffnen. Ziehen Sie die Schaltfläche oder verwenden Sie die Pfeiltasten nach oben und unten, um sie zu verschieben.",
    poigneeTitre: "Nach oben oder unten ziehen, um das Fenster zu verschieben",
    dialogue: "Sprechen mit",
    reponse: "Antwort binnen 24 Werkstunden",
    fermer: "Gespräch schließen",
    ongletQuestions: "Häufige Fragen",
    ongletProjet: "Ihr Vorhaben",
    appeler: "Anrufen",
    ecrire: "E-Mail schreiben",
    amorce:
      "Sagen Sie uns, wohin Sie möchten, wann und zu wievielt. Je genauer, desto treffender ist unser Vorschlag beim ersten Mal.",
    accueilQuestions:
      "Guten Tag. Das wird uns am häufigsten gefragt. Steht Ihre Frage nicht dabei, wechseln Sie zum Reiter",
  },

  formulaire: {
    prenom: "Vorname",
    nom: "Nachname",
    email: "E-Mail",
    telephone: "Telefon",
    destination: "Gewünschtes Reiseziel",
    inconnu: "Weiß ich noch nicht",
    plusieurs: "Mehrere Regionen",
    evenement: "Privater Anlass / Klausurtagung",
    depart: "Ungefähres Abreisedatum",
    voyageurs: "Zahl der Reisenden",
    budget: "Vorgesehenes Budget",
    preciserPlusTard: "Später festlegen",
    projet: "Ihr Vorhaben",
    exemple:
      "Wir sind zwei Paare und möchten im September vier Tage lang die klassifizierten Gewächse des Médoc entdecken …",
    envoyer: "Anfrage senden",
    budgets: [
      "Unter 3.000 €",
      "3.000 – 6.000 €",
      "6.000 – 12.000 €",
      "12.000 – 25.000 €",
      "Über 25.000 €",
    ],
    sujet: "Angebotsanfrage",
    ligneProjet: "Vorhaben:",
    dateDepart: "Abreisedatum",
    indiceDepart: "Ein ungefähres Datum genügt.",
    indiceProjet: "Wer reist, was Sie reizt, was Sie vermeiden möchten.",
    messagerieOuverte:
      "Ihr E-Mail-Programm sollte sich mit der bereits ausgefüllten Anfrage öffnen. Andernfalls schreiben Sie uns direkt.",
    messagerieAvant:
      "Die Schaltfläche öffnet Ihr E-Mail-Programm mit der bereits verfassten Anfrage.",
    ecrireSoiMeme: "Lieber selbst schreiben?",
  },


  portail: {
    tableauDeBord: "Übersicht",
    mesSejours: "Meine Reisen",
    documents: "Unterlagen",
    messages: "Nachrichten",
    monProfil: "Mein Profil",
  },

  espace: {
    titre: "Kundenbereich",
    bonRetour: "Willkommen zurück",
    creerEspace: "Konto anlegen",
    deconnexion: "Abmelden",
    prochainsSejours: "Ihre nächsten Reisen",
    toutVoir: "Alle ansehen →",
    documentsRecents: "Neueste Unterlagen",
    tousDocuments: "Alle Ihre Unterlagen",
    ouvrir: "Öffnen",
    aucunSejour: "Keine Reise geplant",
    aucunSejourTexte:
      "Sobald ein Angebot für Sie erstellt wird, erscheint es hier mit Programm, Unterlagen und Stand der Dinge.",
    aucunDocument: "Keine Unterlagen",
    aucunDocumentTexte:
      "Ihre Reiseunterlagen erscheinen hier, während Ihre Reise Gestalt annimmt.",
    messages: "Nachrichten",
    nouveauMessage: "Neue Nachricht",
    mesInformations: "Meine Angaben",
    securite: "Sicherheit",
    reglement: "Zahlung",
    progressionReglement: "Stand der Zahlung",
    noteConseiller: "Hinweis Ihres Beraters",
    documentsSejour: "Unterlagen zu dieser Reise",
    aucunDocumentSejour: "Für diese Reise wurde noch keine Unterlage hinterlegt.",
    questionSejour: "Eine Frage zu dieser Reise?",
    ecrireConseiller: "An meinen Berater schreiben",
    sejoursAVenir: "Kommende Reisen",
    historique: "Frühere Reisen",
    aucunSejourAVenir: "Keine kommende Reise",
    aucunSejourAVenirTexte:
      "Ihre Angebote und bestätigten Reisen erscheinen hier, sobald Ihr Berater sie erstellt hat.",
    dates: "Daten",
    duree: "Dauer",
    voyageurs: "Reisende",
    seConnecter: "Anmelden",
    creerMonEspace: "Mein Konto anlegen",
    adresseEmail: "E-Mail-Adresse",
    exempleEmail: "sie@beispiel.de",
    motDePasse: "Passwort",
    confirmerMotDePasse: "Passwort bestätigen",
    motDePasseActuel: "Aktuelles Passwort",
    nouveauMotDePasse: "Neues Passwort",
    confirmer: "Bestätigen",
    enregistrer: "Speichern",
    changerMotDePasse: "Passwort ändern",
    indiceEmail: "Um Ihre E-Mail-Adresse zu ändern, schreiben Sie Ihrem Berater.",
    sejourConcerne: "Betroffene Reise",
    questionGenerale: "Allgemeine Frage",
    votreMessage: "Ihre Nachricht",
    envoyer: "Senden",
    exempleMessage: "Guten Tag, ich würde gern wissen, ob …",
  },
  credits: {
    eyebrow: "Nachweise",
    titre: "Bildnachweise",
    pageWikimedia: "Seite bei Wikimedia Commons →",
    texteLicence: "Lizenztext →",
  },

  introuvable: {
    code: "Fehler 404",
    titre: "Seite nicht gefunden",
    texte: "Diese Seite gibt es nicht oder sie wurde verschoben. Gehen wir zurück.",
    retour: "Zurück zur Startseite",
    contact: "Kontakt aufnehmen",
  },
};

const it: Ui = {
  langue: { choisir: "Cambia lingua" },

  entete: {
    espaceClient: "Area riservata",
    ouvrirMenu: "Apri il menu",
    fermerMenu: "Chiudi il menu",
    retourAccueil: "RDR Services — torna alla home",
  },

  pied: {
    mentions: "Note legali",
    confidentialite: "Privacy",
    credits: "Crediti fotografici",
  },

  heros: { sectionSuivante: "Vai alla sezione successiva", paysage: "Paesaggio" },

  services: {
    eyebrow: "Un solo interlocutore",
    titre: "Quattro mestieri",
    description:
      "Dalla giornata di escursione al viaggio di tre settimane, tutto passa dalla stessa persona. Non dovrete mai rispiegare la vostra pratica.",
    voirPlus: "Vedi di più",
  },

  destinations: {
    eyebrow: "Cinque territori del Sud-Ovest",
    titre: "Destinazioni",
    description:
      "Ogni itinerario qui presentato è un punto di partenza. Lo rielaboriamo interamente secondo i vostri desideri, il vostro ritmo e la stagione.",
    decouvrir: "Scopri",
  },

  apropos: { eyebrow: "La nostra storia", titre: "Chi siamo" },

  etapes: { eyebrow: "Dalla prima idea alla partenza", titre: "Come funziona" },

  temoignages: {
    eyebrow: "Testimonianze",
    titre: "Ci hanno affidato il loro viaggio",
  },

  faq: {
    eyebrow: "Domande frequenti",
    titre: "Quello che ci chiedono",
    relance:
      "Una domanda che non trovate qui? Scriveteci, rispondiamo entro 24 ore.",
  },

  contact: {
    eyebrow: "Richiesta di preventivo",
    titre: "Parliamo del vostro viaggio",
    description:
      "Più sarete precisi, più la nostra proposta sarà giusta al primo colpo. Risposta entro 24 ore lavorative.",
    joindre: "Contatti diretti",
    telephone: "Telefono",
    email: "E-mail",
    bureau: "Ufficio",
    disponibilite: "Disponibilità",
    horaires: "Da lunedì a sabato, 9 – 19",
    assistance: "Assistenza 24 ore su 24 durante il soggiorno",
    nousContacter: "Contattaci",
  },

  region: {
    activitesEyebrow: "Sul posto",
    activitesTitre: "Qualche attività",
    activitesDescription:
      "Da inserire nel vostro programma, secondo la voglia e il meteo. Tutto viene prenotato e organizzato per voi.",
    voir: "Vedi",
    experiencesEyebrow: "Là, con noi",
    experiencesTitre: "Esperienze uniche",
    experiencesDescription:
      "Questi momenti non si prenotano online: si reggono su relazioni costruite negli anni.",
  },

  destination: {
    ideesEyebrow: "Momenti salienti",
    ideesTitre: "Qualche idea",
    ideesDescription:
      "I momenti che fanno il viaggio, e le attività da inserirvi secondo la voglia e il meteo. Tutto viene prenotato e organizzato per voi.",
    dureeConseillee: "Durata consigliata",
    meilleureSaison: "Stagione migliore",
    format: "Formula",
    privatif: "Interamente privato",
    itineraireEyebrow: "Itinerario suggerito",
    itineraireTitre: "Un esempio,",
    itineraireAccent: "non una formula",
    itineraireDescription:
      "Ecco come si svolge un viaggio tipo. Il vostro sarà ricomposto da zero dopo il nostro primo colloquio.",
    autresEyebrow: "Continua",
    autresTitre: "Gli altri territori",
    ctaTitre: "Comporre il vostro viaggio in",
    ctaDescription:
      "Diteci le vostre date, quanti siete e che cosa vi attira. Torniamo da voi entro 72 ore con un programma completo.",
  },

  chat: {
    lanceur: "Una domanda?",
    lanceurTitre: "Clic per aprire — trascinate in alto o in basso per spostare il pulsante",
    lanceurAria:
      "Apri la conversazione. Trascinate il pulsante, o usate le frecce su e giù, per spostarlo.",
    poigneeTitre: "Trascinate in alto o in basso per spostare la finestra",
    dialogue: "Parlare con",
    reponse: "Risposta entro 24 ore lavorative",
    fermer: "Chiudi la conversazione",
    ongletQuestions: "Domande frequenti",
    ongletProjet: "Il vostro progetto",
    appeler: "Chiamare",
    ecrire: "Scrivere un'e-mail",
    amorce:
      "Diteci dove volete andare, quando e in quanti. Più sarete precisi, più la nostra proposta sarà giusta al primo colpo.",
    accueilQuestions:
      "Buongiorno. Ecco che cosa ci chiedono più spesso. Se la vostra domanda non c'è, passate alla scheda",
  },

  formulaire: {
    prenom: "Nome",
    nom: "Cognome",
    email: "E-mail",
    telephone: "Telefono",
    destination: "Destinazione desiderata",
    inconnu: "Non lo so ancora",
    plusieurs: "Più regioni",
    evenement: "Occasione privata / convention",
    depart: "Data di partenza approssimativa",
    voyageurs: "Numero di viaggiatori",
    budget: "Budget previsto",
    preciserPlusTard: "Preciserò più avanti",
    projet: "Il vostro progetto",
    exemple:
      "Siamo due coppie e vorremmo scoprire i grandi cru del Médoc in quattro giorni a settembre…",
    envoyer: "Invia la richiesta",
    budgets: [
      "Meno di 3.000 €",
      "3.000 – 6.000 €",
      "6.000 – 12.000 €",
      "12.000 – 25.000 €",
      "Oltre 25.000 €",
    ],
    sujet: "Richiesta di preventivo",
    ligneProjet: "Progetto:",
    dateDepart: "Data di partenza",
    indiceDepart: "Basta una data indicativa.",
    indiceProjet: "Chi viaggia, che cosa vi attira, che cosa volete evitare.",
    messagerieOuverte:
      "Il vostro programma di posta dovrebbe aprirsi con la richiesta già compilata. In caso contrario, scriveteci direttamente.",
    messagerieAvant:
      "Il pulsante apre il vostro programma di posta con la richiesta già scritta.",
    ecrireSoiMeme: "Preferite scrivere voi?",
  },


  portail: {
    tableauDeBord: "Pannello",
    mesSejours: "I miei viaggi",
    documents: "Documenti",
    messages: "Messaggi",
    monProfil: "Il mio profilo",
  },

  espace: {
    titre: "Area riservata",
    bonRetour: "Bentornato",
    creerEspace: "Crea il tuo account",
    deconnexion: "Esci",
    prochainsSejours: "I vostri prossimi viaggi",
    toutVoir: "Vedi tutto →",
    documentsRecents: "Documenti recenti",
    tousDocuments: "Tutti i vostri documenti",
    ouvrir: "Apri",
    aucunSejour: "Nessun viaggio in programma",
    aucunSejourTexte:
      "Non appena vi verrà preparato un preventivo, comparirà qui con il suo programma, i documenti e lo stato di avanzamento.",
    aucunDocument: "Nessun documento",
    aucunDocumentTexte:
      "I vostri documenti di viaggio compariranno qui man mano che il soggiorno prende forma.",
    messages: "Messaggi",
    nouveauMessage: "Nuovo messaggio",
    mesInformations: "I miei dati",
    securite: "Sicurezza",
    reglement: "Pagamento",
    progressionReglement: "Stato del pagamento",
    noteConseiller: "Nota del vostro consulente",
    documentsSejour: "Documenti del viaggio",
    aucunDocumentSejour: "Per questo viaggio non è ancora stato caricato alcun documento.",
    questionSejour: "Una domanda su questo viaggio?",
    ecrireConseiller: "Scrivere al mio consulente",
    sejoursAVenir: "Prossimi viaggi",
    historique: "Storico",
    aucunSejourAVenir: "Nessun viaggio in arrivo",
    aucunSejourAVenirTexte:
      "I vostri preventivi e i viaggi confermati compariranno qui non appena il vostro consulente li avrà preparati.",
    dates: "Date",
    duree: "Durata",
    voyageurs: "Viaggiatori",
    seConnecter: "Accedi",
    creerMonEspace: "Crea il mio account",
    adresseEmail: "Indirizzo e-mail",
    exempleEmail: "tu@esempio.it",
    motDePasse: "Password",
    confirmerMotDePasse: "Conferma la password",
    motDePasseActuel: "Password attuale",
    nouveauMotDePasse: "Nuova password",
    confirmer: "Conferma",
    enregistrer: "Salva",
    changerMotDePasse: "Cambia la password",
    indiceEmail: "Per modificare il vostro indirizzo e-mail, scrivete al vostro consulente.",
    sejourConcerne: "Viaggio interessato",
    questionGenerale: "Domanda generale",
    votreMessage: "Il vostro messaggio",
    envoyer: "Invia",
    exempleMessage: "Buongiorno, vorrei sapere se…",
  },
  credits: {
    eyebrow: "Attribuzioni",
    titre: "Crediti fotografici",
    pageWikimedia: "Pagina Wikimedia Commons →",
    texteLicence: "Testo della licenza →",
  },

  introuvable: {
    code: "Errore 404",
    titre: "Pagina non trovata",
    texte: "Questa pagina non esiste o è stata spostata. Torniamo sui nostri passi.",
    retour: "Torna alla home",
    contact: "Contattaci",
  },
};

const dictionnaires: Record<Langue, Ui> = { fr, en, es, de, it };

export function ui(langue: Langue): Ui {
  return dictionnaires[langue];
}

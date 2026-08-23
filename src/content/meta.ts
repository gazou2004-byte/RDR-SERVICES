/**
 * Les métadonnées de la page d'accueil, par langue, et le calcul des liens
 * « cette page existe aussi dans ces langues » que lisent les moteurs.
 */

import { LANGUES, lien, type Langue } from "./langue";

type Meta = { titreSuffixe: string; description: string; motsCles: string[] };

export const META: Record<Langue, Meta> = {
  fr: {
    titreSuffixe: "dans le Sud-Ouest",
    description:
      "Conciergerie de voyage haut de gamme dans le Sud-Ouest : séjours privés sur mesure, grands crus du Bordelais, Périgord, Landes, Pyrénées-Atlantiques et Gascogne, transport VIP avec chauffeur dédié.",
    motsCles: [
      "conciergerie",
      "voyage privé",
      "Sud-Ouest",
      "Bordeaux",
      "Médoc",
      "Périgord",
      "chauffeur privé",
      "œnotourisme",
    ],
  },
  en: {
    titreSuffixe: "in South-West France",
    description:
      "A luxury travel concierge in South-West France: bespoke private journeys, the classified growths of Bordeaux, the Périgord, the Landes, the Basque Country and Gascony, with a dedicated private driver.",
    motsCles: [
      "concierge",
      "private travel",
      "South-West France",
      "Bordeaux",
      "Médoc",
      "Périgord",
      "private driver",
      "wine tourism",
    ],
  },
  es: {
    titreSuffixe: "en el Suroeste de Francia",
    description:
      "Conserjería de viajes de alta gama en el Suroeste de Francia: estancias privadas a medida, grandes crus del Bordelés, Périgord, Landas, País Vasco y Gascuña, con chófer privado dedicado.",
    motsCles: [
      "conserjería",
      "viaje privado",
      "Suroeste de Francia",
      "Burdeos",
      "Médoc",
      "Périgord",
      "chófer privado",
      "enoturismo",
    ],
  },
  de: {
    titreSuffixe: "in Südwestfrankreich",
    description:
      "Gehobener Reise-Concierge in Südwestfrankreich: maßgeschneiderte private Reisen, klassifizierte Gewächse des Bordelais, Périgord, Landes, Baskenland und Gascogne, mit eigenem Fahrer.",
    motsCles: [
      "Concierge",
      "private Reisen",
      "Südwestfrankreich",
      "Bordeaux",
      "Médoc",
      "Périgord",
      "privater Fahrer",
      "Weintourismus",
    ],
  },
  it: {
    titreSuffixe: "nel Sud-Ovest della Francia",
    description:
      "Concierge di viaggio di alta gamma nel Sud-Ovest della Francia: soggiorni privati su misura, grandi cru del Bordolese, Périgord, Landes, Paesi Baschi e Guascogna, con autista privato dedicato.",
    motsCles: [
      "concierge",
      "viaggio privato",
      "Sud-Ovest della Francia",
      "Bordeaux",
      "Médoc",
      "Périgord",
      "autista privato",
      "enoturismo",
    ],
  },
};

/** Les codes que réclame la balise `og:locale`. */
export const LOCALE_OG: Record<Langue, string> = {
  fr: "fr_FR",
  en: "en_GB",
  es: "es_ES",
  de: "de_DE",
  it: "it_IT",
};

/**
 * Déclare aux moteurs que la même page existe dans les cinq langues, et
 * laquelle servir quand aucune ne correspond. Sans ces liens, les versions se
 * feraient concurrence entre elles.
 */
export function equivalents(langue: Langue, chemin: string) {
  return {
    canonical: lien(langue, chemin),
    languages: {
      ...Object.fromEntries(LANGUES.map((l) => [l, lien(l, chemin)])),
      "x-default": lien("fr", chemin),
    },
  };
}

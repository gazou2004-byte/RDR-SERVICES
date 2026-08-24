/**
 * Le contenu du site, dans l'une des cinq langues.
 *
 * Le français vit dans `site.ts`, les autres dans `en.ts`, `es.ts`, `de.ts` et
 * `it.ts`, tous avec les mêmes clés. `Contenu` — la forme du français — sert
 * de contrat : si l'un des quatre oublie un champ ou en change le type, la
 * compilation échoue ici même.
 *
 * Ce fichier charge les cinq dictionnaires : ne l'importe que depuis un
 * composant serveur. Côté navigateur, passe par `langue.ts`, qui n'en charge
 * aucun.
 */

import * as fr from "./site";
import * as en from "./en";
import * as es from "./es";
import * as de from "./de";
import * as it from "./it";
import type { Langue } from "./langue";

export type Contenu = typeof fr;

const dictionnaires: Record<Langue, Contenu> = { fr, en, es, de, it };

export function contenu(langue: Langue): Contenu {
  return dictionnaires[langue];
}

export {
  DRAPEAU,
  LANGUES,
  LANGUES_PREFIXEES,
  LANGUE_RACINE,
  NOM_LANGUE,
  cheminDansLangue,
  estLangue,
  lien,
  lienEspaceClient,
  separer,
} from "./langue";
export type { Langue } from "./langue";

/**
 * Le contenu du site, dans l'une ou l'autre langue.
 *
 * Le français vit dans `site.ts`, l'anglais dans `en.ts`, tous deux avec les
 * mêmes clés. `Contenu` — la forme du français — sert de contrat : si `en.ts`
 * oublie un champ ou en change le type, la compilation échoue ici même.
 *
 * Ce fichier charge les deux dictionnaires : ne l'importe que depuis un
 * composant serveur. Côté navigateur, passe par `langue.ts`, qui n'en charge
 * aucun.
 */

import * as fr from "./site";
import * as en from "./en";

export type Contenu = typeof fr;

export function contenu(langue: Langue): Contenu {
  return langue === "en" ? en : fr;
}

export { LANGUES, autreLangue, estLangue, lien } from "./langue";
export type { Langue } from "./langue";

import type { Langue } from "./langue";

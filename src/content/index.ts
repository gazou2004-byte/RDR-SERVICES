/**
 * Le contenu du site, dans l'une ou l'autre langue.
 *
 * Le français vit dans `site.ts`, l'anglais dans `en.ts`, tous deux avec les
 * mêmes clés. `contenu(langue)` renvoie l'un ou l'autre, et `Contenu` — la
 * forme du français — sert de contrat : si `en.ts` oublie un champ ou en
 * change le type, la compilation échoue ici même.
 *
 * Le français n'a pas de préfixe dans l'adresse, l'anglais vit sous `/en`.
 * C'est `lien()` qui s'en occupe, pour que les deux fichiers de contenu
 * puissent écrire les mêmes adresses.
 */

import * as fr from "./site";
import * as en from "./en";

export type Langue = "fr" | "en";

/** Dans l'ordre où le sélecteur les affiche. */
export const LANGUES: Langue[] = ["fr", "en"];

export type Contenu = typeof fr;

export function contenu(langue: Langue): Contenu {
  return langue === "en" ? en : fr;
}

/** `true` si le segment d'adresse désigne une langue connue. */
export function estLangue(valeur: string): valeur is Langue {
  return (LANGUES as string[]).includes(valeur);
}

/**
 * Adresse d'une page dans une langue donnée.
 *
 *   lien("fr", "/#services")            → "/#services"
 *   lien("en", "/#services")            → "/en/#services"
 *   lien("en", "/destinations/landes")  → "/en/destinations/landes"
 *
 * Les adresses extérieures et les ancres nues passent sans être touchées.
 */
export function lien(langue: Langue, href: string): string {
  if (langue === "fr") return href;
  if (!href.startsWith("/")) return href;
  return href === "/" ? "/en/" : `/en${href}`;
}

/** L'autre langue — le sélecteur n'en propose que deux. */
export function autreLangue(langue: Langue): Langue {
  return langue === "fr" ? "en" : "fr";
}

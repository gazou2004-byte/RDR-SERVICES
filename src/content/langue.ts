/**
 * La langue d'une page, et le calcul des adresses.
 *
 * Ce fichier est volontairement séparé de `index.ts` : il ne charge aucun
 * dictionnaire. Les composants qui tournent dans le navigateur peuvent donc
 * l'importer sans embarquer au passage les deux versions du contenu.
 */

export type Langue = "fr" | "en";

/** Dans l'ordre où le sélecteur les affiche. */
export const LANGUES: Langue[] = ["fr", "en"];

/** `true` si la valeur désigne une langue connue. */
export function estLangue(valeur: string): valeur is Langue {
  return (LANGUES as string[]).includes(valeur);
}

/**
 * Adresse d'une page dans une langue donnée. Le français n'a pas de préfixe,
 * l'anglais vit sous `/en`.
 *
 *   lien("fr", "/#services")            → "/#services"
 *   lien("en", "/#services")            → "/en/#services"
 *   lien("en", "/destinations/landes")  → "/en/destinations/landes"
 *
 * Les adresses extérieures passent sans être touchées.
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

/**
 * La même page, dans l'autre langue.
 *
 *   "/"                       + fr → "/en/"
 *   "/destinations/landes"    + fr → "/en/destinations/landes"
 *   "/en/credits"             + en → "/credits"
 *
 * `chemin` est l'adresse telle que la voit le navigateur, sans le préfixe du
 * dépôt : Next le retire déjà de `usePathname()`.
 */
export function cheminAutreLangue(chemin: string, langue: Langue): string {
  if (langue === "fr") return chemin === "/" ? "/en/" : `/en${chemin}`;
  const sans = chemin.replace(/^\/en(?=\/|$)/, "");
  return sans === "" ? "/" : sans;
}

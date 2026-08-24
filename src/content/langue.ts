/**
 * La langue d'une page, et le calcul des adresses.
 *
 * Ce fichier est volontairement séparé de `index.ts` : il ne charge aucun
 * dictionnaire. Les composants qui tournent dans le navigateur peuvent donc
 * l'importer sans embarquer au passage les cinq versions du contenu.
 */

export type Langue = "fr" | "en" | "es" | "de" | "it";

/** Dans l'ordre où le sélecteur les affiche. */
export const LANGUES: Langue[] = ["fr", "en", "es", "de", "it"];

/**
 * Le français vit à la racine du site, les autres langues sous leur code.
 * C'est ce qui permet de garder l'adresse d'origine intacte.
 */
export const LANGUE_RACINE: Langue = "fr";

/** Les langues qui ont un préfixe dans l'adresse — tout sauf le français. */
export const LANGUES_PREFIXEES = LANGUES.filter((l) => l !== LANGUE_RACINE);

/** Le nom de chaque langue, écrit dans cette langue. */
export const NOM_LANGUE: Record<Langue, string> = {
  fr: "Français",
  en: "English",
  es: "Español",
  de: "Deutsch",
  it: "Italiano",
};

/** Le drapeau de chaque langue, pour le sélecteur. */
export const DRAPEAU: Record<Langue, string> = {
  fr: "🇫🇷",
  en: "🇬🇧",
  es: "🇪🇸",
  de: "🇩🇪",
  it: "🇮🇹",
};

/** `true` si la valeur désigne une langue connue. */
export function estLangue(valeur: string): valeur is Langue {
  return (LANGUES as string[]).includes(valeur);
}

/**
 * Adresse d'une page dans une langue donnée.
 *
 *   lien("fr", "/#services")            → "/#services"
 *   lien("es", "/#services")            → "/es/#services"
 *   lien("de", "/destinations/landes")  → "/de/destinations/landes"
 *
 * Les adresses extérieures passent sans être touchées.
 */
export function lien(langue: Langue, href: string): string {
  if (langue === LANGUE_RACINE) return href;
  if (!href.startsWith("/")) return href;
  return href === "/" ? `/${langue}/` : `/${langue}${href}`;
}

/**
 * Sépare le préfixe de langue du reste de l'adresse.
 *
 *   "/it/credits"  → { langue: "it", reste: "/credits" }
 *   "/credits"     → { langue: "fr", reste: "/credits" }
 *
 * Aucun chemin du site ne commence par un segment de deux lettres, la
 * confusion est donc impossible.
 */
export function separer(chemin: string): { langue: Langue; reste: string } {
  const trouve = chemin.match(/^\/([a-z]{2})(?=\/|$)/);
  const code = trouve?.[1];
  if (code && estLangue(code) && code !== LANGUE_RACINE) {
    return { langue: code, reste: chemin.slice(3) || "/" };
  }
  return { langue: LANGUE_RACINE, reste: chemin || "/" };
}

/**
 * La même page, dans une autre langue.
 *
 * `chemin` est l'adresse telle que la voit le navigateur, sans le préfixe du
 * dépôt : Next le retire déjà de `usePathname()`.
 */
export function cheminDansLangue(chemin: string, vers: Langue): string {
  return lien(vers, separer(chemin).reste);
}

/**
 * L'espace client fait exception : il vit sous un préfixe de langue même en
 * français. Ses pages sont rendues à la demande — elles ont besoin d'un
 * serveur — et ne sont donc pas dupliquées comme celles du site public.
 */
export function lienEspaceClient(langue: Langue): string {
  return `/${langue}/espace-client`;
}

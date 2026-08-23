import type { MetadataRoute } from "next";
import { destinations } from "@/content/site";
import { LANGUES, lien } from "@/content/langue";

// Requis par l'export statique de la vitrine ; sans effet en mode serveur.
export const dynamic = "force-static";

const BASE_URL = "https://rdr-services.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  // Le site public tient sur une seule page ; seules les destinations
  // et les pages légales ont leur propre adresse.
  const pages = [
    { chemin: "/", priorite: 1 },
    { chemin: "/mentions-legales", priorite: 0.2 },
    { chemin: "/confidentialite", priorite: 0.2 },
    { chemin: "/credits", priorite: 0.1 },
    ...destinations.map((destination) => ({
      chemin: `/destinations/${destination.slug}`,
      priorite: 0.8,
    })),
  ];

  /*
   * Chaque page est déclarée une fois par langue, et chacune renvoie vers ses
   * équivalents. Sans ces renvois, les moteurs voient deux pages proches et
   * en choisissent une au hasard, souvent la mauvaise.
   */
  return pages.flatMap((page) =>
    LANGUES.map((langue) => ({
      url: `${BASE_URL}${lien(langue, page.chemin)}`,
      lastModified: new Date(),
      priority: page.priorite,
      alternates: {
        languages: Object.fromEntries(
          LANGUES.map((autre) => [
            autre,
            `${BASE_URL}${lien(autre, page.chemin)}`,
          ]),
        ),
      },
    })),
  );
}

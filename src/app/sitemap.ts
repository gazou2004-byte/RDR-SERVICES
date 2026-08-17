import type { MetadataRoute } from "next";
import { destinations } from "@/content/site";

// Requis par l'export statique de la vitrine ; sans effet en mode serveur.
export const dynamic = "force-static";

const BASE_URL = "https://rdr-services.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  // Le site public tient sur une seule page ; seules les destinations
  // et les pages légales ont leur propre adresse.
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/mentions-legales", priority: 0.2 },
    { path: "/confidentialite", priority: 0.2 },
    { path: "/credits", priority: 0.1 },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${BASE_URL}${route.path}`,
      lastModified: new Date(),
      priority: route.priority,
    })),
    ...destinations.map((destination) => ({
      url: `${BASE_URL}/destinations/${destination.slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
  ];
}

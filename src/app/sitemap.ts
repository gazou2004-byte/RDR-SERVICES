import type { MetadataRoute } from "next";
import { destinations } from "@/content/site";

// Requis par l'export statique de la vitrine ; sans effet en mode serveur.
export const dynamic = "force-static";

const BASE_URL = "https://rdr-service.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/experiences", priority: 0.9 },
    { path: "/destinations", priority: 0.9 },
    { path: "/a-propos", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
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

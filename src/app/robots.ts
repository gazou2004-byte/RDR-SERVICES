import type { MetadataRoute } from "next";

// Requis par l'export statique de la vitrine ; sans effet en mode serveur.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://rdr-services.fr/sitemap.xml",
  };
}

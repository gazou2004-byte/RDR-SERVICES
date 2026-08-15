import type { NextConfig } from "next";

/*
 * Deux modes de compilation.
 *
 * 1. Normal (`npm run build`) : application complète, espace client inclus.
 *    Nécessite un serveur Node.
 *
 * 2. Vitrine statique (`npm run build:vitrine`) : uniquement le site public,
 *    exporté en fichiers HTML déposables sur n'importe quel hébergeur, dont
 *    GitHub Pages. L'espace client en est absent : il lui faut un serveur.
 *    Le script scripts/build-vitrine.mjs pilote ce mode.
 */
const vitrine = process.env.NEXT_PUBLIC_VITRINE === "1";

// Sur GitHub Pages, le site vit dans un sous-dossier au nom du dépôt.
const basePath = process.env.VITRINE_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(vitrine
    ? {
        output: "export" as const,
        basePath,
        // L'optimisation d'images demande un serveur. En statique, un chargeur
        // maison renvoie le fichier tel quel, en le préfixant du sous-dossier :
        // l'option `unoptimized` seule oublie ce préfixe.
        images: {
          loader: "custom" as const,
          loaderFile: "./src/lib/vitrine-image-loader.ts",
        },
        // GitHub Pages sert /page/index.html plutôt que /page.html
        trailingSlash: true,
      }
    : {}),
  //
  // Note : en mode normal, Next génère les variantes d'image à la première
  // demande. Au tout premier chargement du site après un déploiement, les
  // photos peuvent donc mettre quelques secondes à apparaître, puis elles
  // sont servies depuis le cache. Le script `npm run warm` les génère toutes
  // à l'avance.
  //
};

export default nextConfig;

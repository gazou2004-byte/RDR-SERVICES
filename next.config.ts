import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Toutes les images sont servies depuis /public : aucun domaine externe
  // à autoriser. Si tu passes plus tard par un CDN ou un CMS, déclare-le ici
  // via `images.remotePatterns`.
  //
  // Note : Next génère les variantes d'image à la première demande. Au tout
  // premier chargement du site après un déploiement, les photos peuvent donc
  // mettre quelques secondes à apparaître, puis elles sont servies depuis le
  // cache. Le script `npm run warm` les génère toutes à l'avance.
  //
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Toutes les images sont servies depuis /public : aucun domaine externe
  // à autoriser. Si tu passes plus tard par un CDN ou un CMS, déclare-le ici
  // via `images.remotePatterns`.
};

export default nextConfig;

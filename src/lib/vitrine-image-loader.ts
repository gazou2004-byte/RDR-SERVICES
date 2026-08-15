/**
 * Chargeur d'images de la vitrine statique.
 *
 * Sur GitHub Pages, le site vit dans un sous-dossier au nom du dépôt
 * (/RDR-SERVICE/). Sans ce chargeur, `next/image` demanderait
 * /images/photo.jpg au lieu de /RDR-SERVICE/images/photo.jpg.
 *
 * Les photos de public/images sont déjà calibrées à 2000 px : il n'y a rien
 * à redimensionner, on renvoie simplement le fichier tel quel.
 */
export default function vitrineImageLoader({ src }: { src: string }) {
  const base = process.env.NEXT_PUBLIC_VITRINE_BASE_PATH ?? "";
  return `${base}${src}`;
}

/**
 * Chargeur d'images de la vitrine statique.
 *
 * Le préfixe est vide sur le dépôt <compte>.github.io, qui sert le site à la
 * racine. Il vaut /nom-du-depot/ partout ailleurs, et sans ce chargeur
 * `next/image` demanderait /images/photo.jpg au lieu de
 * /nom-du-depot/images/photo.jpg.
 *
 * Les photos de public/images sont déjà calibrées à 2000 px : il n'y a rien
 * à redimensionner, on renvoie simplement le fichier tel quel.
 */
export default function vitrineImageLoader({ src }: { src: string }) {
  const base = process.env.NEXT_PUBLIC_VITRINE_BASE_PATH ?? "";
  return `${base}${src}`;
}

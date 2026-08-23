import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "feuille" | "outline" | "light" | "ghost";
type Taille = "normal" | "compact";

const base =
  "inline-flex items-center justify-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.2em] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tuile-600";

/*
 * Les marges intérieures sont sorties des variantes : le bandeau d'appel a
 * besoin d'un bouton plus bas que les autres, et une classe ajoutée après coup
 * n'aurait pas gagné à coup sûr contre celle de la variante.
 */
const tailles: Record<Taille, string> = {
  normal: "px-8 py-4",
  compact: "px-6 py-2.5",
};

const variants: Record<Variant, string> = {
  // Fond aubergine, texte clair — l'action principale
  primary:
    "bg-tuile-600 text-sand-50 hover:bg-tuile-700 hover:shadow-[0_12px_32px_-14px] hover:shadow-tuile-700",
  // Fond vert de feuille : réservé aux fonds vin, où le bouton vin
  // ne se détacherait pas assez. Le vert est clair et le texte sombre : en
  // vert soutenu sur texte aubergine, le contraste tombait à 3,1:1.
  feuille: "bg-feuille-300 text-vine-900 hover:bg-feuille-400",
  // Contour discret sur fond clair
  outline:
    "border border-vine-900/25 text-vine-800 hover:border-tuile-600 hover:text-tuile-600",
  // Contour clair, à poser sur les fonds sombres (bandeau d'appel, images)
  light:
    "border border-sand-50/45 text-sand-50 hover:border-sand-50 hover:bg-sand-50 hover:text-vine-900",
  ghost: "px-2 py-1 text-tuile-600 hover:text-tuile-700",
};

export function Button({
  variant = "primary",
  taille = "normal",
  className = "",
  children,
  ...props
}: ComponentProps<"button"> & {
  variant?: Variant;
  taille?: Taille;
  children: ReactNode;
}) {
  // `ghost` porte ses propres marges : c'est un lien, pas un bouton plein.
  const marges = variant === "ghost" ? "" : tailles[taille];
  return (
    <button className={`${base} ${marges} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  taille = "normal",
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link> & {
  variant?: Variant;
  taille?: Taille;
  children: ReactNode;
}) {
  const marges = variant === "ghost" ? "" : tailles[taille];
  return (
    <Link className={`${base} ${marges} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

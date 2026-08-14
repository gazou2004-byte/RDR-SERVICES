import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "gold" | "outline" | "light" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.2em] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tuile-600";

const variants: Record<Variant, string> = {
  // Fond terre cuite, texte clair — l'action principale
  primary:
    "bg-tuile-600 px-8 py-4 text-sand-50 hover:bg-tuile-700 hover:shadow-[0_12px_32px_-14px] hover:shadow-tuile-700",
  // Fond doré : réservé aux fonds terre cuite, où le bouton terre cuite
  // ne se détacherait pas assez
  gold: "bg-gold-500 px-8 py-4 text-tuile-800 hover:bg-gold-400",
  // Contour discret sur fond clair
  outline:
    "border border-vine-900/25 px-8 py-4 text-vine-800 hover:border-tuile-600 hover:text-tuile-600",
  // Contour clair, à poser sur les fonds sombres (bandeau d'appel, images)
  light:
    "border border-sand-50/45 px-8 py-4 text-sand-50 hover:border-sand-50 hover:bg-sand-50 hover:text-vine-900",
  ghost: "px-2 py-1 text-tuile-600 hover:text-tuile-700",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ComponentProps<"button"> & { variant?: Variant; children: ReactNode }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; children: ReactNode }) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

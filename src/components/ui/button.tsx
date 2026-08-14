import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "light" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.2em] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-600";

const variants: Record<Variant, string> = {
  // Fond doré, texte sable — l'action principale
  primary:
    "bg-gold-600 px-8 py-4 text-sand-50 hover:bg-gold-700 hover:shadow-[0_12px_32px_-14px] hover:shadow-gold-600",
  // Contour discret sur fond clair
  outline:
    "border border-vine-900/25 px-8 py-4 text-vine-800 hover:border-gold-600 hover:text-gold-600",
  // Contour clair, à poser sur les fonds sombres (bandeau d'appel, images)
  light:
    "border border-sand-50/45 px-8 py-4 text-sand-50 hover:border-sand-50 hover:bg-sand-50 hover:text-vine-900",
  ghost: "px-2 py-1 text-gold-600 hover:text-gold-700",
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

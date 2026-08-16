import Link from "next/link";

export function Logo({
  className = "",
  tone = "dark",
}: {
  className?: string;
  /** `light` sur les fonds sombres (pied de page), `dark` partout ailleurs. */
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      className={`group flex items-baseline gap-2.5 py-1.5 ${className}`}
      aria-label="RDR Services — retour à l'accueil"
    >
      <span
        className={`font-display text-2xl leading-none font-medium tracking-[0.12em] transition-colors ${
          tone === "light"
            ? "text-sand-50 group-hover:text-gold-400"
            : "text-vine-900 group-hover:text-tuile-600"
        }`}
      >
        RDR
      </span>
      <span
        className={`text-[0.6rem] leading-none font-medium tracking-[0.34em] uppercase ${
          tone === "light" ? "text-gold-400" : "text-gold-600"
        }`}
      >
        Services
      </span>
    </Link>
  );
}

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
      className={`group flex items-baseline gap-2.5 ${className}`}
      aria-label="RDR Service — retour à l'accueil"
    >
      <span
        className={`font-display text-2xl leading-none font-medium tracking-[0.12em] transition-colors ${
          tone === "light"
            ? "text-stone-50 group-hover:text-ochre-500"
            : "text-vine-900 group-hover:text-wine-600"
        }`}
      >
        RDR
      </span>
      <span
        className={`text-[0.6rem] leading-none font-medium tracking-[0.34em] uppercase ${
          tone === "light" ? "text-ochre-500" : "text-wine-600"
        }`}
      >
        Service
      </span>
    </Link>
  );
}

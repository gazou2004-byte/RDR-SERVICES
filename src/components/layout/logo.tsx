import Link from "next/link";

export function Logo({
  className = "",
  tone = "dark",
  taille = "normal",
}: {
  className?: string;
  /** `light` sur les fonds sombres (pied de page), `dark` partout ailleurs. */
  tone?: "dark" | "light";
  /** `petit` dans le pied de page, dont toute la ligne fait la hauteur du logo. */
  taille?: "normal" | "petit";
}) {
  const petit = taille === "petit";

  return (
    <Link
      href="/"
      className={`group flex items-baseline ${petit ? "gap-2 py-0" : "gap-2.5 py-1.5"} ${className}`}
      aria-label="RDR Services — retour à l'accueil"
    >
      <span
        className={`font-display ${petit ? "text-lg" : "text-2xl"} leading-none font-medium tracking-[0.12em] transition-colors ${
          tone === "light"
            ? "text-sand-50 group-hover:text-feuille-400"
            : "text-vine-900 group-hover:text-tuile-600"
        }`}
      >
        RDR
      </span>
      <span
        className={`${petit ? "text-[0.6rem]" : "text-[0.72rem]"} leading-none font-medium tracking-[0.28em] uppercase ${
          tone === "light" ? "text-feuille-400" : "text-feuille-600"
        }`}
      >
        Services
      </span>
    </Link>
  );
}

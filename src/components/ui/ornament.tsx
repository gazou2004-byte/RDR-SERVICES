/**
 * Ornement en hachures vertes, posé au-dessus des titres de section.
 * Rappelle les rangs de vigne vus de loin.
 */
export function Ornament({
  className = "",
  tone = "dark",
}: {
  className?: string;
  /** `light` sur les fonds sombres. */
  tone?: "dark" | "light";
}) {
  // Le vert de feuille de vigne, pris dans la palette plutôt qu'en dur.
  const stroke =
    tone === "light" ? "var(--color-feuille-400)" : "var(--color-feuille-600)";

  return (
    <svg
      aria-hidden
      viewBox="0 0 240 20"
      className={`h-4 w-52 ${className}`}
      fill="none"
    >
      {Array.from({ length: 24 }, (_, i) => (
        <line
          key={i}
          x1={i * 10 + 6}
          y1={17}
          x2={i * 10 + 13}
          y2={3}
          stroke={stroke}
          strokeWidth={1.4}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

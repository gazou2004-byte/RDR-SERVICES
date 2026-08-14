/**
 * Ornement en hachures dorées, posé au-dessus des titres de section.
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
  const stroke = tone === "light" ? "#d5bb78" : "#a8862f";

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

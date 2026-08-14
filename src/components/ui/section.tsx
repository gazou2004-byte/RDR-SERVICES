import type { ReactNode } from "react";
import { Ornament } from "./ornament";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Titre de section : ornement doré, grande capitale sérif, filet doré,
 * puis le texte d'introduction. Centré par défaut.
 */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "center",
  tone = "dark",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  const centered = align === "center";
  const light = tone === "light";

  return (
    <div
      className={`reveal ${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      <Ornament
        tone={tone}
        className={centered ? "mx-auto" : ""}
      />

      {eyebrow ? (
        <p className={`mt-7 ${light ? "eyebrow-light" : "eyebrow"}`}>
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={`section-title mt-6 ${light ? "!text-sand-50" : ""}`}
      >
        {title}
        {accent ? (
          <>
            {/* Sur un titre centré, l'accent prend sa propre ligne */}
            {centered ? null : " "}
            <span
              className={`normal-case italic ${centered ? "block" : ""} ${light ? "text-gold-400" : "text-wine-600"}`}
            >
              {accent}
            </span>
          </>
        ) : null}
      </h2>

      <span
        className={`${light ? "rule-gold-light" : "rule-gold"} mt-8 ${centered ? "mx-auto" : ""}`}
      />

      {description ? (
        <p
          className={`mt-8 text-[0.98rem] leading-relaxed ${light ? "text-sand-200" : "text-vine-600"} ${centered ? "mx-auto max-w-2xl" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

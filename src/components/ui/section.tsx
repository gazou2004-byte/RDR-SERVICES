import type { ReactNode } from "react";

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

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <div
      className={`reveal max-w-3xl ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-5 font-display text-4xl leading-[1.1] font-light text-parch-50 sm:text-5xl">
        {title}
        {accent ? (
          <>
            {" "}
            <span className="text-gold-400 italic">{accent}</span>
          </>
        ) : null}
      </h2>
      <span className={`rule-gold mt-7 ${centered ? "mx-auto" : ""}`} />
      {description ? (
        <p className="mt-7 text-[0.98rem] leading-relaxed text-parch-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}

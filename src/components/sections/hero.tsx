import Image from "next/image";
import { hero } from "@/content/site";

/**
 * Héros en quatre panneaux d'images côte à côte, avec le nom de la maison
 * centré par-dessus et un bandeau qui porte la promesse.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Les quatre panneaux */}
      <div className="absolute inset-0 grid grid-cols-2 lg:grid-cols-4">
        {hero.panels.map((panel, index) => (
          <div
            key={panel.image}
            className={`relative overflow-hidden ${
              // Sur mobile, on n'affiche que les deux premiers panneaux
              index > 1 ? "hidden lg:block" : ""
            }`}
          >
            <Image
              src={panel.image}
              alt={`Paysage — ${panel.label}`}
              fill
              priority={index < 2}
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
            {/* Séparation discrète entre les panneaux */}
            <span className="absolute inset-y-0 right-0 w-px bg-sand-50/25" />
          </div>
        ))}
      </div>

      {/* Voile sombre : le titre clair reste lisible sur n'importe quelle photo */}
      <div className="absolute inset-0 bg-vine-900/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-vine-900/55 via-transparent to-vine-900/60" />

      {/* Titre */}
      <div className="relative z-10 w-full px-6 text-center">
        <h1 className="font-display text-[2.6rem] leading-none font-light tracking-[0.1em] text-sand-50 uppercase sm:text-6xl lg:text-[5rem]">
          {hero.title}
        </h1>

        <p className="mx-auto mt-9 inline-block max-w-3xl bg-vine-900/55 px-8 py-4 text-[0.72rem] font-medium tracking-[0.2em] text-sand-50 uppercase backdrop-blur-[2px] sm:text-[0.8rem]">
          {hero.banner}
        </p>
      </div>

      {/* Chevron de défilement */}
      <a
        href="#intro"
        aria-label="Aller à la section suivante"
        className="absolute bottom-28 left-1/2 z-10 -translate-x-1/2 text-sand-50/80 transition-colors hover:text-gold-400"
      >
        <svg
          viewBox="0 0 32 20"
          className="h-5 w-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M2 2l14 12L30 2" strokeLinecap="round" />
        </svg>
      </a>
    </section>
  );
}

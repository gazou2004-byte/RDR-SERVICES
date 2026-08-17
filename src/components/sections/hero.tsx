"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { hero } from "@/content/site";

/**
 * Héros en carrousel : les photos défilent horizontalement derrière le titre.
 *
 * Elles étaient auparavant découpées en quatre bandes verticales côte à côte,
 * ce qui amputait chaque sujet — un château se retrouvait hors cadre. Chaque
 * photo occupe désormais toute la largeur.
 *
 * Le défilement s'arrête si le visiteur a demandé à réduire les animations.
 */
const DUREE = 6000;

export function Hero() {
  const [index, setIndex] = useState(0);
  const total = hero.panels.length;

  useEffect(() => {
    const reduit = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduit.matches) return;

    const minuteur = setInterval(
      () => setIndex((i) => (i + 1) % total),
      DUREE,
    );
    return () => clearInterval(minuteur);
  }, [total]);

  return (
    <section
      id="accueil"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-vine-900"
      aria-roledescription="carrousel"
    >
      {/* La piste glisse d'une photo à l'autre */}
      <div
        className="absolute inset-0 flex transition-transform duration-[1400ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {hero.panels.map((panel, i) => (
          <div key={panel.image} className="relative h-full w-full shrink-0">
            <Image
              src={panel.image}
              alt={`Paysage — ${panel.label}`}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Voile : le titre clair doit tenir sur n'importe quelle photo */}
      <div className="absolute inset-0 bg-vine-900/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-vine-900/55 via-transparent to-vine-900/65" />

      {/* Titre */}
      <div className="relative z-10 w-full px-6 text-center">
        <h1 className="font-display text-[2.05rem] leading-none font-light tracking-[0.08em] text-sand-50 uppercase sm:text-6xl sm:tracking-[0.1em] lg:text-[5rem]">
          {hero.title}
        </h1>

        <p className="mx-auto mt-7 inline-block max-w-3xl bg-vine-900/55 px-5 py-3.5 text-[0.7rem] font-medium tracking-[0.14em] text-sand-50 uppercase backdrop-blur-[2px] sm:mt-9 sm:px-8 sm:py-4 sm:text-[0.8rem] sm:tracking-[0.2em]">
          {hero.banner}
        </p>
      </div>

      {/* Repères de progression */}
      <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {hero.panels.map((panel, i) => (
          <button
            key={panel.image}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Voir ${panel.label}`}
            aria-current={i === index}
            className="flex h-11 w-11 items-center justify-center"
          >
            <span
              className={`block h-px transition-all duration-500 ${
                i === index ? "w-10 bg-sand-50" : "w-5 bg-sand-50/45"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

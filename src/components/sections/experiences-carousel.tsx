"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Container, SectionHeading } from "@/components/ui/section";
import { experiences } from "@/content/site";

/**
 * Les expériences en carrousel plutôt qu'en grille.
 *
 * Six vignettes empilées occupaient près de trois mille pixels sur la page
 * d'accueil ; le carrousel les ramène à un seul écran. Le défilement latéral
 * natif porte le mécanisme : sans JavaScript, on fait défiler au doigt ou à la
 * molette, et les pastilles ne servent que de raccourci.
 */
export function ExperiencesCarousel() {
  const [actif, setActif] = useState(0);

  useEffect(() => {
    const piste = document.getElementById("piste-experiences");
    if (!piste) return;

    // Repère la vignette la plus proche du centre pour allumer la bonne pastille
    const onScroll = () => {
      const centre = piste.scrollLeft + piste.clientWidth / 2;
      const enfants = [...piste.children] as HTMLElement[];
      let proche = 0;
      let ecart = Infinity;
      enfants.forEach((el, i) => {
        const d = Math.abs(el.offsetLeft + el.clientWidth / 2 - centre);
        if (d < ecart) {
          ecart = d;
          proche = i;
        }
      });
      setActif(proche);
    };

    piste.addEventListener("scroll", onScroll, { passive: true });
    return () => piste.removeEventListener("scroll", onScroll);
  }, []);

  function aller(index: number) {
    const piste = document.getElementById("piste-experiences");
    const cible = piste?.children[index] as HTMLElement | undefined;
    if (!piste || !cible) return;
    piste.scrollTo({
      left: cible.offsetLeft - (piste.clientWidth - cible.clientWidth) / 2,
      behavior: "smooth",
    });
  }

  return (
    <section
      id="experiences"
      className="scroll-mt-24 border-b border-vine-900/10 bg-sand-100 py-16 sm:py-24 lg:py-20"
    >
      <Container>
        <SectionHeading
          eyebrow="Accès privilégiés & rencontres"
          title="Expériences uniques"
          description="Des moments rendus possibles par dix ans de relations locales. Aucun de ceux-ci n'est réservable en ligne."
        />
      </Container>

      <div
        id="piste-experiences"
        className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 sm:mt-14 sm:gap-7 lg:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {experiences.map((experience) => (
          <article
            key={experience.title}
            className="relative aspect-4/3 w-[85vw] shrink-0 snap-center overflow-hidden sm:aspect-16/9 sm:w-[70vw] lg:w-[58vw]"
          >
            <Image
              src={experience.image}
              alt={experience.title}
              fill
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 70vw, 58vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vine-900/85 via-vine-900/25 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
              <p className="text-[0.7rem] tracking-[0.24em] text-gold-400 uppercase">
                {experience.place}
              </p>
              <h3 className="mt-2 font-display text-2xl leading-tight font-light text-sand-50 sm:text-3xl">
                {experience.title}
              </h3>
              <p className="mt-2.5 max-w-xl text-[0.9rem] leading-relaxed text-sand-200">
                {experience.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Pastilles de navigation */}
      <div className="mt-4 flex items-center justify-center gap-1 sm:mt-5">
        {experiences.map((experience, index) => (
          <button
            key={experience.title}
            type="button"
            onClick={() => aller(index)}
            aria-label={`Voir « ${experience.title} »`}
            aria-current={index === actif}
            className="p-3.5"
          >
            <span
              className={`block h-1.5 w-1.5 rotate-45 transition-colors ${
                index === actif ? "bg-tuile-600" : "bg-vine-900/25"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

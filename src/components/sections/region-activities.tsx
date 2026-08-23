"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Container, SectionHeading } from "@/components/ui/section";
import { emblemeDeRegion } from "@/components/ui/ornament";
import { activites } from "@/content/site";

/**
 * Carrousel des activités d'une région.
 *
 * Le défilement latéral natif porte le mécanisme : sans JavaScript, on fait
 * glisser au doigt ou à la molette. Les flèches et les pastilles ne sont que
 * des raccourcis. Une région sans activité n'affiche rien.
 */
export function RegionActivities({ region }: { region: string }) {
  const items = activites[region] ?? [];
  const [actif, setActif] = useState(0);
  const piste = `piste-activites-${region}`;

  useEffect(() => {
    const el = document.getElementById(piste);
    if (!el) return;

    const onScroll = () => {
      const centre = el.scrollLeft + el.clientWidth / 2;
      let proche = 0;
      let ecart = Infinity;
      [...el.children].forEach((enfant, i) => {
        const e = enfant as HTMLElement;
        const d = Math.abs(e.offsetLeft + e.clientWidth / 2 - centre);
        if (d < ecart) {
          ecart = d;
          proche = i;
        }
      });
      setActif(proche);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [piste]);

  function aller(index: number) {
    const el = document.getElementById(piste);
    const cible = el?.children[index] as HTMLElement | undefined;
    if (!el || !cible) return;
    el.scrollTo({
      left: cible.offsetLeft - (el.clientWidth - cible.clientWidth) / 2,
      behavior: "smooth",
    });
  }

  if (items.length === 0) return null;

  return (
    <section className="border-b border-vine-900/10 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          embleme={emblemeDeRegion(region)}
          eyebrow="Sur place"
          title="Quelques activités"
          description="À glisser dans votre programme, selon vos envies et la météo. Tout est réservé et organisé pour vous."
        />
      </Container>

      <div
        id={piste}
        className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 sm:mt-14 sm:gap-7 lg:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <article
            key={item.titre}
            className="w-[80vw] shrink-0 snap-center sm:w-[44vw] lg:w-[30vw]"
          >
            <div className="relative aspect-4/3 overflow-hidden bg-sand-200">
              <Image
                src={item.image}
                alt={item.titre}
                fill
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 44vw, 30vw"
                className="object-cover"
              />
            </div>
            <h3 className="mt-5 font-display text-xl leading-tight font-light text-vine-900 sm:text-2xl">
              {item.titre}
            </h3>
            <p className="mt-2.5 text-[0.9rem] leading-relaxed text-vine-600">
              {item.detail}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-1 sm:mt-5">
        {items.map((item, index) => (
          <button
            key={item.titre}
            type="button"
            onClick={() => aller(index)}
            aria-label={`Voir « ${item.titre} »`}
            aria-current={index === actif}
            className="flex h-11 w-11 items-center justify-center"
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

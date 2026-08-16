import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { experiences } from "@/content/site";

/**
 * `limit` : utilisé sur la page d'accueil, où la section n'est qu'un aperçu.
 * Sur téléphone, seules les trois premières expériences restent visibles —
 * six cartes empilées faisaient à elles seules deux mille pixels de défilement.
 * Le bouton renvoie alors vers la page qui les présente toutes.
 */
export function ExperiencesGrid({ limit }: { limit?: number }) {
  const apercu = limit !== undefined;
  const items = limit ? experiences.slice(0, limit) : experiences;

  return (
    <section className="border-b border-vine-900/10 bg-sand-100 py-16 sm:py-24 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Accès privilégiés & rencontres"
          title="Expériences uniques"
          description="Des moments rendus possibles par dix ans de relations locales. Aucun de ceux-ci n'est réservable en ligne."
          align="center"
        />

        <div className="mt-12 grid gap-8 sm:mt-16 sm:grid-cols-2 sm:gap-9 lg:grid-cols-3">
          {items.map((experience, index) => (
            <article
              key={experience.title}
              className={`reveal group ${
                apercu && index > 2 ? "hidden sm:block" : ""
              }`}
            >
              <div className="relative aspect-16/10 overflow-hidden bg-sand-200 sm:aspect-4/3">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1100ms] group-hover:scale-105"
                />
              </div>

              <p className="mt-6 text-[0.7rem] tracking-[0.24em] text-gold-600 uppercase">
                {experience.place}
              </p>
              <h3 className="mt-2.5 font-display text-2xl leading-tight font-light text-vine-900">
                {experience.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-vine-600">
                {experience.description}
              </p>
            </article>
          ))}
        </div>

        {apercu ? (
          <div
            className={`reveal mt-12 text-center sm:mt-14 ${
              // Sur grand écran, le bouton n'a de sens que s'il reste
              // des expériences à découvrir
              limit < experiences.length ? "" : "sm:hidden"
            }`}
          >
            <ButtonLink href="/experiences" variant="outline">
              Toutes les expériences
            </ButtonLink>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

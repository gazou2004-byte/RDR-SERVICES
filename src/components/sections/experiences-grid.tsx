import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { experiences } from "@/content/site";

export function ExperiencesGrid({ limit }: { limit?: number }) {
  const items = limit ? experiences.slice(0, limit) : experiences;

  return (
    <section className="border-b border-parch-200/10 bg-wine-900 py-28 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Expériences uniques"
          title="Ce que l'on ne trouve"
          accent="nulle part ailleurs"
          description="Des moments rendus possibles par dix ans de relations locales. Aucun de ceux-ci n'est réservable en ligne."
          align="center"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((experience) => (
            <article
              key={experience.title}
              className="reveal group relative aspect-4/5 overflow-hidden"
            >
              <Image
                src={experience.image}
                alt={experience.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1100ms] group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine-950 via-wine-950/55 to-wine-950/15 transition-opacity duration-500 group-hover:from-wine-800" />

              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="text-[0.62rem] tracking-[0.24em] text-gold-400 uppercase">
                  {experience.place}
                </p>
                <h3 className="mt-3 font-display text-2xl leading-tight font-light text-parch-50">
                  {experience.title}
                </h3>
                <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-parch-200 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                  {experience.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {limit && limit < experiences.length ? (
          <div className="reveal mt-14 text-center">
            <ButtonLink href="/experiences" variant="outline">
              Toutes les expériences
            </ButtonLink>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

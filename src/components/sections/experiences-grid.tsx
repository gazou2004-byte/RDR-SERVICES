import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { experiences } from "@/content/site";

export function ExperiencesGrid({ limit }: { limit?: number }) {
  const items = limit ? experiences.slice(0, limit) : experiences;

  return (
    <section className="border-b border-vine-900/10 bg-sand-100 py-28 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Expériences uniques"
          title="Ce que l'on ne trouve"
          accent="nulle part ailleurs"
          description="Des moments rendus possibles par dix ans de relations locales. Aucun de ceux-ci n'est réservable en ligne."
          align="center"
        />

        <div className="mt-16 grid gap-9 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((experience) => (
            <article key={experience.title} className="reveal group">
              <div className="relative aspect-4/3 overflow-hidden bg-sand-200">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1100ms] group-hover:scale-105"
                />
              </div>

              <p className="mt-6 text-[0.62rem] tracking-[0.24em] text-gold-600 uppercase">
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

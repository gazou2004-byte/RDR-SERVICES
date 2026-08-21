import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui/section";
import { experiences } from "@/content/site";

/**
 * Les expériences propres à une région, affichées sur sa fiche.
 *
 * Elles étaient auparavant regroupées sur la page d'accueil, ce qui obligeait
 * le visiteur à deviner à quel territoire chacune se rattachait. Chaque
 * expérience porte désormais un `region` et n'apparaît que là où elle a lieu.
 */
export function RegionExperiences({ region }: { region: string }) {
  const items = experiences.filter((e) => e.region === region);
  if (items.length === 0) return null;

  return (
    <section className="border-b border-vine-900/10 bg-sand-100 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Sur place, avec nous"
          title="Expériences uniques"
          description="Ces moments ne sont pas réservables en ligne : ils reposent sur des relations construites au fil des années."
        />

        <div className="mt-12 grid gap-9 sm:mt-14 sm:grid-cols-2">
          {items.map((experience) => (
            <article key={experience.title} className="reveal group">
              <div className="relative aspect-16/10 overflow-hidden bg-sand-200">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1100ms] group-hover:scale-105"
                />
              </div>

              <p className="mt-6 text-[0.7rem] tracking-[0.24em] text-feuille-600 uppercase">
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
      </Container>
    </section>
  );
}

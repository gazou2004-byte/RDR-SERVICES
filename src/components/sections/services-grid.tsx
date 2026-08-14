import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { services } from "@/content/site";

export function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <section className="border-b border-vine-900/10 py-28 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Ce que nous faisons"
          title="Quatre métiers,"
          accent="un seul interlocuteur"
          description="De la journée d'excursion au voyage de trois semaines, tout passe par la même personne. Vous n'avez jamais à réexpliquer votre dossier."
        />

        <div className="mt-16 grid gap-px border border-vine-900/10 bg-vine-900/10 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.slug}
              className="reveal group relative flex flex-col overflow-hidden bg-stone-50"
            >
              <div className="relative h-56 overflow-hidden bg-stone-200">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-9 lg:p-11">
                <h3 className="font-display text-3xl font-light text-vine-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-vine-600">
                  {detailed ? service.description : service.short}
                </p>

                {detailed ? (
                  <ul className="mt-7 space-y-3">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-relaxed text-vine-600"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-1 w-1 shrink-0 rotate-45 bg-wine-600"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {service.licence ? (
                  <p className="mt-7 text-[0.68rem] tracking-[0.12em] text-vine-500 uppercase">
                    {service.licence}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        {!detailed ? (
          <div className="reveal mt-14 text-center">
            <ButtonLink href="/services" variant="outline">
              Voir le détail des services
            </ButtonLink>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

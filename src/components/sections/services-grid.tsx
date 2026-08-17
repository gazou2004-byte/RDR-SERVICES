import Image from "next/image";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/section";
import { services } from "@/content/site";

/**
 * Services présentés en bandes pleine largeur : le texte occupe une moitié,
 * la photo l'autre, et le côté s'inverse d'une bande à l'autre.
 */
export function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <section id="services" className="scroll-mt-24 border-b border-vine-900/10">
      <Container className="py-16 sm:py-24 lg:py-24">
        <SectionHeading
          eyebrow="Un seul interlocuteur"
          title="Quatre métiers"
          description="De la journée d'excursion au voyage de trois semaines, tout passe par la même personne. Vous n'avez jamais à réexpliquer votre dossier."
        />
      </Container>

      <div>
        {services.map((service, index) => {
          const imageRight = index % 2 === 0;

          return (
            <article
              key={service.slug}
              className="grid items-stretch lg:grid-cols-2"
            >
              {/* Texte */}
              <div
                className={`reveal flex flex-col items-center justify-center px-6 py-10 text-center sm:py-14 lg:px-16 lg:py-16 ${
                  imageRight ? "" : "lg:order-2"
                }`}
              >
                <h3 className="text-[0.9rem] font-medium tracking-[0.2em] text-vine-900 uppercase sm:text-base">
                  {service.title}
                </h3>
                <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-vine-600">
                  {detailed ? service.description : service.short}
                </p>

                {detailed ? (
                  <ul className="mt-8 max-w-md space-y-3 text-left">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-relaxed text-vine-600"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-1 w-1 shrink-0 rotate-45 bg-gold-600"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Link
                    href="/#services"
                    className="group mt-8 inline-flex items-center gap-2 py-2 text-[0.74rem] font-medium tracking-[0.2em] text-tuile-600 uppercase transition-colors hover:text-tuile-700 sm:mt-10"
                  >
                    Voir plus
                    <svg
                      aria-hidden
                      viewBox="0 0 14 8"
                      className="h-2 w-3.5 transition-transform group-hover:translate-y-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M1 1l6 6 6-6" strokeLinecap="round" />
                    </svg>
                  </Link>
                )}

                {service.licence ? (
                  <p className="mt-8 text-[0.7rem] tracking-[0.14em] text-vine-500 uppercase">
                    {service.licence}
                  </p>
                ) : null}
              </div>

              {/* Photo, à fond perdu */}
              <div
                className={`reveal relative min-h-[11rem] bg-sand-200 sm:min-h-[16rem] lg:min-h-[24rem] ${
                  imageRight ? "" : "lg:order-1"
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

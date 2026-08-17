import { Container, SectionHeading } from "@/components/ui/section";
import { StoryMosaic } from "@/components/sections/story-mosaic";
import { company, intro } from "@/content/site";

const histoire = [
  "RDR Services est né d'un constat simple, fait après dix ans passés dans l'hôtellerie de luxe, la conciergerie et le transport privé : les voyageurs qui viennent dans le Sud-Ouest passent à côté de l'essentiel. Ils visitent les châteaux que tout le monde visite, dînent là où tout le monde dîne, et rentrent chez eux avec les mêmes photos que les autres.",
  "Ce qui manquait, ce n'était pas une agence de plus. C'était quelqu'un capable de décrocher son téléphone un dimanche matin pour qu'un grand cru classé vous ouvre ses chais, ou de trouver la table de quinze couverts qui n'a jamais eu de site internet.",
  "Aujourd'hui, nous composons des séjours privés d'une journée à trois semaines, de Bordeaux aux Pyrénées-Atlantiques, du Périgord aux Landes. Toujours en privatif, toujours avec le même chauffeur, toujours avec un interlocuteur unique joignable 24 h/24 pendant votre voyage.",
] as const;

export function AboutSection() {
  return (
    <>
      <section id="a-propos" className="scroll-mt-24 pt-16 sm:pt-24 lg:pt-20">
        <Container>
          <SectionHeading eyebrow="Notre histoire" title="À propos" />
        </Container>
      </section>

      <StoryMosaic paragraphes={histoire} />

      <section className="border-b border-vine-900/10 py-12 sm:py-16">
        <Container>
          <dl className="reveal grid grid-cols-2 gap-y-10 lg:grid-cols-4">
            {intro.stats.map((stat) => (
              <div
                key={stat.label}
                className="border-l border-gold-600/30 px-6 text-center first:border-l-0 lg:first:border-l"
              >
                <dt className="font-display text-4xl font-light text-gold-600 sm:text-5xl">
                  {stat.value}
                </dt>
                <dd className="mx-auto mt-3 max-w-[14rem] text-[0.78rem] leading-relaxed text-vine-600">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          <dl className="reveal mt-12 grid gap-8 text-center sm:grid-cols-2">
            <div>
              <dt className="text-[0.7rem] tracking-[0.22em] text-gold-600 uppercase">
                Licence ATOUT FRANCE
              </dt>
              <dd className="mt-2 text-sm text-vine-700">
                n° {company.licenceAtoutFrance}
              </dd>
            </div>
            <div>
              <dt className="text-[0.7rem] tracking-[0.22em] text-gold-600 uppercase">
                Licence de transport
              </dt>
              <dd className="mt-2 text-sm text-vine-700">
                n° {company.licenceTransport}
              </dd>
            </div>
          </dl>
        </Container>
      </section>
    </>
  );
}

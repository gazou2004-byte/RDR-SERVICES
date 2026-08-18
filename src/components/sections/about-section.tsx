import { Container, SectionHeading } from "@/components/ui/section";
import { StoryMosaic } from "@/components/sections/story-mosaic";
import { company, intro } from "@/content/site";

const histoire = [
  "RDR Services est une conciergerie de voyage installée en Nouvelle-Aquitaine. Nous ne vendons pas de circuits : nous composons des séjours, un par un, pour des voyageurs qui veulent autre chose qu'un programme imprimé à l'avance.",
  "Ce qui fait la différence tient à peu de choses : connaître le propriétaire qui ouvre son chai un dimanche, savoir quelle table vaut le détour et laquelle vit sur sa réputation, deviner qu'il vaut mieux inverser deux journées parce que la pluie arrive. Ce savoir-là ne s'achète pas, il se construit sur place.",
  "Nous couvrons cinq territoires, du Bordelais aux Pyrénées-Atlantiques, du Périgord aux Landes et à la Gascogne. Toujours en privatif, toujours avec le même chauffeur du premier au dernier jour, et un interlocuteur unique que vous pouvez appeler à toute heure pendant votre voyage.",
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

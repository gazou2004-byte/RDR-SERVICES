import { Container, SectionHeading } from "@/components/ui/section";
import { contenu, type Langue } from "@/content";
import { ui } from "@/content/ui";

export function Process({ langue }: { langue: Langue }) {
  const { process } = contenu(langue);
  const t = ui(langue);

  return (
    <section className="border-b border-vine-900/10 bg-sand-100 py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow={t.etapes.eyebrow}
          title={t.etapes.titre}
          align="center"
        />

        <ol className="mt-12 grid gap-px border border-vine-900/10 bg-vine-900/10 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <li
              key={item.step}
              className="reveal group relative bg-sand-100 p-7 transition-colors duration-500 hover:bg-sand-200 lg:p-8"
            >
              <span className="font-display text-5xl leading-none font-light text-vine-400 transition-colors duration-500 group-hover:text-tuile-600">
                {item.step}
              </span>
              <h3 className="mt-5 font-display text-xl font-light text-vine-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-vine-600">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

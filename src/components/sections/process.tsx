import { Container, SectionHeading } from "@/components/ui/section";
import { process } from "@/content/site";

export function Process() {
  return (
    <section className="border-b border-parch-200/10 bg-wine-900 py-28 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Comment ça se passe"
          title="De la première idée"
          accent="au dernier jour"
          align="center"
        />

        <ol className="mt-16 grid gap-px border border-parch-200/10 bg-parch-200/10 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <li
              key={item.step}
              className="reveal group relative bg-wine-900 p-9 transition-colors duration-500 hover:bg-wine-850 lg:p-10"
            >
              <span className="font-display text-5xl leading-none font-light text-wine-600 transition-colors duration-500 group-hover:text-gold-500">
                {item.step}
              </span>
              <h3 className="mt-7 font-display text-2xl font-light text-parch-50">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-parch-300">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

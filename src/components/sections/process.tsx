import { Container, SectionHeading } from "@/components/ui/section";
import { process } from "@/content/site";

export function Process() {
  return (
    <section className="border-b border-vine-900/10 bg-stone-100 py-28 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Comment ça se passe"
          title="De la première idée"
          accent="au dernier jour"
          align="center"
        />

        <ol className="mt-16 grid gap-px border border-vine-900/10 bg-vine-900/10 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <li
              key={item.step}
              className="reveal group relative bg-stone-100 p-9 transition-colors duration-500 hover:bg-stone-200 lg:p-10"
            >
              <span className="font-display text-5xl leading-none font-light text-vine-400 transition-colors duration-500 group-hover:text-wine-600">
                {item.step}
              </span>
              <h3 className="mt-7 font-display text-2xl font-light text-vine-900">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-vine-600">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

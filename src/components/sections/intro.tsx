import { Container, SectionHeading } from "@/components/ui/section";
import { intro } from "@/content/site";

export function Intro() {
  return (
    <section
      id="intro"
      className="scroll-mt-24 border-b border-vine-900/10 py-16 sm:py-24 lg:py-24"
    >
      <Container>
        <SectionHeading eyebrow={intro.eyebrow} title={intro.title} />

        <div className="reveal mx-auto mt-10 max-w-2xl space-y-5 text-center">
          {intro.body.map((paragraph) => (
            <p
              key={paragraph}
              className="text-[0.98rem] leading-relaxed text-vine-600"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <dl className="reveal mt-14 grid grid-cols-2 gap-y-10 sm:mt-20 sm:gap-y-12 lg:grid-cols-4">
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
      </Container>
    </section>
  );
}

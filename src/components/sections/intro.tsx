import { Container, SectionHeading } from "@/components/ui/section";
import { intro } from "@/content/site";

export function Intro() {
  return (
    <section className="border-b border-vine-900/10 py-28 lg:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow={intro.eyebrow} title={intro.title} />
          </div>
          <div className="reveal space-y-6 lg:col-span-6 lg:pt-20">
            {intro.body.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[0.98rem] leading-relaxed text-vine-600"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <dl className="reveal mt-20 grid grid-cols-2 gap-px border border-vine-900/10 bg-vine-900/10 lg:grid-cols-4">
          {intro.stats.map((stat) => (
            <div key={stat.label} className="bg-stone-50 px-7 py-10 text-center">
              <dt className="font-display text-4xl font-light text-wine-600 sm:text-5xl">
                {stat.value}
              </dt>
              <dd className="mt-3 text-[0.78rem] leading-relaxed text-vine-600">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

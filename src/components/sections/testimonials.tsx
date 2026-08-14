import { Container, SectionHeading } from "@/components/ui/section";
import { testimonials } from "@/content/site";

export function Testimonials() {
  return (
    <section className="border-b border-vine-900/10 py-28 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Ils nous ont fait confiance"
          title="Ce qu'en disent"
          accent="nos voyageurs"
          align="center"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="reveal flex flex-col border border-vine-900/12 bg-sand-100 p-9 transition-colors duration-500 hover:border-wine-600/35"
            >
              <span
                aria-hidden
                className="font-display text-6xl leading-none text-gold-600/45"
              >
                &ldquo;
              </span>
              <blockquote className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-vine-700 italic">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-8 border-t border-vine-900/12 pt-6">
                <p className="text-sm font-medium text-vine-900">
                  {testimonial.author}
                </p>
                <p className="mt-1 text-[0.72rem] tracking-[0.08em] text-vine-500">
                  {testimonial.origin}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

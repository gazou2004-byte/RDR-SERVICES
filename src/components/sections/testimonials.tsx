import { Container, SectionHeading } from "@/components/ui/section";
import { testimonials } from "@/content/site";

export function Testimonials() {
  return (
    <section className="border-b border-parch-200/10 py-28 lg:py-36">
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
              className="reveal flex flex-col border border-parch-200/12 bg-wine-900/50 p-9 transition-colors duration-500 hover:border-gold-500/35"
            >
              <span
                aria-hidden
                className="font-display text-6xl leading-none text-gold-500/45"
              >
                &ldquo;
              </span>
              <blockquote className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-parch-200 italic">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-8 border-t border-parch-200/12 pt-6">
                <p className="text-sm font-medium text-parch-50">
                  {testimonial.author}
                </p>
                <p className="mt-1 text-[0.72rem] tracking-[0.08em] text-parch-400">
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

import { Container, SectionHeading } from "@/components/ui/section";
import { faq } from "@/content/site";

export function FaqSection() {
  return (
    <section className="border-b border-parch-200/10 bg-wine-900 py-28 lg:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Questions fréquentes"
              title="Ce que l'on nous"
              accent="demande souvent"
              description="Une question qui n'est pas ici ? Écrivez-nous, nous répondons sous 24 heures."
            />
          </div>

          <div className="reveal lg:col-span-8">
            {faq.map((item) => (
              <details
                key={item.question}
                name="faq"
                className="group border-b border-parch-200/12"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-[0.98rem] font-medium text-parch-100 transition-colors hover:text-gold-400 [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span
                    aria-hidden
                    className="relative h-4 w-4 shrink-0 text-gold-500"
                  >
                    <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 bg-current" />
                    <span className="absolute top-0 left-1/2 h-4 w-px -translate-x-1/2 bg-current transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>
                <p className="pb-7 text-[0.92rem] leading-relaxed text-parch-300">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

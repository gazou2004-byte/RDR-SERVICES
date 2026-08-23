import { Container, SectionHeading } from "@/components/ui/section";
import { contenu, type Langue } from "@/content";
import { ui } from "@/content/ui";

/**
 * Questions fréquentes en deux colonnes de fiches.
 * L'élément <details> natif porte l'ouverture : la section reste utilisable
 * même si le JavaScript ne s'exécute pas.
 */
export function FaqSection({ langue }: { langue: Langue }) {
  const { faq } = contenu(langue);
  const t = ui(langue);

  return (
    <section className="border-b border-vine-900/10 bg-sand-100 py-16 sm:py-24 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.faq.eyebrow}
          title={t.faq.titre}
          description={t.faq.relance}
        />

        <div className="reveal mt-12 grid gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-2 lg:gap-x-7">
          {faq.map((item) => (
            <details
              key={item.question}
              className="group h-fit border-b-2 border-vine-900/70 bg-sand-50 shadow-[0_2px_10px_-6px] shadow-vine-900/50 transition-shadow hover:shadow-[0_8px_20px_-10px] hover:shadow-vine-900/50"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 sm:px-6 sm:py-5 text-left text-[0.95rem] font-medium text-vine-900 [&::-webkit-details-marker]:hidden">
                {item.question}
                {/* Triangle qui pivote à l'ouverture */}
                <svg
                  aria-hidden
                  viewBox="0 0 10 12"
                  className="h-3 w-2.5 shrink-0 text-tuile-600 transition-transform duration-300 group-open:rotate-90"
                  fill="currentColor"
                >
                  <path d="M0 0l10 6-10 6z" />
                </svg>
              </summary>
              <p className="border-t border-vine-900/10 px-5 py-4 sm:px-6 sm:py-5 text-[0.92rem] leading-relaxed text-vine-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

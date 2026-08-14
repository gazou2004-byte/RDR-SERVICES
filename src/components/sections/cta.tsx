import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { company } from "@/content/site";

export function Cta({
  title = "Parlons de votre séjour",
  description = "Un appel de trente minutes suffit pour savoir si nous sommes le bon interlocuteur. Sans engagement, et sans commercial au bout du fil.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-wine-800 py-28 lg:py-36">
      {/* Halo grenat en fond */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-wine-600/35 blur-[130px]"
      />

      <Container className="relative z-10 text-center">
        <p className="eyebrow reveal">Prendre contact</p>
        <h2 className="reveal mx-auto mt-6 max-w-2xl font-display text-4xl leading-[1.12] font-light text-parch-50 sm:text-5xl">
          {title}
        </h2>
        <p className="reveal mx-auto mt-7 max-w-xl text-[0.98rem] leading-relaxed text-parch-200">
          {description}
        </p>

        <div className="reveal mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/contact">Demander un devis</ButtonLink>
          <ButtonLink href={`tel:${company.phoneHref}`} variant="outline">
            {company.phone}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

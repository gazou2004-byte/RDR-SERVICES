import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { company } from "@/content/site";

/**
 * Le seul bloc sombre du site : il ponctue la page juste avant le pied,
 * et concentre l'attention sur la prise de contact.
 */
export function Cta({
  title = "Parlons de votre séjour",
  description = "Un appel de trente minutes suffit pour savoir si nous sommes le bon interlocuteur. Sans engagement, et sans commercial au bout du fil.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-tuile-800 py-28 lg:py-36">
      {/* Halo doré discret en fond */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-tuile-600/40 blur-[130px]"
      />

      <Container className="relative z-10 text-center">
        <p className="eyebrow-light reveal">Prendre contact</p>
        <h2 className="reveal mx-auto mt-6 max-w-2xl font-display text-4xl leading-[1.12] font-light text-sand-50 sm:text-5xl">
          {title}
        </h2>
        <p className="reveal mx-auto mt-7 max-w-xl text-[0.98rem] leading-relaxed text-sand-200">
          {description}
        </p>

        <div className="reveal mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/contact" variant="gold">
            Demander un devis
          </ButtonLink>
          <ButtonLink href={`tel:${company.phoneHref}`} variant="light">
            {company.phone}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

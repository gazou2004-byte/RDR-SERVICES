import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { company } from "@/content/site";

/**
 * Le seul bloc sombre du site : il ponctue la page juste avant le pied,
 * et concentre l'attention sur la prise de contact.
 */
export function Cta({
  title = "Parlons de votre séjour",
  description = "Un appel de trente minutes suffit. Sans engagement, et sans commercial au bout du fil.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-tuile-800 py-7 sm:py-9">
      {/* Halo vert discret en fond */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-tuile-600/40 blur-[130px]"
      />

      <Container className="relative z-10 text-center">
        <h2 className="reveal mx-auto max-w-2xl font-display text-2xl leading-[1.16] font-light text-sand-50">
          {title}
        </h2>
        <p className="reveal mx-auto mt-3 max-w-lg text-[0.88rem] leading-relaxed text-sand-200">
          {description}
        </p>

        <div className="reveal mt-5 flex justify-center">
          <ButtonLink href="/#contact" variant="feuille">
            Nous contacter
          </ButtonLink>
        </div>

        {/* Les coordonnées ont quitté le pied de page pour ce bandeau : c'est
            ici qu'on décide d'appeler, pas deux blocs plus bas. L'adresse en a
            été retirée : elle n'aide personne à agir et figure sur la page des
            mentions légales, où la loi l'exige. */}
        <div className="reveal mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[0.82rem] text-sand-300">
          <a
            href={`tel:${company.phoneHref}`}
            className="py-1 transition-colors hover:text-sand-50"
          >
            {company.phone}
          </a>
          <span aria-hidden className="text-sand-400">
            ·
          </span>
          <a
            href={`mailto:${company.email}`}
            className="py-1 transition-colors hover:text-sand-50"
          >
            {company.email}
          </a>
        </div>
      </Container>
    </section>
  );
}

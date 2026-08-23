import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { lien, type Langue } from "@/content/langue";
import { ui } from "@/content/ui";

/** La page d'erreur, dans l'une ou l'autre langue. */
export function Introuvable({ langue }: { langue: Langue }) {
  const t = ui(langue);

  return (
    <div className="flex min-h-[70svh] items-center py-32">
      <Container className="text-center">
        <p className="eyebrow">{t.introuvable.code}</p>
        <h1 className="mt-6 font-display text-6xl font-light text-vine-900 sm:text-7xl">
          {t.introuvable.titre}
        </h1>
        <span className="rule-feuille mx-auto mt-8" />
        <p className="mx-auto mt-8 max-w-md text-[0.95rem] leading-relaxed text-vine-600">
          {t.introuvable.texte}
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href={lien(langue, "/")}>{t.introuvable.retour}</ButtonLink>
          <ButtonLink href={lien(langue, "/#contact")} variant="outline">
            {t.introuvable.contact}
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}

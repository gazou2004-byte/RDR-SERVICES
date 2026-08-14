import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";

export default function NotFound() {
  return (
    <div className="flex min-h-[70svh] items-center py-32">
      <Container className="text-center">
        <p className="eyebrow">Erreur 404</p>
        <h1 className="mt-6 font-display text-6xl font-light text-parch-50 sm:text-7xl">
          Page introuvable
        </h1>
        <span className="rule-gold mx-auto mt-8" />
        <p className="mx-auto mt-8 max-w-md text-[0.95rem] leading-relaxed text-parch-300">
          Cette page n&apos;existe pas ou a été déplacée. Revenons sur nos pas.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href="/">Retour à l&apos;accueil</ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Nous contacter
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}

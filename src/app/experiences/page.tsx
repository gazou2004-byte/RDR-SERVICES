import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ExperiencesGrid } from "@/components/sections/experiences-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Expériences uniques",
  description:
    "Verticales en grands crus classés, vendanges en Saint-Émilion, cours avec un chef étoilé, chais d'armagnac : des expériences introuvables en ligne.",
};

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Expériences uniques"
        title="Des portes qui ne s'ouvrent"
        accent="pas toutes seules"
        description="Chaque expérience présentée ici repose sur une relation personnelle, construite au fil des années. Aucune n'est réservable en ligne, par personne."
        image="/images/dest-bordeaux.jpg"
      />
      <ExperiencesGrid />
      <Testimonials />
      <Cta
        title="Une envie précise en tête ?"
        description="Dites-nous ce que vous imaginez. Si c'est possible dans le Sud-Ouest, nous trouverons comment le rendre réel."
      />
    </>
  );
}

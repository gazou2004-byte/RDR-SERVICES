import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { DestinationsGrid } from "@/components/sections/destinations-grid";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Bordeaux & Médoc, Périgord, Pays Basque, Gascogne & Armagnac : quatre territoires du Sud-Ouest en tours privés sur mesure.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tours privés"
        title="Le Sud-Ouest,"
        accent="territoire par territoire"
        description="Quatre régions que nous parcourons toute l'année. Les itinéraires ci-dessous sont des exemples : le vôtre sera différent."
        image="/images/exp-margaux.jpg"
      />
      <DestinationsGrid />
      <Cta />
    </>
  );
}

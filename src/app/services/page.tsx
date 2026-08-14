import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Process } from "@/components/sections/process";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Nos services",
  description:
    "Excursions, créations sur mesure, transport VIP avec chauffeur dédié et accès privilégiés aux grands crus du Sud-Ouest.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title="Tout est pris en charge,"
        accent="rien n'est standard"
        description="Quatre métiers complémentaires, réunis sous un seul interlocuteur. Vous n'avez jamais à coordonner qui que ce soit."
        image="/images/hero-services.jpg"
      />
      <ServicesGrid detailed />
      <Process />
      <Cta />
    </>
  );
}

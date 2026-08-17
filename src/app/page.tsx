import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { ServicesGrid } from "@/components/sections/services-grid";
import { DestinationsGrid } from "@/components/sections/destinations-grid";
import { SummaryPanel } from "@/components/sections/summary-panel";
import { AboutSection } from "@/components/sections/about-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";

/**
 * Le site tient sur cette page. Chaque section porte l'ancre vers laquelle
 * pointe le menu ; seules les quatre destinations ont leur propre page,
 * atteignable depuis la section « Visites privées ».
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesGrid />
      <DestinationsGrid />
      <SummaryPanel />
      <AboutSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}

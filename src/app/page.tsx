import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { ServicesGrid } from "@/components/sections/services-grid";
import { SummaryPanel } from "@/components/sections/summary-panel";
import { ExperiencesGrid } from "@/components/sections/experiences-grid";
import { DestinationsGrid } from "@/components/sections/destinations-grid";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq-section";
import { Cta } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesGrid />
      <SummaryPanel />
      <ExperiencesGrid limit={6} />
      <DestinationsGrid />
      <Process />
      <Testimonials />
      <FaqSection />
      <Cta />
    </>
  );
}

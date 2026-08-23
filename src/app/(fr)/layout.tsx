import type { Metadata } from "next";
import "../globals.css";
import { Coque } from "@/components/layout/coque";
import { company } from "@/content/site";
import { LOCALE_OG, META, equivalents } from "@/content/meta";

export const metadata: Metadata = {
  metadataBase: new URL("https://rdr-services.fr"),
  title: {
    default: `${company.name} — ${company.tagline} dans le Sud-Ouest`,
    template: `%s | ${company.name}`,
  },
  description: META.fr.description,
  keywords: META.fr.motsCles,
  // Dit aux moteurs que la même page existe dans les cinq langues, et laquelle
  // servir par défaut. Sans ces liens, les versions se feraient concurrence.
  alternates: equivalents("fr", "/"),
  openGraph: {
    type: "website",
    locale: LOCALE_OG.fr,
    siteName: company.name,
    title: `${company.name} — ${company.tagline}`,
    description:
      "Séjours privés sur mesure dans le Sud-Ouest, avec chauffeur dédié et accès privilégiés aux grands crus.",
  },
};

export default function RootLayoutFr({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <Coque langue="fr">{children}</Coque>;
}

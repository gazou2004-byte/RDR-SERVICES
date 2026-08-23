import type { Metadata } from "next";
import "../globals.css";
import { Coque } from "@/components/layout/coque";
import { company } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://rdr-services.fr"),
  title: {
    default: `${company.name} — ${company.tagline} dans le Sud-Ouest`,
    template: `%s | ${company.name}`,
  },
  description:
    "Conciergerie de voyage haut de gamme dans le Sud-Ouest : séjours privés sur mesure, grands crus du Bordelais, Périgord, Landes, Pyrénées-Atlantiques et Gascogne, transport VIP avec chauffeur dédié.",
  keywords: [
    "conciergerie",
    "voyage privé",
    "Sud-Ouest",
    "Bordeaux",
    "Médoc",
    "Périgord",
    "Landes",
    "Pyrénées-Atlantiques",
    "Gascogne",
    "chauffeur privé",
    "œnotourisme",
  ],
  // Dit aux moteurs que la même page existe en anglais, et laquelle servir
  // par défaut. Sans ces liens, les deux versions se feraient concurrence.
  alternates: {
    canonical: "/",
    languages: { fr: "/", en: "/en/", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
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

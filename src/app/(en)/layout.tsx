import type { Metadata } from "next";
import "../globals.css";
import { Coque } from "@/components/layout/coque";
import { company } from "@/content/en";

export const metadata: Metadata = {
  metadataBase: new URL("https://rdr-services.fr"),
  title: {
    default: `${company.name} — ${company.tagline} in South-West France`,
    template: `%s | ${company.name}`,
  },
  description:
    "A luxury travel concierge in South-West France: bespoke private journeys, the classified growths of Bordeaux, the Périgord, the Landes, the Basque Country and Gascony, with a dedicated private driver.",
  keywords: [
    "concierge",
    "private travel",
    "South-West France",
    "Bordeaux",
    "Médoc",
    "Périgord",
    "Landes",
    "Basque Country",
    "Gascony",
    "private driver",
    "wine tourism",
  ],
  alternates: {
    canonical: "/en/",
    languages: { fr: "/", en: "/en/", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: company.name,
    title: `${company.name} — ${company.tagline}`,
    description:
      "Bespoke private journeys through South-West France, with a dedicated driver and privileged access to the great growths.",
  },
};

export default function RootLayoutEn({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <Coque langue="en">{children}</Coque>;
}

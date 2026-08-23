import type { Metadata } from "next";
import { Confidentialite } from "@/components/pages/confidentialite";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Comment ${company.name} traite vos données personnelles.`,
  alternates: {
    canonical: "/confidentialite/",
    languages: { fr: "/confidentialite/", en: "/en/confidentialite/" },
  },
};

export default function PrivacyPage() {
  return <Confidentialite langue="fr" />;
}

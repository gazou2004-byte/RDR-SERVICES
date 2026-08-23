import type { Metadata } from "next";
import { Confidentialite } from "@/components/pages/confidentialite";
import { company } from "@/content/en";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${company.name} handles your personal data.`,
  alternates: {
    canonical: "/en/confidentialite/",
    languages: { fr: "/confidentialite/", en: "/en/confidentialite/" },
  },
};

export default function PrivacyPageEn() {
  return <Confidentialite langue="en" />;
}

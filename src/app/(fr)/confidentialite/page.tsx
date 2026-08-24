import type { Metadata } from "next";
import { equivalents } from "@/content/meta";
import { Confidentialite } from "@/components/pages/confidentialite";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Comment ${company.name} traite vos données personnelles.`,
  alternates: equivalents("fr", "/confidentialite/"),
};

export default function PrivacyPage() {
  return <Confidentialite langue="fr" />;
}

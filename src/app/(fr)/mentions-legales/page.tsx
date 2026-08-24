import type { Metadata } from "next";
import { equivalents } from "@/content/meta";
import { MentionsLegales } from "@/components/pages/mentions-legales";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales de ${company.name}.`,
  alternates: equivalents("fr", "/mentions-legales/"),
};

export default function LegalPage() {
  return <MentionsLegales langue="fr" />;
}

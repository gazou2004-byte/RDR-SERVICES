import type { Metadata } from "next";
import { equivalents } from "@/content/meta";
import { Credits } from "@/components/pages/credits";

export const metadata: Metadata = {
  title: "Crédits photographiques",
  description:
    "Auteurs et licences des photographies utilisées sur le site RDR Services.",
  alternates: equivalents("fr", "/credits/"),
};

export default function CreditsPage() {
  return <Credits langue="fr" />;
}

import type { Metadata } from "next";
import { MentionsLegales } from "@/components/pages/mentions-legales";
import { company } from "@/content/en";

export const metadata: Metadata = {
  title: "Legal notice",
  description: `Legal notice for ${company.name}.`,
  alternates: {
    canonical: "/en/mentions-legales/",
    languages: { fr: "/mentions-legales/", en: "/en/mentions-legales/" },
  },
};

export default function LegalPageEn() {
  return <MentionsLegales langue="en" />;
}

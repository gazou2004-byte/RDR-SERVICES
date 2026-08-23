import type { Metadata } from "next";
import { Credits } from "@/components/pages/credits";

export const metadata: Metadata = {
  title: "Photo credits",
  description:
    "Authors and licences of the photographs used on the RDR Services site.",
  alternates: {
    canonical: "/en/credits/",
    languages: { fr: "/credits/", en: "/en/credits/" },
  },
};

export default function CreditsPageEn() {
  return <Credits langue="en" />;
}

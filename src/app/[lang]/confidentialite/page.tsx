import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Confidentialite } from "@/components/pages/confidentialite";
import { estLangue } from "@/content";
import { legal } from "@/content/legal";
import { equivalents } from "@/content/meta";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!estLangue(lang)) return {};

  return {
    title: legal(lang).confidentialite.titre,
    alternates: equivalents(lang, "/confidentialite/"),
  };
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  if (!estLangue(lang)) notFound();
  return <Confidentialite langue={lang} />;
}

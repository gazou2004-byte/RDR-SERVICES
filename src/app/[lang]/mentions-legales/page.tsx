import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MentionsLegales } from "@/components/pages/mentions-legales";
import { estLangue } from "@/content";
import { legal } from "@/content/legal";
import { equivalents } from "@/content/meta";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!estLangue(lang)) return {};

  return {
    title: legal(lang).mentions.titre,
    alternates: equivalents(lang, "/mentions-legales/"),
  };
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  if (!estLangue(lang)) notFound();
  return <MentionsLegales langue={lang} />;
}

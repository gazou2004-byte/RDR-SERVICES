import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Credits } from "@/components/pages/credits";
import { estLangue } from "@/content";
import { ui } from "@/content/ui";
import { equivalents } from "@/content/meta";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!estLangue(lang)) return {};

  return {
    title: ui(lang).credits.titre,
    alternates: equivalents(lang, "/credits/"),
  };
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  if (!estLangue(lang)) notFound();
  return <Credits langue={lang} />;
}

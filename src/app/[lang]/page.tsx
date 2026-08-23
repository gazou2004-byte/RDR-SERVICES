import { notFound } from "next/navigation";
import { Accueil } from "@/components/pages/accueil";
import { estLangue } from "@/content";

export default async function AccueilLangue({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!estLangue(lang)) notFound();
  return <Accueil langue={lang} />;
}

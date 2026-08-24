import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Destination } from "@/components/pages/destination";
import { contenu, estLangue, LANGUES } from "@/content";
import { equivalents } from "@/content/meta";
import { destinations } from "@/content/site";

type Props = { params: Promise<{ lang: string; slug: string }> };

// Les identifiants d'adresse sont communs à toutes les langues : un seul jeu
// d'URL à maintenir, et un lien reste valable quand on change de langue.
export function generateStaticParams() {
  return LANGUES.flatMap((lang) =>
    destinations.map((destination) => ({ lang, slug: destination.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!estLangue(lang)) return {};
  const destination = contenu(lang).destinations.find(
    (item) => item.slug === slug,
  );
  if (!destination) return {};

  return {
    title: destination.name,
    description: destination.intro,
    alternates: equivalents(lang, `/destinations/${slug}/`),
  };
}

export default async function DestinationLangue({ params }: Props) {
  const { lang, slug } = await params;
  if (!estLangue(lang)) notFound();
  return <Destination langue={lang} slug={slug} />;
}

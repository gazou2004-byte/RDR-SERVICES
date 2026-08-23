import type { Metadata } from "next";
import { Destination } from "@/components/pages/destination";
import { destinations } from "@/content/en";

type Props = { params: Promise<{ slug: string }> };

// Les identifiants d'adresse sont communs aux deux langues : une seule liste
// d'URL à maintenir, et un lien reste valable quand on change de langue.
export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) return {};

  return {
    title: `${destination.name} — private tour`,
    description: destination.intro,
    alternates: {
      canonical: `/en/destinations/${slug}/`,
      languages: {
        fr: `/destinations/${slug}/`,
        en: `/en/destinations/${slug}/`,
      },
    },
  };
}

export default async function DestinationPageEn({ params }: Props) {
  const { slug } = await params;
  return <Destination langue="en" slug={slug} />;
}

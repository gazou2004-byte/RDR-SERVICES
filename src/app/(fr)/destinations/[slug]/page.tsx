import type { Metadata } from "next";
import { Destination } from "@/components/pages/destination";
import { destinations } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) return {};

  return {
    title: `${destination.name} — tour privé`,
    description: destination.intro,
    alternates: {
      canonical: `/destinations/${slug}/`,
      languages: {
        fr: `/destinations/${slug}/`,
        en: `/en/destinations/${slug}/`,
      },
    },
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  return <Destination langue="fr" slug={slug} />;
}

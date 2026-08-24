import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { Coque } from "@/components/layout/coque";
import { contenu, estLangue, LANGUES_PREFIXEES } from "@/content";
import { LOCALE_OG, META, equivalents } from "@/content/meta";

/**
 * La racine des langues qui portent un préfixe d'adresse.
 *
 * Le français n'en fait pas partie : il vit à la racine du site, dans le
 * groupe `(fr)`, pour que son adresse d'origine reste intacte. Les quatre
 * autres partagent ce seul jeu de pages — sans quoi il faudrait cinq copies de
 * chaque fichier de route.
 */
export function generateStaticParams() {
  return LANGUES_PREFIXEES.map((lang) => ({ lang }));
}

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!estLangue(lang)) return {};
  const { company } = contenu(lang);
  const meta = META[lang];

  return {
    metadataBase: new URL("https://rdr-services.fr"),
    title: {
      default: `${company.name} — ${company.tagline} ${meta.titreSuffixe}`,
      template: `%s | ${company.name}`,
    },
    description: meta.description,
    keywords: meta.motsCles,
    alternates: equivalents(lang, "/"),
    openGraph: {
      type: "website",
      locale: LOCALE_OG[lang],
      siteName: company.name,
      title: `${company.name} — ${company.tagline}`,
      description: meta.description,
    },
  };
}

export default async function RootLayoutLangue({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  // Une langue inconnue dans l'adresse ne doit pas rendre une page à moitié
  // traduite : elle n'existe pas.
  if (!estLangue(lang)) notFound();

  return <Coque langue={lang}>{children}</Coque>;
}

import type { Metadata } from "next";
import { RegisterForm } from "@/components/forms/register-form";
import { estLangue } from "@/content";
import { ui } from "@/content/ui";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Créer votre espace client",
  description: "Créez votre espace RDR Services pour suivre vos séjours.",
  robots: { index: false },
};

export default async function RegisterPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!estLangue(lang)) notFound();
  const t = ui(lang).espace;

  return (
    <>
      <p className="eyebrow">{t.titre}</p>
      <h1 className="mt-5 font-display text-4xl leading-tight font-light text-vine-900">
        {t.creerEspace}
      </h1>
      <p className="mt-4 text-[0.9rem] leading-relaxed text-vine-600">
        Suivez vos séjours, téléchargez vos documents et échangez avec votre
        conseiller au même endroit.
      </p>
      <span className="rule-feuille mt-8 mb-9" />
      <RegisterForm langue={lang} />
    </>
  );
}

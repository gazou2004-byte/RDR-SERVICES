import type { Metadata } from "next";
import { LoginForm } from "@/components/forms/login-form";
import { estLangue } from "@/content";
import { ui } from "@/content/ui";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Connexion à votre espace",
  description: "Accédez à vos séjours, documents et messages RDR Services.",
  robots: { index: false },
};

export default async function LoginPage({
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
        {t.bonRetour}
      </h1>
      <p className="mt-4 text-[0.9rem] leading-relaxed text-vine-600">
        Retrouvez vos séjours, vos documents de voyage et vos échanges avec
        votre conseiller.
      </p>
      <span className="rule-feuille mt-8 mb-9" />
      <LoginForm langue={lang} />
    </>
  );
}

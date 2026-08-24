import type { Metadata } from "next";
import { LoginForm } from "@/components/forms/formulaires-compte";
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
        {t.accrocheConnexion}
      </p>
      <span className="rule-feuille mt-8 mb-9" />

      {/* Sur la vitrine statique, aucun compte ne peut être créé : mieux vaut
          le dire avant que le visiteur remplisse les champs. */}
      {process.env.NEXT_PUBLIC_VITRINE === "1" ? (
        <p className="mb-8 border border-feuille-600/35 bg-feuille-300/30 px-5 py-4 text-[0.85rem] leading-relaxed text-feuille-700">
          {t.demonstration}
        </p>
      ) : null}
      <LoginForm langue={lang} />
    </>
  );
}

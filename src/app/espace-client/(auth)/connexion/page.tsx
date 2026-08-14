import type { Metadata } from "next";
import { LoginForm } from "@/components/forms/login-form";

export const metadata: Metadata = {
  title: "Connexion à votre espace",
  description: "Accédez à vos séjours, documents et messages RDR Service.",
  robots: { index: false },
};

export default function LoginPage() {
  return (
    <>
      <p className="eyebrow">Espace client</p>
      <h1 className="mt-5 font-display text-4xl leading-tight font-light text-vine-900">
        Bon retour parmi nous
      </h1>
      <p className="mt-4 text-[0.9rem] leading-relaxed text-vine-600">
        Retrouvez vos séjours, vos documents de voyage et vos échanges avec
        votre conseiller.
      </p>
      <span className="rule-gold mt-8 mb-9" />
      <LoginForm />
    </>
  );
}

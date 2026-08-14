import type { Metadata } from "next";
import { RegisterForm } from "@/components/forms/register-form";

export const metadata: Metadata = {
  title: "Créer votre espace client",
  description: "Créez votre espace RDR Service pour suivre vos séjours.",
  robots: { index: false },
};

export default function RegisterPage() {
  return (
    <>
      <p className="eyebrow">Espace client</p>
      <h1 className="mt-5 font-display text-4xl leading-tight font-light text-parch-50">
        Créer votre espace
      </h1>
      <p className="mt-4 text-[0.9rem] leading-relaxed text-parch-300">
        Suivez vos séjours, téléchargez vos documents et échangez avec votre
        conseiller au même endroit.
      </p>
      <span className="rule-gold mt-8 mb-9" />
      <RegisterForm />
    </>
  );
}

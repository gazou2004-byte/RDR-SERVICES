"use client";

import Link from "next/link";
import { Field, Input } from "@/components/ui/form";
import { ui } from "@/content/ui";
import { lienEspaceClient, type Langue } from "@/content/langue";

/**
 * Version du formulaire d'inscription pour la vitrine statique.
 * Même parti pris que la connexion : les champs sont là, et le bouton dit
 * pourquoi il ne crée rien.
 */
export function RegisterForm({ langue }: { langue: Langue }) {
  const t = ui(langue).espace;
  const f = ui(langue).formulaire;

  return (
    <form
      className="space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={f.prenom} name="firstName">
          <Input id="firstName" name="firstName" required autoComplete="given-name" />
        </Field>
        <Field label={f.nom} name="lastName">
          <Input id="lastName" name="lastName" required autoComplete="family-name" />
        </Field>
      </div>

      <Field label={t.adresseEmail} name="email">
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={t.exempleEmail}
        />
      </Field>

      <Field label={f.telephone} name="phone">
        <Input id="phone" name="phone" type="tel" autoComplete="tel" />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={t.motDePasse} name="password">
          <Input id="password" name="password" type="password" required autoComplete="new-password" />
        </Field>
        <Field label={t.confirmerMotDePasse} name="confirm">
          <Input id="confirm" name="confirm" type="password" required autoComplete="new-password" />
        </Field>
      </div>

      {/* Désactivé plutôt que muet : un bouton qui ne fait rien sans dire
          pourquoi laisse le visiteur croire à une panne. */}
      <button
        type="submit"
        disabled
        title={t.demonstration}
        className="w-full cursor-not-allowed bg-vine-900/20 px-8 py-4 text-[0.72rem] font-medium tracking-[0.2em] text-vine-600 uppercase"
      >
        {t.creerMonEspace}
      </button>


      <p className="text-center text-[0.85rem] text-vine-600">
        <Link
          href={`${lienEspaceClient(langue)}/connexion`}
          className="text-tuile-600 transition-colors hover:text-tuile-700"
        >
          {t.seConnecter}
        </Link>
      </p>
    </form>
  );
}

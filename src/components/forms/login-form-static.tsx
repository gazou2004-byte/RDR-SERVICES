"use client";

import Link from "next/link";
import { Field, Input } from "@/components/ui/form";
import { ui } from "@/content/ui";
import { lienEspaceClient, type Langue } from "@/content/langue";

/**
 * Version du formulaire de connexion pour la vitrine statique.
 *
 * Sans serveur, aucune session ne peut être ouverte : les champs sont là, le
 * bouton explique pourquoi il ne mène nulle part. Mieux vaut le dire que
 * laisser un visiteur saisir son mot de passe pour rien.
 */
export function LoginForm({ langue }: { langue: Langue }) {
  const t = ui(langue).espace;

  return (
    <form
      className="space-y-6"
    >
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

      <Field label={t.motDePasse} name="password">
        <Input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
        />
      </Field>

      {/* Désactivé plutôt que muet : un bouton qui ne fait rien sans dire
          pourquoi laisse le visiteur croire à une panne. */}
      <button
        type="submit"
        disabled
        title={t.demonstration}
        className="w-full cursor-not-allowed bg-vine-900/20 px-8 py-4 text-[0.72rem] font-medium tracking-[0.2em] text-vine-600 uppercase"
      >
        {t.seConnecter}
      </button>


      <p className="text-center text-[0.85rem] text-vine-600">
        <Link
          href={`${lienEspaceClient(langue)}/inscription`}
          className="text-tuile-600 transition-colors hover:text-tuile-700"
        >
          {t.creerMonEspace}
        </Link>
      </p>
    </form>
  );
}

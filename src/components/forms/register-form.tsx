"use client";

import Link from "next/link";
import { useActionState } from "react";
import { registerAction, type FormState } from "@/lib/actions/auth-actions";
import { Field, FormAlert, Input, SubmitButton } from "@/components/ui/form";
import { ui } from "@/content/ui";
import { lienEspaceClient, type Langue } from "@/content/langue";

export function RegisterForm({ langue }: { langue: Langue }) {
  const t = ui(langue).espace;
  const f = ui(langue).formulaire;
  const [state, formAction] = useActionState<FormState, FormData>(
    registerAction,
    {},
  );

  return (
    <form action={formAction} className="space-y-6">
      {state.error ? <FormAlert tone="error">{state.error}</FormAlert> : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label={f.prenom}
          name="firstName"
          errors={state.fieldErrors?.firstName}
        >
          <Input id="firstName" name="firstName" required autoComplete="given-name" />
        </Field>
        <Field label="Nom" name="lastName" errors={state.fieldErrors?.lastName}>
          <Input id="lastName" name="lastName" required autoComplete="family-name" />
        </Field>
      </div>

      <Field label={t.adresseEmail} name="email" errors={state.fieldErrors?.email}>
        <Input id="email" name="email" type="email" required autoComplete="email" />
      </Field>

      <Field label={f.telephone} name="phone" errors={state.fieldErrors?.phone}>
        <Input id="phone" name="phone" type="tel" autoComplete="tel" />
      </Field>

      <Field
        label={t.motDePasse}
        name="password"
        errors={state.fieldErrors?.password}
        hint="8 caractères minimum."
      >
        <Input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="new-password"
        />
      </Field>

      <Field
        label={t.confirmerMotDePasse}
        name="confirmPassword"
        errors={state.fieldErrors?.confirmPassword}
      >
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          autoComplete="new-password"
        />
      </Field>

      <SubmitButton className="w-full" pendingLabel="Création…">
        Créer mon espace
      </SubmitButton>

      <p className="text-center text-[0.82rem] text-vine-500">
        Vous avez déjà un compte ?{" "}
        <Link
          href={`${lienEspaceClient(langue)}/connexion`}
          className="inline-block py-1.5 text-tuile-600 transition-colors hover:text-tuile-700"
        >
          Se connecter
        </Link>
      </p>
    </form>
  );
}

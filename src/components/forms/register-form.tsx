"use client";

import Link from "next/link";
import { useActionState } from "react";
import { registerAction, type FormState } from "@/lib/actions/auth-actions";
import { Field, FormAlert, Input, SubmitButton } from "@/components/ui/form";

export function RegisterForm() {
  const [state, formAction] = useActionState<FormState, FormData>(
    registerAction,
    {},
  );

  return (
    <form action={formAction} className="space-y-6">
      {state.error ? <FormAlert tone="error">{state.error}</FormAlert> : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label="Prénom"
          name="firstName"
          errors={state.fieldErrors?.firstName}
        >
          <Input id="firstName" name="firstName" required autoComplete="given-name" />
        </Field>
        <Field label="Nom" name="lastName" errors={state.fieldErrors?.lastName}>
          <Input id="lastName" name="lastName" required autoComplete="family-name" />
        </Field>
      </div>

      <Field label="Adresse e-mail" name="email" errors={state.fieldErrors?.email}>
        <Input id="email" name="email" type="email" required autoComplete="email" />
      </Field>

      <Field label="Téléphone" name="phone" errors={state.fieldErrors?.phone}>
        <Input id="phone" name="phone" type="tel" autoComplete="tel" />
      </Field>

      <Field
        label="Mot de passe"
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
        label="Confirmer le mot de passe"
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
          href="/espace-client/connexion"
          className="text-wine-600 transition-colors hover:text-wine-700"
        >
          Se connecter
        </Link>
      </p>
    </form>
  );
}

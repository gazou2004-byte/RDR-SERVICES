"use client";

import Link from "next/link";
import { useActionState } from "react";
import { loginAction, type FormState } from "@/lib/actions/auth-actions";
import { Field, FormAlert, Input, SubmitButton } from "@/components/ui/form";
import { ui } from "@/content/ui";
import { lienEspaceClient, type Langue } from "@/content/langue";

export function LoginForm({ langue }: { langue: Langue }) {
  const t = ui(langue).espace;
  const [state, formAction] = useActionState<FormState, FormData>(
    loginAction,
    {},
  );

  return (
    <form action={formAction} className="space-y-6">
      {state.error ? <FormAlert tone="error">{state.error}</FormAlert> : null}

      <Field label={t.adresseEmail} name="email" errors={state.fieldErrors?.email}>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={t.exempleEmail}
        />
      </Field>

      <Field
        label={t.motDePasse}
        name="password"
        errors={state.fieldErrors?.password}
      >
        <Input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
        />
      </Field>

      <SubmitButton className="w-full" pendingLabel="Connexion…">
        Se connecter
      </SubmitButton>

      <p className="text-center text-[0.82rem] text-vine-500">
        Pas encore de compte ?{" "}
        <Link
          href={`${lienEspaceClient(langue)}/inscription`}
          className="inline-block py-1.5 text-tuile-600 transition-colors hover:text-tuile-700"
        >
          Créer mon espace
        </Link>
      </p>
    </form>
  );
}

"use client";

import { useActionState } from "react";
import {
  updatePasswordAction,
  updateProfileAction,
  type FormState,
} from "@/lib/actions/auth-actions";
import { Field, FormAlert, Input, SubmitButton } from "@/components/ui/form";
import { ui } from "@/content/ui";
import type { Langue } from "@/content/langue";

export function ProfileForm({
  user,
  langue,
}: {
  user: { firstName: string; lastName: string; email: string; phone: string | null };
  langue: Langue;
}) {
  const t = ui(langue).espace;
  const f = ui(langue).formulaire;
  const [state, formAction] = useActionState<FormState, FormData>(
    updateProfileAction,
    {},
  );

  return (
    <form action={formAction} className="space-y-6">
      {state.error ? <FormAlert tone="error">{state.error}</FormAlert> : null}
      {state.success ? (
        <FormAlert tone="success">{state.success}</FormAlert>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label={f.prenom}
          name="firstName"
          errors={state.fieldErrors?.firstName}
        >
          <Input
            id="firstName"
            name="firstName"
            defaultValue={user.firstName}
            required
          />
        </Field>
        <Field label="Nom" name="lastName" errors={state.fieldErrors?.lastName}>
          <Input
            id="lastName"
            name="lastName"
            defaultValue={user.lastName}
            required
          />
        </Field>
      </div>

      <Field
        label={t.adresseEmail}
        name="email"
        hint={t.indiceEmail}
      >
        <Input
          id="email"
          name="email"
          value={user.email}
          disabled
          readOnly
          className="cursor-not-allowed opacity-60"
        />
      </Field>

      <Field label={f.telephone} name="phone" errors={state.fieldErrors?.phone}>
        <Input
          id="phone"
          name="phone"
          type="tel"
          defaultValue={user.phone ?? ""}
        />
      </Field>

      <SubmitButton pendingLabel="Enregistrement…">{t.enregistrer}</SubmitButton>
    </form>
  );
}

export function PasswordForm({ langue }: { langue: Langue }) {
  const t = ui(langue).espace;
  const [state, formAction] = useActionState<FormState, FormData>(
    updatePasswordAction,
    {},
  );

  return (
    <form action={formAction} className="space-y-6">
      {state.error ? <FormAlert tone="error">{state.error}</FormAlert> : null}
      {state.success ? (
        <FormAlert tone="success">{state.success}</FormAlert>
      ) : null}

      <Field
        label={t.motDePasseActuel}
        name="currentPassword"
        errors={state.fieldErrors?.currentPassword}
      >
        <Input
          id="currentPassword"
          name="currentPassword"
          type="password"
          required
          autoComplete="current-password"
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label={t.nouveauMotDePasse}
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
          label={t.confirmer}
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
      </div>

      <SubmitButton pendingLabel="Modification…">
        {t.changerMotDePasse}
      </SubmitButton>
    </form>
  );
}

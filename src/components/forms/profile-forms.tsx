"use client";

import { useActionState } from "react";
import {
  updatePasswordAction,
  updateProfileAction,
  type FormState,
} from "@/lib/actions/auth-actions";
import { Field, FormAlert, Input, SubmitButton } from "@/components/ui/form";

export function ProfileForm({
  user,
}: {
  user: { firstName: string; lastName: string; email: string; phone: string | null };
}) {
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
          label="Prénom"
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
        label="Adresse e-mail"
        name="email"
        hint="Pour modifier votre e-mail, écrivez à votre conseiller."
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

      <Field label="Téléphone" name="phone" errors={state.fieldErrors?.phone}>
        <Input
          id="phone"
          name="phone"
          type="tel"
          defaultValue={user.phone ?? ""}
        />
      </Field>

      <SubmitButton pendingLabel="Enregistrement…">Enregistrer</SubmitButton>
    </form>
  );
}

export function PasswordForm() {
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
        label="Mot de passe actuel"
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
          label="Nouveau mot de passe"
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
          label="Confirmer"
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
        Changer le mot de passe
      </SubmitButton>
    </form>
  );
}

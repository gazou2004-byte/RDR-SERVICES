"use client";

import { useActionState } from "react";
import { submitLeadAction } from "@/lib/actions/lead-actions";
import type { FormState } from "@/lib/actions/etat-formulaire";
import {
  Field,
  FormAlert,
  Input,
  Select,
  SubmitButton,
  Textarea,
} from "@/components/ui/form";
import type { Destination } from "@/content/site";
import { ui } from "@/content/ui";
import type { Langue } from "@/content/langue";

export function ContactForm({
  langue,
  destinations,
}: {
  langue: Langue;
  /* Comme la version statique : le contenu ne traverse pas le navigateur. */
  destinations: Destination[];
}) {
  const t = ui(langue);
  const budgets = [...t.formulaire.budgets, t.formulaire.inconnu];
  const [state, formAction] = useActionState<FormState, FormData>(
    submitLeadAction,
    {},
  );

  if (state.success) {
    return (
      <div className="border border-feuille-600/40 bg-sand-100 p-12 text-center">
        <p className="font-display text-3xl font-light text-feuille-600">
          {t.formulaire.merci}
        </p>
        <p className="mx-auto mt-5 max-w-md text-[0.95rem] leading-relaxed text-vine-700">
          {state.success}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.error ? <FormAlert tone="error">{state.error}</FormAlert> : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label={`${t.formulaire.prenom} *`}
          name="firstName"
          errors={state.fieldErrors?.firstName}
        >
          <Input id="firstName" name="firstName" required autoComplete="given-name" />
        </Field>
        <Field label={`${t.formulaire.nom} *`} name="lastName" errors={state.fieldErrors?.lastName}>
          <Input id="lastName" name="lastName" required autoComplete="family-name" />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={`${t.formulaire.email} *`} name="email" errors={state.fieldErrors?.email}>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </Field>
        <Field label={t.formulaire.telephone} name="phone" errors={state.fieldErrors?.phone}>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={t.formulaire.destination} name="destination">
          <Select id="destination" name="destination" defaultValue="">
            <option value="">{t.formulaire.inconnu}</option>
            {destinations.map((destination) => (
              <option key={destination.slug} value={destination.name}>
                {destination.name}
              </option>
            ))}
            <option value="Plusieurs régions">{t.formulaire.plusieurs}</option>
            <option value="Événement privé">{t.formulaire.evenement}</option>
          </Select>
        </Field>
        <Field
          label={t.formulaire.depart}
          name="startDate"
          hint={t.formulaire.indiceDepart}
        >
          <Input id="startDate" name="startDate" type="date" />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={t.formulaire.voyageurs} name="travelers">
          <Input
            id="travelers"
            name="travelers"
            type="number"
            min={1}
            max={40}
            placeholder="2"
          />
        </Field>
        <Field label={t.formulaire.budget} name="budget">
          <Select id="budget" name="budget" defaultValue="">
            <option value="">{t.formulaire.preciserPlusTard}</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field
        label={`${t.formulaire.projet} *`}
        name="message"
        errors={state.fieldErrors?.message}
        hint={t.formulaire.indiceProjet}
      >
        <Textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder={t.formulaire.exemple}
        />
      </Field>

      {/* Piège à robots — invisible pour les visiteurs */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Ne pas remplir</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center">
        <SubmitButton>{t.formulaire.envoyer}</SubmitButton>
        <p className="text-[0.72rem] leading-relaxed text-vine-500">
          Réponse sous 24 h ouvrées. Vos données ne sont ni revendues ni
          transmises à des tiers.
        </p>
      </div>
    </form>
  );
}

"use client";

import { useActionState } from "react";
import { submitLeadAction } from "@/lib/actions/lead-actions";
import type { FormState } from "@/lib/actions/auth-actions";
import {
  Field,
  FormAlert,
  Input,
  Select,
  SubmitButton,
  Textarea,
} from "@/components/ui/form";
import { destinations } from "@/content/site";

const budgets = [
  "Moins de 3 000 €",
  "3 000 – 6 000 €",
  "6 000 – 12 000 €",
  "12 000 – 25 000 €",
  "Plus de 25 000 €",
  "Je ne sais pas encore",
];

export function ContactForm() {
  const [state, formAction] = useActionState<FormState, FormData>(
    submitLeadAction,
    {},
  );

  if (state.success) {
    return (
      <div className="border border-gold-500/40 bg-wine-900/60 p-12 text-center">
        <p className="font-display text-3xl font-light text-gold-400">Merci</p>
        <p className="mx-auto mt-5 max-w-md text-[0.95rem] leading-relaxed text-parch-200">
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
          label="Prénom *"
          name="firstName"
          errors={state.fieldErrors?.firstName}
        >
          <Input id="firstName" name="firstName" required autoComplete="given-name" />
        </Field>
        <Field label="Nom *" name="lastName" errors={state.fieldErrors?.lastName}>
          <Input id="lastName" name="lastName" required autoComplete="family-name" />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="E-mail *" name="email" errors={state.fieldErrors?.email}>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </Field>
        <Field label="Téléphone" name="phone" errors={state.fieldErrors?.phone}>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Destination souhaitée" name="destination">
          <Select id="destination" name="destination" defaultValue="">
            <option value="">Je ne sais pas encore</option>
            {destinations.map((destination) => (
              <option key={destination.slug} value={destination.name}>
                {destination.name}
              </option>
            ))}
            <option value="Plusieurs régions">Plusieurs régions</option>
            <option value="Événement privé">Événement privé / séminaire</option>
          </Select>
        </Field>
        <Field
          label="Date de départ approximative"
          name="startDate"
          hint="Une date indicative suffit."
        >
          <Input id="startDate" name="startDate" type="date" />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Nombre de voyageurs" name="travelers">
          <Input
            id="travelers"
            name="travelers"
            type="number"
            min={1}
            max={40}
            placeholder="2"
          />
        </Field>
        <Field label="Budget envisagé" name="budget">
          <Select id="budget" name="budget" defaultValue="">
            <option value="">Préciser plus tard</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field
        label="Votre projet *"
        name="message"
        errors={state.fieldErrors?.message}
        hint="Qui voyage, ce qui vous fait envie, ce que vous voulez éviter."
      >
        <Textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Nous sommes deux couples, nous aimerions découvrir les grands crus du Médoc sur quatre jours en septembre…"
        />
      </Field>

      {/* Piège à robots — invisible pour les visiteurs */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Ne pas remplir</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center">
        <SubmitButton>Envoyer ma demande</SubmitButton>
        <p className="text-[0.72rem] leading-relaxed text-parch-400">
          Réponse sous 24 h ouvrées. Vos données ne sont ni revendues ni
          transmises à des tiers.
        </p>
      </div>
    </form>
  );
}

"use client";

import { useState } from "react";
import {
  Field,
  Input,
  Select,
  Textarea,
} from "@/components/ui/form";
import { company, destinations } from "@/content/site";

const budgets = [
  "Moins de 3 000 €",
  "3 000 – 6 000 €",
  "6 000 – 12 000 €",
  "12 000 – 25 000 €",
  "Plus de 25 000 €",
  "Je ne sais pas encore",
];

/**
 * Version du formulaire pour la vitrine statique.
 *
 * Sans serveur, rien ne peut être enregistré en base : le formulaire compose
 * donc un e-mail pré-rempli et ouvre le logiciel de messagerie du visiteur.
 * C'est moins confortable qu'un envoi direct, mais cela fonctionne partout et
 * ne dépend d'aucun service tiers. Dès que le site tournera sur un serveur,
 * c'est `contact-form.tsx` qui reprend la main et enregistre les demandes.
 */
export function ContactFormStatic() {
  const [envoye, setEnvoye] = useState(false);

  function composer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const v = (k: string) => (data.get(k) as string) || "—";

    const corps = [
      `Prénom : ${v("firstName")}`,
      `Nom : ${v("lastName")}`,
      `E-mail : ${v("email")}`,
      `Téléphone : ${v("phone")}`,
      "",
      `Destination souhaitée : ${v("destination")}`,
      `Date de départ : ${v("startDate")}`,
      `Nombre de voyageurs : ${v("travelers")}`,
      `Budget envisagé : ${v("budget")}`,
      "",
      "Projet :",
      v("message"),
    ].join("\n");

    const sujet = `Demande de devis — ${v("firstName")} ${v("lastName")}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
    setEnvoye(true);
  }

  return (
    <form onSubmit={composer} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Prénom *" name="firstName">
          <Input id="firstName" name="firstName" required autoComplete="given-name" />
        </Field>
        <Field label="Nom *" name="lastName">
          <Input id="lastName" name="lastName" required autoComplete="family-name" />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="E-mail *" name="email">
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </Field>
        <Field label="Téléphone" name="phone">
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
          <Input id="travelers" name="travelers" type="number" min={1} max={40} placeholder="2" />
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

      <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 bg-tuile-600 px-8 py-4 text-[0.72rem] font-medium tracking-[0.2em] text-sand-50 uppercase transition-all duration-300 hover:bg-tuile-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tuile-600"
        >
          Envoyer ma demande
        </button>
        <p className="text-[0.72rem] leading-relaxed text-vine-500">
          {envoye
            ? "Votre logiciel de messagerie devrait s'ouvrir avec la demande pré-remplie. Sinon, écrivez-nous directement."
            : "Le bouton ouvre votre messagerie avec la demande déjà rédigée."}
        </p>
      </div>

      <p className="text-[0.8rem] text-vine-600">
        Vous préférez écrire vous-même ?{" "}
        <a
          href={`mailto:${company.email}`}
          className="inline-block py-1.5 text-tuile-600 transition-colors hover:text-tuile-700"
        >
          {company.email}
        </a>
      </p>
    </form>
  );
}

"use client";

import { useState } from "react";
import {
  Field,
  Input,
  Select,
  Textarea,
} from "@/components/ui/form";
import type { Destination } from "@/content/site";
import { ui } from "@/content/ui";
import type { Langue } from "@/content/langue";

/**
 * Version du formulaire pour la vitrine statique.
 *
 * Sans serveur, rien ne peut être enregistré en base : le formulaire compose
 * donc un e-mail pré-rempli et ouvre le logiciel de messagerie du visiteur.
 * C'est moins confortable qu'un envoi direct, mais cela fonctionne partout et
 * ne dépend d'aucun service tiers. Dès que le site tournera sur un serveur,
 * c'est `contact-form.tsx` qui reprend la main et enregistre les demandes.
 */
export function ContactFormStatic({
  langue,
  email,
  destinations,
}: {
  langue: Langue;
  /*
   * L'adresse et les destinations arrivent en propriétés : ce composant tourne
   * dans le navigateur, et y importer le contenu enverrait les deux
   * dictionnaires entiers pour une liste déroulante.
   */
  email: string;
  destinations: Destination[];
}) {
  const t = ui(langue);
  const budgets = [...t.formulaire.budgets, t.formulaire.inconnu];
  const [envoye, setEnvoye] = useState(false);

  function composer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const v = (k: string) => (data.get(k) as string) || "—";

    const corps = [
      `${t.formulaire.prenom} : ${v("firstName")}`,
      `${t.formulaire.nom} : ${v("lastName")}`,
      `${t.formulaire.email} : ${v("email")}`,
      `${t.formulaire.telephone} : ${v("phone")}`,
      "",
      `${t.formulaire.destination} : ${v("destination")}`,
      `${t.formulaire.dateDepart} : ${v("startDate")}`,
      `${t.formulaire.voyageurs} : ${v("travelers")}`,
      `${t.formulaire.budget} : ${v("budget")}`,
      "",
      t.formulaire.ligneProjet,
      v("message"),
    ].join("\n");

    const sujet = `${t.formulaire.sujet} — ${v("firstName")} ${v("lastName")}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
    setEnvoye(true);
  }

  return (
    <form onSubmit={composer} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={`${t.formulaire.prenom} *`} name="firstName">
          <Input id="firstName" name="firstName" required autoComplete="given-name" />
        </Field>
        <Field label={`${t.formulaire.nom} *`} name="lastName">
          <Input id="lastName" name="lastName" required autoComplete="family-name" />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={`${t.formulaire.email} *`} name="email">
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </Field>
        <Field label={t.formulaire.telephone} name="phone">
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
          <Input id="travelers" name="travelers" type="number" min={1} max={40} placeholder="2" />
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

      <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 bg-tuile-600 px-8 py-4 text-[0.72rem] font-medium tracking-[0.2em] text-sand-50 uppercase transition-all duration-300 hover:bg-tuile-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tuile-600"
        >
          {t.formulaire.envoyer}
        </button>
        <p className="text-[0.72rem] leading-relaxed text-vine-500">
          {envoye
            ? t.formulaire.messagerieOuverte
            : t.formulaire.messagerieAvant}
        </p>
      </div>

      <p className="text-[0.8rem] text-vine-600">
        {t.formulaire.ecrireSoiMeme}{" "}
        <a
          href={`mailto:${email}`}
          className="inline-block py-1.5 text-tuile-600 transition-colors hover:text-tuile-700"
        >
          {email}
        </a>
      </p>
    </form>
  );
}

"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendMessageAction } from "@/lib/actions/lead-actions";
import type { FormState } from "@/lib/actions/auth-actions";
import { FormAlert, SubmitButton, Textarea } from "@/components/ui/form";
import { ui } from "@/content/ui";
import type { Langue } from "@/content/langue";

export function MessageForm({
  bookings,
  langue,
}: {
  bookings: { id: string; reference: string; destination: string }[];
  langue: Langue;
}) {
  const t = ui(langue).espace;
  const [state, formAction] = useActionState<FormState, FormData>(
    sendMessageAction,
    {},
  );
  const formRef = useRef<HTMLFormElement>(null);

  // Vide le champ une fois le message parti
  useEffect(() => {
    if (state.success) formRef.current?.reset();
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="space-y-5">
      {state.error ? <FormAlert tone="error">{state.error}</FormAlert> : null}
      {state.success ? (
        <FormAlert tone="success">{state.success}</FormAlert>
      ) : null}

      {bookings.length > 0 ? (
        <div>
          <label
            htmlFor="bookingId"
            className="block text-[0.7rem] font-medium tracking-[0.18em] text-vine-600 uppercase"
          >
            {t.sejourConcerne}
          </label>
          <select
            id="bookingId"
            name="bookingId"
            defaultValue=""
            className="mt-2.5 w-full border border-vine-900/20 bg-sand-100 px-4 py-3.5 text-[0.95rem] text-vine-900 focus:border-feuille-600 focus:outline-none"
          >
            <option value="">{t.questionGenerale}</option>
            {bookings.map((booking) => (
              <option key={booking.id} value={booking.id}>
                {booking.destination} — {booking.reference}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      <div>
        <label
          htmlFor="body"
          className="block text-[0.7rem] font-medium tracking-[0.18em] text-vine-600 uppercase"
        >
          {t.votreMessage}
        </label>
        <div className="mt-2.5">
          <Textarea
            id="body"
            name="body"
            rows={5}
            required
            placeholder={t.exempleMessage}
          />
        </div>
        {state.fieldErrors?.body ? (
          <p className="mt-2 text-[0.75rem] text-feuille-600">
            {state.fieldErrors.body[0]}
          </p>
        ) : null}
      </div>

      <SubmitButton pendingLabel="Envoi…">{t.envoyer}</SubmitButton>
    </form>
  );
}

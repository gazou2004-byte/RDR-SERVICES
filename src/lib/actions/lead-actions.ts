"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import type { FormState } from "./auth-actions";

const leadSchema = z.object({
  firstName: z.string().trim().min(2, "Votre prénom est trop court."),
  lastName: z.string().trim().min(2, "Votre nom est trop court."),
  email: z.string().trim().toLowerCase().email("Adresse e-mail invalide."),
  phone: z.string().trim().optional(),
  destination: z.string().trim().optional(),
  startDate: z.string().trim().optional(),
  travelers: z.string().trim().optional(),
  budget: z.string().trim().optional(),
  message: z
    .string()
    .trim()
    .min(20, "Décrivez votre projet en quelques lignes (20 caractères minimum)."),
  // Champ piège invisible : rempli uniquement par les robots
  website: z.string().max(0).optional(),
});

/** Enregistre une demande de devis envoyée depuis le formulaire public. */
export async function submitLeadAction(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = leadSchema.safeParse(
    Object.fromEntries(formData) as Record<string, string>,
  );

  if (!parsed.success) {
    return { fieldErrors: z.flattenError(parsed.error).fieldErrors };
  }

  // Robot détecté : on répond normalement sans rien enregistrer
  if (parsed.data.website) {
    return { success: "Votre demande a bien été envoyée." };
  }

  const lead = parsed.data;

  await prisma.lead.create({
    data: {
      firstName: lead.firstName,
      lastName: lead.lastName,
      email: lead.email,
      message: lead.message,
      phone: lead.phone || null,
      destination: lead.destination || null,
      startDate: lead.startDate || null,
      travelers: lead.travelers || null,
      budget: lead.budget || null,
    },
  });

  return {
    success:
      "Votre demande est bien arrivée. Nous revenons vers vous sous 24 heures ouvrées.",
  };
}

const messageSchema = z.object({
  bookingId: z.string().trim().optional(),
  body: z.string().trim().min(2, "Votre message est vide."),
});

/** Envoie un message depuis l'espace client. */
export async function sendMessageAction(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const user = await requireUser();
  const parsed = messageSchema.safeParse(
    Object.fromEntries(formData) as Record<string, string>,
  );

  if (!parsed.success) {
    return { fieldErrors: z.flattenError(parsed.error).fieldErrors };
  }

  await prisma.message.create({
    data: {
      userId: user.id,
      bookingId: parsed.data.bookingId || null,
      body: parsed.data.body,
      fromStaff: false,
    },
  });

  revalidatePath("/espace-client/messages");
  return { success: "Message envoyé." };
}

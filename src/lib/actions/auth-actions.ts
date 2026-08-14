"use server";

import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { createSession, destroySession, requireUser } from "@/lib/auth";

export type FormState = {
  error?: string;
  fieldErrors?: Record<string, string[]>;
  success?: string;
};

const registerSchema = z
  .object({
    firstName: z.string().trim().min(2, "Votre prénom est trop court."),
    lastName: z.string().trim().min(2, "Votre nom est trop court."),
    email: z.string().trim().toLowerCase().email("Adresse e-mail invalide."),
    phone: z.string().trim().optional(),
    password: z
      .string()
      .min(8, "Le mot de passe doit contenir au moins 8 caractères."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Les deux mots de passe ne correspondent pas.",
  });

export async function registerAction(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = registerSchema.safeParse(
    Object.fromEntries(formData) as Record<string, string>,
  );

  if (!parsed.success) {
    return { fieldErrors: z.flattenError(parsed.error).fieldErrors };
  }

  const { firstName, lastName, email, phone, password } = parsed.data;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return {
      error:
        "Un compte existe déjà avec cette adresse. Essayez de vous connecter.",
    };
  }

  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      phone: phone || null,
      passwordHash: await bcrypt.hash(password, 12),
    },
  });

  await createSession(user.id);
  redirect("/espace-client");
}

const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email("Adresse e-mail invalide."),
  password: z.string().min(1, "Merci de saisir votre mot de passe."),
});

export async function loginAction(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = loginSchema.safeParse(
    Object.fromEntries(formData) as Record<string, string>,
  );

  if (!parsed.success) {
    return { fieldErrors: z.flattenError(parsed.error).fieldErrors };
  }

  const user = await prisma.user.findUnique({
    where: { email: parsed.data.email },
  });

  // Message volontairement identique dans les deux cas : ne pas révéler
  // si l'adresse existe en base.
  const invalid = { error: "Adresse e-mail ou mot de passe incorrect." };
  if (!user) {
    // Comparaison à vide pour égaliser le temps de réponse
    await bcrypt.compare(parsed.data.password, "$2a$12$invalidsaltinvalidsalti");
    return invalid;
  }

  const valid = await bcrypt.compare(parsed.data.password, user.passwordHash);
  if (!valid) return invalid;

  await createSession(user.id);
  redirect("/espace-client");
}

export async function logoutAction() {
  await destroySession();
  redirect("/");
}

const profileSchema = z.object({
  firstName: z.string().trim().min(2, "Votre prénom est trop court."),
  lastName: z.string().trim().min(2, "Votre nom est trop court."),
  phone: z.string().trim().optional(),
});

export async function updateProfileAction(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const user = await requireUser();
  const parsed = profileSchema.safeParse(
    Object.fromEntries(formData) as Record<string, string>,
  );

  if (!parsed.success) {
    return { fieldErrors: z.flattenError(parsed.error).fieldErrors };
  }

  await prisma.user.update({
    where: { id: user.id },
    data: {
      firstName: parsed.data.firstName,
      lastName: parsed.data.lastName,
      phone: parsed.data.phone || null,
    },
  });

  return { success: "Vos informations ont bien été enregistrées." };
}

const passwordSchema = z
  .object({
    currentPassword: z.string().min(1, "Saisissez votre mot de passe actuel."),
    password: z
      .string()
      .min(8, "Le nouveau mot de passe doit contenir au moins 8 caractères."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Les deux mots de passe ne correspondent pas.",
  });

export async function updatePasswordAction(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const sessionUser = await requireUser();
  const parsed = passwordSchema.safeParse(
    Object.fromEntries(formData) as Record<string, string>,
  );

  if (!parsed.success) {
    return { fieldErrors: z.flattenError(parsed.error).fieldErrors };
  }

  const user = await prisma.user.findUniqueOrThrow({
    where: { id: sessionUser.id },
  });

  const valid = await bcrypt.compare(
    parsed.data.currentPassword,
    user.passwordHash,
  );
  if (!valid) {
    return { error: "Le mot de passe actuel est incorrect." };
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { passwordHash: await bcrypt.hash(parsed.data.password, 12) },
  });

  return { success: "Votre mot de passe a bien été modifié." };
}

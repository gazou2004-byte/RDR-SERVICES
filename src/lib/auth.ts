import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";
import { SignJWT, jwtVerify } from "jose";
import { prisma } from "./prisma";

const COOKIE_NAME = "rdr_session";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 jours

function getSecret() {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error(
      "AUTH_SECRET est absent ou trop court. Génère une clé avec : openssl rand -base64 48",
    );
  }
  return new TextEncoder().encode(secret);
}

/** Crée la session et pose le cookie signé. */
export async function createSession(userId: string) {
  const token = await new SignJWT({ sub: userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${MAX_AGE_SECONDS}s`)
    .sign(getSecret());

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  });
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

/** Identifiant de l'utilisateur connecté, ou null. */
async function readUserId(): Promise<string | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, getSecret());
    return typeof payload.sub === "string" ? payload.sub : null;
  } catch {
    // Jeton expiré, modifié ou signé avec une autre clé
    return null;
  }
}

/**
 * Utilisateur connecté, ou null. Mis en cache pour la durée du rendu :
 * plusieurs appels dans la même page ne font qu'une requête SQL.
 */
export const getCurrentUser = cache(async () => {
  const userId = await readUserId();
  if (!userId) return null;

  return prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      phone: true,
      role: true,
      createdAt: true,
    },
  });
});

/** Utilisateur connecté, ou redirection vers la page de connexion. */
export async function requireUser() {
  const user = await getCurrentUser();
  if (!user) redirect("/espace-client/connexion");
  return user;
}

/**
 * Jeu de données de démonstration.
 * Lancer avec : npm run db:seed
 *
 * Crée un compte client de test :
 *   e-mail   : client@rdr-services.fr
 *   mot de passe : demo1234
 */
import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../src/generated/prisma/client";

const prisma = new PrismaClient({
  adapter: new PrismaBetterSqlite3({
    url: process.env.DATABASE_URL ?? "file:./dev.db",
  }),
});

async function main() {
  const email = "client@rdr-services.fr";

  /*
   * On efface toute trace d'un peuplement précédent avant de recommencer.
   * Filtrer sur la seule adresse actuelle ne suffit pas : si elle a changé
   * entre-temps, l'ancien compte reste en base et ses séjours font échouer
   * la contrainte d'unicité sur les références.
   */
  await prisma.booking.deleteMany({ where: { reference: { startsWith: "RDR-" } } });
  await prisma.user.deleteMany({ where: { email: { contains: "@rdr-service" } } });
  await prisma.lead.deleteMany({ where: { email: { contains: "@exemple.fr" } } });

  const user = await prisma.user.create({
    data: {
      email,
      firstName: "Camille",
      lastName: "Dubreuil",
      phone: "+33 6 12 34 56 78",
      passwordHash: await bcrypt.hash("demo1234", 12),
    },
  });

  const inThirtyDays = (days: number) =>
    new Date(Date.now() + days * 86_400_000);

  const upcoming = await prisma.booking.create({
    data: {
      userId: user.id,
      reference: "RDR-2026-0042",
      destination: "Bordeaux & Médoc",
      startDate: inThirtyDays(38),
      endDate: inThirtyDays(42),
      travelers: 4,
      status: "CONFIRME",
      totalCents: 1_240_000,
      paidCents: 372_000,
      notes:
        "Château Pichon-Longueville confirmé pour le mardi 14 h.\nDéjeuner réservé au Lion d'Or à Arcins.\nAllergie aux fruits de mer signalée pour Madame — transmise à toutes les tables.",
    },
  });

  const quote = await prisma.booking.create({
    data: {
      userId: user.id,
      reference: "RDR-2026-0067",
      destination: "Pays Basque",
      startDate: inThirtyDays(120),
      endDate: inThirtyDays(124),
      travelers: 2,
      status: "DEVIS",
      totalCents: 486_000,
      paidCents: 0,
      notes:
        "Proposition envoyée. En attente de votre retour sur le choix de l'hôtel à Saint-Jean-de-Luz.",
    },
  });

  await prisma.booking.create({
    data: {
      userId: user.id,
      reference: "RDR-2025-0918",
      destination: "Périgord & Dordogne",
      startDate: new Date("2025-09-12"),
      endDate: new Date("2025-09-16"),
      travelers: 4,
      status: "TERMINE",
      totalCents: 980_000,
      paidCents: 980_000,
    },
  });

  await prisma.document.createMany({
    data: [
      {
        bookingId: upcoming.id,
        title: "Programme détaillé — Bordeaux & Médoc",
        kind: "PROGRAMME",
        url: "#",
        sizeLabel: "1,2 Mo",
      },
      {
        bookingId: upcoming.id,
        title: "Facture d'acompte n° 2026-0042-A",
        kind: "FACTURE",
        url: "#",
        sizeLabel: "184 Ko",
      },
      {
        bookingId: upcoming.id,
        title: "Bon d'échange — Château Pichon-Longueville",
        kind: "VOUCHER",
        url: "#",
        sizeLabel: "96 Ko",
      },
      {
        bookingId: quote.id,
        title: "Devis n° 2026-0067",
        kind: "DEVIS",
        url: "#",
        sizeLabel: "312 Ko",
      },
    ],
  });

  await prisma.message.createMany({
    data: [
      {
        userId: user.id,
        bookingId: upcoming.id,
        fromStaff: true,
        body: "Bonjour Camille,\n\nBonne nouvelle : Château Pichon-Longueville nous confirme la visite privée du mardi à 14 h, avec dégustation de trois millésimes commentée par le maître de chai.\n\nJe vous ai déposé le programme détaillé dans vos documents.",
        createdAt: new Date(Date.now() - 4 * 86_400_000),
      },
      {
        userId: user.id,
        bookingId: upcoming.id,
        fromStaff: false,
        body: "Parfait, merci ! Est-il possible de prévoir un peu de temps libre le mercredi après-midi ?",
        createdAt: new Date(Date.now() - 3 * 86_400_000),
      },
      {
        userId: user.id,
        bookingId: upcoming.id,
        fromStaff: true,
        body: "Bien sûr. Je décale la visite de Saint-Émilion au matin et vous laisse l'après-midi libre. Votre chauffeur restera disponible si vous souhaitez sortir.",
        createdAt: new Date(Date.now() - 2 * 86_400_000),
      },
    ],
  });

  await prisma.lead.createMany({
    data: [
      {
        firstName: "Julien",
        lastName: "Moreau",
        email: "julien.moreau@exemple.fr",
        phone: "+33 6 22 33 44 55",
        destination: "Gascogne & Armagnac",
        travelers: "6",
        budget: "6 000 – 12 000 €",
        message:
          "Nous cherchons à organiser un week-end entre amis autour de l'armagnac et de la gastronomie gasconne, début octobre.",
      },
    ],
  });

  console.log("Données de démonstration créées.");
  console.log("Connexion : client@rdr-services.fr / demo1234");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

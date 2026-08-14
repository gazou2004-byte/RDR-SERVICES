import "server-only";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "@/generated/prisma/client";

/**
 * Client Prisma partagé.
 *
 * En développement, Next.js recharge les modules à chaque modification :
 * on conserve l'instance sur `globalThis` pour éviter d'ouvrir des dizaines
 * de connexions à la base.
 *
 * Pour passer en PostgreSQL : remplace l'adaptateur ci-dessous par
 * `@prisma/adapter-pg` et change `provider` dans prisma/schema.prisma.
 */
const createClient = () =>
  new PrismaClient({
    adapter: new PrismaBetterSqlite3({
      url: process.env.DATABASE_URL ?? "file:./dev.db",
    }),
  });

const globalForPrisma = globalThis as unknown as {
  prisma?: ReturnType<typeof createClient>;
};

export const prisma = globalForPrisma.prisma ?? createClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

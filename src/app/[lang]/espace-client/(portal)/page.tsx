import Link from "next/link";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { BookingCard } from "@/components/portal/booking-card";
import { EmptyState } from "@/components/portal/empty-state";
import { formatDate, documentKinds } from "@/lib/format";
import { estLangue } from "@/content";
import { ui } from "@/content/ui";
import { notFound } from "next/navigation";

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!estLangue(lang)) notFound();
  const t = ui(lang).espace;
  const user = await requireUser();

  const [bookings, documents, unreadMessages] = await Promise.all([
    prisma.booking.findMany({
      where: { userId: user.id },
      orderBy: { startDate: "asc" },
    }),
    prisma.document.findMany({
      where: { booking: { userId: user.id } },
      orderBy: { createdAt: "desc" },
      take: 4,
      include: { booking: { select: { reference: true } } },
    }),
    prisma.message.count({
      where: { userId: user.id, fromStaff: true, readAt: null },
    }),
  ]);

  const now = new Date();
  const upcoming = bookings.filter(
    (booking) => booking.endDate >= now && booking.status !== "ANNULE",
  );
  const past = bookings.filter((booking) => booking.endDate < now);

  const stats = [
    { value: String(upcoming.length), label: "séjour(s) à venir" },
    { value: String(past.length), label: "séjour(s) réalisé(s)" },
    { value: String(documents.length), label: "document(s) disponible(s)" },
    { value: String(unreadMessages), label: "message(s) non lu(s)" },
  ];

  return (
    <div className="space-y-14">
      <section>
        <dl className="grid grid-cols-2 gap-px border border-vine-900/12 bg-vine-900/10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-sand-100 px-5 py-8 text-center">
              <dt className="font-display text-3xl font-light text-feuille-600">
                {stat.value}
              </dt>
              <dd className="mt-2 text-[0.72rem] leading-snug text-vine-500">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <div className="flex items-baseline justify-between gap-6">
          <h2 className="font-display text-3xl font-light text-vine-900">
            {t.prochainsSejours}
          </h2>
          {upcoming.length > 0 ? (
            <Link
              href="/espace-client/sejours"
              className="text-[0.7rem] tracking-[0.18em] text-tuile-600 uppercase transition-colors hover:text-tuile-600"
            >
              {t.toutVoir}
            </Link>
          ) : null}
        </div>

        <div className="mt-7 space-y-5">
          {upcoming.length === 0 ? (
            <EmptyState
              title={t.aucunSejour}
              description="Dès qu'un devis sera établi pour vous, il apparaîtra ici avec son programme, ses documents et son suivi de paiement."
              actionLabel="Demander un devis"
              actionHref="/contact"
            />
          ) : (
            upcoming
              .slice(0, 3)
              .map((booking) => (
                <BookingCard key={booking.id} booking={booking} langue={lang} />
              ))
          )}
        </div>
      </section>

      <section>
        <div className="flex items-baseline justify-between gap-6">
          <h2 className="font-display text-3xl font-light text-vine-900">
            {t.documentsRecents}
          </h2>
          {documents.length > 0 ? (
            <Link
              href="/espace-client/documents"
              className="text-[0.7rem] tracking-[0.18em] text-tuile-600 uppercase transition-colors hover:text-tuile-600"
            >
              {t.toutVoir}
            </Link>
          ) : null}
        </div>

        <div className="mt-7">
          {documents.length === 0 ? (
            <EmptyState
              title={t.aucunDocument}
              description="Vos devis, factures, programmes détaillés et bons d'échange seront déposés ici au fil de la préparation de votre séjour."
            />
          ) : (
            <ul className="divide-y divide-vine-900/12 border border-vine-900/12">
              {documents.map((document) => (
                <li key={document.id}>
                  <a
                    href={document.url}
                    className="flex items-center justify-between gap-6 px-6 py-5 transition-colors hover:bg-sand-100"
                  >
                    <div>
                      <p className="text-[0.9rem] text-vine-800">
                        {document.title}
                      </p>
                      <p className="mt-1 text-[0.7rem] text-vine-500">
                        {documentKinds[document.kind] ?? document.kind} ·{" "}
                        {document.booking.reference} ·{" "}
                        {formatDate(document.createdAt)}
                      </p>
                    </div>
                    <span className="shrink-0 text-[0.7rem] tracking-[0.18em] text-feuille-600 uppercase">
                      Ouvrir
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}

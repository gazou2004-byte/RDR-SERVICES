import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { BookingCard } from "@/components/portal/booking-card";
import { EmptyState } from "@/components/portal/empty-state";
import { estLangue } from "@/content";
import { ui } from "@/content/ui";
import { notFound } from "next/navigation";

export default async function BookingsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!estLangue(lang)) notFound();
  const t = ui(lang).espace;
  const user = await requireUser();

  const bookings = await prisma.booking.findMany({
    where: { userId: user.id },
    orderBy: { startDate: "desc" },
  });

  const now = new Date();
  const upcoming = bookings.filter(
    (booking) => booking.endDate >= now && booking.status !== "ANNULE",
  );
  const past = bookings.filter(
    (booking) => booking.endDate < now || booking.status === "ANNULE",
  );

  return (
    <div className="space-y-14">
      <section>
        <h2 className="font-display text-3xl font-light text-vine-900">
          {t.sejoursAVenir}
        </h2>
        <div className="mt-7 space-y-5">
          {upcoming.length === 0 ? (
            <EmptyState
              title={t.aucunSejourAVenir}
              description="Vos devis et séjours confirmés apparaîtront ici dès qu'ils seront établis par votre conseiller."
              actionLabel="Demander un devis"
              actionHref="/contact"
            />
          ) : (
            upcoming.map((booking) => (
              <BookingCard key={booking.id} booking={booking} langue={lang} />
            ))
          )}
        </div>
      </section>

      {past.length > 0 ? (
        <section>
          <h2 className="font-display text-3xl font-light text-vine-900">
            {t.historique}
          </h2>
          <div className="mt-7 space-y-5 opacity-75">
            {past.map((booking) => (
              <BookingCard key={booking.id} booking={booking} langue={lang} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

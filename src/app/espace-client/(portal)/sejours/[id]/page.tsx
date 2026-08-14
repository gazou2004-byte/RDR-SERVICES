import Link from "next/link";
import { notFound } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { StatusBadge } from "@/components/portal/status-badge";
import {
  documentKinds,
  formatDate,
  formatDateRange,
  formatPrice,
  nightsBetween,
} from "@/lib/format";

type Props = { params: Promise<{ id: string }> };

export default async function BookingDetailPage({ params }: Props) {
  const user = await requireUser();
  const { id } = await params;

  // Le filtre sur userId garantit qu'un client ne peut pas ouvrir
  // le séjour de quelqu'un d'autre en devinant un identifiant.
  const booking = await prisma.booking.findFirst({
    where: { id, userId: user.id },
    include: { documents: { orderBy: { createdAt: "desc" } } },
  });

  if (!booking) notFound();

  const nights = nightsBetween(booking.startDate, booking.endDate);
  const remaining = booking.totalCents - booking.paidCents;
  const progress =
    booking.totalCents > 0
      ? Math.round((booking.paidCents / booking.totalCents) * 100)
      : 0;

  return (
    <div className="space-y-12">
      <Link
        href="/espace-client/sejours"
        className="inline-block text-[0.66rem] tracking-[0.18em] text-vine-500 uppercase transition-colors hover:text-tuile-600"
      >
        ← Tous mes séjours
      </Link>

      <header className="border-b border-vine-900/12 pb-9">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div>
            <p className="text-[0.62rem] tracking-[0.22em] text-vine-500 uppercase">
              {booking.reference}
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight font-light text-vine-900 sm:text-5xl">
              {booking.destination}
            </h2>
          </div>
          <StatusBadge status={booking.status} />
        </div>
      </header>

      {/* Informations du séjour */}
      <section>
        <dl className="grid gap-px border border-vine-900/12 bg-vine-900/10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              term: "Dates",
              value: formatDateRange(booking.startDate, booking.endDate),
            },
            {
              term: "Durée",
              value: `${nights} ${nights > 1 ? "nuits" : "nuit"}`,
            },
            { term: "Voyageurs", value: String(booking.travelers) },
            { term: "Montant total", value: formatPrice(booking.totalCents) },
          ].map((item) => (
            <div key={item.term} className="bg-sand-100 px-6 py-7">
              <dt className="text-[0.62rem] tracking-[0.18em] text-vine-500 uppercase">
                {item.term}
              </dt>
              <dd className="mt-2.5 text-[0.95rem] text-vine-800">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Suivi du règlement */}
      {booking.totalCents > 0 ? (
        <section className="border border-vine-900/12 p-8">
          <h3 className="text-[0.66rem] font-medium tracking-[0.22em] text-gold-600 uppercase">
            Règlement
          </h3>
          <div className="mt-6 flex flex-wrap items-baseline justify-between gap-4">
            <p className="font-display text-3xl font-light text-vine-900">
              {formatPrice(booking.paidCents)}
              <span className="ml-2 text-lg text-vine-500">
                / {formatPrice(booking.totalCents)}
              </span>
            </p>
            <p className="text-[0.85rem] text-vine-600">
              {remaining > 0
                ? `Reste à régler : ${formatPrice(remaining)}`
                : "Intégralement réglé"}
            </p>
          </div>
          <div
            className="mt-5 h-1.5 w-full overflow-hidden bg-vine-900/12"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Progression du règlement"
          >
            <div
              className="h-full bg-gold-600 transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
        </section>
      ) : null}

      {/* Notes du conseiller */}
      {booking.notes ? (
        <section className="border-l-2 border-gold-600 bg-sand-100 p-8">
          <h3 className="text-[0.66rem] font-medium tracking-[0.22em] text-gold-600 uppercase">
            Note de votre conseiller
          </h3>
          <p className="mt-5 text-[0.95rem] leading-relaxed whitespace-pre-line text-vine-700">
            {booking.notes}
          </p>
        </section>
      ) : null}

      {/* Documents rattachés */}
      <section>
        <h3 className="font-display text-2xl font-light text-vine-900">
          Documents du séjour
        </h3>
        <div className="mt-6">
          {booking.documents.length === 0 ? (
            <p className="border border-dashed border-vine-900/20 px-6 py-10 text-center text-[0.88rem] text-vine-500">
              Aucun document n&apos;a encore été déposé pour ce séjour.
            </p>
          ) : (
            <ul className="divide-y divide-vine-900/12 border border-vine-900/12">
              {booking.documents.map((document) => (
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
                        {formatDate(document.createdAt)}
                        {document.sizeLabel ? ` · ${document.sizeLabel}` : ""}
                      </p>
                    </div>
                    <span className="shrink-0 text-[0.62rem] tracking-[0.18em] text-tuile-600 uppercase">
                      Ouvrir
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="border border-vine-900/12 bg-sand-100 p-8 text-center">
        <p className="text-[0.95rem] text-vine-700">
          Une question sur ce séjour ?
        </p>
        <Link
          href="/espace-client/messages"
          className="mt-5 inline-block bg-gold-600 px-7 py-3.5 text-[0.68rem] font-medium tracking-[0.18em] text-sand-50 uppercase transition-colors hover:bg-gold-500"
        >
          Écrire à mon conseiller
        </Link>
      </section>
    </div>
  );
}

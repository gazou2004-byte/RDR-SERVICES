import Link from "next/link";
import { StatusBadge } from "./status-badge";
import { formatDateRange, formatPrice, nightsBetween } from "@/lib/format";

export type BookingSummary = {
  id: string;
  reference: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  travelers: number;
  status: string;
  totalCents: number;
  paidCents: number;
};

export function BookingCard({ booking }: { booking: BookingSummary }) {
  const nights = nightsBetween(booking.startDate, booking.endDate);
  const remaining = booking.totalCents - booking.paidCents;

  return (
    <Link
      href={`/espace-client/sejours/${booking.id}`}
      className="group block border border-parch-200/12 bg-wine-900/50 p-7 transition-colors hover:border-gold-500/40 sm:p-9"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[0.62rem] tracking-[0.22em] text-parch-400 uppercase">
            {booking.reference}
          </p>
          <h3 className="mt-2.5 font-display text-2xl font-light text-parch-50 transition-colors group-hover:text-gold-400 sm:text-3xl">
            {booking.destination}
          </h3>
        </div>
        <StatusBadge status={booking.status} />
      </div>

      <dl className="mt-7 grid gap-5 border-t border-parch-200/12 pt-6 sm:grid-cols-4">
        <div>
          <dt className="text-[0.62rem] tracking-[0.16em] text-parch-400 uppercase">
            Dates
          </dt>
          <dd className="mt-1.5 text-[0.85rem] text-parch-100">
            {formatDateRange(booking.startDate, booking.endDate)}
          </dd>
        </div>
        <div>
          <dt className="text-[0.62rem] tracking-[0.16em] text-parch-400 uppercase">
            Durée
          </dt>
          <dd className="mt-1.5 text-[0.85rem] text-parch-100">
            {nights} {nights > 1 ? "nuits" : "nuit"}
          </dd>
        </div>
        <div>
          <dt className="text-[0.62rem] tracking-[0.16em] text-parch-400 uppercase">
            Voyageurs
          </dt>
          <dd className="mt-1.5 text-[0.85rem] text-parch-100">
            {booking.travelers}
          </dd>
        </div>
        <div>
          <dt className="text-[0.62rem] tracking-[0.16em] text-parch-400 uppercase">
            {remaining > 0 ? "Reste à régler" : "Montant"}
          </dt>
          <dd className="mt-1.5 text-[0.85rem] text-gold-400">
            {formatPrice(remaining > 0 ? remaining : booking.totalCents)}
          </dd>
        </div>
      </dl>
    </Link>
  );
}

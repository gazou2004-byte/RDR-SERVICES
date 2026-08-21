/** Formatage partagé entre le site public et l'espace client. */

export function formatDate(
  value: Date | string,
  options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  },
) {
  return new Intl.DateTimeFormat("fr-FR", options).format(new Date(value));
}

export function formatDateRange(start: Date | string, end: Date | string) {
  const from = new Date(start);
  const to = new Date(end);
  const sameYear = from.getFullYear() === to.getFullYear();
  const sameMonth = sameYear && from.getMonth() === to.getMonth();

  const fromLabel = new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    ...(sameMonth ? {} : { month: "long" }),
    ...(sameYear ? {} : { year: "numeric" }),
  }).format(from);

  const toLabel = formatDate(to);
  return `${fromLabel} – ${toLabel}`;
}

export function nightsBetween(start: Date | string, end: Date | string) {
  const ms = new Date(end).getTime() - new Date(start).getTime();
  return Math.max(0, Math.round(ms / 86_400_000));
}

export function formatPrice(cents: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(cents / 100);
}

export const bookingStatuses = {
  DEVIS: { label: "Devis en attente", tone: "neutral" },
  CONFIRME: { label: "Confirmé", tone: "feuille" },
  EN_COURS: { label: "En cours", tone: "wine" },
  TERMINE: { label: "Terminé", tone: "muted" },
  ANNULE: { label: "Annulé", tone: "muted" },
} as const;

export type BookingStatus = keyof typeof bookingStatuses;

export function bookingStatus(status: string) {
  return (
    bookingStatuses[status as BookingStatus] ?? {
      label: status,
      tone: "neutral" as const,
    }
  );
}

export const documentKinds: Record<string, string> = {
  DEVIS: "Devis",
  FACTURE: "Facture",
  PROGRAMME: "Programme détaillé",
  VOUCHER: "Bon d'échange",
  AUTRE: "Document",
};

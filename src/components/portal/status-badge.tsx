import { bookingStatus } from "@/lib/format";

const tones: Record<string, string> = {
  // Confirmé : vert vigne, l'état le plus positif
  gold: "border-vine-600/55 bg-vine-300/45 text-vine-800",
  // En cours : or
  wine: "border-wine-600/45 bg-wine-100 text-wine-700",
  // Devis en attente : neutre
  neutral: "border-vine-900/22 bg-sand-100 text-vine-700",
  // Terminé / annulé : effacé
  muted: "border-vine-900/15 bg-transparent text-vine-500",
};

export function StatusBadge({ status }: { status: string }) {
  const { label, tone } = bookingStatus(status);

  return (
    <span
      className={`inline-flex items-center border px-3 py-1.5 text-[0.62rem] font-medium tracking-[0.16em] uppercase ${tones[tone]}`}
    >
      {label}
    </span>
  );
}

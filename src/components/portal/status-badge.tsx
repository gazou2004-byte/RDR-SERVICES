import { bookingStatus } from "@/lib/format";

const tones: Record<string, string> = {
  gold: "border-gold-500/50 bg-gold-500/12 text-gold-300",
  wine: "border-wine-400/50 bg-wine-600/25 text-wine-300",
  neutral: "border-parch-200/25 bg-parch-200/8 text-parch-200",
  muted: "border-parch-200/15 bg-transparent text-parch-400",
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

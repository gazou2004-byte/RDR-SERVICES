import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex items-baseline gap-2.5 ${className}`}
      aria-label="RDR Service — retour à l'accueil"
    >
      <span className="font-display text-2xl leading-none font-medium tracking-[0.12em] text-parch-50 transition-colors group-hover:text-gold-400">
        RDR
      </span>
      <span className="text-[0.6rem] leading-none font-medium tracking-[0.34em] text-gold-500 uppercase">
        Service
      </span>
    </Link>
  );
}

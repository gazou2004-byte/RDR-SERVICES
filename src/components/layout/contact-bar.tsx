"use client";

import { usePathname } from "next/navigation";
import { company } from "@/content/site";

/**
 * Barre de contact fixée en bas de l'écran : téléphone et e-mail toujours
 * à portée de clic. Masquée dans l'espace client, où elle n'a pas lieu d'être.
 */
export function ContactBar() {
  const pathname = usePathname();
  if (pathname.startsWith("/espace-client")) return null;

  return (
    <div
      data-contact-bar
      className="fixed inset-x-0 bottom-0 z-40 border-t border-vine-900/10 bg-sand-100/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-6 py-3.5 lg:px-10">
        <p className="text-[0.68rem] font-medium tracking-[0.24em] text-vine-500 uppercase">
          Contactez-nous
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`tel:${company.phoneHref}`}
            className="border border-gold-600/60 px-5 py-2.5 text-[0.72rem] tracking-[0.06em] text-gold-700 transition-colors hover:bg-gold-600 hover:text-sand-50"
          >
            {company.phone}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="border border-gold-600/60 px-5 py-2.5 text-[0.72rem] tracking-[0.06em] text-gold-700 transition-colors hover:bg-gold-600 hover:text-sand-50"
          >
            {company.email}
          </a>
        </div>
      </div>
    </div>
  );
}

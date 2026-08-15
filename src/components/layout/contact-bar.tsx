"use client";

import { usePathname } from "next/navigation";
import { company } from "@/content/site";

/**
 * Barre de contact fixée en bas de l'écran : téléphone et e-mail toujours
 * à portée de clic. Masquée dans l'espace client, où elle n'a pas lieu d'être.
 *
 * Sa hauteur est verrouillée à 4rem (`h-16`) et le `<body>` réserve exactement
 * la même hauteur (`pb-16`). Sans cela, la barre repassait sur deux lignes sur
 * téléphone et recouvrait le bas du contenu.
 */
export function ContactBar() {
  const pathname = usePathname();
  if (pathname.startsWith("/espace-client")) return null;

  return (
    <div
      data-contact-bar
      className="fixed inset-x-0 bottom-0 z-40 h-16 border-t border-vine-900/10 bg-sand-100/95 backdrop-blur-md"
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-center gap-3 px-4 sm:gap-6 lg:px-10">
        {/* Le libellé s'efface sur les petits écrans pour garder une seule ligne */}
        <p className="hidden text-[0.68rem] font-medium tracking-[0.24em] text-vine-500 uppercase sm:block">
          Contactez-nous
        </p>

        <a
          href={`tel:${company.phoneHref}`}
          className="border border-gold-600/60 px-3 py-2 text-[0.7rem] whitespace-nowrap text-gold-700 transition-colors hover:bg-gold-600 hover:text-sand-50 sm:px-5 sm:py-2.5 sm:text-[0.72rem]"
        >
          {company.phone}
        </a>
        <a
          href={`mailto:${company.email}`}
          className="border border-gold-600/60 px-3 py-2 text-[0.7rem] whitespace-nowrap text-gold-700 transition-colors hover:bg-gold-600 hover:text-sand-50 sm:px-5 sm:py-2.5 sm:text-[0.72rem]"
        >
          {company.email}
        </a>
      </div>
    </div>
  );
}

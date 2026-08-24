"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  DRAPEAU,
  LANGUES,
  NOM_LANGUE,
  cheminDansLangue,
  type Langue,
} from "@/content/langue";
import { ui } from "@/content/ui";

/**
 * Sélecteur de langue repris du Clam : un globe qui déplie la liste des
 * langues avec leur drapeau et leur nom.
 *
 * Le bouton est volontairement discret : ni contour ni fond, et la même
 * écriture que les autres entrées du menu — il s'y lit comme un mot de plus.
 * Encadré, il tirait l'œil plus que les liens du site. C'est la liste dépliée
 * qui porte le dessin.
 *
 * Une différence avec l'original, et elle est volontaire : là-bas les entrées
 * sont des boutons qui rechargent la page dans la langue choisie ; ici ce sont
 * de vrais liens, parce que chaque langue a sa propre adresse. On peut donc
 * les ouvrir dans un nouvel onglet, les copier, et un moteur de recherche les
 * suit.
 *
 * Chaque entrée mène à la même page dans sa langue, pas à son accueil.
 */
export function SelecteurLangue({
  langue,
  transparent = false,
  taille = "barre",
}: {
  langue: Langue;
  /** L'en-tête posé sur une photo réclame un bouton clair. */
  transparent?: boolean;
  /** Le menu déplié écrit plus grand que la barre du haut. */
  taille?: "barre" | "deplie";
}) {
  const pathname = usePathname();
  const [ouvert, setOuvert] = useState(false);
  const boite = useRef<HTMLDivElement>(null);
  const t = ui(langue);

  // Un clic ailleurs, ou la touche Échap, referment la liste.
  useEffect(() => {
    if (!ouvert) return;
    const dehors = (e: MouseEvent) => {
      if (!boite.current?.contains(e.target as Node)) setOuvert(false);
    };
    const touche = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOuvert(false);
    };
    document.addEventListener("click", dehors);
    document.addEventListener("keydown", touche);
    return () => {
      document.removeEventListener("click", dehors);
      document.removeEventListener("keydown", touche);
    };
  }, [ouvert]);

  return (
    <div ref={boite} className="relative">
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOuvert((v) => !v);
        }}
        aria-label={t.langue.choisir}
        aria-expanded={ouvert}
        aria-haspopup="menu"
        // Même écriture que les autres entrées du menu : serif, même corps,
        // mêmes couleurs. Le sélecteur se lit comme un mot de plus.
        className={`flex items-center gap-1.5 font-display whitespace-nowrap transition-colors ${
          taille === "deplie" ? "text-2xl font-light" : "text-lg"
        } ${
          transparent
            ? "text-sand-50 hover:text-feuille-400"
            : "text-vine-800 hover:text-tuile-600"
        }`}
      >
        <svg
          aria-hidden
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mt-px shrink-0 opacity-70"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
        {NOM_LANGUE[langue]}
      </button>

      {ouvert ? (
        <div
          role="menu"
          className="absolute top-[calc(100%+0.4rem)] right-0 z-50 min-w-[10rem] rounded-xl border-[1.5px] border-vine-900/15 bg-sand-50 p-1.5 shadow-[0_8px_32px] shadow-vine-900/20"
        >
          {LANGUES.map((code) => {
            const courante = code === langue;
            return (
              <Link
                key={code}
                role="menuitem"
                href={cheminDansLangue(pathname, code)}
                hrefLang={code}
                lang={code}
                aria-current={courante ? "true" : undefined}
                onClick={() => setOuvert(false)}
                className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-[0.82rem] whitespace-nowrap transition-colors ${
                  courante
                    ? "bg-sand-200 font-bold text-vine-900"
                    : "text-vine-800 hover:bg-sand-100"
                }`}
              >
                <span aria-hidden>{DRAPEAU[code]}</span>
                {NOM_LANGUE[code]}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

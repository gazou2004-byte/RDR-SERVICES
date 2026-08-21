"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { company, faq } from "@/content/site";

type Onglet = "questions" | "projet";

/**
 * Ancres du menu qui n'ont plus de section sur la page : elles ouvrent la
 * fenêtre de discussion sur l'onglet correspondant. Défini hors du composant
 * pour rester stable d'un rendu à l'autre.
 */
const ongletParAncre: Record<string, Onglet> = {
  contact: "projet",
  faq: "questions",
};

/**
 * Fenêtre de discussion posée en bas à droite de l'écran.
 *
 * Elle remplace les deux anciennes sections de bas de page : les questions
 * fréquentes et le formulaire de devis vivent désormais ici, à portée de clic
 * depuis n'importe quelle page plutôt qu'au terme d'un long défilement.
 *
 * Le formulaire arrive par la propriété `formulaire` : selon que le site
 * tourne sur un serveur ou en vitrine statique, ce n'est pas le même
 * composant, et c'est `chat-dock.tsx` qui tranche.
 */
export function ChatWidget({ formulaire }: { formulaire: ReactNode }) {
  const pathname = usePathname();
  const [ouvert, setOuvert] = useState(false);
  const [onglet, setOnglet] = useState<Onglet>("questions");
  const lanceur = useRef<HTMLButtonElement>(null);
  const panneau = useRef<HTMLDivElement>(null);

  const ouvrir = useCallback((cible: Onglet) => {
    setOnglet(cible);
    setOuvert(true);
  }, []);

  const fermer = useCallback(() => {
    setOuvert(false);
    lanceur.current?.focus();
  }, []);

  /* Échap referme, comme dans toute fenêtre superposée. */
  useEffect(() => {
    if (!ouvert) return;
    const surTouche = (e: KeyboardEvent) => {
      if (e.key === "Escape") fermer();
    };
    document.addEventListener("keydown", surTouche);
    return () => document.removeEventListener("keydown", surTouche);
  }, [ouvert, fermer]);

  /* À l'ouverture, le clavier entre dans le panneau. */
  useEffect(() => {
    if (ouvert) panneau.current?.focus();
  }, [ouvert]);

  /*
   * Les liens « Contact » et « FAQ » du site pointent vers des ancres qui
   * n'existent plus dans la page : les deux sections vivent désormais ici.
   * Plutôt que de les réécrire un par un — menu, pied de page, boutons
   * d'appel à l'action, page 404 — on les intercepte, et le clic ouvre la
   * fenêtre sur le bon onglet.
   */
  useEffect(() => {
    const surClic = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const lien = (e.target as HTMLElement | null)?.closest?.("a");
      const ancre = lien?.getAttribute("href")?.split("#")[1];
      const cible = ancre ? ongletParAncre[ancre] : undefined;
      if (!cible) return;
      // Coupé net : sans cela le composant `Link` de Next navigue vers une
      // ancre qui n'existe plus et la page saute en haut.
      e.preventDefault();
      e.stopPropagation();
      ouvrir(cible);
    };
    // Phase de capture : `Link` pose son propre gestionnaire à la racine React
    // et le déclenche avant que l'événement n'atteigne `document` en remontée.
    document.addEventListener("click", surClic, true);
    return () => document.removeEventListener("click", surClic, true);
  }, [ouvrir]);

  /* L'espace client a ses propres outils : pas de fenêtre commerciale ici. */
  if (pathname.startsWith("/espace-client")) return null;

  const onglets: { cle: Onglet; libelle: string }[] = [
    { cle: "questions", libelle: "Questions fréquentes" },
    { cle: "projet", libelle: "Votre projet" },
  ];

  return (
    <>
      {/* Voile sur téléphone seulement : sur grand écran la page reste lisible. */}
      {ouvert ? (
        <button
          type="button"
          aria-hidden
          tabIndex={-1}
          onClick={fermer}
          className="fixed inset-0 z-40 cursor-default bg-vine-900/35 sm:hidden"
        />
      ) : null}

      {ouvert ? (
        <div
          ref={panneau}
          tabIndex={-1}
          role="dialog"
          aria-modal="false"
          aria-label={`Discuter avec ${company.name}`}
          className="chat-panneau fixed top-20 right-3 bottom-4 left-3 z-50 flex flex-col overflow-hidden border border-vine-900/15 bg-sand-50 shadow-[0_24px_60px_-20px] shadow-vine-900/45 outline-none sm:top-auto sm:left-auto sm:h-[min(40rem,calc(100dvh-7rem))] sm:w-[25rem]"
        >
          {/* En-tête */}
          <header className="flex items-start justify-between gap-4 bg-vine-900 px-5 py-4">
            <div>
              <p className="font-display text-lg leading-none font-light tracking-[0.14em] text-sand-50">
                RDR <span className="text-feuille-300">SERVICES</span>
              </p>
              <p className="mt-1.5 text-[0.72rem] text-sand-300">
                Réponse sous 24 heures ouvrées
              </p>
            </div>
            <button
              type="button"
              onClick={fermer}
              aria-label="Fermer la discussion"
              className="-mr-1.5 -mt-0.5 grid h-9 w-9 shrink-0 place-items-center text-sand-200 transition-colors hover:text-sand-50"
            >
              <svg
                aria-hidden
                viewBox="0 0 16 16"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
              >
                <path d="M3 3l10 10M13 3L3 13" />
              </svg>
            </button>
          </header>

          {/* Onglets */}
          <div role="tablist" className="flex shrink-0 border-b border-vine-900/12 bg-sand-100">
            {onglets.map((o) => (
              <button
                key={o.cle}
                type="button"
                role="tab"
                aria-selected={onglet === o.cle}
                onClick={() => setOnglet(o.cle)}
                className={`flex-1 border-b-2 px-3 py-3 text-[0.72rem] font-medium tracking-[0.12em] uppercase transition-colors ${
                  onglet === o.cle
                    ? "border-tuile-600 text-tuile-600"
                    : "border-transparent text-vine-500 hover:text-vine-800"
                }`}
              >
                {o.libelle}
              </button>
            ))}
          </div>

          {/* Corps défilant */}
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5">
            {onglet === "questions" ? (
              <>
                <p className="max-w-[19rem] rounded-tl-none bg-sand-200 px-4 py-3 text-[0.86rem] leading-relaxed text-vine-800">
                  Bonjour. Voici ce qu&apos;on nous demande le plus souvent. Si
                  votre question n&apos;y est pas, passez à l&apos;onglet
                  «&nbsp;Votre projet&nbsp;».
                </p>

                <div className="mt-5 space-y-2.5">
                  {faq.map((item) => (
                    <details
                      key={item.question}
                      className="group border border-vine-900/12 bg-sand-100"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-left text-[0.85rem] leading-snug font-medium text-vine-900 [&::-webkit-details-marker]:hidden">
                        {item.question}
                        <svg
                          aria-hidden
                          viewBox="0 0 10 12"
                          className="h-2.5 w-2 shrink-0 text-tuile-600 transition-transform duration-300 group-open:rotate-90"
                          fill="currentColor"
                        >
                          <path d="M0 0l10 6-10 6z" />
                        </svg>
                      </summary>
                      <p className="border-t border-vine-900/10 px-4 py-3 text-[0.82rem] leading-relaxed text-vine-600">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </>
            ) : (
              <>
                <p className="max-w-[19rem] bg-sand-200 px-4 py-3 text-[0.86rem] leading-relaxed text-vine-800">
                  Dites-nous où vous voulez aller, quand et à combien. Plus
                  c&apos;est précis, plus notre proposition sera juste du
                  premier coup.
                </p>

                <div className="chat-formulaire mt-5">{formulaire}</div>
              </>
            )}
          </div>

          {/* Pied : joindre un humain directement */}
          <div className="flex shrink-0 items-center gap-2 border-t border-vine-900/12 bg-sand-100 px-4 py-3">
            <a
              href={`tel:${company.phoneHref}`}
              className="flex-1 border border-feuille-600/60 px-3 py-2 text-center text-[0.72rem] whitespace-nowrap text-feuille-700 transition-colors hover:bg-feuille-600 hover:text-sand-50"
            >
              Appeler
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex-1 border border-feuille-600/60 px-3 py-2 text-center text-[0.72rem] whitespace-nowrap text-feuille-700 transition-colors hover:bg-feuille-600 hover:text-sand-50"
            >
              Écrire un e-mail
            </a>
          </div>
        </div>
      ) : null}

      {/* Le lanceur s'efface pendant que la fenêtre est ouverte : elle occupe
          sa place et porte sa propre croix de fermeture. */}
      {!ouvert ? (
        <button
          ref={lanceur}
          type="button"
          onClick={() => ouvrir("questions")}
          aria-label="Ouvrir la discussion"
          className="chat-lanceur fixed right-4 bottom-5 z-50 flex items-center gap-2.5 bg-tuile-600 px-4 py-3 text-sand-50 shadow-[0_12px_28px_-10px] shadow-vine-900/60 transition-colors hover:bg-tuile-700 sm:right-5 sm:gap-3 sm:px-5"
        >
          <svg
            aria-hidden
            viewBox="0 0 18 18"
            className="h-4 w-4 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinejoin="round"
          >
            <path d="M2 4.2A1.2 1.2 0 013.2 3h11.6A1.2 1.2 0 0116 4.2v7.1a1.2 1.2 0 01-1.2 1.2H6.6L3 15.4V4.2z" />
          </svg>
          <span className="text-[0.72rem] font-medium tracking-[0.16em] uppercase">
            Une question&nbsp;?
          </span>
        </button>
      ) : null}
    </>
  );
}

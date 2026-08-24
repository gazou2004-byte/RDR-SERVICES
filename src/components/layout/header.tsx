"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Destination, NavItem } from "@/content/site";
import { ui } from "@/content/ui";
import {
  lien as adresse,
  lienEspaceClient,
  separer,
  type Langue,
} from "@/content/langue";
import { SelecteurLangue } from "./selecteur-langue";
import { Logo } from "./logo";

/*
 * La vitrine statique porte les pages de connexion et d'inscription, en
 * démonstration : le lien du menu y mène donc, il n'aboutit plus sur une 404.
 */
const espaceClientDisponible = true;

export function Header({
  langue,
  nav,
  destinations,
}: {
  langue: Langue;
  /*
   * Menu et destinations arrivent en propriétés : l'en-tête tourne dans le
   * navigateur, et y importer le contenu enverrait les deux dictionnaires
   * entiers pour six liens.
   */
  nav: NavItem[];
  destinations: Destination[];
}) {
  const t = ui(langue);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Referme le menu mobile à chaque navigation. Ajusté pendant le rendu
  // plutôt que dans un effet, pour éviter un second rendu inutile.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /*
   * Le bandeau ne se rend transparent, avec logo et liens clairs, que sur les
   * pages qui commencent par une image plein cadre : l'accueil et les fiches
   * de région. Ailleurs — mentions légales, crédits, page introuvable — le
   * fond est pâle dès le premier pixel, et le logo clair y devenait invisible.
   *
   * Le préfixe de langue est retiré avant la comparaison : sans cela, `/en/`
   * et `/es/destinations/landes/` n'étaient pas reconnues comme des pages à
   * image, et le bandeau restait pâle par-dessus la photo.
   */
  const { reste } = separer(pathname);
  const overHero = reste === "/" || reste.startsWith("/destinations/");
  const transparent = overHero && !scrolled && !open;

  /*
   * Le menu pointe vers des sections de la page d'accueil : on suit la
   * section la plus haute encore visible pour allumer la bonne entrée.
   */
  const [sectionVue, setSectionVue] = useState("accueil");

  useEffect(() => {
    if (reste !== "/") return;
    const ids = nav
      .map((item) => item.href.split("#")[1])
      .filter(Boolean) as string[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibles = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visibles[0]) setSectionVue(visibles[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [reste, nav]);

  const isActive = (href: string) => {
    const ancre = href.split("#")[1];
    if (!ancre) return pathname === href;
    // Même raison : les ancres du menu ne s'allument que sur l'accueil, quelle
    // que soit la langue de celui-ci.
    return reste === "/" && sectionVue === ancre;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        transparent
          ? "py-8"
          : "border-b border-vine-900/10 bg-sand-50/95 py-4 shadow-[0_1px_20px_-14px] shadow-vine-900/40 backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-8 px-6 lg:px-10">
        <Logo
          langue={langue}
          className="shrink-0"
          tone={transparent ? "light" : "dark"}
        />

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => {
            const lien = (
              <Link
                href={adresse(langue, item.href)}
                className={`font-display text-lg whitespace-nowrap transition-colors ${
                  transparent
                    ? isActive(item.href)
                      ? "text-feuille-400"
                      : "text-sand-50 hover:text-feuille-400"
                    : isActive(item.href)
                      ? "text-tuile-600"
                      : "text-vine-800 hover:text-tuile-600"
                }`}
              >
                {item.label}
              </Link>
            );

            // « Destinations » déroule les cinq régions au survol
            if (!("regions" in item)) {
              return <span key={item.href}>{lien}</span>;
            }

            return (
              <div key={item.href} className="group relative">
                {lien}
                <div className="invisible absolute top-full left-1/2 z-10 -translate-x-1/2 pt-4 opacity-0 transition-opacity duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="min-w-[15rem] border border-vine-900/12 bg-sand-50 py-2 shadow-[0_18px_40px_-24px] shadow-vine-900/60">
                    {destinations.map((destination) => (
                      <li key={destination.slug}>
                        <Link
                          href={adresse(
                            langue,
                            `/destinations/${destination.slug}`,
                          )}
                          className="block px-6 py-3 text-[0.72rem] font-medium tracking-[0.16em] whitespace-nowrap text-vine-800 uppercase transition-colors hover:bg-sand-100 hover:text-tuile-600"
                        >
                          {destination.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

          <SelecteurLangue langue={langue} transparent={transparent} />

          {espaceClientDisponible ? (
            <Link
              href={lienEspaceClient(langue)}
              className={`ml-2 border px-5 py-2.5 text-[0.7rem] font-medium tracking-[0.18em] whitespace-nowrap uppercase transition-all ${
                transparent
                  ? "border-sand-50/60 text-sand-50 hover:bg-sand-50 hover:text-vine-900"
                  : "border-tuile-600/60 text-tuile-700 hover:bg-tuile-600 hover:text-sand-50"
              }`}
            >
              {t.entete.espaceClient}
            </Link>
          ) : null}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? t.entete.fermerMenu : t.entete.ouvrirMenu}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <span
            className={`h-px w-6 transition-transform duration-300 ${
              transparent ? "bg-sand-50" : "bg-vine-900"
            } ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 transition-transform duration-300 ${
              transparent ? "bg-sand-50" : "bg-vine-900"
            } ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden bg-sand-50 transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pt-8 pb-10">
          {nav.map((item) => (
            <div key={item.href}>
              <Link
                href={adresse(langue, item.href)}
                className={`block border-b border-vine-900/10 py-4 font-display text-2xl font-light ${
                  isActive(item.href) ? "text-tuile-600" : "text-vine-900"
                }`}
              >
                {item.label}
              </Link>
              {"regions" in item ? (
                <ul className="border-b border-vine-900/10 py-2">
                  {destinations.map((destination) => (
                    <li key={destination.slug}>
                      <Link
                        href={adresse(
                          langue,
                          `/destinations/${destination.slug}`,
                        )}
                        className="block py-2.5 pl-5 text-[0.78rem] tracking-[0.14em] text-vine-600 uppercase"
                      >
                        {destination.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
          <div className="border-b border-vine-900/10 py-4">
            <SelecteurLangue langue={langue} taille="deplie" />
          </div>

          {espaceClientDisponible ? (
            <Link
              href={lienEspaceClient(langue)}
              className="mt-6 border border-tuile-600/60 px-5 py-4 text-center text-[0.7rem] font-medium tracking-[0.18em] text-tuile-700 uppercase"
            >
              {t.entete.espaceClient}
            </Link>
          ) : null}
        </nav>
      </div>
    </header>
  );
}

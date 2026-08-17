"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { destinations, nav } from "@/content/site";
import { Logo } from "./logo";

// Sur la vitrine statique, l'espace client n'est pas déployé : on masque
// les liens qui y mènent plutôt que d'envoyer les visiteurs sur une 404.
const espaceClientDisponible = process.env.NEXT_PUBLIC_VITRINE !== "1";

export function Header() {
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

  // L'espace client n'a pas d'image d'en-tête : le bandeau y est opaque d'emblée
  const overHero = !pathname.startsWith("/espace-client");
  const transparent = overHero && !scrolled && !open;

  /*
   * Le menu pointe vers des sections de la page d'accueil : on suit la
   * section la plus haute encore visible pour allumer la bonne entrée.
   */
  const [sectionVue, setSectionVue] = useState("accueil");

  useEffect(() => {
    if (pathname !== "/") return;
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
  }, [pathname]);

  const isActive = (href: string) => {
    const ancre = href.split("#")[1];
    if (!ancre) return pathname === href;
    return pathname === "/" && sectionVue === ancre;
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
        <Logo className="shrink-0" tone={transparent ? "light" : "dark"} />

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => {
            const lien = (
              <Link
                href={item.href}
                className={`font-display text-lg whitespace-nowrap transition-colors ${
                  transparent
                    ? isActive(item.href)
                      ? "text-gold-400"
                      : "text-sand-50 hover:text-gold-400"
                    : isActive(item.href)
                      ? "text-tuile-600"
                      : "text-vine-800 hover:text-tuile-600"
                }`}
              >
                {item.label}
              </Link>
            );

            // « Visites privées » déroule les quatre régions au survol
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
                          href={`/destinations/${destination.slug}`}
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

          {espaceClientDisponible ? (
            <Link
              href="/espace-client"
              className={`ml-2 border px-5 py-2.5 text-[0.7rem] font-medium tracking-[0.18em] whitespace-nowrap uppercase transition-all ${
                transparent
                  ? "border-sand-50/60 text-sand-50 hover:bg-sand-50 hover:text-vine-900"
                  : "border-tuile-600/60 text-tuile-700 hover:bg-tuile-600 hover:text-sand-50"
              }`}
            >
              Espace client
            </Link>
          ) : null}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
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
                href={item.href}
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
                        href={`/destinations/${destination.slug}`}
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
          {espaceClientDisponible ? (
            <Link
              href="/espace-client"
              className="mt-6 border border-tuile-600/60 px-5 py-4 text-center text-[0.7rem] font-medium tracking-[0.18em] text-tuile-700 uppercase"
            >
              Espace client
            </Link>
          ) : null}
        </nav>
      </div>
    </header>
  );
}

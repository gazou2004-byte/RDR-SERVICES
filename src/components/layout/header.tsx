"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, nav } from "@/content/site";
import { Logo } from "./logo";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  // Bloque le défilement de la page quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-parch-200/10 bg-wine-950/92 py-4 backdrop-blur-lg"
          : "border-b border-transparent py-7"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-8 px-6 lg:px-10">
        <Logo className="shrink-0" />

        <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-[0.7rem] font-medium tracking-[0.16em] whitespace-nowrap uppercase transition-colors ${
                isActive(item.href)
                  ? "text-gold-400"
                  : "text-parch-200 hover:text-gold-400"
              }`}
            >
              {item.label}
              {isActive(item.href) ? (
                <span className="absolute -bottom-2 left-0 h-px w-full bg-gold-500" />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-6 lg:flex">
          <a
            href={`tel:${company.phoneHref}`}
            className="hidden text-[0.7rem] whitespace-nowrap text-parch-300 transition-colors hover:text-gold-400 xl:block"
          >
            {company.phone}
          </a>
          <Link
            href="/espace-client"
            className="border border-gold-500/45 px-5 py-2.5 text-[0.66rem] font-medium tracking-[0.18em] whitespace-nowrap text-gold-400 uppercase transition-all hover:bg-gold-500 hover:text-wine-950"
          >
            Espace client
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <span
            className={`h-px w-6 bg-parch-100 transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-parch-100 transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pt-8 pb-10">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`border-b border-parch-200/10 py-4 font-display text-2xl font-light ${
                isActive(item.href) ? "text-gold-400" : "text-parch-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/espace-client"
            className="mt-6 border border-gold-500/45 px-5 py-4 text-center text-[0.7rem] font-medium tracking-[0.18em] text-gold-400 uppercase"
          >
            Espace client
          </Link>
          <a
            href={`tel:${company.phoneHref}`}
            className="mt-4 text-center text-sm tracking-[0.1em] text-parch-300"
          >
            {company.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}

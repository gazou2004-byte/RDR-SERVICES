"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import { Logo } from "./logo";

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

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

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
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-display text-lg whitespace-nowrap transition-colors ${
                transparent
                  ? isActive(item.href)
                    ? "text-gold-400"
                    : "text-sand-50 hover:text-gold-400"
                  : isActive(item.href)
                    ? "text-wine-600"
                    : "text-vine-800 hover:text-wine-600"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/espace-client"
            className={`ml-2 border px-5 py-2.5 text-[0.64rem] font-medium tracking-[0.18em] whitespace-nowrap uppercase transition-all ${
              transparent
                ? "border-sand-50/60 text-sand-50 hover:bg-sand-50 hover:text-vine-900"
                : "border-wine-600/60 text-wine-700 hover:bg-wine-600 hover:text-sand-50"
            }`}
          >
            Espace client
          </Link>
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
            <Link
              key={item.href}
              href={item.href}
              className={`border-b border-vine-900/10 py-4 font-display text-2xl font-light ${
                isActive(item.href) ? "text-wine-600" : "text-vine-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/espace-client"
            className="mt-6 border border-wine-600/60 px-5 py-4 text-center text-[0.7rem] font-medium tracking-[0.18em] text-wine-700 uppercase"
          >
            Espace client
          </Link>
        </nav>
      </div>
    </header>
  );
}

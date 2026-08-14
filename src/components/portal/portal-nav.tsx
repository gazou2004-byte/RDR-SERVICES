"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Tableau de bord", href: "/espace-client" },
  { label: "Mes séjours", href: "/espace-client/sejours" },
  { label: "Documents", href: "/espace-client/documents" },
  { label: "Messages", href: "/espace-client/messages" },
  { label: "Mon profil", href: "/espace-client/profil" },
];

export function PortalNav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-px overflow-x-auto border border-vine-900/12 bg-vine-900/10 lg:flex-col lg:overflow-visible">
      {links.map((link) => {
        const active =
          link.href === "/espace-client"
            ? pathname === link.href
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`relative shrink-0 px-6 py-4 text-[0.7rem] font-medium tracking-[0.16em] whitespace-nowrap uppercase transition-colors ${
              active
                ? "bg-stone-200 text-wine-600"
                : "bg-stone-100 text-vine-600 hover:bg-stone-200 hover:text-vine-800"
            }`}
          >
            {active ? (
              <span className="absolute inset-y-0 left-0 hidden w-0.5 bg-wine-600 lg:block" />
            ) : null}
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

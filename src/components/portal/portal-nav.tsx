"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ui } from "@/content/ui";
import { lienEspaceClient, type Langue } from "@/content/langue";

export function PortalNav({ langue }: { langue: Langue }) {
  const pathname = usePathname();
  const n = ui(langue).portail;
  const racine = lienEspaceClient(langue);
  const links = [
    { label: n.tableauDeBord, href: racine },
    { label: n.mesSejours, href: `${racine}/sejours` },
    { label: n.documents, href: `${racine}/documents` },
    { label: n.messages, href: `${racine}/messages` },
    { label: n.monProfil, href: `${racine}/profil` },
  ];

  return (
    <nav className="flex gap-px overflow-x-auto border border-vine-900/12 bg-vine-900/10 lg:flex-col lg:overflow-visible">
      {links.map((link) => {
        const active =
          link.href === racine
            ? pathname === link.href
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`relative shrink-0 px-6 py-4 text-[0.7rem] font-medium tracking-[0.16em] whitespace-nowrap uppercase transition-colors ${
              active
                ? "bg-sand-200 text-tuile-600"
                : "bg-sand-100 text-vine-600 hover:bg-sand-200 hover:text-vine-800"
            }`}
          >
            {active ? (
              <span className="absolute inset-y-0 left-0 hidden w-0.5 bg-tuile-600 lg:block" />
            ) : null}
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

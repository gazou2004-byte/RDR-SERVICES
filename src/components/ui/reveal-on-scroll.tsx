"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Ajoute la classe `is-visible` aux éléments `.reveal` lorsqu'ils entrent
 * dans le champ de vision. Monté une seule fois dans le layout racine.
 */
export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      ".reveal:not(.is-visible)",
    );
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

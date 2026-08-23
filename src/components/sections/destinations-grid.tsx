import Image from "next/image";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/section";
import { contenu, lien, type Langue } from "@/content";
import { ui } from "@/content/ui";

/**
 * Les quatre territoires, en colonnes pleine largeur : la devise en italique
 * au-dessus de la photo, et un bouton « Découvrir » centré sur l'image.
 */
export function DestinationsGrid({ langue }: { langue: Langue }) {
  const { destinations } = contenu(langue);
  const t = ui(langue);

  return (
    <section id="sejours" className="scroll-mt-24 border-b border-vine-900/10 bg-sand-100">
      <Container className="py-16 sm:py-24 lg:py-24">
        <SectionHeading
          eyebrow={t.destinations.eyebrow}
          title={t.destinations.titre}
          description={t.destinations.description}
        />
      </Container>

      <div className="grid items-stretch sm:grid-cols-2 lg:grid-cols-5">
        {destinations.map((destination) => (
          <Link
            key={destination.slug}
            href={lien(langue, `/destinations/${destination.slug}`)}
            className="reveal group block border-t border-l border-feuille-600/25 last:border-r"
          >
            {/*
              Hauteur fixe : les devises n'ont pas le même nombre de lignes,
              sans cela les quatre photos ne démarreraient pas au même niveau.
            */}
            <p className="flex min-h-[4.5rem] items-center justify-center px-5 py-3 text-center font-display text-base leading-snug text-vine-800 italic sm:min-h-[6rem] sm:py-4 sm:text-lg">
              « {destination.tagline} »
            </p>

            {/* Photo + bouton */}
            <div className="relative aspect-4/3 overflow-hidden bg-sand-200 sm:aspect-4/5">
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              {/* Voile assez dense pour que le texte clair tienne sur un ciel */}
              <div className="absolute inset-0 bg-vine-900/40 transition-colors duration-500 group-hover:bg-vine-900/55" />

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 text-center">
                {/* min-h : les noms sur deux lignes ne doivent pas décaler le bouton */}
                <h3 className="flex min-h-[3.5rem] items-center font-display text-lg leading-tight font-light tracking-[0.04em] text-sand-50 uppercase sm:text-xl lg:text-lg xl:text-xl">
                  {destination.name}
                </h3>
                <span className="border border-sand-50/70 px-6 py-2.5 text-[0.7rem] font-medium tracking-[0.2em] text-sand-50 uppercase transition-colors group-hover:bg-sand-50 group-hover:text-vine-900">
                  {t.destinations.decouvrir}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

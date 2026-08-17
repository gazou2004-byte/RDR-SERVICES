import Image from "next/image";
import { Ornament } from "@/components/ui/ornament";
import { resume } from "@/content/site";

/**
 * Carte de visite du site : une colonne centrale sur fond clair, encadrée par
 * deux photos pleine hauteur. Sur téléphone, les photos passent en bandeau
 * au-dessus et en dessous, la colonne restant lisible sur toute la largeur.
 */
export function SummaryPanel() {
  return (
    <section className="border-b border-vine-900/10">
      <div className="grid lg:grid-cols-[1fr_minmax(0,42rem)_1fr]">
        <Photo
          src={resume.images.gauche}
          className="h-40 sm:h-56 lg:h-auto lg:min-h-[34rem]"
        />

        <div className="reveal flex flex-col items-center px-6 py-14 text-center sm:py-16 lg:px-12 lg:py-16">
          <Ornament />

          <dl className="mt-10 space-y-6">
            {resume.points.map((point) => (
              <div key={point.titre}>
                <dt className="text-[0.82rem] font-semibold tracking-[0.14em] text-vine-900 uppercase sm:text-[0.88rem]">
                  {point.titre}
                </dt>
                <dd className="mt-1.5 text-[0.95rem] text-vine-600">
                  {point.detail}
                </dd>
              </div>
            ))}
          </dl>

          <span className="rule-gold mt-10" />

          <p className="mt-8 max-w-md font-display text-xl leading-snug text-vine-800 italic sm:text-2xl">
            « {resume.citation} »
          </p>

          <svg
            aria-hidden
            viewBox="0 0 32 28"
            className="mt-8 h-6 w-8 text-tuile-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            <path d="M3 3l13 10L29 3" />
            <path d="M3 14l13 10L29 14" />
          </svg>
        </div>

        <Photo
          src={resume.images.droite}
          className="h-40 sm:h-56 lg:h-auto lg:min-h-[34rem]"
        />
      </div>
    </section>
  );
}

function Photo({ src, className }: { src: string; className: string }) {
  return (
    <div className={`relative bg-sand-200 ${className}`}>
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 30vw"
        className="object-cover"
      />
    </div>
  );
}

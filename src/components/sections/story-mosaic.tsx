import Image from "next/image";
import { mosaique } from "@/content/site";

/**
 * Le récit de la maison, encadré de deux mosaïques de photos décalées.
 * Sur téléphone, les mosaïques disparaissent : elles n'apportent rien à cette
 * largeur et rallongeraient la page de plusieurs écrans. Le texte suffit.
 */
export function StoryMosaic({
  paragraphes,
}: {
  paragraphes: readonly string[];
}) {
  return (
    <section className="border-b border-vine-900/10 py-16 sm:py-24 lg:py-24">
      <div className="mx-auto grid w-full max-w-[92rem] items-center gap-10 px-6 lg:grid-cols-[1fr_minmax(0,34rem)_1fr] lg:gap-14 lg:px-10">
        <Mosaique photos={mosaique.gauche} cote="gauche" />

        <div className="reveal">
          <div className="space-y-6 text-justify text-[0.95rem] leading-relaxed text-vine-700 italic">
            {paragraphes.map((paragraphe) => (
              <p key={paragraphe}>{paragraphe}</p>
            ))}
          </div>

          <figure className="mt-14 text-center">
            <blockquote className="font-display text-lg leading-snug text-vine-900 italic sm:text-xl">
              « {mosaique.citation} »
            </blockquote>
            <figcaption className="mt-4 text-[0.88rem] text-vine-600">
              {mosaique.signature}
            </figcaption>
          </figure>
        </div>

        <Mosaique photos={mosaique.droite} cote="droite" />
      </div>
    </section>
  );
}

/**
 * Quatre photos en quinconce : la deuxième et la troisième sont décalées
 * verticalement, ce qui casse l'alignement et donne l'effet d'accrochage
 * libre plutôt que de grille.
 */
function Mosaique({
  photos,
  cote,
}: {
  photos: readonly string[];
  cote: "gauche" | "droite";
}) {
  const decalage = ["mt-12", "mt-0", "mt-0", "mt-12"];

  return (
    <div
      className={`hidden grid-cols-2 gap-4 lg:grid ${
        cote === "droite" ? "lg:order-3" : ""
      }`}
      aria-hidden
    >
      {photos.map((photo, index) => (
        <div
          key={photo}
          className={`relative aspect-3/4 overflow-hidden bg-sand-200 shadow-[0_6px_20px_-12px] shadow-vine-900/50 ${decalage[index]}`}
        >
          <Image
            src={photo}
            alt=""
            fill
            sizes="16vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

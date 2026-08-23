import Image from "next/image";
import { Container } from "@/components/ui/section";

/**
 * En-tête des pages internes : photo pleine largeur, voile vert,
 * titre centré en capitales sérif. Même écriture que le héros d'accueil.
 *
 * Pas d'ornement ici : la grappe est un dessin au trait fin, elle se perdait
 * dans la photo. Le sur-titre vert clair et le filet sous le titre suffisent
 * à marquer la hiérarchie. L'ornement reste sur les titres de section, qui
 * sont posés sur un fond uni.
 */
export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  image,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  image: string;
}) {
  return (
    <section
      data-bandeau
      className="relative flex min-h-[62svh] items-center overflow-hidden pt-32 pb-20 lg:min-h-[68svh]"
    >
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-vine-900/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-vine-900/60 via-transparent to-vine-900/60" />

      <Container className="relative z-10 text-center">
        {/* Facultatif : sur les destinations, la durée qui s'y trouvait a été
            retirée de la photo — elle reste dans les informations clés, juste
            en dessous. */}
        {eyebrow ? <p className="eyebrow-light reveal">{eyebrow}</p> : null}
        <h1
          className={`section-title reveal !text-sand-50${eyebrow ? " mt-6" : ""}`}
        >
          {title}
          {accent ? (
            <>
              {" "}
              <span className="text-feuille-400 normal-case italic">{accent}</span>
            </>
          ) : null}
        </h1>
        <span className="rule-feuille-light reveal mx-auto mt-8" />
        {description ? (
          <p className="reveal mx-auto mt-8 max-w-2xl text-[0.98rem] leading-relaxed text-sand-200">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}

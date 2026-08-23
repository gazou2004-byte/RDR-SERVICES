import Image from "next/image";
import { Container } from "@/components/ui/section";
import { Ornament } from "@/components/ui/ornament";

/**
 * En-tête des pages internes : photo pleine largeur, voile vert,
 * titre centré en capitales sérif. Même écriture que le héros d'accueil.
 */
export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[62svh] items-center overflow-hidden pt-32 pb-20 lg:min-h-[68svh]">
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
        <Ornament tone="light" className="mx-auto" />
        <p className="eyebrow-light reveal mt-4">{eyebrow}</p>
        <h1 className="section-title reveal mt-6 !text-sand-50">
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

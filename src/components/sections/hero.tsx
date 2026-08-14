import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <Image
        src={hero.image}
        alt="Vignoble du Sud-Ouest au coucher du soleil"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Voile vin pour la lisibilité du texte */}
      <div className="absolute inset-0 bg-wine-950/72" />
      <div className="absolute inset-0 bg-gradient-to-t from-wine-950 via-wine-950/35 to-wine-950/70" />

      <Container className="relative z-10 pt-32 pb-24">
        <div className="max-w-3xl">
          <p className="eyebrow reveal">{hero.eyebrow}</p>
          <h1 className="reveal mt-7 font-display text-[3.25rem] leading-[1.03] font-light text-parch-50 sm:text-7xl lg:text-[5.25rem]">
            {hero.title}
            <span className="block text-gold-400 italic">
              {hero.titleAccent}
            </span>
          </h1>
          <span className="rule-gold reveal mt-9" />
          <p className="reveal mt-9 max-w-xl text-base leading-relaxed text-parch-200 sm:text-lg">
            {hero.subtitle}
          </p>
          <div className="reveal mt-11 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="outline">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>

      {/* Indicateur de défilement */}
      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex">
        <span className="text-[0.6rem] tracking-[0.3em] text-parch-300 uppercase">
          Défiler
        </span>
        <span className="h-14 w-px bg-gradient-to-b from-gold-500 to-transparent" />
      </div>
    </section>
  );
}

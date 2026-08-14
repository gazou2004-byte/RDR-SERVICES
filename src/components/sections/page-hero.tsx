import Image from "next/image";
import { Container } from "@/components/ui/section";

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
    <section className="relative flex min-h-[58svh] items-end overflow-hidden pt-32 pb-16 lg:min-h-[64svh] lg:pb-24">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/*
        Voile dégradé vers le bas : le texte se pose sur la pierre,
        le haut de l'image reste visible.
      */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-50/88 via-45% to-stone-50/25" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-stone-50/85 to-transparent" />

      <Container className="relative z-10">
        <p className="eyebrow reveal">{eyebrow}</p>
        <h1 className="reveal mt-6 max-w-3xl font-display text-5xl leading-[1.05] font-light text-vine-900 sm:text-6xl lg:text-7xl">
          {title}
          {accent ? (
            <>
              {" "}
              <span className="text-wine-600 italic">{accent}</span>
            </>
          ) : null}
        </h1>
        {description ? (
          <p className="reveal mt-8 max-w-xl text-[0.98rem] leading-relaxed text-vine-700">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}

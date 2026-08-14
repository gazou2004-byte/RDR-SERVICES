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
    <section className="relative flex min-h-[62svh] items-end overflow-hidden pt-32 pb-16 lg:min-h-[70svh] lg:pb-24">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-wine-950/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-wine-950 via-wine-950/40 to-wine-950/65" />

      <Container className="relative z-10">
        <p className="eyebrow reveal">{eyebrow}</p>
        <h1 className="reveal mt-6 max-w-3xl font-display text-5xl leading-[1.05] font-light text-parch-50 sm:text-6xl lg:text-7xl">
          {title}
          {accent ? (
            <>
              {" "}
              <span className="text-gold-400 italic">{accent}</span>
            </>
          ) : null}
        </h1>
        {description ? (
          <p className="reveal mt-8 max-w-xl text-[0.98rem] leading-relaxed text-parch-200">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}

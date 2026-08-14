import Image from "next/image";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/section";
import { destinations } from "@/content/site";

export function DestinationsGrid() {
  return (
    <section className="border-b border-parch-200/10 py-28 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Tours privés"
          title="Quatre territoires,"
          accent="un même Sud-Ouest"
          description="Chaque itinéraire présenté ici est un point de départ. Nous le retravaillons entièrement selon vos envies, votre rythme et la saison."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {destinations.map((destination) => (
            <Link
              key={destination.slug}
              href={`/destinations/${destination.slug}`}
              className="reveal group relative aspect-16/11 overflow-hidden"
            >
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1100ms] group-hover:scale-107"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine-950 via-wine-950/45 to-transparent" />
              <div className="absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-gold-500/45" />

              <div className="absolute inset-x-0 bottom-0 p-9">
                <h3 className="font-display text-3xl leading-tight font-light text-parch-50 sm:text-4xl">
                  {destination.name}
                </h3>
                <p className="mt-2 text-sm text-parch-200 italic">
                  {destination.tagline}
                </p>
                <div className="mt-5 flex items-center gap-4 text-[0.64rem] tracking-[0.2em] text-gold-400 uppercase">
                  <span>{destination.duration}</span>
                  <span className="h-px w-8 bg-gold-500/60 transition-all duration-500 group-hover:w-14" />
                  <span>Découvrir</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

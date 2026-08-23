import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { Cta } from "@/components/sections/cta";
import { RegionExperiences } from "@/components/sections/region-experiences";
import { RegionActivities } from "@/components/sections/region-activities";
import { Container, SectionHeading } from "@/components/ui/section";
import { emblemeDeRegion } from "@/components/ui/ornament";
import { destinations } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) return {};

  return {
    title: `${destination.name} — tour privé`,
    description: destination.intro,
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) notFound();

  const others = destinations.filter((item) => item.slug !== slug);
  // Chaque territoire a son motif au-dessus des titres, à la place de la grappe.
  const embleme = emblemeDeRegion(destination.slug);

  return (
    <>
      <PageHero
        title={destination.name}
        description={destination.tagline}
        image={destination.image}
      />

      {/* Présentation & informations clés */}
      <section className="border-b border-vine-900/10 py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="reveal lg:col-span-7">
              <p className="font-display text-2xl leading-relaxed font-light text-vine-800 sm:text-3xl">
                {destination.intro}
              </p>
              <span className="rule-feuille mt-9" />
            </div>

            <dl className="reveal space-y-7 lg:col-span-5">
              <div className="border-b border-vine-900/12 pb-6">
                <dt className="text-[0.7rem] tracking-[0.22em] text-feuille-600 uppercase">
                  Durée conseillée
                </dt>
                <dd className="mt-2 font-display text-2xl font-light text-vine-900">
                  {destination.duration}
                </dd>
              </div>
              <div className="border-b border-vine-900/12 pb-6">
                <dt className="text-[0.7rem] tracking-[0.22em] text-feuille-600 uppercase">
                  Meilleure saison
                </dt>
                <dd className="mt-2 font-display text-2xl font-light text-vine-900">
                  {destination.season}
                </dd>
              </div>
              <div>
                <dt className="text-[0.7rem] tracking-[0.22em] text-feuille-600 uppercase">
                  Format
                </dt>
                <dd className="mt-2 font-display text-2xl font-light text-vine-900">
                  Privatif intégral
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      {/* Temps forts */}
      <section className="border-b border-vine-900/10 bg-sand-100 py-14 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            embleme={embleme}
            eyebrow="Temps forts"
            title="Quelques idées"
            description="Les moments qui font le séjour, et les activités à y glisser selon vos envies et la météo. Tout est réservé et organisé pour vous."
          />
          {/* Sans numéros : ces temps forts ne sont pas une séquence, rien
              n'oblige à les vivre dans cet ordre. */}
          <ul className="mt-14 grid gap-px border border-vine-900/10 bg-vine-900/10 sm:grid-cols-2">
            {destination.highlights.map((highlight) => (
              <li key={highlight} className="reveal bg-sand-100 p-9">
                <p className="text-[0.95rem] leading-relaxed text-vine-700">
                  {highlight}
                </p>
              </li>
            ))}
          </ul>
        </Container>

        {/* Le carrousel des activités était une section à lui seul, juste en
            dessous, avec son propre ornement et son propre filet pour la même
            idée. Il vient ici, sous les temps forts, sans en-tête. */}
        <RegionActivities region={destination.slug} entete={false} />
      </section>

      {/* Itinéraire suggéré */}
      <section className="border-b border-vine-900/10 py-14 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            embleme={embleme}
            eyebrow="Itinéraire suggéré"
            title="Un exemple,"
            accent="pas une formule"
            description="Voici comment se déroule un séjour type. Le vôtre sera recomposé de zéro après notre premier échange."
          />

          <ol className="mt-14 space-y-px border-l border-vine-900/15">
            {destination.itinerary.map((day) => (
              <li key={day.day} className="reveal relative pb-12 pl-9 last:pb-0">
                <span
                  aria-hidden
                  className="absolute top-2 -left-[4.5px] h-2 w-2 rotate-45 bg-feuille-600"
                />
                <p className="text-[0.7rem] tracking-[0.22em] text-feuille-600 uppercase">
                  {day.day}
                </p>
                <h3 className="mt-3 font-display text-2xl font-light text-vine-900 sm:text-3xl">
                  {day.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-vine-600">
                  {day.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <RegionExperiences region={destination.slug} />

      {/* Autres destinations */}
      <section className="border-b border-vine-900/10 bg-sand-100 py-14 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            embleme={embleme}
            eyebrow="Poursuivre"
            title="Les autres territoires"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/destinations/${other.slug}`}
                className="reveal group block"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-sand-200">
                  <Image
                    src={other.image}
                    alt={other.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1000ms] group-hover:scale-105"
                  />
                </div>
                <h3 className="border-b border-vine-900/12 pt-5 pb-5 font-display text-2xl font-light text-vine-900 transition-colors group-hover:border-tuile-600 group-hover:text-tuile-600">
                  {other.name}
                </h3>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Cta
        title={`Composer votre séjour en ${destination.name}`}
        description="Dites-nous vos dates, le nombre de voyageurs et ce qui vous fait envie. Nous revenons vers vous sous 72 heures avec un programme complet."
      />
    </>
  );
}

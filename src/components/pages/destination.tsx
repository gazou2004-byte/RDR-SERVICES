import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { Cta } from "@/components/sections/cta";
import { RegionExperiences } from "@/components/sections/region-experiences";
import { RegionActivities } from "@/components/sections/region-activities";
import { Container, SectionHeading } from "@/components/ui/section";
import { emblemeDeRegion } from "@/components/ui/ornament";
import { contenu, lien, type Langue } from "@/content";
import { ui } from "@/content/ui";

/**
 * La fiche d'un territoire, indépendante de la langue : les deux racines
 * l'appellent avec la leur.
 */
export function Destination({ langue, slug }: { langue: Langue; slug: string }) {
  const { activites, destinations } = contenu(langue);
  const t = ui(langue);
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
                  {t.destination.dureeConseillee}
                </dt>
                <dd className="mt-2 font-display text-2xl font-light text-vine-900">
                  {destination.duration}
                </dd>
              </div>
              <div className="border-b border-vine-900/12 pb-6">
                <dt className="text-[0.7rem] tracking-[0.22em] text-feuille-600 uppercase">
                  {t.destination.meilleureSaison}
                </dt>
                <dd className="mt-2 font-display text-2xl font-light text-vine-900">
                  {destination.season}
                </dd>
              </div>
              <div>
                <dt className="text-[0.7rem] tracking-[0.22em] text-feuille-600 uppercase">
                  {t.destination.format}
                </dt>
                <dd className="mt-2 font-display text-2xl font-light text-vine-900">
                  {t.destination.privatif}
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
            eyebrow={t.destination.ideesEyebrow}
            title={t.destination.ideesTitre}
            description={t.destination.ideesDescription}
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
        <RegionActivities
          region={destination.slug}
          langue={langue}
          items={activites[destination.slug] ?? []}
          entete={false}
        />
      </section>

      {/* Itinéraire suggéré */}
      <section className="border-b border-vine-900/10 py-14 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            embleme={embleme}
            eyebrow={t.destination.itineraireEyebrow}
            title={t.destination.itineraireTitre}
            accent={t.destination.itineraireAccent}
            description={t.destination.itineraireDescription}
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

      <RegionExperiences region={destination.slug} langue={langue} />

      {/* Autres destinations */}
      <section className="border-b border-vine-900/10 bg-sand-100 py-14 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            embleme={embleme}
            eyebrow={t.destination.autresEyebrow}
            title={t.destination.autresTitre}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={lien(langue, `/destinations/${other.slug}`)}
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
        langue={langue}
        title={`${t.destination.ctaTitre} ${destination.name}`}
        description={t.destination.ctaDescription}
      />
    </>
  );
}

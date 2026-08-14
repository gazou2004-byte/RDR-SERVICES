import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { Cta } from "@/components/sections/cta";
import { FaqSection } from "@/components/sections/faq-section";
import { Container, SectionHeading } from "@/components/ui/section";
import { company, intro } from "@/content/site";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "RDR Service : une conciergerie de voyage indépendante née de dix ans dans l'hôtellerie de luxe et le transport privé dans le Sud-Ouest.",
};

const values = [
  {
    title: "Indépendants",
    description:
      "Aucune commission cachée, aucun partenaire imposé. Nous recommandons ce que nous aimons, et nous le disons quand une adresse ne vaut pas son prix.",
  },
  {
    title: "Locaux",
    description:
      "Nous vivons dans le Sud-Ouest. Les vignerons, chefs et propriétaires avec qui nous travaillons, nous les connaissons personnellement.",
  },
  {
    title: "Un seul interlocuteur",
    description:
      "La personne qui construit votre séjour est celle qui répond au téléphone pendant le voyage. Vous ne réexpliquez jamais votre dossier.",
  },
  {
    title: "Jamais en groupe",
    description:
      "Nous ne mélangeons pas deux clientèles. Chaque véhicule, chaque guide, chaque journée est à vous seul.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Une agence née"
        accent="d'une conviction"
        description="Les plus beaux souvenirs ne s'achètent pas en ligne. Ils se construisent avec quelqu'un qui connaît le terrain."
        image="/images/hero-apropos.jpg"
      />

      {/* Histoire */}
      <section className="border-b border-vine-900/10 py-24 lg:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="reveal relative aspect-4/5 lg:col-span-5">
              <Image
                src="/images/hero-contact.jpg"
                alt="Place de village en Périgord, l'un des territoires que nous parcourons"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 border border-wine-600/25" />
            </div>

            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Notre histoire"
                title="Dix ans à ouvrir"
                accent="des portes"
              />
              <div className="reveal mt-9 space-y-6 text-[0.98rem] leading-relaxed text-vine-600">
                <p>
                  RDR Service est né d&apos;un constat simple, fait après dix
                  ans passés dans l&apos;hôtellerie de luxe, la conciergerie et
                  le transport privé : les voyageurs qui viennent dans le
                  Sud-Ouest passent à côté de l&apos;essentiel. Ils visitent les
                  châteaux que tout le monde visite, dînent là où tout le monde
                  dîne, et rentrent chez eux avec les mêmes photos que les
                  autres.
                </p>
                <p>
                  Ce qui manquait, ce n&apos;était pas une agence de plus.
                  C&apos;était quelqu&apos;un capable de décrocher son téléphone
                  un dimanche matin pour qu&apos;un grand cru classé vous
                  ouvre ses chais, ou de trouver la table de quinze couverts
                  qui n&apos;a jamais eu de site internet.
                </p>
                <p>
                  Aujourd&apos;hui, nous composons des séjours privés d&apos;une
                  journée à trois semaines, de Bordeaux au Pays Basque, du
                  Périgord à la Gascogne. Toujours en privatif, toujours avec le
                  même chauffeur, toujours avec un interlocuteur unique
                  joignable 24h/24 pendant votre voyage.
                </p>
              </div>

              <dl className="reveal mt-11 grid gap-8 sm:grid-cols-2">
                <div>
                  <dt className="text-[0.64rem] tracking-[0.22em] text-wine-600 uppercase">
                    Licence ATOUT FRANCE
                  </dt>
                  <dd className="mt-2 text-sm text-vine-700">
                    n° {company.licenceAtoutFrance}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.64rem] tracking-[0.22em] text-wine-600 uppercase">
                    Licence de transport
                  </dt>
                  <dd className="mt-2 text-sm text-vine-700">
                    n° {company.licenceTransport}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* Chiffres */}
      <section className="border-b border-vine-900/10 bg-stone-100 py-24 lg:py-32">
        <Container>
          <dl className="reveal grid grid-cols-2 gap-px border border-vine-900/10 bg-vine-900/10 lg:grid-cols-4">
            {intro.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-stone-100 px-7 py-12 text-center"
              >
                <dt className="font-display text-4xl font-light text-wine-600 sm:text-5xl">
                  {stat.value}
                </dt>
                <dd className="mt-3 text-[0.78rem] leading-relaxed text-vine-600">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Valeurs */}
      <section className="border-b border-vine-900/10 py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Nos engagements"
            title="Quatre principes"
            accent="non négociables"
            align="center"
          />
          <div className="mt-14 grid gap-px border border-vine-900/10 bg-vine-900/10 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="reveal bg-stone-50 p-10">
                <h3 className="font-display text-2xl font-light text-vine-900">
                  {value.title}
                </h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-vine-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FaqSection />
      <Cta />
    </>
  );
}

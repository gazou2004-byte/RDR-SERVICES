import type { Metadata } from "next";
import { Container } from "@/components/ui/section";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales de ${company.name}.`,
};

export default function LegalPage() {
  return (
    <div className="pt-40 pb-24">
      <Container>
        <p className="eyebrow">Informations légales</p>
        <h1 className="mt-5 font-display text-5xl font-light text-vine-900">
          Mentions légales
        </h1>
        <span className="rule-feuille mt-8" />

        <div className="mt-14 max-w-2xl space-y-10 text-[0.92rem] leading-relaxed text-vine-600">
          <p className="border border-tuile-600/35 bg-tuile-100 px-5 py-4 text-[0.85rem] text-tuile-700">
            Restent à fournir avant toute communication autour du site : le
            téléphone et l&apos;e-mail réels, la garantie financière,
            l&apos;assurance responsabilité civile professionnelle et le
            médiateur de la consommation.
          </p>

          <Block title="Éditeur du site">
            <p>
              {company.legalName} — {company.address}
              <br />
              Téléphone : {company.phone}
              <br />
              E-mail : {company.email}
            </p>
            <p>
              Forme juridique : {company.legal.form}
              <br />
              Capital social : {company.legal.capital}
              <br />
              SIREN : {company.legal.siren}
              <br />
              SIRET (siège) : {company.legal.siret}
              <br />
              RCS : {company.legal.rcs}
              <br />
              Code APE : {company.legal.naf}
              <br />
              TVA intracommunautaire : {company.legal.tva}
              <br />
              Immatriculée le {company.legal.createdAt}
              <br />
              Directeur de la publication : {company.legal.director}
            </p>
          </Block>

          <Block title="Immatriculations et garanties">
            <p>
              {company.legalName} n&apos;est pas immatriculée au registre des
              opérateurs de voyages et de séjours tenu par ATOUT FRANCE et ne
              vend pas de forfaits touristiques. Les prestations présentées sur
              ce site relèvent de la conciergerie et de l&apos;organisation de
              services à la demande.
            </p>
            <p>
              Garantie financière : sans objet en l&apos;état.
              <br />
              Assurance responsabilité civile professionnelle : à compléter.
            </p>
          </Block>

          <Block title="Hébergement">
            <p>
              Le site est hébergé par GitHub, Inc., 88 Colin P. Kelly Jr.
              Street, San Francisco, CA 94107, États-Unis
              (
              <a
                href="https://github.com"
                className="underline transition-colors hover:text-tuile-600"
              >
                github.com
              </a>
              ).
            </p>
          </Block>

          <Block title="Propriété intellectuelle">
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images,
              logos, éléments graphiques) est protégé par le droit d&apos;auteur.
              Toute reproduction, même partielle, est interdite sans
              autorisation écrite préalable.
            </p>
          </Block>

          <Block title="Médiation de la consommation">
            <p>
              Conformément à l&apos;article L.612-1 du Code de la consommation,
              tout client a le droit de recourir gratuitement à un médiateur de
              la consommation en vue de la résolution amiable d&apos;un litige.
              Coordonnées du médiateur : à compléter.
            </p>
          </Block>
        </div>
      </Container>
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-display text-2xl font-light text-vine-900">
        {title}
      </h2>
      {children}
    </section>
  );
}

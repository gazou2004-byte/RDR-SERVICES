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
        <span className="rule-gold mt-8" />

        <div className="mt-14 max-w-2xl space-y-10 text-[0.92rem] leading-relaxed text-vine-600">
          <p className="border border-gold-600/35 bg-gold-300/40 px-5 py-4 text-[0.85rem] text-gold-700">
            À compléter avec vos informations réelles (raison sociale, SIRET,
            capital, assurance RCP, garantie financière) avant la mise en ligne.
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
              Forme juridique : à compléter
              <br />
              Capital social : à compléter
              <br />
              SIRET : à compléter
              <br />
              TVA intracommunautaire : à compléter
              <br />
              Directeur de la publication : à compléter
            </p>
          </Block>

          <Block title="Immatriculations et garanties">
            <p>
              Immatriculation au registre des opérateurs de voyages et de
              séjours (ATOUT FRANCE) : n° {company.licenceAtoutFrance}
              <br />
              Licence de transport (EVTC) : n° {company.licenceTransport}
              <br />
              Garantie financière : à compléter
              <br />
              Assurance responsabilité civile professionnelle : à compléter
            </p>
          </Block>

          <Block title="Hébergement">
            <p>
              Le site est hébergé par l&apos;hébergeur choisi lors du
              déploiement (Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
              États-Unis, si vous utilisez Vercel).
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

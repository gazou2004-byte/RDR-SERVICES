import { Container } from "@/components/ui/section";
import { contenu, type Langue } from "@/content";
import { legal } from "@/content/legal";

/** Les mentions légales, dans l'une ou l'autre langue. */
export function MentionsLegales({ langue }: { langue: Langue }) {
  const { company } = contenu(langue);
  const l = legal(langue);
  const m = l.mentions;

  return (
    <div className="pt-40 pb-24">
      <Container>
        <p className="eyebrow">{m.eyebrow}</p>
        <h1 className="mt-5 font-display text-5xl font-light text-vine-900">
          {m.titre}
        </h1>
        <span className="rule-feuille mt-8" />

        <div className="mt-14 max-w-2xl space-y-10 text-[0.92rem] leading-relaxed text-vine-600">
          {/* Sur la version anglaise seulement : dire lequel des deux textes
              fait référence en cas de divergence. */}
          {l.versionFrancaiseFaitFoi ? (
            <p className="border border-vine-900/15 px-5 py-4 text-[0.85rem] text-vine-500">
              {l.versionFrancaiseFaitFoi}
            </p>
          ) : null}

          <p className="border border-tuile-600/35 bg-tuile-100 px-5 py-4 text-[0.85rem] text-tuile-700">
            {m.avertissement}
          </p>

          <Block title={m.editeur.titre}>
            <p>
              {company.legalName} — {company.address}
              <br />
              {m.editeur.telephone} : {company.phone}
              <br />
              {m.editeur.email} : {company.email}
            </p>
            <p>
              {m.editeur.forme} : {company.legal.form}
              <br />
              {m.editeur.capital} : {company.legal.capital}
              <br />
              {m.editeur.siren} : {company.legal.siren}
              <br />
              {m.editeur.siret} : {company.legal.siret}
              <br />
              {m.editeur.rcs} : {company.legal.rcs}
              <br />
              {m.editeur.ape} : {company.legal.naf}
              <br />
              {m.editeur.tva} : {company.legal.tva}
              <br />
              {m.editeur.immatriculee} {company.legal.createdAt}
              <br />
              {m.editeur.directeur} : {company.legal.director}
            </p>
          </Block>

          <Block title={m.garanties.titre}>
            <p>
              {company.legalName} {m.garanties.texte}
            </p>
            <p>
              {m.garanties.garantie}
              <br />
              {m.garanties.assurance}
            </p>
          </Block>

          <Block title={m.hebergement.titre}>
            <p>
              {m.hebergement.avant} (
              <a
                href="https://github.com"
                className="underline transition-colors hover:text-tuile-600"
              >
                github.com
              </a>
              ).
            </p>
          </Block>

          <Block title={m.propriete.titre}>
            <p>{m.propriete.texte}</p>
          </Block>

          <Block title={m.mediation.titre}>
            <p>{m.mediation.texte}</p>
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

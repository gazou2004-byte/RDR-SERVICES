import { Container } from "@/components/ui/section";
import { contenu, type Langue } from "@/content";
import { legal } from "@/content/legal";

/** La politique de confidentialité, dans l'une ou l'autre langue. */
export function Confidentialite({ langue }: { langue: Langue }) {
  const { company } = contenu(langue);
  const l = legal(langue);
  const c = l.confidentialite;

  return (
    <div className="pt-40 pb-24">
      <Container>
        <p className="eyebrow">{c.eyebrow}</p>
        <h1 className="mt-5 font-display text-5xl font-light text-vine-900">
          {c.titre}
        </h1>
        <span className="rule-feuille mt-8" />

        <div className="mt-14 max-w-2xl space-y-10 text-[0.92rem] leading-relaxed text-vine-600">
          {l.versionFrancaiseFaitFoi ? (
            <p className="border border-vine-900/15 px-5 py-4 text-[0.85rem] text-vine-500">
              {l.versionFrancaiseFaitFoi}
            </p>
          ) : null}

          <p>
            {company.legalName} {c.intro}
          </p>

          {c.sections.map((section) => (
            <section key={section.titre} className="space-y-4">
              <h2 className="font-display text-2xl font-light text-vine-900">
                {section.titre}
              </h2>
              {section.body.map((paragraphe) => (
                <p key={paragraphe}>{paragraphe}</p>
              ))}
            </section>
          ))}

          <section className="space-y-4 border-t border-vine-900/12 pt-10">
            <h2 className="font-display text-2xl font-light text-vine-900">
              {c.contactTitre}
            </h2>
            <p>
              {c.contactTexte}{" "}
              <a
                href={`mailto:${company.email}`}
                className="text-feuille-600 transition-colors hover:text-tuile-600"
              >
                {company.email}
              </a>
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}

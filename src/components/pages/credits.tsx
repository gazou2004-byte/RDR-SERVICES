import { Container } from "@/components/ui/section";
import credits from "@/content/credits.json";
import { contenu, type Langue } from "@/content";
import { legal } from "@/content/legal";
import { ui } from "@/content/ui";

/** Les crédits photographiques, dans l'une ou l'autre langue. */
export function Credits({ langue }: { langue: Langue }) {
  const { company } = contenu(langue);
  const l = legal(langue);
  const t = ui(langue);
  const sorted = [...credits].sort((a, b) => a.slot.localeCompare(b.slot));

  return (
    <div className="pt-40 pb-24">
      <Container>
        <p className="eyebrow">{t.credits.eyebrow}</p>
        <h1 className="mt-5 font-display text-5xl font-light text-vine-900">
          {t.credits.titre}
        </h1>
        <span className="rule-feuille mt-8" />

        <div className="mt-12 max-w-3xl space-y-6 text-[0.92rem] leading-relaxed text-vine-600">
          <p>
            {l.credits.intro} {""}
            <span className="text-vine-800">{company.name}</span>.
          </p>
          <p className="border border-feuille-600/35 bg-feuille-300/40 px-5 py-4 text-[0.85rem] text-feuille-700">
            {l.credits.obligation}
          </p>
        </div>

        <ul className="mt-14 max-w-3xl divide-y divide-vine-900/12 border-t border-vine-900/12">
          {sorted.map((credit) => (
            <li key={credit.slot} className="py-6">
              <p className="text-[0.7rem] tracking-[0.2em] text-feuille-600 uppercase">
                {credit.slot}
              </p>
              <p className="mt-2 text-[0.95rem] text-vine-800">
                {credit.title.replace(/\.(jpe?g|png)$/i, "")}
              </p>
              <p className="mt-2 text-[0.8rem] text-vine-500">
                {credit.author ? `${credit.author} — ` : ""}
                {credit.license}
              </p>
              <div className="mt-3 flex flex-wrap gap-5 text-[0.72rem]">
                {/* Les photographies fournies par RDR Services n'ont pas de
                    page d'origine : sans ce garde-fou, le lien s'affichait
                    quand même et ne menait nulle part. */}
                {credit.page ? (
                  <a
                    href={credit.page}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-feuille-600 transition-colors hover:text-tuile-600"
                  >
                    {t.credits.pageWikimedia}
                  </a>
                ) : null}
                {credit.licenseUrl ? (
                  <a
                    href={credit.licenseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-feuille-600 transition-colors hover:text-tuile-600"
                  >
                    {t.credits.texteLicence}
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

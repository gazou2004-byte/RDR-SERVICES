import type { Metadata } from "next";
import { Container } from "@/components/ui/section";
import credits from "@/content/credits.json";

export const metadata: Metadata = {
  title: "Crédits photographiques",
  description:
    "Auteurs et licences des photographies utilisées sur le site RDR Services.",
};

export default function CreditsPage() {
  const sorted = [...credits].sort((a, b) => a.slot.localeCompare(b.slot));

  return (
    <div className="pt-40 pb-24">
      <Container>
        <p className="eyebrow">Attributions</p>
        <h1 className="mt-5 font-display text-5xl font-light text-vine-900">
          Crédits photographiques
        </h1>
        <span className="rule-gold mt-8" />

        <div className="mt-12 max-w-3xl space-y-6 text-[0.92rem] leading-relaxed text-vine-600">
          <p>
            Les photographies actuellement utilisées sur ce site proviennent de
            Wikimedia Commons et sont réutilisées dans le respect de leurs
            licences respectives. Elles ont vocation à être remplacées par les
            photographies propres à {""}
            <span className="text-vine-800">RDR Services</span>.
          </p>
          <p className="border border-gold-600/35 bg-gold-300/40 px-5 py-4 text-[0.85rem] text-gold-700">
            Certaines licences (CC BY, CC BY-SA, FAL) imposent de citer
            l&apos;auteur. Tant que ces images sont en ligne, cette page doit le
            rester et rester accessible depuis le pied de page.
          </p>
        </div>

        <ul className="mt-14 max-w-3xl divide-y divide-vine-900/12 border-t border-vine-900/12">
          {sorted.map((credit) => (
            <li key={credit.slot} className="py-6">
              <p className="text-[0.7rem] tracking-[0.2em] text-gold-600 uppercase">
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
                <a
                  href={credit.page}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-600 transition-colors hover:text-tuile-600"
                >
                  Page Wikimedia Commons →
                </a>
                {credit.licenseUrl ? (
                  <a
                    href={credit.licenseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-600 transition-colors hover:text-tuile-600"
                  >
                    Texte de la licence →
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

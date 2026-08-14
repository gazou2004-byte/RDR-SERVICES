import type { Metadata } from "next";
import { Container } from "@/components/ui/section";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Comment ${company.name} collecte et protège vos données personnelles.`,
};

const sections = [
  {
    title: "Données que nous collectons",
    body: [
      "Formulaire de devis : prénom, nom, adresse e-mail, téléphone, destination souhaitée, dates, nombre de voyageurs, budget indicatif et description de votre projet.",
      "Espace client : prénom, nom, e-mail, téléphone, mot de passe (stocké sous forme chiffrée et non réversible), ainsi que les séjours, documents et messages qui vous sont rattachés.",
    ],
  },
  {
    title: "Pourquoi nous les collectons",
    body: [
      "Répondre à votre demande de devis et organiser votre séjour (exécution du contrat).",
      "Vous donner accès à votre espace client et à vos documents de voyage.",
      "Respecter nos obligations comptables et légales de conservation.",
    ],
  },
  {
    title: "Durée de conservation",
    body: [
      "Demandes de devis non converties : 3 ans à compter du dernier contact.",
      "Dossiers clients et pièces comptables : 10 ans, conformément aux obligations légales.",
      "Comptes de l'espace client : jusqu'à votre demande de suppression.",
    ],
  },
  {
    title: "Partage des données",
    body: [
      "Vos données ne sont ni vendues ni louées. Elles ne sont transmises qu'aux prestataires strictement nécessaires à la réalisation de votre séjour (hébergeurs, restaurants, propriétés visitées) et à notre hébergeur technique.",
    ],
  },
  {
    title: "Vos droits",
    body: [
      "Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données.",
      "Pour l'exercer, écrivez-nous. Nous répondons sous un mois. Vous pouvez également saisir la CNIL (www.cnil.fr) si vous estimez que vos droits ne sont pas respectés.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "Ce site n'utilise ni cookie publicitaire ni traceur tiers. Un unique cookie technique est déposé lorsque vous vous connectez à votre espace client : il sert exclusivement à vous maintenir connecté et disparaît à la déconnexion.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="pt-40 pb-24">
      <Container>
        <p className="eyebrow">Vos données</p>
        <h1 className="mt-5 font-display text-5xl font-light text-vine-900">
          Politique de confidentialité
        </h1>
        <span className="rule-gold mt-8" />

        <div className="mt-14 max-w-2xl space-y-10 text-[0.92rem] leading-relaxed text-vine-600">
          <p>
            {company.legalName} attache une importance particulière à la
            protection de vos données personnelles. Cette page explique
            simplement ce que nous collectons, pourquoi, et comment exercer vos
            droits.
          </p>

          {sections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="font-display text-2xl font-light text-vine-900">
                {section.title}
              </h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <section className="space-y-4 border-t border-vine-900/12 pt-10">
            <h2 className="font-display text-2xl font-light text-vine-900">
              Nous contacter
            </h2>
            <p>
              Pour toute question relative à vos données :{" "}
              <a
                href={`mailto:${company.email}`}
                className="text-gold-600 transition-colors hover:text-tuile-600"
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

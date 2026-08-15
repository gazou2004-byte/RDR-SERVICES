import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { Container, SectionHeading } from "@/components/ui/section";
import { company, process } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact & devis",
  description:
    "Demandez votre devis pour un séjour privé sur mesure dans le Sud-Ouest. Réponse sous 24 heures ouvrées.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de"
        accent="votre séjour"
        description="Remplissez ce formulaire ou appelez-nous directement. Un appel de trente minutes suffit pour savoir si nous sommes le bon interlocuteur."
        image="/images/hero-contact.jpg"
      />

      <section className="border-b border-vine-900/10 py-14 sm:py-20 lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="reveal lg:col-span-7">
              <SectionHeading
                eyebrow="Demande de devis"
                title="Dites-nous tout"
                description="Plus vous êtes précis, plus notre proposition sera juste du premier coup."
              align="left"
              />
              <div className="mt-12">
                <ContactForm />
              </div>
            </div>

            <aside className="reveal lg:col-span-5">
              <div className="border border-vine-900/12 bg-sand-100 p-9">
                <h3 className="text-[0.7rem] font-medium tracking-[0.24em] text-gold-600 uppercase">
                  Nous joindre directement
                </h3>
                <dl className="mt-7 space-y-6">
                  <div>
                    <dt className="text-[0.72rem] text-vine-500">Téléphone</dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${company.phoneHref}`}
                        className="inline-block py-1 font-display text-2xl font-light text-vine-900 transition-colors hover:text-tuile-600"
                      >
                        {company.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.72rem] text-vine-500">E-mail</dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${company.email}`}
                        className="inline-block py-2 text-[0.95rem] text-vine-800 transition-colors hover:text-tuile-600"
                      >
                        {company.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.72rem] text-vine-500">Bureau</dt>
                    <dd className="mt-1 text-[0.95rem] text-vine-800">
                      {company.address}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.72rem] text-vine-500">
                      Disponibilité
                    </dt>
                    <dd className="mt-1 text-[0.95rem] text-vine-800">
                      Lundi – samedi, 9 h – 19 h
                      <span className="mt-1 block text-[0.8rem] text-vine-600">
                        Assistance 24 h/24 pendant votre séjour
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8 border border-vine-900/12 p-9">
                <h3 className="text-[0.7rem] font-medium tracking-[0.24em] text-gold-600 uppercase">
                  La suite
                </h3>
                <ol className="mt-7 space-y-6">
                  {process.map((item) => (
                    <li key={item.step} className="flex gap-5">
                      <span className="font-display text-xl leading-none font-light text-vine-400">
                        {item.step}
                      </span>
                      <div>
                        <p className="text-[0.9rem] font-medium text-vine-800">
                          {item.title}
                        </p>
                        <p className="mt-1.5 text-[0.82rem] leading-relaxed text-vine-500">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

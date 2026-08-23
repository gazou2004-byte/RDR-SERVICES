import { ContactForm } from "@/components/forms/contact-form";
import { Container, SectionHeading } from "@/components/ui/section";
import { contenu, type Langue } from "@/content";
import { ui } from "@/content/ui";

export function ContactSection({ langue }: { langue: Langue }) {
  const { company, destinations, process } = contenu(langue);
  const t = ui(langue);

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-b border-vine-900/10 bg-sand-100 py-16 sm:py-24 lg:py-20"
    >
      <Container>
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.titre}
          description={t.contact.description}
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-7">
            <ContactForm langue={langue} destinations={destinations} />
          </div>

          <aside className="reveal lg:col-span-5">
            <div className="border border-vine-900/12 bg-sand-50 p-8">
              <h3 className="text-[0.7rem] font-medium tracking-[0.24em] text-feuille-600 uppercase">
                {t.contact.joindre}
              </h3>
              <dl className="mt-7 space-y-6">
                <div>
                  <dt className="text-[0.72rem] text-vine-500">{t.contact.telephone}</dt>
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
                  <dt className="text-[0.72rem] text-vine-500">{t.contact.email}</dt>
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
                  <dt className="text-[0.72rem] text-vine-500">{t.contact.bureau}</dt>
                  <dd className="mt-1 text-[0.95rem] text-vine-800">
                    {company.address}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.72rem] text-vine-500">{t.contact.disponibilite}</dt>
                  <dd className="mt-1 text-[0.95rem] text-vine-800">
                    {t.contact.horaires}
                    <span className="mt-1 block text-[0.8rem] text-vine-600">
                      {t.contact.assistance}
                    </span>
                  </dd>
                </div>
              </dl>
            </div>

            <ol className="mt-8 hidden space-y-5 border border-vine-900/12 p-8 sm:block">
              {process.map((item) => (
                <li key={item.step} className="flex gap-5">
                  <span className="font-display text-xl leading-none font-light text-feuille-600">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-[0.9rem] font-medium text-vine-800">
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-[0.82rem] leading-relaxed text-vine-600">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { company, destinations, nav, services } from "@/content/site";
import { Container } from "@/components/ui/section";
import { Logo } from "./logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-parch-200/10 bg-wine-900">
      <Container className="py-20">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-parch-300">
              Conciergerie de voyage indépendante. Séjours privés sur mesure
              dans le Sud-Ouest de la France.
            </p>
            <div className="mt-7 flex gap-5">
              {Object.entries(company.socials).map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.68rem] tracking-[0.14em] text-parch-400 uppercase transition-colors hover:text-gold-400"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Navigation">
            {nav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Destinations">
            {destinations.map((destination) => (
              <FooterLink
                key={destination.slug}
                href={`/destinations/${destination.slug}`}
              >
                {destination.name}
              </FooterLink>
            ))}
            {services.slice(0, 2).map((service) => (
              <FooterLink key={service.slug} href="/services">
                {service.title}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact">
            <li>
              <a
                href={`tel:${company.phoneHref}`}
                className="text-sm text-parch-300 transition-colors hover:text-gold-400"
              >
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="text-sm text-parch-300 transition-colors hover:text-gold-400"
              >
                {company.email}
              </a>
            </li>
            <li className="text-sm text-parch-300">{company.address}</li>
            <li className="pt-4">
              <Link
                href="/contact"
                className="text-[0.68rem] tracking-[0.16em] text-gold-400 uppercase transition-colors hover:text-gold-300"
              >
                Demander un devis →
              </Link>
            </li>
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-parch-200/10 pt-8 text-[0.72rem] text-parch-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {company.legalName}. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-x-7 gap-y-2">
            <span>Licence ATOUT FRANCE n° {company.licenceAtoutFrance}</span>
            <span>Licence transport n° {company.licenceTransport}</span>
          </div>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="transition-colors hover:text-gold-400"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="transition-colors hover:text-gold-400"
            >
              Confidentialité
            </Link>
            <Link
              href="/credits"
              className="transition-colors hover:text-gold-400"
            >
              Crédits photo
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-[0.66rem] font-medium tracking-[0.24em] text-gold-500 uppercase">
        {title}
      </h3>
      <ul className="mt-6 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-parch-300 transition-colors hover:text-gold-400"
      >
        {children}
      </Link>
    </li>
  );
}

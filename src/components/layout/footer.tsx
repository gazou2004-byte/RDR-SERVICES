import Link from "next/link";
import { company } from "@/content/site";
import { Container } from "@/components/ui/section";
import { reseaux } from "@/components/ui/social-icons";
import { Logo } from "./logo";

/**
 * Pied de page réduit à une bande fine.
 *
 * Tout ce qui s'y trouvait en double est parti ailleurs : les colonnes
 * « Navigation » et « Destinations » reprenaient le menu du haut, la phrase de
 * présentation doublait la section « À propos », et les coordonnées sont
 * remontées dans le bandeau « Parlons de votre séjour », juste au-dessus.
 * Ne restent que la marque, les réseaux et le légal.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-vine-900/10 bg-sand-100">
      {/* Le bas est plus creux que le haut : le bouton de discussion flotte
          au-dessus du coin droit et masquait le dernier lien légal. */}
      <Container className="pt-3 pb-14 sm:pt-3 sm:pb-9">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <Logo className="py-0" />

          <div className="flex gap-2">
            {Object.entries(company.socials).map(([cle, href]) => {
              const reseau = reseaux[cle as keyof typeof reseaux];
              if (!reseau) return null;
              const { Icone, nom } = reseau;
              return (
                <a
                  key={cle}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={nom}
                  title={nom}
                  className="grid h-7 w-7 place-items-center text-vine-600 transition-colors hover:text-tuile-600"
                >
                  <Icone className="h-[0.9rem] w-[0.9rem]" />
                </a>
              );
            })}
          </div>
        </div>

        {/* SIREN et RCS ont quitté cette ligne : ils figurent en entier sur la
            page des mentions légales, à un clic. */}
        <div className="mt-3 flex flex-col gap-0.5 border-t border-vine-900/10 pt-2.5 text-[0.68rem] leading-tight text-vine-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.legalName}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-0">
            <Link
              href="/mentions-legales"
              className="inline-block py-0.5 transition-colors hover:text-tuile-600"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="inline-block py-0.5 transition-colors hover:text-tuile-600"
            >
              Confidentialité
            </Link>
            <Link
              href="/credits"
              className="inline-block py-0.5 transition-colors hover:text-tuile-600"
            >
              Crédits photo
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

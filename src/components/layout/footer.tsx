import Link from "next/link";
import { contenu, lien, type Langue } from "@/content";
import { ui } from "@/content/ui";
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
 *
 * Tout tient sur une seule ligne dès qu'il y a la place. Deux réglages
 * expliquent les marges :
 *
 * - Le bouton de discussion flotte dans le coin bas droit de l'écran, sur une
 *   quarantaine de pixels de haut. Sur mobile la ligne occupe toute la
 *   largeur : il faut donc lui laisser de la hauteur dessous. Sur écran moyen
 *   on réserve plutôt de la place à droite, ce qui permet de coller la ligne
 *   au bas de la page.
 * - Au-delà de 1280 px, la colonne du site est plus étroite que l'écran : le
 *   bouton flotte à côté et non par-dessus, la réserve est donc inutile.
 */
export function Footer({ langue }: { langue: Langue }) {
  const { company } = contenu(langue);
  const t = ui(langue);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-vine-900/10 bg-sand-100">
      <Container className="pt-3 pb-16 sm:pt-2 sm:pb-2">
        <div className="flex flex-col gap-2 text-[0.68rem] leading-tight text-vine-500 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pr-48 xl:pr-0">
          <div className="flex items-center justify-between gap-4 sm:justify-start sm:gap-4">
            <Logo langue={langue} taille="petit" />

            <div className="flex gap-1">
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
                    className="grid h-6 w-6 place-items-center text-vine-600 transition-colors hover:text-tuile-600"
                  >
                    <Icone className="h-[0.85rem] w-[0.85rem]" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* SIREN et RCS ne figurent pas ici : ils sont en entier sur la page
              des mentions légales, à un clic. */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-0.5">
            <p>
              © {year} {company.legalName}
            </p>
            {/* La FAQ a quitté le menu du haut : ce lien ouvre la fenêtre de
                discussion sur l'onglet des questions, comme avant. */}
            <Link
              href={lien(langue, "/#faq")}
              className="transition-colors hover:text-tuile-600"
            >
              {t.pied.faq}
            </Link>
            <Link
              href={lien(langue, "/mentions-legales")}
              className="transition-colors hover:text-tuile-600"
            >
              {t.pied.mentions}
            </Link>
            <Link
              href={lien(langue, "/confidentialite")}
              className="transition-colors hover:text-tuile-600"
            >
              {t.pied.confidentialite}
            </Link>
            <Link
              href={lien(langue, "/credits")}
              className="transition-colors hover:text-tuile-600"
            >
              {t.pied.credits}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

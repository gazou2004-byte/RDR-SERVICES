import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { ServicesGrid } from "@/components/sections/services-grid";
import { DestinationsGrid } from "@/components/sections/destinations-grid";
import { AboutSection } from "@/components/sections/about-section";
import { Process } from "@/components/sections/process";
import { Cta } from "@/components/sections/cta";

/**
 * Le site tient sur cette page. Chaque section porte l'ancre vers laquelle
 * pointe le menu ; seules les cinq destinations ont leur propre page,
 * atteignable depuis la section « Destinations ».
 *
 * Les questions fréquentes et la demande de devis ne défilent plus en bas de
 * page : elles sont dans la fenêtre de discussion, posée en bas à droite de
 * l'écran et disponible depuis n'importe où (voir `chat-widget.tsx`).
 */
import type { Langue } from "@/content/langue";

/**
 * La page d'accueil, indépendante de la langue.
 *
 * Les deux racines — française et anglaise — l'appellent avec leur propre
 * langue : le balisage n'existe qu'une fois, seul le contenu change.
 */
export function Accueil({ langue }: { langue: Langue }) {
  return (
    <>
      <Hero langue={langue} />
      <Intro langue={langue} />
      {/* `detailed` : description longue et points de détail. Sans lui, la
          section tenait 1 991 px pour quatre phrases d'une ligne. */}
      <ServicesGrid langue={langue} detailed />
      <DestinationsGrid langue={langue} />
      {/* Le panneau de synthèse qui se trouvait ici a été retiré : ses cinq
          points répétaient les quatre services, et « Un seul interlocuteur »
          est déjà le sur-titre de leur section. */}
      <AboutSection langue={langue} />
      {/* Les quatre étapes répondent à la question qui retient un visiteur
          avant d'écrire : que se passe-t-il si j'appelle ? */}
      <Process langue={langue} />
      {/* Le seul bloc sombre : il ferme la page au lieu de la laisser
          s'arrêter sur la dernière étape. Son bouton ouvre la fenêtre de
          discussion sur le formulaire. */}
      <Cta langue={langue} />
    </>
  );
}

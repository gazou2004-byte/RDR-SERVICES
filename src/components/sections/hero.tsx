import Image from "next/image";
import { contenu, type Langue } from "@/content";
import { ui } from "@/content/ui";

/**
 * Héros en quatre panneaux côte à côte : les quatre territoires visibles
 * d'un seul coup d'œil, avec le nom de la maison par-dessus.
 *
 * Chaque panneau n'occupe qu'un quart de la largeur. Un simple centrage
 * amputait les sujets — le château du Médoc sortait du cadre. Le champ
 * `cadrage` défini dans le contenu indique donc quelle partie garder.
 *
 * La grille change de forme selon l'écran, et les quatre photos restent
 * visibles dans les deux cas :
 *
 *   ordinateur  4 colonnes sur toute la hauteur — des bandes verticales
 *   téléphone   2 colonnes sur 2 rangées — quatre cases, aucune masquée
 *
 * Auparavant les deux derniers panneaux étaient purement cachés sous 1024 px :
 * quatre bandes de 97 pixels ne montraient plus rien, mais les Landes et la
 * Gascogne disparaissaient de la page d'accueil.
 */
export function Hero({ langue }: { langue: Langue }) {
  const { hero } = contenu(langue);
  const t = ui(langue);

  return (
    <section
      id="accueil"
      // Marque les grandes photos d'en-tête : le bouton de discussion s'y
      // efface, voir `chat-widget.tsx`.
      data-bandeau
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-vine-900"
    >
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
        {hero.panels.map((panel, index) => (
          <div key={panel.image} className="relative overflow-hidden">
            <Image
              src={panel.image}
              alt={`${t.heros.paysage} — ${panel.label}`}
              fill
              // Les deux premières seules sont prioritaires : quatre grandes
              // images chargées d'urgence retarderaient l'affichage du titre.
              priority={index < 2}
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
              style={{ objectPosition: panel.cadrage }}
            />
            {/* Séparation discrète entre les panneaux */}
            <span className="absolute inset-y-0 right-0 w-px bg-sand-50/25" />
            {/* La couture horizontale n'existe que sur la grille en deux
                rangées, donc sous la première rangée et sous 1024 px. */}
            {index < 2 ? (
              <span className="absolute inset-x-0 bottom-0 h-px bg-sand-50/25 lg:hidden" />
            ) : null}
          </div>
        ))}
      </div>

      {/* Voile : le titre clair doit tenir sur n'importe quelle photo */}
      <div className="absolute inset-0 bg-vine-900/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-vine-900/55 via-transparent to-vine-900/65" />

      <div className="relative z-10 w-full px-6 text-center">
        <h1 className="font-display text-[2.05rem] leading-none font-light tracking-[0.08em] text-sand-50 uppercase sm:text-6xl sm:tracking-[0.1em] lg:text-[5rem]">
          {hero.title}
        </h1>

        <p className="mx-auto mt-7 inline-block max-w-3xl bg-vine-900/55 px-5 py-3.5 text-[0.7rem] font-medium tracking-[0.14em] text-sand-50 uppercase backdrop-blur-[2px] sm:mt-9 sm:px-8 sm:py-4 sm:text-[0.8rem] sm:tracking-[0.2em]">
          {hero.banner}
        </p>
      </div>

      {/* Chevron de défilement */}
      <a
        href="#intro"
        aria-label={t.heros.sectionSuivante}
        className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2 p-3 text-sand-50/80 transition-colors hover:text-feuille-400"
      >
        <svg
          viewBox="0 0 32 20"
          className="h-5 w-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M2 2l14 12L30 2" strokeLinecap="round" />
        </svg>
      </a>
    </section>
  );
}

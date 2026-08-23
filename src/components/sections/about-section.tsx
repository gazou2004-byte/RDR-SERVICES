import { Container, SectionHeading } from "@/components/ui/section";
import { StoryMosaic } from "@/components/sections/story-mosaic";
import { contenu, type Langue } from "@/content";
import { ui } from "@/content/ui";

export function AboutSection({ langue }: { langue: Langue }) {
  const { apropos } = contenu(langue);
  const t = ui(langue);

  return (
    <>
      <section id="a-propos" className="scroll-mt-24 pt-16 sm:pt-24 lg:pt-20">
        <Container>
          <SectionHeading eyebrow={t.apropos.eyebrow} title={t.apropos.titre} />
        </Container>
      </section>

      <StoryMosaic langue={langue} paragraphes={apropos.histoire} />

      {/*
        La rangée de chiffres qui fermait cette section a été retirée : elle
        répétait à l'identique celle de l'introduction, deux écrans plus haut.
        Le bandeau d'immatriculation qui la suivait est parti aussi — une
        section de présentation n'est pas l'endroit d'un SIRET, qui figure en
        entier sur la page des mentions légales.
      */}
    </>
  );
}

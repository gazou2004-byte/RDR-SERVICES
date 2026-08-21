import { Container, SectionHeading } from "@/components/ui/section";
import { StoryMosaic } from "@/components/sections/story-mosaic";

const histoire = [
  "RDR Services est une conciergerie de voyage installée en Nouvelle-Aquitaine. Nous ne vendons pas de circuits : nous composons des séjours, un par un, pour des voyageurs qui veulent autre chose qu'un programme imprimé à l'avance.",
  "Ce qui fait la différence tient à peu de choses : connaître le propriétaire qui ouvre son chai un dimanche, savoir quelle table vaut le détour et laquelle vit sur sa réputation, deviner qu'il vaut mieux inverser deux journées parce que la pluie arrive. Ce savoir-là ne s'achète pas, il se construit sur place.",
  "Nous couvrons cinq territoires, du Bordelais aux Pyrénées-Atlantiques, du Périgord aux Landes et à la Gascogne. Toujours en privatif, toujours avec le même chauffeur du premier au dernier jour, et un interlocuteur unique que vous pouvez appeler à toute heure pendant votre voyage.",
] as const;

export function AboutSection() {
  return (
    <>
      <section id="a-propos" className="scroll-mt-24 pt-16 sm:pt-24 lg:pt-20">
        <Container>
          <SectionHeading eyebrow="Notre histoire" title="À propos" />
        </Container>
      </section>

      <StoryMosaic paragraphes={histoire} />

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

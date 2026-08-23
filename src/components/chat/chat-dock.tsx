import { ContactForm } from "@/components/forms/contact-form";
import { ChatWidget } from "@/components/chat/chat-widget";
import { contenu, type Langue } from "@/content";

/**
 * Point d'entrée de la fenêtre de discussion, posé dans la mise en page
 * générale pour être présent sur toutes les pages publiques.
 *
 * Ce fichier n'existe que pour choisir le formulaire : composant serveur, il
 * peut importer la version qui enregistre en base. Le script de publication
 * de la vitrine statique remplace ici même cet import par la version qui
 * ouvre le logiciel de messagerie du visiteur.
 */
export function ChatDock({ langue }: { langue: Langue }) {
  const { company, destinations, faq } = contenu(langue);

  return (
    <ChatWidget
      langue={langue}
      company={company}
      faq={faq}
      formulaire={<ContactForm langue={langue} destinations={destinations} />}
    />
  );
}

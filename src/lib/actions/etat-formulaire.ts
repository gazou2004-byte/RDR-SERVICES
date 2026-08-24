/**
 * L'état renvoyé par une action de formulaire.
 *
 * Ce type vivait dans les actions d'authentification, parties avec l'espace
 * client. Le formulaire de contact s'en sert toujours : il a donc son fichier.
 */
export type FormState = {
  error?: string;
  success?: string;
  fieldErrors?: Record<string, string[]>;
};

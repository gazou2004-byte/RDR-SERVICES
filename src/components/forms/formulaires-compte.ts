/**
 * Point de choix des formulaires de compte.
 *
 * Comme pour la fenêtre de discussion, ce fichier n'existe que pour désigner
 * quelle version des formulaires les pages utilisent : celle qui enregistre en
 * base quand le site tourne sur un serveur, ou celle qui se contente de
 * montrer les champs sur la vitrine statique. Le script de publication réécrit
 * ces deux lignes, et rien d'autre.
 */

export { LoginForm } from "./login-form";
export { RegisterForm } from "./register-form";

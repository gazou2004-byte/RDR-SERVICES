/**
 * Compile la vitrine statique : uniquement le site public, en fichiers HTML
 * déposables sur n'importe quel hébergeur (GitHub Pages, OVH, un simple FTP…).
 *
 *   npm run build:vitrine
 *
 * Un seul escamotage, annulé à la fin quoi qu'il arrive : le formulaire de
 * contact bascule sur la version qui ouvre la messagerie du visiteur, puisque
 * aucune action serveur ne peut s'exécuter en statique.
 */
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const racine = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
// Le formulaire est choisi dans ce fichier, seul endroit à réécrire.
const socleChat = path.join(racine, "src/components/chat/chat-dock.tsx");

// Nom du dépôt : sur GitHub Pages, le site vit dans /<dépôt>/
const basePath = process.argv[2] ?? "/RDR-SERVICES";

const chatOriginal = readFileSync(socleChat, "utf8");

function restaurer() {
  writeFileSync(socleChat, chatOriginal);
  console.log("· formulaire de la discussion restauré");
}

process.on("SIGINT", () => {
  restaurer();
  process.exit(130);
});

try {
  console.log(`Compilation de la vitrine (basePath « ${basePath} »)\n`);

  const bascule = chatOriginal
    .replace(
      'import { ContactForm } from "@/components/forms/contact-form";',
      'import { ContactFormStatic } from "@/components/forms/contact-form-static";',
    )
    .replace(
      "<ContactForm langue={langue} destinations={destinations} />",
      "<ContactFormStatic\n        langue={langue}\n        email={company.email}\n        destinations={destinations}\n      />",
    );

  if (bascule === chatOriginal) {
    throw new Error(
      "chat-dock.tsx n'importe plus ContactForm : la bascule vers la version " +
        "messagerie n'a rien remplacé. Vérifiez le fichier avant de publier.",
    );
  }
  writeFileSync(socleChat, bascule);
  console.log("· formulaire de contact basculé en version messagerie");

  rmSync(path.join(racine, "out"), { recursive: true, force: true });
  rmSync(path.join(racine, ".next"), { recursive: true, force: true });

  execSync("npx next build", {
    cwd: racine,
    stdio: "inherit",
    env: {
      ...process.env,
      NEXT_PUBLIC_VITRINE: "1",
      VITRINE_BASE_PATH: basePath,
      // Lu par le chargeur d'images, côté navigateur comme côté compilation
      NEXT_PUBLIC_VITRINE_BASE_PATH: basePath,
    },
  });

  // GitHub Pages ignore les dossiers commençant par un souligné sans ce fichier
  writeFileSync(path.join(racine, "out/.nojekyll"), "");

  /*
   * On efface .next : il contient une compilation au préfixe /<dépôt>/, propre
   * à GitHub Pages. Un `npm run start` lancé ensuite la servirait telle quelle
   * et le navigateur chercherait le CSS à une adresse inexistante — la page
   * s'affichait alors sans aucune mise en forme.
   */
  rmSync(path.join(racine, ".next"), { recursive: true, force: true });

  console.log("\n✓ Vitrine compilée dans le dossier out/");
  console.log("  (.next effacé : relancez `npm run build` pour travailler en local)");
} catch (erreur) {
  console.error("\n✗ Échec de la compilation");
  process.exitCode = 1;
  if (erreur instanceof Error) console.error(erreur.message);
} finally {
  restaurer();
}

/**
 * Compile la vitrine statique : uniquement le site public, en fichiers HTML
 * déposables sur n'importe quel hébergeur (GitHub Pages, OVH, un simple FTP…).
 *
 *   npm run build:vitrine
 *
 * L'espace client en est volontairement absent : il a besoin d'un serveur
 * Node et d'une base de données, ce qu'un hébergement de fichiers ne fournit
 * pas. Le site complet se compile toujours avec `npm run build`.
 *
 * Deux escamotages, tous deux annulés à la fin quoi qu'il arrive :
 *   1. `src/app/[lang]/espace-client` est renommé `_espace-client`. Next ignore les
 *      dossiers commençant par un souligné : les pages disparaissent donc du
 *      routage sans être supprimées.
 *   2. La page contact bascule sur le formulaire qui ouvre la messagerie,
 *      puisqu'aucune action serveur ne peut s'exécuter en statique.
 */
import { execSync } from "node:child_process";
import { existsSync, readFileSync, renameSync, writeFileSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const racine = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const espaceClient = path.join(racine, "src/app/[lang]/espace-client");
const espaceClientMasque = path.join(racine, "src/app/[lang]/_espace-client");
// Le formulaire est choisi dans ce fichier, seul endroit à réécrire.
const socleChat = path.join(racine, "src/components/chat/chat-dock.tsx");

// Nom du dépôt : sur GitHub Pages, le site vit dans /<dépôt>/
const basePath = process.argv[2] ?? "/RDR-SERVICES";

const chatOriginal = readFileSync(socleChat, "utf8");
let deplace = false;

function restaurer() {
  if (deplace && existsSync(espaceClientMasque)) {
    renameSync(espaceClientMasque, espaceClient);
    console.log("· espace client remis en place");
  }
  writeFileSync(socleChat, chatOriginal);
  console.log("· formulaire de la discussion restauré");
}

process.on("SIGINT", () => {
  restaurer();
  process.exit(130);
});

try {
  console.log(`Compilation de la vitrine (basePath « ${basePath} »)\n`);

  if (existsSync(espaceClient)) {
    renameSync(espaceClient, espaceClientMasque);
    deplace = true;
    console.log("· espace client écarté du routage");
  }

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

/**
 * Compile la vitrine et la publie sur GitHub Pages.
 *
 *   npm run deploy:vitrine
 *
 * Le dossier out/ est reconstruit à chaque fois puis poussé sur la branche
 * `gh-pages` du dépôt. Cette branche ne contient que le site compilé : le
 * code source reste sur `main`.
 *
 * Prérequis, à faire une seule fois sur github.com :
 *   Settings → Pages → Source : « Deploy from a branch »
 *   Branch : gh-pages, dossier : / (root) → Save
 */
import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const racine = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(racine, "out");

function depot() {
  try {
    return execSync("git remote get-url origin", { cwd: racine })
      .toString()
      .trim();
  } catch {
    console.error("Aucun dépôt distant « origin » configuré.");
    process.exit(1);
  }
}

const url = depot();
// Le nom du dépôt donne le sous-dossier sur GitHub Pages
const nom = url.replace(/\.git$/, "").split("/").pop();

console.log(`Publication de la vitrine sur ${url} (branche gh-pages)\n`);

execSync(`node scripts/build-vitrine.mjs /${nom}`, {
  cwd: racine,
  stdio: "inherit",
});

if (!existsSync(out)) {
  console.error("\nLe dossier out/ est absent : la compilation a échoué.");
  process.exit(1);
}

const git = (commande) =>
  execSync(`git ${commande}`, { cwd: out, stdio: "pipe" });

git("init -q");
git("checkout -q -B gh-pages");
git("add -A");
git(
  '-c user.email="noreply@anthropic.com" -c user.name="RDR Service" ' +
    'commit -q -m "Vitrine RDR Service — export statique"',
);

execSync(`git push --force ${url} gh-pages:gh-pages`, {
  cwd: out,
  stdio: "inherit",
});

const compte = url.match(/github\.com[:/]([^/]+)/)?.[1] ?? "";
console.log(
  `\n✓ Publié. Le site sera visible sous une minute :\n  https://${compte}.github.io/${nom}/`,
);

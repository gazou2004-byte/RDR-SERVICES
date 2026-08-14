/**
 * Génère à l'avance toutes les variantes d'images de Next.
 *
 * Next optimise chaque photo à la première demande : sans cela, le premier
 * visiteur attend plusieurs secondes que les images apparaissent. Ce script
 * fait ce travail une bonne fois pour toutes.
 *
 * Usage : npm run warm   (le serveur doit tourner)
 *         npm run warm -- http://localhost:3100
 */
import { readdir } from "node:fs/promises";

const BASE = process.argv[2] ?? "http://localhost:3100";
const WIDTHS = [256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840];

const files = (await readdir(new URL("../public/images", import.meta.url)))
  .filter((f) => /\.(jpe?g|png)$/i.test(f));

if (files.length === 0) {
  console.error("Aucune image trouvée dans public/images");
  process.exit(1);
}

console.log(`${files.length} photos × ${WIDTHS.length} tailles sur ${BASE}`);

let done = 0;
let failed = 0;

for (const file of files) {
  // Séquentiel par photo : l'optimisation est gourmande en processeur,
  // tout lancer d'un coup ferait tomber le serveur en timeout.
  await Promise.all(
    WIDTHS.map(async (w) => {
      const url = `${BASE}/_next/image?url=${encodeURIComponent(`/images/${file}`)}&w=${w}&q=75`;
      try {
        const res = await fetch(url);
        if (res.ok) {
          await res.arrayBuffer();
          done++;
        } else {
          failed++;
        }
      } catch {
        failed++;
      }
    }),
  );
  process.stdout.write(".");
}

console.log(`\n${done} variantes générées${failed ? `, ${failed} échecs` : ""}`);

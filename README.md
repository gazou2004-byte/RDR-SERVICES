# RDR Services — site & espace client

Site vitrine et espace client d'une conciergerie de voyage haut de gamme dans le
Sud-Ouest de la France (Bordelais, Périgord, Pays Basque, Gascogne).

Construit avec **Next.js 16** (App Router), **Tailwind CSS 4**, **Prisma 7** et
**SQLite**.

---

## Démarrer le projet

```bash
npm install                # installer les dépendances
cp .env.example .env       # créer le fichier de configuration
npx prisma migrate dev     # créer la base de données
npm run db:seed            # (optionnel) données de démonstration
npm run dev                # lancer le site sur http://localhost:3000
```

Un compte de démonstration est créé par `npm run db:seed` :

| | |
|---|---|
| E-mail | `client@rdr-services.fr` |
| Mot de passe | `demo1234` |

> ⚠️ Avant toute mise en ligne : générez une vraie clé avec
> `openssl rand -base64 48` et placez-la dans `AUTH_SECRET` (fichier `.env`).
> La valeur fournie par défaut n'est utilisable qu'en développement.

---

## Modifier le contenu du site

**Tout le texte du site est regroupé dans un seul fichier :**
[`src/content/site.ts`](src/content/site.ts)

Vous y trouverez, dans l'ordre :

| Ce que vous voulez changer | Section du fichier |
|---|---|
| Téléphone, e-mail, adresse, identité légale, réseaux sociaux | `company` |
| Les entrées du menu | `nav` |
| Le grand titre de la page d'accueil | `hero` |
| Le texte de présentation et les 4 chiffres clés | `intro` |
| Les 22 activités par région | `activites` |
| Les 4 services et leurs détails | `services` |
| Les 9 expériences | `experiences` |
| Les 5 régions, leurs temps forts et itinéraires | `destinations` |
| Les 4 étapes « comment ça se passe » | `process` |
| Les témoignages clients (⚠ inventés, non affichés) | `testimonials` |
| Les questions fréquentes | `faq` |

Aucune connaissance technique n'est nécessaire : il suffit de remplacer le texte
entre guillemets. Le site se met à jour automatiquement pendant que `npm run dev`
tourne.

### Remplacer les photos

Les images vivent dans [`public/images/`](public/images). Pour changer une photo,
déposez la vôtre au même endroit avec **le même nom de fichier**. Formats
conseillés : JPEG, 2000 px de large environ.

Les photos actuelles proviennent de Wikimedia Commons et servent de
**placeholders**. Elles sont créditées sur la page `/credits`, comme leurs
licences l'exigent. **Dès que vous les remplacez par vos propres photos,
supprimez les entrées correspondantes** dans
[`src/content/credits.json`](src/content/credits.json).

### Informations légales

L'identité de la société est renseignée dans `company.legal` (`site.ts`) à
partir du registre national des entreprises : SASU, capital 2 500 €,
SIREN 920 247 517, RCS Libourne, TVA FR52920247517.

**Restent à fournir** : le téléphone et l'e-mail réels (les valeurs actuelles
sont fictives), l'assurance responsabilité civile professionnelle et le
médiateur de la consommation.

**Aucune immatriculation au registre des opérateurs de voyages (ATOUT FRANCE)
n'est rattachée à ce SIREN** — l'activité déclarée est la photographie
(code APE 7420Z). Les deux numéros de licence qu'affichait le site étaient
inventés et ont été retirés. Vendre des forfaits touristiques exige cette
immatriculation, une garantie financière et une RCP.

---

## Ce que contient le site

### Pages publiques

Le site tient sur une seule page, plus une fiche par région. Les anciennes
pages `/services`, `/experiences`, `/a-propos` et `/contact` ont été
supprimées : elles reprenaient le contenu de l'accueil, où le menu conduit
maintenant par ancres.

| Page | Adresse |
|---|---|
| Accueil (services, destinations, à propos, étapes) | `/` |
| Détail d'une région | `/destinations/bordeaux-medoc`, `/perigord-dordogne`, `/landes`, `/pyrenees-atlantiques`, `/gascogne-armagnac` |
| Mentions légales | `/mentions-legales` |
| Confidentialité | `/confidentialite` |
| Crédits photo | `/credits` |

Les questions fréquentes et la demande de devis n'ont plus de section dans la
page : elles vivent dans la **fenêtre de discussion** en bas à droite de
l'écran, disponible partout. Les entrées « FAQ » et « Contact » du menu
l'ouvrent sur le bon onglet. Voir
[`src/components/chat/chat-widget.tsx`](src/components/chat/chat-widget.tsx).

### Espace client

| Page | Adresse |
|---|---|
| Connexion | `/espace-client/connexion` |
| Création de compte | `/espace-client/inscription` |
| Tableau de bord | `/espace-client` |
| Séjours | `/espace-client/sejours` |
| Détail d'un séjour | `/espace-client/sejours/[id]` |
| Documents | `/espace-client/documents` |
| Messagerie | `/espace-client/messages` |
| Profil & mot de passe | `/espace-client/profil` |

Le client y retrouve ses séjours (dates, voyageurs, suivi de règlement, notes du
conseiller), ses documents (devis, factures, programmes, bons d'échange) et sa
messagerie avec le conseiller.

Les demandes envoyées depuis le formulaire de contact sont enregistrées en base
dans la table `leads`. Pour les consulter : `npm run db:studio`.

---

## Commandes disponibles

| Commande | Effet |
|---|---|
| `npm run dev` | Lance le site en développement |
| `npm run build` | Prépare la version de production |
| `npm run start` | Lance la version de production |
| `npm run lint` | Vérifie la qualité du code |
| `npm run db:migrate` | Applique les changements de structure de la base |
| `npm run db:seed` | Recrée les données de démonstration |
| `npm run db:studio` | Ouvre une interface pour consulter/modifier la base |
| `npm run db:reset` | Vide et recrée entièrement la base |

---

## Mise en ligne de la vitrine — automatique

Le site public est en ligne à cette adresse, et elle ne change jamais :

**https://gazou2004-byte.github.io/RDRSERVICES-vitrine/**

**Il n'y a rien à lancer.** À chaque modification envoyée sur la branche `main`,
GitHub recompile le site et le remet en ligne tout seul, en deux à trois
minutes :

```bash
git add -A
git commit -m "ce que j'ai changé"
git push
```

Le déroulé est visible dans l'onglet **Actions** du dépôt. Le bouton
« Run workflow » y permet aussi de relancer une publication sans rien modifier.

La recette est décrite dans
[`.github/workflows/publier.yml`](.github/workflows/publier.yml). Le sous-dossier
de l'adresse est déduit du nom du dépôt à chaque publication : **renommer le
dépôt ne casse rien**, il suffit de relancer une publication depuis l'onglet
Actions. Un dépôt nommé `gazou2004-byte.github.io` servirait le site à la
racine, sans sous-dossier.

`npm run deploy:vitrine` existe toujours pour publier à la main depuis le poste,
mais ce n'est plus nécessaire.

L'espace client n'est pas inclus dans cette version : il lui faut un serveur
et une base de données. Voir la section suivante.

---

## Mise en ligne du site complet

### 1. Choisir une base de données

SQLite convient au développement local mais **ne fonctionne pas** sur un
hébergement sans disque persistant (Vercel, Netlify). Prévoyez une base
PostgreSQL (Neon, Supabase, Railway — tous proposent une offre gratuite).

Trois modifications sont alors nécessaires :

1. Dans `prisma/schema.prisma` : `provider = "postgresql"`
2. Installer l'adaptateur : `npm install @prisma/adapter-pg pg`
3. Dans `src/lib/prisma.ts` : remplacer `PrismaBetterSqlite3` par `PrismaPg`

Puis `npx prisma migrate deploy`.

### 2. Variables d'environnement

À définir sur l'hébergeur :

- `DATABASE_URL` — l'URL de votre base PostgreSQL
- `AUTH_SECRET` — généré avec `openssl rand -base64 48`

### 3. Adresse du site

Remplacez `https://rdr-services.fr` par votre domaine dans :

- `src/app/layout.tsx` (`metadataBase`)
- `src/app/sitemap.ts`
- `src/app/robots.ts`

---

## Points techniques

- **Authentification maison** : mots de passe hachés avec bcrypt (12 tours),
  session signée (JWT `HS256` via `jose`) dans un cookie `httpOnly`, `sameSite:
  lax`, `secure` en production. Voir [`src/lib/auth.ts`](src/lib/auth.ts).
- **Cloisonnement des données** : chaque requête de l'espace client filtre sur
  l'identifiant de l'utilisateur connecté — deviner l'identifiant d'un séjour ne
  permet pas d'y accéder.
- **Formulaires** : Server Actions + validation Zod côté serveur, avec un champ
  piège (« honeypot ») contre les robots sur le formulaire public.
- **Accessibilité** : les animations d'apparition ne s'activent que si
  JavaScript fonctionne, et sont désactivées si le visiteur a choisi de réduire
  les animations. Le contenu reste lisible dans tous les cas.
- **Aucune dépendance externe à l'exécution** : toutes les images sont servies
  depuis `public/`, aucune police ni script tiers n'est chargé à distance.

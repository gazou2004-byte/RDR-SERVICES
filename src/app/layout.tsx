import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { company } from "@/content/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rdr-service.fr"),
  title: {
    default: `${company.name} — ${company.tagline} dans le Sud-Ouest`,
    template: `%s | ${company.name}`,
  },
  description:
    "Conciergerie de voyage haut de gamme dans le Sud-Ouest : séjours privés sur mesure, grands crus du Bordelais, Périgord, Pays Basque et Gascogne, transport VIP avec chauffeur dédié.",
  keywords: [
    "conciergerie",
    "voyage privé",
    "Sud-Ouest",
    "Bordeaux",
    "Médoc",
    "Périgord",
    "Pays Basque",
    "Gascogne",
    "chauffeur privé",
    "œnotourisme",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: company.name,
    title: `${company.name} — ${company.tagline}`,
    description:
      "Séjours privés sur mesure dans le Sud-Ouest, avec chauffeur dédié et accès privilégiés aux grands crus.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning : le script ci-dessous ajoute la classe `js`
    // sur <html> avant l'hydratation, ce qui fait légitimement diverger
    // le balisage serveur du balisage client sur ce seul attribut.
    <html
      lang="fr"
      className={`${cormorant.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/*
          Marque le document comme « JavaScript actif » avant le premier rendu.
          Les animations d'apparition ne s'appliquent qu'à partir de là : sans
          JS, tout le contenu reste visible.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js")`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-stone-50">
        <RevealOnScroll />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

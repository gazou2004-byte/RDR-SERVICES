import { Cormorant_Garamond, Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ChatDock } from "@/components/chat/chat-dock";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { contenu, type Langue } from "@/content";

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

/**
 * L'ossature commune aux deux langues : le document, l'en-tête, le pied et la
 * fenêtre de discussion.
 *
 * Le site a deux racines — une par langue — parce que l'attribut `lang` du
 * document et le menu doivent différer dès le HTML servi, sans quoi un moteur
 * de recherche verrait une page anglaise déclarée en français. Elles ne
 * diffèrent que par cette langue : tout le reste tient ici, en un exemplaire.
 */
export function Coque({
  langue,
  children,
}: {
  langue: Langue;
  children: React.ReactNode;
}) {
  const { destinations, nav } = contenu(langue);

  return (
    // suppressHydrationWarning : le script ci-dessous ajoute la classe `js`
    // sur <html> avant l'hydratation, ce qui fait légitimement diverger
    // le balisage serveur du balisage client sur ce seul attribut.
    <html
      lang={langue}
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
      <body className="flex min-h-screen flex-col bg-sand-50">
        <RevealOnScroll />
        <Header langue={langue} nav={nav} destinations={destinations} />
        <main className="flex-1">{children}</main>
        <Footer langue={langue} />
        <ChatDock langue={langue} />
      </body>
    </html>
  );
}

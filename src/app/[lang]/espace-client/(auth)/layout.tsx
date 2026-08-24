import Image from "next/image";
import { redirect } from "next/navigation";
import { lienEspaceClient, estLangue } from "@/content/langue";

export default async function AuthLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  /*
   * La vitrine statique n'a ni session ni base : on n'y charge même pas le
   * module d'authentification, qui lit les cookies et interrogerait une base
   * absente. Import différé plutôt qu'en tête de fichier, pour cette raison.
   */
  if (process.env.NEXT_PUBLIC_VITRINE !== "1") {
    const { getCurrentUser } = await import("@/lib/auth");
    // Déjà connecté : inutile de repasser par la connexion
    if (await getCurrentUser()) {
      redirect(lienEspaceClient(estLangue(lang) ? lang : "fr"));
    }
  }

  return (
    <div className="relative flex min-h-[100svh] items-center justify-center px-6 py-32">
      <Image
        src="/images/exp-verticale.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-sand-50/88" />
      <div className="absolute inset-0 bg-gradient-to-b from-sand-50 via-sand-50/75 to-sand-50" />

      <div className="relative z-10 w-full max-w-lg border border-vine-900/12 bg-sand-50/90 p-9 shadow-[0_24px_60px_-30px] shadow-vine-900/40 backdrop-blur-md sm:p-12">
        {children}
      </div>
    </div>
  );
}

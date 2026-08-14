import Image from "next/image";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Déjà connecté : inutile de repasser par la connexion
  if (await getCurrentUser()) redirect("/espace-client");

  return (
    <div className="relative flex min-h-[100svh] items-center justify-center px-6 py-32">
      <Image
        src="/images/auth-fond.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-wine-950/88" />
      <div className="absolute inset-0 bg-gradient-to-b from-wine-950 via-wine-950/70 to-wine-950" />

      <div className="relative z-10 w-full max-w-lg border border-parch-200/12 bg-wine-900/80 p-9 backdrop-blur-md sm:p-12">
        {children}
      </div>
    </div>
  );
}

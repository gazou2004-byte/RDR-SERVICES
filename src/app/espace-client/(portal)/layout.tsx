import type { Metadata } from "next";
import { Container } from "@/components/ui/section";
import { PortalNav } from "@/components/portal/portal-nav";
import { logoutAction } from "@/lib/actions/auth-actions";
import { requireUser } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Espace client",
  robots: { index: false },
};

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await requireUser();

  return (
    <div className="border-b border-vine-900/10 pt-32 pb-24 lg:pt-40">
      <Container>
        {/* En-tête de l'espace */}
        <div className="flex flex-col gap-6 border-b border-vine-900/12 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Espace client</p>
            <h1 className="mt-4 font-display text-4xl leading-tight font-light text-vine-900 sm:text-5xl">
              Bonjour, {user.firstName}
            </h1>
          </div>

          <form action={logoutAction}>
            <button
              type="submit"
              className="border border-vine-900/25 px-5 py-2.5 text-[0.66rem] font-medium tracking-[0.18em] text-vine-600 uppercase transition-colors hover:border-tuile-600 hover:text-tuile-600"
            >
              Se déconnecter
            </button>
          </form>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-3">
            <PortalNav />
          </div>
          <div className="lg:col-span-9">{children}</div>
        </div>
      </Container>
    </div>
  );
}

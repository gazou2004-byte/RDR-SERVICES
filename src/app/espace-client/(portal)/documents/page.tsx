import Link from "next/link";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { EmptyState } from "@/components/portal/empty-state";
import { documentKinds, formatDate } from "@/lib/format";

export default async function DocumentsPage() {
  const user = await requireUser();

  const documents = await prisma.document.findMany({
    where: { booking: { userId: user.id } },
    orderBy: { createdAt: "desc" },
    include: {
      booking: { select: { id: true, reference: true, destination: true } },
    },
  });

  return (
    <div>
      <h2 className="font-display text-3xl font-light text-vine-900">
        Tous vos documents
      </h2>
      <p className="mt-4 max-w-xl text-[0.9rem] leading-relaxed text-vine-500">
        Devis, factures, programmes détaillés et bons d&apos;échange. Tout reste
        accessible après votre séjour.
      </p>

      <div className="mt-9">
        {documents.length === 0 ? (
          <EmptyState
            title="Aucun document"
            description="Vos documents de voyage apparaîtront ici au fur et à mesure de la préparation de votre séjour."
            actionLabel="Demander un devis"
            actionHref="/contact"
          />
        ) : (
          <ul className="divide-y divide-vine-900/12 border border-vine-900/12">
            {documents.map((document) => (
              <li
                key={document.id}
                className="flex flex-wrap items-center justify-between gap-5 px-6 py-6 transition-colors hover:bg-sand-100"
              >
                <div>
                  <p className="text-[0.95rem] text-vine-800">
                    {document.title}
                  </p>
                  <p className="mt-1.5 text-[0.72rem] text-vine-500">
                    {documentKinds[document.kind] ?? document.kind} ·{" "}
                    {formatDate(document.createdAt)}
                    {document.sizeLabel ? ` · ${document.sizeLabel}` : ""}
                  </p>
                  <Link
                    href={`/espace-client/sejours/${document.booking.id}`}
                    className="mt-2 inline-block text-[0.72rem] text-gold-600/80 transition-colors hover:text-tuile-600"
                  >
                    {document.booking.destination} ·{" "}
                    {document.booking.reference}
                  </Link>
                </div>
                <a
                  href={document.url}
                  className="shrink-0 border border-tuile-600/40 px-5 py-2.5 text-[0.62rem] tracking-[0.18em] text-tuile-700 uppercase transition-colors hover:border-tuile-600 hover:text-tuile-600"
                >
                  Ouvrir
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

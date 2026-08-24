import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { MessageForm } from "@/components/forms/message-form";
import { company } from "@/content/site";
import { formatDate } from "@/lib/format";
import { estLangue } from "@/content";
import { ui } from "@/content/ui";
import { notFound } from "next/navigation";

export default async function MessagesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!estLangue(lang)) notFound();
  const t = ui(lang).espace;
  const user = await requireUser();

  const [messages, bookings] = await Promise.all([
    prisma.message.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "asc" },
      include: { booking: { select: { reference: true, destination: true } } },
    }),
    prisma.booking.findMany({
      where: { userId: user.id, status: { not: "ANNULE" } },
      orderBy: { startDate: "desc" },
      select: { id: true, reference: true, destination: true },
    }),
  ]);

  // Marque comme lus les messages du conseiller à l'ouverture de la page
  await prisma.message.updateMany({
    where: { userId: user.id, fromStaff: true, readAt: null },
    data: { readAt: new Date() },
  });

  return (
    <div className="space-y-12">
      <div>
        <h2 className="font-display text-3xl font-light text-vine-900">
          {t.messages}
        </h2>
        <p className="mt-4 max-w-xl text-[0.9rem] leading-relaxed text-vine-500">
          Votre conseiller répond sous 24 heures ouvrées. Pour une urgence
          pendant votre séjour, appelez le {company.phone}.
        </p>
      </div>

      {messages.length > 0 ? (
        <ul className="space-y-5">
          {messages.map((message) => (
            <li
              key={message.id}
              className={`max-w-2xl border p-6 ${
                message.fromStaff
                  ? "border-feuille-600/30 bg-sand-100"
                  : "ml-auto border-vine-900/12 bg-feuille-300/40"
              }`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="text-[0.7rem] tracking-[0.18em] text-feuille-600 uppercase">
                  {message.fromStaff ? "Votre conseiller" : "Vous"}
                </p>
                <p className="text-[0.68rem] text-vine-500">
                  {formatDate(message.createdAt, {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
              {message.booking ? (
                <p className="mt-2 text-[0.68rem] text-vine-500">
                  À propos de : {message.booking.destination} —{" "}
                  {message.booking.reference}
                </p>
              ) : null}
              <p className="mt-4 text-[0.92rem] leading-relaxed whitespace-pre-line text-vine-800">
                {message.body}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="border border-dashed border-vine-900/20 px-6 py-12 text-center text-[0.88rem] text-vine-500">
          Aucun message pour l&apos;instant. Écrivez-nous ci-dessous, nous vous
          répondons rapidement.
        </p>
      )}

      <div className="border-t border-vine-900/12 pt-10">
        <h3 className="mb-6 font-display text-2xl font-light text-vine-900">
          {t.nouveauMessage}
        </h3>
        <MessageForm bookings={bookings} langue={lang} />
      </div>
    </div>
  );
}

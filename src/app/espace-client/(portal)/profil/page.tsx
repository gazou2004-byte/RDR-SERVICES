import { requireUser } from "@/lib/auth";
import { PasswordForm, ProfileForm } from "@/components/forms/profile-forms";
import { formatDate } from "@/lib/format";

export default async function ProfilePage() {
  const user = await requireUser();

  return (
    <div className="space-y-14">
      <section>
        <h2 className="font-display text-3xl font-light text-vine-900">
          Mes informations
        </h2>
        <p className="mt-3 text-[0.85rem] text-vine-500">
          Compte créé le {formatDate(user.createdAt)}.
        </p>
        <div className="mt-8 max-w-2xl">
          <ProfileForm user={user} />
        </div>
      </section>

      <section className="border-t border-vine-900/12 pt-12">
        <h2 className="font-display text-3xl font-light text-vine-900">
          Sécurité
        </h2>
        <p className="mt-3 max-w-xl text-[0.85rem] leading-relaxed text-vine-500">
          Choisissez un mot de passe que vous n&apos;utilisez nulle part
          ailleurs.
        </p>
        <div className="mt-8 max-w-2xl">
          <PasswordForm />
        </div>
      </section>
    </div>
  );
}

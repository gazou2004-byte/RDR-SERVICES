import Link from "next/link";

export function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
}: {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <div className="border border-dashed border-parch-200/20 px-8 py-16 text-center">
      <p className="font-display text-2xl font-light text-parch-100">{title}</p>
      <p className="mx-auto mt-4 max-w-md text-[0.9rem] leading-relaxed text-parch-400">
        {description}
      </p>
      {actionLabel && actionHref ? (
        <Link
          href={actionHref}
          className="mt-8 inline-block bg-wine-600 px-7 py-3.5 text-[0.68rem] font-medium tracking-[0.18em] text-parch-50 uppercase transition-colors hover:bg-wine-500"
        >
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}

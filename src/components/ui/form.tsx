"use client";

import type { ComponentProps, ReactNode } from "react";
import { useFormStatus } from "react-dom";

const fieldBase =
  "w-full border border-vine-900/22 bg-stone-50 px-4 py-3.5 text-[0.95rem] text-vine-900 transition-colors placeholder:text-vine-400 focus:border-wine-600 focus:outline-none";

export function Field({
  label,
  name,
  errors,
  hint,
  className = "",
  children,
}: {
  label: string;
  name: string;
  errors?: string[];
  hint?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-[0.66rem] font-medium tracking-[0.18em] text-vine-600 uppercase"
      >
        {label}
      </label>
      <div className="mt-2.5">{children}</div>
      {hint && !errors?.length ? (
        <p className="mt-2 text-[0.72rem] text-vine-500">{hint}</p>
      ) : null}
      {errors?.length ? (
        <p className="mt-2 text-[0.75rem] text-wine-600">{errors[0]}</p>
      ) : null}
    </div>
  );
}

export function Input({ className = "", ...props }: ComponentProps<"input">) {
  return <input className={`${fieldBase} ${className}`} {...props} />;
}

export function Textarea({
  className = "",
  ...props
}: ComponentProps<"textarea">) {
  return (
    <textarea className={`${fieldBase} resize-y ${className}`} {...props} />
  );
}

export function Select({ className = "", ...props }: ComponentProps<"select">) {
  return (
    <select
      className={`${fieldBase} appearance-none bg-[length:14px] bg-[right_1rem_center] bg-no-repeat pr-10 ${className}`}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8' fill='none' stroke='%237b1e3a' stroke-width='1.5'%3E%3Cpath d='M1 1l5 5 5-5'/%3E%3C/svg%3E\")",
      }}
      {...props}
    />
  );
}

/** Bouton de soumission : passe automatiquement en état « envoi » pendant l'action. */
export function SubmitButton({
  children,
  pendingLabel = "Envoi en cours…",
  className = "",
}: {
  children: ReactNode;
  pendingLabel?: string;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`inline-flex items-center justify-center gap-2 bg-wine-600 px-8 py-4 text-[0.72rem] font-medium tracking-[0.2em] text-stone-50 uppercase transition-all duration-300 hover:bg-wine-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine-600 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}

export function FormAlert({
  tone,
  children,
}: {
  tone: "error" | "success";
  children: ReactNode;
}) {
  return (
    <div
      role="status"
      className={`border px-5 py-4 text-[0.85rem] leading-relaxed ${
        tone === "error"
          ? "border-wine-600/45 bg-wine-100 text-wine-700"
          : "border-vine-500/50 bg-vine-300/25 text-vine-700"
      }`}
    >
      {children}
    </div>
  );
}

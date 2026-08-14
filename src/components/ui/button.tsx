import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.2em] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500";

const variants: Record<Variant, string> = {
  primary:
    "bg-wine-600 px-8 py-4 text-parch-50 hover:bg-wine-500 hover:shadow-[0_12px_40px_-12px] hover:shadow-wine-500",
  outline:
    "border border-parch-200/35 px-8 py-4 text-parch-100 hover:border-gold-500 hover:text-gold-400",
  ghost: "px-2 py-1 text-gold-400 hover:text-gold-300",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ComponentProps<"button"> & { variant?: Variant; children: ReactNode }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; children: ReactNode }) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

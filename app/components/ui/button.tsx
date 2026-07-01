"use client";

import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/app/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({ className = "", variant = "primary", children, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

  const styles =
    variant === "secondary"
      ? "border border-slate-700/80 bg-white/5 text-slate-200 hover:border-slate-500 hover:bg-slate-900/80"
      : "bg-blue-500 text-slate-950 shadow-[0_20px_45px_-35px_rgba(59,130,246,0.9)] hover:bg-blue-400";

  return (
    <button className={cn(`${base} ${styles}`, className)} {...props}>
      {children}
    </button>
  );
}

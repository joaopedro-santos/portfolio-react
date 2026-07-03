"use client";

import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/app/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({ className = "", variant = "primary", children, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-[0.2em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

  const styles =
    variant === "secondary"
      ? "bg-white/5 text-slate-200 hover:bg-white/10"
      : "bg-blue-500/90 text-slate-950 shadow-[0_25px_50px_-30px_rgba(96,165,250,0.7)] hover:bg-blue-400";

  return (
    <button className={cn(`${base} ${styles}`, className)} {...props}>
      {children}
    </button>
  );
}

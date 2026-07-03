"use client";

import type { Translations } from "@/app/lib/i18n";
import { ArrowRight } from "lucide-react";
import { cn } from "@/app/lib/utils";

export function CTASection({ text }: { text: Translations["cta"] }) {
  return (
    <section className="relative overflow-hidden px-8 py-32 sm:px-12 lg:px-20">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-start gap-8 rounded-[2.5rem] border border-white/10 bg-slate-950/50 p-10 backdrop-blur-xl sm:flex-row sm:items-end sm:justify-between sm:p-14">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-300/80">{text.label}</p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-50 sm:text-5xl lg:text-6xl">{text.title}</h2>
        </div>
        <a href="https://wa.me/55013991678717?text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto." target="_blank" rel="noopener noreferrer" className={cn("inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium uppercase tracking-[0.25em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950", "bg-blue-500 text-slate-950 shadow-[0_20px_45px_-35px_rgba(59,130,246,0.9)] hover:bg-blue-400")}>
          {text.button}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

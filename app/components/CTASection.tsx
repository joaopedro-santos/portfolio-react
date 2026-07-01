"use client";

import { motion } from "framer-motion";
import type { Translations } from "@/app/lib/i18n";
import { cn } from "@/app/lib/utils";

export function CTASection({ text }: { text: Translations["cta"] }) {
  return (
    <section className="relative overflow-hidden border-t border-white/10 px-8 py-28 sm:px-12 lg:px-20">
      {/* CTA background SVG */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-18"
          style={{ backgroundImage: "url('/projects/svg/bg03.svg')" }}
        />
      </div>

      <div className="mx-auto flex max-w-screen-2xl flex-col items-start gap-8 rounded-[40px] border border-white/10 bg-blue-500/5 p-10 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-300/80">{text.label}</p>
          <h2 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
            {text.title}
          </h2>
        </div>
        <a
          href="https://wa.me/55013991678717?text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
            "bg-blue-500 text-withe-950 shadow-[0_20px_45px_-35px_rgba(59,130,246,0.9)] hover:bg-blue-400"
          )}
        >
          {text.button}
        </a>
      </div>
    </section>
  );
}

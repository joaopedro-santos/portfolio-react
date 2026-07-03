"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import type { Translations } from "@/app/lib/i18n";
import { BackgroundLayers } from "./BackgroundLayers";
import { FlowRibbon } from "./FlowRibbon";
import { Button } from "./ui/button";

export function Hero({ text }: { text: Translations["hero"] }) {
  return (
    <section id="home" className="relative overflow-hidden px-8 pb-24 pt-16 sm:px-12 lg:px-20 lg:pb-28 lg:pt-20">
      <BackgroundLayers />
      <div className="mx-auto flex min-h-[78vh] max-w-screen-2xl flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.7 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-amber-100/90">
            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            {text.badge}
          </motion.div>

          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-slate-400">{text.subTitle}</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-slate-50 sm:text-6xl lg:text-7xl xl:text-8xl">
            {text.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300/85 sm:text-xl">
            {text.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button onClick={() => (window.location.hash = "#contato")}>{text.primary}</Button>
            <Link href="#projetos" className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.28em] text-slate-300 transition hover:text-slate-100">
              {text.secondary}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
          className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="max-w-xl leading-7">
            {text.insights}
          </div>
          <div className="flex flex-wrap gap-3 text-slate-300/80">
            <span className="rounded-full border border-white/10 px-3 py-1">Next.js</span>
            <span className="rounded-full border border-white/10 px-3 py-1">TypeScript</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Motion</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-16 rounded-[2rem] border border-white/10 bg-slate-950/35 p-5 backdrop-blur-xl">
          <FlowRibbon />
        </motion.div>
      </div>
    </section>
  );
}

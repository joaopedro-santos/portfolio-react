"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { heroMetrics } from "@/app/lib/data/portfolio";
import type { Translations } from "@/app/lib/i18n";
import { BackgroundLayers } from "./BackgroundLayers";
import { Button } from "./ui/button";

export function Hero({ text }: { text: Translations["hero"] }) {
  return (
    <section id="home" className="relative overflow-hidden px-8 py-28 sm:px-12 lg:px-20">
      {/* section background SVG (1920x1080) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/projects/svg/bg02.svg')" }}
        />
      </div>
      <BackgroundLayers />
      <div className="mx-auto grid max-w-screen-2xl gap-24 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-8"
        >
          <span className="inline-flex rounded-full border border-blue-400/20 bg-slate-950/70 px-4 py-2 text-xs uppercase tracking-[0.35em] text-blue-200/80">
            {text.badge}
          </span>

          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-300/70">{text.subTitle}</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.05em] text-slate-50 sm:text-5xl lg:text-5xl xl:text-6xl">
              {text.title}
            </h1>
            <p className="max-w-3xl text-base leading-9 text-slate-300/85 sm:text-lg">
              {text.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button onClick={() => (window.location.hash = "#contato")}>
              {text.primary}
            </Button>
            <Link
              href="#projetos"
              className="inline-flex rounded-full border border-slate-700/80 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900/80"
            >
              {text.secondary}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
          className="grid gap-5"
        >
          {heroMetrics.map((metric, index) => (
            <div
              key={metric.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_-60px_rgba(15,23,42,0.8)] backdrop-blur-xl"
            >
              <p className="text-4xl font-semibold tracking-tight text-slate-50">{metric.value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-300/70">{metric.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

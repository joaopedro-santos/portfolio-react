"use client";

import { motion } from "framer-motion";
import type { Translations } from "@/app/lib/i18n";
import { timelinePoints } from "@/app/lib/data/portfolio";

export function AboutSection({ text }: { text: Translations["about"] }) {
  return (
    <section id="sobre" className="relative overflow-hidden px-8 py-32 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.75 }} className="max-w-xl space-y-8">
            <p className="text-sm uppercase tracking-[0.35em] text-blue-300/80">{text.label}</p>
            <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-slate-50 sm:text-5xl lg:text-6xl">
              {text.title}
            </h2>
            <div className="space-y-6 text-lg leading-8 text-slate-300/80">
              {text.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            <div className="flex flex-col gap-4 border-y border-white/10 py-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Focus</p>
                <p className="mt-3 text-2xl font-semibold text-slate-100">Design systems, product thinking and polished front-end craft.</p>
              </div>
              <div className="text-5xl font-semibold tracking-[-0.05em] text-slate-50">05+</div>
            </div>

            <div className="space-y-6">
              {timelinePoints.map((point, index) => (
                <motion.div key={point.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: index * 0.07 }} className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-blue-300/80">{point.period}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-slate-50">{point.title}</h3>
                  </div>
                  <p className="max-w-xl text-sm leading-7 text-slate-400">{point.description[0]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import type { Translations } from "@/app/lib/i18n";
import { processSteps } from "@/app/lib/data/portfolio";

export function ProcessSection({ text }: { text: Translations["process"] }) {
  return (
    <section className="relative overflow-hidden px-8 py-32 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-300/80">{text.label}</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-50 sm:text-5xl lg:text-6xl">{text.title}</h2>
        </div>

        <div className="space-y-6">
          {processSteps.map((step, index) => (
            <motion.div key={step.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.04 }} className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-slate-200">0{index + 1}</span>
                <p className="text-lg font-semibold text-slate-100">{step.title}</p>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

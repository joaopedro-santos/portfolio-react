"use client";

import { motion } from "framer-motion";
import type { Translations } from "@/app/lib/i18n";
import { processSteps } from "@/app/lib/data/portfolio";

export function ProcessSection({ text }: { text: Translations["process"] }) {
  return (
    <section className="relative border-t border-white/10 bg-slate-950/10 px-8 py-28 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-300/80">{text.label}</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
            {text.title}
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6 shadow-[0_20px_60px_-60px_rgba(0,0,0,0.8)]"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-blue-300/80">{step.title}</p>
              <p className="mt-4 text-lg font-semibold text-slate-50">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

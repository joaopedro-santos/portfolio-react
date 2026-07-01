"use client";

import { motion } from "framer-motion";
import type { Translations } from "@/app/lib/i18n";
import { aboutFeatures, timelinePoints } from "@/app/lib/data/portfolio";

export function AboutSection({ text }: { text: Translations["about"] }) {
  return (
    <section id="sobre" className="relative overflow-hidden border-t border-white/10 px-8 py-28 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-screen-2xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
          className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]"
        >
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-blue-300/80">{text.label}</p>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
              {text.title}
            </h2>
            <div className="space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
              {text.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 rounded-[32px] border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl">
            {aboutFeatures.map((feature) => (
              <div key={feature.label} className="rounded-3xl bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{feature.label}</p>
                <p className="mt-3 text-2xl font-semibold text-slate-50">{feature.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, delay: 0.12 }}
          className="mt-16 space-y-8"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {timelinePoints.map((point, index) => (
              <div key={point.title} className="relative rounded-[28px] border border-white/10 bg-slate-950/60 p-6">
                <span className="absolute left-6 top-4 h-2 w-2 rounded-full bg-blue-400/80" />
                <p className="text-sm uppercase tracking-[0.35em] text-blue-300/80">{point.period}</p>
                <h3 className="mt-4 text-xl font-semibold text-slate-50">{point.title}</h3>
                <div className="mt-3 space-y-3 text-sm leading-7 text-slate-300">
                  {point.description.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

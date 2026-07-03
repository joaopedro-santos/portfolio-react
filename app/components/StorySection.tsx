"use client";

import { motion } from "framer-motion";

export function StorySection() {
  return (
    <section className="relative overflow-hidden px-8 py-28 sm:px-12 lg:px-20 lg:py-36">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8 }} className="space-y-8">
            <p className="text-[11px] uppercase tracking-[0.35em] text-blue-300/80">Studio note</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-slate-50 sm:text-5xl lg:text-6xl">
              I build interfaces that feel calm, intentional and unmistakably crafted.
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8, delay: 0.06 }} className="space-y-8">
            <p className="max-w-2xl text-lg leading-8 text-slate-300/85">
              The work is less about decoration and more about clarity of motion, rhythm of content and confidence in every interaction.
            </p>
            <div className="grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Principle</p>
                <p className="mt-4 text-xl font-medium text-slate-100">Reduce noise. Clarify intention.</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Approach</p>
                <p className="mt-4 text-xl font-medium text-slate-100">Product thinking, visual precision and durable systems.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

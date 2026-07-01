"use client";

import { motion } from "framer-motion";
import type { Translations } from "@/app/lib/i18n";

const experiences = [
  {
    company: "Empresa X",
    role: "Front-end Engineer",
    period: "2023 — Presente",
    description: [
      "Lidero entregas de UI e componentes para aplicações de alta performance.",
      "Estruturei sistemas de design e integrações entre equipes de produto e engenharia.",
    ],
  },
  {
    company: "Empresa Y",
    role: "UI Engineer",
    period: "2021 — 2023",
    description: [
      "Aprimorei fluxos de dados e experiência em dashboards corporativos.",
      "Implementei soluções de arquitetura que reduziram retrabalho e aumentaram velocidade de entrega.",
    ],
  },
];

export function ExperienceSection({ text }: { text: Translations["experience"] }) {
  return (
    <section id="experiencia" className="relative border-t border-white/10 bg-slate-950/20 px-8 py-28 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-300/80">{text.label}</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
            {text.title}
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-10 top-0 h-full w-px bg-gradient-to-b from-blue-400/90 to-transparent" />
          <div className="space-y-10 pl-16">
            {experiences.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="relative rounded-[28px] border border-white/10 bg-slate-950/70 p-8 shadow-[0_30px_60px_-55px_rgba(0,0,0,0.8)]"
              >
                <span className="absolute left-[-3.5rem] top-8 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/90 ring-1 ring-blue-400/20">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-300" />
                </span>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-50">{item.role}</h3>
                    <p className="text-sm text-slate-300">{item.company}</p>
                  </div>
                  <span className="text-sm uppercase tracking-[0.35em] text-blue-300/80">{item.period}</span>
                </div>
                <div className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                  {item.description.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section id="experiencia" className="relative overflow-hidden px-8 py-32 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-300/80">{text.label}</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-50 sm:text-5xl lg:text-6xl">{text.title}</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((item, index) => (
            <motion.div key={item.company} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: index * 0.06 }} className="flex flex-col gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-blue-300/80">{item.period}</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-50">{item.role}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.company}</p>
              </div>
              <div className="max-w-2xl space-y-3 text-sm leading-7 text-slate-400">
                {item.description.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

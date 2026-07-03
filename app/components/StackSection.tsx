"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import type { Translations } from "@/app/lib/i18n";
import { techSkills } from "@/app/lib/data/portfolio";

function SkillCloudItem({ skill, index }: { skill: typeof techSkills[number]; index: number }) {
  const level = skill.level ?? 8;
  const offset = index % 2 === 0 ? "sm:-translate-y-3" : "sm:translate-y-4";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.04 }}
      whileHover={{ y: -4, scale: 1.02, boxShadow: "0 18px 50px -20px rgba(96,165,250,0.24)" }}
      className={`group relative flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm transition hover:bg-white/10 ${offset}`}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10" style={{ backgroundColor: `${skill.accent}18` }}>
        <Icon icon={skill.icon} className="h-5 w-5 text-slate-100" />
      </span>
      <div>
        <p className="text-sm font-medium text-slate-100">{skill.name}</p>
        <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">{skill.category}</p>
      </div>
      <div className="ml-auto flex gap-1.5">
        {Array.from({ length: 6 }, (_, dotIndex) => (
          <span key={dotIndex} className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: dotIndex < Math.round(level / 2) ? skill.accent : "rgba(148,163,184,0.18)" }} />
        ))}
      </div>
    </motion.div>
  );
}

export function StackSection({ text }: { text: Translations["stack"] }) {
  return (
    <section id="skills" className="relative overflow-hidden px-8 py-32 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-16 max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-300/80">{text.label}</p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-50 sm:text-5xl lg:text-6xl">{text.title}</h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-300/80">A set of tools and platforms that shape how I design and build interface systems.</p>
        </div>

        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/40 p-8 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.08),transparent_28%)]" />
          <div className="relative flex flex-wrap justify-center gap-4">
            {techSkills.map((skill, index) => (
              <SkillCloudItem key={skill.id} index={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

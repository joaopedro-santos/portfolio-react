"use client";

import { motion } from "framer-motion";
import type { Translations } from "@/app/lib/i18n";
import { projects } from "@/app/lib/data/portfolio";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection({ text }: { text: Translations["projects"] }) {
  return (
    <section id="projetos" className="relative overflow-hidden px-8 py-28 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-blue-300/80">{text.label}</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
              {text.title}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            {text.description}
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 xl:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <ProjectCard project={project} actions={{ demo: text.demo, github: text.github }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

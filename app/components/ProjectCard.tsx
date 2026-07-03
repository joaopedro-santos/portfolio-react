"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/app/lib/types/portfolio";

interface ProjectCardProps {
  project: Project;
  actions: {
    demo: string;
    github: string;
  };
}

export function ProjectCard({ project, actions, reverse = false }: ProjectCardProps & { reverse?: boolean }) {
  return (
    <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7 }} className={`grid gap-8 py-12 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/40">
        <Image src={project.image} alt={project.name} width={1200} height={800} className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]" />
      </div>
      <div className="space-y-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-blue-300/80">{project.category}</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-50 sm:text-4xl">{project.name}</h3>
        </div>
        <p className="max-w-xl text-lg leading-8 text-slate-300/80">{project.description}</p>
        <div className="flex flex-wrap gap-2 text-sm text-slate-400">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full border border-white/10 px-3 py-1">{item}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-5 pt-2 text-sm font-medium text-slate-200">
          <a href={project.demoUrl} className="inline-flex items-center gap-2 transition hover:text-blue-300">
            {actions.demo}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href={project.githubUrl} className="transition hover:text-blue-300">
            {actions.github}
          </a>
        </div>
      </div>
    </motion.article>
  );
}

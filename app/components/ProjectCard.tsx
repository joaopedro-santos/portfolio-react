"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/app/lib/types/portfolio";

interface ProjectCardProps {
  project: Project;
  actions: {
    demo: string;
    github: string;
  };
}

export function ProjectCard({ project, actions }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/70 shadow-[0_20px_80px_-70px_rgba(0,0,0,0.8)] backdrop-blur-xl"
    >
      <div className="relative h-72 overflow-hidden bg-slate-900">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
        <div className="absolute left-6 bottom-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs uppercase tracking-[0.33em] text-blue-200/85">
            {project.category}
          </span>
          <span className="rounded-full bg-slate-900/55 px-3 py-1 text-xs uppercase tracking-[0.33em] text-slate-300">
            {project.year}
          </span>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-50">{project.name}</h3>
            <p className="mt-2 text-sm text-slate-400">{project.status}</p>
          </div>
          <span className="rounded-full border border-slate-700/70 px-3 py-1 text-xs uppercase tracking-[0.35em] text-slate-300">
            {project.stack[0]}
          </span>
        </div>

        <p className="text-sm leading-7 text-slate-300">{project.description}</p>

        <div className="flex flex-wrap gap-2 text-xs text-slate-400">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-700/60 bg-white/5 px-3 py-1"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-3 text-sm font-medium text-blue-300">
          <a href={project.demoUrl} className="transition hover:text-blue-100">
            {actions.demo}
          </a>
          <a href={project.githubUrl} className="transition hover:text-blue-100">
            {actions.github}
          </a>
        </div>
      </div>
    </motion.article>
  );
}

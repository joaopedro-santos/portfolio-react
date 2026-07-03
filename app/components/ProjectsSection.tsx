"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import type { Translations } from "@/app/lib/i18n";
import { projects } from "@/app/lib/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

function ProjectSlide({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <div className="flex w-full min-w-full md:min-w-screen items-center justify-center px-4 sm:px-8 md:px-20 snap-center md:snap-none box-border">
      <div className="mx-auto flex flex-col md:grid w-full max-w-[1600px] md:grid-cols-12 items-center gap-6 md:gap-20">
        
        {/* IMAGEM (Limitada no Mobile para não quebrar o layout) */}
        <div className="relative w-full max-w-[450px] md:max-w-none mx-auto order-1 md:order-2 md:col-span-7">
          <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] md:h-[500px] md:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[60px] md:blur-[120px]" />
          
          <div className="relative overflow-hidden rounded-xl md:rounded-[28px] border border-white/5 bg-[#030712] shadow-[0_20px_50px_-25px_rgba(59,130,246,0.3)] md:shadow-[0_40px_120px_-60px_rgba(59,130,246,0.35)]">
            {/* Topbar da janela fictícia */}
            <div className="flex h-8 md:h-14 items-center gap-1.5 md:gap-2 border-b border-white/5 px-4 md:px-6">
              <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-red-400/70" />
              <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-yellow-400/70" />
              <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-green-400/70" />
            </div>

            {/* Container da Imagem com proporção controlada */}
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover object-top"
                sizes="(max-w-768px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>
          </div>
        </div>

        {/* TEXTOS (Ajustados para não estourarem no mobile) */}
        <div className="w-full order-2 md:order-1 md:col-span-5 text-left px-2 md:px-0">
          <p className="mb-1.5 md:mb-4 text-[10px] md:text-[11px] uppercase tracking-[0.45em] text-blue-300">
            {project.category}
          </p>

          <p className="mb-3 md:mb-8 text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-amber-200/90">
            Project {String(index + 1).padStart(2, "0")}
          </p>

          <h3 className="text-[clamp(2rem,5vw,8rem)] font-light leading-[1.1] md:leading-[0.9] tracking-[-0.04em] text-white">
            {project.name}
          </h3>

          <p className="mt-3 md:mt-8 max-w-xl text-sm md:text-lg leading-6 md:leading-8 text-slate-300 break-words">
            {project.description}
          </p>

          <div className="mt-5 md:mt-10 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 px-3 py-1 text-[10px] md:text-xs uppercase tracking-[0.15em] text-slate-400 whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 md:mt-10 flex items-center gap-4 text-[10px] md:text-xs uppercase tracking-[0.35em] text-slate-500">
            <span>{project.year}</span>
            <span className="h-px w-8 md:w-10 bg-slate-700" />
            <span>{project.status}</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export function ProjectsSection({ text }: { text: Translations["projects"] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const triggerRef = useRef<ScrollTrigger>(null);

  useGSAP(() => {
    if (window.innerWidth < 768) return;
    if (!sectionRef.current || !trackRef.current) return;

    const totalScroll = trackRef.current.scrollWidth - window.innerWidth;

    triggerRef.current = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: () => `+=${totalScroll}`,
      pin: true,
      scrub: 1,

      snap: {
        snapTo: 1 / (projects.length - 1),
        duration: 0.4,
        ease: "power2.out",
      },

      invalidateOnRefresh: true,

      onUpdate(self) {
        gsap.set(trackRef.current, {
          x: -self.progress * totalScroll,
        });

        setActiveProject(Math.round(self.progress * (projects.length - 1)));
      },
    });

    return () => {
      triggerRef.current?.kill();
    };
  });

  const goToProject = (index: number) => {
    if (!triggerRef.current) return;

    const progress = index / (projects.length - 1);

    const scrollPosition =
      triggerRef.current.start +
      progress * (triggerRef.current.end - triggerRef.current.start);

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="projetos"
      className="relative w-full h-auto min-h-screen md:h-screen overflow-x-hidden bg-[#030712] py-24 md:py-0"
    >
      {/* Top Badge */}
      <div className="absolute inset-x-0 top-6 md:top-10 flex justify-center z-10">
        <div className="rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-1.5 text-[9px] md:text-[11px] uppercase tracking-[0.35em] text-amber-100/90">
          Case studies in motion
        </div>
      </div>

      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.08),transparent_32%)]" />
      <div className="absolute inset-x-0 top-20 md:top-40 h-[2px] bg-gradient-to-r from-transparent via-slate-500/40 to-transparent" />

      {/* Container Adaptável Mobile/Desktop */}
      <div className="flex h-full min-h-[calc(100vh-120px)] md:h-screen items-center overflow-x-auto md:overflow-x-hidden snap-x snap-mandatory scrollbar-none">
        <div ref={trackRef} className="flex items-center h-full w-full">
          {projects.map((project, index) => (
            <ProjectSlide key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Bullets Desktop */}
      <div className="hidden md:block fixed right-10 top-1/2 z-50 -translate-y-1/2">
        <div className="flex flex-col gap-5">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`
                  cursor-pointer
                  h-3
                  w-3
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    activeProject === index
                      ? "scale-150 bg-blue-500"
                      : "bg-white/20 hover:bg-white/50"
                  }
              `}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
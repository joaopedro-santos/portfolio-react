"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import type { Translations } from "@/app/lib/i18n";
import { techSkills } from "@/app/lib/data/portfolio";
import {
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiNodedotjs,
} from "react-icons/si";

const iconMap = {
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiNodedotjs,
  
} as const;

function TechIcon({ skill }: { skill: typeof techSkills[number] }) {
  const Icon = (iconMap as Record<string, any>)[skill.icon];
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg" style={{ backgroundColor: `${skill.accent}20` }}>
      {Icon ? <Icon size={22} className="text-white" /> : <span className="text-sm font-bold text-white">{skill.name[0]}</span>}
    </div>
  );
}

export function StackSection({ text }: { text: Translations["stack"] }) {
  const autoplayRef = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [autoplayRef.current]);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onMouseEnter = () => {
    setIsAutoplay(false);
    autoplayRef.current?.stop?.();
  };

  const onMouseLeave = () => {
    setIsAutoplay(true);
    autoplayRef.current?.play?.();
  };

  const slides = useMemo(() => techSkills, []);

  return (
    <section className="relative overflow-hidden bg-slate-900/60 px-6 py-20 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-screen-2xl">
        {/* decorative background for stack section */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/projects/svg/bg01.svg')" }}
          />
        </div>
        <div className="mb-8 max-w-2xl space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-300/90">{text.label}</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">{text.title}</h2>
        </div>

          <div className="relative">
          <div
            ref={emblaRef}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="embla overflow-hidden"
            aria-roledescription="carousel"
          >
            <div className="embla__container flex gap-4">
              {slides.map((skill, idx) => (
                <div className="embla__slide w-72 flex-shrink-0" key={skill.id} role="group" aria-roledescription="slide" aria-label={`${idx + 1} of ${slides.length}`}>
                  <motion.article
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: idx * 0.03 }}
                    className="rounded-2xl border border-white/8 bg-slate-950/80 p-5 shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-3xl">
                        <TechIcon skill={skill} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-50">{skill.name}</h3>
                        <p className="text-sm text-slate-400">{skill.category}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{skill.description}</p>
                  </motion.article>
                </div>
              ))}
            </div>
          </div>

          <button aria-label="Previous" onClick={scrollPrev} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-800/50 p-2 text-slate-100/90 hover:bg-slate-800/70">‹</button>
          <button aria-label="Next" onClick={scrollNext} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-800/50 p-2 text-slate-100/90 hover:bg-slate-800/70">›</button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { AboutSection } from "@/app/components/AboutSection";
import { BackgroundLayers } from "@/app/components/BackgroundLayers";
import { CTASection } from "@/app/components/CTASection";
import { ExperienceSection } from "@/app/components/ExperienceSection";
import { Footer } from "@/app/components/Footer";
import { Hero } from "@/app/components/Hero";
import { Nav } from "@/app/components/Nav";
import { ProcessSection } from "@/app/components/ProcessSection";
import { ProjectsSection } from "@/app/components/ProjectsSection";
import { StackSection } from "@/app/components/StackSection";
import { localeText, type Locale } from "@/app/lib/i18n";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("pt");
  const text = localeText(locale);

  return (
    <div className="relative overflow-hidden">
      <BackgroundLayers />
      <Nav locale={locale} onLocaleChange={setLocale} />
      <main className="relative isolate">
        <Hero text={text.hero} />
        <AboutSection text={text.about} />
        <StackSection text={text.stack} />
        <ExperienceSection text={text.experience} />
        <ProjectsSection text={text.projects} />
        <ProcessSection text={text.process} />
        <CTASection text={text.cta} />
        <Footer text={text.footer} />
      </main>
    </div>
  );
}

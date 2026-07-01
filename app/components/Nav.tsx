"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Locale } from "@/app/lib/i18n";
import { localeText } from "@/app/lib/i18n";

export function Nav({ locale, onLocaleChange }: { locale: Locale; onLocaleChange: (locale: Locale) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const text = localeText(locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: text.nav.home, href: "#home" },
    { label: text.nav.about, href: "#sobre" },
    { label: text.nav.projects, href: "#projetos" },
    { label: text.nav.experience, href: "#experiencia" },
    { label: text.nav.contact, href: "#contato" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-slate-950/80 border-white/10" : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4 px-8 py-4 sm:px-12 lg:px-20">
        <Link href="#home" className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/90">
          Jotta Code
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-blue-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} onChange={onLocaleChange} />
          <Link
            href="#contato"
            className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-100 transition hover:border-blue-400/50 hover:bg-blue-500/15"
          >
            {text.nav.talk}
          </Link>
        </div>
      </div>
    </header>
  );
}

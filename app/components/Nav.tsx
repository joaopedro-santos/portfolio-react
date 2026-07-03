"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Locale } from "@/app/lib/i18n";
import { localeText } from "@/app/lib/i18n";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/joaopedro", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jo%C3%A3o-pedro-santos-622104272/", icon: Linkedin },
  { label: "Email", href: "mailto:santos_joaopedro@hotmail.com", icon: Mail },
];

export function Nav({ locale, onLocaleChange }: { locale: Locale; onLocaleChange: (locale: Locale) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const text = localeText(locale);

  const navItems = useMemo(
    () => [
      { label: text.nav.home, href: "#home" },
      { label: text.nav.about, href: "#sobre" },
      { label: text.nav.projects, href: "#projetos" },
      { label: text.nav.experience, href: "#experiencia" },
      { label: text.nav.contact, href: "#contato" },
    ],
    [text.nav],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/65 backdrop-blur-2xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4 px-8 py-4 sm:px-12 lg:px-20">
        <Link href="#home" className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/90">
          Jotta Code
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-400 transition hover:text-slate-100">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} onChange={onLocaleChange} />
          <Link href="#contato" className="hidden rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/10 sm:inline-flex">
            {text.nav.talk}
          </Link>
          <button
            type="button"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10 lg:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
          >
            <div className="mx-auto flex h-full max-w-screen-lg flex-col justify-center px-8 py-12 sm:px-12">
              <div className="mb-14 flex items-center justify-between">
                <Link href="#home" onClick={() => setIsOpen(false)} className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/90">
                  Jotta Code
                </Link>
                <button type="button" aria-label="Fechar menu" onClick={() => setIsOpen(false)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100">
                  <X size={20} />
                </button>
              </div>

              <nav className="space-y-7 text-center">
                {navItems.map((item, index) => (
                  <motion.div key={item.href} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                    <Link href={item.href} onClick={() => setIsOpen(false)} className="inline-block text-3xl font-semibold tracking-[-0.03em] text-slate-100 transition hover:text-blue-300">
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-center text-sm text-slate-400">
                {socialLinks.map((item) => (
                  <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 text-slate-200 transition hover:text-blue-300" onClick={() => setIsOpen(false)}>
                    <item.icon size={18} />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

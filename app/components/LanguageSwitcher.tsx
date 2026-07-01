"use client";

import { useMemo } from "react";
import type { Locale } from "@/app/lib/i18n";

interface LanguageSwitcherProps {
  locale: Locale;
  onChange: (locale: Locale) => void;
}

export function LanguageSwitcher({ locale, onChange }: LanguageSwitcherProps) {
  const buttons = useMemo(
    () => [
      { label: "🇧🇷", value: "pt" as Locale, title: "Português" },
      { label: "🇺🇸", value: "en" as Locale, title: "English" },
    ],
    [],
  );

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 p-0.5">
      {buttons.map((item) => (
        <button
          key={item.value}
          type="button"
          aria-label={item.title}
          onClick={() => onChange(item.value)}
          className={`rounded-full px-2 py-1 text-sm transition ${
            locale === item.value
              ? "bg-blue-500 text-slate-950 shadow-[0_10px_30px_-28px_rgba(59,130,246,0.9)]"
              : "text-slate-300 hover:bg-white/5 hover:text-slate-50"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

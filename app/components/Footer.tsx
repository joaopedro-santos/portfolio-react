import type { Translations } from "@/app/lib/i18n";

export function Footer({ text }: { text: Translations["footer"] }) {
  return (
    <footer id="contato" className="border-t border-white/10 px-8 py-20 sm:px-12 lg:px-20">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-blue-300/80">{text.label || "Vamos conversar"}</p>
          <p className="mt-4 max-w-lg text-base leading-8 text-slate-300">{text.info}</p>
        </div>
        <div className="space-y-2 text-sm text-slate-400">
          <p>
            <span className="font-semibold text-slate-100">{text.email}</span> santos_joaopedro@hotmail.com
          </p>
          <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-santos-622104272/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
            <span className="font-semibold text-slate-100">{text.linkedIn}</span> linkedin.com/joaopedro
          </a>
          <p className="text-slate-500">{text.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

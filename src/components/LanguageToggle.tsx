"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full border border-border/60 bg-card/40 p-1 text-[11px] font-medium uppercase tracking-[0.2em] text-ash">
      <button
        type="button"
        onClick={() => setLanguage("es")}
        className={`rounded-full px-3 py-1 transition ${
          language === "es"
            ? "bg-bone text-obsidian"
            : "hover:text-bone"
        }`}
        aria-pressed={language === "es"}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`rounded-full px-3 py-1 transition ${
          language === "en"
            ? "bg-bone text-obsidian"
            : "hover:text-bone"
        }`}
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Language } from "@/lib/copy";

export default function LanguageToggle({
  currentLang,
}: {
  currentLang: Language;
}) {
  const pathname = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="inline-flex items-center rounded-full border border-border/60 bg-card/40 p-1 text-[11px] font-medium uppercase tracking-[0.2em] text-ash">
      <Link
        href={redirectedPathName("es")}
        className={`rounded-full px-3 py-1 transition ${
          currentLang === "es" ? "bg-bone text-obsidian" : "hover:text-bone"
        }`}
        aria-pressed={currentLang === "es"}
      >
        ES
      </Link>
      <Link
        href={redirectedPathName("en")}
        className={`rounded-full px-3 py-1 transition ${
          currentLang === "en" ? "bg-bone text-obsidian" : "hover:text-bone"
        }`}
        aria-pressed={currentLang === "en"}
      >
        EN
      </Link>
    </div>
  );
}

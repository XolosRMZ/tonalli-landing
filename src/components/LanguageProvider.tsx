"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";

import type { Language } from "@/lib/copy";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

const STORAGE_KEY = "tonalli-language";

function normalizeLanguage(value: string | null): Language | null {
  if (value === "es" || value === "en") {
    return value;
  }
  return null;
}

export function LanguageProvider({
  children,
  defaultLanguage = "es",
}: {
  children: ReactNode;
  defaultLanguage?: Language;
}) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return defaultLanguage;
    }

    const params = new URLSearchParams(window.location.search);
    const fromParam = normalizeLanguage(params.get("lang"));
    const fromStorage = normalizeLanguage(localStorage.getItem(STORAGE_KEY));
    return fromParam ?? fromStorage ?? defaultLanguage;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { en } from "../locales/en";
import { id } from "../locales/id";

type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
  isMounted: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const dictionaries = { en, id };

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language | null;
    if (savedLang === "en" || savedLang === "id") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(savedLang);
    } else {
      setLanguageState("en");
    }
    setIsMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  // Translation helper supporting dot-notation paths (e.g. "hero.title")
  const t = (path: string): string => {
    const dict = dictionaries[language];
    const keys = path.split(".");
    let current: unknown = dict;

    for (const key of keys) {
      if (current && typeof current === "object" && key in (current as Record<string, unknown>)) {
        current = (current as Record<string, unknown>)[key];
      } else {
        return path; // Fallback to path name if key not found
      }
    }

    return typeof current === "string" ? current : path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isMounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

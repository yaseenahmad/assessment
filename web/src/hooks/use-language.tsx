import { useCallback, useEffect, useState } from "react";
import i18n from "@/i18n/i18n";

type Language = "en" | "es"

const setCookie = (name: string, value: string, days: number = 365): void => {
  if (typeof document === "undefined") return;
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};

export function initializeLanguage(): void {
  const savedLanguage =
    (typeof localStorage !== "undefined" &&
      (localStorage.getItem("language") as Language)) ||
    "en";

  i18n.changeLanguage(savedLanguage);
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("en");

  const updateLanguage = useCallback((lang: Language) => {
    setLanguage(lang);

    if (typeof localStorage !== "undefined") {
      localStorage.setItem("language", lang);
    }
    setCookie("language", lang);
    i18n.changeLanguage(lang);
  }, []);

  useEffect(() => {
    const savedLanguage =
      (typeof localStorage !== "undefined" &&
        (localStorage.getItem("language") as Language | null)) ||
      "en";

    updateLanguage(savedLanguage);
  }, [updateLanguage]);

  return { language, updateLanguage };
}

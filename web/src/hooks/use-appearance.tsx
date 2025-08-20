import { useCallback, useEffect, useState } from "react";
import i18n from "@/i18n/i18n";

type Appearance = "light" | "dark" | "system";
type Language = "en" | "es";

interface AppearanceState {
  theme: Appearance;
  language: Language;
}

const prefersDark = (): boolean => {
  if (typeof window === "undefined") {
    return false;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const setCookie = (name: string, value: string, days: number = 365): void => {
  if (typeof document === "undefined") {
    return;
  }
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};

const applyTheme = (appearance: Appearance): void => {
  const isDark =
    appearance === "dark" ||
    (appearance === "system" && prefersDark());

  if (typeof document !== "undefined") {
    document.documentElement.classList.toggle("dark", isDark);
  }
};

const mediaQuery = (): MediaQueryList | null => {
  if (typeof window === "undefined") {
    return null;
  }
  return window.matchMedia("(prefers-color-scheme: dark)");
};

const handleSystemThemeChange = (): void => {
  const currentAppearance =
    (typeof localStorage !== "undefined" &&
      localStorage.getItem("theme")) ||
    "system";
  applyTheme(currentAppearance as Appearance);
};

export function initializeAppearance(): void {
  const savedTheme =
    (typeof localStorage !== "undefined" &&
      (localStorage.getItem("theme") as Appearance)) ||
    "system";

  const savedLanguage =
    (typeof localStorage !== "undefined" &&
      (localStorage.getItem("language") as Language)) ||
    "en";

  applyTheme(savedTheme);
  i18n.changeLanguage(savedLanguage);

  mediaQuery()?.addEventListener("change", handleSystemThemeChange);
}

export function useAppearance() {
  const [appearance, setAppearance] = useState<AppearanceState>({
    theme: "system",
    language: "en"
  });

  const updateTheme = useCallback((theme: Appearance) => {
    setAppearance(prev => ({ ...prev, theme }));

    if (typeof localStorage !== "undefined") {
      localStorage.setItem("theme", theme);
    }

    setCookie("theme", theme);
    applyTheme(theme);
  }, []);

  const updateLanguage = useCallback((language: Language) => {
    setAppearance(prev => ({ ...prev, language }));

    if (typeof localStorage !== "undefined") {
      localStorage.setItem("language", language);
    }
    
    setCookie("language", language);
    i18n.changeLanguage(language);
  }, []);

  useEffect(() => {
    const savedTheme =
      (typeof localStorage !== "undefined" &&
        (localStorage.getItem("theme") as Appearance | null)) ||
      "system";

    const savedLanguage =
      (typeof localStorage !== "undefined" &&
        (localStorage.getItem("language") as Language | null)) ||
      "en";

    setAppearance({ theme: savedTheme, language: savedLanguage });
    applyTheme(savedTheme);
    i18n.changeLanguage(savedLanguage);

    return () =>
      mediaQuery()?.removeEventListener("change", handleSystemThemeChange);
  }, []);

  return { 
    appearance, 
    updateTheme, 
    updateLanguage,
    theme: appearance.theme,
    language: appearance.language
  };
}

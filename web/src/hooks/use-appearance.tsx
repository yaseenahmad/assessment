import { useCallback, useEffect, useState } from "react";

type Appearance = "light" | "dark" | "system";

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
      localStorage.getItem("appearance")) ||
    "system";
  applyTheme(currentAppearance as Appearance);
};

export function initializeTheme(): void {
  const savedAppearance =
    (typeof localStorage !== "undefined" &&
      (localStorage.getItem("appearance") as Appearance)) ||
    "system";

  applyTheme(savedAppearance);

  mediaQuery()?.addEventListener("change", handleSystemThemeChange);
}

export function useAppearance() {
  const [appearance, setAppearance] = useState<Appearance>("system");

  const updateAppearance = useCallback((mode: Appearance) => {
    setAppearance(mode);

    if (typeof localStorage !== "undefined") {
      localStorage.setItem("appearance", mode);
    }

    setCookie("appearance", mode);
    applyTheme(mode);
  }, []);

  useEffect(() => {
    const savedAppearance =
      (typeof localStorage !== "undefined" &&
        (localStorage.getItem("appearance") as Appearance | null)) ||
      "system";

    updateAppearance(savedAppearance);

    return () =>
      mediaQuery()?.removeEventListener("change", handleSystemThemeChange);
  }, [updateAppearance]);

  return { appearance, updateAppearance };
}

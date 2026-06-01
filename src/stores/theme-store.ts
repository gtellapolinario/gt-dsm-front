// src/stores/theme-store.ts
// Zustand store for theme + accent + density.
// Syncs to [data-theme] / [data-accent] on <html> and persists to localStorage.

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeMode = "light" | "dark";
export type AccentKey = "azul-aco" | "verde-petroleo" | "vermelho-tijolo";
export type Density   = "compact" | "comfortable";

export const ACCENT_META: Record<AccentKey, { hex: string; name: string }> = {
  "azul-aco":         { hex: "#3D5A80", name: "Azul-aço" },
  "verde-petroleo":   { hex: "#3A6B5A", name: "Verde-petróleo" },
  "vermelho-tijolo":  { hex: "#8A3A2F", name: "Vermelho-tijolo" },
};

type ThemeState = {
  mode: ThemeMode;
  accent: AccentKey;
  density: Density;
  setMode: (m: ThemeMode) => void;
  setAccent: (a: AccentKey) => void;
  setDensity: (d: Density) => void;
  toggleMode: () => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: "light",
      accent: "azul-aco",
      density: "comfortable",
      setMode: (mode) => set({ mode }),
      setAccent: (accent) => set({ accent }),
      setDensity: (density) => set({ density }),
      toggleMode: () =>
        set((s) => ({ mode: s.mode === "light" ? "dark" : "light" })),
    }),
    { name: "gtmedic-theme" }
  )
);

/** Mount once at app root; keeps html data-attributes in sync with the store. */
export function useThemeSync() {
  const { mode, accent } = useThemeStore();
  if (typeof document !== "undefined") {
    const html = document.documentElement;
    if (html.dataset.theme !== mode)    html.dataset.theme = mode;
    if (html.dataset.accent !== accent) html.dataset.accent = accent;
  }
}

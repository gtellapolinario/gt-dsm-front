// src/stores/command-store.ts
// Tiny zustand store for the global ⌘K palette. Hook a global key listener
// to `toggle` at the app root (see src/App.tsx).

import { create } from "zustand";

type CommandState = {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
};

export const useCommandStore = create<CommandState>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
  toggle: () => set((s) => ({ open: !s.open })),
}));

// src/components/workspace/WorkspaceShell.tsx
// Outer chrome: Header (sticky) + Sidebar + scrollable main area.
// Pass children for screen-specific content. Receive overlay slot for
// modal-like surfaces (command palette, dialogs).

import { type ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import type { ChapterKey } from "@/lib/dsm";
import { SidebarProvider, SidebarInset } from "@ui/sidebar";

interface WorkspaceShellProps {
  collapsed?: boolean;
  activeNav?: string | null;
  activeChapter?: ChapterKey | null;
  activeDisorder?: string | null;
  disordersByChapter?: Partial<Record<ChapterKey, string[]>>;
  children: ReactNode;
  /** Modal overlay (palette, dialog) rendered above the main area. */
  overlay?: ReactNode;
}

export function WorkspaceShell({ children, overlay }: WorkspaceShellProps) {
  return (
    <SidebarProvider>
      <div className="w-full h-dvh bg-bg text-text font-sans flex overflow-hidden">
        <Sidebar />
        <SidebarInset className="flex-1 flex flex-col min-w-0 bg-bg">
          <Header />
          <main className="flex-1 overflow-auto relative">{children}</main>
        </SidebarInset>
        {overlay}
      </div>
    </SidebarProvider>
  );
}

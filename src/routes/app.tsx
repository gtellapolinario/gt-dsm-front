// src/routes/app.tsx
// Workspace layout: anything under /app sits inside the WorkspaceShell.
// Per-route can override `activeNav` etc. via useMatches() or local state.

import { Outlet, createFileRoute } from "@tanstack/react-router";
import { WorkspaceShell } from "@/components/workspace/WorkspaceShell";
import { useCommandStore } from "@/stores/command-store";

function AppLayout() {
  const openPalette = useCommandStore((s) => s.setOpen);
  return (
    <WorkspaceShell
      activeNav="home"
      onCommandOpen={() => openPalette(true)}
    >
      <Outlet />
    </WorkspaceShell>
  );
}

export const Route = createFileRoute("/app")({
  component: AppLayout,
});

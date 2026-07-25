// src/routes/app.tsx
// Workspace layout: anything under /app sits inside the WorkspaceShell.
// Per-route can override `activeNav` etc. via useMatches() or local state.

import { Outlet, createFileRoute } from "@tanstack/react-router";
import { WorkspaceShell } from "@/components/workspace/WorkspaceShell";

function AppLayout() {
  return (
    <WorkspaceShell
      activeNav="home"
    >
      <Outlet />
    </WorkspaceShell>
  );
}

export const Route = createFileRoute("/app")({
  component: AppLayout,
});

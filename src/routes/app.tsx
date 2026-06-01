// src/routes/app.tsx
// Workspace layout: anything under /app sits inside the WorkspaceShell.
// Per-route can override `activeNav` etc. via useMatches() or local state.

import { Outlet, createFileRoute } from "@tanstack/react-router";
import { WorkspaceShell } from "@/components/workspace/WorkspaceShell";
import { useCommandStore } from "@/stores/command-store";
// import { authQueryKeys } from "@/features/auth/auth-query";
// import type { AuthSessionResponse } from "@/api/auth";

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
  /* 
  // [AUTH] Descomente o bloco abaixo quando o backend estiver pronto para bloquear rotas nao logadas.
  beforeLoad: async ({ context, location }) => {
    try {
      const session = await context.queryClient.ensureQueryData<AuthSessionResponse>({
        queryKey: authQueryKeys.me(),
        queryFn: context.auth.getCurrentUser,
      });

      if (!session?.user) {
        throw redirect({
          to: "/login",
          search: { redirect: location.href },
        });
      }
    } catch {
      throw redirect({
        to: "/login",
        search: { redirect: location.href },
      });
    }
  },
  */
  component: AppLayout,
});

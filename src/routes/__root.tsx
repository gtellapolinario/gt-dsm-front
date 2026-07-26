// src/routes/__root.tsx
// Root layout. Hosts the QueryClientProvider, the theme sync hook, the
// global ⌘K palette + hotkey, and the <Outlet /> for child routes.

import { useEffect } from "react";
import { Outlet, createRootRouteWithContext, useRouterState } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export interface RouterContext {
  queryClient: QueryClient;
}

import { useThemeSync } from "@/stores/theme-store";
import { useCommandStore } from "@/stores/command-store";
import { CommandPalette } from "@/components/command-palette/CommandPalette";
import { GTMedicsLoadingModal } from "@/components/workspace/GTMedicsLoadingModal";
import { Toaster } from "@/components/ui/sonner";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 30_000, refetchOnWindowFocus: false },
  },
});

function RootLayout() {
  useThemeSync();
  const { open, setOpen, toggle } = useCommandStore();
  const isLoading = useRouterState({ select: (s) => s.isLoading });


  // Global ⌘K / Ctrl+K hotkey
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        toggle();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggle]);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />

      <GTMedicsLoadingModal open={isLoading} message="Carregando..." />
      <CommandPalette open={open} onOpenChange={setOpen} />
      <Toaster richColors position="bottom-right" />
    </QueryClientProvider>
  );
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
});

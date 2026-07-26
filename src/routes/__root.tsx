// src/routes/__root.tsx
// Root layout. Hosts the QueryClientProvider, the theme sync hook, the
// global ⌘K palette + hotkey, and the <Outlet /> for child routes.

import { Outlet, createRootRouteWithContext, useRouterState } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export interface RouterContext {
  queryClient: QueryClient;
}

import { GTMedicsLoadingModal } from "@/components/workspace/GTMedicsLoadingModal";
import { Toaster } from "@/components/ui/sonner";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 30_000, refetchOnWindowFocus: false },
  },
});

function RootLayout() {
  const isLoading = useRouterState({ select: (s) => s.isLoading });

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />

      <GTMedicsLoadingModal open={isLoading} message="Carregando..." />
      <Toaster richColors position="bottom-right" />
    </QueryClientProvider>
  );
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
});

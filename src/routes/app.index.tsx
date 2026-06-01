// src/routes/app.index.tsx — workspace dashboard (Home)

import { createFileRoute } from "@tanstack/react-router";
import { Dashboard } from "@/components/workspace/Dashboard";

export const Route = createFileRoute("/app/")({
  component: Dashboard,
});

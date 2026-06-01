import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/Dashboard')({
  component: () => <div>Dashboard route (Stub)</div>,
});

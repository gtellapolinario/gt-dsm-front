import { createFileRoute } from '@tanstack/react-router';
import { MapaDiagnostico } from '@/features/mapa-diagnostico/MapaDiagnostico';

export const Route = createFileRoute('/app/mapa')({
  component: MapaDiagnostico,
});

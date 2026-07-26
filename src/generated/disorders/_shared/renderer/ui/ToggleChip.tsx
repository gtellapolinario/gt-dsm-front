import { Toggle } from "@/components/ui/toggle";
import type { ReactNode } from "react";

export function ToggleChip({
  active,
  onClick,
  children,
}: {
  readonly active: boolean;
  readonly onClick: () => void;
  readonly children: ReactNode;
}) {
  return (
    <Toggle
      variant="outline"
      size="sm"
      pressed={active}
      onPressedChange={() => onClick()}
      className="rounded-full font-semibold aria-pressed:bg-accent aria-pressed:border-primary aria-pressed:text-primary"
    >
      {children}
    </Toggle>
  );
}

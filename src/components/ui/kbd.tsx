// src/components/ui/Kbd.tsx
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface KbdProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function Kbd({ className, children, ...rest }: KbdProps) {
  return (
    <kbd
      {...rest}
      className={cn(
        "inline-flex items-center justify-center min-w-[18px] h-[18px] px-1",
        "text-[11px] font-medium leading-none text-text-3",
        "bg-surface-2 border border-border rounded-[3px] font-sans",
        className
      )}
    >
      {children}
    </kbd>
  );
}

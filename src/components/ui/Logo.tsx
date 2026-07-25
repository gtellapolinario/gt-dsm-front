// src/components/ui/Logo.tsx
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: number;
  className?: string;
  /** When true, render only the mark (no wordmark). */
  markOnly?: boolean;
}

export function Logo({ size = 22, className, markOnly = false }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-text", className)}>
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
        <rect x="1" y="1" width="30" height="30" rx="6"
          stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 11.5h7v9h-5v-2.5h2.5v-4H8z"
          stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <path d="M17 11.5h7M20.5 11.5v9"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      {!markOnly && (
        <span className="font-serif text-[17px] font-medium tracking-[-0.3px] leading-none">
          GTmedic<span className="opacity-50">·</span>DSM
        </span>
      )}
    </span>
  );
}

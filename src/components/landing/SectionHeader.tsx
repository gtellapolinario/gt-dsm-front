// src/components/landing/SectionHeader.tsx
// Kicker + serif title + lede — shared by every landing section below the hero.

import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  kicker: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  className?: string;
}

export function SectionHeader({ kicker, title, lede, className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-[760px] mb-16", className)}>
      <div className="text-xs tracking-[1.5px] uppercase text-accent mb-3 font-semibold">
        {kicker}
      </div>
      <h2 className="font-serif text-5xl font-normal tracking-[-0.8px] leading-[1.08] text-text m-0 text-balance">
        {title}
      </h2>
      {lede && (
        <p className="text-lg text-text-2 mt-4 leading-[1.55] max-w-[640px] text-pretty">
          {lede}
        </p>
      )}
    </div>
  );
}

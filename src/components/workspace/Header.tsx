import { Bell, ChevronDown } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/cn";

interface HeaderProps {
  onSearchClick?: () => void;
  className?: string;
}

export function Header({ onSearchClick, className }: HeaderProps) {
  return (
    <header
      className={cn(
        "flex items-center gap-4 h-[52px] px-4 shrink-0",
        "border-b border-border bg-surface",
        className
      )}
    >
      <SidebarTrigger className="-ml-2" />
      <Logo />
      <div className="w-px h-5 bg-border mx-1" aria-hidden />


      <div className="flex-1" />

      <button
        type="button"
        aria-label="Notificações"
        className="w-8 h-8 rounded-[var(--radius-card)] inline-flex items-center justify-center text-text-2 hover:bg-surface-2 relative"
      >
        <Bell size={16} />
        <span className="absolute top-1.5 right-2 w-1.5 h-1.5 rounded-full bg-accent" aria-hidden />
      </button>

      <button
        type="button"
        className="flex items-center gap-2 pl-2 border-l border-border cursor-pointer"
        aria-label="Menu do usuário"
      >
        <span
          className="w-7 h-7 rounded-full border border-border inline-flex items-center justify-center text-accent-fg text-xs font-semibold"
          style={{
            backgroundImage:
              "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-tint) 100%)",
          }}
        >
          GA
        </span>
        <ChevronDown size={12} className="text-text-3" />
      </button>
    </header>
  );
}

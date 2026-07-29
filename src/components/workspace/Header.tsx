import { Logo } from "@ui/Logo";
import { SidebarTrigger } from "@ui/sidebar";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        "flex items-center gap-4 h-[52px] px-4 shrink-0 border-b border-border bg-surface",
        className,
      )}
    >
      <SidebarTrigger className="-ml-2" />
      <Logo />
    </header>
  );
}

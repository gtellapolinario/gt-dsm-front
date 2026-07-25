// src/components/command-palette/CommandPalette.tsx
// ⌘K palette. Use zustand for open/close state OR lift it; here it accepts
// open + onOpenChange. Hook to a global hotkey at the app root.
//
// Real-world wiring sketch:
//   const { data } = useQuery({ queryKey: ['palette', q], queryFn: () => searchAll(q) })
// where searchAll() fans out across PocketBase collections.

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Search, ClipboardList, Users, Plus, MessageSquare,
} from "lucide-react";
import { Kbd } from "@/components/ui/kbd";
import { cn } from "@/lib/utils";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on open; clear query on close.
  useEffect(() => {
    if (open) inputRef.current?.focus();
    else setQ("");
  }, [open]);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      onClick={() => onOpenChange(false)}
      className="fixed inset-0 z-50 flex justify-center pt-30 bg-text/25 dark:bg-black/45"
      style={{ paddingTop: 120 }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[640px] bg-surface border border-border rounded-lg overflow-hidden flex flex-col shadow-s3"
      >
        <div className="flex items-center gap-2.5 px-4.5 py-3.5 border-b border-border">
          <Search size={16} className="text-text-3 shrink-0" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar transtorno, paciente, ação…"
            className="flex-1 bg-transparent border-none outline-none text-[15px] text-text placeholder:text-text-4"
          />
          <Kbd>ESC</Kbd>
        </div>

        <div className="px-1.5 py-2 max-h-[460px] overflow-y-auto">
          <PaletteGroup label="Transtornos · 4 resultados">
            <PaletteRow icon={<ClipboardList size={14} />} primary
              left="TDAH" meta="F90 · Polythetic · adultos ≥ 17a"
              right="01 — Neurodesenvolvimento" />
            <PaletteRow icon={<ClipboardList size={14} />}
              left="Transtorno de Aprendizagem Específico" meta="F81 · Tripartite"
              right="01 — Neurodesenvolvimento" />
            <PaletteRow icon={<ClipboardList size={14} />}
              left="Transtorno Depressivo Maior" meta="F32 · Polythetic"
              right="04 — Depressivos" />
            <PaletteRow icon={<ClipboardList size={14} />}
              left="Transtorno Neurocognitivo Maior" meta="F03 · Categórico por etiologia"
              right="17 — Neurocognitivos" />
          </PaletteGroup>

          <PaletteGroup label="Pacientes · 2 resultados">
            <PaletteRow icon={<Users size={14} />}
              left="Marina Schmidt" meta="32a F · em avaliação TDAH" right="paciente" />
            <PaletteRow icon={<Users size={14} />}
              left="Roberto Amaral" meta="47a M · TDM finalizado" right="paciente" />
          </PaletteGroup>

          <PaletteGroup label="Ações">
            <PaletteRow icon={<Plus size={14} />} left="Nova avaliação"
              right={<><Kbd>⌘</Kbd> <Kbd>N</Kbd></>} />
            <PaletteRow icon={<Users size={14} />} left="Novo paciente"
              right={<><Kbd>⌘</Kbd> <Kbd>P</Kbd></>} />
            <PaletteRow icon={<MessageSquare size={14} />} left="Perguntar ao Assistente Clínico…" />
          </PaletteGroup>
        </div>

        <div className="flex items-center gap-4 px-4.5 py-2.5 border-t border-border bg-surface-2 text-[11px] text-text-3">
          <span className="flex items-center gap-1.5"><Kbd>↑</Kbd><Kbd>↓</Kbd> navegar</span>
          <span className="flex items-center gap-1.5"><Kbd>↵</Kbd> abrir</span>
          <span className="flex items-center gap-1.5"><Kbd>⌘</Kbd><Kbd>↵</Kbd> nova avaliação</span>
        </div>
      </div>
    </div>
  );
}

// ─── helpers ─────────────────────────────────────────────────
function PaletteGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mb-1">
      <div className="text-[10px] font-bold tracking-[1.2px] text-text-4 uppercase px-3.5 pt-2.5 pb-1.5">
        {label}
      </div>
      {children}
    </div>
  );
}

interface PaletteRowProps {
  icon: ReactNode;
  left: string;
  meta?: string;
  right?: ReactNode;
  primary?: boolean;
  onSelect?: () => void;
}

function PaletteRow({ icon, left, meta, right, primary, onSelect }: PaletteRowProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "flex items-center gap-3 px-3.5 py-2.5 rounded-[var(--radius-card)] w-full text-left",
        "cursor-pointer mx-1.5 transition-colors",
        primary ? "bg-accent-tint text-accent" : "text-text hover:bg-surface-2"
      )}
    >
      <span className={primary ? "text-accent" : "text-text-3"}>{icon}</span>
      <div className="flex-1 min-w-0">
        <div className={cn("text-sm overflow-hidden text-ellipsis whitespace-nowrap",
          primary ? "font-semibold" : "font-medium")}>{left}</div>
        {meta && (
          <div className={cn("text-[11px] mt-0.5 overflow-hidden text-ellipsis whitespace-nowrap",
            primary ? "text-accent/80" : "text-text-3")}>{meta}</div>
        )}
      </div>
      {right && (
        <div className={cn("flex items-center gap-1.5 text-[11px] shrink-0",
          primary ? "text-accent/80" : "text-text-3")}>{right}</div>
      )}
    </button>
  );
}

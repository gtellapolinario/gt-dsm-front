// src/components/workspace/Dashboard.tsx
// Dashboard home screen — uses TanStack Query hooks for the four data blocks.
// Hooks are placeholders here; wire them to your PocketBase service layer.

import { type ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowUpRight, Edit3, Sparkles, Check, Plus, Download,
  Calendar, ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { cn } from "@/lib/cn";

// ─── Top-level ──────────────────────────────────────────────
export function Dashboard() {
  return (
    <div className="px-10 py-8 max-w-[1280px]">
      <DashboardGreeting />
      <ContinueAssessmentBlock />
      <div className="grid grid-cols-[1.4fr_1fr] gap-6 mt-7">
        <ActivePatientsBlock />
        <QuickShortcutsBlock />
      </div>
      <RecentActivityBlock />
    </div>
  );
}

// ─── Greeting ───────────────────────────────────────────────
function DashboardGreeting() {
  // TODO: replace with current-user context
  const clinicianFirstName = "Guilherme";
  const hour = new Date().getHours();
  const greet = hour < 12 ? "Bom dia" : hour < 18 ? "Boa tarde" : "Boa noite";

  return (
    <header className="mb-8">
      <div className="text-xs text-text-3 mb-1.5 tracking-wide">
        Quinta-feira, 22 de maio · semana clínica
      </div>
      <h1 className="font-serif text-[38px] font-normal tracking-[-0.8px] text-text leading-[1.1] m-0 mb-2">
        {greet}, <em className="italic">Dr. {clinicianFirstName}</em>.
      </h1>
      <p className="text-[15px] text-text-2 m-0">
        Você tem <strong className="text-text font-semibold">3 avaliações em andamento</strong>,
        2 consultas agendadas hoje, e{" "}
        <strong className="text-text font-semibold">1 relatório aguardando revisão</strong>.
      </p>
    </header>
  );
}

// ─── Section header ─────────────────────────────────────────
function BlockTitle({
  title,
  action,
  extra,
}: {
  title: string;
  action?: ReactNode;
  extra?: ReactNode;
}) {
  return (
    <div className="flex items-baseline justify-between mb-3.5">
      <h2 className="font-serif text-xl font-medium tracking-tight text-text m-0">
        {title}
      </h2>
      {extra}
      {action && (
        <span className="text-xs text-accent font-medium cursor-pointer">{action}</span>
      )}
    </div>
  );
}

// ─── Continue assessment ────────────────────────────────────
interface OngoingAssessment {
  id: string;
  patientName: string;
  age: number;
  disorder: string;
  code: string;
  progress: number;
  lastEditLabel: string;
  criteriaDone: number;
  criteriaTotal: number;
}

function useOngoingAssessments() {
  return useQuery({
    queryKey: ["assessments", "ongoing"],
    // TODO: replace with PocketBase fetch — pb.collection('assessments').getList(1, 3, { filter: 'state="em-andamento"' })
    queryFn: async (): Promise<OngoingAssessment[]> => [
      { id: "1", patientName: "Marina S.",  age: 32, disorder: "TDAH",                              code: "F90",   progress: 0.66, lastEditLabel: "há 2h",     criteriaDone: 6, criteriaTotal: 9 },
      { id: "2", patientName: "Roberto A.", age: 47, disorder: "Transtorno Depressivo Maior",       code: "F32",   progress: 0.85, lastEditLabel: "ontem",     criteriaDone: 7, criteriaTotal: 9 },
      { id: "3", patientName: "Helena T.",  age: 19, disorder: "Anorexia Nervosa",                  code: "F50.0", progress: 0.40, lastEditLabel: "há 3 dias", criteriaDone: 3, criteriaTotal: 5 },
    ],
  });
}

function ContinueAssessmentBlock() {
  const { data: items = [] } = useOngoingAssessments();
  return (
    <section>
      <BlockTitle title="Continuar avaliação" action="Ver todas →" />
      <div className="grid grid-cols-3 gap-4">
        {items.map((it) => (
          <article
            key={it.id}
            className="px-5 py-4 bg-surface border border-border rounded-[var(--radius-card)] cursor-pointer flex flex-col gap-3 hover:border-border-hi transition-colors"
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="text-[11px] text-text-3 mb-1">
                  {it.code} · {it.disorder}
                </div>
                <div className="font-serif text-lg font-medium text-text tracking-tight">
                  {it.patientName}
                </div>
                <div className="text-xs text-text-3 mt-0.5">
                  {it.age} anos · {it.lastEditLabel}
                </div>
              </div>
              <ArrowUpRight size={14} className="text-text-3" />
            </div>
            <div>
              <div className="flex justify-between text-[11px] text-text-3 mb-1.5 tabular-nums">
                <span>{Math.round(it.progress * 100)}% completo</span>
                <span>{it.criteriaDone}/{it.criteriaTotal} critérios</span>
              </div>
              <ProgressBar value={it.progress} height={3} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ─── Active patients ────────────────────────────────────────
interface ActivePatient {
  id: string;
  name: string;
  lastLabel: string;
  nextLabel: string;
  status: "acompanhamento" | "em-avaliacao";
}

function useActivePatients() {
  return useQuery({
    queryKey: ["patients", "active"],
    queryFn: async (): Promise<ActivePatient[]> => [
      { id: "1", name: "Marina Schmidt",  lastLabel: "TDAH · há 2h",                 nextLabel: "amanhã, 14h",      status: "acompanhamento" },
      { id: "2", name: "Roberto Amaral",  lastLabel: "TDM · ontem",                  nextLabel: "sex, 09h",         status: "acompanhamento" },
      { id: "3", name: "Helena Tavares",  lastLabel: "Anorexia · há 3d",             nextLabel: "qua, 16h",         status: "em-avaliacao" },
      { id: "4", name: "Joaquim P. Lima", lastLabel: "Transtorno Bipolar I · há 1w", nextLabel: "segunda, 11h",     status: "acompanhamento" },
      { id: "5", name: "Cecília Ribeiro", lastLabel: "TEA · há 2w",                  nextLabel: "qui (29/5), 10h",  status: "em-avaliacao" },
    ],
  });
}

function ActivePatientsBlock() {
  const { data: rows = [] } = useActivePatients();
  return (
    <section>
      <BlockTitle title="Pacientes ativos" action="Todos os 24 →" />
      <div className="bg-surface border border-border rounded-[var(--radius-card)]">
        {rows.map((r, i) => (
          <div
            key={r.id}
            className={cn(
              "grid grid-cols-[1.5fr_1fr_1fr_auto] px-4 py-3 items-center gap-3 text-xs",
              i > 0 && "border-t border-border"
            )}
          >
            <div>
              <div className="text-text font-medium mb-0.5">{r.name}</div>
              <div className="text-[11px] text-text-3">última: {r.lastLabel}</div>
            </div>
            <div className="text-text-2 inline-flex items-center gap-1">
              <Calendar size={11} className="text-text-4" />
              {r.nextLabel}
            </div>
            <div>
              <Badge >
                {r.status === "acompanhamento" ? "em acompanhamento" : "em avaliação"}
              </Badge>
            </div>
            <ChevronRight size={14} className="text-text-4" />
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Quick shortcuts ────────────────────────────────────────
interface Shortcut { code: string; name: string; sub: string; }

function useFavoriteDisorders() {
  return useQuery({
    queryKey: ["disorders", "favorites"],
    queryFn: async (): Promise<Shortcut[]> => [
      { code: "F90",   name: "TDAH",                        sub: "Polythetic · 5/9" },
      { code: "F32",   name: "Transtorno Depressivo Maior", sub: "Polythetic · 5/9" },
      { code: "F33",   name: "Bipolar I",                   sub: "Conjunção temporal" },
      { code: "F41.1", name: "Ansiedade Generalizada",      sub: "Polythetic · 3/6" },
    ],
  });
}

function QuickShortcutsBlock() {
  const { data: shortcuts = [] } = useFavoriteDisorders();
  return (
    <section>
      <BlockTitle
        title="Atalhos rápidos"
        extra={
          <span className="text-[11px] text-text-3">
            os transtornos que você mais usa
          </span>
        }
      />
      <div className="grid grid-cols-2 gap-2">
        {shortcuts.map((s) => (
          <button
            key={s.code}
            type="button"
            className="px-3.5 py-3 bg-surface border border-border rounded-[var(--radius-card)] cursor-pointer flex flex-col gap-1 text-left hover:border-border-hi transition-colors"
          >
            <span className="text-[11px] text-text-3 font-mono">{s.code}</span>
            <span className="text-xs text-text font-medium truncate">{s.name}</span>
            <span className="text-[11px] text-text-4">{s.sub}</span>
          </button>
        ))}
      </div>
      <Button size="sm" className="mt-3 w-full">
        Nova avaliação
      </Button>
    </section>
  );
}

// ─── Recent activity ────────────────────────────────────────
interface Activity {
  id: string;
  time: string;
  patient: string;
  action: string;
  icon: "edit" | "sparkle" | "check" | "download" | "plus";
}

const activityIcons = {
  edit:     <Edit3 size={13} />,
  sparkle:  <Sparkles size={13} />,
  check:    <Check size={13} />,
  download: <Download size={13} />,
  plus:     <Plus size={13} />,
} as const;

function useRecentActivity() {
  return useQuery({
    queryKey: ["activity", "recent"],
    queryFn: async (): Promise<Activity[]> => [
      { id: "1", time: "há 2h",  patient: "Marina S.",  action: "Atualizou critérios A.1 de TDAH",                  icon: "edit" },
      { id: "2", time: "há 4h",  patient: "Marina S.",  action: "Subtipo inferido: predominantemente desatento",   icon: "sparkle" },
      { id: "3", time: "ontem",  patient: "Roberto A.", action: "Finalizou avaliação · TDM, episódio único, grave",icon: "check" },
      { id: "4", time: "ontem",  patient: "Roberto A.", action: "Exportou relatório markdown",                      icon: "download" },
      { id: "5", time: "há 2d",  patient: "Helena T.",  action: "Iniciou avaliação · Anorexia Nervosa",             icon: "plus" },
    ],
  });
}

function RecentActivityBlock() {
  const { data: items = [] } = useRecentActivity();
  return (
    <section className="mt-8">
      <BlockTitle title="Atividade recente" action="Diário completo →" />
      <div className="flex flex-col bg-surface border border-border rounded-[var(--radius-card)]">
        {items.map((it, i) => (
          <div
            key={it.id}
            className={cn(
              "flex items-center gap-3.5 px-4.5 py-3.5",
              i > 0 && "border-t border-border"
            )}
            style={{ padding: "14px 18px" }}
          >
            <div className="w-7 h-7 rounded-full bg-surface-2 flex items-center justify-center text-text-2 shrink-0">
              {activityIcons[it.icon]}
            </div>
            <div className="flex-1 text-xs text-text-2">
              <strong className="text-text font-semibold">{it.patient}</strong>
              <span className="text-text-3"> · </span>
              {it.action}
            </div>
            <div className="text-xs text-text-4 tabular-nums">{it.time}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

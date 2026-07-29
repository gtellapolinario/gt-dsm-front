// src/components/workspace/Sidebar.tsx
import { useMemo } from "react";
import { ChevronRight, BookOpen, File as FileIcon } from "lucide-react";
import { useNavigate, useRouterState } from "@tanstack/react-router";

import {
  getGeneratedSidebarTree,
  getGeneratedChapterKeyByDiseaseId,
} from "@/infra/generated-disorder-catalog";

import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@ui/collapsible";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ui/tooltip";
import { cn } from "@/lib/utils";
import headerImage from "@/assets/icon/image.png";

/** Abreviação nosológica universal para capítulos e transtornos. */
function formatShortTitle(label: string): string {
  if (!label) return "";
  return label
    .replace(/\bTranstornos?\s+(de|da|dos|das)?\s+Personalidade\b/gi, "TP.")
    .replace(/\bTranstornos?\b/gi, "Tx.")
    .replace(/\bSíndromes?\b/gi, "Sx.");
}

export function Sidebar() {
  const navigate = useNavigate();
  const routerState = useRouterState();

  // Tries to extract disease key from URL if we are on /app/assess/id
  const currentDiseaseId = useMemo(() => {
    const parts = routerState.location.pathname.split("/");
    return parts[parts.length - 1];
  }, [routerState.location.pathname]);

  const activeChapterKey = useMemo(
    () =>
      currentDiseaseId
        ? getGeneratedChapterKeyByDiseaseId(currentDiseaseId)
        : undefined,
    [currentDiseaseId],
  );

  const tree = useMemo(() => getGeneratedSidebarTree(), []);

  return (
    <TooltipProvider>
      <ShadcnSidebar
        variant="sidebar"
        collapsible="icon"
        className="bg-[linear-gradient(to_top,#020617_0%,#020617cc_18%,transparent_45%),radial-gradient(circle_at_bottom_right,#0ea5e9_0%,#0f766e_42%,#0f172a_100%)]! text-white border-r border-slate-800/60 shadow-2xl"
      >
        <SidebarHeader className="border-b border-white/10 px-4 py-3 bg-[linear-gradient(to_top,#020617_0%,#020617cc_18%,transparent_45%),radial-gradient(circle_at_bottom_right,#0ea5e9_0%,#0f766e_42%,#0f172a_100%)]!">
          <img
            src={headerImage}
            alt="GTmedic·DSM — avaliação clínica estruturada"
            className="w-[80%] mx-auto  p-3 rounded-xl object-cover group-data-[collapsible=icon]:hidden shadow-md"
          />
        </SidebarHeader>

        <SidebarContent className="text-white bg-[linear-gradient(to_top,#020617_0%,#020617cc_18%,transparent_45%),radial-gradient(circle_at_bottom_right,#0ea5e9_0%,#0f766e_42%,#0f172a_100%)]!">
          <SidebarGroup>
            <div className="text-[10px] font-bold tracking-[1.4px] text-cyan-300/80 px-2 pt-2.5 pb-1.5 uppercase group-data-[collapsible=icon]:hidden">
              Capítulos DSM-5
            </div>
            <SidebarMenu>
              {tree.map((chapter) => {
                const isActiveChapter = chapter.key === activeChapterKey;
                const shortChapterTitle = formatShortTitle(chapter.label);

                return (
                  <Collapsible
                    key={chapter.key}
                    defaultOpen={isActiveChapter}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <Tooltip delayDuration={200}>
                        <TooltipTrigger asChild>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton
                              className={cn(
                                "w-full text-slate-200 hover:text-white hover:bg-white/10 transition-all rounded-lg py-2",
                                isActiveChapter &&
                                  "bg-white/15 text-white font-semibold shadow-xs",
                              )}
                            >
                              <ChevronRight className="h-3 w-3 text-white/80 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 " />
                              <span className="min-w-0 flex-1 truncate text-xs font-medium">
                                {shortChapterTitle}
                              </span>
                              <span className="text-[11px] font-semibold text-cyan-200/70 bg-white/10 px-1.5 py-0.5 rounded-full tabular-nums">
                                {chapter.meta?.count}
                              </span>
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                        </TooltipTrigger>
                        <TooltipContent
                          side="right"
                          className="bg-slate-950/95 text-white border border-slate-700/80 shadow-2xl max-w-xs text-xs font-medium px-3 py-1.5"
                        >
                          {chapter.label}
                        </TooltipContent>
                      </Tooltip>

                      <CollapsibleContent>
                        <SidebarMenuSub className="pr-0 mr-0 text-xs border-l border-white/15 ml-4 pl-2.5 mt-1 mb-2 space-y-0.5">
                          {chapter.children.map((disease: any) => {
                            const href = `/app/assess/${disease.key}`;
                            const isActiveDisease =
                              routerState.location.pathname === href;
                            const shortDiseaseTitle = formatShortTitle(
                              disease.label,
                            );

                            return (
                              <Tooltip key={disease.key} delayDuration={200}>
                                <TooltipTrigger asChild>
                                  <SidebarMenuSubItem className="text-xs">
                                    <SidebarMenuSubButton
                                      asChild
                                      isActive={isActiveDisease}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        navigate({ to: href });
                                      }}
                                      className={cn(
                                        "transition-all duration-150 text-slate-300 hover:text-white hover:bg-white/15 rounded-md px-2 py-1.5",
                                        isActiveDisease &&
                                          "bg-cyan-500/30 text-white font-semibold border-l-2 border-cyan-300 shadow-sm",
                                      )}
                                    >
                                      <a
                                        href={href}
                                        className="flex items-center gap-2 h-auto"
                                      >
                                        <FileIcon className="h-3.5 w-3.5 shrink-0 opacity-70 text-cyan-200!" />
                                        <span className="text-xs font-medium truncate leading-snug">
                                          {shortDiseaseTitle}
                                        </span>
                                      </a>
                                    </SidebarMenuSubButton>
                                  </SidebarMenuSubItem>
                                </TooltipTrigger>
                                <TooltipContent
                                  side="right"
                                  className="bg-slate-950/95 text-white border border-slate-700/80 shadow-2xl max-w-xs text-xs font-medium px-3 py-1.5"
                                >
                                  {disease.label}
                                </TooltipContent>
                              </Tooltip>
                            );
                          })}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="text-slate-200 hover:text-white hover:bg-white/10 transition-all rounded-lg"
                >
                  <a href="#">
                    <BookOpen className="w-4 h-4 text-cyan-400" /> Referências
                    DSM-5
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="bg-[linear-gradient(to_top,#020617_0%,#020617cc_18%,transparent_45%),radial-gradient(circle_at_bottom_right,#0ea5e9_0%,#0f766e_42%,#0f172a_100%)]!">
          <div className="p-3 mx-2 mb-2 bg-white/5 rounded-lg border border-white/10 text-xs text-slate-400">
            GT-DSM ® 2026
          </div>
        </SidebarFooter>
      </ShadcnSidebar>
    </TooltipProvider>
  );
}

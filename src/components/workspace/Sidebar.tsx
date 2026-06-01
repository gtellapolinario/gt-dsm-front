// src/components/workspace/Sidebar.tsx
import { useMemo, useState } from "react";
import {
  ChevronRight, Search, Zap, Home, Users, ClipboardList, Network, BookOpen, 
  File as FileIcon
} from "lucide-react";
import { useNavigate, useRouterState, Link } from "@tanstack/react-router";

import {
  getSidebarTree,
  searchDiseases,
  getChapterKeyByDiseaseId,
} from "@/lib/disease-catalog";

import type { TreeNode } from "@/lib/disease-catalog";

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
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type ChapterNode = TreeNode & { type: "chapter"; children: TreeNode[] };

export function Sidebar() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const [query, setQuery] = useState("");

  // Tries to extract disease key from URL if we are on /app/assess/id or /consulta/id
  const currentDiseaseId = useMemo(() => {
    const parts = routerState.location.pathname.split("/");
    return parts[parts.length - 1]; // very basic extraction
  }, [routerState.location.pathname]);

  const activeChapterKey = useMemo(
    () =>
      currentDiseaseId
        ? getChapterKeyByDiseaseId(currentDiseaseId)
        : undefined,
    [currentDiseaseId]
  );

  const tree = useMemo(() => getSidebarTree() as ChapterNode[], []);

  const results = useMemo(() => {
    const q = query.trim();
    if (!q) return [];
    return searchDiseases(q);
  }, [query]);

  const visibleTree = useMemo(() => {
    if (!query.trim()) return tree;

    const matchingIds = new Set(results.map((item: any) => item.id));

    return tree
      .map((chapter) => ({
        ...chapter,
        children: chapter.children.filter((disease: any) =>
          matchingIds.has(disease.key)
        ),
      }))
      .filter((chapter) => chapter.children.length > 0);
  }, [tree, results, query]);

  return (
    <ShadcnSidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="border-b px-4 py-3">
        <div className="relative group-data-[collapsible=icon]:hidden">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar transtorno ou CID..."
            className="pl-9 h-8 bg-background shadow-none"
          />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/"><Home className="w-4 h-4" /> Início</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#"><Users className="w-4 h-4" /> Meus Pacientes</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#"><ClipboardList className="w-4 h-4" /> Avaliações</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <div className="text-[10px] font-bold tracking-[1.2px] text-muted-foreground px-2 pt-2 pb-1.5 uppercase group-data-[collapsible=icon]:hidden">
            Capítulos DSM-5
          </div>
          <SidebarMenu>
            {visibleTree.map((chapter) => {
              const isActiveChapter = chapter.key === activeChapterKey;
              const defaultOpen = Boolean(query.trim()) || isActiveChapter;

              return (
                <Collapsible
                  key={chapter.key}
                  defaultOpen={defaultOpen}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className={cn("w-full transition-colors", isActiveChapter && "bg-muted")}>
                        <ChevronRight className="h-2 w-2 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        {chapter.icon && (
                          <chapter.icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                        )}
                        <span className="min-w-0 flex-1 truncate font-medium text-xs">
                          {chapter.label}
                        </span>
                        <span className="text-xs text-muted-foreground tabular-nums">
                          {chapter.meta?.count}
                        </span>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <SidebarMenuSub className="pr-0 mr-0 text-xs border-l border-border ml-5 pl-2 mt-1 mb-2">
                        {chapter.children.map((disease: any) => {
                          const href = `/app/assess/${disease.key}`; // using current app's route structure
                          const isActiveDisease = routerState.location.pathname === href;

                          return (
                            <SidebarMenuSubItem className="text-xs" key={disease.key}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={isActiveDisease}
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigate({ to: href });
                                }}
                              >
                                <a href={href} className="flex items-start gap-2 text-muted-foreground hover:text-foreground h-auto py-1">
                                  <FileIcon className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                                  <span className="text-xs line-clamp-2 leading-snug break-words whitespace-normal">
                                    {disease.label}
                                  </span>
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
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
              <SidebarMenuButton asChild>
                <Link to="/app/mapa"><Network className="w-4 h-4" /> Mapa de Diagnósticos</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#"><BookOpen className="w-4 h-4" /> Referências DSM-5</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="p-3 mx-2 mb-2 bg-muted rounded-md border border-border">
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground mb-1.5">
            <Zap size={11} />
            <span className="font-semibold tracking-wider">BETA CLÍNICO</span>
          </div>
          <p className="text-xs text-muted-foreground leading-snug m-0">
            Reporte bugs e sugestões direto pelo painel.
          </p>
        </div>
      </SidebarFooter>
    </ShadcnSidebar>
  );
}

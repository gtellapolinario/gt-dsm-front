import { useMemo, useRef, useCallback, useEffect, useState } from "react";
import ForceGraph2D from "react-force-graph-2d";
import { useNavigate } from "@tanstack/react-router";
import { CHAPTERS } from "@/lib/disease-catalog";
import { listGeneratedDisordersByChapter } from "@/infra/generated-disorder-catalog";

interface GraphNode {
  id: string;
  name: string;
  group: "root" | "chapter" | "disease";
  val: number;
  color?: string;
  // properties added by force-graph
  x?: number;
  y?: number;
}

interface GraphLink {
  source: string;
  target: string;
}

interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

export function MapaDiagnostico() {
  const navigate = useNavigate();
  const fgRef = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Resize observer to keep the graph responsive
  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const graphData = useMemo<GraphData>(() => {
    const nodes: GraphNode[] = [];
    const links: GraphLink[] = [];

    // Root node
    nodes.push({
      id: "root",
      name: "DSM-5-TR",
      group: "root",
      val: 20,
      color: "hsl(var(--foreground))",
    });

    CHAPTERS.forEach((chapter) => {
      // Chapter node
      nodes.push({
        id: chapter.key,
        name: chapter.nome,
        group: "chapter",
        val: 10,
        color: chapter.hue,
      });

      // Link Root to Chapter
      links.push({
        source: "root",
        target: chapter.key,
      });

      // Disease nodes
      const diseases = listGeneratedDisordersByChapter(chapter.id);
      diseases.forEach((disease) => {
        nodes.push({
          id: disease.id,
          name: disease.sigla || disease.nome,
          group: "disease",
          val: 4,
          color: chapter.hue, // same color as chapter
        });

        // Link Chapter to Disease
        links.push({
          source: chapter.key,
          target: disease.id,
        });
      });
    });

    return { nodes, links };
  }, []);

  const handleNodeClick = useCallback(
    (node: GraphNode) => {
      if (!fgRef.current) return;
      
      if (node.group === "disease") {
        // Navigate to the disease assessment
        navigate({ to: `/app/assess/$assessmentId`, params: { assessmentId: node.id } });
      } else {
        // Zoom and center on the node
        fgRef.current.centerAt(node.x, node.y, 1000);
        fgRef.current.zoom(8, 2000);
      }
    },
    [navigate]
  );

  return (
    <div className="w-full h-full flex flex-col">
      <div className="px-6 py-4 border-b border-border bg-surface shrink-0">
        <h1 className="text-xl font-semibold">Mapa de Diagnósticos</h1>
        <p className="text-sm text-text-3 mt-1">Explore as categorias e transtornos do DSM-5 através de conexões visuais.</p>
      </div>
      
      <div className="flex-1 relative bg-bg overflow-hidden" ref={containerRef}>
        {dimensions.width > 0 && dimensions.height > 0 && (
          <ForceGraph2D
            ref={fgRef}
            width={dimensions.width}
            height={dimensions.height}
            graphData={graphData}
            nodeLabel="name"
            nodeColor="color"
            nodeRelSize={2}
            nodeVal="val"
            linkColor={() => "rgba(150, 150, 150, 0.2)"}
            onNodeClick={handleNodeClick}
            // Increase friction slightly for stability
            d3AlphaDecay={0.05}
            d3VelocityDecay={0.4}
            // Auto-pause physics after settling to save CPU
            cooldownTicks={150}
            onEngineStop={() => {
              fgRef.current?.zoomToFit(400);
            }}
            onEngineTick={() => {
              // Ajusta a física durante o carregamento inicial
              if (fgRef.current) {
                fgRef.current.d3Force("link")?.distance(20);
                fgRef.current.d3Force("charge")?.strength(-150);
              }
            }}
          />
        )}
      </div>
    </div>
  );
}

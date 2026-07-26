/**
 * Auditoria runtime dos 58 payloads clínicos.
 *
 * Carrega cada módulo de transtorno de verdade (passa pelo `Schema.parse` do
 * data.ts) e valida o contrato que o DisorderRenderer exige. É o único check
 * que pega erros que NEM `tsc` NEM `vite build` veem: tipos errados dentro
 * dos dados (ex.: sigla como objeto, cid10 como array).
 *
 * Uso: `npm run audit:payloads` (rodar após qualquer refatoração de dados).
 * Exit code 1 se houver qualquer falha — apto para CI.
 */
import { generatedDisorderImports } from "../src/generated/disorders/registry";
import { readFileSync } from "node:fs";

const mapaIcones = readFileSync(
  new URL("../src/lib/mapear-icones.ts", import.meta.url),
  "utf8",
);

const erros: string[] = [];

for (const [id, load] of Object.entries(generatedDisorderImports)) {
  try {
    const obj: any = (await load()).data;
    const falta: string[] = [];

    // meta / header / card nosológico
    if (!obj.meta?.id) falta.push("meta.id");
    if (!(obj.meta?.nome_completo ?? obj.meta?.nome)) falta.push("meta.nome");
    if (obj.meta?.sigla != null && typeof obj.meta.sigla !== "string")
      falta.push("meta.sigla(não-string)");
    for (const sistema of ["dsm5", "cid10", "cid11"] as const) {
      const valor = obj.meta?.codigo?.[sistema];
      if (valor != null && typeof valor !== "string")
        falta.push(`meta.codigo.${sistema}(não-string)`);
    }
    if (obj.meta?.capitulo == null) falta.push("meta.capitulo");

    // gravidade — fonte da verdade: classificacao_dsm
    if (!obj.gravidade?.classificacao_dsm)
      falta.push("gravidade.classificacao_dsm");

    // coleções que o renderer itera
    if (!Array.isArray(obj.clusters_sintomas)) falta.push("clusters_sintomas[]");
    if (!Array.isArray(obj.criterios_condicionais))
      falta.push("criterios_condicionais[]");
    for (const secao of [
      "subtipos",
      "especificadores",
      "dominios_impacto",
      "diagnostico_diferencial",
      "comorbidades_frequentes",
      "instrumentos_complementares",
    ]) {
      if (obj[secao] !== null && typeof obj[secao] !== "object")
        falta.push(`${secao}(tipo)`);
    }

    // ícones Lucide referenciados nos dados precisam existir no mapa
    const icones = new Set<string>();
    const coleta = (valor: unknown) => {
      if (Array.isArray(valor)) return valor.forEach(coleta);
      if (valor && typeof valor === "object") {
        const rec = valor as Record<string, unknown>;
        if (typeof rec.icone === "string") icones.add(rec.icone);
        Object.values(rec).forEach(coleta);
      }
    };
    coleta(obj.clusters_sintomas);
    coleta(obj.criterios_condicionais);
    coleta(obj.dominios_impacto);
    for (const icone of icones) {
      if (!new RegExp(`\\b${icone}\\b`).test(mapaIcones))
        falta.push(`icone fora do mapa: ${icone}`);
    }

    if (falta.length) erros.push(`${id}: ${falta.join(", ")}`);
  } catch (e: any) {
    const issues = e?.issues
      ?.map((i: any) => `${i.path.join(".")} (${i.message})`)
      .join("; ");
    erros.push(`${id}: PARSE FALHOU — ${issues ?? String(e).slice(0, 300)}`);
  }
}

if (erros.length > 0) {
  console.error(`✗ auditoria falhou em ${erros.length} transtorno(s):\n`);
  console.error(erros.join("\n"));
  process.exit(1);
}
console.log("✓ auditoria runtime: 58/58 payloads conformes ao contrato do renderer");

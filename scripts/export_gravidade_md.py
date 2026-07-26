import os
import glob
import json
import re

DISORDERS_DIR = "/root/PROJETOS/API/GTMEDICS-APPS/GT-DSM/gt-dsm-front/src/generated/disorders"
OUTPUT_MD = "/root/PROJETOS/API/GTMEDICS-APPS/GT-DSM/gt-dsm-front/DADOS_GRAVIDADE_TODAS_DOENCAS.md"

def extract_json_object_from_data_ts(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Find the start of Schema.parse(
    match = re.search(r'\w*Schema\.parse\s*\(\s*', content)
    if not match:
        return None
    
    start_idx = match.end()
    # Balance braces to extract full object
    depth = 0
    in_string = False
    string_char = None
    escape = False
    end_idx = start_idx
    
    for i in range(start_idx, len(content)):
        char = content[i]
        if escape:
            escape = False
            continue
        if char == '\\':
            escape = True
            continue
        if in_string:
            if char == string_char:
                in_string = False
            continue
        if char in ('"', "'", '`'):
            in_string = True
            string_char = char
            continue
        if char in ('{', '['):
            depth += 1
        elif char in ('}', ']'):
            depth -= 1
            if depth == 0 and char == '}':
                end_idx = i + 1
                break

    json_str = content[start_idx:end_idx]
    
    # 1. Quote unquoted keys (e.g. meta: -> "meta":, nome_completo: -> "nome_completo":)
    json_str = re.sub(r'([{,]\s*)([a-zA-Z_][a-zA-Z0-9_]*)\s*:', r'\1"\2":', json_str)
    
    # 2. Fix trailing commas before closing braces/brackets
    json_str = re.sub(r',\s*([}\]])', r'\1', json_str)
    
    try:
        return json.loads(json_str)
    except Exception as e:
        return extract_with_regex(content)

def extract_with_regex(content):
    # Regex fallback for nome and gravidade
    nome_match = re.search(r'["\']?nome_completo["\']?\s*:\s*["\']([^"\']+)["\']', content) or \
                 re.search(r'["\']?nome["\']?\s*:\s*["\']([^"\']+)["\']', content)
    nome = nome_match.group(1) if nome_match else None
    
    grav_match = re.search(r'["\']?gravidade["\']?\s*:\s*(\{.*?\n\s*\})', content, re.DOTALL)
    grav_text = grav_match.group(1) if grav_match else None
    
    return {"meta": {"nome_completo": nome}, "gravidade": grav_text}

def format_gravidade(grav):
    if not grav:
        return "Nenhum parâmetro de gravidade formal informado."
    
    if isinstance(grav, str):
        return grav
    
    lines = []
    if isinstance(grav, dict):
        tipo = grav.get("tipo")
        if tipo:
            lines.append(f"- **Tipo:** {tipo}")
        
        texto_completo = grav.get("texto_completo")
        if texto_completo:
            lines.append(f"{texto_completo}")
        
        niveis = grav.get("niveis")
        if isinstance(niveis, list) and len(niveis) > 0:
            lines.append("- **Níveis de Gravidade:**")
            for niv in niveis:
                if isinstance(niv, dict):
                    label = niv.get("label") or niv.get("id") or "Nível"
                    desc = niv.get("descritor") or niv.get("descricao") or ""
                    criterio = niv.get("criterio_quantitativo") or ""
                    info = f": {desc}" if desc else ""
                    if criterio:
                        info += f" ({criterio})"
                    lines.append(f"  - **{label}**{info}")
                else:
                    lines.append(f"  - {niv}")
        elif isinstance(niveis, str):
            lines.append(f"- **Níveis:** {niveis}")
            
        nota = grav.get("nota") or grav.get("observacao")
        if nota:
            lines.append(f"- **Nota:** {nota}")
            
    return "\n".join(lines) if lines else json.dumps(grav, ensure_ascii=False, indent=2)

def main():
    disorder_dirs = sorted([d for d in glob.glob(os.path.join(DISORDERS_DIR, "*")) if os.path.isdir(d) and not d.endswith("_shared")])
    
    out_md = ["# Parâmetros de Gravidade dos Transtornos (DSM-5-TR)\n"]
    
    total_processed = 0
    for d_dir in disorder_dirs:
        data_ts = os.path.join(d_dir, "data.ts")
        if not os.path.exists(data_ts):
            continue
        
        payload = extract_json_object_from_data_ts(data_ts)
        if not payload:
            continue
        
        meta = payload.get("meta", {})
        nome = meta.get("nome_completo") or meta.get("nome") or os.path.basename(d_dir)
        
        grav = payload.get("gravidade")
        
        # Check if gravidade is also inside rendering.inventario_clinico or inventario_clinico
        inv = payload.get("rendering", {}).get("inventario_clinico", {}) if isinstance(payload.get("rendering"), dict) else payload.get("inventario_clinico", {})
        if isinstance(inv, dict) and inv.get("gravidade"):
            grav_inv = inv.get("gravidade")
            if not grav:
                grav = grav_inv
        
        out_md.append(f"# {nome}\n")
        out_md.append(format_gravidade(grav))
        out_md.append("\n---\n")
        total_processed += 1
        
    with open(OUTPUT_MD, "w", encoding="utf-8") as f:
        f.write("\n".join(out_md))
        
    print(f"Sucesso: Processados {total_processed} transtornos e gerado {OUTPUT_MD}")

if __name__ == "__main__":
    main()

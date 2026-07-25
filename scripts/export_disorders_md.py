import os
import re
import glob

DISORDERS_DIR = "/root/PROJETOS/API/GTMEDICS-APPS/GT-DSM/gt-dsm-front/src/generated/disorders"
OUTPUT_MD = "/root/PROJETOS/API/GTMEDICS-APPS/GT-DSM/gt-dsm-front/DADOS_CLINICOS_TODAS_DOENCAS.md"

def parse_config(filepath):
    """Extract metadata from config.ts"""
    if not os.path.exists(filepath):
        return {}
    with open(filepath, "r", encoding="utf-8") as f:
        text = f.read()

    def get_val(key):
        m = re.search(r'["\']?' + key + r'["\']?\s*:\s*["\']([^"\']+)["\']', text)
        return m.group(1) if m else None

    return {
        "id": get_val("id"),
        "nome": get_val("nome"),
        "sigla": get_val("sigla"),
        "capitulo_id": get_val("capitulo_id"),
        "capitulo_nome": get_val("capitulo_nome"),
        "codigo_dsm5": get_val("codigo_dsm5"),
        "codigo_cid10": get_val("codigo_cid10"),
        "codigo_cid11": get_val("codigo_cid11"),
    }

def extract_section(text, section_key):
    """Extract raw section block from data.ts text"""
    pattern = r'["\']?' + re.escape(section_key) + r'["\']?\s*:\s*'
    match = re.search(pattern, text)
    if not match:
        return None

    start_idx = match.end()
    # Find block end by counting brackets or searching until next major key
    depth_brace = 0
    depth_bracket = 0
    in_string = False
    string_char = None
    escape = False

    end_idx = start_idx
    for i in range(start_idx, len(text)):
        char = text[i]
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

        if char == '{':
            depth_brace += 1
        elif char == '}':
            if depth_brace > 0:
                depth_brace -= 1
            elif depth_bracket == 0:
                end_idx = i
                break
        elif char == '[':
            depth_bracket += 1
        elif char == ']':
            if depth_bracket > 0:
                depth_bracket -= 1
            elif depth_brace == 0:
                end_idx = i + 1
                break

        if depth_brace == 0 and depth_bracket == 0 and char in (',', ';'):
            end_idx = i
            break

    block = text[start_idx:end_idx].strip()
    # clean trailing comma if present
    if block.endswith(','):
        block = block[:-1].strip()
    return block

def main():
    disorder_dirs = sorted([d for d in glob.glob(os.path.join(DISORDERS_DIR, "*")) if os.path.isdir(d) and not d.endswith("_shared")])

    md_output = ["# BASE COMPLETA DE DADOS CLÍNICOS E EPIDEMIOLÓGICOS DO DSM-5-TR\n"]
    md_output.append("> **Documento compilado para processamento via Enxame de Agentes / LLMs.**\n")
    md_output.append("> Contém: Subtipos, Gravidade, Instrumentos Complementares, Prevalência, Curso & Desenvolvimento e Template de Prontuário de todas as 58/59 doenças.\n")
    md_output.append("\n---\n")

    processed_count = 0

    for d_path in disorder_dirs:
        folder_name = os.path.basename(d_path)
        config_path = os.path.join(d_path, "config.ts")
        data_path = os.path.join(d_path, "data.ts")

        if not os.path.exists(data_path):
            continue

        cfg = parse_config(config_path)
        nome = cfg.get("nome") or folder_name.replace("_", " ").title()
        sigla = f" ({cfg.get('sigla')})" if cfg.get("sigla") else ""
        dsm = cfg.get("codigo_dsm5") or "N/A"
        cid10 = cfg.get("codigo_cid10") or "N/A"
        cid11 = cfg.get("codigo_cid11") or "N/A"
        capitulo = cfg.get("capitulo_nome") or "Geral"

        with open(data_path, "r", encoding="utf-8") as f:
            data_text = f.read()

        md_output.append(f"# {nome}{sigla}")
        md_output.append(f"**ID**: `{folder_name}` | **Capítulo**: {capitulo} | **DSM-5**: {dsm} | **CID-10**: {cid10} | **CID-11**: {cid11}\n")

        # 1. Prevalência
        prev = extract_section(data_text, "prevalencia")
        if prev:
            md_output.append("## 📊 Prevalência & Epidemiologia")
            md_output.append("```json")
            md_output.append(prev)
            md_output.append("```\n")

        # 2. Curso & Desenvolvimento
        curso = extract_section(data_text, "curso_desenvolvimento")
        if curso:
            md_output.append("## ⏳ Curso & Desenvolvimento")
            md_output.append("```json")
            md_output.append(curso)
            md_output.append("```\n")

        # 3. Gravidade
        grav = extract_section(data_text, "gravidade")
        if grav:
            md_output.append("## 📈 Níveis de Gravidade")
            md_output.append("```json")
            md_output.append(grav)
            md_output.append("```\n")

        # 4. Subtipos
        subtipos = extract_section(data_text, "subtipos")
        if subtipos:
            md_output.append("## 🩺 Subtipos & Apresentações")
            md_output.append("```json")
            md_output.append(subtipos)
            md_output.append("```\n")

        # 5. Instrumentos Complementares
        inst = extract_section(data_text, "instrumentos_complementares")
        if inst:
            md_output.append("## 📋 Instrumentos & Escalas Complementares")
            md_output.append("```json")
            md_output.append(inst)
            md_output.append("```\n")

        md_output.append("---\n")
        processed_count += 1

    with open(OUTPUT_MD, "w", encoding="utf-8") as f:
        f.write("\n".join(md_output))

    print(f"Sucesso! Compilados {processed_count} transtornos em '{OUTPUT_MD}'.")

if __name__ == "__main__":
    main()

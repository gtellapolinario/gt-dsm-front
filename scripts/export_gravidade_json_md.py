import os
import glob
import json
import re

DISORDERS_DIR = "/root/PROJETOS/API/GTMEDICS-APPS/GT-DSM/gt-dsm-front/src/generated/disorders"
OUTPUT_MD = "/root/PROJETOS/API/GTMEDICS-APPS/GT-DSM/gt-dsm-front/DADOS_GRAVIDADE_JSON_TODAS_DOENCAS.md"

def extract_gravidade_block_raw(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # 1. Extract disease name
    nome_match = re.search(r'["\']?nome_completo["\']?\s*:\s*["\']([^"\']+)["\']', content) or \
                 re.search(r'["\']?nome["\']?\s*:\s*["\']([^"\']+)["\']', content)
    nome = nome_match.group(1) if nome_match else os.path.basename(os.path.dirname(filepath))
    
    # 2. Extract "inventario_clinico" -> "gravidade" block
    # Search for inventario_clinico block first
    inv_match = re.search(r'["\']?inventario_clinico["\']?\s*:\s*\{', content)
    grav_str = None
    
    if inv_match:
        inv_start = inv_match.end() - 1
        # find "gravidade" inside inventario_clinico
        grav_match = re.search(r'["\']?gravidade["\']?\s*:\s*\{', content[inv_start:])
        if grav_match:
            start_idx = inv_start + grav_match.start()
            grav_str = extract_balanced_block(content, start_idx)

    # Fallback to any "gravidade" block if not found inside inventario_clinico
    if not grav_str:
        grav_match = re.search(r'["\']?gravidade["\']?\s*:\s*\{', content)
        if grav_match:
            grav_str = extract_balanced_block(content, grav_match.start())
            
    return nome, grav_str

def extract_balanced_block(text, start_idx):
    # Find the opening brace '{' after start_idx
    first_brace = text.find('{', start_idx)
    if first_brace == -1:
        return None
    
    depth = 0
    in_string = False
    string_char = None
    escape = False
    end_idx = first_brace
    
    for i in range(first_brace, len(text)):
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
            depth += 1
        elif char == '}':
            depth -= 1
            if depth == 0:
                end_idx = i + 1
                break
                
    raw_block = text[start_idx:end_idx].strip()
    return raw_block

def main():
    disorder_dirs = sorted([d for d in glob.glob(os.path.join(DISORDERS_DIR, "*")) if os.path.isdir(d) and not d.endswith("_shared")])
    
    out_md = ["# Parâmetros de Gravidade em JSON dos Transtornos (DSM-5-TR)\n"]
    
    processed = 0
    for d_dir in disorder_dirs:
        data_ts = os.path.join(d_dir, "data.ts")
        if not os.path.exists(data_ts):
            continue
            
        nome, grav_block = extract_gravidade_block_raw(data_ts)
        
        out_md.append(f"# {nome}\n")
        if grav_block:
            out_md.append("```json")
            out_md.append(grav_block)
            out_md.append("```")
        else:
            out_md.append("```json")
            out_md.append('"gravidade": null')
            out_md.append("```")
            
        out_md.append("\n---\n")
        processed += 1
        
    with open(OUTPUT_MD, "w", encoding="utf-8") as f:
        f.write("\n".join(out_md))
        
    print(f"Sucesso: Processados {processed} transtornos e gerado {OUTPUT_MD}")

if __name__ == "__main__":
    main()

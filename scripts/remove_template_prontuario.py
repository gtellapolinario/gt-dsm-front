import os
import re
import glob
import json

def clean_data_ts_files():
    data_files = glob.glob("/root/PROJETOS/API/GTMEDICS-APPS/GT-DSM/gt-dsm-front/src/generated/disorders/**/data.ts", recursive=True)
    pattern = re.compile(r',?\s*"?template_prontuario"?\s*:\s*\{[\s\S]*?\}', re.MULTILINE)
    count = 0
    for fpath in data_files:
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
        new_content = pattern.sub("", content)
        if new_content != content:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(new_content)
            count += 1
    print(f"Limpos {count} arquivos data.ts.")

def clean_final_json_files():
    json_files = glob.glob("/root/PROJETOS/TESTE/dsm/output/final_json/*.json")
    count = 0
    for fpath in json_files:
        with open(fpath, "r", encoding="utf-8") as f:
            try:
                data = json.load(f)
            except Exception:
                continue

        modified = False

        def remove_key_recursive(obj):
            nonlocal modified
            if isinstance(obj, dict):
                if "template_prontuario" in obj:
                    del obj["template_prontuario"]
                    modified = True
                for key, val in list(obj.items()):
                    remove_key_recursive(val)
            elif isinstance(obj, list):
                for item in obj:
                    remove_key_recursive(item)

        remove_key_recursive(data)

        if modified:
            with open(fpath, "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            count += 1
    print(f"Limpos {count} arquivos JSON em final_json.")

if __name__ == "__main__":
    clean_data_ts_files()
    clean_final_json_files()

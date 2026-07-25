import glob
import re

def remove_template_prontuario(text):
    pattern = r'["\']?template_prontuario["\']?\s*:\s*\{'
    match = re.search(pattern, text)
    if not match:
        return text

    start_idx = match.start()
    open_brace_idx = match.end() - 1
    depth = 0
    end_idx = open_brace_idx

    for i in range(open_brace_idx, len(text)):
        if text[i] == '{':
            depth += 1
        elif text[i] == '}':
            depth -= 1
            if depth == 0:
                end_idx = i + 1
                break

    post_text = text[end_idx:]
    comma_match = re.match(r'\s*,', post_text)
    if comma_match:
        end_idx += comma_match.end()
    else:
        pre_text = text[:start_idx]
        pre_match = re.search(r',\s*$', pre_text)
        if pre_match:
            start_idx = pre_match.start()

    return text[:start_idx] + text[end_idx:]

def main():
    files = glob.glob("/root/PROJETOS/API/GTMEDICS-APPS/GT-DSM/gt-dsm-front/src/generated/disorders/**/data.ts", recursive=True)
    cleaned = 0
    for fpath in files:
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
        new_content = remove_template_prontuario(content)
        if new_content != content:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(new_content)
            cleaned += 1
    print(f"Limpos com precisão {cleaned} arquivos data.ts.")

if __name__ == "__main__":
    main()

# 🛑 REGRAS DE ECONOMIA DE TOKENS E CONTEXTO

Você é um agente de desenvolvimento autônomo. Para otimizar nossa cota de tokens e manter o foco, você está ESTRITAMENTE PROIBIDO de ler, escanear ou analisar os seguintes arquivos, pastas e extensões, a menos que eu peça explicitamente.

## 📁 PASTAS PARA IGNORAR (Não entre nestes diretórios)
- node_modules/, vendor/, packages/ (Dependências de terceiros)
- dist/, build/, out/, target/ (Arquivos compilados/build)
- coverage/, .nyc_output/ (Relatórios de teste)
- .antigravity/, .gemini/, .git/ (Arquivos de configuração e logs)
- tmp/, temp/, logs/ (Arquivos temporários)

## 📄 EXTENSÕES PARA IGNORAR (Não leia o conteúdo)
- **Bloqueio e dependências:** package-lock.json, yarn.lock, pnpm-lock.yaml, Gemfile.lock
- **Mídia e UI:** *.png, *.jpg, *.jpeg, *.gif, *.svg, *.ico, *.mp4
- **Binários e Compilados:** *.exe, *.dll, *.so, *.class, *.jar, *.pyc, *.pb
- **Minificados:** *.min.js, *.min.css
- **Bancos de Dados:** *.sqlite, *.db, *.sql

## 🔒 ARQUIVOS SENSÍVEIS (Ignorar por segurança)
- .env, .env.local, *.pem, *.key

## ⚙️ DIRETRIZES DE COMPORTAMENTO DO AGENTE
1. **Evite Scans Globais:** Nunca faça análises de repositório inteiro ("repo-wide analysis") a menos que eu autorize.
2. **Leitura Cirúrgica:** Leia apenas os arquivos de código-fonte diretamente relacionados à tarefa atual.
3. **Respostas Diretas:** Não gere artefatos gigantes, gravações ou logs extensos no terminal sem necessidade.
4. **Nunca quando editando um componente modifique algo que nao foi pedido** - Sempre pergunte antes de modificar algo que nao foi pedido.
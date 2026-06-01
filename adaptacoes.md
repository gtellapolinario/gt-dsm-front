# Registro de Adaptações e Integração de UI (Handoff)

Este documento centraliza as adaptações técnicas e refatorações realizadas para integrar a "parte pública" (Landing Page) e o "dashboard", que haviam sido criados separadamente no projeto `handoff`, para dentro do escopo do projeto principal `app`.

O objetivo primário destas adaptações foi promover uma base de código consistente, alinhada a práticas modernas e de alto nível (médico / profissional), sem perder o progresso de interface desenhado e o setup de dependências já realizado.

---

## 1. Adaptações Previas (Feitas Manualmente pelo Desenvolvedor)

### Dependências e Configuração Base
- **Eslint e Tipagem**: Aprimoramento massivo da formatação e refatoração do `eslint.config.js` (Eslint Flat Config), focando em maior rigor na checagem de regras em TypeScript e React Hooks (`eslint-plugin-react-hooks`, `typescript-eslint`).
- **Limpeza de Packge.json**: Remoção de pacotes obsoletos e duplos, separação clara entre "dependencies" e "devDependencies" (Tailwind v4 foi adequadamente realocado).
- **Inclusão de Plugins Visuais**: Instalação do `@fontsource-variable/ibm-plex-sans` e o `@tanstack/react-table`.
- **TypeScript**: Refatorações cruciais no `tsconfig.app.json` e `tsconfig.node.json`, incluindo atalhos para facilitação de caminhos no projeto (`@c` para components e `@ui` para UI).

### Roteamento e Ferramentas Globais
- **Vite Config**: O plugin do `@tanstack/react-router` foi ajustado no `vite.config.ts` para focar em `src/routes` e o arquivo gerado foi explicitado.
- **Provider de Acessibilidade**: Inclusão do `<TooltipProvider>` em `src/main.tsx` a fim de abranger de forma global qualquer tooltip da aplicação usando Shadcn UI.
- **Components JSON**: Arquivo de setup do Shadcn `components.json` configurado para aderir perfeitamente aos aliases de importação criados (`@c` e `@ui`) com estilo `radix-maia` e base-color `mauve`.
- **Index.css e Temas**: O CSS global da aplicação foi enriquecido manualmente para assimilar todos os design tokens, garantindo o "Dark Mode" perfeito, paletas variadas com "Accent", e variáveis semânticas essenciais (semântica do Tailwind v4 / oklch / Shadcn customizado).

---

## 2. Integrações Atuais (Fase de Merge via Agente)

Para concluir a fusão perfeita entre as bases de código, as seguintes migrações estão sendo executadas:

### Separação de Componentes
Ao invés de misturarmos as lógicas de páginas nos componentes de `ui`, as pastas modulares exportadas da interface de design foram realocadas diretamente em `src/components/`, promovendo isolamento por escopo de negócio:
- `components/landing/`: Elementos da Landing Page (Heroes, Sections).
- `components/workspace/`: Dashboard base (Layout de container fechado, sidebars).
- `components/patient-page/`: Tela de preenchimento médico/diagnóstico focado em avaliações de DSM-5.
- `components/command-palette/`: Ferramenta universal (`Ctrl+K`) para navegação rápida de sistema e atalhos globais.

### Transferência de Regras e Modelos (Lib)
- **`dsm.ts`** e **`schemas.ts`**: Adicionados em `src/lib/`. Essenciais para ditar a lógica e estrita de dados validada (Zod) e domínios da regra de negócios clínica que embasam o formulário na página de paciente.

### Roteamento (TanStack Router)
- **`__root.tsx`**: Reformulado inteiramente para abrigar a loja de contexto Zustand e os modais unificados (como a command palette), tirando a navegação antiga via texto e substituindo por ferramentas profissionais e sincronização com o cache local.
- **Estrutura de Rotas**:
  - `index.tsx`: O Ponto de entrada deslogado (Página Pública / Landing Page).
  - `app.tsx`: O layout contendo o Header/Sidebar para usuários dentro do ecossistema.
  - `app.index.tsx` e `app.assess.$assessmentId.tsx`: Filhos carregados nos layouts da WorkSpace, que efetivamente operam a visualização interna.

---
*Este documento reflete a convergência de dois repositórios isolados para a master do aplicativo GTmedic·DSM.*

rquivo zip
Entendido. Rodada 2C é **sincronização canônica pura** — reconciliar artefatos, corrigir estruturas supernormalizadas, e gerar relatórios de match. Vou começar lendo o estado atual e depois executar as correções.
Encontrei os 3 casos de supernormalização e tenho todas as contagens. Vou executar as correções e sincronização de forma determinística.
**142/142 MATCH** — zero mismatches. As 3 supernormalizações corrigidas. Agora vou gerar todos os relatórios finais e o índice master atualizado.
Rodada 2C completa. **142/142 MATCH**, 3 supernormalizações corrigidas, **READY_FOR_DEV**. Vou verificar a estrutura final.
## Rodada 2C — Sincronização Canônica Final — Completa

**Status: READY_FOR_DEV | 204 arquivos | 5.1 MB**

---

### O que foi feito na 2C

| Tarefa                                                | Status              |
| ----------------------------------------------------- | ------------------- |
| Regenerar blocked_patches.json (refletir estado real) | ✅ 0 bloqueados      |
| INDEX_MASTER_2B.md com contagens reais                | ✅                   |
| Reconciliar final_corrected/ vs final_json/           | ✅ **142/142 MATCH** |
| final_json_reconciliation_report.md                   | ✅                   |
| Cap 16: intoxicações/abstinências como itens próprios | ✅ Documentado       |
| Corrigir estruturas supernormalizadas                 | ✅ 3 corrigidas      |
| integration_readiness_report.md final                 | ✅                   |

### Correções de Supernormalização

| Transtorno                                   | De                   | Para                   |
| -------------------------------------------- | -------------------- | ---------------------- |
| Transtorno da Fala                           | temporal_topografico | qualitativo_descritivo |
| Transtorno do Movimento Estereotipado        | temporal_topografico | qualitativo_descritivo |
| Transtorno do Desenvolvimento da Coordenação | temporal_topografico | qualitativo_descritivo |

### Estrutura Final (204 arquivos)

dsm-reducao/
├── source/                    21 originais (2.6M) — inalterados
├── final/                     21 fichas Rodada 1
├── final_corrected/           21 fichas corrigidas (2B)
├── final_json/                21 JSON (142 itens, 360K)
├── registry/                  42 arquivos originais
├── normalized_registry/       3 consolidados (50 entradas)
├── audit/                     21 auditorias
├── normalization/             46 patches + reports + schemas
├── normalization_applied/     6 relatórios finais
├── INDEX_MASTER.md            Índice Rodada 1
└── INDEX_MASTER_2B.md         Índice Rodada 2C


### Métricas Finais

| Métrica                       | Valor      |
| ----------------------------- | ---------- |
| FULL                          | 79         |
| SHORT                         | 63         |
| MINIMAL                       | 26         |
| EXCLUDE                       | 24         |
| Renderizáveis                 | **142**    |
| Registry                      | 50         |
| Patches CRITICAL aplicados    | 4/4        |
| Patches totais aplicados      | 23         |
| Bloqueados                    | 0          |
| Mismatches                    | 0          |
| Supernormalizações corrigidas | 3          |
| Validações                    | 11/11 PASS |

### Artefatos Principais para o Frontend

1. **final_json/*.json** — 142 transtornos com schema canônico
2. **normalized_registry/minimal_all.json** — 26 categorias residuais
3. **normalized_registry/excluded_all.json** — 24 exclusões
4. **INDEX_MASTER_2B.md** — Índice consolidado
5. **normalization_applied/integration_readiness_report.md** — Relatório de readiness




qui., 28 de mai. às 11:39

Kimi_Agent_DSM二轮修订 (4).zip
Arquivo zip
aq

está assim a pasta quais devem ir pra produção teste?


Resposta do aplicativo recebida
Pensou por 1m 9s
Agora sim — indexado corretamente. Conferi a branch Projetos do gtellapolinario/dsm_api e o Codex já montou a base FastAPI/Postgres/pgvector, não só os dados.

O que existe agora
O README.md já descreve o repositório como base operacional DSM-5, com a release em:

data/dsm/releases/dsm5_operational_2026_05_28/
  final_json/
  normalized_registry/
  INDEX_MASTER_2B.md
  manifest.json
e documenta os comandos de validação/importação usando --release-path. 


O manifest.json está correto e traz:

version_id: dsm5_operational_2026_05_28
FULL: 79
SHORT: 81
renderable: 160
minimal: 26
exclude: 24
registry: 50
com caminhos relativos para final_json, minimal_all.json, excluded_all.json e INDEX_MASTER_2B.md. 


Backend
O projeto está em Python/FastAPI, com dependências esperadas:

fastapi
uvicorn
sqlalchemy[asyncio]
asyncpg
alembic
pydantic
pydantic-settings
pgvector
openai
Isso está no pyproject.toml. 


O app/main.py registra rotas para:

health
dsm_versions
dsm_documents
dsm_registry
dsm_search
dsm_rag
ingestion
Ou seja, a estrutura principal já foi criada. 


Banco e Docker
O docker-compose.yml usa:

pgvector/pgvector:pg16
com serviço postgres e serviço api, rodando:

alembic upgrade head && uvicorn app.main:app --host 0.0.0.0 --port 8000
Isso está bem alinhado com a arquitetura que discutimos. 


O Dockerfile é simples e funcional: instala o projeto via pip install -e . e roda Uvicorn. 


Migração
A migração inicial existe em:

alembic/versions/20260528_0001_initial.py
Ela habilita:

CREATE EXTENSION IF NOT EXISTS vector
CREATE EXTENSION IF NOT EXISTS pgcrypto
e cria as tabelas:

diagnostic_versions
diagnostic_documents
diagnostic_registry
diagnostic_chunks
Também cria índices GIN para document e search_vector, além de HNSW para embeddings. 


Modelos
Os modelos SQLAlchemy estão coerentes:

DiagnosticVersion
DiagnosticDocument
DiagnosticRegistry
DiagnosticChunk
com JSONB, TSVECTOR e Vector(settings.embedding_dimensions) para embeddings. 


Ingestão
O script de importação já aceita:

python -m app.scripts.import_dsm \
  --release-path data/dsm/releases/dsm5_operational_2026_05_28 \
  --activate
Ele lê o manifest.json, resolve os caminhos relativos e monta o DsmImportRequest. 


O serviço DsmIngestionService faz o essencial:

- carrega final_json
- carrega minimal_all/excluded_all
- valida estruturas, severity.type e ui_mode
- insere diagnostic_versions
- insere diagnostic_documents
- insere diagnostic_registry
- gera chunks
- gera embeddings se ativado
- preenche search_vector
- ativa versão
Também bloqueia documento renderizável sem diagnostic_rule, categoria inválida ou render_structured_interview != true. 


Busca
A rota /api/dsm/search existe e chama HybridSearchService. 


O serviço híbrido combina FTS e vetor, resolve version_id = active, cai para erro controlado se busca vetorial for pedida sem embeddings, e calcula hybrid_score. 


Minha leitura
O Codex fez um trabalho bom. A base já está arquiteturalmente no caminho certo.

Agora eu faria a próxima revisão por execução, não por leitura:

docker compose up -d postgres
alembic upgrade head
python -m app.scripts.import_dsm \
  --release-path data/dsm/releases/dsm5_operational_2026_05_28 \
  --activate
uvicorn app.main:app --reload
Depois testar:

curl http://localhost:8000/api/health

curl http://localhost:8000/api/dsm/versions/current

curl "http://localhost:8000/api/dsm/documents?chapter_id=01"

curl -X POST http://localhost:8000/api/dsm/search \
  -H "Content-Type: application/json" \
  -d '{"query":"diferença entre tique transitório e Tourette","version_id":"active","top_k":5,"use_fts":true,"use_vector":false}'
Pontos que eu revisaria em seguida
Migração HNSW com embeddings nulos
Pode funcionar, mas eu testaria se o índice HNSW cria sem problema antes de haver vetores. Caso dê erro, moveria o índice vetorial para script separado.

search_vector com :lang parametrizado
O SQL usa to_tsvector(:lang, ...). Dependendo do driver/Postgres, regconfig parametrizado pode exigir cast. Se falhar, corrigir para to_tsvector(:lang::regconfig, ...) ou montar com whitelist.

Foreign key de chunks
DiagnosticChunk tem version_id como FK, mas document_item_id não é FK composta para diagnostic_documents(version_id, item_id). Não é obrigatório, mas seria mais rigoroso.

README ainda é curto
Agora precisa documentar Docker, Alembic, importação, endpoints e exemplo de busca.

Rodar testes reais
A leitura está boa; a verdade agora é execução.

Veredito: não é mais “repo de dados apenas”; já é uma API FastAPI DSM operacional em estágio inicial. O próximo passo é rodar localmente, importar a release e corrigir os erros que aparecerem em runtime.



generar_todos_transtornos_v2.py
Python
esse é o script da apliação que gerava todos os componentes ele pode ser usado agora nesse caso ? digo nos json direto pra teste e depois pela vps 


scaffold-doencas.js
JavaScript
e esse?


disease-registry.ts
TypeScript
esse aquivo então precisa ser reescrito tb 

sáb., 30 de mai. às 11:26

Código colado(2).json
Arquivo
todo esse trabalho empobreeu a aplçicação veja o json de antes e compare com agora 


Texto colado(46).txt
Documento

Texto colado (2)(2).txt
Documento

Texto colado (3).txt
Documento

Markdown (4).md colado
Arquivo

Código colado (5).json
Arquivo
existem 21 scripts que faziam o json a partir do md a ideia era melhorar os md par. por exemplo esse fazia o capitulo 2 das esquizofrenias 

e ele usava esse .md 

isso gerou esse json 


na rodada 2b foi usado esse .md 

o json em tamanho ficou 10% 


Markdown(7).md colado
Arquivo

Markdown (2)(1).md colado
Arquivo
pensei algo aqui de passar os scripts ts de cada capitulo nos .md depurados e comparar. veja esse .md depurado no mesmo capitulo que mandei agora e aqui tinha a parcial isso é da rodada 2c 


sáb., 30 de mai. às 14:31

Texto colado(47).txt
Documento
eu gerei aqui o comparativo:

comparei o json completo antigo com outro feito com o .mf trabalhado 


Pensou por 10s
O plano está na direção correta, mas eu faria uma correção arquitetural importante: não alteraria manifest.json.final_json para apontar para enriched_final_json se esse mesmo manifest é usado pela API/VPS. Isso pode quebrar a ingestão do backend, porque final_json hoje representa o artefato operacional reduzido, enquanto o novo enriched_final_json será um artefato rico de UI.

O comparativo que você gerou prova que o caminho dos scripts TS antigos + .md trabalhado preserva quase tudo: as diferenças detectadas foram essencialmente notes → notas, examples_clinicos → exemplos_clinicos e inclusão de metadados_globais.notas_agente_globais: null nos transtornos. Isso indica que o pipeline rico continua viável e não empobrece a aplicação. 


Veredito
Plano conceitualmente correto.
Mas não deve substituir final_json.
Deve criar um artefato paralelo para UI.
A separação correta fica:

final_json/
  → API FastAPI
  → Postgres
  → RAG
  → busca
  → registry operacional

enriched_final_json/ ou rich_enriched_json/
  → geração dos componentes React/TSX
  → src/doencas
  → disease-registry.generated.ts
Correção principal no plano
Em vez de:
"final_json": "./enriched_final_json"
Use:

"final_json": "./final_json",
"enriched_ui_json": "./enriched_final_json"
ou melhor:

"operational_json": "./final_json",
"frontend_enriched_json": "./enriched_final_json"
Motivo: final_json já tem sentido técnico consolidado na API. Se você muda o ponteiro, o importador da API pode receber JSON rico TranstornoDSM, com clusters_sintomas, criterios_condicionais, prevalencia, curso_desenvolvimento, etc., quando ele espera o schema operacional com category, diagnostic_rule, criteria, ui_mode, severity, key_questions. A chance de bagunçar a API é alta.

Plano revisado
1. Criar enrich_release.py
Correto.

Mas ele deve gerar:

TESTE/dsm/output/enriched_final_json/
sem substituir:

TESTE/dsm/output/final_json/
A saída deve preservar o JSON rico antigo e anexar um bloco operacional.

Exemplo:

{
  "$schema_version": "1.0.0",
  "meta": {},
  "estrutura_geral": "polythetic_com_ancora",
  "clusters_sintomas": [],
  "criterios_condicionais": [],
  "subtipos": {},
  "especificadores": [],
  "gravidade": {},
  "hierarquia": {},
  "dominios_impacto": [],
  "diagnostico_diferencial": [],
  "comorbidades_frequentes": [],
  "instrumentos_complementares": [],
  "prevalencia": {},
  "curso_desenvolvimento": {},
  "template_prontuario": {},
  "metadados_globais": {},

  "operacional": {
    "category": "FULL",
    "estrutura_diagnostica": "polythetic_clusters_assimetricos",
    "render_structured_interview": true,
    "ui_mode": "structured_full",
    "diagnostic_rule": "...",
    "key_questions": [],
    "critical_differentials": [],
    "source_trace": {}
  }
}
Assim a UI continua rica, e o backend continua limpo.

2. Não hardcodar “160”
Você escreveu “apenas para os 160 transtornos renderizáveis”. Isso pode estar correto na sua pasta atual, mas o script não deve assumir esse número. Ele deve contar dinamicamente:

renderizáveis = FULL + SHORT encontrados em final_json/
E o relatório deve dizer:

FULL: N
SHORT: N
renderizable_total: N
MINIMAL: N
EXCLUDE: N
unmatched: N
Se o número esperado for 160, o script pode receber:

--expected-renderable 160
Mas não deve embutir isso.

3. Resolver IDs por alias map explícito
Essa parte do plano é boa, mas precisa ser rígida. Não deixe o script “adivinhar” demais.

Crie um arquivo:

dsm/output/id_aliases.json
Exemplo:

{
  "transtorno_esquizoafe_tivo": "transtorno_esquizoafetivo",
  "catatonia_transtorno_catatônico": "catatonia_associada_a_outro_transtorno_mental"
}
O script deve fazer:

match exato
→ alias explícito
→ normalização slug simples
→ se ainda não achar: UNMATCHED
Nunca fazer merge silencioso por similaridade textual sem relatório. Isso é pedir para “transtorno psicótico breve” casar com “transtorno psicótico induzido” num dia ruim.

4. Cuidado com “transtornos novos herdarão SHORT”
Esse ponto é perigoso:

Transtornos novos que não estão no minimal nem exclude herdarão comportamento renderizável SHORT.

Eu mudaria para:

Transtornos novos não classificados devem ir para REVIEW_REQUIRED,
não para SHORT automaticamente.
Só podem virar SHORT se estiverem em uma allowlist:

{
  "force_short": [
    "catatonia_associada_a_outro_transtorno_mental",
    "transtorno_catatonico_devido_a_outra_condicao_medica"
  ]
}
Porque SHORT significa “renderizável”. Isso é decisão clínica/de produto, não fallback.

5. gen3.py deve receber explicitamente a fonte rica
Em vez de depender do manifest.final_json, rode assim:

python3 dsm/output/gen3.py \
  --release-path dsm/output \
  --source enriched_final_json \
  --app-dir . \
  --overwrite
Ou:

python3 dsm/output/gen3.py \
  --json-path dsm/output/enriched_final_json \
  --registry-path dsm/output/normalized_registry \
  --app-dir . \
  --overwrite
O gen3.py deve saber que está lendo TranstornoDSM enriquecido, não DsmOperationalDocument.

Plano revisado de execução
1. Rodar os scripts TS antigos sobre os .md trabalhados.
2. Gerar rich JSON completo em dsm/output/json/.
3. Preservar final_json/ operacional 2B/2C.
4. Rodar enrich_release.py:
   - lê dsm/output/json/
   - lê dsm/output/final_json/
   - lê normalized_registry/minimal_all.json
   - lê normalized_registry/excluded_all.json
   - cruza por ID/alias
   - preserva estrutura rica
   - adiciona bloco operacional
   - gera enriched_final_json/
   - gera relatório de match/mismatch
5. Não substituir final_json no manifest.
6. Adicionar no manifest:
   "enriched_ui_json": "./enriched_final_json"
7. Rodar gen3.py apontando explicitamente para enriched_final_json.
8. Gerar componentes.
9. Gerar disease-registry.generated.ts só com FULL/SHORT.
10. Gerar residual-registry.generated.ts com MINIMAL/EXCLUDE.
Validações obrigatórias do enrich_release.py
O relatório deve bloquear se houver:

- rich item sem id
- operational item sem id
- FULL/SHORT sem rich match
- rich item classificado como EXCLUDE entrando no disease-registry
- MINIMAL/EXCLUDE gerando componente principal
- alias usado sem registro no relatório
- diferença crítica de código DSM/CID
- mudança de estrutura_geral sem revisão
E deve permitir:

- acréscimo de bloco operacional
- correção de chave notes → notas
- correção de examples_clinicos → exemplos_clinicos
- acréscimo de metadados ausentes
Forma ideal do relatório
ENRICHMENT_REPORT.md

Resumo:
- rich_items: 12
- operational_items: 8
- matched_renderable: 8
- minimal: X
- excluded: Y
- unmatched_rich: 4
- unmatched_operational: 0
- aliases_used: 2
- blocked: 0

Por transtorno:
- transtorno_delirante
  status: MATCHED
  category: FULL
  rich_preserved: true
  operacional_added: true
  alias_used: false
Ajuste no seu plano original
Eu reescreveria assim:

## Alteração importante

Não modificar `"final_json"` no `manifest.json`.

Adicionar:

```json
"enriched_ui_json": "./enriched_final_json"
O campo final_json continua apontando para o JSON operacional usado pela API.

O gen3.py deve usar enriched_ui_json, não final_json.


# Veredito final

Seu plano é bom, mas com duas travas:

```txt
1. Não substituir final_json.
2. Não classificar novos itens como SHORT automaticamente.
A solução definitiva é exatamente essa:

JSON rico antigo / scripts TS antigos
        +
final_json operacional 2B/2C
        ↓
enriched_final_json
        ↓
gen3.py
        ↓
componentes ricos e registry correto
Isso preserva a aplicação e ainda aproveita a normalização operacional. É a primeira solução que não tenta amputar um lado para salvar o outro.


não esta sendo usado esta em montagem ainda

Pensou por 4s
Então muda a restrição.

Se essa release ainda não está sendo consumida pela API/VPS, você tem liberdade para redesenhar o contrato agora. Nesse caso, o plano de apontar o manifest.json para enriched_final_json é aceitável desde que você assuma que esta release será a release da UI, não a release operacional pura.

O que eu manteria é a distinção semântica dentro do próprio manifest para não criar confusão futura.

Decisão prática
Como está “em montagem”, eu faria assim:

{
  "version_id": "dsm5_operational_2026_05_28",
  "paths": {
    "final_json": "./enriched_final_json",
    "operational_json": "./final_json",
    "minimal_registry": "./normalized_registry/minimal_all.json",
    "excluded_registry": "./normalized_registry/excluded_all.json"
  }
}
Assim você pode deixar o gen3.py usando manifest.paths.final_json, mas ainda preserva o final_json reduzido como referência operacional.

Ou seja:

manifest.paths.final_json
  → usado pelo gerador de componentes

manifest.paths.operational_json
  → usado futuramente pela API/RAG, se necessário
Se a API ainda não usa nada, ótimo: agora é a hora certa de consertar a nomenclatura.

O plano fica válido com ajustes
Seu plano:

rich JSONs em dsm/output/json
poor JSONs em dsm/output/final_json
normalized_registry/*.json
        ↓
enrich_release.py
        ↓
enriched_final_json/
        ↓
manifest.json
        ↓
gen3.py
        ↓
componentes React
Está correto para o objetivo atual.

O ponto forte é que o comparativo mostrou que o pipeline rico continua preservando praticamente toda a estrutura; as diferenças detectadas foram correções de chave e acréscimo de metadado, não perda estrutural. 


Como eu definiria oficialmente agora
dsm/output/json/
Fonte rica bruta gerada pelos scripts TS antigos:

TranstornoDSM completo
Contém todos os transtornos ricos, inclusive os que talvez não sejam renderizados.

dsm/output/final_json/
Fonte operacional reduzida da rodada 2B/2C:

FULL / SHORT / estrutura_diagnostica / ui_mode / diagnostic_rule
Serve como classificador e camada operacional.

dsm/output/enriched_final_json/
Fonte final para UI:

TranstornoDSM rico + bloco operacional
Esta é a pasta que o gen3.py deve usar.

normalized_registry/
Define o que não entra na UI principal:

MINIMAL
EXCLUDE
Manifest recomendado
Eu usaria algo assim:

{
  "version_id": "dsm5_enriched_ui_2026_05_28",
  "label": "DSM-5 Enriched UI Release",
  "status": "development",
  "release_kind": "frontend_enriched",
  "paths": {
    "final_json": "./enriched_final_json",
    "enriched_final_json": "./enriched_final_json",
    "rich_source_json": "./json",
    "operational_json": "./final_json",
    "minimal_registry": "./normalized_registry/minimal_all.json",
    "excluded_registry": "./normalized_registry/excluded_all.json",
    "index": "./INDEX_MASTER_2B.md"
  },
  "notes": [
    "final_json aponta para enriched_final_json nesta fase porque o consumidor principal é o gerador de componentes React.",
    "operational_json preserva a saída reduzida 2B/2C para uso futuro em API/RAG.",
    "MINIMAL e EXCLUDE não devem gerar componentes principais."
  ]
}
Sim, nesse cenário pode mudar final_json, porque o contrato ainda não cristalizou.

Cuidado só com uma coisa
O enriched_final_json precisa preservar o formato esperado pelo gen3.py.

Não gere assim:

{
  "items": []
}
se o gen3.py espera:

{
  "capitulo_id": "02",
  "capitulo_nome": "...",
  "transtornos": []
}
Pelo seu JSON rico antigo, o formato correto parece ser:

{
  "$schema_version": "1.0.0",
  "capitulo_id": "02",
  "capitulo_nome": "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
  "transtornos": [
    {
      "$schema_version": "1.0.0",
      "meta": {},
      "estrutura_geral": "...",
      "clusters_sintomas": [],
      "criterios_condicionais": [],
      "gravidade": {},
      "...": "..."
    }
  ]
}
Então o enrich_release.py deve produzir esse formato, não o formato reduzido items.

Regra de merge
Para cada transtorno rico:

1. pega meta.id
2. procura no operational final_json por id equivalente
3. se achou FULL/SHORT:
   - mantém o objeto rico inteiro
   - adiciona operacional
   - marca renderizable = true

4. se está em minimal_all:
   - não entra no enriched_final_json principal
   - entra em residual registry

5. se está em excluded_all:
   - não entra no enriched_final_json principal
   - entra em residual registry

6. se não achou em lugar nenhum:
   - vai para REVIEW_REQUIRED
   - não vira SHORT automático
Eu ainda manteria a trava contra “SHORT automático”. Mesmo em montagem, isso evita lixo entrando como componente estruturado.

Estrutura de saída ideal
dsm/output/
  json/
    01_...json
    02_...json

  final_json/
    01_...json
    02_...json

  enriched_final_json/
    01_...json
    02_...json

  normalized_registry/
    minimal_all.json
    excluded_all.json

  enrichment_reports/
    01_report.md
    02_report.md
    MASTER_ENRICHMENT_REPORT.md

  manifest.json
Ajuste no passo final
Você escreveu:

python3 dsm/output/gen3.py \
  --release-path dsm/output \
  --app-dir . \
  --overwrite
Ok, desde que o gen3.py leia:

manifest.paths.final_json
e agora esse path aponte para:

./enriched_final_json
Se o gen3.py estiver hardcoded para final_json/, aí há duas opções:

Opção A: ajustar gen3.py para ler manifest.paths.final_json
Opção B: copiar enriched_final_json para final_json temporariamente
Eu faria a opção A. Hardcode foi o que nos trouxe até essa pequena ópera barroca.

Veredito
Como ainda está em montagem:

Sim, pode atualizar o manifest para apontar final_json → enriched_final_json.
Mas faça com estas condições:

1. preservar operational_json → ./final_json;
2. manter enriched_final_json no formato rico TranstornoDSM;
3. não transformar MINIMAL/EXCLUDE em componentes;
4. não classificar unmatched como SHORT automaticamente;
5. gerar relatório de match/mismatch;
6. fazer gen3.py consumir manifest.paths.final_json, não path hardcoded.
Essa solução é coerente: a release passa a ser uma release enriquecida de UI, e o JSON operacional reduzido vira uma camada auxiliar, não a fonte principal.



Texto colado(48).txt
Documento
veja o json enriquecido 

Pensou por 45s
Agora sim: esse JSON está no caminho certo.

Ele preserva a estrutura rica da aplicação — clusters_sintomas, criterios_condicionais, subtipos, especificadores, gravidade, hierarquia, dominios_impacto, diagnostico_diferencial, prevalencia, curso_desenvolvimento, template_prontuario — e adiciona os campos operacionais no topo: category, ui_mode, render_structured_interview e id. Isso é exatamente a ponte que faltava entre o JSON antigo rico e o JSON operacional reduzido. 


Pelo que analisei do arquivo completo, o capítulo 2 enriquecido tem:

items: 11
FULL: 6
SHORT: 5
Com itens como:

transtorno_delirante                         FULL
transtorno_psicotico_breve                   SHORT
transtorno_esquizofreniforme                 FULL
esquizofrenia                                FULL
transtorno_esquizoafetivo                    FULL
psicotico_induzido_substancia                SHORT
psicotico_devido_condicao_medica             SHORT
especificador_catatonia                      SHORT
transtorno_catatonico_devido_outra_condicao_medica SHORT
outro_espectro_esquizofrenia_especificado    FULL
espectro_esquizofrenia_nao_especificado      FULL
O que está bom
1. A riqueza clínica voltou
O transtorno_delirante, por exemplo, está com:

clusters_sintomas: 1
criterios_condicionais: 4
subtipos: 7
especificadores: 2
diagnostico_diferencial: 4
prevalencia: presente
curso_desenvolvimento: presente
template_prontuario: presente
Isso é o que a UI rica precisa renderizar. O mesmo vale para psicótico breve, esquizofreniforme, esquizofrenia e esquizoafetivo: estão com árvore clínica suficiente para componente funcional, não casca decorativa.

2. Os campos operacionais foram anexados sem destruir o modelo antigo
Você colocou:

"category": "FULL",
"ui_mode": "structured_full",
"render_structured_interview": true,
"id": "transtorno_delirante"
Isso deixa o gen3.py decidir:

entra no disease-registry?
qual modo de UI?
compacto ou full?
renderiza entrevista?
sem sacrificar o TranstornoDSM.

3. metadados_globais.notas_agente_globais está presente
Isso corrige a diferença que apareceu no comparativo anterior. Boa normalização.

Problemas a corrigir antes de generalizar para os 21 capítulos
1. Formato de contêiner: items vs transtornos
O JSON enriquecido usa:

{
  "chapter_id": "02",
  "chapter_name": "...",
  "items": []
}
Mas o JSON rico antigo usava algo como:

{
  "$schema_version": "1.0.0",
  "capitulo_id": "02",
  "capitulo_nome": "...",
  "transtornos": []
}
Se o gen3.py estiver preparado para items, sem problema. Se ele ainda espera transtornos, vai quebrar ou gerar zero componentes.

Minha recomendação: suporte os dois formatos no gen3.py:

items = payload.get("items") or payload.get("transtornos") or []
chapter_id = payload.get("chapter_id") or payload.get("capitulo_id")
chapter_name = payload.get("chapter_name") or payload.get("capitulo_nome")
Mais seguro ainda: no enrich_release.py, gerar os dois aliases:

{
  "$schema_version": "1.0.0",
  "chapter_id": "02",
  "chapter_name": "...",
  "capitulo_id": "02",
  "capitulo_nome": "...",
  "items": [...],
  "transtornos": [...]
}
Mas cuidado: duplicar o array inteiro no mesmo arquivo dobra tamanho. Eu preferiria ajustar o gen3.py.

2. estrutura_geral ainda diverge do operacional 2C
Exemplo importante:

"estrutura_geral": "categorico_por_subtipo"
no Transtorno Delirante, mas a normalização operacional 2C parecia classificar esse item como monothetic_puro.

Isso não é necessariamente erro. Para a UI rica, categorico_por_subtipo faz sentido porque há subtipos delirantes; para a regra diagnóstica estrita, monothetic_puro também faz sentido. Mas você precisa representar os dois níveis, senão a camada clínica e a camada operacional se atropelam.

Eu adicionaria:

"operacional": {
  "estrutura_diagnostica": "monothetic_puro",
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "diagnostic_rule": "...",
  "source_trace": {}
}
E manteria:

"estrutura_geral": "categorico_por_subtipo"
para o frontend legado.

Regra:

estrutura_geral = como o componente rico deve renderizar
operacional.estrutura_diagnostica = como a regra DSM foi normalizada
3. outro_espectro... e nao_especificado estão como FULL
Esse é o maior alerta.

No arquivo, estes dois aparecem como:

outro_espectro_esquizofrenia_especificado    FULL / structured_full
espectro_esquizofrenia_nao_especificado      FULL / structured_full
Mas eles têm:

clusters_sintomas: 0
criterios_condicionais: 0
diagnostico_diferencial: 0
prevalencia: ausente
curso: ausente
estrutura_geral: fallback_classe
Esses dois não deveriam entrar no seletor principal como FULL. Eles são candidatos naturais a:

MINIMAL
ou, no máximo:

SHORT + render_structured_interview=false
Pelo seu próprio critério anterior, fallback sem critérios estruturados polui a UI. Então eu bloquearia:

category=FULL
quando estrutura_geral=fallback_classe
e clusters_sintomas.length === 0
e criterios_condicionais.length === 0
Correção sugerida:

"category": "MINIMAL",
"ui_mode": "registry_only",
"render_structured_interview": false
Ou retirar de enriched_final_json e colocar em residual_registry.

4. Catatonia precisa de decisão semântica
Você tem:

especificador_catatonia
transtorno_catatonico_devido_outra_condicao_medica
Ambos como SHORT.

Isso é aceitável se a UI for renderizar catatonia como avaliação estruturada observacional. Mas eu separaria os dois no relatório:

especificador_catatonia = SHORT, structured_compact, renderiza checklist psicomotor
transtorno_catatonico_devido_outra_condicao_medica = SHORT, etiológico/médico, exige vínculo fisiopatológico
O primeiro é especificador transversal; o segundo é transtorno devido a condição médica. Não são a mesma coisa.

5. Campo id duplicado fora e dentro de meta
Isso está bom para ergonomia, mas precisa de validação:

item.id === item.meta.id
No arquivo que vi, está consistente. Mantenha essa validação como obrigatória.

Ajuste que eu faria no formato final
Eu deixaria cada item assim:

{
  "$schema_version": "1.0.0",
  "id": "transtorno_delirante",
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,

  "meta": {},
  "estrutura_geral": "categorico_por_subtipo",
  "clusters_sintomas": [],
  "criterios_condicionais": [],
  "subtipos": {},
  "especificadores": [],
  "gravidade": {},
  "hierarquia": {},
  "dominios_impacto": [],
  "diagnostico_diferencial": [],
  "comorbidades_frequentes": [],
  "instrumentos_complementares": [],
  "prevalencia": {},
  "curso_desenvolvimento": {},
  "template_prontuario": {},
  "metadados_globais": {},

  "operacional": {
    "id": "transtorno_delirante",
    "category": "FULL",
    "estrutura_diagnostica": "monothetic_puro",
    "ui_mode": "structured_full",
    "render_structured_interview": true,
    "diagnostic_rule": "...",
    "key_questions": [],
    "critical_differentials": [],
    "source_trace": {}
  }
}
Assim você não perde compatibilidade com o frontend e ainda não mistura conceitos.

Validador que você precisa agora
Antes de rodar os 21 capítulos, crie uma validação com estas regras:

BLOCKER:
- item sem id
- item.id != item.meta.id
- FULL/SHORT com render_structured_interview != true
- FULL/SHORT sem clusters_sintomas e sem criterios_condicionais
- FULL com estrutura_geral = fallback_classe
- MINIMAL/EXCLUDE dentro de enriched_final_json principal
- ausência de meta, gravidade, hierarquia, template_prontuario
- arquivo sem items/transtornos

WARNING:
- estrutura_geral != operacional.estrutura_diagnostica
- prevalencia ausente
- curso_desenvolvimento ausente
- diagnostico_diferencial vazio
- comorbidades_frequentes vazio
- instrumentos_complementares vazio
Veredito final
A versão enriquecida está muito melhor e recupera a aplicação.
Mas antes de gerar tudo:

1. ajustar gen3 para ler `items` ou `transtornos`;
2. adicionar bloco `operacional`;
3. tirar fallback_classe do FULL;
4. não deixar “outro especificado/não especificado” no registry principal;
5. criar validador de release enriquecida.
A estrutura agora finalmente está reconciliando os dois mundos: UI rica + classificação operacional. O resto é saneamento, não reconstrução.



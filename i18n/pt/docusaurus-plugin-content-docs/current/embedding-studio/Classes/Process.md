---
id: process
title: Processo
---

# Processo

A classe `Process` orquestra todo o pipeline de embedding: ela percorre entidades 4D, renderiza texto a partir de seus campos usando uma [Definition](Definition.md), chama a API de embeddings através de um [Embedder](Embedder.md) e armazena o `4D.Vector` resultante em cada entidade.

Para renderizar ou embutir sob demanda sem persistência (vetores de consulta de busca, prévias de frases), veja [StudioEmbedder](StudioEmbedder.md).

## Propriedades

| Nome da Propriedade | Tipo                                                    | Descrição                                              |
|---------------------|---------------------------------------------------------|--------------------------------------------------------|
| `settings`          | [Settings](Settings.md)               | As configurações (definitions, tamanho do lote, opções de validação de frases). |
| `embedder`          | [Embedder](Embedder.md)               | O mecanismo de chamada da API. Stateless e intercambiável.         |
| `options`           | Object                                                  | Objeto de opções de runtime (veja [Objeto Options](#options-object) abaixo). |

### Objeto Options

| Chave            | Tipo      | Descrição                                                                 |
|------------------|-----------|---------------------------------------------------------------------------|
| `onProgress`     | 4D.Function | Chamado após cada lote processado com `{definition, report}`.             |
| `onSuccess`      | 4D.Function | Chamado uma vez ao final quando `report.success = True`, com `{report, success, errors}`. |
| `onError`        | 4D.Function | Chamado uma vez ao final quando `report.success = False`, com `{report, success, errors}`. |
| `onTerminate`    | 4D.Function | Chamado uma vez ao final em todos os casos (após `onSuccess`/`onError`), com `{report, success, errors}`. |
| `dryRun`         | Boolean   | Se `True`, executa a lógica de seleção/filtro mas pula chamadas de API e salvamento das entidades. |
| `force`          | Boolean   | Se `True`, recalcula toda entidade ignorando filtro de vetor nulo / dirty-flag. |
| `debug`          | Boolean   | Se `True`, emite entradas adicionais de log de diagnóstico.                        |
| `pauseIndexes`   | Boolean | Se `True`, a manutenção dos índices na tabela alvo é pausada durante a execução de um lote de `processEntitySelection`, sendo retomada logo após (ou em caso de saída antecipada/erro crítico). Padrão `False` — os índices permanecem inalterados. Veja [Pausando índices](#pausing-indexes) antes de habilitar. |
| `waitForIndexes` | Boolean | Usado apenas com `pauseIndexes`. Se `True`, a retomada dos índices bloqueia até que sejam reconstruídos. Padrão `False` — a retomada é assíncrona (índices reconstruídos em background). |
| `shouldCancel`   | 4D.Function | Predicado chamado entre lotes durante o processamento da seleção. Retornar `True` interrompe a execução de forma graciosa (cancelamento cooperativo) — o que [`Scheduler.cancel()`](Scheduler.md#cancel) utiliza. |
| `embedder`       | [Embedder](Embedder.md) | Injeta um embedder customizado (caso contrário, um padrão é criado). |

## Construtor da classe

Cria uma instância do orquestrador.

| Nome do Argumento | Tipo                                      | Descrição                                                         |
|-------------------|-------------------------------------------|-------------------------------------------------------------------|
| *settings*        | [Settings](Settings.md) | Opcional. Se omitido, as configurações são carregadas do padrão `Settings/embeddings.json`. |
| *options*         | Object                                    | Opções de runtime opcionais (veja tabela acima).                         |

```4d
// Mais simples — usa padrões
var $p:=cs.EmbeddingStudio.Process.new()

// Com configurações explícitas
var $p:=cs.EmbeddingStudio.Process.new($settings)

// Com opções
var $p:=cs.EmbeddingStudio.Process.new($settings; {\
	force: True; \
	onProgress: Formula(ALERT("chunk done: "+String($1.report.entitiesUpdated)))})
```

## Funções de processamento em lote

### process()

**process**(*definition* : Variant) : [ProcessResult](ProcessResult.md)

Processa uma, várias ou todas as entradas de [Definition](Definition.md) contra o conteúdo completo de seu dataclass alvo.

| Argumento        | Tipo                                                                        | Descrição                                                                 |
|------------------|-----------------------------------------------------------------------------|---------------------------------------------------------------------------|
| *definition*     | `Null`, [Definition](Definition.md), `4D.DataClass`, objeto simples ou Collection | Veja [resolução do process()](#process-resolution). `Null` → toda definition nas configurações. |
| Resultado da função | [ProcessResult](ProcessResult.md)                         | Estatísticas e detalhamento por erro.                                         |

```4d
// Toda definition nas configurações
var $r:=$p.process()

// Uma definition específica
var $r:=$p.process($def)

// Múltiplas definitions
var $r:=$p.process([$def1; $def2])

// Toda definition configurada para um dataclass inteiro
var $r:=$p.process(ds.Students)

// Um descritor simples — buscado nas configurações ou criado na hora
var $r:=$p.process({dataclassName: "Students"; vectorName: "student_vector_1"})

// Qualquer mistura — cada item é resolvido independentemente e achatado
var $r:=$p.process([ds.Students; $def; {dataclassName: "School"; vectorName: "school_vector_1"}])
```

#### Resolução do process()

`process()` não tem contexto de entidade, então resolve cada entrada em objetos [Definition](Definition.md) concretos diretamente das configurações:

| Entrada                                            | Comportamento                                                                                   |
|----------------------------------------------------|-------------------------------------------------------------------------------------------------|
| `Null`                                             | Toda definition nas configurações.                                                               |
| [Definition](Definition.md)                        | Usada como está.                                                                                  |
| `4D.DataClass` (ex: `ds.Students`)                 | Toda definition nas configurações cujo `dataclassName` corresponda ao dataclass.                  |
| `{dataclassName: "..."; vectorName: "..."}`        | A definition salva correspondente, ou — se não encontrada — uma nova `Definition` criada a partir dos campos do objeto (`modelAlias`, `phrase.template`). |
| Collection                                         | Cada item é resolvido com as regras acima e os resultados são **achatados** em uma única collection (um item `4D.DataClass` pode expandir para várias definitions). Itens não suportados são descartados. |
| Qualquer outro                                     | Resultado vazio.                                                                                 |

### processEntity()

**processEntity**(*entity* : 4D.Entity ; *definition* : Variant) : [ProcessResult](ProcessResult.md)

Processa uma única entidade. Caminho rápido — sem chunking, sem filtro no servidor.

| Argumento        | Tipo                                                                                      | Descrição                                                                 |
|------------------|-------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| *entity*         | 4D.Entity                                                                                 | A entidade para (re)calcular os vetores.                                  |
| *definition*     | `Null`, [Definition](Definition.md), Collection, ou `{vectorName: ...}` | Veja [regras de resolução](#definition-resolution). `Null` infere do dataclass da entidade. |
| Resultado da função | [ProcessResult](ProcessResult.md)                                       | Estatísticas e detalhamento por erro.                                         |

```4d
// Auto-resolve toda definition correspondente ao dataclass desta entidade
var $r:=$p.processEntity($entity)

// Definition específica
var $r:=$p.processEntity($entity; $def)

// Apenas pelo nome do vetor (buscado nas configurações para o dataclass da entidade)
var $r:=$p.processEntity($entity; {vectorName: "student_vector_1"})
```

### processEntitySelection()

**processEntitySelection**(*selection* : 4D.EntitySelection ; *definition* : Variant) : [ProcessResult](ProcessResult.md)

Caminho principal para grandes tarefas. Divide a seleção por `settings.batchSize`, envia uma chamada de API por lote, salva cada entidade individualmente.

| Argumento        | Tipo                                                                                      | Descrição                                                                 |
|------------------|-------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| *selection*      | 4D.EntitySelection                                                                        | Entidades a serem processadas. Pré-filtragem pelo chamador é permitida; o pipeline ainda aplica seu filtro de nulo/sujo. |
| *definition*     | `Null`, [Definition](Definition.md), Collection, ou `{vectorName: ...}` | Veja [regras de resolução](#definition-resolution).                             |
| Resultado da função | [ProcessResult](ProcessResult.md)                                       | Estatísticas e detalhamento por erro.                                         |

```4d
var $todo:=ds.Students.query("country = :1"; "FR")
var $r:=$p.processEntitySelection($todo; $def)
```

### Resolução de Definition (contexto de entidade)

O argumento polimórfico *definition* aceito por `processEntity` e `processEntitySelection`. Diferente do [`process()`](#process-resolution), estes têm uma entidade/seleção para inferir o dataclass, então um simples `{vectorName: "..."}` já basta:

| Entrada                                                    | Comportamento                                                                 |
|------------------------------------------------------------|-------------------------------------------------------------------------------|
| `Null`                                                     | Todas as definitions nas configurações cujo `dataclassName` corresponda à entidade/seleção. |
| [Definition](Definition.md)              | Usada como está; o `dataclassName` deve corresponder à entidade/seleção.         |
| `{vectorName: "..."}`                                      | Buscada nas configurações por `vectorName` para o dataclass da entidade/seleção. |
| Collection                                                 | Cada item resolvido usando as regras acima; incompatibilidades são descartadas silenciosamente. |

### Regras de recálculo

Uma entidade é (re)calculada quando **qualquer** das condições abaixo for verdadeira:

- O campo de vetor alvo está `Null`.
- Um campo irmão chamado `{vectorName}_dirty` existe e está `True`.
- A opção `force` está `True`.

O campo dirty é opcional por dataclass. Se não existir, apenas o caso do vetor nulo dispara o recálculo. Após o salvamento bem-sucedido, o pipeline limpa o dirty flag (quando presente).

Para `processEntitySelection`, o filtro é executado como uma consulta ORDA no servidor antes de qualquer chamada de API, então apenas as linhas que realmente precisam de trabalho são carregadas na memória. Para `processEntity`, a verificação é feita em memória na entidade já carregada.

### Pausando índices

Por padrão, os índices da tabela alvo são mantidos normalmente enquanto os vetores são salvos. Com a opção `pauseIndexes`, uma execução em lote chama [`PAUSE INDEXES`](https://developer.4d.com/docs/commands/pause-indexes) na tabela antes de gravar e [`RESUME INDEXES`](https://developer.4d.com/docs/commands/resume-indexes) ao finalizar (também em caso de saída antecipada ou erro crítico).

Fique atento ao que esses comandos fazem:

- `PAUSE INDEXES` desabilita **todos** os índices da tabela (exceto o índice de chave primária), não apenas os de vetor: todo índice de qualquer outro campo da tabela também é pausado. Enquanto pausados, consultas e ordenações nessa tabela, inclusive de outros processos, rodam sem nenhum índice.
- `RESUME INDEXES` então **reconstrói todos esses índices**, para a tabela inteira, não apenas para os registros que foram recalculados. Em uma tabela com vários índices, essa reconstrução pode custar mais do que o tempo economizado durante as gravações.
- Com `waitForIndexes` definido como `True`, a execução bloqueia até a reconstrução terminar; caso contrário, a reconstrução roda em background.
- Esses comandos não podem ser executados em um cliente remoto 4D: nesse caso a opção é ignorada (um aviso é registrado uma vez) e o recálculo ocorre com os índices mantidos normalmente. Execute no servidor, por exemplo através do [Scheduler](Scheduler.md), para utilizá-la.

Habilite apenas para grandes recálculos, como calcular os vetores de uma tabela inteira pela primeira vez.

## Veja também

- [StudioEmbedder](StudioEmbedder.md)
- [Settings](Settings.md)
- [Definition](Definition.md)
- [Embedder](Embedder.md)
- [ProcessResult](ProcessResult.md)
- [Phrase](Phrase.md)
- [Rate Limiting](../RateLimit.md)

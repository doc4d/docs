---
id: embedder
title: Incorporador
---

# Incorporador

A classe `Embedder` é um wrapper leve em torno do [4D AIKit](https://developer.4d.com/docs/aikit/Classes/openai) focado em embeddings. Ela expõe duas funções — uma para um único texto, outra para um lote — e gerencia tentativas com backoff exponencial (respeitando o cabeçalho `Retry-After` quando presente).

Ela é sem estado além da configuração e segura para ser compartilhada entre processos.

## Propriedades

| Nome da Propriedade | Tipo                    | Descrição                                                    |
|---------------------|-------------------------|--------------------------------------------------------------|
| `client`            | cs.AIKit.OpenAI         | O cliente AIKit subjacente usado para requisições HTTP.      |
| `maxRetries`        | Integer                 | Número máximo de tentativas em erros transitórios. Padrão: `3`. |
| `backoffMs`         | Integer                 | Atraso base (ms) entre tentativas. Duplicado a cada tentativa. |

## Construtor da classe

Cria um incorporador. Todas as opções são opcionais.

| Nome do Argumento | Tipo   | Descrição                                                                 |
|-------------------|--------|---------------------------------------------------------------------------|
| *options*         | Object | `{client, maxRetries, backoffMs}` — qualquer campo pode ser omitido.       |

```4d
// Padrão — usa cs.AIKit.OpenAI.new() internamente
var $proc:=cs.EmbeddingStudio.Embedder.new()

// Fornece um cliente AIKit pré-configurado (chave de API personalizada, base URL, etc.)
var $client:=cs.AIKit.OpenAI.new({apiKey: "…"; baseURL: "https://server.ai"})
var $proc:=cs.EmbeddingStudio.Embedder.new({client: $client; maxRetries: 5; backoffMs: 1000})
```

> Se o componente 4D AIKit não estiver carregado (ou for muito antigo para fornecer `OpenAIProviders`), o construtor ainda terá sucesso com um cliente `Null`, e a primeira chamada de `embed()` / `embedBatch()` lançará um erro cujo `message` explica o que está faltando e cuja propriedade `isAIKitMissing` é `True`.

## Funções

### embed()

**embed**(*text* : Text ; *model* : Text) : [cs.EmbeddingStudio.EmbedderResult](EmbedderResult.md)

Incorpora um único texto. Retorna um resultado tipado com o vetor de embedding, uso de tokens e estado de limite de taxa.

| Argumento        | Tipo   | Descrição                                                                 |
|------------------|--------|---------------------------------------------------------------------------|
| *text*           | Text   | O texto a ser vetorizado.                                                 |
| *model*          | Text   | O modelo de embedding a ser usado (ex.: `"text-embedding-3-small"`).      |
| Resultado da função | [cs.EmbeddingStudio.EmbedderResult](EmbedderResult.md) | Wrapper tipado — `.vector` contém o embedding, `.promptTokens` / `.totalTokens` contém o uso, campos de limite de taxa são camelCase simples. |

Lança erro se as tentativas forem esgotadas ou se a API retornar um erro não repetível.

```4d
var $result:=$proc.embed("it rains cats and dogs"; "text-embedding-3-small")
// $result.vector          → 4D.Vector
// $result.promptTokens    → Integer
// $result.totalTokens     → Integer
// $result.remainingTokens → Integer (-1 se desconhecido)
```

### embedBatch()

**embedBatch**(*texts* : Collection ; *model* : Text) : [cs.EmbedderResult](EmbedderResult.md)

Incorpora uma coleção de textos em uma única chamada de API. Retorna um resultado tipado com vetores na mesma ordem dos inputs, uso de tokens e estado de limite de taxa.

| Argumento        | Tipo       | Descrição                                                                 |
|------------------|------------|---------------------------------------------------------------------------|
| *texts*          | Collection | Coleção de Text a ser vetorizada. Vazia ou `Null` retorna um resultado vazio. |
| *model*          | Text       | O modelo de embedding a ser usado.                                        |
| Resultado da função | [cs.EmbedderResult](EmbedderResult.md) | Wrapper tipado — `.vectors` contém a coleção de embeddings, campos de token e limite de taxa são camelCase simples. |

```4d
var $result:=$proc.embedBatch(["hello"; "world"]; "text-embedding-3-small")
// $result.vectors[0]      → 4D.Vector para "hello"
// $result.vectors[1]      → 4D.Vector para "world"
// $result.totalTokens     → Integer (soma do lote)
// $result.remainingTokens → Integer (após esta chamada)
```

## Política de tentativas

Erros transitórios (HTTP 408, 409, 429, 5xx) são repetidos até `maxRetries` vezes.

- Se a resposta contiver um cabeçalho `Retry-After` ou `retry-after-ms`, o incorporador aguardará esse tempo.
- Caso contrário, ele aguardará `backoffMs * 2^attempt`.

Erros não repetíveis são lançados imediatamente — veja [OpenAIError](https://developer.4d.com/docs/aikit/Classes/openaierror) para o formato lançado.

## Veja também

- [EmbedderResult](EmbedderResult.md)
- [Process](Process.md)
- [OpenAIEmbeddingsAPI](https://developer.4d.com/docs/aikit/Classes/openaiembeddingsapi) (AIKit)

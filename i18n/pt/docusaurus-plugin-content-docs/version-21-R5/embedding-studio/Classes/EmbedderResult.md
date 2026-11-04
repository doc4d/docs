---
id: embedderresult
title: EmbedderResult
---

# EmbedderResult

Wrapper tipado para as respostas de `Embedder.embed()` e `Embedder.embedBatch()`. Normaliza as chaves da API em snake_case do OpenAI (`prompt_tokens`, `total_tokens`) para propriedades em camelCase, e achata a estrutura aninhada de rate-limit em propriedades diretas.

Uma única classe lida com resultados únicos e em lote — `embed()` preenche `.vector`, `embedBatch()` preenche `.vectors`.

## Propriedades

### Resultados de embedding

| Propriedade | Tipo       | Padrão | Descrição                                         |
|-------------|------------|--------|---------------------------------------------------|
| `vector`    | 4D.Vector  | Null   | Resultado único de embedding. Nulo em chamadas em lote. |
| `vectors`   | Collection | `[]`   | Resultados de embedding em lote.                  |

### Uso de tokens

| Propriedade      | Tipo    | Padrão | Descrição                        |
|------------------|---------|--------|----------------------------------|
| `promptTokens`   | Integer | `0`    | Tokens de entrada consumidos.    |
| `totalTokens`    | Integer | `0`    | Total de tokens consumidos (entrada + saída). |

### Estado de rate-limit

| Propriedade          | Tipo    | Padrão | Descrição                                               |
|----------------------|---------|--------|---------------------------------------------------------|
| `remainingTokens`    | Integer | `-1`   | Tokens restantes na janela atual. `-1` = desconhecido.  |
| `remainingRequests`  | Integer | `-1`   | Requisições restantes na janela atual. `-1` = desconhecido. |
| `limitTokens`        | Integer | `0`    | Limite de TPM para a conta.                             |
| `limitRequests`      | Integer | `0`    | Limite de RPM para a conta.                             |
| `resetTokens`        | Text    | `""`   | Tempo até o bucket de tokens ser recarregado (ex: `"6m0s"`). |
| `resetRequests`      | Text    | `""`   | Tempo até o bucket de requisições ser recarregado (ex: `"1s"`). |

## Construtor da classe

```4d
// De um resultado real da API (usado internamente pelo Embedder)
var $result:=cs.EmbedderResult.new($aikitResult; True)   // batch
var $result:=cs.EmbedderResult.new($aikitResult; False)   // single

// Resultado vazio (sem chamada de API — ex: batch vazio)
var $result:=cs.EmbedderResult.new()
```

| Argumento   | Tipo    | Descrição                                                                  |
|-------------|---------|----------------------------------------------------------------------------|
| *result*    | Object  | Um objeto com `.vector`/`.vectors`, `.usage`, `.rateLimit` (duck-typed).   |
| *isBatch*   | Boolean | `True` para ler `.vectors`, `False` para ler `.vector`.                    |

O construtor aceita qualquer objeto que exponha o formato esperado — não requer uma classe específica. Isso facilita a construção em testes.

## Uso

```4d
// Embedding único
var $r:=$embedder.embed("hello world"; "text-embedding-3-small")
$r.vector         // → 4D.Vector
$r.promptTokens   // → 6
$r.totalTokens    // → 6

// Embedding em lote
var $r:=$embedder.embedBatch(["hello"; "world"]; "text-embedding-3-small")
$r.vectors.length // → 2
$r.totalTokens    // → 10

// Consciência de rate-limit
$r.remainingTokens   // → 148230 (ou -1 se ainda não conhecido)
$r.resetTokens       // → "6m0s"
```

## Veja também

- [Embedder](Embedder.md) — cria instâncias de EmbedderResult
- [ProcessResult](ProcessResult.md) — relatório em nível de execução que acumula o uso de EmbedderResult
- [Rate Limiting](../RateLimit.md) — como o pipeline utiliza os campos de rate-limit para controle e dimensionamento de lotes

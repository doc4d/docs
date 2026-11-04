---
id: ratelimit
title: Limitação de Taxa
---

# Limitação de Taxa

O pipeline de embedding inclui reconhecimento integrado de limitação de taxa. Quando o provedor da API retorna cabeçalhos de limitação de taxa (como o OpenAI faz), o sistema automaticamente limita as requisições e adapta o tamanho dos lotes para permanecer dentro do orçamento. Provedores que não retornam cabeçalhos de limitação de taxa (por exemplo, Ollama) não são afetados — o pipeline roda em velocidade máxima.

## Como funciona

Cada chamada para [`Embedder.embed()`](Classes/Embedder.md) ou [`Embedder.embedBatch()`](Classes/Embedder.md) retorna um [`EmbedderResult`](Classes/EmbedderResult.md) que carrega o estado de limitação de taxa junto com os vetores de embedding. O pipeline utiliza esses dados em um loop de três etapas:

1. **Pré-checagem de limitação** — antes de enviar um lote, o pipeline verifica se o orçamento de tokens restante é suficiente. Caso não seja, ele aguarda o término da janela de reinicialização antes de prosseguir.
2. **Tamanho de lote adaptativo** — o pipeline calcula o maior lote que cabe dentro de 80% do orçamento de tokens restante. Isso evita atingir o limite máximo, ao mesmo tempo em que utiliza a cota de forma eficiente.
3. **Atualização de estado** — após cada resposta da API, o pipeline registra o novo orçamento restante, calcula uma estimativa média de tokens por entity e utiliza ambos na próxima iteração.

## Campos de limitação de taxa em EmbedderResult

Esses campos são preenchidos a partir dos cabeçalhos de resposta da API. Quando um provedor não os retorna, eles permanecem com seus valores padrão e o pipeline ignora a limitação.

| Campo               | Padrão  | Significado                                         |
|---------------------|---------|-----------------------------------------------------|
| `remainingTokens`   | `-1`    | Tokens restantes na janela atual. `-1` = desconhecido. |
| `remainingRequests` | `-1`    | Requisições restantes na janela atual.              |
| `limitTokens`       | `0`     | Limite de TPM (tokens por minuto).                  |
| `limitRequests`     | `0`     | Limite de RPM (requisições por minuto).             |
| `resetTokens`       | `""`    | Tempo até o balde de tokens ser reabastecido (ex: `"6m0s"`, `"200ms"`). |
| `resetRequests`     | `""`    | Tempo até o balde de requisições ser reabastecido.  |

## Adaptação do tamanho do lote

O pipeline começa com o `batchSize` configurado (em [Settings](Classes/Settings.md), padrão 50). Após a primeira resposta da API fornecer dados de limitação de taxa, o tamanho do lote pode diminuir:

```
nextBatchSize = min( floor(remainingTokens × 0.8 / tokensPerEntity), configBatchSize )
```

- `tokensPerEntity` é estimado a partir do último chunk (`totalTokens / chunkSize`).
- O resultado é limitado a um mínimo de 1 e um máximo de `configBatchSize`.
- Quando `remainingTokens` é desconhecido (`-1`), o tamanho de lote configurado é utilizado como está.

## Espera pré-checagem

Antes de cada lote, o pipeline verifica:

- **Orçamento de tokens**: se `remainingTokens < estimatedTokens × 1.1`, ele aguarda a janela de reinicialização dos tokens.
- **Orçamento de requisições**: se `remainingRequests = 0`, ele aguarda a janela de reinicialização das requisições.

As durações de reinicialização são analisadas a partir do formato de string da API (`"6m0s"` → 360 segundos, `"200ms"` → 1 segundo).

## Provedores sem limitação de taxa

Alguns provedores (Ollama, modelos locais) não retornam cabeçalhos de limitação de taxa. Neste caso:

- `remainingTokens` permanece em `-1` (desconhecido)
- Não ocorre limitação — os lotes rodam em `configBatchSize` sem esperas
- O pipeline funciona de forma idêntica a como era antes do suporte à limitação de taxa ser adicionado

## Veja também

- [EmbedderResult](Classes/EmbedderResult.md) — carrega os campos de limitação de taxa
- [Embedder](Classes/Embedder.md) — encapsula as chamadas de API
- [Process](Classes/Process.md) — orquestra o loop de lotes
- [Settings](Classes/Settings.md) — configuração de `batchSize`

---
id: processresult
title: ProcessResult
---

# ProcessResult

A classe `ProcessResult` é o valor de retorno de cada ponto de entrada em lote de [Process](Process.md) (`process`, `processEntity`, `processEntitySelection`). Ela acumula estatísticas, detalhamento por erro e duração em tempo real.

O orquestrador nunca lança exceções em sua API pública de lote — falhas são registradas aqui e o trabalho continua. O chamador decide o que fazer com elas.

## Propriedades

| Nome da Propriedade     | Tipo       | Descrição                                                              |
|-------------------------|------------|--------------------------------------------------------------------------|
| `definitionsProcessed`  | Integer    | Número de entradas [Definition](Definition.md) processadas. |
| `entitiesConsidered`    | Integer    | Número de entities que passaram pelo filtro "needs recompute".             |
| `entitiesUpdated`       | Integer    | Número de entities cujo vetor foi gravado e salvo com sucesso.      |
| `entitiesSkipped`       | Integer    | Número de entities que não puderam ser processadas: erros individuais de embed ou save, ou falhas de API em todo o chunk (essas entities permanecem inalteradas para a próxima execução). |
| `apiCalls`              | Integer    | Número de chamadas à API de embeddings realizadas.                                     |
| `promptTokens`          | Integer    | Total de prompt tokens consumidos em todas as chamadas de API nesta execução.           |
| `totalTokens`           | Integer    | Total de tokens consumidos em todas as chamadas de API nesta execução.                  |
| `duration`            | Integer    | Duração total do trabalho em milissegundos.                               |
| `errors`                | Collection | Lista de entradas [ProcessError](ProcessError.md) registradas durante a execução. |

### Propriedades calculadas

| Propriedade   | Tipo    | Descrição                                                                            |
|---------------|---------|---------------------------------------------------------------------------------------|
| `success`     | Boolean | `True` quando nenhuma entrada `"error"` ou `"fatal"` foi registrada. Entradas `"warning"` não falham a execução. |
| `hasFatal`    | Boolean | `True` quando pelo menos uma entrada `"fatal"` foi registrada (por exemplo, um modelo ficou indisponível). |

### Entradas de erro

Cada item em `errors` é um [ProcessError](ProcessError.md) com `scope`, `severity`, `code`, `ref`, `message` e `retryable`. Veja [ProcessError](ProcessError.md) para o significado dos campos e [ProcessErrorCode](ProcessErrorCode.md) para o catálogo de `code`.

## Funções

### errorsByScope()

**errorsByScope**( $scope : Text ) : Collection

Erros filtrados por `scope` (`"pipeline"`, `"definition"`, `"chunk"`, `"entity"`).

### errorsByCode()

**errorsByCode**( $code : Integer ) : Collection

Erros filtrados por código legível por máquina — veja [ProcessErrorCode](ProcessErrorCode.md).

### retryableErrors()

**retryableErrors**() : Collection

Erros marcados como `retryable` — executar novamente a operação pode plausivelmente ter sucesso.

### toObject()

**toObject**() : Object

Retorna um objeto simples adequado para logging ou serialização JSON.

| Argumento        | Tipo   | Descrição                                 |
|------------------|--------|-------------------------------------------|
| Resultado da função | Object | Um snapshot compatível com JSON do relatório.     |

```4d
var $r:=$p.process()
LOG EVENT(Into 4D log file; JSON Stringify($r.toObject()))
```

## Exemplo

```4d
var $r:=$p.processEntitySelection(ds.Students.all(); $def)

If ($r.success)
	ALERT("Atualizados "+String($r.entitiesUpdated)+" estudantes em "+String($r.duration)+" ms")
Else
	var $err : Object
	For each ($err; $r.errors)
		ALERT("[" + $err.scope + "] " + String($err.ref) + " — " + $err.message)
	End for each
End if
```

## Veja também

- [Process](Process.md)
- [ProcessError](ProcessError.md) — a estrutura tipada de cada entrada em `errors`.
- [ProcessErrorCode](ProcessErrorCode.md) — o catálogo de `code`.

---
id: processerrorcode
title: ProcessErrorCode
---

# ProcessErrorCode

Um `singleton` que expõe os códigos de erro estáveis e legíveis por máquina carregados por [ProcessError](ProcessError.md) `.code`, além de um método `meta()` que mapeia cada código para sua `severity` padrão e flag `retryable`. Compare com essas constantes em vez de analisar strings de mensagem.

Acesse a instância compartilhada via `.me`:

```4d
var $codes:=cs.EmbeddingStudio.ProcessErrorCode.me
If ($error.code=$codes.SAVE_FAILED)
	// …
End if
```

## Códigos

| Constante                | Valor | Severidade padrão | Retryable | Levantado quando…                                                              |
|--------------------------|-------|-------------------|-----------|--------------------------------------------------------------------------------|
| `NULL_INPUT`             | 100   | error             | Não       | Uma entity, selection ou definição obrigatória era `Null`.                      |
| `INVALID_DEFINITION`     | 101   | error             | Não       | Um valor não é uma instância utilizável de [Definition](Definition.md).         |
| `VALIDATION_FAILED`      | 102   | error             | Não       | `Definition.validate()` relatou um problema.                                    |
| `MODEL_UNAVAILABLE`      | 200   | fatal             | Sim       | Um erro crítico de API tornou o modelo inutilizável para o restante da execução.|
| `MODEL_SKIPPED`          | 201   | error             | Sim       | Uma definição foi ignorada porque seu modelo já falhou criticamente.            |
| `EMBED_FAILED`           | 202   | error             | Sim       | Uma chamada de embedding não crítica falhou (entity ou chunk individual).       |
| `VECTOR_COUNT_MISMATCH`  | 300   | error             | Não       | O provedor retornou uma contagem de vetores diferente da solicitada.            |
| `SAVE_FAILED`            | 400   | error             | Sim       | `entity.save()` falhou (validação, lock, …).                                   |

Os códigos são agrupados por centenas: `1xx` entrada/configuração, `2xx` modelo/API, `3xx` integridade de dados, `4xx` persistência. Códigos desconhecidos resultam em `{severity: "error"; retryable: False; label: "UNKNOWN"}`.

## Funções

### meta()

**meta**( $code : Integer ) : Object

Retorna a `severity` e o flag `retryable` associados a um código — os mesmos valores carregados por um [ProcessError](ProcessError.md) com esse `code`.

| Argumento        | Tipo    | Descrição                                               |
|------------------|---------|---------------------------------------------------------|
| `$code`          | Integer | Um dos códigos constantes acima.                        |
| Resultado        | Object  | `{severity : Text; retryable : Boolean; label : Text}`. |

```4d
var $m:=cs.EmbeddingStudio.ProcessErrorCode.me.meta(cs.EmbeddingStudio.ProcessErrorCode.me.MODEL_UNAVAILABLE)
// $m = {severity: "fatal"; retryable: True; label: "MODEL_UNAVAILABLE"}
```

## Veja também

- [ProcessError](ProcessError.md) — carrega um `.code` desta lista.
- [ProcessResult](ProcessResult.md) — `errorsByCode()` filtra erros por código.

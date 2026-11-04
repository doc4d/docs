---
id: processerror
title: ProcessError
---

# ProcessError

Um `ProcessError` é uma entrada estruturada e tipada na coleção `errors` de um [ProcessResult](ProcessResult.md). Seus campos tipados permitem que quem chama reaja programaticamente a um modo específico de falha — repetir falhas transitórias, abortar em caso de indisponibilidade fatal do modelo, contar falhas de salvamento — sem precisar analisar strings de mensagem.

Você lê essas instâncias a partir de [ProcessResult](ProcessResult.md)`.errors`, diretamente ou através de seus auxiliares de consulta (`errorsByCode`, `errorsByScope`, `retryableErrors`).

## Propriedades

| Nome da Propriedade | Tipo    | Descrição                                                                                          |
|---------------------|---------|----------------------------------------------------------------------------------------------------|
| `scope`             | Texto   | Onde o erro se originou: `"pipeline"`, `"definition"`, `"chunk"` ou `"entity"`.                    |
| `severity`          | Texto   | `"warning"`, `"error"` ou `"fatal"`. Determinado por `code` (veja [ProcessErrorCode](ProcessErrorCode.md)). |
| `code`              | Inteiro | Código de erro legível por máquina — compare com as constantes em [ProcessErrorCode](ProcessErrorCode.md). |
| `ref`               | Variável| Referência dependente do escopo: `"Dataclass.vector"`, uma chave primária de entity, um alias de modelo ou `Null`. |
| `message`           | Texto   | Mensagem legível por humanos, localizada.                                                          |
| `retryable`         | Booleano| `True` quando repetir a operação pode plausivelmente ter sucesso. Determinado por `code`.          |

### valores de scope

| Escopo         | Significado                                                                                 |
|----------------|--------------------------------------------------------------------------------------------|
| `"pipeline"`   | Falha de nível superior afetando toda a execução (entity selection nula, um modelo ficou indisponível). |
| `"definition"` | Uma [Definition](Definition.md) falhou na validação ou foi ignorada.                        |
| `"chunk"`      | Um lote inteiro (chunk) de entities falhou em uma única chamada de API.                     |
| `"entity"`     | Uma única entity falhou ao incorporar ou salvar.                                            |

### valores de severity

| Severidade   | Significado                                                                                      |
|--------------|-------------------------------------------------------------------------------------------------|
| `"warning"`  | Não bloqueante — **não** torna [ProcessResult](ProcessResult.md)`.success` falso.                |
| `"error"`    | Uma falha recuperável limitada a uma entity, chunk ou definition. Torna `success` falso.         |
| `"fatal"`    | Bloqueia o restante da execução (por exemplo, o modelo está indisponível). Também aparece via `hasFatal`. |

## Propriedades calculadas

| Propriedade | Tipo    | Descrição                              |
|-------------|---------|----------------------------------------|
| `isFatal`   | Booleano| `True` quando `severity = "fatal"`.    |

## Funções

### toObject()

**toObject**() : Object

Retorna um objeto simples (`{scope, severity, code, ref, message, retryable}`) adequado para registro em log ou serialização JSON.

| Argumento        | Tipo   | Descrição                                 |
|------------------|--------|-------------------------------------------|
| Resultado da função | Object | Um instantâneo do erro compatível com JSON. |

## Exemplo

Reaja a falhas por tipo em vez de por texto da mensagem:

```4d
var $r:=$p.process()

If (Not($r.success))

	If ($r.hasFatal)
		ALERT("A model became unavailable — aborting until it recovers.")
	End if

	var $codes:=cs.EmbeddingStudio.ProcessErrorCode.me
	var $saveFailures:=$r.errorsByCode($codes.SAVE_FAILED)
	If ($saveFailures.length>0)
		ALERT(String($saveFailures.length)+" entities failed to save.")
	End if

	// Collect entity keys worth retrying later
	var $retry:=$r.retryableErrors().query("scope = :1"; "entity").extract("ref")

End if
```

## Veja também

- [ProcessErrorCode](ProcessErrorCode.md) — o catálogo de valores de `code` e sua severidade/repetibilidade.
- [ProcessResult](ProcessResult.md) — possui a coleção `errors` e os auxiliares de consulta (`errorsByCode`, `errorsByScope`, `retryableErrors`).
- [Process](Process.md) — produz esses erros.

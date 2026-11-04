---
id: definition
title: Definição
---

# Definição

A classe `Definition` descreve como um único campo vetorial em um dataclass deve ser calculado: qual dataclass, qual campo vetorial, qual alias de modelo e qual template de texto ([Phrase](Phrase.md)) será renderizado a partir de cada entity.

Uma coleção dessas definições é o que [Settings](Settings.md) persiste.

## Propriedades

| Nome da Propriedade | Tipo                | Descrição                                                                 |
|---------------------|---------------------|---------------------------------------------------------------------------|
| `dataclassName`     | Text                | Nome do dataclass de destino.                                             |
| `vectorName`        | Text                | Nome do campo `4D.Vector` nesse dataclass.                                |
| `modelAlias`        | Text                | Alias do modelo de embedding (ex: `"text-embedding-3-small"`).            |
| `phrase`            | [Phrase](Phrase.md) | Template compilado usado para construir o texto que será embedado.         |
| `autoInvalidate`    | Boolean             | Controla a invalidação automática ao salvar a entity. Padrão: `True`.     |

## Construtor da classe

Cria uma definição.

| Nome do Argumento   | Tipo | Descrição                                                                 |
|---------------------|------|---------------------------------------------------------------------------|
| *dataclassName*     | Text | Nome do dataclass de destino.                                             |
| *vectorName*        | Text | Nome do campo vetorial de destino.                                        |
| *modelAlias*        | Text | Alias do modelo de embedding.                                             |
| *phraseTemplate*    | Text | Template de phrase com placeholders `{field}` — compilado em um [Phrase](Phrase.md). |

```4d
var $def:=cs.EmbeddingStudio.Definition.new(\
	"Students"; \
	"student_vector_1"; \
	"text-embedding-3-small"; \
	"Student {firstName} {lastName}")
```

## Propriedades calculadas

### hasDefinition

**hasDefinition** : Boolean *(somente leitura)*

Retorna `True` se pelo menos um modelo ou um template de phrase foi definido. Uma definição sem nenhum dos dois não tem conteúdo para processar.

```4d
If ($def.hasDefinition)
    // vale a pena validar mais
End if
```

## Funções

### validate()

**validate**( *settings* : Settings ) : Object

Valida a definição em relação ao modelo de datastore ativo e aos modelos de embedding conhecidos. Todos os erros são coletados antes de retornar — o resultado sempre descreve o conjunto completo de problemas encontrados.

| Argumento        | Tipo                                             | Descrição                                                              |
|------------------|--------------------------------------------------|------------------------------------------------------------------------|
| *settings*       | [Settings](Settings.md) \| Null | Usado para passar opções de validação de phrase. Passe `Null` para ignorar opções de phrase. |
| Resultado da função | Object                                        | `{success: Boolean, errors: Collection}` onde cada erro é `{field: Text, message: Text}`. |

Verificações em ordem:

| Verificação                        | Valor de `field`   |
|-------------------------------------|--------------------|
| `dataclassName` não está vazio      | `"dataclassName"`  |
| `vectorName` não está vazio         | `"vectorName"`     |
| `modelAlias` está definido e reconhecido | `"modelAlias"`   |
| Dataclass existe em `ds`            | `"dataclassName"`  |
| Campo vetorial existe               | `"vectorName"`     |
| Tipo do campo é `4D.Vector`         | `"vectorName"`     |
| Template de phrase não está vazio   | `"phrase"`         |
| Chaves do phrase resolvem no dataclass | `"phrase"`      |

As duas primeiras verificações (identidade) retornam imediatamente em caso de falha; as demais acumulam para que todos os problemas sejam relatados em uma única passagem.

```4d
var $result:=$def.validate(cs.EmbeddingStudio.Settings.new())

If (Not($result.success))
    var $err : Object
    For each ($err; $result.errors)
        TRACE  // $err.field, $err.message
    End for each
End if
```

### invalidateVectors()

**invalidateVectors**() : Object

Marca todas as entities já calculadas para re-embedding, forçando uma reconstrução completa na próxima execução. Apenas entities que já possuem um valor vetorial são processadas — entities com vetor `Null` são ignoradas.

Útil durante o desenvolvimento ou após uma alteração de modelo/phrase para forçar uma reconstrução limpa de todos os vetores.

A estratégia depende da existência de um campo auxiliar `_dirty` no dataclass:

| Campo auxiliar `_dirty` | Ação realizada |
|------------------------|----------------|
| Presente               | Define `<vectorName>_dirty` como `True` — o vetor permanece inalterado |
| Ausente                | Nulifica o campo vetorial            |

| Argumento        | Tipo   | Descrição                                                                 |
|------------------|--------|---------------------------------------------------------------------------|
| Resultado da função | Object | `{updated: Integer, skipped: Integer, errors: Collection of Text}` |

- `updated` — número de entities marcadas com sucesso
- `skipped` — número de entities que não puderam ser salvas
- `errors` — uma entrada por falha de salvamento, formatada como `"DataclassName: statusText"`

```4d
var $result:=$def.invalidateVectors()

If ($result.skipped > 0)
    var $e : Text
    For each ($e; $result.errors)
       // $e
    End for each
End if
// → { updated: 42; skipped: 0; errors: [] }
```

### toObject()

**toObject**() : Object

Retorna um objeto simples adequado para persistência em JSON. O phrase é reduzido ao seu texto de template.

| Argumento        | Tipo   | Descrição                                                                 |
|------------------|--------|---------------------------------------------------------------------------|
| Resultado da função | Object | `{version, dataclassName, vectorName, modelAlias, phrase, autoInvalidate}` onde `phrase` é a string do template. |

```4d
$def.toObject()
// → { version: 0; dataclassName: "Students"; vectorName: "student_vector_1";
//     modelAlias: "text-embedding-3-small"; phrase: "Student {firstName} {lastName}";
//     autoInvalidate: true }
```

## Invalidação automática

`autoInvalidate` controla se a invalidação automática no momento do salvamento está habilitada para esta definição.

- `True` (padrão): quando atributos relevantes mudam ao salvar uma entity, os vetores são invalidados automaticamente.
- `False`: a invalidação automática no salvamento é ignorada para esta definição.

Esta configuração não afeta a invalidação manual via `invalidateVectors()`.

## Convenção do flag dirty

O pipeline em [Process](Process.md) irá recalcular uma entity sempre que o vetor de destino for `Null`, ou quando um campo irmão `<vectorName>_dirty` existir no dataclass e estiver como `True`.

Declarar o flag dirty é opcional — quando ausente, apenas o caso do vetor nulo dispara o recálculo. Quando presente, ele é limpo automaticamente após o salvamento bem-sucedido.

## Veja também

- [Settings](Settings.md)
- [Process](Process.md)
- [Phrase](Phrase.md)

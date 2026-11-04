---
id: studioembedder
title: StudioEmbedder
---

# StudioEmbedder

A classe `StudioEmbedder` renderiza e incorpora sob demanda, resolvendo conforme as configurações do Studio: uma definição salva fornece a frase e o modelo, assim o vetor que você calcula corresponde aos armazenados por [Process](Process.md). Nada é persistido. Usos típicos: construir o vetor de uma consulta de busca, encontrar entidades semelhantes a uma dada, ou pré-visualizar o texto enviado para uma entidade.

Para o pipeline completo em lote que persiste vetores em entidades, consulte [Process](Process.md).

## Propriedades

| Nome da Propriedade | Tipo                                                    | Descrição                                              |
|---------------------|---------------------------------------------------------|--------------------------------------------------------|
| `settings`          | [Settings](Settings.md)               | As configurações (vetores, tamanho do lote, opções de validação de frase). |
| `embedder`          | [Embedder](Embedder.md)               | O mecanismo de chamada de API. Stateless e intercambiável.         |
| `options`           | Object                                                  | Objeto de opções em tempo de execução. |

## Construtor da classe

| Nome do Argumento | Tipo                                      | Descrição                                                         |
|-------------------|-------------------------------------------|-------------------------------------------------------------------|
| *settings*        | [Settings](Settings.md) | Opcional. Se omitido, as configurações são carregadas do padrão `Settings/embeddings.json`. |
| *options*         | Object                                    | Opções de execução opcionais. Suporta `embedder` para injeção. |

```4d
var $studioEmbedder:=cs.EmbeddingStudio.StudioEmbedder.new()
var $studioEmbedder:=cs.EmbeddingStudio.StudioEmbedder.new($settings)
var $studioEmbedder:=cs.EmbeddingStudio.StudioEmbedder.new($settings; {embedder: $mockEmbedder})
```

## Funções

### render()

**render**(*entity* : 4D.Entity ; *definitionOrPhrase* : Variant) : Text

Retorna o texto que [`embed()`](#embed) envia para uma entidade (a frase renderizada para ela). Sem chamada de API, sem persistência.

| Argumento                | Tipo                                                                        | Descrição                                                                 |
|--------------------------|-----------------------------------------------------------------------------|---------------------------------------------------------------------------|
| *entity*                 | 4D.Entity                                                                   | A entidade para renderizar.                                               |
| *definitionOrPhrase*     | `Null`, [Phrase](Phrase.md), [Definition](Definition.md), Text, ou objeto stub simples | `Null` → resolução automática via configurações (requer uma correspondência única). Text → compilado como um `cs.EmbeddingStudio.Phrase` descartável. Objeto stub → veja [resolução de stub](#stub-resolution). |
| Resultado da função      | Text                                                                        | O texto renderizado.                                                      |

```4d
var $studioEmbedder:=cs.EmbeddingStudio.StudioEmbedder.new()
var $text: Text
$text:=$studioEmbedder.render($student; $def)                        // usa a frase da definição
$text:=$studioEmbedder.render($student; cs.EmbeddingStudio.Phrase.new("Hi {firstName}"))
$text:=$studioEmbedder.render($student; "Student: {lastName}")       // template bruto
$text:=$studioEmbedder.render($student)                              // resolução automática
$text:=$studioEmbedder.render($student; {vectorName: "student_vector_1"})  // stub → frase da definição salva
$text:=$studioEmbedder.render($student; {phrase: "Hi {firstName}"})        // stub ad-hoc → template inline
```

### embed()

**embed**(*input* : Variant ; *context* : Variant ; *model* : Text) : [cs.EmbeddingStudio.EmbedderResult](EmbedderResult.md)

Calcula um vetor para uma entrada arbitrária, sem persistir em nenhum lugar.

| Argumento        | Tipo                                                                                     | Descrição                                                                 |
|------------------|------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| *input*          | Text ou 4D.Entity                                                                        | Text → incorporado diretamente. Entity → frase renderizada e então incorporada.          |
| *context*        | Text, [Phrase](Phrase.md), [Definition](Definition.md), template de texto, objeto stub simples, ou `Null` | Fornece frase e/ou modelo dependendo do *input*. Objeto stub → veja [resolução de stub](#stub-resolution). |
| *model*          | Text                                                                                     | Nome do modelo explícito opcional. Usado quando *context* não fornece um.      |
| Resultado da função | [EmbedderResult](EmbedderResult.md)                                                      | O resultado do embedding (use `.vector` para obter o 4D.Vector).                 |

Gera erro se nenhum modelo puder ser determinado.

```4d
var $studioEmbedder:=cs.EmbeddingStudio.StudioEmbedder.new()
var $vector: 4D.Vector

// Texto + modelo
$vector:=$studioEmbedder.embed("some text"; "text-embedding-3-small").vector

// Texto + definição (usa def.modelAlias)
$vector:=$studioEmbedder.embed("some text"; $def).vector

// Entidade + definição (usa def.phrase + def.modelAlias)
$vector:=$studioEmbedder.embed($student; $def).vector

// Entidade + frase + modelo explícito
$vector:=$studioEmbedder.embed($student; $phrase; "text-embedding-3-small").vector

// Entidade + template ad-hoc + modelo
$vector:=$studioEmbedder.embed($student; "Profile: {firstName} {lastName}"; "text-embedding-3-small").vector

// Apenas entidade (resolução automática, somente quando exatamente uma definição corresponde ao dataclass)
$vector:=$studioEmbedder.embed($student).vector

// Entidade + stub (deduz frase + modelo da definição salva correspondente)
$vector:=$studioEmbedder.embed($student; {vectorName: "student_vector_1"}).vector

// Entidade + stub ad-hoc (frase compilada inline, modelo retirado do stub)
$vector:=$studioEmbedder.embed($student; {phrase: "Hi {firstName}"; modelAlias: "text-embedding-3-small"}).vector

// Texto + stub que fornece apenas o modelo
$vector:=$studioEmbedder.embed("some text"; {modelAlias: "text-embedding-3-small"}).vector
```

## Resolução de stub

Tanto `render()` quanto `embed()` aceitam um objeto simples no lugar de um `Phrase`/`Definition`. Um stub é resolvido da mesma forma que [`Process`](Process.md#definition-resolution-entity-context) resolve seu argumento `definition`, assim o comportamento é equivalente. São suportados dois formatos:

| Stub                                                       | Resolve para                                                                                          |
|------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| `{vectorName: "..."}` (opcionalmente `{dataclassName: "..."}`) | A **definição salva** correspondente para o dataclass da entidade — deduzindo sua frase (e, para `embed`, seu modelo). Não resolve nada quando não há correspondência única. |
| `{phrase: "tpl {field}"}` ou `{template: "tpl {field}"}`   | Um `Phrase` **ad-hoc** compilado inline; nada é buscado. Combine com `{modelAlias: "..."}` para fornecer um modelo ao `embed()`. |

Para `embed()`, o modelo é deduzido nesta ordem: um `{modelAlias}` explícito no stub → o modelo de uma definição salva encontrada pelo stub → o argumento *model* → a definição única da entidade. Um `{modelAlias}` explícito sempre prevalece.

Diferente de [`Process.process()`](Process.md#process-resolution), um stub **não** é transformado em uma nova `Definition` a partir de seus campos — `StudioEmbedder` não persiste nada, então use `{phrase}`/`{template}` para templates pontuais.

## Veja também

- [Process](Process.md)
- [Settings](Settings.md)
- [Definition](Definition.md)
- [Embedder](Embedder.md)
- [EmbedderResult](EmbedderResult.md)
- [Phrase](Phrase.md)

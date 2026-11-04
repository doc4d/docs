---
id: phrase
title: Frase
---

# Frase

A classe `Phrase` é um mecanismo de template leve: um template com marcadores `{variable}` é compilado uma vez e, em seguida, renderizado de forma eficiente com diferentes objetos de dados.

## Propriedades

| Nome da Propriedade | Tipo | Descrição                                                                 |
|---------------------|------|---------------------------------------------------------------------------|
| `template`          | Texto | Calculado — retorna a string do template original.                        |
| `keys`              | Coleção | Calculado — retorna os nomes das variáveis encontradas no template, chaves em notação de ponto reunidas novamente em strings. |

## Construtor da classe

Compila um template. A compilação percorre o template uma vez e extrai partes estáticas e caminhos de variáveis.

| Nome do Argumento | Tipo | Descrição                                         |
|-------------------|------|---------------------------------------------------|
| *template*        | Texto | String de template com marcadores `{variable}`.   |

```4d
var $tpl:=cs.EmbeddingStudio.Phrase.new("Hello {firstName}, you study at {schoolName}.")
$tpl.keys // → ["firstName"; "schoolName"]
```

## Funções

### render()

**render**(*data* : Object) : Texto

Renderiza o template compilado substituindo variáveis por valores de *data*. Chaves ausentes produzem uma string vazia.

| Argumento         | Tipo   | Descrição                                                                 |
|-------------------|--------|---------------------------------------------------------------------------|
| *data*            | Objeto | Um objeto simples ou uma 4D.Entity cujos campos fornecem os valores das variáveis. |
| Resultado da função | Texto | O texto renderizado.                                                     |

```4d
var $text:=$tpl.render({firstName: "Alice"; school: {name: "MIT"}})
// → "Hello Alice, you study at MIT."

// Funciona diretamente em entities
$text:=$tpl.render(ds.Students.first())
```

### validate()

**validate**(*dataclass* : 4D.DataClass ; *options* : Object) : Objeto

Valida se todas as chaves na frase podem ser resolvidas no dataclass fornecido. Percorre caminhos em notação de ponto através de relações N:1 / 1:1.

| Argumento         | Tipo           | Descrição                                                                       |
|-------------------|----------------|---------------------------------------------------------------------------------|
| *dataclass*       | 4D.DataClass   | O dataclass para validar.                                                       |
| *options*         | Objeto         | Flags de validação opcionais (veja abaixo). Todas padrão como `False` — apenas atributos de armazenamento. |
| Resultado da função | Objeto        | `{success: Boolean, errors: Collection of {key, message}}`.                     |

#### Opções

| Campo               | Tipo    | Padrão  | Descrição                                               |
|---------------------|---------|---------|---------------------------------------------------------|
| `allowRelations`    | Boolean | `False` | Permite caminhos em notação de ponto por relações N:1 / 1:1. |
| `allowCalculated`   | Boolean | `False` | Permite atributos calculados.                           |
| `allowAlias`        | Boolean | `False` | Permite atributos alias.                                |

```4d
var $tpl:=cs.EmbeddingStudio.Phrase.new("{firstName} at {school.name}")

// Validação apenas de armazenamento — falha porque {school.name} usa uma relação
var $v:=$tpl.validate(ds.Students)
// $v.success → False
// $v.errors → [{key: "school.name"; message: "..."}]

// Permitir relações
$v:=$tpl.validate(ds.Students; {allowRelations: True})
// $v.success → True
```

#### Formatos rejeitados

Independentemente das opções:

- Atributos que não existem no dataclass.
- Atributos cujo class ID é `4D.Vector`.
- Relações 1:N (`relatedEntities`) como chave final.
- Segmentos intermediários que não são relações (quando se usa notação de ponto).

### attributes()

**attributes**(*dataclass* : 4D.DataClass) : Coleção

Resolve cada chave da frase no *dataclass* e retorna uma Coleção ordenada de objetos descritores de atributo ORDA, um por chave na mesma ordem de `.keys`. Para caminhos em notação de ponto, percorre relações N:1 até o atributo final. Retorna `Null` para qualquer chave cujo caminho não possa ser resolvido (atributo desconhecido ou segmento intermediário que não seja relação).

| Argumento         | Tipo           | Descrição                                               |
|-------------------|----------------|---------------------------------------------------------|
| *dataclass*       | 4D.DataClass   | O dataclass para resolver os atributos.                 |
| Resultado da função | Coleção       | Coleção ordenada de objetos de atributo ORDA (ou `Null`).|

Cada entrada resolvida é um descritor de atributo ORDA com `.name`, `.kind` e outros — veja [DataClass.attributeName](https://developer.4d.com/docs/API/DataClassClass#attributename).

```4d
var $tpl:=cs.EmbeddingStudio.Phrase.new("{firstName} graduated from {school.name}")
var $attrs:=$tpl.attributes(ds.Students)
// $attrs[0].name → "firstName"   $attrs[0].type → "string"
// $attrs[1].name → "name"        $attrs[1].type → "string"   (do dataclass School)
// $attrs[1] é Null se school.name não puder ser resolvido
```

## Veja também

- [Definition](Definition.md) — contém um `Phrase`.
- [StudioEmbedder.render()](StudioEmbedder.md#render) — renderiza uma frase para uma entity, sem persistência.

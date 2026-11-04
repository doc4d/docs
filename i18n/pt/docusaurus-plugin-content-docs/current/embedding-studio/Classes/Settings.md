---
id: settings
title: Configurações
---

# Configurações

A classe `Settings` é a configuração persistente para o pipeline de embedding. Ela carrega e salva um arquivo JSON (padrão: `Settings/embeddings.json`, pode ser sobrescrito com a variável de ambiente `EMBEDDINGS_SETTINGS_PATH`) contendo uma lista de entradas [Definition](Definition.md), um tamanho de lote e opções de validação de frase.

## Propriedades

| Nome da Propriedade | Tipo                                                     | Descrição                                                                 |
|---------------------|----------------------------------------------------------|---------------------------------------------------------------------------|
| `definitions`       | Coleção de [Definition](Definition.md)                   | As definições configuradas.                                               |
| `batchSize`         | Inteiro                                                  | Tamanho do lote usado por [Process.processEntitySelection](Process.md#processentityselection). Padrão: `50`. |
| `phrase`            | Objeto                                                   | Opções de validação de frase (veja abaixo).                               |
| `embedder`          | Objeto                                                   | Configuração opcional do embedder (veja abaixo).                          |
| `file`              | 4D.File *(somente leitura)*                              | O arquivo de suporte do qual as configurações são carregadas e salvas.    |

### opções de phrase

Passadas literalmente para [Phrase.validate()](Phrase.md#validate) sempre que o pipeline valida uma definição.

| Campo               | Tipo    | Padrão  | Descrição                                             |
|---------------------|---------|---------|-------------------------------------------------------|
| `allowRelations`    | Boolean | `False` | Permite notação de ponto através de relações N:1 / 1:1.|
| `allowCalculated`   | Boolean | `False` | Permite atributos calculados em frases.               |
| `allowAlias`        | Boolean | `False` | Permite atributos de alias em frases.                 |
| `allowObject`       | Boolean | `False` | Permite atributos de objeto em frases.                |

> **Atenção à invalidação.** O rastreamento de alterações ("dirty-flag") cobre apenas campos escalares diretos na entity. Campos acessíveis apenas por meio de uma dessas opções — um atributo de entity relacionada, um valor calculado, um alias ou uma subpropriedade de um objeto — **não** marcarão automaticamente a entity como alterada quando mudarem. Se tais campos fizerem parte de uma phrase e seus dados de origem mudarem, o vetor não será recomputado a menos que você chame `invalidateVectors()` explicitamente ou use `force: true` ao processar.

### opções de embedder

Controla como o [Process](Process.md) constrói seu embedder. Quando ausente, um `Embedder` padrão é criado com seus próprios padrões.

| Campo         | Tipo    | Padrão  | Descrição                                                                 |
|---------------|---------|---------|---------------------------------------------------------------------------|
| `className`   | Texto   | —       | Nome de uma classe de projeto a ser instanciada em vez do `Embedder` interno. A classe deve expor as funções `embed` e `embedBatch`. Se a instanciação falhar ou a interface estiver ausente, um erro de diagnóstico é registrado e o `Embedder` padrão é usado como fallback. |
| `maxRetries`  | Inteiro | `3`     | Número de tentativas de repetição em erros de limite de taxa (encaminhado para o `Embedder`). |
| `backoffMs`   | Inteiro | `500`   | Atraso base de back-off em ms, dobrado a cada tentativa (encaminhado para o `Embedder`). |

Quaisquer chaves adicionais são encaminhadas como estão para o construtor da classe alvo (interna ou personalizada).

## Formato do arquivo

```json
{
  "batchSize": 50,
  "phrase": {
    "allowRelations": false,
    "allowCalculated": false,
    "allowAlias": false,
    "allowObject": false
  },
  "embedder": {
    "maxRetries": 5,
    "backoffMs": 200
  },
  "definitions": [
    {
      "dataclassName": "Students",
      "vectorName": "student_vector_1",
      "modelAlias": "text-embedding-3-small",
      "phrase": "Student {firstName} {lastName}",
      "autoInvalidate": true
    }
  ]
}
```

Cada definição pode incluir `autoInvalidate` (`true` por padrão) para controlar a invalidação automática no momento do salvamento.

O mesmo arquivo também pode conter a chave `scheduler` (veja [Scheduler](Scheduler.md#configuration)) e qualquer outra chave de nível superior que você adicionar: `Settings` lê e reescreve apenas as chaves listadas acima e deixa o restante intacto.

Com uma classe de embedder personalizada:

```json
{
  "embedder": {
    "className": "MyCustomEmbedder"
  },
  "definitions": [...]
}
```

## Construtor da classe

Cria uma instância de configurações. O arquivo de configuração é carregado imediatamente.

| Nome do Argumento | Tipo    | Descrição                                                                 |
|-------------------|---------|---------------------------------------------------------------------------|
| *file*            | 4D.File | Opcional. Um arquivo para usar em vez do local padrão. A substituição se aplica a todo o processo para acessos subsequentes às configurações. **Não suportado no modo 4D Remote** — use apenas ao rodar localmente ou no servidor. |

Quando *file* é omitido, o local padrão é usado: `Settings/embeddings.json`, ou o caminho fornecido pela variável de ambiente `EMBEDDINGS_SETTINGS_PATH`.

```4d
// Local padrão
var $settings:=cs.EmbeddingStudio.Settings.new()

// Arquivo personalizado (apenas servidor / mono)
var $settings:=cs.EmbeddingStudio.Settings.new(File("/some/path/custom.json"))
```

## Funções

### load()

**load**()

Recarrega o arquivo de suporte na memória, sobrescrevendo o estado em memória. Um arquivo ausente redefine para os padrões sem erro.

Um arquivo que **existe mas não pode ser analisado** também deixa a instância nos padrões, mas isso é lembrado: um erro é registrado e [`save()`](#save) então se recusa a gravar, para que um arquivo malformado nunca seja substituído silenciosamente pelos padrões.

### save()

**save**() : Boolean

Serializa o estado atual em memória para o arquivo de suporte. Apenas as chaves que esta classe controla (`batchSize`, `phrase`, `embedder`, `definitions`) são gravadas — todas as outras chaves de nível superior presentes no arquivo (a configuração `scheduler`, aliases de modelo…) são preservadas. Uma chave cujo valor voltou ao padrão é *removida* do arquivo em vez de ser gravada.

As definições são mescladas com o que o arquivo contém naquele instante, usando o snapshot feito no carregamento como ancestral comum: dois editores abertos ao mesmo tempo não sobrescrevem mais as definições um do outro.

| Resultado | Tipo    | Descrição                                                                                     |
|-----------|---------|-----------------------------------------------------------------------------------------------|
| result    | Boolean | `True` quando gravado. `False` — nada gravado — quando o arquivo não pôde ser lido no carregamento.  |

```4d
$settings.definitions.push(cs.EmbeddingStudio.Definition.new("Students"; "student_vector_1"; "text-embedding-3-small"; "{firstName}"))
$settings.batchSize:=100
$settings.save()
```

### find()

**find**(*dataclassName* : Text ; *vectorName* : Text) : [Definition](Definition.md)

Procura a definição salva para o par dataclass/vector fornecido.

| Argumento         | Tipo                                          | Descrição                                         |
|-------------------|-----------------------------------------------|---------------------------------------------------|
| *dataclassName*   | Texto                                         | Nome do dataclass.                                |
| *vectorName*      | Texto                                         | Nome do campo de vetor nesse dataclass.           |
| Resultado da função | [Definition](Definition.md)                 | A definição correspondente, ou `Null` se não houver correspondência. |

```4d
var $def:=$settings.find("Students"; "student_vector_1")
```

### findAll()

**findAll**(*dataclassName* : Text) : Coleção de [Definition](Definition.md)

Retorna todas as definições salvas configuradas para o dataclass fornecido.

| Argumento         | Tipo                                          | Descrição                                                |
|-------------------|-----------------------------------------------|----------------------------------------------------------|
| *dataclassName*   | Texto                                         | Nome do dataclass.                                       |
| Resultado da função | Coleção de [Definition](Definition.md)      | Todas as definições correspondentes (coleção vazia se nenhuma corresponder). |

```4d
var $defs:=$settings.findAll("Students")
// → todas as definições de Students; usado por Process.process(ds.Students)
```

### invalidateVectors()

**invalidateVectors**() : Objeto

Chama [`invalidateVectors()`](Definition.md#invalidatevectors) em cada definição em `definitions` e mescla os resultados em um único objeto de status.

| Argumento         | Tipo   | Descrição                                                                 |
|-------------------|--------|---------------------------------------------------------------------------|
| Resultado da função | Objeto | `{updated: Integer, skipped: Integer, errors: Collection of Text}` — acumulado em todas as definições. |

```4d
var $result:=cs.EmbeddingStudio.Settings.new().invalidateVectors()
// → { updated: 120; skipped: 0; errors: [] }
```

## Veja também

- [Definition](Definition.md)
- [Process](Process.md)
- [Phrase](Phrase.md)

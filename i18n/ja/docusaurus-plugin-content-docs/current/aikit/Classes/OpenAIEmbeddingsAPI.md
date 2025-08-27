---
id: openaiembeddingsapi
title: OpenAIEmbeddingsAPI
---

# OpenAIEmbeddingsAPI

`OpenAIEmbeddingsAPI` はOpenAI のAPI を使用して埋め込みを作成する機能を提供します。

https://platform.openai.com/docs/api-reference/embeddings

## 関数

### create()

**create**(*input* : Text; *model*: Text; *parameters* : OpenAIEmbeddingsParameters) : OpenAIEmbeddingsResult

提供された入力、モデル、パラメータに対する埋め込みを作成します。

| 引数           | 型                                                           | 説明                                                                    |
| ------------ | ----------------------------------------------------------- | --------------------------------------------------------------------- |
| *input*      | テキストまたはテキストのコレクション                                          | ベクター化する入力。                                                            |
| *model*      | Text                                                        | [使用するモデル](https://platform.openai.com/docs/guides/embeddings#埋め込みモデル) |
| *parameters* | [OpenAIEmbeddingsParameters](OpenAIEmbeddingsParameters.md) | 埋め込みリクエストをカスタマイズするための引数。                                              |
| 戻り値          | [OpenAIEmbeddingsResult](OpenAIEmbeddingsResult.md)         | 埋め込み。                                                                 |

#### 使用例

##### 単一のテキスト入力に対するベクトルを取得

```4d
var $result:=$client.embeddings.create("it rains cats and dogs"; "text-embedding-ada-002")
var $vector: 4D.Vector:=$result.vector
// or var $embedding: cs.AIKit.OpenAIEmbedding:=$result.embedding
```

##### Get vectors for a collection of text entries

```4d
var $inputs:=["it rains cats and dogs"; "il pleut à boire debout"]
var $result:=$client.embeddings.create($inputs; "text-embedding-ada-002")
var $vectors : Collection:=$result.vectors // collection of 4D.Vector
```

##### Using another service

> Before using embeddings with a specific service, please check its documentation to see if embeddings are supported, and select the appropriate embedding model.

For example, for Mistral, use [mistral-embed or codestral-embed](https://docs.mistral.ai/capabilities/embeddings/)

```4d
var $result:=$client.embeddings.create($inputs; "mistral-embed")
```

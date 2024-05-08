---
id: skip
title: $skip
---

エンティティセレクション内で、この数値によって指定されたエンティティから処理を開始します (_例_: `$skip=10`)

## 説明

`$skip` はセレクション内のどのエンティティから処理を開始するかを指定します。 デフォルトでは、先頭エンティティから開始します。 10番目のエンティティから開始するには、10を渡します。

`$skip`  is generally used in conjunction with [`$top/$limit`]($top_$limit.md) to navigate through an entity collection.

## 例題

エンティティセットの20番目のエンティティ以降を取得します:

`GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20`

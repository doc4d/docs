---
id: top_$limit
title: $top/$limit
---

返されるエンティティの数を制限します (例: `$top=50`)

## 説明

`$top/$limit` は返されるエンティティの数を制限します。 この数字はデフォルトで 100件です。 `$top` および `$limit` のどちらでも利用できます。

When used in conjunction with [`$skip`]($skip.md), you can navigate through the entity selection returned by the REST request.

## 例題

エンティティセットから、20番目以降の10件のエンティティを取得します:

`GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20&$top=10`

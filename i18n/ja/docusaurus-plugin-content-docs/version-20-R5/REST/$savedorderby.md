---
id: savedorderby
title: $savedorderby
---

エンティティセット作成時に、`$orderby` に定義した並べ替え情報を保存します (_例_: `$savedorderby="{orderby}"`)

## 説明

エンティティセットを作成する際に使用した並べ替え情報を念のために保存しておくことができます。 If the entity set that you created is removed from 4D Server's cache (due to the timeout, the server's need for space, or your removing it by calling [`$method=release`]($method.md#methodrelease)).

`$savedorderby` を使用してエンティティセット作成時に使った並べ替え情報を保存したあとは、エンティティセットを取得する度に `$savedorderby` も受け渡します。

4D Server のキャッシュからエンティティセットが消えていた場合、10分のデフォルトタイムアウトで再作成されます。 If you have used both [`$savedfilter`]($savedfilter.md) and `$savedorderby` in your call when creating an entity set and then you omit one of them, the new entity set, having the same reference number, will reflect that.

## 例題

エンティティセットを作成する際に `$savedorderby` を使います:

`GET  /rest/People/?$filter="lastName!=''"&$savedfilter="lastName!=''"&$orderby="salary"&$savedorderby="salary"&$method=entityset`

作成したエンティティセットにアクセスする際、そのエンティティセットが有効なのを確実にしたい場合には、($savedfilter と $savedorderby を両方使って) 次のように書きます:

` GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="lastName!=''"&$savedorderby="salary"`

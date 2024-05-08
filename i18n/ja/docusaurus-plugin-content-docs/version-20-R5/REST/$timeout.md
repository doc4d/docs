---
id: timeout
title: $timeout
---

4D Server のキャッシュにエンティティセットが保存される時間 (秒単位) を指定します (_例_: `$timeout=1800`)

## 説明

To define a timeout for an entity set that you create using [`$method=entityset`]($method.md#methodentityset), pass the number of seconds to `$timeout`. たとえば、20分のタイムアウトを設定するには、1200を渡します。 デフォルトのタイムアウトは 2時間です。

一旦タイムアウトが定義されると、(`$method=entityset` によって) エンティティセットが呼び出される度に現時刻とタイムアウトに基づいて有効期限が再計算されます。

If an entity set is removed and then recreated using `$method=entityset` along with [`$savedfilter`]($savedfilter.md), the new default timeout is 10 minutes regardless of the timeout you defined when calling `$timeout`.

## 例題

作成するエンティティセットのタイムアウトを 20分に設定します:

` GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200`

---
id: genInfo
title: サーバー情報の取得
---

RESTサーバーの次の情報を取得することができます:

- 公開されているデータクラスとデータクラス属性
- RESTサーバーのキャッシュの中身 (ユーザーセッションを含む)

## カタログ

Use the [`$catalog`]($catalog.md), [`$catalog/{dataClass}`]($catalog.md#catalogdataclass), or [`$catalog/$all`]($catalog.md#catalogall) parameters to get the list of [exposed dataclasses and their attributes](configuration.md#exposing-tables-and-fields).

公開されている全データクラスとデータクラス属性のコレクションを取得するには:

`GET /rest/$catalog/$all`

## キャッシュ情報

Use the [`$info`]($info.md) parameter to get information about the entity selections currently stored in 4D Server's cache as well as running user sessions.

## queryPath と queryPlan

クエリによって生成されたエンティティセレクションは、`queryPlan` と `queryPath` という 2つのプロパティを持ちえます。 To calculate and return these properties, you just need to add [`$queryPlan`]($queryplan.md) and/or [`$queryPath`]($querypath.md) in the REST request.

例:

`GET /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true&$querypath=true`

これらのプロパティは、データクラスやリレーションに対する複合クエリをサーバーが内部的にどのようにおこなっているかの情報を格納するオブジェクトです:

- **queryPlan**: 実行前のクエリについての詳細な情報 (クエリプラン) を格納するオブジェクト。
- **queryPath**: 実際に実行されたクエリ処理の詳細な情報 (クエリパス) を格納するオブジェクト。

情報には、クエリの種類 (インデックスあるいはシーケンシャル)、必要なサブクエリおよびその連結演算子が含まれます。 クエリパスには、見つかったエンティティの数と各検索条件を実行するににかかった時間も含まれます。 この情報は、アプリケーション開発中に解析することで有効に活用できます。 一般的には、クエリプランとクエリパスの詳細は同一になるはずですが、4D はパフォーマンス向上のために動的な最適化をクエリ実行時に実装することがあり、異なることもあります。 たとえば、その方が早いと判断した場合には、4Dエンジンはインデックス付きクエリをシーケンシャルなものへと動的に変換することがあります。 これは検索されているエンティティの数が少ないときに起こりえます。

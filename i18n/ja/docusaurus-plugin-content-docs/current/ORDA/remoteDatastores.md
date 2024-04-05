---
id: datastores
title: Remote datastores
---


A **remote datastore** is a reference, on a local 4D application (4D or 4D Server), to a [datastore](dsMapping.md#datastore) stored in another 4D application.

The local 4D application connects to and references the remote datastore through a call to the [`Open datastore`](../API/DataStoreClass.md#open-datastore) command.

On the remote machine, 4D opens a [session](../WebServer/sessions.md) to handle requests from the application that call `Open datastore`. Requests internally use the [REST API](../REST/gettingStarted.md), which means that they might require [available licenses](../REST/authUsers.md).


## Using web sessions

When you work with a remote datastore referenced through calls to the [`Open datastore`](../API/DataStoreClass.md#open-datastore) command, the connection with the requesting processes is handled via [web sessions](../WebServer/sessions.md) on the remote machine.

The web session created on the remote datastore is identified using a internal session ID which is associated to the `localID` on the 4D application side. データ、エンティティセレクション、エンティティへのアクセスはこのセッションによって自動的に管理されます。

`localID` はリモートデータストアに接続しているマシンにおけるローカルな識別IDです:

*   同じアプリケーションの別プロセスが同じリモートデータストアに接続する場合、`localID` とセッションは共有することができます。
*   同じアプリケーションの別プロセスが別の `localID` を使って同じデータストアに接続した場合、リモートデータストアでは新しいセッションが開始されます。
*   他のマシンが同じ `localID` を使って同じデータストアに接続した場合、新しいセッションが新しい cookie で開始されます。

これらの原則を下図に示します:

![](../assets/en/ORDA/sessions.png)


### セッションの監視

データストアアクセスを管理しているセッションは 4D Server の管理ウィンドウに表示されます:

*   プロセス名: "REST Handler: \<process name\>"
*   タイプ: HTTP Server Worker
*   セッション: `Open datastore` コマンドに渡されたユーザー名

次の例では、1つのセッション上で 2つのプロセスが実行中です:

![](../assets/en/ORDA/sessionAdmin.png)

## セッションの終了

As described in the [session lifetime](../WebServer/seesions.md#session-lifetime) paragraph, a web session is automatically closed by 4D when there has been no activity during its timeout period. デフォルトのタイムアウト時間は 60分です。 *Open datastore* コマンドの `connectionInfo` パラメーターを指定して、タイムアウト時間を変更することができます。

セッション終了後にリクエストがリモートデータストアに送信された場合、セッションは可能な限り (ライセンスがあり、サーバーが停止していない、など) 再開されます。 However, keep in mind that the context of the session regarding locks and transactions is lost (see below).


## ロッキングとトランザクション

エンティティロッキングやトランザクションに関連した ORDA 機能は、ORDA のクライアント / サーバーモードと同様に、リモートデータストアにおいてもプロセスレベルで管理されます:

*   あるプロセスがリモートデータストアのエンティティをロックした場合、セッションの共有如何に関わらず、他のすべてのプロセスに対してそのエンティティはロックされた状態です ([エンティティロッキング](entities.md#エンティティロッキング) 参照)。 同一のレコードに対応する複数のエンティティが 1つのプロセスによってロックされている場合、同プロセス内でそれらがすべてアンロックされないと、ロックは解除されません。 なお、ロックされたエンティティに対する参照がメモリ上に存在しなくなった場合にも、ロックは解除されます。
*   トランザクションは `dataStore.startTransaction( )`、`dataStore.cancelTransaction( )`、`dataStore.validateTransaction( )` のメソッドを使って、リモートデータストアごとに個別に開始・認証・キャンセルすることができます。 これらの操作は他のデータストアには影響しません。
*   従来の 4Dランゲージコマンド (`START TRANSACTION`, `VALIDATE TRANSACTION`, `CANCEL TRANSACTION`) は `ds` で返されるメインデータストアに対してのみ動作します。 リモートデータストアのエンティティがあるプロセスのトランザクションで使われている場合、セッションの共有如何に関わらず、他のすべてのプロセスはそのエンティティを更新できません。
*   次の場合にエンティティのロックは解除され、トランザクションはキャンセルされます:
    *   プロセスが強制終了された
    *   サーバー上でセッションが閉じられた
    *   サーバー管理ウィンドウからセッションが強制終了された
 

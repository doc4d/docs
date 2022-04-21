---
id: preemptiveWeb
title: プリエンプティブWebプロセスの使用
---


4D Webサーバーを使って、コンパイル済みアプリケーションでプリエンプティブWebプロセスを使用することによって、マルチコアコンピューターの利点を最大限引き出すことができます。 4D変換タグや Webデータベースメソッドを含めた Web関連コードを、可能な限り多くのコアで同時に実行するよう設定することが可能です。

For in-depth information on preemptive process in 4D, please refer to the *Preemptive 4D processes* section in the [*4D Language Reference*](https://doc.4d.com).

## Webプロセスにおけるプリエンプティブモードの使用可能状況

The following table indicates whether the preemptive mode is used or is available, depending on the execution context:

| 4D Server           | Interpreted, project ([client connected locally](../Desktop/clientServer.md#using-4d-and-4d-server-on-the-same-machine)) | Interpreted, project (no client connected locally) or binary | コンパイル済みコード    |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ | ------------- |
| REST サーバー           | cooperative                                                                                                              | preemptive                                                   | preemptive    |
| Web サーバー            | cooperative                                                                                                              | *web setting*                                                | *web setting* |
| Web Services Server | cooperative                                                                                                              | *web setting*                                                | *web setting* |
| Legacy REST         | cooperative                                                                                                              | *web setting*                                                | *web setting* |

| 4D remote/single-user | インタープリターコード | コンパイル済みコード    |
| --------------------- | ----------- | ------------- |
| REST サーバー             | cooperative | preemptive    |
| Web サーバー              | cooperative | *web setting* |
| Web Services Server   | cooperative | *web setting* |
| Legacy REST           | cooperative | *web setting* |

- REST Server: handles [ORDA data model class functions](../REST/ClassFunctions.md)
- Web Server: handles [web templates](templates.md), [4DACTION and database methods](httpRequests.md)
- Web Service Server: handles SOAP requests
- Legacy REST: direct requests to 4D methods (`/rest/{table}/{methodName}`)
- ***web setting*** means that the preemptive mode depends on a setting value:
    - when [**Scalable sessions**](sessions.md#enabling-sessions) option is selected, the [preemptive mode is automatically used](sessions.md#preemptive-mode) for web processes.
    - otherwise, the [**Use preemptive processes**](webServerConfig.md#use-preemptive-processes) option is taken into account.
    - regarding Web service processes (server or client), preemptive mode is supported at method level. You just have to select "Can be run in preemptive processes" property for published SOAP server methods (see [Publishing a Web Service with 4D](https://doc.4d.com/4Dv19/4D/19/Publishing-a-Web-Service-with-4D.300-5416868.en.html)) or proxy client methods (see [Subscribing to a Web Service in 4D](https://doc.4d.com/4Dv19/4D/19/Subscribing-to-a-Web-Service-in-4D.300-5416870.en.html)) and make sure they are confirmed thread-safe by the compiler.




## スレッドセーフなWebサーバーコードの書き方

Webプロセスをプリエンプティモードで実行するには、Webサーバーで実行されるすべての 4Dコードがスレッドセーフでなければなりません。 ストラクチャー設定ダイアログボックスにおいて **プリエンプティブプロセスを使用** オプションがチェックされている場合、アプリケーションの以下の部分が 4Dコンパイラーによって自動的に評価されます:

*   すべての Web関連データベースメソッド:
    *   [`On Web Authentication`](authentication.md#on-web-authentication)
    *   [`On Web Connection`](httpRequests.md#on-web-connection)
    *   [`On REST Authentication`](REST/configuration.md#on-rest-authentication-データベースメソッドを使用する)
    *   [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication)

*   `compiler_web` プロジェクトメソッド (実際の "実行モード" プロパティに関わらず評価されます)

*   Webコンテキストにおいて `PROCESS 4D TAGS` コマンドによって処理される基本的にすべてのコード (.shtmlページを通して実行されるものなど)

*   "公開オプション: 4DタグとURL (`4DACTION`)..." 属性が有効なプロジェクトメソッド。

*   "RESTリソースとして公開" 属性が有効なテーブルのトリガー

*   [ORDA data model class functions](../REST/ClassFunctions.md) called via REST

*   Project methods with "REST Server" property checked (legacy REST calls)

これらそれぞれのメソッドとコードの部分について、スレッドセーフのルールが遵守されているかをコンパイラーがチェックし、問題があった場合にはエラーを返します。 For more information about thread-safety rules, please refer to the *Writing a thread-safe method* paragraph in the *Processes* chapter of the [4D Language Reference](https://doc.4d.com) manual.

## 4D Webコードのスレッドセーフティ

Web関連のほとんどの 4Dコマンドや関数、データベースメソッド、そして URL がスレッドセーフとなり、プリエンプティモードで使用できます。

### 4Dコマンドとデータベースメソッド

すべての Web関連コマンドはスレッドセーフです:

*   *Webサーバー* テーマの全コマンド
*   *HTTPクライアント* テーマの全コマンド

Web関連のデータベースメソッドもスレッドセーフであり、プリエンプティモードで使用することが可能です: `On Web Authentication`, `On Web Connection`, `On REST Authentication`...)。

もちろん、これらのメソッドによって実行されるコードもまたスレッドセーフである必要があります。


### WebサーバーURL

以下の 4D WebサーバーURLはスレッドセーフであり、プリエンプティモードで使用可能です:

*   *4daction/* (呼び出されるプロジェクトメソッドもまたスレッドセーフでなければいけません)
*   *4dcgi/* (呼び出されるデータベースメソッドもまたスレッドセーフでなければいけません)
*   *4dwebtest/*
*   *4dblank/*
*   *4dstats/*
*   *4dhtmlstats/*
*   *4dcacheclear/*
*   *rest/*
*   *4dimgfield/* (ピクチャーフィールドの Webリクエストに対し `PROCESS 4D TAGS` によって生成されます)
*   *4dimg/* (ピクチャー変数の Webリクエストに対し `PROCESS 4D TAGS` によって生成されます)

### プリエンプティブWebプロセスアイコン

ランタイムエクスプローラーと 4D Server管理ウィンドウの両方において、プリエンプティブな Webプロセスに対し専用アイコンが表示されるようになりました:

| プロセスタイプ         | アイコン                                     |
| --------------- | ---------------------------------------- |
| プリエンプティブWebメソッド | ![](assets/en/WebServer/processIcon.png) |



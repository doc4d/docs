---
id: data-collect
title: データ収集
---

4D製品を改善し続けるために、実行中の 4D Server アプリケーションの使用状況データを自動的に収集します。 収集されるデータは完全に匿名で、データ収集がユーザーエクスペリエンスに影響を与えることはありません。

このページは以下を説明します:

- どのような情報が収集されるか
- どこに情報が保存され、いつ 4Dに送信されるか
- ビルドされたクライアント/サーバーアプリケーションで自動データ収集を無効にする方法。

## 収集される情報

以下のイベント中にデータが収集されます:

- データベースが開かれる
- データベースが閉じられる
- Webサーバーが起動される
- php実行
- クライアントが接続される
- 収集データが送信される

また、一部のデータは一定時間ごとに収集されます。

### データベース起動時に収集される情報

| データ                     | タイプ                               | 注記                                                                                                          |
| ----------------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| CPU                     | Text                              | プロセッサーの名前、種類、および速度                                                                                          |
| numberOfCores           | Number                            | コアの合計数                                                                                                      |
| memory                  | Number                            | マシン上で利用可能なメモリ容量 (バイト単位)                                                                  |
| system                  | Text                              | OS のバージョンとビルド番号                                                                                             |
| headless                | Boolean                           | アプリケーションがヘッドレスモードで実行されている場合は true                                                                           |
| version                 | Number                            | 4Dアプリケーションのバージョン番号                                                                                          |
| buildNumber             | Number                            | 4Dアプリケーションのビルド番号                                                                                            |
| license                 | Object                            | 製品ライセンスの名称と説明                                                                                               |
| isRosetta               | Boolean                           | macOS の Rosetta で 4D がエミュレートされている場合は True、そうでない場合は False (エミュレートされていない、または Windows の場合)。 |
| uniqueID                | Text                              | 4D Server の固有ID                                                                                             |
| id                      | Text (ハッシュ文字列) | Unique id associated to the database (_Polynomial Rolling hash of the database name_)    |
| dataFileSize            | Number                            | データファイルのサイズ (バイト単位)                                                                      |
| indexesSize             | Number                            | インデックスのサイズ (バイト単位)                                                                       |
| cacheSize               | Number                            | キャッシュのサイズ (バイト単位)                                                                        |
| usingLegacyNetworkLayer | Boolean                           | アプリケーションサーバーに旧式ネットワークレイヤーが使用されている場合は true                                                                   |
| usingQUICNetworkLayer   | Boolean                           | データベースが QUICネットワークレイヤーを使用している場合は True                                                                       |
| encryptedConnections    | Boolean                           | クライアント/サーバー接続が暗号化されている場合は True                                                                              |
| encrypted               | Boolean                           | データファイルが暗号化されていれば true                                                                                      |
| compiled                | Boolean                           | アプリケーションがコンパイル済みの場合は true                                                                                   |
| isEngined               | Boolean                           | アプリケーションに 4D Volume Desltop が組み込まれている場合は true                                                               |
| projectMode             | Boolean                           | アプリケーションがプロジェクトの場合は true                                                                                    |
| mobile                  | Collection                        | モバイルセッションに関する情報                                                                                             |

### Webサーバー起動時、収集データの送信時に収集される情報

| データ       | タイプ    | 注記                                                     |
| --------- | ------ | ------------------------------------------------------ |
| webServer | Object | Webサーバーが起動中、または起動済みの場合は "started":true |

### 一定時間ごとに収集される情報

| データ                         | タイプ    | 注記           |
| --------------------------- | ------ | ------------ |
| maximumNumberOfWebProcesses | Number | 最大同時Webプロセス数 |
| maximumUsedPhysicalMemory   | Number | 最大使用した物理メモリ  |
| maximumUsedVirtualMemory    | Number | 最大使用した仮想メモリ  |

### 収集データの送信時に収集される情報

| データ                                         | タイプ    | 注記                                                |
| ------------------------------------------- | ------ | ------------------------------------------------- |
| uptime                                      | Number | ローカル4Dデータベースが開かれてからの経過時間 (秒単位) |
| cacheReadBytes                              | Object | キャッシュから読み出したバイト数                                  |
| cacheMissBytes                              | Object | キャッシュミスバイト数                                       |
| cacheReadCount                              | Object | キャッシュの読み出し回数                                      |
| cacheMissCount                              | Object | キャッシュミス回数                                         |
| dataSegment1.diskReadBytes  | Object | データファイルから読み取ったバイト数                                |
| dataSegment1.diskWriteBytes | Object | データファイルに書き込んだバイト数                                 |
| dataSegment1.diskReadCount  | Object | データファイルからの読み取り回数                                  |
| dataSegment1.diskWriteCount | Object | データファイルへの書き込み回数                                   |
| indexSegment.diskReadBytes  | Number | インデックスファイルから読み取ったバイト数                             |
| indexSegment.diskWriteBytes | Number | インデックスファイルに書き込んだバイト数                              |
| indexSegment.diskReadCount  | Number | インデックスファイルからの読み取り回数                               |
| indexSegment.diskWriteCount | Number | インデックスファイルへの書き込み回数                                |

### データベースの終了時、収集データの送信時に収集される情報

| データ                            | タイプ    | 注記                       |
| ------------------------------ | ------ | ------------------------ |
| webserverHits                  | Number | データ収集中の Webサーバーのヒット数     |
| restHits                       | Number | データ収集中の RESTサーバーのヒット数    |
| webserverBytesIn               | Number | データ収集中に Webサーバーが受信したバイト数 |
| webserverBytesOut              | Number | データ収集中に Webサーバーが送信したバイト数 |
| qodly.webforms | Number | Qodly Webフォームの数          |

### PHP execute の呼び出し毎に収集される情報

| データ         | タイプ     | 注記                                                                                  |
| ----------- | ------- | ----------------------------------------------------------------------------------- |
| phpCall     | Number  | Number of calls to `PHP execute`                                                    |
| externalPHP | Boolean | True if the client performs a call to `PHP execute` and uses its own version of php |

### クライアント接続時に収集される情報

| データ                        | タイプ        | 注記                                                           |
| -------------------------- | ---------- | ------------------------------------------------------------ |
| maximum4DClientConnections | Number     | サーバーへのクライアントの最大接続数                                           |
| connectionSystems          | Collection | ビルド番号 (括弧内) なしのクライアントOSと、それを使用しているクライアント数 |

## 保存先と送信先

収集されたデータは、4D Server の終了時にデータベース毎にテキストファイル (JSON形式) に書き込まれます。 The file is stored inside the [active 4D folder](https://doc.4d.com/4dv20/help/command/en/page485.html), i.e.:

- on Windows: `Users\[userName]\AppData\Roaming\4D Server`
- on macOS: `/Users/[userName]/Library/ApplicationSupport/4D Server`

週に一度、ファイルはネットワーク経由で自動的に 4D に送信されます。 その後、ファイルは Active 4D Folder から削除されます。

![](../assets/en/Admin/data-collect.png)

> 何らかの理由でファイルを送信できなかった場合でも、ファイルは削除され、4D Server にエラーメッセージは表示されません。

The file is sent to the following server address: `https://dcollector.4d.com` (ip: 195.68.52.83).

## ビルドされたクライアント/サーバーアプリケーションで自動データ収集を無効にする

You can disable the automatic data collection in [client/server built applications](../Desktop/building.md#clientserver-page).

To disable the collection, pass the value **False** to the [`ServerDataCollection`](https://doc.4d.com/4Dv20/4D/20/ServerDataCollection.300-6335775.en.html) key in the `buildApp.4DSettings` file, used to build the client/server application.

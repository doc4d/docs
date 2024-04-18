---
id: debugLogFiles
title: ログファイル
---

4Dアプリケーションは、デバッグや実行の最適化のために有用な複数のログファイルを生成することができます。 Logs are usually started or stopped using selectors of the [SET DATABASE PARAMETER](https://doc.4d.com/4dv20/help/command/en/page642.html), [WEB SET OPTION](https://doc.4d.com/4dv20/help/command/en/page1210.html), or [HTTP SET OPTION](https://doc.4d.com/4dv20/help/command/en/page1160.html) commands and are stored in the [Logs folder](Project/architecture.md#logs) of the project.

記録された情報は、問題の検知と修正のためには分析する必要があります。 この章では、以下のログファイルの詳細を説明します:

- [4DRequestsLog.txt](#4drequestslogtxt)
- [4DRequestsLog_ProcessInfo.txt](l#4drequestslog_processinfotxt)
- [HTTPDebugLog.txt](#httpdebuglogtxt)
- [4DHTTPClientLog.txt](#4dhttpclientlogtxt)
- 4DDebugLog.txt ([standard](#4ddebuglogtxt-standard) & [tabular](#4ddebuglogtxt-tabular))
- [4DDiagnosticLog.txt](#4ddiagnosticlogtxt)
- [4DIMAPLog.txt](#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
- [4DPOP3Log.txt](#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
- [4DSMTPLog.txt](#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
- [ORDA requests log file](#orda-requests)

> サーバーとクライアントの両方においてログファイルが生成可能な場合、サーバー側のログファイル名には "Server" が追加されます。 たとえば、"4DRequestsLogServer.txt" のようにです。

これらのログファイルは、デバッグ中に時系列を確立しエントリー間のつながりを分かりやすくするために、いくつかのフィールドを共有しています:

- `sequence_number`: this number is unique over all debug logs and is incremented for each new entry whatever the log file, so that you can know the exact sequence of the operations.
- `connection_uuid`: for any 4D process created on a 4D client that connects to a server, this connection UUID is logged on both server and client side. これにより各プロセスを開始したリモートクライアントを簡単に識別することができます。

## 4DRequestsLog.txt

このログファイルは、コマンドを実行した 4D Serverマシンあるいは 4Dリモートマシンによっておこなわれる標準のリクエストを記録します (Webリクエストを除く)。

このログの開始方法:

- サーバー上:

```4d
SET DATABASE PARAMETER(4D Server log recording;1)
// サーバーサイド
```

- クライアント上:

```4d
SET DATABASE PARAMETER(Client Log Recording;1)
// リモートサイド
```

> This statement also starts the [4DRequestsLog_ProcessInfo.txt](#4drequestslog_processinfotxt) log file.

#### ヘッダー

このファイルは以下のヘッダーから始まります:

- Logセッション識別子
- アプリケーションをホストしているサーバーのホスト名
- ユーザーログイン名: サーバー上で 4Dアプリケーションを実行したユーザーの OS上のログイン名

#### 内容

各リクエストに対して、以下のフィールドが記録されます:

| フィールド名                                                                         | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sequence_number                                           | ログセッション内で固有かつシーケンシャルなオペレーション番号                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| time                                                                           | 'YYYY-MM-DDTHH:MM:SS.mmm' の ISO 8601フォーマットを使用した日付と時間                                                                                                                                                                                                                                                                                                                                                                            |
| systemid                                                                       | システムID                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| component                                                                      | コンポーネント署名 (例: '4SQLS' または 'dbmg')                                                                                                                                                                                                                                                                                                                                                                                                            |
| process\_info\_index               | 4DRequestsLog_ProcessInfo.txt ログの "index"フ ィールドに対応し、リクエストとプロセスのリンクを可能にします。                                                                                                                                                                                                                                                                                                                                                                 |
| request                                                                        | [C/S or ORDA request ID](https://github.com/4d/request-log-definitions/blob/master/RequestIDs.txt) or message string for SQL requests or `LOG EVENT` messages                                                                                                                                                                                                                                                                                                                   |
| bytes_in                                                  | 受信したバイト数                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| bytes_out                                                 | 送信したバイト数                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| server\_duration \| exec\_duration | Depends on where the log is generated:<li>_server\_duration_ when generated on the client --Time taken in microseconds for the server to process the request and return a response. B to F in image below, OR</li><li>_exec\_duration_ when generated on the server --Time taken in microseconds for the server to process the request. B to E in image below.</li> |
| write\_duration                                          | Time taken in microseconds for sending the:<li>Request (when run on the client). A to B in image below.</li><li>Response (when run on the server). E to F in image below.</li>                                                                                                                                                                            |
| task_kind                                                 | プリエンプティブかコオペラティブか (それぞれ 'p' と 'c' で表される)                                                                                                                                                                                                                                                                                                                                                                                                                     |
| rtt                                                                            | クライアントがリクエストを送信してサーバーがそれを受け取るまでにかかる時間の概算 (マイクロ秒単位)。 A to D and E to H in image below.<li>Only measured when using the ServerNet network layer, returns 0 when used with the legacy network layer.</li><li>For Windows versions prior to Windows 10 or Windows Server 2016, the call will return 0.</li>                                                                                                      |
| extra                                                                          | コンテキストに関連する追加情報 (ORDAリクエストの場合、データクラス名や属性名など)                                                                                                                                                                                                                                                                                                                                                                                                                 |

リクエストフロー:

![](../assets/en/Admin/logRequestFlow.PNG)

## 4DRequestsLog_ProcessInfo.txt

このログファイルは、コマンドを実行した 4D Serverマシンあるいは 4Dリモートマシンによって作成された各プロセスについての情報を記録します (Webリクエストを除く)。

このログの開始方法:

- サーバー上:

```4d
SET DATABASE PARAMETER(4D Server log recording;1) // サーバーサイド
```

- クライアント上:

```4d
SET DATABASE PARAMETER(Client Log Recording;1) // リモートサイド
```

> This statement also starts the [4DRequestsLog.txt](#4drequestslogtxt) log file.

#### ヘッダー

このファイルは以下のヘッダーから始まります:

- Logセッション識別子
- アプリケーションをホストしているサーバーのホスト名
- ユーザーログイン名: サーバー上で 4Dアプリケーションを実行したユーザーの OS上のログイン名

#### 内容

各プロセスに対して、以下のフィールドが記録されます:

| フィールド名                                                                                        | 説明                                                                                                   |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| sequence_number                                                          | ログセッション内で固有かつシーケンシャルなオペレーション番号                                                                       |
| time                                                                                          | "YYYY-MM-DDTHH:MM:SS.mmm" の ISO 8601フォーマットを使用した日付と時間 |
| process\_info\_index                              | 固有かつシーケンシャルなプロセス番号                                                                                   |
| CDB4DBaseContext                                                                              | DB4DコンポーネントデータベースコンテキストUUID                                                                          |
| systemid                                                                                      | システムID                                                                                               |
| server\_process\_id                               | サーバー上のプロセスID                                                                                         |
| remote\_process\_id                               | クライアント上のプロセスID                                                                                       |
| process\_name                                                           | プロセス名                                                                                                |
| cID                                                                                           | 4D接続の識別子                                                                                             |
| uID                                                                                           | 4Dクライアントの識別子                                                                                         |
| IP Client                                                                                     | IPv4/IPv6アドレス                                                                                        |
| host_name                                                                | クライアントのホスト名                                                                                          |
| user_name                                                                | クライアント上のユーザーログイン名                                                                                    |
| connection\_uuid                                                        | プロセス接続の UUID識別子                                                                                      |
| server\_process\_unique\_id | サーバー上の固有プロセスID                                                                                       |

## HTTPDebugLog.txt

このログファイルは、各 HTTPリクエストとそれぞれのレスポンスを rawモードで記録します。 ヘッダーを含むリクエスト全体が記録され、オプションでボディ部分も記録することができます。

このログの開始方法:

```4d

WEB SET OPTION(Web debug log;wdl enable without body)  
//other values are available
```

リクエストとレスポンスの両方に対して以下のフィールドが記録されます:

| フィールド名         | 説明                                                     |
| -------------- | ------------------------------------------------------ |
| SocketID       | 通信に使用されたソケットの ID                                       |
| PeerIP         | ホスト (あるいはクライアント) の IPv4アドレス         |
| PeerPort       | ホスト (あるいはクライアント) が使用したポート番号         |
| TimeStamp      | (システムが開始されてからの) ミリ秒単位でのタイムスタンプ      |
| ConnectionID   | 接続UUID (通信に使用された VTCPSocket の UUID) |
| SequenceNumber | ログセッション内で固有かつシーケンシャルなオペレーション番号                         |

## 4DHTTPClientLog.txt

このログファイルは、4D HTTPクライアントを通過する HTTPトラフィックを記録します。 ヘッダーを含むリクエストおよびレスポンス全体が記録され、オプションでボディ部分も記録することができます。

このログの開始方法:

```4d

HTTP SET OPTION(HTTP client log; HTTP enable log with all body parts)  
//other values are available
```

リクエストとレスポンスの両方に対して以下のフィールドが記録されます:

| フィールド名          | 説明                                                                |
| --------------- | ----------------------------------------------------------------- |
| SequenceID      | ログセッション内で固有かつシーケンシャルなオペレーション番号                                    |
| ConnectionID    | プロセス接続の UUID識別子                                                   |
| LocalIP         | クライアントの IPアドレス                                                    |
| PeerIP          | サーバー IPアドレス                                                       |
| TimeStamp       | リクエストが送信された時点、またはレスポンスが完全に受信された時点のタイムスタンプ (ms) |
| ElapsedTimeInMs | (レスポンスのみ) リクエストタイムスタンプとの差分                     |

ログオプションに応じて、他の様々なフィールドを記録に含めることができます。

- リクエストの場合: リクエスト行、ヘッダー、リクエスト本文
- レスポンスの場合: ステータス行、ヘッダー、非圧縮のレスポンス本文 (あれば)

## 4DDebugLog.txt (標準)

このログファイルは、4Dプログラミングレベルで発生するそれぞれのイベントを記録します。 標準モードではイベントの基本的なビューを提供します。

このログの開始方法:

```4d
SET DATABASE PARAMETER(Debug Log Recording;2)  
// 標準、全プロセスを記録

SET DATABASE PARAMETER(Current process debug log recording;2)  
// 標準、カレントプロセスのみを記録
```

それぞれのイベントに対して、以下のフィールドが記録されます:

| カラム番号 | 説明                                                                                                                |
| ----- | ----------------------------------------------------------------------------------------------------------------- |
| 1     | ログセッション内で固有かつシーケンシャルなオペレーション番号                                                                                    |
| 2     | ISO 8601フォーマットの日付と時間 (YYYY-MM-DDTHH:MM:SS.mmm) |
| 3     | プロセスID (p=xx) と固有プロセスID (puid=xx)                                           |
| 4     | スタックレベル                                                                                                           |
| 5     | コマンド名/メソッド名/メッセージ/タスクの開始・停止情報/プラグイン名、イベント、あるいはコールバックUUID または接続UUID                                                |
| 6     | ログオペレーションにかかった時間 (ミリ秒単位)                                                                       |

## 4DDebugLog.txt (タブ分け)

このログファイルは、4Dのプログラミングレベルで発生する各イベントについて、(標準フォーマットに比べて) 追加情報を含めた、タブ分けされたコンパクトなフォーマットで記録します。

このログの開始方法:

```4d
SET DATABASE PARAMETER(Debug Log Recording;2+4)  
// 拡張されたタブ分けされたフォーマット、全プロセスを記録

SET DATABASE PARAMETER(Current process debug log recording;2+4)  
// 拡張されたタブ分けされたフォーマット、カレントプロセスのみを記録
```

それぞれのイベントに対して、以下のフィールドが記録されます:

| カラム番号 | フィールド名                                                                                       | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | sequence_number                                                         | ログセッション内で固有かつシーケンシャルなオペレーション番号                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2     | time                                                                                         | ISO 8601フォーマットの日付と時間 (YYYY-MM-DDTHH:MM:SS.mmm)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 3     | ProcessID                                                                                    | ```
プロセスID
```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 4     | unique_processID                                                        | 固有プロセスID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 5     | stack_level                                                             | スタックレベル                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 6     | operation_type                                                          | ログオペレーションタイプ。 This value may be an absolute value:<p><ol><li>Command</li><li>Method (project method, database method, etc.)</li><li>Message (sent by [LOG EVENT](https://doc.4d.com/4dv20/help/command/en/page667.html) command only)</li><li>PluginMessage</li><li>PluginEvent</li><li>PluginCommand</li><li>PluginCallback</li><li>Task</li><li>Member method (method attached to a collection or an object)</li></ol></p>When closing a stack level, the `operation_type`, `operation` and `operation_parameters` columns have the same value as the opening stack level logged in the `stack_opening_sequence_number` column. For example:<p><ol><li>121  15:16:50:777  5  8  1  2 CallMethod Parameters 0</li><li>122  15:16:50:777  5  8  2  1 283  0</li><li>123  15:16:50:777  5  8  2  1 283  0 122 3</li><li>124  15:16:50:777  5  8  1  2 CallMethod Parameters 0 121 61</li></ol></p>The 1st and 2nd lines open a stack level, the 3rd and 4th lines close a stack level. 6、7、8カラム目の値は、終了スタックレベル行において繰り返されます。 10カラム目にはスタックレベル開始番号、つまり 3行目の 122 と 4行目の 121 が格納されます。 |
| 7     | operation                                                                                    | May represent (depending on operation type):<li>a Language Command ID (when type=1)</li><li>a Method Name (when type=2)</li><li>a combination of pluginIndex;pluginCommand (when type=4, 5, 6 or 7). May contain something like '3;2'</li><li>a Task Connection UUID (when type=8)</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 8     | operation_parameters                                                    | コマンド、メソッド、プラグインに渡された引数                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 9     | form_event                                                              | フォームイベント (あれば)。その他の場合には空になります (フォームメソッドまたはオブジェクトメソッド内でコードが実行された場合に使用されると考えて下さい)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 10    | stack_opening_sequence_number | スタックレベルを閉じる時のみ: 開始スタックレベルに対応するシーケンス番号                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 11    | stack_level_execution_time    | スタックレベルを閉じる時のみ: 現在記録されているアクションの経過時間をマイクロ秒単位で表します (上記ログの123 行目と124 行目の 10番目のカラムを参照ください)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

## 4DDiagnosticLog.txt

このログファイルには、アプリケーションの内部オペレーションに関連した複数のイベントが、人間にも読めるように記録されます。 You can include custom information in this file using the [LOG EVENT](https://doc.4d.com/4dv19/help/command/en/page667.html) command.

このログの開始方法:

```4d
 SET DATABASE PARAMETER(Diagnostic log recording;1) //start recording
```

それぞれのイベントに対して、以下のフィールドが記録されます:

| フィールド名             | 説明                                                                                                                |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| sequenceNumber     | ログセッション内で固有かつシーケンシャルなオペレーション番号                                                                                    |
| timestamp          | ISO 8601フォーマットの日付と時間 (YYYY-MM-DDTHH:MM:SS.mmm) |
| loggerID           | 任意                                                                                                                |
| componentSignature | 任意 - 内部コンポーネント署名                                                                                                  |
| messageLevel       | 情報、警告、エラーなど                                                                                                       |
| message            | ログエントリーの詳細                                                                                                        |

イベントによって、タスク、ソケットなど様々な他のフィールドを記録に含めることができます。

### ファイルを有効化する方法

The _4DDiagnosticLog.txt_ file can log different levels of messages, from `ERROR` (most important) to `TRACE` (less important). By default, the `INFO` level is set, which means that the file will log only important events, including errors and unexpected results (see below).

You can select the level of messages using the `Diagnostic log level` selector of the [SET DATABASE PARAMETER](https://doc.4d.com/4dv20/help/command/en/page642.html) command, depending on your needs. あるレベルを選択すると、その上のレベル (より重要なもの) も暗黙のうちに選択されます。 次のレベルが利用可能です:

| 定数          | 説明                                                                                                               | 選択時に次を含みます                                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `Log error` | ログセッション内で固有かつシーケンシャルなオペレーション番号                                                                                   | `Log error`                                                   |
| `Log warn`  | RFC3339 フォーマットの日付と時間 (yyyy-mm-ddThh:mm:ss.ms) | `Log error`, `Log warn`                                       |
| `Log info`  | _Default level_ - Important application event                                                                    | `Log error`, `Log warn`, `Log info`                           |
| `Log debug` | 固有プロセスID                                                                                                         | `Log error`, `Log warn`, `Log info`, `Log debug`              |
| `Log trace` | その他の内部情報 (4Dテクニカルサービス用)                                                                       | `Log error`, `Log warn`, `Log info`, `Log debug`, `Log trace` |

例:

```4d
SET DATABASE PARAMETER (Diagnostic log recording; 1)
SET DATABASE PARAMETER (Diagnostic log level; Log trace)
```

## 4DSMTPLog.txt, 4DPOP3Log.txt, および 4DIMAPLog.txt

これらのログファイルは、以下のコマンドを使用して始動された、4Dアプリケーションとメールサーバー (SMTP、POP3、IMAP) 間の通信をそれぞれ記録します:

- SMTP - [SMTP New transporter](API/SMTPTransporterClass.md#smtp-new-transporter)
- POP3 - [POP3 New transporter](API/POP3TransporterClass.md#pop3-new-transporter)
- IMAP  - [IMAP New transporter](API/IMAPTransporterClass.md#imap-new-transporter)

2種類のログファイルを生成することができます:

- 通常バージョン:
  - 4DSMTPLog.txt, 4DPOP3Log.txt, および 4DIMAPLog.txt と名前がつけられます。
  - 添付ファイルは含めません
  - 10MBごとの自動循環ファイルリサイクルを使用します。
  - 通常のデバッギング用途を想定しています。

このログを開始するには:

```4d
SET DATABASE PARAMETER(SMTP Log;1) // SMTPログを開始
 SET DATABASE PARAMETER(POP3 Log;1) // POP3ログを開始
 SET DATABASE PARAMETER(IMAP Log;1) // IMAPログを開始
```

> 4D Server: Click on the **Start Request and Debug Logs** button in the [Maintenance Page](ServerWindow/maintenance.md) of the 4D Server administration window.

このログのパスは `Get 4D file` コマンドによって返されます。

- 拡張バージョン:
  - 添付ファイルも含まれます。
    自動ファイルリサイクルは使用されません。
  - カスタムの名前を使用できます。
  - 特定の目的のために用意されています。

このログを開始するには:

```4d
$server:=New object
...
//SMTP
$server.logFile:="MySMTPAuthLog.txt"
$transporter:=SMTP New transporter($server)

// POP3
$server.logFile:="MyPOP3AuthLog.txt"
$transporter:=POP3 New transporter($server)

//IMAP
$server.logFile:="MyIMAPAuthLog.txt"
$transporter:=IMAP New transporter($server)
```

#### 内容

各リクエストに対して、以下のフィールドが記録されます:

| カラム番号 | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | ログセッション内で固有かつシーケンシャルなオペレーション番号                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2     | RFC3339 フォーマットの日付と時間 (yyyy-mm-ddThh:mm:ss.ms)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3     | 4DプロセスID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 4     | 固有プロセスID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 5     | <ul><li>SMTP,POP3, or IMAP session startup information, including server host name, TCP port number used to connect to SMTP,POP3, or IMAP server and TLS status,or</li><li>data exchanged between server and client, starting with "S <" (data received from the SMTP,POP3, or IMAP server) or "C >" (data sent by the SMTP,POP3, or IMAP client): authentication mode list sent by the server and selected authentication mode, any error reported by the SMTP,POP3, or IMAP Server, header information of sent mail (standard version only) and if the mail is saved on the server,or</li><li>SMTP,POP3, or IMAP session closing information.</li></ul> |

## ORDAリクエスト

ORDAリクエストログは、ORDAリクエストとサーバーのレスポンスを記録することができます。 2種類の ORDAリクエストログが利用可能です:

- クライアント側の ORDAリクエストログ (.txt形式)
- サーバー側の ORDAリクエストログ (.jsonl形式)

### クライアント側

クライアント側の ORDAログファイルには、リモートマシンが送信する ORDAリクエストが記録されます。 ログ情報はメモリか、リモートマシンディスク上の .txtファイルに書くことができます。 このログファイルの名称や保管場所は任意に決めることができます。

このログの開始方法:

```4d
	//on a remote machine
SET DATABASE PARAMETER(Client Log Recording;1)  
ds.startRequestLog(File("/PACKAGE/Logs/ordaLog.txt"))
	//can be also sent to memory
SET DATABASE PARAMETER(Client Log Recording;0)  
```

:::note

Triggering the client-side [4DRequestsLog.txt](#4drequestslogtxt) using `SET DATABASE PARAMETER` is not mandatory. However, it is required if you want to log the unique `sequenceNumber` field.

:::

各リクエストに対して、以下のフィールドが記録されます:

| フィールド名         | 説明                                        | 例題                                                                                                                                                                                                                                                      |
| -------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sequenceNumber | ログセッション内で固有かつシーケンシャルなオペレーション番号            | 104                                                                                                                                                                                                                                                     |
| url            | リクエストURL                                  | "rest/Persons(30001)"                                                                                                                                                                                                                |
| startTime      | 開始日時 (ISO 8601 フォーマット) | "2019-05-28T08:25:12.346Z"                                                                                                                                                                              |
| endTime        | 終了日時 (ISO 8601 フォーマット) | "2019-05-28T08:25:12.371Z"                                                                                                                                                                              |
| duration       | クライアント処理時間 (ミリ秒)       | 25                                                                                                                                                                                                                                                      |
| response       | サーバーレスポンスオブジェクト                           | {"status":200,"body":{"__entityModel":"Persons",\[...]}} |

#### 例題

以下は、クライアント側の ORDAログファイル記録の一例です:

```json
	{
		"sequenceNumber": 7880,
		"url": "rest/Employees/$entityset/F910C2E4A2EE6B43BBEE74A0A4F68E5A/Salary?$compute='sum'&$progress4Dinfo='D0706F1E77D4F24985BE4DDE9FFA1739'",
		"startTime": "2023-05-15T10:43:39.400Z",
		"endTime": "2023-05-15T10:43:39.419Z",
		"duration": 19,
		"response": {
			"status": 200,
			"body": 75651
		}
	}
```

### サーバー側

サーバー側の ORDAログファイルには、サーバーが処理した ORDAリクエストと、サーバーのレスポンス (任意) が記録されます。 Log information is saved in a .jsonl file on the server machine disk (by default, _ordaRequests.jsonl_).

このログの開始方法:

```4d
	//on the server
SET DATABASE PARAMETER(4D Server log recording;1)
ds.startRequestLog(File("/PACKAGE/Logs/ordaRequests.jsonl");srl log response without body)
	//srl... parameter is optional
SET DATABASE PARAMETER(4D Server log recording;0)
```

:::note

Triggering the server-side [4DRequestsLog.txt](#4drequestslogtxt) using `SET DATABASE PARAMETER` is not mandatory. However, it is required if you want to log the unique `sequenceNumber` and the `duration` fields.

:::

各リクエストに対して、以下のフィールドが記録されます:

| フィールド名         | 説明                                                                                                            | 例題                                                                                                                                                                                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sequenceNumber | ログセッション内で固有かつシーケンシャルなオペレーション番号                                                                                | 104                                                                                                                                                                                                                                                     |
| url            | リクエストURL                                                                                                      | "rest/Persons(30001)"                                                                                                                                                                                                                |
| startTime      | 開始日時 (ISO 8601 フォーマット)                                                                     | "2019-05-28T08:25:12.346Z"                                                                                                                                                                              |
| duration       | サーバー処理時間 (マイクロ秒)                                                                           | 2500                                                                                                                                                                                                                                                    |
| response       | Server response object, can be configured in [`.startRequestLog()`](../API/DataStoreClass.md#startrequestlog) | {"status":200,"body":{"__entityModel":"Persons",\[...]}} |
| ipAddress      | ユーザー IPアドレス                                                                                                   | "192.168.1.5"                                                                                                                                                                                           |
| userName       | 4D ユーザーの名前                                                                                                    | "henry"                                                                                                                                                                                                                                                 |
| systemUserName | マシン上でのユーザーのログイン名                                                                                              | "hsmith"                                                                                                                                                                                                                                                |
| machineName    | ユーザーマシンの名前                                                                                                    | "PC of Henry Smith"                                                                                                                                                                                                                                     |

#### 例題

以下は、サーバー側の ORDAログ記録の一例です:

```json
   {
		"url": "rest/Employees/$entityset/F910C2E4A2EE6B43BBEE74A0A4F68E5A/Salary?$compute='sum'&$progress4Dinfo='D0706F1E77D4F24985BE4DDE9FFA1739'",
		"systemUserName": "Admin",
		"userName": "Designer",
		"machineName": "DESKTOP-QSK9738",
		"taskID": 5,
		"taskName": "P_1",
		"startTime": "2023-05-15T11:43:39.401",
		"response": {
			"status": 200,
			"body": 75651
		},
		"sequenceNumber": 7008,
		"duration": 240
	}

```

## ログ設定ファイルを使用する

You can use a **log configuration file** to easily manage log recording in a production environment. このファイルは、デベロッパーによってあらかじめ設定されています。 一般的には、エンドユーザーに送って、選択してもらうか、ローカルフォルダーにコピーしてもらいます。 一旦有効化されると、ログ設定ファイルは専用仕様のログ記録を開始します。

### ファイルを有効化する方法

環境に応じて、ログ設定ファイルを有効化する方法はいくつかあります:

- **4D Server with interface**: you can open the Maintenance page and click on the [Load logs configuration file](ServerWindow/maintenance.md#load-logs-configuration-file) button, then select the file. この場合、設定ファイルには任意の名前を使用することができます。 ファイルは、サーバー上で即座に有効化されます。
- **an interpreted or compiled project**: the file must be named `logConfig.json` and copied in the [Settings folder](../Project/architecture.md#settings-1) of the project (located at the same level as the [`Project` folder](../Project/architecture.md#project-folder)). このファイルは、プロジェクトの起動時に有効化されます (クライアント/サーバーのサーバーのみ)。
- **a built application**: the file must be named `logConfig.json` and copied in the following folder:
  - Windows: `Users\[userName]\AppData\Roaming\[application]`
  - macOS: `/Users/[userName]/Library/ApplicationSupport/[application]`
- **all projects with a stand-alone or remote 4D**: the file must be named `logConfig.json` and copied in the following folder:
  - Windows: `Users\[userName]\AppData\Roaming\4D`
  - macOS: `/Users/[userName]/Library/ApplicationSupport/4D`
- **all projects with 4D Server**: the file must be named `logConfig.json` and copied in the following folder:
  - Windows: `Users\[userName]\AppData\Roaming\4D Server`
  - macOS: `/Users/[userName]/Library/ApplicationSupport/4D Server`

:::note

If a `logConfig.json` file is installed in both Settings and AppData/Library folders, the Settings folder file will have priority.

:::

### JSONでの記述

The log configuration file is a `.json` file that must comply with the following json schema:

```json
{
    "$schema": "http://json-schema.org/draft-07/schema",
    "title": "Logs Configuration File",
    "description": "A file that controls the state of different types of logs in 4D clients and servers",
    "type": "object",
    "properties": {
        "forceConfiguration": {
            "description": "Forcing the logs configuration described in the file ingoring changes coming from code or user interface",
            "type": "boolean",
            "default": true
        },
        "requestLogs": {
            "description": "Configuration for request logs",
            "type": "object",
            "properties": {
                "clientState": {
                    "description": "Enable/Disable client request logs (from 0 to N)",
                    "type": "integer",
                    "minimum": 0
                },
                "serverState": {
                    "description": "Enable/Disable server request logs (from 0 to N)",
                    "type": "integer",
                    "minimum": 0
                }
            }
        },
        "debugLogs": {
            "description": "Configuration for debug logs",
            "type": "object",
            "properties": {
                "commandList": {
                    "description": "Commands to log or not log",
                    "type": "array",
                    "items": {
                        "type": "string"
                    },
                    "minItems": 1,
                    "uniqueItems": true
                },
                "state": {
                    "description": "integer to specify type of debuglog and options",

                    "type": "integer",
                    "minimum": 0
                }
            }
        },
        "diagnosticLogs":{
            "description": "Configuration for debug logs",
            "type": "object",
            "properties": {
                "state":{
                    "description": "Enable/Disable diagnostic logs 0 or 1 (0 = do not record, 1 = record)",
                    "type": "integer",
                    "minimum": 0    
                },
                "level": {
              "description": "Configure diagnostic logs",
              "type": "integer",
              "minimum": 2,
              "maximum": 6
          }
            }
          },
        "httpDebugLogs": {
            "description": "Configuration for http debug logs",
            "type": "object",
            "properties": {
                "level": {
                    "description": "Configure http request logs",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 7
                },
                "state": {
                    "description": "Enable/Disable recording of web requests",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 4
                }
            }
        },
        "HTTPClientLogs": {
		     "description": "Configuration for http client logs",
		     "type": "object",
		     "properties": {
		          "state": {
		               "description": "Configure http client logs",
		               "type": "integer",
		               "minimum": 0,
		               "maximum": 7
		          },
		     }
		},
        "POP3Logs": {
            "description": "Configuration for POP3 logs",
            "type": "object",
            "properties": {
                "state": {
                    "description": "Enable/Disable POP3 logs (from 0 to N)",
                    "type": "integer",
                    "minimum": 0
                }
            }
        },
        "SMTPLogs": {
            "description": "Configuration for SMTP logs",
            "type": "object",
            "properties": {
                "state": {
                    "description": "Enable/Disable SMTP log recording (form 0 to N)",
                    "type": "integer",
                    "minimum": 0
                }
            }
        },
        "IMAPLogs": {
            "description": "Configuration for IMAP logs",
            "type": "object",
            "properties": {
                "state": {
                    "description": "Enable/Disable IMAP log recording (form 0 to N)",
                    "type": "integer"
                }
            }
        },
        "ORDALogs": {
            "description": "Configuration for ORDA logs",
            "type": "object",
            "properties": {
                "state": {
                    "description": "Enable/Disable ORDA logs (0 or 1)",
                    "type": "integer"
                },
                "filename": {
                    "type": "string"
                }
            }
        }
    }
}
```

### 例題

ログ設定ファイルの例です:

```json
{
 "forceLoggingConfiguration": false,
 "requestLogs": {
  "clientState": 1,
  "serverState": 1
 },
 "debugLogs": {
  "commandList":["322","311","112"],
        "state": 4
 },
 "diagnosticLogs":{
        "state" : 1
 },
 "httpDebugLogs": {
  "level": 5,
        "state" : 1
 },
 "POP3Logs": {
        "state" : 1
 },
 "SMTPLogs": {
        "state" : 1
 },
 "IMAPLogs": {
        "state" : 1

 },
 "ORDALogs": {
        "state" : 1,
  "filename": "ORDALog.txt"
 }
}
```

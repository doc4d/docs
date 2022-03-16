---
id: web
title: Web ページ
---

**Web** ページのタブを使用して、4D に統合された Webサーバーの様々な設定 (セキュリティ、開始オプション、接続、Webサービス等) にアクセスできます。 4D Webサーバーの動作に関する詳細は [Web サーバー](../WebServer/webServer.md) を参照ください。 また、Webサービスに関する詳細は [Web サービスの公開と使用](https://doc.4d.com/4Dv19/4D/19/Publication-and-use-of-Web-Services.200-5416624.ja.html) を参照ください。

## 設定

### 公開情報

#### 開始時にWebサーバーを起動

4Dアプリケーションの起動時に Webサーバーを開始するか指定します。 このオプションは [4D Webサーバーの開始](../WebServer/webServerAdmin.md#4d-web-サーバーの開始) で説明しています。

#### HTTPを有効化

安全でない接続を Webサーバーが受け入れるかどうかを示します。 [HTTPを有効化](../WebServer/webServerConfig.md#httpを有効化) 参照。


#### HTTP ポート

HTTP接続を受け付ける IP (TCP) ポート番号。 [HTTP ポート](../WebServer/webServerConfig.md#http-ポート) 参照。

#### IPアドレス

4D Webサーバーが HTTPリクエストを受け付ける IPアドレスを指定できます (4Dローカルおよび 4D Server)。 [リクエストを受け付ける IPアドレス](../WebServer/webServerConfig.md#リクエストを受け付ける-ipアドレス) 参照


#### HTTPSを有効にする

安全な接続を Webサーバーが受け入れるかどうかを示します。 [HTTPSを有効にする](../WebServer/webServerConfig.md#httpsを有効化にする) 参照。


#### HTTPS ポート

TLS (HTTPSプロトコル) を使用したセキュアな HTTP接続に対して Webサーバーが使用する TCP/IPポート番号を指定できます。 [HTTPS ポート](../WebServer/webServerConfig.md#https-ポート) 参照

#### "4DSYNC" URLを使用したデータベースアクセスを許可

*互換性に関する注記*: このオプションは [廃止予定](../WebServer/webServerConfig.md#廃止予定の設定) です。 今後、HTTP を介したデータベースアクセスには ORDA のリモートデータストア機能と RESTリクエストの使用が推奨されます。


### パス

#### デフォルトHTMLルート

Webサイトファイルのデフォルトの位置を指定し、それより上のファイルにはアクセス不能なディスク上の階層レベルを指定します。 [ルートフォルダー](../WebServer/webServerConfig.md#ルートフォルダー) 参照。

#### デフォルトホームページ

Webサーバー用のデフォルトホームページを指定します。 [デフォルトホームページ](../WebServer/webServerConfig.md#デフォルトホームページ) 参照。




## オプション (I)

### キャッシュ


#### 4D Webキャッシュを使用する

Webページキャッシュを有効化します。 [キャッシュ](../WebServer/webServerConfig.md#キャッシュ) 参照。

#### ページキャッシュサイズ

キャッシュサイズを指定します。 [キャッシュ](../WebServer/webServerConfig.md#キャッシュ) 参照。


#### キャッシュクリア

いつでもページやイメージをキャッシュからクリアできます (たとえば、スタティックページを更新し、キャッシュにそれをリロードさせたい場合)。 これをおこなうには、**キャッシュクリア** ボタンをクリックします。 キャッシュは即座にクリアされます。

> 特殊なURL [/4DCACHECLEAR](../WebServer/webServerAdmin.md#4dcacheclear) を使用することもできます。

### Webプロセス

このエリアでは、ユーザーセッションとそれに関連するプロセスを Webサーバーがどのように管理するかを設定します。

> **旧式セッション** オプションは、4D v18 R6 以前のバージョンで作成されたデータベース/プロジェクトにおいて互換性のためにのみ利用可能です。

#### スケーラブルセッション (マルチプロセスセッション)

このオプションを選択すると (推奨)、ユーザーセッションは **Session** オブジェクトを介して管理されます。 [ユーザーセッション](../WebServer/sessions.md#セッションの有効化) のページを参照ください。


#### セッションなし

このオプションが選択されている場合、Webサーバーは [ユーザーセッション](../WebServer/sessions.md) 専用のサポートを提供しません。 Webクライアントからの連続したリクエストはどれも常に独立しており、サーバー上でコンテキストは維持されません。

このモードでは、以下の追加の Web サーバー設定を設定することができます:

-   [最大同時Webプロセス](#maximum-concurrent-web-processes)
-   [一時的なコンテキストを再利用する (リモートモード)](#reuse-temporary-contexts)
-   [プリエンプティブプロセスを使用](#use-preemptive-web-processes)

#### 旧式セッション (シングルプロセスセッション)

*互換性に関する注記*: このオプションは 4D v18 R6 以前のバージョンで作成されたデータベース/プロジェクトでのみ利用可能です。

このオプションは 4D HTTP サーバーの旧式ユーザーセッションの管理を有効化します。 この機構は [Webセッション管理(旧式)](https://doc.4d.com/4Dv19/4D/19/Web-Sessions-Management-Legacy.300-5391806.ja.html) にて詳細に説明されています。 See [Keep Session](../WebServer/webServerConfig.md#keep-session).

When selected, the [Reuse Temporary Contexts (4D in remote mode)](#reuse-temporary-contexts) option is automatically checked (and locked).

#### 最大同時Webプロセス

Not available with [scalable sessions](../WebServer/sessions.md).

Strictly high limit of concurrent web processes. See [Maximum Concurrent Web Processes](../WebServer/webServerConfig.md#maximum-concurrent-web-processes).


#### Reuse Temporary Contexts

Not available with [scalable sessions](../WebServer/sessions.md).

Allows you to optimize the operation of the 4D Web server in remote mode. See [Reuse temporary contexts in remote mode)](../WebServer/webServerConfig.md#reuse-temporary-contexts-in-remote-mode).

#### プリエンプティブプロセスを使用

Not available with [scalable sessions](../WebServer/sessions.md).

Enables preemptive web processes in your compiled applications. When **Use preemptive processes** is selected, the eligibility of your web-related code (including 4D tags and web database methods) to the preemptive execution will be evaluated during the compilation. For more information, see [Using preemptive Web processes](../WebServer/preemptiveWeb.md).

**Note:** This option does not apply to Web service processes (server or client). Preemptive mode is supported by Web service processes at method level: you just have to select "Can be run in preemptive processes" property for published SOAP server methods (see [Publishing a Web Service with 4D](https://doc.4d.com/4Dv19/4D/19/Publishing-a-Web-Service-with-4D.300-5416868.en.html)) or proxy client methods (see [Subscribing to a Web Service in 4D](https://doc.4d.com/4Dv19/4D/19/Subscribing-to-a-Web-Service-in-4D.300-5416870.en.html)) and make sure they are confirmed thread-safe by the compiler.


#### 非動作プロセスのタイムアウト

Not available with [scalable sessions](../WebServer/sessions.md).

Allows you to set the maximum timeout before closing for inactive Web processes on the server. See [Inactive Process Timeout](../WebServer/webServerConfig.md#inactive-process-timeout).



### Web Passwords

Set the authentication system that you want to apply to your Web server. Three options are proposed:

Custom (default) Passwords with BASIC protocol Passwords with DIGEST protocol

Using **Custom** authentication is recommended. See [**Authentication**](../WebServer/authentication.md) chapter in the *Web Development* documentation.


## Options (II)

### Text Conversion

#### 拡張文字をそのまま送信

See [Deprecated Settings](../WebServer/webServerConfig.md#deprecated-settings).

#### Standard Set

Define the set of characters to be used by the 4D Web server. See [Character Set](../WebServer/webServerConfig.md#character-set).

### Keep-Alive接続を使用する

See [Deprecated Settings](../WebServer/webServerConfig.md#keep-alive-connections).

### CORS設定

#### Enable CORS

Enables Cross-origin resource sharing (CORS) service. See [Enable CORS Service](../WebServer/webServerConfig.md#enable-cors-service).

#### Domain names/HTTP methods allowed

CORSサービスで許可されたホストとメソッドの一覧 See [CORS Settings](../WebServer/webServerConfig.md#cors-settings).



## Log (type)


### Log Format

4D Web サーバーが受け取るリクエストのログを開始/停止します。ログは、*logweb.txt* ファイルに記録され、そのフォーマットを指定することができます。 See [Log Recording](../WebServer/webServerConfig.md#log-recording).

> The activation and deactivation of the log file of requests can also be carried out by programming using the [WEB SET OPTION](https://doc.4d.com/4dv19R/help/command/en/page1210.html) command.


The log format menu provides the following options:

-   **No Log File**: When this option is selected, 4D will not generate a log file of requests.

-   **CLF (Common Log Format)**: When this option is selected, the log of requests is generated in CLF format. With the CLF format, each line of the file represents a request, such as:\ host rfc931 user [DD/MMM/YYYY:HH:MM:SS] "request" state length\ Each field is separated by a space and each line ends by the CR/LF sequence (character 13, character 10).

    -   host: IP address of the client (ex. 192.100.100.10)
    -   rfc931: information not generated by 4D, it's always - (a minus sign)
    -   user: user name as it is authenticated, or else it is - (a minus sign). ユーザー名にスペースが含まれると、_ (下線) に置き換わります。
    -   DD: day, MMM: a 3-letter abbreviation for the month name (Jan, Feb,...), YYYY: year, HH: hour, MM: minutes, SS: seconds

> 日付と時間はサーバーのローカルタイム。

-   request: request sent by the client (ex. GET /index.htm HTTP/1.0)
-   state: reply given by the server.
-   length: size of the data returned (except the HTTP header) or 0.

> **Note:** For performance reasons, the operations are saved in a memory buffer in packets of 1Kb before being written to disk. The operations are also written to disk if no request has been sent every 5 seconds. The possible values of state are as follows: 200: OK 204: No contents 302: Redirection 304: Not modified 400: Incorrect request 401: Authentication required 404: Not found 500: Internal error The CLF format cannot be customized.

-   **DLF (Combined Log Format)**: When this option is selected, the request log is generated in DLF format. DLF format is similar to CLF format and uses exactly the same structure. さらに、各リクエストの最後に2つのHTTPフィールド、Referer と User-agent を追加します。

    -   Referer: Contains the URL of the page pointing to the requested document.
    -   User-agent: Contains the name and version of the browser or software of the client at the origin of the request.

> The DLF format cannot be customized.

-   **ELF (Extended Log Format)**: When this option is selected, the request log is generated in ELF format. The ELF format is very widespread in the world of HTTP browsers. そして、特別なニーズに応える洗練されたログを構築します。 この理由により、ELFフォーマットはカスタマイズされます。記録するフィールドやそのフィールドをファイルへ挿入する順番を選択することが可能です。

-   **WLF (WebStar Log Format)**: When this option is selected, the request log is generated in WLF format. WLF format was developed specifically for the 4D WebSTAR server. It is similar to the ELF format, with only a few additional fields. Like the ELF format, it can be customized.

**Configuring the fields** When you choose the ELF (Extended Log Format) or WLF (WebStar Log Format) format, the "Weg Log Token Selection" area displays the fields available for the chosen format. ログに含む各フィールドを選択する必要があります。 To do so, use the arrow buttons or simply drag and drop the desired fields into the "Selected Tokens" area.

**Note**: You cannot select the same field twice.

各フォーマットで利用可能なフィールド (アルファベット順) とその内容を以下のテーブルに示します:

| フィールド          | ELF | WLF | 値                                                                          |
| -------------- | --- | --- | -------------------------------------------------------------------------- |
| BYTES_RECEIVED |     | ○   | サーバーが受け取ったバイト数                                                             |
| BYTES_SENT     | ○   | ○   | Number of bytes sent by the server to the client                           |
| C_DNS          | ○   | ○   | IP address of the DNS (ELF: field identical to the C_IP field)             |
| C_IP           | ○   | ○   | IP address of the client (for example 192.100.100.10)                      |
| CONNECTION_ID  |     | ○   | Connection ID number                                                       |
| CS(COOKIE)     | ○   | ○   | Information about cookies contained in the HTTP request                    |
| CS(HOST)       | ○   | ○   | Host field of the HTTP request                                             |
| CS(REFERER)    | ○   | ○   | URL of the page pointing to the requested document                         |
| CS(USER_AGENT) | ○   | ○   | Information about the software and operating system of the client          |
| CS_SIP         | ○   | ○   | サーバーの IPアドレス                                                               |
| CS_URI         | ○   | ○   | URI on which the request is made                                           |
| CS_URI_QUERY | ○   | ○   | Request query parameters                                                   |
| CS_URI_STEM  | ○   | ○   | Part of request without query parameters                                   |
| DATE           | ○   | ○   | DD: day, MMM: 3-letter abbreviation for month (Jan, Feb, etc.), YYYY: year |
| METHOD         | ○   | ○   | HTTP method used for the request sent to the server                        |
| PATH_ARGS      |     | ○   | CGI parameters: string located after the "$" character                     |
| STATUS         | ○   | ○   | Reply provided by the server                                               |
| TIME           | ○   | ○   | HH: hour, MM: minutes, SS: seconds                                         |
| TRANSFER_TIME  | ○   | ○   | Time requested by server to generate the reply                             |
| USER           | ○   | ○   | User name if authenticated; otherwise - (minus sign).                      |
|                |     |     | If the user name contains spaces, they are replaced by _ (underlines)      |
| URL            |     | ○   | URL requested by the client                                                |

> 日付と時間は GMTで表されます。

## Log (backup)

Configure the automatic backup parameters for the request log. 最初に、頻度 (日、週などの単位) またはファイルサイズの上限に対応するラジオボタンをクリックして選択します。 必要に応じて、バックアップする正確な時間を指定します。

-   **バックアップしない**: 周期的なバックアップ機能が無効になっています。
-   **X 時間ごと**: 1時間単位でバックアップをプログラムする際、このオプションを使用します。 1 から 24 の値を入力します。

    -   **開始時刻**: 最初のバックアップ開始時間の設定に使用します。
-   **X 日ごと**: 1日単位でバックアップをプログラムする際、このオプションを使用します。 バックアップを毎日実行するには、1を入力します。 このオプションをチェックすると、バックアップの開始時間を指定しなければなりません。
-   **X 週ごと**: 1週間単位でバックアップをプログラムする際、このオプションを使用します。 たとえば、毎週バックアップをおこなうには 1 と設定します。 このオプションをチェックすると、バックアップを開始する曜日と時間を指定しなければなりません。 複数の曜日を選択することもできます。 たとえば、水曜日と金曜日を 選択し、2つのバックアップを設定することができます。
-   **X 月ごと**: 1ヶ月単位でバックアップをプログラムする際、このオプションを使用します。 たとえば、毎月バックアップをおこなうには 1 と設定します。 このオプションをチェックすると、バックアップ開始月の日時を指定しなければなりません。
-   **X MB** (サイズ指定): カレントのリクエストログのファイルサイズに基づいてバックアップをプログラムする際、このオプションを使用します。 ファイルが指定サイズに達すると、バックアップが自動的に起動します。 サイズ制限は 1、10、100 または 1000MB ごとに設定可能です。

> In the case of scheduled backups, if the Web server was not launched when the backup was scheduled to occur, on the next startup 4D considers the backup as failed and applies the appropriate settings, set via the Database Settings.

## Web Services

You use the options on this tab to activate and configure Web services for the 4D project, both for their publishing (server side) and their subscription (client side).

For more information about the support of Web Services in 4D, refer to the [Publication and use of Web Services](https://doc.4d.com/What-s-new/4D-Design-Reference-19-R4/Publication-and-use-of-Web-Services.200-5736722.en.html) chapter.

### Server Side

This area contains various options related to the use of 4D as a Web Services "server" i.e., publishing project methods in the form of Web Services.

-   **Allow Web Services Requests**: This option lets you initialize the publication of Web Services. If this option has not been checked, 4D refuses SOAP requests and does not generate a WSDL - even if methods have the *Published in WSDL* attribute. When this option is checked, 4D creates the WSDL file.
-   **Web Service Name**: This area lets you change the "generic name" of the Web Service. This name is used to differentiate the services both at the SOAP server level (when the server publishes several different Web Services), as well as in the Web Services directories. By default, 4D uses the name A_WebService.
-   **Web Services Namespace**: This area is used to change the namespace of the Web Services published by 4D. Each Web Service published on the Internet must be unique. The uniqueness of the names of Web Services is ensured by using XML namespaces. A namespace is an arbitrary character string used to identify a set of XML tags in a unique way. Typically, the namespace begins with the URL of the company (http://mycompany.com/mynamespace). In this case, it is not indispensable to have anything in particular at the URL indicated; what matters is that the character string used is unique. By default, 4D uses the following namespace: http://www.4d.com/namespace/default.

> In conformity with the XML standard for tag names, the character strings used must not contain spaces nor start with a number. Moreover, to avoid any risk of incompatibility, we recommend that you do not use any extended characters (such as accented characters).

### Client Side

This area contains various options related to the use of 4D as a Web Services "client" i.e., subscribing to services published on the network.

-   **Wizard Method Prefix**: This area lets you change the prefix that is added automatically by 4D to the name of proxy methods generated by the Web Services Wizard. Proxy project methods form a link between the 4D application and the Web Services server. By default, 4D uses the prefix "proxy_".


## Web Features

This page contains the options used to enable and control advanced Web features such as the REST server.

### Publishing

#### Expose as REST server

Starts and stops the REST Server. See [REST Server Configuration](../REST/configuration.md).

### アクセス

This option specifies a group of 4D users that is authorized to establish the link to the 4D database using REST requests. See [Configuring REST access](../REST/configuration.md#configuring-rest-access).

### Web Studio

#### Enable access to the web studio

Enables general access to the web studio. You still need to configure it at every project level.
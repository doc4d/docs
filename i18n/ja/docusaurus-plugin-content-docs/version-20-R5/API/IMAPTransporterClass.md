---
id: IMAPTransporterClass
title: IMAPTransporter
---

The `IMAPTransporter` class allows you to retrieve messages from a IMAP email server.

### IMAP Transporter オブジェクト

IMAP Transporter objects are instantiated with the [IMAP New transporter](#imap-new-transporter) command. これらは、次のプロパティや関数を持ちます:

|                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->       |
| [<!-- INCLUDE #IMAPTransporterClass.addFlags().Syntax -->](#addflags)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.addFlags().Summary -->                                 |
| [<!-- INCLUDE #IMAPTransporterClass.append().Syntax -->](#append)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.append().Summary -->                                       |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->                         |
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary --> |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->                            |
| [<!-- INCLUDE #IMAPTransporterClass.copy().Syntax -->](#copy)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.copy().Summary -->                                             |
| [<!-- INCLUDE #IMAPTransporterClass.createBox().Syntax -->](#createbox)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.createBox().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.delete().Syntax -->](#delete)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.delete().Summary -->                                       |
| [<!-- INCLUDE #IMAPTransporterClass.deleteBox().Syntax -->](#deletebox)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.deleteBox().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.expunge().Syntax -->](#expunge)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.expunge().Summary -->                                    |
| [<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Syntax -->](#getboxinfo)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Summary -->                           |
| [<!-- INCLUDE #IMAPTransporterClass.getBoxList().Syntax -->](#getboxlist)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.getBoxList().Summary -->                           |
| [<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Syntax -->](#getdelimiter)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Summary -->                     |
| [<!-- INCLUDE #IMAPTransporterClass.getMail().Syntax -->](#getmail)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.getMail().Summary -->                                    |
| [<!-- INCLUDE #IMAPTransporterClass.getMails().Syntax -->](#getmails)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.getMails().Summary -->                                 |
| [<!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Summary -->                  |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.host.Summary -->                                                                   |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.logFile.Summary -->                                                          |
| [<!-- INCLUDE #IMAPTransporterClass.move().Syntax -->](#move)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.move().Summary -->                                             |
| [<!-- INCLUDE #IMAPTransporterClass.numToID().Syntax -->](#numtoid)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.numToID().Summary -->                                    |
| [<!-- INCLUDE #IMAPTransporterClass.removeFlags().Syntax -->](#removeflags)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.removeFlags().Summary -->                        |
| [<!-- INCLUDE #IMAPTransporterClass.renameBox().Syntax -->](#renamebox)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.renameBox().Summary -->                              |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.port.Summary -->                                                                   |
| [<!-- INCLUDE #IMAPTransporterClass.searchMails().Syntax -->](#searchmails)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.searchMails().Summary -->                        |
| [<!-- INCLUDE #IMAPTransporterClass.selectBox().Syntax -->](#selectbox)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.selectBox().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.subscribe().Syntax -->](#subscribe)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.subscribe().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Syntax -->](#unsubscribe)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Summary -->                        |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.user.Summary -->                                                                   |

## IMAP New transporter

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R4 | 追加 |

</details>

<!-- REF #_command_.IMAP New transporter.Syntax -->**IMAP New transporter**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF #_command_.IMAP New transporter.Params -->

| 引数     | タイプ                                |     | 説明                                                  |
| ------ | ---------------------------------- | :-: | --------------------------------------------------- |
| server | Object                             |  -> | メールサーバー情報                                           |
| 戻り値    | 4D.IMAPTransporter |  <- | [IMAP transporter object](#imap-transporter-object) |

<!-- END REF -->

#### 説明

The `IMAP New transporter` command <!-- REF #_command_.IMAP New transporter.Summary -->configures a new IMAP connection<!-- END REF --> according to the _server_ parameter and returns a new _transporter_ object. 返される transporter オブジェクトは通常、メールの受信に使用されます。

In the _server_ parameter, pass an object containing the following properties:

| _server_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | デフォルト値 (省略時)  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->                                                                                                                                                                                                                                                                  | false                            |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<br/>Text string or token object representing OAuth2 authorization credentials. Used only with OAUTH2 `authenticationMode`. If `accessTokenOAuth2` is used but `authenticationMode` is omitted, the OAuth 2 protocol is used (if allowed by the server). Not returned in _[IMAP transporter](#imap-transporter-object)_ object. | なし                               |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->                                                                                                                                                                                                                                                                                    | サーバーがサポートするもっともセキュアな認証モードが使用されます |
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->                                                                                                                                                                                                                                                            | 300                              |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->                                                                                                                                                                                                                                                                                       | 30                               |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.host.Summary -->                                                                                                                                                                                                                                                                                                                              | _mandatory_                      |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.logFile.Summary -->                                                                                                                                                                                                                                                                                                                     | なし                               |
| .**password** : Text<br/>User password for authentication on the server. Not returned in _[IMAP transporter](#imap-transporter-object)_ object.                                                                                                                                                                                                                                                                                                                                   | なし                               |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.port.Summary -->                                                                                                                                                                                                                                                                                                                              | 993                              |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.user.Summary -->                                                                                                                                                                                                                                                                                                                              | なし                               |

> **Warning**: Make sure the defined timeout is lower than the server timeout, otherwise the client timeout will be useless.

#### 戻り値

The function returns an [**IMAP transporter object**](#imap-transporter-object). All returned properties are **read-only**.

> IMAP接続は、transporter オブジェクトが消去された時点で自動的に閉じられます。

#### 例題

```4d
$server:=New object
$server.host:="imap.gmail.com" // 必須
$server.port:=993
$server.user:="4d@gmail.com"
$server.password:="XXXXXXXX"
$server.logFile:="LogTest.txt" // Logsフォルダーに保存するログファイル

var $transporter : 4D.IMAPTransporter
$transporter:=IMAP New transporter($server)

$status:=$transporter.checkConnection()
If(Not($status.success))
   ALERT("エラーが発生しました: "+$status.statusText)
End if
```

## 4D.IMAPTransporter.new()

<!-- REF #4D.IMAPTransporter.new().Syntax -->**4D.IMAPTransporter.new**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF #4D.IMAPTransporter.new().Params -->

| 引数     | タイプ                                |     | 説明                                                  |
| ------ | ---------------------------------- | :-: | --------------------------------------------------- |
| server | Object                             |  -> | メールサーバー情報                                           |
| 戻り値    | 4D.IMAPTransporter |  <- | [IMAP transporter object](#imap-transporter-object) |

<!-- END REF -->

#### 説明

The `4D.IMAPTransporter.new()` function <!-- REF #4D.IMAPTransporter.new().Summary -->creates and returns a new object of the `4D.IMAPTransporter` type<!-- END REF -->. It is identical to the [`IMAP New transporter`](#imap-new-transporter) command (shortcut).

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

<!-- REF IMAPTransporterClass.addFlags().Desc -->

## .addFlags()

<details><summary>履歴</summary>

| リリース  | 内容             |
| ----- | -------------- |
| 20    | カスタムキーワードをサポート |
| 18 R6 | 追加             |

</details>

<!-- REF #IMAPTransporterClass.addFlags().Syntax -->**.addFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br/>**.addFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br/>**.addFlags**( *msgIDs* : Longint  ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.addFlags().Params -->

| 引数       | タイプ        |     | 説明                                                                                                                                                                                            |
| -------- | ---------- | :-: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgIDs   | Collection |  -> | 文字列のコレクション: メッセージの固有ID (テキスト型)<br/>&#xA;テキスト: メッセージの固有ID<br/>&#xA;倍長整数 (IMAP all): 選択されたメールボックス内の全メッセージ |
| keywords | Object     |  -> | 追加するキーワードフラグ                                                                                                                                                                                  |
| 戻り値      | Object     |  <- | addFlags処理のステータス                                                                                                                                                                              |

<!-- END REF -->

#### 説明

The `.addFlags()` function <!-- REF #IMAPTransporterClass.addFlags().Summary -->adds flags to the `msgIDs` for the specified `keywords`<!-- END REF -->.

In the `msgIDs` parameter, you can pass either:

- a _collection_ containing the unique IDs of specific messages or
- the unique ID (_text_) of a single message or
- the following constant (_longint_) for all messages in the selected mailbox:

| 定数       | 値 | 説明                        |
| -------- | - | ------------------------- |
| IMAP all | 1 | 選択されたメールボックスの全メッセージを選択します |

The `keywords` parameter lets you define the flags to add to `msgIDs`. 以下の標準フラグおよびカスタムフラグを使用することができます (カスタムフラグのサポートはサーバーの実装に依存します)。

| プロパティ           | タイプ     | 説明                                |
| --------------- | ------- | --------------------------------- |
| $draft          | Boolean | メッセージに "draft" フラグを追加するには true    |
| $seen           | Boolean | メッセージに "seen" フラグを追加するには true     |
| $flagged        | Boolean | メッセージに "flagged" フラグを追加するには true  |
| $answered       | Boolean | メッセージに "answered" フラグを追加するには true |
| $deleted        | Boolean | メッセージに "deleted" フラグを追加するには true  |
| `<custom flag>` | Boolean | メッセージにカスタムフラグを追加するには true         |

カスタムフラグ名は、次の規則に従う必要があります: キーワードは、制御文字とスペースを含まない、文字の大小を区別する文字列であり、次の文字は使用できません: `( ) { ] % * " \`

> - キーワードが考慮されるためには、その値が true でなければなりません。
> - キーワードフラグの解釈は、メールクライアントごとに異なる可能性があります。

**Returned object**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                                                                                             | タイプ        | 説明                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                              |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー           |
| errors     |                                                                                             | Collection | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                     |
|            | \[].message            | Text       | 4Dエラーの詳細                                                     |
|            | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                                          |

#### 例題

```4d
var $options;$transporter;$boxInfo;$status : Object

$options:=New object
$options.host:="imap.gmail.com"
$options.port:=993
$options.user:="4d@gmail.com"
$options.password:="xxxxx"

// transporter を作成します
$transporter:=IMAP New transporter($options)

// メールボックスを選択します
$boxInfo:=$transporter.selectBox("INBOX")

// INBOXの全メッセージを既読に設定します
$flags:=New object
$flags["$seen"]:=True
$status:=$transporter.addFlags(IMAP all;$flags)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.append().Desc -->

## .append()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.append().Syntax -->**.append**( *mailObj* : Object ; *destinationBox* : Text ; *options* : Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.append().Params -->

| 引数             | タイプ    |     | 説明                      |
| -------------- | ------ | :-: | ----------------------- |
| mailObj        | Object |  -> | Email オブジェクト            |
| destinationBox | Text   |  -> | Emailオブジェクトを受信するメールボックス |
| options        | Object |  -> | 文字セット情報を格納したオブジェクト      |
| 戻り値            | Object |  <- | append処理のステータス          |

<!-- END REF -->

#### 説明

The `.append()` function <!-- REF #IMAPTransporterClass.append().Summary -->appends a `mailObj` to the `destinationBox`<!-- END REF -->.

In the `mailObj` parameter, pass an Email object. For a comprehensive description of mail properties, see [Email object](EmailObjectClass.md#email-object). The `.append()` function supports keyword tags in the Email object's `keywords` attribute.

The optional `destinationBox` parameter lets you pass the name of a mailbox where the `mailObj` will be appended. 省略した場合は、カレントメールボックスが使用されます。

In the optional `options` parameter, you can pass an object to define the charset and encoding for specific parts of the email. 次のプロパティを含みます:

| プロパティ         | タイプ  | 説明                                                                                                                |
| ------------- | ---- | ----------------------------------------------------------------------------------------------------------------- |
| headerCharset | Text | メールの以下の部分で使用される文字セットとエンコーディング: 件名、添付ファイル名、メール名の属性。 取り得る値: 以下の可能な文字セットテーブルを参照ください。 |
| bodyCharset   | Text | メールの HTML およびテキスト本文コンテンツで使用される文字セットとエンコーディング。 取り得る値: 以下の可能な文字セットテーブルを参照ください。                      |

使用可能な文字セット:

| 定数                       | 値                                                                                           | 説明                                                                                                                                                                                                                                                                         |
| ------------------------ | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>headerCharset: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>bodyCharset: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul> |
| mail mode ISO88591       | ISO-8859-1                                                                                  | <ul><li>headerCharset: ISO-8859-1 & Quoted-printable</li><li>bodyCharset: ISO-8859-1 & 8-bit</li></ul>                                                                                                                                                                     |
| mail mode UTF8           | US-ASCII_UTF8_QP                                  | headerCharset &amp; bodyCharset: 可能なら US-ASCII、それが不可なら UTF-8 &amp; Quoted-printable (**デフォルト値**)                                                                                                |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64                                 | headerCharset &amp; bodyCharset: 可能な場合は US-ASCII、それ以外は UTF-8 &amp; base64                                                                                                                                          |

**Returned object**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                                                                                             | タイプ        | 説明                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                              |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー           |
| errors     |                                                                                             | Collection | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                     |
|            | \[].message            | Text       | 4Dエラーの詳細                                                     |
|            | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                                          |

#### 例題

Drafts メールボックスにメールを保存します:

```4d
var $settings; $status; $msg; $imap: Object

$settings:=New object("host"; "domain.com"; "user"; "xxxx"; "password"; "xxxx"; "port"; 993)

$imap:=IMAP New transporter($settings)

$msg:=New object
$msg.from:="xxxx@domain.com"
$msg.subject:="Lorem Ipsum"
$msg.textBody:="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
$msg.keywords:=New object
$msg.keywords["$seen"]:=True//flag the message as read
$msg.keywords["$draft"]:=True//flag the message as a draft

$status:=$imap.append($msg; "Drafts")
```

<!-- END REF -->

<!-- INCLUDE transporter.authenticationModeIMAP.Desc -->

<!-- INCLUDE transporter.checkConnection().Desc -->

<!-- REF #IMAPTransporterClass.checkConnectionDelay.Desc -->

## .checkConnectionDelay

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R4 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.checkConnectionDelay.Syntax -->**.checkConnectionDelay** : Integer<!-- END REF -->

#### 説明

The `.checkConnectionDelay` property contains <!-- REF #IMAPTransporterClass.checkConnectionDelay.Summary -->the maximum time (in seconds) allowed prior to checking the connection to the server<!-- END REF -->.  関数呼び出しの間隔がこの時間を超過する場合、サーバー接続が確認されます。 By default, if the property has not been set in the _server_ object, the value is 300.

> **Warning**: Make sure the defined timeout is lower than the server timeout, otherwise the client timeout will be useless.

<!-- END REF -->

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

<!-- REF IMAPTransporterClass.copy().Desc -->

## .copy()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R5 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.copy().Syntax -->**.copy**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br/>**.copy**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.copy().Params -->

| 引数             | タイプ        |     | 説明                                                               |
| -------------- | ---------- | :-: | ---------------------------------------------------------------- |
| msgsIDs        | Collection |  -> | メッセージの固有ID のコレクション (テキスト)                     |
| allMsgs        | Integer    |  -> | `IMAP all`: All messages in the selected mailbox |
| destinationBox | Text       |  -> | メッセージのコピー先のメールボックス                                               |
| 戻り値            | Object     |  <- | copy処理のステータス                                                     |

<!-- END REF -->

#### 説明

The `.copy()` function <!-- REF #IMAPTransporterClass.copy().Summary -->copies the messages defined by _msgsIDs_ or _allMsgs_ to the _destinationBox_ on the IMAP server<!-- END REF -->.

以下のものを渡すことができます:

- in the _msgsIDs_ parameter, a collection containing the unique IDs of the specific messages to copy, or
- in the _allMsgs_ parameter, the `IMAP all` constant (integer) to copy all messages in the selected mailbox.

The _destinationBox_ parameter allows you to pass a text value with the name of the mailbox where the copies of messages will be placed.

**Returned object**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                                                                                             | タイプ        | 説明                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                              |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー           |
| errors     |                                                                                             | Collection | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                     |
|            | \[].message            | Text       | 4Dエラーの詳細                                                     |
|            | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                                          |

#### 例題 1

選択されたメッセージをコピーします:

```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("inbox")

  //get collection of message unique IDs
 $mailIds:=$transporter.searchMails("subject \"4D new feature:\"")

  // copy found messages to the "documents" mailbox
 $status:=$transporter.copy($mailIds;"documents")
```

#### 例題 2

カレントメールボックスの全メッセージをコピーします:

```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox

 $boxInfo:=$transporter.selectBox("inbox")

  // copy all messages to the "documents" mailbox
 $status:=$transporter.copy(IMAP all;"documents")
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.createBox().Desc -->

## .createBox()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 19   | 追加 |

</details>

<!-- REF #IMAPTransporterClass.createBox().Syntax -->**.createBox**( *name* :  Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.createBox().Params -->

| 引数   | タイプ    |     | 説明                |
| ---- | ------ | :-: | ----------------- |
| name | Text   |  -> | 新規メールボックスの名称      |
| 戻り値  | Object |  <- | createBox処理のステータス |

<!-- END REF -->

#### 説明

The `.createBox()` function <!-- REF #IMAPTransporterClass.createBox().Summary -->creates a mailbox with the given `name`<!-- END REF -->. IMAPサーバーの階層区切り文字がメールボックス名内に含まれる場合、IMAPサーバーは指定のメールボックスを作成するのに必要な親階層を作成します。

たとえば、"/" が階層区切り文字として使われるサーバーにおいて、"Projects/IMAP/Doc" を作成しようとした場合:

- Only the "Doc" mailbox if "Projects" & "IMAP" already exist.
- "IMAP" & "Doc" mailboxes if only “Projects” already exists.
- "Projects" & “IMAP” & "Doc" mailboxes, if they do not already exist.

In the `name` parameter, pass the name of the new mailbox.

**Returned object**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                                                                                             | タイプ        | 説明                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                              |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー           |
| errors     |                                                                                             | Collection | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                     |
|            | \[].message            | Text       | 4Dエラーの詳細                                                     |
|            | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                                          |

#### 例題

新しい “Invoices” メールボックスを作成します:

```4d
var $pw : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")
If(OK=1)
$options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

$status:=$transporter.createBox("Invoices")

If ($status.success)
ALERT("Mailbox creation successful!")
Else
ALERT("Error: "+$status.statusText)
End if
End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.delete().Desc -->

## .delete()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R5 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.delete().Syntax -->**.delete**( *msgsIDs* : Collection ) : Object<br/>**.delete**( *allMsgs* : Integer ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.delete().Params -->

| 引数      | タイプ        |     | 説明                                                               |
| ------- | ---------- | :-: | ---------------------------------------------------------------- |
| msgsIDs | Collection |  -> | メッセージの固有ID のコレクション (テキスト)                     |
| allMsgs | Integer    |  -> | `IMAP all`: All messages in the selected mailbox |
| 戻り値     | Object     |  <- | delete処理のステータス                                                   |

<!-- END REF -->

#### 説明

The `.delete()` function <!-- REF #IMAPTransporterClass.delete().Summary -->sets the "deleted" flag for the messages defined in `msgsIDs` or `allMsgs`<!-- END REF -->.

以下のものを渡すことができます:

- in the `msgsIDs` parameter, a collection containing the unique IDs of the specific messages to delete, or
- in the `allMsgs` parameter, the `IMAP all` constant (integer) to delete all messages in the selected mailbox.

この関数を実行しても、メールが実際に削除される訳ではありません。 Messages with the "delete" flag can still be found by the [.searchMails()](#searchmails) function. Flagged messages are deleted from the IMAP server with the [`.expunge()`](#expunge) function or by selecting another mailbox or when the [transporter object](#imap-transporter-object) (created with [IMAP New transporter](#imap-new-transporter)) is destroyed.

**Returned object**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                                                                                             | タイプ        | 説明                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                              |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー           |
| errors     |                                                                                             | Collection | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                     |
|            | \[].message            | Text       | 4Dエラーの詳細                                                     |
|            | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                                          |

#### 例題 1

選択されたメッセージを削除します:

```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("Inbox")

  //get collection of message unique IDs
 $mailIds:=$transporter.searchMails("subject \"Reports\"")

  // Delete selected messages
 $status:=$transporter.delete($mailIds)
```

#### 例題 2

カレントメールボックスの全メッセージを削除します:

```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("Junk Email")

  // delete all messages in the current mailbox
 $status:=$transporter.delete(IMAP all)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.deleteBox().Desc -->

## .deleteBox()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 19   | 追加 |

</details>

<!-- REF #IMAPTransporterClass.deleteBox().Syntax -->**.deleteBox**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.deleteBox().Params -->

| 引数   | タイプ    |     | 説明                |
| ---- | ------ | :-: | ----------------- |
| name | Text   |  -> | 削除するメールボックスの名称    |
| 戻り値  | Object |  <- | deleteBox処理のステータス |

<!-- END REF -->

#### 説明

The `.deleteBox()` function <!-- REF #IMAPTransporterClass.deleteBox().Summary -->permanently removes the mailbox with the given `name` from the IMAP server<!-- END REF -->. 存在しないメールボックス、または INBOX を削除しようとして場合には、エラーが生成されます。

In the `name` parameter, pass the name of the mailbox to delete.

> - 子メールボックスを持つ親メールボックスが "\Noselect" 属性を持っている場合、そのメールボックスは削除できません。
> - 削除されるメールボックス内のメッセージもすべて削除されます。
> - メールボックス削除の可否はメールサーバーに依存します。

**Returned object**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                                                                                             | タイプ        | 説明                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                              |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー           |
| errors     |                                                                                             | Collection | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                     |
|            | \[].message            | Text       | 4Dエラーの詳細                                                     |
|            | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                                          |

#### 例題

"Bills" メールボックスの階層から、"Nova Orion Industries" の子メールボックスを削除します:

```4d
var $pw; $name : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

// delete mailbox
$name:="Bills"+$transporter.getDelimiter()+"Nova Orion Industries"
$status:=$transporter.deleteBox($name)

If ($status.success)
 ALERT("Mailbox deletion successful!")
 Else
 ALERT("Error: "+$status.statusText)
 End if
End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.expunge().Desc -->

## .expunge()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.expunge().Syntax -->**.expunge()** : Object<!-- END REF -->

<!-- REF IMAPTransporterClass.expunge().Params -->

| 引数  | タイプ    |     | 説明              |
| --- | ------ | :-: | --------------- |
| 戻り値 | Object |  <- | expunge処理のステータス |

<!-- END REF -->

#### 説明

The `.expunge()` function <!-- REF #IMAPTransporterClass.expunge().Summary -->removes all messages with the "deleted" flag from the IMAP mail server.<!-- END REF --> The "deleted" flag can be set with the [`.delete()`](#delete) or [`.addFlags()`](#addflags) methods.

**Returned object**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                                                                                             | タイプ        | 説明                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                              |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー           |
| errors     |                                                                                             | Collection | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                     |
|            | \[].message            | Text       | 4Dエラーの詳細                                                     |
|            | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                                          |

#### 例題

```4d
var $options;$transporter;$boxInfo;$status : Object
var $ids : Collection

$options:=New object
$options.host:="imap.gmail.com"
$options.port:=993
$options.user:="4d@gmail.com"
$options.password:="xxxxx"

// transporter を作成します
$transporter:=IMAP New transporter($options)

// メールボックスを選択します
$boxInfo:=$transporter.selectBox("INBOX")

// INBOX の既読メッセージに削除フラグを立てます
$ids:=$transporter.searchMails("SEEN")
$status:=$transporter.delete($ids)

// "deleted" フラグがついたメッセージをすべて消去します
$status:=$transporter.expunge()
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getBoxInfo().Desc -->

## .getBoxInfo()

<details><summary>履歴</summary>

| リリース  | 内容                 |
| ----- | ------------------ |
| 20    | _id_ is returned   |
| 18 R5 | _name_ is optional |
| 18 R4 | 追加                 |

</details>

<!-- REF #IMAPTransporterClass.getBoxInfo().Syntax -->**.getBoxInfo**( { *name* : Text }) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getBoxInfo().Params -->

| 引数   | タイプ    |     | 説明             |
| ---- | ------ | :-: | -------------- |
| name | Text   |  -> | メールボックスの名称     |
| 戻り値  | Object |  <- | boxInfo オブジェクト |

<!-- END REF -->

#### 説明

The `.getBoxInfo()` function <!-- REF #IMAPTransporterClass.getBoxInfo().Summary -->returns a `boxInfo` object corresponding to the current maibox, or the mailbox _name_<!-- END REF -->. This function returns the same information as [`.selectBox()`](#selectbox) without changing the current mailbox.

In the optional _name_ parameter, pass the name of the mailbox to access. この名称は明確な左から右への階層を表し、特定の区切り文字でレベルを区分けします。 The delimiter can be found with the [`.getDelimiter()`](#getdelimiter) function.

If the mailbox _name_ is not selectable or does not exist, the function generates an error and returns **null**.

**Returned object**

The `boxInfo` object returned contains the following properties:

| プロパティ      | タイプ    | 説明                                                            |
| ---------- | ------ | ------------------------------------------------------------- |
| name       | text   | メールボックスの名称                                                    |
| mailCount  | number | メールボックス内のメッセージの数                                              |
| mailRecent | number | (新しいメッセージであることを表す) "recent" フラグがついたメッセージの数 |
| id         | text   | メールボックスの固有ID                                                  |

#### 例題

```4d
 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $info:=$transporter.getBoxInfo("INBOX")
 ALERT("INBOX contains "+String($info.mailRecent)+" recent emails.")
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getBoxList().Desc -->

## .getBoxList()

<details><summary>履歴</summary>

| リリース  | 内容                           |
| ----- | ---------------------------- |
| 18 R4 | 追加                           |
| 19    | Add `isSubscribed` parameter |

</details>

<!-- REF #IMAPTransporterClass.getBoxList().Syntax -->**.getBoxList**( { *parameters* : Object } ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.getBoxList().Params -->

| 引数         | タイプ        |     | 説明                    |
| ---------- | ---------- | :-: | --------------------- |
| parameters | Object     |  -> | 引数のオブジェクト             |
| 戻り値        | Collection |  <- | mailbox オブジェクトのコレクション |

<!-- END REF -->

#### 説明

The `.getBoxList()` function <!-- REF #IMAPTransporterClass.getBoxList().Summary -->returns a collection of mailboxes describing all of the available mailboxes<!-- END REF -->. この関数を使用すると、IMAPメールサーバー上にあるメッセージの一覧をローカルで管理することができるようになります。

In the optional `parameters` parameter, pass an object containing values to filter the returned mailboxes. 以下のものを渡すことができます:

| プロパティ        | タイプ     | 説明                                                                                                         |
| ------------ | ------- | ---------------------------------------------------------------------------------------------------------- |
| isSubscribed | Boolean | <li>**True** to return only subscribed mailboxes</li><li> **False** to return all available mailboxes</li> |

#### 戻り値

返されるコレクションの各オブジェクトには、以下のプロパティが格納されています:

| プロパティ                                                                                | タイプ     | 説明                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \[].name        | text    | メールボックスの名称                                                                                                                                                                                                                                                                                                                                     |
| \[].selectable  | boolean | Indicates whether or not the access rights allow the mailbox to be selected: <ul><li>true - the mailbox can be selected</li><li>false - the mailbox can not be selected</li></ul>                                                                                                                                              |
| \[].inferior    | boolean | Indicates whether or not the access rights allow creating a lower hierachy in the mailbox: <ul><li>true - a lower level can be created</li><li>false - a lower level can not be created</li></ul>                                                                                                                              |
| \[].interesting | boolean | Indicates if the mailbox has been marked "interesting" by the server: <ul><li>true - The mailbox has been marked "interesting" by the server. For example, it may contain new messages.</li><li>false - The mailbox has not been marked "interesting" by the server.</li></ul> |

アカウントにメールボックスが一つもない場合、空のコレクションが返されます。

> - If there is no open connection, `.getBoxList()` will open a connection.
> - If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the `.checkConnection( )` function is automatically called.

#### 例題

```4d
 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $boxList:=$transporter.getBoxList()

 For each($box;$boxList)
    If($box.interesting)
       $split:=Split string($box.name;$transporter.getDelimiter())
       ALERT("New emails are available in the box: "+$split[$split.length-1])
    End if
 End for each
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getDelimiter().Desc -->

## .getDelimiter()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R4 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.getDelimiter().Syntax -->**.getDelimiter()** : Text<!-- END REF -->

<!-- REF #IMAPTransporterClass.getDelimiter().Params -->

| 引数  | タイプ  |     | 説明      |
| --- | ---- | :-: | ------- |
| 戻り値 | Text |  <- | 階層区切り文字 |

<!-- END REF -->

#### 説明

The `.getDelimiter()` function <!-- REF #IMAPTransporterClass.getDelimiter().Summary -->returns the character used to delimit levels of hierarchy in the mailbox name<!-- END REF -->.

この区切り文字は以下のように使用することができます:

- 下層レベルのメールボックスを作成する
- メールボックスの階層内での上層・下層レベルを検索する

#### 戻り値

メールボックス名の区切り文字

> - If there is no open connection, `.getDelimiter()` will open a connection.
> - If the connection has not been used since the [designated connection delay](#checkconnectiondelay), the [`.checkConnection()`](#checkconnection) function is automatically called.

#### 例題

```4d
 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $boxList:=$transporter.getBoxList()

 For each($box;$boxList)
    If($box.interesting)
       $split:=Split string($box.name;$transporter.getDelimiter())
       ALERT("New emails are available in the box: "+$split[$split.length-1])
    End if
 End for each
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getMail().Desc -->

## .getMail()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R4 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.getMail().Syntax -->**.getMail**( *msgNumber*: Integer { ; *options* : Object } ) : Object<br/>**.getMail**( *msgID*: Text { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMail().Params -->

| 引数        | タイプ     |     | 説明                                               |
| --------- | ------- | :-: | ------------------------------------------------ |
| msgNumber | Integer |  -> | メッセージのシーケンス番号                                    |
| msgID     | Text    |  -> | メッセージの固有ID                                       |
| options   | Object  |  -> | メッセージ管理オプション                                     |
| 戻り値       | Object  |  <- | [Email object](EmailObjectClass.md#email-object) |

<!-- END REF -->

#### 説明

The `.getMail()` function <!-- REF #IMAPTransporterClass.getMail().Summary -->returns the `Email` object corresponding to the _msgNumber_ or _msgID_ in the mailbox designated by the `IMAP_transporter`<!-- END REF -->. この関すを使用すると、メールのコンテンツをローカルで管理できるようになります。

最初の引数として、次のいずれかを渡すことができます:

- _msgNumber_, an _integer_ value indicating the sequence number of the message to retrieve or
- _msgID_, a _text_ value indicating the unique ID of the message to retrieve.

The optional _options_ parameter allows you pass an object defining additional instructions for handling the message. 次のプロパティを利用することができます:

| プロパティ      | タイプ     | 説明                                                                                         |
| ---------- | ------- | ------------------------------------------------------------------------------------------ |
| updateSeen | boolean | true 時には、メールボックス内でメッセージを "既読" にします。 false 時にはメッセージの状態は変化しません。 デフォルト値: true |
| withBody   | boolean | true を渡すとメッセージ本文を返します。 false 時には、メッセージヘッダーのみが返されます。 デフォルト値: true           |

> - The function generates an error and returns **Null** if _msgID_ designates a non-existing message,
> - If no mailbox is selected with the [`.selectBox()`](#selectbox) function, an error is generated,
> - If there is no open connection, `.getMail()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox)\`.

#### 戻り値

`.getMail()` returns an [`Email` object](EmailObjectClass.md#email-object) with the following specific IMAP properties: _id_, _receivedAt_, and _size_.

#### 例題

ID = 1のメッセージを取得します:

```4d
 var $server : Object
 var $info; $mail; $boxInfo : Variant
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  //create transporter
 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("Inbox")

  //get Email object with ID 1
 $mail:=$transporter.getMail(1)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getMails().Desc -->

## .getMails()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R5 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.getMails().Syntax -->**.getMails**( *ids* : Collection { ; *options* : Object } ) : Object<br/>**.getMails**( *startMsg* : Integer ; *endMsg* : Integer { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMails().Params -->

| 引数       | タイプ        |     | 説明                                                                                                                                                                                                 |
| -------- | ---------- | :-: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ids      | Collection |  -> | メッセージID のコレクション                                                                                                                                                                                    |
| startMsg | Integer    |  -> | 先頭メッセージのシーケンス番号                                                                                                                                                                                    |
| endMsg   | Integer    |  -> | 最後のメッセージのシーケンス番号                                                                                                                                                                                   |
| options  | Object     |  -> | メッセージ管理オプション                                                                                                                                                                                       |
| 戻り値      | Object     |  <- | Object containing:<br/><ul><li>a collection of [Email objects](EmailObjectClass.md#email-object) and</li><li>a collection of IDs or numbers for missing messages, if any</li></ul> |

<!-- END REF -->

#### 説明

The `.getMails()` function <!-- REF #IMAPTransporterClass.getMails().Summary -->returns an object containing a collection of `Email` objects<!-- END REF -->.

**First Syntax:**

_**.getMails( ids { ; options } ) -> result**_

第一シンタックスを使用すると、メッセージID に基づいてメッセージを取得することができます。

In the _ids_ parameter, pass a collection of IDs for the messages to return. You can get the IDs with [`.getMail()`](#getmail).

The optional _options_ parameter allows you to define the parts of the messages to be returned. See the **Options** table below for a description of the available properties.

**Second syntax:**

_**.getMails( startMsg ; endMsg { ; options } ) -> result**_

第二シンタックスを使用すると、連続したレンジに基づいてメッセージを取得することができます。 渡される値はメールボックス内でのメッセージの位置を表します。

In the _startMsg_ parameter, pass an _integer_ value corresponding to the number of the first message in a sequential range. If you pass a negative number (_startMsg_ <= 0), the first message of the mailbox will be used as the beginning of the sequence.

In the _endMsg_ parameter, pass an _integer_ value corresponding to the number of the last message to be included in a sequential range. If you pass a negative number (_endMsg_ <= 0), the last message of the mailbox will be used as the end of the sequence.

The optional _options_ parameter allows you to define the parts of the messages to be returned.

**Options**

| プロパティ      | タイプ     | 説明                                                                                     |
| ---------- | ------- | -------------------------------------------------------------------------------------- |
| updateSeen | Boolean | true 時には、指定されたメッセージを "既読" にします。 false 時にはメッセージの状態は変化しません。 デフォルト値: true |
| withBody   | Boolean | true を渡すと指定されたメッセージの本文を返します。 false 時には、メッセージヘッダーのみが返されます。 デフォルト値: true |

> - If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated.
> - If there is no open connection, `.getMails()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox).

#### 戻り値

`.getMails()` returns an object containing the following collections:

| プロパティ    | タイプ        | 説明                                                                                                                                                                                                                                                                                               |
| -------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| list     | Collection | Collection of [`Email` objects](EmailObjectClass.md#email-object). Email オブジェクトが見つからない場合、空のコレクションが返されます。                                                                                                                                                                         |
| notFound | Collection | Collection of:<br/><ul><li>first syntax - previously passed message IDs that do not exist</li><li>second syntax - sequence numbers of messages between startMsg and endMsg that do not exist</li></ul>An empty collection is returned if all messages are found. |

#### 例題

直近の 20件のメールを、"既読" ステータスを変更せずに取得します:

```4d
 var $server,$boxInfo,$result : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  //create transporter
 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("INBOX")

  If($boxInfo.mailCount>0)
  // retrieve the headers of the last 20 messages without marking them as read
    $result:=$transporter.getMails($boxInfo.mailCount-20;$boxInfo.mailCount;\
     New object("withBody";False;"updateSeen";False))
    For each($mail;$result.list)
    // ...
    End for each
 End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getMIMEAsBlob().Desc -->

## .getMIMEAsBlob()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R4 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Syntax -->**.getMIMEAsBlob**( *msgNumber* : Integer { ; *updateSeen* : Boolean } ) : Blob<br/>**.getMIMEAsBlob**( *msgID* : Text { ; *updateSeen* : Boolean } ) : Blob<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Params -->

| 引数         | タイプ     |     | 説明                                                            |
| ---------- | ------- | :-: | ------------------------------------------------------------- |
| msgNumber  | Integer |  -> | メッセージのシーケンス番号                                                 |
| msgID      | Text    |  -> | メッセージの固有ID                                                    |
| updateSeen | Boolean |  -> | true 時には、メールボックス内でメッセージを "既読" にします。 false 時にはメッセージの状態は変化しません。 |
| 戻り値        | BLOB    |  <- | メールサーバーから返された MIME文字列の BLOB                                   |

<!-- END REF -->

#### 説明

The `.getMIMEAsBlob()` function <!-- REF #IMAPTransporterClass.getMIMEAsBlob().Summary -->returns a BLOB containing the MIME contents for the message corresponding to the _msgNumber_ or _msgID_ in the mailbox designated by the `IMAP_transporter`<!-- END REF -->.

最初の引数として、次のいずれかを渡すことができます:

- _msgNumber_, an _integer_ value indicating the sequence number of the message to retrieve or
- _msgID_, a _text_ value indicating the unique ID of the message to retrieve.

The optional _updateSeen_ parameter allows you to specify if the message is marked as "seen" in the mailbox. 以下のものを渡すことができます:

- **True** - to mark the message as "seen" (indicating the message has been read)
- **False** - to leave the message's "seen" status untouched

> * The function returns an empty BLOB if _msgNumber_ or msgID\* designates a non-existing message,
> * If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated,
> * If there is no open connection, `.getMIMEAsBlob()` will open a connection the last mailbox specified with `.selectBox()`.

#### 戻り値

`.getMIMEAsBlob()` returns a `BLOB` which can be archived in a database or converted to an [`Email` object](EmailObjectClass.md#email-object) with the `MAIL Convert from MIME` command.

#### 例題

```4d
 var $server : Object
 var $boxInfo : Variant
 var $blob : Blob
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com"
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  //create transporter
 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("Inbox")

  //get BLOB
 $blob:=$transporter.getMIMEAsBlob(1)
```

<!-- END REF -->

<!-- INCLUDE transporter.host.Desc -->

<!-- INCLUDE transporter.logFile.Desc -->

<!-- REF IMAPTransporterClass.move().Desc -->

## .move()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R5 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.move().Syntax -->**.move**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br/>**.move**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.move().Params -->

| 引数             | タイプ        |     | 説明                                                               |
| -------------- | ---------- | :-: | ---------------------------------------------------------------- |
| msgsIDs        | Collection |  -> | メッセージの固有ID のコレクション (テキスト)                     |
| allMsgs        | Integer    |  -> | `IMAP all`: All messages in the selected mailbox |
| destinationBox | Text       |  -> | メッセージの移動先のメールボックス                                                |
| 戻り値            | Object     |  <- | move処理のステータス                                                     |

<!-- END REF -->

#### 説明

The `.move()` function <!-- REF #IMAPTransporterClass.move().Summary -->moves the messages defined by _msgsIDs_ or _allMsgs_ to the _destinationBox_ on the IMAP server<!-- END REF -->.

以下のものを渡すことができます:

- in the _msgsIDs_ parameter, a collection containing the unique IDs of the specific messages to move, or
- in the _allMsgs_ parameter, the `IMAP all` constant (integer) to move all messages in the selected mailbox.

The _destinationBox_ parameter allows you to pass a text value with the name of the mailbox where the messages will be moved.

> This function is only supported by IMAP servers compliant with RFC [8474](https://tools.ietf.org/html/rfc8474).

**Returned object**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                                                                                             | タイプ        | 説明                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                              |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー           |
| errors     |                                                                                             | Collection | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                     |
|            | \[].message            | Text       | 4Dエラーの詳細                                                     |
|            | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                                          |

#### 例題 1

選択されたメッセージを移動します:

```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("inbox")

  //get collection of message unique IDs
 $mailIds:=$transporter.searchMails("subject \"4D new feature:\"")

  // Move found messages from the current mailbox to the "documents" mailbox
 $status:=$transporter.move($mailIds;"documents")
```

#### 例題 2

カレントメールボックスの全メッセージを移動します:

```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("inbox")

  // move all messages in the current mailbox to the "documents" mailbox
 $status:=$transporter.move(IMAP all;"documents")
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.numToID().Desc -->

## .numToID()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R5 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.numToID().Syntax -->**.numToID**( *startMsg* : Integer ; *endMsg* : Integer ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.numToID().Params -->

| 引数       | タイプ        |     | 説明               |
| -------- | ---------- | :-: | ---------------- |
| startMsg | Integer    |  -> | 先頭メッセージのシーケンス番号  |
| endMsg   | Integer    |  -> | 最後のメッセージのシーケンス番号 |
| 戻り値      | Collection |  <- | 固有ID のコレクション     |

<!-- END REF -->

#### 説明

The `.numToID()` function <!-- REF #IMAPTransporterClass.numToID().Summary -->converts the sequence numbers to IMAP unique IDs for the messages in the sequential range designated by _startMsg_ and _endMsg_<!-- END REF --> in the currently selected mailbox.

In the _startMsg_ parameter, pass an integer value corresponding to the number of the first message in a sequential range. If you pass a negative number (_startMsg_ <= 0), the first message of the mailbox will be used as the beginning of the sequence.

In the _endMsg_ parameter, pass an integer value corresponding to the number of the last message to be included in a sequential range. If you pass a negative number (_endMsg_ <= 0), the last message of the mailbox will be used as the end of the sequence.

#### 戻り値

メソッドは文字列 (固有ID) のコレクションを返します。

#### 例題

```4d
 var $transporter : 4D.IMAPTransporter
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("inbox")

  //get IDs for 5 last messages received
 $mailIds:=$transporter.numToID(($boxInfo.mailCount-5);$boxInfo.mailCount)

  //delete the messages from the current mailbox
 $status:=$transporter.delete($mailIds)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.removeFlags().Desc -->

## .removeFlags()

<details><summary>履歴</summary>

| リリース  | 内容             |
| ----- | -------------- |
| 20    | カスタムキーワードをサポート |
| 18 R6 | 追加             |

</details>

<!-- REF #IMAPTransporterClass.removeFlags().Syntax -->**.removeFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br/>**.removeFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br/>**.removeFlags**( *msgIDs* : Longint ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.removeFlags().Params -->

| 引数       | タイプ        |     | 説明                                                                                                                                                                                            |
| -------- | ---------- | :-: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgIDs   | Collection |  -> | 文字列のコレクション: メッセージの固有ID (テキスト型)<br/>&#xA;テキスト: メッセージの固有ID<br/>&#xA;倍長整数 (IMAP all): 選択されたメールボックス内の全メッセージ |
| keywords | Object     |  -> | 削除するキーワードフラグ                                                                                                                                                                                  |
| 戻り値      | Object     |  <- | removeFlags処理のステータス                                                                                                                                                                           |

<!-- END REF -->

#### 説明

The `.removeFlags()` function <!-- REF #IMAPTransporterClass.removeFlags().Summary -->removes flags from the `msgIDs` for the specified `keywords`<!-- END REF -->.

In the `msgIDs` parameter, you can pass either:

- a _collection_ containing the unique IDs of specific messages or
- the unique ID (_text_) of a single message or
- the following constant (_longint_) for all messages in the selected mailbox:

| 定数       | 値 | 説明                        |
| -------- | - | ------------------------- |
| IMAP all | 1 | 選択されたメールボックスの全メッセージを選択します |

The `keywords` parameter lets you define the flags to remove from `msgIDs`. 以下の標準フラグおよびカスタムフラグを使用することができます:

| 引数              | タイプ     | 説明                                |
| --------------- | ------- | --------------------------------- |
| $draft          | Boolean | メッセージの "draft" フラグを削除するには true    |
| $seen           | Boolean | メッセージの "seen" フラグを削除するには true     |
| $flagged        | Boolean | メッセージの "flagged" フラグを削除するには true  |
| $answered       | Boolean | メッセージの "answered" フラグを削除するには true |
| $deleted        | Boolean | メッセージの "deleted" フラグを削除するには true  |
| `<custom flag>` | Boolean | メッセージのカスタムフラグを削除するには true         |

Please refer to [.addFlags()](#addflags) for more information on custom flags.

> - キーワードが考慮されるためには、その値が true でなければなりません。

**Returned object**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                                                                                             | タイプ        | 説明                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                              |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー           |
| errors     |                                                                                             | Collection | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                     |
|            | \[].message            | Text       | 4Dエラーの詳細                                                     |
|            | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                                          |

#### 例題

```4d
var $options;$transporter;$boxInfo;$status : Object

$options:=New object
$options.host:="imap.gmail.com"
$options.port:=993
$options.user:="4d@gmail.com"
$options.password:="xxxxx"

// transporter を作成します
$transporter:=IMAP New transporter($options)

// メールボックスを選択します
$boxInfo:=$transporter.selectBox("INBOX")

// INBOX の全メッセージを未読にします
$flags:=New object
$flags["$seen"]:=True
$status:=$transporter.removeFlags(IMAP all;$flags)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.renameBox().Desc -->

## .renameBox()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 19   | 追加 |

</details>

<!-- REF #IMAPTransporterClass.renameBox().Syntax -->**.renameBox**( *currentName* : Text ; *newName* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.renameBox().Params -->

| 引数          | タイプ    |     | 説明                |
| ----------- | ------ | :-: | ----------------- |
| currentName | Text   |  -> | カレントメールボックスの名称    |
| newName     | Text   |  -> | 新しいメールボックス名       |
| 戻り値         | Object |  <- | renameBox処理のステータス |

<!-- END REF -->

#### 説明

The `.renameBox()` function <!-- REF #IMAPTransporterClass.renameBox().Summary -->changes the name of a mailbox on the IMAP server<!-- END REF -->. 存在しないメールボックスの名称を変更しようとしたり、すでに使われているメールボックス名に変更しようとしたりすると、エラーが生成されます。

In the `currentName` parameter, pass the name of the mailbox to be renamed.

Pass the new name for the mailbox in the `newName` parameter.

**Returned object**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                                                                                             | タイプ        | 説明                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                              |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー           |
| errors     |                                                                                             | Collection | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                     |
|            | \[].message            | Text       | 4Dエラーの詳細                                                     |
|            | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                                          |

#### 例題

“Invoices” メールボックスを “Bills” に名称変更します:

```4d
var $pw : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"

$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

// rename mailbox
$status:=$transporter.renameBox("Invoices"; "Bills")

If ($status.success)
   ALERT("Mailbox renaming successful!")
   Else
   ALERT("Error: "+$status.statusText)
 End if
End if
```

<!-- END REF -->

<!-- INCLUDE transporter.port.Desc -->

<!-- REF IMAPTransporterClass.searchMails().Desc -->

## .searchMails()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R5 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.searchMails().Syntax -->**.searchMails**( *searchCriteria* : Text ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.searchMails().Params -->

| 引数             | タイプ        |     | 説明             |
| -------------- | ---------- | :-: | -------------- |
| searchCriteria | Text       |  -> | 検索条件           |
| 戻り値            | Collection |  <- | メッセージ番号のコレクション |

<!-- END REF -->

#### 説明

> This function is based upon the specification for the [IMAP protocol](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol).

The `.searchMails()` function <!-- REF #IMAPTransporterClass.searchMails().Summary -->searches for messages that match the given _searchCriteria_ in the current mailbox<!-- END REF -->. _searchCriteria_ consists of one or more search keys.

_searchCriteria_ is a text parameter listing one or more search keys (see [Authorized search-keys](#authorized-search-keys) below) associated or not with values to look for. 検索キーは単一または複数の項目からなります。 例:

```
SearchKey1 = FLAGGED
SearchKey2 = NOT FLAGGED
SearchKey3 = FLAGGED DRAFT
```

> 文字の大小は通常区別されません。

- If the _searchCriteria_ is a null string, the search will be equivalent to a “select all”.
- If the _searchCriteria_ includes multiple search keys, the result is the intersection (AND function) of all the messages that match those keys.

```
searchCriteria = FLAGGED FROM "SMITH"
```

... returns all messages with \Flagged flag set AND sent by Smith.

- You can use the **OR** or **NOT** operators as follows:

```
searchCriteria = OR SEEN FLAGGED
```

... returns all messages with \Seen flag set OR \Flagged flag set

```
searchCriteria = NOT SEEN
```

... returns all messages with \Seen flag not set.

```
searchCriteria = HEADER CONTENT-TYPE "MIXED" NOT HEADER CONTENT-TYPE "TEXT"...
```

... returns message whose content-type header contains “Mixed” and does not contain “Text”.

```
searchCriteria = HEADER CONTENT-TYPE "E" NOT SUBJECT "o" NOT HEADER CONTENT-TYPE "MIXED"
```

... returns message whose content-type header contains “ e ” and whose Subject header does not contain “ o ” and whose content-type header is not “ Mixed ”.

最後の 2例については、最初の検索キーリストのカッコを取り除いてしまうと検索結果が異なることに注意してください。

- The _searchCriteria_ may include the optional \[CHARSET] specification. これは "CHARSET" という単語の後に実際の文字コード \[CHARSET] (US ASCII, ISO-8859 など) が続きます。 It indicates the charset of the _searchCriteria_ string. Therefore, you must convert the _searchCriteria_ string into the specified charset if you use the \[CHARSET] specification (see the `CONVERT FROM TEXT` or `Convert to text` commands).
  デフォルトでは、searchCriteria 引数に拡張された文字列が含まれていた場合には4D はそれを Quotable Printable へとエンコードします。

```
searchCriteria = CHARSET "ISO-8859" BODY "Help"
```

... means the search criteria uses the charset iso-8859 and the server will have to convert the search criteria before searching, if necessary.

#### 検索する値の型について

検索キーによっては、次の型の検索値が必要となる場合があります:

- **Search-keys with a date value**: the date is a string that must be formatted as follows: _date-day+"-"+date-month+"-"+date-year_ where date-day indicates the number of the day of the month (max. 2 characters), date-month indicates the name of the month (Jan/Feb/Mar/Apr/May/Jun/Jul/Aug/Sep/Oct/Dec) and date-year indicates the year (4 characters).
  Example: `searchCriteria = SENTBEFORE 1-Feb-2020` (a date does not usually need to be quoted since it does not contain any special characters)

- **Search-keys with a string value**: the string may contain any character and must be quoted. 文字列が特殊文字 (スペース文字など) をまったく含まない場合には、引用符で括る必要はありません。 このような文字列を引用符でくくることは、渡した文字列値が正確に解釈されることを保証します。
  Example: `searchCriteria = FROM "SMITH"`
  For all search keys that use strings, a message matches the key if the string is a substring of the field. 合致は文字の大小を区別しません。

- **Search-keys with a field-name value**: the field-name is the name of a header field.
  Example: `searchCriteria = HEADER CONTENT-TYPE "MIXED"`

- **Search-keys with a flag value**: the flag may accept one or several keywords (including standard flags), separated by spaces.
  Example: `searchCriteria = KEYWORD \Flagged \Draft`

- **Search-keys with a message set value**: Identifies a set of messages. メッセージシーケンス番号は、1 から始まりメールボックスのメッセージの総数までの連続した番号です。 個別の番号はカンマで区切ります。コロンは、その前後の番号を含めた連続した番号を指定します。
  Examples:
  `2,4:7,9,12:*` is `2,4,5,6,7,9,12,13,14,15` for a mailbox with 15 messages.
  `searchCriteria = 1:5 ANSWERED` search in message selection from message sequence number 1 to 5 for messages which have the \Answered flag set.
  `searchCriteria= 2,4 ANSWERED` search in the message selection (message numbers 2 and 4) for messages which have the \Answered flag set.

#### 利用可能な検索キー

**ALL**: All messages in the mailbox.\
**ANSWERED**: Messages with the \Answered flag set.\
**UNANSWERED**: Messages that do not have the \Answered flag set.\
**DELETED**: Messages with the \Deleted flag set.\
**UNDELETED**: Messages that do not have the \Deleted flag set.\
**DRAFT**: Messages with the \Draft flag set.\
**UNDRAFT**: Messages that do not have the \Draft flag set.\
**FLAGGED**: Messages with the \Flagged flag set.\
**UNFLAGGED**: Messages that do not have the \Flagged flag set.\
**RECENT**: Messages that have the \Recent flag set.\
**OLD**: Messages that do not have the \Recent flag set.\
**SEEN**: Messages that have the \Seen flag set.\
**UNSEEN**: Messages that do not have the \Seen flag set.\
**NEW**: Messages that have the \Recent flag set but not the \Seen flag. これは機能的には “(RECENT UNSEEN)” と同じです。\
**KEYWORD _flag_**: Messages with the specified keyword set.\
**UNKEYWORD _flag_**: Messages that do not have the specified keyword set.\
**BEFORE _date_**: Messages whose internal date is earlier than the specified date.\
**ON _date_**: Messages whose internal date is within the specified date.\
**SINCE _date_**: Messages whose internal date is within or later than the specified date.\
**SENTBEFORE _date_**: Messages whose Date header is earlier than the specified date.\
**SENTON _date_**: Messages whose Date header is within the specified date.\
**SENTSINCE _date_**: Messages whose Date header is within or later than the specified date.\
**TO _string_**: Messages that contain the specified string in the TO header.\
**FROM _string_**: Messages that contain the specified string in the FROM header.\
**CC _string_**: Messages that contain the specified string in the CC header.\
**BCC _string_**: Messages that contain the specified string in the BCC header.\
**SUBJECT _string_**: Messages that contain the specified string in the Subject header.\
**BODY _string_**: Messages that contain the specified string in the message body.\
**TEXT _string_**: Messages that contain the specified string in the header or in the message body.\
**HEADER _field-name_ _string_**: Messages that have a header with the specified field-name and that contain the specified string in the field-body.\
**UID _message-UID_**: Messages with unique identifiers corresponding to the specified unique identifier set.\
**LARGER _n_**: Messages with a size larger than the specified number of bytes.\
**SMALLER _n_**: Messages with a size smaller than the specified number of bytes.\
**NOT _search-key_**: Messages that do not match the specified search key.\
**OR _search-key1_ _search-key2_**: Messages that match either search key.

<!-- END REF -->

<!-- REF IMAPTransporterClass.selectBox().Desc -->

## .selectBox()

<details><summary>履歴</summary>

| リリース  | 内容                                           |
| ----- | -------------------------------------------- |
| 20    | _id_, _flags_, _permanentFlags_ are returned |
| 18 R4 | 追加                                           |

</details>

<!-- REF #IMAPTransporterClass.selectBox().Syntax -->**.selectBox**( *name* : Text { ; *state* : Integer } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.selectBox().Params -->

| 引数    | タイプ     |     | 説明             |
| ----- | ------- | :-: | -------------- |
| name  | Text    |  -> | メールボックスの名称     |
| state | Integer |  -> | メールボックスのアクセス状態 |
| 戻り値   | Object  |  <- | boxInfo オブジェクト |

<!-- END REF -->

#### 説明

The `.selectBox()` function <!-- REF #IMAPTransporterClass.selectBox().Summary -->selects the _name_ mailbox as the current mailbox<!-- END REF -->. この関数を使用するとメールボックスに関する情報を取得することができます。

> To get the information from a mailbox without changing the current mailbox, use [`.getBoxInfo()`](#getboxinfo).

In the _name_ parameter, pass the name of the mailbox to access. この名称は明確な左から右への階層を表し、特定の区切り文字でレベルを区分けします。 The delimiter can be found with the [`.getDelimiter()`](#getdelimiter) function.

The optional _state_ parameter defines the type of access to the mailbox. 取りうる値は以下の通りです:

| 定数                    | 値 | 説明                                                                                            |
| --------------------- | - | --------------------------------------------------------------------------------------------- |
| IMAP read only state  | 1 | 選択されたメールボックスは読み取り専用権限でアクセスされます。 新しいメッセージを表す "新着" フラグはそのまま変化しません。                              |
| IMAP read write state | 0 | 選択されたメールボックスは読み書き可能権限でアクセスされます。 メッセージは "既読" と判断され、"新着" フラグは失われます。 (デフォルト値) |

> - The function generates an error and returns **Null** if _name_ designates a non-existing mailbox.
> - If there is no open connection, `.selectBox()` will open a connection.
> - If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the [`.checkConnection()`](#checkconnection) function is automatically called.

**Returned object**

The `boxInfo` object returned contains the following properties:

| プロパティ          | タイプ    | 説明                                                                                   |
| -------------- | ------ | ------------------------------------------------------------------------------------ |
| name           | Text   | メールボックスの名称                                                                           |
| mailCount      | number | メールボックス内のメッセージの数                                                                     |
| mailRecent     | number | "recent" フラグがついたメッセージの数                                                              |
| id             | text   | メールボックスの固有ID                                                                         |
| flags          | text   | メールボックスで現在使用されているフラグのリスト (スペース区切り)。                               |
| permanentFlags | text   | クライアントが永続的に変更可能なフラグ (IMAPサーバーが管理する \Recent フラグを除く) の、スペース区切りのリスト。 |

:::info

If `permanentFlags` string includes the special flag \*, it means that the server supports [custom flags](#addflags).

:::

#### 例題

```4d
 var $server; $boxinfo : Object
 $server:=New object
 $server.host:="imap.gmail.com" // 必須
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)
 $boxInfo:=$transporter.selectBox("INBOX")
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.subscribe().Desc -->

## .subscribe()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 19   | 追加 |

</details>

<!-- REF #IMAPTransporterClass.subscribe().Syntax -->**.subscribe**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.subscribe().Params -->

| 引数   | タイプ    |     | 説明                |
| ---- | ------ | :-: | ----------------- |
| name | Text   |  -> | メールボックスの名称        |
| 戻り値  | Object |  <- | subscribe処理のステータス |

<!-- END REF -->

#### 説明

The `.subscribe()` function <!-- REF #IMAPTransporterClass.subscribe().Summary -->allows adding or removing of the specified mailbox to/from the IMAP server’s set of “subscribed” mailboxes<!-- END REF -->. 利用可能なメールボックスが大量にある場合、すべてを取得するのを避けるため、確認したいメールボックスだけを購読することができます。

In the `name` parameter, pass the name of the mailbox to add (subscribe) to your "subscribed" mailboxes.

**Returned object**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                                                                                             | タイプ        | 説明                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                              |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー           |
| errors     |                                                                                             | Collection | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                     |
|            | \[].message            | Text       | 4Dエラーの詳細                                                     |
|            | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                                          |

#### 例題

"Bills" 階層下の "Atlas Corp” メールボックスを購読します:

```4d
var $pw; $name : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

$name:="Bills"+$transporter.getDelimiter()+"Atlas Corp"
$status:=$transporter.subscribe($name)

If ($status.success)
   ALERT("Mailbox subscription successful!")
   Else
   ALERT("Error: "+$status.statusText)
   End if
End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.unsubscribe().Desc -->

## .unsubscribe()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 19   | 追加 |

</details>

<!-- REF #IMAPTransporterClass.unsubscribe().Syntax -->**.unsubscribe**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.unsubscribe().Params -->

| 引数   | タイプ    |     | 説明                  |
| ---- | ------ | :-: | ------------------- |
| name | Text   |  -> | メールボックスの名称          |
| 戻り値  | Object |  <- | unsubscribe処理のステータス |

<!-- END REF -->

#### 説明

The `.unsubscribe()` function <!-- REF #IMAPTransporterClass.unsubscribe().Summary -->removes a mailbox from a set of subscribed mailboxes<!-- END REF -->. これにより、確認するメールボックスの数を減らせます。

In the `name` parameter, pass the name of the mailbox to remove (unsubscribe) from your active mailboxes.

**Returned object**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                                                                                             | タイプ        | 説明                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                              |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー           |
| errors     |                                                                                             | Collection | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                     |
|            | \[].message            | Text       | 4Dエラーの詳細                                                     |
|            | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                                          |

#### 例題

"Bills" 階層下の "Atlas Corp” メールボックスの購読を解除します:

```4d
var $pw; $name : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

$name:="Bills"+$transporter.getDelimiter()+"Atlas Corp"
$status:=$transporter.unsubscribe($name)

If ($status.success)
   ALERT("Mailbox unsubscription successful!")
   Else
   ALERT("Error: "+$status.statusText)
   End if
End if
```

<!-- END REF -->

<!-- INCLUDE transporter.user.Desc -->

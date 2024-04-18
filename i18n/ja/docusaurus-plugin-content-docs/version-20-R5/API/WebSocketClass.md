---
id: WebSocketClass
title: WebSocket
---

The `WebSocket` class allows you to open a WebSocket client connection with a server, send and receive data, and close the connection.

WebSocketクライアント接続は、たとえばリアルタイムで財務データを受信したり、チャットでメッセージを送受信したりするのに便利です。

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R2 | 追加 |

</details>

### 例題

この例題では、基本的な WebSocketクライアントを作成します。

1. Create the `WSConnectionHandler` user class containing callback function(s) used to handle WebSocket event callbacks:

```4d
// WSConnectionHandler class

Class constructor
	
Function onMessage($ws : 4D.WebSocket; $event : Object)
   ALERT($event.data)

Function onTerminate($ws : 4D.WebSocket; $event : Object)
   ALERT("Connection closed")
```

2. 4D.WebSocket をインスタンス化して、4Dフォームから WebSocketサーバーに接続します:

```4d
Form.webSocket:=4D.WebSocket.new($wssUrl; cs.WSConnectionHandler.new())
```

3. 4Dフォームから WebSocketサーバーにメッセージを送るには、次のように書きます:

```4d
Form.webSocket.send("Hello world")

```

### WebSocket オブジェクト

WebSocketオブジェクトは、以下のプロパティと機能を提供します:

|                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketClass.dataType.Syntax -->](#dataType)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebSocketClass.dataType.Summary -->        |
| [<!-- INCLUDE #WebSocketClass.handler.Syntax -->](#handler)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebSocketClass.handler.Summary -->           |
| [<!-- INCLUDE #WebSocketClass.id.Syntax -->](#id)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebSocketClass.id.Summary -->                          |
| [<!-- INCLUDE #WebSocketClass.send().Syntax -->](#send)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebSocketClass.send().Summary -->                |
| [<!-- INCLUDE #WebSocketClass.status.Syntax -->](#status)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebSocketClass.status.Summary -->              |
| [<!-- INCLUDE #WebSocketClass.terminate().Syntax -->](#terminate)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebSocketClass.terminate().Summary --> |
| [<!-- INCLUDE #WebSocketClass.url.Syntax -->](#url)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebSocketClass.url.Summary -->                       |

## 4D.WebSocket.new()

<details><summary>履歴</summary>

| リリース  | 内容                                                   |
| ----- | ---------------------------------------------------- |
| 20 R3 | Support of `headers` property in _connectionHandler_ |

</details>

<!-- REF #4D.WebSocket.new().Syntax -->**4D.WebSocket.new**( *url* : Text { ; *connectionHandler* : Object } ) : 4D.WebSocket<!-- END REF -->

<!-- REF #4D.WebSocket.new().Params -->

| 引数                                                | タイプ                          |     | 説明                                        |
| ------------------------------------------------- | ---------------------------- | :-: | ----------------------------------------- |
| url                                               | Text                         |  -> | 接続先の URL                                  |
| [connectionHandler](#connectionHandler-parameter) | Object                       |  -> | WebSocket用コールバックを宣言しているオブジェクト             |
| 戻り値                                               | 4D.WebSocket |  <- | New [WebSocket object](#websocket-object) |

<!-- END REF -->

The `4D.WebSocket.new()` function <!-- REF #4D.WebSocket.new().Summary -->creates and returns a new [`4D.WebSocket` object](#websocket-object) connected to the WebSocket server at the address you passed in _url_<!-- END REF -->. The `4D.WebSocket` object provides an API for creating and managing a WebSocket connection to a server, as well as sending and receiving data to and from the server.

In _url_, pass the URL to which the WebSocket server will respond. 以下の URLパターンが使用できます:

- `ws://host[:port]path[?query]` for standard connections
- `wss://host[:port]path[?query]` for TLS secured connections

If the connection is not possible, a `null` object is returned and an error is generated (that you can intercept using a method installed with `ON ERR CALL`).

### _connectionHandler_ parameter

In _connectionHandler_, you can pass an object containing callback functions to be called according to connection events, as well as data type and headers to handle.

- コールバックは、接続を開始したフォームまたはワーカーのコンテキストで自動的に呼び出されます。
- フォームまたはワーカーが閉じられていない限り、WebSocket は有効です。

| プロパティ       | タイプ                          | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onMessage   | [Function](FunctionClass.md) | WebSocket データ用のコールバック関数。 WebSocket がデータを受信するたびに呼び出されます。 The callback receives the following parameters:<li>`$1`: WebSocket object</li><li>`$2`: Object</li><ul><li>`$2.type` (text): always "message"</li><li>`$2.data` (text, blob, or object, see `dataType`): Received data</li></ul>                                                                                                                                                                                                                                                                                                               |
| onError     | [Function](FunctionClass.md) | 実行エラー用のコールバック関数。 The callback receives the following parameters:<li>`$1`: WebSocket object</li><li>`$2`: Object</li><ul><li>`$2.type` (text): always "error"</li><li>`$2.errors`: collection of 4D errors stack in case of execution error.<ul><li>`[].errCode` (number): 4D error code</li><li>`[].message` (text): Description of the 4D error</li><li>`[].componentSignature` (text): Signature of the internal component which returned the error</li></ul></li></ul>                        |
| onTerminate | [Function](FunctionClass.md) | WebSocket が終了した時のコールバック関数。 The callback receives the following parameters:<li>`$1`: WebSocket object</li><li>`$2`: Object</li><ul><li>`$2.code` (number, read-only): unsigned short containing the close code sent by the server.</li><li>`$2.reason` (text, read-only): Reason why the server closed the connection. This is specific to the particular server and sub-protocol.</li><li>`$2.wasClean` (boolean, read-only): Indicates whether or not the connection was cleanly closed.</li></ul> |
| onOpen      | [Function](FunctionClass.md) | WebSocket が開始した時のコールバック関数。 The callback receives the following parameters:<li>`$1`: WebSocket object</li><li>`$2`: Object</li><ul><li>`$2.type` (text): always "open"</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| dataType    | Text                         | 受信または送信されたデータの型。 可能な値: "text" (デフォルト), "blob", "object"。 "text" = utf-8                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| headers     | Object                       | Headers of the WebSocket.<li>Syntax for standard key assignment: `headers.*key*:=*value*` (_value_ can be a Collection if the same key appears multiple times)</li><li>Syntax for Cookie assignment (particular case): `headers.Cookie:="*name*=*value* {; *name2*=*value2*{; ... } }"`</li>                                                                                                                                                                                                                                                                                                                                           |

以下は、コールバック呼び出しの流れです:

1. `onOpen` is executed once
2. Zero or several `onMessage` are executed
3. Zero or one `onError` is executed (stops the processing)
4. `onTerminate` is always executed

#### 例題

You want to set headers in the `WSConnectionHandler` user class:

```4d
// WSConnectionHandler class

Class constructor($myToken:Text)

// Creation of the headers sent to the server
This.headers:=New object("x-authorization";$myToken)
// We define two cookies
This.headers.Cookie:="yummy_cookie=choco; tasty_cookie=strawberry"
...

```

<!-- REF #WebSocketClass.dataType.Desc -->

## .dataType

<!-- REF #WebSocketClass.dataType.Syntax -->**.dataType** : Text<!-- END REF -->

#### 説明

The `.dataType` property contains <!-- REF #WebSocketClass.dataType.Summary -->the type of the response body content<!-- END REF -->. "text"、"blob"、"object" のいずれかです。

このプロパティは 読み取り専用 です。

<!-- END REF -->

<!-- REF #WebSocketClass.handler.Desc -->

## .handler

<!-- REF #WebSocketClass.handler.Syntax -->**.handler** : Object<!-- END REF -->

#### 説明

The `.handler` property contains <!-- REF #WebSocketClass.handler.Summary -->the accessor that gets the `connectionHandler` object used to initiate the connection<!-- END REF -->.

このプロパティは 読み取り専用 です。

<!-- END REF -->

<!-- REF #WebSocketClass.id.Desc -->

## .id

<!-- REF #WebSocketClass.id.Syntax -->**.id** : Longint<!-- END REF -->

#### 説明

The `.id` property contains <!-- REF #WebSocketClass.id.Summary -->the unique identifier of the connection<!-- END REF -->.

このプロパティは 読み取り専用 です。

<!-- END REF -->

<!-- REF #WebSocketClass.send().Desc -->

## .send()

<!-- REF #WebSocketClass.send().Syntax -->**.send**( *message* : Text )<br/>**.send**( *message* : Blob )<br/>**.send**( *message* : Object )<!-- END REF -->

<!-- REF #WebSocketClass.send().Params -->

| 引数      | タイプ                |     | 説明        |
| ------- | ------------------ | :-: | --------- |
| message | Text, Blob, Object |  -> | 送信するメッセージ |

<!-- END REF -->

#### 説明

The `.send()` function <!-- REF #WebSocketClass.send().Summary -->sends _message_ to the WebSocket server in the defined data type (Text, Blob, or Object)<!-- END REF -->.

The following contents are sent depending on the _message_ type:

| タイプ    | 内容                                                                                                                                     |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| Text   | UTF-8 のテキスト                                                                                                                            |
| Blob   | バイナリデータ                                                                                                                                |
| Object | Text in JSON UTF-8 (same result as with [`JSON Stringify`](https://doc.4d.com/4dv20/help/command/en/page1217.html)) |

<!-- END REF -->

<!-- REF #WebSocketClass.status.Desc -->

## .status

<!-- REF #WebSocketClass.status.Syntax -->**.status** : Text<!-- END REF -->

#### 説明

The `.status` property contains <!-- REF #WebSocketClass.status.Summary -->the current connection status (can be "Connecting", "Closing", "Closed", or "Connected")<!-- END REF -->.

このプロパティは 読み取り専用 です。

<!-- END REF -->

<!-- REF #WebSocketClass.terminate().Desc -->

## .terminate()

<!-- REF #WebSocketClass.terminate().Syntax -->**.terminate**( { *code* : Integer { ; *reason* : Text } } )<!-- END REF -->

<!-- REF #WebSocketClass.terminate().Params -->

| 引数     | タイプ     |     | 説明                    |
| ------ | ------- | :-: | --------------------- |
| code   | Integer |  -> | 接続が切断される理由を示すステータスコード |
| reason | Text    |  -> | 接続が切断される理由を説明するテキスト   |

<!-- END REF -->

#### 説明

The `.terminate()` function <!-- REF #WebSocketClass.terminate().Summary -->closes the WebSocket connection, along with optional _code_ and _reason_ parameters<!-- END REF -->.

In _code_, you can pass a status code explaining why the connection is being closed (see also [WebSocket Connection Close Code in the RFC6455](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5)):

- 指定しなかった場合、接続のクローズコードは自動的に設定されます: 通常終了の場合は 1000、そうでない場合は、接続が切断された実際の理由を示す 1001〜1015 の標準値。
- 指定された場合、この code パラメーターの値は自動設定の値をオーバーライドします。 値は整数でなくてはなりません。 1000、または 3000-4999 の範囲のカスタムコードが利用できます。 If you specify a _code_ value, you should also specify a _reason_ value.

In _reason_, you can pass a string describing why the connection is being closed.

<!-- END REF -->

<!-- REF #WebSocketClass.url.Desc -->

## .url

<!-- REF #WebSocketClass.url.Syntax -->**.url** : Text<!-- END REF -->

#### 説明

The `.url` property contains <!-- REF #WebSocketClass.url.Summary -->the URL to which the WebSocket has connected<!-- END REF -->. It is the URL you passed to the [`new()`](#4dwebsocketnew) function.

このプロパティは 読み取り専用 です。

<!-- END REF -->

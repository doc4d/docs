---
id: WebSocketClass
title: WebSocket
---

`WebSocket` クラスを使用すると、サーバーとの WebSocket クライアント接続を開いて、データを送受信し、接続を閉じることができます。

WebSocketクライアント接続は、たとえばリアルタイムで財務データを受信したり、チャットでメッセージを送受信したりするのに便利です。

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R2 | 追加 |

</details>

### 例題

この例題では、基本的な WebSocketクライアントを作成します。

1. WebSocket イベントコールバックを処理するためのコールバック関数を含む `WSConnectionHandler` ユーザークラスを作成します:

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

| リリース  | 内容                                         |
| ----- | ------------------------------------------ |
| 20 R3 | _connectionHandler_ で `headers` プロパティをサポート |

</details>

<!-- REF #4D.WebSocket.new().Syntax -->**4D.WebSocket.new**( *url* : Text { ; *connectionHandler* : Object } ) : 4D.WebSocket<!-- END REF -->

<!-- REF #4D.WebSocket.new().Params -->

| 引数                                                | タイプ                          |     | 説明                                        |
| ------------------------------------------------- | ---------------------------- | :-: | ----------------------------------------- |
| url                                               | Text                         |  -> | 接続先の URL                                  |
| [connectionHandler](#connectionHandler-parameter) | Object                       |  -> | WebSocket用コールバックを宣言しているオブジェクト             |
| 戻り値                                               | 4D.WebSocket |  <- | New [WebSocket object](#websocket-object) |

<!-- END REF -->

The `4D.WebSocket.new()` function <!-- REF #4D.WebSocket.new().Summary -->creates and returns a new [`4D.WebSocket` object](#websocket-object) connected to the WebSocket server at the address you passed in _url_<!-- END REF -->. `4D.WebSocket` オブジェクトは、サーバーとの WebSocket接続の作成と管理、およびデータの送受信のための API を提供します。

_url_には、WebSocketサーバーが応答する URL を渡します。 以下の URLパターンが使用できます:

- 標準接続用: `ws://host[:port]path[?query]`
- TLSセキュア接続用: `wss://host[:port]path[?query]`

接続できない場合、`null` オブジェクトが返され、エラーが生成されます (このエラーは `ON ERR CALL` で実装したメソッドによってインターセプトできます)。

### _connectionHandler_ パラメーター

_connectionHandler_ には、接続イベントに応じて呼び出されるコールバック関数のほか、処理するデータ型やヘッダーを含むオブジェクトを渡すことができます。

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

1. `onOpen` は 1回実行されます。
2. `onMessage` が 0回以上実行されます。
3. `onError` が 0回または 1回実行されます (処理を停止します)。
4. `onTerminate` は常に実行されます。

#### 例題

`WSConnectionHandler` ユーザークラスでヘッダーを設定します:

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

_メッセージ_ の型によって、以下の内容が送信されます:

| タイプ    | 内容                                                                                                                      |
| ------ | ----------------------------------------------------------------------------------------------------------------------- |
| Text   | UTF-8 のテキスト                                                                                                             |
| Blob   | バイナリデータ                                                                                                                 |
| Object | JSON UTF-8 のテキスト ([`JSON Stringify`](https://doc.4d.com/4dv20/help/command/ja/page1217.html) と同じ結果)。 |

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

_code_ には、接続を閉じる理由を説明するステータスコードを渡すことができます ([RFC6455 の WebSocket Connection Close Code](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5) も参照ください):

- 指定しなかった場合、接続のクローズコードは自動的に設定されます: 通常終了の場合は 1000、そうでない場合は、接続が切断された実際の理由を示す 1001〜1015 の標準値。
- 指定された場合、この code パラメーターの値は自動設定の値をオーバーライドします。 値は整数でなくてはなりません。 1000、または 3000-4999 の範囲のカスタムコードが利用できます。 _code_ を指定する場合は、_reason_ の値も指定する必要があります。

_reason_ には、接続を閉じる理由を説明するテキストを渡すことができます。

<!-- END REF -->

<!-- REF #WebSocketClass.url.Desc -->

## .url

<!-- REF #WebSocketClass.url.Syntax -->**.url** : Text<!-- END REF -->

#### 説明

The `.url` property contains <!-- REF #WebSocketClass.url.Summary -->the URL to which the WebSocket has connected<!-- END REF -->. これは、[`new()`](#4dwebsocketnew) 関数に渡した URL と同じです。

このプロパティは 読み取り専用 です。

<!-- END REF -->

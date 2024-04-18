---
id: HTTPRequestClass
title: HTTPRequest
---

The `HTTPRequest` class allows you to handle [`HTTPRequest objects`](#httprequest-object) that can be used to configure and send requests to an HTTP server, as well as to process the HTTP server responses.

The `HTTPRequest` class is available from the `4D` class store. You create and send HTTP requests using the [4D.HTTPRequest.new()](#4dhttprequestnew) function, that returns a [`HTTPRequest object`](#httprequest-object).

<details><summary>履歴</summary>

| リリース  | 内容     |
| ----- | ------ |
| 19 R6 | クラスを追加 |

</details>

### 例題

Create a `MyHttpRequestOptions` class for the request options:

```4d
Class constructor($method : Text; $headers : Object; $body : Text)
This.method:=$method
This.headers:=$headers
This.body:=$body

Function onResponse($request : 4D.HTTPRequest; $event : Object)
// リクエストを非同期的に処理する場合、onResponse メソッドをここに書きます

Function onError($request : 4D.HTTPRequest; $event : Object)
// リクエストを非同期的に処理する場合、onError メソッドをここに書きます
```

このクラスを使って、次のようにリクエストを作成できます:

```4d
var $headers : Object
$headers:=New object()
$headers["field1"]:="value1"

var myHttpRequestOptions : cs.MyHttpRequestOptions
myHttpRequestOptions := cs.MyHttpRequestOptions.new("GET"; $headers; "")

var $request : 4D.HTTPRequest
$request:=4D.HTTPRequest.new("www.google.com"; myHttpRequestOptions)
$request.wait() // リクエストを同期的に処理する場合
// $request.response からリクエストの結果を取得したり、$request.error からエラーの詳細を確認したりできます
```

### HTTPRequest オブジェクト

HTTPRequest オブジェクトは共有できないオブジェクトです。

HTTPRequest オブジェクトは次のプロパティや関数を提供します:

|                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #HTTPRequestClass.dataType.Syntax -->](#dataType)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.dataType.Summary -->                               |
| [<!-- INCLUDE #HTTPRequestClass.encoding.Syntax -->](#encoding)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.encoding.Summary -->                               |
| [<!-- INCLUDE #HTTPRequestClass.errors.Syntax -->](#errors)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.errors.Summary -->                                     |
| [<!-- INCLUDE #HTTPRequestClass.headers.Syntax -->](#headers)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.headers.Summary -->                                  |
| [<!-- INCLUDE #HTTPRequestClass.method.Syntax -->](#method)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.method.Summary -->                                     |
| [<!-- INCLUDE #HTTPRequestClass.protocol.Syntax -->](#protocol)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.protocol.Summary -->                               |
| [<!-- INCLUDE #HTTPRequestClass.response.Syntax -->](#response)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.response.Summary -->                               |
| [<!-- INCLUDE #HTTPRequestClass.returnResponseBody.Syntax -->](#returnResponseBody)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.returnResponseBody.Summary --> |
| [<!-- INCLUDE #HTTPRequestClass.terminate().Syntax -->](#terminate)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.terminate().Summary -->                        |
| [<!-- INCLUDE #HTTPRequestClass.terminated.Syntax -->](#terminated)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.terminated.Summary -->                         |
| [<!-- INCLUDE #HTTPRequestClass.timeout.Syntax -->](#timeout)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.timeout.Summary -->                                  |
| [<!-- INCLUDE #HTTPRequestClass.url.Syntax -->](#url)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.url.Summary -->                                              |
| [<!-- INCLUDE #HTTPRequestClass.wait().Syntax -->](#wait)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.wait().Summary -->                                       |

<!-- REF #4D.HTTPRequest.new().Desc -->

## 4D.HTTPRequest.new()

<details><summary>履歴</summary>

| リリース  | 内容                                                             |
| ----- | -------------------------------------------------------------- |
| 20    | TLS検証がデフォルトに                                                   |
| 19 R7 | Support of _automaticRedirections_ and _decodeData_ properties |

</details>

<!-- REF #4D.HTTPRequest.new().Syntax -->**4D.HTTPRequest.new**( *url* : Text { ; *options* : Object } ) : 4D.HTTPRequest<!-- END REF -->

<!-- REF #4D.HTTPRequest.new().Params -->

| 引数      | タイプ                            |     | 説明                    |
| ------- | ------------------------------ | :-: | --------------------- |
| url     | Text                           |  -> | リクエストの送信先URL          |
| options | Object                         |  -> | リクエスト設定プロパティ          |
| 戻り値     | 4D.HTTPRequest |  <- | 新規 HTTPRequest オブジェクト |

<!-- END REF -->

#### 説明

The `4D.HTTPRequest.new()` function <!-- REF #4D.HTTPRequest.new().Summary -->creates and sends a HTTP request to the HTTP server defined in _url_ with the defined _options_, and returns a `4D.HTTPRequest` object<!-- END REF -->.

The returned `HTTPRequest` object is used to process responses from the HTTP server and call methods.

In _url_, pass the URL where you want to send the request. シンタックスは以下の通りです:

```
{http://}[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
{https://}[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
```

If you omit the scheme part (`http://` or `https://`), a https request is sent.

たとえば、次の文字列を受け渡すことができます:

```
    http://www.myserver.com
    www.myserver.com/path
    http://www.myserver.com/path?name="jones"
    https://www.myserver.com/login
    http://123.45.67.89:8083
    http://john:smith@123.45.67.89:8083
    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]
    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]:8080/index.html (**)
```

#### `options` parameter

In the _options_ parameter, pass an object that can contain the following properties:

| プロパティ                  | タイプ                                             | 説明                                                                                                                                                                                                          | デフォルト       |
| ---------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| automaticRedirections  | Boolean                                         | true の場合、リダイレクトは自動的に実行されます (最大 5回までのリダイレクトが処理され、もしあれば 6回目のリダイレクトレスポンスが返されます)                                                                                                             | true        |
| body                   | Variant                                         | Body of the request (required in case of `post` or `put` requests). テキスト、BLOB、またはオブジェクトを指定できます。 ヘッダー内で設定されていない限り、content-type は当プロパティの型によって決定されます。                       | undefined   |
| certificatesFolder     | [Folder](FolderClass.md)                        | 使用するクライアント証明書フォルダーを指定します。                                                                                                                                                                                   | undefined   |
| dataType               | Text                                            | レスポンス本文のデータ型。 値: "text", "blob", "object", または "auto"。 "auto" の場合、本文の型は MIMEタイプから推定されます (JSON ならオブジェクト、テキスト・javascript・xml・httpメッセージ・URLエンコードされたフォームなどはテキスト、それ以外は BLOB)。 | "auto"      |
| decodeData             | Boolean                                         | If true, the data received in the `onData` callback is uncompressed                                                                                                                                         | false       |
| encoding               | Text                                            | Used only in case of requests with a `body` (`post` or `put` methods). 本文がテキストの場合のエンコーディング。ヘッダーにて content-type が指定されている場合は無視されます。                                        | "UTF-8"     |
| headers                | Object                                          | リクエストのヘッダー。 Syntax: `headers.key=value` (_value_ can be a Collection if the same key must appear multiple times)                                                         | 空のオブジェクト    |
| method                 | Text                                            | "POST"、"GET"、またはその他のメソッド                                                                                                                                                                                    | "GET"       |
| minTLSVersion          | Text                                            | Sets the minimum version of TLS: "`TLSv1_0`", "`TLSv1_1`", "`TLSv1_2`", "`TLSv1_3`"                                                                                                         | "`TLSv1_2`" |
| onData                 | [Function](FunctionClass.md)                    | 本文のデータ受信時のコールバック。 コールバックは 2つのオブジェクトを引数として受け取ります (後述参照)                                                                                                                                   | undefined   |
| onError                | [Function](FunctionClass.md)                    | エラー発生時のコールバック。 コールバックは 2つのオブジェクトを引数として受け取ります (後述参照)                                                                                                                                      | undefined   |
| onHeaders              | [Function](FunctionClass.md)                    | ヘッダー受信時のコールバック。 コールバックは 2つのオブジェクトを引数として受け取ります (後述参照)                                                                                                                                     | undefined   |
| onResponse             | [Function](FunctionClass.md)                    | レスポンス受信時のコールバック。 コールバックは 2つのオブジェクトを引数として受け取ります (後述参照)                                                                                                                                    | undefined   |
| onTerminate            | [Function](FunctionClass.md)                    | リクエスト終了時のコールバック。 コールバックは 2つのオブジェクトを引数として受け取ります (後述参照)                                                                                                                                    | undefined   |
| protocol               | Text                                            | "auto" または "HTTP1"。 "auto" は現在の実装における HTTP1 を意味します。                                                                                                                                                         | "auto"      |
| proxyAuthentication    | [authentication object](#authentication-object) | プロキシ認証のためのオブジェクト                                                                                                                                                                                            | undefined   |
| serverAuthentication   | [authentication object](#authentication-object) | サーバー認証のためのオブジェクト                                                                                                                                                                                            | undefined   |
| returnResponseBody     | Boolean                                         | If false, the response body is not returned in the [`response` object](#response). Returns an error if false and `onData` is undefined                                                      | true        |
| timeout                | Real                                            | タイムアウト (秒単位) 未定義 = タイムアウトなし                                                                                                                                                              | 未定義         |
| validateTLSCertificate | Boolean                                         | false の場合、4D は TLS証明書の検証をおこなわず、無効 (期限切れ、自己署名など) であってもエラーを返しません。 重要: 現在の実装では、認証局そのものは検証されません。                                                                             | true        |

#### コールバック関数

すべてのコールバック関数は、2つのオブジェクト引数を受け取ります:

| 引数      | タイプ                                         |
| ------- | ------------------------------------------- |
| $param1 | [`HTTPRequest` object](#httprequest-object) |
| $param2 | [`Event` object](#event-object)             |

以下は、コールバック呼び出しの流れです:

1. `onHeaders` is always called once

2. `onData` is called zero or several times (not called if the request does not have a body)

3. If no error occured, `onResponse` is always called once

4. If an error occurs, `onError` is executed once (and terminates the request)

5. `onTerminate` is always executed once

#### event オブジェクト

An `event` object is returned when a [callback function](#callback-functions) is called. このオブジェクトには次のプロパティが含まれます:

| プロパティ                 | タイプ  | 説明                                                                                     |
| --------------------- | ---- | -------------------------------------------------------------------------------------- |
| .data | blob | 取得データ。 It is always _undefined_ except in the `onData` callback                        |
| .type | text | イベントの種類。 取り得る値: "response", "error", "headers", "data", または "terminate |

#### authentication オブジェクト

An authentication object handles the `options.serverAuthentication` or `options.proxyAuthentication` property. このオブジェクトには以下のプロパティを含めることができます:

| プロパティ    | タイプ  | 説明                                              | デフォルト     |
| -------- | ---- | ----------------------------------------------- | --------- |
| name     | Text | 認証に使用する名前                                       | undefined |
| password | Text | 認証に使用するパスワード                                    | undefined |
| method   | Text | 認証方法: "basic", "digest", "auto" | "auto"    |

<!-- END REF -->

<!-- REF #HTTP Parse message.Desc -->

## HTTP Parse message

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R4 | 追加 |

</details>

<!-- REF #HTTP Parse message.Syntax -->**HTTP Parse message**( *data* : Text ) : Object<br/>**HTTP Parse message**( *data* : Blob ) : Object<!-- END REF -->

<!-- REF #HTTP Parse message.Params -->

| 引数   | タイプ        |     | 説明                                                |
| ---- | ---------- | :-: | ------------------------------------------------- |
| data | Text, Blob |  -> | 解析するデータ                                           |
| 戻り値  | Object     |  <- | オブジェクト (各プロパティは、マルチパートの各データです) |

<!-- END REF -->

#### 説明

The `HTTP Parse message` command <!-- REF #HTTP Parse message.Summary -->parses a multipart/form-data text or blob (HTTP "response" message) and extracts the content to an object. Each property of the returned object corresponds to a part of the multipart data<!-- END REF -->.

:::info

HTTP 自体はステートレスな通信プロトコルです。 このフレームワークの中で、クライアントは、メソッド・ターゲット・ヘッダー・コンテンツなどの詳細を指定した "request" メッセージをサーバーに送ることによって通信を開始します。 サーバーは、同じ詳細を含む "response" メッセージで応答します。 `HTTP Parse message` parses either the "request" or the "response" message into a well-organized object.

:::

#### 例題

次の例では、HTTPリクエストを格納するテキストファイルのデータを解析します。

ファイルの中身は次のとおりです:

```
POST /batch/gmail/v1/ HTTP/1.1
Accept-Encoding: gzip, deflate
Authorization: Bearer xxxxxx
Connection: Close
Content-Length: 442
Content-Type: multipart/mixed; boundary=batch_19438756D576A14ABA87C112F56B9396; charset=UTF-8
Date: Wed, 29 Nov 2023 13:51:35 GMT
Host: gmail.googleapis.com
User-Agent: 4D/20.4.0


--batch_19438756D576A14ABA87C112F56B9396
Content-Type: application/http
Content-ID: <item1>

GET https://gmail.googleapis.com/gmail/v1/users/me/messages/18c1b58689824c92?format=raw HTTP/1.1


--batch_19438756D576A14ABA87C112F56B9396
Content-Type: application/http
Content-ID: <item2>

GET https://gmail.googleapis.com/gmail/v1/users/me/messages/18c1b58642b28e2b?format=raw HTTP/1.1

--batch_19438756D576A14ABA87C112F56B9396--
```

ファイルを解析します:

```4d
var $message : Text:=File("/RESOURCES/HTTPrequest.txt").getText()
var $parsedMessage : Object:=HTTP Parse message($message)
//$parsedMessage= {
//headers:{"User-Agent":"4D/20.4.0",...},
//parts:[{"contentType":"application/http","contentID":"item1",...}], 
//requestLine:"POST /batch/gmail/v1/ HTTP/1.1"
//}
```

<!-- END REF -->

<!-- REF #HTTPRequestClass.dataType.Desc -->

## .dataType

<!-- REF #HTTPRequestClass.dataType.Syntax -->**dataType** : Text<!-- END REF -->

#### 説明

The `.dataType` property contains <!-- REF #HTTPRequestClass.dataType.Summary -->the `dataType` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew), "auto" if it was omitted<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.encoding.Desc -->

## .encoding

<!-- REF #HTTPRequestClass.encoding.Syntax -->**encoding** : Text<!-- END REF -->

#### 説明

The `.encoding` property contains <!-- REF #HTTPRequestClass.encoding.Summary -->the `encoding` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew), "UTF-8" if it was omitted<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.errors.Desc -->

## .errors

<!-- REF #HTTPRequestClass.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### 説明

The `.errors` property contains <!-- REF #HTTPRequestClass.errors.Summary -->the collection of all the errors if at least one error has been triggered<!-- END REF -->.

Here is the contents of the `.errors` property:

| プロパティ  |                                                                                           | タイプ        | 説明                  |
| ------ | ----------------------------------------------------------------------------------------- | ---------- | ------------------- |
| errors |                                                                                           | Collection | エラー発生時の 4Dエラースタック   |
|        | [].errCode            | Number     | 4Dエラーコード            |
|        | [].message            | Text       | 4Dエラーの詳細            |
|        | [].componentSignature | Text       | エラーを返した内部コンポーネントの署名 |

<!-- END REF -->

<!-- REF #HTTPRequestClass.headers.Desc -->

## .headers

<!-- REF #HTTPRequestClass.headers.Syntax -->**headers** : Object<!-- END REF -->

#### 説明

The `.headers` property contains <!-- REF #HTTPRequestClass.headers.Summary -->the `headers` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. (省略された場合は空のオブジェクト)

<!-- END REF -->

<!-- REF #HTTPRequestClass.method.Desc -->

## .method

<!-- REF #HTTPRequestClass.method.Syntax -->**method** : Text<!-- END REF -->

#### 説明

The `.method` property contains <!-- REF #HTTPRequestClass.method.Summary -->the `method` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. (省略された場合は "GET")

<!-- END REF -->

<!-- REF #HTTPRequestClass.protocol.Desc -->

## .protocol

<!-- REF #HTTPRequestClass.protocol.Syntax -->**protocol** : Text<!-- END REF -->

#### 説明

The `.protocol` property contains <!-- REF #HTTPRequestClass.protocol.Summary -->the `protocol` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. (省略時、または "auto" の場合は、使用されたプロトコルのバージョン)

<!-- END REF -->

<!-- REF #HTTPRequestClass.response.Desc -->

## .response

<details><summary>履歴</summary>

| リリース  | 内容                                                                             |
| ----- | ------------------------------------------------------------------------------ |
| 19 R8 | `.headers` returns lowercase names. New `.rawHeaders` property |

</details>

<!-- REF #HTTPRequestClass.response.Syntax -->**response** : Object<!-- END REF -->

#### 説明

The `.response` property contains <!-- REF #HTTPRequestClass.response.Summary -->the response to the request if it has received at least the status code, undefined otherwise<!-- END REF -->.

A `response` object is a non-sharable object. このオブジェクトは次のプロパティを提供します:

| プロパティ                       | タイプ     | 説明                                                                                                                                                                                                                        |
| --------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| .body       | Variant | レスポンスのボディ。 The type of the message is defined according to the [`dataType`](#datatype) property. ボディがまだ受信されていない場合は未定義です。                                                                                  |
| .headers    | Object  | レスポンスのヘッダー。 ヘッダー名は小文字で返されます。 `<headername>.key` = value (value can be a collection if the same key appears multiple times). ヘッダーがまだ受信されていない場合は未定義です。                                   |
| .status     | Number  | レスポンスのステータスコード                                                                                                                                                                                                            |
| .statusText | Text    | ステータスコードを説明するメッセージ                                                                                                                                                                                                        |
| .rawHeaders | Object  | レスポンスのヘッダー。 ヘッダー名はそのまま (大文字小文字を変えずに) 返されます。 `<headerName>.key` = value (value can be a collection if the same key appears multiple times). ヘッダーがまだ受信されていない場合は未定義です。 |

<!-- END REF -->

<!-- REF #HTTPRequestClass.returnResponseBody.Desc -->

## .returnResponseBody

<!-- REF #HTTPRequestClass.returnResponseBody.Syntax -->**returnResponseBody** : Boolean<!-- END REF -->

#### 説明

The `.returnResponseBody` property contains <!-- REF #HTTPRequestClass.returnResponseBody.Summary -->the `returnResponseBody` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. (省略された場合は true)。

<!-- END REF -->

<!-- REF #HTTPRequestClass.terminate().Desc -->

## .terminate()

<!-- REF #HTTPRequestClass.terminate().Syntax -->**.terminate()**<!-- END REF -->

<!-- REF #HTTPRequestClass.terminate().Params -->

| 引数 | タイプ |     | 説明         |
| -- | --- | :-: | ---------- |
|    |     |     | 引数を必要としません |

<!-- END REF -->

#### 説明

> この関数はスレッドセーフです。

The `.terminate()` function <!-- REF #HTTPRequestClass.terminate().Summary -->aborts the HTTP request<!-- END REF -->. It triggers the `onTerminate` event.

<!-- END REF -->

<!-- REF #HTTPRequestClass.terminated.Desc -->

## .terminated

<!-- REF #HTTPRequestClass.terminated.Syntax -->**terminated** : Boolean<!-- END REF -->

#### 説明

The `.terminated` property contains <!-- REF #HTTPRequestClass.terminated.Summary -->True if the request is terminated (after the call to `onTerminate`), false otherwise<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.timeout.Desc -->

## .timeout

<!-- REF #HTTPRequestClass.timeout.Syntax -->**timeout** : Real<!-- END REF -->

#### 説明

The `.timeout` property contains <!-- REF #HTTPRequestClass.timeout.Summary -->the `timeout` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. (省略された場合は未定義)。

<!-- END REF -->

<!-- REF #HTTPRequestClass.url.Desc -->

## .url

<!-- REF #HTTPRequestClass.url.Syntax -->**url** : Text<!-- END REF -->

#### 説明

The `.url` property contains <!-- REF #HTTPRequestClass.url.Summary -->the URL of the HTTP request<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.wait().Desc -->

## .wait()

<!-- REF #HTTPRequestClass.wait().Syntax -->**.wait**( { *time* : Real } ) : HTTPRequestClass<!-- END REF -->

<!-- REF #HTTPRequestClass.wait().Params -->

| 引数   | タイプ                            |     | 説明                                    |
| ---- | ------------------------------ | :-: | ------------------------------------- |
| time | Real                           |  -> | レスポンスを待機する最長時間 (秒) |
| 戻り値  | 4D.HTTPRequest |  <- | HTTPRequest オブジェクト                    |

<!-- END REF -->

#### 説明

> この関数はスレッドセーフです。

The `wait()` function <!-- REF #HTTPRequestClass.wait().Summary -->waits for the response from the server<!-- END REF -->.

If a _time_ parameter is passed, the function will wait at most the defined number of seconds.

サーバーのレスポンスがすでに到着している場合、関数は即座に返されます。

<!-- END REF -->

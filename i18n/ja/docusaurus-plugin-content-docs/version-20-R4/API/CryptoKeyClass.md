---
id: CryptoKeyClass
title: CryptoKey
---

The `CryptoKey` class in the 4D language encapsulates an asymmetric encryption key pair.

This class is available from the `4D` class store.

### 例題

たとえば ES256 JSON Web Token (JWT) を作成するために新規 ECDSA キーペアを使ってメッセージの署名と検証をおこないます。

```4d
 // Generate a new ECDSA key pair
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))

  // Get signature as base64
$message:="hello world"
$signature:=$key.sign($message;New object("hash";"SHA256"))

  // Verify signature
$status:=$key.verify($message;$signature;New object("hash";"SHA256"))
ASSERT($status.success)
```

### 概要

|                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #4D.CryptoKey.new().Syntax -->](#4dcryptokeynew)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.CryptoKey.new().Summary -->              |
| [<!-- INCLUDE #CryptoKey.curve.Syntax -->](#curve)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.curve.Summary -->                             |
| [<!-- INCLUDE #CryptoKey.decrypt().Syntax -->](#decrypt)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.decrypt().Summary -->                   |
| [<!-- INCLUDE #CryptoKey.encrypt().Syntax -->](#encrypt)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.encrypt().Summary -->                   |
| [<!-- INCLUDE #CryptoKey.getPrivateKey().Syntax -->](#getprivatekey)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.getPrivateKey().Summary --> |
| [<!-- INCLUDE #CryptoKey.getPublicKey().Syntax -->](#getpublickey)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.getPublicKey().Summary -->    |
| [<!-- INCLUDE #CryptoKey.sign().Syntax -->](#sign)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.sign().Summary -->                            |
| [<!-- INCLUDE #CryptoKey.size.Syntax -->](#size)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.size.Summary -->                                |
| [<!-- INCLUDE #CryptoKey.type.Syntax -->](#type)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.type.Summary -->                                |
| [<!-- INCLUDE #CryptoKey.verify().Syntax -->](#verify)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.verify().Summary -->                      |

## 4D.CryptoKey.new()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |

</details>

<!-- REF #4D.CryptoKey.new().Syntax -->

**4D.CryptoKey.new**( _settings_ : Object ) : 4D.CryptoKey<!-- END REF -->

<!-- REF #4D.CryptoKey.new().Params -->

| 引数       | タイプ          |    | 説明                                          |                  |
| -------- | ------------ | -- | ------------------------------------------- | ---------------- |
| settings | Object       | -> | キーペアを生成・ロードするための設定                          |                  |
| result   | 4D.CryptoKey | <- | Object encapsulating an encryption key pair | <!-- END REF --> |

The `4D.CryptoKey.new()` function <!-- REF #4D.CryptoKey.new().Summary -->creates a new `4D.CryptoKey` object encapsulating an encryption key pair<!-- END REF -->, based upon the _settings_ object parameter. 新規の RSA または ECDSA キーを生成するほか、PEM 形式の既存のキーペアをロードすることができます。

#### _settings_

| プロパティ           | タイプ     | 説明                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)   | text    | Defines the type of the key to create: <li>"RSA": generates a RSA key pair, using [.size](#size) as size.</li><li>"ECDSA": generates an Elliptic Curve Digital Signature Algorithm key pair, using [.curve](#curve) as curve. Note that ECDSA keys cannot be used for encryption but only for signature.</li><li>"PEM": loads a key pair definition in PEM format, using [.pem](#pem).</li> |
| [curve](#curve) | text    | ECDSA 曲線名                                                                                                                                                                                                                                                                                                                                                                                   |
| [pem](#pem)     | text    | ロードする PEM 形式の暗号化キー                                                                                                                                                                                                                                                                                                                                                                          |
| [size](#size)   | integer | RSA キーのサイズ (ビット単位)                                                                                                                                                                                                                                                                                                                                                       |

#### _CryptoKey_

The returned `CryptoKey` object encapsulates an encryption key pair. これは共有オブジェクトのため、複数の 4D プロセスによって同時使用できます。

<!-- REF CryptoKey.curve -->

## .curve

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |

</details>

<!-- REF #CryptoKey.curve.Syntax -->**.curve** : Text<!-- END REF -->

Defined only for ECDSA keys: the <!-- REF #CryptoKey.curve.Summary -->normalised curve name of the key<!-- END REF -->. 通常、ES256 (デフォルト) の場合は "prime256v1"、ES384 の場合は "secp384r1"、ES512 の場合は "secp521r1"。

<!-- END REF -->

<!-- REF CryptoKey.decrypt().Desc -->

## .decrypt()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |

</details>

<!-- REF #CryptoKey.decrypt().Syntax -->

**.decrypt**( _message_ : Text ; _options_ : Object ) : Object<!-- END REF -->

<!-- REF #CryptoKey.decrypt().Params -->

| 引数      | タイプ    |    | 説明                                                                            |                  |
| ------- | ------ | -- | ----------------------------------------------------------------------------- | ---------------- |
| message | Text   | -> | Message string to be decoded using `options.encodingEncrypted` and decrypted. |                  |
| options | Object | -> | デコーディングオプション                                                                  |                  |
| 戻り値     | Object | <- | ステータス                                                                         | <!-- END REF --> |

The `.decrypt()` function <!-- REF #CryptoKey.decrypt().Summary -->decrypts the _message_ parameter using the **private** key<!-- END REF -->. 使用されるアルゴリズムはキーの種類に依存します。

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

#### _options_

| プロパティ             | タイプ  | 説明                                                                                                                                           |
| ----------------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | 使用する Digest アルゴリズム。 例: "SHA256", "SHA384", "SHA512"。                                                                                         |
| encodingEncrypted | text | Encoding used to convert the `message` parameter into the binary representation to decrypt. 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64" |
| encodingDecrypted | text | バイナリの復号メッセージを文字列に変換するためのエンコーディング。 可能な値: "UTF-8", "Base64" または "Base64URL"。 デフォルト値: "UTF-8"                                                   |

#### _Result_

The function returns a status object with `success` property set to `true` if the _message_ could be successfully decrypted.

| プロパティ   | タイプ        | 説明                                                                  |
| ------- | ---------- | ------------------------------------------------------------------- |
| success | boolean    | メッセージの復号に成功した場合は true                                               |
| result  | text       | Message decrypted and decoded using the `options.encodingDecrypted` |
| errors  | collection | If `success` is `false`, may contain a collection of errors         |

In case the _message_ couldn't be decrypted because it was not encrypted with the same key or algorithm, the `status` object being returned contains an error collection in `status.errors`.

<!-- END REF -->

<!-- REF CryptoKey.encrypt().Desc -->

## .encrypt()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |

</details>

<!-- REF #CryptoKey.encrypt().Syntax -->

**.encrypt**( _message_ : Text ; _options_ : Object ) : Text<!-- END REF -->

<!-- REF #CryptoKey.encrypt().Params -->

| 引数      | タイプ    |    | 説明                                                                            |                  |
| ------- | ------ | -- | ----------------------------------------------------------------------------- | ---------------- |
| message | Text   | -> | Message string to be encoded using `options.encodingDecrypted` and encrypted. |                  |
| options | Object | -> | エンコーディングオプション                                                                 |                  |
| 戻り値     | Text   | <- | Message encrypted and encoded using the `options.encodingEncrypted`           | <!-- END REF --> |

The `.encrypt()` function <!-- REF #CryptoKey.encrypt().Summary -->encrypts the _message_ parameter using the **public** key<!-- END REF -->. 使用されるアルゴリズムはキーの種類に依存します。

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

##### _options_

| プロパティ             | タイプ  | 説明                                                                                                                                                   |
| ----------------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | 使用する Digest アルゴリズム。 例: "SHA256", "SHA384", "SHA512"。                                                                                                 |
| encodingEncrypted | text | バイナリの暗号化メッセージを文字列に変換するためのエンコーディング。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"                                                                  |
| encodingDecrypted | text | Encoding used to convert the `message` parameter into the binary representation to encrypt. 可能な値: "UTF-8", "Base64" または "Base64URL"。 デフォルト値: "UTF-8" |

#### _Result_

戻り値は暗号化されたメッセージです。

<!-- END REF -->

<!-- REF CryptoKey.getPrivateKey().Desc -->

## .getPrivateKey()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |

</details>

<!-- REF #CryptoKey.getPrivateKey().Syntax -->

**.getPrivateKey()** : Text<!-- END REF -->

<!-- REF #CryptoKey.getPrivateKey().Params -->

| 引数  | タイプ  |    | 説明                        |                  |
| --- | ---- | -- | ------------------------- | ---------------- |
| 戻り値 | Text | <- | Private key in PEM format | <!-- END REF --> |

The `.getPrivateKey()` function  <!-- REF #CryptoKey.getPrivateKey().Summary -->returns the private key of the `CryptoKey` object<!-- END REF --> in PEM format, or an empty string if none is available.

#### _Result_

戻り値は秘密鍵です。

<!-- END REF -->

<!-- REF CryptoKey.getPublicKey().Desc -->

## .getPublicKey()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |

</details>

<!-- REF #CryptoKey.getPublicKey().Syntax -->

**.getPublicKey**() : Text<!-- END REF -->

<!-- REF #CryptoKey.getPublicKey().Params -->

| 引数  | タイプ  |    | 説明                       |                  |
| --- | ---- | -- | ------------------------ | ---------------- |
| 戻り値 | Text | <- | Public key in PEM format | <!-- END REF --> |

The `.getPublicKey()` function <!-- REF #CryptoKey.getPublicKey().Summary -->returns the public key of the `CryptoKey` object<!-- END REF --> in PEM format, or an empty string if none is available.

#### _Result_

戻り値は公開鍵です。

<!-- END REF -->

***

<!-- REF CryptoKey.pem.Desc -->

## .pem

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |

</details>

<!-- REF #CryptoKey.pem.Syntax -->

**.pem** : Text<!-- END REF -->

<!-- REF #CryptoKey.pem.Summary -->

ロードする PEM 形式の暗号化キー。 秘密鍵を渡した場合、RSA または ECDSA の公開鍵は秘密鍵から推定されます。 <!-- END REF -->

<!-- REF CryptoKey.sign().Desc -->

## .sign()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |

</details>

<!-- REF #CryptoKey.sign().Syntax -->.**sign** (*message* : Text ; *options* : Object) : Text<!-- END REF -->

<!-- REF #CryptoKey.sign().Params -->

| 引数      | タイプ    |    | 説明                                                                              |                  |
| ------- | ------ | -- | ------------------------------------------------------------------------------- | ---------------- |
| message | Text   | -> | 署名をするメッセージ                                                                      |                  |
| options | Object | -> | 署名オプション                                                                         |                  |
| 戻り値     | Text   | <- | Signature in Base64 or Base64URL representation, depending on "encoding" option | <!-- END REF --> |

The `.sign()` function <!-- REF #CryptoKey.sign().Summary -->signs the utf8 representation of a _message_ string<!-- END REF --> using the `CryptoKey` object keys and provided _options_. It returns its signature in base64 or base64URL format, depending on the value of the `options.encoding` attribute you passed.

The `CryptoKey` must contain a valid **private** key.

#### _options_

| プロパティ             | タイプ     | 説明                                                                                                                           |
| ----------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| hash              | text    | 使用する Digest アルゴリズム。 例: "SHA256", "SHA384", "SHA512"。 JWT の生成に使われた場合、ハッシュサイズは PS@, ES@, RS@, または PS@ のアルゴリズムサイズと同じでなくてはなりません。 |
| encodingEncrypted | text    | バイナリの暗号化メッセージを文字列に変換するためのエンコーディング。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"                                          |
| pss               | boolean | 確率的署名スキーム (PSS) を使用する。 RSA キーでない場合は無視されます。 Pass `true` when producing a JWT for PS@ algorithm             |
| encoding          | text    | 戻り値の署名のエンコード方式。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"                                                             |

#### _Result_

The utf8 representation of the _message_ string.

<!-- END REF -->

<!-- REF CryptoKey.size -->

## .size

<!-- END REF -->

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |

</details>

<!-- REF #CryptoKey.size.Syntax -->**.size** : Integer<!-- END REF -->

Defined only for RSA keys: <!-- REF #CryptoKey.size.Summary -->the size of the key in bits<!-- END REF -->. 通常は 2048 (デフォルト)。

<!-- REF CryptoKey.type -->

## .type

<!-- END REF -->

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |

</details>

<!-- REF #CryptoKey.type.Syntax -->**.type** : Text<!-- END REF -->

Contains the <!-- REF #CryptoKey.type.Summary -->name of the key type - "RSA", "ECDSA", "PEM" <!-- END REF -->.

- "RSA": an RSA key pair, using `settings.size` as [.size](#size).
- "ECDSA": an Elliptic Curve Digital Signature Algorithm key pair, using `settings.curve` as [.curve](#curve). ECDSA キーは署名だけに使用されるもので、暗号化には使用できないことに留意してください。
- "PEM": a key pair definition in PEM format, using `settings.pem` as [.pem](#pem).

<!-- REF CryptoKey.verify().Desc -->

## .verify()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |

</details>

<!-- REF #CryptoKey.verify().Syntax -->

**.verify**( _message_ : Text ; _signature_ : Text ; _options_ : Object) : object<!-- END REF -->

<!-- REF #CryptoKey.verify().Params -->

| 引数        | タイプ    |    | 説明                                                                                                |                  |
| --------- | ------ | -- | ------------------------------------------------------------------------------------------------- | ---------------- |
| message   | Text   | -> | 署名生成時に使われたメッセージ文字列                                                                                |                  |
| signature | Text   | -> | Signature to verify, in Base64 or Base64URL representation, depending on `options.encoding` value |                  |
| options   | Object | -> | 署名オプション                                                                                           |                  |
| 戻り値       | Object | <- | Status of the verification                                                                        | <!-- END REF --> |

The `.verify()` function <!-- REF #CryptoKey.verify().Summary -->verifies the base64 signature against the utf8 representation of _message_<!-- END REF --> using the `CryptoKey` object keys and provided _options_.

The `CryptoKey` must contain a valid **public** key.

#### _options_

| プロパティ    | タイプ     | 説明                                                                                                                           |
| -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| hash     | text    | 使用する Digest アルゴリズム。 例: "SHA256", "SHA384", "SHA512"。 JWT の生成に使われた場合、ハッシュサイズは PS@, ES@, RS@, または PS@ のアルゴリズムサイズと同じでなくてはなりません。 |
| pss      | boolean | 確率的署名スキーム (PSS) を使用する。 RSA キーでない場合は無視されます。 Pass `true` when verifying a JWT for PS@ algorithm             |
| encoding | text    | 署名のエンコード方式。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"                                                                 |

#### _Result_

The function returns a status object with `success` property set to `true` if `message` could be successfully verified (i.e. the signature matches).

In case the signature couldn't be verified because it was not signed with the same _message_, key or algorithm, the `status` object being returned contains an error collection in `status.errors`.

| プロパティ   | タイプ        | 説明                                                          |                  |
| ------- | ---------- | ----------------------------------------------------------- | ---------------- |
| success | boolean    | 署名がメッセージと合致すれば true                                         |                  |
| errors  | collection | If `success` is `false`, may contain a collection of errors | <!-- END REF --> |

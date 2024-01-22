---
id: EmailObjectClass
title: Email
---

Creating, sending or receiving emails in 4D is done by handling an `Email` object.

`Email` objects are created when receiving mails through a _transporter_ class function:

- IMAP - [`.getMail()`](IMAPTransporterClass.md#getmail) and [`.getMails()`](IMAPTransporterClass.md#getmails) functions to get emails from an IMAP server
- POP3 - [`.getMail()`](POP3TransporterClass.md#getmail) function to get an email from a POP3 server.

> You can also create a new, blank `Email` object and then fill it with [Email object properties](#email-object).

You send `Email` objects using the SMTP [`.send()`](SMTPTransporterClass.md#send) function.

[`MAIL Convert from MIME`](#mail-convert-from-mime) and [`MAIL Convert to MIME`](#mail-convert-to-mime) commands can be used to convert `Email` objects to and from MIME contents.

### Email オブジェクト

Email オブジェクトは次のプロパティを提供します:

> 4D follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the Email object.

|                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #EmailObjectClass.attachments.Syntax -->](#attachments)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.attachments.Summary -->       |
| [<!-- INCLUDE #EmailObjectClass.bcc.Syntax -->](#bcc)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.bcc.Summary -->                               |
| [<!-- INCLUDE #EmailObjectClass.bodyStructure.Syntax -->](#bodystructure)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.bodyStructure.Summary --> |
| [<!-- INCLUDE #EmailObjectClass.bodyValues.Syntax -->](#bodyvalues)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.bodyValues.Summary -->          |
| [<!-- INCLUDE #EmailObjectClass.cc.Syntax -->](#cc)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.cc.Summary -->                                  |
| [<!-- INCLUDE #EmailObjectClass.comments.Syntax -->](#comments)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.comments.Summary -->                |
| [<!-- INCLUDE #EmailObjectClass.from.Syntax -->](#from)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.from.Summary -->                            |
| [<!-- INCLUDE #EmailObjectClass.headers.Syntax -->](#headers)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.headers.Summary -->                   |
| [<!-- INCLUDE #EmailObjectClass.htmlBody.Syntax -->](#htmlbody)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.htmlBody.Summary -->                |
| [<!-- INCLUDE #EmailObjectClass.id.Syntax -->](#id)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.id.Summary -->                                  |
| [<!-- INCLUDE #EmailObjectClass.inReplyTo.Syntax -->](#inreplyto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.inReplyTo.Summary -->             |
| [<!-- INCLUDE #EmailObjectClass.keywords.Syntax -->](#keywords)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.keywords.Summary -->                |
| [<!-- INCLUDE #EmailObjectClass.messageId.Syntax -->](#messageid)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.messageId.Summary -->             |
| [<!-- INCLUDE #EmailObjectClass.receivedAt.Syntax -->](#receivedat)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.receivedAt.Summary -->          |
| [<!-- INCLUDE #EmailObjectClass.references.Syntax -->](#references)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.references.Summary -->          |
| [<!-- INCLUDE #EmailObjectClass.replyTo.Syntax -->](#replyto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.replyTo.Summary -->                   |
| [<!-- INCLUDE #EmailObjectClass.sendAt.Syntax -->](#sendat)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.sendAt.Summary -->                      |
| [<!-- INCLUDE #EmailObjectClass.sender.Syntax -->](#sender)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.sender.Summary -->                      |
| [<!-- INCLUDE #EmailObjectClass.size.Syntax -->](#size)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.size.Summary -->                            |
| [<!-- INCLUDE #EmailObjectClass.subject.Syntax -->](#subject)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.subject.Summary -->                   |
| [<!-- INCLUDE #EmailObjectClass.textBody.Syntax -->](#textbody)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.textBody.Summary -->                |
| [<!-- INCLUDE #EmailObjectClass.to.Syntax -->](#to)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.to.Summary -->                                  |

### メールアドレス

All properties that contain email addresses ([`from`](#from), [`cc`](#cc), [`bcc`](#bcc), [`to`](#to), [`sender`](#sender), [`replyTo`](#replyto)) accept a value of text, object, or collection type.

#### Text

- 単一のメールアドレス: "somebody\@domain.com"
- single display name+email: "Somebody somebody\@domain.com"
- several emails: "Somebody somebody\@domain.com,me\@home.org"

#### Object

2つのプロパティを持つオブジェクト:

| プロパティ | タイプ  | 説明                                |
| ----- | ---- | --------------------------------- |
| name  | Text | 表示名 (null も可能) |
| email | Text | メールアドレス                           |

#### Collection

アドレスオブジェクトのコレクション

### メール本文の扱い

The [`textBody`](#textbody) and [`htmlBody`](#htmlbody) properties are only used with the [SMTP.send()](SMTPTransporterClass.md#send) function to allow sending simple mails. プロパティが両方ともある場合、MIME content-type の multipart/alternative が使用されます。 メールクライアントは multipart/alternative パートを認識し、必要に応じてテキスト部または html 部を表示します。

[`bodyStructure`](#bodystructure) and [`bodyValues`](#bodyvalues) are used for [SMTP](SMTPTransporterClass.md) when the [Email object](#email-object) is built from a MIME document, e.g. when generated by the `MAIL Convert from MIME` command. In this case, both `bodyStructure` and `bodyValues` properties must be passed together, and it is not recommended to use `textBody` and `htmlBody`.

#### bodyStructure および bodyValues オブジェクトの例

```json
"bodyStructure": {
  "type": "multipart/mixed",
  "subParts": [
    {
      "partId": "p0001",
      "type": "text/plain"
    },
    {
      "partId": "p0002",
      "type": "text/html"
    }
  ]
},
"bodyValues": {
  "p0001": {
    "value": "I have the most brilliant plan. Let me tell you all about it."
  },
  "p0002": {
    "value": "<!DOCTYPE html><html><head><title></title><style type=\"text/css\">div{font-size:16px}</style></head><body><div>I have the most brilliant plan. Let me tell you all about it.</div></body></html>"
  }
}
```

## .attachments

<!-- REF #EmailObjectClass.attachments.Syntax -->**.attachments** : Collection<!-- END REF -->

#### 説明

The `.attachments` property contains a <!-- REF #EmailObjectClass.attachments.Summary -->collection of `4D.MailAttachment` object(s)<!-- END REF -->.

Attachment objects are defined through the [`MAIL New attachment`](MailAttachmentClass.md#mail-new-attachment) command. Attachment objects have specific [properties and functions](MailAttachmentClass.md).

## .bcc

<!-- REF #EmailObjectClass.bcc.Syntax -->**.bcc** : Text<br/>**.bcc** : Object<br/>**.bcc** : Collection<!-- END REF -->

#### 説明

The `.bcc` property contains the <!-- REF #EmailObjectClass.bcc.Summary -->Blind Carbon Copy (BCC) hidden email recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.

## .bodyStructure

<!-- REF #EmailObjectClass.bodyStructure.Syntax -->**.bodyStructure** : Object<!-- END REF -->

#### 説明

The `.bodyStructure` property contains the <!-- REF #EmailObjectClass.bodyStructure.Summary -->_EmailBodyPart_ object, i.e. the full MIME structure of the message body (optional)<!-- END REF -->. See [Handling body part](#handling-body-part) section.

The `.bodyStructure` object contains the following properties:

| プロパティ       | タイプ                 | 値                                                                                                                                                                          |
| ----------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| partID      | Text                | メールのパートを固有に識別する ID                                                                                                                                                         |
| type        | Text                | (必須) パートの Content-Type ヘッダーフィールドの値                                                                                                                      |
| charset     | Text                | Content-Type ヘッダーフィールドの Charset の値                                                                                                                                         |
| encoding    | Text                | If `isEncodingProblem=true`, the Content-Transfer-Encoding value is added (by default undefined)                                                        |
| disposition | Text                | パートの Content-Disposition ヘッダーフィールドの値                                                                                                                                       |
| language    | Text の Collection   | List of language tags, as defined in [RFC3282](https://tools.ietf.org/html/rfc3282), in the Content-Language header field of the part, if present.                         |
| location    | Text                | URI, as defined in [RFC2557](https://tools.ietf.org/html/rfc2557), in the Content-Location header field of the part, if present.                                           |
| subParts    | Object の Collection | Body parts of each child (collection of _EmailBodyPart_ objects)                                                                                        |
| headers     | Object の Collection | List of all header fields in the part, in the order they appear in the message (collection of _EmailHeader_ objects, see [headers](#headers-) property) |

## .bodyValues

<!-- REF #EmailObjectClass.bodyValues.Syntax -->**.bodyValues** : Object<!-- END REF -->

#### 説明

The `.bodyValues` property contains the <!-- REF #EmailObjectClass.bodyValues.Summary -->_EmailBodyValue_ object, containing an object for each \<partID> of `bodyStructure` (optional)<!-- END REF -->. See [Handling body part](#handling-body-part) section.

The `.bodyValues` object contains the following properties:

| プロパティ                      | タイプ     | 値                                                                                                         |
| -------------------------- | ------- | --------------------------------------------------------------------------------------------------------- |
| _partID_.value             | text    | 本文パートの値                                                                                                   |
| _partID_.isEncodingProblem | boolean | 文字セットをデコーディング中に、不正なフォーマットのセクション、未知の文字セット、あるいは未知の content-transfer-encoding が見つかった場合には true。 デフォルトは false。 |

## .cc

<!-- REF #EmailObjectClass.cc.Syntax -->**.cc** : Text<br/>**.cc** : Object<br/>**.cc** : Collection<!-- END REF -->

#### 説明

The `.cc` property contains the <!-- REF #EmailObjectClass.cc.Summary -->Carbon Copy (CC) additional email recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.

## .comments

<!-- REF #EmailObjectClass.comments.Syntax -->**.comments** : Text<!-- END REF -->

#### 説明

The `.comments` property contains an <!-- REF #EmailObjectClass.comments.Summary -->additional comments header<!-- END REF -->.

コメントはメッセージのヘッダーセクション内にのみ表示されます (つまり本文部分には触れないということです)。

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .from

<!-- REF #EmailObjectClass.from.Syntax -->**.from** : Text<br/>**.from** : Object<br/>**.from** : Collection<!-- END REF -->

#### 説明

The `.from` property contains the <!-- REF #EmailObjectClass.from.Summary -->Originating [address(es)](#email-addresses) of the email<!-- END REF -->.

Each email you send out has both the [sender](#sender) and **from** addresses:

- sender ドメインは、受信側のメールサーバーがセッションを開いたときに受け取るドメインです。
- from アドレスは、受信者から見えるアドレスです。

混乱を避けるため、sender および from アドレスには同じアドレスを使用することが推奨されます。

## .headers

<!-- REF #EmailObjectClass.headers.Syntax -->**.headers** : Collection<!-- END REF -->

#### 説明

The `.headers` property contains a <!-- REF #EmailObjectClass.headers.Summary -->collection of `EmailHeader` objects, in the order they appear in the message<!-- END REF -->. これによってユーザーは拡張された (登録された) ヘッダーや、ユーザー定義された (登録されていない、"X" で始まる) ヘッダーを追加することができます。

> If an `EmailHeader` object property defines a header such as "from" or "cc" which is already set as a property at the mail level, the `EmailHeader` property is ignored.

ヘッダーコレクションの各オブジェクトには、次のプロパティが格納されることがあります:

| プロパティ                                                        | タイプ  | 値                                                                                                                                                              |
| ------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [].name  | text | (mandatory) Header field name as defined in [RFC#5322](https://tools.ietf.org/html/rfc5322). null または未定義の場合には、ヘッダーフィールドは MIME ヘッダーに追加されません。 |
| [].value | text | Header field values as defined in [RFC#5322](https://tools.ietf.org/html/rfc5322)                                                                              |

## .htmlBody

<!-- REF #EmailObjectClass.htmlBody.Syntax -->**.htmlBody** : Text<!-- END REF -->

#### 説明

The `.htmlBody` property contains the <!-- REF #EmailObjectClass.htmlBody.Summary -->HTML representation of the email message (default charset is UTF-8) (optional, SMTP only)<!-- END REF -->. See [Handling body part](#handling-body-part) section.

## .id

<!-- REF #EmailObjectClass.id.Syntax -->**.id** : Text<!-- END REF -->

#### 説明

[IMAP transporter](IMAPTransporterClass.md) only.

The `.id` property contains the <!-- REF #EmailObjectClass.id.Summary -->unique ID from the IMAP server<!-- END REF -->.

## .inReplyTo

<!-- REF #EmailObjectClass.inReplyTo.Syntax -->**.inReplyTo** : Text<!-- END REF -->

#### 説明

The `.inReplyTo` property contains the <!-- REF #EmailObjectClass.inReplyTo.Summary -->message identifier(s) of the original message(s) to which the current message is a reply<!-- END REF -->.

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .keywords

<!-- REF #EmailObjectClass.keywords.Syntax -->**.keywords** : Object<!-- END REF -->

#### 説明

The `.keywords` property contains a <!-- REF #EmailObjectClass.keywords.Summary -->set of keywords as an object, where each property name is a keyword and each value is true<!-- END REF -->.

This property is the "keywords" header (see [RFC#4021](https://tools.ietf.org/html/rfc4021)).

| プロパティ       | タイプ     | 値                                                  |
| ----------- | ------- | -------------------------------------------------- |
| .\<keyword> | boolean | 設定するキーワード (値は true でなければなりません)。 |

予約されたキーワード:

- $draft - メッセージが下書きであることを表します
- $seen - メッセージが読まれたことを表します
- $flagged - メッセージが注視されるべきであることを表します (例: 至急のメール)
- $answered - メッセージに返信がされたことを表します
- $deleted - メッセージが消去されることを表します

#### 例題

```
 $mail.keywords["$flagged"]:=True
 $mail.keywords["4d"]:=True
```

## .messageId

<!-- REF #EmailObjectClass.messageId.Syntax -->**.messageId** : Text<!-- END REF -->

#### 説明

The `.messageId` property contains a <!-- REF #EmailObjectClass.messageId.Summary -->message identifier header ("message-id")<!-- END REF -->.

通常は、"lettersOrNumbers\@domainname" の形式、たとえば "abcdef.123456\@4d.com" などです。 この固有ID は特にフォーラムや公開メーリングリストで使用されています。 一般的に、メールサーバーは送信するメッセージにこのヘッダーを自動的に追加します。

## .receivedAt

<!-- REF #EmailObjectClass.receivedAt.Syntax -->**.receivedAt** : Text<!-- END REF -->

#### 説明

[IMAP transporter](IMAPTransporterClass.md) only.

The `.receivedAt` property contains the <!-- REF #EmailObjectClass.receivedAt.Summary -->timestamp of the email's arrival on the IMAP server in ISO 8601 UTC format (ex: 2020-09-13T16:11:53Z)<!-- END REF -->.

## .references

<!-- REF #EmailObjectClass.references.Syntax -->**.references** : Collection<!-- END REF -->

#### 説明

The `.references` property contains the <!-- REF #EmailObjectClass.references.Summary -->Collection of all message-ids of messages in the preceding reply chain<!-- END REF -->.

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .replyTo

<!-- REF #EmailObjectClass.replyTo.Syntax -->**.replyTo** : Text<br/>**.replyTo** : Object<br/>**.replyTo** : Collection<!-- END REF -->

#### 説明

The `.replyTo` property contains the <!-- REF #EmailObjectClass.replyTo.Summary -->[addresse(s)](#email-addresses) for responses<!-- END REF -->.

## .sendAt

<!-- REF #EmailObjectClass.sendAt.Syntax -->**.sendAt** : Text<!-- END REF -->

#### 説明

The `.sendAt` property contains the <!-- REF #EmailObjectClass.sendAt.Summary -->Email timestamp in ISO 8601 UTC format<!-- END REF -->.

## .sender

<!-- REF #EmailObjectClass.sender.Syntax -->**.sender** : Text<br/>**.sender** : Object<br/>**.sender** : Collection<!-- END REF -->

#### 説明

The `.sender` property contains the <!-- REF #EmailObjectClass.sender.Summary -->email source [addresse(s)](#email-addresses) of the email<!-- END REF -->.

Each email you send out has both the **sender** and **[from](#from)** addresses:

- sender ドメインは、受信側のメールサーバーがセッションを開いたときに受け取るドメインです。
- from アドレスは、受信者から見えるアドレスです。

混乱を避けるため、sender および from アドレスには同じアドレスを使用することが推奨されます。

## .size

<!-- REF #EmailObjectClass.size.Syntax -->**.size** : Integer<!-- END REF -->

#### 説明

[IMAP transporter](IMAPTransporterClass.md) only.

The `.size` property contains the <!-- REF #EmailObjectClass.size.Summary -->size (expressed in bytes) of the Email object returned by the IMAP server<!-- END REF -->.

## .subject

<!-- REF #EmailObjectClass.subject.Syntax -->**.subject** : Text<!-- END REF -->

#### 説明

The `.subject` property contains the <!-- REF #EmailObjectClass.subject.Summary -->description of topic<!-- END REF -->.

## .textBody

<!-- REF #EmailObjectClass.textBody.Syntax -->**.textBody** : Text<!-- END REF -->

#### 説明

The `.textBody` property contains the <!-- REF #EmailObjectClass.textBody.Summary -->Plain text representation of the email message (default charset is UTF-8) (optional, SMTP only)<!-- END REF -->. See [Handling body part](#handling-body-part) section.

## .to

<!-- REF #EmailObjectClass.to.Syntax -->**.to** : Text<br/>**.to** : Object<br/>**.to** : Collection<!-- END REF -->

#### 説明

The `.to` property contains the <!-- REF #EmailObjectClass.to.Summary -->primary recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.

## MAIL Convert from MIME

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v18   | 追加 |

</details>

<!-- REF #_command_.MAIL Convert from MIME.Syntax -->**MAIL Convert from MIME**( *mime* : Blob ) : Object<br/>**MAIL Convert from MIME**( *mime* : Text ) : Object<!-- END REF -->

<!-- REF #_command_.MAIL Convert from MIME.Params -->

| 引数   | タイプ        |     | 説明           |                  |
| ---- | ---------- | :-: | ------------ | ---------------- |
| mime | Blob, Text |  -> | MIME形式のメール   |                  |
| 戻り値  | Object     |  <- | Email オブジェクト | <!-- END REF --> |

#### 説明

The `MAIL Convert from MIME` command <!-- REF #_command_.MAIL Convert from MIME.Summary -->converts a MIME document into a valid email object<!-- END REF -->.

> 4D follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the returned email object.

Pass in _mime_ a valid MIME document to convert. これはどのメールサーバーまたはアプリケーションから提供されたものでも可能です。 You can pass a BLOB or a text _mime_ parameter. MIME がファイルから渡された場合、文字セットと改行コード変換に関する問題を避けるため、BLOB型の引数を使用することが推奨されます。

#### 返されるオブジェクト

Email オブジェクト。

#### 例題 1

テキストドキュメントとして保存された MIME のメールのテンプレートを読み込み、メールを送信します。

```4d
var $mime: Blob
var $mail;$server;$transporter;$status: Object

$mime:=File("/PACKAGE/Mails/templateMail.txt").getContent())

$mail:=MAIL Convert from MIME($mime)
$mail.to:="smith@mail.com"
$mail.subject:="Hello world"

$server:=New object
$server.host:="smtp.gmail.com"
$server.port:=465
$server.user:="test@gmail.com"
$server.password:="XXXX"

$transporter:=SMTP New transporter($server)
$status:=$transporter.send($mail)
```

#### 例題 2

この例題では、ピクチャーが含まれた 4D Write Pro ドキュメントを直接送信します:

```4d
var $mime: Blob
var $email;$server;$transporter;$status: Object

// 4D Write Pro ドキュメントを MIME に書き出します
WP EXPORT VARIABLE(WParea;$mime;wk mime html)

// 4D Write Pro MIME 変数をメールオブジェクトに変換します
$email:=MAIL Convert from MIME($mime)

// Email オブジェクトのヘッダーを設定します
$email.subject:="4D Write Pro HTML body"
$email.from:="YourEmail@gmail.com"
$email.to:="RecipientEmail@mail.com"

$server:=New object
$server.host:="smtp.gmail.com"
$server.port:=465
$server.user:="YourEmail@gmail.com"
$server.password:="XXXX"

$transporter:=SMTP New transporter($server)
$status:=$transporter.send($email)
```

## MAIL Convert to MIME

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |
| v17 R5 | 変更 |

</details>

<!-- REF #_command_.MAIL Convert to MIME.Syntax -->**MAIL Convert to MIME**( *mail* : Object { ; *options* : Object } ) : Text<!-- END REF -->

<!-- REF #_command_.MAIL Convert to MIME.Params -->

| 引数      | タイプ    |     | 説明                             |                  |
| ------- | ------ | :-: | ------------------------------ | ---------------- |
| mail    | Object |  -> | Email オブジェクト                   |                  |
| options | Object |  -> | 文字セットとエンコーディングのメールオプション        |                  |
| 戻り値     | Text   |  <- | Email object converted to MIME | <!-- END REF --> |

#### 説明

The `MAIL Convert to MIME` command <!-- REF #_command_.MAIL Convert to MIME.Summary -->converts an email object into MIME text<!-- END REF -->. This command is called internally by [SMTP_transporter.send( )](API/SMTPTransporterClass.md#send) to format the email object before sending it. また、オブジェクトの MIME フォーマットを解析するためにも使用されます。

In _mail_, pass the content and the structure details of the email to convert. この情報には、メールアドレス (送信者と受信者)、メッセージそのもの、メッセージの表示タイプなどが含まれます。

> 4D follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the email object.

In _options_, you can set a specific charset and encoding configuration for the mail. 次のプロパティを利用することができます:

| プロパティ         | タイプ  | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| headerCharset | Text | メールの以下の部分で使用される文字セットとエンコーディング: 件名、添付ファイル名、メール名の属性。 Possible values:<table><tr><th>Constant</th><th>Value</th><th>Comment</th></tr><tr><td>mail mode ISO2022JP</td><td>US-ASCII_ISO-2022-JP_UTF8_QP</td><td><ul><li><i>headerCharset</i>: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li><i>bodyCharset</i>: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul></td></tr><tr><td>mail mode ISO88591</td><td>ISO-8859-1</td><td><ul><li><i>headerCharset</i>: ISO-8859-1 & Quoted-printable</li><li><i>bodyCharset</i>: ISO-8859-1 & 8-bit</li></ul></td></tr><tr><td>mail mode UTF8</td><td>US-ASCII_UTF8_QP</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (**default value**)</td></tr><tr><td>mail mode UTF8 in base64</td><td>US-ASCII_UTF8_B64</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII if possible, otherwise UTF-8 & base64</td></tr></table> |
| bodyCharset   | Text | メールの HTML およびテキスト本文コンテンツで使用される文字セットとエンコーディング。 取りうる値: headerCharset と同じ(上記参照)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

If the _options_ parameter is omitted, the mail mode UTF8 configuration is used for header and body parts.

#### 例題

```4d
var $mail: Object
var $mime: Text
$mail:=New object

// Creation of a mail
$mail.from:="tsales@massmarket.com"
$mail.subject:="Terrific Sale! This week only!"
$mail.textBody:="Text format email"
$mail.htmlBody:="<html><body>HTML format email</body></html>"
$mail.to:=New collection
$mail.to.push(New object ("email";"noreply@4d.com"))
$mail.to.push(New object ("email";"test@4d.com"))

// transform the mail object in MIME
$mime:=MAIL Convert to MIME($mail)

// Contents of $mime:
// MIME-Version: 1.0
// Date: Thu, 11 Oct 2018 15:42:25 GMT
// Message-ID: <7CA5D25B2B5E0047A36F2E8CB30362E2>
// Sender: tsales@massmarket.com
// From: tsales@massmarket.com
// To: noreply@4d.com
// To: test@4d.com
// Content-Type: multipart/alternative; boundary="E0AE5773D5E95245BBBD80DD0687E218"
// Subject: Terrific Sale! This week only!
//
// --E0AE5773D5E95245BBBD80DD0687E218
// Content-Type: text/plain; charset="UTF-8"
// Content-Transfer-Encoding: quoted-printable
//
// Text format email
// --E0AE5773D5E95245BBBD80DD0687E218
// Content-Type: text/html; charset="UTF-8"
// Content-Transfer-Encoding: quoted-printable
//
// <html><body>HTML format email</body></html>
// --E0AE5773D5E95245BBBD80DD0687E218--
```

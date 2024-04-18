---
id: MailAttachmentClass
title: MailAttachment
---

Attachment objects allow referencing files within a [`Email`](EmailObjectClass.md) object. Attachment objects are created using the [`MAIL New attachment`](#mail-new-attachment) command.

### Attachment オブジェクト

Attachment オブジェクトは、次の読み取り専用プロパティや、関数を提供します:

|                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #MailAttachmentClass.cid.Syntax -->](#cid)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #MailAttachmentClass.cid.Summary -->                            |
| [<!-- INCLUDE #MailAttachmentClass.disposition.Syntax -->](#disposition)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #MailAttachmentClass.disposition.Summary -->    |
| [<!-- INCLUDE #MailAttachmentClass.getContent().Syntax -->](#getcontent)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #MailAttachmentClass.getContent().Summary -->   |
| [<!-- INCLUDE #MailAttachmentClass.name.Syntax -->](#name)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #MailAttachmentClass.name.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.path.Syntax -->](#path)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #MailAttachmentClass.path.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.platformPath.Syntax -->](#platformpath)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #MailAttachmentClass.platformPath.Summary --> |
| [<!-- INCLUDE #MailAttachmentClass.size.Syntax -->](#size)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #MailAttachmentClass.size.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.type.Syntax -->](#type)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #MailAttachmentClass.type.Summary -->                         |

## MAIL New attachment

<details><summary>履歴</summary>

| リリース  | 内容                                                                                 |
| ----- | ---------------------------------------------------------------------------------- |
| 19 R2 | 4D.File, 4D.ZipFile, 4D.Blob の受け入れ |

</details>

<!-- REF #_command_.MAIL New attachment.Syntax -->**MAIL New attachment**( *file* : 4D.File { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *zipFile* : 4D.ZipFile { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *blob* : 4D.Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!-- REF #_command_.MAIL New attachment.Params -->

| 引数          | タイプ                               |     | 説明                                                                                     |
| ----------- | --------------------------------- | :-: | -------------------------------------------------------------------------------------- |
| file        | 4D.File           |  -> | 添付ファイル                                                                                 |
| zipFile     | 4D.ZipFile        |  -> | 添付 Zipファイル                                                                             |
| blob        | 4D.Blob           |  -> | 添付を格納した BLOB                                                                           |
| path        | Text                              |  -> | 添付ファイルのパス                                                                              |
| name        | Text                              |  -> | メールクライアントが添付を指定するのに使用する名前 + 拡張子                                                        |
| cid         | Text                              |  -> | 添付の ID (HTMLメッセージのみ)、あるいは cid が不要な場合は "" (空の文字列) |
| type        | Text                              |  -> | content-type ヘッダーの値                                                                    |
| disposition | Text                              |  -> | content-disposition ヘッダーの値: "inline" あるいは "attachment"                 |
| 戻り値         | 4D.MailAttachment |  <- | Attachment オブジェクト                                                                      |

<!-- END REF -->

#### 説明

The `MAIL New attachment` command <!-- REF #_command_.MAIL New attachment.Summary -->allows you to create an attachment object that you can add to an [Email object](EmailObjectClass.md#email-object)<!-- END REF -->.

添付を定義するには、次のパラメーターが使えます:

- a _file_, pass a `4D.File` object containing the attachment file.
- a _zipfile_, pass a `4D.ZipFile` object containing the attachment file.
- a _blob_, pass a `4D.Blob` object containing the attachment itself.
- a _path_, pass a **text** value containing the path of the attachment file, expressed with the system syntax. 完全なパス名、または単純なファイル名を渡すことができます (ファイル名のみの場合、4D はプロジェクトファイルと同じディレクトリ内を検索します)。

The optional _name_ parameter lets you pass the name and extension to be used by the mail client to designate the attachment. If _name_ is omitted and:

- ファイルパスを渡していれば、そのファイル名と拡張子が使用されます。
- BLOB を渡していれば、拡張子がないランダムな名前が自動的に生成されます。

The optional _cid_ parameter lets you pass an internal ID for the attachment. This ID is the value of the `Content-Id` header, it will be used in HTML messages only. The cid associates the attachment with a reference defined in the message body using an HTML tag such as `\<img src="cid:ID">`. これはつまり、添付ファイルの中身 (例: ピクチャー) がメールクライアント上ではメッセージ本文内に表示されるべきであることを意味しています。 最終的な表示は、メールクライアントによって若干異なる可能性があります。 You can pass an empty string in _cid_ if you do not want to use this parameter.

You can use the optional _type_ parameter to explicitly set the `content-type` of the attachment file. たとえば、MIMEタイプを定義する文字列 ("video/mpeg"など) を渡すことができます。 この content-type の値は拡張子とは関係なく添付ファイルに対して設定されます。 For more information about MIME types, please refer to the [MIME type page on Wikipedia](https://en.wikipedia.org/wiki/MIME).

By default, if the _type_ parameter is omitted or contains an empty string, the `content-type` of the attachment file is based on its extension. 主な MIMEタイプについては、以下のルールが適用されます:

| 拡張子       | Content-Type                                  |
| --------- | --------------------------------------------- |
| jpg, jpeg | image/jpeg                                    |
| png       | image/png                                     |
| gif       | image/gif                                     |
| pdf       | application/pdf                               |
| doc       | application/msword                            |
| xls       | application/vnd.ms-excel      |
| ppt       | application/vnd.ms-powerpoint |
| zip       | application/zip                               |
| gz        | application/gzip                              |
| json      | application/json                              |
| js        | application/javascript                        |
| ps        | application/postscript                        |
| xml       | application/xml                               |
| htm, html | text/html                                     |
| mp3       | audio/mpeg                                    |
| _other_   | application/octet-stream                      |

The optional _disposition_ parameter lets you pass the `content-disposition` header of the attachment. "Mail" 定数テーマ内の、以下の定数のいずれか 1つを渡すことができます:

| 定数                          | 値            | 説明                                                                                                                              |
| --------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| mail disposition attachment | "attachment" | Content-disposition ヘッダーの値を "attachment" に設定します。これは添付ファイルはメッセージ内でリンクとして提供される必要があることを意味します。                                      |
| mail disposition inline     | "inline"     | Content-disposition ヘッダーの値を "inline" に設定します。これは添付ファイルはメッセージ本文内の、"cid" の位置にレンダリングされる必要があることを意味します。 レンダリングの結果はメールクライアントによって異なります。 |

By default, if the _disposition_ parameter is omitted:

- if the _cid_ parameter is used, the `Content-disposition` header is set to "inline",
- if the _cid_ parameter is not passed or empty, the `Content-disposition` header is set to "attachment".

#### 例題 1

ユーザーが選択したファイルを添付し、HTML 本文に画像を埋め込んだメールを送信します:

```4d
$doc:=Select document("";"*";"Please select a file to attach";0)
If (OK=1) //If a document was selected

C_OBJECT($email;$server;$transporter)

$server:=New object
$server.host:="smtp.mail.com"
$server.user:="test_user@mail.com"
$server.password:="p@ssw@rd"
$transporter:=SMTP New transporter($server)

$email:=New object
$email.from:="test_user@mail.com"
$email.to:="test_user@mail.com"
$email.subject:="This is a test message with attachments"

//add a link to download file
$email.attachments:=New collection(MAIL New attachment(Document))
//insert an inline picture (use a cid)
$email.attachments[1]:=MAIL New attachment("c:\\Pictures\\4D.jpg";"";"4D")

$email.htmlBody:="<html>"+\
"<body>Hello World!"+\
"<img src='cid:4D' >"+\
"</body>"+\
"</head>"+\
"</html>"

$transporter.send($email) //send mail

End if
```

#### 例題 2

4D Write Pro エリアを添付したメールを送信します:

```4d
C_BLOB($blob)
WP EXPORT VARIABLE(WPArea;$blob;wk docx)

C_OBJECT($email;$server;$transporter)

$server:=New object
$server.host:="smtp.mail.com"
$server.user:="user@mail.com"
$server.password:="p@ssw@rd"
$transporter:=SMTP New transporter($server)

$email:=New object
$email.from:="user@mail.com"
$email.to:="customer@mail.com"
$email.subject:="New annual report"
$email.textBody:="Please find enclosed our latest annual report."
$email.attachments:=New collection(MAIL New attachment($blob;"Annual report.docx"))

$transporter.send($email)
```

## 4D.MailAttachment.new()

<details><summary>履歴</summary>

| リリース  | 内容                                                                                 |
| ----- | ---------------------------------------------------------------------------------- |
| 19 R2 | 4D.File, 4D.ZipFile, 4D.Blob の受け入れ |

</details>

<!-- REF #4D.MailAttachment.new().Syntax -->**4D.MailAttachment.new**( *file* : 4D.File { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *zipFile* : 4D.ZipFile { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *blob* : 4D.Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!-- REF #4D.MailAttachment.new().Params -->

| 引数          | タイプ                               |     | 説明                                                                                     |
| ----------- | --------------------------------- | :-: | -------------------------------------------------------------------------------------- |
| file        | 4D.File           |  -> | 添付ファイル                                                                                 |
| zipFile     | 4D.ZipFile        |  -> | 添付 Zipファイル                                                                             |
| blob        | 4D.Blob           |  -> | 添付を格納した BLOB                                                                           |
| path        | Text                              |  -> | 添付ファイルのパス                                                                              |
| name        | Text                              |  -> | メールクライアントが添付を指定するのに使用する名前 + 拡張子                                                        |
| cid         | Text                              |  -> | 添付の ID (HTMLメッセージのみ)、あるいは cid が不要な場合は "" (空の文字列) |
| type        | Text                              |  -> | content-type ヘッダーの値                                                                    |
| disposition | Text                              |  -> | content-disposition ヘッダーの値: "inline" あるいは "attachment"                 |
| 戻り値         | 4D.MailAttachment |  <- | Attachment オブジェクト                                                                      |

<!-- END REF -->

#### 説明

The `4D.MailAttachment.new()` function <!-- REF #4D.MailAttachment.new().Summary -->creates and returns a new object of the `4D.MailAttachment` type<!-- END REF -->. It is identical to the [`MAIL New attachment`](#mail-new-attachment) command (shortcut).

## .cid

<!-- REF #MailAttachmentClass.cid.Syntax -->**.cid** : Text<!-- END REF -->

#### 説明

The `.cid` property contains <!-- REF #MailAttachmentClass.cid.Summary --> the ID of the attachment<!-- END REF -->. このプロパティは HTMLメッセージでのみ使用されます。 このプロパティがない場合、ファイルは単なる添付 (リンク) として管理されます。

## .disposition

<!-- REF #MailAttachmentClass.disposition.Syntax -->**.disposition** : Text<!-- END REF -->

#### 説明

The `.disposition` property contains <!-- REF #MailAttachmentClass.disposition.Summary -->the value of the `Content-Disposition` header<!-- END REF -->. 二つの値が利用可能です:

- "inline": 添付ファイルはメッセージコンテンツ内に、"cid"の場所にレンダリングされます。 レンダリングの結果はメールクライアントによって異なります。
- "attachment": 添付ファイルはメッセージ内でリンクとして提供されます。

## .getContent()

<!-- REF #MailAttachmentClass.getContent().Syntax -->**.getContent()** : 4D.Blob<!-- END REF -->

<!-- REF #MailAttachmentClass.getContent().Params -->

| 引数  | タイプ                     |     | 説明    |
| --- | ----------------------- | :-: | ----- |
| 戻り値 | 4D.Blob |  <- | 添付の中身 |

<!-- END REF -->

#### 説明

The `.getContent()` function <!-- REF #MailAttachmentClass.getContent().Summary -->returns the contents of the attachment object in a `4D.Blob` object<!-- END REF -->. You can use this method with attachment objects received by the [`MAIL Convert from MIME`](EmailObjectClass.md#mail-convert-from-mime) command.

## .name

<!-- REF #MailAttachmentClass.name.Syntax -->**.name** : Text<!-- END REF -->

#### 説明

The `.name` property contains <!-- REF #MailAttachmentClass.name.Summary -->the name and extension of the attachment<!-- END REF -->.  By default, it is the name of the file, unless another name was specified in the [`MAIL New attachment`](#mail-new-attachment) command.

## .path

<!-- REF #MailAttachmentClass.path.Syntax -->**.path** : Text<!-- END REF -->

#### 説明

The `.path` property contains <!-- REF #MailAttachmentClass.path.Summary -->the POSIX path of the attachment file, if it exists<!-- END REF -->.

## .platformPath

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 19   | 追加 |

</details>

<!-- REF #MailAttachmentClass.platformPath.Syntax -->**.platformPath** : Text<!-- END REF -->

#### 説明

The `.platformPath` property returns <!-- REF #MailAttachmentClass.platformPath.Summary -->the path of the attachment file expressed with the current platform syntax<!-- END REF -->.

## .size

<!-- REF #MailAttachmentClass.size.Syntax -->**.size** : Integer<!-- END REF -->

#### 説明

The `.size` property contains <!-- REF #MailAttachmentClass.size.Summary -->the value of the `size` header of the attachment file<!-- END REF -->. The `.size` property is returned when the MIME message defines a size header in the attachment part.

## .type

<!-- REF #MailAttachmentClass.type.Syntax -->**.type** : Text<!-- END REF -->

#### 説明

The `.type` property contains <!-- REF #MailAttachmentClass.type.Summary -->the `content-type` of the attachment file<!-- END REF -->. If this type is not explicitly passed to the [`MAIL New attachment`](#mail-new-attachment) command, the `content-type` is based on its file extension.

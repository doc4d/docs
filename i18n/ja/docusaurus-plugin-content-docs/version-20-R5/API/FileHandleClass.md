---
id: FileHandleClass
title: FileHandle
---

The `FileHandle` class has functions that allow you to sequentially read from or append contents to an opened [`File`](FileClass) object. FileHandle は、ドキュメントのどの部分にもアクセスすることができます。

File handle objects are created with the [`file.open()`](FileClass#open) function.

> To read or write a whole document at once, you might consider using the [file.getText()](FileClass.md#gettext) and [file.setText()](FileClass.md#settext) functions.

Thanks to the standard 4D object _refcounting_, a file handle is automatically deleted when it is no longer referenced and thus, the requested [`File`](FileClass) object is automatically closed. つまり、FileHandle を使えば、ドキュメントを閉じる必要がなくなります。

:::note

ドキュメントなどのオブジェクトリソースは、メモリ上で参照がなくなると解放されます。これはたとえば、メソッド実行終了時のローカル変数などで起こります。 If you want to "force" the release of object resources at any moment, you can [nullify its references](../Concepts/dt_object.md#resources).

:::

### 例題

```code4d
var $f : 4D.File
var $fhandle : 4D.FileHandle
$f:=Folder(Database folder).file("example.txt")

//Writing line by line from the start
$fhandle:=$f.open("write")
$text:="Hello World"
For ($line; 1; 4)
    $fhandle.writeLine($text+String($line))
End for

//Writing line by line from the end
$fhandle:=$f.open("append")
$text:="Hello New World!"
For ($line; 1; 4)
    $fhandle.writeLine($text+String($line))
End for

//Reading using a stop character and an object parameter
$o:=New object()
$o.mode:="read"
$o.charset:="UTF-8"
$o.breakModeRead:=Document with CRLF
$stopChar:="!"
$fhandle:=$f.open($o)
$text:=$fhandle.readText($stopChar)

//Reading line by line
$lines:=New collection
$fhandle:=$f.open("read")
While (Not($fhandle.eof))
	$lines.push($fhandle.readLine())
End while

```

### FileHandle オブジェクト

FileHandle オブジェクトは共有できません。

|                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #FileHandleClass.breakModeRead.Syntax -->](#breakmoderead)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.breakModeRead.Summary -->    |
| [<!-- INCLUDE #FileHandleClass.breakModeWrite.Syntax -->](#breakmodewrite)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.breakModeWrite.Summary --> |
| [<!-- INCLUDE #FileHandleClass.charset.Syntax -->](#charset)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.charset.Summary -->                      |
| [<!-- INCLUDE #FileHandleClass.eof.Syntax -->](#eof)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.eof.Summary -->                                  |
| [<!-- INCLUDE #FileHandleClass.file.Syntax -->](#file)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.file.Summary -->                               |
| [<!-- INCLUDE #FileHandleClass.getSize().Syntax -->](#getsize)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.getSize().Summary -->                  |
| [<!-- INCLUDE #FileHandleClass.mode.Syntax -->](#mode)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.mode.Summary -->                               |
| [<!-- INCLUDE #FileHandleClass.offset.Syntax -->](#offset)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.offset.Summary -->                         |
| [<!-- INCLUDE #FileHandleClass.readBlob().Syntax -->](#readblob)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.readBlob().Summary -->               |
| [<!-- INCLUDE #FileHandleClass.readLine().Syntax -->](#readline)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.readLine().Summary -->               |
| [<!-- INCLUDE #FileHandleClass.readText().Syntax -->](#readtext)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.readText().Summary -->               |
| [<!-- INCLUDE #FileHandleClass.setSize().Syntax -->](#setsize)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.setSize().Summary -->                  |
| [<!-- INCLUDE #FileHandleClass.writeBlob().Syntax -->](#writeblob)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.writeBlob().Summary -->            |
| [<!-- INCLUDE #FileHandleClass.writeLine().Syntax -->](#writeline)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.writeLine().Summary -->            |
| [<!-- INCLUDE #FileHandleClass.writeText().Syntax -->](#writetext)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.writeText().Summary -->            |

<!-- REF FileHandleClass.breakModeRead.Desc -->

## .breakModeRead

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!-- REF #FileHandleClass.breakModeRead.Syntax -->**.breakModeRead** : Text<!-- END REF -->

#### 説明

The `.breakModeRead` property returns <!-- REF #FileHandleClass.breakModeRead.Summary -->the processing mode for line breaks used when reading the file<!-- END REF -->.

The `.breakModeRead` property can be defined at the handle creation with the [`file.open()`](FileClass.md#open) function (see [the `.open()` function](FileClass.md#open) for more information). デフォルトは "native" です。

> The `.breakModeRead` property always contains a text value, even if the `.open()` option was set using a number (constant).

This property is **read-only**.

<!-- END REF -->

<!-- REF FileHandleClass.breakModeWrite.Desc -->

## .breakModeWrite

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!-- REF #FileHandleClass.breakModeWrite.Syntax -->**.breakModeWrite** : Text<!-- END REF -->

#### 説明

The `.breakModeWrite` property returns <!-- REF #FileHandleClass.breakModeWrite.Summary -->the processing mode for line breaks used when writing to the file<!-- END REF -->.

The `.breakModeWrite` property can be defined at the handle creation with the [`file.open()`](FileClass.md#open) function (see [the `.open()` function](FileClass.md#open) for more information). デフォルトは "native" です。

> The `.breakModeWrite` property always contains a text value, even if the `.open()` option was set using a number (constant).

This property is **read-only**.

<!-- END REF -->

<!-- REF FileHandleClass.charset.Desc -->

## .charset

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!-- REF #FileHandleClass.charset.Syntax -->**.charset** : Text<!-- END REF -->

#### 説明

The `.charset` property returns <!-- REF #FileHandleClass.charset.Summary -->the charset used when reading from or writing to the file<!-- END REF -->.

The charset can be defined at the handle creation with the [`file.open()`](FileClass#open) function. デフォルト値: "UTF-8"

This property is **read-only**.

<!-- END REF -->

<!-- REF FileHandleClass.eof.Desc -->

## .eof

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!-- REF #FileHandleClass.eof.Syntax -->**.eof** : Boolean<!-- END REF -->

#### 説明

The `.eof` property returns <!-- REF #FileHandleClass.eof.Summary -->True is the `offset` has reached the end of the file, and False otherwise<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF FileHandleClass.file.Desc -->

## .file

<!-- REF #FileHandleClass.file.Syntax -->**.file** : 4D.File<!-- END REF -->

#### 説明

The `.file` property returns <!-- REF #FileHandleClass.file.Summary -->the [4D.File](FileClass.md) object on which the handle has been created<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF FileHandleClass.getSize().Desc -->

## .getSize()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!--REF #FileHandleClass.getSize().Syntax -->**.getSize()** : Real <!-- END REF -->

<!--REF #FileHandleClass.getSize().Params -->

| 引数  | タイプ  |    | 説明                                    |
| --- | ---- | -- | ------------------------------------- |
| 戻り値 | Real | <- | ドキュメントのサイズ (バイト単位) |

<!-- END REF -->

#### 説明

The `.getSize()` function <!-- REF #FileHandleClass.getSize().Summary -->returns the current size of the document, expressed in bytes<!-- END REF -->.

> This function returns the same value as the ([.size](FileClass#size)) property of the `File` class.

#### 参照

[.setSize()](#setsize), [file.size](FileClass#size)

<!-- END REF -->

<!-- REF FileHandleClass.mode.Desc -->

## .mode

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!-- REF #FileHandleClass.mode.Syntax -->**.mode** : Text<!-- END REF -->

#### 説明

The `.mode` property returns <!-- REF #FileHandleClass.mode.Summary -->the mode in which the file handle was created: "read", "write", or "append"<!-- END REF -->.

The mode can be defined at the handle creation with the [`file.open()`](FileClass#open) function. デフォルトは "read" です。

This property is **read-only**.

<!-- END REF -->

<!-- REF FileHandleClass.offset.Desc -->

## .offset

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!-- REF #FileHandleClass.offset.Syntax -->**.offset** : Real<!-- END REF -->

#### 説明

The `.offset` property returns <!-- REF #FileHandleClass.offset.Summary -->the current offset of the data stream (position inside the document)<!-- END REF -->. オフセット値は、読み取りおよび書き込み操作の後に自動的に更新されます。

Setting the `.offset` will change its current value at the moment of the next read or write operation.

- If the passed value is negative, the `.offset` is set to the start of the file (zero).
- If the passed value is higher than the size of the file,  the `.offset` is set to the end of the file (size of file).

This property is **read/write**.

:::caution

When a file handle is created, the `.offset` value is a number of bytes. However, the unit of offset measurement differs according to the reading function: with [`readBlob()`](#readblob), `.offset` is a number of bytes, whereas with [`readText()`](#readtext)/[`readLine()`](#readline) it is a number of characters. ファイルの文字セットに応じて、1文字は 1バイトまたは複数バイトに対応します。 So, if you start reading with `readBlob()` and then call `readText()`, text reading will start at an inconsistent position. It is therefore essential to set the `.offset` property yourself if you switch from reading/writing blob to reading/writing text in the same filehandle. 例:

```4d
  // Open a european text file using utf-16 encoding (two bytes per character)
  // We want to read the first 10 characters as bytes, then the remaining as text.
$fh:=File("/RESOURCES/sample_utf_16.txt").open()
  // read the 20 first bytes (i.e. 10 characters)
$b:=$fh.readBlob(20) // $fh.offset=20
  // then read all text skipping the first 10 characters we just read in previous blob
  // because we are now reading text instead of bytes, the meaning of 'offset' is not the same.
  // We need to translate it from bytes to characters.
$fh.offset:=10 // ask to skip 10 utf-16 characters (20 bytes)
$s:=$fh.readText()
```

:::

<!-- END REF -->

<!-- REF FileHandleClass.readBlob().Desc -->

## .readBlob()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!--REF #FileHandleClass.readBlob().Syntax -->**.readBlob**( *bytes* : Real ) : [4D.Blob](BlobClass) <!-- END REF -->

<!--REF #FileHandleClass.readBlob().Params -->

| 引数      | タイプ                                  |    | 説明             |
| ------- | ------------------------------------ | -- | -------------- |
| _bytes_ | Real                                 | -> | 読み取るバイト数       |
| 戻り値     | [4D.Blob](BlobClass) | <- | ファイルから読み取ったバイト |

<!-- END REF -->

#### 説明

The `.readBlob()` function <!-- REF #FileHandleClass.readBlob().Summary -->returns a blob a _bytes_ size from the file, starting from the current position <!-- END REF -->.

When this function is executed, the current position ([.offset](#offset)) is updated after the last byte read.

#### 参照

[.writeBlob()](#writeblob)

<!-- END REF -->

<!-- REF FileHandleClass.readLine().Desc -->

## .readLine()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!--REF #FileHandleClass.readLine().Syntax -->**.readLine()** : Text <!-- END REF -->

<!--REF #FileHandleClass.readLine().Params -->

| 引数  | タイプ  |    | 説明      |
| --- | ---- | -- | ------- |
| 戻り値 | Text | <- | 1行のテキスト |

<!-- END REF -->

#### 説明

The `.readLine()` function <!-- REF #FileHandleClass.readLine().Summary -->returns a line of text from the current position until an end-of-line delimiter is encountered or the end of the document is reached<!-- END REF -->.

When this function is executed, the current position ([`.offset`](#offset)) is updated.

:::caution Warning

This function assumes that the [`.offset`](#offset) property is a number of characters, not a number of bytes. For more information, see the [.offset description](#offset).

:::

> この関数が FileHandle を対象に初めて実行されると、ドキュメント全体がバッファーに読み込まれます。

#### 参照

[.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->

<!-- REF FileHandleClass.readText().Desc -->

## .readText()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!--REF #FileHandleClass.readText().Syntax -->**.readText**( { *stopChar* : Text } ) : Text <!-- END REF -->

<!--REF #FileHandleClass.readText().Params -->

| 引数         | タイプ  |    | 説明          |
| ---------- | ---- | -- | ----------- |
| _stopChar_ | Text | -> | 読み取りを停止する文字 |
| 戻り値        | Text | <- | ファイルのテキスト   |

<!-- END REF -->

#### 説明

The `.readText()` function <!-- REF #FileHandleClass.readText().Summary -->returns text from the file, starting from the current position until the first _stopChar_ string is encountered (if passed) or the end of file is reached<!-- END REF -->.

The _stopChar_ character string is not included in the returned text. If you omit the _stopChar_ parameter, the whole document text is returned.

When this function is executed, the ([.offset](#offset)) is placed just after the _stopChar_ string.

:::caution Warning

This function assumes that the [`.offset`](#offset) property is a number of characters, not a number of bytes. For more information, see the [.offset description](#offset).

:::

If the _stopChar_ parameter is passed and not found, `.readText()` returns an empty string and the [.offset](#offset) is left untouched.

> この関数が FileHandle を対象に初めて実行されると、ドキュメント全体がバッファーに読み込まれます。

#### 参照

[.readLine()](#readline), [.writeText()](#writetext)

<!-- END REF -->

<!-- REF FileHandleClass.setSize().Desc -->

## .setSize()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!--REF #FileHandleClass.setSize().Syntax -->**.setSize**( *size* : Real )<!-- END REF -->

<!--REF #FileHandleClass.setSize().Params -->

| 引数   | タイプ  |    | 説明                                       |
| ---- | ---- | -- | ---------------------------------------- |
| size | Real | -> | ドキュメントの新しいサイズ (バイト単位) |

<!-- END REF -->

#### 説明

The `.setSize()` function <!-- REF #FileHandleClass.setSize().Summary -->sets a new _size_ in bytes for the document<!-- END REF -->.

If the _size_ value is less than the current document size, the document content is truncated from the beginning to get the new _size_ .

#### 参照

[.getSize()](#getsize), [file.size](FileClass#size)

<!-- END REF -->

<!-- REF FileHandleClass.writeBlob().Desc -->

## .writeBlob()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!--REF #FileHandleClass.writeBlob().Syntax -->**.writeBlob**( *blob* : 4D.Blob ) <!-- END REF -->

<!--REF #FileHandleClass.writeBlob().Params -->

| 引数     | タイプ                                  |    | 説明             |
| ------ | ------------------------------------ | -- | -------------- |
| _blob_ | [4D.Blob](BlobClass) | -> | ファイルに書き込む Blob |

<!-- END REF -->

#### 説明

The `.writeBlob()` function <!-- REF #FileHandleClass.writeBlob().Summary -->writes _blob_ into the file, starting from the current position <!-- END REF -->.

When this function is executed, the current position ([.offset](#offset)) is updated after the last byte written.

#### 参照

[.readBlob()](#readblob)

<!-- END REF -->

<!-- REF FileHandleClass.writeLine().Desc -->

## .writeLine()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!--REF #FileHandleClass.writeLine().Syntax -->**.writeLine**( *lineOfText* : Text ) <!-- END REF -->

<!--REF #FileHandleClass.writeLine().Params -->

| 引数           | タイプ  |    | 説明       |
| ------------ | ---- | -- | -------- |
| _lineOfText_ | Text | -> | 書き込むテキスト |

<!-- END REF -->

#### 説明

The `.writeLine()` function <!-- REF #FileHandleClass.writeLine().Summary -->writes _lineOfText_ content at the current position and inserts an end-of-line delimiter<!-- END REF --> (unlike the [.writeText()](#writetext) function). By default, a native end-of-line delimiter is used, but you can define another delimiter when [opening the file handle](FileClass.md#open) by setting the [`.breakModeWrite`](#breakmodewrite) property.

When this function is executed, the current position ([.offset](#offset)) is updated after the end-of-line delimiter.

#### 参照

[.breakModeWrite](#breakmodewrite), [.readLine()](#readline), [.writeText()](#writetext)

<!-- END REF -->

<!-- REF FileHandleClass.writeText().Desc -->

## .writeText()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!--REF #FileHandleClass.writeText().Syntax -->**.writeText**( *textToWrite* : Text )<!-- END REF -->

<!--REF #FileHandleClass.writeText().Params -->

| 引数            | タイプ  |    | 説明       |
| ------------- | ---- | -- | -------- |
| _textToWrite_ | Text | -> | 書き込むテキスト |

<!-- END REF -->

#### 説明

The `.writeText()` function <!-- REF #FileHandleClass.writeText().Summary -->writes _textToWrite_ content at the current position and does not insert a final end-of-line delimiter<!-- END REF --> (unlike the [.writeLine()](#writeline) function). By default, the native delimiter is used, but you can define another delimiter when [opening the file handle](FileClass.md#open) by setting the [`.breakModeWrite`](#breakmodewrite) property.

When this function is executed, the current position ([.offset](#offset)) is updated after the next end-of-line delimiter.

#### 参照

[.breakModeWrite](#breakmodewrite), [.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->

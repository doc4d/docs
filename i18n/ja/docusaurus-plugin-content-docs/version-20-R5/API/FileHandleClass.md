---
id: FileHandleClass
title: FileHandle
---

`FileHandle` クラスは、開かれた [`File`](FileClass) オブジェクトから内容を順次読み出したり、追加したりするための関数を備えています。 FileHandle は、ドキュメントのどの部分にもアクセスすることができます。

`FileHandle` オブジェクトは [`file.open()`](FileClass#open) 関数によって作成されます。

> ドキュメント全体を一括で読み書きするには、[file.getText()](FileClass.md#gettext) と [file.setText()](FileClass.md#settext) 関数の使用を検討されるとよいでしょう。

標準的な 4Dオブジェクトの _参照カウント_ により、FileHandle は参照されなくなると自動的に削除され、要求された [`File`](FileClass) オブジェクトも自動的に閉じられます。 つまり、FileHandle を使えば、ドキュメントを閉じる必要がなくなります。

:::note

ドキュメントなどのオブジェクトリソースは、メモリ上で参照がなくなると解放されます。これはたとえば、メソッド実行終了時のローカル変数などで起こります。 任意の時点でオブジェクトリソースを "強制的に" 解放したい場合は、[その参照を無効化](../Concepts/dt_object.md#リソース) することができます。

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

`.breakModeRead` プロパティは、FileHandle 作成時に [`file.open()`](FileClass.md#open) 関数で定義できます (詳細については [`.open()` 関数](FileClass.md#open) を参照ください)。 デフォルトは "native" です。

> `.breakModeRead` プロパティは、`.open()` のオプションが数値 (定数) を使って設定されていたとしても、常にテキスト値を格納します。

このプロパティは **読み取り専用** です。

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

`.breakModeWrite` プロパティは、FileHandle 作成時に [`file.open()`](FileClass.md#open) 関数で定義できます (詳細については [`.open()` 関数](FileClass.md#open) を参照ください)。 デフォルトは "native" です。

> `.breakModeWrite` プロパティは、`.open()` のオプションが数値 (定数) を使って設定されていたとしても、常にテキスト値を格納します。

このプロパティは **読み取り専用** です。

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

文字セットは、FileHandle 作成時に [`file.open()`](FileClass#open) 関数で定義できます。 デフォルト値: "UTF-8"

このプロパティは **読み取り専用** です。

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

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF FileHandleClass.file.Desc -->

## .file

<!-- REF #FileHandleClass.file.Syntax -->**.file** : 4D.File<!-- END REF -->

#### 説明

The `.file` property returns <!-- REF #FileHandleClass.file.Summary -->the [4D.File](FileClass.md) object on which the handle has been created<!-- END REF -->.

このプロパティは **読み取り専用** です。

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

> この関数は、`File` クラスの [.size](FileClass#size) プロパティと同じ値を返します。

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

モードは、FileHandle 作成時に [`file.open()`](FileClass#open) 関数で定義できます。 デフォルトは "read" です。

このプロパティは **読み取り専用** です。

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

`.offset` を設定すると、次の読み取り・書き取り操作の際に、その現在値が変更されます。

- 負の値が渡された場合、`.offset` はファイルの先頭 (ゼロ) に設定されます。
- ファイルサイズより大きい値が渡された場合、`.offset` はファイルの終端 (ファイルサイズ) に設定されます。

**読み書き可能** プロパティです。

:::caution

FileHandle の作成時、`.offset` の値はバイト数です。 しかしながら、オフセットの単位は読み取り関数によって異なります。[`readBlob()`](#readblob) の場合、`.offset` はバイト数ですが、[`readText()`](#readtext)/[`readLine()`](#readline) の場合は文字数になります。 ファイルの文字セットに応じて、1文字は 1バイトまたは複数バイトに対応します。 したがって、`readBlob()` で読み取りを開始してから `readText()` を呼び出すと、テキストの読み取りは一貫性のない位置から開始されます。 そのため、同じ FileHandle内で、BLOB の読み取り/書き込みからテキストの読み取り/書き込みに切り替える場合には、`.offset` プロパティを自分で設定することが不可欠です。 例:

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

この関数を実行すると、現在の位置 ([.offset](#offset)) が、最後に読み取ったバイトの後に更新されます。

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

この関数を実行すると、現在の位置 ([`.offset`](#offset)) が更新されます。

:::caution 警告

この関数は、[`.offset`](#offset) プロパティがバイト数ではなく文字数であることを前提としています。 詳細については、[.offset の説明](#offset) を参照ください。

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

_stopChar_ の文字列は、返されるテキストに含まれません。 _stopChar_ を省略した場合、ドキュメント全体のテキストが返されます。

この関数を実行すると、[.offset](#offset) が _stopChar_ 文字列の直後に移動します。

:::caution 警告

この関数は、[`.offset`](#offset) プロパティがバイト数ではなく文字数であることを前提としています。 詳細については、[.offset の説明](#offset) を参照ください。

:::

渡した _stopChar_ が見つからない場合、`.readText()` は空の文字列を返し、[.offset](#offset) は更新されません。

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

_size_ の値が現在のドキュメントサイズより小さい場合、内容は先頭から切り捨てられ、新しい _size_ が取得されます。

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

この関数を実行すると、現在の位置 ([.offset](#offset)) が、最後に書き込んだバイトの後に更新されます。

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

The `.writeLine()` function <!-- REF #FileHandleClass.writeLine().Summary -->writes _lineOfText_ content at the current position and inserts an end-of-line delimiter<!-- END REF --> (unlike the [.writeText()](#writetext) function). デフォルトではネイティブの改行文字が使用されますが、[FileHandle](FileClass.md#open) を開く際に、[`.breakModeWrite`](#breakmodewrite) プロパティを設定することで、別の改行文字を定義することができます。

この関数を実行すると、現在の位置 ([.offset](#offset)) が、最後に書き込んだ改行文字の後に更新されます。

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

The `.writeText()` function <!-- REF #FileHandleClass.writeText().Summary -->writes _textToWrite_ content at the current position and does not insert a final end-of-line delimiter<!-- END REF --> (unlike the [.writeLine()](#writeline) function). デフォルトではネイティブの改行文字が使用されますが、[FileHandle](FileClass.md#open) を開く際に、[`.breakModeWrite`](#breakmodewrite) プロパティを設定することで、別の改行文字を定義することができます。

この関数を実行すると、現在の位置 ([.offset](#offset)) は、次の改行文字の後に更新されます。

#### 参照

[.breakModeWrite](#breakmodewrite), [.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->

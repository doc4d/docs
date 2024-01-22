---
id: Document
title: Document クラス
---

## 説明

<!-- REF document.creationDate.Desc -->

## .creationDate

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #document.creationDate.Syntax -->**.creationDate** : Date<!-- END REF -->

#### 説明

The `.creationDate` property returns <!-- REF #document.creationDate.Summary -->the creation date of the file<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.creationTime.Desc -->

## .creationTime

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #document.creationTime.Syntax -->**.creationTime** : Time<!-- END REF -->

#### 説明

The `.creationTime` property  returns <!-- REF #document.creationTime.Summary -->the creation  time of the file<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

This property is **read-only**.

<!-- END REF -->

<!-- REF document.exists.Desc -->

## .exists

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #document.exists.Syntax -->**.exists** : Boolean<!-- END REF -->

#### 説明

The `.exists` property returns <!-- REF #document.exists.Summary -->true if the file exists on disk<!-- END REF -->, and false otherwise.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.extension.Desc -->

## .extension

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #document.extension.Syntax -->**.extension** : Text<!-- END REF -->

#### 説明

The `.extension` property returns <!-- REF #document.extension.Summary -->the extension of the file name (if any)<!-- END REF -->. 拡張子は必ず"." で始まります。 ファイル名が拡張子を持たない場合には、このプロパティは空の文字列を返します。

This property is **read-only**.

<!-- END REF -->

<!-- REF document.fullName.Desc -->

## .fullName

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #document.fullName.Syntax -->**.fullName** : Text<!-- END REF -->

#### 説明

The `.fullName` property returns <!-- REF #document.fullName.Summary -->the full name of the file, including its extension (if any)<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.hidden.Desc -->

## .hidden

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #document.hidden.Syntax -->**.hidden** : Boolean<!-- END REF -->

#### 説明

The `.hidden` property returns <!-- REF #document.hidden.Summary -->true if the file is set as "hidden" at the system level<!-- END REF -->, and false otherwise.

This property is **read/write**.

<!-- END REF -->

<!-- REF document.isAlias.Desc -->

## .isAlias

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #document.isAlias.Syntax -->**.isAlias** : Boolean<!-- END REF -->

#### 説明

The `.isAlias` property returns <!-- REF #document.isAlias.Summary -->true if the file is an alias, a shortcut, or a symbolic link<!-- END REF -->, and false otherwise.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.isFile.Desc -->

## .isFile

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #document.isFile.Syntax -->**.isFile** : Boolean<!-- END REF -->

#### 説明

The `.isFile` property returns <!-- REF #document.isFile.Summary -->always true for a file<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.isFolder.Desc -->

## .isFolder

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #document.isFolder.Syntax -->**.isFolder** : Boolean<!-- END REF -->

#### 説明

The `.isFolder` property returns <!-- REF #document.isFolder.Summary -->always false for a file<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.isWritable.Desc -->

## .isWritable

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #document.isWritable.Syntax -->**.isWritable** : Boolean<!-- END REF -->

#### 説明

The `.isWritable` property returns <!-- REF #document.isWritable.Summary -->true if the file exists on disk and is writable<!-- END REF -->.

> The property checks the ability of the 4D application to write on the disk (access rights), it does not solely rely on the _writable_ attribute of the file.

This property is **read-only**.

**Example**

```4d
 $myFile:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 If($myFile.isWritable)
    $myNewFile:=$myFile.setText("Added text")
 End if
```

<!-- END REF -->

<!-- REF document.modificationDate.Desc -->

## .modificationDate

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #document.modificationDate.Syntax -->**.modificationDate** : Date<!-- END REF -->

#### 説明

The `.modificationDate` property returns <!-- REF #document.modificationDate.Summary -->the date of the file's last modification<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.modificationTime.Desc -->

## .modificationTime

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #document.modificationTime.Syntax -->**.modificationTime** : Time<!-- END REF -->

##### 説明

The `.modificationTime` property returns <!-- REF #document.modificationTime.Summary -->the time of the file's last modification<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

This property is **read-only**.

<!-- END REF -->

<!-- REF document.name.Desc -->

## .name

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #document.name.Syntax -->**.name** : Text<!-- END REF -->

#### 説明

The `.name` property returns <!-- REF #document.name.Summary -->the name of the file without extension (if any)<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.original.Desc -->

## .original

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #document.original.Syntax -->**.original** : 4D.File<br/>**.original** : 4D.Folder<!-- END REF -->

#### 説明

The `.original` property returns <!-- REF #document.original.Summary -->the target element for an alias, a shortcut, or a symbolic link file<!-- END REF -->. ターゲット要素は以下のいずれかです:

- File オブジェクト
- Folder オブジェクト

エイリアスでないファイルについては、プロパティは同じファイルオブジェクトをファイルとして返します。

This property is **read-only**.

<!-- END REF -->

<!-- REF document.parent.Desc -->

## .parent

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #document.parent.Syntax -->**.parent** : 4D.Folder<!-- END REF -->

#### 説明

The `.parent` property returns <!-- REF #document.parent.Summary -->the parent folder object of the file<!-- END REF -->. パスがシステムパスを表す場合 (例: "/DATA/")、システムパスが返されます。

This property is **read-only**.

<!-- END REF -->

<!-- REF document.path.Desc -->

## .path

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #document.path.Syntax -->**.path** : Text<!-- END REF -->

#### 説明

The `.path` property returns <!-- REF #document.path.Summary -->the POSIX path of the file<!-- END REF -->. パスがファイルシステムを表す場合 (例: "/DATA/")、ファイルシステムが返されます。

This property is **read-only**.

<!-- END REF -->

<!-- REF document.platformPath.Desc -->

## .platformPath

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #document.platformPath.Syntax -->**.platformPath** : Text<!-- END REF -->

#### 説明

The `.platformPath` property returns <!-- REF #document.platformPath.Summary -->the path of the file expressed with the current platform syntax<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.size.Desc -->

## .size

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #document.size.Syntax -->**.size** : Real<!-- END REF -->

#### 説明

The `.size` property returns <!-- REF #document.size.Summary -->the size of the file expressed in bytes<!-- END REF -->. ファイルがディスク上に存在しない場合、サイズは 0 になります。

This property is **read-only**.

<!-- END REF -->

<!-- REF document.copyTo().Desc -->

## .copyTo()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #document.copyTo().Syntax -->**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D.File<!-- END REF -->

<!-- REF #document.copyTo().Params -->

| 引数                | タイプ       |     | 説明                                          |                  |
| ----------------- | --------- | :-: | ------------------------------------------- | ---------------- |
| destinationFolder | 4D.Folder |  -> | 宛先フォルダー                                     |                  |
| newName           | Text      |  -> | コピー先フォルダーの名前                                |                  |
| overwrite         | Integer   |  -> | `fk overwrite` to replace existing elements |                  |
| 戻り値               | 4D.File   |  <- | Copied file                                 | <!-- END REF --> |

#### 説明

The `.copyTo()` function <!-- REF #document.copyTo().Summary -->copies the `File` object into the specified _destinationFolder_ <!-- END REF -->.

The _destinationFolder_ must exist on disk, otherwise an error is generated.

デフォルトで、ファイルは元の名前を維持したままコピーされます。 If you want to rename the copy, pass the new name in the _newName_ parameter. 新しい名前は命名規則に則っている必要があります (例: ":", "/", 等の文字を含んでいない、など)。そうでない場合、エラーが返されます。

If a file with the same name already exists in the _destinationFolder_, by default 4D generates an error. You can pass the `fk overwrite` constant in the _overwrite_ parameter to ignore and overwrite the existing file

| 定数             | 値 | 説明                 |
| -------------- | - | ------------------ |
| `fk overwrite` | 4 | 既存要素があれば、それを上書きします |

**Returned value**

The copied `File` object.

#### 例題

You want to copy a picture _file_ from the user's document folder to the application folder:

```4d
var $source; $copy : Object
$source:=Folder(fk documents folder).file("Pictures/photo.png")
$copy:=$source.copyTo(Folder("/PACKAGE");fk overwrite)
```

<!-- END REF -->

<!-- REF document.getContent().Desc -->

## .getContent()

<details><summary>履歴</summary>

| バージョン  | 内容            |
| ------ | ------------- |
| v19 R2 | 4D.Blob を返します |
| v17 R5 | 追加            |

</details>

<!-- REF #document.getContent().Syntax -->**.getContent( )** : 4D.Blob<!-- END REF -->

<!-- REF #document.getContent().Params -->

| 引数  | タイプ     |    | 説明           |                  |
| --- | ------- | -- | ------------ | ---------------- |
| 戻り値 | 4D.Blob | <- | File content | <!-- END REF --> |

#### 説明

The `.getContent()` function  <!-- REF #document.getContent().Summary -->returns a `4D.Blob` object containing the entire content of a file<!-- END REF -->. For information on BLOBs, please refer to the [BLOB](Concepts/dt_blob.md) section.

**Returned value**

A `4D.Blob` object.

#### 例題

To save a document's contents in a `BLOB` field:

```4d
 var $vPath : Text
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //If a document has been chosen
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
```

<!-- END REF -->

<!-- REF document.getIcon().Desc -->

## .getIcon()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #document.getIcon().Syntax -->**.getIcon**( { *size* : Integer } ) : Picture<!-- END REF -->

<!-- REF #document.getIcon().Params -->

| 引数   | タイプ     |    | 説明                                          |                  |
| ---- | ------- | -- | ------------------------------------------- | ---------------- |
| size | Integer | -> | 取得するピクチャーの一辺の長さ (ピクセル単位) |                  |
| 戻り値  | Picture | <- | アイコン                                        | <!-- END REF --> |

#### 説明

The `.getIcon()` function returns <!-- REF #document.getIcon().Summary -->the icon of the file<!-- END REF -->.

The optional _size_ parameter specifies the dimensions in pixels of the returned icon. この値は、実際にはアイコンを格納している正方形の一辺の長さを表しています。 アイコンは通常、32x32ピクセル ("大きいアイコン") または 16x16ピクセル ("小さいアイコン") で定義されています。 この引数に 0 を渡すか省略した場合、"大きいアイコン" が返されます。

ファイルがディスク上に存在しない場合、デフォルトの空のアイコンが返されます。

**Returned value**

File icon [picture](../Concepts/picture.html).

<!-- END REF -->

<!-- REF document.getText().Desc -->

## .getText()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #document.getText().Syntax -->**.getText**( { *charSetName* : Text { ; *breakMode* : Integer } } ) : Text<br/>**.getText**( { *charSetNum* : Integer { ; *breakMode* : Integer } } ) : Text<!-- END REF -->

<!-- REF #document.getText().Params -->

| 引数          | タイプ     |    | 説明                     |                  |
| ----------- | ------- | -- | ---------------------- | ---------------- |
| charSetName | Text    | -> | 文字セットの名前               |                  |
| charSetNum  | Integer | -> | 文字セットの番号               |                  |
| breakMode   | Integer | -> | 改行の処理モード               |                  |
| 戻り値         | Text    | <- | Text from the document | <!-- END REF --> |

#### 説明

The `.getText()` function <!-- REF #document.getText().Summary -->returns the contents of the file as text <!-- END REF -->.

任意で、コンテンツの読み取りに使用する文字セットを渡します。 これには、次の二つの方法があります:

- in _charSetName_, a string containing the standard set name (for example "ISO-8859-1" or "UTF-8"),
- or in _charSetNum_, the MIBEnum ID (number) of the standard set name.

> For the list of character sets supported by 4D, refer to the description of the `CONVERT FROM TEXT` command.

If the document contains a Byte Order Mark (BOM), 4D uses the character set that it has set instead of the one specified in _charSetName_ or _charSetNum_ (this parameter is then ignored).
If the document does not contain a BOM and if _charSetName_ or _charSetNum_ is omitted, by default 4D uses the "UTF-8" character set.

In _breakMode_, you can pass a number indicating the processing to apply to end-of-line characters in the document. "System Documents" テーマの、以下の定数を使用することができます:

| 定数                            | 値 | 説明                                                                                                                                                                 |
| ----------------------------- | - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Document unchanged`          | 0 | 何も処理をしません。                                                                                                                                                         |
| `Document with native format` | 1 | (デフォルト) 改行は OS のネイティブフォーマットに変換されます。macOS では CR (キャリッジリターン) に、Windows では CRLF (キャリッジリターン＋ラインフィード) に変換されます。 |
| `Document with CRLF`          | 2 | 改行は Windowsフォーマット (CRLF、キャリッジリターン＋ラインフィード) へと変換されます。                                                                                            |
| `Document with CR`            | 3 | 改行は macOSフォーマット (CR、キャリッジリターン) へと変換されます。                                                                                                        |
| `Document with LF`            | 4 | 改行は Unixフォーマット (LF、ラインフィード) へと変換されます。                                                                                                           |

By default, when you omit the _breakMode_ parameter, line breaks are processed in native mode (1).

**Returned value**

ファイルのテキスト。

#### 例題

以下のテキストを持つドキュメントがある場合を考えます (フィールドはタブ区切りです):

```4d
id name price vat
3 thé 1.06€ 19.6
2 café 1.05€ 19.6
```

以下のコードを実行すると:

```4d
 $myFile:=Folder(fk documents folder).file("Billing.txt") //UTF-8 by default
 $txt:=$myFile.getText()
```

... you get the following for `$txt`:

"id\tname\tprice\tvat\r\n3\tthé\t1.06€\t19.6\r\n2\tcafé\t1.05€\t19.6"

with `\t` (tab) as separator and `\r\n` (CRLF) as line delimiter.

以下は、同じファイルで改行コードが異なる例です:

```4d
 $txt:=$myFile.getText("UTF-8"; Document with LF)
```

In this case, the contents of `$txt` are as follows:

"id\tname\tprice\tvat\n3\tthé\t1.06€\t19.6\n2\tcafé\t1.05€\t19.6"

This time `\n` (LF) is used as line delimiter.

<!-- END REF -->

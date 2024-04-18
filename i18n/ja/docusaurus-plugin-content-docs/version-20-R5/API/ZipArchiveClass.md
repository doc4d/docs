---
id: ZipArchiveClass
title: ZIPArchive
---

A 4D ZIP archive is a `File` or `Folder` object containing one or more files or folders, which are compressed to be smaller than their original size. これらのアーカイブは ".zip" 拡張子を持つように作成され、ディスクスペースの確保や、サイズ制限があるメディア (例: メールまたはネットワークなど) 経由のファイル転送を容易にする用途に使用できます。

- You create a 4D ZIP archive with the [ZIP Create archive](#zip-create-archive) command.
- 4D [`ZIPFile`](ZipFileClass.md) and [`ZIPFolder`](ZipFolderClass.md) instances are available through the [`root`](#root) property (`ZIPFolder`) of the object returned by [ZIP Read archive](#zip-read-archive) command.

### 例題

ZIPFile オブジェクトを取得し、その中身を確認します:

```4d
var $path; $archive : 4D.File
var $zipFile : 4D.ZipFile
var $zipFolder : 4D.ZipFolder
var $txt : Text

$path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")
$archive:=ZIP Read archive($path)
$zipFolder:=$archive.root // 圧縮ファイルのルートフォルダーを保存します
$zipFile:=$zipFolder.files()[0] // 最初のファイルを読み取ります

If($zipFile.extension=".txt")
 $txt:=$zipFile.getText()
End if
```

### 概要

|                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ZipArchiveClass.root.Syntax -->](#root)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #ZipArchiveClass.root.Summary --> |

## ZIP Create archive

<details><summary>履歴</summary>

| リリース  | 内容                                                                    |
| ----- | --------------------------------------------------------------------- |
| 19 R3 | Added `ZIP Compression LZMA`, `ZIP Compression xy`, `.level` property |
| 18    | 追加                                                                    |

</details>

<!-- REF #_command_.ZIP Create archive.Syntax -->**ZIP Create archive** ( *fileToZip* : 4D.File ; *destinationFile* : 4D.File ) : Object<br/>**ZIP Create archive** ( *folderToZip* : 4D.Folder ; *destinationFile* : 4D.File { ; *options* : Integer }) : Object<br/>**ZIP Create archive** ( *zipStructure* : Object ; *destinationFile* : 4D.File ) : Object<!-- END REF -->

<!-- REF #_command_.ZIP Create archive.Params -->

| 引数              | タイプ                       |     | 説明                                                                   |
| --------------- | ------------------------- | :-: | -------------------------------------------------------------------- |
| fileToZip       | 4D.File   |  -> | 圧縮する File または Folder オブジェクト                                          |
| folderToZip     | 4D.Folder |  -> | 圧縮する File または Folder オブジェクト                                          |
| zipStructure    | Object                    |  -> | 圧縮する File または Folder オブジェクト                                          |
| destinationFile | 4D.File   |  -> | アーカイブの保存先ファイル                                                        |
| options         | Integer                   |  -> | _folderToZip_ option: `ZIP Without enclosing folder` |
| 戻り値             | Object                    |  <- | ステータスオブジェクト                                                          |

<!-- END REF -->

#### 説明

The `ZIP Create archive` command <!-- REF #_command_.ZIP Create archive.Summary -->creates a compressed ZIP archive object and returns the status of the operation<!-- END REF -->.

第1引数として、4D.File、4D.Folder、あるいは zipStructure オブジェクトを渡すことができます。

- _fileToZip_: You simply pass a `4D.File` to compress.

- _folderToZip_: You pass a `4D.Folder` to compress. In this case, the _options_ parameter allows you to compress only the contents of the folder (i.e., exclude the enclosing folder). By default, `ZIP Create archive` will compress the folder and its contents, so that the decompressing operation will recreate a folder. If you want the decompressing operation to restore only the contents of the folder, pass the `ZIP Without enclosing folder` constant in the _options_ parameter.

- _zipStructure_: You pass an object describing the ZIP archive object. 以下のプロパティを利用して、このオブジェクトを定義することが可能です:

| プロパティ       | タイプ                         | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| compression | Integer                     | <li>`ZIP Compression standard`: Deflate compression (default)</li><li>`ZIP Compression LZMA`: LZMA compression</li><li>`ZIP Compression XZ`: XZ compression</li><li>`ZIP Compression none`: No compression</li>                                                                                                                                                                                                                                                                                                                                                  |
| level       | Integer                     | 圧縮レベル。 とりうる値: 1 - 10。 低い値ではファイルが大きくなり、高い値ではファイルが小さくなります。 ただし、圧縮レベルはパフォーマンスに影響します。 Default values if omitted: <li>`ZIP Compression standard`: 6</li><li>`ZIP Compression LZMA`: 4</li><li>`ZIP Compression XZ`: 4</li>                                                                                                                                                                                                                                                            |
| encryption  | Integer                     | The encryption to use if a password is set:<li>`ZIP Encryption AES128`: AES encryption using 128-bit key.</li><li>`ZIP Encryption AES192`: AES encryption using 192-bit key.</li><li>`ZIP Encryption AES256`: AES encryption using 256-bit key (default if password is set).</li><li>`ZIP Encryption none`: Data is not encrypted (default if no password is set)</li>                     |
| password    | Text                        | 暗号化が必要な場合に使用するパスワード                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| files       | Collection                  | <li>a collection of `4D.File` or `4D.Folder` objects or</li><li>a collection of objects with the following properties:</li><table><tr><td>Property</td><td>Type</td><td>Description</td></tr><tr><td>source</td><td>4D.File or 4D.Folder</td><td>File or Folder</td></tr><tr><td>destination</td><td>Text</td><td>(optional) - Specify a relative filepath to change the organization of the contents of the archive</td></tr><tr><td>option</td><td>number</td><td>(optional) - `ZIP Ignore invisible files` or 0 to compress all of the file</td></tr></table> |
| callback    | 4D.Function | $1 に圧縮の進捗 (0 - 100) を受け取るコールバックフォーミュラ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

In the _destinationFile_ parameter, pass a `4D.File` object describing the ZIP archive to create (name, location, etc.). 作成した ZIPアーカイブがあらゆるソフトウェアで自動的に処理されるようにするため、".zip" 拡張子の使用が推奨されます。

Once an archive is created, you can use the [ZIP Read archive](#zip-read-archive) command to access it.

**Status object**

戻り値のステータスオブジェクトには、以下のプロパティが格納されています:

| プロパティ      | タイプ     | 説明                                                                                                                                                                       |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| statusText | Text    | Error message (if any):<li>Cannot open ZIP archive</li><li>Cannot create ZIP archive</li><li>Password is required for encryption</li> |
| status     | Integer | ステータスコード                                                                                                                                                                 |
| success    | Boolean | アーカイブが正常に作成された場合には true、それ以外は false                                                                                                                                      |

#### 例題 1

To compress a `4D.File`:

```4d
 var $file; $destination : 4D.File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")
 $file:=Folder(fk desktop folder).file("MyDocs/text.txt")

 $status:=ZIP Create archive($file;$destination)
```

#### 例題 2

To compress a `4D.Folder` without the folder itself:

```4d
 var $folder : 4D.Folder
 var $destination : 4D.File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")
 $folder:=Folder(fk desktop folder).folder("MyDocs/Images")

 $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)
```

#### 例題 3

ZIPアーカイブの圧縮にパスワードと進捗バーを使います:

```4d
 var $destination : 4D.File
 var $zip;$status : Object
 var progID : Integer

 $destination:=Folder(fk desktop folder).file("MyDocs/Archive.zip")

 $zip:=New object
 $zip.files:=Folder(fk desktop folder).folder("MyDocs/Resources").folders()
 $zip.password:="password"
 $zip.callback:=Formula(myFormulaCompressingMethod($1))

 progID:=Progress New //we use the 4D Progress component

 $status:=ZIP Create archive($zip;$destination)

 Progress QUIT(progID)
```

`myFormulaCompressingMethod`:

```4d
 var $1 : Integer
 Progress SET PROGRESS(progID;Num($1/100))
```

#### 例題 4

You want to pass a collection of folders and files to compress to the _zipStructure_ object:

```4d
 var $destination : 4D.File
 var $zip;$err : Object
 $zip:=New object
 $zip.files:=New collection
 $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text.txt")))
 $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text2.txt")))
 $zip.files.push(New object("source";Folder(fk desktop folder).file("Images/image.png")))

 $destination:=Folder(fk desktop folder).file("file.zip")
 $err:=ZIP Create archive($zip;$destination)
```

#### 例題 5

高い圧縮レベルの代替圧縮アルゴリズムを使用します:

```4d
var $destination : 4D.File
var $zip; $err : Object

$zip:=New object
$zip.files:=New collection
$zip.files.push(Folder(fk desktop folder).folder("images"))
$zip.compression:=ZIP Compression LZMA
$zip.level:=7 // デフォルト値は 4 です

$destination:=Folder(fk desktop folder).file("images.zip")
$err:=ZIP Create archive($zip; $destination)
```

## ZIP Read archive

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 18   | 追加 |

</details>

<!-- REF #_command_.ZIP Read archive.Syntax -->**ZIP Read archive** ( *zipFile* : 4D.File { ; *password* : Text }) : 4D.ZipArchive<!-- END REF -->

<!-- REF #_command_.ZIP Read archive.Params -->

| 引数       | タイプ                           |     | 説明                                         |
| -------- | ----------------------------- | :-: | ------------------------------------------ |
| zipFile  | 4D.File       |  -> | ZIPアーカイブファイル                               |
| password | Text                          |  -> | ZIPアーカイブのパスワード (必要であれば) |
| 戻り値      | 4D.ZipArchive |  <- | アーカイブオブジェクト                                |

<!-- END REF -->

#### 説明

The `ZIP Read archive` command <!-- REF #_command_.ZIP Read archive.Summary -->retrieves the contents of _zipFile_ and returns it as a `4D.ZipArchive` object<!-- END REF -->.

> このコマンドは ZIPアーカイブを展開することはしません。その中身に関する情報を提供するのみです。 To extract the contents of an archive, you need to use methods such as [file.copyTo()](Document.md#copyto) or [folder.copyTo()](Directory.md#copyto).

Pass a `4D.File` object referencing the compressed ZIP archive in the _zipFile_ parameter. The target archive file will be opened until the `ZIP Read archive` has finished executing and all contents/references have been extracted/released, then it will be closed automatically.

If the _zipFile_ is password protected, you need to use the optional _password_ parameter to provide a password. パスワードが必要にも関わらず、コンテンツ読み出し時にパスワードが提示されなかった場合、エラーが生成されます。

**Archive object**

The returned `4D.ZipArchive` object contains a single [`root`](#root) property whose value is a `4D.ZipFolder` object. このフォルダーは ZIPアーカイブの全コンテンツを表します。

#### 例題

ZIPFile オブジェクトを取得し、その中身を確認します:

```4d
 var $archive : 4D.ZipArchive
 var $path : 4D.File

 $path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")
 $archive:=ZIP Read archive($path)
```

アーカイブ内のファイルとフォルダーの一覧を取得します:

```4d
 $folders:=$archive.root.folders()
 $files:=$archive.root.files()
```

ファイルのコンテンツを、root フォルダーから取り出すことなく読み出します:

```4d

 If($files[$i].extension=".txt")
    $txt:=$files[$i].getText()
 Else
    $blob:=$files[$i].getContent()
 End if
```

root フォルダーから取り出します:

```4d
  //extract a file
 $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))

  //extract all files
 $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))
```

## .root

<!-- REF #ZipArchiveClass.root.Syntax -->**.root** : 4D.ZipFolder<!-- END REF -->

#### 説明

The `.root` property contains <!-- REF #ZipArchiveClass.root.Summary -->a virtual folder providing access to the contents of the ZIP archive<!-- END REF -->.

The `root` folder and its contents can be manipulated with the [ZipFile](ZipFileClass.md) and [ZipFolder](ZipFolderClass.md) functions and properties.

This property is **read-only**.

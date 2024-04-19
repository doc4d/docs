---
id: ZipArchiveClass
title: ZIPArchive
---

4D ZIP アーカイブは、一つ以上のファイルまたはフォルダーを格納している `File` または `Folder` オブジェクトで、元のサイズより小さくなるように圧縮されているものをいいます。 これらのアーカイブは ".zip" 拡張子を持つように作成され、ディスクスペースの確保や、サイズ制限があるメディア (例: メールまたはネットワークなど) 経由のファイル転送を容易にする用途に使用できます。

- 4D ZIPアーカイブは [ZIP Create archive](#zip-create-archive) コマンドで作成します。
- 4D [`ZIPFile`](ZipFileClass.md) および [`ZIPFolder`](ZipFolderClass.md) インスタンスは、[ZIP Read archive](#zip-read-archive) コマンドによって返されるオブジェクトの [`root`](#root) プロパティ (`ZIPFolder`) を通して利用可能です。

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

| リリース  | 内容                                                              |
| ----- | --------------------------------------------------------------- |
| 19 R3 | `ZIP Compression LZMA`, `ZIP Compression XZ`, `.level` プロパティを追加 |
| 18    | 追加                                                              |

</details>

<!-- REF #_command_.ZIP Create archive.Syntax -->**ZIP Create archive** ( *fileToZip* : 4D.File ; *destinationFile* : 4D.File ) : Object<br/>**ZIP Create archive** ( *folderToZip* : 4D.Folder ; *destinationFile* : 4D.File { ; *options* : Integer }) : Object<br/>**ZIP Create archive** ( *zipStructure* : Object ; *destinationFile* : 4D.File ) : Object<!-- END REF -->

<!-- REF #_command_.ZIP Create archive.Params -->

| 引数              | タイプ                       |     | 説明                                                                                                                |
| --------------- | ------------------------- | :-: | ----------------------------------------------------------------------------------------------------------------- |
| fileToZip       | 4D.File   |  -> | 圧縮する File または Folder オブジェクト                                                                                       |
| folderToZip     | 4D.Folder |  -> | 圧縮する File または Folder オブジェクト                                                                                       |
| zipStructure    | Object                    |  -> | 圧縮する File または Folder オブジェクト                                                                                       |
| destinationFile | 4D.File   |  -> | アーカイブの保存先ファイル                                                                                                     |
| options         | Integer                   |  -> | _folderToZip_ オプション: `ZIP Without enclosing folder` (外側のフォルダーを除外して ZIP圧縮をおこなう) |
| 戻り値             | Object                    |  <- | ステータスオブジェクト                                                                                                       |

<!-- END REF -->

#### 説明

The `ZIP Create archive` command <!-- REF #_command_.ZIP Create archive.Summary -->creates a compressed ZIP archive object and returns the status of the operation<!-- END REF -->.

第1引数として、4D.File、4D.Folder、あるいは zipStructure オブジェクトを渡すことができます。

- _fileToZip_: 圧縮する `4D.File` オブジェクトを引数として渡します。

- _folderToZip_: 圧縮する `4D.Folder` を渡します。 この場合、任意の _options_ 引数を渡して、フォルダーのコンテンツのみを圧縮 (つまり、外側のフォルダを除外) することができます。 `ZIP Create archive` はデフォルトで、フォルダーとその中身を圧縮するので、展開処理をしたときにはフォルダーを再作成します。 フォルダーの中身のみを解凍処理で復元するには、_options_ 引数に `ZIP Without enclosing folder` 定数を渡します。

- _zipStructure_: ZIPArchive オブジェクトを表すオブジェクトを引数として渡します。 以下のプロパティを利用して、このオブジェクトを定義することが可能です:

| プロパティ       | タイプ                         | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| compression | Integer                     | <li>`ZIP Compression standard`: Deflate compression (default)</li><li>`ZIP Compression LZMA`: LZMA compression</li><li>`ZIP Compression XZ`: XZ compression</li><li>`ZIP Compression none`: No compression</li>                                                                                                                                                                                                                                                                                                                                                  |
| level       | Integer                     | 圧縮レベル。 とりうる値: 1 - 10。 低い値ではファイルが大きくなり、高い値ではファイルが小さくなります。 ただし、圧縮レベルはパフォーマンスに影響します。 Default values if omitted: <li>`ZIP Compression standard`: 6</li><li>`ZIP Compression LZMA`: 4</li><li>`ZIP Compression XZ`: 4</li>                                                                                                                                                                                                                                                            |
| encryption  | Integer                     | The encryption to use if a password is set:<li>`ZIP Encryption AES128`: AES encryption using 128-bit key.</li><li>`ZIP Encryption AES192`: AES encryption using 192-bit key.</li><li>`ZIP Encryption AES256`: AES encryption using 256-bit key (default if password is set).</li><li>`ZIP Encryption none`: Data is not encrypted (default if no password is set)</li>                     |
| password    | Text                        | 暗号化が必要な場合に使用するパスワード                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| files       | Collection                  | <li>a collection of `4D.File` or `4D.Folder` objects or</li><li>a collection of objects with the following properties:</li><table><tr><td>Property</td><td>Type</td><td>Description</td></tr><tr><td>source</td><td>4D.File or 4D.Folder</td><td>File or Folder</td></tr><tr><td>destination</td><td>Text</td><td>(optional) - Specify a relative filepath to change the organization of the contents of the archive</td></tr><tr><td>option</td><td>number</td><td>(optional) - `ZIP Ignore invisible files` or 0 to compress all of the file</td></tr></table> |
| callback    | 4D.Function | $1 に圧縮の進捗 (0 - 100) を受け取るコールバックフォーミュラ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

_destinationFile_ には、作成する ZIPアーカイブ (名前や位置など) を記述する `4D.File` オブジェクトを渡します。 作成した ZIPアーカイブがあらゆるソフトウェアで自動的に処理されるようにするため、".zip" 拡張子の使用が推奨されます。

アーカイブが作成されると、[ZIP Read archive](#zip-read-archive) を使用してアクセスすることができます。

**Status object**

戻り値のステータスオブジェクトには、以下のプロパティが格納されています:

| プロパティ      | タイプ     | 説明                                                                                                                                                                       |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| statusText | Text    | Error message (if any):<li>Cannot open ZIP archive</li><li>Cannot create ZIP archive</li><li>Password is required for encryption</li> |
| status     | Integer | ステータスコード                                                                                                                                                                 |
| success    | Boolean | アーカイブが正常に作成された場合には true、それ以外は false                                                                                                                                      |

#### 例題 1

`4D.File` を圧縮します:

```4d
 var $file; $destination : 4D.File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")
 $file:=Folder(fk desktop folder).file("MyDocs/text.txt")

 $status:=ZIP Create archive($file;$destination)
```

#### 例題 2

フォルダー自体は圧縮せずに `4D.Folder` の中身だけを圧縮します:

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

_zipStructure_ オブジェクトに、圧縮したいフォルダーとファイルを格納したコレクションを渡します:

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

> このコマンドは ZIPアーカイブを展開することはしません。その中身に関する情報を提供するのみです。 アーカイブのコンテンツを取り出すには、[file.copyTo()](Document.md#copyto) あるいは [folder.copyTo()](Directory.md#copyto) などの関数を使用します。

_zipFile_ 引数として、圧縮された ZIPアーカイブを参照している `4D.File` オブジェクトを渡します。 ターゲットのアーカイブファイルは `ZIP Read archive` が実行を終えるまで (全コンテンツ/参照が取得/解放されるまで) は開いた状態となり、その後自動的に閉じられます。

_zipFile_ 引数で指定した ZIPファイルがパスワードで保護されていた場合、任意の _password_ 引数を渡してパスワードを提供する必要があります。 パスワードが必要にも関わらず、コンテンツ読み出し時にパスワードが提示されなかった場合、エラーが生成されます。

**Archive object**

戻り値の `4D.ZipArchive` オブジェクトは単一の [`root`](#root) プロパティを格納しており、その値は `4D.ZipFolder` オブジェクトです。 このフォルダーは ZIPアーカイブの全コンテンツを表します。

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

`root` フォルダーとそのコンテンツは、[ZipFile](ZipFileClass.md) および [ZipFolder](ZipFolderClass.md) の関数とプロパティを使用することで操作可能です。

このプロパティは **読み取り専用** です。

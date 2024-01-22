---
id: Directory
title: Directory クラス
---

<!-- REF directory.creationDate.Desc -->

## .creationDate

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #directory.creationDate.Syntax -->**.creationDate** : Date<!-- END REF -->

#### 説明

The `.creationDate` property returns <!-- REF #directory.creationDate.Summary -->the creation date of the folder<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

***

<!-- REF directory.creationTime.Desc -->

## .creationTime

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #directory.creationTime.Syntax -->**.creationTime** : Time<!-- END REF -->

#### 説明

The `.creationTime` property returns <!-- REF #directory.creationTime.Summary -->the creation time of the folder<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

This property is **read-only**.

<!-- END REF -->

***

<!-- REF directory.exists.Desc -->

## .exists

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #directory.exists.Syntax -->**.exists** : Boolean<!-- END REF -->

#### 説明

The `.exists` property returns <!-- REF #directory.exists.Summary -->true if the folder exists on disk<!-- END REF -->, and false otherwise.

This property is **read-only**.

<!-- END REF -->

***

<!-- REF directory.extension.Desc -->

## .extension

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #directory.extension.Syntax -->**.extension** : Text<!-- END REF -->

#### 説明

The `.extension` property <!-- REF #directory.extension.Summary -->returns the extension of the folder name (if any)<!-- END REF -->. 拡張子は必ず"." で始まります。 フォルダー名が拡張子を持たない場合には、このプロパティは空の文字列を返します。

This property is **read-only**.

<!-- END REF -->

***

<!-- REF directory.fullName.Desc -->

## .fullName

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #directory.fullName.Syntax -->**.fullName** : Text<!-- END REF -->

#### 説明

The `.fullName` property <!-- REF #directory.fullName.Summary -->returns the full name of the folder, including its extension (if any)<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

***

<!-- REF directory.hidden.Desc -->

## .hidden

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #directory.hidden.Syntax -->**.hidden** : Boolean<!-- END REF -->

#### 説明

The `.hidden` property returns <!-- REF #directory.hidden.Summary --> true if the folder is set as "hidden" at the system level<!-- END REF -->, and false otherwise.

This property is **read-only**.

<!-- END REF -->

***

<!-- REF directory.isAlias.Desc -->

## .isAlias

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #directory.isAlias.Syntax -->**.isAlias** : Boolean<!-- END REF -->

#### 説明

The `.isAlias` property returns <!-- REF #directory.isAlias.Summary -->always **false** for a `Folder` object<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

***

<!-- REF directory.isFile.Desc -->

## .isFile

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #directory.isFile.Syntax -->**.isFile** : Boolean<!-- END REF -->

#### 説明

The `.isFile` property returns <!-- REF #directory.isFile.Summary -->always **false** for a folder<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

***

<!-- REF directory.isFolder.Desc -->

## .isFolder

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #directory.isFolder.Syntax -->**.isFolder** : Boolean<!-- END REF -->

#### 説明

The `.isFolder` property returns <!-- REF #directory.isFolder.Summary -->always **true** for a folder<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

***

<!-- REF directory.isPackage.Desc -->

## .isPackage

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #directory.isPackage.Syntax -->**.isPackage** : Boolean<!-- END REF -->

#### 説明

The `.isPackage` property returns <!-- REF #directory.isPackage.Summary -->true if the folder is a package on macOS  (and exists on disk)<!-- END REF -->. それ以外の場合は false を返します。

On Windows, `.isPackage` always returns **false**.

This property is **read-only**.

<!-- END REF -->

***

<!-- REF directory.modificationDate.Desc -->

## .modificationDate

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #directory.modificationDate.Syntax -->**.modificationDate** : Date<!-- END REF -->

#### 説明

The `.modificationDate` property returns <!-- REF #directory.modificationDate.Summary --> the date of the folder's last modification<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

***

<!-- REF directory.modificationTime.Desc -->

## .modificationTime

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #directory.modificationTime.Syntax -->**.modificationTime** : Time<!-- END REF -->

#### 説明

The `.modificationTime` property returns <!-- REF #directory.modificationTime.Summary -->the time of the folder's last modification<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

This property is **read-only**.

<!-- END REF -->

***

<!-- REF directory.name.Desc -->

## .name

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #directory.name.Syntax -->**.name** : Text<!-- END REF -->

#### 説明

The `.name` property returns <!-- REF #directory.name.Summary --> the name of the folder, without extension (if any)<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

***

<!-- REF directory.original.Desc -->

## .original

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #directory.original.Syntax -->**.original** : 4D.Folder<!-- END REF -->

#### 説明

The `.original` property returns <!-- REF #directory.original.Summary -->the same Folder object as the folder<!-- END REF -->.

This property is **read-only**.

> このプロパティは、フォルダーやファイルを処理する汎用的なコードを書くために使用できます。

<!-- END REF -->

***

<!-- REF directory.parent.Desc -->

## .parent

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #directory.parent.Syntax -->**.parent** : 4D.Folder<!-- END REF -->

#### 説明

The `.parent` property returns <!-- REF #directory.parent.Summary -->the parent folder object of the folder<!-- END REF -->. パスがシステムパスを表す場合 (例: "/DATA/")、システムパスが返されます。

親フォルダーが存在しない場合 (root) は、このプロパティは null値を返します。

This property is **read-only**.

<!-- END REF -->

***

<!-- REF directory.path.Desc -->

## .path

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #directory.path.Syntax -->**.path** : Text<!-- END REF -->

#### 説明

The `.path` property returns <!-- REF #directory.path.Summary -->the POSIX path of the folder<!-- END REF -->. パスがファイルシステムを表す場合 (例: "/DATA/")、ファイルシステムが返されます。

This property is **read-only**.

<!-- END REF -->

***

<!-- REF directory.platformPath.Desc -->

## .platformPath

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #directory.platformPath.Syntax -->**.platformPath** : Text<!-- END REF -->

#### 説明

The `.platformPath` property returns <!-- REF #directory.platformPath.Summary -->the path of the folder expressed with the current platform syntax<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

***

<!-- REF directory.copyTo().Desc -->

## .copyTo()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #directory.copyTo().Syntax -->**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D.Folder<!-- END REF -->

<!-- REF #directory.copyTo().Params -->

| 引数                | タイプ       |     | 説明                                          |                  |
| ----------------- | --------- | :-: | ------------------------------------------- | ---------------- |
| destinationFolder | 4D.Folder |  -> | 宛先フォルダー                                     |                  |
| newName           | Text      |  -> | コピー先フォルダーの名前                                |                  |
| overwrite         | Integer   |  -> | `fk overwrite` to replace existing elements |                  |
| 戻り値               | 4D.Folder |  <- | Copied file or folder                       | <!-- END REF --> |

#### 説明

The `.copyTo()` function <!-- REF #directory.copyTo().Summary -->copies the `Folder` object into the specified _destinationFolder_<!-- END REF -->.

The _destinationFolder_ must exist on disk, otherwise an error is generated.

デフォルトで、フォルダーは元の名前を維持したままコピーされます。 If you want to rename the copy, pass the new name in the _newName_ parameter. 新しい名前は命名規則に則っている必要があります (例: ":", "/", 等の文字を含んでいない、など)。そうでない場合、エラーが返されます。

If a folder with the same name already exists in the _destinationFolder_, by default 4D generates an error. You can pass the `fk overwrite` constant in the _overwrite_ parameter to ignore and overwrite the existing file

| 定数             | 値 | 説明                 |
| -------------- | - | ------------------ |
| `fk overwrite` | 4 | 既存要素があれば、それを上書きします |

**Returned value**

The copied `Folder` object.

#### 例題

You want to copy a Pictures _folder_ from the user's Document folder to the Database folder:

```4d
var $userImages; $copiedImages : 4D.Folder
$userImages:=Folder(fk documents folder).folder("Pictures")
$copiedImages:=$userImages.copyTo(Folder(fk database folder);fk overwrite)
```

<!-- END REF -->

***

<!-- REF directory.file().Desc -->

## .file()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #directory.file().Syntax -->**.file**( *path* : Text ) : 4D.File<!-- END REF -->

<!-- REF #directory.file().Params -->

| 引数   | タイプ     |    | 説明                                                      |                  |
| ---- | ------- | -- | ------------------------------------------------------- | ---------------- |
| path | Text    | -> | ファイルのPOSIX相対パス名                                         |                  |
| 戻り値  | 4D.File | <- | `File` object (null if invalid path) | <!-- END REF --> |

#### 説明

The `.file()` function creates <!-- REF #directory.file().Summary -->a `File` object inside the `Folder` object and returns its reference<!-- END REF -->.

In _path_, pass a relative POSIX path to designate the file to return. このパスは、親フォルダーを起点として評価されます。

**Returned value**

A `File` object or null if _path_ is invalid.

#### 例題

```4d
var $myPDF : 4D.File
$myPDF:=Folder(fk documents folder).file("Pictures/info.pdf")
```

<!-- END REF -->

***

<!-- REF directory.files().Desc -->

## .files()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #directory.files().Syntax -->**.files**( { *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #directory.files().Params -->

| 引数      | タイプ        |    | 説明                                  |                  |
| ------- | ---------- | -- | ----------------------------------- | ---------------- |
| options | Integer    | -> | ファイルリストのオプション                       |                  |
| 戻り値     | Collection | <- | Collection of children file objects | <!-- END REF --> |

#### 説明

The `.files()` function returns <!-- REF #directory.files().Summary -->a collection of `File` objects contained in the folder<!-- END REF -->.

> エイリアスまたはシンボリックリンクは解決されません。

By default, if you omit the _options_ parameter, only the files at the first level of the folder are returned in the collection, as well as invisible files or folders. You can modify this by passing, in the _options_ parameter, one or more of the following constants:

| 定数                    | 値 | 説明                                    |
| --------------------- | - | ------------------------------------- |
| `fk recursive`        | 1 | コレクションには、指定フォルダーとそのサブフォルダーのファイルが含まれます |
| `fk ignore invisible` | 8 | 非表示設定のファイルは表示されません                    |

**Returned value**

Collection of `File` objects.

#### 例題 1

データベースフォルダー内に非表示ファイルがないかどうかを調べます:

```4d
 var $all; $noInvisible : Collection
 $all:=Folder(fk database folder).files()
 $noInvisible:=Folder(fk database folder).files(fk ignore invisible)
 If($all.length#$noInvisible.length)
    ALERT("Database folder contains hidden files.")
 End if
```

#### 例題 2

ドキュメントフォルダー内にある、非表示でないファイルをすべて取得します:

```4d
 var $recursive : Collection
 $recursive:=Folder(fk documents folder).files(fk recursive+fk ignore invisible)
```

<!-- END REF -->

***

<!-- REF directory.folder().Desc -->

## .folder()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #directory.folder().Syntax -->**.folder**( *path* : Text ) : 4D.Folder<!-- END REF -->

<!-- REF #directory.folder().Params -->

| 引数   | タイプ       |    | 説明                                                                |                  |
| ---- | --------- | -- | ----------------------------------------------------------------- | ---------------- |
| path | Text      | -> | ファイルのPOSIX相対パス名                                                   |                  |
| 戻り値  | 4D.Folder | <- | Created folder object (null if invalid _path_) | <!-- END REF --> |

#### 説明

The `.folder()` function <!-- REF #directory.folder().Summary -->creates a `Folder` object inside the parent `Folder` object and returns its reference<!-- END REF -->.

In _path_, pass a relative POSIX path to designate the folder to return. このパスは、親フォルダーを起点として評価されます。

**Returned value**

A `Folder` object or null if _path_ is invalid.

#### 例題

```4d
 var $mypicts : 4D.Folder
 $mypicts:=Folder(fk documents folder).folder("Pictures")
```

<!-- END REF -->

***

<!-- REF directory.folders().Desc -->

## .folders()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #directory.folders().Syntax -->**.folders**( { *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #directory.folders().Params -->

| 引数      | タイプ        |    | 説明                                    |                  |
| ------- | ---------- | -- | ------------------------------------- | ---------------- |
| options | Integer    | -> | フォルダーリストのオプション                        |                  |
| 戻り値     | Collection | <- | Collection of children folder objects | <!-- END REF --> |

#### 説明

The `.folders()` function <!-- REF #directory.folders().Summary -->returns a collection of `Folder` objects contained in the parent folder<!-- END REF -->.

By default, if you omit the _options_ parameter, only the folders at the first level of the folder are returned in the collection. You can modify this by passing, in the _options_ parameter, one or more of the following constants:

| 定数                    | 値 | 説明                                     |
| --------------------- | - | -------------------------------------- |
| `fk recursive`        | 1 | コレクションには、指定フォルダーとそのサブフォルダーのフォルダーが含まれます |
| `fk ignore invisible` | 8 | 非表示設定のフォルダーは表示されません                    |

**Returned value**

Collection of `Folder` objects.

#### 例題

データベースフォルダー内にあるすべてのフォルダーおよびサブフォルダーのコレクションを取得します:

```4d
 var $allFolders : Collection
 $allFolders:=Folder("/PACKAGE").folders(fk recursive)
```

<!-- END REF -->

***

<!-- REF directory.getIcon().Desc -->

## .getIcon()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #directory.getIcon().Syntax -->**.getIcon**( { *size* : Integer } ) : Picture<!-- END REF -->

<!-- REF #directory.getIcon().Params -->

| 引数   | タイプ     |    | 説明                                          |                  |
| ---- | ------- | -- | ------------------------------------------- | ---------------- |
| size | Integer | -> | 取得するピクチャーの一辺の長さ (ピクセル単位) |                  |
| 戻り値  | Picture | <- | アイコン                                        | <!-- END REF --> |

#### 説明

The `.getIcon()` function <!-- REF #directory.getIcon().Summary -->returns the icon of the folder<!-- END REF -->.

The optional _size_ parameter specifies the dimensions in pixels of the returned icon. この値は、実際にはアイコンを格納している正方形の一辺の長さを表しています。 アイコンは通常、32x32ピクセル ("大きいアイコン") または 16x16ピクセル ("小さいアイコン") で定義されています。 この引数に 0 を渡すか省略した場合、"大きいアイコン" が返されます。

フォルダーがディスク上に存在しない場合、デフォルトの空のアイコンが返されます。

**Returned value**

Folder icon [picture](Concepts/dt_picture.md).

<!-- END REF -->

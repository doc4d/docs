---
id: FileClass
title: File
---

`File` objects are created with the [`File`](#file) command. これらのオブジェクトには、(実在しているか否かに関わらず) ディスクファイルへの参照が格納されます。 For example, when you execute the `File` command to create a new file, a valid `File` object is created but nothing is actually stored on disk until you call the [`file.create( )`](#create) function.

### 例題

プロジェクトフォルダーにプリファレンスファイルを作成します:

```code4d
var $created : Boolean
$created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```

### パス名

`File` objects support several pathnames, including `filesystems` or `posix` syntax. Supported pathnames are detailed in the [**Pathnames**](../Concepts/paths.md) page.

### File オブジェクト

|                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #document.copyTo().Syntax -->](#copyto)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.copyTo().Summary -->                           |
| [<!-- INCLUDE #FileClass.create().Syntax -->](#create)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileClass.create().Summary -->                         |
| [<!-- INCLUDE #FileClass.createAlias().Syntax -->](#createalias)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileClass.createAlias().Summary -->          |
| [<!-- INCLUDE #document.creationDate.Syntax -->](#creationdate)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.creationDate.Summary -->             |
| [<!-- INCLUDE #document.creationTime.Syntax -->](#creationtime)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.creationTime.Summary -->             |
| [<!-- INCLUDE #FileClass.delete().Syntax -->](#delete)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileClass.delete().Summary -->                         |
| [<!-- INCLUDE #document.exists.Syntax -->](#exists)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.exists.Summary -->                               |
| [<!-- INCLUDE #document.extension.Syntax -->](#extension)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.extension.Summary -->                      |
| [<!-- INCLUDE #document.fullName.Syntax -->](#fullname)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.fullName.Summary -->                         |
| [<!-- INCLUDE #FileClass.getAppInfo().Syntax -->](#getappinfo)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileClass.getAppInfo().Summary -->             |
| [<!-- INCLUDE #document.getContent().Syntax -->](#getcontent)<!-- INCLUDE #document.getContent().Summary -->                                                                                                                                       |
| [<!-- INCLUDE #document.getIcon().Syntax -->](#geticon)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.getIcon().Summary -->                        |
| [<!-- INCLUDE #document.getText().Syntax -->](#gettext)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.getText().Summary -->                        |
| [<!-- INCLUDE #document.hidden.Syntax -->](#hidden)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.hidden.Summary -->                               |
| [<!-- INCLUDE #document.isAlias.Syntax -->](#isalias)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.isAlias.Summary -->                            |
| [<!-- INCLUDE #document.isFile.Syntax -->](#isfile)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.isFile.Summary -->                               |
| [<!-- INCLUDE #document.isFolder.Syntax -->](#isfolder)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.isFolder.Summary -->                         |
| [<!-- INCLUDE #document.isWritable.Syntax -->](#iswritable)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.isWritable.Summary -->                   |
| [<!-- INCLUDE #document.modificationDate.Syntax -->](#modificationdate)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.modificationDate.Summary --> |
| [<!-- INCLUDE #document.modificationTime.Syntax -->](#modificationtime)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.modificationTime.Summary --> |
| [<!-- INCLUDE #FileClass.moveTo().Syntax -->](#moveto)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileClass.moveTo().Summary -->                         |
| [<!-- INCLUDE #document.name.Syntax -->](#name)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.name.Summary -->                                     |
| [<!-- INCLUDE #FileClass.open().Syntax -->](#open)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileClass.open().Summary -->                               |
| [<!-- INCLUDE #document.original.Syntax -->](#original)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.original.Summary -->                         |
| [<!-- INCLUDE #document.parent.Syntax -->](#parent)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.parent.Summary -->                               |
| [<!-- INCLUDE #document.path.Syntax -->](#path)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.path.Summary -->                                     |
| [<!-- INCLUDE #document.platformPath.Syntax -->](#platformpath)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.platformPath.Summary -->             |
| [<!-- INCLUDE #FileClass.rename().Syntax -->](#rename)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileClass.rename().Summary -->                         |
| [<!-- INCLUDE #FileClass.setAppInfo().Syntax -->](#setappinfo)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileClass.setAppInfo().Summary -->             |
| [<!-- INCLUDE #FileClass.setContent().Syntax -->](#setcontent)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileClass.setContent().Summary -->             |
| [<!-- INCLUDE #FileClass.setText().Syntax -->](#settext)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileClass.setText().Summary -->                      |
| [<!-- INCLUDE #document.size.Syntax -->](#size)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.size.Summary -->                                     |

## File

<details><summary>履歴</summary>

| リリース  | 内容                                  |
| ----- | ----------------------------------- |
| 19 R4 | New `HTTP Client log file` constant |
| 17 R5 | 追加                                  |

</details>

<!-- REF #_command_.File.Syntax -->**File** ( *path* : Text { ; *pathType* : Integer }{ ; * } ) : 4D.File<br/>**File** ( *fileConstant* : Integer { ; * } ) : 4D.File<!-- END REF -->

<!-- REF #_command_.File.Params -->

| 引数           | タイプ                     |     | 説明                                                                 |
| ------------ | ----------------------- | :-: | ------------------------------------------------------------------ |
| path         | Text                    |  -> | ファイルパス                                                             |
| fileConstant | Integer                 |  -> | 4Dファイル定数                                                           |
| pathType     | Integer                 |  -> | `fk posix path` (default) or `fk platform path` |
| -            |                         |  -> | ホストデータベースのファイルを返すには \* を渡します                                       |
| 戻り値          | 4D.File |  <- | 新規ファイルオブジェクト                                                       |

<!-- END REF -->

#### 説明

The `File` command <!-- REF #_command_.File.Summary -->creates and returns a new object of the `4D.File` type<!-- END REF -->. このコマンドは 2種類のシンタックスを受け入れます。

**File ( path { ; pathType } { ; \* })**

In the _path_ parameter, pass a file path string. カスタムの文字列やファイルシステム (例: "/DATA/myfile.txt") を渡すことができます。

> Only absolute pathnames are supported with the `File` command.

デフォルトで、4D は POSIXシンタックスで表現されたパスを期待します。 If you work with platform pathnames (Windows or macOS), you must declare it using the _pathType_ parameter. 以下の定数を使用することができます:

| 定数               | 値 | 説明                                                                |
| ---------------- | - | ----------------------------------------------------------------- |
| fk platform path | 1 | プラットフォーム特有のシンタックスで表現されたパス (プラットフォームパス名の場合には必須) |
| fk posix path    | 0 | POSIXシンタックスで表現されたパス (デフォルト)                    |

**File ( fileConstant { ; \* } )**

In the _fileConstant_ parameter, pass a 4D built-in or system file, using one of the following constants:

| 定数                                | 値  | 説明                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------- | -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Backup history file               | 19 | バックアップ履歴ファイル。 バックアップ保存先フォルダに保存されています。                                                                                                                                                                                                                                                                                                                                                                        |
| Backup log file                   | 13 | カレントのバックアップのログファイル。 アプリケーションの Logs フォルダーに保存されています。                                                                                                                                                                                                                                                                                                                                                           |
| Backup settings file              | 1  | プロジェクトの Settings フォルダーにある、デフォルトの backup.4DSettings ファイル (xml 形式)                                                                                                                                                                                                                                                                                                          |
| Backup settings file for data     | 17 | データフォルダーの Settings フォルダーにある、データファイル用の backup.4DSettings ファイル (xml 形式)                                                                                                                                                                                                                                                                                                     |
| Build application log file        | 14 | アプリケーションビルダーのカレントログファイル (xml 形式)。 Logs フォルダーに保存されています。                                                                                                                                                                                                                                                                                                                                    |
| Build application settings file   | 20 | アプリケーションビルダーのデフォルト設定ファイル ("buildApp.4DSettings")。 プロジェクトの Settings フォルダーに保存されています。                                                                                                                                                                                                                                                                                        |
| Compacting log file               | 6  | Compact data file コマンドによって、あるいはメンテナンス&セキュリティセンター (MSC) によって作成された、直近の圧縮のログファイル。 Logs フォルダーに保存されています。                                                                                                                                                                                                                                                                   |
| Current backup settings file      | 18 | アプリケーションが現在使用している backup.4DSettings ファイル。 使用されるのはデフォルトのバックアップ設定ファイル、または、データファイル用のユーザーバックアップ設定ファイルです。                                                                                                                                                                                                                                                                                         |
| Debug log file                    | 12 | Log file created by the `SET DATABASE PARAMETER(Debug log recording)` command. Logs フォルダーに保存されています。                                                                                                                                                                                                                                                                                          |
| Diagnostic log file               | 11 | Log file created by the `SET DATABASE PARAMETER(Diagnostic log recording)` command. Logs フォルダーに保存されています。                                                                                                                                                                                                                                                                                     |
| Directory file                    | 16 | プロジェクトアプリケーションにおいて、ユーザーとグループ (あれば) の定義が格納された directory.json ファイル。 このファイルは、データベースの user settings フォルダー (デフォルト、プロジェクトに対してグローバル)、または data settings フォルダー (データファイル専用) に保管されます。                                                                                                                                                          |
| HTTP Client log file              | 24 | Log file created by the `HTTP SET OPTION(HTTP client log)` command. Logs フォルダーに保存されています。                                                                                                                                                                                                                                                                                                     |
| HTTP debug log file               | 9  | Log file created by the `WEB SET OPTION(Web debug log)` command. Logs フォルダーに保存されています。                                                                                                                                                                                                                                                                                                        |
| HTTP log file                     | 8  | Log file created by the `WEB SET OPTION(Web log recording)` command. Logs フォルダーに保存されています。                                                                                                                                                                                                                                                                                                    |
| IMAP Log file                     | 23 | Log file created by the `SET DATABASE PARAMETER(IMAP Log)` command. Logs フォルダーに保存されています。                                                                                                                                                                                                                                                                                                     |
| Last backup file                  | 2  | Last backup file, named `\<applicationName>[bkpNum].4BK`, stored at a custom location.                                                                                                                                                                                                                                                                                                      |
| Last journal integration log file | 22 | 最後のログ統合ログファイル (あれば) の完全なパス名 (復元されたアプリケーションの Logs フォルダー内に保存されます)。 このファイルは、自動修復モードにおいてログファイル統合が発生した時点で作成されます。                                                                                                                                                                                                                                                            |
| Repair log file                   | 7  | メンテナンス&セキュリティセンター (MSC) 内からデータベースに対しておこなわれたデータベース修復のログファイル。 Logs フォルダーに保存されています。                                                                                                                                                                                                                                                                                      |
| Request log file                  | 10 | Standard client/server request log file (excluding Web requests) created by the `SET DATABASE PARAMETER(4D Server log recording)` or `SET DATABASE PARAMETER(Client log recording)` commands. サーバー上で実行された場合には、サーバーログが返されます (ログファイルはサーバー上の Logsフォルダーに保存されています)。 クライアントで実行された場合には、クライアントのログが返されます (ログファイルはクライアントのLogsフォルダーに保存されています)。 |
| SMTP log file                     | 15 | Log file created by the `SET DATABASE PARAMETER(SMTP Log)` command. Logs フォルダーに保存されています。                                                                                                                                                                                                                                                                                                     |
| User settings file                | 3  | 設定が有効化されている場合、ストラクチャーファイルと同じ階層にある Preferences フォルダーに格納された、全データファイルの settings.4DSettings ファイル。                                                                                                                                                                                                                                                                                                |
| User settings file for data       | 4  | データファイルと同じ階層にある Preferences フォルダーに格納された、カレントデータファイルの settings.4DSettings ファイル。                                                                                                                                                                                                                                                                                                               |
| Verification log file             | 5  | Log files created by the `VERIFY CURRENT DATA FILE` and `VERIFY DATA FILE` commands or the Maintenance and Security Center (MSC). Logs フォルダーに保存されています。                                                                                                                                                                                                                    |

If the target _fileConstant_ does not exist, a null object is returned. エラーは生成されません。

If the command is called from a component, pass the optional `*` parameter to get the path of the host database. Otherwise, if you omit the `*` parameter, a null object is always returned.

## 4D.File.new()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #4D.File.new().Syntax -->

**4D.File.new** ( _path_ : Text { ; _pathType_ : Integer }{ ; \* } ) : 4D.File<br/>**4D.File.new** ( _fileConstant_ : Integer { ; \* } ) : 4D.File<!-- END REF -->

#### 説明

The `4D.File.new()` function <!-- REF #4D.File.new().Summary -->creates and returns a new object of the `4D.File` type<!-- END REF -->. It is identical to the [`File`](#file) command (shortcut).

> It is recommended to use the [`File`](#file) shortcut command instead of `4D.File.new()`.

<!-- INCLUDE document.copyTo().Desc -->

<!-- REF file.create().Desc -->

## .create()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!--REF file.create().Note -->

**Not available for ZIP archives**<!-- END REF -->

<!--REF #FileClass.create().Syntax -->**.create()** : Boolean <!-- END REF -->

<!--REF #FileClass.create().Params -->

| 引数  | タイプ     |    | 説明                                   |
| --- | ------- | -- | ------------------------------------ |
| 戻り値 | Boolean | <- | ファイルが正常に作成された場合に true、それ以外の場合は false |

<!-- END REF -->

#### 説明

The `.create()` function <!-- REF #FileClass.create().Summary -->creates a file on disk according to the properties of the `File` object<!-- END REF -->.

If necessary, the function creates the folder hierachy as described in the [platformPath](#platformpath) or [path](#path) properties. ファイルがディスク上にすでに存在する場合、関数は何もせず、false を返します (エラーは返されません)。

**戻り値**

- **True** if the file is created successfully;
- **False** if a file with the same name already exists or if an error occured.

#### 例題

データベースフォルダー内にプリファレンスファイルを作成します:

```4d
 var $created : Boolean
 $created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```

<!-- END REF -->

<!-- REF file.createAlias().Desc -->

## .createAlias()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!--REF #FileClass.createAlias().Syntax -->**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File<!-- END REF -->

<!--REF #FileClass.createAlias().Params -->

| 引数                | タイプ                       |    | 説明                       |
| ----------------- | ------------------------- | -- | ------------------------ |
| destinationFolder | 4D.Folder | -> | エイリアスまたはショートカットの作成先フォルダー |
| aliasName         | Text                      | -> | エイリアスまたはショートカットの名称       |
| aliasType         | Integer                   | -> | エイリアスリンクのタイプ             |
| 戻り値               | 4D.File   | <- | エイリアスまたはショートカットのファイル参照   |

<!-- END REF -->

#### 説明

The `.createAlias()` function <!-- REF #FileClass.createAlias().Summary -->creates an alias (macOS) or a shortcut (Windows)<!-- END REF --> to the file with the specified _aliasName_ name in the folder designated by the _destinationFolder_ object.

Pass the name of the alias or shortcut to create in the _aliasName_ parameter.

macOS 上では、この関数はデフォルトで標準エイリアスを作成します。 You can also create a symbolic link by using the _aliasType_ parameter. 以下の定数を使用することができます:

| 定数                 | 値 | 説明                                     |
| ------------------ | - | -------------------------------------- |
| `fk alias link`    | 0 | エイリアスリンク (デフォルト)    |
| `fk symbolic link` | 1 | シンボリックリンク (macOSのみ) |

On Windows, a shortcut (.lnk file) is always created (the _aliasType_ parameter is ignored).

**Returned object**

A `4D.File` object with the `isAlias` property set to **true**.

#### 例題

データベースフォルダー内のファイルへのエイリアスを作成します:

```4d
 $myFile:=Folder(fk documents folder).file("Archives/ReadMe.txt")
 $aliasFile:=$myFile.createAlias(File("/PACKAGE");"ReadMe")
```

<!-- END REF -->

<!-- INCLUDE document.creationDate.Desc -->

<!-- INCLUDE document.creationTime.Desc -->

<!-- REF file.delete().Desc -->

## .delete()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!--REF #FileClass.delete().Syntax -->**.delete**()<!-- END REF -->

<!-- REF #FileClass.delete().Params -->

| 引数 | タイプ |     | 説明         |
| -- | --- | :-: | ---------- |
|    |     |     | 引数を必要としません |

<!-- END REF -->

#### 説明

The `.delete()` function <!-- REF #FileClass.delete().Summary -->deletes the file<!-- END REF -->.

ファイルがディスク上に存在しない場合、関数は何もしません (エラーは生成されません)。

ファイルが現在開かれている場合、結果は OS に依存します:

- Windows上では、エラーが生成されます。
- macOS上では、エラーは生成されず、ファイルが削除されます。

:::caution

`.delete()` can delete any file on a disk. これには、他のアプリケーションで作成されたドキュメントや、アプリケーションそのものも対象になります。 `.delete()` should be used with extreme caution. ファイルの削除は恒久的な操作であり取り消しできません。

:::

#### 例題

データベースフォルダー内の特定のファイルを削除します:

```4d
 $tempo:=File("/PACKAGE/SpecialPrefs/"+Current user+".prefs")
 If($tempo.exists)
    $tempo.delete()
    ALERT("User preference file deleted.")
 End if
```

<!-- END REF -->

<!-- INCLUDE document.exists.Desc -->

<!-- INCLUDE document.extension.Desc -->

<!-- INCLUDE document.fullName.Desc -->

<!-- REF file.getAppInfo().Desc -->

## .getAppInfo()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 19   | 追加 |

</details>

<!--REF #FileClass.getAppInfo().Syntax -->**.getAppInfo**() : Object<!-- END REF -->

<!--REF #FileClass.getAppInfo().Params -->

| 引数  | タイプ    |    | 説明                                                                                   |
| --- | ------ | -- | ------------------------------------------------------------------------------------ |
| 戻り値 | Object | <- | .exe/.dll のバージョンリソースや .plist ファイルの中身 |

<!-- END REF -->

#### 説明

The `.getAppInfo()` function <!-- REF #FileClass.getAppInfo().Summary -->returns the contents of a **.exe**, **.dll** or **.plist** file information as an object<!-- END REF -->.

この関数は、既存の .exe、.dll、あるいは .plist ファイルと使う必要があります。 ファイルがディスク上に存在しない、または、有効な .exe や .dll、.plist ファイルでない場合、この関数は空のオブジェクトを返します (エラーは生成されません)。

> この関数は xml形式の .plist ファイル (テキスト) のみをサポートしています。 バイナリ形式の .plist ファイルを対象に使用した場合、エラーが返されます。

**Returned object with a .exe or .dll file**

> .exe および .dll ファイルの読み取りは Windows上でのみ可能です。

プロパティ値はすべてテキストです。

| プロパティ            | タイプ  |
| ---------------- | ---- |
| InternalName     | Text |
| ProductName      | Text |
| CompanyName      | Text |
| LegalCopyright   | Text |
| ProductVersion   | Text |
| FileDescription  | Text |
| FileVersion      | Text |
| OriginalFilename | Text |

**Returned object with a .plist file**

xml ファイルの中身は解析され、オブジェクトのプロパティとしてキーが返されます。 キーの型 (テキスト、ブール、数値) は維持されます。 `.plist dict` is returned as a JSON object and `.plist array` is returned as a JSON array.

#### 例題

```4d
 // アプリケーションの .exe ファイルの著作権情報を表示します (Windows)
var $exeFile : 4D.File
var $info : Object
$exeFile:=File(Application file; fk platform path)
$info:=$exeFile.getAppInfo()
ALERT($info.LegalCopyright)

  // info.plistの著作権情報を表示します (Windows および macOS)
var $infoPlistFile : 4D.File
var $info : Object
$infoPlistFile:=File("/RESOURCES/info.plist")
$info:=$infoPlistFile.getAppInfo()
ALERT($info.Copyright)
```

#### 参照

[.setAppInfo()](#setappinfo)

<!-- END REF -->

<!-- INCLUDE document.getContent().Desc -->

<!-- INCLUDE document.getIcon().Desc -->

<!-- INCLUDE document.getText().Desc -->

<!-- INCLUDE document.hidden.Desc -->

<!-- INCLUDE document.isAlias.Desc -->

<!-- INCLUDE document.isFile.Desc -->

<!-- INCLUDE document.isFolder.Desc -->

<!-- INCLUDE document.isWritable.Desc -->

<!-- INCLUDE document.modificationDate.Desc -->

<!-- INCLUDE document.modificationTime.Desc -->

<!-- REF file.moveTo().Desc -->

## .moveTo()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!--REF #FileClass.moveTo().Syntax -->**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.File<!-- END REF -->

<!--REF #FileClass.moveTo().Params -->

| 引数                | タイプ                       |    | 説明              |
| ----------------- | ------------------------- | -- | --------------- |
| destinationFolder | 4D.Folder | -> | 宛先フォルダー         |
| newName           | Text                      | -> | 移動先でのファイルの完全な名称 |
| 戻り値               | 4D.File   | <- | 移動したファイル        |

<!-- END REF -->

#### 説明

The `.moveTo()` function <!-- REF #FileClass.moveTo().Summary -->moves or renames the `File` object into the specified _destinationFolder_<!-- END REF -->.

The _destinationFolder_ must exist on disk, otherwise an error is generated.

デフォルトでは、移動したファイルは元の名前を維持します。 If you want to rename the moved file, pass the new full name in the _newName_ parameter. 新しい名前は命名規則に則っている必要があります (例: ":", "/", 等の文字を含んでいない、など)。そうでない場合、エラーが返されます。

**Returned object**

The moved `File` object.

#### 例題

```4d
$DocFolder:=Folder(fk documents folder)
$myFile:=$DocFolder.file("Current/Infos.txt")
$myFile.moveTo($DocFolder.folder("Archives");"Infos_old.txt")
```

<!-- END REF -->

<!-- INCLUDE document.name.Desc -->

<!-- REF file.open().Desc -->

## .open()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!--REF #FileClass.open().Syntax -->**.open**( { *mode* : Text } ) : 4D.FileHandle<br/>**.open**( { *options* : Object } ) : 4D.FileHandle<!-- END REF -->

<!--REF #FileClass.open().Params -->

| 引数      | タイプ                                              |    | 説明                                               |
| ------- | ------------------------------------------------ | -- | ------------------------------------------------ |
| mode    | Text                                             | -> | 開くモード: "read", "write", "append" |
| options | Object                                           | -> | 開くオプション                                          |
| 戻り値     | [4D.FileHandle](FileHandleClass) | <- | 新規の FileHandle オブジェクト                            |

<!-- END REF -->

#### 説明

The `.open()` function <!-- REF #FileClass.open().Summary -->creates and returns a new [4D.FileHandle](FileHandleClass) object on the file, in the specified _mode_ or with the specified _options_<!-- END REF -->. You can use functions and properties of the [4D.FileHandle](FileHandleClass) class to write, read, or append contents to the file.

If you use the _mode_ (text) parameter, pass the opening mode for the file handle:

| _mode_   | 説明                                                                                                                                                             |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "read"   | (デフォルト) ファイルから値を読み取るための FileHandle を作成します。 ディスク上にファイルが存在しない場合は、エラーが返されます。 "read" モードの FileHandle は、同じ File オブジェクトに対していくつでも開くことができます。        |
| "write"  | ファイルに値を書き込むための FileHandle を作成します (書き込みはファイルの先頭から)。 ディスク上にファイルが存在しない場合は、作成されます。 "write" モードの FileHandle は、同じ File オブジェクトに対して 1つのみ開くことができます。  |
| "append" | ファイルに値を書き込むための FileHandle を作成します (書き込みはファイルの最後から)。 ディスク上にファイルが存在しない場合は、作成されます。 "append" モードの FileHandle は、同じ File オブジェクトに対して 1つのみ開くことができます。 |

> The _mode_ value is case sensitive.

If you use the _options_ (object) parameter, you can pass more options for the file handle through the following properties (these properties can be read afterwards from the opened [file handle object](FileHandleClass)):

| _オプション_           | タイプ             | 説明                                                                                        | デフォルト          |
| ----------------- | --------------- | ----------------------------------------------------------------------------------------- | -------------- |
| `.mode`           | Text            | Opening mode (see _mode_ above)                                        | "read"         |
| `.charset`        | Text            | ファイルの読み取りや書き込みに使用される文字セット。 セットの標準名を使用します (たとえば、"ISO-8859-1" や "UTF-8") | "UTF-8"        |
| `.breakModeRead`  | Text または Number | ファイルの読み取り時に使用される改行の処理モード (下記参照)                                        | "native" または 1 |
| `.breakModeWrite` | Text または Number | ファイルの書き込み時に使用される改行の処理モード (下記参照)                                        | "native" または 1 |

この関数は、元の改行文字をすべて置き換えます。 デフォルトではネイティブの区切り文字が使われますが、別の区切り文字を定義することも可能です。 The `.breakModeRead` and `.breakModeWrite` indicate the processing to apply to end-of-line characters in the document. 以下のいずれかの値を使用できます (テキストまたは数値):

| 改行モードの値 (テキスト) | 改行モードの値 (数値/定数)                   | 説明                                                                                                                                                                |
| --------------------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "native"                          | 1 (`Document with native format`) | (デフォルト) 改行は OS のネイティブフォーマットに変換されます。 macOS では LF (ラインフィード) に、Windows では CRLF (キャリッジリターン＋ラインフィード) に変換されます。 |
| "crlf"                            | 2 (`Document with CRLF`)          | 改行は Windows のデフォルトフォーマットである CRLF (キャリッジリターン＋ラインフィード) へと変換されます。                                                                                 |
| "cr"                              | 3 (`Document with CR`)            | 改行はクラシック Mac OS のデフォルトフォーマットである CR (キャリッジリターン) へと変換されます。                                                                                       |
| "lf"                              | 4 (`Document with LF`)            | 改行は Unix および macOS のデフォルトフォーマットである LF (ラインフィード) へと変換されます。                                                                                      |

> The _break mode as text_ value is case sensitive.

#### 例題

"ReadMe.txt" ファイルを読み取るための FileHandle を作成します:

```4d
var $f : 4D.File
var $fhandle : 4D.FileHandle

$f:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
$fhandle:=$f.open("read")

```

<!-- END REF -->

<!-- INCLUDE document.original.Desc -->

<!-- INCLUDE document.parent.Desc -->

<!-- INCLUDE document.path.Desc -->

<!-- INCLUDE document.platformPath.Desc -->

<!-- REF file.rename().Desc -->

## .rename()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!--REF #FileClass.rename().Syntax -->**.rename**( *newName* : Text ) : 4D.File<!-- END REF -->

<!--REF #FileClass.rename().Params -->

| 引数      | タイプ                     |    | 説明            |
| ------- | ----------------------- | -- | ------------- |
| newName | Text                    | -> | ファイルの新しい完全な名称 |
| 戻り値     | 4D.File | <- | 名称変更されたファイル   |

<!-- END REF -->

#### 説明

The `.rename()` function <!-- REF #FileClass.rename().Summary -->renames the file with the name you passed in _newName_ and returns the renamed `File` object<!-- END REF -->.

The _newName_ parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. 同じ名前のファイルがすでに存在する場合には、エラーが返されます。

Note that the function modifies the full name of the file, i.e. if you do not pass an extension in _newName_, the file will have a name without an extension.

**Returned object**

The renamed `File` object.

#### 例題

"ReadMe.txt" ファイルを "ReadMe_new.txt" というファイルに名称変更します:

```4d
 $toRename:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 $newName:=$toRename.rename($toRename.name+"_new"+$toRename.extension)
```

<!-- END REF -->

<!-- REF file.setAppInfo().Desc -->

## .setAppInfo()

<details><summary>履歴</summary>

| リリース | 内容            |
| ---- | ------------- |
| 20   | WinIcon をサポート |
| 19   | 追加            |

</details>

<!--REF #FileClass.setAppInfo().Syntax -->**.setAppInfo**( *info* : Object )<!-- END REF -->

<!--REF #FileClass.setAppInfo().Params -->

| 引数   | タイプ    |    | 説明                                                                                          |
| ---- | ------ | -- | ------------------------------------------------------------------------------------------- |
| info | Object | -> | .exe/.dll のバージョンリソースや .plist ファイルに書き込むプロパティ |

<!-- END REF -->

#### 説明

The `.setAppInfo()` function <!-- REF #FileClass.setAppInfo().Summary -->writes the _info_ properties as information contents of a **.exe**, **.dll** or **.plist** file<!-- END REF -->.

この関数は、既存の .exe、.dll、あるいは .plist ファイルと使う必要があります。 ファイルがディスク上に存在しない、または、有効な .exe や .dll、.plist ファイルでない場合、この関数は何もしません (エラーは生成されません)。

> この関数は xml形式の .plist ファイル (テキスト) のみをサポートしています。 バイナリ形式の .plist ファイルを対象に使用した場合、エラーが返されます。

**_info_ parameter object with a .exe or .dll file**

> .exe および .dll ファイル情報の書き込みは Windows上でのみ可能です。

Each valid property set in the _info_ object parameter is written in the version resource of the .exe or .dll file. 以下のプロパティが使用できます (それ以外のプロパティは無視されます):

| プロパティ            | タイプ  | 説明                                                                   |
| ---------------- | ---- | -------------------------------------------------------------------- |
| InternalName     | Text |                                                                      |
| ProductName      | Text |                                                                      |
| CompanyName      | Text |                                                                      |
| LegalCopyright   | Text |                                                                      |
| ProductVersion   | Text |                                                                      |
| FileDescription  | Text |                                                                      |
| FileVersion      | Text |                                                                      |
| OriginalFilename | Text |                                                                      |
| WinIcon          | Text | .icoファイルの Posixパス。 このプロパティは、4D が生成した実行ファイルにのみ適用されます。 |

For all properties except `WinIcon`, if you pass a null or empty text as value, an empty string is written in the property. テキストでない型の値を渡した場合には、文字列に変換されます。

For the `WinIcon` property, if the icon file does not exist or has an incorrect format, an error is generated.

**_info_ parameter object with a .plist file**

Each valid property set in the _info_ object parameter is written in the .plist file as a key. あらゆるキーの名称が受け入れられます。 値の型は可能な限り維持されます。

If a key set in the _info_ parameter is already defined in the .plist file, its value is updated while keeping its original type. .plist ファイルに既存のそのほかのキーはそのまま維持されます。

> 日付型の値を定義するには、Xcode plist エディターのようにミリ秒を除いた ISO UTC 形式の JSONタイムスタンプ文字列 (例: "2003-02-01T01:02:03Z") を使用します。

#### 例題

```4d
  // set copyright, version and icon of a .exe file (Windows)
var $exeFile; $iconFile : 4D.File
var $info : Object
$exeFile:=File(Application file; fk platform path)
$iconFile:=File("/RESOURCES/myApp.ico")
$info:=New object
$info.LegalCopyright:="Copyright 4D 2023"
$info.ProductVersion:="1.0.0"
$info.WinIcon:=$iconFile.path
$exeFile.setAppInfo($info)
```

```4d
  // info.plist ファイルのキーをいくつか設定します (すべてのプラットフォーム)
var $infoPlistFile : 4D.File
var $info : Object
$infoPlistFile:=File("/RESOURCES/info.plist")
$info:=New object
$info.Copyright:="Copyright 4D 2023" // テキスト
$info.ProductVersion:=12 // 整数
$info.ShipmentDate:="2023-04-22T06:00:00Z" // タイムスタンプ
$info.CFBundleIconFile:="myApp.icns" // macOS 用
$infoPlistFile.setAppInfo($info)
```

#### 参照

[.getAppInfo()](#getappinfo)

<!-- REF file.setContent().Desc -->

## .setContent()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!--REF #FileClass.setContent().Syntax -->**.setContent** ( *content* : Blob ) <!-- END REF -->

<!--REF #FileClass.setContent().Params -->

| 引数      | タイプ  |    | 説明            |
| ------- | ---- | -- | ------------- |
| content | BLOB | -> | ファイルの新しいコンテンツ |

<!-- END REF -->

#### 説明

The `.setContent( )` function <!-- REF #FileClass.setContent().Summary -->rewrites the entire content of the file using the data stored in the _content_ BLOB<!-- END REF -->. For information on BLOBs, please refer to the [BLOB](Concepts/dt_blob.md) section.

#### 例題

```4d
 $myFile:=Folder(fk documents folder).file("Archives/data.txt")
 $myFile.setContent([aTable]aBlobField)
```

<!-- END REF -->

<!-- REF file.setText().Desc -->

## .setText()

<details><summary>履歴</summary>

| リリース  | 内容                                                                                  |
| ----- | ----------------------------------------------------------------------------------- |
| 19 R3 | 新規プロジェクトのデフォルト: BOMなし、(macOS の場合) EOL として LF を使用 |
| 17 R5 | 追加                                                                                  |

</details>

<!--REF #FileClass.setText().Syntax -->**.setText** ( *text* : Text {; *charSetName* : Text { ; *breakMode* : Integer } } )<br/>**.setText** ( *text* : Text {; *charSetNum* : Integer { ; *breakMode* : Integer } } )<!-- END REF -->

<!--REF #FileClass.setText().Params -->

| 引数          | タイプ     |    | 説明            |
| ----------- | ------- | -- | ------------- |
| text        | Text    | -> | ファイルに保存するテキスト |
| charSetName | Text    | -> | 文字セットの名前      |
| charSetNum  | Integer | -> | 文字セットの番号      |
| breakMode   | Integer | -> | 改行の処理モード      |

<!-- END REF -->

#### 説明

The `.setText()` function <!-- REF #FileClass.setText().Summary -->writes _text_ as the new contents of the file<!-- END REF -->.

If the file referenced in the `File` object does not exist on the disk, it is created by the function. ディスク上にファイルが存在する場合、ファイルが開かれている場合を除き、以前のコンテンツは消去されます。 ファイルが開かれている場合はコンテンツはロックされ、エラーが生成されます。

In _text_, pass the text to write to the file. テキストリテラル ("my text" など) のほか、4Dテキストフィールドや変数も渡せます。

任意で、コンテンツの書き込みに使用する文字セットを渡します。 これには、次の二つの方法があります:

- in _charSetName_, a string containing the standard set name (for example "ISO-8859-1" or "UTF-8"),
- or in _charSetNum_, the MIBEnum ID (number) of the standard set name.

> For the list of character sets supported by 4D, refer to the description of the `CONVERT FROM TEXT` command.

文字セットにバイトオーダーマーク (BOM) が存在し、かつその文字セットに "-no-bom" 接尾辞 (例: "UTF-8-no-bom") が含まれていない場合、4D は BOM をファイルに挿入します。 文字セットを指定しない場合、 4D はデフォルトで "UTF-8" の文字セットを BOMなしで使用します。

In _breakMode_, you can pass a number indicating the processing to apply to end-of-line characters before saving them in the file. The following constants, found in the **System Documents** theme, are available:

| 定数                            | 値 | 説明                                                                                                                                                                |
| ----------------------------- | - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0 | 何も処理をしません。                                                                                                                                                        |
| `Document with native format` | 1 | (デフォルト) 改行は OS のネイティブフォーマットに変換されます。 macOS では LF (ラインフィード) に、Windows では CRLF (キャリッジリターン＋ラインフィード) に変換されます。 |
| `Document with CRLF`          | 2 | 改行は Windows のデフォルトフォーマットである CRLF (キャリッジリターン＋ラインフィード) へと変換されます。                                                                                 |
| `Document with CR`            | 3 | 改行はクラシック Mac OS のデフォルトフォーマットである CR (キャリッジリターン) へと変換されます。                                                                                       |
| `Document with LF`            | 4 | 改行は Unix および macOS のデフォルトフォーマットである LF (ラインフィード) へと変換されます。                                                                                      |

By default, when you omit the _breakMode_ parameter, line breaks are processed in native mode (1).

> **Compatibility Note**: Compatibility options are available for EOL and BOM management. See [Compatibility page](https://doc.4d.com/4dv19R/help/title/en/page3239.html) on doc.4d.com.

#### 例題

```4d
$myFile:=File("C:\\Documents\\Hello.txt";fk platform path)
$myFile.setText("Hello world")
```

<!-- END REF -->

<!-- INCLUDE document.size.Desc -->

---
id: paths
title: パス名
---

File および Folder の関数、プロパティ、コマンドにより、ファイルやフォルダーをオブジェクトとして扱うことができます。 これにより、ファイルやフォルダーの管理を強力かつ柔軟におこなえます。 たとえば、カレントユーザーのドキュメントフォルダーに新しいファイルを作成する場合、次のように書くことができます:

```4d
$ok:=Folder(fk documents folder).file("Archives/John4D.prefs").create()
```

In addition, file and folder objects support `fileSystems`, which provide contextual path to main application folders.

## filsystemパス名

4D accepts several `filesystem` pathnames that designate specific 4D folders with variable location on macOS and Windows. filesystemパス名の使用は、主に二つの理由から有用です:

- 独立性: OS の違いやパスの心配なく、ソリューションを一つの場所から他の場所へと移せるようになります。
- 安全性: コードにより、ディスク上のファイルシステムのルートより上の階層にある要素へアクセスすることはできません (サンドボックス化)。

以下の filesystemパス名がサポートされています:

| filesystem   | 指定先                                                      |
| ------------ | -------------------------------------------------------- |
| "/DATA"      | カレントデータフォルダー                                             |
| "/LOGS"      | Logs フォルダー                                               |
| "/PACKAGE"   | プロジェクトのルートフォルダー (拡張子 4dbase の有無に関わらず) |
| "/PROJECT"   | Project フォルダー                                            |
| "/RESOURCES" | カレントプロジェクトの Resources フォルダー                              |
| "/SOURCES"   | カレントプロジェクトの Sources フォルダー                                |

## POSIX シンタックス

POSIX シンタックスはすべてのプラットフォームでサポートされています。 **POSIX syntax is recommended** since it is the most flexible. It is used by default (returned by [file.path](../API/FileClass.md#path) and [folder.path](../API/FolderClass.md#path) properties).

このシンタックスでは:

- フォルダーは "/" で区切られます。
- 絶対パス名は "/" で始まります。
- 相対パスにおいて 1階層上に移動するには、パス名の前に "../" を使用します (セキュリティ上の理由から、filesystem から上へは移動できません)。

In POSIX syntax, you will generally use `filesystem` pathnames with [`File`](../API/FileClass.md#file) and [`Folder`](../API/FolderClass.md#folder) commands, for example:

```4d
$pathFile:=File("/DATA/Archives/file 2.txt")
$pathFolder:=Folder("/RESOURCES/Pictures")
```

## プラットフォーム特有のシンタックス

プラットフォーム特有のシンタックスは、コマンドが実行される OS に依存します。 Note that when creating a file or folder object with this syntax, you must declare it using the `fk platform path` constant as parameter.

### Windows

以下のパターンがサポートされています:

- フォルダーは "\" で区切られます。
- パスは 2番目と 3番目の文字にそれぞれ ":" と "\" を含みます。
- パスは "\\" で始まります。

Examples with [`Folder`](../API/FolderClass.md#folder):

```4d
$ok:=Folder("C:\\Monday";fk platform path).create()
$ok:=Folder("\\\\svr-internal\\tempo";fk platform path).create()
```

#### Windows のパス名とエスケープシーケンス

The 4D language allows the use of [escape sequences](quick-tour.md#escape-sequences). Escape sequences begin with a backslash `\`, followed by a character. For example, `\t` is the escape sequence for the `Tab` character.

Since the `\` character is also used as the separator in pathnames in Windows, you need to enter a double `\\` in windows pathnames.

### macOS

以下のパターンがサポートされます (HFS + シンタックス):

- フォルダーは ":" で区切られます。
- パスは ":" で始まってはいけません。

Examples with [`Folder`](../API/FolderClass.md#folder):

```4d
$ok:=Folder("macintosh hd:";fk platform path).create()
$ok:=Folder("Monday:Tuesday";fk platform path).create() // ボリュームの名前は Monday である必要があります
```

## 相対パス名および絶対パス名について

### `File` and `Folder` constructors

[`File`](../API/FileClass.md#file) and [`Folder`](../API/FolderClass.md#folder) commands only accept **absolute pathnames**. 相対パス名はサポートされておらず、エラーが返されます。 たとえば、以下のコードは使用できません:

```4d
	//ERROR
$ko:=Folder("myFolder").create() //relative pathname with constructor
```

If you want to handle files or folders in various locations (project folder, system folders, etc.), you can use `filesystems` (see above). たとえば:

```4d
$okFolder:=Folder("/PACKAGE/myFolder").create() // ストラクチャーレベルでフォルダーが作成されます
$okFile:=File("/DATA/Prefs/tempo.txt").create() // データフォルダー内にファイルが作成されます
```

### `.file()` and `.folder()` folder functions

Functions of folder objects such as [`folder.file()`](../API/FolderClass.md#file) and [`folder.folder()`](../API/FolderClass.md#folder-1) expect relative POSIX pathnames. 例:

```4d
  //to reference a "Picture" folder within the user documents folder
$userImages:=Folder(fk documents folder).folder("Pictures")
  //to create a folder on the desktop
$ok:=Folder(fk desktop folder).folder("myFolder").create()
```

絶対パス名はサポートされておらず、エラーを返します。

## 例題

File および Folder のコマンドや関数により、以下の例題のように様々な方法でファイルやフォルダーを管理することが可能になります:

```4d
$f:=Folder(fk desktop folder).folder("archive/jan2019")
 
$f2:=Folder("/DATA/archive/jan2019").file("total.txt")
 
$f3:=Folder("/DATA/archive/jan2019")
 
$f4:=File("/DATA/info.txt")
 
$f5:=File("c:\\archives\\local\\jan2019.txt";fk platform path)
 
$f6:=File(fk backup log file)
```

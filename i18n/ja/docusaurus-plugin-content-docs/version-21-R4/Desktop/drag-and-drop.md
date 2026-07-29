---
id: drag-and-drop
title: ドラッグ&ドロップ
---

## 概要

4Dにはフォームやアプリケーションのオブジェクト間で動作する組み込のドラック＆ドロップ機能があります。 一つのオブジェクトを同一のウインドウ内、または別のウインドウにドラック＆ドロップすることが出来ます。 言い換えれば、同一のプロセスまたは別のプロセスに対してドラック＆ドロップすることが出来ます。

またオブジェクトを4Dフォームと他のアプリケーション間でドラッグ＆ドロップできます。 例えばPNG ピクチャを4D のピクチャフィールドにドラッグ＆ドロップできます。 またワードプロセッサアプリケーションでテキストを選択し、4D のテキスト変数やリストボックスなどにドロップできます。

そして、フォームが最前面になくとも、アプリケーションに直接オブジェクトをドロップできます。 [`On Drop` データベースメソッド](../commands-legacy/on-drop-database-method.md) を使用して、このケースのドラッグ＆ドロップを管理できます。 つまり、例えば、4D アプリケーションアイコンに4D Write Pro ドキュメントをドロップして開くことができます。

4D では二つのドラッグ＆ドロップモードを提供しています:

- ドラッグ&ドロップオペレーション全体がプログラマーによって管理される**カスタムモード**。 このモードでは、ドラッグ＆ドロップに基づいたあらゆるインターフェースを実装することができます。 これにはデータの転送を必ずしも伴わないものも含まれ、ファイルを開くや計算をトリガーするなどの任意のアクションを実行することができます。
- ドラッグ&ドロップオペレーションによってあるオブジェクトから別のオブジェクトへと、データが自動的にコピーあるいは移動される**自動モード**。 このモードはテキストベースのオブジェクトと(一部の)ピクチャーにおいて利用可能で、プロパティをチェックするだけで有効化されます。

## ドラッグ可能オブジェクトとドロップ可能オブジェクト

複数のフォームオブジェクトはカスタムモードまたは自動モードにおいてドラッグ可/ドロップ可に設定可能です(以下参照)。 デフォルトで、新しく作成されたオブジェクトはドラッグもドロップもできません("none" 値)。 これらのプロパティを設定するかどうかは開発者に任されています。

あるオブジェクトから別のオブジェクトにドラッグ&ドロップを実行するには、[**ドラッグ可** プロパティ](../FormObjects/properties_Action.md#ドラッグ有効) を"自動" あるいは "カスタム" に設定する必要があります。 ドラッグ&ドロップ処理では、ドラッグされるオブジェクトがソースオブジェクトになります。

あるオブジェクトをドラッグ&ドロップ処理のドロップ先にするには、[**ドロップ可** プロパティ](../FormObjects/properties_Action.md#ドロップ有効) を "自動" あるいは "カスタム" に設定する必要があります。 ドラッグ&ドロップ処理では、データを受け取るオブジェクトがドロップ先オブジェクトになります。

以下の表はドラッグ可能またはドロップ可能なオブジェクトでの利用可能なプロパティの一覧をまとめたものです:

| フォームオブジェクト                                   | ドラッグ可 "カスタム" | ドロップ可 "カスタム" | ドラッグ可 "自動" | ドロップ可 "自動" |
| -------------------------------------------- | ------------ | ------------ | ---------- | ---------- |
| [4D Write Pro エリア](writeProArea_overview.md) | ○            | ○            | ○          | ○          |
| [コンボボックス](comboBox_overview.md)              |              | ○            | ○          | ○          |
| [入力](input_overview.md)                      | ○            | ○            | ○          | ○          |
| [階層リスト](list_overview.md)                    | ○            | ○            |            |            |
| [リストボックス](listbox_overview.md)               | ○            | ○            |            |            |
| [プラグインエリア](pluginArea_overview.md)           |              |              | ○          | ○          |
| [ボタン](button_overview.md)                    |              | ○            |            |            |
| [ピクチャーボタン](pictureButton_overview.md)        |              | ○            |            |            |

改装リスト内の項目、またはリストボックス内の行はドラッグ&ドロップすることができます。 逆に、あるオブジェクトを改装リスト内の項目またはリストボックスの行にドラッグ&ドロップすることもできます。 ただし、出力フォームの詳細エリアからオブジェクトをドラッグ&ドロップすることはできません。 アプリケーションのフォーム外へのドラッグアンドドロップも、[`On Drop` データベースメソッド](../commands-legacy/on-drop-database-method.md) で管理できます。

:::note 注記

- デフォルトで、ピクチャフィールドや変数の場合は、ピクチャとその参照は両方ともドラッグされます。 変数やフィールドの参照のみをドラッグしたい場合は、**Alt** ボタン(Windows) または**Option** ボタン(macOS) を押す必要があります。
- 配列型リストボックスオブジェクトで“カスタム”のドラック可プロパティと[“行の移動可”](../FormObjects/properties_Action.md#行の移動可) が同時に選択されている場合、行が移動された場合は“行の移動可”が優先されます。 この場合ドラッグはできません。
- ドラッグとドロップの両方ができるオブジェクトは、開発者が禁止しない限り、自分自身にもドロップできます。

:::

## カスタムのドラッグ&ドロップ

カスタムのドラッグ&ドロップインターフェースを実装するということは、プロパティ、イベント、そして一般的には [*ペーストボード* テーマ](../commands/theme/Pasteboard.md) のコマンドを組み合わせるということを意味します。 以下の図ではカスタムのドラッグ&ドロップシークエンスのキーポイントを描写しています:

![](../assets/en/Desktop/dragdrop1.png)

実装の流れに関しては、以下のようなシナリオに基づいています:

1. ソースオブジェクト([**ドラッグ可** プロパティが"カスタム"](../FormObjects/properties_Action.md#ドラッグ有効) に設定済み)の[`On Begin Drag Over`](../Events/onBeginDragOver.md) イベントにおいて、[`APPEND DATA TO PASTEBOARD`](../commands/append-data-to-pasteboard)、 [`SET FILE TO PASTEBOARD`](../commands/set-file-to-pasteboard) コマンド、あるいは[ペーストボード テーマ](../commands/theme/Pasteboard.md) のコマンドなどを用いて適切なデータをペーストボードに入れます。 [`SET DRAG ICON`](../commands/set-drag-icon) コマンドを使用して特定のカーソルアイコンを定義することもできます。
2. ドロップ先オブジェクト([**ドロップ可** プロパティが"カスタム"](../FormObjects/properties_Action.md#ドロップ有効) に設定済み) の[`On Drag Over`](../Events/onDragOver.md) イベントにおいて、[`GET PASTEBOARD DATA TYPE`](../commands/get-pasteboard-data-type) あるいは [`GET PASTEBOARD DATA`](../commands/get-pasteboard-data) を使用して、ペーストボード内のデータの型、あるいはデータのシグネイチャー取得し、ドロップ先オブジェクトと互換性があるかどうかをチェックします。
   [`Drop position`](../commands/drop-position) コマンドは、ドロップ先オブジェクトが配列(つまりスクロール可能なエリア)、階層リスト、テキストあるいはコンボボックスの場合にはターゲット要素のアイテム位置の要素番号を返し、ドロップ先オブジェクトがリストボックスの場合にはカラム番号を返します。
3. ドロップ先オブジェクトの[オブジェクトメソッド](../Concepts/methods.md#メソッドタイプ) はアクションを受け付ける、または拒否するには0 または-1 を返さなければなりません。
   - 互換性がある場合、マウスボタンがリリースされた時にドロップを受け入れ、[`On Drop`](../Events/onDrop.md) イベントを実行するためには**0** を返します。
   - そうでない場合、**-1** を返してドロップを拒否します。  
     このやりとりにおけるインターフェース側の側面は4D によって自動的に管理され、ドロップが受け入れられたか拒否されたかによってカーソルの表示を変えます。
4. ドロップ先オブジェクト([**ドロップ可** プロパティが"カスタム"](../FormObjects/properties_Action.md#droppable) に設定済み)の[`On Drop`](../Events/onDrop.md) イベントにおいて、ドロップに対応するアクションを実行します。 例えばドラッグ&ドロップの操作がドラッグしているデータをコピーする目的であった場合、そのデータをドロップ先オブジェクトへ割り当てます。 ドラッグ&ドロップがデータの移動ではなく、特定の操作のためのユーザーインターフェースメタファーであった場合、例えば[`Get file from pasteboard`](../commands/get-file-from-pasteboard) コマンドを使用してファイルパスを取得するなど、必要な処理を実行します。

[`On Begin Drag Over`](../Events/onBeginDragOver.md) イベントは**ドラッグのソースオブジェクトのコンテキスト**で生成される点に注意してください。対して[`On Drag Over`](../Events/onDragOver.md) および [`On Drop`](../Events/onDrop.md) イベントはドロップ先オブジェクトに送信されます。

アプリケーションがこれらのイベントを処理するためには、ソースオブジェクトとドロップ先オブジェクトの両方のプロパティリストで正しく選択されていなければなりません:

![](../assets/en/Desktop/dragdrop2.png)

## 自動ドラッグ&ドロップ

自動ドラッグ&ドロップは、単一のクリックで一つのエリアから他のエリアへと、テキストまたはピクチャーの選択範囲を移動またはコピーすることです。 このコピーは、同じ 4D エリア内、2つの 4D エリア間、4D と他のアプリケーション間で使用できます。

:::note

2つの4D エリア間の自動ドラッグ＆ドロップの場合、データは移動されます。言い換えれば、データはソースエリアから削除されます。 データをコピーしたい場合、アクションの間**Ctrl** (Windows) または**Option** (macOS) キーを押します(macOS の場合、ドラッグを開始した*後* に **Option** を押す必要があります)。

:::

[自動ドラッグ](../FormObjects/properties_Action.md#ドラッグ有効) プロパティと[自動ドロップ](../FormObjects/properties_Action.md#ドロップ有効) はフォームオブジェクトごとに個別に設定できます:

- **自動ドラッグ**: このオプションがチェックされると、オブジェクトの自動ドラッグモードが有効になります。 このモードでは、[`On Begin Drag`](../Events/onBeginDragOver.md) フォームイベントは生成されません。
  自動ドラッグが有効のときに標準のドラッグを"強制"したい場合、アクションの間**Alt** (Windows) または **Option** (macOS) キーを押しながら操作します(macOS の場合、ドラッグを開始する *前* に**Option** を押す必要があります)。 このオプションはピクチャーでは利用できません。
- **自動ドロップ:**: このモードでは、4D は可能な限り自動で、オブジェクトにドロップされたテキストやピクチャ型データの挿入を管理します (データはオブジェクトにペーストされます)。 この場合[`On Drag Over`](../Events/onDragOver.md) および [`On Drop`](../Events/onDrop.md) フォームイベントは生成されません。 他方、ドロップ中の[`On After Edit`](../Events/onAfterEdit.md) とオブジェクトがフォーカスを失った時の[`On Data Change`](../Events/onDataChange.md) イベントは生成されます。

テキストやピクチャ以外のデータ (他の4Dオブジェクトやファイルなど) や 複合データがドロップされた場合、アプリケーションは"ドロップ可"オプションを参照します。オプションがチェックされていれば、[`On Drag Over`](../Events/onDragOver.md) および [`On Drop`](../Events/onDrop.md) フォームイベントが生成されます。そうでなければドロップは拒否されます。

## 例題

### 配列型リストボックスからテキストエリアへ

このシンプルな例題では、配列型リストボックスからドラッグしてきたデータを入力テキストエリアに入れたい場合を考えます:

![](../assets/en/Desktop/dragdrop3.png)

リストボックスのオブジェクトメソッドには以下のようなコードが書かれています:

```4d
  //Object Method: ListBox
 If(Form event code=On Begin Drag Over)
    SET TEXT TO PASTEBOARD(arrFirstname{arrFirstname}+" "+arrLastname{arrFirstname})
 End if
```

テキストエリアのオブジェクトメソッドには以下のようなコードが書かれています:

```4d

  // Object Method: label1
If(Form event code=On Drop) // プロパティリストでドロップ可を有効化しておく必要あり
    ARRAY TEXT($signatures_at;0)
    ARRAY TEXT($nativeTypes_at;0)
    ARRAY TEXT($formatNames_at;0)
    GET PASTEBOARD DATA TYPE($signatures_at;$nativeTypes_at;$formatNames_at)
    If(Find in array($signatures_at;"com.4d.private.text.native")#-1) // ペーストボード内には4D テキストが入っている
       OBJECT Get pointer(Object current)->:=Get text from pasteboard
    End if
 End if
```

### セレクション型リストボックスからテキストエリアへ

カスタムモード・自動モードの両方のドラッグ&ドロップ機構を組み合わせることで、シンプルで強力なインターフェースを作成することができます。 この例題ではリストボックスからドラッグしてきたデータを入力テキストエリアに入れたい場合を考えます:

![](../assets/en/Desktop/dragdrop4.png)

- リストボックス側: "ドラッグ可"プロパティがカスタムに設定されており"On Begin Drag Over" イベントがチェックされている
- 入力テキストエリア側: "自動ドロップ"プロパティがチェックされている

```4d
  //リストボックスのオブジェクトメソッド
 Case of
    :(Form event code=On Begin Drag Over)
       LOAD RECORD([Clients])
       $label:=[Clients]Name+Char(CR ASCII code)+[Clients]Contact+Char(CR ASCII code)+\
       [Clients]Address1+Char(CR ASCII code)+[Clients]City+", "+[Clients]State+" "+[Clients]ZipCode)
       SET TEXT TO PASTEBOARD($label)
 End case
```

データの移動と整形は、ドラッグ&ドロップを通して行われます:

![](../assets/en/Desktop/dragdrop5.png)

### ファイルパスからテキストエリアへ

You want the user to select a file on the disk, then drag and drop it on an enterable variable (of type object) so that it displays a json description of the file.

![](../assets/en/Desktop/dragdrop6.png)

In the object method of the variable, you just write:

```4d
 #DECLARE -> $result : Integer
 Case of
 
    :(Form event code=On Drag Over)
  // Accept On Drop event only if the pasteboard contains files, reject otherwise.
       If(Get file from pasteboard(1)="") //no file in pasteboard
          $result:=-1 //reject drop
       End if
 
    :(Form event code=On Drop) //Requires Droppable action enabled from Property List
       var $path_t : Text
       var path_o : Object
       $path_t:=Get file from pasteboard(1)
       If($path_t#"")
          path_o:=Path to object($path_t)
       End if
 
 End case
```

### File paths to list box

You want the user to select files on the disk, then drag and drop them on a list box so that it displays file paths.

![](../assets/en/Desktop/dragdrop7.png)

In the list box object method, you just write:

```4d
 #DECLARE -> $result : Integer
 Case of
 
    :(Form event code=On Drag Over)
  // Accept On Drop event only if the pasteboard contains files, reject otherwise.
       If(Get file from pasteboard(1)#"") //at least one file dropped
          $result:=0 //accept drop
       Else //no file in pasteboard
          $result:=-1 //reject drop
       End if
 
    :(Form event code=On Drop) //Requires Droppable action enabled from Property List
       ARRAY TEXT(importedPath_at;0)
       var $path_t :Text
       var $index_l:=1
       Repeat
          $path_t:=Get file from pasteboard($index_l)
          If($path_t#"")
             APPEND TO ARRAY(importedPath_at;$path_t)
          End if
          $index_l:=$index_l+1
       Until($path_t="")
 End case
```

## Pasteboard commands

The [commands of the "Pasteboard" theme](../commands/theme/Pasteboard.md) can be used both for managing copy/paste actions (**Clipboard management**), as well as inter-application drag and drop actions.

4D uses two data pasteboards: one for copied (or cut) data, which is the clipboard, and the other for data being dragged and dropped.
These two pasteboards are managed using the same commands. You access one or the other depending on the context:

- The drag and drop pasteboard can only be accessed within the [`On Begin Drag Over`](../Events/onBeginDragOver.md), [`On Drag over`](../Events/onDragOver.md) or [`On Drop`](../Events/onDrop.md) form events and in the [**On Drop** database method](../commands-legacy/on-drop-database-method.md). Outside of these contexts, the drag and drop pasteboard is not available.
- The copy/paste pasteboard can be accessed in all other cases. Unlike the drag and drop pasteboard, it keeps the data that are placed in it during the entire session, so long as they are not cleared or reused.

### Types of Data

During drag and drop actions, different types of data can be placed on and read from the pasteboard. You can access a data type in several ways:

- Via its 4D signature: The 4D signature is a character string indicating a data type referenced by the 4D application. The use of 4D signatures facilitates the development of multi-platform applications since these signatures are identical under Mac OS and Windows. You will find the list of 4D signatures below.
- Via a UTI (Uniform Type Identifier, macos only): The UTI standard, specified by Apple, associates a character string with each type of native object. For example, GIF pictures have the UTI type "com.apple.gif". UTI types are published in Apple documentations as well as by the editors concerned.
- Via its number or its format name (Windows only): Under Windows, each native data type is referenced by its number ("3", "12", and so on) and a name ("Rich Text Edit"). By default, Microsoft specifies several native types called standard data formats. In addition, third-party editors can "save" format names in the system, which then attributes them a number in return. For more information about this and about native types, please refer to the Microsoft developer documentation (more particularly at http://msdn2.microsoft.com/en-us/library/ms649013.aspx).

:::note

In 4D commands, the Windows format numbers are handled as text.

:::

All the [commands of the "Pasteboard" theme](../commands/theme/Pasteboard.md) can work with each one of these data types. You can find out which data types are present in the pasteboard in each of these formats using the [`GET PASTEBOARD DATA TYPE`](../commands/get-pasteboard-data-type) command.

:::note

4-character types (TEXT, PICT or custom types) are supported for compatibility with prior versions of 4D.

:::

### 4D Signatures

Here is the list of standard 4D signatures as well as their description:

| 署名                                                                                              | 説明                            |
| ----------------------------------------------------------------------------------------------- | ----------------------------- |
| "com.4d.private.text.native"    | Text in native character set  |
| "com.4d.private.text.utf16"     | Text in Unicode character set |
| "com.4d.private.text.rtf"       | Enriched text                 |
| "com.4d.private.picture.pict"   | PICT picture format           |
| "com.4d.private.picture.png"    | PNG picture format            |
| "com.4d.private.picture.gif"    | GIF picture format            |
| "com.4d.private.picture.jfif"   | JPEG picture format           |
| "com.4d.private.picture.emf"    | EMF picture format            |
| "com.4d.private.picture.bitmap" | BITMAP picture format         |
| "com.4d.private.picture.tiff"   | TIFF picture format           |
| "com.4d.private.picture.pdf"    | PDF document                  |
| "com.4d.private.file.url"       | File pathname                 |
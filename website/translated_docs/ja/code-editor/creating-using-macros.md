---
id: creating-using-macros
title: マクロの作成と利用
---

メソッド内でマクロコマンドを利用することができます。 マクロを利用すれば、コードの入力にかかる時間を大幅に短縮することができます。

## マクロとは

マクロコマンドは 4Dコードのパーツで、どのデータベースが開かれているかにかかわらず、あらゆるメソッドのどんな場所にでも挿入することができます。 マクロにはすべてのタイプの 4Dテキスト、コマンド、定数、さらにマクロ実行時のメソッドコンテキストにより値が置換される特別なタグを記述することができます。 たとえば、マクロに `<method_name/>;` というタグを記述しておくと、マクロ挿入時にこのタグはカレントのプロジェクトメソッド名に置換されます。

マクロは 1つ以上の XMLフォーマットのテキストファイルに格納されます。 マクロはコードエディターリスト、またはエディター内のコンテキストメニュー、さらに自動補完機能から呼び出すことが可能です。

4Dマクロは XMLフォーマットで記述されます。 4Dが提供するデフォルトのマクロファイルをそのまま使用することも、変更することもできます。

## マクロの場所

4D は **Macros v2** という名前のフォルダーからマクロを読み込みます。 マクロは XMLファイルとしてこのフォルダーに配置しなければなりません。

"Macros v2" フォルダーは以下の場所に配置できます:

- マシンのアクティブ4Dフォルダー。 この場合、マクロはすべてのデータベースで共有されます。 **注:** アクティブ4Dフォルダーの位置は OS により異なります。 詳細については、*4Dランゲージリファレンス* マニュアルの [Get 4D folder](https://doc.4d.com/4Dv19R4/4D/19-R4/Get-4D-folder.301-5739515.ja.html) コマンドの説明を参照ください。
- データベースストラクチャーファイルと同階層。 マクロは、このストラクチャーにのみ読み込まれます。
- コンポーネントの場合: データベースの **Components** フォルダーと同階層。 この場合マクロは、コンポーネントがインストールされている場合のみ利用できます。

これら 3つの場所は同時に利用可能です。各場所に "Macros v2" フォルダーをインストールできます。 マクロは以下の順番でロードされます: 4Dフォルダー、ストラクチャーファイル、コンポーネント1 ... コンポーネントX。

## デフォルトマクロ


4D は、以前のバージョンの 4D におけるキーワードリストに対応するマクロをデフォルトで提供しています。 このマクロは 4Dを初回起動する際、マシンのアクティブ4Dフォルダー内の "Macros v2" フォルダーに作成される*Macros.xml* ファイルに含まれます。

このファイルを変更することができます。また、フォルダー内に別のマクロファイルを追加することもできます (後述参照)。 このフォルダーに問題が発生した場合は、フォルダーを削除すると次回の 4D起動時に新たに作成されます。

## カスタマイズしたマクロを追加する

標準のテキストエディターやプログラムを使用して、"Macros.xml" ファイルにカスタマイズしたマクロを追加できます。 またフォルダー内に、カスタマイズしたマクロを記述した XMLファイルを追加することもできます。

ローカルモードでは、4D を使用中にマクロファイルを開くことができます。 利用可能なマクロのリストは 4Dがアクティブになるたびに更新されます。 たとえば、テキストエディターを最前面にしてマクロファイルを更新し、その後メソッドの編集に戻ると、新しいマクロがコードエディターで利用可能になっています。

空およびエラーのあるマクロは表示されません。

### カスタマイズしたマクロのシンタックスを検証する

4Dのマクロコマンドファイルは XML標準に準拠していなければなりません。 つまりXML宣言 `<?xml version="1.0" ...?>` とドキュメント宣言 `<!DOCTYPE macros SYSTEM "http://www.4d.com/dtd/2007/macros.dtd">` 文がマクロファイルの先頭になければならず、そうでない場合、マクロは読み込まれません。 異なるタイプの XMLエンコーディングがサポートされています。 しかし、Mac/PC (UTF-8) 互換のエンコーディングを使用することが推奨されます。 4D はマクロファイルを検証するための DTD を提供しています。 ファイルは以下の場所にあります:

- Windows: \Resources\DTD\macros.dtd
- macOS: :Contents:Resources:DTD:macros.dtd

マクロファイルに宣言文が含まれない場合や検証に失敗する場合、マクロはロードされません。

## 4Dマクロのシンタックス

4Dマクロは "要素" と呼ばれるカスタマイズされた XMLタグを使用して構築されます。

いくつかのタグは定義の開始と終了を表し (`<tag>` と `</tag>` のようなペア)、その他のタグは実行コンテキストにより置換されます (`<tag/>`)。

XML仕様に準拠し、いくつかのタグは属性を含むことがあります。 明示されない限り属性の指定は任意であり、省略された場合はデフォルト値が使用されます。 要素および属性のシンタックスは以下の通りです:

- 開始および終了タグのペア: `<tag attribute="value"> </tag>`
- 置換されるタグ: `<tag attribute="value"/>`

要素に複数の属性を指定できる場合、スペースで区切って記述します:\
<tag attribute1="value" attribute2="value" attribute3="value">

利用可能なタグのリストと利用モードは以下の通りです:

| **要素タグ**                         | **説明**                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<macros> </macros>` | マクロファイルの開始と終了 (必須)。                                                                                                                                                                                                                                                                                                                                                               |
| `<macro> </macro>`   | マクロとその属性の定義の開始と終了。                                                                                                                                                                                                                                                                                                                                                                |
|                                  | *属性*:                                                                                                                                                                                                                                                                                                                                                                             |
|                                  | - name: メニューやコードエディターリストに表示されるマクロの名前** (必須)。                                                                                                                                                                                                                                                                                                                                      |
|                                  | - type_ahead_text: タイプアヘッド (自動補完) 機能*を使用してマクロを呼び出すために入力する文字列**。                                                                                                                                                                                                                                                                                                               |
|                                  | - in_menu: コンテキストメニュー*からマクロを呼び出すことを許可するかを指定するブール値。 値は "true" (デフォルト) または "false"。                                                                                                                                                                                                                                                                                                 |
|                                  | - type_ahead: タイプアヘッド (自動補完) 機能*を使用してマクロを呼び出すことを許可するかを指定するブール値。 値は "true" (デフォルト) または "false"。                                                                                                                                                                                                                                                                                    |
|                                  | - method_event: メソッドごとの現在の処理フェーズ (作成、閉じる等) に応じてマクロの自動呼出しを実行するために使用します。 値 = "on_load": マクロはメソッドを開くたびに実行されます, "on_save": マクロはメソッドが保存されるたびに実行されます (メソッドを閉じるまたはファイル＞保存コマンドを使用して保存する), "on_create": マクロはメソッドが作成されるたびに実行されます, "on_close": マクロはメソッドが閉じられるたびに実行されます。                                                                                                                  |
|                                  | "on_save" と "on_close" は組み合わせて使用できます — 言い換えれば、これらのイベントは更新されたメソッドが閉じられるときに両方とも生成されます。 他方、"on_create" と "on_load" が連続して実行されることはありません。 This attribute can be used, for example, to preformat methods when they are created (comments in header area) or to record information such as the date and time when they are closed.                                                    |
|                                  | - version: Used to activate the new mode of supporting text selections for the macro (see the "About the `<method>` Tag" section below). To activate this new mode, pass the value "2". If you omit this attribute or pass version="1", the former mode is kept.                                                                                                            |
|                                  | - in_toolbar: Boolean indicating if the macro must be present in the menu of the Macro button of the toolbar. Values= "true" (default) or "false".                                                                                                                                                                                                                                |
| `<selection/>`             | Tag replaced by the selected text when the macro is inserted. The selection may be empty.                                                                                                                                                                                                                                                                                         |
| `<text> </text>`     | Start and end of code that must be inserted in the method. A carriage return will be added before and after the code.                                                                                                                                                                                                                                                             |
| `<method> </method>` | Start and end of the name of the project method and its (optional) parameter. The method is executed when the macro is called. You can pass a parameter in the form ("param1;param2;..."). This parameter will be received in the method using the variables $1, $2, etc. For additional information about this tag, refer to the "About the `<method>` Tag" section below. |
| `<caret/>`                 | Location of the insertion point in the code after the macro has been inserted.                                                                                                                                                                                                                                                                                                    |
| `<user_4D/>`               | Tag replaced by the name of the current 4D user.                                                                                                                                                                                                                                                                                                                                  |
| `<user_os/>`               | Tag replaced by the current system user name.                                                                                                                                                                                                                                                                                                                                     |
| `<method_name/>`           | Tag replaced by the current project method name.                                                                                                                                                                                                                                                                                                                                  |
| `<method_path/>`           | Tag replaced by full pathname of the current project method.                                                                                                                                                                                                                                                                                                                      |
| `<date/>`                  | Tag replaced by the current date.                                                                                                                                                                                                                                                                                                                                                 |
|                                  | *Attribute*:                                                                                                                                                                                                                                                                                                                                                                      |
|                                  | - format: 4D format used to display the date. If no format is set, the default format is used. Values = number of 4D format (0 to 8).                                                                                                                                                                                                                                             |
| `<time/>`                  | Tag replaced by the current time.                                                                                                                                                                                                                                                                                                                                                 |
|                                  | *Attribute*:                                                                                                                                                                                                                                                                                                                                                                      |
|                                  | - format: 4D format used to display the time. If no format is set, the default format is used. Values = number of 4D format (0 to 6).                                                                                                                                                                                                                                             |
| `<clipboard/>`             | Tag replaced by the contents of the clipboard.                                                                                                                                                                                                                                                                                                                                    |
|                                  | *Attribute*:                                                                                                                                                                                                                                                                                                                                                                      |
|                                  | - index: Clipboard to be pasted. Values = number of the clipboard (0 to 9).                                                                                                                                                                                                                                                                                                       |

- Macros can be called using the context menu of the Code Editor or using the type-ahead function (see the following section).
- If you want to conform to XML language specifications, you must not use extended characters (accented characters, quotation marks, etc.).

Here is an example of a macro definition:

| **Content of macro**                                 | **コメント**                                                                                                                                        |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `<?xml version="1.0"...?>`                     | XML declaration                                                                                                                                 |
| `<!DOCTYPE macros SYSTEM>`                     | Document declaration                                                                                                                            |
| `<macros>`                                     | Start of macros XML file                                                                                                                        |
| `<macro name="RecordLoop">`                    | Start of macro definition and name                                                                                                              |
| `<text>`                                       | Start of macro code                                                                                                                             |
| For($i;1;Records in selection(`<Selection/>`)) | The `<Selection/>` tag will be replaced by the selected code in the 4D method at the time of macro insertion (for instance, a table name) |
| SAVE RECORD(`<Selection/>`)                    |                                                                                                                                                 |
| NEXT RECORD(`<Selection/>`)                    |                                                                                                                                                 |
| End for                                              |                                                                                                                                                 |
| `</text>`                                      | End of macro code                                                                                                                               |
| `</macro>`                                     | End of macro definition                                                                                                                         |
| `</macros>`                                    | End of macros XML file                                                                                                                          |

## About the `<method>` tag

The `<method>` tag allows you to generate and use macro-commands that execute 4D project methods. This allows developers to create sophisticated functions that can be distributed via macro-commands which are associated with components. For example, the following macro will cause the *MyMethod* method to be executed with the name of the current method as parameter:

`<method>MyMethod("<method_name/>")</method>`

The code of a called method is executed in a new process. This process is killed once the method is executed.

> The structure process remains frozen until the called method execution is completed. You must make sure that the execution is quick and that there is no risk of it blocking the application. If this occurs, use the **Ctrl+F8** (Windows) or **Command+F8** (Mac OS) command to "kill" the process.

## Calling macros

By default, macros can be called using the context menu or toolbar of the Code Editor, the autocomplete function, or a specific list at the bottom of the Code Editor window.

Note that for each macro it is possible to restrict the possibility of calling it using the context menu and/or the autocomplete function.

### Context menu and toolbar

By default, all macros can be called via the context menu of the Code Editor (using the **Insert macro** hierarchical command) or the **Macros** button of the toolbar.

The *in_menu* attribute of the `<macro>` tag is used to set whether or not the macro appears in this menu.

In the context menu, macros are displayed in the order of the "Macros.xml" file and any additional XML files. It is thus possible to change the order by modifying these files.

### Autocomplete

By default, all macros are accessible using the autocomplete (aka type-ahead) function (see [Writing a method](./write-class-method.md)). The *type_ahead* attribute of the `<macro>` tag can be used to exclude a macro from this type of operation.

**Note:** If the macro contains the `<selection/>` tag, it will not appear in the autocomplete pop-up window.

### Code Editor list

You can display your macros in a list of the Code Editor (see [Writing a method](./write-class-method.md)). Simply double-click on the name of a macro in the list in order to call it. It is not possible to exclude a specific macro from this list.

## Compatibility notes

Macro support can change from one version of 4D to another. In order to keep the different versions compatible while maintaining your customizations, 4D does not remove any previous versions. If you want to use the latest features available, you must adapt your version accordingly.

### Text selection variables for methods

It is recommended to manage text selections using the [GET MACRO PARAMETER](https://doc.4d.com/4dv19/help/command/en/page997.html) and [SET MACRO PARAMETER](https://doc.4d.com/4dv19/help/command/en/page998.html) commands. These commands can be used to overcome the partitioning of the host project/component execution spaces and thus allow the creation of components dedicated to the management of macros. In order to activate this mode for a macro, you must declare the Version attribute with the value 2 in the Macro element. In this case, 4D no longer manages the predefined variables _textSel,_textReplace, etc. and the [GET MACRO PARAMETER](https://doc.4d.com/4dv19/help/command/en/page997.html) and [SET MACRO PARAMETER](https://doc.4d.com/4dv19/help/command/en/page998.html) commands are used. This attribute must be declared as follows:

`<macro name="MyMacro" version="2">`<br/> `--- Text of the macro ---`<br/> `</macro>`

If you do not pass this attribute, the previous mode is kept.

### Incompatibilities related to the XML standard

Strict syntax rules must be observed in order for macros files to respect the XML standard. This may lead to incompatibilities with the code of macros created with previous versions and prevent the loading of XML files. The following are the main sources of malfunctioning:

- Comments of the "// my comment" type, allowed inside `<macro>` elements in previous versions of 4D, are not compatible with the XML syntax. The lines of comments must respect the standard `"<!-- my comment -->"` form.
- The `<>` symbols used more particularly for interprocess object names must be encoded. For example, the *<>params* variable must be written `&lt;>params`.
- The initial `<macros>` declaration tag could be omitted in previous versions of 4D. It is now mandatory; otherwise, the file will not be loaded.

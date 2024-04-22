---
id: propertiesForm
title: フォームプロパティ
---

---

## カラースキーム

> 配色プロパティは、macOS でのみ適用されます。

このプロパティは、フォームのカラースキームを定義します。 By default when the property is not set, the value for a color scheme is **inherited** (the form uses the scheme defined at the [application level](https://doc.4d.com/4dv19/help/command/en/page1762.html)). これは、フォームに対して以下の 2つのオプションのいずれかに変更することができます:

- dark - 暗い背景に明るいテキスト
- light - 明るい背景に暗いテキスト

> 定義されたカラースキームを CSS で上書きすることはできません。

#### JSON 文法

| 名称          | データタイプ | とりうる値           |
| ----------- | ------ | --------------- |
| colorScheme | string | "dark", "light" |

---

## CSS

このプロパティは、フォーム用に特定の CSSファイルを読み込むことを可能にします。

フォームレベルで定義された CSSファイルは、デフォルトのスタイルシートをオーバーライドします。 For more information, please refer to [Style sheets](createStylesheet.md) page.

#### JSON 文法

| 名称  | データタイプ                | とりうる値                                                                                                                                                                                                                                                                                                                           |
| --- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| css | string または collection | CSS file path(s) provided as:<li>a string (a file for both platforms)</li><li>a collection of strings (a list of files for both platform)</li><li>a collection of {"path":string;"media":"mac" \| "win"} objects </li> |

---

## Pages

各フォームは、少なくとも 2つのページで構成されています:

- ページ0 (背景ページ)
- ページ1 (メインページ)

For more information, please refer to [Form pages](forms.md#form-pages).

#### JSON 文法

| 名称    | データタイプ     | とりうる値                                                      |
| ----- | ---------- | ---------------------------------------------------------- |
| pages | collection | ページのコレクション (各ページはオブジェクトで、ページ0 は最初の要素です) |

---

## フォーム名

このプロパティはフォームそのものの名称で、4Dランゲージで名前によってフォームを参照するのに使用されます。 The form name must comply with the [rules specified for identifiers](Concepts/identifiers.md) in 4D.

#### JSON 文法

フォーム名は、form.4Dform ファイルを格納するフォルダーの名前で定義されます。 See [project architecture](Project/architecture.md#sources-folder) for more information.

---

## フォームタイプ

The form type, _i.e._ its destination, defines the features that will be available to the form. For example, [markers](properties_Markers.md) can only be set for list (output) table forms.

データベースの各テーブルは通常、少なくとも 2つのテーブルフォームを持ちます。 1つは画面上にレコードを一覧表示するためのもので、もう 1つはレコードを 1件ずつ表示するためのものです (データ入力や修正に使用):

- Output form - the _output form_ or _list form_ displays a list of records, with a single line per record. クエリの結果は出力フォームに表示され、ユーザーが行をダブルクリックすると、そのレコード用に入力フォームが表示されます。
  ![](../assets/en/FormObjects/formOutput.png)

- 入力フォーム - データ入力に使用されます。 It displays a single record per screen and typically has buttons for saving and canceling modifications to the record and for navigating from record to record (_i.e._, First Record, Last Record, Previous Record, Next Record).
  ![](../assets/en/FormObjects/formInput.png)

サポートされるタイプは、フォームのカテゴリーによって異なります:

| フォームタイプ    | JSON 文法          | 説明                                              | サポートされているフォーム       |
| ---------- | ---------------- | ----------------------------------------------- | ------------------- |
| 詳細フォーム     | detailScreen     | データ入力・修正用の表示フォーム                                | プロジェクトフォームとテーブルフォーム |
| 印刷用詳細フォーム  | detailPrinter    | 1ページにつき 1レコードの印刷レポート (請求書など) | プロジェクトフォームとテーブルフォーム |
| リストフォーム    | listScreen       | レコードを画面上に一覧表示するフォーム                             | テーブルフォーム            |
| 印刷用リストフォーム | listPrinter      | レコード一覧の印刷レポート                                   | テーブルフォーム            |
| なし         | _no destination_ | 特定の機能を持たないフォーム                                  | プロジェクトフォームとテーブルフォーム |

#### JSON 文法

| 名称          | データタイプ | とりうる値                                                        |
| ----------- | ------ | ------------------------------------------------------------ |
| destination | string | "detailScreen", "listScreen", "detailPrinter", "listPrinter" |

---

## 継承されたフォーム名

This property designates the [form to inherit](forms.md#inherited-forms) in the current form.

To inherit from a table form, set the table in the [Inherited Form Table](#inherited-form-table) property.

To remove inheritance, select `\<None>` in the Property List (or " " in JSON).

#### JSON 文法

| 名称            | データタイプ | とりうる値                                                                                    |
| ------------- | ------ | ---------------------------------------------------------------------------------------- |
| inheritedForm | string | テーブルまたはプロジェクトフォームの名前, フォームを定義する .json ファイルへの POSIXパス, またはフォームを定義するオブジェクト |

---

## 継承されたフォームテーブル

This property specifies the database table from which to [inherit a form](forms.md#inherited-forms) in the current form.

Set to `\<None>` in the Property List (or " " in JSON) to inherited from a project form.

#### JSON 文法

| 名称                 | データタイプ            | とりうる値          |
| ------------------ | ----------------- | -------------- |
| inheritedFormTable | string または number | テーブル名またはテーブル番号 |

---

## サブフォームとして公開

For a component form to be selected as a [subform](FormObjects/subform_overview.md) in a host application, it must have been explicitly shared. このプロパティが選択されていると、フォームがホストアプリケーションで公開されます。

公開されたサブフォームとして指定できるのは、プロジェクトフォームのみです。

#### JSON 文法

| 名称     | データタイプ  | とりうる値       |
| ------ | ------- | ----------- |
| shared | boolean | true, false |

---

## 配置を記憶

When the option is used, if the window is opened using the `Open form window` command with the `*` parameter, several form parameters are automatically saved by 4D when the window is closed, regardless of how they were modified during the session:

- カレントページ
- それぞれのフォームオブジェクトの配置・大きさ・表示状態 (リストボックス列のサイズと表示状態も含む)。

> This option does not take into account objects generated using the `OBJECT DUPLICATE` command. このコマンドを使用したときに使用環境を復元させるには、デベロッパーがオブジェクトの作成・定義・配置の手順を再現しなければなりません。

When this option is selected, the [Save Value](FormObjects/properties_Object.md#save-value) option is available for certain objects.

#### JSON 文法

| 名称               | データタイプ  | とりうる値       |
| ---------------- | ------- | ----------- |
| memorizeGeometry | boolean | true, false |

#### 参照

[**Save Value**](FormObjects/properties_Object.md#save-value)

---

## ウィンドウタイトル

The window title is used when the form is opened using the `Open form window` and `Open window` 4D commands in Application environment. ウィンドウタイトルはウィンドウのタイトルバーに表示されます。

You can use dynamic references to set the window titles for forms, _i.e._:

- Resourcesフォルダーに保存された、標準の XLIFF参照
- A table or field label: The syntax to apply is `<?[TableNum]FieldNum>` or `<?[TableName]FieldName>`.
- A variable or a field: The syntax to apply is `\<VariableName>` or `<[TableName]FieldName>`. フィールドや変数の現在の値がウィンドウタイトルとして表示されます。

> ウィンドウタイトルの最大文字数は 31 です。

#### JSON 文法

| 名称          | データタイプ | とりうる値               |
| ----------- | ------ | ------------------- |
| windowTitle | string | テキストまたは参照としてのウィンドウ名 |

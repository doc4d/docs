---
id: listboxOverview
title: リストボックス
---

リストボックスは複合アクティブオブジェクトで、同期化された複数列 (カラムとも呼びます) の形式でデータの表示・入力がおこなえます。 リストボックスは、エンティティセレクションやレコードセレクションなどのデータベースコンテンツのほか、コレクションや配列などのランゲージコンテンツと紐づけることができます。 データ入力、列の並べ替え、イベント管理、外観のカスタマイズ、 列の移動など、リストボックスには高度な機能が備わっています。

![](../assets/en/FormObjects/listbox.png)

リストボックスには 1つ以上の列があり、その内容が自動的に同期化されます。 理論上、列数に制限はありません (マシンのリソースに依存します)。

## 概要

### 基本のユーザー機能

実行中、リストボックスはリストとしてデータを表示し、入力を受け付けます。 To make a cell editable ([if entry is allowed for the column](#managing-entry)), simply click twice on the value that it contains:

![](../assets/en/FormObjects/listbox_edit.png)

リストボックスのセルには、複数行のテキストを入力・表示できます。 To add a line break, press **Ctrl+Carriage return** on Windows or **Option+Carriage return** on macOS.

セルにはブールやピクチャー、日付、時間、数値も表示することができます。 It is possible to sort column values by clicking on a header ([standard sort](#managing-sorts)). すべての列が自動で同期されます。

It is also possible to resize each column, and the user can modify the order of [columns](properties_ListBox.md#locked-columns-and-static-columns) and [rows](properties_Action.md#movable-rows) by moving them using the mouse, if this action is authorized. Note that list boxes can be used in [hierarchical mode](#hierarchical-list-boxes).

The user can select one or more rows using the standard shortcuts: **Shift+click** for an adjacent selection and **Ctrl+click** (Windows) or **Command+click** (macOS) for a non-adjacent selection.

### リストボックスの構成要素

リストボックスオブジェクトは、以下4つの項目で構成されます:

- リストボックスオブジェクトの全体
- 列
- 列ヘッダー
- 列フッター

![](../assets/en/FormObjects/listbox_parts.png)

それぞれが独自のオブジェクト名や固有のプロパティを持ちます。 たとえば、列の数や、交互に使用する行の背景色などはリストボックスオブジェクトのプロパティで指定し、各列の幅は列プロパティ、ヘッダーのフォントはヘッダープロパティで指定します。

リストボックスオブジェクトやリストボックスの各列に対して、オブジェクトメソッドを設定することができます。 オブジェクトメソッドの呼び出しは、次の順でおこなわれます:

1. 各列のオブジェクトメソッド
2. リストボックスのオブジェクトメソッド

The column object method gets events that occur in its [header](#list-box-headers) and [footer](#list-box-footers).

### リストボックスの型

リストボックスには複数のタイプがあり、動作やプロパティの点で異なります。 The list box type depends on its [Data Source property](properties_Object.md#data-source):

- **Arrays**: each column is bound to a 4D array. Array-based list boxes can be displayed as [hierarchical list boxes](listbox_overview.md#hierarchical-list-boxes).
- **Selection** (**Current selection** or **Named selection**): each column is bound to an expression (e.g. a field) which is evaluated for every record of the selection.
- **Collection or Entity selection**: each column is bound to an expression which is evaluated for every element of the collection or every entity of the entity selection.

> 1つのリストボックス内に、複数のデータソースタイプを組み合わせて指定することはできません。 データソースは、リストボックス作成時に定義され、 プログラムによって後から変更することはできません。

### リストボックスの管理

リストボックスオブジェクトはプロパティによってあらかじめ設定可能なほか、プログラムにより動的に管理することもできます。

The 4D Language includes a dedicated "List Box" theme for list box commands, but commands from various other themes, such as "Object properties" commands or `EDIT ITEM`, `Displayed line number` commands can also be used. Refer to the [List Box Commands Summary](https://doc.4d.com/4Dv17R6/4D/17-R6/List-Box-Commands-Summary.300-4311159.en.html) page of the _4D Language reference_ for more information.

## リストボックスオブジェクト

### 配列リストボックス

配列リストボックスでは、それぞれの列に 4D の 1次元配列を割り当てなければなりません。ポインター配列を除きすべてのタイプの配列を使用できま す。 行数は配列の要素数により決定されます。

デフォルトで 4D は各列に “ColumnX” という名前を割り当てます。 You can change it, as well as other column properties, in the [column properties](listbox_overview.md#column-specific-properties). The display format for each column can also be defined using the `OBJECT SET FORMAT` command.

> Array type list boxes can be displayed in [hierarchical mode](listbox_overview.md#hierarchical-list-boxes), with specific mechanisms.

配列タイプのリストボックスでは、入力あるいは表示される値は 4Dランゲージで制御します。 You can also associate a [choice list](properties_DataSource.md#choice-list) with a column in order to control data entry.
The values of columns are managed using high-level List box commands (such as `LISTBOX INSERT ROWS` or `LISTBOX DELETE ROWS`) as well as array manipulation commands. たとえば、列の内容を初期化するには、以下の命令を使用できます:

```4d
ARRAY TEXT(varCol;size)
```

リストを使用することもできます:

```4d
LIST TO ARRAY("ListName";varCol)
```

> **Warning**: When a list box contains several columns of different sizes, only the number of items of the smallest array (column) will be displayed. そのため、各配列の要素数は同じにしなければなりません。 リストボックスの列が一つでも空の場合 (ランゲージにより配列が正しく定義またはサイズ設定されなかったときに発生します)、リストボックスは何も表示しません。

### セレクションリストボックス

In this type of list box, each column can be associated with a field (for example `[Employees]LastName)` or an expression. The expression can be based on one or more fields (for example, `[Employees]FirstName+" "[Employees]LastName`) or it may simply be a formula (for example `String(Milliseconds)`). 式にはプロジェクトメソッド、変数、あるいは配列項目も指定できます。 You can use the `LISTBOX SET COLUMN FORMULA` and `LISTBOX INSERT COLUMN FORMULA` commands to modify columns programmatically.

The contents of each row is then evaluated according to a selection of records: the **current selection** of a table or a **named selection**.

デー タソースがカレントセレクションである場合、データベースに対しておこなわれた変更はリストボックスに自動で反映され、またリストボックスへの変更も自動で データベースに適用されます。 つまりカレントセレクションは常に両方で同じです。

### コレクションまたはエンティティセレクションリストボックス

このタイプのリストボックスでは、各カラムに式が割り当てられている必要があります。 各行の中身はコレクション要素ごと、あるいはエンティティセレクションのエンティティごとに評価されます。

Each element of the collection or each entity is available as an object that can be accessed through the [This](../Concepts/classes.md#this) keyword. A column expression can be a property path, a project method, a variable, or any formula, accessing each entity or collection element object through `This`, for example `This.<propertyPath>` (or `This.value` in case of a collection of scalar values). You can use the `LISTBOX SET COLUMN FORMULA` and `LISTBOX INSERT COLUMN FORMULA` commands to modify columns programmatically.

データソースがエンティティセレクションの場合、リストボックス側に対しておこなった変更は自動的にデータベースに保存されます。 その一方で、データベース側に対しておこなった変更は、該当エンティティがリロードされてはじめてリストボックス側に反映されます。

データソースがコレクションの場合、リストボックス内の値に変更をおこなった場合、その変更はコレクションにも反映されます。 On the other hand, if modifications are done on the collection using for example the various functions of the [Collection class](../API/CollectionClass.md), you will need to explicitely notify 4D by reassigning the collection variable to itself, so that the list box contents is refreshed. 例:

```4d
myCol:=myCol.push("new value") // リストボックスに new value を表示
```

### プロパティ一覧

提供されるプロパティはリストボックスのタイプに依存します。

| プロパティ                                                                                        | 配列リストボックス | セレクションリストボックス | コレクションまたはエンティティセレクションリストボックス |
| -------------------------------------------------------------------------------------------- | --------- | ------------- | ---------------------------- |
| [Alternate Background Color](properties_BackgroundAndBorder.md#alternate-background-color)   | X         | X             | X                            |
| [Background Color](properties_BackgroundAndBorder.md#background-color)                       | X         | X             | X                            |
| [Bold](properties_Text.md#bold)                                                              | X         | X             | X                            |
| [Background Color Expression](properties_BackgroundAndBorder.md#background-color-expression) |           | X             | X                            |
| [Border Line Style](properties_BackgroundAndBorder.md#border-line-style)                     | X         | X             | X                            |
| [Bottom](properties_CoordinatesAndSizing.md#bottom)                                          | X         | X             | X                            |
| [Class](properties_Object.md#css-class)                                                      | X         | X             | X                            |
| [Collection or entity selection](properties_Object.md#collection-or-entity-selection)        |           | X             | X                            |
| [Column Auto-Resizing](properties_ResizingOptions.md#column-auto-resizing)                   | X         | X             | X                            |
| [Current item](properties_DataSource.md#current-item)                                        |           |               | X                            |
| [Current item position](properties_DataSource.md#current-item-position)                      |           |               | X                            |
| [Data Source](properties_Object.md#data-source)                                              | X         | X             | X                            |
| [Detail Form Name](properties_ListBox.md#detail-form-name)                                   |           | X             |                              |
| [Display Headers](properties_Headers.md#display-headers)                                     | X         | X             | X                            |
| [Display Footers](properties_Footers.md#display-footers)                                     | X         | X             | X                            |
| [Double-click on row](properties_ListBox.md#double-click-on-row)                             |           | X             |                              |
| [Draggable](properties_Action.md#droppable)                                                  | X         | X             | X                            |
| [Droppable](properties_Action.md#droppable)                                                  | X         | X             | X                            |
| [Focusable](properties_Entry.md#focusable)                                                   | X         | X             | X                            |
| [Font](properties_Text.md#font)                                                              | X         | X             | X                            |
| [Font Color](properties_Text.md#font_color)                                                  | X         | X             | X                            |
| [Font Color Expression](properties_Text.md#font-color-expression)                            |           | X             | X                            |
| [Font Size](properties_Text.md#font-size)                                                    | X         | X             | X                            |
| [Height (list box)](properties_CoordinatesAndSizing.md#height)            | X         | X             | X                            |
| [Height (headers)](properties_Headers.md#height)                          | X         | X             | X                            |
| [Height (footers)](properties_Footers.md#height)                          | X         | X             | X                            |
| [Hide extra blank rows](properties_BackgroundAndBorder.md#hide-extra-blank-rows)             | X         | X             | X                            |
| [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle)                        | X         | X             | X                            |
| [Hide selection highlight](properties_Appearance.md#hide-selection-highlight)                | X         | X             | X                            |
| [Hierarchical List Box](properties_Object.md#hierarchical-list-box)                          | X         |               |                              |
| [Highlight Set](properties_ListBox.md#highlight-set)                                         |           | X             |                              |
| [Horizontal Alignment](properties_Text.md#horizontal-alignment)                              | X         | X             | X                            |
| [Horizontal Line Color](properties_Gridlines.md#horizontal-line-color)                       | X         | X             | X                            |
| [Horizontal Padding](properties_CoordinatesAndSizing.md#horizontal-padding)                  | X         | X             | X                            |
| [Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar)                      | X         | X             | X                            |
| [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing)                         | X         | X             | X                            |
| [Italic](properties_Text.md#italic)                                                          | X         | X             | X                            |
| [Left](properties_CoordinatesAndSizing.md#left)                                              | X         | X             | X                            |
| [Master Table](properties_DataSource.md#table)                                               |           | X             |                              |
| [Meta info expression](properties_Text.md#meta-info-expression)                              |           |               | X                            |
| [Method](properties_Action.md#method)                                                        | X         | X             | X                            |
| [Movable Rows](properties_Action.md#movable-rows)                                            | X         |               |                              |
| [Named Selection](properties_DataSource.md#selectionName)                                    |           | X             |                              |
| [Number of Columns](properties_ListBox.md#number-of-columns)                                 | X         | X             | X                            |
| [Number of Locked Columns](properties_ListBox.md#number-of-locked-columns)                   | X         | X             | X                            |
| [Number of Static Columns](properties_ListBox.md#number-of-static-columns)                   | X         | X             | X                            |
| [Object Name](properties_Object.md#object-name)                                              | X         | X             | X                            |
| [Right](properties_CoordinatesAndSizing.md#right)                                            | X         | X             | X                            |
| [Row Background Color Array](properties_BackgroundAndBorder.md#row-background-color-array)   | X         |               |                              |
| [Row Control Array](properties_ListBox.md#row-control-array)                                 | X         |               |                              |
| [Row Font Color Array](properties_Text.md#row-font-color-array)                              | X         |               |                              |
| [Row Height](properties_CoordinatesAndSizing.md#row-height)                                  | X         |               |                              |
| [Row Height Array](properties_CoordinatesAndSizing.md#row-height-array)                      | X         |               |                              |
| [Row Style Array](properties_Text.md#row-style-array)                                        | X         |               |                              |
| [Selected Items](properties_DataSource.md#selected-items)                                    |           |               | X                            |
| [Selection Mode](properties_ListBox.md#selection-mode)                                       | X         | X             | X                            |
| [Single-Click Edit](properties_Entry.md#single-click-edit)                                   | X         | X             | X                            |
| [Sortable](properties_Action.md#sortable)                                                    | X         | X             | X                            |
| [Standard action](properties_Action.md#standard-action)                                      | X         |               |                              |
| [Style Expression](properties_Text.md#style-expression)                                      |           | X             | X                            |
| [Top](properties_CoordinatesAndSizing.md#top)                                                | X         | X             | X                            |
| [Transparent](properties_BackgroundAndBorder.md#transparent)                                 | X         | X             | X                            |
| [Type](properties_Object.md#type)                                                            | X         | X             | X                            |
| [Underline](properties_Text.md#underline)                                                    | X         | X             | X                            |
| [Variable or Expression](properties_Object.md#variable-or-expression)                        | X         | X             |                              |
| [Vertical Alignment](properties_Text.md#vertical-alignment)                                  | X         | X             | X                            |
| [Vertical Line Color](properties_Gridlines.md#vertical-line-color)                           | X         | X             | X                            |
| [Vertical Padding](properties_CoordinatesAndSizing.md#vertical-padding)                      | X         | X             | X                            |
| [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar)                          | X         | X             | X                            |
| [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing)                             | X         | X             | X                            |
| [Visibility](properties_Display.md#visibility)                                               | X         | X             | X                            |
| [Width](properties_CoordinatesAndSizing.md#width)                                            | X         | X             | X                            |

> リストボックスの列、ヘッダーおよびフッターにもそれぞれ固有のプロパティがあります。

### フォームイベント

| フォームイベント             | Additional Properties Returned (see [Form event](https://doc.4d.com/4Dv18/4D/18/FORM-Event.301-4522191.en.html) for main properties)                                                        | コメント                                                                                                                                                              |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| On After Edit        | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                   |
| On After Keystroke   | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                   |
| On After Sort        | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[headerName](#additional-properties)</li>                                                                            | _Compound formulas cannot be sorted. <br/>(例: This.firstName + This.lastName)_ |
| On Alternative Click | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   | _配列リストボックスのみ_                                                                                                                                                     |
| On Before Data Entry | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                   |
| On Before Keystroke  | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                   |
| On Begin Drag Over   | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                   |
| On Clicked           | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                   |
| On Close Detail      | <li>[row](#additional-properties)</li>                                                                                                                                                                         | _Current Selection & Named Selection list boxes only_                                                                                         |
| On Collapse          | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   | _階層リストボックスのみ_                                                                                                                                                     |
| On Column Moved      | <li>[columnName](#additional-properties)</li><li>[newPosition](#additional-properties)</li><li>[oldPosition](#additional-properties)</li>                                                                      |                                                                                                                                                                   |
| On Column Resize     | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[newSize](#additional-properties)</li><li>[oldSize](#additional-properties)</li>                                     |                                                                                                                                                                   |
| On Data Change       | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                   |
| On Delete Action     | <li>[row](#additional-properties)</li>                                                                                                                                                                         |                                                                                                                                                                   |
| On Display Detail    | <li>[isRowSelected](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                                                         |                                                                                                                                                                   |
| On Double Clicked    | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                   |
| On Drag Over         | <li>[area](#additional-properties)</li><li>[areaName](#additional-properties)</li><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li> |                                                                                                                                                                   |
| On Drop              | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                   |
| On Expand            | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   | _階層リストボックスのみ_                                                                                                                                                     |
| On Footer Click      | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[footerName](#additional-properties)</li>                                                                            | _Arrays, Current Selection & Named Selection list boxes only_                                                                                 |
| On Getting Focus     | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   | _追加プロパティの取得はセル編集時のみ_                                                                                                                                              |
| On Header Click      | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[headerName](#additional-properties)</li>                                                                            |                                                                                                                                                                   |
| On Load              |                                                                                                                                                                                                                |                                                                                                                                                                   |
| On Losing Focus      | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   | _追加プロパティの取得はセル編集完了時のみ_                                                                                                                                            |
| On Mouse Enter       | <li>[area](#additional-properties)</li><li>[areaName](#additional-properties)</li><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li> |                                                                                                                                                                   |
| On Mouse Leave       |                                                                                                                                                                                                                |                                                                                                                                                                   |
| On Mouse Move        | <li>[area](#additional-properties)</li><li>[areaName](#additional-properties)</li><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li> |                                                                                                                                                                   |
| On Open Detail       | <li>[row](#additional-properties)</li>                                                                                                                                                                         | _Current Selection & Named Selection list boxes only_                                                                                         |
| On Row Moved         | <li>[newPosition](#additional-properties)</li><li>[oldPosition](#additional-properties)</li>                                                                                                                   | _配列リストボックスのみ_                                                                                                                                                     |
| On Selection Change  |                                                                                                                                                                                                                |                                                                                                                                                                   |
| On Scroll            | <li>[horizontalScroll](#additional-properties)</li><li>[verticalScroll](#additional-properties)</li>                                                                                                           |                                                                                                                                                                   |
| On Unload            |                                                                                                                                                                                                                |                                                                                                                                                                   |

#### 追加プロパティ

リストボックスやリストボックス列オブジェクトにて発生するフォームイベントは、次の追加プロパティを返すことがあります:

| プロパティ            | タイプ     | 説明                                                               |
| ---------------- | ------- | ---------------------------------------------------------------- |
| area             | text    | リストボックスオブジェクトエリア ("header", "footer", "cell") |
| areaName         | text    | エリアの名称                                                           |
| column           | longint | 列番号                                                              |
| columnName       | text    | 列の名称                                                             |
| footerName       | text    | フッターの名称                                                          |
| headerName       | text    | ヘッダーの名称                                                          |
| horizontalScroll | longint | 右方向スクロールの場合は正の数値、左方向の場合は負の数値                                     |
| isRowSelected    | boolean | 行が選択されていれば true、でなければ false                                      |
| newPosition      | longint | 列あるいは行の変更後の位置                                                    |
| newSize          | longint | 列または行の変更後のサイズ (ピクセル単位)                        |
| oldPosition      | longint | 列あるいは行の変更前の位置                                                    |
| oldSize          | longint | 列または行の変更前のサイズ (ピクセル単位)                        |
| row              | longint | 行番号                                                              |
| verticalScroll   | longint | 下方向スクロールの場合は正の数値、上方向の場合は負の数値                                     |

> "偽" カラムや存在しないカラムにてイベントが発生した場合には、主に空の文字列が返されます。

## リストボックス列

リストボックスは、それぞれ固有のプロパティを持つ 1つ以上の列オブジェクトから構成されています。 列を選択するには、フォームエディターでリストボックスオブジェクトが選択されているときに任意の列をクリックします:

![](../assets/en/FormObjects/listbox_column.png)

You can set standard properties (text, background color, etc.) for each column of the list box; these properties take priority over those of the list box object properties.

> You can define the [Expression type](properties_Object.md#expression-type) for array list box columns (String, Text, Number, Date, Time, Picture, Boolean, or Object).

### 列特有のプロパティ

[Alpha Format](properties_Display.md#alpha-format) - [Alternate Background Color](properties_BackgroundAndBorder.md#alternate-background-color) - [Automatic Row Height](properties_CoordinatesAndSizing.md#automatic-row-height) - [Background Color](properties_Text.md#background-color) - [Background Color Expression](properties_BackgroundAndBorder.md#background-color-expression) - [Bold](properties_Text.md#bold) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Data Type (selection and collection list box column)](properties_DataSource.md#data-type) - [Date Format](properties_Display.md#date-format) - [Default Values](properties_DataSource.md#default-values) - [Display Type](properties_Display.md#display-type) - [Enterable](properties_Entry.md#enterable) - [Entry Filter](properties_Entry.md#entry-filter) - [Excluded List](properties_RangeOfValues.md#excluded-list) - [Expression](properties_DataSource.md#expression) - [Expression Type (array list box column)](properties_Object.md#expression-type) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Padding](properties_CoordinatesAndSizing.md#horizontal-padding) - [Italic](properties_Text.md#italic) - [Invisible](properties_Display.md#visibility) - [Maximum Width](properties_CoordinatesAndSizing.md#maximum-width) - [Method](properties_Action.md#method) - [Minimum Width](properties_CoordinatesAndSizing.md#minimum-width) - [Multi-style](properties_Text.md#multi-style) - [Number Format](properties_Display.md#number-format) - [Object Name](properties_Object.md#object-name) - [Picture Format](properties_Display.md#picture-format) - [Resizable](properties_ResizingOptions.md#resizable) - [Required List](properties_RangeOfValues.md#required-list) - [Row Background Color Array](properties_BackgroundAndBorder.md#row-background-color-array) - [Row Font Color Array](properties_Text.md#row-font-color-array) - [Row Style Array](properties_Text.md#row-style-array) - [Save as](properties_DataSource.md#save-as) - [Style Expression](properties_Text.md#style-expression) - [Text when False/Text when True](properties_Display.md#text-when-false-text-when-true) - [Time Format](properties_Display.md#time-format) - [Truncate with ellipsis](properties_Display.md#truncate-with-ellipsis) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Alignment](properties_Text.md#vertical-alignment) - [Vertical Padding](properties_CoordinatesAndSizing.md#vertical-padding) - [Width](properties_CoordinatesAndSizing.md#width) - [Wordwrap](properties_Display.md#wordwrap)

### フォームイベント

| フォームイベント             | Additional Properties Returned (see [Form event](https://doc.4d.com/4Dv18/4D/18/FORM-Event.301-4522191.en.html) for main properties)                                                        | コメント                                                                                                                                                              |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| On After Edit        | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                   |
| On After Keystroke   | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                   |
| On After Sort        | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[headerName](#additional-properties)</li>                                                                            | _Compound formulas cannot be sorted. <br/>(例: This.firstName + This.lastName)_ |
| On Alternative Click | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   | _配列リストボックスのみ_                                                                                                                                                     |
| On Before Data Entry | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                   |
| On Before Keystroke  | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                   |
| On Begin Drag Over   | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                   |
| On Clicked           | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                   |
| On Column Moved      | <li>[columnName](#additional-properties)</li><li>[newPosition](#additional-properties)</li><li>[oldPosition](#additional-properties)</li>                                                                      |                                                                                                                                                                   |
| On Column Resize     | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[newSize](#additional-properties)</li><li>[oldSize](#additional-properties)</li>                                     |                                                                                                                                                                   |
| On Data Change       | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                   |
| On Double Clicked    | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                   |
| On Drag Over         | <li>[area](#additional-properties)</li><li>[areaName](#additional-properties)</li><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li> |                                                                                                                                                                   |
| On Drop              | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                   |
| On Footer Click      | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[footerName](#additional-properties)</li>                                                                            | _Arrays, Current Selection & Named Selection list boxes only_                                                                                 |
| On Getting Focus     | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   | _追加プロパティの取得はセル編集時のみ_                                                                                                                                              |
| On Header Click      | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[headerName](#additional-properties)</li>                                                                            |                                                                                                                                                                   |
| On Load              |                                                                                                                                                                                                                |                                                                                                                                                                   |
| On Losing Focus      | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   | _追加プロパティの取得はセル編集完了時のみ_                                                                                                                                            |
| On Row Moved         | <li>[newPosition](#additional-properties)</li><li>[oldPosition](#additional-properties)</li>                                                                                                                   | _配列リストボックスのみ_                                                                                                                                                     |
| On Scroll            | <li>[horizontalScroll](#additional-properties)</li><li>[verticalScroll](#additional-properties)</li>                                                                                                           |                                                                                                                                                                   |
| On Unload            |                                                                                                                                                                                                                |                                                                                                                                                                   |

## リストボックスヘッダー

> To be able to access the header properties of a list box, you must enable the [Display Headers](properties_Headers.md#display-headers) option of the list box.

ヘッダーが表示されていれば、フォームエディターでリストボックスオブジェクトが選択されているときに、リストボックスヘッダーをクリックするとヘッダーを選択できます:

![](../assets/en/FormObjects/listbox_header.png)

リストボックスの各列ヘッダー毎に標準のテキストプロパティを設定できます。設定すると、リストボックスや列に対する設定よりもこちらが優先されます。

さらに、ヘッダー特有のプロパティを設定することができます。 Specifically, an icon can be displayed in the header next to or in place of the column title, for example when performing [customized sorts](#managing-sorts).

![](../assets/en/FormObjects/lbHeaderIcon.png)

At runtime, events that occur in a header are generated in the [list box column object method](#object-methods).

When the `OBJECT SET VISIBLE` command is used with a header, it is applied to all headers, regardless of the individual element set by the command. For example, `OBJECT SET VISIBLE(*;"header3";False)` will hide all headers in the list box object to which _header3_ belongs and not simply this header.

### ヘッダー特有のプロパティ

[Bold](properties_Text.md#bold) - [Class](properties_Object.md#css-class) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Padding](properties_CoordinatesAndSizing.md#horizontal-padding) - [Icon Location](properties_TextAndPicture.md#icon-location) - [Italic](properties_Text.md#italic) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_TextAndPicture.md#picture-pathname) - [Title](properties_Object.md#title) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Alignment](properties_Text.md#vertical-alignment) - [Vertical Padding](properties_CoordinatesAndSizing.md#vertical-padding) - [Width](properties_CoordinatesAndSizing.md#width)

## リストボックスフッター

> To be able to access footer properties for a list box, you must enable the [Display Footers](properties_Footers.md#display-footers) option.

リストボックスは、追加の情報を表示するための入力を受け付けない "フッター" を持つことができます。 表形式で表示されるデータについて、合計や平均などの計算値を表示するためにフッターは通常使用されます。

フッターが表示されていれば、フォームエディターでリストボックスオブジェクトが選択されているときにフッターをクリックすることで選択できます:

![](../assets/en/FormObjects/listbox_footers.png)

リストボックスの各列フッター毎に標準のテキストプロパティを設定できます。設定すると、リストボックスや列に対する設定よりもこちらが優先されます。 さらに、フッター特有のプロパティを設定することができます。 In particular, you can insert a [custom or automatic calculation](properties_Object.md#variable-calculation).

At runtime, events that occur in a footer are generated in the [list box column object method](#object-methods).

When the `OBJECT SET VISIBLE` command is used with a footer, it is applied to all footers, regardless of the individual element set by the command. For example, `OBJECT SET VISIBLE(*;"footer3";False)` will hide all footers in the list box object to which _footer3_ belongs and not simply this footer.

### フッター特有のプロパティ

[Alpha Format](properties_Display.md#alpha-format) - [Background Color](properties_BackgroundAndBorder.md#background-color-fill-color) - [Bold](properties_Text.md#bold) - [Class](properties_Object.md#css-class) - [Date Format](properties_Display.md#date-format) - [Expression Type](properties_Object.md#expression-type) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Padding](properties_CoordinatesAndSizing.md#horizontal-padding) - [Italic](properties_Text.md#italic) - [Number Format](properties_Display.md#number-format) - [Object Name](properties_Object.md#object-name) - [Picture Format](properties_Display.md#picture-format) - [Time Format](properties_Display.md#time-format) - [Truncate with ellipsis](properties_Display.md#truncate-with-ellipsis) - [Underline](properties_Text.md#underline) - [Variable Calculation](properties_Object.md#variable-calculation) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Alignment](properties_Text.md#vertical-alignment) - [Vertical Padding](properties_CoordinatesAndSizing.md#vertical-padding) - [Width](properties_CoordinatesAndSizing.md#width) - [Wordwrap](properties_Display.md#wordwrap)

## 入力の管理

リストボックスのセルが入力可能であるには、以下の条件を満たす必要があります:

- The cell’s column must have been set as [Enterable](properties_Entry.md#enterable) (otherwise, the cells of the column can never be enterable).
- In the `On Before Data Entry` event, $0 does not return -1. When the cursor arrives in the cell, the `On Before Data Entry` event is generated in the column method. このイベントのコンテキストにおいて、$0 に -1 を設定すると、そのセルは入力不可として扱われます。 If the event was generated after **Tab** or **Shift+Tab** was pressed, the focus goes to either the next cell or the previous one, respectively. $0 が -1 でなければ (デフォルトは 0)、列は入力可であり編集モードに移行します。

2つの配列で構築されるリストボックスを考えてみましょう。1つは日付でもう 1つはテキストです。 日付配列は入力不可ですが、テキスト配列は日付が過去でない場合に入力可とします。

![](../assets/en/FormObjects/listbox_entry.png)

Here is the method of the _arrText_ column:

```4d
 Case of
    :(FORM event.code=On Before Data Entry) // a cell gets the focus
       LISTBOX GET CELL POSITION(*;"lb";$col;$row)
  // identification of cell
       If(arrDate{$row}<Current date) // if date is earlier than today
          $0:=-1 // cell is NOT enterable
       Else
  // otherwise, cell is enterable
       End if
 End case
```

The `On Before Data Entry` event is returned before `On Getting Focus`.

データの整合性を保つため、セレクション型とエンティティセレクション型のリストボックスにおいては、レコード/エンティティに対する変更はセル内の編集が確定されたときに自動的に保存されます。確定は、以下のような場合を指します:

- セルがアクティブでなくなったとき (ユーザーによるタブキー押下、クリック操作など)
- リストボックスからフォーカスが外れたとき
- フォームからフォーカスが外れたとき

データ入力・編集操作にともなって発生するイベントのシーケンスは次のようになります:

| 動作                                                                                                 | リストボックス型            | イベントシーケンス                                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A cell switches to edit mode (user action or a call to the `EDIT ITEM` command) | すべて                 | On Before Data Entry                                                                                                                                                                      |
|                                                                                                    | すべて                 | On Getting Focus                                                                                                                                                                          |
| セルの値が編集されたとき                                                                                       | すべて                 | On Before Keystroke                                                                                                                                                                       |
|                                                                                                    | すべて                 | On After Keystroke                                                                                                                                                                        |
|                                                                                                    | すべて                 | On After Edit                                                                                                                                                                             |
| ユーザーがセルを確定し、セルを移動したとき                                                                              | セレクションリストボックス       | 保存                                                                                                                                                                                        |
|                                                                                                    | レコードセレクションリストボックス   | On saving an existing record トリガー (設定されていれば)                                                                                                                           |
|                                                                                                    | セレクションリストボックス       | On Data Change(\*)                                                                                                                                                     |
|                                                                                                    | エンティティセレクションリストボックス | エンティティはオートマージオプション、オプティミスティック・ロックモードで保存されます (entity.save( ) を参照ください)。 正常に保存できた場合には、エンティティは更新され最新の状態が表示されます。 保存処理が失敗した場合、エラーが表示されます。 |
|                                                                                                    | すべて                 | On Losing Focus                                                                                                                                                                           |

(\*) エンティティセレクションリストボックスでの <code>On Data Change</code> イベントの場合:

- the [Current item](properties_DataSource.md#current-item) object contains the value before modification.
- the `This` object contains the modified value.

> コレクション/エンティティセレクション型では、式が null に評価される場合にリストボックスでのデータ入力に制約があります。 この場合、セル内の null 値を編集・削除することはできません。

## 選択行の管理

選択行の管理は、リストボックスのタイプが配列か、レコードのセレクションか、あるいはコレクション/エンティティセレクションかによって異なります。

- **Selection list box**: Selections are managed by a set, which you can modify if necessary, called `$ListboxSetX` by default (where X starts at 0 and is incremented based on the number of list boxes in the form). This set is [defined in the properties](properties_ListBox.md#highlight-set) of the list box. このセットは 4D が自動で管理します。ユーザーがリストボックス中で 1つ以上の行を選択すると、セットが即座に更新されます。 他方、リストボックスの選択をプログラムから更新するために、"セット" テーマのコマンドを使用することができます。

- **Collection/Entity selection list box**: Selections are managed through dedicated list box properties:
  - [Current item](properties_DataSource.md#current-item) is an object that will receive the selected element/entity
  - [Selected Items](properties_DataSource.md#selected-items) is a collection of selected items
  - [Current item position](properties_DataSource.md#current-item-position) returns the position of the selected element or entity.

- **Array list box**: The `LISTBOX SELECT ROW` command can be used to select one or more rows of the list box by programming.
  The [variable linked to the List box object](properties_Object.md#variable-or-expression) is used to get, set or store selections of object rows. この変数はブール配列で、4Dが自動的に作成・管理します。 この配列のサイズは、リストボックスのサイズにより決定されます。つまり、各列に関連付けられた配列のうち、最も小さな配列と同じ数の要素を持ちます。
  Each element of this array contains `True` if the corresponding line is selected and `False` otherwise. 4D は、ユーザーの動作に応じてこの配列の内容を更新します。 これとは逆に、この配列要素の値を変更して、リストボックス中の選択行を変更することができます。
  他方、この配列への要素の挿入や削除はできず、行のタイプ変更もできません。 The `Count in array` command can be used to find out the number of selected lines.
  たとえば、以下のメソッドは配列タイプのリストボックスで、最初の行の選択を切り替えます:

```4d
 ARRAY BOOLEAN(tBListBox;10)
  //tBListBox is the name of the list box variable in the form
 If(tBListBox{1}=True)
    tBListBox{1}:=False
 Else
    tBListBox{1}:=True
 End if
```

> The `OBJECT SET SCROLL POSITION` command scrolls the list box rows so that the first selected row or a specified row is displayed.

### 選択行の見た目のカスタマイズ

When the [Hide selection highlight](properties_Appearance.md#hide-selection-highlight) option is selected, you need to make list box selections visible using available interface options. ハイライトが非表示になっていても選択行は引き続き 4D によって管理されています。つまり:

- 配列タイプのリストボックスの場合、当該リストボックスにリンクしているブール配列変数から選択行を割り出します。
- For selection type list boxes, you have to check whether the current record (row) belongs to the set specified in the [Highlight Set](properties_ListBox.md#highlight-set) property of the list box.

特定された選択行は、それらの背景色やフォントカラー、フォントスタイルなどをプログラムによって調整することで、選択行を独自の方法で可視化することが可能です。 リストボックスのタイプによって、表示の管理は配列や式を使用しておこないます (後述参照)。

> You can use the `lk inherited` constant to mimic the current appearance of the list box (e.g., font color, background color, font style, etc.).

#### セレクションリストボックス

To determine which rows are selected, you have to check whether they are included in the set indicated in the [Highlight Set](properties_ListBox.md#highlight-set) property of the list box. You can then define the appearance of selected rows using one or more of the relevant [color or style expression property](#using-arrays-and-expressions).

次の場合には式が自動的に再評価されることに留意ください:

- リストボックスのセレクションが変わった場合
- リストボックスがフォーカスを得た、あるいは失った場合
- リストボックスが設置されたフォームウィンドウが最前面になった、あるいは最前面ではなくなった場合

#### 配列リストボックス

You have to parse the Boolean array [Variable or Expression](properties_Object.md#variable-or-expression) associated with the list box to determine whether rows are selected or not selected.

You can then define the appearance of selected rows using one or more of the relevant [color or style array property](#using-arrays-and-expressions).

Note that list box arrays used for defining the appearance of selected rows must be recalculated during the `On Selection Change` form event; however, you can also modify these arrays based on the following additional form events:

- `On Getting Focus` (list box property)
- `On Losing Focus` (list box property)
- `On Activate` (form property)
- `On Deactivate` (form property)
  ...depending on whether and how you want to visually represent changes of focus in selections.

##### 例題

システムのハイライトを非表示にして、リストボックスの選択行を緑の背景色で表しました:

![](../assets/en/FormObjects/listbox_styles7.png)

For an array type list box, you need to update the [Row Background Color Array](properties_BackgroundAndBorder.md#row-background-color-array) by programming. JSON フォームにおいて、リストボックスに次の行背景色配列を定義した場合:

```
	"rowFillSource": "_ListboxBackground",
```

リストボックスのオブジェクトメソッドに次のように書けます:

```4d
 Case of
    :(FORM event.code=On Selection Change)
       $n:=Size of array(LB_Arrays)
       ARRAY LONGINT(_ListboxBackground;$n) // row background colors
       For($i;1;$n)
          If(LB_Arrays{$i}=True) // selected
             _ListboxBackground{$i}:=0x0080C080 // green background
          Else // not selected
             _ListboxBackground{$i}:=lk inherited
          End if
       End for
 End case
```

For a selection type list box, to produce the same effect you can use a method to update the [Background Color Expression](properties_BackgroundAndBorder.md#background-color-expression) based on the set specified in the [Highlight Set](properties_ListBox.md#highlight-set) property.

JSON フォームにおいて、リストボックスに次のハイライトセットおよび背景色式を定義した場合:

```
	"highlightSet": "$SampleSet",
	"rowFillSource": "UI_SetColor",
```

You can write in the _UI_SetColor_ method:

```4d
 If(Is in set("$SampleSet"))
    $color:=0x0080C080 // green background
 Else
    $color:=lk inherited
 End if
 
 $0:=$color
```

> In hierarchical list boxes, break rows cannot be highlighted when the [Hide selection highlight](properties_Appearance.md#hide-selection-highlight) option is checked. 同階層のヘッダーの色は個別指定することができないため、任意のブレーク行だけをプログラムでハイライト表示する方法はありません。

## ソートの管理

リストボックスには、標準ソートとカスタムソートがあります。 リストボックスの特定の列がソートされているとき、他の列も常に自動で同期されます。

### 標準ソート

ヘッダーがクリックされると、リストボックスはデフォルトで標準ソートによる並べ替えをおこないます。 標準的な並べ替えとは、列の評価値を英数字順に並べ替え、続けてクリックされると昇順/降順を交互に切り替えます。

You can enable or disable standard user sorts by disabling the [Sortable](properties_Action.md#sortable) property of the list box (enabled by default).

標準ソートのサポートは、リストボックスのタイプに依存します:

| リストボックスタイプ          | 標準ソートのサポート | コメント                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Object の Collection | ◯          | <li>"This.a" or "This.a.b" columns are sortable.</li><li>The [list box source property](properties_Object.md#variable-or-expression) must be an [assignable expression](../Concepts/quick-tour.md#assignable-vs-non-assignable-expressions).</li>                                                                                                                                                                                                                                                                                                                                                                                                             |
| スカラー値のコレクション        | ×          | Use custom sort with [`orderBy()`](../API/CollectionClass.md#orderby) function                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| エンティティセレクション        | ◯          | <li>The [list box source property](properties_Object.md#variable-or-expression) must be an [assignable expression](../Concepts/quick-tour.md#assignable-vs-non-assignable-expressions).</li><li>Supported: sorts on object attribute properties (e.g. "This.data.city" when "data" is an object attribute)</li><li>Supported: sorts on related attributes (e.g. "This.company.name")</li><li>Not supported: sorts on object attribute properties through related attributes (e.g. "This.company.data.city"). For this, you need to use custom sort with [`orderByFormula()`](../API/EntitySelectionClass.md#orderbyformula) function (see example below)</li> |
| カレントセレクション          | ◯          | Only simple expressions are sortable (e.g. `[Table_1]Field_2`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 命名セレクション            | ×          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 配列                  | ◯          | ピクチャー配列やポインター配列と紐づけられた列はソートできません                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

### カスタムソート

The developer can set up custom sorts, for example using the [`LISTBOX SORT COLUMNS`](https://doc.4d.com/4dv19/help/command/en/page916.html) command and/or combining the [`On Header Click`](../Events/onHeaderClick) and [`On After Sort`](../Events/onAfterSort) form events and relevant 4D commands.

カスタムソートを以下のことが可能です:

- carry out multi-level sorts on several columns, thanks to the [`LISTBOX SORT COLUMNS`](https://doc.4d.com/4dv19/help/command/en/page916.html) command,
- use functions such as [`collection.orderByFormula()`](../API/CollectionClass.md#orderbyformula) or [`entitySelection.orderByFormula()`](../API/EntitySelectionClass.md#orderbyformula) to sort columns on complex criteria.

#### 例題

リレート先のオブジェクト属性のプロパティ値に基づいてリストボックスをソートします。 以下のようなストラクチャーの場合を考えます:

![](../assets/en/FormObjects/relationLB.png)

You design a list box of the entity selection type, bound to the `Form.child` expression. In the `On Load` form event, you execute `Form.child:=ds.Child.all()`.

次の 2つの列を表示します:

| 子供の名前       | 親のニックネーム                     |
| ----------- | ---------------------------- |
| `This.name` | `This.parent.extra.nickname` |

2列目の値に基づいてリストボックスをソートするには、次のコードを書きます:

```4d
If (Form event code=On Header Click)
	Form.child:=Form.child.orderByFormula("This.parent.extra.nickname"; dk ascending)
End if
```

### 列ヘッダー変数

The value of the [column header variable](properties_Object.md#variable-or-expression) allows you to manage additional information: the current sort of the column (read) and the display of the sort arrow.

- 変数が 0 のとき、列は並べ替えられておらず、矢印は表示されていません。\
  ![](../assets/en/FormObjects/sorticon0.png)

- 変数が 1 のとき、列は昇順で並べ替えられており、並べ替え矢印が表示されています。
  ![](../assets/en/FormObjects/sorticon1.png)

- 変数が 2 のとき、列は降順で並べ替えられており、並べ替え矢印が表示されています。
  ![](../assets/en/FormObjects/sorticon2.png)

> Only declared or dynamic [variables](Concepts/variables.md) can be used as header column variables. Other kinds of [expressions](Concepts/quick-tour.md#expressions) such as `Form.sortValue` are not supported.

変数の値を設定して (たとえば Header2:=2)、ソートを表す矢印の表示を強制することができます。 しかし、列のソート順は変更されません、これを処理するのは開発者の役割です。

> The [`OBJECT SET FORMAT`](https://doc.4d.com/4dv19/help/command/en/page236.html) command offers specific support for icons in list box headers, which can be useful when you want to work with a customized sort icon.

## スタイルとカラー、表示の管理

リストボックスの背景色、フォントカラー、そしてフォントスタイルを設定するためにはいくつかの方法があります:

- at the level of the [list box object properties](#list-box-objects),
- at the level of the [column properties](#list-box-columns),
- using [arrays or expressions properties](#using-arrays-and-expressions) for the list box and/or for each column,
- at the level of the text of each cell (if [multi-style text](properties_Text.md#multi-style)).

### Priority & inheritance

優先順位や継承の原理は、複数のレベルにわたって同じプロパティに異なる値が指定された場合に適用されます。

| 優先度  | 設定場所                                                       |
| ---- | ---------------------------------------------------------- |
| 優先度高 | セル単位 (マルチスタイル使用時)                       |
|      | 列の配列/メソッド                                                  |
|      | リストボックスの配列/メソッド                                            |
|      | 列のプロパティ                                                    |
|      | リストボックスのプロパティ                                              |
| 優先度低 | メタ情報式 (コレクションまたはエンティティセレクションリストボックスの場合) |

例として、リストボックスのプロパティにてフォントスタイルを設定しながら、列には行スタイル配列を使用して異なるスタイルを設定した場合、後者が有効となります。

For each attribute (style, color and background color), an **inheritance** is implemented when the default value is used:

- セル属性について: 行の属性値を受け継ぎます
- 行属性について: 列の属性値を受け継ぎます
- 列属性について: リストボックスの属性値を受け継ぎます

This way, if you want an object to inherit the attribute value from a higher level, you can use pass the `lk inherited` constant (default value) to the definition command or directly in the element of the corresponding style/color array. For example, given an array list box containing a standard font style with alternating colors:
![](../assets/en/FormObjects/listbox_styles3.png)

以下の変更を加えます:

- change the background of row 2 to red using the [Row Background Color Array](properties_BackgroundAndBorder.md#row-background-color-array) property of the list box object,
- change the style of row 4 to italics using the [Row Style Array](properties_Text.md#row-style-array) property of the list box object,
- two elements in column 5 are changed to bold using the [Row Style Array](properties_Text.md#row-style-array) property of the column 5 object,
- the 2 elements for column 1 and 2 are changed to dark blue using the [Row Background Color Array](properties_BackgroundAndBorder.md#row-background-color-array) property for the column 1 and 2 objects:

![](../assets/en/FormObjects/listbox_styles3.png)

リストボックスを元の状態に戻すには、以下の手順でおこないます:

- pass the `lk inherited` constant in element 2 of the background color arrays for columns 1 and 2: then they inherit the red background color of the row.
- pass the `lk inherited` constant in elements 3 and 4 of the style array for column 5: then they inherit the standard style, except for element 4, which changes to italics as specified in the style array of the list box.
- pass the `lk inherited` constant in element 4 of the style array for the list box in order to remove the italics style.
- pass the `lk inherited` constant in element 2 of the background color array for the list box in order to restore the original alternating color of the list box.

### 配列と式の使用

リストボックスのタイプに応じて、行のカラーやスタイル、表示について使用できるプロパティが異なります:

| プロパティ    | 配列リストボックス                                                                                  | セレクションリストボックス                                                                                | コレクションまたはエンティティセレクションリストボックス                                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 背景色      | [Row Background Color Array](properties_BackgroundAndBorder.md#row-background-color-array) | [Background Color Expression](properties_BackgroundAndBorder.md#background-color-expression) | [Background Color Expression](properties_BackgroundAndBorder.md#background-color-expression) or [Meta info expression](properties_Text.md#meta-info-expression) |
| フォントカラー  | [Row Font Color Array](properties_Text.md#row-font-color-array)                            | [Font Color Expression](properties_Text.md#font-color-expression)                            | [Font Color Expression](properties_Text.md#font-color-expression) or [Meta info expression](properties_Text.md#meta-info-expression)                            |
| フォントスタイル | [Row Style Array](properties_Text.md#row-style-array)                                      | [Style Expression](properties_Text.md#style-expression)                                      | [Style Expression](properties_Text.md#style-expression) or [Meta info expression](properties_Text.md#meta-info-expression)                                      |
| 表示       | [Row Control Array](properties_ListBox.md#row-control-array)                               | -                                                                                            | *                                                                                                                                                               |

## リストボックスの印刷

Two printing modes are available: **preview mode** - which can be used to print a list box like a form object, and **advanced mode** - which lets you control the printing of the list box object itself within the form. フォームエディターで、リストボックスオブジェクトに "印刷" アピアランスを適用できる点に留意してください。

### プレビューモード

Printing a list box in preview mode consists of directly printing the list box and the form that contains it using the standard print commands or the **Print** menu command. リストボックスはフォーム上に表示されている通りに印刷されます。 このモードでは、オブジェクトの印刷を細かく制御することはできません。とくに、表示されている以上の行を印刷することはできません。

### 詳細モード

In this mode, the printing of list boxes is carried out by programming, via the `Print object` command (project forms and table forms are supported). The `LISTBOX GET PRINT INFORMATION` command is used to control the printing of the object.

このモードでは:

- オブジェクトの高さよりも印刷する行数が少ない場合、リストボックスオブジェクトの高さは自動で減少させられます ("空白" 行は印刷されません)。 他方、オブジェクトの内容に基づき高さが自動で増大することはありません。 The size of the object actually printed can be obtained via the `LISTBOX GET PRINT INFORMATION` command.
- リストボックスオブジェクトは "そのまま" 印刷されます。言い換えれば、ヘッダーやグリッド線の表示、表示/非表示行など、現在の表示設定が考慮されます。
  These parameters also include the first row to be printed: if you call the `OBJECT SET SCROLL POSITION` command before launching the printing, the first row printed in the list box will be the one designated by the command.
- An automatic mechanism facilitates the printing of list boxes that contain more rows than it is possible to display: successive calls to `Print object` can be used to print a new set of rows each time. The `LISTBOX GET PRINT INFORMATION` command can be used to check the status of the printing while it is underway.

## 階層リストボックス

4D ではリストボックスを階層表示にするよう指定することができます。 階層リストボックスは左の列が階層状に表示されます。このタイプの表示方法は、繰り返される値や、階層に依存するデータの表示などに適用できます (国/地域/都市など)。

> Only [array type list boxes](#array-list-boxes) can be hierarchical.

階層リストボックスはデータを表示する特別な方法ですが、データの構造 (配列) は変更しません。 階層リストボックスは通常のリストボックスとまったく同じ方法で管理されます。

### 階層の指定

階層リストボックスとして指定するには、3つの方法があります:

- フォームエディターのプロパティリストを使用して階層要素を手作業で設定する (または JSON フォームを編集する)。
- フォームエディターのリストボックス管理メニューを使用して階層を生成する。
- Use the [LISTBOX SET HIERARCHY](https://doc.4d.com/4Dv17R5/4D/17-R5/LISTBOX-SET-HIERARCHY.301-4127969.en.html) and [LISTBOX GET HIERARCHY](https://doc.4d.com/4Dv17R5/4D/17-R5/LISTBOX-GET-HIERARCHY.301-4127970.en.html) commands, described in the _4D Language Reference_ manual.

#### "階層リストボックス" プロパティによる階層化

このプロパティを使用してリストボックスの階層表示を設定します。 In the JSON form, this feature is triggered [when the column _dataSource_ property value is an array](properties_Object.md#array-list-box), i.e. a collection.

Additional options (**Variable 1...10**) are available when the _Hierarchical List Box_ option is selected, corresponding to each element of the _dataSource_ array to use as break column. 入力欄に値が入力されると、新しい入力欄が追加されます。 10個までの変数を指定できます。 これらの変数は先頭列に表示される階層のレベルを設定します。

Variable 1 は常に、リストボックスの先頭列の変数名に対応します (この 2つの値は自動でバインドされます)。 Variable 1欄は常に表示され、入力できます。 例: country。
Variable 2 も常に表示され、入力できます。これは二番目の階層レベルを指定します。 例: regions。
三番目以降の欄は、その前の番号の欄が入力されると表示されます。 例えば: counties、cities等。 最大10レベルまで指定できます。 ある階層レベルの値を削除すると、その後の階層レベルが繰り上がります。

最後の変数に複数の同じ値が存在しても、この変数が階層になることはありません。 たとえば、arr1 に A A A B B B、arr2 に 1 1 1 2 2 2、そしてarr3 に X X Y Y Y Z が値として設定されている場合、A、B、1、そして 2 は階層で表示できますが、X と Y は階層になりません:

![](../assets/en/FormObjects/property_hierarchicalListBox.png)

この原則は階層がひとつだけ設定されている場合には適用されません。この場合、同じ値はグループ化されます。

> 既存のリストボックスで階層を設定した場合、(最初のものを除き) これらの列を削除または非表示にしなければなりません。でないと、それらはリストボックス中で重複して表示されます。 エディターのポップアップメニューを使用して階層を設定すると (階層リストボックス参照)、不要な列は自動でリストボックスから取り除かれます。

#### コンテキストメニューを使用した階層化

When you select at least one column in addition to the first one in a list box object (of the array type) in the form editor, the **Create hierarchy** command is available in the context menu:

![](../assets/en/FormObjects/listbox_hierarchy1.png)

このコマンドは階層化のショートカットです。 このコマンドを選択すると、以下のアクションが実行されます:

- The **Hierarchical list box** option is checked for the object in the Property List.
- その列の変数が階層を指定するために使用されます。 既に設定されていた変数は置き換えられます。
- (先頭列を除き) 選択された列はリストボックス内に表示されなくなります。

例: 左から国、地域、都市、人口列が設定されたリストボックスがあります。 When Country, Region and City are selected, if you choose **Create hierarchy** in the context menu, a three-level hierarchy is created in the first column, columns 2 and 3 are removed and the Population column becomes the second:

![](../assets/en/FormObjects/listbox_hierarchy2.png)

##### 階層をキャンセル

When the first column is selected and already specified as hierarchical, you can use the **Cancel hierarchy** command. このコマンドを選択すると以下のアクションが実行されます:

- The **Hierarchical list box** option is deselected for the object,
- 2番目以降の階層レベルが削除され、通常の列としてリストボックスに追加されます。

### 動作

階層リストボックスを含むフォームが最初に開かれる際、デフォルトですべての行が展開されています。

配列中で値が繰り返されていると、ブレーク行と階層 "ノード" がリストボックスに自動で追加されます。 たとえば、リストボックスに都市に関する 4つの配列が含まれていて、それぞれ国、地域、都市名、人口データが含まれているとします:

![](../assets/en/FormObjects/hierarch1.png)

リストボックスが階層形式で表示されると (先頭3つの配列が階層化されている場合)、以下のように表示されます:

![](../assets/en/FormObjects/hierarch2.png)

階層を正しく構築するためには、事前に配列をソートしなければなりません。 If, for example, an array contains the data AAABBAACC, the hierarchy obtained is:
\>    A
\>    B
\>    A
\>    C

階層 "ノード" を展開したり折りたたんだりするには、ノード上をクリックします。 If you **Alt+click** (Windows) or **Option+click** (macOS) on the node, all its sub-elements will be expanded or collapsed as well. These operations can also be carried out by programming using the `LISTBOX EXPAND` and `LISTBOX COLLAPSE` commands.

階層リストボックスに日付や時間型の値を表示する際、それらは Short system format で表示されます。

#### ソートの管理

階層モードのリストボックスにおいて、(リストボックス列のヘッダーをクリックして実行される) 標準の並べ替えは常に以下のようにおこなわれます:

- まず階層列 (一番目の列) のすべてのレベルが自動で昇順にソートされます。
- 次にクリックされた列の値を使用して、昇順または降順にソートが実行されます。
- すべての列が同期されます。
- その後の非階層列のソート時には、階層列の最後のレベルのみがソートされます。 この列のソートはそのヘッダーをクリックすることでおこなえます。

例として、まだソートされていない以下のリストボックスがあります:

![](../assets/en/FormObjects/hierarch3.png)

"Population" ヘッダーをクリックして人口に基づき昇順あるいは降順でソートを行おこなうと、データは以下のように表示されます:

![](../assets/en/FormObjects/hierarch4.png)

As for all list boxes, you can [disable the standard sort mechanism](properties_Action.md#sortable) and manage sorts using programming.

#### 選択行とその位置の管理

階層リストボックスは、ノードの展開 / 折りたたみ状態により、スクリーン上に表示される行数が変わります。 しかし配列の行数が変わるわけではありません。 表示が変わるだけでデータに変更はありません。 この原則を理解することは重要です。階層リストボックスに対するプログラムによる管理は常に配列データに対しておこなわれるのであり、表示されたデータに対しておこなわれるわけではないからです。 とくに、自動で追加されるブレーク行は、表示オプション配列では考慮されません (後述参照)。

例として以下の配列を見てみましょう:

![](../assets/en/FormObjects/hierarch5.png)

これらの配列が階層的に表示されると、2つのブレーク行が追加されるため、"Quimper" 行は 2行目ではなく 4行目に表示されます:

![](../assets/en/FormObjects/hierarch6.png)

階層であってもなくても、リストボックスにどのようにデータが表示されているかにかかわらず、"Quimper" が含まれる行を太字にしたい場合はステートメント Style{2} = bold を使用しなければなりません。 配列中の行の位置のみが考慮されます。

この原則は以下のものを管理する内部的な配列に適用されます:

- カラー

- 背景色

- スタイル

- 非表示行

- 選択行

たとえば、Rennes を含む行を選択するには、以下のように書きます:

```4d
 ->MyListbox{3}:=True
```

Non-hierarchical representation:
![](../assets/en/FormObjects/hierarch7.png)
Hierarchical representation:
![](../assets/en/FormObjects/hierarch8.png)

> 親が折りたたまれているために行が非表示になっていると、それらは選択から除外されます。 (直接あるいはスクロールによって) 表示されている行のみを選択できます。 言い換えれば、行を選択かつ隠された状態にすることはできません。

As with selections, the `LISTBOX GET CELL POSITION` command will return the same values for a hierarchical list box and a non-hierarchical list box. This means that in both of the examples below, `LISTBOX GET CELL POSITION` will return the same position: (3;2).

_Non-hierarchical representation:_
![](../assets/en/FormObjects/hierarch9.png)

_Hierarchical representation:_
![](../assets/en/FormObjects/hierarch10.png)

サブ階層のすべての行が隠されているとき、ブレーク行は自動で隠されます。 先の例題で 1から 3行目までが隠されていると、"Brittany" のブレーク行は表示されません。

#### ブレーク行の管理

If the user selects a break row, `LISTBOX GET CELL POSITION` returns the first occurrence of the row in the corresponding array. 以下のケースで:

![](../assets/en/FormObjects/hierarch11.png)

... `LISTBOX GET CELL POSITION` returns (2;4). To select a break row by programming, you will need to use the `LISTBOX SELECT BREAK` command.

ブレーク行はリストボックスのグラフィカルな表示 (スタイルやカラー) を管理する内部的な配列では考慮されません。 しかし、オブジェクトのグラフィックを管理するオブジェクト (フォーム) テーマのコマンドを使用してブレーク行の表示を変更できます。 階層を構成する配列に対して、適切なコマンドを実行します。

以下のリストボックスを例題とします (割り当てた配列名は括弧内に記載しています):

_Non-hierarchical representation:_
![](../assets/en/FormObjects/hierarch12.png)

_Hierarchical representation:_
![](../assets/en/FormObjects/hierarch13.png)

In hierarchical mode, break levels are not taken into account by the style modification arrays named `tStyle` and `tColors`. ブレークレベルでカラーやスタイルを変更するには、以下のステートメントを実行します:

```4d
 OBJECT SET RGB COLORS(T1;0x0000FF;0xB0B0B0)
 OBJECT SET FONT STYLE(T2;Bold)
```

> このコンテキストでは、配列に割り当てられたオブジェクトがないため、オブジェクトプロパティコマンドで動作するのは、配列変数を使用したシンタックスのみです。

結果:

![](../assets/en/FormObjects/hierarch14.png)

#### 展開/折りたたみ管理の最適化

You can optimize hierarchical list boxes display and management using the `On Expand` and `On Collapse` form events.

階層リストボックスはその配列の内容から構築されます。そのためこれらの配列すべてがメモリにロードされる必要があります。 This makes it difficult to build large hierarchical list boxes based on arrays generated from data (through the `SELECTION TO ARRAY` command), not only because of the display speed but also the memory used.

Using the `On Expand` and `On Collapse` form events can overcome these constraints: for example, you can display only part of the hierarchy and load/unload the arrays on the fly, based on user actions. In the context of these events, the `LISTBOX GET CELL POSITION` command returns the cell where the user clicked in order to expand or collapse a row.

この場合、開発者がコードを使用して配列を空にしたり値を埋めたりしなければなりません。 実装する際注意すべき原則は以下のとおりです:

- リストボックスが表示される際、先頭の配列のみ値を埋めます。 However, you must create a second array with empty values so that the list box displays the expand/collapse buttons:
  ![](../assets/en/FormObjects/hierarch15.png)

- When a user clicks on an expand button, you can process the `On Expand` event. The `LISTBOX GET CELL POSITION` command returns the cell concerned and lets you build the appropriate hierarchy: you fill the first array with the repeated values and the second with the values sent from the `SELECTION TO ARRAY` command and you insert as many rows as needed in the list box using the `LISTBOX INSERT ROWS` command.
  ![](../assets/en/FormObjects/hierarch16.png)

- When a user clicks on a collapse button, you can process the `On Collapse` event. The `LISTBOX GET CELL POSITION` command returns the cell concerned: you remove as many rows as needed from the list box using the `LISTBOX DELETE ROWS` command.

## オブジェクト配列の使用

リストボックスのカラムはオブジェクト配列を扱えます。 オブジェクト配列は異なる種類のデータを格納できるので、この強力な機能を使用すれば、単一のカラム内の行ごとに異なる入力タイプを混ぜたり、様々なウィジェットを表示したりといったことができるようになります。 たとえば、最初の行にテキスト入力を挿入し、二行目にチェックボックスを、そして産業目にドロップダウンを挿入する、と言ったことが可能になります。 また、オブジェクト配列は、ボタンやカラーピッカーと言った新しいウィジェットへのアクセスも可能にします。

以下のリストボックスはオブジェクト配列を使用してデザインされました:

![](../assets/en/FormObjects/listbox_column_objectArray.png)

### オブジェクト配列カラムの設定

To assign an object array to a list box column, you just need to set the object array name in either the Property list ("Variable Name" field), or using the [LISTBOX INSERT COLUMN](https://doc.4d.com/4Dv17R6/4D/17-R6/LISTBOX-INSERT-COLUMN.301-4311153.en.html) command, like with any array-based column. プロパティリスト内では、カラムにおいて "式タイプ" にオブジェクトを選択できます:

![](../assets/en/FormObjects/listbox_column_objectArray_config.png)

オブジェクトカラムに対しては、座標、サイズ、スタイルなどに関連した標準のプロパティが使用可能です。 プロパティリストを使用して定義する方法のほかにも、オブジェクト型のリストボックスカラムのそれぞれの行に対してスタイル、フォントカラー、背景色、表示状態をプログラムで定義することもできます。 これらのタイプのカラムは非表示にすることも可能です。

しかしながら、データソーステーマは、オブジェクト型のリストボックスカラムに対しては選択できません。 実際、カラムの各セルの中身は、それに対応するオブジェクト配列の要素の属性に基づいています。 配列の各オブジェクト要素には、以下を定義できます:

値の型 (必須): テキスト、カラー、イベント、他<br />
値そのもの (任意): 入力/出力に使用<br />
セルの内容表示 (任意): ボタン、リスト、他<br />
追加の設定 (任意): 値の型によります<br />
これらのプロパティを定義するには、適切な属性をオブジェクト内に設定する必要があります (使用可能な属性は以下に一覧としてまとめてあります)。 たとえば、以下ような簡単なコードを使用してオブジェクトカラム内に "Hello World!" 書き込むことができます:

```4d
ARRAY OBJECT(obColumn;0) // カラム配列
 C_OBJECT($ob) // 第一要素
 OB SET($ob;"valueType";"text") // 値の型を定義 (必須)
 OB SET($ob;"value";"Hello World!") // 値を定義
 APPEND TO ARRAY(obColumn;$ob)  
```

![](../assets/en/FormObjects/listbox_column_objectArray_helloWorld.png)

> 表示フォーマットと入力フィルターはオブジェクトカラムに対しては設定できません。 これらは値の型に応じて自動的に変わるからです。

#### valueTypeとデータ表示

リストボックスカラムにオブジェクト配列が割り当てられているとき、セルの表示・入力・編集の方法は、配列の要素の valueType 属性に基づきます。 次の valueType の値がサポートされています:

- "text": テキスト値
- "real": for a numeric value that can include separators like a `\<space>`, `<.>`, or `<,>`
- "integer": 整数値
- "boolean": true/false 値
- "color": 背景色を定義
- "event": ラベル付ボタンを表示

4D uses default widgets with regards to the "valueType" value (i.e., a "text" is displayed as a text input widget, a "boolean" as a check box), but alternate displays are also available through options (_e.g._, a real can also be represented as a drop-down menu). 以下の一覧はそれぞれの値の型に対してのデフォルトの表示方法と、他に選択可能な表示方の一覧を表しています:

| valueType | デフォルトのウィジェット                               | 他に選択可能なウィジェット                                                                                   |
| --------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| text      | テキスト入力                                     | ドロップダウンメニュー (指定リスト) またはコンボボックス (選択リスト)                    |
| 実数        | 管理されたテキスト入力 (数字とセパレーター) | ドロップダウンメニュー (指定リスト) またはコンボボックス (選択リスト)                    |
| integer   | 管理されたテキスト入力 (数字のみ)      | ドロップダウンメニュー (指定リスト) またはコンボボックス (選択リスト) またはスリーステートチェックボックス |
| boolean   | チェックボックス                                   | ドロップダウンメニュー (指定リスト)                                                          |
| color     | 背景色                                        | text                                                                                            |
| event     | ラベル付ボタン                                    |                                                                                                 |
|           |                                            | すべてのウィジェットには、単位切り替えボタン または 省略ボタン を追加でセルに付属させることができます                                            |

セルの表示とオプションは、オブジェクト内の特定の属性を使用することによって設定できます (以下を参照ください)。

#### 表示フォーマットと入力フィルター

オブジェクト型のリストボックスのカラムにおいては、表示フォーマットと入力フィルターを設定することはできません。 これらは値の型に応じて自動的に定義されます。 どのように定義されるかについては、以下一覧にまとめてあります:

| 値の型     | デフォルトのフォーマット                                                | 入力コントロール                               |
| ------- | ----------------------------------------------------------- | -------------------------------------- |
| text    | オブジェクト内で定義されているものと同じ                                        | 制限なし                                   |
| 実数      | オブジェクト内で定義されているものと同じ (システムの小数点セパレーターを使用) | "0-9" と "." と "-"      |
|         |                                                             | min>=0 の場合、"0-9" と "." |
| integer | オブジェクト内で定義されているものと同じ                                        | "0-9" と "-"                            |
|         |                                                             | min>=0 の場合、"0-9"                       |
| Boolean | チェックボックス                                                    | N/A                                    |
| color   | N/A                                                         | N/A                                    |
| event   | N/A                                                         | N/A                                    |

### 属性

オブジェクト配列の各要素は、セルの中身とデータ表示を定義する一つ以上の属性を格納するオブジェクトです (上記の例を参照ください)。

唯一必須の属性は "valueType" であり、サポートされる値は "text"、"real"、"integer"、"boolean"、"color" そして "event"です。 以下の表には、リストボックスオブジェクト配列において "valueType"の値に応じてサポートされるすべての属性がまとめてあります (他の属性はすべて無視されます)。 表示フォーマットに関しては、その更に下に詳細な説明と例があります。

|                       | valueType                                   | text | 実数 | integer | boolean | color | event |
| --------------------- | ------------------------------------------- | ---- | -- | ------- | ------- | ----- | ----- |
| _属性_                  | _Description_                               |      |    |         |         |       |       |
| value                 | セルの値 (入力または出力)           | ○    | ○  | ○       |         |       |       |
| min                   | 最小値                                         |      | ○  | ○       |         |       |       |
| max                   | 最大値                                         |      | ○  | ○       |         |       |       |
| behavior              | "スリーステート" の値                                |      |    | ○       |         |       |       |
| requiredList          | オブジェクト内で定義されたドロップダウンリスト                     | ○    | ○  | ○       |         |       |       |
| choiceList            | オブジェクト内で定義されたコンボボックス                        | ○    | ○  | ○       |         |       |       |
| requiredListReference | 4D リスト参照 ("saveAs"の値による) | ○    | ○  | ○       |         |       |       |
| requiredListName      | 4D リスト名 ("saveAs"の値による)  | ○    | ○  | ○       |         |       |       |
| saveAs                | "reference" または "value"                     | ○    | ○  | ○       |         |       |       |
| choiceListReference   | 4D リスト参照、コンボボックスを表示                         | ○    | ○  | ○       |         |       |       |
| choiceListName        | 4D リスト名、コンボボックスを表示                          | ○    | ○  | ○       |         |       |       |
| unitList              | X要素の配列                                      | ○    | ○  | ○       |         |       |       |
| unitReference         | 選択された要素のインデックス                              | ○    | ○  | ○       |         |       |       |
| unitsListReference    | 単位の4D リスト参照                                 | ○    | ○  | ○       |         |       |       |
| unitsListName         | 単位の4D リスト名                                  | ○    | ○  | ○       |         |       |       |
| alternateButton       | 切り替えボタンを追加                                  | ○    | ○  | ○       | ○       | ○     |       |

#### value

セルの値は "value" 属性に保存されています。 この属性は入力と出力に使用されるほか、 リストを使用する際のデフォルト値を定義するのにも使用できます (以下参照)。

```4d
 ARRAY OBJECT(obColumn;0) //column array
 C_OBJECT($ob1)
 $entry:="Hello world!"
 OB SET($ob1;"valueType";"text")
 OB SET($ob1;"value";$entry) // if the user enters a new value, $entry will contain the edited value
 C_OBJECT($ob2)
 OB SET($ob2;"valueType";"real")
 OB SET($ob2;"value";2/3)
 C_OBJECT($ob3)
 OB SET($ob3;"valueType";"boolean")
 OB SET($ob3;"value";True)
 
 APPEND TO ARRAY(obColumn;$ob1)
 APPEND TO ARRAY(obColumn;$ob2)
 APPEND TO ARRAY(obColumn;$ob3)
```

![](../assets/en/FormObjects/listbox_column_objectArray_helloWorld_value.png)

> null 値はサポートされており、空のセルとして表示されます。

#### min と max

"valueType" が"real" または "integer" であるとき、min と max 属性もオブジェクトに設定できます (値は適切な範囲で、かつ、valueType と同じ型である必要があります)。

これらの属性を使用すると入力値の範囲を管理することができます。 セルが評価されたとき (フォーカスを失ったとき)、入力された値が min の値より低い場合、または max の値より大きい場合には、その値は拒否されます。 この場合、入力をする前の値が保持され、tip として説明が表示されます。

```4d
 C_OBJECT($ob3)
 $entry3:=2015
 OB SET($ob3;"valueType";"integer")
 OB SET($ob3;"value";$entry3)
 OB SET($ob3;"min";2000)
 OB SET($ob3;"max";3000)
```

![](../assets/en/FormObjects/listbox_column_objectArray_helloWorld_minMax.png)

#### behavior

behavior 属性は、値の通常の表示とは異なる表示方法を提供します。 4D v15では、一つだけ他の表示方法が用意されています:

| 属性       | 使用可能な値      | valueType | 説明                                                                                                          |
| -------- | ----------- | --------- | ----------------------------------------------------------------------------------------------------------- |
| behavior | threeStates | integer   | スリーステートチェックボックスを数値として表現します。<br/>2=セミチェック、1=チェック、0=チェックされていない、-1=非表示、-2=チェックなしが無効化、-3=チェックが無効化、-4=セミチェックが無効化 |

```4d
 C_OBJECT($ob3)
 OB SET($ob3;"valueType";"integer")

 OB SET($ob3;"value";-3)
 C_OBJECT($ob4)
 OB SET($ob4;"valueType";"integer")
 OB SET($ob4;"value";-3)
 OB SET($ob4;"behavior";"threeStates")
```

![](../assets/en/FormObjects/listbox_column_objectArray_helloWorld_behavior.png)

#### requiredList と choiceList

"choiceList" または "requiredList" 属性がオブジェクト内に存在しているとき、テキスト入力は以下の属性に応じて、ドロップダウンリストまたはコンボボックスで置き換えられます:

- 属性が "choiceList" の場合、セルはコンボボックスとして表示されます。 これはつまり、ユーザーは値を選択、または入力できるということです。
- 属性が "requiredList" の場合、セルはドロップダウンリストとして表示されます。これはつまり、ユーザーはリストに提供されている値からどれか一つを選択するしかないということです。

どちらの場合においても、"value" 属性を使用してウィジェット内の値を事前に選択することができます。

> ウィジェットの値は配列を通して定義されます。 既存の 4Dリストをウィジェットに割り当てたい場合、"requiredListReference"、"requiredListName"、"choiceListReference"、または "choiceListName" 属性を使用する必要があります。

例:

- 選択肢が二つ ("Open" または "Closed") しかないドロップダウンリストを表示したい場合を考えます。 デフォルトでは "Closed" が選択された状態にしたいとします:

```4d
	ARRAY TEXT($RequiredList;0)
	APPEND TO ARRAY($RequiredList;"Open")
	APPEND TO ARRAY($RequiredList;"Closed")
	C_OBJECT($ob)
	OB SET($ob;"valueType";"text")
	OB SET($ob;"value";"Closed")
	OB SET ARRAY($ob;"requiredList";$RequiredList)
```

![](../assets/en/FormObjects/listbox_column_objectArray_helloWorld_openClosed.png)

- 整数値であればすべて受け入れ可能な状態にしておいた上で、もっとも一般的な値を提示するためにコンボボックスを表示したい場合を考えます:

```4d
	ARRAY LONGINT($ChoiceList;0)
	APPEND TO ARRAY($ChoiceList;5)
	APPEND TO ARRAY($ChoiceList;10)
	APPEND TO ARRAY($ChoiceList;20)
	APPEND TO ARRAY($ChoiceList;50)
	APPEND TO ARRAY($ChoiceList;100)
	C_OBJECT($ob)
	OB SET($ob;"valueType";"integer")
	OB SET($ob;"value";10) //10 as default value
	OB SET ARRAY($ob;"choiceList";$ChoiceList)
```

![](../assets/en/FormObjects/listbox_column_objectArray_helloWorld_commonValues.png)

#### requiredListName と requiredListReference

"requiredListName" と "requiredListReference" 属性を使用すると、デザインモード (ツールボックス内) またはプログラミングによって (<code>New list</code> コマンドを使用して) 4Dで定義されたリストをリストボックスセル内において使用することが出来るようになります。 セルはドロップダウンリストとして表示されるようになります。 これはつまり、ユーザーはリスト内に提供された値のどれか一つのみを選択できるということを意味します。

"requiredListName" または "requiredListReference" は、リストの作成元に応じて使い分けます。リストがツールボックスで作成された場合、リスト名を渡します。リストがプログラミングによって定義された場合は、リストの参照を渡します。 どちらの場合においても、"value" 属性を使用してウィジェット内の値を事前に選択することができます。

> - これらの値を単純な配列を通して定義したい場合は、"requiredList" 属性を使用する必要があります。
> - リストが実数値を表すテキストを含んでいる場合、小数点はローカル設定に関わらず、ピリオド (".") である必要があります。例: "17.6" "1234.456"

例:

- ツールボックスで定義された "colors" リスト ("blue"、"yellow"、そして "green" の値を格納) に基づいたドロップダウンリストを表示し、値として保存し、デフォルトの表示は "blue" にしたい場合を考えます:

![](../assets/en/FormObjects/listbox_column_objectArray_colors.png)

```4d
	C_OBJECT($ob)
	OB SET($ob;"valueType";"text")
	OB SET($ob;"saveAs";"value")
	OB SET($ob;"value";"blue")
	OB SET($ob;"requiredListName";"colors")	
```

![](../assets/en/FormObjects/listbox_column_objectArray_colorsResult.png)

- プログラミングによって定義されたリストに基づいたドロップダウンリストを表示し、参照として保存したい場合を考えます:

```4d
	<>List:=New list
	APPEND TO LIST(<>List;"Paris";1)
	APPEND TO LIST(<>List;"London";2)
	APPEND TO LIST(<>List;"Berlin";3)
	APPEND TO LIST(<>List;"Madrid";4)
	C_OBJECT($ob)
	OB SET($ob;"valueType";"integer")
	OB SET($ob;"saveAs";"reference")
	OB SET($ob;"value";2) //displays London by default
	OB SET($ob;"requiredListReference";<>List)
```

```
![](../assets/en/FormObjects/listbox_column_objectArray_cities.png)
```

#### choiceListName と choiceListReference

"choiceListName" と "choiceListReference" 属性を使用すると、デザインモード (ツールボックス内) またはプログラミングによって (<code>New list</code> コマンドを使用して) 4Dで定義されたリストをリストボックスセル内において使用することが出来るようになります。 セルはコンボボックスとして表示されるようになります。これはつまり、ユーザーは値を選択、または入力できるということを意味します。

"choiceListName" または "choiceListReference" は、リストの作成元に応じて使い分けます。リストがツールボックスで作成された場合、リスト名を渡しま す。リストがプログラミングによって定義された場合は、リストの参照を渡します。 どちらの場合においても、"value" 属性を使用してウィジェット内の値を事前に選択することができます。

> - これらの値を単純な配列を通して定義したい場合は、"choiceList" 属性を使用する必要があります。
> - リストが実数値を表すテキストを含んでいる場合、小数点はローカル設定に関わらず、ピリオド (".") である必要があります。例: "17.6" "1234.456"

例:

ツールボックスで定義された "colors" リスト ("blue"、"yellow"、そして "green" の値を格納) に基づいたドロップダウンリストを表示し、値として保存し、デフォルトの表示は "green" にしたい場合を考えます:

![](../assets/en/FormObjects/listbox_column_objectArray_colors.png)

```4d
 C_OBJECT($ob)
 OB SET($ob;"valueType";"text")
 OB SET($ob;"value";"blue")
 OB SET($ob;"choiceListName";"colors")
```

![](../assets/en/FormObjects/listbox_column_objectArray_colorsResult.png)

#### unitsList、unitsListName、 unitsListReference と unitReference

You can use specific attributes to add units associated with cell values (_e.g._: "10 cm", "20 pixels", etc.). 単位リストを定義するためには、以下の属性のどれか一つを使用します:

- "unitsList": 利用可能な単位 (例: "cm"、"inches"、"km"、"miles"、他) を定義するのに使用する x 要素を格納した配列。 オブジェクト内で単位を定義するためには、この属性を使用します。
- "unitsListReference": 利用可能な単位を含んだ 4Dリストへの参照。 Use this attribute to define units with a 4D list created with the [New list](https://doc.4d.com/4Dv15/4D/15.6/New-list.301-3818474.en.html) command.
- "unitsListName": 利用可能な単位を含んだデザインモードで作成された 4Dリスト名。 ツールボックスで作成された 4Dリストで単位を定義するためには、この属性を使用します。

単位リストが定義された方法に関わらず、以下の属性を関連付けることができます:

- "unitReference": "unitList"、"unitsListReference" または "unitsListName" の値リスト内で選択された項目へのインデックス (1からx) を格納する単一の値。

カレントの単位は、ボタンとして表示されます。このボタンは、クリックするたびに "unitList"、"unitsListReference" または "unitsListName" の値を切り替えていきます (例: "pixels" -> "rows" -> "cm" -> "pixels" -> 等)。

例:

数値の入力と、その後に可能性のある二つの単位 ("lines" または "pixels") を続けて表示したい場合を考えます。 カレントの値は "2" + "lines" と、 オブジェクト内で直接定義された値 ("unitsList" 属性) を使用するものとします:

```4d
ARRAY TEXT($_units;0)
APPEND TO ARRAY($_units;"lines")
APPEND TO ARRAY($_units;"pixels")
C_OBJECT($ob)
OB SET($ob;"valueType";"integer")
OB SET($ob;"value";2) // 2 "units"
OB SET($ob;"unitReference";1) //"lines"
OB SET ARRAY($ob;"unitsList";$_units)
```

![](../assets/en/FormObjects/listbox_column_objectArray_unitList.png)

#### alternateButton

If you want to add an ellipsis button [...] to a cell, you just need to pass the "alternateButton" with the True value in the object. 省略ボタンは自動的にセル内に表示されます。

When this button is clicked by a user, an `On Alternate Click` event will be generated, and you will be able to handle it however you want (see the "Event management" paragraph for more information).

例:

```4d
C_OBJECT($ob1)
$entry:="Hello world!"
OB SET($ob;"valueType";"text")
OB SET($ob;"alternateButton";true)
OB SET($ob;"value";$entry)
```

![](../assets/en/FormObjects/listbox_column_objectArray_alternateButton.png)

#### color valueType

"color" valueType を使用すると、色、または色を表すテキストを表示することができます。

- 値が数字の場合、色付けされた長方形がセル内に表示されます。 例:

  ```4d
  C_OBJECT($ob4)
  OB SET($ob4;"valueType";"color")
  OB SET($ob4;"value";0x00FF0000)
  ```

![](../assets/en/FormObjects/listbox_column_objectArray_colorValue.png)

- If the value is a text, then the text is displayed (_e.g._: "value";"Automatic").

#### event valueType

The "event" valueType displays a simple button that generates an `On Clicked` event when clicked. データまたは値を渡す/返すことはできません。

オプションとして、"label" 属性を渡すことができます。

例:

```4d
C_OBJECT($ob)
OB SET($ob;"valueType";"event")
OB SET($ob;"label";"Edit...")
```

![](../assets/en/FormObjects/listbox_column_objectArray_eventValueType.png)

### イベント管理

オブジェクトリストボックス配列を使用している際には、複数のイベントを管理することができます:

- **On Data Change**: An `On Data Change` event is triggered when any value has been modified either:
  - テキスト入力
  - ドロップダウンリスト
  - コンボボックスエリア
  - 単位ボタン (値 x が値 x+1 へとスイッチしたとき)
  - チェックボックス (チェック/チェックなしの状態がスイッチしたとき)
- **On Clicked**: When the user clicks on a button installed using the "event" _valueType_ attribute, an `On Clicked` event will be generated. このイベントはプログラマーによって管理されます。
- **On Alternative Click**: When the user clicks on an ellipsis button ("alternateButton" attribute), an `On Alternative Click` event will be generated. このイベントはプログラマーによって管理されます。

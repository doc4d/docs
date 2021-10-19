---
id: configuring
title: 4D View Pro エリアの設定
---

4D View Pro エリアのプロパティは、プロパティリストを利用して設定することが可能です。 スプレッドシートプロパティはランゲージにより設定します。

## フォームエリアプロパティ

**オブジェクト名**、[**変数あるいは式**](#4d-view-pro-フォームオブジェクト変数)、**アピアランス**、**アクション**、**イベント** などの [4D View Pro オブジェクトプロパティ](FormObjects/viewProArea_overview.md#プロパティ一覧) は、エリアのプロパティリストを使って設定できます。

![](assets/en/ViewPro/vpPropertyList.PNG)



### ユーザーインターフェースの選択

4D View Pro のフォームエリアで使用するインターフェースは、**プロパティリスト** の **アピアランス** から選択できます:

![](assets/en/ViewPro/vpUserInterface.PNG)

> また、[`userInterface`](FormObjects/properties_Appearance.md#ユーザーインターフェース) および [`withFormulaBar`](FormObjects/properties_Appearance.md#フォーミュラバーを表示) ("ツールバー" インターフェースのみ) の JSONプロパティを使用することもできます。


インターフェースにより、基本的な編集とデータ操作がおこなえます。 ユーザーによる編集は、ユーザーによってドキュメントが保存されたときに 4D View Pro オブジェクトに保存されます。

#### リボン

![](assets/en/ViewPro/vpRibbon.PNG)

#### ツールバー

ツールバー型インターフェースを有効化すると [**フォーミュラバーを表示**](FormObjects/properties_Appearance.md#フォーミュラバーを表示) オプションが表示されます。 これを選択すると、ツールバーのすぐ下にフォーミュラバーが表示されます。

フォーミュラバーが表示された状態:

![](assets/en/ViewPro/vpToolbar.PNG)

#### 機能

リボン型、ツールバー型のいずれのインターフェースでも、関連機能はタブにグループ分けされます:

| タブ     | アクション           | リボン型インターフェース | ツールバー型インターフェース |
| ------ | --------------- |:------------:|:--------------:|
| ファイル   | ファイル操作          |      ○       |                |
| ホーム    | テキストの書式など       |      ○       |       ○        |
| 挿入     | アイテムの追加         |      ○       |       ○        |
| フォーミュラ | フォーミュラの計算とライブラリ |      ○       |       ○        |
| データ    | データ操作           |      ○       |       ○        |
| 表示     | 表示の設定           |      ○       |       ○        |
| 設定     | スプレッドシートの設定     |      ○       |                |



## フォームイベント

4D View Pro エリアのプロパティリスト内では、以下のフォームイベントが利用可能です。

一部のイベントは (すべてのアクティブオブジェクトで利用可能な) 標準のフォームイベントであり、一部は 4D View Pro 専用のフォームイベントです。 また一部の標準フォームイベントは、4D View Pro エリアにおいて生成された場合、[`FORM Event`](https://doc.4d.com/4dv19/help/command/ja/page1606.html) コマンドが返すオブジェクトに追加の情報を提供します。 以下の表は標準イベントと、4D View Pro 専用または追加情報を提供するイベントの一覧です:

| 標準の 4Dイベント                                      | 4D View Pro 専用、または追加情報を返すイベント                         |
| ----------------------------------------------- | ----------------------------------------------------- |
| [On Load](../Events/onLoad.md)                  | [On VP Ready](../Events/onVpReady.md)                 |
| [On Getting Focus](../Events/onGettingFocus.md) | [On Clicked](../Events/onClicked.md)                  |
| [On Losing Focus](../Events/onLosingFocus.md)   | [On Double Clicked](../Events/onDoubleClicked.md)     |
| [On Unload](../Events/onUnload.md)              | [On Header Click](../Events/onHeaderClick.md)         |
|                                                 | [On After Edit](../Events/onAfterEdit.md)             |
|                                                 | [On Selection Change](../Events/onSelectionChange.md) |
|                                                 | [On Column Resize](../Events/onColumnResize.md)       |
|                                                 | [On Row Resize](../Events/onRowResize.md)             |
|                                                 | [On VP Range Changed](../Events/onVpRangeChanged.md)  |

## シートオプション

4D View Pro シートオプションオブジェクトを使って、4D View Pro エリアの様々なオプションをコントロールすることができます。 このオブジェクトは以下のコマンドで操作します:

*   [VP SET SHEET OPTIONS](method-list.md#vp-set-sheet-options)
*   [VP Get sheet options](method-list.md#vp-get-sheet-options)

### シートのアピアランス

| プロパティ                |                        | タイプ     | 説明                                                                                                                                                                                                                                                                                    |
| -------------------- | ---------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| allowCellOverflow    |                        | boolean | セルに収まらないデータを隣の空のセルにはみ出し表示するかどうかを指定します                                                                                                                                                                                                                                                 |
| sheetTabColor        |                        | string  | シートタブの色を指定するカラー文字列 (例: "red"、"#FFFF00"、"rgb(255,0,0)"、"Accent 5")                                                                                                                                                                                                                     |
| frozenlineColor      |                        | string  | 固定化された線の色を指定するカラー文字列 (例: "red"、"#FFFF00"、"rgb(255,0,0)"、"Accent 5")                                                                                                                                                                                                                   |
| clipBoardOptions     |                        | longint | クリップボードオプション。 利用可能な値: `vk clipboard paste options all`, `vk clipboard paste options formatting`, `vk clipboard paste options formulas`, `vk clipboard paste options formulas and formatting`, `vk clipboard paste options values`, `vk clipboard paste options values and formatting` |
| gridline             |                        | object  | 枠線のオプション                                                                                                                                                                                                                                                                              |
|                      | color                  | string  | 枠線の色を表すカラー文字列 (例: "red"、"#FFFF00"、"rgb(255,0,0)"、"Accent 5")                                                                                                                                                                                                                          |
|                      | showVerticalGridline   | boolean | 垂直の枠線を表示するかどうかを指定します。                                                                                                                                                                                                                                                                 |
|                      | showHorizontalGridline | boolean | 水平の枠線を表示するかどうかを指定します。                                                                                                                                                                                                                                                                 |
| rowHeaderVisible     |                        | boolean | 行ヘッダーを表示するかどうかを指定します。                                                                                                                                                                                                                                                                 |
| colHeaderVisible     |                        | boolean | 列ヘッダーを表示するかどうかを指定します。                                                                                                                                                                                                                                                                 |
| rowHeaderAutoText    |                        | longint | 行ヘッダーが文字を表示するか、数字を表示するか、あるいは空かを指定します。 利用可能な値: `vk header auto text blank`, `vk header auto text letters`, `vk header auto text numbers`                                                                                                                                               |
| colHeaderAutoText    |                        | longint | 列ヘッダーが文字を表示するか、数字を表示するか、あるいは空かを指定します。 利用可能な値: `vk header auto text blank`, `vk header auto text letters`, `vk header auto text numbers`                                                                                                                                               |
| selectionBackColor   |                        | string  | シートにおける選択範囲の背景色。 (RGBAフォーマット推奨)                                                                                                                                                                                                                                                       |
| selectionBorderColor |                        | string  | シートにおける選択範囲の枠線の色。                                                                                                                                                                                                                                                                     |
| sheetAreaOffset      |                        | object  | シートエリアのオフセットオプション                                                                                                                                                                                                                                                                     |
|                      | left                   | longint | シートの、ホストからの左オフセット                                                                                                                                                                                                                                                                     |
|                      | top                    | longint | シートの、ホストからの上オフセット                                                                                                                                                                                                                                                                     |
> いずれのプロパティも任意です。

### シートの保護

シート全体をロック (保護) するには、*isProtected* プロパティを **true** に設定するだけです。 その上で、[locked](#レイアウト) セルスタイルプロパティを個別に設定することで、特定のセルをロック解除することができます。


| プロパティ             |                          | タイプ     | 説明                                                                |
| ----------------- | ------------------------ | ------- | ----------------------------------------------------------------- |
| isProtected       |                          | boolean | シート上で保護状態とされているセルが編集可能かどうかを指定します。                                 |
| protectionOptions |                          | object  | ユーザーにより編集可能な要素を指定します。 null の場合、protectionOptions パラメーターはリセットされます。 |
|                   | allowSelectLockedCells   | boolean | ロックされたセルをユーザーが選択できるかどうかを指定します (任意)。 デフォルトは true。                  |
|                   | allowSelectUnlockedCells | boolean | ロック解除されたセルをユーザーが選択できるかどうかを指定します (任意)。 デフォルトは true。                |
|                   | allowSort                | boolean | ユーザーによるレンジの並べ替えが可能かどうかを指定します (任意)。 デフォルトは false。                  |
|                   | allowFilter              | boolean | ユーザーによるレンジのフィルタリングが可能かどうかを指定します (任意)。 デフォルトは false。               |
|                   | allowEditObjects         | boolean | フローティングオブジェクトをユーザーが編集できるかどうかを指定します (任意)。 デフォルトは false。            |
|                   | allowResizeRows          | boolean | ユーザーが行をリサイズできるかどうかを指定します (任意)。 デフォルトは false。                      |
|                   | allowResizeColumns       | boolean | ユーザーが列をリサイズできるかどうかを指定します (任意)。 デフォルトは false。                      |
|                   | allowDragInsertRows      | boolean | ユーザーがドラッグ操作で行を挿入できるかどうかを指定します (任意)。 デフォルトは false。                 |
|                   | allowDragInsertColumns   | boolean | ユーザーがドラッグ操作で列を挿入できるかどうかを指定します (任意)。 デフォルトは false。                 |
|                   | allowInsertRows          | boolean | ユーザーが行を挿入できるかどうかを指定します (任意)。 デフォルトは false。                        |
|                   | allowInsertColumns       | boolean | ユーザーが列を挿入できるかどうかを指定します (任意)。 デフォルトは false。                        |
|                   | allowDeleteRows          | boolean | ユーザーが行を削除できるかどうかを指定します (任意)。 デフォルトは false。                        |
|                   | allowDeleteColumns       | boolean | ユーザーが列を削除できるかどうかを指定します (任意)。 デフォルトは false。                        |
> いずれのプロパティも任意です。


## セルフォーマット


フォーマットパターン (表示形式) を定義することで、4D View Pro ドキュメントのコンテンツを想定通りに表示することができます。 フォーマットは、選択された 4D View Pro の [インターフェース](#ユーザーインターフェースの選択) を使用するか、[VP SET VALUE](method-list.md#vp-set-value) または [VP SET NUM VALUE](method-list.md#vp-set-num-value) メソッドを使用して設定します。

4D View Pro には数値、日付、時間、そしてテキスト用のビルトインのフォーマットがありますが、カスタムパターンを作成することで、特殊文字やコードを使ったフォーマットでセルのコンテンツを表示することができます。

たとえば、請求書において [VP SET VALUE](method-list.md#vp-set-value) あるいは [VP SET NUM VALUE](method-list.md#vp-set-num-value) メソッドを使用して金額を入力している場合、数値の桁数とは関係なく (つまり金額が $5.00 だろうと $5,000.00 だろうと) 通貨記号 ($, €, ¥, など) を同じ位置に整列させたい場合があるかもしれません。 この場合、フォーマット文字を使用してパターン _($* #,##0.00)_ を指定することで、以下のように表示させることができます:

![](assets/en/ViewPro/apx_vpCellFormat1.PNG)

カスタムのフォーマットパターンを作成する場合、データの表示 のみが変更されるという点に注意してください。 データの値そのものは変わりません。

### 数値とテキストのフォーマット

数値フォーマットはすべての数値型 (例: 正の数、負の数、ゼロ) に対して適用されます。


| 文字        | 説明                                                                                                                                                                 | 例題                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| 0         | ゼロを表示する桁のプレースホルダー                                                                                                                                                  | #.00 は 1.1 を 1.10 と表示します。                                                 |
| .         | 小数点を表示します                                                                                                                                                          | 0.00 は 1999 を 1999.00 と表示します。                                             |
| ,         | 数値内に千区切りのカンマを表示します。<p><p> 数値記号 "#" あるいはゼロに挟まれたカンマがフォーマットに含まれる場合、3桁ごとにカンマで区切られます。 桁のプレースホルダーの後にくるカンマは、数値を 1000 で割ります。 | #,0 は 12200000 を 12,200,000 と表示します。                                       |
| \_      | アンダーバーに続く文字の幅をスキップします。                                                                                                                                             | \_( のようにカッコなどと組み合わせることで、左や右にスペースを追加します。                                 |
| @         | テキストのフォーマット文字。 セル内のすべてのテキストにフォーマットを適用します。                                                                                                                          | "\[Red]@" はテキスト値に対して赤のフォントカラーを適用します。                                     |
| *         | 列幅いっぱいまで、後に続く文字を繰り返します。                                                                                                                                            | 0*- は、数値の後にセルの幅いっぱいまでダッシュを繰り返します。対して、*0 をフォーマットの前につけると、先頭に 0 が複数表示されます。 |
| " "       | 引用符にはさまれたテキストを、解釈せずにそのまま表示します。                                                                                                                                     | "8%" は 8% と表示されます。                                                        |
| %         | 数値を百分率で表示します。                                                                                                                                                      | 8% は、.08 として表示されます。                                                       |
| \#      | 追加のゼロを表示しない、桁のプレースホルダー。 もしプレースホルダーの数以上に小数点以下の桁数があった場合、それらの数字は丸められます。                                                                                               | #.# は 1.54 を 1.5 として表示します。                                                |
| ?         | 追加のゼロの分のスペースを残すが、そのゼロは表示しない桁のプレースホルダー。 通常、数値を小数点の位置で揃えるために使用されます。                                                                                                  | $?? は最低 2桁のスペースを確保し、1桁の数値が混じっていても 2桁の場所に $記号が並ぶように指定します。                  |
| \        | 後に続く文字を表示します。                                                                                                                                                      | #.00\? は 123 を 123.00? として表示します。                                         |
| /         | 数値に対して使用した場合、分数として表記します。 テキスト、日付、時刻に対して使用した場合、それらをそのまま表示します。                                                                                                       | #/# は .75 を 3/4 として表示します。                                                 |
| \[ ]     | 条件つき書式を作成します。                                                                                                                                                      | \[>100]\[GREEN]#,##0;\[<=-100]\[YELLOW]#,##0;\[BLUE]#,##0            |
| E         | 指数表記のフォーマット。                                                                                                                                                       | #E+# - は 1,500,500 を 2E+6 として表示します。                                       |
| \[color] | テキストまたは数値を指定カラーで表示します。                                                                                                                                             | \[Green]###.##\[Red]-###.###                                            |


#### 例題


```4d
// セルの値を $125,571.35 と表示する設定
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";125571.35;"format";"_($* #,##0.00_)")
```

### 日付と時間のフォーマット

4D View Pro では IS0 8601 の日付と時間パターンを示す以下の定数を提供しています:

| 定数                                        | 値                                    | 説明                                                                                                                                                                                |
| ----------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `vk pattern full date time`               | "_fullDateTimePattern_"              | カレント言語設定における ISO 8601 フォーマットの完全な日付と時間。<p><p>アメリカ合衆国でのデフォルトパターン: "dddd, dd MMMM yyyy HH:mm:ss"                                       |
| `vk pattern long date`                    | "_longDatePattern_"                  | カレント言語設定における ISO 8601 フォーマットの完全な日付。<p><p>アメリカ合衆国でのデフォルトパターン: "dddd, dd MMMM yyyy"                                                   |
| `vk pattern long time`                    | "_longTimePattern_"                  | カレント言語設定における ISO 8601 フォーマットの時間。<p><p>アメリカ合衆国でのデフォルトパターン: "HH:mm:ss"                                                                |
| `vk pattern month day`                    | "_monthDayPattern_"                  | カレント言語設定における ISO 8601 フォーマットの月日の日付。<p><p>アメリカ合衆国でのデフォルトパターン: "MMMM dd"                                                             |
| `vk pattern short date`                   | "_shortDatePattern_"                 | カレント言語設定における省略形の ISO 8601 フォーマットの日付。<p><p>アメリカ合衆国でのデフォルトパターン: "MM/dd/yyyy"                                                        |
| `vk pattern short time`                   | "_shortTimePattern_"                 | カレント言語設定における省略形の ISO 8601 フォーマットの時間。<p><p>アメリカ合衆国でのデフォルトパターン: "HH:mm"                                                             |
| `vk pattern sortable date time`           | "_sortableDateTimePattern_"          | カレント言語設定における、並べ替え可能な ISO 8601 フォーマットの日付と時間。<p><p>アメリカ合衆国でのデフォルトパターン: "yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss"          |
| `vk pattern universal sortable date time` | "_universalSortableDateTimePattern_" | カレント言語設定における、UTCを使用した並べ替え可能な ISO 8601 フォーマットの日付と時間。<p><p>アメリカ合衆国でのデフォルトパターン: "yyyy\'-\'MM\'-\'dd HH\':\'mm\':\'ss\'Z\'" |
| `vk pattern year month`                   | "_yearMonthPattern_"                 | カレント言語設定における ISO 8601 フォーマットの年月。<p><p>アメリカ合衆国でのデフォルトパターン: "yyyy MMMM"                                                             |


#### 例題


```4d
// セルの値を特定の日付と時間として表示する設定
VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";!2024-12-18!);"time";?14:30:10?;"format";vk pattern full date time))
```

### カスタムの日付と時間のフォーマット

カレント言語設定における日付と時間のカスタムパターンを作成したい場合、以下のコードを組み合わせて使用することができます:


|    | コード<br>(文字の大小の区別なし) | 説明                            | 例題                |
| -- | ------------------------- | ----------------------------- | ----------------- |
| 日付 |                           |                               | (January 1, 2019) |
|    | m                         | 先頭のゼロなしの月表示                   | 1                 |
|    | mm                        | 先頭のゼロありの月表示                   | 01                |
|    | mmm                       | 短い月名                          | Jan               |
|    | mmmm                      | 長い月名                          | January           |
|    | d                         | 先頭のゼロなしの日付表示                  | 1                 |
|    | dd                        | 先頭のゼロありの日付表示                  | 01                |
|    | ddd                       | 短い曜日名                         | Tue               |
|    | dddd                      | 長い曜日名                         | Tuesday           |
|    | yy                        | 短い年表示                         | 19                |
|    | yyyy                      | 長い年表示                         | 2019              |
| 時間 |                           |                               | (2:03:05 PM)      |
|    | h                         | 先頭のゼロなしの時間。 0-23の値            | 2                 |
|    | hh                        | 先頭のゼロありの時間。 00-23の値           | 02                |
|    | m                         | 先頭のゼロなしの分数。 0-59の値            | 3                 |
|    | mm                        | 先頭のゼロありの分数。 00-59の値           | 03                |
|    | s                         | 先頭のゼロなしの秒数。 0-59の値            | 5                 |
|    | ss                        | 先頭のゼロありの秒数。 00-59の値           | 05                |
|    | \[h]                     | 経過時間の時間数                      | 14 (24 を超える表示も可能) |
|    | \[mm]                    | 経過時間の分数                       | 843               |
|    | \[ss]                    | 経過時間の秒数                       | 50585             |
|    | AM/PM                     | 午前/午後。 省略された場合、24時間表記が適用されます。 | PM                |
> 'm' のコードはその位置とパターンに応じて解釈されます。 If it's immediately after 'h' or 'hh' or immediately before 's' or 'ss', it will be interpreted as minutes, otherwise it will be interpreted as months.

### Additional symbols

In addition to the special characters and codes described in the previous sections, there are additional characters and symbols that can be used in your format patterns. These additional characters and symbols do not require a \ or "" and do not impact the interpretation of the format pattern. They appear "as-is" within the pattern.

| 文字      | 説明                                      | 例題                   |
| ------- | --------------------------------------- | -------------------- |
| + and - | Plus and minus signs                    | ### + ### = ###,### |
| ( )     | Left and right parenthesis              | (-###.##)            |
| :       | Colon                                   | hh:mm:ss             |
| ^       | Caret                                   | #\^#                |
| '       | Apostrophe                              | '######              |
| { }     | Curly brackets                          | {###,###,###}        |
| < >     | Less-than and greater than signs        | ## >##              |
| =       | Equal sign                              | #+#=##               |
| /       | Forward slash. 数値に対して使用した場合、分数として表記します。 | mm/dd/yyyy           |
| !       | Exclamation point                       | $###.00!             |
| &       | Ampersand                               | "Hello" & "Welcome"  |
| ~       | Tilde                                   | ~##                  |
|         | Space character                         |                      |
| €       | Euro                                    | €###.00              |
| £       | British Pound                           | £###.00              |
| ¥       | Japanese Yen                            | ¥###.00              |
| $       | Dollar sign                             | $###.00              |
| ¢       | Cent sign                               | .00¢                 |



## Print Attributes

4D View Pro print attributes allow you to control all aspects of printing 4D View Pro areas. These attributes are handled by the following commands:

*   [VP SET PRINT INFO](method-list.md#vp-set-print-info)
*   [VP Get print info](method-list.md#vp-get-print-info)

### Columns / Rows

Column and row attributes are used to specify the beginning, end, and repetition of columns and rows.

| プロパティ             | タイプ  | 説明                                                                                                         |
| ----------------- | ---- | ---------------------------------------------------------------------------------------------------------- |
| columnEnd         | 倍長整数 | The last column to print in a cell range. Default value = -1 (all columns)                                 |
| columnStart       | 倍長整数 | The first column to print in a cell range. Default value = -1 (all columns)                                |
| repeatColumnEnd   | 倍長整数 | The last column of a range of columns to print on the left of each page. Default value = -1 (all columns)  |
| repeatColumnStart | 倍長整数 | The first column of a range of columns to print on the left of each page. Default value = -1 (all columns) |
| repeatRowEnd      | 倍長整数 | The last row of a range of rows to print on the top of each page. Default value = -1 (all rows)            |
| repeatRowStart    | 倍長整数 | The first row of a range of rows to print at the top of each page. Default value = -1 (all rows)           |
| rowEnd            | 倍長整数 | The last row to print in a cell range. Default value = -1 (all rows)                                       |
| rowStart          | 倍長整数 | The first row to print in a cell range. Default value = -1 (all rows)                                      |

### Headers / Footers

Header and footer attributes are used to specify text or images in the left, right, and center header/footer sections.

| プロパティ             | タイプ                  | 説明                                                         |
| ----------------- | -------------------- | ---------------------------------------------------------- |
| footerCenter      | text                 | The text and format of the center footer on printed pages. |
| footerCenterImage | picture &#124; text* | The image for the center section of the footer.            |
| footerLeft        | text                 | The text and format of the left footer on printed pages.   |
| footerLeftImage   | picture &#124; text* | The image for the left section of the footer.              |
| footerRight       | text                 | The text and format of the right footer on printed pages.  |
| footerRightImage  | picture &#124; text* | The image for the right section of the footer.             |
| headerCenter      | text                 | The text and format of the center header on printed pages. |
| headerCenterImage | picture &#124; text* | The image for the center section of the header.            |
| headerLeft        | text                 | The text and format of the left header on printed pages.   |
| headerLeftImage   | picture &#124; text* | The image for the left section of the header.              |
| headerRight       | text                 | The text and format of the right header on printed pages.  |
| headerRightImage  | picture &#124; text* | The image for the right section of the header.             |

\* If using text type, pass the filepath (absolute or relative) of the image. If you pass a relative path, the file should be located next to the database structure file. In Windows, the file extension must be indicated. No matter the type used to set an image, the image itself (not a reference) is stored in the 4D View Pro area and is returned by [VP Get print info](method-list.md#vp-get-print-info).

### Special Characters

The following special characters allow the automatic addition or formatting of information in the header and footer when the 4D View Pro area is printed.


| 文字 | 説明                               | 例題                                                                    | 戻り値                                               |
| -- | -------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------- |
| &  | Escape character                 | (see examples below)                                                  |                                                   |
| P  | Current page                     | printInfo.headerLeft:="This is page &P."                              | This is page 5.|                                  |
| N  | Page count                       | printInfo.headerLeft:="There are &N pages."                           | There are 10 pages.                               |
| D  | Current date (yyyy/mm/dd format) | printInfo.headerLeft:="It is &D."                                     | It is 2015/6/19.                                  |
| T  | 現在の時刻                            | printInfo.headerLeft:="It is &T."                                     | It is 16:30:36.                                   |
| G  | ピクチャー                            | printInfo.headerLeftImage:=smiley<br>printInfo.headerLeft:="&G" | ![](assets/en/ViewPro/apx_vpPrintAttributes1.PNG) |
| S  | Strikethrough                    | printInfo.headerLeft:="&SThis is text."                               | ~~This is text.~~                                 |
| U  | 下線                               | printInfo.headerLeft:="&UThis is text."                               | <ins>This is text.</ins>                         |
| B  | 太字                               | printInfo.headerLeft:="&BThis is text."                               | **This is text.**                                 |
| I  | イタリック                            | printInfo.headerLeft:="&IThis is text."                               | *This is text.*                                   |
| "  | Font prefix                      | printInfo.headerLeft:="&\"Lucida Console\"&14This is text."         | ![](assets/en/ViewPro/apx_vpPrintAttributes2.PNG) |
| K  | Text Color prefix                | printInfo.headerLeft:="&KFF0000This is text."                         | <span style="color:red">This is text</span>.      |
| F  | Workbook name                    | printInfo.headerLeft:="&F"                                            | 2019 Monthly Revenue Forecasts                    |
| A  | Spreadsheet name                 | printInfo.headerLeft:="&A"                                            | June 2019 revenue forecast                        |

### Margins

Margin attributes are used to specify the 4D View Pro area margins for printing. Expressed in hundreds of an inch.

| プロパティ  |        | タイプ    | 説明                                                          |
| ------ | ------ | ------ | ----------------------------------------------------------- |
| margin |        | object | The print margins                                           |
|        | top    | 倍長整数   | Top margin, in hundredths of an inch. Default value = 75    |
|        | bottom | 倍長整数   | Bottom margin, in hundredths of an inch. Default value = 75 |
|        | left   | 倍長整数   | Left margin, in hundredths of an inch. Default value = 70   |
|        | right  | 倍長整数   | Right margin, in hundredths of an inch. Default value = 70  |
|        | header | 倍長整数   | Header offset, in hundredths of an inch. Default value = 30 |
|        | footer | 倍長整数   | Footer offset, in hundredths of an inch. Default value = 30 |

### 方向

Orientation attributes are used to specify the direction the printed page layout.
> This attribute defines rendering information only.

| プロパティ       | タイプ  | 説明                                                                                                                        |
| ----------- | ---- | ------------------------------------------------------------------------------------------------------------------------- |
| orientation | 倍長整数 | Page orientation. Available values: `vk print page orientation landscape`, `vk print page orientation portrait` (default) |

### Page

Page attributes are used to specify general document print settings.

| プロパティ           | タイプ     | 説明                                                                                                                                                                                                  |
| --------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| blackAndWhite   | boolean | Printing in black and white only. <p>Default value = false</p><p>**Note**: PDFs are not affected by this attribute. Colors in PDFs remain.</p>                                                                                                                 |
| centering       | 倍長整数    | How the contents are centered on the printed page. Available values: `vk print centering both`, `vk print centering horizontal`, `vk print centering none` (default), `vk print centering vertical` |
| firstPageNumber | 倍長整数    | The page number to print on the first page.<p>Default value = 1                                                                                                             |
| pageOrder       | 倍長整数    | The order pages are printed. Available values: `vk print page order auto` (default), `vk print page order down then over`, `vk print page order over then down`.                                    |
| pageRange       | text    | The range of pages for printing                                                                                                                                                                     |
| qualityFactor   | 倍長整数    | The quality factor for printing (1 - 8).  The higher the quality factor, the better the printing quality, however printing performance may be affected.<p>Default value = 2</p>                    |
| useMax          | boolean | Only columns and rows with data are printed.<p>Default value = true</p>                                                                                                                               |
| zoomFactor      | 実数      | The amount to enlarge or reduce the printed page.<p>Default value = 1</p>                                                                                                                          |

### Paper Size

Paper size attributes are used to specify the dimensions or model of paper to use for printing. There are two ways to define paper size:

*   Custom size - height and width attributes
*   Standard size - kind attribute

| プロパティ     |        | タイプ    | 説明                                                                                                               |
| --------- | ------ | ------ | ---------------------------------------------------------------------------------------------------------------- |
| paperSize |        | object | Paper dimensions (height, width) or specific format (kind) for printing.                                         |
|           | height | 倍長整数   | Height of the paper, in hundredths of an inch.                                                                   |
|           | width  | 倍長整数   | Width of the paper, in hundredths of an inch.                                                                    |
|           | kind   | text   | Name of standard paper size (e.g., A2, A4, legal, etc.) returned by `Get Print Option`. Default value = "letter" |

### スケール

Scale attributes are used to specify printing optimization and adjustments.

| プロパティ          | タイプ     | 説明                                                                                                                                      |
| -------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| bestFitColumns | boolean | Column width is adjusted to fit the largest text width for printing.<p>Default value = "false"                  |
| bestFitRows    | boolean | Row height is adjusted to fit the tallest text height for printing. <p>Default value = "false"                  |
| fitPagesTall   | 倍長整数    | The number of vertical pages (portrait orientation) to check when optimizing printing.<p> Default value = -1    |
| fitPagesWide   | 倍長整数    | The number of horizontal pages (landscape orientation) to check when optimizing printing. <p>Default value = -1 |

### Show / Hide

Show / Hide attributes are used to specify the visibility (printing) of 4D View Pro area elements.

| プロパティ            | タイプ     | 説明                                                                                                                                                                               |
| ---------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| showBorder       | boolean | Prints the outline border.<p><p>Default value = "true"                                                                           |
| showColumnHeader | 倍長整数    | Column header print settings. Available values: `vk print visibility hide`, `vk print visibility inherit` (default), `vk print visibility show`, `vk print visibility show once` |
| showGridLine     | boolean | Prints the gridlines.<p>Default value = "false"                                                                                                          |
| showRowHeader    | 倍長整数    | Row headers print settings. Available values: `vk print visibility hide`, `vk print visibility inherit` (default), `vk print visibility show`, `vk print visibility show once`   |

### Watermark

Watermark attributes are used to superimpose text or an image onto the 4D View Pro area.

| プロパティ     |                | タイプ                  | 説明                                                                                                                                                                               |
| --------- | -------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| watermark |                | collection           | Collection of watermark settings. <p>Default value: undefined                                                                                            |
|           | \[ ].height   | 倍長整数                 | The height of the watermark text / image.                                                                                                                                        |
|           | \[ ].imageSrc | picture &#124; text* | The watermark text / image.                                                                                                                                                      |
|           | \[ ].page     | text                 | The page(s) where the watermark is printed.<p>For all pages: "all". For specific pages: page numbers or page ranges separated by commas. Ex.: "1,3,5-12" |
|           | \[ ].width    | 倍長整数                 | The width of the watermark text / image.                                                                                                                                         |
|           | \[ ].x        | 倍長整数                 | The horizontal coordinate of the top left point of the watermark text / image.                                                                                                   |
|           | \[ ].y        | 倍長整数                 | The vertical coordinate of the top left point of the watermark text / image.                                                                                                     |

\* If using text type, pass the filepath (absolute or relative) of the image. If you pass a relative path, the file should be located next to the database structure file. In Windows, the file extension must be indicated. No matter the type used to set an image, the image itself (not a reference) is stored in the 4D View Pro area and is returned by [VP Get print info](method-list.md#vp-get-print-info).



## Style Objects


4D View Pro style objects and style sheets allow you to control the graphical aspects and the look of your 4D View Pro documents.

### Style objects & Style sheets

Style objects contain the style settings. They can be used either in a style sheet or on their own. Style objects can also be used in addition to a style sheet so that different settings can be specified for individual cell ranges without affecting the rest of the document. You can use style objects directly with the [VP SET CELL STYLE](method-list.md#vp-set-cell-style) and [VP SET DEFAULT STYLE](method-list.md#vp-set-default-style) commands.

A **style sheet** groups together a combination of properties in a style object to specify the look of all of the cells in your 4D View Pro documents. Style sheets saved with the document can be used to set the properties for a single sheet, multiple sheets, or an entire workbook. When created, a 4D View Pro style sheet is given a name which is saved within the style sheet in the "name" property. This allows a style sheet to be easily used and, if thoughtfully selected, can facilitate its identification and purpose (e.g., Letterhead\_internal, Letterhead_external).

Style sheets are created with the [VP ADD STYLESHEET](method-list.md#vp-add-stylesheet) command and applied with the the [VP SET DEFAULT STYLE](method-list.md#vp-set-default-style) or [VP SET CELL STYLE](method-list.md#vp-set-cell-style) commands. You can  remove a style sheet with the [VP REMOVE STYLESHEET](method-list.md#vp-remove-stylesheet) command.

The [VP Get stylesheet](method-list.md#vp-get-stylesheet) command can be used to return the style object of a single style sheet or you can use the [VP Get stylesheets](method-list.md#vp-get-stylesheets) command to retrieve a collection of style objects for multiple style sheets.

### Style object properties

例:

```4d
 $style:=New object
 $style.hAlign:=vk horizontal align left
 $style.font:="12pt papyrus"
 $style.backColor:="#E6E6FA" //light purple color

 VP SET DEFAULT STYLE("myDoc";$style)
```


#### Background & Foreground

| プロパティ                 | タイプ           | 説明                                           | Possible values                                                                                                                                                                                                                                                                                                                                                           |
| --------------------- | ------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| backColor             | text          | Defines the color of the background.         | CSS color "#rrggbb" syntax (preferred syntax), CSS color "rgb(r,g,b)" syntax (alternate syntax), CSS color name (alternate syntax)                                                                                                                                                                                                                                        |
| backgroundImage       | picture, text | Specifies a background image.                | Can be specified directly or via the image path (full path or file name only). If the file name only is used, the file must be located next to the database structure file. No matter how set (picture or text), a picture is saved with the document. This could impact the size of a document if the image is large. Note for Windows: File extension must be included. |
| backgroundImageLayout | 倍長整数          | Defines the layout for the background image. | `vk image layout center`, `vk image layout none`, `vk image layout stretch`, `vk image layout zoom`                                                                                                                                                                                                                                                                       |
| foreColor             | text          | Defines the color of the foreground.         | CSS color "#rrggbb" syntax (preferred syntax), CSS color "rgb(r,g,b)" syntax (alternate syntax), CSS color name (alternate syntax)                                                                                                                                                                                                                                        |

#### Borders

| プロパティ                                                                      |       | タイプ    | 説明                                                                             | Possible values                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------- | ----- | ------ | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| borderBottom, borderLeft, borderRight, borderTop, diagonalDown, diagonalUp |       | object | Defines the corresponding border line                                          |                                                                                                                                                                                                                                                                                                                                                                  |
|                                                                            | color | text   | Defines the color of the border. Default = black.                              | CSS color "#rrggbb" syntax (preferred syntax), CSS color "rgb(r,g,b)" syntax (alternate syntax), CSS color name (alternate syntax)                                                                                                                                                                                                                               |
|                                                                            | style | 倍長整数   | Defines the style of the border. Default = empty. Cannot be null or undefined. | `vk line style dash dot`, `vk line style dash dot dot`, `vk line style dashed`, `vk line style dotted`, `vk line style double`, `vk line style empty`, `vk line style hair`, `vk line style medium`, `vk line style medium dash dot`, `vk line style medium dash dot dot`,`vk line style medium dashed`, `vk line style slanted dash dot`, `vk line style thick` |

#### Fonts and text

| プロパティ           |            | タイプ     | 説明                                                                                                                                                                                                                                                                                                                                                                   | Possible values                                                                                                                                                                                                                             |
| --------------- | ---------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| font            |            | text    | Specifies the font characteristics in CSS font shorthand ("font-style font-variant font-weight font-size/line-height font-family"). Example: "14pt Century Gothic". The font-size and font-family values are mandatory. If one of the other values is missing, their default values are used. Note: If a font name contains a space, the name must be within quotes. | A CSS font shorthand.<p>4D provides utility commands to handle font characteristics as objects: [`VP Font to object`](method-list.md#vp-font-to-object) and [`VP Object to font`](method-list.md#vp-object-to-font) |
| formatter       |            | text    | Pattern for value/time property.                                                                                                                                                                                                                                                                                                                                     | Number/text/date/time formats, special characters. See [Cell Format](#cell-format).                                                                                                                                                         |
| isVerticalText  |            | boolean | Specifies text direction.                                                                                                                                                                                                                                                                                                                                            | True = vertical text, False = horizontal text.                                                                                                                                                                                              |
| labelOptions    |            | object  | Defines cell label options (watermark options).                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                             |
|                 | alignment  | 倍長整数    | Specifies the position of the cell label. Optional property.                                                                                                                                                                                                                                                                                                         | `vk label alignment top left`, `vk label alignment bottom left`, `vk label alignment top center`, `vk label alignment bottom center`, `vk label alignment top right`, `vk label alignment bottom right`                                     |
|                 | visibility | 倍長整数    | Specifies the visibility of the cell label. Optional property.                                                                                                                                                                                                                                                                                                       | `vk label visibility auto`, `vk label visibility hidden`, `vk label visibility visible`                                                                                                                                                     |
|                 | foreColor  | text    | Defines the color of the foreground. Optional property.                                                                                                                                                                                                                                                                                                              | CSS color "#rrggbb" syntax (preferred syntax), CSS color "rgb(r,g,b)" syntax (alternate syntax), CSS color name (alternate syntax)                                                                                                          |
|                 | font       | text    | Specifies the font characteristics with CSS font shorthand ("font-style font-variant font-weight font-size/line-height font-family"). The font-size and font-family values are mandatory.                                                                                                                                                                            |                                                                                                                                                                                                                                             |
| textDecoration  |            | 倍長整数    | Specifies the decoration added to text.                                                                                                                                                                                                                                                                                                                              | `vk text decoration double underline`, `vk text decoration line through`, `vk text decoration none`, `vk text decoration overline`, `vk text decoration underline`                                                                          |
| textIndent      |            | 倍長整数    | Defines the unit of text indention. 1 = 8 pixels                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                             |
| textOrientation |            | 倍長整数    | Defines the rotation angle of the text in a cell. Number between -90 and 90                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                             |
| watermark       |            | text    | Defines the watermark (cell label) content                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                             |
| wordWrap        |            | boolean | Specifies if text should be wrapped.                                                                                                                                                                                                                                                                                                                                 | True = wrapped text, False = unwrapped text                                                                                                                                                                                                 |

#### レイアウト

| プロパティ       | タイプ     | 説明                                                                                                                  | Possible values                                                                                                      |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| cellPadding | text    | Defines the cell padding                                                                                            |                                                                                                                      |
| hAlign      | 倍長整数    | Defines the horizontal alignment of cell contents.                                                                  | `vk horizontal align center`, `vk horizontal align general`, `vk horizontal align left`, `vk horizontal align right` |
| locked      | boolean | Specifies cell protection status. Note, this is only available if [sheet protection](#sheet-protection) is enabled. | True = locked, False = unlocked.                                                                                     |
| shrinkToFit | boolean | Specifies if the contents of the cell should be reduced.                                                            | True = reduced content, False = no reduction.                                                                        |
| tabStop     | boolean | Specifies if the focus to the cell can be set using the Tab key.                                                    | True = Tab key sets focus, False = Tab key does not set focus.                                                       |
| vAlign      | 倍長整数    | Specifies the vertical alignment of cell contents.                                                                  | `vk vertical align bottom`, `vk vertical align center`, `vk vertical align top`                                      |


#### Style information

| プロパティ      | タイプ  | 説明                                                                                                                                                                                                                                                                               |
| ---------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name       | text | Defines the name of the style                                                                                                                                                                                                                                                    |
| parentName | text | Specifies the style that the current style is based on. Values from the parent style will be applied, then any values from the current style are applied. Changes made in the current style will not be refelected in the parent style. Only available when using a style sheet. |



## 4D View Pro Object

The 4D View Pro [object](Concepts/dt_object.md) stores the whole spreadsheet contents. It is automatically handled by 4D View Pro. You can set or get this object using the [VP IMPORT FROM OBJECT](method-list.md#vp-import-from-object) or [VP Export to object](method-list.md#vp-export-to-object) methods.

It contains the following properties:

| プロパティ        | 値の型       | 説明                                           |
| ------------ | --------- | -------------------------------------------- |
| version      | 倍長整数      | Internal component version                   |
| dateCreation | Timestamp | Creation date                                |
| dateModified | Timestamp | Last modification date                       |
| meta         | オブジェクト    | Free contents, reserved for the 4D developer |
| spreadJS     | オブジェクト    | Reserved for the 4D View Pro component       |


## 4D View Pro フォームオブジェクト変数

The 4D View Pro form object variable is the [object](Concepts/dt_object.md) variable associated to the 4D View Pro form area. It manages information used by the 4D View Pro object.
> The 4D View Pro form object variable is for information purposes only (i.e., debugging). Under no circumstances should it be modified.

It contains the following properties:

| プロパティ                  | 値の型    | 説明                                                                                                                                                                                                                                                                                                                           |
| ---------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ViewPro.area           | テキスト   | 4D View Pro エリア名                                                                                                                                                                                                                                                                                                             |
| ViewPro.callbacks      | オブジェクト | Stores temporary information necessary for commands requiring callbacks such as importing and exporting.                                                                                                                                                                                                                     |
| ViewPro.commandBuffers | コレクション | Stores sequentially the commands called by the method and executes them as a batch (rather than individually) upon exiting the method, or if a command returns a value or the [VP FLUSH COMMANDS](method-list.md#vp-flush-commands) is called. This mechanism increases performance by reducing the number of requests sent. |
| ViewPro.events         | オブジェクト | [Event](#form-events) list.                                                                                                                                                                                                                                                                                                  |
| ViewPro.formulaBar     | ブール    | Indicates whether or not the formula bar is displayed. Available only for the "toolbar" interface.                                                                                                                                                                                                                           |
| ViewPro.inited         | ブール    | Indicates whether or not the 4D View Pro area has been initialized (see [On VP Ready](Events/onVpReady.md) event).                                                                                                                                                                                                           |
| ViewPro.interface      | テキスト   | Specifies the type of user interface:"ribbon", "toolbar", "none".                                                                                                                                                                                                                                                            |



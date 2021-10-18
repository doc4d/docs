---
id: getting-started
title: はじめに
---


4D View Pro は、[4D フォームエリア](FormObjects/viewProArea_overview.md) と専用の [メソッド](method-list.md) が含まれる [4Dコンポーネント](Concepts/components.md) です。 これにより、先進的なスプレッドシート機能をプロジェクトに埋め込むことが可能です。


![](assets/en/ViewPro/vpSpreadsheet.PNG)

スプレッドシートとは、セルのグリッドを格納したアプリケーションのことで、これらのセルに情報を入力したり、計算を実行させたり、あるいはピクチャーを表示したりすることができます。 4D View Proは、4Dに統合された [SpreadJS スプレッドシートソリューション](https://www.grapecity.com/spreadjs/docs/v14/online/overview.html) に基づいて動作します。

フォームに 4D View Pro エリアを埋め込むことで、4D View Pro コマンドを使ってスプレッドシートドキュメントを読み込んだり書き出したりすることができます。


## インストールとアクティベーション

4D View Pro 機能は 4D に直接含まれているため、配布と運用が容易です。 追加のインストールは必要ありません。

しかしながら、4D View Pro はライセンスを必要とします。 これらの機能を使用するには、アプリケーションにおいて当該ライセンスを有効化しておく必要があります。 4D View ライセンスがインストールされていない場合、4D View Pro 機能を必要とするオブジェクトのコンテンツはランタイムでは表示されず、エラーメッセージだけが表示されます:

![](assets/en/ViewPro/licenseError.PNG)


## 4D View Pro エリアを挿入する

4D View Pro ドキュメントは 4D View Pro という名前の [4Dフォームオブジェクト](FormObjects/viewProArea_overview.md) 内に表示され、手動で編集されます。 このオブジェクトを選択するには、オブジェクトバーの最後のツールをクリックします:

![](assets/en/ViewPro/vpArea.PNG)

また、[オブジェクトライブラリ](FormEditor/objectLibrary.md) であらかじめ設定された 4D View Pro エリアを選択することもできます。

> 4D View Pro エリアは、[オフスクリーンでも作成・使用する](method-list.md#vp-run-offscreen-area) ことができます。

[エリアの設定](configuring.md) は、プロパティリストと 4D View Pro メソッドを使っておこないます。


## セレクション、入力、およびナビゲージョンの基本

スプレッドシートは行と列から構成されています。 各行には番号が割り当てられています。 各列には文字 (アルファベットの文字数を超えた場合には文字のグループ) が割り当てられています。 行と列の交差する場所がセルと呼ばれます。 セルを選択したり、そのコンテンツを編集したりすることができます。

### セル、列、および行の選択

*   セルを選択するには、単にセルをクリックするか、キーボードの矢印キーを使用します。 その中身 (あるいは式) がセル内に表示されます。

*   複数の連続したセルを選択するには、マウスをセレクションの端から端へとドラッグします。 また、Shiftキーを押しながらセレクションの二つの端をクリックすることでも選択可能です。

*   スプレッドシート内のセルをすべて選択するには、エリアの左上端にあるセルをクリックします: ![](assets/en/ViewPro/vpSelectAll.PNG)

*   列を選択するには、対応する文字 (アルファベット) をクリックします。

*   To select a row, click on the corresponding number.

*   To select a group of cells that are not continuous, hold down the **Ctrl** key (Windows) or **Command** key (Mac) and click on each cell to be selected.

*   To deselect cells, simply click anywhere within the spreadsheet.

### Entering data

Double-clicking on a cell allows passing into input mode in the relevant cell. If the cell is not empty, the insertion cursor is placed after the content of the cell.

![](assets/en/ViewPro/vpInput.PNG)

Data can be entered directly once a cell is already selected, even if the insertion cursor is not visible. The input then replaces the content of the cell.

The **Tab** key validates the cell input and selects the cell to its right. Combining the **Shift + Tab** keys validates the cell input and selects the cell to its left.


The **Carriage return** key validates the cell input and selects the cell below it. Combining the **Shift + Carriage return** keys validates the cell input and selects the cell above it.

The direction keys (arrows) allow you to move a cell in the direction indicated by the arrow.


### Using the Context Menu

4D View Pro areas benefit from an automatic context menu that offers standard editing features such as copy and paste, but also basic spreadsheet features:

![](assets/en/ViewPro/vpContext.PNG)
> The Copy/Cut and Paste features of the context menu only work within the spreadsheet area, they do not have access to the system pasteboard. System shortcuts such as **Ctrl+c/Ctrl+v** works however and can be used to exchange data between the area and other applications.

 Depending on the clicked area, the following options are also available:

*   click on a column or row header: **Insert**, **Delete**, **Hide**, or **Unhide** the contents
*   click on a cell or a cell range:
    *   **Filter**: allows hiding row through filters (see [Filtering rows](http://help.grapecity.com/spread/SpreadSheets11/webframe.html#filter.html) in the SpreadJS documentation).
    *   **Sort**: sorts the column contents.
    *   **Insert Comment**: allows user to enter a comment for an area. When a comment has been entered for an area, the top left cell of the area displays a small red triangle:  
      ![](assets/en/ViewPro/vpContext2.PNG)


## Using 4D View Pro methods

4D View Pro methods can be used in the 4D Method editor, just like 4D language commands.

Since 4D View Pro is a built-in 4D component, you can access its list of methods from the Explorer, in the **Component Methods** section:

![component-methods](assets/en/ViewPro/explorer-methods.PNG)

For a detailed list of component methods, see [Method list](method-list.md).

### Addressing a 4D View Pro area

A 4D View Pro area handles several objects and elements.

![](assets/en/ViewPro/vpDocument.PNG)

Most of 4D View Pro methods require a *vpAreaName* parameter, which is the [**4D View Pro form area name**](FormObjects/viewProArea_overview.md) (4D form object). This name is the [object name](FormObjects/properties_Object.md#object-name) property.

For example, if you want to set the total number of columns of an area named "myVpArea", you write:

```4d
VP SET COLUMN COUNT("myVpArea";5)
```



> When loading a 4D View Pro object in a form area, 4D generates the [On VP Ready](../Events/onVpReady.md) form event once the whole area is loaded. You must execute any 4D View Pro code handling the area in this event, otherwise an error is returned.


### Using range objects

Some 4D View Pro methods require a *rangeObj* parameter. In 4D View Pro, a range is an object that references an area in a spreadsheet. This area can be composed of one or several cells. Using 4D View Pro methods, you can create ranges and pass them to other methods to read from or write to specific locations in your document.

For example, to create a range object for the following cells:

![](assets/en/ViewPro/vp-cells.png)

You can use the [VP Cells](method-list.md#vp-cells) method:

```4d 
var $myRange : Object
$myRange:=VP Cells("ViewProArea";2;4;2;3) // C5 to D7
```

You can then pass `$myRange` to another 4D View Pro method to modify these cells (for example add a border to the set of cells with [VP SET BORDER](method-list.md#vp-set-border)).

4D View Pro range objects are composed of several properties:

*   area - The name of the 4D View Pro area
*   ranges - A collection of range object(s). Available properties within each range object depend on the range object type. For example, a column range object will only include the *.column* and *.sheet* properties.

| プロパティ  |                   | タイプ        | 説明                                                                  | Available for                                      |
| ------ | ----------------- | ---------- | ------------------------------------------------------------------- | -------------------------------------------------- |
| area   |                   | text       | 4D View Pro area form object name                                   | always available                                   |
| ranges |                   | collection | Collection of range(s)                                              | always available                                   |
|        | \[ ].name        | text       | Range name                                                          | name                                               |
|        | \[ ].sheet       | number     | Sheet index (current sheet index by default) (counting begins at 0) | cell, cells, row, rows, column, columns, all, name |
|        | \[ ].row         | number     | Row index (counting begins at 0)                                    | cell, cells, row, rows                             |
|        | \[ ].rowCount    | number     | Row count                                                           | cells, rows                                        |
|        | \[ ].column      | number     | Column index (counting begins at 0)                                 | cell, cells, column, columns                       |
|        | \[ ].columnCount | number     | Column count                                                        | cells, columns                                     |







## Importing and exporting documents

4D View Pro supports the import and export of several document formats:

* .4vp
* .xlsx
* .txt and .csv
* .pdf (for export only)

For more details, check out the description of [VP IMPORT DOCUMENT](method-list.md#vp-import-document) and [VP EXPORT DOCUMENT](method-list.md#vp-export-document).

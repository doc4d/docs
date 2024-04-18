---
id: tabControl
title: タブコントロール
---

タブコントロールは、ユーザーが複数の仮想画面の中から選択することのできるオブジェクトを作成します。この画面はタブコントロールオブジェクトにより囲まれています。 タブをクリックすることで、各画面にアクセスします。

次の複数ページフォームではタブコントロールオブジェクトが使用されています:

![](../assets/en/FormObjects/tabControl1.png)

各画面を移動するには、目的のタブをクリックします。

これらの画面は、マルチページフォームの各ページを表わしたり、またはユーザーがタブがクリックすると変化するオブジェクトを表わすこともできます。 If the tab control is used as a page navigation tool, then the [`FORM GOTO` PAGE](https://doc.4d.com/4dv19/help/command/en/page247.html) command or the `gotoPage` standard action would be used when a user clicks a tab.

タブコントロールの他の利用法は、サブフォームやリストボックスに表示されるデータを制御することです。 たとえば、名刺帳はタブコントロールを用いて実現することができます。 タブにはひらがなの各文字を表示し、タブコントロールの動作としてはユーザーがクリックした文字と一致するデータをロードします。

各タブにはラベルだけ、またはラベルと小さなアイコンを表示することができます。 アイコンが含まれる場合、そのアイコンは各ラベルの左側に表示されます。 次の図はアイコンを使用するタブコントロールの例です:

![](../assets/en/FormObjects/tabControl2.png)

タブコントロールを作成すると、4Dがタブの間隔と配置を管理します。 ラベルは配列形式で定義し、アイコンとラベルは階層リスト形式で定義します。

タブコントロールが十分大きく、ラベルとアイコンが設定されたタブをすべて表示できる場合は、その両方が表示されます。 タブコントロールの大きさが足らず、ラベルとアイコンを両方とも表示できない場合には、4Dはアイコンだけを表示します。 すべてのアイコンが収まりきらない場合、表示される最後のタブの右側にスクロール矢印が置かれます。 このスクロール矢印を使用し、アイコンを左右にスクロールできます。

macOSの場合、タブコントロールを標準位置 (上) だけでなく、下にも配置することができます。

### JSON 例:

```4d
	"myTab": {
		"type": "tab",
 		"left": 60,	
		"top": 160,	 
		"width": 100,	
		"height": 20,	
		"labelsPlacement": "bottom"	//define the direction
	}
```

## タブコントロールへのラベルの追加

タブコントロールにラベルを設定するには、次のものを利用できます:

- オブジェクト
- 選択リスト
- 配列

### オブジェクトの使用

You can assign an [object](Concepts/dt_object.md) encapsulating a [collection](../Concepts/dt_collection.md) as the [data source](properties_Object.md#variable-or-expression) of the tab control. このオブジェクトには、次のプロパティが格納されていなくてはなりません:

| プロパティ          | タイプ        | 説明                                                                                                     |
| -------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| `値`            | Collection | 必須 - スカラー値のコレクション。 文字列の値のみがサポートされています。 無効、空、または未定義の場合、タブコントロールは空になります                                  |
| `index`        | number     | Index of the currently tab control page (value between 0 and `collection.length-1`) |
| `currentValue` | Text       | 現在選択されている値                                                                                             |

この初期化コードはユーザーにフォームを表示する前に実行しなければなりません。

In the following example, `Form.tabControl` has been defined as tab control [expression](properties_Object.md#variable-or-expression). You can associate the [`gotoPage` standard action](#goto-page-action) to the form object:

```4d
Form.tabControl:=New object
Form.tabControl.values:=New collection("Page 1"; "Page 2"; "Page 3")
Form.tabControl.index:=2 // ページ3 から開始します
```

### 選択リストの使用

You can assign a [choice list](properties_DataSource.md#choice-list-static-list) to the tab control, either through a collection (static list) or a JSON pointer to a json list ("$ref"). リストエディターにてリスト項目に関連付けられたアイコンはタブコントロールに表示されます。

### テキスト配列の使用

フォームの各ページの名前を格納するテキスト配列を作成することができます。 このコードはユーザーにフォームを表示する前に実行しなければなりません。 For example, you could place the code in the object method of the tab control and execute it when the `On Load` event occurs.

```4d
 ARRAY TEXT(arrPages;3)
 arrPages{1}:="Name"
 arrPages{2}:="Address"
 arrPages{3}:="Notes"  
```

> You can also store the names of the pages in a hierarchical list and use the [LIST TO ARRAY](https://doc.4d.com/4dv19/help/command/en/page288.html) command to load the values into the array.

## Goto page 機能

### FORM GOTO PAGE コマンド

You can use the [`FORM GOTO PAGE`](https://doc.4d.com/4dv19/help/command/en/page247.html) command in the tab control’s method:

```4d
FORM GOTO PAGE(arrPages)
```

The command is executed when the [`On Clicked`](Events/onClicked.md) event occurs. You should then clear the array when the [`On Unload`](Events/onUnload.md) event occurs.

オブジェクトメソッドの例を次に示します:

```4d
 Case of
    :(Form event=On Load)
       LIST TO ARRAY("Tab Labels";arrPages)
    :(Form event=On Clicked)
       FORM GOTO PAGE(arrPages)
    :(Form event=On Unload)
       CLEAR VARIABLE(arrPages)
 End case
```

### gotoPage 標準アクション

When you assign the `gotoPage` [standard action](properties_Action.md#standard-action) to a tab control, 4D will automatically display the page of the form that corresponds to the number of the tab that is selected.

たとえば、ユーザーが 3番目のタブをクリックすると、4Dはカレントフォームの 3ページ目 (存在する場合) を表示します。

## プロパティ一覧

[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list-static-list) - [Class](properties_Object.md#css-class) - [Expression Type](properties_Object.md#expression-type) - [Font](properties_Text.md#font) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Save value](properties_Object.md#save-value) - [Standard action](properties_Action.md#standard-action) - [Tab Control Direction](properties_Appearance.md#tab-control-direction) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

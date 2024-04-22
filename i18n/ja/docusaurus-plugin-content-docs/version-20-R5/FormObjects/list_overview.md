---
id: listOverview
title: 階層リスト
---

階層リストはフォームオブジェクトの一つで、展開/折りたたみ可能な一つ以上の階層を持つリスト形式でデータを表示するのに使用できます。

![](../assets/en/FormObjects/Hlist1.png)

展開/折りたたみアイコンは必要に応じて項目の左に自動的に表示されます。 階層リストのレベル数に制限はありません。

## 階層リストのデータソース

階層リストの中身は次の方法で初期化することができます:

- Associate an existing [choice list](properties_DataSource.md#choice-list) to the object. 選択リストはあらかじめデザインモードにてリストエディターを使って定義します。
- Directly assign a hierarchical list  reference to the [variable or expression](properties_Object.md#variable-or-expression) associated with the form object.

In both cases, you manage a hierarchical list at runtime through its _ListRef_ reference, using the [Hierarchical list](https://doc.4d.com/4Dv17R6/4D/17-R6/Hierarchical-Lists.201-4310291.en.html) commands in the 4D language.

## ListRef とオブジェクト名

A hierarchical list is both a **language object** existing in memory and a **form object**.

The **language object** is referenced by an unique internal ID of the Longint type, designated by _ListRef_ in the 4D Language Reference. This ID is returned by the commands that can be used to create lists: `New list`, `Copy list`, `Load list`, `BLOB to list`. ランゲージオブジェクトのインスタンスはひとつのみしかメモリ中に存在せず、このオブジェクトに対しておこなわれた変更は、これを使用しているすべての場所に即座に反映されます。

The **form object** is not necessarily unique: there may be several representations of the same hierarchical list in the same form or in different ones. 他のフォームオブジェクト同様、ランゲージ中でオブジェクトを指定するにはシンタックス (\*;"ListName") を使用します。

"ランゲージオブジェクト" としての階層リストと、"フォームオブジェクト" としての階層リストは、ListRef の値を格納した中間的な変数により接続されます。 For example, if you have associated the mylist [variable](properties_Object.md#variable-or-expression) to the form object, you can write:

```4d
mylist:=New list
```

特定のリストを使用している複数のフォームオブジェクトがある場合、それらにはそれぞれに固有の性質と、それらの間で共有される性質を持ちます。 以下の性質はリストフォームオブジェクトごとに固有のものです:

- 選択された項目
- 項目の展開/折りたたみ状況
- スクロールカーソルの位置

The other characteristics (font, font size, style, entry control, color, list contents, icons, etc.) are common to all the representations and cannot be modified separately.
Consequently, when you use commands based on the expanded/collapsed configuration or the current item, for example `Count list items` (when the final `*` parameter is not passed), it is important to be able to specify the representation to be used without any ambiguity.

You must use the `ListRef` ID with language commands when you want to specify the hierarchical list found in memory. フォーム上の階層リストオブジェクトを指定する場合は、コマンド中でシンタックス (\*;"ListName") を用いてオブジェクト名 (文字列) を使用します。

> フォームオブジェクト名に基づくシンタックスをプロパティ設定用のコマンドで使用することは、対象を指定オブジェクトに限定する意味ではなく、むしろ指定オブジェクトの状態に基づいてコマンドが動作することを意味します。 複数の階層リスト間で共有されている性質を変更すると、それらすべてに反映されます。
> たとえば、次のコードを実行すると:

```4d
SET LIST ITEM FONT(*;"mylist1";*;thefont)
```

> ... you are indicating that you want to modify the font of the hierarchical list item associated with the _mylist1_ form object. The command will take the current item of the _mylist1_ object into account to specify the item to modify, but this modification will be carried over to all the representations of the list in all of the processes.

### @をサポート

As with other object property management commands, it is possible to use the “@” character in the `ListName` parameter. このシンタックスは、フォーム上の複数のオブジェクトを指定するために使用されます。 しかし階層リストコマンドのコンテキストにおいては、これはすべての場合に適用されるわけではありません。 コマンドのタイプにより、このシンタックスは 2つの異なる効果があります:

- プロパティ設定用のコマンドにおいて、このシンタックスは該当する名前のオブジェクトを対象とします (標準の動作)。 たとえば、引数 "LH@" は、オブジェクト名が "LH" で始まる階層リストを指定します。
  - `DELETE FROM LIST`
  - `INSERT IN LIST`
  - `SELECT LIST ITEMS BY POSITION`
  - `SET LIST ITEM`
  - `SET LIST ITEM FONT`
  - `SET LIST ITEM ICON`
  - `SET LIST ITEM PARAMETER`
  - `SET LIST ITEM PROPERTIES`

- プロパティ取得用のコマンドにおいて、このシンタックスは該当する名前を持つ最初のオブジェクトを対象とします:
  - `Count list items`
  - `Find in list`
  - `GET LIST ITEM`
  - `Get list item font`
  - `GET LIST ITEM ICON`
  - `GET LIST ITEM PARAMETER`
  - `GET LIST ITEM PROPERTIES`
  - `List item parent`
  - `List item position`
  - `Selected list items`

## 階層リストに対し利用できる汎用コマンド

いくつかの 4Dの汎用コマンドを使用して、フォーム上の階層リストオブジェクトの見た目を変更することができます。 これらのコマンドには、\* を用いたシンタックスを使用して階層リストのオブジェクト名を渡すか、あるいは標準シンタックスを使用して階層リストの ListRef 参照を格納している変数を渡します。

- `OBJECT SET FONT`
- `OBJECT SET FONT STYLE`
- `OBJECT SET FONT SIZE`
- `OBJECT SET COLOR`
- `OBJECT SET FILTER`
- `OBJECT SET ENTERABLE`
- `OBJECT SET SCROLLBAR`
- `OBJECT SET SCROLL POSITION`
- `OBJECT SET RGB COLORS`

> Reminder: Except `OBJECT SET SCROLL POSITION`, these commands modify all the representations of the same list, even if you only specify a list via its object name.

## プロパティコマンドの優先順位

Certain properties of hierarchical lists (for example, the **Enterable** attribute or the color) can be set in different ways: in the form properties, via a command of the “Object Properties” theme or via a command of the “Hierarchical Lists” theme. これら 3つの方法すべてを使ってプロパティを設定した場合、以下の優先順位が適用されます:

1. "階層リスト" テーマのコマンド
2. 汎用のオブジェクトプロパティコマンド
3. プロパティリストのパラメーター

この原則は、コマンドが呼び出された順番に関係なく適用されます。 階層リストコマンドを使用して個々に項目のプロパティを変更すると、同等のオブジェクトプロパティコマンドをそのあとに呼び出したとしても、その項目に対しては効果を持たなくなります。 For example, if the color of an item is modified via the `SET LIST ITEM PROPERTIES` command, the `OBJECT SET COLOR` command will have no effect on this item.

## 位置あるいは参照による項目の管理

階層リストのコンテンツにアクセスするには、通常は位置または参照のいずれかを使用しておこないます。

- 位置を使用する場合には、4D は画面上に表示されているリスト項目の位置に基づいて項目を特定します。 つまり、結果は階層項目が展開されているか折りたたまれているかにより異なります。 複数のフォームオブジェクトで同一のリストを使用している場合、オブジェクトごとに展開/折りたたみの状態が異なることに注意が必要です。
- When you work by reference, 4D bases itself on the _itemRef_ ID number of the list items. これにより、それぞれの項目を階層リスト中での位置や表示状態に関わらず特定できます。

### 項目参照番号を使用する (itemRef)

Each item of a hierarchical list has a reference number (_itemRef_) of the Longint type. この値は開発者が使うためのもので、4D は番号を維持するだけです。

> 警告: どの倍長整数値も参照として使用できますが、0だけは特別な意味を持ちます。 このテーマのほとんどのコマンドで、0は最後にリストに追加された項目を指定するのに使用されます。

参照番号を使用するにあたり、いくつかの Tips を紹介します:

1. 項目をユニーク値で識別する必要がない場合 (初心者レベル)

   - 最初の例として、アドレスブックで使用するタブシステムを構築するとします。 システムは選択されたタブの番号を返すので、それ以上の情報は必要ありません。 In this case, do not worry about item reference numbers: pass any value (except 0) in the _itemRef_ parameter. なお、アドレスブックシステムの場合、デザインモードで A-Z のリストを定義することもできる点に留意してください。 また、プログラムを使えば、レコードがない文字を除いたリストを作成することもできます。
   - 2つ目の例は、データベースを利用すると同時に蓄積していくタイプのキーワードリストを考えます。 You can save this list at the end of each session by using the `SAVE LIST` or `LIST TO BLOB` commands and reload it at the beginning of each new session using the `Load list` or `BLOB to list` commands. このリストをフローティングパレットに表示し、ユーザーがキーワードをクリックすると、最前面のプロセスの選択されたエリアに項目テキストが挿入されます。 The important thing is that you only process the item selected, because the `Selected list items` command returns the position of the item that you must process. When using this position value, you obtain the title of the item by means of the `GET LIST ITEM` command. Here again, you do not need to identify each item individually; you can pass any value (except 0) in the _itemRef_ parameter.

2. You need to partially identify the list items (intermediary level).\
   You use the item reference number to store information needed when you must work with the item; this point is detailed in the example of the `APPEND TO LIST` command. この例題では、項目参照番号にレコード番号を格納しています。 また、[Department] レコード由来の項目と [Employees] レコード由来の項目を区別する必要があり、この点も例題にて説明されています。

3. You need to identify all the list items individually (advanced level).\
   You program an elaborate management of hierarchical lists in which you absolutely must be able to identify each item individually at every level of the list. これを実装する簡単な方法は独自のカウンターを使用することです。 Suppose that you create a _hlList_ list using the `APPEND TO LIST` command. At this stage, you initialize a counter _vhlCounter_ to 1. Each time you call `APPEND TO LIST` or `INSERT IN LIST`, you increment this counter `(vhlCounter:=vhlCounter+1)`, and you pass the counter number as the item reference number. 項目を削除する場合でもカウンターをデクリメントしないことが重要です。つまりカウンターは増え続けるのみです。 この方法で、ユニークな項目参照番号を保証できます。 番号は倍長整数型なので、20億以上の項目をリストに追加したり挿入したりできます  (もっとも、こんなにも多くのデータを扱うのであれば、リストではなくテーブルを使用したほうが良いですが)。

> ビットワイズ演算子を使用して、項目参照番号に情報を格納することもできます。たとえば 2つの整数値、4バイト値、32個のブール値などです。

### どのような場合にユニークな参照番号が必要ですか?

階層リストをユーザーインタフェースとして使用し、クリックまたはドラッグにより選択された項目のみを処理する場合は、ほとんどの場合項目参照番号を必要としません。 Using `Selected list items` and `GET LIST ITEM` you have all you need to deal with the currently selected item. In addition, commands such as `INSERT IN LIST` and `DELETE FROM LIST` allow you to manipulate the list “relatively” with respect to the selected item.

基本的に、項目の選択に関係なく、プログラムで任意のリスト項目にアクセスする必要がある場合に項目参照番号が必要です。

## 編集可能項目

You can control whether hierarchical list items can be modified by the user by using the **Alt+click**(Windows) / **Option+click** (macOS) shortcut, or by carrying out a long click on the text of the item.

- Whatever the hierarchical list data source, you can control the whole object with the [Enterable](properties_Entry.md#enterable) property.

- In addition, if you populate the hierarchical list using a list created in the Lists editor, you control whether an item in a hierarchical list is modifiable using the **Modifiable Element** option in the Lists editor. For more information, see [Setting list properties](https://doc.4d.com/4Dv17R6/4D/17-R6/Setting-list-properties.300-4354625.en.html).

## プロパティ一覧

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Draggable](properties_Action.md#draggable-and-droppable) - [Droppable](properties_Action.md#draggable-and-droppable) - [Enterable](properties_Entry.md#enterable) - [Entry Filter](properties_Entry.md#entry-filter) - [Fill Color](properties_BackgroundAndBorder.md#background-color-fill-color) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) - [Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Multi-selectable](properties_Action.md#multi-selectable) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

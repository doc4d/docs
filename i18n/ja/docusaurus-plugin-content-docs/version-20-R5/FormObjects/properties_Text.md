---
id: propertiesText
title: Text
---

---

## ピッカーの使用を許可

When this property is enabled, the [OPEN FONT PICKER](https://doc.4d.com/4Dv18/4D/18/OPEN-FONT-PICKER.301-4505612.en.html) and [OPEN COLOR PICKER](https://doc.4d.com/4Dv18/4D/18/OPEN-COLOR-PICKER.301-4505611.en.html) commands can be called to display the system font and color picker windows. これらのピッカーウィンドウを使用して、ユーザーはフォームオブジェクトのフォントやカラーをクリックによって変更できます。 このプロパティが無効になっていると (デフォルト)、ピッカーを開くコマンドは使用できません。

#### JSON 文法

| プロパティ                | データタイプ  | とりうる値                                  |
| -------------------- | ------- | -------------------------------------- |
| allowFontColorPicker | boolean | false (デフォルト), true |

#### 対象オブジェクト

[Input](input_overview.md)

---

## 太字

選択テキストの線を太くし、濃く見えるようにします。

You can set this property using the [**OBJECT SET FONT STYLE**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT-STYLE.301-4128244.en.html) command.

> This is normal text.<br/>
> **This is bold text.**

#### JSON 文法

| プロパティ      | データタイプ | とりうる値            |
| ---------- | ------ | ---------------- |
| fontWeight | text   | "normal", "bold" |

#### 対象オブジェクト

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## イタリック

選択テキストの線を右斜めに傾けます。

You can also set this property via the [**OBJECT SET FONT STYLE**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT-STYLE.301-4128244.en.html) command.

> This is normal text.<br/>
> _This is text in italics._

#### JSON 文法

| 名称        | データタイプ | とりうる値              |
| --------- | ------ | ------------------ |
| fontStyle | string | "normal", "italic" |

#### 対象オブジェクト

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## 下線

選択テキストの下に線を引きます。

#### JSON 文法

| 名称             | データタイプ | とりうる値                 |
| -------------- | ------ | --------------------- |
| textDecoration | string | "normal", "underline" |

#### 対象オブジェクト

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## フォント

This property allows you to specify either the **font theme** or the **font family** used in the object.

> **Font theme** and **font family** properties are mutually exclusive. フォントテーマは、サイズを含めたフォント属性を定めます。 フォントファミリーの場合は、フォント名・フォントサイズ・フォントカラーをそれぞれ定義することができます。

### フォントテーマ

フォントテーマプロパティには、自動スタイルの名前を指定します。 自動スタイルは、オブジェクトに使われるフォントファミリー・フォントサイズ・フォントカラーをシステムパラメーターに応じて動的に定めます。 これらのパラメーターは次に依存します:

- プラットフォーム
- システム言語
- フォームオブジェクトのタイプ

フォントテーマを使うことで、システムの現インターフェース標準に沿うようにタイトルが表示されることが保証されます。 ただし、マシンごとにサイズが変わるかもしれません。

3つのフォントテーマが提供されています:

- **normal**: automatic style, applied by default to any new object created in the Form editor.
- **main** and **additional** font themes are only supported by [text areas](text.md) and [inputs](input_overview.md). これらのテーマは、おもにダイアログボックスのデザインを目的に提供されています。 インターフェースウィンドウにおいて main フォントテーマは本文用、additional テーマは詳細情報を追記するためのものです。 下に macOS および Windows にてこれらのフォントテーマを使ったダイアログボックスの例を示します:

![](../assets/en/FormObjects/FontThemes.png)

> フォントテーマはフォントだけでなく、サイズやカラーも定めます。 一部のカスタムスタイルプロパティ (太字、イタリック、下線) は動作に影響なく適用することができます。

#### JSON 文法

| 名称        | データタイプ | とりうる値                          |
| --------- | ------ | ------------------------------ |
| fontTheme | string | "normal", "main", "additional" |

#### 対象オブジェクト

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

### フォントファミリー

次の 2種類のフォントファミリーが存在します:

- _family-name:_ The name of a font-family, like "times", "courier", "arial", etc.
- _generic-family:_ The name of a generic-family, like "serif", "sans-serif", "cursive", "fantasy", "monospace".

You can set this using the [**OBJECT SET FONT**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT.301-4054834.en.html) command.

#### JSON 文法

| 名称         | データタイプ | とりうる値          |
| ---------- | ------ | -------------- |
| fontFamily | string | CSS フォントファミリー名 |

> 4D recommends using only [web safe](https://www.w3schools.com/cssref/css_websafe_fonts.asp) fonts.

#### 対象オブジェクト

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## フォントサイズ

文字の大きさをポイントで指定します。

#### JSON 文法

| 名称       | データタイプ  | とりうる値                                                      |
| -------- | ------- | ---------------------------------------------------------- |
| fontSize | integer | フォントサイズ (ポイント単位) 最小値: 0 |

#### 対象オブジェクト

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## フォントカラー

文字の色を指定します。

> This property also sets the color of object's [border](#border-line-style-dotted-line-type) (if any) when "plain" or "dotted" style is used.

カラーは次の方法で指定できます:

- カラーネーム - 例: "red"
- 16進数値 - 例: "#ff0000"
- RGB値 - 例: "rgb(255,0,0)"

You can also set this property using the [**OBJECT SET RGB COLORS**](https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-RGB-COLORS.301-4505456.en.html) command.

#### JSON 文法

| 名称     | データタイプ | とりうる値                                |
| ------ | ------ | ------------------------------------ |
| stroke | string | 任意の css値; "transparent"; "automatic" |

#### 対象オブジェクト

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Progress Indicators](progressIndicator.md) - [Ruler](ruler.md) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## フォントカラー式

`Selection and collection/entity selection type list boxes`

リストボックスの各行にカスタマイズしたフォントカラーを適用するために使用します。 RGBカラーを使用しなければなりません。 For more information about this, refer to the description of the [OBJECT SET RGB COLORS](https://doc.4d.com/4dv19R/help/command/en/page628.html) command in the 4D Language Reference manual.

式または変数 (配列を除く) を入力します。 表示される行ごとに式や変数は評価されます。 You can use the constants of the [SET RGB COLORS](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-RGB-COLORS.302-4310385.en.html) theme.

You can also set this property using the `LISTBOX SET PROPERTY` command with `lk font color expression` constant.

> This property can also be set using a [Meta Info Expression](properties_Text.md#meta-info-expression).

The following example uses a variable name: enter _CompanyColor_ for the **Font Color Expression** and, in the form method, write the following code:

```4d
CompanyColor:=Choose([Companies]ID;Background color;Light shadow color;   
Foreground color;Dark shadow color)
```

#### JSON 文法

| 名称              | データタイプ | とりうる値    |
| --------------- | ------ | -------- |
| rowStrokeSource | string | フォントカラー式 |

#### 対象オブジェクト

[List Box](listbox_overview.md#overview)

---

## スタイル式

`Selection and collection/entity selection type list boxes`

リストボックスの各行にカスタマイズされた文字スタイルを適用するために使用します。

式または変数 (配列を除く) を入力します。 式や変数は、表示行ごと (リストボックスのプロパティの場合) または表示セルごと (リストボックス列のプロパティの場合) に評価されます。 You can use the constants of the [Font Styles](https://doc.4d.com/4Dv17R6/4D/17-R6/Font-Styles.302-4310343.en.html) theme.

例:

```4d
Choose([Companies]ID;Bold;Plain;Italic;Underline)
```

You can also set this property using the `LISTBOX SET PROPERTY` command with `lk font style expression` constant.

> This property can also be set using a [Meta Info Expression](properties_Text.md#meta-info-expression).

#### JSON 文法

| 名称             | データタイプ | とりうる値                   |
| -------------- | ------ | ----------------------- |
| rowStyleSource | string | 表示される行/セルごとに評価されるスタイル式。 |

#### 対象オブジェクト

[List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## 横揃え

エリア中のテキストの横位置を指定します。

#### JSON 文法

| 名称        | データタイプ | とりうる値                                             |
| --------- | ------ | ------------------------------------------------- |
| textAlign | string | "right", "center", "left", "automatic", "justify" |

:::note

- "automatic" is not supported by [check boxes](checkbox_overview.md) and [radio buttons](radio_overview.md)
- "justify" is only supported by [inputs](input_overview.md) and [text areas](text.md)

:::

#### 対象オブジェクト

[Button](button_overview.md) - [Check Box](checkbox_overview.md) (all styles except Regular and Flat) - [Group Box](groupBox.md) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Footer](listbox_overview.md#list-box-footers) - [Radio Button](radio_overview.md) (all styles except Regular and Flat) - [Text Area](text.md)

---

## 縦揃え

エリア中のテキストの縦位置を指定します。

The **Default** option (`automatic` JSON value) sets the alignment according to the type of data found in each column:

- `bottom` for all data (except pictures) and
- `top` for picture type data.

This property can also be handled by the [OBJECT Get vertical alignment](https://doc.4d.com/4dv19R/help/command/en/page1188.html) and [OBJECT SET VERTICAL ALIGNMENT](https://doc.4d.com/4dv19R/help/command/en/page1187.html) commands.

#### JSON 文法

| 名称            | データタイプ | とりうる値                                  |
| ------------- | ------ | -------------------------------------- |
| verticalAlign | string | "automatic", "top", "middle", "bottom" |

#### 対象オブジェクト

[List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers)

---

## メタ情報式

`Collection or entity selection type list boxes`

表示される行ごとに評価される式あるいは変数を指定します。 行テキスト属性全体を定義することができます。 You must pass an **object variable** or an **expression that returns an object**. 以下のプロパティがサポートされています:

| プロパティ名         | タイプ     | 説明                                                                                                                                                                                                                                                                                                                                                                             |
| -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| stroke         | string  | フォントカラー。 任意の CSSカラー (例: "#FF00FF"), "automatic", "transparent"                                                                                                                                                                                                                                                                              |
| fill           | string  | 背景色。 任意の CSSカラー (例: "#F00FFF"), "automatic", "transparent"                                                                                                                                                                                                                                                                                  |
| fontStyle      | string  | "normal","italic"                                                                                                                                                                                                                                                                                                                                                              |
| fontWeight     | string  | "normal","bold"                                                                                                                                                                                                                                                                                                                                                                |
| textDecoration | string  | "normal","underline"                                                                                                                                                                                                                                                                                                                                                           |
| unselectable   | boolean | Designates the corresponding row as not being selectable (_i.e._, highlighting is not possible). このオプションが有効化されている場合、入力可能エリアは入力可能ではなくなります (ただし "シングルクリック編集" オプションが有効化されている場合を除く)。 チェックボックスやリストといったコントロール類は引き続き稼働します。 この設定はリストボックスの選択モードが "なし" の場合には無視されます。 デフォルト値: false。 |
| disabled       | boolean | 対応する行を無効化します。 このオプションが有効化されると、入力可能エリアは入力可能ではなくなります。 Text and controls (checkboxes, lists, etc.) appear dimmed or grayed out. デフォルト値: false。                                                                                                                                                                 |

特別な "cell" プロパティを使用すると、特定の列にプロパティをまとめて適用することができます:

| プロパティ名 |              |                | タイプ    | 説明                                                                                                                                                                                                                                                     |
| ------ | ------------ | -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| cell   |              |                | object | 特定の列に適用するプロパティ                                                                                                                                                                                                                                         |
|        | _columnName_ |                | object | _columnName_ is the object name of the list box column                                                                                                                                                                                                 |
|        |              | _propertyName_ | string | "stroke", "fill", "fontStyle", "fontWeight", または "textDecoration" プロパティ (前述参照)。 **Note**: "unselectable" and "disabled" properties can only be defined at row level. "セル" オブジェクトに指定した場合、これらは無視されます。 |

> Style settings made with this property are ignored if other style settings are already defined through expressions (_i.e._, [Style Expression](#style-expression), [Font Color Expression](#font-color-expression), [Background Color Expression](#background-color-expression)).

**Examples**

In a _Color_ project method, write the following code:

```4d
//Color method
//Sets font color for certain rows and background color for Col2 and Col3 columns
Form.meta:=New object
If(This.ID>5) //ID is an attribute of collection objects/entities
  Form.meta.stroke:="purple"
  Form.meta.cell:=New object("Col2";New object("fill";"black");\
  	"Col3";New object("fill";"red"))
Else
  Form.meta.stroke:="orange"
End if
```

**Best Practice:** For optimization reasons, it is usually recommended to create the `meta.cell` object once in the form method:

```4d
  //form method
 Case of
    :(Form event code=On Load)
       Form.colStyle:=New object("Col2";New object("fill";"black");\
       	"Col3";New object("fill";"red"))  
 // you can also define other style sets  
       Form.colStyle2:=New object("Col2";New object("fill";"green");\
       	"Col3";New object("fontWeight";"bold"))  
 End case
```

Then, the _Color_ method would contain:

```4d
  //Color method
 ...
 If(This.ID>5)
    Form.meta.stroke:="purple"
    Form.meta.cell:=Form.colStyle //reuse the same object for better performance
 Else
 	Form.meta.stroke:="orange"
	Form.meta.cell:=Form.colStyle2
 End if
 ...
```

#### JSON 文法

| 名称         | データタイプ | とりうる値                     |
| ---------- | ------ | ------------------------- |
| metaSource | string | 表示される行/セルごとに評価されるオブジェクト式。 |

#### 対象オブジェクト

[List Box](listbox_overview.md)

---

## マルチスタイル

このプロパティは、選択エリアでスタイルの利用を可能にするかどうかを指定するものです。 When this option is checked, 4D interprets any `<SPAN> HTML` tags found in the area.

デフォルトでは、このオプションは有効化されていません。

#### JSON 文法

| 名称         | データタイプ  | とりうる値       |
| ---------- | ------- | ----------- |
| styledText | boolean | true, false |

#### 対象オブジェクト

[Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## 方向

テキストエリアの角度 (回転) を変更します。 テキストエリアは、90°単位で回転させることができます。 それぞれの回転角度を適用するとき、オブジェクトの左下の角は固定されたままで回転していきます:

| 回転角度                         | 戻り値                                            |
| ---------------------------- | ---------------------------------------------- |
| 0 (デフォルト) | ![](../assets/en/FormObjects/orientation1.png) |
| 90                           | ![](../assets/en/FormObjects/orientation2.png) |
| 180                          | ![](../assets/en/FormObjects/orientation3.png) |
| 270                          | ![](../assets/en/FormObjects/orientation4.png) |

In addition to [static text areas](text.md), [input](input_overview.md) text objects can be rotated when they are non-[enterable](properties_Entry.md#enterable). 入力オブジェクトの方向プロパティにて 0°以外のオプションを選んだ場合、 入力可プロパティは (選択されていた場合) 自動的に解除されます。 その際、このオブジェクトは入力順から自動的に除外されます。

#### JSON 文法

| 名称        | データタイプ | とりうる値           |
| --------- | ------ | --------------- |
| textAngle | number | 0, 90, 180, 270 |

#### 対象オブジェクト

[Input](input_overview.md) (non-enterable) - [Text Area](text.md)

---

## 行フォントカラー配列

`Array type list boxes`

リストボックスの各行/セルにカスタマイズしたフォントカラーを適用するために使用します。

倍長整数型の配列の名前を入力しなければなりません。 配列のそれぞれの要素はリストボックスの行 (あるいは列のセル) に対応します。つまりこの配列は、各列に関連づけられている配列と同じサイズでなければいけません。 You can use the constants of the [SET RGB COLORS](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-RGB-COLORS.302-4310385.en.html) theme. もし上のレベルで定義されている背景色をそのままセルに継承したい場合には、対応する配列の要素に -255 を渡します。

#### JSON 文法

| 名称              | データタイプ | とりうる値      |
| --------------- | ------ | ---------- |
| rowStrokeSource | string | 倍長整数型配列の名前 |

#### 対象オブジェクト

[List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## 行スタイル配列

`Array type list boxes`

リストボックスの各行/セルにカスタマイズされた文字スタイルを適用するために使用します。

倍長整数型の配列の名前を入力しなければなりません。 配列のそれぞれの要素はリストボックスの行 (あるいは列のセル) に対応します。つまりこの配列は、各列に関連づけられている配列と同じサイズでなければいけません。 To fill the array (using a method), use the constants of the [Font Styles](https://doc.4d.com/4Dv17R6/4D/17-R6/Font-Styles.302-4310343.en.html) theme. 定数同士を足し合わせてスタイルを組み合わせることもできます。 もし上のレベルで定義されているスタイルをそのままセルに継承したい場合には、対応する配列の要素に -255 を渡します。

#### JSON 文法

| 名称             | データタイプ | とりうる値      |
| -------------- | ------ | ---------- |
| rowStyleSource | string | 倍長整数型配列の名前 |

#### 対象オブジェクト

[List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns)

---

## スタイルタグを全て保存

This property is only available for a [Multi-style](#multi-style) input area.
このオプションがチェックされている場合には、たとえ変更がおこなわれていなくても、エリアはテキストとともにスタイルタグを格納します。 この場合、タグはデフォルトスタイルが適用されます。 このオプションがチェックされていないと、変更されたスタイルタグのみが格納されます。

たとえば、以下のようにスタイルが変更されたテキストがあります:

![](../assets/en/FormObjects/tagStyle1.png)

このプロパティが無効な場合、エリアは更新されたスタイルのみを格納します。 つまり、格納される内容は以下のようになります:

```
What a <SPAN STYLE="font-size:13.5pt">beautiful</SPAN> day!
```

同プロパティが有効な場合には、エリアはすべてのフォーマット情報を格納します。 先頭の汎用タグはデフォルトスタイルを定義し、変更されたスタイルはネストされたタグに書き込まれます。 格納される内容は以下のようになります:

```
<SPAN STYLE="font-family:'Arial';font-size:9pt;text-align:left;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;background-color:#FFFFFF">What a <SPAN STYLE="font-size:13.5pt">beautiful</SPAN> day!</SPAN>
```

#### JSON 文法

| 名称                | データタイプ  | とりうる値                                  |
| ----------------- | ------- | -------------------------------------- |
| storeDefaultStyle | boolean | true, false (デフォルト) |

#### 対象オブジェクト

[Input](input_overview.md)

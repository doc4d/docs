---
id: propertiesBackgroundAndBorder
title: 背景色と境界線
---

## 交互に使用する背景色

奇数番の行/列に使用するための異なる背景色を設定することができます。 By default, _Automatic_ is selected: the column uses the alternate background color set at the list box level.

#### JSON 文法

| 名称            | データタイプ | とりうる値                                                      |
| ------------- | ------ | ---------------------------------------------------------- |
| alternateFill | string | 任意の CSS値; "transparent"; "automatic"; "automaticAlternate" |

#### 対象オブジェクト

[List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns)

---

## 背景色/塗りカラー

オブジェクトの背景色を設定します。

In the case of a list box, by default _Automatic_ is selected: the column uses the background color set at the list box level.

#### JSON 文法

| 名称   | データタイプ | とりうる値                                |
| ---- | ------ | ------------------------------------ |
| fill | string | 任意の css値; "transparent"; "automatic" |

#### 対象オブジェクト

[Hierarchical List](list_overview.md) - [List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [Oval](shapes_overview.md#oval) - [Rectangle](shapes_overview.md#rectangle) - [Text Area](text.md)

#### 参照

[Transparent](#transparent)

---

## 背景色式

`セレクションとコレクション型リストボックス`

リストボックスの各行にカスタムの背景色を指定するための式または変数 (配列変数は使用不可)。 式または変数は表示行ごとに評価され、RGB値を返さなくてはなりません。 For more information, refer to the description of the [`OBJECT SET RGB COLORS`](https://doc.4d.com/4dv20/help/command/en/page628.html) command in the _4D Language Reference manual_.

You can also set this property using the [`LISTBOX SET PROPERTY`](https://doc.4d.com/4dv20/help/command/en/page1440.html) command with `lk background color expression` constant.

> With collection or entity selection type list boxes, this property can also be set using a [Meta Info Expression](properties_Text.md#meta-info-expression).

#### JSON 文法

| 名称            | データタイプ | とりうる値       |
| ------------- | ------ | ----------- |
| rowFillSource | string | RGBカラー値を返す式 |

#### 対象オブジェクト

[List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns)

---

## 境界線スタイル

リストボックスの境界線のスタイルを設定します。

#### JSON 文法

| 名称          | データタイプ | とりうる値                                                             |
| ----------- | ------ | ----------------------------------------------------------------- |
| borderStyle | text   | "system", "none", "solid", "dotted", "raised", "sunken", "double" |

#### 対象オブジェクト

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro areas](writeProArea_overview.md) - [Buttons](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicator](progressIndicator.md) - [Ruler](ruler.md) - [Spinner](spinner.md) - [Stepper](stepper.md) - [Subform](subform_overview.md#overview) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)

---

## 点線タイプ

点線のタイプを、点と白のパターンにより指定します。

#### JSON 文法

| 名称              | データタイプ     | とりうる値                                                                                                                  |
| --------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| strokeDashArray | 数値配列または文字列 | 例:  6個の点と1個の空白のパターンは "6 1" または \[6,1\] によって表します。 |

#### 対象オブジェクト

[Rectangle](shapes_overview.md#rectangle) - [Oval](shapes_overview.md#oval) - [Line](shapes_overview.md#line)

---

## 追加の空白の行を非表示

リストボックスオブジェクト下部に追加される余分な空白行の表示を管理します。 デフォルトで、4D は空のエリアを埋めるためにこのような行を追加します:

![](../assets/en/FormObjects/property_hideExtraBlankRows1.png)

このオプションをチェックすると、これらの空白行を除去することができます。 リストボックスオブジェクトの下部は空のままになります:

![](../assets/en/FormObjects/property_hideExtraBlankRows2.png)

#### JSON 文法

| 名称                 | データタイプ  | とりうる値       |
| ------------------ | ------- | ----------- |
| hideExtraBlankRows | boolean | true, false |

#### 対象オブジェクト

[List Box](listbox_overview.md#overview)

---

## 線カラー

オブジェクトの線の色を指定します。
カラーは次の方法で指定できます:

- カラーネーム - 例: "red"
- 16進数値 - 例: "#ff0000"
- RGB値 - 例: "rgb(255,0,0)"

You can also set this property using the [`OBJECT SET RGB COLORS`](https://doc.4d.com/4dv20/help/command/en/page628.html) command.

#### JSON 文法

| 名称     | データタイプ | とりうる値                                |
| ------ | ------ | ------------------------------------ |
| stroke | string | 任意の css値; "transparent"; "automatic" |

> This property is also available for text based objects, in which case it designates both the font color and the object's lines, see [Font color](properties_Text.md#font-color).

#### 対象オブジェクト

[Line](shapes_overview.md#line) - [Oval](shapes_overview.md#oval) - [Rectangle](shapes_overview.md#rectangle)

---

## 線幅

線の幅を指定します。

#### JSON 文法

| 名称          | データタイプ | とりうる値                                                             |
| ----------- | ------ | ----------------------------------------------------------------- |
| strokeWidth | number | 0 for smallest width on a printed form, or any integer value < 20 |

#### 対象オブジェクト

[Line](shapes_overview.md#line) - [Oval](shapes_overview.md#oval) - [Rectangle](shapes_overview.md#rectangle)

---

## 行背景色配列

`Array type list boxes`

リストボックスまたはリストボックス列の各行にカスタムの背景色を適用するのに使用する配列名です。

倍長整数型の配列の名前を入力しなければなりません。 配列のそれぞれの要素はリストボックスの行 (あるいは列のセル) に対応します。つまりこの配列は、各列に関連づけられている配列と同じサイズでなければいけません。 You can use the constants of the [SET RGB COLORS](https://doc.4d.com/4Dv20/4D/20.1/SET-RGB-COLORS.302-6481080.en.html) theme. もし上のレベルで定義されている背景色をそのままセルに継承したい場合には、対応する配列の要素に -255 を渡します。

たとえば、リストボックスプロパティにてグレー/ライトグレーカラーが行の交互背景色として設定されているとします。 同じリストボックスに行背景色配列が指定されており、行内で負の値が一つでもあれば色をオレンジに変えます:

```4d
 <>_BgndColors{$i}:=0x00FFD0B0 // orange
 <>_BgndColors{$i}:=-255 // default value
```

![](../assets/en/FormObjects/listbox_styles1.png)

次に、負の値を持つセルの色を濃いオレンジで示したい場合、 To do this, you set a background color array for each column, for example `<>_BgndColor_1`, `<>_BgndColor_2` and `<>_BgndColor_3`. これらの配列の値は、リストボックスプロパティに設定されているものや、全体用の行背景色配列よりも優先されます。

```4d
 <>_BgndColorsCol_3{2}:=0x00FF8000 // dark orange
 <>_BgndColorsCol_2{5}:=0x00FF8000
 <>_BgndColorsCol_1{9}:=0x00FF8000
 <>_BgndColorsCol_1{16}:=0x00FF8000
```

![](../assets/en/FormObjects/listbox_styles2.png)

You can get the same result using the [`LISTBOX SET ROW FONT STYLE`](https://doc.4d.com/4dv20/help/command/en/page1268.html) and [`LISTBOX SET ROW COLOR`](https://doc.4d.com/4dv20/help/command/en/page1270.html) commands. コマンドを使う利点は、スタイル/カラー配列をあらかじめ列に設定する必要がないことです。この場合、これらはコマンドによって動的に作成されます。

#### JSON 文法

| 名称            | データタイプ | とりうる値      |
| ------------- | ------ | ---------- |
| rowFillSource | string | 倍長整数型配列の名前 |

#### 対象オブジェクト

[List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## 透過

リストボックスの背景を透明にします。 When set, any [alternate background color](#alternate-background-color) or [background color](#background-color-fill-color) defined for the column is ignored.

#### JSON 文法

| 名称   | データタイプ | とりうる値         |
| ---- | ------ | ------------- |
| fill | text   | "transparent" |

#### 対象オブジェクト

[List Box](listbox_overview.md#overview)

#### 参照

[Background Color / Fill Color](#background-color-fill-color)

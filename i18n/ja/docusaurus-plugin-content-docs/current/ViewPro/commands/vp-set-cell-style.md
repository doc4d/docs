---
id: vp-set-cell-style
title: VP SET CELL STYLE
---

<!-- REF #_method_.VP SET CELL STYLE.Syntax -->

**VP SET CELL STYLE** ( _rangeObj_ : Object  ; _styleObj_  : Object) <!-- END REF -->

<!-- REF #_method_.VP SET CELL STYLE.Params -->

| 引数       | タイプ    |    | 説明         |                  |
| -------- | ------ | -- | ---------- | ---------------- |
| rangeObj | Object | -> | レンジオブジェクト  |                  |
| styleObj | Object | -> | スタイルオブジェクト | <!-- END REF --> |

#### 説明

`VP SET CELL STYLE` コマンドは、<!-- REF #_method_.VP SET CELL STYLE.Summary -->_styleObj_ に定義されているスタイルを、_rangeObj_ で定義されたセルに適用します<!-- END REF -->。

_rangeObj_ 引数には、スタイルを適用したいセルのレンジを渡します。 _rangeObj_ に複数のセルが含まれる場合、スタイルはそれぞれのセルに割り当てられます。

> Borders applied with `VP SET CELL STYLE` will be applied to each cell of the _rangeObj_, as opposed to the [VP SET BORDER](vp-set-border.md) command which applies borders to the _rangeObj_ as a whole.

_styleObj_ にはスタイル設定を格納したオブジェクトを渡します。 既存のスタイルシートを使用することもできますし、新しいスタイルを作成することも可能です。 _styleObj_ に既存のスタイルシートと、追加のスタイル設定の両方が格納されている場合、既存のスタイルシートが先に適用され、そのあとに追加の設定が適用されます。

スタイルを削除してデフォルトのスタイル設定 (あれば) に戻すには、NULL値を渡します:

- _styleObj_ 引数として NULL値を渡した場合、_rangeObj_ のレンジのスタイルシートはすべて削除されます。
- 属性に NULL値を指定すると、当該属性は _rangeObj_ から削除されます。

For more information about style objects and style sheets, see the [Style Objects](../configuring.md#style-objects) paragraph.

#### 例題

```4d
$style:=New object
$style.font:="8pt Arial"
$style.backColor:="Azure"
$style.foreColor:="red"
$style.hAlign:=1
$style.isVerticalText:=True
$style.borderBottom:=New object("color";"#800080";"style";vk line style thick)
$style.backgroundImage:=Null // 特定の属性を削除します

VP SET CELL STYLE(VP Cell("ViewProArea";1;1);$style)
```

![](../../assets/en/ViewPro/cmd_vpSetCellStyle.PNG)

#### 参照

[VP ADD STYLESHEET](vp-add-stylesheet.md)<br/>
[VP Font to object](vp-font-to-object.md)<br/>
[VP Get cell style](vp-get-cell-style.md)<br/>
[VP Object to font](vp-object-to-font.md)<br/>
[VP SET BORDER](vp-set-border.md)<br/>
[VP SET DEFAULT STYLE](vp-set-default-style.md)

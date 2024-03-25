---
id: vp-set-value
title: VP SET VALUE
---

<!-- REF #_method_.VP SET VALUE.Syntax -->

**VP SET VALUE** ( _rangeObj_ : Object ; _valueObj_ : Object ) <!-- END REF -->

<!-- REF #_method_.VP SET VALUE.Params -->

| 引数       | タイプ    |    | 説明               |                  |
| -------- | ------ | -- | ---------------- | ---------------- |
| rangeObj | Object | -> | レンジオブジェクト        |                  |
| valueObj | Object | -> | セルの値とフォーマットオプション | <!-- END REF --> |

#### 説明

`VP SET VALUE` コマンドは、<!-- REF #_method_.VP SET VALUE.Summary -->指定されたセルレンジに値を割り当てます<!-- END REF -->。

The command allows you to use a generic code to set and format the types of values in _rangeObj_, whereas other commands, such as [`VP SET TEXT VALUE`](vp-set-text-value.md) and [`VP SET NUM VALUE`](vp-set-num-value.md), reduce the values to specific types.

In _rangeObj_, pass a range of the cell(s) (created for example with [`VP Cell`](vp-cell) or [`VP Column`](vp-column.md)) whose value you want to specify. _rangeObj_ 引数に複数のセルが含まれる場合、指定された値はそれぞれのセルに対して繰り返し割り当てられます。

The parameter _valueObj_ is an object that includes properties for the value and the [format](../configuring.md#cell-format) to assign to _rangeObj_. このオブジェクトには以下のプロパティを含めることができます:

| プロパティ  | タイプ                                      | 説明                                                                                                                                              |
| ------ | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| value  | Integer, Real, Boolean, Text, Date, Null | _rangeObj_ のレンジに対して割り当てる値 (時間型を除く)。 セルの中身を消去するためには Null を渡します。                                                               |
| time   | Real                                     | _rangeObj_ のレンジに対して割り当てる時間 (秒単位)                                                                                             |
| format | Text                                     | 値や日時に対するパターン For information on patterns and formatting characters, please refer to the [Cell Format](../configuring.md#cell-format) paragraph. |

#### 例題

```4d
// セルの値を False に設定します
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";False))
 
// セルの値を 2 に設定します
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";2))
 
// セルの値を $125,571.35 に設定します
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";125571.35;"format";"_($* #,##0.00_)"))
 
// セルの値を Hello World!
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";"Hello World!"))
 
// セルの値を現在の日付に設定します
VP SET VALUE(VP Cell("ViewProArea";4;2);New object("value";Current date))
 
// セルの値を現在の時間に設定します
VP SET VALUE(VP Cell("ViewProArea";5;2);New object("time";Current hour))
 
// セルの値を特定の日付と時間に設定します
VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";!2024-12-18!);"time";?14:30:10?;"format";vk pattern full date time))
 
// セルの中身を消去します
VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";Null))
```

#### 参照

[Cell Format](../configuring.md#cell-format)<br/>
[VP Get values](vp-get-value.md)<br/>
[VP SET VALUE](vp-set-value.md)<br/>
[VP SET BOOLEAN VALUE](vp-set-boolean-value.md)<br/>
[VP SET DATE TIME VALUE](vp-set-date-time-value.md)<br/>
[VP SET FIELD](vp-set-field.md)<br/>
[VP SET FORMULA](vp-set-formula.md)<br/>
[VP SET NUM VALUE](vp-set-num-value.md)<br/>
[VP SET TEXT VALUE](vp-set-text-value.md)<br/>
[VP SET TIME VALUE](vp-set-time-value.md)

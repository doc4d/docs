---
id: vp-set-time-value
title: VP SET TIME VALUE
---

<!-- REF #_method_.VP SET TIME VALUE.Syntax -->

**VP SET TIME VALUE** ( _rangeObj_ : Object ; _timeValue_ : Text { ; _formatPattern_ : Text }  ) <!-- END REF -->

<!-- REF #_method_.VP SET TIME VALUE.Params -->

| 引数            | タイプ    |    | 説明        |                  |
| ------------- | ------ | -- | --------- | ---------------- |
| rangeObj      | Object | -> | レンジオブジェクト |                  |
| timeValue     | Text   | -> | 設定する時間値   |                  |
| formatPattern | Text   | -> | 値のフォーマット  | <!-- END REF --> |

#### 説明

`VP SET TIME VALUE` コマンドは、<!-- REF #_method_.VP SET TIME VALUE.Summary -->指定されたセルレンジに時間値を割り当てます<!-- END REF -->。

In _rangeObj_, pass a range of the cell(s) (created for example with [`VP Cell`](vp-cell.md) or [`VP Column`](vp-column.md)) whose value you want to specify. _rangeObj_ 引数に複数のセルが含まれる場合、指定された値はそれぞれのセルに対して繰り返し割り当てられます。

_timeValue_ 引数には、_rangeObj_ 引数のレンジに割り当てる時間 (秒単位) を指定します。

The optional _formatPattern_ defines a [pattern](../configuring.md#cell-format) for the _timeValue_ parameter.

#### 例題

```4d
// セルの値を現在の時間に設定します
VP SET TIME VALUE(VP Cell("ViewProArea";5;2);Current time)

// セルの値を、指定されたフォーマットの特定の時間に設定します
VP SET TIME VALUE(VP Cell("ViewProArea";5;2);?12:15:06?;vk pattern long time)
```

#### 参照

[Cell Format](../configuring.md#cell-format)<br/>
[VP SET DATE TIME VALUE](vp-set-date-time-value.md)<br/>
[VP SET VALUE](vp-set-value.md)

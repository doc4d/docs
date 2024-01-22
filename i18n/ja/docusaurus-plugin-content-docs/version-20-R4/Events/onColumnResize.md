---
id: onColumnResize
title: On Column Resize
---

| コード | 呼び出し元                                                                                                                                                                                | 定義                                               |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| 33  | [4D View Pro Area](../FormObjects/viewProArea_overview.md) - [List Box](../FormObjects/listbox_overview.md) - [List Box Column](../FormObjects/listbox_overview.md#list-box-columns) | ユーザーのマウス操作によって、またはフォームウィンドウのリサイズによって、カラムの幅が変更された |

## 説明

### リストボックス

このイベントは、ユーザーによってリストボックスの列幅が変更されたときに生成されます。 The event is triggered "live", _i.e._, sent continuously during the event, for as long as the list box or column concerned is being resized. This resizing is performed manually by a user, or may occur as a result of the list box and its column(s) being resized along with the form window itself (whether the form is resized manually or using the `RESIZE FORM WINDOW` command).

> The `On Column Resize` event is not triggered when a [fake column](../FormObjects/properties_ResizingOptions.md#about-the-fake-blank-column) is resized.

### 4D View Pro

このイベントはカラムの幅がユーザーによって変更されたときに生成されます。 On this context, the [event object](overview.md#event-object) returned by the `FORM Event` command contains:

| プロパティ       | タイプ     | 説明                                                                     |
| ----------- | ------- | ---------------------------------------------------------------------- |
| code        | longint | On Column Resize                                                       |
| description | text    | "On Column Resize"                                                     |
| objectName  | text    | 4D View Pro エリア名                                                       |
| sheetName   | text    | イベントが発生したシート名                                                          |
| range       | object  | 幅が変更されたカラムのセルレンジ                                                       |
| header      | boolean | 行ヘッダーカラム (最初のカラム) がリサイズされた場合には true、それ以外の場合には false |

#### 例題

```4d
 If(FORM Event.code=On Column Resize)
    VP SET CELL STYLE(FORM Event.range;New object("hAlign";vk horizontal align right))
 End if
```

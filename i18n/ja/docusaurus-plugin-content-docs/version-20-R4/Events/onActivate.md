---
id: onActivate
title: On Activate
---

| コード | 呼び出し元 | 定義                                         |
| --- | ----- | ------------------------------------------ |
| 11  | フォーム  | フォームウィンドウが最前面のウィンドウになった、またはサブフォームがフォーカスを得た |

## 説明

フォームのウィンドウが背面に送られていた場合、そのウィンドウが最前面になったときにこのイベントが呼ばれます。

このイベントは個々のオブジェクトには適用されず、フォーム全体に適用されます。 Consequently, if the `On Activate` form event property is selected, only the form will have its form method called.

In the case of a subform, this event is passed to the subform when the container gets the focus (if it has the [focusable](FormObjects/properties_Entry.md#focusable) property).

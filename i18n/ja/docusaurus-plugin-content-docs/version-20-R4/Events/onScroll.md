---
id: onScroll
title: On Scroll
---

| コード | 呼び出し元                                                                                                                                               | 定義                                                  |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| 59  | [Input](FormObjects/input_overview.md) of the `picture` [Type](FormObjects/properties_Object.md#type) - [List Box](FormObjects/listbox_overview.md) | マウスやキーボードを使用して、ユーザーがピクチャーオブジェクトやリストボックスの内容をスクロールした。 |

## 説明

このイベントは、ピクチャー入力またはリストボックスのコンテキストで生成されます。

This event is triggered after any other user event related to the scrolling action ([On Clicked](onClicked.md), [On After Keystroke](onAfterKeystroke.md), etc.). このイベントは、オブジェクトメソッドの中でのみ生成されます (フォームメソッドでは生成されません)。

The event is triggered when the scroll is the result of a user action: using the scroll bars and/or cursors, using the mouse wheel or [the keyboard](FormObjects/properties_Appearance.md#vertical-scroll-bar). It is not generated when the object is scrolled due to the execution of the `OBJECT SET SCROLL POSITION` command.

### ピクチャー入力

このイベントは、ユーザーがピクチャー入力 (フィールドや変数) 内のピクチャーをスクロールすると生成されます。 You can scroll the contents of a picture area when the size of the area is smaller than its contents and the [display format](FormObjects/properties_Display.md#picture-format) is "Truncated (non Centered)".

### リストボックス

このイベントは、ユーザーがリストボックスの行や列をスクロールすると生成されます。

---
id: onMouseEnter
title: On Mouse Enter
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | 定義                        |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| 35  | [4D Write Pro area](FormObjects/writeProArea_overview) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | マウスカーソルがオブジェクトの描画エリア内に入った |

## 説明

このイベントは、マウスカーソルがフォームオブジェクトの描画エリアに入ったときに一度だけ発生します。

The `On Mouse Enter` event updates the _MouseX_ and _MouseY_ system variables.

Objects that are made invisible using the `OBJECT SET VISIBLE` command or the [Visibility](FormObjects/properties_Display.md#visibility) property do not generate this event.

### コールスタック

If the `On Mouse Enter` event has been checked for the form, it is generated for each form object. あるオブジェクトにおいてチェックされている場合は、そのオブジェクトに対してのみ生成されます。 重なったオブジェクトがある場合はトップレベルから順に、イベントを処理することができる最初のオブジェクトによって生成されます。

### 参照

- [`On Mouse Move`](onMouseMove.md)
- [`On Mouse Leave`](onMouseLeave.md)

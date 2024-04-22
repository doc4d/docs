---
id: onMouseUp
title: On Mouse Up
---

| コード | 呼び出し元                                                                                                 | 定義                             |
| --- | ----------------------------------------------------------------------------------------------------- | ------------------------------ |
| 2   | [Input](FormObjects/input_overview.md) of the `picture` [Type](FormObjects/properties_Object.md#type) | ユーザーがピクチャーオブジェクト内にて左マウスボタンを離した |

## 説明

The `On Mouse Up` event is generated when the user has just released the left mouse button while dragging in a picture input. このイベントはたとえば、SVGエリア内でユーザーがオブジェクトを移動、リサイズ、描画することを可能にしたい場合に有用です。

When the `On Mouse Up` event is generated, you can get the local coordinates where the mouse button was released. These coordinates are returned in the `MouseX` and `MouseY` System variables. 座標はピクセル単位で表現され、ピクチャーの左上隅が起点 (0,0) となります。

When using this event, you must also use the `Is waiting mouse up` command to handle cases where the "state manager" of the form is desynchronized, i.e. when the `On Mouse Up` event is not received after a click. これはたとえば、マウスボタンがリリースされる前にフォーム上にアラートダイアログボックスが表示された場合などです。 For more information and an example of use of the `On Mouse Up` event, please refer to the description of the `Is waiting mouse up` command.

> If the [Draggable](FormObjects/properties_Action.md#draggable) option is enabled for the picture object, the `On Mouse Up` event is never generated.

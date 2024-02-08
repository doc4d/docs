---
id: onDoubleClicked
title: On Double Clicked
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | 定義                 |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| 13  | [4D View Pro エリア](FormObjects/viewProArea_overview.md) - [4D Write Pro エリア](FormObjects/writeProArea_overview) - [ボタン](FormObjects/button_overview.md) - [ボタングリッド](FormObjects/buttonGrid_overview.md) - [チェックボックス](FormObjects/checkbox_overview.md) - [コンボボックス](FormObjects/comboBox_overview.md) - [ドロップダウンリスト](FormObjects/dropdownList_Overview.md) - フォーム - [階層リスト](FormObjects/list_overview.md) - [入力](FormObjects/input_overview.md) - [リストボックス](FormObjects/listbox_overview.md) - [リストボックス列](FormObjects/listbox_overview.md#リストボックス列) - [ピクチャーボタン](FormObjects/pictureButton_overview.md) - [ピクチャーポップアップメニュー](FormObjects/picturePopupMenu_overview.md) - [プラグインエリア](FormObjects/pluginArea_overview.md) - [進捗インジケーター](FormObjects/progressIndicator.md) - [ラジオボタン](FormObjects/radio_overview.md) - [ルーラー](FormObjects/ruler.md) - [スピナー](FormObjects/spinner.md) - [スプリッター](FormObjects/splitters.md) - [ステッパー](FormObjects/stepper.md) - [タブコントロール](FormObjects/tabControl.md) | オブジェクト上でダブルクリックされた |


## 説明

`On Double Clicked` イベントは、ユーザーがオブジェクトをダブルクリックしたときに発生します。 ダブルクリック間隔の最大時間は、システム環境設定で定義されています。

If the [`On Clicked`](onClicked.md) or `On Double Clicked` object event property is selected for an object, you can detect and handle the clicks within or on the object, using the `FORM event` command that returns [`On Clicked`](onClicked.md) or `On Double Clicked`, depending on the case.

両イベントがオブジェクトに対し選択されている場合、ダブルクリックがおこなわれるとまず `On Clicked` が、そして `On Double Clicked` イベントが生成されます。

### 4D View Pro

This event is generated when the user double-clicks anywhere on a 4D View Pro document. このコンテキストにおいて、`FORM Event` コマンドによって返される [イベントオブジェクト](overview.md#イベントオブジェクト) には以下のプロパティが含まれています:

| プロパティ       | タイプ     | 説明                  |
| ----------- | ------- | ------------------- |
| code        | longint | 13                  |
| description | text    | "On Double Clicked" |
| objectName  | text    | 4D View Pro エリア名    |
| sheetName   | text    | イベントが発生したシート名       |
| range       | object  | セルのレンジ              |

#### 例題

```4d
 If(FORM Event.code=On Double Clicked)
   $value:=VP Get value(FORM Event.range)
 End if
```
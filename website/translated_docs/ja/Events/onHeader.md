---
id: onHeader
title: On Header
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | 定義                             |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| 5   | [4D Write Pro エリア](FormObjects/writeProArea_overview) - [ボタン](FormObjects/button_overview.md) - [ボタングリッド](FormObjects/buttonGrid_overview.md) - [チェックボックス](FormObjects/checkbox_overview.md) - [ドロップダウンリスト](FormObjects/dropdownList_Overview.md) - フォーム (リストフォームのみ) - [階層リスト](FormObjects/list_overview.md) - [入力](FormObjects/input_overview.md) - [ピクチャーボタン](FormObjects/pictureButton_overview.md) - [ピクチャーポップアップメニュー](FormObjects/picturePopupMenu_overview.md) - [プラグインエリア](FormObjects/pluginArea_overview.md) - [進捗インジケーター](FormObjects/progressIndicator.md) - [ラジオボタン](FormObjects/radio_overview.md) - [ルーラー](FormObjects/ruler.md) - [スピナー](FormObjects/spinner.md) - [スプリッター](FormObjects/splitters.md) - [ステッパー](FormObjects/stepper.md) - [タブコントロール](FormObjects/tabControl.md) | フォームのヘッダーエリアが印刷あるいは表示されようとしている |


## 説明

`On Header` イベントは、`DISPLAY SELECTION` や `MODIFY SELECTION` によって、リストフォームでレコードを表示されようとしているときに呼び出されます。

> このイベントは、プロジェクトフォームでは選択できず、**テーブルフォーム** でのみ利用できます。

このコンテキストにおいて、メソッドやフォームイベントが呼び出される順序は以下のとおりです:

- For each object in the header area:
    - Object method with `On Header` event
    - Form method with `On Header` event

> Printed records are handled using the [`On Display Detail`](onDisplayDetail.md) event.

Calling a 4D command that displays a dialog box from the `On Header` event is not allowed and will cause a syntax error to occur. 以下のコマンドが該当します: `ALERT`, `DIALOG`, `CONFIRM`, `Request`, `ADD RECORD`, `MODIFY RECORD`, `DISPLAY SELECTION`, `MODIFY SELECTION`。
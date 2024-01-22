---
id: onDisplayDetail
title: On Display Detail
---

| コード | 呼び出し元                                              | 定義                                        |
| --- | -------------------------------------------------- | ----------------------------------------- |
| 8   | Form - [List Box](FormObjects/listbox_overview.md) | レコードがリストフォーム中に、あるいは行がリストボックス中に表示されようとしている |

## 説明

The `On Display Detail` event can be used in the following contexts:

### 出力フォーム

A record is about to be displayed in a list form displayed via `DISPLAY SELECTION` and `MODIFY SELECTION`.

> This event cannot be selected for project forms, it is only available with **table forms**.

このコンテキストにおいて、メソッドやフォームイベントが呼び出される順序は以下のとおりです:

- レコードごとに:
  - 詳細エリアのオブジェクトごとに:
    - Object method with `On Display Detail` event
  - Form method with `On Display Detail` event

> The header area is handled using the [`On Header`](onHeader.md) event.

Calling a 4D command that displays a dialog box from the `On Display Detail` event is not allowed and will cause a syntax error to occur. More particularly, the commands concerned are: `ALERT`, `DIALOG`, `CONFIRM`, `Request`, `ADD RECORD`, `MODIFY RECORD`, `DISPLAY SELECTION`, and `MODIFY SELECTION`.

### セレクションリストボックス

This event is generated when a row of a [**selection type**](FormObjects/listbox_overview.md#selection-list-boxes) list box is displayed.

### Displayed line number

The `Displayed line number` 4D command works with the `On Display Detail` form event. このコマンドは、レコードのリストまたはリストボックスの行が画面に表示されるときに処理されている行の番号を返します。

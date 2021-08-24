---
id: onCloseDetail
title: On Close Detail
---

| コード | 呼び出し元                                             | 定義                         |
| --- | ------------------------------------------------- | -------------------------- |
| 26  | フォーム - [リストボックス](FormObjects/listbox_overview.md) | 入力フォームから離れ、出力フォームに戻ろうとしている |


## 説明

`On Close Detail` イベントは次のコンテキストで利用できます:

- **Output forms**: the detail form is closed and the user goes back to the list form. This event cannot be selected for project forms, it is only available with **table forms**.
- List box of the [**selection type**](FormObjects/listbox_overview.md#selection-list-boxes): This event is generated when a record displayed in the [detail form](FormObjects/properties_ListBox.md#detail-form-name) associated with a selection type list box is about to be closed (regardless of whether or not the record was modified).


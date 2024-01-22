---
id: onRowMoved
title: On Row Moved
---

| コード | 呼び出し元                                                                                                                                                | 定義                             |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| 34  | [List Box of the array type](FormObjects/listbox_overview.md#array-list-boxes) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | リストボックスの行がユーザーのドラッグ＆ドロップで移動された |

## 説明

This event is generated when a row of the list box ([array type only](FormObjects/listbox_overview.md#array-list-boxes)) is moved by the user using drag and drop ([if allowed](FormObjects/properties_Action.md#movable-rows). ただし、元の場所にドロップされた場合には生成されません。

The `LISTBOX MOVED ROW NUMBER` command returns the new position of the row.

---
id: onColumnMoved
title: On Column Moved
---

| コード | 呼び出し元                                                                                                                   | 定義                             |
| --- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| 32  | [List Box](../FormObjects/listbox_overview.md) - [List Box Column](../FormObjects/listbox_overview.md#list-box-columns) | リストボックスの列がユーザーのドラッグ＆ドロップで移動された |


## 説明

This event is generated when a column of the list box is moved by the user using drag and drop ([if allowed](../FormObjects/properties_ListBox.md#locked-columns-and-static-columns)). ただし、元の場所にドロップされた場合には生成されません。

`LISTBOX MOVED COLUMN NUMBER` コマンドは列の新しい位置を返します。 
---
id: onFooterClick
title: On Footer Click
---

| コード | 呼び出し元                                                                                                             | 定義                    |
| --- | ----------------------------------------------------------------------------------------------------------------- | --------------------- |
| 57  | [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | リストボックス列のフッターがクリックされた |

## 説明

このイベントはリストボックスやリストボックス列で利用できます。 このイベントは、リストボックスやリストボックス列のフッターエリアがクリックされたときに生成されます。 In this context, the `OBJECT Get pointer` command returns a pointer to the variable of the footer that is clicked. イベントは左および右クリックどちらでも生成されます。

You can test the number of clicks made by the user by means of the `Clickcount` command.

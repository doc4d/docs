---
id: onAfterSort
title: On After Sort
---

| コード | 呼び出し元                                                                                                             | 定義                      |
| --- | ----------------------------------------------------------------------------------------------------------------- | ----------------------- |
| 30  | [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | リストボックス列内で標準のソートがおこなわれた |

## 説明

This event is generated just after a standard sort is performed (_i.e._ it is NOT generated if $0 returns -1 in the [`On Header Click`](onHeaderClick.md) event). このメカニズムは、ユーザーによっておこなわれた直近の並べ替えの方向を保存するのに使用できます。 In this event, the `Self` command returns a pointer to the variable of the sorted column header.

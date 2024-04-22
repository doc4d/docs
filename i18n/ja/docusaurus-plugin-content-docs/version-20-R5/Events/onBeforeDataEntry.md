---
id: onBeforeDataEntry
title: On Before Data Entry
---

| コード | 呼び出し元                                                                                                             | 定義                          |
| --- | ----------------------------------------------------------------------------------------------------------------- | --------------------------- |
| 41  | [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | リストボックスセルが編集モードに変更されようとしている |

## 説明

このイベントは、リストボックス中のセルが編集される直前に生成されます (入力カーソルが表示される前)。 このイベントを使用して、たとえば表示中と編集中で異なるテキストを表示させることができます。

When the cursor arrives in the cell, the `On Before Data Entry` event is generated in the list box or column method.

- このイベントのコンテキストにおいて、$0 に -1 を設定すると、そのセルは入力不可として扱われます。 If the event was generated after **Tab** or **Shift+Tab** was pressed, the focus goes to either the next cell or the previous one, respectively.
- $0 が -1 でなければ (デフォルトは 0)、列は入力可であり編集モードに移行します。

See also [Managing entry](FormObjects/listbox_overview.md#managing-entry) section.

---
id: onSelectionChange
title: On Selection Change
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                 | 定義               |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| 31  | [4D View Pro area](FormObjects/viewProArea_overview.md) - [4D Write Pro area](FormObjects/writeProArea_overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) | オブジェクト内で選択が変更された |

## 説明

このイベントは様々なコンテキストで発生します。

### 4D View Pro

現在の行や列の選択が変更された。 In this context, the [event object](overview.md#event-object) returned by the `FORM Event` command contains:

| プロパティ         | タイプ     | 説明                    |
| ------------- | ------- | --------------------- |
| code          | longint | 31                    |
| description   | text    | "On Selection Change" |
| objectName    | text    | 4D View Pro エリア名      |
| sheetName     | text    | イベントが発生したシート名         |
| oldSelections | object  | 変更前のセルレンジ             |
| newSelections | object  | 変更後のセルレンジ             |

#### 例題

```4d
 If(FORM Event.code=On Selection Change)
    VP SET CELL STYLE(FORM Event.oldSelections;New object("backColor";Null))
    VP SET CELL STYLE(FORM Event.newSelections;New object("backColor";"red"))
 End if
```

### リストフォーム

リストフォームにおいて、カレントレコードあるいはカレントセレクションの行選択が変更された。

### 階層リスト

階層リスト中の選択がクリックやキーストロークなどで変更された。

### Input & 4D Write Pro

クリックやキーストロークにより、選択されたテキストやカーソルの位置がエリア内で変更された。

### リストボックス

このイベントは、リストボックス内で現在の行や列の選択が変更されるたびに生成されます。

---
id: propertiesHierarchy
title: 階層
---

## 階層リストボックス

`Array type list boxes`

このプロパティを使用してリストボックスの階層表示を設定します。 In the JSON form, this feature is triggered [when the _dataSource_ property value is an array](properties_Object.md#hierarchical-list-box), i.e. a collection.

Additional options (**Variable 1...10**) are available when the _Hierarchical List Box_ option is selected, corresponding to each _dataSource_ array to use as break column. 入力欄に値が入力されると、新しい入力欄が追加されます。 10個までの変数を指定できます。 これらの変数は先頭列に表示される階層のレベルを設定します。

See [Hierarchical list boxes](listbox_overview.md#hierarchical-list-boxes)

#### JSON 文法

| 名称         | データタイプ     | とりうる値             |
| ---------- | ---------- | ----------------- |
| datasource | 文字列のコレクション | 階層を定義する配列名のコレクション |

#### 対象オブジェクト

[List Box](listbox_overview.md)

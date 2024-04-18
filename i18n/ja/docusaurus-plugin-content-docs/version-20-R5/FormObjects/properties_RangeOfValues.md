---
id: propertiesRangeOfValues
title: 値の範囲
---

## デフォルト値

入力オブジェクトにデフォルト値を割り当てることができます。 This property is useful for example when the input [data source](properties_Object.md#variable-or-expression) is a field: the default value is entered when a new record is first displayed. You can change the value unless the input area has been defined as [non-enterable](properties_Entry.md#enterable).

The default value can only be used if the [data source type](properties_Object.md#expression-type) is:

- テキスト/文字列
- 数値/整数
- date
- time
- boolean

日付、時刻、シーケンス番号については、4D が提供する記号を使用することができます。 日付と時刻はシステムから取得されます。 シーケンス番号は 4D が自動で生成します。 自動で使用できるデフォルト値の記号は以下の通りです:

| スタンプ | 意味      |
| ---- | ------- |
| #D   | 本日の日付   |
| #H   | 現在の時刻   |
| #N   | シーケンス番号 |

カレントデータファイルの特定のテーブルにおいて、レコード毎のユニーク番号を生成するためにシーケンス番号を使用することができます。 シーケンス番号は倍長整数型で新規レコード毎に生成されます。 番号は 1 から始まり、1ずつ増加します。 シーケンス番号が割り当てられたレコードがテーブルから削除されても、その番号は再利用されません。 シーケンス番号は各テーブルが保有する内部カウンターが管理します。 For more information, refer to the [Autoincrement](https://doc.4d.com/4Dv17R6/4D/17-R6/Field-properties.300-4354738.en.html#976029) paragraph.

> Do not make confusion between this property and the "[default values](properties_DataSource.md#default-list-of-values)" property that allows to fill a list box column with static values.

#### JSON 文法

| 名称           | データタイプ                              | とりうる値                                          |
| ------------ | ----------------------------------- | ---------------------------------------------- |
| defaultValue | string, number, date, time, boolean | 任意の値。次の記号を含む: "#D", "#H", "#N" |

#### 対象オブジェクト

[Input](input_overview.md)

---

## 除外リスト

除外リストを使用すると、当該リストの項目は入力できなくなります。 ユーザーがこのリストに含まれる値を入力したとき、その入力は自動的に却下され、エラーメッセージが表示されます。

> 階層リストを指定した場合は、第一レベルの項目のみが考慮されます。

#### JSON 文法

| 名称           | データタイプ | とりうる値     |
| ------------ | ------ | --------- |
| excludedList | list   | 除外する値のリスト |

#### 対象オブジェクト

[Combo Box](comboBox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [Input](input_overview.md)

---

## 指定リスト

有効な入力値のリストを指定するために使用します。 たとえば、役職名のリストを指定リストとして設定できます。こうすると、事前に作成されたリスト中の役職名だけ有効な値となります。

指定リストを指定しても、フィールドが選択されたときにリストは自動で表示されません。 If you want to display the required list, assign the same list to the [Choice List](properties_DataSource.md#choice-list) property.
However, unlike the [Choice List](properties_DataSource.md#choice-list) property, when a required list is defined, keyboard entry is no longer possible, only the selection of a list value using the pop-up menu is allowed. If different lists are defined using the [Choice List](properties_DataSource.md#choice-list) and Required List properties, the Required List property has priority.

> 階層リストを指定した場合は、第一レベルの項目のみが考慮されます。

#### JSON 文法

| 名称           | データタイプ | とりうる値      |
| ------------ | ------ | ---------- |
| requiredList | list   | 有効な入力値のリスト |

#### 対象オブジェクト

[Combo Box](comboBox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [Input](input_overview.md)

---
id: comboBoxOverview
title: コンボボックス
---

A combo box is similar to a [drop-down list](dropdownList_Overview.md#overview), except that it accepts text entered from the keyboard and has additional options.

![](../assets/en/FormObjects/combo_box.png)

基本的にコンボボックスは入力エリアと同じように取り扱い、オブジェクト、配列、または選択リストを一連のデフォルト値として使用します。

## コンボボックスの操作

Use the [`On Data Change`](Events/onDataChange.md) event to manage entries into the enterable area, as you would for any input form object.

You initialize a combo box in exactly the same way as a [drop-down list](dropdownList_Overview.md#overview): using an object, an array, or a choice list.

### オブジェクトの使用

> この機能は 4Dプロジェクトでのみ利用可能です。

An [object](Concepts/dt_object.md) encapsulating a [collection](../Concepts/dt_collection.md) can be used as the data source of a combo box. このオブジェクトには、次のプロパティが格納されていなくてはなりません:

| プロパティ          | タイプ             | 説明                                                                                                                                                                                  |
| -------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `値`            | Collection      | 必須 - スカラー値のコレクション。 すべての同じ型の値でなくてはなりません。 Supported types:<li>strings</li><li>numbers</li><li>dates</li><li>times</li>If empty or not defined, the combo box is empty |
| `currentValue` | Collection要素と同じ | ユーザーによる入力値                                                                                                                                                                          |

オブジェクトにその他のプロパティが含まれている場合、それらは無視されます。

When the user enters text into the combo box, the `currentValue` property of the object gets the entered text.

### 配列の使用

Please refer to **Using an array** in the [drop-down list page](dropdownList_Overview.md#using-an-array) for information about how to initialize the array.

ユーザーによってコンボボックスに入力されたテキストは、配列の 0番目の要素が受け取ります。

### 選択リストの使用

入力エリア (列挙型のフィールドまたは変数) の管理のためにコンボボックスを使用したい場合、フィールドまたは変数をフォームオブジェクトのデータソースとして直接参照することができます。 これにより列挙型のフィールド/変数を容易に管理できるようになります。

> 階層リストの場合、第一階層の値のみが表示・選択できます。

To associate a combo box with a field or variable, you can just enter the name of the field or variable directly in the [Variable or Expression](properties_Object.md#variable-or-expression) of the form object in the Property List.

フォームを実行すると、4D が自動的に入力中または表示中のコンボボックスの状態を管理します。ユーザーが値を選択すると、その値はフィールドに保存され、このフィールドの値はフォームが表示されたときにコンボボックスに表示されます:

Please refer to **Using a choice** in the [drop-down list page](dropdownList_Overview.md#using-a-choice-list) for more information.

## オプション

コンボボックスタイプのオブジェクトには、2つの専用オプションがあります:

- [Automatic insertion](properties_DataSource.md#automatic-insertion): enables automatically adding a value to the data source when a user enters a value that is not found in the list associated with the combo box.
- [Excluded List](properties_RangeOfValues.md#excluded-list) (list of excluded values): allows setting a list whose values cannot be entered in the combo box. ユーザーがこのリストに含まれる値を入力したとき、その入力は自動的に却下され、エラーメッセージが表示されます。

> Associating a [list of required values](properties_RangeOfValues.md#required-list) is not available for combo boxes. In an interface, if an object must propose a finite list of required values, then you must use a [drop-down list](dropdownList_Overview.md#overview) object.

## プロパティ一覧

[Alpha Format](properties_Display.md#alpha-format) - [Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Date Format](properties_Display.md#date-format) - [Expression Type](properties_Object.md#expression-type) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Time Format](properties_Display.md#time-format) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

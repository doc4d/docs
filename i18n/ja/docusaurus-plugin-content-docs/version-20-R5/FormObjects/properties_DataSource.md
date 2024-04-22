---
id: propertiesDataSource
title: データソース
---

## 自動挿入

このオプションがチェックされていると、オブジェクトに関連付けられたリストにない値をユーザーが入力した場合に、その値が自動的にメモリー内のリストに追加されます。

When the **automatic insertion** option is not set (default), the value entered is stored in the form object but not in the list in memory.

このプロパティは次のフォームオブジェクトでサポートされています:

- [Combo box](comboBox_overview.md) and [list box column](listbox_overview.md#list-box-columns) form objects associated to a choice list.
- [Combo box](comboBox_overview.md) form objects whose associated list is filled by their array or object datasource.

For example, given a choice list containing "France, Germany, Italy" that is associated with a "Countries" combo box: if the **automatic insertion** property is set and a user enters "Spain", then the value "Spain" is automatically added to the list in memory:

![](../assets/en/FormObjects/comboBox_AutomaticInsertion_example.png)

> デザインモードで定義された選択リストが関連付けられている場合、自動挿入によって、その元のリストが変更されることはありません。

#### JSON 文法

| 名称                 | データタイプ  | とりうる値       |
| ------------------ | ------- | ----------- |
| automaticInsertion | boolean | true, false |

#### 対象オブジェクト

[Combo Box](comboBox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## 選択リスト

選択リストをフォームオブジェクトに関連づけます。 指定できるのは選択リスト名 (リストの参照) またはデフォルト値のコレクションです。

You can also associate choice lists to objects using the [OBJECT SET LIST BY NAME](https://doc.4d.com/4dv19/help/command/en/page237.html) or [OBJECT SET LIST BY REFERENCE](https://doc.4d.com/4dv19/help/command/en/page1266.html) commands.

#### JSON 文法

| 名称         | データタイプ           | とりうる値                                   |
| ---------- | ---------------- | --------------------------------------- |
| choiceList | list, collection | 選択可能な値のリスト                              |
| list       | list, collection | 選択可能な値のリスト (階層リストのみ) |

#### 対象オブジェクト

[Drop-down List](dropdownList_Overview.md) -
[Combo Box](comboBox_overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns)

---

## 選択リスト (静的リスト)

タブコントロールオブジェクトのラベルとして使用する静的な値のリスト。

#### JSON 文法

| 名称     | データタイプ           | とりうる値                  |
| ------ | ---------------- | ---------------------- |
| labels | list, collection | タブコントロールラベルに使用する値のリスト。 |

#### 対象オブジェクト

[Tab Control](tabControl.md)

---

## カレントの項目

`コレクションまたはエンティティセレクションリストボックス`

ユーザーによって選択されたコレクション要素/エンティティが割り当てられる変数あるいは式を指定します。 オブジェクト変数あるいはオブジェクトを受け入れる割り当て可能な式を使用する必要があります。 ユーザーが何も選択しなかった場合、あるいはスカラー値のコレクションを使用した場合、Null 値が割り当てられます。

> このプロパティは「読み取り専用」であり、リストボックスにおけるユーザーアクションに基づいて自動的に更新されます。 この値を編集してリストボックスの選択状態を変更することはできません。

#### JSON 文法

| 名称                | データタイプ | とりうる値     |
| ----------------- | ------ | --------- |
| currentItemSource | string | オブジェクト型の式 |

#### 対象オブジェクト

[List Box](listbox_overview.md#overview)

---

## カレントの項目の位置

`コレクションまたはエンティティセレクションリストボックス`

ユーザーによって選択されたコレクション要素/エンティティの位置を表す倍長整数が割り当てられる変数あるいは式を指定します。

- 要素/エンティティが選択されていない場合、変数あるいは式は 0 を受け取ります。
- 単一の要素/エンティティが選択されている場合、変数あるいは式はその位置を受け取ります。
- 複数の要素/エンティティが選択されている場合、変数あるいは式は最後に選択された要素/エンティティの位置を受け取ります。

> このプロパティは「読み取り専用」であり、リストボックスにおけるユーザーアクションに基づいて自動的に更新されます。 この値を編集してリストボックスの選択状態を変更することはできません。

#### JSON 文法

| 名称                        | データタイプ | とりうる値 |
| ------------------------- | ------ | ----- |
| currentItemPositionSource | string | 数値型の式 |

#### 対象オブジェクト

[List Box](listbox_overview.md)

---

## データタイプ (式の型)

表示される式のデータタイプを定義します。 このプロパティは次のフォームオブジェクトで使用されます:

- [List box columns](listbox_overview.md#list-box-columns) of the selection and collection types.
- [Drop-down lists](dropdownList_Overview.md) associated to objects or arrays.

See also [**Expression Type**](properties_Object.md#expression-type) section.

#### JSON 文法

| 名称                 | データタイプ | とりうる値                                                                                                                                                                                                                                  |
| ------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataSourceTypeHint | string | <li>**list box columns:** "boolean", "number", "picture", "text", date", "time". *Array/selection list box only*: "integer", "object"</li><li>**drop-down lists:** "object", "arrayText", "arrayDate", "arrayTime", "arrayNumber"</li> |

#### 対象オブジェクト

[Drop-down Lists](dropdownList_Overview.md) associated to objects or arrays - [List Box column](listbox_overview.md#list-box-columns)

---

## データタイプ (リスト)

Defines the type of data to save in the field or variable associated to the [drop-down list](dropdownList_Overview.md). このプロパティは次のフォームオブジェクトで使用されます:

- Drop-down lists [associated to a choice list](dropdownList_Overview.md#using-a-choice-list).
- Drop-down lists [associated to a hierarchical choice list](dropdownList_Overview.md#using-a-hierarchical-choice-list).

次の値が提供されています:

- **List reference**: declares that the drop-down list is hierarchical. It means that the drop-down list can display up to two hierarchical levels and its contents can be managed by the 4D language commands of the **Hierarchical Lists** theme.
- **Selected item value** (default): the drop-down list is not hierarchical and the value of the item chosen in the list by the user is saved directly. たとえば、ユーザーが "Blue" という値を選択した場合、この値がフィールドに保存されます。
- **Selected item reference**: the drop-down list is not hierarchical and the reference of the choice list item is saved in the object. This reference is the numeric value associated with each item either through the _itemRef_ parameter of the [`APPEND TO LIST`](https://doc.4d.com/4dv19/help/command/en/page376.html) or [`SET LIST ITEM`](https://doc.4d.com/4dv19/help/command/en/page385.html) commands, or in the list editor. このオプションにより、メモリーを節約することができます。フィールドに数値を保存するのは文字列を保存するより容量が軽いからです。 また、これによりアプリケーションの翻訳が簡単になります。同じ項目の参照値を持つ、異なる言語で書かれた複数のリストを用意しておいて、アプリケーションの言語に応じたリストをロードするだけで多言語に対応できるからです。

Using the **Selected item reference** option requires compliance with the following principles:

- 参照を保存するには、データソースのフィールドまたは変数は、数値型である必要があります (リスト内に表示されている値の型とは関係ありません)。 The [expression](properties_Object.md#expression-type) property is automatically set.
- リストの項目には有効かつ固有の参照が関連付けられている必要があります。
- ドロップダウンリストはフィールドまたは変数と紐づいている必要があります。

#### JSON 文法

| 名称     | データタイプ | とりうる値                |
| ------ | ------ | -------------------- |
| saveAs | string | "value", "reference" |

> Setting only `"dataSourceTypeHint" : "integer"` with a `"type": "dropdown"` form object will declare a hierarchical drop-down list.

#### 対象オブジェクト

[Drop-down Lists](dropdownList_Overview.md) associated to lists

---

## デフォルト値

配列型リストボックスにおいて、リストボックス列のデフォルト値として使用される値のリストです。 These values are automatically available in the [array variable](properties_Object.md#variable-or-expression) associated with this column when the form is executed. この配列を参照することで、ランゲージを使ってオブジェクトを管理することができます。

> Do not make confusion between this property and the "[default value](properties_RangeOfValues.md#default-list-of-values)" property that allows to define a field value in new records.

デフォルト値のリストを入力します。 フォームエディター上で専用のダイアログが開き、改行で区切られた値を入力することができます。

![](../assets/en/FormObjects/defaultValues.png)

> You can also define a [choice list](properties_DataSource.md#choice-list) with the list box column. 選択リストは列の各行において選択可能な値の候補として使用されますが、デフォルト値のリストはカラムの各行に上から順に割り当てられます。

#### JSON 文法

| 名称     | データタイプ     | とりうる値                                                                         |
| ------ | ---------- | ----------------------------------------------------------------------------- |
| values | collection | デフォルト値 (文字列) のコレクション。例: "a", "b", "c", "d" |

#### 対象オブジェクト

[List Box Column (array type only)](listbox_overview.md#list-box-columns)

---

## 式

This description is specific to [selection](listbox_overview.md#selection-list-boxes)
and [collection](listbox_overview.md#collection-or-entity-selection-list-boxes) type list box columns. See also **[Variable or Expression](properties_Object.md#variable-or-expression)** section.

列に割り当てる 4D式です。 以下のものを指定できます:

- A **simple variable** (in this case, it must be explicitly declared for compilation). BLOB と配列型以外のどんな型の変数も使用することができます。 The value of the variable will be generally calculated in the `On Display Detail` event.

- A **field** using the standard [Table]Field syntax ([selection type list box](listbox_overview.md#selection-list-boxes)
  only), for example: `[Employees]LastName`. 以下の型のフィールドを使用できます:
  - String
  - 数値
  - 日付
  - 時間
  - Picture
  - Boolean\
    You can use fields from the Master Table or from other tables.

- A **4D expression** (simple expression, formula or 4D method). 式は値を返す必要があります。 The value will be evaluated in the `On Display Detail` and `On Data Change` events. 式の結果は、アプリケーションモードでフォームを実行すると自動で表示されます。 式は、セレクション型リストボックスではマスターテーブルの (カレントまたは命名) セレクションの各レコードごとに、コレクション型リストボックスではコレクションの各要素ごとに、エンティティセレクション型リストボックスではセレクションのエンティティごとに評価されます。 空の場合、列には何も表示されません。
  以下の型の式がサポートされています:
  - String
  - 数値
  - 日付
  - Picture
  - Boolean

For collection/entity selection list boxes, Null or unsupported types are displayed as empty strings.\
When using collections or entity selections, you will usually declare the element property or entity attribute associated to a column within an expression containing [This](https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html). `This` is a dedicated 4D command that returns a reference to the currently processed element. For example, you can use `This.\<propertyPath>` where `\<propertyPath>` is the path of a property in the collection or an entity attribute path to access the current value of each element/entity.
スカラー値のコレクションを使用した場合、4D は各コレクション要素に対して、単一のプロパティ (名前は "value") を持つオブジェクトを作成し、それに要素の値を格納します。 In this case, you will use `This.value` as expression.

If a [non-assignable expression](Concepts/quick-tour.md#expressions) is used (e.g. `[Person]FirstName+" "+[Person]LastName`), the column is never enterable even if the [Enterable](properties_Entry.md#enterable) property is enabled.

If a field, a variable, or an assignable expression (_e.g. Person.lastName_) is used, the column can be enterable or not depending on the [Enterable](properties_Entry.md#enterable) property.

#### JSON 文法

| 名称         | データタイプ | とりうる値                     |
| ---------- | ------ | ------------------------- |
| dataSource | string | 4D変数、フィールド名、あるいは任意のランゲージ式 |

#### 対象オブジェクト

[List Box Column](listbox_overview.md#list-box-columns)

---

## マスターテーブル

`カレントセレクションリストボックス`

使用するカレントセレクションが属するテーブルを指定します。 このテーブルとそのカレントセレクションが、リストボックスの列に割り当てられたフィールドの参照を形成します (フィールド参照やフィールドを含む式)。 ある列が他のテーブルのフィールドを参照しているとしても、表示される行の数はマスターテブルのカレントレコード数となります。

すべてのデータベーステーブルが利用できます。フォームがテーブルに属しているか (テーブルフォームの場合) あるいは属していないか (プロジェクトフォーム) は関係ありません。

#### JSON 文法

| 名称    | データタイプ | とりうる値  |
| ----- | ------ | ------ |
| table | number | テーブル番号 |

#### 対象オブジェクト

[List Box](listbox_overview.md#overview)

---

## 関連付け

このプロパティは以下の場合に表示されます:

- a [choice list](#choice-list) is associated with the object
- for [inputs](input_overview.md) and [list box columns](listbox_overview.md#list-box-columns), a [required list](properties_RangeOfValues.md#required-list) is also defined for the object (both options should use usually the same list), so that only values from the list can be entered by the user.

このプロパティは、選択リストに関連付けされたフィールドまたは変数において、フィールドに保存する内容の型を指定します:

- **Save as Value** (default option): the value of the item chosen in the list by the user is saved directly. たとえば、ユーザーが "Blue" という値を選択した場合、この値がフィールドに保存されます。
- **Save as Reference**: the reference of the choice list item is saved in the object. This reference is the numeric value associated with each item either through the _itemRef_ parameter of the [`APPEND TO LIST`](https://doc.4d.com/4dv19/help/command/en/page376.html) or [`SET LIST ITEM`](https://doc.4d.com/4dv19/help/command/en/page385.html) commands, or in the list editor.

このオプションにより、メモリーを節約することができます。フィールドに数値を保存するのは文字列を保存するより容量が軽いからです。 また、これによりアプリケーションの翻訳が簡単になります。同じ項目の参照値を持つ、異なる言語で書かれた複数のリストを用意しておいて、アプリケーションの言語に応じたリストをロードするだけで多言語に対応できるからです。

リスト項目の参照番号の使用の際には、以下の点に注意する必要があります:

- 参照を保存するには、データソースのフィールドまたは変数は、数値型である必要があります (リスト内に表示されている値の型とは関係ありません)。 The [expression](properties_Object.md#expression-type) property is automatically set.
- リストの項目には有効かつ固有の参照が関連付けられている必要があります。

#### JSON 文法

| 名称     | データタイプ | とりうる値                |
| ------ | ------ | -------------------- |
| saveAs | string | "value", "reference" |

#### 対象オブジェクト

[Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## 選択された項目

`コレクションまたはエンティティセレクションリストボックス`

ユーザーによって選択されている一つ以上のコレクション要素/エンティティが割り当てられる変数あるいは式を指定します。

- コレクションリストボックスにおいては、コレクション変数あるいはコレクションを受け入れる割り当て可能な式を使用する必要があります。
- エンティティセレクションリストボックスにおいては、エンティティセレクションオブジェクトがビルドされます。 オブジェクト変数あるいはオブジェクトを受け入れる割り当て可能な式を使用する必要があります。

> このプロパティは「読み取り専用」であり、リストボックスにおけるユーザーアクションに基づいて自動的に更新されます。 この値を編集してリストボックスの選択状態を変更することはできません。

#### JSON 文法

| 名称                  | データタイプ | とりうる値   |
| ------------------- | ------ | ------- |
| selectedItemsSource | string | コレクション式 |

#### 対象オブジェクト

[List Box](listbox_overview.md#overview)

---

## 命名セレクション

`命名セレクションリストボックス`

使用する命名セレクションを指定します。 有効な命名セレクションの名前を入力しなければなりません。 使用できるのはプロセスあるいはインタープロセス命名セレクションです。 リストボックスの内容はこのセレクションに基づきます。 選択された命名セレクションは、リストボックスが表示される時点で存在し、有効でなければなりません。そうでない場合、リストボックスは空で表示されます。

> 命名セレクションはソート済みのレコードリストです。 これはセレクション中のカレントレコードと並び順をメモリーに保持するために使用されます。 For more information, refer to **Named Selections** section in the _4D Language Reference manual_.

#### JSON 文法

| 名称             | データタイプ | とりうる値       |
| -------------- | ------ | ----------- |
| namedSelection | string | 命名セレクションの名前 |

#### 対象オブジェクト

[List Box](listbox_overview.md#overview)

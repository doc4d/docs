---
id: propertiesSubform
title: サブフォーム
---

---

## 削除を許可

リストサブフォーム内でユーザーがサブレコードを削除できるかどうかを指定します。

#### JSON 文法

| 名称              | データタイプ  | とりうる値                                        |
| --------------- | ------- | -------------------------------------------- |
| deletableInList | boolean | true, false (デフォルトは true) |

#### 対象オブジェクト

[Subform](subform_overview.md)

---

## 詳細フォーム

このプロパティを使用して、サブフォームで使用する詳細フォームを割り当てます。 以下のものを使用できます:

- ウィジェット (ページタイプのサブフォームで、特定の機能を実現するために作成されています)。 In this case, the [list subform](#list-form) and [Source](#source) properties must be empty or not present.\
  You can select a component form name when it is published in the component.

> You can generate [components](Concepts/components.md) providing additional functionalities through subforms.

- the detail form to associate a with the [list subform](#list-form). 詳細フォームはサブレコードを入力したり表示したりするために使用します。 通常、詳細フォームにはリストサブフォームより多くの情報が含まれています。 詳細フォームは、サブフォームと同じテーブルに属していなければなりません。 典型的には、出力フォームをリストフォーム に、入力フォームを詳細フォームに指定します。 詳細フォームを指定しない場合、4Dは自動でテーブルのデフォルト入力フォームを使用します。

#### JSON 文法

| 名称         | データタイプ | とりうる値                                                                                                                                       |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| detailForm | string | テーブルまたはプロジェクトフォームの名前 (文字列), フォームを定義する .json ファイルへの POSIX パス (文字列), またはフォームを定義するオブジェクト |

#### 対象オブジェクト

[Subform](subform_overview.md)

---

## 空行をダブルクリック

リストサブフォームの空行がダブルクリックされた際に実行されるアクションを指定します。 次のオプションから選択することができます:

- 何もしない: ダブルクリックを無視します。
- レコード追加: サブフォーム中に新規レコードを作成し、編集モードにします。 The record will be created directly in the list if the [Enterable in List](#enterable-in-list) property is enabled. Otherwise, it will be created in page mode, in the [detail form](#detail-form) associated with the subform.

#### JSON 文法

| 名称                           | データタイプ | とりうる値                       |
| ---------------------------- | ------ | --------------------------- |
| doubleClickInEmptyAreaAction | string | "addSubrecord", 何もしない場合は "" |

#### 対象オブジェクト

[Subform](subform_overview.md)

#### 参照

[Double click on row](#double-click-on-row)

---

## 行をダブルクリック

`リストサブフォーム`

ユーザーがリストサブフォームの行をダブルクリックした際に実行されるアクションを指定します。 選択可能なオプションは以下の通りです:

- **Do nothing** (default): Double-clicking a row does not trigger any automatic action.
- **Edit Record**: Double-clicking a row displays the corresponding record in the [detail form defined for the list subform](#detail-form). レコードは読み書き可能モードで開かれるので、編集が可能です。
- **Display Record**: Identical to the previous action, except that the record is opened in read-only mode so it cannot be modified.

Regardless of the action selected/chosen, the `On Double clicked` form event is generated.

For the last two actions, the On `Open Detail` form event is also generated. The `On Close Detail` is then generated when a record displayed in the detail form associated with the list box is about to be closed (regardless of whether or not the record was modified).

#### JSON 文法

| 名称                     | データタイプ | とりうる値                               |
| ---------------------- | ------ | ----------------------------------- |
| doubleClickInRowAction | string | "editSubrecord", "displaySubrecord" |

#### 対象オブジェクト

[Subform](subform_overview.md)

#### 参照

[Double click on empty row](#double-click-on-empty-row)

---

## リスト更新可

When a list subform has this property enabled, the user can modify record data directly in the list, without having to use the [associated detail form](#detail-form).

> これをおこなうには、更新するフィールド上で 2回クリックをおこない、編集モードにします (ダブルクリックにならないようクリックの間隔をあけなければなりません)。

#### JSON 文法

| 名称              | データタイプ  | とりうる値       |
| --------------- | ------- | ----------- |
| enterableInList | boolean | true, false |

#### 対象オブジェクト

[Subform](subform_overview.md)

---

## リストフォーム

このプロパティを使用して、サブフォームで使用するリストフォームを割り当てます。 リストサブフォームを使うことで、他のテーブルのデータを入力、表示、および更新することができます。

List subforms can be used for data entry in two ways: the user can enter data directly in the subform, or enter it in an [input form](#detail-form). 後者の設定では、サブフォームとして使用されるフォームがリストフォーム、 入力のために使用されるフォームが詳細フォームとなります。

#### JSON 文法

| 名称       | データタイプ | とりうる値                                                                                                                                       |
| -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| listForm | string | テーブルまたはプロジェクトフォームの名前 (文字列), フォームを定義する .json ファイルへの POSIX パス (文字列), またはフォームを定義するオブジェクト |

#### 対象オブジェクト

[Subform](subform_overview.md)

---

## ソース

リストサブフォームが属するテーブル (あれば) を指定します。

#### JSON 文法

| 名称    | データタイプ | とりうる値                   |
| ----- | ------ | ----------------------- |
| table | string | 4D テーブル名, テーブルなしの場合は "" |

#### 対象オブジェクト

[Subform](subform_overview.md)

---

## 選択モード

リストボックス行の選択モードを指定します:

- **None**: Rows cannot be selected if this mode is chosen. Clicking on the list will have no effect unless the [Enterable in list](subform_overview.md#enterable-in-list) option is enabled. The navigation keys only cause the list to scroll; the `On Selection Change` form event is not generated.
- **Single**: One row at a time can be selected in this mode. クリックすることで、行を選択できます。 A **Ctrl+click** (Windows) or **Command+click** (macOS) on a row toggles its state (between selected or not).\
  The Up and Down arrow keys select the previous/next row in the list. その他のナビゲーションキーはリストをスクロールします。 The `On Selection Change` form event is generated every time the current row is changed.
- **Multiple**: Several rows can be selected simultaneously in this mode.
  - The selected subrecords are returned by the `GET HIGHLIGHTED RECORDS` command.
  - レコードはクリックにより選択されますが、カレントレコードは変更されません。
  - A **Ctrl+click** (Windows) or **Command+click** (macOS) on a record toggles its state (between selected or not). 上下キーを使うとリストの前後のレコードが選択されます。 その他のナビゲーションキーはリストをスクロールします。 The `On Selection Change` form event is generated every time the selected record is changed.

#### JSON 文法

| 名称            | データタイプ | とりうる値                        |
| ------------- | ------ | ---------------------------- |
| selectionMode | string | "multiple", "single", "none" |

#### 対象オブジェクト

[Subform](subform_overview.md)

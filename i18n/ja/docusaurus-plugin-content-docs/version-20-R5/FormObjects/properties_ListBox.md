---
id: propertiesListBox
title: リストボックス
---

---

## 列

リストボックス列のコレクション。

#### JSON 文法

| 名称      | データタイプ         | とりうる値                 |
| ------- | -------------- | --------------------- |
| columns | 列オブジェクトのコレクション | リストボックス列のプロパティを格納します。 |

For a list of properties supported by column objects, please refer to the [Column Specific Properties](listbox_overview.md#column-specific-properties) section.

#### 対象オブジェクト

[List Box](listbox_overview.md)

---

## 詳細フォーム名

`セレクション型リストボックス`

リストボックスの個々のレコードを編集・表示する際に使用するフォームを指定します。

指定されたフォームは以下のタイミングで表示されます:

- when using `Add Subrecord` and `Edit Subrecord` standard actions applied to the list box (see [Using standard actions](https://doc.4d.com/4Dv20/4D/20/Using-standard-actions.300-6263819.en.html)),
- when a row is double-clicked and the [Double-click on Row](#double-click-on-row) property is set to "Edit Record" or "Display Record".

#### JSON 文法

| 名称         | データタイプ | とりうる値                                                                                                                                              |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| detailForm | string | <li>Name (string) of table or project form</li><li>POSIX path (string) to a .json file describing the form</li><li>Object describing the form</li> |

#### 対象オブジェクト

[List Box](listbox_overview.md)

---

## 行をダブルクリック

`セレクション型リストボックス`

ユーザーがリストボックスの行をダブルクリックした際に実行されるアクションを指定します。 選択可能なオプションは以下の通りです:

- **Do nothing** (default): Double-clicking a row does not trigger any automatic action.
- **Edit Record**: Double-clicking a row displays the corresponding record in the detail form defined [for the list box](#detail-form-name). レコードは読み書き可能モードで開かれるので、編集が可能です。
- **Display Record**: Identical to the previous action, except that the record is opened in read-only mode so it cannot be modified.

> 空の行へのダブルクリックは無視されます。

Regardless of the action selected/chosen, the `On Double clicked` form event is generated.

For the last two actions, the On `Open Detail` form event is also generated. The `On Close Detail` is then generated when a record displayed in the detail form associated with the list box is about to be closed (regardless of whether or not the record was modified).

#### JSON 文法

| 名称                     | データタイプ | とりうる値                               |
| ---------------------- | ------ | ----------------------------------- |
| doubleClickInRowAction | string | "editSubrecord", "displaySubrecord" |

#### 対象オブジェクト

[List Box](listbox_overview.md)

---

## ハイライトセット

`セレクション型リストボックス`

This property is used to specify the set to be used to manage highlighted records in the list box (when the **Arrays** data source is selected, a Boolean array with the same name as the list box is used).

4D creates a default set named _ListBoxSetN_ where _N_ starts at 0 and is incremented according to the number of list boxes in the form. 必要に応じてこの名前を変更できます。 It can be a local, process or interprocess set (we recommend using a local set, for example _$LBSet_, in order to limit network traffic). 指定されたセットは 4D が自動で管理します。 ユーザーが 1つ以上の行を選択すると、セットは即座に更新されます。 プログラムを使用して行を選択したい場合、"セット" テーマのコマンドをこのセットに適用できます。

> - リストボックス行のハイライトステータスとテーブルレコードのハイライトステータスは完全に独立しています。
> - "ハイライトセット" プロパティに名前が指定されていない場合、リストボックス中で行を選択することはできません。

#### JSON 文法

| 名称           | データタイプ | とりうる値  |
| ------------ | ------ | ------ |
| highlightSet | string | セットの名称 |

#### 対象オブジェクト

[List Box](listbox_overview.md)

---

## スクロールしない列とドラッグしない列

リストボックスのスクロールしない列とドラッグしない列はそれぞれ独立して動作します:

- スクロールしない列は常にリストボックスの左側に表示され、横スクロールされません。
- ドラッグしない列は、リストボックス中でドラッグ＆ドロップによる列の移動ができません。

> You can set static and locked columns by programming, refer to "List Box" section in the _4D Language Reference_ manual.

これらのプロパティは以下のように相互作用します:

- 列を "ドラッグしない" のみを設定した場合、その列は移動することができません。

- 列を "スクロールしない" のみに設定した場合、横スクロールしないエリア内に限りドラッグで列を移動することができます。 しかし、そのスクロールしないエリアを越えて移動することはできません。

![](../assets/en/FormObjects/property_lockedStaticColumns1.png)

- "スクロールしない" 列と "ドラッグしない" 列を同じ数に設定した場合、スクロールしないエリア内ではドラッグで移動することもできません。

![](../assets/en/FormObjects/property_lockedStaticColumns2.png)

- 必要に応じてスクロールしない列数とドラッグしない列数をそれぞれ設定できます。 たとえば、スクロールしない列を 3、ドラッグしない列を 1に設定した場合、ユーザーは横スクロールしないエリア内で右側 2つの列を入れ替えることができます。

### スクロールしない列数

ユーザーが横スクロールしても、リストボックスの左側に常に表示される列の数を指定します。

#### JSON 文法

| 名称                | データタイプ  | とりうる値                  |
| ----------------- | ------- | ---------------------- |
| lockedColumnCount | integer | 最小値: 0 |

#### 対象オブジェクト

[List Box](listbox_overview.md)

### ドラッグしない列数

実行時にドラッグで移動できない列の数を指定します。

#### JSON 文法

| 名称                | データタイプ  | とりうる値                  |
| ----------------- | ------- | ---------------------- |
| staticColumnCount | integer | 最小値: 0 |

#### 対象オブジェクト

[List Box](listbox_overview.md)

---

## 列数

リストボックスに表示される列の数を指定します。

> You can add or remove columns dynamically by programming, using commands such as [`LISTBOX INSERT COLUMN`](https://doc.4d.com/4dv20/help/command/en/page829.html) or [`LISTBOX DELETE COLUMN`](https://doc.4d.com/4dv20/help/command/en/page830.html).

#### JSON 文法

| 名称          | データタイプ  | とりうる値                  |
| ----------- | ------- | ---------------------- |
| columnCount | integer | 最小値: 1 |

#### 対象オブジェクト

[List Box](listbox_overview.md)

---

## 行コントロール配列

`配列型リストボックス`

リストボックス行の表示を管理するための 4D配列です。

配列型リストボックスの任意行の "非表示"、"無効化"、"選択可能" プロパティを管理するために、この配列を使用します。 It can also be designated using the `LISTBOX SET ARRAY` command.

行コントロール配列は、リストボックス内の要素数と同じ数を含んでいる倍長整数型の配列でなければなりません。 Each element of the _Row Control Array_ defines the interface status of its corresponding row in the list box. "リストボックス" 定数テーマの定数を使って、3つのインターフェースプロパティが利用可能です:

| 定数                       | 値 | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------ | - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk row is disabled       | 2 | 対応する行は無効化されています。 テキストや、チェックボックスなどのコントロール類は暗くなっているかグレーアウトされています。 入力可能なテキスト入力エリアは入力可能ではありません。 デフォルト値: 有効化                                                                                                                                                                                                                                                                                                                                                                                                                     |
| lk row is hidden         | 1 | 対応する行は非表示です。 行を非表示にすることは、リストボックスの見た目にのみ影響します。 非表示の行は配列内には存在し、プログラミングを通して管理可能です。 The language commands, more particularly `LISTBOX Get number of rows` or `LISTBOX GET CELL POSITION`, do not take the displayed/hidden status of rows into account. For example, in a list box with 10 rows where the first 9 rows are hidden, `LISTBOX Get number of rows` returns 10. ユーザーの視点では、リストボックス内の非表示行の存在は視覚的には認識できません。 表示されいている行のみが (たとえば、"すべてを選択" コマンドなどで) 選択可能です。 デフォルト値: 表示 |
| lk row is not selectable | 4 | 対応する行は選択可能になっていません (ハイライトできません)。 Enterable text input areas are no longer enterable unless the [Single-Click Edit](properties_Entry.md#single-click-edit) option is enabled. しかしながら、チェックボックスなどのコントロールとリストは機能しています。 この設定はリストボックスの選択モードが "なし" の場合には無視されます。 デフォルト値: 選択可能                                                                                                                                                                                                                    |

行のステータスを変えるためには、対応する配列の要素に適切な定数を設定するだけです。 たとえば、10行目を選択不可能に設定したい場合、以下のように書くことができます:

```4d
 aLControlArr{10}:=lk row is not selectable
```

![](../assets/en/FormObjects/listbox_styles5.png)

複数のインターフェースプロパティを同時に定義することもできます:

```4d
 aLControlArr{8}:=lk row is not selectable + lk row is disabled
```

![](../assets/en/FormObjects/listbox_styles6.png)

要素に対してプロパティを設定すると、(再設定しない限り) 同要素の他の値を上書きするという点に注意してください。 例:

```4d
 aLControlArr{6}:=lk row is disabled + lk row is not selectable 
 // 6行目を無効化し、かつ選択不可に設定します
 aLControlArr{6}:=lk row is disabled 
 // 6行目を無効化するが、選択不可を再設定していないので選択が可能となります
```

#### JSON 文法

| 名称               | データタイプ | とりうる値        |
| ---------------- | ------ | ------------ |
| rowControlSource | string | 行コントロール配列の名称 |

#### 対象オブジェクト

[List Box](listbox_overview.md)

---

## 選択モード

リストボックス行の選択モードを指定します:

- **None**: Rows cannot be selected if this mode is chosen. Clicking on the list will have no effect unless the [Single-Click Edit](properties_Entry.md#single-click-edit) option is enabled. The navigation keys only cause the list to scroll; the `On Selection Change` form event is not generated.
- **Single**: One row at a time can be selected in this mode. クリックすることで、行を選択できます。 A **Ctrl+click** (Windows) or **Command+click** (macOS) on a row toggles its state (between selected or not).\
  The Up and Down arrow keys select the previous/next row in the list. その他のナビゲーションキーはリストをスクロールします。 The `On Selection Change` form event is generated every time the current row is changed.
- **Multiple**: Several rows can be selected simultaneously in this mode.

#### JSON 文法

| 名称            | データタイプ | とりうる値                        |
| ------------- | ------ | ---------------------------- |
| selectionMode | string | "multiple", "single", "none" |

#### 対象オブジェクト

[List Box](listbox_overview.md)

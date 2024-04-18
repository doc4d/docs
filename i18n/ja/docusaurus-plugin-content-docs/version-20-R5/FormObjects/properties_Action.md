---
id: propertiesAction
title: 動作
---

---

## ドラッグ有効

ユーザーによるオブジェクトのドラッグを制御します。 デフォルトでは、ドラッグ操作は禁止されています。

二つのドラッグモードが提供されています:

- **Custom**: In this mode, any drag operation performed on the object triggers the `On Begin Drag` form event in the context of the object. これを利用して、開発者はメソッドを用いてドラッグアクションを管理しなければなりません。\
  つまり、カスタムモードにおいては、ドラッグ＆ドロップ操作のすべてが開発者により管理されます。 このモードでは、ドラッグ＆ドロップに基づいたあらゆるインターフェースを実装することができます。これにはデータの転送を必ずしも伴わないものも含まれ、ファイルを開くや計算をトリガーするなどの任意のアクションを実行することができます。 This mode is based upon a combination of specific properties, events, and commands from the `Pasteboard` theme.
- **Automatic**: In this mode, 4D **copies** text or pictures directly from the form object. このコピーは、同じ 4Dエリア内、2つの 4Dエリア間、4D と他のアプリケーション間で使用できます。 For example, automatic drag (and drop) lets you copy a value between two fields without using programming:\
  ![](../assets/en/FormObjects/property_automaticDragDrop.png)\
  ![](../assets/en/FormObjects/property_automaticDragDrop2.png)
  In this mode, the `On Begin Drag` form event is NOT generated. If you want to "force" the use of the custom drag while automatic drag is enabled, hold down the **Alt** (Windows) or **Option** (macOS) key during the action. このオプションはピクチャーでは利用できません。

For more information, refer to [Drag and Drop](https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.en.html) in the _4D Language Reference_ manual.

#### JSON 文法

| 名称       | データタイプ | とりうる値                                                                                    |
| -------- | ------ | ---------------------------------------------------------------------------------------- |
| dragging | text   | "none" (デフォルト), "custom", "automatic" (リストボックスを除く) |

#### 対象オブジェクト

[4D Write Pro areas](writeProArea_overview.md) - [Input](input_overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Plug-in Area](pluginArea_overview.md#overview)

#### 参照

[Droppable](#droppable)

---

## ドロップ有効

ユーザーがドラッグ＆ドロップしたデータをオブジェクトが受け取ることができるかどうかを制御します。

二つのドロップモードが提供されています:

- **Custom**: In this mode, any drop operation performed on the object triggers the `On Drag Over` and `On Drop` form events in the context of the object. これを利用して、開発者はメソッドを用いてドロップアクションを管理しなければなりません。\
  つまり、カスタムモードにおいては、ドラッグ＆ドロップ操作のすべてが開発者により管理されます。 このモードでは、ドラッグ＆ドロップに基づいたあらゆるインターフェースを実装することができます。これにはデータの転送を必ずしも伴わないものも含まれ、ファイルを開くや計算をトリガーするなどの任意のアクションを実行することができます。 This mode is based upon a combination of specific properties, events, and commands from the `Pasteboard` theme.
- **Automatic**: In this mode, 4D automatically manages — if possible — the insertion of dragged data of the text or picture type that is dropped onto the object (the data are pasted into the object). The `On Drag Over` and `On Drop` form events are NOT generated. On the other hand, the `On After Edit` (during the drop) and `On Data Change` (when the object loses the focus) events are generated.

For more information, refer to [Drag and Drop](https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.en.html) in the _4D Language Reference_ manual.

#### JSON 文法

| 名称       | データタイプ | とりうる値                                                                                    |
| -------- | ------ | ---------------------------------------------------------------------------------------- |
| dropping | text   | "none" (デフォルト), "custom", "automatic" (リストボックスを除く) |

#### 対象オブジェクト

[4D Write Pro areas](writeProArea_overview.md) - [Button](button_overview.md) - [Input](input_overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Plug-in Area](pluginArea_overview.md#overview)

#### 参照

[Draggable](#draggable)

---

## オブジェクトメソッド実行

When this option is enabled, the object method is executed with the `On Data Change` event _at the same moment_ the user changes the value of the indicator. When the option is disabled, the method is executed _after_ the modification.

#### JSON 文法

| 名称                  | データタイプ  | とりうる値       |
| ------------------- | ------- | ----------- |
| continuousExecution | boolean | true, false |

#### 対象オブジェクト

[Progress bar](progressIndicator.md) - [Ruler](ruler.md) - [Stepper](stepper.md)

---

## メソッド

オブジェクトに関連づけられたメソッドへの参照。 オブジェクトメソッドは通常、フォームが表示または印刷されている間、オブジェクトを "管理" します。 オブジェクトメソッドは呼び出す必要がありません。オブジェクトメソッドが関連づけられているオブジェクトに関わるイベントが発生した場合、4D は自動的にオブジェクトメソッドを呼び出します。

メソッド参照にはいくつかのタイプが利用可能です:

- a standard object method file path, i.e. that uses the following pattern:\
  `ObjectMethods/objectName.4dm`\
  ... where `objectName` is the actual [object name](properties_Object.md#object-name). This type of reference indicates that the method file is located at the default location ("sources/forms/_formName_/ObjectMethods/"). この場合、エディター上でフォームオブジェクトに対して操作 (名称変更、複製、コピー/ペーストなど) がおこなわれると、4D はこれらの変更を自動的にオブジェクトメソッドに反映させます。

- a project method name: name of an existing project method without file extension, i.e.:
  `myMethod`
  In this case, 4D does not provide automatic support for object operations.

- a custom method file path including the .4dm extension, e.g.:\
  `../../CustomMethods/myMethod.4dm`
  You can also use a filesystem:\
  `/RESOURCES/Buttons/bOK.4dm`
  In this case, 4D does not provide automatic support for object operations.

#### JSON 文法

| 名称     | データタイプ | とりうる値                                      |
| ------ | ------ | ------------------------------------------ |
| method | text   | オブジェクトメソッドの標準またはカスタムのファイルパス、またはプロジェクトメソッド名 |

#### 対象オブジェクト

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Forms](FormEditor/forms.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Web Area](webArea_overview.md#overview)

---

## 行の移動可

`Array type list boxes`

ランタイムにおける行の移動を許可します。 このオプションはデフォルトで選択されています。 It is not available for [selection type list boxes](listbox_overview.md#selection-list-boxes) nor for [list boxes in hierarchical mode](properties_Hierarchy.md#hierarchical-list-box).

#### JSON 文法

| 名称          | データタイプ  | とりうる値       |
| ----------- | ------- | ----------- |
| movableRows | boolean | true, false |

#### 対象オブジェクト

[List Box](listbox_overview.md#overview)

---

## 複数選択可

Allows the selection of multiple records/options in a [hierarchical list](list_overview.md).

#### JSON 文法

| 名称            | データタイプ | とりうる値                        |
| ------------- | ------ | ---------------------------- |
| selectionMode | text   | "multiple", "single", "none" |

#### 対象オブジェクト

[Hierarchical List](list_overview.md)

---

## ソート可

Allows sorting column data by clicking a [listbox](listbox_overview.md) header. このオプションはデフォルトで選択されています。 ピクチャー型配列 (列) はこのメカニズムではソートできません。

レコードセレクションに基づくリストボックスの場合、標準のソート機能は以下の場合のみ有効です:

- When the data source is _Current Selection_,
- その列にフィールドが割り当てられていること (文字、数値、日付、時間、およびブール型)。

他の場合 (命名セレクションに基づくリストボックスや、式が割り当てられた列)、標準のソート機能は動作しません。 標準のリストボックスソートは、データベースのカレントセレクションの順番を変更します。 しかし、ハイライトされたレコードとカレントレコードは変更されません。 標準の並び替えは、リストボックスのすべての列 (式が割り当てられた列も含む) を同期します。

#### JSON 文法

| 名称       | データタイプ  | とりうる値       |
| -------- | ------- | ----------- |
| sortable | boolean | true, false |

#### 対象オブジェクト

[List Box](listbox_overview.md)

---

## 標準アクション

Typical activities to be performed by active objects (_e.g._, letting the user accept, cancel, or delete records, move between records or from page to page in a multi-page form, etc.) have been predefined by 4D as standard actions. They are described in detail in the [Standard actions](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) section of the _Design Reference_.

フォームオブジェクトには、標準アクションとメソッドの両方を割り当てることができます。 この場合、標準アクションは通常、メソッドの後に実行されます。また、4D はこのアクションを使用して、カレントコンテキストに応じてオブジェクトを有効化/無効化します フォームオブジェクトが無効化されていると、関連づけられたメソッドは実行されません。

You can also set this property using the `OBJECT SET ACTION` command.

#### JSON 文法

| 名称     | データタイプ | とりうる値                                                                                                                            |
| ------ | ------ | -------------------------------------------------------------------------------------------------------------------------------- |
| action | string | The name of a [valid standard action](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html). |

#### 対象オブジェクト

[Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [List Box](listbox_overview.md) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Tab control](tabControl.md)

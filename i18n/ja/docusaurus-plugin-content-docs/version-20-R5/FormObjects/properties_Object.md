---
id: propertiesObject
title: オブジェクト
---

---

## タイプ

`MANDATORY SETTING`

This property designates the type of the [active or inactive form object](formObjects_overview.md).

#### JSON 文法

| 名称   | データタイプ | とりうる値                                                                                                                                                                                                                                                                                                    |
| ---- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type | string | "button", "buttonGrid", "checkbox", "combo", "dropdown", "groupBox", "input", "line", "list", "listbox", "oval", "picture", "pictureButton", "picturePopup", "plugin", "progress", "radio", "rectangle", "ruler", "spinner", "splitter", "stepper", "subform", "tab", "text", "view", "webArea", "write" |

#### 対象オブジェクト

[4D View Pro area](viewProArea_overview) - [4D Write Pro area](writeProArea_overview) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress indicator](progressIndicator.md) - [Radio Button](radio_overview.md) -[Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md)

---

## オブジェクト名

各アクティブフォームオブジェクトにはオブジェクト名が関連付けられています。 各オブジェクト名はユニークでなければなりません。

> オブジェクト名のサイズ上限は 255バイトです。

When using 4D’s language, you can refer to an active form object by its object name (for more information about this, refer to [Object Properties](https://doc.4d.com/4Dv17R5/4D/17-R5/Object-Properties.300-4128195.en.html) in the 4D Language Reference manual).

For more information about naming rules for form objects, refer to [Identifiers](Concepts/identifiers.md) section.

#### JSON 文法

| 名称   | データタイプ | とりうる値                           |
| ---- | ------ | ------------------------------- |
| name | string | 既存オブジェクトによって使用されていない、命名規則に沿った名称 |

#### 対象オブジェクト

[4D View Pro area](viewProArea_overview) - [4D Write Pro area](writeProArea_overview) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress indicator](progressIndicator.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Radio Button](radio_overview.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md)

---

## 値を記憶

This property is available when the [Save Geometry](FormEditor/properties_FormProperties.md#save-geometry) option is checked for the form.

この機能は、フォームの全体的な配置に関係するオブジェクトに対してのみサポートされています。 たとえばチェックボックスは、ウィンドウ内の追加エリアを表示/非表示するのに使用することができるため、このオプションが存在します。

「値」を保存できるオブジェクトは以下のとおりです:

| Object                                     | 保存される値                                                          |
| ------------------------------------------ | --------------------------------------------------------------- |
| [Check Box](checkbox_overview.md)          | 関連付けられた変数の値 (0, 1, 2)                        |
| [Drop-down List](dropdownList_Overview.md) | 選択されている項目の番号                                                    |
| [Radio Button](radio_overview.md)          | 関連付けられた変数の値 (1、0、ボタンにおいては true/false など型による) |
| [Tab control](tabControl.md)               | 選択されているタブの番号                                                    |

#### JSON 文法

| 名称            | データタイプ  | とりうる値       |
| ------------- | ------- | ----------- |
| memorizeValue | boolean | true, false |

#### 対象オブジェクト

[Check Box](checkbox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Radio Button](radio_overview.md) - [Tab control](tabControl.md)

---

## 変数あるいは式

> See also **[Expression](properties_DataSource.md#expression)** for Selection and collection type list box columns.

このプロパティは、データのソースを指定します。 各アクティブフォームオブジェクトにはオブジェクト名と変数名が関連付けられています。 変数名とオブジェクト名は違っていてもかまいません。 In the same form, you can use the same variable several times while each [object name](#object-name) must be unique.

> 変数名の上限は 31バイトです。 See [Identifiers](Concepts/identifiers.md) section for more information about naming rules.

フォームオブジェクト変数を使って、オブジェクトを監視・コントロールすることができます。 たとえば、ボタンがクリックされると、その変数の値は 1 に設定されます。それ以外の場合は 0 です。 進捗インジケーターに関連づけられた式は、現設定の取得・変更を可能にします。

代入可・代入不可の変数および式が使用でき、取得できるデータ型はテキスト、整数、数値、日付、時間、ピクチャー、ブール、そしてオブジェクトです。

#### JSON 文法

| 名称         | データタイプ                   | とりうる値                                                                                                                                                                                                                                                     |
| ---------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataSource | string、または sting のコレクション | <li>4D variable, field name, or any expression.</li><li>Empty string for [dynamic variables](#dynamic-variables).</li><li>String array (collection of array names) for a [hierarchical listbox](listbox_overview.md#hierarchical-list-boxes) column]</li> |

### 式

You can use an [expression](Concepts/quick-tour.md#expressions) as data source for an object. Any valid 4D expression is allowed: simple expression, object property, formula, 4D function, project method name or field using the standard `[Table]Field` syntax. 式はフォームが実行されたときに評価され、フォームイベント毎に再評価されます。 Note that expressions can be [assignable or non-assignable](Concepts/quick-tour.md#expressions).

> 入力された式が、変数名とメソッド名の両方で使用されている場合、4Dはメソッド名が指定されたものと判断します。

### ダイナミック変数

You can leave it up to 4D to create variables associated with your form objects (buttons, enterable variables, check boxes, etc.) dynamically and according to your needs. To do this, simply leave the "Variable or Expression" property (or `dataSource` JSON field) blank.

変数名が与えられていない場合、4D はフォームがロードされたときにインタープリターのプロセス変数の空間内でユニークな名前を計算し、その名前でオブジェクト用の変数を新規作成します (このメカニズムはコンパイルモードでも使用することができます)。 この一時的な変数はフォームが閉じられるときに破棄されます。
この方式をコンパイルモードで動作させるためには、ダイナミック変数の型を明示的に指定しなければなりません。 これをおこなうには 2つの方法があります:

- You can set the type using the [Expression type](#expression-type) property.
- You can use a specific initialization code when the form is loaded that uses, for example, the `VARIABLE TO VARIABLE` command:

```4d
 If(Form event code=On Load)
    var $init : Text
    $Ptr_object:=OBJECT Get pointer(Object named;"comments")
    $init:=""
    VARIABLE TO VARIABLE(Current process;$Ptr_object->;$init)
 End if
```

In the 4D code, dynamic variables can be accessed using a pointer obtained with the `OBJECT Get pointer` command. 例:

```4d
  // assign the time 12:00:00 to the variable for the "tstart" object
 $p :=OBJECT Get pointer(Object named;"tstart")
 $p->:=?12:00:00?
```

このメカニズムを使用する利点は 2つあります:

- ひとつのホストフォーム上で複数個配置することの可能な "サブフォーム" タイプのコンポーネント開発を可能にします。 たとえば、開始日と終了日を設定する 2つの日付ピッカーサブフォームをホストフォーム上に配置するケースを考えてみましょう。 このサブフォームでは、日付を選択するためのオブジェクトが使用されます。 開始日と終了日をそれぞれ選択できるよう、これらオブジェクトにはそれぞれ別の変数が割り当てられている必要があります。 4Dにダイナミック変数を生成させることでユニークな変数を得ることができ、この問題を解決できます。
- また、メモリの利用を減少させることができます。 フォームオブジェクトでは、プロセス変数とインタープロセス変数しか使用できません。 しかしコンパイルモードでは、各プロセス変数のインスタンスが (サーバープロセスを含め) すべてのプロセスに対して作成されます。 このインスタンスは、セッション中にフォームが使用されない場合でもメモリを消費します。 フォームのロード時、4Dにダイナミック変数を作成させることで、メモリを節約できます。

### 配列リストボックス

For an array list box, the **Variable or Expression** property usually holds the name of the array variable defined for the list box, and for each column. However, you can use a string array (containing arrays names) as _dataSource_ value for a list box column to define a [hierarchical list box](listbox_overview.md#hierarchical-list-boxes).

#### 対象オブジェクト

[4D View Pro area](viewProArea_overview) - [4D Write Pro area](writeProArea_overview) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Footer](listbox_overview.md#list-box-footers) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress indicator](progressIndicator.md) - [Radio Button](radio_overview.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Stepper](stepper.md) - [Subform](subform_overview.md#overview) - [Tab control](tabControl.md) - [Web Area](webArea_overview.md)

---

## 式の型/式タイプ

> This property is called [**Data Type**](properties_DataSource.md#data-type-expression-type) in the Property List for [selection](listbox_overview.md#selection-list-boxes) and [collection](listbox_overview.md#collection-or-entity-selection-list-boxes) type list box columns and for [Drop-down Lists](dropdownList_Overview.md) associated to an [object](FormObjects/dropdownList_Overview.md#using-an-object) or an [array](FormObjects/dropdownList_Overview.md#using-an-array).

オブジェクトに関連付けられた式または変数のデータ型を指定します。 この設定の主な目的は、プロパティリスト内で提供されるテーマとオプションが、データの型と対応するようにするためです。 つまり、実際に変数の型そのものを決めるわけではありません。 In view of project compilation, you must [declare the variable](Concepts/variables.md#declaring-variables).

ただし、次の特定の場合には、このプロパティは型宣言の機能を持ちえます:

- **[Dynamic variables](#dynamic-variables)**: you can use this property to declare the type of dynamic variables.
- **[List Box Columns](listbox_overview.md#list-box-columns)**: this property is used to associate a display format with the column data. 提供されるフォーマットは変数型 (配列型のリストボックス) またはデータ/フィールド型 (セレクションおよびコレクション型のリストボックス) により異なります。 使用できる標準の 4D フォーマットはテキスト、数値、整数、日付、時間、ピクチャー、そしてブールです。 テキストの場合は専用の表示フォーマットがありません。 標準フォーマットのほかに、定義したカスタムフォーマットも選択することができます。
- **[Picture variables](input_overview.md)**: you can use this menu to declare the variables before loading the form in interpreted mode. フォーム上のピクチャー変数にピクチャーを表示する際には特別なメカニズムが使用されます。 These mechanisms require greater precision when configuring variables: from now on, they must have already been declared before loading the form — i.e., even before the `On Load` form event — unlike other types of variables. To do this, you need either for the statement `C_PICTURE(varName)` to have been executed before loading the form (typically, in the method calling the `DIALOG` command), or for the variable to have been typed at the form level using the expression type property.
  このいずれかをおこなわない場合、ピクチャー変数はピクチャーを正しく表示できません (インタープリターモードのみ)。

#### JSON 文法

| 名称                 | データタイプ | とりうる値                                                                                                                                                                                                                                                                                                                                |
| ------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| dataSourceTypeHint | string | <li>**standard objects:** "integer", "boolean", "number", "picture", "text", date", "time", "arrayText", "arrayDate", "arrayTime", "arrayNumber", "collection", "object", "undefined"</li><li>**list box columns:** "boolean", "number", "picture", "text", date", "time". *Array/selection list box only*: "integer", "object"</li> |

#### 対象オブジェクト

[Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress indicator](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Spinner](spinner.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab Control](tabControl.md)

---

## CSSクラス

A list of space-separated words used as class selectors in [css files](FormEditor/createStylesheet.md#style-sheet-files).

#### JSON 文法

| 名称    | データタイプ | とりうる値                                          |
| ----- | ------ | ---------------------------------------------- |
| class | string | (複数の場合は半角スペース区切りの) クラス名の文字列 |

#### 対象オブジェクト

[4D View Pro area](viewProArea_overview) - [4D Write Pro area](writeProArea_overview) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Radio Button](radio_overview.md) - [Static Picture](staticPicture.md) - [Subform](subform_overview.md#overview) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)

---

## コレクションまたはエンティティセレクション

コレクション要素あるいはエンティティを使用して、リストボックスの行の中身を定義することができます。

コレクションあるいはエンティティセレクションを返す式を入力します。 一般的には、コレクションまたはエンティティセレクションを格納している変数名、コレクション要素、あるいはプロパティを入力します。

コレクションおよびエンティティセレクションは、フォームロード時にフォームから利用可能でなければなりません。 Each element of the collection or each entity of the entity selection will be associated to a list box row and will be available as an object through the [`This`](../Concepts/classes.md#this) keyword:

- if you used a collection of objects, you can call **This** in the datasource expression to access each property value, for example `This.<propertyPath>`.
- if you used an entity selection, you can call **This** in the datasource expression to access each attribute value, for example `This.<attributePath>`.

> If you used a collection of scalar values (and not objects), 4D allows you to display each value by calling **This.value** in the datasource expression. ただしこの場合、値の変更や現在のオブジェクトへのアクセスはできません。

#### JSON 文法

| 名称         | データタイプ | とりうる値                      |
| ---------- | ------ | -------------------------- |
| dataSource | string | コレクションあるいはエンティティセレクションを返す式 |

#### 対象オブジェクト

[List Box](listbox_overview.md)

---

## データソース

リストボックスの種類を指定します。

![](../assets/en/FormObjects/listbox_dataSource.png)

- **Arrays**(default): use array elements as the rows of the list box.
- **Current Selection**: use expressions, fields or methods whose values will be evaluated for each record of the current selection of a table.
- **Named Selection**: use expressions, fields or methods whose values will be evaluated for each record of a named selection.
- **Collection or Entity Selection**: use collection elements or entities to define the row contents of the list box. Note that with this list box type, you need to define the [Collection or Entity Selection](properties_Object.md#collection-or-entity-selection) property.

#### JSON 文法

| 名称          | データタイプ | とりうる値                                                       |
| ----------- | ------ | ----------------------------------------------------------- |
| listboxType | string | "array", "currentSelection", "namedSelection", "collection" |

#### 対象オブジェクト

[List Box](listbox_overview.md)

---

## プラグインの種類

Name of the [plug-in external area](pluginArea_overview.md) associated to the object. ここで指定する名称は、プラグインの manifest.json ファイルにて公開されています。

#### JSON 文法

| 名称             | データタイプ | とりうる値                                                                            |
| -------------- | ------ | -------------------------------------------------------------------------------- |
| pluginAreaKind | string | プラグインが提供する外部エリアの、% 文字で始まる名称 (プロパティリストの候補表示では、この % 文字は表示されません) |

#### 対象オブジェクト

[Plug-in Area](pluginArea_overview.md)

---

## ラジオグループ

複数のラジオボタンを連動させるためのプロパティです。同じラジオグループに属している複数のラジオボタンは、一度にその内の一つのみを選択することができます。

#### JSON 文法

| 名称         | データタイプ | とりうる値    |
| ---------- | ------ | -------- |
| radioGroup | string | ラジオグループ名 |

#### 対象オブジェクト

[Radio Button](radio_overview.md)

---

## タイトル

オブジェクトにラベルを追加します。 このラベルのフォントとスタイルは指定することができます。

\文字 (バックスラッシュまたは円マーク) を使用すると、ラベル内で強制的に改行することができます。

![](../assets/en/FormObjects/property_title.png)

ラベルに \ を表示したい場合は \\ と入力します。

デフォルトでラベルはオブジェクトの中央に置かれます。 When the object also contains an icon, you can modify the relative location of these two elements using the [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) property.

For application translation purposes, you can enter an XLIFF reference in the title area of a button (see [Appendix B: XLIFF architecture](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html)).

#### JSON 文法

| 名称   | データタイプ | とりうる値     |
| ---- | ------ | --------- |
| text | string | なんらかのテキスト |

#### 対象オブジェクト

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## 変数の計算

This property sets the type of calculation to be done in a [column footer](listbox_overview.md#list-box-footers) area.

> The calculation for footers can also be set using the [`LISTBOX SET FOOTER CALCULATION`](https://doc.4d.com/4dv19/help/command/en/page1140.html) 4D command.

様々な自動計算が利用可能です。 以下の表は、列のデータ型に応じて使用することのできる計算と、(コードで明示的に宣言されていないとき) 4D によってフッター変数に自動で割り当てられる型を示しています:

| 計算タイプ                                    | Num | Text | 日付 | 時間 | Bool | ピクチャー | フッター変数の型 |
| ---------------------------------------- | --- | ---- | -- | -- | ---- | ----- | -------- |
| 最小                                       | X   | X    | X  | X  | X    |       | 列の型と同じ   |
| 最大                                       | X   | X    | X  | X  | X    |       | 列の型と同じ   |
| 合計                                       | X   |      |    | X  | X    |       | 列の型と同じ   |
| カウント                                     | X   | X    | X  | X  | X    | X     | Longint  |
| 平均                                       | X   |      |    | X  |      |       | Real     |
| 標準偏差(\*)              | X   |      |    | X  |      |       | Real     |
| 分散(\*)                | X   |      |    | X  |      |       | Real     |
| 平方和(\*)               | X   |      |    | X  |      |       | Real     |
| カスタム (JSON では "none") | X   | X    | X  | X  | X    | X     | 制限なし     |

(\*) 配列型のリストボックスのみ

> Only declared or dynamic [variables](Concepts/variables.md) can be used to display footer calculations. Other kinds of [expressions](Concepts/quick-tour.md#expressions) such as `Form.value` are not supported.

自動計算の際、リストボックス行の表示/非表示状態は考慮されません。 表示行だけを計算対象にしたい場合、カスタムを選択してプログラムコードで計算しなくてはなりません。

_Null_ values are not taken into account for any calculations.

異なる型の値がカラムに含まれる場合 (コレクションに基づいている場合など):

- 平均と合計は数値のみを計算に含めます (他の型の値は無視されます)。
- Minimum and Maximum return a result according to the usual type list order as defined in the [collection.sort()](API/CollectionClass.md#sort) function.

式に基づいている列のフッターにおいて自動計算を使用するにあたっては、次の制限があります:

- it is **supported** with all list box types when the expression is "simple" (such as `[table]field` or `this.attribute`),
- it is **supported but not recommended** for performance reasons with collection/entity selection list boxes when the expression is "complex" (other than `this.attribute`) and the list box contains a large number of rows,
- it is **not supported** with current selection/named selection list boxes when the expression is "complex". これらの場合には、カスタム計算を使用する必要があります。

When **Custom** ("none" in JSON) is set, no automatic calculations are performed by 4D and you must assign the value of the variable in this area by programming.

#### JSON 文法

| 名称                  | データタイプ | とりうる値                                                                                                 |
| ------------------- | ------ | ----------------------------------------------------------------------------------------------------- |
| variableCalculation | string | "none", "minimum", "maximum", "sum", "count", "average", "standardDeviation", "variance", "sumSquare" |

#### 対象オブジェクト

[List Box Footer](listbox_overview.md#list-box-footers)

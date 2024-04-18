---
id: subformOverview
title: サブフォーム
---

サブフォームとは、他のフォームに組み込まれるフォームのことです。

## 用語

サブフォームに実装されたコンセプトを明確に説明するために、いくつかの用語についてここで定義します:

- **Subform**: a form intended for inclusion in another form, itself called the parent form.
- **Parent form**: a form containing one or more subform(s).
- **Subform container**: an object included in the parent form, displaying an instance of the subform.
- **Subform instance**: the representation of a subform in a parent form. このコンセプトはとても重要です。親フォームには、同じサブフォームのインスタンスを複数表示することができるからです。
- **List form**: instance of subform displayed as a list.
- **Detail form**: page-type input form associated with a list-type subform that can be accessed by double-clicking in the list.

## リストサブフォーム

リストサブフォームを使うことで、他のテーブルのデータを入力、表示、および更新することができます。 通常は 1対Nリレーションが設定されたデータベースでリストサブフォームを使用します。 リレートされた 1テーブルのフォーム上のリストサブフォームでは、リレートされた Nテーブルのデータを入力・表示・更新します。 一つのフォーム上に、それぞれ異なるテーブルに属する複数のサブフォームを配置できます。 しかし、フォームの同じページ上には、同じテーブルに属するサブフォームを複数配置することはできません。

たとえば、連絡先管理データベースでは、ある連絡先のすべての電話番号を表示するためにリストサブフォームが使用されるでしょう。 連絡先テーブルの画面に電話番号が表示されますが、情報はリレートテーブルに格納されています。 1対Nリレーションを使用することで、このデータベース設計は連絡先ごとに複数の電話番号を簡単に格納できるようになっています。 自動リレーションにより、リレートされている Nテーブルへのデータ入力がプログラムなしで直接おこなうことができます。

リストサブフォームは通常 Nテーブルに結び付けられますが、それだけでなく他の任意のデータベーステーブルのレコードをサブフォームのインスタンスに表示することもできます。

また、ユーザーがリストサブフォームに直接データを入力するようにもできます。
サブフォームの設定に基づき、ユーザーがサブレコード上でダブルクリックするか、サブレコードを追加/編集するコマンドを使用すると、詳細フォームが表示されます。

> 4D offers three standard actions to meet the basic needs for managing subrecords: `Edit Subrecord`, `Delete Subrecord`, and `Add Subrecord`. フォームに複数のサブフォームインスタンスが含まれる場合、フォーカスを持っているサブフォームにアクションが適用されます。

## ページサブフォーム

ページサブフォームは、カレントサブレコードのデータや、コンテキストに基づく関連する値 (変数やピクチャーなど) を表示できます。 ページサブフォームを使用する利点の一つは、それらが高度な機能を提供したり、親フォームと相互作用したりできることです (ウィジェット)。 ページサブフォームには専用のプロパティやイベントがあり、プログラムから完全に制御することができます。

The page subform uses the input form indicated by the [Detail Form](properties_Subform.md#detail-form) property. リストサブフォームと異なり、使用されるフォームは親フォームと同じテーブルに所属していてもかまいません。 また、プロジェクトフォームを使用することもできます。 実行時、ページサブフォームは入力フォームと同じ標準の表示特性を持ちます。

> 4Dウィジェットは、ページサブフォームに基づいた定義済みの複合オブジェクトです。 They are described in detail in a separate manual, [4D Widgets](https://doc.4d.com/4Dv19/4D/19/4D-Widgets.100-5462909.en.html).

### バインドされた変数あるいは式の管理

You can bind [a variable or an expression](properties_Object.md#variable-or-expression) to a subform container object. これは、親フォームとサブフォーム間で値を同期するのに便利です。

By default, 4D creates a variable or expression of [object type](properties_Object.md#expression-type) for a subform container, which allows you to share values in the context of the subform using the `Form` command ([see below](#using-the-subform-bound-object)). However, you can use a variable or expression of any scalar type (time, integer, etc.) especially if you only need to share a single value:

- Define a bound variable or expression of a scalar type and call the `OBJECT Get subform container value` and `OBJECT SET SUBFORM CONTAINER VALUE` commands to exchange values when [On Bound Variable Change](../Events/onBoundVariableChange.md) or [On Data Change](../Events/onDataChange.md) form events occur. この方法は、単一の値を同期させるのに推奨されます。
- Define a bound variable or expression of the **object** type and use the `Form` command to access its properties from the subform. この方法は、複数の値を同期させるのに推奨されます。

### 親フォームとサブフォームの同期 (単一値)

親フォームにおいて、他のオブジェクトとサブフォームコンテナーとに同じ "変数あるいは式" を設定することで、親フォームとサブフォームのコンテキストをリンクし、洗練されたインターフェースを作成することができます。 Imagine a subform that contains a clock displaying a static time, inserted into a parent form containing an [input area](input_overview.md):

![](../assets/en/FormObjects/subforms1.png)

In the parent form, both objects (input area and subform container) **have the same value as _Variable or Expression_**. It can be a variable (e.g. `parisTime`), or an expression (e.g. `Form.parisTime`).

:::info

To display a static time, you must use the appropriate [data type](properties_DataSource.md#data-type-expression-type) for the [variable or expression](properties_Object.md#variable-or-expression):

- If you use a variable (e.g. `parisTime`), it must be of the `text` or `time` type.
- If you use an expression (e.g. `Form.myValue`), it must contain a `text` value.

テキスト値のフォーマットは "hh:mm:ss" でなくてはなりません。

:::

In the subform, the clock object is managed through the `Form.clockValue` property.

#### サブフォームの内容を更新する

ケース1: 親フォームの変数あるいは式の値が更新され、この更新をサブフォームに反映させる必要があります。

`parisTime` or `Form.parisTime` changes to "12:15:00" in the parent form, either because the user entered it, or because it was updated dynamically (via the `String(Current time)` statement for example). This triggers the [On Bound Variable Change](../Events/onBoundVariableChange.md) event in the subform's Form method.

以下のコードが実行されます:

```4d
// Subform form method
If (Form event code=On Bound Variable Change) //bound variable or expression was modified in the parent form
	Form.clockValue:=OBJECT Get subform container value //synchonize the local value
End if
```

It updates the value of `Form.clockValue` in the subform:

![](../assets/en/FormObjects/update-subform.png)

The [On Bound Variable Change](../Events/onBoundVariableChange.md) form event is generated:

- 親フォームの変数/式に値が割り当てられたとき (同じ値が再代入された場合でも) で、
- サブフォームが 0ページまたはカレントフォームページに置かれているとき。

Note that, as in the above example, it is preferable to use the `OBJECT Get subform container value` command which returns the value of the expression in the subform container rather than the expression itself because it is possible to insert several subforms in the same parent form (for example, a window displaying different time zones contains several clocks).

バインドされた変数あるいは式を変更すると、フォームイベントが発生し、親フォームとサブフォームの値を同期させることができます:

- Use the [On Bound Variable Change](../Events/onBoundVariableChange.md) form event to indicate to the subform (form method of subform) that the variable or expression was modified in the parent form.
- Use the [On Data Change](../Events/onDataChange.md) form event to indicate to the subform container that the variable or expression value was modified in the subform.

#### 親フォームの内容を更新する

ケース2: サブフォームの内容が更新され、その更新を親フォームに反映させる必要があります。

Inside the subform, the button changes the value of the `Form.clockValue` expression of type Text attached to the clock object. This triggers the [On Data Change](../Events/onDataChange.md) form event inside the clock object (this event must be selected for the object), which updates the `Form.parisTime` value in the main form.

以下のコードが実行されます:

```4d
// subform clock object method
If (Form event code=On Data Change) //whatever the way the value is changed
	OBJECT SET SUBFORM CONTAINER VALUE(Form.clockValue) //Push the value to the container
End if
```

![](../assets/en/FormObjects/update-main-form.png)

Everytime the value of `Form.clockValue` changes in the subform, `parisTime` or `Form.parisTime` in the subform container is also updated.

> 変数あるいは式の値が複数の場所で設定されている場合、4D は最後にロードされた値を使用します。 以下のロード順が適用されます:<br /> 1 - サブフォームのオブジェクトメソッド<br /> 2 - サブフォームのフォームメソッド<br /> 3 - 親フォームのオブジェクトメソッド<br /> 4 - 親フォームのフォームメソッド

### 親フォームとサブフォームの同期 (複数値)

By default, 4D binds a variable or expression of [object type](properties_Object.md#expression-type) to each subform. このオブジェクトの中身は親フォームおよびサブフォームから読み書き可能なため、ローカルなコンテキストにおいて複数の値を共有することができます。

When bound a the subform container, this object is returned by the `Form` command directly in the subform. オブジェクトは常に参照によって渡されるため、ユーザーがサブフォーム内でプロパティ値を変更した場合には、その値は自動的にオブジェクト自身に保存され、親フォームでも利用できるようになります。 一方、ユーザーによって、あるいはプログラミングによってオブジェクトのプロパティが親フォーム内で変更された場合も、その値はサブフォーム内で自動更新されます。 つまり、イベント管理は必要ありません。

For example, in a subform, inputs are bound to the `Form` object properties (of the subform form):

![](../assets/en/FormObjects/subnew1.png)

親フォームで、このサブフォームを 2回表示するとします。 Each subform container is bound to an expression which is a property of the `Form` object (of the parent form):

![](../assets/en/FormObjects/subnew2.png)

The button only creates `mother` and `father` properties in the parent's `Form` object:

```4d
// Add values ボタンのオブジェクトメソッド
Form.mother:=New object("lastname"; "Hotel"; "firstname"; "Anne")
Form.father:=New object("lastname"; "Golf"; "firstname"; "Félix")
```

フォームを実行してボタンをクリックすると、サブフォームを含め、すべての値が正しく表示されていることがわかります:

![](../assets/en/FormObjects/subnew3.png)

同じオブジェクトが使用されているため、親フォームまたはサブフォームで値を変更すると、もう一方のフォームでも値が自動更新されます:

![](../assets/en/FormObjects/subnew4.png)
![](../assets/en/FormObjects/subnew5.png)

### ポインターの使用 (互換性)

In versions prior to 4D v19 R5, synchronization between parent forms and subforms was handled through **pointers**. たとえば、サブフォームオブジェクトを更新するには、以下のコードを呼び出しておこえます:

```4d
// Subform form method
If (Form event code=On Bound Variable Change) 
	ptr:=OBJECT Get pointer(Object subform container) 
	clockValue:=ptr-> 
End if
```

**This principle is still supported for compatibility but is now deprecated since it does not allow binding expressions to subforms.** It should no longer be used in your developments. In any cases, we recommend to use the [`Form` command](#synchronizing-parent-form-and-subform-multiple-values) or the [`OBJECT Get subform container value` and `OBJECT SET SUBFORM CONTAINER VALUE` commands](#synchronizing-parent-form-and-subform-single-value) to synchronize form and subform values.

### 高度なフォーム間通信プログラム

親フォームとサブフォームインスタンス間の通信では、バインドした変数を通して値を交換する以上のことをおこなう必要がある場合があります。 実際、親フォームでおこなわれたアクションに基づきサブフォーム中の変数を更新したり、その逆の処理をしたい場合があるでしょう。 先の "動的な時計" タイプのサブフォームの例で言えば、各時計ごとにアラーム時刻を複数設定したい場合が考えられます。

このようなニーズにこたえるため、4Dは以下のメカニズムを実装しています:

- Calling of a container object from the subform using the `CALL SUBFORM CONTAINER` command
- Execution of a method in the context of the subform via the `EXECUTE METHOD IN SUBFORM` command

> The `GOTO OBJECT` command looks for the destination object in the parent form even if it is executed from a subform.

#### CALL SUBFORM CONTAINER コマンド

The `CALL SUBFORM CONTAINER` command lets a subform instance send an [event](../Events/overview.md) to the subform container object, which can then process it in the context of the parent form. イベントはコンテナーオブジェクトメソッドで受信されます。 (クリックやドラッグ＆ドロップなど) サブフォームにより検知されたすべてのイベントの発生元となりえます。

送信するイベントコードに制限はありません (たとえば 20000 や -100 など)。 You can use a code that corresponds to an existing event (for example, 3 for `On Validate`), or use a custom code. 前者のケースでは、サブフォームコンテナーのプロパティリストでチェックを入れたイベントのみを使用できます。 後者の場合、使用するコードは既存のフォームイベントに対応してはいけません。 将来の 4Dバージョンで番号が衝突しないようにするために、負数の使用が推奨されます。

For more information, refer to the description of the `CALL SUBFORM CONTAINER` command.

#### EXECUTE METHOD IN SUBFORM コマンド

The `EXECUTE METHOD IN SUBFORM` command lets a form or one of its objects request the execution of a method in the context of the subform instance, which gives it access to the subform variables, objects, etc. このメソッドは引数も受け取れます。

このメカニズムを図示すると以下のようになります:

![](../assets/en/FormObjects/subforms6.png)

For more information, refer to the description of the `EXECUTE METHOD IN SUBFORM` command.

## プロパティ一覧

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Detail Form](properties_Subform.md#detail-form) - [Double click on empty row](properties_Subform.md#double-click-on-empty-row) - [Double click on row](properties_Subform.md#double-click-on-row) - [Enterable in list](properties_Subform.md#enterable-in-list) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Height](properties_CoordinatesAndSizing.md#height) -
[Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) -
[Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [List Form](properties_Subform.md#list-form) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Print Frame](properties_Print.md#print-frame) - [Right](properties_CoordinatesAndSizing.md#right) - [Selection mode](properties_Subform.md#selection-mode) - [Source](properties_Subform.md#source) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

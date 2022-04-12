---
id: subformOverview
title: サブフォーム
---


サブフォームとは、他のフォームに組み込まれるフォームのことです。


## 用語

サブフォームに実装されたコンセプトを明確に説明するために、いくつかの用語についてここで定義します:

*   **サブフォーム**: 他のフォームに組み込まれることを意図したフォーム。
*   **親フォーム**: 1つ以上のサブフォームを含むフォーム。
*   **サブフォームコンテナー**: 親フォームに組み込まれた、サブフォームのインスタンスを表示するオブジェクト。
*   **サブフォームインスタンス**: 親フォームに表示されたサブフォームの実体。 このコンセプトはとても重要です。親フォームには、同じサブフォームのインスタンスを複数表示することができるからです。
*   **リストフォーム**: データをリストとして表示するサブフォームインスタンス。
*   **詳細フォーム**: リストサブフォームをダブルクリックすることでアクセスすることができる、ページタイプの入力フォーム。


## リストサブフォーム

リストサブフォームを使うことで、他のテーブルのデータを入力、表示、および更新することができます。 通常は 1対Nリレーションが設定されたデータベースでリストサブフォームを使用します。 リレートされた 1テーブルのフォーム上のリストサブフォームでは、リレートされた Nテーブルのデータを入力・表示・更新します。 一つのフォーム上に、それぞれ異なるテーブルに属する複数のサブフォームを配置できます。 しかし、フォームの同じページ上には、同じテーブルに属するサブフォームを複数配置することはできません。

たとえば、連絡先管理データベースでは、ある連絡先のすべての電話番号を表示するためにリストサブフォームが使用されるでしょう。 連絡先テーブルの画面に電話番号が表示されますが、情報はリレートテーブルに格納されています。 1対Nリレーションを使用することで、このデータベース設計は連絡先ごとに複数の電話番号を簡単に格納できるようになっています。 自動リレーションにより、リレートされている Nテーブルへのデータ入力がプログラムなしで直接おこなうことができます。

リストサブフォームは通常 Nテーブルに結び付けられますが、それだけでなく他の任意のデータベーステーブルのレコードをサブフォームのインスタンスに表示することもできます。

また、ユーザーがリストサブフォームに直接データを入力するようにもできます。 サブフォームの設定に基づき、ユーザーがサブレコード上でダブルクリックするか、サブレコードを追加/編集するコマンドを使用すると、詳細フォームが表示されます。

> 4Dはサブレコードを管理する基本的なニーズに応える 3つの標準アクション `editSubrecord` (サブレコード編集)、`deleteSubrecord` (サブレコード削除) および `addSubrecord` (サブレコード追加) を提供しています。 フォームに複数のサブフォームインスタンスが含まれる場合、フォーカスを持っているサブフォームにアクションが適用されます。


## ページサブフォーム

ページサブフォームは、カレントサブレコードのデータや、コンテキストに基づく関連する値 (変数やピクチャーなど) を表示できます。 ページサブフォームを使用する利点の一つは、それらが高度な機能を提供したり、親フォームと相互作用したりできることです (ウィジェット)。 ページサブフォームには専用のプロパティやイベントがあり、プログラムから完全に制御することができます。

ページサブフォームは [詳細フォーム](properties_Subform.md#詳細フォーム) プロパティで指定された入力フォームを使用します。 リストサブフォームと異なり、使用されるフォームは親フォームと同じテーブルに所属していてもかまいません。 また、プロジェクトフォームを使用することもできます。 実行時、ページサブフォームは入力フォームと同じ標準の表示特性を持ちます。

> 4Dウィジェットは、ページサブフォームに基づいた定義済みの複合オブジェクトです。 詳細は専用のドキュメント [4D Widgets (ウィジェット)](https://doc.4d.com/4Dv19/4D/19/4D-Widgets.100-5462909.ja.html) を参照してください。


### バインドされた変数あるいは式の管理

サブフォームのコンテナーオブジェクトには、[変数あるいは式](properties_Object.md#変数あるいは式) をバインドすることができます。 これは、親フォームとサブフォームの値を同期するのに便利です。

デフォルトでは、4D はサブフォームコンテナーごとに [オブジェクト型](properties_Object.md#expression-type) の変数あるいは式をバインドします。 このオブジェクトの内容は、親フォームおよびサブフォームから読み取り・変更が可能なため、両者間で複数の値を共有することができます。

- Define a bound variable or expression of a scalar type and call the `OBJECT Get subform container value` and `OBJECT SET SUBFORM CONTAINER VALUE` commands to exchange values when [On Bound Variable Change](../Events/onBoundVariableChange.md) or [On Data Change](../Events/onDataChange.md) form events occur. This solution is recommended to synchronize a single value.
- Define a bound variable or expression of the **object** type and use the `Form` command to access its properties from the subform. This solution is recommended to synchronize several values.



### Synchronizing parent form and subform (single value)

Binding the same variable or expression to your subform container and other objects of the parent form lets you link the parent form and subform contexts to put the finishing touches on sophisticated interfaces. Imagine a subform representing a clock, inserted into a parent form containing an enterable variable of the Time type:

![](assets/en/FormObjects/subforms1.png)

In the parent form, both objects (time variable and subform container) ***have the same value as ***Variable or Expression******. It can be a variable (e.g. `parisTime`), or an expression (e.g. `Form.parisTime`).

In the subform, the clock object is managed through the `Form.clockValue` property.


#### Updating the contents of a subform

Case 1: The value of the parent form variable or expression is modified and this modification must be passed on to a subform.

`Form.parisTime` changes to 12:15:00 in the parent form, either because the user entered it, or because it was updated dynamically (via the `Current time` command for example). This triggers the [On Bound Variable Change](../Events/onBoundVariableChange.md) event in the subform's Form method.

The following code is executed:

```4d  
// Subform form method
If (Form event code=On Bound Variable Change) //bound variable or expression was modified in the parent form
    Form.clockValue:=OBJECT Get subform container value //synchonize the local value
End if
```

It updates the value of `Form.clockValue` in the subform:

![](assets/en/FormObjects/update-subform.png)

The [On Bound Variable Change](../Events/onBoundVariableChange.md) form event is generated:

- as soon as a value is assigned to the variable/expression of the parent form, even if the same value is reassigned
- サブフォームが 0ページまたはカレントフォームページに置かれているとき。

Note that, as in the above example, it is preferable to use the `OBJECT Get subform container value` command which returns the value of the expression in the subform container rather than the expression itself because it is possible to insert several subforms in the same parent form (for example, a window displaying different time zones contains several clocks).

Modifying the bound variable or expression triggers form events which let you synchronize the parent form and subform values:

- Use the [On Bound Variable Change](../Events/onBoundVariableChange.md) form event to indicate to the subform (form method of subform) that the variable or expression was modified in the parent form.
- Use the [On Data Change](../Events/onDataChange.md) form event to indicate to the subform container that the variable or expression value was modified in the subform.



#### Updating the contents of a parent form

ケース2: サブフォームの内容が更新され、その更新を親フォームに反映させる必要があります。

Inside the subform, the button changes the value of the `Form.clockValue` expression of type Time attached to the clock object. This triggers the [On Data Change](../Events/onDataChange.md) form event inside the clock object (this event must be selected for the object), which updates the `Form.parisTime` value in the main form.

The following code is executed:

```4d  
// subform clock object method
If (Form event code=On Data Change) //whatever the way the value is changed
    OBJECT SET SUBFORM CONTAINER VALUE(Form.clockValue) //Push the value to the container
End if
```

![](assets/en/FormObjects/update-main-form.png)

Everytime the value of `Form.clockValue` changes in the subform, `Form.parisTime` in the subform container is also updated.


> If the variable or expression value is set at several locations, 4D uses the value that was loaded last. It applies the following loading order: 1-Object methods of subform, 2-Form method of subform, 3-Object methods of parent form, 4-Form method of parent form


### Synchronizing parent form and subform (multiple values)

By default, 4D creates a variable or expression of [object type](properties_Object.md#expression-type) for a subform container, which allows you to share values in the context of the subform using the `Form` command ([see below](#using-the-subform-bound-object)). The contents of this object can be read and/or modified from within the parent form and from the subform, allowing you to share multiple values in a local context.

When bound a the subform container, this object is returned by the `Form` command directly in the subform. Since objects are always passed by reference, if the user modifies a property value in the subform, it will automatically be saved in the object itself and thus, available to the parent form. On the other hand, if a property of the object is modified by the user in the parent form or by programming, it will be automatically updated in the subform. No event management is necessary.

For example, in a subform, inputs are bound to the `Form` object properties (of the subform form):

![](assets/en/FormObjects/subnew1.png)

In the parent form, you display the subfom twice. Each subform container is bound to an expression which is a property of the `Form` object (of the parent form):

![](assets/en/FormObjects/subnew2.png)

The button only creates `mother` and `father` properties in the parent's `Form` object:

```4d
//Add values button object method
Form.mother:=New object("lastname"; "Hotel"; "firstname"; "Anne")
Form.father:=New object("lastname"; "Golf"; "firstname"; "Félix")
```

When you execute the form and click on the button, you see that all values are correctly displayed:

![](assets/en/FormObjects/subnew3.png)

If you modify a value either in the parent form or in the subform, it is automatically updated in the other form because the same object is used:

![](assets/en/FormObjects/subnew4.png) ![](assets/en/FormObjects/subnew5.png)

### Using pointers (compatibility)

In versions prior to 4D v19 R5, synchronization between parent forms and subforms was handled through **pointers**. For example, to update a subform object, you could call the following code:

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

- `CALL SUBFORM CONTAINER` コマンドを使用してサブフォームからコンテナーオブジェクトを呼び出す、
- `EXECUTE METHOD IN SUBFORM` コマンドを使用してサブフォームのコンテキストでメソッドを実行する。

> `GOTO OBJECT` はサブフォームから実行されても、親フォーム内にて目的のオブジェクトを検索します。


#### CALL SUBFORM CONTAINER コマンド

`CALL SUBFORM CONTAINER` コマンドを使用すると、サブフォームインスタンスからサブフォームコンテナーオブジェクトに [イベント](../Events/overview.md) を送信できます。 イベントはコンテナーオブジェクトメソッドで受信されます。 (クリックやドラッグ＆ドロップなど) サブフォームにより検知されたすべてのイベントの発生元となりえます。

送信するイベントコードに制限はありません (たとえば 20000 や -100 など)。 既存のイベントに対応するコード (たとえば `On Validate` に対応する 3) を使用することも、カスタムコードを使用することもできます。 前者のケースでは、サブフォームコンテナーのプロパティリストでチェックを入れたイベントのみを使用できます。 後者の場合、使用するコードは既存のフォームイベントに対応してはいけません。 将来の 4Dバージョンで番号が衝突しないようにするために、負数の使用が推奨されます。

詳細は `CALL SUBFORM CONTAINER` コマンドの説明を参照してください。

#### EXECUTE METHOD IN SUBFORM コマンド

`EXECUTE METHOD IN SUBFORM` コマンドを使用すると、親フォームやそのオブジェクトから、サブフォームインスタンスのコンテキストにおけるメソッド実行をリクエストできます。これにより、サブフォームの変数やオブジェクト等にアクセスすることができます。 このメソッドは引数も受け取れます。

このメカニズムを図示すると以下のようになります:

![](assets/en/FormObjects/subforms6.png)

詳細は `EXECUTE METHOD IN SUBFORM` コマンドの説明を参照してください。





## プロパティ一覧

[タイプ](properties_Object.md#タイプ) - [オブジェクト名](properties_Object.md#オブジェクト名) - [変数あるいは式](properties_Object.md#変数あるいは式) - [式の型](properties_Object.md#式の型) - [CSSクラス](properties_Object.md#cssクラス) - [ソース](properties_Subform.md#ソース) - [リストフォーム ](properties_Subform.md#リストフォーム) - [詳細フォーム](properties_Subform.md#詳細フォーム) - [選択モード](properties_Subform.md#選択モード) - [リスト更新可](properties_Subform.md#リスト更新可) - [行をダブルクリック](properties_Subform.md#行をダブルクリック) - [空行をダブルクリック](properties_Subform.md#空行をダブルクリック) - [左](properties_CoordinatesAndSizing.md#左) - [上](properties_CoordinatesAndSizing.md#上) - [右](properties_CoordinatesAndSizing.md#右) - [下](properties_CoordinatesAndSizing.md#下) - [幅](properties_CoordinatesAndSizing.md#幅) - [高さ](properties_CoordinatesAndSizing.md#高さ) - [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) - [縦方向サイズ変更](properties_ResizingOptions.md#縦方向サイズ変更) - [フォーカス可](properties_Entry.md#フォーカス可) - [表示状態](properties_Display.md#表示状態) - [フォーカスの四角を隠す](properties_Appearance.md#フォーカスの四角を隠す) - [横スクロールバー](properties_Appearance.md#横スクロールバー) - [縦スクロールバー](properties_Appearance.md#縦スクロールバー) - [境界線スタイル](properties_BackgroundAndBorder.md#境界線スタイル) - [印刷時可変](properties_Print.md#印刷時可変) - [メソッド](properties_Action.md#メソッド) 

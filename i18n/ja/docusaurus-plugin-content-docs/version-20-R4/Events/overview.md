---
id: overview
title: フォームイベント
---

フォームイベントとは、フォームメソッドやフォームオブジェクトメソッドの実行につながるイベントのことです。 フォームイベントにより、アプリケーションの流れをコントロールしたり、特定のイベントが発生したときにのみ実行されるコードを書くことができます。

In your code, you control the events using the `FORM Event` command, that returns the triggered event. 例:

```4d
// ボタンのコード
If(FORM Event.code=On Clicked) 
// ボタンがクリックされたときの動作
End if
```

> すべてのフォームとフォーム上のすべてのアクティブなオブジェクトは、事前に定義されたイベントのセットを受け取ることができますが、フォームやオブジェクト毎に有効にされたイベントだけが実際に発生します。

## イベントオブジェクト

Each event is returned as an object by the `FORM Event` command. デフォルトで、以下のプロパティが含まれています:

| プロパティ       | タイプ     | 説明                                                                                           |
| ----------- | ------- | -------------------------------------------------------------------------------------------- |
| objectName  | text    | Name of the object triggering the event - Not included if the event is triggered by the form |
| code        | longint | Numeric value of the form event. Also returned by the `Form event code` command              |
| description | text    | Name of the form event (e.g. "On After Edit")                             |

イベントが発生したオブジェクトによっては追加のプロパティが含まれていることがあります。 特に:

- [list boxes](FormObjects/listbox_overview.md#supported-form-events) and [list box columns](FormObjects/listbox_overview.md#supported-form-events-1) return [additional properties](FormObjects/listbox_overview.md#additional-properties) such as `columnName` or `isRowSelected`.
- [4D View Pro areas](FormObjects/viewProArea_overview.md) return for example `sheetName` or `action` properties in the [On After Edit](onAfterEdit.md) event object.

## イベントとメソッド

フォームイベントが発生すると、4D は以下のアクションをおこないます:

- まず 4D は、フォーム中のオブジェクトをブラウズし、発生したオブジェクトイベントがプロパティで選択されているすべてのオブジェクトのオブジェクトメソッドを呼び出します。
- 次に、発生したイベントに対応するフォームイベントがフォームのプロパティで選択されていれば、フォームメソッドを呼び出します。

オブジェクトメソッドが特定の順序で呼び出されることを期待することはできません。 おおまかに言って、オブジェクトメソッドは常にフォームメソッドよりも前に呼び出されます。 オブジェクトがサブフォームの場合、サブフォームのリストフォームのオブジェクトメソッドが呼び出され、次にリストフォームのフォームメソッドが呼び出されます。 そして 4D は引き続き、親フォームのオブジェクトメソッドを呼び出します。 つまり、オブジェクトがサブフォームの時、 4D はサブフォームオブジェクト内で、オブジェクトとフォームメソッドと同じルールを適用します。

Except for the [On Load](onLoad.md) and [On Unload](onUnload.md) events (see below), if the form event property is not selected for a given event, this does not prevent calls to object methods for the objects whose same event property is selected. 言い換えれば、フォームレベルでイベントを有効あるいは無効にしても、オブジェクトイベントプロパティには影響ありません。

特定のイベントに関連するオブジェクトの数は、イベントの性質により異なります。

## イベント一覧

以下の表は、それぞれのイベントごとにどのようにオブジェクトメソッドとフォームメソッドが呼ばれるかを概説します:

| イベント                     | オブジェクトメソッド                                      | フォームメソッド | 対象オブジェクト     |
| ------------------------ | ----------------------------------------------- | -------- | ------------ |
| On Load                  | ◯                                               | ◯        | すべてのオブジェクト   |
| On Unload                | ◯                                               | ◯        | すべてのオブジェクト   |
| On Validate              | ◯                                               | ◯        | すべてのオブジェクト   |
| On Clicked               | ◯                                               | ◯        | 関係するオブジェクトのみ |
| On Double Clicked        | ◯                                               | ◯        | 関係するオブジェクトのみ |
| On Before Keystroke      | ◯                                               | ◯        | 関係するオブジェクトのみ |
| On After Keystroke       | ◯                                               | ◯        | 関係するオブジェクトのみ |
| On After Edit            | ◯                                               | ◯        | 関係するオブジェクトのみ |
| On Getting Focus         | ◯                                               | ◯        | 関係するオブジェクトのみ |
| On Losing Focus          | ◯                                               | ◯        | 関係するオブジェクトのみ |
| On Activate              | X                                               | ◯        | なし           |
| On Deactivate            | X                                               | ◯        | なし           |
| On Outside Call          | X                                               | ◯        | なし           |
| On Page Change           | X                                               | ◯        | なし           |
| On Begin Drag Over       | ◯                                               | ◯        | 関係するオブジェクトのみ |
| On Drop                  | ◯                                               | ◯        | 関係するオブジェクトのみ |
| On Drag Over             | ◯                                               | X        | 関係するオブジェクトのみ |
| On Mouse Enter           | ◯                                               | ◯        | すべてのオブジェクト   |
| On Mouse Move            | ◯                                               | ◯        | すべてのオブジェクト   |
| On Mouse Leave           | ◯                                               | ◯        | すべてのオブジェクト   |
| On Mouse Up              | ◯                                               | X        | 関係するオブジェクトのみ |
| On Menu Selected         | X                                               | ◯        | なし           |
| On Bound variable change | X                                               | ◯        | なし           |
| On Data Change           | ◯                                               | ◯        | 関係するオブジェクトのみ |
| On Plug in Area          | ◯                                               | ◯        | 関係するオブジェクトのみ |
| On Header                | ◯                                               | ◯        | すべてのオブジェクト   |
| On Printing Detail       | ◯                                               | ◯        | すべてのオブジェクト   |
| On Printing Break        | ◯                                               | ◯        | すべてのオブジェクト   |
| On Printing Footer       | ◯                                               | ◯        | すべてのオブジェクト   |
| On Close Box             | X                                               | ◯        | なし           |
| On Display Detail        | ◯                                               | ◯        | すべてのオブジェクト   |
| On Open Detail           | ◯ (リストボックス)                  | ◯        | リストボックスのみ    |
| On Close Detail          | ◯ (リストボックス)                  | ◯        | リストボックスのみ    |
| On Resize                | X                                               | ◯        | なし           |
| On Selection Change      | ◯                                               | ◯        | 関係するオブジェクトのみ |
| On Load Record           | X                                               | ◯        | なし           |
| On Timer                 | X                                               | ◯        | なし           |
| On Scroll                | ◯                                               | X        | 関係するオブジェクトのみ |
| On Before Data Entry     | ◯ (リストボックス)                  | X        | 関係するオブジェクトのみ |
| On Column Moved          | ◯ (リストボックス)                  | X        | 関係するオブジェクトのみ |
| On Row Moved             | ◯ (リストボックス)                  | X        | 関係するオブジェクトのみ |
| On Column Resize         | ◯ (リストボックスと 4D View Pro エリア) | X        | 関係するオブジェクトのみ |
| On Header Click          | ◯ (リストボックスと 4D View Pro エリア) | X        | 関係するオブジェクトのみ |
| On Footer Click          | ◯ (リストボックス)                  | X        | 関係するオブジェクトのみ |
| On After Sort            | ◯ (リストボックス)                  | X        | 関係するオブジェクトのみ |
| On Long Click            | ◯ (ボタン)                      | ◯        | 関係するオブジェクトのみ |
| On Alternative Click     | ◯ (ボタンとリストボックス)              | X        | 関係するオブジェクトのみ |
| On Expand                | ◯ (階層 リストとリストボックス)           | X        | 関係するオブジェクトのみ |
| On Collapse              | ◯ (階層 リストとリストボックス)           | X        | 関係するオブジェクトのみ |
| On Delete Action         | ◯ (階層 リストとリストボックス)           | X        | 関係するオブジェクトのみ |
| On URL Resource Loading  | ◯ (Webエリア)                   | X        | 関係するオブジェクトのみ |
| On Begin URL Loading     | ◯ (Webエリア)                   | X        | 関係するオブジェクトのみ |
| On URL Loading Error     | ◯ (Webエリア)                   | X        | 関係するオブジェクトのみ |
| On URL Filtering         | ◯ (Webエリア)                   | X        | 関係するオブジェクトのみ |
| On End URL Loading       | ◯ (Webエリア)                   | X        | 関係するオブジェクトのみ |
| On Open External Link    | ◯ (Webエリア)                   | X        | 関係するオブジェクトのみ |
| On Window Opening Denied | ◯ (Webエリア)                   | X        | 関係するオブジェクトのみ |
| On VP Range Changed      | ◯ (4D View Pro エリア)          | X        | 関係するオブジェクトのみ |
| On VP Ready              | ◯ (4D View Pro エリア)          | X        | 関係するオブジェクトのみ |
| On Row Resize            | ◯ (4D View Pro エリア)          | X        | 関係するオブジェクトのみ |

イベントに対応するプロパティが選択されている場合にのみ、フォームやオブジェクトのメソッドが呼び出されることに留意してください。 デザインモードのフォームエディターのプロパティリストでイベントを無効にすると、メソッドが呼び出される回数を減らすことができ、フォームの実行速度を最適化できます。

> WARNING: The [On Load](onLoad.md) and [On Unload](onUnload.md) events are generated for objects if they are enabled for both the objects and the form to which the objects belong. オブジェクトのみでイベントが有効になっている場合、イベントは生成されません。これら 2つのイベントはフォームレベルでも有効にされていなければなりません。

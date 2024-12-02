---
id: dialog
title: DIALOG
displayed_sidebar: docs
---

<!--REF #_command_.DIALOG.Syntax-->**DIALOG** ( {*aTable* ;} *form* {; *formData*}{; *} )<!-- END REF-->

<!--REF #_command_.DIALOG.Params-->

| 引数       | 型            |   | 説明                                                                                                                                                          |
| -------- | ------------ | - | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aTable   | Table        | → | フォームの属するテーブルまたは 省略した場合はデフォルトテーブルまたは プロジェクトフォームを使用                                                                                                           |
| form     | Text, Object | → | プロジェクトフォームまたはテーブルフォームのフォーム名(文字列)、&#xA;あるいはフォームを定義した.jsonファイルへのPOSIXパス(文字列)、&#xA;あるいは開くフォームを定義したオブジェクト |
| formData | Object       | → | フォームに関連づけるデータ                                                                                                                                               |
| \*       | 演算子          | → | 同じプロセスを使用                                                                                                                                                   |

<!-- END REF-->

*このコマンドはスレッドセーフではないので、プリエンプティブなコードでは使用できません。*

#### 説明

<!--REF #_command_.DIALOG.Summary-->The **DIALOG** command presents the *form* to the user, along with *formData* parameter(s) (optional).<!-- END REF--> 

このコマンドは、フォームを基にした、カスタマイズされた高度なユーザーインターフェースで動作するように設計されています。 これを使用してデータベースや他の場所からの情報を表示したり、あるいはデータ入力機能を提供することができます。 [ADD RECORD](../commands-legacy/add-record.md) や [MODIFY RECORD](../commands-legacy/modify-record.md) とは異なり、**DIALOG** コマンドは、フォームとそのコンテンツ、内容、評価ボタンなどに対して、完全にコントロールすることができます。

このコマンドは通常、次の例にあるように、洗練されたフォームを表示するために[Open form window](../commands-legacy/open-form-window.md) コマンドと一緒に呼び出されます:

![](../assets/en/commands/pict3541609.en.png)

表示や取得しなければならない情報が複雑で、[ALERT](../commands-legacy/alert.md)、 [CONFIRM](../commands-legacy/confirm.md) または [Request](../commands-legacy/request.md) などのコマンドで処理しきれない場合、**DIALOG** を代わりに使用して置き換えることができます。

*form* 引数には、以下のいづれかを渡すことができます:

- 使用するフォーム名(プロジェクトフォームあるいはテーブルフォーム)
- 使用するフォームの詳細を格納している有効な.josn ファイルへのパス(POSIX シンタックス)
- 使用するフォームの詳細を格納しているオブジェクト

オプションとして、*form* 引数で指定したフォームに"form data" オブジェクトを使用して引数を渡すことができます。 form data オブジェクト内のプロパティであればどれも[Form](form.md) コマンドを使用することでフォームコンテキストから利用可能になります。 For example, if you use a form data object containing {"version";"12"}, you will be able to get or set the value of the "version" property in the form by calling:
例えば、{"version","12"} というプロパティを格納するform data オブジェクトを使用した場合、以下のように呼び出しをすることで"version" プロパティの値を取得したり設定することが可能です:

```4d
 $v:=Form.version //"12"
 Form.version:=13
```

"form data" オブジェクトに値を入れるためには、以下の2つの方法があります:

- *formData* 引数を使用する方法。 *formData* に対してローカル変数を使用することで、呼び出しコンテキストに関係なく、安全にフォームに引数を渡すことができます。 特に、同じフォームが同じプロセスないで他の場所から呼び出された場合、[Form](form.md).myProperty と呼び出すだけで、常にその特定の値にアクセスすることができます。 さらに、オブジェクトは参照によって渡されるため、ユーザーがプロパティの値をフォーム内で変更した場合、その値は自動的にオブジェクト自身内に保存されます。

- [ユーザークラスをフォームに割り当てる](../FormEditor/properties_FormProperties.md#form-class)ことで、4D はフォームがロードされる際に自動的にこのクラスのオブジェクトをインスタンス化します。 オブジェクトプロパティおよび関数は[Form](form.md) から返されるオブジェクト内で自動的に利用可能になります。 例えば、`Form.myFunction()` と書くことができます。

:::note

- *formData* 引数の方がform クラスより優先されます(*formData* 引数が渡された場合、クラスオブジェクトはインスタンス化されません)。
- *formData* 引数を渡さなかった場合(または未定義のオブジェクトを渡した場合) でフォームにユーザークラスが何も割り当てられていなかった場合、**DIALOG** コマンドは新しい空のオブジェクトを作成して*form* にバインドします。

:::

ダイアログは(ak accept 標準アクション、Enter キー、または[ACCEPT](../commands-legacy/accept.md) コマンドによってトリガーされた)"accept" アクション、または(ak cancel 標準アクション、Escape キー、または[CANCEL](../commands-legacy/cancel.md) コマンドによってトリガーされた)"cancel" アクションによって閉じられます。 accept アクションはOK システム変数を1に設定する一方、cancel アクションはOK を0に設定します。

ただし、評価することは保存と同等ではないという点に注意して下さい。
ダイアログにフィールドが含まれる場合、変更されたデータを保存するためには[SAVE RECORD](../commands-legacy/save-record.md) コマンドを明示的に呼び出さなければいけません。

If you pass the optional *\** parameter, the form is loaded and displayed in the last open window of the current process and the command finishes its execution while leaving the active form on the screen.\
This form then reacts “normally” to user actions and is closed using a standard action or when 4D code related to the form (object method or form method) calls the [CANCEL](../commands-legacy/cancel.md) or [ACCEPT](../commands-legacy/accept.md) command. If the current process terminates, the forms created in this way are automatically closed in the same way as if a [CANCEL](../commands-legacy/cancel.md) command had been called. This opening mode is particularly useful for displaying a floating palette with a document, without necessarily requiring another process.

**注:**

- You can combine the use of the **DIALOG**(form;\*) syntax with the [CALL FORM](call-form.md) command to establish communication between the forms.
- You must create a window before calling the **DIALOG**(form;\*) statement. It is not possible to use the current dialog window in the process nor the window created by default for each process. Otherwise, error -9909 is generated.
- When the *\** parameter is used, the window is closed automatically following a standard action or a call to the [CANCEL](../commands-legacy/cancel.md) or [ACCEPT](../commands-legacy/accept.md) command. You do not have to manage the closing of the window itself.

#### 例題 1

The following example can be used to create a tool palette:

```4d
  //Display tool palette
 $palette_window:=Open form window("tools";Palette form window)
 DIALOG("tools";*) //Give back the control immediately
  //Display main document windowl
 $document_window:=Open form window("doc";Plain form window)
 DIALOG("doc")
```

#### 例題 2

In a form displaying the record of a person, a "Check children" button opens a dialog to verify/modify the names and ages of their children:

![](../assets/en/commands/pict3542015.en.png)

**Note:** The "Children" object field is represented only to show its structure for this example.

In the verification form, you have assigned some [Form](form.md) object properties to variables:

![](../assets/en/commands/pict3541682.en.png)

Here is the code for the "Check children" button:

```4d
 var $win;$n;$i : Integer
 var $save : Boolean
 ARRAY OBJECT($children;0)
 OB GET ARRAY([Person]Children;"children";$children) //get the children collection
 $save:=False //initialize the save variable
 
 $n:=Size of array($children)
 If($n>0)
    $win:=Open form window("Edit_Children";Movable form dialog box)
    SET WINDOW TITLE("Check children for "+[Person]Name)
    For($i;1;$n) //for each child
       DIALOG("Edit_Children";$children{$i}) //displays dialog filled with values
       If(OK=1) //the user clicked OK
          $save:=True
       End if
    End for
    If($save=True)
       [Person]Children:=[Person]Children //forces object field update
    End if
    CLOSE WINDOW($win)
 Else
    ALERT("No child to check.")
 End if
```

The form displays information for each child:

![](../assets/en/commands/pict3515152.en.png)

If values are edited and the OK button is clicked, the field is updated (the parent record must be saved afterwards).

#### 例題 3

The following example uses the path to a .json form to display the records in an employee list:

```4d
 Open form window("/RESOURCES/OutputPersonnel.json";Plain form window)
 ALL RECORDS([Personnel])
 DIALOG("/RESOURCES/OutputPersonnel.json";*)
```

which displays:

![](../assets/en/commands/pict3687439.en.png)

#### 例題 4

The following example uses a .json file as an object and modifies a few properties:

```4d
 var $form : Object
 $form:=JSON Parse(Document to text(Get 4D folder(Current resources folder)+"OutputPersonnel.json"))
 $form.windowTitle:="The Avengers"
 $form.pages[1].objects.logo.picture:="/RESOURCES/Images/Avengers.png"
 $form.pages[1].objects.myListBox.borderStyle:="double"
 Open form window($form;Plain form window)
 DIALOG($form;*)
```

The altered form is displayed with the title, logo and border modified:

![](../assets/en/commands/pict3688356.en.png)

#### System variables and sets

After a call to **DIALOG**, if the dialog is accepted, OK is set to 1; if it is canceled, OK is set to 0.

#### 参照

[ACCEPT](../commands-legacy/accept.md)\
[ADD RECORD](../commands-legacy/add-record.md)\
[CALL FORM](call-form.md)\
[CANCEL](../commands-legacy/cancel.md)\
[Form](form.md)\
[Open window](../commands-legacy/open-window.md)

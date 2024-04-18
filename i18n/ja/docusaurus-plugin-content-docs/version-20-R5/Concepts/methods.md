---
id: methods
title: メソッド
---

メソッドとは、1つ以上の動作を実行するコードのことです。 メソッドは、1つ以上のステートメントで構成されます。

ステートメントは 1つの命令を実行し、単純な場合もあれば複雑な場合もあります。 Each statement usually consists of one line in the method (if necessary, it can however be [split using the `\` character](quick-tour.md#code-on-several-lines)).

メソッドは最大 2GBのテキストまたは、32000行まで記述できます。

## メソッドタイプ

4D ランゲージにおいて、数種類のメソッドが存在します。 その呼び出し方によって、メソッドは区別されます:

| タイプ                                                 | 自動呼び出しのコンテキスト                                                                                                                  | 引数の受け取り                   | 説明                                                                                                                                                                                                                   |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **プロジェクトメソッド**                                      | On demand, when the project method name is called (see [Calling project methods](#calling-project-methods)) | ◯                         | 任意のアクションを実行するためのコードです。 作成されたプロジェクトメソッドは、そのプロジェクトのランゲージの一部となります。                                                                                                                                                      |
| **オブジェクト (ウィジェット) メソッド**         | メソッドが設定されたフォームオブジェクトに関連したイベント発生時に                                                                                              | ×                         | フォームオブジェクト (ウィジェットとも呼びます) のプロパティです。                                                                                                                                                               |
| **Form method**                                     | メソッドが設定されたフォームに関連したイベント発生時に                                                                                                    | ×                         | フォームのプロパティです。 フォームメソッドを使用してデータとオブジェクトを管理することができます。ただし、これら目的には、オブジェクトメソッドを使用する方が通常は簡単であり、より効果的です。                                                                                                                     |
| **Trigger** (aka _Table method_) | テーブルのレコード操作 (追加・削除・修正) の度に                                                                                  | ×                         | テーブルのプロパティです。 トリガーは、データベースのレコードに対して「不正な」操作がおこなわれることを防ぎます。                                                                                                                                                            |
| **データベースメソッド**                                      | 作業セッションのイベント発生時に                                                                                                               | ○ (既定) | 4D には 16のデータベースメソッドがあります。                                                                                                                                                                                            |
| **Class**                                           | [**Class functions**](classes.md#function) are called in the context of an object instance                                     | ◯                         | Class functions can be built-in (_e.g._ `collection.orderBy()` or `entity.save()`), or created by the 4D developer. See [**Classes**](classes.md) |

## プロジェクトメソッドの呼び出し

その実行方法や使用方法に応じて、プロジェクトメソッドは次のような役割を果たします:

- サブルーチン
- オブジェクトフォーミュラ
- メニューメソッド
- プロセスメソッド
- イベントまたはエラー処理メソッド

また、テスト目的などで、プロジェクトメソッドを手動で実行することもできます。

### サブルーチン

サブルーチンは、処理の下請け的なプロジェクトメソッドです。 他のメソッドから呼ばれて、要求された処理を実行します。 関数は、呼び出し元のメソッドに値を返すサブルーチンのことです。

プロジェクトメソッドを作成すると、それは同データベースのランゲージの一部となります。 You can then call the project method from another method (project method, object method...) in the same way that you call 4D’s built-in commands. このように使用されるプロジェクトメソッドをサブルーチンと呼びます。

サブルーチンは、以下のような目的で使います:

- 重複コードの削減
- メソッドの役割の明確化
- メソッド改変の容易化
- コードのモジュール化

たとえば、顧客データベースがあるとします。 プロジェクトをカスタマイズしていくうちに、顧客を検索してレコードを修正するという一連の作業を繰り返しおこなっていることに気づいたとします。 そのコーディングは以下のようになっています:

```4d
  // 顧客を検索します
 QUERY BY EXAMPLE([Customers])
  // 入力フォームを選択します
 FORM SET INPUT([Customers];"Data Entry")
  // 顧客レコードを修正します
 MODIFY RECORD([Customers])
```

サブルーチンを使用しなければ、顧客レコード修正のたびにコードを作成しなければなりません。 プロジェクトの 10箇所で同じ処理が必要であれば、同じコーディングを 10回も書かねばなりません。 サブルーチンを使用すれば 1回コーディングするだけですみます。 これがコーディングの重複を減らすというサブルーチンの第一の利点です。

If the previously described code was a method called `MODIFY_CUSTOMER`, you would execute it simply by using the name of the method in another method. たとえば、顧客のレコードを修正し、それからレコードをプリントするために、以下のようなメソッドを書くことができます:

```4d
 MODIFY_CUSTOMER
 PRINT SELECTION([Customers])
```

この機能はメソッドを劇的にに簡素化します。 In the example, you do not need to know how the `MODIFY_CUSTOMER` method works, just what it does. これはメソッドをサブルーチン化することの2番目の理由、役割の明確化です。 このように、作成されたメソッドは 4Dランゲージを拡張します。

このプロジェクトの例で顧客の検索方法を変える場合、10箇所ではなく、たった1つのメソッドを変更するだけですみます。 これがサブルーチンを使うもう一つの理由、改変の容易化です。

また、サブルーチンの利用はコードをモジュール化します。 これはコードをモジュール (サブルーチン) に分割することを意味し、それぞれは論理的な処理を実行します。 小切手振り出し口座のプロジェクトから、以下のコードを見てみましょう:

```4d
 FIND_CLEARED_CHECKS // 決済された小切手の検索
 RECONCILE_ACCOUNT // 口座の照合
 PRINT_CHECK_BOOK_REPORT // レポートの印刷
```

プロジェクトの詳細を知らない人でも、このプログラムが何をしているかはわかります。 各サブルーチンの処理手順を知る必要はありません。 各サブルーチンは長く、複雑な処理で構成されていることもありますが、それらが何を実行するのかだけを知っていれば十分なのです。 プログラムを論理的な処理単位やモジュールにできるだけ分割することをお勧めします。

### オブジェクトフォーミュラ

You can encapsulate your project methods in **formula** objects and call them from your objects.

The `Formula` or `Formula from string` commands allow you to create native formula objects that you can encapsulate in object properties. つまり、カスタムなオブジェクトメソッドを実装することが可能です。

To execute a method stored in an object property, use the **()** operator after the property name. 例:

```4d
// myAlert プロジェクトメソッド
ALERT("Hello world!")
```

Then `myAlert` can be encapsulated in any object and called:

```4d
var $o : Object
$o:=New object("custom_Alert";Formula(myAlert))
$o.custom_Alert() // "Hello world!" と表示します
```

大カッコを使用したシンタックスもサポートされます:

```4d
$o["custom_Alert"]() // "Hello world!" と表示します
```

You can also [pass parameters](Concepts/parameters.md) to your formula when you call it by using $1, $2… just like with 4D project methods:

```4d
//fullName メソッド
C_TEXT($0;$1;$2)
$0:=$1+" "+$2
```

You can encapsulate `fullName` in an object:

```4d
var $o : Object
$o:=New object("full_name";Formula(fullName))
$result:=$o.full_name("John";"Smith") 
//$result = "John Smith"
// $result:=fullName("param1";"param2") と同義です
```

Combined with the `This`function, such object methods allow writing powerful generic code. 例:

```4d
//fullName2 メソッド
C_TEXT($0)
$0:=This.firstName+" "+This.lastName
```

このメソッドをオブジェクトに格納すると、オブジェクトの新しい計算属性のように使えます:

```4d
var $o : Object
$o:=New object("firstName";"Jim";"lastName";"Wesson")
$o.fullName:=Formula(fullName2) // メソッドをオブジェクトに追加します

$result:=$o.fullName() 
// $result = "Jim Wesson"
```

Note that, even if it does not have parameters, an object method to be executed must be called with `()` parenthesis. オブジェクトプロパティのみを呼び出した場合、フォーミュラへの新しい参照が返されます (そしてフォーミュラは実行はされません):

```4d
$o:=$f.message // $o にはフォーミュラオブジェクトが返されます
```

### メニューメソッド

メニューメソッドは、カスタムメニューから呼び出されるプロジェクトメソッドです。 メニューエディターまたは "メニュー" テーマのコマンドを使用して、メニューにメソッドを割り当てます。 メニューが選択されると、それに対応するメニューメソッドが実行されます。 特定の処理を実行するメニューメソッドを割り当てたカスタムメニューを作成することで、デスクトップアプリケーションのユーザーインターフェースをカスタマイズすることができます。

メニューメソッドにより、単一または複数の処理を実行することができます。 For example, a menu command for entering records might call a method that performs two tasks: displaying the appropriate input form, and calling the `ADD RECORD` command until the user cancels the data entry activity.

連続した処理の自動化は、プログラミング言語の強力な機能の 1つです。 カスタムメニューを使用することで処理を自動化することができ、アプリケーションのユーザーにより多くのガイダンスを提供することができます。

### プロセスメソッド

A **process method** is a project method that is called when a process is started. ワーカープロセスの場合を除いて、プロセスはプロセスメソッドが実行されている間だけ存続します。 Note that a menu method attached to a menu command with _Start a New Process_ property is also the process method for the newly started process.

### イベント・エラー処理メソッド

An **event catching method** runs in a separate process as the process method for catching events. 通常、開発者はイベント管理の大部分を 4Dに任せます。 たとえば、データ入力中にキーストロークやクリックを検出した 4Dは、正しいオブジェクトとフォームメソッドを呼び出します。このため開発者は、これらのメソッド内でイベントに対し適切に応答できるのです。 For more information, see the description of the command `ON EVENT CALL`.

An **error catching method** is an interrupt-based project method. エラーや例外が発生するたびに呼び出されます。 For more information, see the [Error handling](error-handling.md) section.

### 手動での実行

アプリケーションに定義されたプロジェクトメソッドは通常、アプリケーションの使用中にボタンやメニュー、他のメソッドなどから自動的に呼び出されます。 データベースメソッドについては、アプリケーションで発生する特定のイベントに反応して実行されます。

しかし、テストやデバッグの目的で、プロジェクトメソッドや特定のデータベースメソッドをデザインモードで実行することができます。 この場合、メソッドを新規プロセスで実行するか、または直接デバッグモードで一行ごと実行できます。

メソッド実行は 2つの方法でおこなえます:

- コードエディターウィンドウからメソッド実行
- メソッド実行ダイアログボックスから実行 (プロジェクトメソッドのみ)

#### コードエディターからメソッド実行

Each [**Code Editor**](../code-editor/write-class-method.md) window has a button that can be used to run the current method. このボタンに関連付けられているメニューから実行オプションを選択できます。

このボタンは、プロジェクトメソッドと以下のデータベースメソッドでのみ利用できます:

- On Startup
- On Exit
- On Server Startup
- On Server Shutdown

For more information, see [Toolbar](../code-editor/write-class-method.md#toolbar).

#### メソッド実行ダイアログボックスから実行

When you select the **Method...** command of the **Run** menu,  displays the **Execute Method** dialog.

このダイアログボックスには、データベースのプロジェクトメソッド (コンポーネントの共有メソッドを含む) が表示されます。 一方、非表示属性が設定されたプロジェクトメソッドは表示されません。

To execute a project method, simply select its name in the list and click on **Execute**. To run a method step by step in Debug mode, click on **Debug**. For more information about the 4D debugger, refer to the [Debugging](../Debugging/basics.md) section.

If you check the **New Process** check box, the method you selected executes in another process. 大量の印刷など時間のかかる処理をメソッドがおこなう場合でもこのオプションを使用すれば、レコードの追加、グラフの作成などの処理をアプリケーションプロセスで継続できます。 For more information about processes, refer to [Processes](https://doc.4d.com/4Dv19R5/4D/19-R5/Processes.300-5830912.en.html) the 4D _Language Reference_ manual.

**4D Server Notes**:

- If you want the method to be executed on the server machine rather than on the client machine, select the **On 4D Server** option in the To be executed menu. In this case, a new process, call a _stored procedure_, is created on the server machine in order to execute the method. このオプションを使用して、ネットワークトラフィックを減らしたり、4D Serverの動作を最適化したりできます (特にディスクに格納されたデータにアクセスする場合など)。 すべてのタイプのメソッドをサーバー上や他のクライアント上で実行できますが、ユーザーインターフェースを変更するものは例外です。 この場合、ストアドプロシージャーは効果がありません。
- 他のクライアントマシン上でメソッドを実行するよう選択することもできます。 Other client workstations will not appear in the menu, unless they have been previously "registered" (for more information, refer to the description of the [REGISTER CLIENT](https://doc.4d.com/4dv19/help/command/en/page648.html).

By default, the **locally** option is selected. 4D シングルユーザーの場合、このオプションしか選択できません。

## プロジェクトメソッドの再帰呼び出し

プロジェクトメソッドは、自分自身を呼び出すことができます。 例:

- メソッドAがメソッドBを呼び出し、メソッドBはメソッドAを呼び出します。
- メソッドAは自身を呼び出すことができます。

これは再帰呼び出しと呼ばれています。 4D ランゲージは再帰呼び出しを完全にサポートしています。

次に例を示します。 Let’s say you have a `[Friends and Relatives]` table composed of this extremely simplified set of fields:

- `[Friends and Relatives]Name`
- `[Friends and Relatives]ChildrensName`

この例題では、フィールドの値は重複しない、つまり同じ名前の人間はいないとします。 名前を指定することで、以下のような文を作成します: “A friend of mine, John who is the child of Paul who is the child of Jane who is the child of Robert who is the child of Eleanor, does this for a living!”:

1. この文を以下のように作成できます:

```4d
 $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       $vtTheWholeStory:="A friend of mine, "+$vsName
       Repeat
          QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$vsName)
          $vlQueryResult:=Records in selection([Friends and Relatives])
          If($vlQueryResult>0)
             $vtTheWholeStory:=$vtTheWholeStory+" who is the child of "+[Friends and Relatives]Name
             $vsName:=[Friends and Relatives]Name
          End if
       Until($vlQueryResult=0)
       $vtTheWholeStory:=$vtTheWholeStory+", does this for a living!"
       ALERT($vtTheWholeStory)
    End if
 End if
```

2. 以下の方法でも作成できます:

```4d
 $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       ALERT("A friend of mine, "+Genealogy of($vsName)+", does this for a living!")
    End if
 End if
```

with the recursive function `Genealogy of` listed here:

```4d
  ` Genealogy of project method
  ` Genealogy of ( String ) -> Text
  ` Genealogy of ( Name ) -> Part of sentence
 
 $0:=$1
 QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$1)
 If(Records in selection([Friends and Relatives])>0)
    $0:=$0+" who is the child of "+Genealogy of([Friends and Relatives]Name)
 End if
```

Note the `Genealogy of` method which calls itself.

The first way is an **iterative algorithm**. The second way is a **recursive algorithm**.

前述の例題のようなコードを実装する場合、反復性や再帰呼び出しを使用してメソッドを書くことができるということに留意してください。 再帰呼び出しは一般的に、より明瞭で読みやすく、維持しやすいコードを提供します。ただし、この使用は必須ではありません。

4D内での再帰呼び出しの代表的な使用方法は以下のとおりです:

- 例題と同じく、互いに関連するテーブル内でのレコードの取り扱い。
- Browsing documents and folders on your disk, using the commands `FOLDER LIST` and `DOCUMENT LIST`. フォルダーにはフォルダーとドキュメントが含まれており、サブフォルダーはまたフォルダーとドキュメントを含むことができます。

**Important:** Recursive calls should always end at some point. In the example, the method `Genealogy of` stops calling itself when the query returns no records. この条件のテストをしないと、メソッドは際限なく自身を呼び出します。 (メソッド内で使用される引数やローカル変数の蓄積を含む) 再帰呼び出しによって容量が一杯になると、最終的に 4Dは “スタックがいっぱいです” エラーを返します 。

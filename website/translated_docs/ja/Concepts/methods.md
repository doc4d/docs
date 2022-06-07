---
id: methods
title: メソッド
---


メソッドとは、1つ以上の動作を実行するコードのことです。 メソッドは、一つ以上のステートメントで構成されます。ステートメントとは、メソッドの1行のことで1つの命令を実行します。 ステートメントは単純な場合もあれば、複雑な場合もあります。 各ステートメントは常に 1行ですが最大 32,000文字まで使用することができます。

メソッドは最大 2GBのテキストまたは、32000行まで記述できます。

## メソッドタイプ

4D ランゲージにおいて、数種類のメソッドが存在します。 その呼び出し方によって、メソッドは区別されます:

| タイプ                      | 自動呼び出しのコンテキスト                                             | 引数の受け取り | 説明                                                                                               |
| ------------------------ | --------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------ |
| **プロジェクトメソッド**           | 呼び出しに応じて ([プロジェクトメソッドの呼び出し](#calling-project-methods) 参照) | ◯       | 任意のアクションを実行するためのコードです。 作成されたプロジェクトメソッドは、そのプロジェクトのランゲージの一部となります。                                  |
| **オブジェクト (ウィジェット) メソッド** | メソッドが設定されたフォームオブジェクトに関連したイベント発生時に                         | ×       | フォームオブジェクト (ウィジェットとも呼びます) のプロパティです。                                                              |
| **フォームメソッド**             | メソッドが設定されたフォームに関連したイベント発生時に                               | ×       | フォームのプロパティです。 フォームメソッドを使用してデータとオブジェクトを管理することができます。ただし、これら目的には、オブジェクトメソッドを使用する方が通常は簡単であり、より効果的です。 |
| **トリガー** (別名 *テーブルメソッド*) | テーブルのレコード操作 (追加・削除・修正) の度に                                | ×       | テーブルのプロパティです。 トリガーは、データベースのレコードに対して「不正な」操作がおこなわれることを防ぎます。                                        |
| **データベースメソッド**           | 作業セッションのイベント発生時に                                          | ○ (既定)  | 4D には 16のデータベースメソッドがあります。 詳細はデータベースメソッドの項を参照ください。                                                |


> 4D ランゲージは **クラス関数** もサポートしています。クラス関数は、オブジェクトインスタンスのコンテキストにおいて呼び出されます。 クラス関数にはビルトインのものと (*例: * `collection.orderBy()` や `entity.save()`)、[開発者によって作成されるもの](classes.md#function)があります。


## プロジェクトメソッドの呼び出し

その実行方法や使用方法に応じて、プロジェクトメソッドは次のような役割を果たします:

- サブルーチン
- オブジェクトフォーミュラ
- メニューメソッド
- プロセスメソッド
- イベントまたはエラー処理メソッド

### サブルーチン

サブルーチンは、処理の下請け的なプロジェクトメソッドです。 他のメソッドから呼ばれて、要求された処理を実行します。 関数は、呼び出し元のメソッドに値を返すサブルーチンのことです。

プロジェクトメソッドを作成すると、それは同データベースのランゲージの一部となります。 プロジェクトメソッドは、4Dのビルトインコマンドと同様に、ほかのメソッド (プロジェクトメソッドやオブジェクトメソッド) から呼び出すことができます。 このように使用されるプロジェクトメソッドをサブルーチンと呼びます。

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

先ほど説明したコードが `MODIFY_CUSTOMER` と呼ばれるメソッドであるとすれば、他のメソッド内でそのメソッド名を使うことで実行できます。 たとえば、顧客のレコードを修正し、それからレコードをプリントするために、以下のようなメソッドを書くことができます:

```4d
 MODIFY_CUSTOMER
 PRINT SELECTION([Customers])
```

この機能はメソッドを劇的にに簡素化します。 さきほどの例で言えば、`MODIFY_CUSTOMER` メソッドがどのように動作するかは知る必要がなく、何をおこなうかだけ知っていればよいのです。 これはメソッドをサブルーチン化することの2番目の理由、役割の明確化です。 このように、作成されたメソッドは 4Dランゲージを拡張します。

このプロジェクトの例で顧客の検索方法を変える場合、10箇所ではなく、たった1つのメソッドを変更するだけですみます。 これがサブルーチンを使うもう一つの理由、改変の容易化です。

また、サブルーチンの利用はコードをモジュール化します。 これはコードをモジュール (サブルーチン) に分割することを意味し、それぞれは論理的な処理を実行します。 小切手振り出し口座のプロジェクトから、以下のコードを見てみましょう:

```4d
 FIND_CLEARED_CHECKS // 決済された小切手の検索
 RECONCILE_ACCOUNT // 口座の照合
 PRINT_CHECK_BOOK_REPORT // レポートの印刷
```

プロジェクトの詳細を知らない人でも、このプログラムが何をしているかはわかります。 各サブルーチンの処理手順を知る必要はありません。 各サブルーチンは長く、複雑な処理で構成されていることもありますが、それらが何を実行するのかだけを知っていれば十分なのです。 プログラムを論理的な処理単位やモジュールにできるだけ分割することをお勧めします。


### オブジェクトフォーミュラ

プロジェクトメソッドは、**フォーミュラ** オブジェクトにカプセル化して、オブジェクトから呼び出すことができます。

`Formula` または `Formula from string` コマンドを使用すると、オブジェクトプロパティに格納可能な、ネイティブなフォーミュラオブジェクトを作成することができます: つまり、カスタムなオブジェクトメソッドを実装することが可能です。

オブジェクトプロパティに保存されているメソッドを実行するには、プロパティ名のあとに **( )** をつけます。 たとえば:

```4d
// myAlert プロジェクトメソッド
ALERT("Hello world!")
```

この `myAlert` プロジェクトメソッドを任意のオブジェクトに格納し、呼び出すことができます:

```4d
C_OBJECT($o)
$o:=New object("custom_Alert";Formula(myAlert))
$o.custom_Alert() // "Hello world!" と表示します
```

大カッコを使用したシンタックスもサポートされます:

```4d
$o["custom_Alert"]() // "Hello world!" と表示します
```

4D プロジェクトメソッドのように、$1, $2, .... を使用して呼び出すことで、フォーミュラに [引数を渡す](Concepts/parameters.md) こともできます:

```4d
//fullName メソッド
C_TEXT($0;$1;$2)
$0:=$1+" "+$2
```

`fullName` メソッドをオブジェクトに格納し、呼び出します:

```4d
C_OBJECT($o)
$o:=New object("full_name";Formula(fullName))
$result:=$o.full_name("John";"Smith") 
//$result = "John Smith"
// $result:=fullName("param1";"param2") と同義です
```

`This` 関数と組み合わせることで、オブジェクトメソッドを利用した汎用的なコードを書くことができます。 たとえば:

```4d
//fullName2 メソッド
C_TEXT($0)
$0:=This.firstName+" "+This.lastName
```

このメソッドをオブジェクトに格納すると、オブジェクトの新しい計算属性のように使えます:

```4d
C_OBJECT($o)
$o:=New object("firstName";"Jim";"lastName";"Wesson")
$o.fullName:=Formula(fullName2) // メソッドをオブジェクトに追加します

$result:=$o.fullName() 
//$result = "Jim Wesson"
```



たとえ引数を受け取らなかったとしても、オブジェクトメソッドを実行するためにはカッコ () をつけて呼び出す必要があるという点に注意してください。 オブジェクトプロパティのみを呼び出した場合、フォーミュラへの新しい参照が返されます (そしてフォーミュラは実行はされません):

```4d
$o:=$f.message // $o にはフォーミュラオブジェクトが返されます
```

### メニューメソッド
メニューメソッドは、カスタムメニューから呼び出されるプロジェクトメソッドです。 メニューエディターまたは "メニュー" テーマのコマンドを使用して、メニューにメソッドを割り当てます。 メニューが選択されると、それに対応するメニューメソッドが実行されます。 特定の処理を実行するメニューメソッドを割り当てたカスタムメニューを作成することで、デスクトップアプリケーションのユーザーインターフェースをカスタマイズすることができます。

メニューメソッドにより、単一または複数の処理を実行することができます。 たとえば、データ入力のメニューに、以下の2つの処理を実行するメソッドを割り当てられます。まず適切な入力フォームを表示し、次にユーザーがキャンセルするまでの間 `ADD RECORD` コマンドによるデータ入力を繰り返します。

連続した処理の自動化は、プログラミング言語の強力な機能の 1つです。 カスタムメニューを使用することで処理を自動化することができ、アプリケーションのユーザーにより多くのガイダンスを提供することができます。


### プロセスメソッド

**プロセスメソッド** とは、プロセスの開始時に呼び出されるプロジェクトメソッドのことです。 ワーカープロセスの場合を除いて、プロセスはプロセスメソッドが実行されている間だけ存続します。 メニューに属するメニューメソッドのプロパティとして *新規プロセス開始* をチェックしている場合、そのメニューメソッドは新規プロセスのプロセスメソッドでもあります。

### イベント・エラー処理メソッド
**イベント処理メソッド** は、イベントを処理するプロセスメソッドとして、分離されたプロセス内で実行されます。 通常、開発者はイベント管理の大部分を 4Dに任せます。 たとえば、データ入力中にキーストロークやクリックを検出した 4Dは、正しいオブジェクトとフォームメソッドを呼び出します。このため開発者は、これらのメソッド内でイベントに対し適切に応答できるのです。 詳細については `ON EVENT CALL` コマンドの説明を参照してください。

**エラー処理メソッド** は、割り込みを実行するプロジェクトメソッドです。 エラーや例外が起こる度に、エラー処理メソッドは自身がインストールされたプロセス内で実行されます。 詳細については `ON ERR CALL` コマンドの説明を参照してください。

## プロジェクトメソッドの再帰呼び出し

プロジェクトメソッドは、自分自身を呼び出すことができます。 たとえば:

- メソッドAがメソッドBを呼び出し、メソッドBはメソッドAを呼び出します。
- メソッドAは自身を呼び出すことができます。

これは再帰呼び出しと呼ばれています。 4D ランゲージは再帰呼び出しを完全にサポートしています。

次に例を示します。 以下のフィールドから成る `[Friends and Relatives]` テーブルがあります:
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

再帰関数 `Genealogy of` は以下の通りです:

```4d
  ` Genealogy of プロジェクトメソッド
  ` Genealogy of ( String ) -> Text
  ` Genealogy of ( Name ) -> Part of sentence

 $0:=$1
 QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$1)
 If(Records in selection([Friends and Relatives])>0)
    $0:=$0+" who is the child of "+Genealogy of([Friends and Relatives]Name)
 End if
```

`Genealogy of` メソッドが自分自身を呼び出していることに注目してください。

最初に挙げた方法は **反復性のアルゴリズム** です。 2番目に挙げた方法は **再帰呼び出しのアルゴリズム** です。

前述の例題のようなコードを実装する場合、反復性や再帰呼び出しを使用してメソッドを書くことができるということに留意してください。 再帰呼び出しは一般的に、より明瞭で読みやすく、維持しやすいコードを提供します。ただし、この使用は必須ではありません。

4D内での再帰呼び出しの代表的な使用方法は以下のとおりです:

- 例題と同じく、互いに関連するテーブル内でのレコードの取り扱い。
- `FOLDER LIST` と `DOCUMENT LIST` コマンドを使用して、ディスク上にあるドキュメントとフォルダーをブラウズする。 フォルダーにはフォルダーとドキュメントが含まれており、サブフォルダーはまたフォルダーとドキュメントを含むことができます。

**重要:** 再帰呼び出しは、必ずある時点で終了する必要があります。 たとえば、`Genealogy of` メソッドが自身の呼び出しを止めるのは、クエリがレコードを返さないときです。 この条件のテストをしないと、メソッドは際限なく自身を呼び出します。 (メソッド内で使用される引数やローカル変数の蓄積を含む) 再帰呼び出しによって容量が一杯になると、最終的に 4Dは “スタックがいっぱいです” エラーを返します 。

## プロジェクトメソッドプロパティ

プロジェクトメソッドを作成した後、その名称やプロパティを変更することができます。 プロジェクトメソッドのプロパティは主に、実行アクセスやセキュリティ条件 (ユーザー、統合されたサーバーやサービスからのアクセスの可否) に加えて、実行モードに関する設定が含まれます。 

他のタイプのメソッドには専用のプロパティがありません。 これらのメソッドのプロパティは、それらが関連付けられているオブジェクトに基づいて決定されます。

プロジェクトメソッドのプロパティを変更するには:

1.  [コードエディター](../code-editor/interface.md) にて:
* select the **Method Properties...** command in the **Method** menu
* on the **Methods** page of the Explorer, **right-click** on the project method and select **Method Properties...** in the context menu or options menu. The **Method Properties** dialog appears.

**Note:** A batch setting function allows you to modify a property for all or part of the database project methods in a single operation (see [Batch setting for method attributes](#batch-setting-for-method-attributes)).

#### 名称  

You can change the name of a project method in the **Name** area of the **Method Properties** window or in the Explorer.

The new name must comply with 4D naming rules (see [Identifiers](../Concepts/identifiers.md)). If a method with the same name already exists, 4D displays a message saying that the method name has already been used. If necessary, 4D sorts the list of methods again. 

**Warning:** Changing the name of a method already used in the database can invalidate any methods or formulas that use the old method name and runs the risk of disrupting application functioning. You can rename the method manually but it is strongly recommended to use the renaming function for project methods, described in [Renaming](https://doc.4d.com/4Dv19R5/4D/19-R5/Renaming.300-5851389.en.html). With this function, you can automatically update the name wherever the method is called throughout the Design environment.

With 4D Server, the method name is changed on the server when you finish editing it. If more than one user is modifying the method name at the same time, the final method name will be the name specified by the last user to finish editing it. You may want to specify a method owner so that only certain users can change the method's name

**Note:** Database methods cannot be renamed. The same goes for triggers, form methods, and object methods, which are bound to objects and take their names from the object concerned. 

#### 属性  

You can control how project methods are used and/or called in different contexts using attributes. Note that you can set attributes for an entire selection of project methods using the Explorer (see following section).

##### Invisible  

If you do not want users to be able to run a project method using the **Method...** command of the **Run** menu, you can make it Invisible by checking this option. An invisible method does not appear in the method execution dialog box (see [From the Execute Method dialog box](#from-the-execute-method-dialog-box)). 

When you make a project method invisible, it is still available to database programmers. It remains listed on the [Current form table](https://doc.4d.com/4Dv19R5/4D/19-R5/Current-form-table.301-5830420.en.html) of the Explorer and in the list of routines in the Code Editor.

##### Shared by components and host database  

This attribute is used within the framework of components. When it is checked, it indicates that the method will be available to components when the application is used as the host database. On the other hand, when the application is used as a component, the method will be available to the host databases. 

For more information about components, refer to the [Developing and installing 4D components](../Extensions/develop-components.md) chapter.

##### Execute on Server  

This attribute is only taken into account for a 4D application in client-server mode. When this option is checked, the project method is always executed on the server, regardless of how it is called. 

For more information on this option, refer to [Execute on Server attribute](#execute-on-server).

#### Execution mode  

This option allows you to declare the method eligible for execution in preemptive mode. By default, 4D executes all the project methods of your applications in cooperative mode. 

If you want to benefit from the preemptive mode feature, you must explicitly declare all the methods that you want to be started in preemptive mode. The compiler will then check that these methods are actually thread-safe.

**Note:** Execution in preemptive mode is only available in compiled mode. For more information, refer to the [Preemptive 4D processes](https://doc.4d.com/4Dv19R5/4D/19-R5/Preemptive-4D-processes.300-5830919.en.html) section.

The following options are provided:

-   **Can be run in preemptive processes**: By checking this option, you declare that the method is capable of being run in a preemptive process and therefore should be run in preemptive mode whenever possible. The "preemptive" property of the method is set to "capable".

When this option is checked, the 4D compiler will verify that the method is actually capable and will return errors if this is not the case -- for example, if it directly or indirectly calls commands or methods that cannot be run in preemptive mode (the entire call chain is parsed but errors are only reported to the first sublevel). You can then edit the method so that it becomes thread-safe, or select another option.

If the method's preemptive capability is approved, it is tagged "thread-safe" internally and will be executed in preemptive mode whenever the required conditions are met. This property defines its eligibility for preemptive mode but does not guarantee that the method will actually be run in preemptive mode, since this execution mode requires a specific context (see [When is a process started preemptively?](https://doc.4d.com/4Dv19R5/4D/19-R5/Preemptive-4D-processes.300-5830919.en.html#2822148)).

-   **Cannot be run in preemptive processes**: By checking this option, you declare that the method must never be run in preemptive mode, and therefore must always be run in cooperative mode, as in previous 4D versions. The "preemptive" property of the method is set to "incapable".

When this option is checked, the 4D compiler will not verify the ability of the method to run preemptively; it is automatically tagged "thread-unsafe" internally (even if it is theoretically capable). When called at runtime, this method will "contaminate" any other methods in the same thread, thus forcing this thread to be executed in cooperative mode, even if the other methods are thread-safe.

-   **Indifferent **(default): By checking this option, you declare that you do not want to handle the preemptive property for the method. The "preemptive" property of the method is set to "indifferent".

When this option is checked, the 4D compiler will evaluate the preemptive capability of the method and will tag it internally as "thread-safe" or "thread-unsafe". No error related to preemptive execution is returned. If the method is evaluated as thread-safe, at runtime it will not prevent preemptive thread execution when called in a preemptive context. Conversely, if the method is evaluated "thread-unsafe", at runtime it will prevent any preemptive thread execution when called.\

Note that with this option, whatever the internal thread safety evaluation, the method will always be executed in cooperative mode when called directly by 4D as the first parent method (for example through the [New process](https://doc.4d.com/4Dv19R5/4D/19-R5/New-process.301-5830903.en.html) command). If tagged "thread-safe" internally, it is only taken into account when called from other methods inside a call chain.

***Particular case*:** If the method has also the **Shared by components and host database** property (see [Project method properties](https://doc.4d.com/4Dv19R5/4D/19-R5/Project-method-properties.300-5851552.en.html)), setting the **Indifferent** option will automatically tag the method as thread-unsafe. If you want a shared component method to be thread-safe, you must explicitely set it to **Can be run in preemptive processes**. 

#### Available through  

Availability attributes specify the external services which are allowed to explicitly call the method.

##### Webサービス  

This attribute lets you publish the current method as a Web Service accessible via SOAP requests. For more information, refer to the [Publication and use of Web Services](https://doc.4d.com/4Dv19R5/4D/19-R5/Publication-and-use-of-Web-Services.200-5851321.en.html) chapter. When this option is checked, the **Published in WSDL** option is enabled.

In the Explorer, project methods that are offered as a Web Service are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440512/pict440512.fr.png).

**Note:** You cannot publish a method as a Web service if its name includes characters that do not comply with XML nomenclature (e.g. containing spaces). If the method name is not in keeping with this, 4D does not assign the property.

##### Published in WSDL  

This attribute is only available when the "Web Service" attribute is checked. It lets you include the current method in the WSDL of the 4D application. For more information about this, refer to [Generation of the WSDL](https://doc.4d.com/4Dv19R5/4D/19-R5/Publishing-a-Web-Service-with-4D.300-5851558.en.html#502689). 

In the Explorer, project methods that are offered as a Web Service and published in WSDL are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440526/pict440526.fr.png). 

##### 4D tags and URLs (4DACTION...)  

This option is used to reinforce 4D Web server security: when it is not checked, the project method cannot be executed via an HTTP request containing the special 4DACTION URL used for calling 4D methods, nor the special 4DSCRIPT, 4DTEXT and 4DHTML tags (as well as the former 4DVAR and 4DHTMLVAR tags). For more information, refer to [URLs and Form Actions](https://doc.4d.com/4Dv19R5/4D/14-R2/URLs-and-Form-Actions.300-1342176.en.html) and [4D Transformation Tags](https://doc.4d.com/4Dv19R5/4D/19-R5/4D-Transformation-Tags.300-5830552.en.html) in the 4D *Language Reference* manual.

In the Explorer, project methods with this attribute are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440496/pict440496.fr.png).

For security reasons, this option is unchecked by default. Each method that can be executed using the special Web URL or tags must be indicated individually.

##### SQL  

When it is checked, this option allows the project method to be executed by the SQL engine of 4D. By default, it is not selected, which means that, unless explicitly authorized, 4D project methods are protected and cannot be called by the SQL engine of 4D. 

This property applies to all internal and external SQL queries --- executed via the ODBC driver, SQL code inserted between the [Begin SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/Begin-SQL.301-5830074.en.html)/[End SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/End-SQL.301-5830073.en.html)  tags or the [QUERY BY SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/QUERY-BY-SQL.301-5830079.en.html) command.

**注:**

-   Even if a method has the "SQL" attribute, access rights set at the level of the database settings and method properties are taken into account for the execution of the method.
-   The ODBC **SQLProcedure** function only returns project methods with the "SQL" attribute.

For more information, refer to [4D SQL engine implementation](https://doc.4d.com/4Dv19R5/4D/19-R5/4D-SQL-engine-implementation.300-5871873.en.html) in the 4D SQL manual.

##### REST サーバー  

*This option is deprecated because it relies on legacy current record and current selection concepts. It is recommended to use** [ORDA data model class functions](https://developer.4d.com/docs/en/REST/classFunctions.html) for REST access. *

#### Batch setting for method attributes  

Using the "Attributes for methods" dialog box, you can modify an attribute (Invisible, Offered as a Web Service, etc.) for all or part of the database project methods in a single operation. This feature is especially useful for modifying the attributes of a large number of project methods. It can also be used during development to apply common attributes to groups of similar methods quickly.

For batch setting of method attributes:

1.  On the [Methods Page](https://doc.4d.com/4Dv19R5/4D/19-R5/Methods-Page.300-5851337.en.html) of the 4D Explorer, expand the options menu, then choose the **Batch setting of attributes...** command. The **Attributes for methods** dialog appears.
2.  In the "Matching method name:" area, enter a string that lets you designate the methods you want to modify as a batch. The character string is used as a search criterion for the method names. Use the wildcard character @ to help define groups of methods:
   -   To designate methods whose names begin with..., type @ at the end of the string. For example: web@
    -   To designate methods whose names contain..., type @ in the middle of the string. For example: web@write
    -   To designate methods whose names end with..., type @ at the beginning of the string. For example: @write
    -   To designate all of the methods, just type @ in the area.\
 **Notes:**
        -   The search does not take upper/lower case into account.
        -   You can enter several @ characters in the string, for example dtro_@web@pro.@
3.  In the "Attribute to Modify" area, choose an attribute from the drop-down list, then click on the **True** or **False** radio button corresponding to the value to be applied. **Note:** If the "Published in WSDL" attribute is set to True, it will only be applied to project methods already containing the "Offered as a Web Service" attribute.
4.  Click on **Apply**. The modification is applied instantly to all the project methods designated by the character string entered.

## Executing methods

Project methods written in your application are usually called automatically during the use of the application via menu commands, buttons, other methods, and so on. As for database methods, they are executed in relation to specific events that occur in the application. 

However, for testing and debugging purposes, 4D lets you manually execute project methods and certain database methods in Design mode. In this case, it is possible to run the method in a new process and/or directly in Debug mode, in order to check its execution step by step.

Moreover, with 4D Server, you can indicate whether 4D Server should execute a project method on the server machine or on other clients' machines. You can execute methods in two ways:

-   From the [Code Editor](../code-editor/overview.md) window,
-   From the [Execute Method](#from-the-execute-method-dialog-box) dialog box (project methods only).

### From the Code Editor 

Each [**Code Editor**](../code-editor/overview.md) window has a button that can be used to run the current method. Using the menu associated with this button, you can choose the type of execution desired:

![](assets/en/concepts/execute-method.png)

This button is only active for project methods and for the following database methods:

-   On Startup
-   On Exit
-   On Server Startup
-   On Server Shutdown

The following execution modes are available:

-   **Run new process**: Creates a process and runs the method in standard mode in this process.
-   **Run and debug new process**: Creates a new process and displays the method in the Debugger window for step by step execution in this process.
-   **Run in Application process**: Runs the method in standard mode in the context of the Application process (in other words, the record display window).
-   **Run and debug in Application process**: Displays the method in the Debugger window for step by step execution in the context of the Application process (in other words, the record display window).

#### From the Execute Method dialog box  

When you select the **Method...** command of the **Run** menu,  displays the **Execute Method** dialog.

This dialog box lists all the project methods of the database, including shared project methods of components. On the other hand, project methods that have been declared invisible will not appear. 

To execute a project method, simply select its name in the list and click on **Execute**. To run a method step by step in Debug mode, click on **Debug**. For more information about the 4D debugger, refer to the [Debugging](../Debugging/basics.md) section. 

**4D Server Note**: The **Debug** option is not available if you execute the method on the server.

If you check the **New Process** check box, the method you selected executes in another process. If the method is performing a time-consuming task such as printing a large set of records, you can continue to work with your database, adding records to a table, creating a graph to display data, and so on. For more information about processes, refer to [Processes](https://doc.4d.com/4Dv19R5/4D/19-R5/Processes.300-5830912.en.html) the 4D *Language Reference* manual.

**4D Server Note**:

-   If you want the method to be executed on the server machine rather than on the client machine, select the **On 4D Server** option in the To be executed menu. In this case, a new process, call the *stored procedure*, is created on the server machine in order to execute the method.

   This option can be used to reduce network traffic and optimize the functioning of 4D Server, in particular for methods that call data stored on the disk. All types of methods can be executed on the server machine or on another client machine, except for those that modify the user interface. In this case, stored procedures are ineffective.

-   You can also choose to run the method on another client workstation. Other client workstations will not appear in the menu, unless they have been previously "registered" (for more information, refer to the description of the [REGISTER CLIENT](https://doc.4d.com/4Dv19R5/4D/19-R5/REGISTER-CLIENT.301-5830908.en.html).

By default, the **locally** option is selected. With the 4D single-user version, this is the only option available.
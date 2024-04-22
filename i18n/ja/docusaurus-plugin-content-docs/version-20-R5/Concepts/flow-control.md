---
id: control-flow
title: 制御フロー
---

メソッドや関数が単純か複雑かに関係なく、開発者は3つのプログラミング構造のうち、1つ以上を常に使用します。 プログラミング構造は、メソッド内でステートメントが実行される順序を決定する実行フローをコントロールします。 3つのタイプの構造があります:

- **Sequential**: a sequential structure is a simple, linear structure. シーケンスとは、4Dが最初から最後まで次々に実行する一連のステートメントです。 オブジェクトメソッドで頻繁に使用される1行から成るルーチンはもっとも簡単なシーケンシャル構造の例です。 For example: `[People]lastName:=Uppercase([People]lastName)`
- **Branching**: A branching structure allows methods to test a condition and take alternative paths, depending on the result. 条件は true または false に評価されるブール式です。 One branching structure is the [`If...Else...End if`](#ifelseend-if) structure, which directs program flow along one of two paths. The other branching structure is the [`Case of...Else...End case`](#case-ofelseend-case) structure, which directs program flow to one of many paths.
- **Looping**: When writing methods, it is very common to find that you need a sequence of statements to repeat a number of times. これに実現するために、4D は以下のループ構造を備えています:

  - [`While...End while`](#whileend-while)
  - [`Repeat...Until`](#repeatuntil)
  - [`For...End for`](#forend-for)
  - [`For each...End for each`](#for-eachend-for-each)

ループを制御する方法には、条件が満たされるまでループする方法と、指定した回数だけループする方法の2通りがあります。 Each looping structure can be used in either way, but `While` loops and `Repeat` loops are more appropriate for repeating until a condition is met, and `For` loops are more appropriate for looping a specified number of times. `For each...End for each` allows mixing both ways and is designed to loop within objects and collections.

**Note:** 4D allows you to embed programming structures up to a "depth" of 512 levels.

## If...Else...End if

The formal syntax of the `If...Else...End if` control flow structure is:

```4d
 If(Boolean_Expression)
    statement(s)
 Else
    statement(s)
 End if
```

Note that the `Else` part is optional; you can write:

```4d
 If(Boolean_Expression)
    statement(s)
 End if
```

The `If...Else...End if` structure lets your method choose between two actions, depending on whether a test (a Boolean expression) is TRUE or FALSE. ブール式が true の場合は、テストのすぐ後のステートメントを実行し、 ブール式が FALSE の場合には、Else 文のすぐ後のステートメントを実行します。 The `Else` statement is optional; if you omit Else, execution continues with the first statement (if any) following the `End if`.

ブール式は常に全体が評価されるという点に注意してください。 たとえば、以下のような場合:

```4d
 If(MethodA & MethodB)
    ...
 End if
```

この場合、両方のメソッドが true である場合に限り、式は true になります。 However, even if _MethodA_ returns FALSE, 4D will still evaluate _MethodB_, which is a useless waste of time. この場合には、以下のような構造を使用するほうが賢明といえます:

```4d
 If(MethodA)
    If(MethodB)
       ...
    End if
 End if
```

The result is similar and _MethodB_ is evaluated only if necessary.

> **Note:** The [ternary operator](operators.md#ternary-operator) allows writing one-line conditional expressions and can replace a full sequence of If..Else statements.

#### 例題

```4d
  // ユーザーに名前の入力を求めます
 $Find:=Request("名前を入力してください")
 If(OK=1)
    QUERY([People];[People]LastName=$Find)
 Else
    ALERT("名前が入力されませんでした")
 End if 
```

**Tip:** Branching can be performed without statements to be executed in one case or the other. 下のようなコードはどちらも有効です:

```4d
 If(Boolean_Expression)
 Else
    statement(s)
 End if
```

または:

```4d
 If(Boolean_Expression)
    statement(s)
 Else
 End if
```

## Case of...Else...End case

The formal syntax of the `Case of...Else...End case` control flow structure is:

```4d
 Case of
    :(Boolean_Expression)
       statement(s)
    :(Boolean_Expression)
       statement(s)
       .
       .
       .
 
    :(Boolean_Expression)
       statement(s)
    Else
       statement(s)
 End case
```

Note that the `Else` part is optional; you can write:

```4d
 Case of
    :(Boolean_Expression)
       statement(s)
    :(Boolean_Expression)
       statement(s)
       .
       .
       .
 
    :(Boolean_Expression)
       statement(s)
 End case
```

As with the `If...Else...End if` structure, the `Case of...Else...End case` structure also lets your method choose between alternative actions. Unlike the `If...Else...End` if structure, the `Case of...Else...End case` structure can test a reasonable unlimited number of Boolean expressions and take action depending on which one is TRUE.

Each Boolean expression is prefaced by a colon (`:`). コロンとブール式の組み合わせをケースと呼びます。 例えば以下の行はケースです:

```4d
:(bValidate=1)
```

最初に true になったケースに続く (次のケースまでの) ステートメントだけが実行されます。 If none of the cases are TRUE, none of the statements will be executed (if no `Else` part is included).

最後のケースの後に Else 文を含むことができます。 If all of the cases are FALSE, the statements following the `Else` will be executed.

#### 例題

下記の例は数値変数を判定し、対応する数字をアラートボックスに表示します:

```4d
 Case of
    :(vResult=1) // 数値が1の場合
       ALERT("一です。") // 1のアラートボックスを表示します
    :(vResult=2) // 数値が2の場合
       ALERT("二です。") // 2のアラートボックスを表示します
    :(vResult=3) // 数値が3の場合
       ALERT("三です。") // 3のアラートボックスを表示します
    Else // 数値が1,2,3のいずれでもない場合
       ALERT("一、二、三のいずれでもありません。")
 End case
```

For comparison, here is the `If...Else...End if` version of the same method:

```4d
 If(vResult=1) // 数値が1の場合
    ALERT("一です。") // 1のアラートボックスを表示します
 Else
    If(vResult=2) // 数値が2の場合
       ALERT("二です。") // 2のアラートボックスを表示します
    Else
       If(vResult=3) // 数値が3の場合
          ALERT("三です。") // 3のアラートボックスを表示します
       Else // 数値が1,2,3のいずれでもない場合
          ALERT("一、二、三のいずれでもありません。")
       End if
    End if
 End if
```

Remember that with a `Case of...Else...End case` structure, only the first TRUE case is executed. 2つ以上のケースが true の場合は、最初に true になったケースのステートメントだけを実行します。

したがって、階層的なテストを実行するときには、階層上で低い位置にある条件がテスト順序で先に記述されていることを確認する必要があります。 For example, the test for the presence of condition1 covers the test for the presence of condition1&condition2 and should therefore be located last in the test sequence. このままの順序では、ケース2のステートメントはけっして実行されません:

```4d
 Case of
    :(vResult=1)
       ... //statement(s)
    :((vResult=1) & (vCondition#2)) //this case will never be detected
       ... //statement(s)
 End case
```

vResult = 1の判定により他の条件を見る前に分岐するので、第2のケースが判定されることはありません。 コードが正しく実行されるためには次のように書きます:

```4d
 Case of
    :((vResult=1) & (vCondition#2)) //this case will be detected first
       ... //statement(s)
    :(vResult=1)
       ... //statement(s)
 End case
```

さらに階層的なテストを実行したい場合、コードも階層化する必要があります。

**Tip:** Branching can be performed without statements to be executed in one case or another. 下のようなコードはどちらも有効です:

```4d
 Case of
    :(Boolean_Expression)
    :(Boolean_Expression)
      ...
 
    :(Boolean_Expression)
       statement(s)
    Else
       statement(s)
 End case
```

または:

```4d
 Case of
    :(Boolean_Expression)
    :(Boolean_Expression)
       statement(s)
       ...
        
    :(Boolean_Expression)
       statement(s)
    Else
 End case
```

または:

```4d
 Case of
    Else
       statement(s)
 End case
```

## While...End while

The formal syntax of the `While...End while` control flow structure is:

```4d
 While(Boolean_Expression)
 	statement(s)
    {break}  
    {continue}
 End while
```

A `While...End while` loop executes the statements inside the loop as long as the Boolean expression is TRUE. ループの始めにブール式を評価し、ブール式が FALSE の場合にはループをおこないません。

The `break` and `continue` statements are [described below](#break-and-continue).

It is common to initialize the value tested in the Boolean expression immediately before entering the `While...End while` loop. Initializing the value means setting it to something appropriate, usually so that the Boolean expression will be TRUE and `While...End while` executes the loop.

ブール式は、ループ内の要素を使って設定されなければなりません。そうでなければ、ループは永久に続くでしょう。 The following loop continues forever because _NeverStop_ is always TRUE:

```4d
 NeverStop:=True
 While(NeverStop)
 End while
```

このようにメソッドの実行が制御不能になった場合には、トレース機能を使用し、ループを止めて、問題点を追跡することができます。 For more information about tracing a method, see the [Error handling](error-handling.md) page.

#### 例題

```4d
 CONFIRM("Add a new record?") //The user wants to add a record?
 While(OK=1) //Loop as long as the user wants to
    ADD RECORD([aTable]) //Add a new record
 End while //The loop always ends with End while
```

In this example, the `OK` system variable is set by the `CONFIRM` command before the loop starts. If the user clicks the **OK** button in the confirmation dialog box, the `OK` system variable is set to 1 and the loop starts. Otherwise, the `OK` system variable is set to 0 and the loop is skipped. Once the loop starts, the `ADD RECORD` command keeps the loop going because it sets the `OK` system variable to 1 when the user saves the record. When the user cancels (does not save) the last record, the `OK` system variable is set to 0 and the loop stops.

## Repeat...Until

The formal syntax of the `Repeat...Until` control flow structure is:

```4d
Repeat
	statement(s)
    {break}  
    {continue}
Until(Boolean_Expression)
```

A `Repeat...Until` loop is similar to a [While...End while](flow-control.md#whileend-while) loop, except that it tests the Boolean expression after the loop rather than before. Thus, a `Repeat...Until` loop always executes the loop once, whereas if the Boolean expression is initially False, a `While...End while` loop does not execute the loop at all.

The other difference with a `Repeat...Until` loop is that the loop continues until the Boolean expression is TRUE.

The `break` and `continue` statements are [described below](#break-and-continue).

#### 例題

Compare the following example with the example for the `While...End while` loop. Note that the Boolean expression does not need to be initialized—there is no `CONFIRM` command to initialize the `OK` variable.

```4d
 Repeat
    ADD RECORD([aTable])
 Until(OK=0)
```

## For...End for

The formal syntax of the `For...End for` control flow structure is:

```4d
For(Counter_Variable;Start_Expression;End_Expression{;Increment_Expression})
   statement(s)
    {break}  
    {continue}
End for
```

The `For...End for` loop is a loop controlled by a counter variable:

- The counter variable _Counter_Variable_ is a numeric variable (Real or Long Integer) that the `For...End for` loop initializes to the value specified by _Start_Expression_.
- Each time the loop is executed, the counter variable is incremented by the value specified in the optional value _Increment_Expression_. If you do not specify _Increment_Expression_, the counter variable is incremented by one (1), which is the default.
- When the counter variable passes the _End_Expression_ value, the loop stops.

**Important:** The numeric expressions _Start_Expression_, _End_Expression_ and _Increment_Expression_ are evaluated once at the beginning of the loop. これらの数値が変数で指定されている場合、ループ内でその変数の値を変更してもループは影響を受けません。

**Tip:** However, for special purposes, you can change the value of the counter variable _Counter_Variable_ within the loop; this will affect the loop.

- Usually _Start_Expression_ is less than _End_Expression_.
- If _Start_Expression_ and _End_Expression_ are equal, the loop will execute only once.
- If _Start_Expression_ is greater than _End_Expression_, the loop will not execute at all unless you specify a negative _Increment_Expression_. 次に例を示します。

The `break` and `continue` statements are [described below](#break-and-continue).

#### 基本的な使用例

1. 以下の例は、100回の繰り返しをおこないます:

```4d
 For(vCounter;1;100)
  // なんらかの処理
 End for
```

2. 以下の例は、配列 anArray の全要素に対して処理をおこないます:

```4d
 For($vlElem;1;Size of array(anArray))
  //Do something with the element
    anArray{$vlElem}:=...
 End for
```

3. テキスト変数 vtSomeText の文字を一つ一つループ処理します:

```4d
 For($vlChar;1;Length(vtSomeText))
  //Do something with the character if it is a TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
```

4. 以下の例は、テーブル [aTable] のカレントセクションの各レコードについて処理をおこないます:

```4d
 FIRST RECORD([aTable])
 For($vlRecord;1;Records in selection([aTable]))
  //Do something with the record
    SEND RECORD([aTable])
  //...
  //Go to the next record
    NEXT RECORD([aTable])
 End for
```

Most of the `For...End for` loops you will write in your projects will look like the ones listed in these examples.

### カウンター変数

#### カウンター変数の減少

ループに際してカウンター変数を増加させるのではなく、減少させたい場合があります。 To do so, you must specify _Start_Expression_ greater than _End_Expression_ and a negative _Increment_Expression_. 次に挙げる例題は、前述の例と同じ処理を逆の順序でおこないます:

5. 以下の例は、100回の繰り返しをおこないます:

```4d
 For(vCounter;100;1;-1)
  // なんらかの処理
 End for
```

6. 以下の例は、配列 anArray の全要素に対して処理をおこないます:

```4d
 For($vlElem;Size of array(anArray);1;-1)
  //Do something with the element
    anArray{$vlElem}:=...
 End for
```

7. テキスト変数 vtSomeText の文字を一つ一つループ処理します:

```4d
 For($vlChar;Length(vtSomeText);1;-1)
  //Do something with the character if it is a TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
```

8. 以下の例は、テーブル [aTable] のカレントセクションの各レコードについて処理をおこないます:

```4d
 LAST RECORD([aTable])
 For($vlRecord;Records in selection([aTable]);1;-1)
  //Do something with the record
    SEND RECORD([aTable])
  //...
  //Go to the previous record
    PREVIOUS RECORD([aTable])
 End for
```

#### 1より大きな値によるカウンター変数の増加

If you need to, you can use an _Increment_Expression_ (positive or negative) whose absolute value is greater than one.

9. 以下の例は、配列 anArray の偶数要素について処理を行います:

```4d
 For($vlElem;2;Size of array(anArray);2)
  //Do something with the element #2,#4...#2n
    anArray{$vlElem}:=...
 End for
```

#### For...End for ループの最適化

カウンター変数 (インタープロセス、プロセス、ローカル変数) には実数、または整数タイプを使用します。 数多く繰り返されるループの場合、とくにコンパイルモードでは、倍長整数タイプのローカル変数を使用してください。

10. 次に例を示します:

```4d
 var $vlCounter : Integer // 整数型のローカル変数を使用します
 For($vlCounter;1;10000)
  //Do something
 End for
```

### ループ構造の比較

Let's go back to the first `For...End for` example. 以下の例は、100回の繰り返しをおこないます:

```4d
 For(vCounter;1;100)
  // なんらかの処理
 End for
```

It is interesting to see how the `While...End while` loop and `Repeat...Until` loop would perform the same action. Here is the equivalent `While...End while` loop:

```4d
 $i:=1 //Initialize the counter
 While($i<=100) //Loop 100 times
  //Do something
    $i:=$i+1 //Need to increment the counter
 End while
```

Here is the equivalent `Repeat...Until` loop:

```4d
 $i:=1 // カウンターの初期化
 Repeat
  // なんらかの処理
    $i:=$i+1 // カウンターの増分が必要
 Until($i=100) // 100回のループ
```

:::tip

The `For...End for` loop is usually faster than the `While...End while` and `Repeat...Until` loops, because 4D tests the condition internally for each cycle of the loop and increments the counter. Therefore, use the `For...End for` loop whenever possible.

:::

### For...End for の入れ子構造

制御構造は、必要に応じて入れ子にする (ネストする) ことができます。 This includes nesting `For...End for` loops. 誤りを避けるため、各ループ構造ごとに別のカウンター変数を使用してください。

次に例を示します:

1. 以下の例は二次元配列の全要素への処理です:

```4d
 For($vlElem;1;Size of array(anArray))
  //...
  //Do something with the row
  //...
    For($vlSubElem;1;Size of array(anArray{$vlElem}))
  //Do something with the element
       anArray{$vlElem}{$vlSubElem}:=...
    End for
 End for
```

2. 以下の例は、データベースのすべての日付フィールドに対するポインターの配列を作成します:

```4d
 ARRAY POINTER($apDateFields;0)
 $vlElem:=0
 For($vlTable;1;Get last table number)
    If(Is table number valid($vlTable))
       For($vlField;1;Get last field number($vlTable))
          If(Is field number valid($vlTable;$vlField))
             $vpField:=Field($vlTable;$vlField)
             If(Type($vpField->)=Is date)
                $vlElem:=$vlElem+1
                INSERT IN ARRAY($apDateFields;$vlElem)
                $apDateFields{$vlElem}:=$vpField
             End if
          End if
       End for
    End if
 End for
```

## For each...End for each

The formal syntax of the `For each...End for each` control flow structure is:

```4d
 For each(Current_Item;Expression{;begin{;end}}){Until|While}(Boolean_Expression)}
    statement(s)
    {break}  
    {continue}
 End for each
```

The `For each...End for each` structure iterates a specified _Current_item_ over all values of the _Expression_. The _Current_item_ type depends on the _Expression_ type. The `For each...End for each` loop can iterate through three _Expression_ types:

- コレクション: コレクションの各要素をループします
- エンティティセレクション: 各エンティティをループします
- オブジェクト: 各オブジェクトプロパティをループします

The following table compares the three types of `For each...End for each`:

|                                      | コレクション内のループ                           | エンティティセレクション内のループ | オブジェクト内のループ   |
| ------------------------------------ | ------------------------------------- | ----------------- | ------------- |
| Current_Item の型 | コレクション要素と同じ型の変数                       | Entity            | テキスト変数        |
| Expression の型                        | (同じ型の要素を持つ) コレクション | エンティティセレクション      | Object        |
| ループ数 (デフォルト)      | コレクションの要素数                            | セレクション内のエンティティ数   | オブジェクトのプロパティ数 |
| begin / end パラメーターをサポート              | ◯                                     | ◯                 | ×             |

- ループの数は開始時に評価され、処理中に変化することはありません。 ループ中に項目を追加・削除することは、繰り返しの不足・重複を引き起こすことがあるため、一般的には推奨されません。
- By default, the enclosed _statement(s)_ are executed for each value in _Expression_. It is, however, possible to exit the loop by testing a condition either at the begining of the loop (`While`) or at the end of the loop (`Until`).
- The _begin_ and _end_ optional parameters can be used with collections and entity selections to define boundaries for the loop.
- The `For each...End for each` loop can be used on a **shared collection** or a **shared object**. If your code needs to modify one or more element(s) of the collection or object properties, you need to use the `Use...End use` keywords. Depending on your needs, you can call the `Use...End use` keywords:
  - 整合性のため要素やプロパティを一括で処理しなくてはならない場合には、ループに入る前 (外側) に使います。
  - 要素やプロパティを個々に変更して差し支えない場合は、ループの中で使います。

The `break` and `continue` statements are [described below](#break-and-continue).

### コレクション内のループ

When `For each...End for each` is used with an _Expression_ of the _Collection_ type, the _Current_Item_ parameter is a variable of the same type as the collection elements. デフォルトでは、ループの回数はコレクションの要素数に基づいています。

The collection must contain only elements of the same type, otherwise an error will be returned as soon as the _Current_Item_ variable is assigned the first mismatched value type.

At each loop iteration, the _Current_Item_ variable is automatically filled with the matching element of the collection. このとき、以下の点に注意する必要があります:

- If the _Current_Item_ variable is of the object type or collection type (i.e. if _Expression_ is a collection of objects or of collections), modifying this variable will automatically modify the matching element of the collection (because objects and collections share the same references). 変数がスカラー型である場合には、変数のみが変更されます。
- The _Current_Item_ variable must be of the same type as the collection elements. コレクション要素のどれか一つでも、変数と異なる型のものがあった場合、エラーが生成され、ループは停止します。
- If the collection contains elements with a **Null** value, an error will be generated if the _Current_Item_ variable type does not support **Null** values (such as longint variables).

#### 例題

数値のコレクションを対象に、統計情報を計算します:

```4d
 var $nums : Collection
 $nums:=New collection(10;5001;6665;33;1;42;7850)
 var $item;$vEven;$vOdd;$vUnder;$vOver : Integer
 For each($item;$nums)
    If($item%2=0)
       $vEven:=$vEven+1
    Else
       $vOdd:=$vOdd+1
    End if
    Case of
       :($item<5000)
          $vUnder:=$vUnder+1
       :($item>6000)
          $vOver:=$vOver+1
    End case
 End for each
  //$vEven=3, $vOdd=4
  //$vUnder=4,$vOver=2
```

### エンティティセレクション内のループ

When `For each...End for each` is used with an _Expression_ of the _Entity selection_ type, the _Current_Item_ parameter is the entity that is currently processed.

ループの回数はエンティティセレクション内のエンティティの数に基づきます。 On each loop iteration, the _Current_Item_ parameter is automatically filled with the entity of the entity selection that is currently processed.

**Note:** If the entity selection contains an entity that was removed meanwhile by another process, it is automatically skipped during the loop.

Keep in mind that any modifications applied on the current entity must be saved explicitly using `entity.save()`.

#### 例題

Employees データクラスの中から、英国の従業員の給与を引き上げます:

```4d
 var emp : Object
 For each(emp;ds.Employees.query("country='UK'"))
    emp.salary:=emp.salary*1,03
    emp.save()
 End for each
```

### オブジェクト内のループ

When `For each...End for each` is used with an _Expression_ of the Object type, the _Current_Item_ parameter is a text variable automatically filled with the name of the currently processed property.

オブジェクトのプロパティは作成順に処理されていきます。 ループ中、プロパティをオブジェクトに追加/削除することが可能ですが、その場合でも残りのループ回数は、オブジェクトの元のプロパティ数に基づいているため、変化しません。

#### 例題

下のオブジェクトに格納されている名前に関したプロパティの値をすべて大文字に変えます:

```4d
{
    "firstname": "gregory",
    "lastname": "badikora",
    "age": 20
}
```

以下のように書くことができます:

```4d
 For each($property;$vObject)
    If(Value type($vObject[$property])=Is text)
       $vObject[$property]:=Uppercase($vObject[$property])
    End if
 End for each
```

```
{
    "firstname": "GREGORY",
    "lastname": "BADIKORA",
    "age": 20
}
```

### begin / end パラメーター

任意の begin と end パラメーターを指定することで、繰り返しの範囲を定義することができます。

**Note:** The _begin_ and _end_ parameters can only be used in iterations through collections and entity selections (they are ignored on object properties).

- In the _begin_ parameter, pass the element position in _Expression_ at which to start the iteration (_begin_ is included).
- In the _end_ parameter, you can also pass the element position in _Expression_ at which to stop the iteration (_end_ is excluded).

If _end_ is omitted or if _end_ is greater than the number of elements in _Expression_, elements are iterated from _begin_ until the last one (included).
If the _begin_ and _end_ parameters are positive values, they represent actual positions of elements in _Expression_.
If _begin_ is a negative value, it is recalculed as `begin:=begin+Expression size` (it is considered as the offset from the end of _Expression_). If the calculated value is negative, _begin_ is set to 0.
**Note:** Even if begin is negative, the iteration is still performed in the standard order.
If _end_ is a negative value, it is recalculed as `end:=end+Expression size`

例:

- コレクションには 10の要素が格納されています (ナンバリングは #0から#9)
- begin=-4 -> begin=-4+10=6 -> ループは6番目の要素 (#5) から開始されます
- end=-2 -> end=-2+10=8 -> 繰り返しは8番目の要素 (#7) の前に終了します、つまり7番目 (#6) の要素の処理が最後のループとなります。

#### 例題

```4d
 var $col;$col2 : Collection
 $col:=New collection("a";"b";"c";"d";"e")
 $col2:=New collection(1;2;3)
 var $item : Text
 For each($item;$col;0;3)
    $col2.push($item)
 End for each
  //$col2=[1,2,3,"a","b","c"]
 For each($item;$col;-2;-1)
    $col2.push($item)
 End for each
  //$col2=[1,2,3,"a","b","c","d"]
```

### Until と While 条件

You can control the `For each...End for each` execution by adding an `Until` or a `While` condition to the loop. When an `Until(condition)` statement is associated to the loop, the iteration will stop as soon as the condition is evaluated to `True`, whereas when is case of a `While(condition)` statement, the iteration will stop when the condition is first evaluated to `False`.

使用する条件は状況に応じて選べます:

- The `Until` condition is tested at the end of each iteration, so if the _Expression_ is not empty or null, the loop will be executed at least once.
- The `While` condition is tested at the beginning of each iteration, so according to the condition result, the loop may not be executed at all.

#### 例題

```4d
 $colNum:=New collection(1;2;3;4;5;6;7;8;9;10)
 
 $total:=0
 For each($num;$colNum)While($total<30) //tested at the beginning
    $total:=$total+$num
 End for each
 ALERT(String($total)) //$total = 36 (1+2+3+4+5+6+7+8)
 
 $total:=1000
 For each($num;$colNum)Until($total>30) //tested at the end
    $total:=$total+$num
 End for each
 ALERT(String($total)) //$total = 1001 (1000+1)
```

## break と continue

All looping structures above support both `break` and `continue` statements. これらの文は、ループを完全に終了させたり、現在の繰り返しだけを終了させたりすることで、ループをよりコントロールすることができます。

### break

The `break` statement terminates the loop containing it. プログラムの制御は、ループ直後のステートメントに移ります。

If the `break` statement is inside a [nested loop](#nested-forend-for-looping-structures) (loop inside another loop), the `break` statement will terminate the innermost loop.

#### 例題

```4d
For (vCounter;1;100)
	If ($tab{vCounter}="") //if a condition becomes true
		break //end of the for loop
	End if
End for
```

### continue

The `continue` statement terminates execution of the statements in the current iteration of the current loop, and continues execution of the loop with the next iteration.

```4d
var $text : Text
For ($i; 0; 9)
	If ($i=3)
		continue //go directly to the next iteration
	End if
	$text:=$text+String($i)
End for
// $text="012456789" 

```

## return {expression}

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R4 | 追加 |

</details>

The `return` statement can be called from anywhere. When a `return` statement is used in a function or method, the execution of the function or method is stopped. 残りのコードは実行されず、呼び出し元に制御が返されます。

The `return` statement can be used to [return a value](parameters.md#return-expression) to the caller.

#### 例題

```4d
var $message : Text
var $i : Integer

While (True) //infinite loop
	$i:=$i+1
	$message+=String($i)+"A\r"  // until 5
	logConsole($message)
	If ($i=5)
		return //stops the loop
	End if 
	$message+=String($i)+"B\r"  // until 4
	logConsole($message)
End while 
$message+=String($i)+"C\r"  //never executed 
logConsole($message)

// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A

```

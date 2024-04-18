---
id: FunctionClass
title: Function
---

A **`4D.Function`** object contains a piece of code that can be executed from an object, either using the `()` operator, or using the [`apply()`](#apply) and [`call()`](#call) functions. 4D proposes three kinds of `Function` objects:

- **native functions**, i.e. built-in functions from various 4D classes such as `collection.sort()` or `file.copyTo()`.
- **user functions**, created in user [classes](Concepts/classes.md) using the [Function keyword](Concepts/classes.md#function).
- **formula functions**, i.e. functions that can execute any 4D formula.

### フォーミュラオブジェクト

The [Formula](#formula) and [Formula from string](#formula-from-string) commands allow you to create [`4D.Function` objects](#about-4dfunction-objects) to execute any 4D expression or code expressed as text.

Formulaオブジェクトは、オブジェクトプロパティに格納することができます。

```4d
 var $f : 4D.Function
 $f:=New object
 $f.message:=Formula(ALERT("Hello world"))
```

このようなプロパティは "オブジェクト関数"、つまり親オブジェクトに紐づいた関数です。 To execute a function stored in an object property, use the **()** operator after the property name, such as:

```4d
 $f.message() //displays "Hello world"
```

大カッコを使用したシンタックスもサポートされます:

```4d
 $f["message"]() //displays "Hello world"
```

たとえ引数を受け取らなかったとしても (後述参照)、オブジェクト関数を実行するためにはカッコ ( ) をつけて呼び出す必要があるという点に注意してください。 オブジェクトプロパティのみを呼び出した場合、フォーミュラへの新しい参照が返されます (そしてフォーミュラは実行はされません):

```4d
 $o:=$f.message // $o にはフォーミュラオブジェクトが返されます
```

You can also execute a function using the [`apply()`](#apply) and [`call()`](#call) functions:

```4d
 $f.message.apply() //displays "Hello world"
```

#### 引数の受け渡し

You can pass parameters to your formulas using the [sequential parameter syntax](Concepts/parameters.md#sequential-parameters) based upon $1, $2...$n. たとえば:

```4d
 var $f : Object
 $f:=New object
 $f.message:=Formula(ALERT("Hello "+$1))
 $f.message("John") //displays "Hello John"
```

Or using the [.call()](#call) function:

```4d
 var $f : Object
 $f:=Formula($1+" "+$2)
 $text:=$f.call(Null;"Hello";"World") //returns "Hello World"
 $text:=$f.call(Null;"Welcome to";String(Year of(Current date))) //returns "Welcome to 2019" (for example)
```

#### 単一メソッド用の引数

利便性のために、フォーミュラが単一のプロジェクトメソッドから作成された場合には、引数はフォーミュラオブジェクトの初期化では省略することができます。 省略された引数は、フォーミュラを呼び出す時に一緒に渡すことができます。 例:

```4d
 var $f : 4D.Function

 $f:=Formula(myMethod)
  //Writing Formula(myMethod($1;$2)) is not necessary
 $text:=$f.call(Null;"Hello";"World") //returns "Hello World"
 $text:=$f.call() //returns "How are you?"

  //myMethod
 #DECLARE ($param1 : Text; $param2 : Text)->$return : Text
 If(Count parameters=2)
    $return:=$param1+" "+$param2
 Else
    $return:="How are you?"
 End if
```

引数はメソッド内において、呼び出し時に指定した順で受け取られます。

### 概要

|                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #FunctionClass.apply().Syntax -->](#apply)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FunctionClass.apply().Summary --> |
| [<!-- INCLUDE #FunctionClass.call().Syntax -->](#call)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FunctionClass.call().Summary -->    |
| [<!-- INCLUDE #FunctionClass.source.Syntax -->](#source)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FunctionClass.source.Summary -->  |

## Formula

<details><summary>履歴</summary>

| リリース  | 内容                                                  |
| ----- | --------------------------------------------------- |
| 17 R6 | Renamed (New formula -> Formula) |
| 17 R3 | 追加                                                  |

</details>

<!-- REF #_command_.Formula.Syntax -->**Formula** ( *formulaExp* : Expression ) : 4D.Function<!-- END REF -->

<!-- REF #_command_.Formula.Params -->

| 引数         | タイプ                         |     | 説明                                  |
| ---------- | --------------------------- | :-: | ----------------------------------- |
| formulaExp | 式                           |  -> | オブジェクトとして返されるフォーミュラ                 |
| 戻り値        | 4D.Function |  <- | フォーミュラを格納しているネイティブな Function オブジェクト |

<!-- END REF -->

#### 説明

The `Formula` command <!-- REF #_command_.Formula.Summary -->creates a `4D Function` object based upon the _formulaExp_ expression<!-- END REF -->. _formulaExp_ can be as simple as a single value or complex, such as a project method with parameters.

フォーミュラがオブジェクトとして存在することで、コマンドやメソッドに対して引数 (計算された属性) として渡したり、"コンポーネントとホストデータベース間で共有" として宣言せずとも様々なコンポーネントから実行したりできるようになります。 呼び出されたフォーミュラオブジェクトは、それを作成したデータベースあるいはコンポーネントのコンテキストにおいて評価されます。

返されたフォーミュラは以下の方法で呼び出すことが可能です:

- [`.call()`](#call) or [`.apply()`](#apply) methods, or
- object notation syntax (see [formula object](#formula-object)).

```4d
 var $f : 4D.Function
 $f:=Formula(1+2)
 $o:=New object("myFormula";$f)

  // フォーミュラを呼び出す 3つの方法
 $f.call($o) // 3 を返します
 $f.apply($o) // 3 を返します
 $o.myFormula() // 3 を返します
```

You can pass [parameters](#passing-parameters) to the `Formula`, as seen below in [example 4](#example-4).

You can specify the object on which the formula is executed, as seen in [example 5](#example-5). The properties of the object can then be accessed via the `This` command.

If _formulaExp_ uses local variables, their values are copied and stored in the returned formula object when it is created. 実行時、フォーミュラはそのローカル変数の現在値ではなく、コピーされた値を使用します。 ローカル変数として配列を使用することはサポートされていない点に注意してください。

The object created by `Formula` can be saved, for example, in a database field or in a blob document.

#### 例題 1

単純なフォーミュラの例:

```4d
 var $f : 4D.Function
 $f:=Formula(1+2)

 var $o : Object
 $o:=New object("f";$f)

 $result:=$o.f() // 3 を返します
```

#### 例題 2

ローカル変数を使用するフォーミュラの例:

```4d


 $value:=10
 $o:=New object("f";Formula($value))
 $value:=20

 $result:=$o.f() // returns 10
```

#### 例題 3

引数を用いたシンプルなフォーミュラの例:

```4d
 $o:=New object("f";Formula($1+$2))
 $result:=$o.f(10;20) // 30 を返します
```

#### 例題 4

引数を用いたプロジェクトメソッドを使用する例:

```4d
 $o:=New object("f";Formula(myMethod))
 $result:=$o.f("param1";"param2") // equivalent to $result:=myMethod("param1";"param2")
```

#### 例題 5

Using `This`:

```4d
 $o:=New object("fullName";Formula(This.firstName+" "+This.lastName))
 $o.firstName:="John"
 $o.lastName:="Smith"
 $result:=$o.fullName() //returns "John Smith"
```

#### 例題 6

オブジェクト記法を使用してフォーミュラを呼び出す例:

```4d
 var $feta; $robot : Object
 var $calc : 4D.Function
 $robot:=New object("name";"Robot";"price";543;"quantity";2)
 $feta:=New object("name";"Feta";"price";12.5;"quantity";5)

 $calc:=Formula(This.total:=This.price*This.quantity)

  //sets the formula to object properties
 $feta.calc:=$calc
 $robot.calc:=$calc

  //call the formula
 $feta.calc() // $feta={name:Feta,price:12.5,quantity:5,total:62.5,calc:"[object Formula]"}
 $robot.calc() // $robot={name:Robot,price:543,quantity:2,total:1086,calc:"[object Formula]"}
```

## Formula from string

<details><summary>履歴</summary>

| リリース  | 内容                                                     |
| ----- | ------------------------------------------------------ |
| 20 R3 | Support of _context_ parameter                         |
| 17 R6 | Renamed New formula from string -> Formula from string |
| 17 R3 | 追加                                                     |

</details>

<!-- REF #_command_.Formula from string.Syntax -->**Formula from string**( *formulaString* : Text ) : 4D.Function<br/>**Formula from string**( *formulaString* : Text ; *context* : Longint ) : 4D.Function<!-- END REF -->

<!-- REF #_command_.Formula from string.Params -->

| 引数            | タイプ                         |     | 説明                                                                                             |
| ------------- | --------------------------- | :-: | ---------------------------------------------------------------------------------------------- |
| formulaString | Text                        |  -> | オブジェクトとして返されるフォーミュラ文字列                                                                         |
| context       | Number                      |  -> | `sk execute in current database` (default) or `sk execute in host database` |
| 戻り値           | 4D.Function |  <- | フォーミュラを格納しているネイティブなオブジェクト                                                                      |

<!-- END REF -->

#### 説明

The `Formula from string` command <!-- REF #_command_.Formula from string.Summary -->creates a `4D.Function` object based upon the _formulaString_ and, optionnally, a _context_<!-- END REF -->.  _formulaString_ can be as simple as a single value or complex, such as a project method with parameters.

This command is similar to [`Formula`](#formula), except that it handles a text-based formula and allows to define an execution context. It is usually recommended to use the `Formula` command, except if the original formula was expressed as text (e.g., stored externally in a JSON file), or if you want to create a formula in a host database while calling `Formula from string` from a component. なお、このコマンドでは、トークンを使ったシンタックスの使用が強く推奨されます。

> Because local variable contents can not be accessed by name in compiled mode, they can not be used in _formulaString_. An attempt to access a local variable with `Formula from string` will result in an error (-10737).

If the formula is created in a component, you might consider using the _context_ parameter. デフォルトでは、フォーミュラは作成されたコンテキストにおいて実行されるため、ホストデータベースの変数や関数、共有されていないメソッドを呼び出すことはできません。 In this case, you can pass the `sk execute in host database` constant in the _context_ parameter to execute the `4D.Function` object in the context of the host database. 以下の定数を使用することができます:

| 定数                               | タイプ     | 説明                                                       |
| -------------------------------- | ------- | -------------------------------------------------------- |
| `sk execute in current database` | Longint | (デフォルト) フォーミュラは作成されたコンテキストにおいて実行されます。 |
| `sk execute in host database`    | Longint | フォーミュラは、ホストデータベースのコンテキストで実行されます。                         |

#### 例題

以下のコードは、テキストフォーマットのフォーミュラを受け入れるダイアログを作成し、:

```4d
 var $textFormula : Text
 var $f : 4D.Function
 $textFormula:=Request("Please type a formula")
 If(ok=1)
    $f:=Formula from string($textFormula)
    ALERT("Result = "+String($f.call()))
 End if
```

![](../assets/en/API/formulaDialog.png)

そのフォーミュラを実行します:

![](../assets/en/API/formulaAlert.png)

<!-- REF FunctionClass.apply().Desc -->

## .apply()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R3 | 追加 |

</details>

<!-- REF #FunctionClass.apply().Syntax -->**.apply**() : any<br/>**.apply**( *thisObj* : Object { ; *formulaParams* : Collection } ) : any<!-- END REF -->

<!-- REF #FunctionClass.apply().Params -->

| 引数            | タイプ        |     | 説明                                                                                                                      |
| ------------- | ---------- | :-: | ----------------------------------------------------------------------------------------------------------------------- |
| thisObj       | Object     |  -> | フォーミュラ内で This コマンドによって返されるオブジェクト                                                                                        |
| formulaParams | Collection |  -> | Collection of values to be passed as $1...$n when `formula` is executed |
| 戻り値           | any        |  <- | フォーミュラの実行結果                                                                                                             |

<!-- END REF -->

#### 説明

The `.apply()` function <!-- REF #FunctionClass.apply().Summary -->executes the `formula` object to which it is applied and returns the resulting value<!-- END REF -->. The formula object can be created using the `Formula` or `Formula from string` commands.

In the _thisObj_ parameter, you can pass a reference to the object to be used as `This` within the formula.

You can also pass a collection to be used as $1...$n parameters in the formula using the optional _formulaParams_ parameter.

Note that `.apply()` is similar to [`.call()`](#call) except that parameters are passed as a collection. これは計算された結果を渡すのに便利です。

#### 例題 1

```4d
 var $f : 4D.Function
 $f:=Formula($1+$2+$3)

 $c:=New collection(10;20;30)
 $result:=$f.apply(Null;$c) // returns 60
```

#### 例題 2

```4d
 var $calc : 4D.Function
 var $feta; $robot : Object
 $robot:=New object("name";"Robot";"price";543;"quantity";2)
 $feta:=New object("name";"Feta";"price";12.5;"quantity";5)

 $calc:=Formula(This.total:=This.price*This.quantity)

 $calc.apply($feta) // $feta={name:Feta,price:12.5,quantity:5,total:62.5}
 $calc.apply($robot) // $robot={name:Robot,price:543,quantity:2,total:1086}
```

<!-- END REF -->

<!-- REF FunctionClass.call().Desc -->

## .call()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R3 | 追加 |

</details>

<!-- REF #FunctionClass.call().Syntax -->**.call**() : any<br/>**.call**( *thisObj* : Object { ; ...*params* : any } ) : any<!-- END REF -->

<!-- REF #FunctionClass.call().Params -->

| 引数      | タイプ    |    | 説明                                                                              |
| ------- | ------ | -- | ------------------------------------------------------------------------------- |
| thisObj | Object | -> | フォーミュラ内で This コマンドによって返されるオブジェクト                                                |
| params  | any    | -> | フォーミュラが実行される際に $1...$n として渡される値 |
| 戻り値     | any    | <- | フォーミュラの実行結果                                                                     |

<!-- END REF -->

#### 説明

The `.call()` function <!-- REF #FunctionClass.call().Summary -->executes the `formula` object to which it is applied and returns the resulting value<!-- END REF -->. The formula object can be created using the `Formula` or `Formula from string` commands.

In the _thisObj_ parameter, you can pass a reference to the object to be used as `This` within the formula.

You can also pass values to be used as _$1...$n_ parameters in the formula using the optional _params_ parameter(s).

Note that `.call()` is similar to [`.apply()`](#apply) except that parameters are passed directly.

#### 例題 1

```4d
 var $f : 4D.Function
 $f:=Formula(Uppercase($1))
 $result:=$f.call(Null;"hello") // returns "HELLO"
```

#### 例題 2

```4d
 $o:=New object("value";50)
 $f:=Formula(This.value*2)
 $result:=$f.call($o) // returns 100
```

<!-- END REF -->

<!-- REF FunctionClass.source.Desc -->

## .source

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R2 | 追加 |

</details>

<!-- REF #FunctionClass.source.Syntax -->**.source** : Text <!-- END REF -->

#### 説明

The `.source` property <!-- REF #FunctionClass.source.Summary -->contains the source expression of the `formula` as text<!-- END REF -->.

This property is **read-only**.

#### 例題

```4d
 var $of : 4D.Function
 var $tf : Text
 $of:=Formula(String(Current time;HH MM AM PM))
 $tf:=$of.source //"String(Current time;HH MM AM PM)"
```

<!-- END REF -->

---
id: parameters
title: 引数
---

メソッドや関数にデータを渡す必要がしばしば発生します。 これは引数によって容易にできます。

## 概要

**Parameters** (or **arguments**) are pieces of data that a method or a class function needs in order to perform its task. The terms _parameter_ and _argument_ are used interchangeably throughout this manual. 引数は、ビルトインの 4Dコマンドにも渡されます。 In this example, the string “Hello” is an argument to the `ALERT` built-in command:

```4d
ALERT("Hello")
```

メソッドやクラス関数に引数を渡す場合も同様におこないます。 For example, if a class function named `getArea()` accepts two parameters, a call to the class function might look like this:

```4d
$area:=$o.getArea(50;100)
```

Or, if a project method named `DO_SOMETHING` accepts three parameters, a call to the method might look like this:

```4d
DO_SOMETHING($WithThis;$AndThat;$ThisWay)
```

入力引数は、セミコロン (;) で区切ります。

メソッドを実行する専用コマンドを利用するときも、同じ原則で引数を渡します。

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/20!)  
//pass the !05/05/20! date as parameter to the SetCalendarDate  
//in the context of a subform
```

Data can also be **returned** from methods and class functions. For example, the following line is a statement that uses the built-in command, `Length`, to return the length of a string. The statement puts the value returned by `Length` in a variable called _MyLength_. という変数に値を返します。

```4d
MyLength:=Length("How did I get here?")
```

どのようなサブルーチンでも値を返すことができます。 各メソッドやクラス関数につき、定義できる戻り値は一つだけです。

Input and output values are [evaluated](#values-or-references) at the moment of the call and copied into or from local variables within the called class function or method. Variable parameters must be [declared](#declaring-parameters) in the called code.

:::info 互換性

Throughout the 4D documentation, you might see examples where parameters are automatically copied in sequentially numbered local variables ($0, $1, etc.) and declared using compiler directives. Ex: `C_TEXT($1;$2)`. この旧シンタックスは引き続きサポートされていますが、現在は推奨されていません。

:::

## パラメーターの宣言

呼び出されたメソッドやクラス関数において、引数の値はローカル変数に代入されます。 You usually declare parameters using a **parameter name** along with a **parameter type**, separated by colon.

- For class functions, parameters are declared along with the `Function` keyword.
- For methods (project methods, form object methods, database methods, and triggers), parameters are declared using the `#DECLARE` keyword at the beginning of the method code.

例:

```4d
Function getArea($width : Integer; $height : Integer) -> $area : Integer
```

```4d
 //myProjectMethod
#DECLARE ($i : Integer) -> $myResult : Object
```

次のルールが適用されます:

- 宣言文はメソッドや関数のコードの先頭に位置していなければなりません。宣言文より前に置けるのはコメントと改行のみであり、それ以外の場合にはエラーが表示されます。
- Parameter names must start with a `$` character and be compliant with [property naming rules](identifiers.md#object-properties).
- 複数のパラメーター (およびその型) を宣言する場合は、それらをセミコロン (;) で区切ります。
- 複数行シンタックスがサポートされています ("\\" 文字を使用)。

For example, when you call a `getArea()` function with two parameters:

```4d
$area:=$o.getArea(50;100)
```

クラス関数において、引数の値はそれぞれ対応するパラメーターに代入されます:

```4d
// Class: Polygon
Function getArea($width : Integer; $height : Integer)-> $area : Integer
	$area:=$width*$height
```

> If the type is not defined, the parameter will be defined as [`Variant`](dt_variant.md).

All 4D method kinds support the `#DECLARE` keyword, including database methods. For example, in the `On Web Authentication` database method, you can declare named parameters:

```4d
	// On Web Authentication database method
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text) \
  -> $RequestAccepted : Boolean
$entitySelection:=ds.User.query("login=:1"; $user)
// Check hash password...
```

### 戻り値

関数の戻り値は、入力パラメーターリストに矢印 (->) を追加し、それに続けて宣言します。 例:

```4d
Function add($x : Variant; $y : Integer) -> $result : Integer
```

You can also declare the return parameter only by adding `: type`, in which case it can be handled by a [return statement](#return-expression). 例:

```4d
Function add($x : Variant; $y : Integer): Integer
	return $x+$y
```

:::warning

戻り値を含む引数の宣言をおこなうのは、一度だけです。 特に、同じ型であっても、同じ引数を入力と出力の両方として宣言することはできません。 例:

```qs
	//invalid declaration
Function myTransform ($x : Integer) -> $x : Integer 
	//error: $x is declared twice
```

:::

### サポートされているデータ型

With named parameters, you can use the same data types as those which are [supported by the `var` keyword](variables.md#using-the-var-keyword), including class objects. 例:

```4d
Function saveToFile($entity : cs.ShapesEntity; $file : 4D.File)
```

:::note

Tables or array expressions can only be passed [as reference using a pointer](dt_pointer.md#pointers-as-parameters-to-methods).

:::

### 初期化

When parameters are declared, they are initialized to the [**default value corresponding to their type**](data-types.md#default-values), which they will keep during the session as long as they have not been assigned.

## `return {expression}`

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R4 | 追加 |

</details>

The `return` statement ends function or method execution and can be used to return an expression to the caller.

たとえば、次の関数は引数 $x の 2乗を返します。$x は数値です。

```4d
Function square($x : Integer) 
   return $x * $x
```

> Internally, `return x` executes `$0:=x` or (if declared) `myReturnValue:=x`, and returns to the caller. If `return` is used without an expression, the function or method returns a null value of the declared return type (if any), otherwise _undefined_.

The `return` statement can be used along with the standard syntax for [returned values](#returned-value) (the returned value must be of the declared type). ただし、<code>return</code> はコードの実行を直ちに終了させることに注意が必要です。 例:

```4d
Function getValue
	$0:=10
	return 20
	// returns 20

Function getValue -> $v : Integer
	return 10
	$v:=20 // never executed
	// returns 10
```

## 引数の間接参照 (${N})

4Dメソッドおよび関数は、可変長の引数を受け取ることができます。 You can address those parameters with a `For...End for` loop, the [`Count parameters`](https://doc.4d.com/4dv20/help/command/en/page259.html) command and the **parameter indirection syntax**. Within the method, an indirection address is formatted `${N}`, where `N` is a numeric expression.

### 可変長引数の使い方

引数の数値を合計した結果を、引数として渡された表示形式で返すようなメソッドを考えてみましょう。 合計される数値の数は、メソッドが呼ばれるたびに変わります。 このメソッドでは数値と表示形式を引数としてメソッドに渡さなければなりません。

Here is the method, named `MySum`:

```4d
 #DECLARE($format : Text) -> $result : Text
 $sum:=0
 For($i;2;Count parameters)
    $sum:=$sum+${$i}
 End for
 $result:=String($sum;$format)
```

このメソッドの引数は正しい順序で渡す必要があります。最初に表示形式、次に可変個の数値引数です。

```4d
 Result:=MySum("##0.00";125,2;33,5;24) // "182.70"
 Result:=MySum("000";1;2;200) // "203"
```

0、1、またはそれ以上のパラメーターを宣言してある場合でも、任意の数の引数を渡すことができます。 Parameters are all available within the called code through the `${N}` syntax and extra parameters type is [Variant](dt_variant.md) by default (you can declare them using the [variadic notation](#declaring-variadic-parameters)). You just need to make sure parameters exist, thanks to the [`Count parameters`](https://doc.4d.com/4dv20/help/command/en/page259.html) command. 例:

```4d
//foo method
#DECLARE($p1: Text;$p2 : Text; $p3 : Date) 
For($i;1;Count parameters)
	ALERT("param "+String($i)+" = "+String(${$i}))
End for
```

このメソッドは次のように呼び出せます:

```4d
foo("hello";"world";!01/01/2021!;42;?12:00:00?) //extra parameters are passed
```

> 引数の間接参照は以下の条件を守ることにより、正しく動作します: 引数の一部のみを間接参照する場合、直接参照する引数の後に間接参照引数を配置するようにします。

### 可変長引数の宣言

可変長引数を宣言することは必須ではありません。 Non-declared variadic parameters automatically get the [Variant](dt_variant.md) type.

ただし、コード実行中に型が一致しないエラーを回避するために、関数のプロトタイプ、クラスコンストラクター、およびメソッドで "..." を使用して可変長のパラメーターを宣言できます (可変長引数)。 "..." に続いて型を指定することで、引数の型を指定します。

```4d
#DECLARE ( ... : Text ) // Undefined number of 'Text' parameters

```

```4d
Function myfunction ( ... : Text)

```

複数のパラメーターを宣言する場合は、可変長の表記は最後に使用する必要があります。例:

```4d
#DECLARE ( param: Real ; ... : Text )

```

```4d
Function myfunction (var1: Integer ; ... : Text)
```

#### 例題

Here we have a method called `SumNumbers` that returns the calculated total for all the numbers passed as parameters:

```4d

#DECLARE( ... : Real) : Real 



var $number; $total : Real 

For each ($number; 1; Count parameters)
	$total+=${$number}
End for each 

return $total

```

このメソッドは、可変長の実数引数を渡して呼び出すことができます。 引数の型が間違っている場合は、メソッドが実行される前にエラーが返されます:

```4d

$total1:=SumNumbers // returns 0 
$total2:=SumNumbers(1; 2; 3; 4; 5) // returns 15
$total3:=SumNumbers(1; 2; "hello"; 4; 5) // error

```

:::note 互換性に関する注意

The legacy syntax for declaring variadic parameters (`C_TEXT(${4})`) is still supported for compatibility but the variadic notation is now preferred.

:::

## コンパイル

Even if it is not mandatory in [interpreted mode](interpreted.md), you must make sure that all method and function parameters are properly declared as soon as you intend to compile your project.

:::note

You can delegate the declaration of parameters (as well as all variables) to the compiler by checking the [**Type the variable** compilation path option](../Project/compiler.md#compilation-path). ただし、このオプションはコンパイル時間を大幅に増加させます。

:::

### プロトタイプ宣言された引数

When using the `#DECLARE` or `Function` keywords, parameters are automatically declared and no additional information is needed for the compiler. 例:

```4d
#DECLARE($myParam : Text; $myOtherParam : Integer) : Boolean
	// all method parameters are declared with their type
```

```4d
	// On Web Connection Database Method
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text)
```

```4d
Function add($x : Variant; $y : Integer)-> $result : Integer
	// all function parameters are declared with their type
```

:::tip

プロトタイプでパラメーターを宣言することは、コンパイルされていないプロジェクトでもグッドプラクティスです。

:::

### プロトタイプ宣言されていない引数

It can happen that method parameters are not declared in `#DECLARE` prototypes. このようなステートメントは、従来の 4Dコードで見られます。 In this case, you must configure a `Compiler_Methods` method to gather the declarations for these method parameters.

#### `Compiler_Methods` method

When some method parameters are not declared in `#DECLARE` prototypes, the 4D compiler needs that you declare them in a specific method using a special syntax:

- プロジェクトメソッドのパラメーター宣言は、コンパイル用に 1つ以上のプロジェクトメソッドにまとめることができます。
- the method name(s) must start with "**Compiler_**", by default "Compiler_Methods".
- within such a method, you predeclare the parameters for each method using the following syntax: `C_XXX(methodName;parameter)`.

例:

```4d
 // Compiler_Methods
 C_REAL(OneMethodAmongOthers;$1;$2) 
```

:::note

このシンタックスはインタープリターモードでは実行されません。

:::

You can create and fill automatically a `Compiler_Methods` method containing all your parameters declared outside prototypes using the [**Compiler Methods for...**](../Project/compiler.md#compiler-methods-for) **Methods** button in the Compiler Settings dialog box.

:::info

#### 特殊なケース

コンテキストによっては、"Compiler_" メソッドでの宣言をサポートしていないため、別途処理されます:

- トリガー - トリガーの結果である $0 パラメーター (倍長整数) は、明確に定義されていなければコンパイラーによって型指定されます。 定義する場合は、トリガーの中でおこなう必要があります。

- Form objects that accept the `On Drag Over` form event - The $0 parameter (Longint), which is the result of the `On Drag Over` form event, is typed by the compiler if the parameter has not been explicitly declared. 定義する場合は、オブジェクトメソッドの中でおこなう必要があります。
  **Note:** The compiler does not initialize the $0 parameter. So, as soon as you use the `On Drag Over` form event, you must initialize $0. 例:

```4d
 C_LONGINT($0)
 If(Form event code=On Drag Over)
    $0:=0
    ...
    If($DataType=Is picture)
       $0:=-1
    End if
    ...
 End if
```

:::

### 宣言の競合

- If a parameter is declared in both a `#DECLARE` prototype and a _Compiler__ method, the entry from the  _Compiler__ method is ignored.
- If a parameter is declared in both a `#DECLARE` prototype and a _Compiler__ method but with a different data type, the Code Live Checker generates an error during syntax checking and compilation.

## 引数の型間違い

Calling a parameter with an wrong type is an [error](error-handling.md) that prevents correct execution. たとえば、次のようなメソッドを書いたとします:

```4d
// method1
#DECLARE($value : Text)
```

```4d
// method2
method1(42) // 型間違い。期待されるのはテキスト
```

このケースは、コンテキストに応じて 4D で処理されます。

- in [compiled projects](interpreted.md), an error is generated at the compilation step whenever possible. それ以外の場合は、メソッドの呼び出し時にエラーが生成されます。
- インタープリタープロジェクトでは:
  - if the parameter was declared using the [named syntax](#named-parameters) (`#DECLARE` or `Function`), an error is generated when the method is called.
  - if the parameter was declared using (`C_XXX`), no error is generated, the called method receives an empty value of the expected type.

## オブジェクトプロパティを名前付き引数として使用する

Using objects as parameters allow you to handle **named parameters**. このプログラミング方法はシンプルかつ柔軟なだけでなく、コードの可読性も向上させます。

For example, using the `CreatePerson` method:

```4d
  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

In the `ChangeAge` method you can write:

```4d
  //ChangeAge
 var $1; $para : Object
 $para:=$1  
 $para.Age:=$para.Age+10
 ALERT($para.Name+" is "+String($para.Age)+" years old.")
```

This provides a powerful way to define [optional parameters](#optional-parameters) (see also below). この場合、引数の不足は次のように対処できます:

- check if all expected parameters are provided by comparing them to the `Null` value, or
- 引数の値をプリセットします
- 渡されていない引数は空値として扱います

In the `ChangeAge` method above, both Age and Name properties are mandatory and would produce errors if they were missing. これを避けるには、次のように記述することができます:

```4d
  //ChangeAge
 var $1; $para : Object
 $para:=$1  
 $para.Age:=Num($para.Age)+10
 ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")
```

すると、引数が不足してもエラーは生成されず、両方が欠落した場合の結果は " は 10歳です" となってしまうにせよ、いずれの引数も任意となります。

名前付き引数を利用すると、アプリケーションの保守やリファクタリングが簡単かつ安全におこなえます。 さきほどの例で、加算する年数を場合に応じて変えたほうが適切であると、あとから気づいたとします。 メソッドのパラメーターとして、加算年数を追加しなくてはなりません。 この場合、次のように書けます:

```4d
$person:=New object("Name";"Smith";"Age";40;"toAdd";10)
ChangeAge($person)

//ChangeAge
var $1;$para : Object
$para:=$1  
If ($para.toAdd=Null)
	$para.toAdd:=10
End if
$para.Age:=Num($para.Age)+$para.toAdd
ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")
```

このように、既存のコードを変える必要はありません。 変更後のコードは変更前と同じように動作しますが、引数によって加算年数に数値を指定することもできるようになりました。

名前付き引数を使うと、すべてのパラメーターを任意にすることができます。 上の例ではすべてのパラメーターが任意で、いずれを指定してもよく、順序は考慮されません。

## 任意パラメーター

In the _4D Language Reference_ manual, the { } characters (braces) indicate optional parameters. For example, `ALERT (message{; okButtonTitle})` means that the _okButtonTitle_ parameter may be omitted when calling the command. この場合、次のような呼び出し方が可能です:

```4d
ALERT("Are you sure?";"Yes I am") // 2つの引数
ALERT("Time is over") // 1つの引数
```

4Dメソッドや関数も、このような任意パラメーターを受け入れます。 任意の数のパラメーターを宣言することができます。 If you call a method or function with less parameters than declared, missing parameters are processed as default values in the called code, [according to their type](data-types.md#default-values). 例:

```4d
// "concate" function of myClass
Function concate ($param1 : Text ; $param2 : Text)->$result : Text
$result:=$param1+" "+$param2
```

```4d
  // Calling method
 $class:=cs.myClass.new()
 $class.concate("Hello") // "Hello "
 $class.concate() // Displays " "
```

> 宣言されているよりも多い数のパラメーターをメソッドや関数に渡すこともできます。 They will be available within the called code through the [${N} syntax](#parameter-indirection-n).

Using the `Count parameters` command from within the called method, you can detect the actual number of parameters and perform different operations depending on what you have received.

次の例はテキストメッセージを表示し、2つの引数が渡されていればディスク上のドキュメントに、3つ以上の場合は 4D Write Pro エリアにそのテキストを書き出します。

```4d
// APPEND TEXT Project Method
// APPEND TEXT ( Text { ; Text { ; Object } } )
// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )
 
 #DECLARE ($message : Text; $path : Text; $wpArea : Object)
  
 ALERT($message)
 If(Count parameters>=3)
    WP SET TEXT($wpArea;$1;wk append)
 Else
    If(Count parameters>=2)
       TEXT TO DOCUMENT($path;$message)
    End if
 End if
```

このプロジェクトメソッドをアプリケーションに追加したあとは、次のように呼び出すことができます:

```4d
APPEND TEXT(vtSomeText) // メッセージを表示します
APPEND TEXT(vtSomeText;$path) // メッセージを表示して、 $path のドキュメントに書き出します
APPEND TEXT(vtSomeText;"";$wpArea) // メッセージを表示して、 $wpArea の4D Write Pro ドキュメントに追記します
```

> When optional parameters are needed in your methods, you might also consider using [object properties as named parameters](#using-objects-properties-as-named-parameters) which provide a flexible way to handle variable numbers of parameters.

## 引数の渡し方: 値か参照か

When you pass a parameter, 4D always evaluates the parameter expression in the context of the calling method and sets the **resulting value** to the local variables in the class function or subroutine. これらのローカル変数に格納されているのは、呼び出し元で使用されているフィールドや変数、式ではなく、渡された値のみです。 スコープがローカルに限られているため、クラス関数 / サブルーチン内でローカル変数の値を変えても、呼び出し元メソッドには影響ありません。 例:

```4d
	//Here is some code from the method MY_METHOD
DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
ALERT([People]Name)
 
	//Here is the code of the method DO_SOMETHING
 $1:=Uppercase($1)
 ALERT($1)
```

The alert box displayed by `DO_SOMETHING` will read "WILLIAMS" and the alert box displayed by `MY_METHOD` will read "williams". The method locally changed the value of the parameter $1, but this does not affect the value of the field `[People]Name` passed as parameter by the method `MY_METHOD`.

There are two ways to make the method `DO_SOMETHING` change the value of the field:

1. サブルーチンに渡す式としてフィールドではなく、フィールドへのポインターを指定することができます。この場合、以下のようにコードを書きます:

```4d
  //Here is some code from the method MY_METHOD
 DO_SOMETHING(->[People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Last Name)
 
  //Here the code of the method DO_SOMETHING
 $1->:=Uppercase($1->)
 ALERT($1->)
```

この例では、引数として指定された式はフィールドではなく、フィールドへのポインターです。 Therefore, within the `DO SOMETHING` method, $1 is no longer the value of the field but a pointer to the field. The object **referenced** by $1 ($1-> in the code above) is the actual field. その結果、参照されている対象を変更すると、その影響はサブルーチンのスコープを超え、実際のフィールドも変更されます。 さきほどの例題においては、両方のアラートボックスに "WILLIAMS" と表示されます。

2. Rather than having the method `DO_SOMETHING` "doing something," you can rewrite the method so it returns a value. たとえば、以下のようなコードです:

```4d
	//Here is some code from the method MY METHOD
 [People]Name:=DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Name)

	//Here the code of the method DO SOMETHING
 $0:=Uppercase($1)
 ALERT($0)
```

このようにサブルーチンの戻り値を使うことを "関数を使う" と言います。 This is described in the [Returning values](#returning-values) paragraph.

### 特殊ケース: オブジェクトやコレクションの場合

You need to pay attention to the fact that Object and Collection data types can only be handled through a reference (i.e. an internal _pointer_).

Consequently, when using such data types as parameters, `$1, $2...` do not contain _values_ but _references_. Modifying the value of the `$1, $2...` parameters within the subroutine will be propagated wherever the source object or collection is used. This is the same principle as for [pointers](dt_pointer.md#pointers-as-parameters-to-methods), except that `$1, $2...` parameters do not need to be dereferenced in the subroutine.

For example, consider the `CreatePerson` method that creates an object and sends it as a parameter:

```4d
  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

The `ChangeAge` method adds 10 to the Age attribute of the received object

```4d
  //ChangeAge
 #DECLARE ($person : Object)
 $person.Age:=$person.Age+10
 ALERT(String($person.Age))
```

When you execute the `CreatePerson` method, both alert boxes will read "50" since the same object reference is handled by both methods.

**4D Server:** When parameters are passed between methods that are not executed on the same machine (using for example the "Execute on Server" option), references are not usable. このような場合には、参照の代わりにオブジェクトとコレクションのコピーが引数として渡されます。

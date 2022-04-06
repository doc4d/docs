---
id: classes
title: Classes
---


## 概要

4D ランゲージでは **クラス** の概念がサポートされています。 プログラミング言語では、クラスを利用することによって、属性やメソッドなどを持つ特定のオブジェクト種を定義することができます。

ユーザークラスが定義されていれば、そのクラスのオブジェクトをコード内で **インスタンス化** することができます。 各オブジェクトは、それ自身が属するクラスのインスタンスです。 クラスは、別のクラスを [継承](#class-extends-classname) することで、その [関数](#function) を受け継ぐことができます。

> 4D におけるクラスモデルは JavaScript のクラスに類似しており、プロトタイプチェーンに基づきます。

たとえば、次のように `Person` クラスを定義した場合:

```4d  
// クラス: Person.4dm
Class constructor($firstname : Text; $lastname : Text)
    This.firstName:=$firstname
    This.lastName:=$lastname

Function sayHello()->$welcome : Text
    $welcome:="Hello "+This.firstName+" "+This.lastName
```

この "Person" のインスタンスをメソッド内で作成するには、以下のように書けます:

```
var $person : cs.Person // Person クラスのオブジェクト
var $hello : Text
$person:=cs.Person.new("John";"Doe")
// $person:{firstName: "John"; lastName: "Doe" }
$hello:=$person.sayHello() //"Hello John Doe"
```



## クラスの管理

### クラス定義

4D においてユーザークラスとは、`/Project/Sources/Classes/` フォルダーに保存された専用のメソッドファイル (.4dm) によって定義されます。 ファイル名がクラス名になります。

クラスを命名する際には、次のルールに留意してください:

- [クラス名](identifiers.md#クラス) は [プロパティ名の命名規則](identifiers.md#オブジェクトプロパティ) に準拠している必要があります。
- クラス名の大文字・小文字は区別されます。
- 競合防止のため、データベースのテーブルと同じ名前のクラスを作成するのは推奨されないこと

たとえば、"Polygon" という名前のクラスを定義するには、次のファイルを作成する必要があります:

- Project フォルダー
    + Project
        * Sources
            - Classes
                + Polygon.4dm

### クラスの削除

既存のクラスを削除するには:

- ディスク上で "Classes" フォルダーより .4dm クラスファイルを削除します。
- 4D エクスプローラーでは、クラスを選択した状態で ![](assets/en/Users/MinussNew.png) をクリックするか、コンテキストメニューより **移動 ＞ ゴミ箱** を選択します。


### 4D インターフェースの使用

**ファイル** メニューまたはエクスプローラーなど、4D インターフェースを介してクラスを作成した場合には、クラスファイルは自動的に適切な場所に保存されます。

#### ファイルメニューとツールバー

4D 開発の **ファイル** メニューまたはツールバーより **新規 > クラス...** を選択することで、開いているプロジェクトにクラスファイルを新規作成することができます。

**Ctrl+Shift+Alt+k** ショートカットも使用できます。

#### エクスプローラー

エクスプローラーの **メソッド** ページにおいて、クラスは **クラス** カテゴリに分類されています。

クラスを新規作成するには次の方法があります:

- **クラス** カテゴリを選択し、![](assets/en/Users/PlussNew.png) ボタンをクリックします。
- エクスプローラーウィンドウの下部にあるアクションメニュー、またはクラスグループのコンテキストメニューから **新規クラス...** を選択します。 ![](assets/en/Concepts/newClass.png)
- エクスプローラーのホームページのコンテキストメニューより **新規 > クラス...** を選択します。

#### クラスのコードサポート

各種 4Dウィンドウ (コードエディター、コンパイラー、デバッガー、ランタイムエクスプローラー) において、クラスコードは "特殊なプロジェクトメソッド" のように扱われます:

- コードエディター:
    - クラスは実行できません
    - クラスメソッドはコードのブロックです
    - オブジェクトメンバーに対する **定義に移動** 操作はクラスの Function 宣言を探します。例: "$o.f()" の場合、"Function f" を見つけます。
    - クラスのメソッド宣言に対する **参照箇所を検索** 操作は、そのメソッドがオブジェクトメンバーとして使われている箇所を探します。例: "Function f" の場合 "$o.f()" を見つけます。
- ランタイムエクスプローラーおよびデバッガーにおいて、クラスメソッドは \<ClassName> コンストラクターまたは \<ClassName>.\<FunctionName> 形式で表示されます。

## クラスストア

定義されたクラスには、クラスストアよりアクセスすることができます。 クラスストアには次の二つが存在します:

- `cs` - ユーザークラスストア
- `4D` - ビルトインクラスストア


### cs

#### cs -> classStore

| 引数         | タイプ    |    | 説明                          |
| ---------- | ------ | -- | --------------------------- |
| classStore | object | <- | プロジェクトまたはコンポーネントのユーザークラスストア |

`cs` コマンドは、カレントプロジェクトまたはコンポーネントのユーザークラスストアを返します。 これには、プロジェクトまたはコンポーネントにて [定義](#クラス定義) されている、すべてのユーザークラスが含まれます。 デフォルトでは、 [ORDAクラス](ORDA/ordaClasses.md) のみ利用可能です。

#### 例題

`myClass` オブジェクトの新規インスタンスを作成するには、次のように書きます:

```4d
$instance:=cs.myClass.new()
```

### 4D

#### 4D -> classStore

| 引数         | タイプ    |    | 説明       |
| ---------- | ------ | -- | -------- |
| classStore | object | <- | 4Dクラスストア |

`4D` コマンドは、ビルトイン 4Dクラスのクラスストアを返します。 [CryptoKey](API/CryptoKeyClass.md) などの専用 API へのアクセスを提供します。

#### 例題

`CryptoKey` クラスに新規キーを作成するには、次のように書きます:

```4d
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))
```




## Class オブジェクト

プロジェクトにおいてクラスが [定義](#クラス定義) されていれば、それは 4Dランゲージ環境に読み込まれます。 クラスとは、それ自身が ["Class" クラス](API/ClassClass.md) のオブジェクトです。 Class オブジェクトは次のプロパティや関数を持ちます:

- [`name`](API/ClassClass.md#name) 文字列
- [`superclass`](API/ClassClass.md#superclass) オブジェクト (無い場合は null)
- [`new()`](API/ClassClass.md#new) 関数 (クラスオブジェクトをインスタンス化します)

また、Class オブジェクトは [`constructor`](#class-constructor) オブジェクトを参照することも可能です。

Class オブジェクトは [共有オブジェクト](shared.md) です。したがって、異なる 4Dプロセスから同時にアクセスすることができます。

### 継承

クラス宣言において [Class extends](classes.md#class-extends-classname) キーワードを使うと、そのクラスは親クラス (つまり

`スーパークラス`) を継承します。 </p> 

関数やプロパティがクラス内で見つからない場合、4D はそのクラスの [`スーパークラス`](API/ClassClass.md#superclass) 内を検索します。見つからない場合、4D はさらに、そのスーパークラスのスーパークラス内を探します。これは、スーパークラスが存在しなくなるまで続きます (すべてのオブジェクトは "Object" スーパークラスを継承しています)。 




## クラスキーワード

クラス定義内では、専用の 4Dキーワードが使用できます:

- `Function <Name>`: オブジェクトのクラス関数を定義します。
- `Class constructor`: オブジェクトのプロパティを定義します。
- `Class extends <ClassName>`: 継承を定義します。




### Function



#### シンタックス



```4d
Function <name>({$parameterName : type; ...}){->$parameterName : type}
// コード
```


クラス関数とは、当該クラスのプロパティです。 クラス関数は [4D.Function](API/FunctionClass.md#4dfunction-オブジェクトについて) クラスのオブジェクトです。 

クラス定義ファイルでは、`Function` キーワードと関数名を使用して宣言をおこないます。 関数名は [プロパティ名の命名規則](Concepts/identifiers.md#オブジェクトプロパティ) に準拠している必要があります。



> **Tip:** アンダースコア ("_") 文字で関数名を開始すると、その関数は 4Dコードエディターの自動補完機能から除外されます。 たとえば、`MyClass` に `Function _myPrivateFunction` を宣言した場合、コードエディターにおいて `"cs.MyClass "` とタイプしても、この関数は候補として提示されません。

関数名のすぐ後に、名前とデータ型を指定して [引数](#引数) を宣言します (戻り値の宣言も可)。 たとえば:



```4d
Function computeArea($width : Integer; $height : Integer)->$area : Integer
```


クラスメソッド内でオブジェクトインスタンスを参照するには `This` コマンドを使います。 たとえば:



```4d  
Function setFullname($firstname : Text; $lastname : Text)
    This.firstName:=$firstname
    This.lastName:=$lastname

Function getFullname()->$fullname : Text
    $fullname:=This.firstName+" "+Uppercase(This.lastName)
```


For a class function, the `Current method name` command returns: `<ClassName>.<FunctionName>`, for example "MyClass.myMethod".

In the application code, class functions are called as member methods of the object instance and can receive [parameters](#class-function-parameters) if any. The following syntaxes are supported:

- use of the `()` operator. For example, `myObject.methodName("hello")`
- use of a "4D.Function" class member method: 
      - [`apply()`](API/FunctionClass.md#apply)
    - [`call()`](API/FunctionClass.md#call)



> **Thread-safety warning:** If a class function is not thread-safe and called by a method with the "Can be run in preemptive process" attribute: - the compiler does not generate any error (which is different compared to regular methods), - an error is thrown by 4D only at runtime.






#### 引数

Function parameters are declared using the parameter name and the parameter type, separated by a colon. パラメーター名は [プロパティ名の命名規則](Concepts/identifiers.md#オブジェクトプロパティ) に準拠している必要があります。 複数のパラメーター (およびその型) を宣言する場合は、それらをセミコロン (;) で区切ります。 



```4d  
Function add($x; $y : Variant; $z : Integer; $xy : Object)
```



> If the type is not stated, the parameter will be defined as `Variant`.

You declare the return parameter (optional) by adding an arrow (`->`) and the return parameter definition after the input parameter(s) list. たとえば:



```4d
Function add($x : Variant; $y : Integer)->$result : Integer
```


You can also declare the return parameter only by adding `: type`, in which case it will automatically be available through $0. たとえば: 



```4d
Function add($x : Variant; $y : Integer): Integer
    $0:=$x+$y
```


The [classic 4D syntax](parameters.md#sequential-parameters) for method parameters can be used to declare class function parameters. 両方のシンタックスは併用することができます。 たとえば:



```4d
Function add($x : Integer)
    var $2; $value : Integer
    var $0 : Text
    $value:=$x+$2
    $0:=String($value)
```






#### 例題



```4d
// Class: Rectangle
Class constructor($width : Integer; $height : Integer)
    This.name:="Rectangle"
    This.height:=$height
    This.width:=$width

// Function definition
Function getArea()->$result : Integer
    $result:=(This.height)*(This.width)
```




```4d
// In a project method

var $rect : cs.Rectangle
var $area : Real

$rect:=cs.Rectangle.new(50;100)  
$area:=$rect.getArea() //5000
```






### Class constructor



#### シンタックス



```4d
// Class: MyClass
Class Constructor({$parameterName : type; ...})
// code
```


A class constructor function, which can accept [parameters](#parameters), can be used to define a user class.  

In that case, when you call the [`new()`](API/ClassClass.md#new) function, the class constructor is called with the parameters optionally passed to the `new()` function.

For a class constructor function, the `Current method name` command returns:  `<ClassName>:constructor`, for example "MyClass:constructor".





#### 例: 



```4d
// Class: MyClass
// Class constructor of MyClass
Class Constructor ($name : Text)
    This.name:=$name
```




```4d
// In a project method
// You can instantiate an object
var $o : cs.MyClass
$o:=cs.MyClass.new("HelloWorld")  
// $o = {"name":"HelloWorld"}
```







### Class extends \<ClassName>



#### シンタックス



```4d
// Class: ChildClass
Class extends <ParentClass>
```


The `Class extends` keyword is used in class declaration to create a user class which is a child of another user class. The child class inherits all functions of the parent class.

Class extension must respect the following rules:

- A user class cannot extend a built-in class (except 4D.Object which is extended by default for user classes)
- A user class cannot extend a user class from another project or component.
- A user class cannot extend itself.
- It is not possible to extend classes in a circular way (i.e. "a" extends "b" that extends "a").

Breaking such a rule is not detected by the code editor or the interpreter, only the compiler and `check syntax` will throw an error in this case.

An extended class can call the constructor of its parent class using the [`Super`](#super) command.



#### 例題

This example creates a class called `Square` from a class called `Polygon`.



```4d
//Class: Square

//path: Classes/Square.4dm 

Class extends Polygon

Class constructor ($side : Integer)

    // It calls the parent class's constructor with lengths
    // provided for the Polygon's width and height
    Super($side;$side)
    // In derived classes, Super must be called before you
    // can use 'This'
    This.name:="Square"

    Function getArea()
        C_LONGINT($0)
        $0:=This.height*This.width
```




### Super



#### シンタックス



```4d
Super {( param{;...;paramN} )} {-> Object} 
```


| 引数    | タイプ    |    | 説明                                             |
| ----- | ------ | -- | ---------------------------------------------- |
| param | 混合     | -> | Parameter(s) to pass to the parent constructor |
| 戻り値   | object | <- | Object's parent                                |


The `Super` keyword allows calls to the `superclass`, i.e. the parent class.

`Super` serves two different purposes:

1. Inside a [constructor code](#class-constructor), `Super` is a command that allows to call the constructor of the superclass. When used in a constructor, the `Super` command appears alone and must be used before the `This` keyword is used. 

- If all class constructors in the inheritance tree are not properly called, error -10748 is generated. It's 4D developer to make sure calls are valid.
- If the `This` command is called on an object whose superclasses have not been constructed, error -10743 is generated.
- If `Super` is called out of an object scope, or on an object whose superclass constructor has already been called, error -10746 is generated.



```4d
// inside myClass constructor
var $text1; $text2 : Text
Super($text1) //calls superclass constructor with a text param
This.param:=$text2 // use second param
```


2. Inside a [class member function](#class-function), `Super` designates the prototype of the superclass and allows to call a function of the superclass hierarchy.



```4d
Super.doSomething(42) //calls "doSomething" function  
//declared in superclasses
```




#### 例題 1

This example illustrates the use of `Super` in a class constructor. The command is called to avoid duplicating the constructor parts that are common between `Rectangle` and `Square` classes.



```4d
// Class: Rectangle
Class constructor($width : Integer; $height : Integer)
    This.name:="Rectangle"
    This.height:=$height
    This.width:=$width


Function sayName()
    ALERT("Hi, I am a "+This.name+".")

// Function definition
Function getArea()
    var $0 : Integer
    $0:=(This.height)*(This.width)
```




```4d
//Class: Square

Class extends Rectangle

Class constructor ($side : Integer)

    // It calls the parent class's constructor with lengths
    // provided for the Rectangle's width and height
    Super($side;$side)
    // In derived classes, Super must be called before you
    // can use 'This'
    This.name:="Square"

Function getArea()
    C_LONGINT($0)
    $0:=This.height*This.width
```




#### 例題 2

This example illustrates the use of `Super` in a class member method. You created the `Rectangle` class with a function:



```4d
//Class: Rectangle

Function nbSides()
    var $0 : Text
    $0:="I have 4 sides"
```


You also created the `Square` class with a function calling the superclass function:



```4d
//Class: Square

Class extends Rectangle

Function description()
    var $0 : Text
    $0:=Super.nbSides()+" which are all equal"
```


Then you can write in a project method:



```4d
var $square : Object
var $message : Text
$square:=cs.Square.new()
$message:=$square.description() //I have 4 sides which are all equal
```




### This



#### シンタックス



```4d
This -> Object
```


| 引数  | タイプ    |    | 説明             |
| --- | ------ | -- | -------------- |
| 戻り値 | object | <- | Current object |


The `This` keyword returns a reference to the currently processed object. In 4D, it can be used in [different contexts](https://doc.4d.com/4Dv18/4D/18/This.301-4504875.en.html).

In most cases, the value of `This` is determined by how a function is called. `This` の値は実行時に代入により設定することはできません。また、呼び出されるたびに違う値となりえます。 

When a formula is called as a member method of an object, its `This` is set to the object the method is called on. たとえば:



```4d
$o:=New object("prop";42;"f";Formula(This.prop))
$val:=$o.f() //42
```


When a [class constructor](#class-constructor) function is used (with the [`new()`](API/ClassClass.md#new) function), its `This` is bound to the new object being constructed.



```4d
//Class: ob

Class Constructor  

    // Create properties on This as
    // desired by assigning to them
    This.a:=42 
```




```4d
// in a 4D method  
$o:=cs.ob.new()
$val:=$o.a //42
```




> When calling the superclass constructor in a constructor using the [Super](#super) keyword, keep in mind that `This` must not be called before the superclass constructor, otherwise an error is generated. See [this example](#example-1).

In any cases, `This` refers to the object the method was called on, as if the method were on the object.



```4d
//Class: ob

Function f()
    $0:=This.a+This.b
```


Then you can write in a project method:



```4d
$o:=cs.ob.new()
$o.a:=5
$o.b:=3
$val:=$o.f() //8
```


In this example, the object assigned to the variable $o doesn't have its own *f* property, it inherits it from its class. Since *f* is called as a method of $o, its `This` refers to $o. 




## Class commands

Several commands of the 4D language allows you to handle class features.




### OB Class



#### OB Class ( object ) -> Object | Null

`OB Class` returns the class of the object passed in parameter. 




### OB Instance of



#### OB Instance of ( object ; class ) -> Boolean

`OB Instance of` returns `true` if `object` belongs to `class` or to one of its inherited classes, and `false` otherwise.

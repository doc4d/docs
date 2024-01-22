---
id: classes
title: クラス
---

## 概要

The 4D language supports the concept of **classes**. プログラミング言語では、クラスを利用することによって、属性やメソッドなどを持つ特定のオブジェクト種を定義することができます。

Once a user class is defined, you can **instantiate** objects of this class anywhere in your code. 各オブジェクトは、それ自身が属するクラスのインスタンスです。 A class can [`extend`](#class-extends-classname) another class, and then inherits from its [functions](#function) and properties ([declared](#property) and [computed](#function-get-and-function-set)).

> 4D におけるクラスモデルは JavaScript のクラスに類似しており、プロトタイプチェーンに基づきます。

For example, you could create a `Person` class with the following definition:

```4d
//Class: Person.4dm
Class constructor($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function get fullName() -> $fullName : text
 $fullName:=This.firstName+" "+This.lastName
 
Function sayHello()->$welcome : Text
 $welcome:="Hello "+This.fullName
```

この "Person" のインスタンスをメソッド内で作成するには、以下のように書けます:

```4d
var $person : cs.Person // Person クラスのオブジェクト
var $hello : Text
$person:=cs.Person.new("John";"Doe")
// $person:{firstName: "John"; lastName: "Doe"; fullName: "John Doe"}
$hello:=$person.sayHello() // "Hello John Doe"
```

## クラスの管理

### クラス定義

A user class in 4D is defined by a specific [method](methods.md) file (.4dm), stored in the `/Project/Sources/Classes/` folder. ファイル名がクラス名になります。

クラスを命名する際には、次のルールに留意してください:

- A [class name](identifiers.md#classes) must be compliant with [property naming rules](identifiers.md#object-properties).
- クラス名の大文字・小文字は区別されます。
- 競合防止のため、データベースのテーブルと同じ名前のクラスを作成するのは推奨されないこと

たとえば、"Polygon" という名前のクラスを定義するには、次のファイルを作成する必要があります:

Project フォルダー
Project
Sources
Classes
Polygon.4dm

### クラスの削除

既存のクラスを削除するには:

- ディスク上で "Classes" フォルダーより .4dm クラスファイルを削除します。
- in the 4D Explorer, select the class and click ![](../assets/en/Users/MinussNew.png) or choose **Move to Trash** from the contextual menu.

### 4D インターフェースの使用

Class files are automatically stored at the appropriate location when created through the 4D interface, either via the **File** menu or the Explorer.

#### ファイルメニューとツールバー

You can create a new class file for the project by selecting **New > Class...** in the 4D Developer **File** menu or from the toolbar.

You can also use the **Ctrl+Shift+Alt+k** shortcut.

#### エクスプローラー

In the **Methods** page of the Explorer, classes are grouped in the **Classes** category.

クラスを新規作成するには次の方法があります:

- select the **Classes** category and click on the ![](../assets/en/Users/PlussNew.png) button.
- select **New Class...** from the action menu at the bottom of the Explorer window, or from the contexual menu of the Classes group.
  ![](../assets/en/Concepts/newClass.png)
- select **New > Class...** from the contexual menu of the Explorer's Home page.

#### クラスのコードサポート

各種 4Dウィンドウ (コードエディター、コンパイラー、デバッガー、ランタイムエクスプローラー) において、クラスコードは "特殊なプロジェクトメソッド" のように扱われます:

- コードエディター:
  - クラスは実行できません
  - クラスメソッドはコードのブロックです
  - **Goto definition** on an object member searches for class Function declarations; for example, "$o.f()" will find "Function f".
  - **Search references** on class function declaration searches for the function used as object member; for example, "Function f" will find "$o.f()".
- In the Runtime explorer and Debugger, class functions are displayed with the `\<ClassName>` constructor or `\<ClassName>.\<FunctionName>` format.

## クラスストア

定義されたクラスには、クラスストアよりアクセスすることができます。 クラスストアには次の二つが存在します:

- `cs` for user class store
- `4D` for built-in class store

### `cs`

#### cs -> classStore

| 引数         | タイプ    |    | 説明                          |
| ---------- | ------ | -- | --------------------------- |
| classStore | object | <- | プロジェクトまたはコンポーネントのユーザークラスストア |

The `cs` command returns the user class store for the current project or component. It returns all user classes [defined](#class-definition) in the opened project or component. By default, only project [ORDA classes](ORDA/ordaClasses.md) are available.

#### 例題

You want to create a new instance of an object of `myClass`:

```4d
$instance:=cs.myClass.new()
```

### `4D`

#### 4D -> classStore

| 引数         | タイプ    |    | 説明       |
| ---------- | ------ | -- | -------- |
| classStore | object | <- | 4Dクラスストア |

The `4D` command returns the class store for available built-in 4D classes. It provides access to specific APIs such as [CryptoKey](API/CryptoKeyClass.md).

#### 例題

You want to create a new key in the `CryptoKey` class:

```4d
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))
```

## Class オブジェクト

When a class is [defined](#class-definition) in the project, it is loaded in the 4D language environment. A class is an object itself, of ["Class" class](API/ClassClass.md). Class オブジェクトは次のプロパティや関数を持ちます:

- [`name`](API/ClassClass.md#name) string
- [`superclass`](API/ClassClass.md#superclass) object (null if none)
- [`new()`](API/ClassClass.md#new) function, allowing to instantiate class objects.

In addition, a class object can reference a [`constructor`](#class-constructor) object (optional).

A class object is a [shared object](shared.md) and can therefore be accessed from different 4D processes simultaneously.

### 継承

If a class inherits from another class (i.e. the [Class extends](classes.md#class-extends-classname) keyword is used in its definition), the parent class is its [`superclass`](API/ClassClass.md#superclass).

When 4D does not find a function or a property in a class, it searches it in its [`superclass`](API/ClassClass.md#superclass); if not found, 4D continues searching in the superclass of the superclass, and so on until there is no more superclass (all objects inherit from the "Object" superclass).

## クラスキーワード

クラス定義内では、専用の 4Dキーワードが使用できます:

- `Function <Name>` to define class functions of the objects.
- `Class constructor` to initialize new objects of the class.
- `property` to define static properties of the objects with a type.
- `Function get <Name>` and `Function set <Name>` to define computed properties of the objects.
- `Class extends <ClassName>` to define inheritance.

### `Function`

#### シンタックス

```4d
Function <name>({$parameterName : type; ...}){->$parameterName : type}
// code
```

クラス関数とは、当該クラスのプロパティです。 They are objects of the [4D.Function](API/FunctionClass.md#about-4dfunction-objects) class.

In the class definition file, function declarations use the `Function` keyword, and the name of the function. The function name must be compliant with [property naming rules](Concepts/identifiers.md#object-properties).

:::tip

アンダースコア ("_") 文字で関数名を開始すると、その関数は 4Dコードエディターの自動補完機能から除外されます。 For example, if you declare `Function _myPrivateFunction` in `MyClass`, it will not be proposed in the code editor when you type in `"cs.MyClass. "`.

:::

Immediately following the function name, [parameters](#parameters) for the function can be declared with an assigned name and data type, including the return parameter (optional). 例:

```4d
Function computeArea($width : Integer; $height : Integer)->$area : Integer
```

Within a class function, the `This` command is used as the object instance. 例:

```4d
Function setFullname($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function getFullname()->$fullname : Text
 $fullname:=This.firstName+" "+Uppercase(This.lastName)
```

For a class function, the `Current method name` command returns: `<ClassName>.<FunctionName>`, for example "MyClass.myFunction".

In the application code, class functions are called as member methods of the object instance and can receive [parameters](#class-function-parameters) if any. 以下のシンタックスがサポートされています:

- use of the `()` operator. For example, `myObject.methodName("hello")`
- "4D.Function" クラスメンバーメソッドの使用:
  - [`apply()`](API/FunctionClass.md#apply)
  - [`call()`](API/FunctionClass.md#call)

> **Thread-safety warning:** If a class function is not thread-safe and called by a method with the "Can be run in preemptive process" attribute:
>
> - 普通のメソッドの場合とは異なり、コンパイラーはエラーを生成しません。
> - ランタイムにおいてのみ、4D はエラーを生成します。

#### 引数

関数の引数は、引数名とデータ型をコロンで区切って宣言します。 The parameter name must be compliant with [property naming rules](Concepts/identifiers.md#object-properties). 複数のパラメーター (およびその型) を宣言する場合は、それらをセミコロン (;) で区切ります。

```4d
Function add($x; $y : Variant; $z : Integer; $xy : Object)
```

> If the type is not stated, the parameter will be defined as `Variant`.

The [classic 4D syntax](parameters.md#sequential-parameters) for method parameters can be used to declare class function parameters. 両方のシンタックスは併用することができます。 例:

```4d
Function add($x : Integer)
 var $2; $value : Integer
 var $0 : Text
 $value:=$x+$2
 $0:=String($value)
```

#### 戻り値

You declare the return parameter (optional) by adding an arrow (`->`) and the return parameter definition after the input parameter(s) list, or a colon (`:`) and the return parameter type only. 例:

```4d
Function add($x : Variant; $y : Integer)->$result : Integer
 $result:=$x+$y
```

You can also declare the return parameter by adding only `: type` and use the [`return expression`](parameters.md#return-expression) (it will also end the function execution). 例:

```4d
Function add($x : Variant; $y : Integer): Integer
 // なんらかのコード
 return $x+$y
```

#### 例題 1

```4d
property name : Text
property height; width : Integer

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
// プロジェクトメソッドにて

var $rect : cs.Rectangle
var $area : Real

$rect:=cs.Rectangle.new(50;100)  
$area:=$rect.getArea() //5000
```

#### 例題 2

This example uses the [`return expression`](parameters.md#return-expression):

```4d
Function getRectArea($width : Integer; $height : Integer) : Integer
 If ($width > 0 && $height > 0)
  return $width * $height
 Else
  return 0
 End if
```

### `Class Constructor`

#### シンタックス

```4d
// Class: MyClass
Class Constructor({$parameterName : type; ...})
// code
```

A class constructor function accepts optional [parameters](#parameters) and can be used to create and initialize objects of the user class.

When you call the [`new()`](API/ClassClass.md#new) function, the class constructor is called with the parameters optionally passed to the `new()` function.

コンストラクター関数は、1つのクラスに 1つしか存在できません (そうでない場合はエラーが返されます)。 A constructor can use the [`Super`](#super) keyword to call the constructor of the super class.

コンストラクター内でインスタンスのプロパティを作成し、型宣言することができます (例題参照)。 Alternatively, if your instance properties' values do not depend on parameters passed to the constructor, you can define them using the [`property`](#property) keyword.

#### 例題

```4d
// クラス: MyClass
// MyClass のクラスコンストラクター
Class constructor ($name : Text ; $age : Integer)
 This.name:=$name
 This.age:=$age
```

```4d
// プロジェクトメソッドにて
// オブジェクトをインスタンス化します
var $o : cs.MyClass
$o:=cs.MyClass.new("John";42)
// $o = {"name":"John";"age":42}
```

### `property`

#### シンタックス

`property <propertyName>{; <propertyName2>;...}{ : <propertyType>}`

The `property` keyword can be used to declare a property inside a user class. クラスプロパティには、名前と型があります。

クラスプロパティを宣言することで、コードエディターの自動補完機能とエラー検出機能を強化します。

Properties are declared for new objects when you call the [`new()`](API/ClassClass.md#new) function, however they are not automatically added to objects (they are only added when they are assigned a value).

Property names must be compliant with [property naming rules](Concepts/identifiers.md#object-properties).

プロパティの型として、以下のものがサポートされています:

| propertyType                 | 内容                                              |
| ---------------------------- | ----------------------------------------------- |
| `Text`                       | テキスト値                                           |
| `Date`                       | 日付値                                             |
| `Time`                       | 時間値                                             |
| `Boolean`                    | ブール値                                            |
| `Integer`                    | 倍長整数値                                           |
| `Real`                       | 実数値                                             |
| `Pointer`                    | ポインター値                                          |
| `Picture`                    | ピクチャー値                                          |
| `Blob`                       | スカラーBLOB値                                       |
| `Collection`                 | コレクション値                                         |
| `Variant`                    | バリアント値                                          |
| `Object`                     | デフォルトクラス (4D.Object) のオブジェクト |
| `4D.<className>`             | 4Dクラス名のオブジェクト                                   |
| `cs.<className>`             | ユーザークラス名のオブジェクト                                 |
| `cs.<namespace>.<className>` | `<namespace>` コンポーネントクラス名のオブジェクト                |

:::info

The `property` keyword can only be used in class methods and outside any `Function` or `Class Constructor` block.

:::

#### 例題

```4d
// クラス: MyClass

property name : Text
property age : Integer
```

メソッド内で:

```4d
var $o : cs.MyClass
$o:=cs.MyClass.new() //$o:{}
$o.name:="John" // $o:{"name" : "John"}
$o.age:="Smith"  // シンタックスチェックでエラーに
```

### `Function get` and `Function set`

#### シンタックス

```4d
Function get <name>()->$result : type
// code
```

```4d
Function set <name>($parameterName : type)
// code
```

`Function get` and `Function set` are accessors defining **computed properties** in the class. 計算プロパティとは、計算をマスクするデータ型を持つ命名プロパティです。 計算プロパティの値にアクセスすると、4D は対応するアクセサーのコードを実行します:

- when the property is read, the `Function get` is executed,
- when the property is written, the `Function set` is executed.

プロパティがアクセスされない場合は、コードも実行されません。

計算プロパティは、メモリ上に保持する必要のないデータを処理するために設計されています。 計算プロパティは通常、永続的なプロパティに基づいています。 For example, if a class object contains as persistent property the _gross price_ and the _VAT rate_, the _net price_ could be handled by a computed property.

In the class definition file, computed property declarations use the `Function get` (the _getter_) and `Function set` (the _setter_) keywords, followed by the name of the property. The name must be compliant with [property naming rules](Concepts/identifiers.md#object-properties).

`Function get` returns a value of the property type and `Function set` takes a parameter of the property type. Both arguments must comply with standard [function parameters](#parameters).

When both functions are defined, the computed property is **read-write**. If only a `Function get` is defined, the computed property is **read-only**. この場合、コードがプロパティを変更しようとするとエラーが返されます。 If only a `Function set` is defined, 4D returns _undefined_ when the property is read.

The type of the computed property is defined by the `$return` type declaration of the _getter_. It can be of any [valid property type](dt_object.md).

> Assigning _undefined_ to an object property clears its value while preserving its type. In order to do that, the `Function get` is first called to retrieve the value type, then the `Function set` is called with an empty value of that type.

#### 例題 1

```4d
//Class: Person.4dm
property firstName; lastName : Text

Class constructor($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function get fullName() -> $fullName : Text
 $fullName:=This.firstName+" "+This.lastName

Function set fullName( $fullName : Text )
 $p:=Position(" "; $fullName)
 This.firstName:=Substring($fullName; 1; $p-1)
 This.lastName:=Substring($fullName; $p+1)
```

```4d
// プロジェクトメソッドにて
$fullName:=$person.fullName // Function get fullName() が呼び出されます
$person.fullName:="John Smith" // Function set fullName() が呼び出されます
```

#### 例題 2

```4d
Function get fullAddress()->$result : Object
 
 $result:=New object
 
 $result.fullName:=This.fullName
 $result.address:=This.address
 $result.zipCode:=This.zipCode
 $result.city:=This.city
 $result.state:=This.state
 $result.country:=This.country 
```

### `Class extends <ClassName>`

#### シンタックス

```4d
// Class: ChildClass
Class extends <ParentClass>
```

The `Class extends` keyword is used in class declaration to create a user class which is a child of another user class. この子クラスは、親クラスのすべての機能を継承します。

クラス継承は次のルールに沿っている必要があります:

- A user class cannot extend a built-in class (except 4D.Object and [ORDA classes](../ORDA/ordaClasses.md) which are extended by default for user classes).
- ユーザークラスは、別のプロジェクトやコンポーネントのユーザークラスを継承できません。
- ユーザークラスは、自身を継承することはできません。
- 間接的にも、自身を継承することはできません (例: "a" extends "b" かつ "b" extends "a")。

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

### `Super`

#### シンタックス

```4d
Super {( param{;...;paramN} )} {-> Object}
```

| 引数    | タイプ    |    | 説明               |
| ----- | ------ | -- | ---------------- |
| param | mixed  | -> | 親コンストラクターに受け渡す引数 |
| 戻り値   | object | <- | 親オブジェクト          |

The `Super` keyword allows calls to the `superclass`, i.e. the parent class.

`Super` serves two different purposes:

1. Inside a [constructor code](#class-constructor), `Super` is a command that allows to call the constructor of the superclass. When used in a constructor, the `Super` command appears alone and must be used before the `This` keyword is used.

- 継承ツリーにおいて、すべてのクラスコンストラクターが正しく呼び出されていない場合には、エラー -10748 が生成されます。 呼び出しが有効であることを確認するのは、開発者の役目となります。
- If the `This` command is called on an object whose superclasses have not been constructed, error -10743 is generated.
- If `Super` is called out of an object scope, or on an object whose superclass constructor has already been called, error -10746 is generated.

```4d
// myClass コンストラクター
var $text1; $text2 : Text
Super($text1) // テキスト型引数をスーパークラスコンストラクターに渡します
This.param:=$text2 // 2番目の引数を使用します
```

2. Inside a [class member function](#class-function), `Super` designates the prototype of the superclass and allows to call a function of the superclass hierarchy.

```4d
Super.doSomething(42) // スーパークラスにて宣言されている
// "doSomething" メンバーメソッドを呼び出します
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

この場合、プロジェクトメソッド内には次のように書けます:

```4d
var $square : Object
var $message : Text
$square:=cs.Square.new()
$message:=$square.description() // "I have 4 sides which are all equal"
```

### `This`

#### シンタックス

```4d
This -> Object
```

| 引数  | タイプ    |    | 説明         |
| --- | ------ | -- | ---------- |
| 戻り値 | object | <- | カレントオブジェクト |

The `This` keyword returns a reference to the currently processed object. In 4D, it can be used in [different contexts](https://doc.4d.com/4Dv19/help/command/page1470.html).

In most cases, the value of `This` is determined by how a function is called. <code>This</code> の値は実行時に代入により設定することはできません。また、呼び出されるたびに違う値となりえます。

When a formula is called as a member method of an object, its `This` is set to the object the method is called on. 例:

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
// 4Dメソッドにて 
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

この場合、プロジェクトメソッド内には次のように書けます:

```4d
$o:=cs.ob.new()
$o.a:=5
$o.b:=3
$val:=$o.f() //8

```

In this example, the object assigned to the variable $o doesn't have its own _f_ property, it inherits it from its class. Since _f_ is called as a method of $o, its `This` refers to $o.

## クラスコマンド

4Dランゲージには、クラス機能を扱う複数のコマンドがあります。

### `OB Class`

#### `OB Class ( object ) -> Object | Null`

`OB Class` returns the class of the object passed in parameter.

### `OB Instance of`

#### `OB Instance of ( object ; class ) -> Boolean`

`OB Instance of` returns `true` if `object` belongs to `class` or to one of its inherited classes, and `false` otherwise.

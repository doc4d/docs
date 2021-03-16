---
id: classClass
title: Class
---


プロジェクトにおいてユーザークラスが [定義](Concepts/classes.md#クラス定義) されていれば、それは 4Dランゲージ環境に読み込まれます。 クラスとは、それ自身が "Class" クラスのオブジェクトであり、プロパティと関数を持ちます。



### 概要


|                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #classClass.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #classClass.name.Summary -->|
| [<!-- INCLUDE #classClass.new().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #classClass.new().Summary --> |
| [<!-- INCLUDE #classClass.superclass.Syntax -->](#superclass)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #classClass.superclass.Summary --> |



<!-- REF classClass.name.Desc -->
## .name

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R3 | 追加 |

</details>

<!-- REF #classClass.name.Syntax -->
**.name** : Text<!-- END REF -->

#### 説明

`.name` プロパティは <!-- REF #classClass.name.Summary -->contains the name of the `4D.Class` オブジェクトの名称を格納します<!-- END REF -->。 クラス名の大文字・小文字は区別されます。

このプロパティは **読み込み専用** です。 

<!-- END REF -->



<!-- REF classClass.new().Desc -->
## .new()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R3 | 追加 |
</details>

<!-- REF #classClass.new().Syntax -->
**.new**( *param* : any { *;...paramN* } ) : 4D.Class<!-- END REF -->

<!-- REF #classClass.new().Params -->
| 参照    | タイプ      |    | 説明              |
| ----- | -------- |:--:| --------------- |
| param | any      | -> | コンストラクター関数に渡す引数 |
| 戻り値   | 4D.Class | <- | クラスの新規オブジェクト    |
<!-- END REF -->


#### 説明

The `.new()` function <!-- REF #classClass.new().Summary -->creates and returns a `cs.className` object which is a new instance of the class on which it is called<!-- END REF -->. This function is automatically available on all classes from the [`cs` class store](Concepts/classes.md#cs).

You can pass one or more optional *param* parameters, which will be passed to the [class constructor](Concepts/classes.md#class-constructor) function (if any) in the className class definition. Within the constructor function, the [`This`](Concepts/classes.md#this) is bound to the new object being constructed.

If `.new()` is called on a non-existing class, an error is returned.

#### 例題

Person クラスの新規インスタンスを作成するには、次のように書きます:

```4d
var $person : cs.Person  
$person:=cs.Person.new() //create the new instance  
//$person contains functions of the class
```

To create a new instance of the Person class with parameters:

```4d
//Class: Person.4dm
Class constructor($firstname : Text; $lastname : Text; $age : Integer)
    This.firstName:=$firstname
    This.lastName:=$lastname
    This.age:=$age
```

```4d
//In a method
var $person : cs.Person  
$person:=cs.Person.new("John";"Doe";40)  
//$person.firstName = "John"
//$person.lastName = "Doe"
//$person.age = 40
```


<!-- END REF -->



<!-- REF classClass.superclass.Desc -->
## .superclass

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R3 | 追加 |

</details>

<!-- REF #classClass.superclass.Syntax -->
**.superclass** : 4D.Class<!-- END REF -->

#### 説明

The `.superclass` property <!-- REF #classClass.superclass.Summary -->returns the parent class of the class<!-- END REF -->. A superclass can be a `4D.Class` object, or a `cs.className` object. If the class does not have a parent class, the property returns **null**.

A superclass of a user class is declared in a class by using the [`Class extends <superclass>`](Concepts/classes.md#class-extends-classname) keyword.

このプロパティは **読み込み専用** です。

#### 例題

```4d
$sup:=4D.File.superclass //Document
$sup:=4D.Document.superclass //Object
$sup:=4D.Object.superclass //null

// If you created a MyFile class  
// with `Class extends File`
$sup:=cs.MyFile.superclass //File 

```



**See also:** [Super](Concepts/classes.md#super)
<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>

---
id: ClassClass
title: Class
---

When a user class is [defined](Concepts/classes.md#class-definition) in the project, it is loaded in the 4D language environment. クラスとは、それ自身が "Class" クラスのオブジェクトであり、プロパティと関数を持ちます。

### 概要

|                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ClassClass.isShared.Syntax -->](#isshared)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #ClassClass.isShared.Summary -->          |
| [<!-- INCLUDE #ClassClass.isSingleton.Syntax -->](#issingleton)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #ClassClass.isSingleton.Summary --> |
| [<!-- INCLUDE #ClassClass.me.Syntax -->](#me)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #ClassClass.me.Summary -->                            |
| [<!-- INCLUDE #ClassClass.name.Syntax -->](#name)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #ClassClass.name.Summary -->                      |
| [<!-- INCLUDE #ClassClass.new().Syntax -->](#new)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #ClassClass.new().Summary -->                     |
| [<!-- INCLUDE #ClassClass.superclass.Syntax -->](#superclass)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #ClassClass.superclass.Summary -->    |

<!-- REF ClassClass.isShared.Desc -->

## .isShared

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R5 | 追加 |

</details>

<!-- REF #ClassClass.isShared.Syntax -->**.isShared** : Boolean<!-- END REF -->

#### 説明

The `.isShared` property <!-- REF #ClassClass.isShared.Summary -->returns `true` if the user class has been defined as [shared class](../Concepts/classes.md#shared-classes)<!-- END REF -->, and `false` otherwise.

This property is **read-only**.

<!-- END REF -->

<!-- REF ClassClass.isSingleton.Desc -->

## .isSingleton

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R5 | 追加 |

</details>

<!-- REF #ClassClass.isSingleton.Syntax -->**.isSingleton** : Boolean<!-- END REF -->

#### 説明

The `.isSingleton` property <!-- REF #ClassClass.isSingleton.Summary -->returns `true` if the user class has been defined as a [singleton class](../Concepts/classes.md#singleton-classes)<!-- END REF -->, and `false` otherwise.

This property is **read-only**.

<!-- END REF -->

<!-- REF ClassClass.me.Desc -->

## .me

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R5 | 追加 |

</details>

<!-- REF #ClassClass.me.Syntax -->**.me** : 4D.Class<!-- END REF -->

#### 説明

The `.me` property <!-- REF #ClassClass.me.Summary -->returns the singleton instance of the `cs.className` singleton class<!-- END REF -->. シングルトンクラスが前もってインスタンス化されていない場合、このプロパティは引数なしでクラスコンストラクターを呼び出し、インスタンスを作成します。 そうでない場合は、既存のシングルトンインスタンスを返します。

If `cs.className` is not a [singleton class](../Concepts/classes.md#singleton-classes), `.me` is **undefined** by default.

This property is **read-only**.

<!-- END REF -->

<!-- REF ClassClass.name.Desc -->

## .name

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R3 | 追加 |

</details>

<!-- REF #ClassClass.name.Syntax -->**.name** : Text<!-- END REF -->

#### 説明

The `.name` property <!-- REF #ClassClass.name.Summary -->contains the name of the `4D.Class` object<!-- END REF -->. クラス名の大文字・小文字は区別されます。

This property is **read-only**.

<!-- END REF -->

<!-- REF ClassClass.new().Desc -->

## .new()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R3 | 追加 |

</details>

<!-- REF #ClassClass.new().Syntax -->**.new**( { *...param* : any } ) : 4D.Class<!-- END REF -->

<!-- REF #ClassClass.new().Params -->

| 引数    | タイプ                      |     | 説明              |
| ----- | ------------------------ | :-: | --------------- |
| param | any                      |  -> | コンストラクター関数に渡す引数 |
| 戻り値   | 4D.Class |  <- | クラスの新規オブジェクト    |

<!-- END REF -->

#### 説明

The `.new()` function <!-- REF #ClassClass.new().Summary -->creates and returns a `cs.className` object which is a new instance of the class on which it is called<!-- END REF -->. This function is automatically available on all classes from the [`cs` class store](Concepts/classes.md#cs).

You can pass one or more optional _param_ parameters, which will be passed to the [class constructor](Concepts/classes.md#class-constructor) function (if any) in the _className_ class definition. Within the constructor function, the [`This`](Concepts/classes.md#this) is bound to the new object being constructed.

:::note 注記

- If `.new()` is called on a [singleton class](../Concepts/classes.md#singleton-classes) that has already been instantiated, the singleton instance is returned, not a new instance.
- If `.new()` is called on a non-existing class, an error is returned.

:::

#### 例題

Person クラスの新規インスタンスを作成するには、次のように書きます:

```4d
var $person : cs.Person 
$person:=cs.Person.new() // 新規インスタンスの作成  
//$person はクラス関数を格納しています
```

パラメーターを使って、Personクラスの新規インスタンスを作成するには、次のように書きます:

```4d
//Class: Person.4dm
Class constructor($firstname : Text; $lastname : Text; $age : Integer)
	This.firstName:=$firstname
	This.lastName:=$lastname
	This.age:=$age
```

```4d
// メソッド内の使用例
var $person : cs.Person  
$person:=cs.Person.new("John";"Doe";40)  
// $person.firstName = "John"
// $person.lastName = "Doe"
// $person.age = 40
```

<!-- END REF -->

<!-- REF ClassClass.superclass.Desc -->

## .superclass

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R3 | 追加 |

</details>

<!-- REF #ClassClass.superclass.Syntax -->**.superclass** : 4D.Class<!-- END REF -->

#### 説明

The `.superclass` property <!-- REF #ClassClass.superclass.Summary -->returns the parent class of the class<!-- END REF -->. A superclass can be a `4D.Class` object, or a `cs.className` object. If the class does not have a parent class, the property returns **null**.

A superclass of a user class is declared in a class by using the [`Class extends <superclass>`](Concepts/classes.md#class-extends-classname) keyword.

This property is **read-only**.

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

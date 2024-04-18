---
id: identifiers
title: 識別子の命名規則
---

この章では、4D ランゲージにおけるさまざまな要素 (変数、オブジェクトプロパティ、テーブル、フォームなど) の命名規則について説明します。

> 非ローマ文字 (日本語など) が識別子に使用された場合、その最大長は短かくなることがあります。

## 配列

Array names follow the same rules as [variables](#variables).

## クラス

クラス名は31文字以内で指定します。

A class name must be compliant with standard [property naming rules](#object-properties) for dot notation.

> Giving the same name to a class and a [database table](#tables) is not recommended, in order to prevent any conflict.

## 関数

Function names must be compliant with standard [property naming rules](#object-properties) for dot notation.

> **Tip:** Starting the function name with an underscore character ("_") will exclude the function from the autocompletion features in the 4D code editor.

## オブジェクトプロパティ

The name of an object property (also called object _attribute_) can contain up to 255 characters.

オブジェクトプロパティは、スカラー値・ORDA要素・クラス関数・他のオブジェクト等を参照できます。 Whatever their nature, object property names must follow the following rules **if you want to use the [dot notation](dt_object.md#object-properties)**:

- 1文字目は、文字、アンダースコア(_)、あるいはドル記号 ($) でなければなりません。
- その後の文字には、文字・数字・アンダースコア(_)・ドル記号 ($) が使用できます。
- 大文字・小文字は区別されます。

例:

```4d
myObject.myAttribute:="10"
$value:=$clientObj.data.address.city
```

:::tip

アンダースコア ("_") 文字でオブジェクトプロパティ名を開始すると、そのプロパティは 4Dコードエディターの自動補完機能から除外されます。 For example, if you declare `$o._myPrivateProperty`, it will not be proposed in the code editor when you type in `"$o. "`.

:::

See also [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6).

:::note

If you use **string notation** within square brackets, property names can contain any characters (ex: `myObject["1. First property"]`).

:::

## 引数

Parameter names must start with a `$` character and follow the same rules as [variable names](#variables).

例:

```4d
Function getArea($width : Integer; $height : Integer)-> $area : Integer

#DECLARE ($i : Integer ; $param : Date) -> $myResult : Object
```

## プロジェクトメソッド

プロジェクトメソッド名は 31文字以内で指定します。

- 1文字目は、文字、数字、あるいはアンダースコア(_) でなければなりません。
- その後の文字には、文字・数字・アンダースコア(_)・スペースが使用できます。
- Do not use reserved names, i.e. 4D command names (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), or constant names (`Euro`, `Black`, `Friday`, etc.).
- 大文字・小文字は区別されます。

例:

```4d
If(New client)
DELETE DUPLICATED VALUES
APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Tip:** It is a good programming technique to adopt the same naming convention as the one used by 4D for built-in methods. メソッド名には大文字を使用しますが、メソッドが値を返す場合には最初の文字だけを大文字にします。 このように命名することにより、数ヶ月後に保守のためプロジェクトを再度開いたときに、エクスプローラーウィンドウでその名前を見ただけで、メソッドが結果を返すかどうかがわかります。

> メソッドを呼び出すには、メソッド名を書きます。 However, some 4D built-in commands, such as `ON EVENT CALL`, as well as all plug-in commands, expect the name of a method as a string when a method parameter is passed.

例:

```4d
 //This command expects a method (function) or formula
QUERY BY FORMULA([aTable];Special query)
 //This command expects a method (procedure) or statement
APPLY TO SELECTION([Employees];INCREASE SALARIES)
 //But this command expects a method name
ON EVENT CALL("HANDLE EVENTS")
```

## テーブルとフィールド

大カッコ内 (\[...]) に名前を入れることで、テーブルを表します。 フィールドを表すには、そのフィールドが属するテーブルをまず指定し、フィールド名を続けて書きます。

テーブル名およびフィールド名は、31文字以内で指定します。

- 1文字目は、文字、アンダースコア(_)、あるいはドル記号 ($) でなければなりません。
- その後の文字には、半角アルファベット文字・数字・スペース・アンダースコアを使用ができます。
- Do not use reserved names, i.e. 4D command names (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), or constant names (`Euro`, `Black`, `Friday`, etc.).
- SQLで処理する場合には追加のルールがあります: 文字 _0123456789abcdefghijklmnopqrstuvwxyz のみを使用できます。また、名前に SQLキーワード (コマンド、属性 等) が含まれていてはなりません。

例:

```4d
FORM SET INPUT([Clients];"Entry")
ADD RECORD([Letters])
[Orders]Total:=Sum([Line]Amount)
QUERY([Clients];[Clients]Name="Smith")
[Letters]Text:=Capitalize text([Letters]Text)

```

> Giving the same name to a table and a [class](#classes) is not recommended, in order to prevent any conflict.

## 変数

The name of a variable can be up to 31 characters, not including the scope symbols (`$` or `<>`).

- A variable name must begin with a letter, an underscore, or a dollar ("$") for [parameters](parameters.md) and [local variables](variables.md#local-variables), or `<>` for [interprocess variables](variables.md#interprocess-variables).
- A digit as first character is allowed but not recommended, and is not supported by the [`var` declaration syntax](variables.md#using-the-var-keyword).
- その後の文字には、文字・数字・アンダースコア(_) が使用できます。
- Space character is allowed but not recommended, and is not supported by the [`var` declaration syntax](variables.md#using-the-var-keyword).
- Do not use reserved names, i.e. 4D command names (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), or constant names (`Euro`, `Black`, `Friday`, etc.).
- 変数名においては、大文字・小文字は区別されません。

例:

```4d
For($vlRecord;1;100) //local variable
$vsMyString:="Hello there" //local variable
var $vName; $vJob : Text //local variales 
If(bValidate=1) //process variable
<>vlProcessID:=Current process() //interprocess variable
```

## その他の識別子

In the 4D language, several elements have their names handled as strings: **forms**, **form objects**, **named selections**, **processes**, **sets**, **menu bars**, etc.

Such string names can contain up to 255 characters, not including the `$` or `<>` characters (if any).

- 文字列名にはあらゆる文字を使用できます。
- 文字列名においては、大文字・小文字は区別されません。

例:

```4d
DIALOG([Storage];"Note box"+String($vlStage))
OBJECT SET FONT(*;"Binfo";"Times")
USE NAMED SELECTION([Customers];"Closed")//Process Named Selection
USE NAMED SELECTION([Customers];"<>ByZipcode") //Interprocess Named Selection
 //Starting the global process "Add Customers"
$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")
 //Starting the local process "$Follow Mouse Moves"
$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")
CREATE SET([Customers];"Customer Orders")//Process set
USE SET("<>Deleted Records") //Interprocess set
If(Records in set("$Selection"+String($i))>0) //Client set

```

---
id: num
title: Num
slug: /commands/num
displayed_sidebar: docs
---

<!--REF #_command_.Num.Syntax-->**Num** ( *expression* {; *separator*} ) : Real<br/>**Num** ( *expression* ; *base* ) : Real<!-- END REF-->

<!--REF #_command_.Num.Params-->

| 引数        | 型                      |                             | 説明                                    |
| --------- | ---------------------- | --------------------------- | ------------------------------------- |
| 式         | Text, Boolean, Integer | &#8594; | 数値形式を返したい文字列、あるいは0か1を返したいブール値、あるいは数値式 |
| separator | Text                   | &#8594; | 小数点記号                                 |
| base      | Integer                | &#8594; | 基数を表す2から36までの値                        |
| 戻り値       | Real                   | &#8592; | expression 引数の数値形式                    |

<!-- END REF-->

<details><summary>履歴</summary>

| リリース | 内容             |
| ---- | -------------- |
| 21   | *base* 引数のサポート |

</details>

## 説明

<!--REF #_command_.Num.Summary-->**Num** コマンドは、*expression* に渡した文字列、ブール、または数値式の数値型を返します。<!-- END REF-->

*expression* 引数が文字列型だった場合、*separator* 引数または*base* 引数を使用することができます(以下参照)。

### 文字列式

**Num** コマンドに対して文字列型の *expression* 引数を渡した場合、2つのシンタックスが利用可能です:

- **Num(string{;separator})**
- **Num(string;base)**

#### Num(string{;separator})

*expression* が１つ以上のアルファベット文字からのみ構成される場合、**Num** は0を返します。 *expression* がアルファベット文字と数字を含む場合、このコマンドはアルファベット文字を無視します。 従って、このコマンドは文字列"a1b2c3" を数値123 に変換します。

**Num** が特別に扱う3つの指定された文字があります。(*separator* 引数が渡されていない場合)システムで定義された小数区切り文字、ハイフン“*\-*” および “*e*” *あるいは* “E” です。 これらの文字は、数値表現のフォーマット文字として解釈されます。

- 小数区切りは小数点の位置として解釈され、数値文字列に埋め込まれていなければなりません。 デフォルトでコマンドは、オペレーティングシステムに設定された小数区切りを使用します。 *separator* 引数を使用して、この文字を変更できます(以下参照)。
- ハイフンは、数値や指数が負であることを意味します。 ハイフンは負の数字文字列の前、または指数の場合“e”の後ろになければなりません。 “e”をのぞきハイフンが数字の間にあると、それ以降の文字列は無視されます。 例えば、 `Num("123-456")` は123に、しかし `Num("-9")` は-9になります。
- eまたはEがあると、その右側の数字をすべて指数として解釈します。 eは数字の文字列の間に置かなければなりません。 `Num("123e–2")` は 1.23 になります。\
  文字列に複数の“e”を含んでいる場合、 macOS とWindows で異なる結果になる可能性があるので注意してください。

#### *separator* 引数

*separator* 引数は、*expression* を評価するために使用するカスタム小数区切りを指定します。 評価される文字列が、システム演算子とは異なる小数区切りで表現されていると、コマンドは誤った結果を返します。 この場合、*separator* 引数を使用して正しい評価を取得できます。 この引数が渡された場合、コマンドはこのシステム小数区切りを無視します。 １つ以上の文字を渡すことができます。

:::note

[`GET SYSTEM FORMAT`](../commands-legacy/get-system-format.md) コマンドを使用して、カレント小数区切りおよびその他の特定のシステム引数を調べることができます。

:::

#### Num(string;base)

*base* 引数(整数値) を使用すると、特定のモードがトリガーされます。このモードでは*expression* 内で文字列として表される数値の基数(底)を指定します。 具体的には、このシンタックスを使用することで16進数の文字列を数値に変換することができます。

*base* 引数には、*expression* 引数の基数の数字を渡します。 ここには2 から36 までの任意の整数値を渡すことができます。

*base* 引数に0 を渡した場合、コマンドは*expression* 引数の値に応じて基数を決定します。 *expression* の値が"0x" で始まる場合、16 進数が使用されます。 それ以外の場合、10 進数が使用されます。

*expression* 引数が小数に評価された場合、整数部分のみが変換されます。

:::info

- このシンタックスは[`parseInt` EcmaScript 仕様](https://tc39.es/ecma262/multipage/global-object.html#sec-parseint-string-radix) に厳密に従います。
- *base*=10 のシンタックスを使用した場合、 *base* 引数を使用しなかったシンタックスと全く同じ結果は返しません。 例えば、ECMAScript 仕様に従えば、底として所属しない文字はセパレータとしてみなされます(例題を参照してください)。

:::

### ブール式

ブール式を渡した場合、**Num** は、式がTrueの場合1を返し、そうでなければ*0* (ゼロ)を返します。

### 数値式

数値式を*expression* 引数に渡した場合、**Num** は*expression* 引数に渡された値をそのまま返します。 これは具体的にはポインタを使用するような汎用プログラミングで有効です。

### Undefined Expressions

If *expression* evaluates to undefined, the command returns 0 (zero). This is useful when you expect the result of an expression (e.g. an object attribute) to be a number, even if it can be undefined.

## 例題 1

The following example illustrates how **Num** works when passed a single string argument:

```4d
$result:=Num("ABCD") // 0
$result:=Num("A1B2C3") // 123
$result:=Num("123") // 123
$result:=Num("123.4") // 123.4
$result:=Num("–123") // –123
$result:=Num("–123e2") // –12300
```

## 例題 2

Here, *\[Client\]Debt* is compared with *$1000*. The Num command applied to these comparisons returns 1 or 0\. Multiplying 1 or 0 with a string repeats the string once or returns the empty string. As a result, *\[Client\]Risk* gets either “Good” or “Bad”:

```4d
  // If client owes less than 1000, a good risk.
  // If client owes more than 1000, a bad risk.
 [Client]Risk:=("Good"*Num([Client]Debt<1000))+("Bad"*Num([Client]Debt>=1000))
```

## 例題 3

This example compares the results obtained depending on the “current” separator:

```4d
 $thestring:="33,333.33"
 $thenum:=Num($thestring)
  // by default, $thenum equals 33,33333 on a French system
 $thenum:=Num($thestring;".")
  // $thenum will be correctly evaluated regardless of the system;
  // for example, 33 333,33 on a French system
```

## 例題 4

This example illustrates the use of the *base* syntax:

```4d
$result:=Num("ff";16) // 255 (lower-case hexadecimal)
$result:=Num("0xFF") // 0
$result:=Num("0xFF";16) // 255
$result:=Num("2";2) // 0
$result:=Num("10.3";16) // 16
$result:=Num("123.20") // 12320 (standard base 10 syntax)
$result:=Num("123.20"; 10) // 123 (explicitly specify base 10)

```

## 参照

[Bool](../commands-legacy/bool.md)\
[GET SYSTEM FORMAT](../commands-legacy/get-system-format.md)\
[String](./string.md)

## プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 11                          |
| スレッドセーフ | &check; |



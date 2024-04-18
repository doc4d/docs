---
id: operators
title: 演算子
---

演算子とは、値のチェック・変更・結合に使用する記号または記号のグループです。 日常的に使用されている演算子も多くあります。 For example, `1 + 2` uses the addition (or plus sign) operator to add two numbers together, and the result is 3. Comparison operators, like = or >, let you compare two or more values.

4Dランゲージでサポートされている演算子は、C や JavaScript など他の言語でも使用されています。 However, the assignment operator is `:=` to prevent it from being mistakenly used when the equal to operator (`=`) is intended. [Basic operators](#basic-operators) such as arithmetic operators (+, -, \*, /, %...) and comparison operators (=, >, >=...) can be used with numbers, but also with boolean, text, date, time, pointer, or picture data types. Like JavaScript, the 4D language supports the concept of [truthy and falsy values](#truthy-and-falsy), which in use in [short-cicrcuit operators](#short-circuit-operators).

## 用語

The 4D language supports **binary** and **ternary** operators:

- binary operators operate on two targets (such as `2 + 3`) and appear in between their two targets.
- 三項演算子は 3つの対象に対して演算をおこないます。 Like C, 4D has only one ternary operator, the [ternary conditional operator](#ternary-operator) (`a ? b : c`).

演算子が影響を与える対象はオペランド (被演算子) と呼ばれます。 In the expression `1 + 2`, the + symbol is a binary operator and its two operands are the values 1 and 2.

## 代入

The **assignment operator** (`a:=b`) initializes or updates the value of `a` with the value of `b`:

```4d
$myNumber:=3 //assigns 3 to MyNumber variable  
$myDate:=!2018/01/21! //assigns a date literal
$myLength:=Length("Acme") //assigns the result of the command (4) to $myLength
$col:=New collection //$col is initialized with an empty collection
```

> Do NOT confuse the assignment operator `:=` with the equality comparison operator `=`. A different assignment operator (and not `=`) was deliberately chosen to avoid issues and confusion which often occur with == or === in other programming languages. このような間違いはコンパイラーにとっても発見しにくく、時間を消耗するトラブルシューティングのもとです。

## 基本演算子

Operator results depend on the **data types** they are applied to. 4D supports different operators on scalar data types. 詳細は、各データ型の項にて説明されています:

- [**Logical operators**](dt_boolean.md#logical-operators) (on **boolean** expressions)
- [**Date operators**](dt_date.md#date-operators)
- [**Time operators**](dt_time.md#time-operators)
- [**Number operators**](dt_number.md#number-operators)
- [**Bitwise operators**](dt_number.md#bitwise-operators) (on **long integer** expressions)
- [**Picture operators**](dt_picture.md#picture-operators)
- [**Pointer operators**](dt_pointer.md#pointer-operators)
- [**String operators**](dt_string.md#string-operators)
- [**Null operators**](dt_null_undefined.md#null-operators)
- [**Undefined operators**](dt_null_undefined.md#undefined-operators)

## 複合代入演算子

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R4 | 追加 |

</details>

4D provides **compound assignment operators** that combine assignment with another operation. One example is the addition assignment operator (`+=`):

```4d
$a:=1 
$a+=2 // $a=3
```

次の複合代入演算子がサポートされています:

| 演算子                         | シンタックス             | 代入される型  | 例題                                             |
| --------------------------- | ------------------ | ------- | ---------------------------------------------- |
| 加算 (足し算) | Text += Text       | Text    | `$t+=" World"  //$t:=$t+" World"`              |
|                             | Number += Number   | Number  | `$n+=5 //$n:=$n+5`                             |
|                             | Date += Number     | 日付      | `$d+=5 //$d:=$d+5`                             |
|                             | Time += Time       | 時間      | `$t1+=$t2 //$t1:=$t1+$t2`                      |
|                             | Time += Number     | Number  | `$t1+=5 //$t1:=$t1+5`                          |
|                             | Picture += Picture | Picture | `$p1+=$p2 //$p1:=$p1+$p2 ($p1 の右に $p2 を追加します)` |
|                             | Picture += Number  | Picture | `$p1+=5 //$p1:=$p1+5 ($p1 を 5ピクセル右に移動します)`     |
| 減算 (引き算) | Number -= Number   | Number  | `$n-=5 //$n:=$n-5`                             |
|                             | Date -= Number     | 日付      | `$d-=5 //$d:=$d-5`                             |
|                             | Time -= Time       | 時間      | `$t1-=$t2 //$t1:=$t1-$t2`                      |
|                             | Time -= Number     | Number  | `$t1-=5 //$t1:=$t1-5`                          |
|                             | Picture -= Number  | Picture | `$p1-=5 //$p1:=$p1-5 ($p1 を 5ピクセル左に移動します)`     |
| 除算 (割り算) | Number /= Number   | Number  | `$n/=5 //$n:=$n/5`                             |
|                             | Time /= Time       | 時間      | `$t1/=$t2 //$t1:=$t1/$t2`                      |
|                             | Time /= Number     | Number  | `$t1/=5 //$t1:=$t1/5`                          |
|                             | Picture /= Picture | Picture | `$p1/=$p2 //$p1:=$p1/$p2 ($p1 の下に $p2 を追加します)` |
|                             | Picture /= Number  | Picture | `$p1/=5 //$p1:=$p1/5 ($p1 を 5ピクセル垂直に移動します)`    |
| 乗算 (かけ算) | Text \*= Number    | Text    | `$t*="abc"  //$t:=$t*"abc"`                    |
|                             | Number \*= Number  | Number  | `$n*=5 //$n:=$n*5`                             |
|                             | Time \*= Time      | 時間      | `$t1*=$t2 //$t1:=$t1*$t2`                      |
|                             | Time \*= Number    | Number  | `$t1*=5 //$t1:=$t1*5`                          |
|                             | Picture \*= Number | Picture | `$p1*=5 //$p1:=$p1*5 ($p1 を 5倍にリサイズします)`       |

These operators apply on any [assignable expressions](quick-tour.md#assignable-vs-non-assignable-expressions) (except pictures as object properties or collection elements).

The operation "source `operator` value" is not strictly equivalent to "source := source `operator` value" because the expression designating the source (variable, field, object property, collection element) is only evaluated once. For example, in such expression as `getPointer()->+=1` the `getPointer` method is called only once.

> [Character indexing in text](dt_string.md#character-reference-symbols) and [byte indexing in blob](dt_blob.md#accessing-a-scalar-blobs-bytes) do not support these operators.

#### 例題

```4d
// Addition
$x:=2
$x+=5 //$x=7

$t:="Hello" 
$t+=" World" //$t="Hello World" 

$d:=!2000-11-10!
$d+=10 //$d=!2000-11-20!

// Subtraction
$x1:=10
$x1-=5 //$x1=5

$d1:=!2000-11-10!
$d1-=10 // $d1=!2000-10-31!

// Division
$x3:=10
$x3/=2 // $x3=5


// Multiplication
$x2:=10
$x2*=5 // $x2=10

$t2:="Hello" 
$t2*=2 // $t2="HelloHello"

```

## 短絡演算子

The **&&** and **||** operators are **short circuit operators**. 短絡演算子とは、必ずしもすべてのオペランドを評価しない演算子のことです。

The difference with the single [**&** and **|** boolean operators](dt_boolean.md#logical-operators) is that the short-circuit operators **&&** and **||** don't return a boolean value. They evaluate expressions as [truthy or falsy](#truthy-and-falsy), then return one of the expressions.

### AND 短絡演算子 (&&)

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R4 | 追加 |

</details>

ルールは以下の通りです。

Given `Expr1 && Expr2`:

The short-circuit AND operator evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters; if all values are [truthy](#truthy-and-falsy), the value of the last operand is returned.

The following table summarizes the different cases for the **&&** operator:

| Expr1  | Expr2  | 返される値 |
| ------ | ------ | ----- |
| truthy | truthy | Expr2 |
| truthy | falsy  | Expr2 |
| falsy  | truthy | Expr1 |
| falsy  | falsy  | Expr1 |

#### 例題 1

```4d
var $v : Variant

$v:= "Hello" && "World" //"World"
$v:=False && 0 // False
$v:=0 && False // False
$v:=5 && !00-00-00! // 00/00/00
$v := 5 && 10 && "hello" //"hello"
```

#### 例題 2

オンラインストアで、税率が適用される商品とされない商品があるとします。

税金を計算するには、価格に税率をかけますが、税率は指定されていない場合があります。

そこで、次のように書くことができます:

```4d
var $tax : Variant

$tax:=$item.taxRate && ($item.price*$item.taxRate)
```

`$tax` will be NULL if taxRate is NULL (or undefined), otherwise it will store the result of the calculation.

#### 例題 3

短絡演算子は、次のようなテストに有効です:

```4d
If(($myObject#Null) && ($myObject.value>10))
	//code
End if
```

もし $myObject が Null であれば、第2引数は実行されないため、エラーは発生しません。

### OR 短絡演算子 (||)

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R4 | 追加 |

</details>

|| 演算子は、指定されたオペランドのうち 1つの値を返します。 式は左から右に評価され、以下のルールに基づいて "短絡" 評価の可能性をテストされます。

Given `Expr1 || Expr2`:

If Expr1 is [truthy](#truthy-and-falsy), Expr2 is not evaluated and the calculation returns Expr1.

If Expr1 is [falsy](#truthy-and-falsy), the calculation returns Expr2.

The following table summarizes the different cases and the value returned for the **||** operator:

| Expr1  | Expr2  | 返される値 |
| ------ | ------ | ----- |
| truthy | truthy | Expr1 |
| truthy | falsy  | Expr1 |
| falsy  | truthy | Expr2 |
| falsy  | falsy  | Expr2 |

#### 例題 1

Employee というテーブルがあるとします。 従業員には電話番号を入力している人と入力していない人がいます。 This means that `$emp.phone` could be NULL, and you cannot assign NULL to a Text variable. そこで、次のように書くことができます:

```4d
var $phone : Text

$phone:=$emp.phone || "n/a"
```

In which case `$phone` will store either a phone number or the "n/a" string.

#### 例題 2

Given a table called Person with a _name_ field, as well as a _maiden name_ field for married women.

次の例は、旧姓データがあれば変数に格納し、なければその人の名前を変数に格納します。

```4d
var $name: Text

$name:=$person.maidenName || $person.name
```

### 優先順位

The `&&` and `||` operators have the same precedence as the logical operators `&` and `|`, and are evaluated left to right.

This means that `a || b && c` is evaluated as `(a || b) && c`.

## 三項演算子

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R4 | 追加 |

</details>

三項演算子を使うと、条件式を 1行で書くことができます。 For example, it can replace a full sequence of [If…Else](flow-control.md#ifelseend-if) statements.

三項演算子は 3つのオペランドを次の順序で受け取ります:

- 条件とクエスチョンマーク (?)
- an expression to execute if the condition is [truthy](#truthy-and-falsy), followed by a colon (:)
- an expression to execute if the condition is [falsy](#truthy-and-falsy)

### シンタックス

シンタックスは次のとおりです:

`条件 ? truthy時の式 : falsy時の式`

> Since the [token syntax](https://doc.4d.com/4Dv19/4D/19.5/Using-tokens-in-formulas.300-6136716.en.html) uses colons, we recommend inserting a space after the colon `:` or enclosing tokens using parentheses to avoid any conflicts.

### 例題

#### 単純な例

```4d
var $age : Integer
var $beverage : Text

$age:=26
$beverage:=($age>=21) ? "Beer" : "Juice"

ALERT($beverage) // "Beer"
```

#### テーブルのデータを扱う例

この例では、人のフルネームを変数に格納し、ファーストネームやラストネームが指定されていないケースに対応します:

```4d
var $fullname : Text

// If one of the names is missing, store the one that exists, otherwise store an empty string
$fullname:=($person.firstname && $person.lastname) ? ($person.firstname+" "+$person.lastname) : ($person.lastname || $person.firstname) || ""
```

## Truthy と Falsy

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R4 | 追加 |

</details>

As well as a type, each value also has an inherent Boolean value, generally known as either **truthy** or **falsy**.

> **truthy** and **falsy** values are only evaluated by [short-circuit](#short-circuit-operators) and [ternary](#ternary-operator) operators.

The following values are **falsy**:

- false
- Null
- undefined
- Null オブジェクト
- Null コレクション
- Null ポインター
- Null ピクチャー
- Null 日付 !00-00-00!
- "" - 空の文字列
- [] - 空のコレクション
- {} - 空のオブジェクト

All other values are considered **truthy**, including:

- 0 - 数値のゼロ (整数かどうかを問わず)

In 4D, **truthy** and **falsy** evaluation reflects the **usability** of a value, which means that a truthy value exists and can be processed by the code without generating errors or unexpected results. The rationale behind this is to provide a convenient way to handle _undefined_ and _null_ values in objects and collections, so that a reduced number of [If…Else](flow-control.md#ifelseend-if) statements are necessary to avoid runtime errors.

For example, when you use a [short-circuit OR operator](#short-circuit-or-operator-):

```4d
$value:=$object.value || $defaultValue
```

... you get the default value whenever _$object_ does not contain the `value` property OR when it is _null_. つまり、この演算子は特定の値ではなく、その値の存在や使用性をチェックするのです。 Note that because the numerical value 0 exists and is usable, it is not treated specially, thus it is **truthy**.

Regarding values representing collections, objects, or strings, "empty" values are considered **falsy**. これは、空の値に遭遇したときに、デフォルト値を割り当てたい場合に便利です。

```4d
$phone:=$emp.phone || "n/a"
```

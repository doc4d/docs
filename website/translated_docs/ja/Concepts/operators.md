---
id: operators
title: 演算子
---

演算子とは、値のチェック・変更・結合に使用する記号または記号のグループです。 日常的に使用されている演算子も多くあります。 例えば、`1 + 2` という式は加算演算子 (プラス記号) を使用し、2つの数値を足し合わせて、3という結果を返します。 = や > などの比較演算子は、2つ以上の値を比較するためのものです。

4Dランゲージでサポートされている演算子は、C や JavaScript など他の言語でも使用されています。 ただし、等号比較演算子 (`=`) との誤用を防ぐため、代入演算子は `:=` となっています。 算術演算子 (+、-、*、/、%...) や、比較演算子 (=、>、>=...) などの [基本演算子](#基本演算子) は、数値のほか、ブール、テキスト、日付、時間、ポインター、ピクチャーのデータ型にも使用可能です。 JavaScript と同様に、4Dランゲージも [truthy (真的) と falsy (偽的)](#truthy-と-falsy) の概念をサポートしており、[短絡演算子](#短絡演算子) で使用されています。


## 用語

4Dランゲージでは、**二項演算子** および **三項演算子** をサポートしています:

- 二項演算子とは、2つの対象に対して演算をおこない、その 2つの対象の間に表示されます (例: 2＋3)。
- 三項演算子は 3つの対象に対して演算をおこないます。 C と同様、4D の三項演算子は 1つしかありません: 三項条件演算子 (a ? b : c</code>) です。

演算子が影響を与える対象はオペランド (被演算子) と呼ばれます。 1 + 2 という式では、+ 記号は二項演算子であり、その 2つのオペランドは値 1 と 2 です。



## 代入

**代入演算子** (`a:=b`) は、`a` の値を `b` の値で初期化、または更新します。

```4d
$myNumber:=3 // MyNumber 変数に 3 を代入します
$myDate:=!2018/01/21! // 日付リテラルを代入します
$myLength:=Length("Acme") // コマンドの結果 (4) を $myLength に代入します
$col:=New collection // $col を空のコレクションで初期化します
```

> 代入演算子 `:=` と等号比較演算子 `=` とを混同しないように注意してください。 `=` とは異なる代入演算子が採用されたのは意図的なことで、他のプログラミング言語で == や === の使用によって度々起こる間違いを避けるためです。 このような間違いはコンパイラーにとっても発見しにくく、時間を消耗するトラブルシューティングのもとです。


## 基本演算子

演算の結果は、オペランドの **データ型** に依存します。4D はスカラーデータ型に対して様々な演算子をサポートしています。 詳細は、各データ型の項にて説明されています:

- [**論理演算子**](dt_boolean.md#論理演算子) (**ブール** 式に使用)
- [**日付演算子**](dt_date.md#date-operators)
- [**時間演算子**](dt_time.md#time-operators)
- [**数値演算子**](dt_number.md#number-operators)
- [**ビットワイズ演算子**](dt_number.md#ビットワイズ演算子) (**倍長整数** 式に使用)
- [**ピクチャー演算子**](dt_picture.md#picture-operators)
- [**ポインター演算子**](dt_pointer.md#pointer-operators)
- [**文字列演算子**](dt_string.md#string-operators)


## 複合代入演算子

4Dでは、代入と演算を組み合わせた **複合代入演算子** をサポートしています。 その一例として、加算代入演算子 (`+=`) があります。

```4d
$a:=1 
$a+=2 // $a=3
```


次の複合代入演算子がサポートされています:

| 演算子      | シンタックス             | 代入される型  | 例題                                             |
| -------- | ------------------ | ------- | ---------------------------------------------- |
| 加算 (足し算) | Text += Text       | Text    | `$t+=" World"  //$t:=$t+" World"`              |
|          | Number += Number   | Number  | `$n+=5 //$n:=$n+5`                             |
|          | Date += Number     | Date    | `$d+=5 //$d:=$d+5`                             |
|          | Time += Time       | Time    | `$t1+=$t2 //$t1:=$t1+$t2`                      |
|          | Time += Number     | Number  | `$t1+=5 //$t1:=$t1+5`                          |
|          | Picture += Picture | Picture | `$p1+=$p2 //$p1:=$p1+$p2 ($p1 の右に $p2 を追加します)` |
|          | Picture += Number  | Picture | `$p1+=5 //$p1:=$p1+5 ($p1 を 5ピクセル右に移動します)`     |
| 減算 (引き算) | Number -= Number   | Number  | `$n-=5 //$n:=$n-5`                             |
|          | Date -= Number     | Date    | `$d-=5 //$d:=$d-5`                             |
|          | Time -= Time       | Time    | `$t1-=$t2 //$t1:=$t1-$t2`                      |
|          | Time -= Number     | Number  | `$t1-=5 //$t1:=$t1-5`                          |
|          | Picture -= Number  | Picture | `$p1-=5 //$p1:=$p1-5 ($p1 を 5ピクセル左に移動します)`     |
| 除算 (割り算) | Number /= Number   | Number  | `$n/=5 //$n:=$n/5`                             |
|          | Time /= Time       | Time    | `$t1/=$t2 //$t1:=$t1/$t2`                      |
|          | Time /= Number     | Number  | `$t1/=5 //$t1:=$t1/5`                          |
|          | Picture /= Picture | Picture | `$p1/=$p2 //$p1:=$p1/$p2 ($p1 の下に $p2 を追加します)` |
|          | Picture /= Number  | Picture | `$p1/=5 //$p1:=$p1/5 ($p1 を 5ピクセル垂直に移動します)`    |
| 乗算 (かけ算) | Text *= Number     | Text    | `$t*="abc"  //$t:=$t*"abc"`                    |
|          | Number *= Number   | Number  | `$n*=5 //$n:=$n*5`                             |
|          | Time *= Time       | Time    | `$t1*=$t2 //$t1:=$t1*$t2`                      |
|          | Time *= Number     | Number  | `$t1*=5 //$t1:=$t1*5`                          |
|          | Picture *= Number  | Picture | `$p1*=5 //$p1:=$p1*5 ($p1 を 5倍にリサイズします)`       |

これらの演算子は、あらゆる [代入可能な式](quick-tour.md#代入可-vs-代入不可の式) に適用できます (オブジェクトのプロパティやコレクション要素としてのピクチャーを除く)。

"代入先 複合代入演算子 値" と "代入先 := 代入先 演算子 値" は、厳密には等価ではありません。なぜなら、前者の場合、代入先 (変数・フィールド・オブジェクトプロパティ・コレクション要素) は一度しか評価されないからです。 たとえば、`getPointer()->+=1` のような式では、`getPointer` メソッドは一度だけ呼び出されます。

> [テキストの文字インデックス](dt_string.md#文字参照記号) および [BLOB のバイトインデックス](dt_blob.md#スカラーBLOB-のバイトへのアクセス) では、これらの演算子はサポートされません。
#### 例題

```4d
// 加算
$x:=2
$x+=5 //$x=7

$t:="Hello" 
$t+=" World" //$t="Hello World" 

$d:=!2000-11-10!
$d+=10 //$d=!2000-11-20!

// 減算
$x1:=10
$x1-=5 //$x1=5

$d1:=!2000-11-10!
$d1-=10 // $d1=!2000-10-31!

// 除算
$x3:=10
$x3/=2 // $x3=5


// 乗算
$x2:=10
$x2*=5 // $x2=10

$t2:="Hello" 
$t2*=2 // $t2="HelloHello"

```




## 短絡演算子

演算子 **&&** と **||** は、短絡演算子です。 短絡演算子とは、必ずしもすべてのオペランドを評価しない演算子のことです。

[**&** や **|** 論理演算子](dt_boolean.md#論理演算子) と異なる点は、短絡演算子の **&&** と **||** はブール値を返さないことです。 これらは式を [truthy (真的) または falsy (偽的)](#truthy-と-falsy) で評価し、どちらかの式を返します。

### AND 短絡演算子 (&&)

The rule is as follows:

Given `Expr1 && Expr2`:

The short-circuit AND operator evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters; if all values are [truthy](#truthy-and-falsy), the value of the last operand is returned.

The following table summarizes the different cases for the **&&** operator:

| Expr1  | Expr2  | Value returned |
| ------ | ------ | -------------- |
| truthy | truthy | Expr2          |
| truthy | falsy  | Expr2          |
| falsy  | truthy | Expr1          |
| falsy  | falsy  | Expr1          |

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

Say you have an online store, and some products have a tax rate applied, and others don't.

To calculate the tax, you multiply the price by the tax rate, which may not have been specified.

So you can write this:

```4d
var $tax : Variant

$tax:=$item.taxRate && ($item.price*$item.taxRate)
```

`$tax` will be NULL if taxRate is NULL (or undefined), otherwise it will store the result of the calculation.

#### 例題 3

Short-circuit operators are useful in tests such as:

```4d
If(($myObject#Null) && ($myObject.value>10))
    //code
End if
```

If $myObject is Null, the second argument is not executed, thus no error is thrown.

### OR 短絡演算子 (||)

The || operator returns the value of one of the specified operands. The expression is evaluated left to right and tested for possible "short-circuit" evaluation using the following rule:

Given `Expr1 || Expr2`:

If Expr1 is [truthy](#truthy-and-falsy), Expr2 is not evaluated and the calculation returns Expr1.

If Expr1 is [falsy](#truthy-and-falsy), the calculation returns Expr2.

The following table summarizes the different cases and the value returned for the **||** operator:

| Expr1  | Expr2  | Value returned |
| ------ | ------ | -------------- |
| truthy | truthy | Expr1          |
| truthy | falsy  | Expr1          |
| falsy  | truthy | Expr2          |
| falsy  | falsy  | Expr2          |

#### 例題 1

Say you have a table called Employee. Some employees have entered a phone number, and others haven't. This means that `$emp.phone` could be NULL, and you cannot assign NULL to a Text variable. But you can write the following:

```4d
var $phone : Text

$phone:=$emp.phone || "n/a"
```

In which case `$phone` will store either a phone number or the "n/a" string.

#### 例題 2

Given a table called Person with a *name* field, as well as a *maiden name* field for married women.

The following example checks if there is a maiden name and stores it in a variable, otherwise it simply stores the person's name:

```4d
var $name: Text

$name:=$person.maidenName || $person.name
```

### 優先順位

The `&&` and `||` operators have the same precedence as the logical operators `&` and `|`, and are evaluated left to right.

This means that `a || b && c` is evaluated as `(a || b) && c`.


## Ternary operator

The ternary conditional operator allows you to write one-line conditional expressions. For example, it can replace a full sequence of [If…Else](./cf_branching.md#ifelseend-if) statements.

It takes three operands in the following order:

* a condition followed by a question mark (?)
* an expression to execute if the condition is [truthy](#truthy-and-falsy), followed by a colon (:)
* an expression to execute if the condition is [falsy](#truthy-and-falsy)

### シンタックス

シンタックスは次のとおりです:

`condition ? exprIfTruthy : exprIfFalsy`

> Since the [token syntax](https://doc.4d.com/4Dv19R3/4D/19-R3/Using-tokens-in-formulas.300-5583062.en.html) uses colons, we recommend inserting a space after the colon `:` or enclosing tokens using parentheses to avoid any conflicts.

### 例題

#### A simple example

```4d
var $age : Integer
var $beverage : Text

$age:=26
$beverage:=($age>=21) ? "Beer" : "Juice"

ALERT($beverage) // "Beer"
```

#### Handling data from a table

This example stores a person's full name in a variable, and handles the case when no first name or last name has been specified:

```4d
var $fullname : Text

// If one of the names is missing, store the one that exists, otherwise store an empty string.
$fullname:=($person.firstname && $person.lastname) ? ($person.firstname+" "+$person.lastname) : ($person.lastname || $person.firstname) || ""
```

## Truthy と Falsy

As well as a type, each value also has an inherent Boolean value, generally known as either **truthy** or **falsy**.

The following values are **falsy**:

* false
* Null
* 未定義
* Null object
* Null collection
* Null pointer
* Null picture
* Null date !00-00-00!
* "" - Empty strings
* [] - Empty collections
* {} - Empty objects

All other values are considered **truthy**, including:

* 0 - numeric zero (Integer or otherwise)

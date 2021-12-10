---
id: boolean
title: ブール
---

ブールのフィールド、変数、式は、true（真）またはfalse（偽）のいずれかになります。

## ブール関数

4Dにはブール演算に使用することのできる、ブール関数があります: `True`, `False`, `Not`。 詳細については、これらのコマンドの説明を参照ください。

### 例題

ボタンの値に基づいて、ブール変数に値を設定します。 myButton ボタンがクリックされたら myBoolean に true を、クリックされていなければ false を設定します。 ボタンがクリックされるとボタン変数の値は1になります。

```4d
 If(myButton=1) // ボタンがクリックされたら
    myBoolean:=True // myBoolean を true に設定
 Else // ボタンがクリックされていなければ
    myBoolean:=False // myBoolean を false に設定
 End if
```

上のコードは以下のように一行で書くこともできます。

```4d
myBoolean:=(myButton=1)
```

## 論理演算子

4Dは、ブール式に対して機能する次の論理演算子をサポートしています: 論理積 (AND) と論理和 (OR)。 論理積 (AND) は両方の式が true である場合に true を返します。 論理和 (OR) は少なくとも一方の式が true の時に true を返します。 次の表に、論理演算子を示します:

| 演算子 | シンタックス         | 戻り値 | 式                            | 値     |
| --- | -------------- | --- | ---------------------------- | ----- |
| AND | ブール & ブール      | ブール | ("A" = "A") & (15 # 3)       | True  |
|     |                |     | ("A" = "B") & (15 # 3)       | False |
|     |                |     | ("A" = "B") & (15 = 3)       | False |
| OR  | ブール &#124; ブール | ブール | ("A" = "A") &#124; (15 # 3)  | True  |
|     |                |     | ("A" = "B") &#124;  (15 # 3) | True  |
|     |                |     | ("A" = "B") &#124;  (15 = 3) | False |

論理演算子 (AND) の真偽表を示します:

| Expr1 | Expr2 | Expr1 & Expr2 |
| ----- | ----- | ------------- |
| True  | True  | True          |
| True  | False | False         |
| False | True  | False         |
| False | False | False         |

論理演算子 (OR) の真偽表を示します:

| Expr1 | Expr2 | Expr1 &#124; Expr2 |
| ----- | ----- | ------------------ |
| True  | True  | True               |
| True  | False | True               |
| False | True  | True               |
| False | False | False              |

**Tip:** 式1と式2の排他的結合子演算を実行する必要がある場合、次の評価式を使用します:

```4d
 (Expr1|Expr2) & Not(Expr1 & Expr2)  
```

## Short-circuit operators

The **&&** and **||** operators are **short circuit operators**. A short circuit operator is one that doesn't necessarily evaluate all of its operands.

The difference with the single **&** and **|** operators is that the short-circuit operators **&&** and **||** don't return a boolean value. They evaluate expressions as [truthy or falsy](#truthy-and-falsy), then return one of the expressions.

### Short-circuit AND operator (&&)

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

### Short-circuit OR operator (||)

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

The ternary operator allows you to write one-line conditional expressions. For example, it can replace a full sequence of [If…Else](./cf_branching.md#ifelseend-if) statements.

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

## Truthy and falsy

As well as a type, each value also has an inherent Boolean value, generally known as either **truthy** or **falsy**.

The following values are **falsy** :

* false
* Null
* 未定義
* Null object
* Null collection
* Null pointer
* Null picture
* Null date !00-00-00!

All other values are considered **truthy**, including:

* 0 - numeric zero (Integer or otherwise)
* "" - Empty strings
* [] - Empty collections
* {} - Empty arrays
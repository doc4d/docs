---
id: Boolean
title: Boolean
---

Ein Datenfeld, Ausdruck oder eine Variable vom Typ Boolean kann entweder WAHR oder FALSCH sein.

## Boolean Funktionen

4D bietet die Boolean Funktionen `True`, `False` und `Not`. Weitere Informationen dazu finden Sie in der Beschreibung dieser Befehle.

### Beispiel

Dieses Beispiel setzt die Boolean Variable je nach Wert der Schaltfläche. Sie gibt Wahr zurück, wenn die Schaltfläche myButton angeklickt wurde und Falsch, wenn sie nicht angeklickt wurde. Ist die Schaltfläche angeklickt, hat die Variable für die Schaltfläche den Wert 1.

```4d
 If(myButton=1) //If the button was clicked
    myBoolean:=True //myBoolean is set to True
 Else //If the button was not clicked,
    myBoolean:=False //myBoolean is set to False
 End if
```

Obiges Beispiel lässt sich auch in einer Zeile zusammenfassen.

```4d
myBoolean:=(myButton=1)
```

## Logische Operatoren

4D unterstützt für Boolean Ausdrücke die beiden logischen Operatoren UND und ODER. Ein logisches UND ergibt WAHR, wenn beide Ausdrücke wahr sind. Ein logisches ODER ergibt WAHR, wenn mindestens einer der Ausdrücke wahr ist. Die folgende Übersicht erläutert die logischen Operatoren:

| Operation | Syntax                 | Ergibt  | Ausdruck                    | Wert   |
| --------- | ---------------------- | ------- | --------------------------- | ------ |
| UND       | Boolean & Boolean      | Boolean | ("A" = "A") & (15 # 3)      | Wahr   |
|           |                        |         | ("A" = "B") & (15 # 3)      | Falsch |
|           |                        |         | ("A" = "B") & (15 = 3)      | Falsch |
| ODER      | Boolean &#124; Boolean | Boolean | ("A" = "A") &#124; (15 # 3) | Wahr   |
|           |                        |         | ("A" = "B") &#124; (15 # 3) | Wahr   |
|           |                        |         | ("A" = "B") &#124; (15 # 3) | Falsch |

Für das logische UND gilt:

| Expr1  | Expr2  | Expr1 & Expr2 |
| ------ | ------ | ------------- |
| Wahr   | Wahr   | Wahr          |
| Wahr   | Falsch | Falsch        |
| Falsch | Wahr   | Falsch        |
| Falsch | Falsch | Falsch        |

Für das logische ODER gilt:

| Expr1  | Expr2  | Expr1 &#124; Expr2 |
| ------ | ------ | ------------------ |
| Wahr   | Wahr   | Wahr               |
| Wahr   | Falsch | Wahr               |
| Falsch | Wahr   | Wahr               |
| Falsch | Falsch | Falsch             |

**Tipp:** Zum Berechnen eines ausschließenden ODER zwischen Expr1 and Expr2 schreiben Sie:

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

#### Beispiel 1

```4d
var $v : Variant

$v:= "Hello" && "World" //"World"
$v:=False && 0 // False
$v:=0 && False // False
$v:=5 && !00-00-00! // 00/00/00
$v := 5 && 10 && "hello" //"hello"
```

#### Beispiel 2

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

#### Beispiel 1

Say you have a table called Employee. Some employees have entered a phone number, and others haven't. This means that `$emp.phone` could be NULL, and you cannot assign NULL to a Text variable. But you can write the following:

```4d
var $phone : Text

$phone:=$emp.phone || "n/a"
```

In which case `$phone` will store either a phone number or the "n/a" string.

#### Beispiel 2

Given a table called Person with a *name* field, as well as a *maiden name* field for married women.

The following example checks if there is a maiden name and stores it in a variable, otherwise it simply stores the person's name:

```4d
var $name: Text

$name:=$person.maidenName || $person.name
```

### Rangfolge

The `&&` and `||` operators have the same precedence as the logical operators `&` and `|`, and are evaluated left to right.

This means that `a || b && c` is evaluated as `(a || b) && c`.

## Ternary operator

The ternary operator allows you to write one-line conditional expressions. For example, it can replace a full sequence of [If…Else](./cf_branching.md#ifelseend-if) statements.

It takes three operands in the following order:

* a condition followed by a question mark (?)
* an expression to execute if the condition is [truthy](#truthy-and-falsy), followed by a colon (:)
* an expression to execute if the condition is [falsy](#truthy-and-falsy)

### Syntax

The syntax is as follows:

`condition ? exprIfTruthy : exprIfFalsy`

### Beispiele

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

### Syntax recommendation

Since the [tokenization system](https://doc.4d.com/4Dv19R3/4D/19-R3/Using-tokens-in-formulas.300-5583062.en.html) uses colons in its syntax, we recommend inserting a space after the colon `:` or enclosing tokens using parentheses to avoid conflicts:

```4d
B42:=1
C10:=2
$value:=($size>1000) ? B42:C10  // Wrong syntax. Becomes $value:=($size>1000) ? String
$value:=($size>1000) ? B42: C10  // OK
```

## Truthy and falsy

As well as a type, each value also has an inherent Boolean value, generally known as either **truthy** or **falsy**.

The following values are **falsy** :

* false
* Null
* Undefiniert
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
---
id: operators
title: Operators
---

An operator is a symbol or several symbols that you use to check, change, or combine values. You are already familiar with many operators. For example, 1 + 2 uses the addition (or plus sign) operator to add two numbers together, and the result is 3. Comparison operators, like = or >, let you compare to values. 

The 4D language supports the operators you may already know from other languages like C or JavaScript.

 and improves several capabilities to eliminate common coding errors. The assignment operator (=) doesn’t return a value, to prevent it from being mistakenly used when the equal to operator (==) is intended. Arithmetic operators (+, -, *, /, % and so forth) detect and disallow value overflow, to avoid unexpected results when working with numbers that become larger or smaller than the allowed value range of the type that stores them. You can opt in to value overflow behavior by using Swift’s overflow operators, as described in Overflow Operators.

Swift also provides range operators that aren’t found in C, such as a..<b and a...b, as a shortcut for expressing a range of values.

This chapter describes the common operators in Swift. Advanced Operators covers Swift’s advanced operators, and describes how to define your own custom operators and implement the standard operators for your own custom types.

Terminology
Operators are unary, binary, or ternary:

Unary operators operate on a single target (such as -a). Unary prefix operators appear immediately before their target (such as !b), and unary postfix operators appear immediately after their target (such as c!).
Binary operators operate on two targets (such as 2 + 3) and are infix because they appear in between their two targets.
Ternary operators operate on three targets. Like C, Swift has only one ternary operator, the ternary conditional operator (a ? b : c).
The values that operators affect are operands. In the expression 1 + 2, the + symbol is a binary operator and its two operands are the values 1 and 2.
## Boolean functions

4D provides the Boolean functions `True`, `False`, and `Not` in the dedicated **Boolean** theme. For more information, see the descriptions of these commands

### Example

This example sets a Boolean variable based on the value of a button. It returns True in myBoolean if the myButton button was clicked and False if the button was not clicked. When a button is clicked, the button variable is set to 1.

```4d
 If(myButton=1) //If the button was clicked
    myBoolean:=True //myBoolean is set to True
 Else //If the button was not clicked,
    myBoolean:=False //myBoolean is set to False
 End if
```

The previous example can be simplified into one line.

```4d
myBoolean:=(myButton=1)
```

## Logical operators

4D supports two logical operators that work on Boolean expressions: conjunction (AND) and inclusive disjunction (OR). A logical AND returns TRUE if both expressions are TRUE. A logical OR returns TRUE if at least one of the expressions is TRUE. The following table shows the logical operators:

|Operation	|Syntax	|Returns	|Expression	|Value|
|---|---|---|---|---|
|AND|Boolean & Boolean	|Boolean	|("A" = "A") & (15 # 3)	|True|
||||("A" = "B") & (15 # 3)	|False|
||||("A" = "B") & (15 = 3)	|False|
|OR	|Boolean  &#124; Boolean	|Boolean	|("A" = "A") &#124; (15 # 3)	|True|
||||("A" = "B") &#124;  (15 # 3)	|True|
||||("A" = "B") &#124;  (15 = 3)	|False|

The following is the truth table for the AND logical operator:

|Expr1	|Expr2	|Expr1 & Expr2|  
|---|---|---|
|True	|True	|True|
|True	|False	|False|
|False	|True	|False|
|False	|False	|False|

The following is the truth table for the OR logical operator:

|Expr1	|Expr2	|Expr1 &#124; Expr2|
|---|---|---|
|True	|True	|True|
|True	|False	|True|
|False	|True	|True|
|False	|False	|False|

**Tip:** If you need to calculate the exclusive disjunction between Expr1 and Expr2, evaluate:

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

|Expr1	|Expr2	|  Value returned
|---|---|---|
|truthy	|truthy	|Expr2|
|truthy	|falsy	|Expr2|
|falsy	|truthy	|Expr1|
|falsy	|falsy	|Expr1|

#### Example 1 

```4d
var $v : Variant

$v:= "Hello" && "World" //"World"
$v:=False && 0 // False
$v:=0 && False // False
$v:=5 && !00-00-00! // 00/00/00
$v := 5 && 10 && "hello" //"hello"
```

#### Example 2

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

|Expr1	|Expr2	|  Value returned
|---|---|---|
|truthy	|truthy	|Expr1|
|truthy	|falsy	|Expr1|
|falsy	|truthy	|Expr2|
|falsy	|falsy	|Expr2|

#### Example 1

Say you have a table called Employee. Some employees have entered a phone number, and others haven't. This means that `$emp.phone` could be NULL, and you cannot assign NULL to a Text variable. But you can write the following:

```4d
var $phone : Text

$phone:=$emp.phone || "n/a"
```

In which case `$phone` will store either a phone number or the "n/a" string. 

#### Example 2

Given a table called Person with a *name* field, as well as a *maiden name* field for married women.

The following example checks if there is a maiden name and stores it in a variable, otherwise it simply stores the person's name:

```4d
var $name: Text

$name:=$person.maidenName || $person.name
```

### Precedence

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

> Since the [token syntax](https://doc.4d.com/4Dv19R3/4D/19-R3/Using-tokens-in-formulas.300-5583062.en.html) uses colons, we recommend inserting a space after the colon `:` or enclosing tokens using parentheses to avoid any conflicts.

### Examples

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

The following values are **falsy**:

* false
* Null
* undefined
* Null object
* Null collection
* Null pointer
* Null picture
* Null date !00-00-00!
* "" - Empty strings
* [] - Empty collections
* {} - Empty arrays

All other values are considered **truthy**, including:

* 0 - numeric zero (Integer or otherwise)

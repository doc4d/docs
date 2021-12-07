---
id: boolean
title: Boolean
---

A boolean field, variable or expression can be either TRUE or FALSE.

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

If Expr1 is falsy, the calculation stops without evaluating Expr2, and Expr1 is returned.
If Expr1 is truthy, the calculation returns Expr2.

The following table summarizes the different cases for the **&&** operator:

|Expr1	|Expr2	|  Value returned
|---|---|---|
|Truthy	|Truthy	|Expr2|
|Truthy	|Falsy	|Expr2|
|Falsy	|Truthy	|Expr1|
|Falsy	|Falsy	|Expr1|

#### Example 1 

```4d
var $a : Text
var $b : Text

$a:="Hello"
$b:="World"

ALERT($a && $b); // World
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

The rule is as follows: 

If Expr1 is Falsy, the calculation returns Expr2.

If Expr1 is Truthy, Expr 2 is not evaluated and the calculation returns Expr1.

The following table summarizes the different cases and the value returned for the **||** operator:

|Expr1	|Expr2	|  Value returned
|---|---|---|
|Truthy	|Truthy	|Expr1|
|Truthy	|Falsy	|Expr1|
|Falsy	|Truthy	|Expr2|
|Falsy	|Falsy	|Expr2|

#### Example

Say you have a table called Employee. Some employees have entered a telephone number, and others haven't. This means that `$emp.phone` could be NULL, and you cannot assign NULL to a Text variable. But you can write the following:

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

This means that `a || b && c` is evaluated as `(a || b) && c`

## Ternary operator

The ternary operator allows you to write one-line conditional expressions. For example, it can replace a full sequence of [If…Else](./cf_branching.md#ifelseend-if) statements.

It takes three operands in the following order: 

* a condition followed by a question mark (?)
* an expression to execute if the condition is [truthy](#truthy-and-falsy), followed by a colon (:) 
* the expression to execute if the condition is [falsy](#truthy-and-falsy)

### Syntax 

The syntax is as follows:

`condition ? exprIfTruthy : exprIfFalsy`

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

### Syntax issues and recommendations

#### Variable names 

Since the colon `:` can be used in variable names (even if it is discouraged), we recommend inserting a space after the colon `:`, or enclosing the variable using parentheses if the character that follows the colon `:` is also legit in a variable name:

```4d
a:=1
b:=2
$value:=($size>1000) ? a:b  // Wrong syntax. Here 'a:b' is viewed as a variable name.
$value:=($size>1000) ? a: b  // OK
```

#### Tokenization

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
* undefined
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
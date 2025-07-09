---
id: num
title: Num
slug: /commands/num
displayed_sidebar: docs
---

<!--REF #_command_.Num.Syntax-->**Num** ( *expression* {; *separator*} ) : Real<br/>**Num** ( *expression* ; *base* ) : Text<!-- END REF-->
<!--REF #_command_.Num.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| expression | Text, Boolean, Integer | &#8594;  | String for which to return the numeric form, or Boolean to return 0 or 1, or Numeric expression |
| separator | Text | &#8594;  | Decimal separator |
| base | Integer | &#8594;  | Value between 2 and 36 that represents the radix |
| Function result | Real | &#8592; | Numeric form of the expression parameter |

<!-- END REF-->


<details><summary>History</summary>

|Release|Changes|
|---|---|
|21|Support of *base* parameter|

</details>


## Description 

<!--REF #_command_.Num.Summary-->The **Num** command returns the numeric form of the String, Boolean or numeric expression you pass in *expression*.<!-- END REF-->

When *expression* is of the string type, you can use the *separator* parameter or the *base* parameter (see below).


### String Expressions

If *expression* consists only of one or more alphabetic characters, **Num** returns a zero. If *expression* includes alphabetic and numeric characters, the command ignores the alphabetic characters. Thus, it transforms the string "a1b2c3" into the number 123. 

There are three reserved characters that **Num** treats specially: the decimal separator as defined in the system (if the *separator* parameter is not passed), the hyphen “*\-*”, and “*e*” *or* “E”. These characters are interpreted as numeric format characters.

* The decimal separator is interpreted as a decimal place and must appear embedded in a numeric string. By default, the command uses the decimal separator set by the operating system. You can modify this character using the *separator* parameter (see below).
* The hyphen causes the number or exponent to be negative. The hyphen must appear before any negative numeric characters or after the “e” for an exponent. Except for the “e” character, if a hyphen is embedded in a numeric string, the portion of the string after the hyphen is ignored. For example, `Num("123-456")` returns 123, but `Num("-9")` returns -9.
* The e or E causes any numeric characters to its right to be interpreted as the power of an exponent. The “e” must be embedded in a numeric string. Thus, `Num("123e–2")` returns 1.23.  
Note that when the string includes more than one "e", conversion might give different results under macOS and under Windows.

#### *separator* parameter

The *separator* parameter designates a custom decimal separator for evaluating the *expression*. When the string to be evaluated is expressed with a decimal separator different from the system operator, the command returns an incorrect result. The *separator* parameter can be used in this case to obtain a correct evaluation. When this parameter is passed, the command does not take the system decimal separator into account. You can pass one or more characters.

:::note

The [GET SYSTEM FORMAT](../commands-legacy/get-system-format.md) command can be used to find out the current decimal separator as well as several other regional system parameters.

:::

#### *base* parameter

You can pass an optional *base* parameter (integer) to specify the radix of the number expressed as string in *expression*. You can can pass a value between 2 and 36. For example, this syntax allows you to convert hexadecimal strings to numbers. 

If *expression* string evaluates to a decimal number, only the integer part is converted.




### Boolean Expressions  

If you pass a Boolean expression, Num returns 1 if the expression is True; otherwise, it returns *0* (zero).

### Numeric Expressions  

If you pass a numeric expression in the *expression* parameter, Num returns the value passed in the *expression* parameter as is. This can be useful more particularly in the case of generic programming using pointers.

### Undefined Expressions

If *expression* evaluates to undefined, the command returns 0 (zero). This is useful when you expect the result of an expression (e.g. an object attribute) to be a number, even if it can be undefined.

## Example 1 

The following example illustrates how Num works when passed a string argument. Each line assigns a number to the *vResult* variable. The comments describe the results:

```4d
 vResult:=Num("ABCD") // vResult gets 0
 vResult:=Num("A1B2C3") // vResult gets 123
 vResult:=Num("123") // vResult gets 123
 vResult:=Num("123.4") // vResult gets 123.4
 vResult:=Num("–123") // vResult gets –123
 vResult:=Num("–123e2") // vResult gets –12300
```

## Example 2 

Here, *\[Client\]Debt* is compared with *$1000*. The Num command applied to these comparisons returns 1 or 0\. Multiplying 1 or 0 with a string repeats the string once or returns the empty string. As a result, *\[Client\]Risk* gets either “Good” or “Bad”:

```4d
  // If client owes less than 1000, a good risk.
  // If client owes more than 1000, a bad risk.
 [Client]Risk:=("Good"*Num([Client]Debt<1000))+("Bad"*Num([Client]Debt>=1000))
```

## Example 3 

This example compares the results obtained depending on the “current” separator:

```4d
 $thestring:="33,333.33"
 $thenum:=Num($thestring)
  // by default, $thenum equals 33,33333 on a French system
 $thenum:=Num($thestring;".")
  // $thenum will be correctly evaluated regardless of the system;
  // for example, 33 333,33 on a French system
```

## Example 4 

This examples illustrate the use of the *base* parameter:

```4d
$result:=Num("123") // 123 (default base 10)
$result:=Num("123"; 10) // 123 (explicitly specify base 10)
$result:=Num("ff";16) // 255 (lower-case hexadecimal)
$result:=Num("0xFF") // 0
$result:=Num("0xFF";16) // 255
$result:=Num("2";2) // 0
$result:=Num("10.3";16)
// return 16

```


## See also 

[Bool](../commands-legacy/bool.md)  
[GET SYSTEM FORMAT](../commands-legacy/get-system-format.md)  
[String](../commands/string.md)  

## Properties

|  |  |
| --- | --- |
| Command number | 11 |
| Thread safe | &check; |



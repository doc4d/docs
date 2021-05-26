---
id: formulas-and-functions
title: Formulas and Functions
---

## Overview 

A spreadsheet formula is an expression that calculates the value of a cell. All formulas are comprised of operands and operators:

*	**Operators**: see [Operators and values](#operators-and-values)
*	**Operands** are divided into several categories:
	*	values
	*	references to other cells (relatives, absolutes, mixed or by name)
	*	4D variables, fields and functions
	*	4D methods (registered by [VP SET ALLOWED METHODS](method-reference.md#vp-set-allowed-methods)) 
	*	4D formulas (via [VP SET CUSTOM FUNCTIONS](method-reference.md#vp-set-custom-functions))
	*	Spreadsheet functions

To enter a formula:

1.	Select a cell.
2.	Enter = (the equal sign).
3.	Type in the formula and hit the **Enter** key

>You can also create named formulas that can be called via their name. In this case, the formula is entered using the [VP ADD FORMULA NAME](method-reference.md#vp-add-formula-name) command. 

## Operators and values  
 
### Operators by data types  

4D View Pro supports five types of data. For each data type, specific literal values and operators are supported.

|Data types	|Values|	Operators|
|---|---|---|
|[Number](Concepts/dt_number.md)	|1.2<br>1.2 E3<br>1.2E-3<br>10.3x|+ (addition)<br>- (subtraction)<br>* (multiplication)<br>/ (division)<br>^ (exponent, the number of times to multiply a number by itself)<br>% (percentage -- divide the number before the operator by one hundred)|
|[Date](Concepts/dt_date.md)|	10/24/2017	|+ (date + number of days -> date)<br>+ (date + time -> date + time of day)<br>- (date - number of days -> date)<br>- (date - date -> number of days between the two)|
|[Time](Concepts/dt_time.md)|	10:12:10	|Duration operators:<p>+ (addition)<br>- (subtraction)<br>* (duration * number -> duration)<br>/ (duration / number -> duration)|
|[String](Concepts/dt_string.md)|	'Sophie' or "Sophie"	|& (concatenation)|
|[Boolean](Concepts/dt_boolean.md)|	TRUE or FALSE|	-|


### Comparison operators 
 
The following operators can be used with two operands of the same type:

|Operator	|Comparison|
|---|---|
|=	|equal to|
|<>	|different than|
|>	|greater than|
|<	|less than|
|>=	|greater than or equal to|
|<=	|less than or equal to|


### Operator precedence  

List of operators from most to least important:

|Operator|	Description|
|---|---|
|()|	Parenthesis (for grouping)|
|-	|Negate|
|+	|Plus|
|%|	Percent|
|^	|Exponent|
|* and /|	Multiply and divide|
|+ and -|	Add and Subtract|
|&|	Concatenate
|=  > < >= <= <>|	Compare|



### Operand precedence in formulas  

When two or more different operands have the same name, 4D View Pro determines the type of each element according to the following order:

|Priority|	Element type|
|---|---|
|1|	Cell reference|
|2|	Cell name|
|3|	4D View Pro function|
|4|	Project method|
|5|	4D command|
|6|	Variable|




## Cell references 
 
 Formulas often refer to other cells by cell addresses. You can copy these formulas into other cells. For example, the following formula, entered in cell C8, adds the values in the two cells above it and displays the result.
= C6 + C7

This formula refers to cells C6 and C7. That is, 4D View Pro is instructed to refer to these other cells for values to use in the formula.

When you copy or move these formulas to new locations, each cell address in that formula will either change or stay the same, depending on how it is typed.

*	A reference that changes is called a relative reference, and refers to a cell by how far left/right and up/down it is from the cell with the formula.

*	A reference that always points to a particular cell is called an absolute reference.

*	You can also create a mixed reference which always points to a fixed row or column.



### Reference Notation  

If you use only cell coordinates, for example, C5, 4D View Pro interprets the reference as relative. You may make the reference an absolute reference by putting a dollar sign in front of the letter and the number, as in $C$5.

You can mix absolute and relative references by inserting a dollar sign in front of the letter or the number alone, for example, $C5 or C$5. A mixed reference allows you to specify either the row or the column as absolute, while allowing the other portion of the address to refer relatively.

A convenient, fast and accurate way to specify an absolute reference is to name the cell and use that name in place of the cell address. A reference to a named cell is always absolute. You can create or modify named cells or named cell ranges using the `VP ADD RANGE NAME` command.

The following table shows the effect of the different notations:

|Example	|Type of reference	|Description|
|---|---|---|
|C5	|Relative	|Reference is to the relative location of cell C5, depending on the location of the cell in which the reference is first used
|$C$5	|Absolute	|Reference is absolute. Will always refer to cell C5 no matter where it is used.|
|$C5	|Mixed	|Reference is always to column C, but the row reference is relative to the location of the cell in which the reference is first used.|
|C$5	|Mixed	|Reference is always to row 5, but the column reference is relative to the location of the cell in which the reference is first used|
|Cell name	|Absolute	|Reference is absolute. Will always refer to the named cell no matter where the reference is used.|

## Spreadsheet Functions

Spreadsheet functions are used in formulas. See the [list of spreadsheet functions](spreadsheet-function-reference.md) for more details and examples.

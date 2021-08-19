---
id: formulas
title: Formulas and Functions
---
   
## Using Formulas

A spreadsheet formula is an expression that calculates the value of a cell.

### Entering formulas

To enter a formula in a 4D View Pro area:

1.	Select the cell into which you will enter the formula or function.
2.	Enter = (the equal sign).
3.	Type the formula 
	OR
	Click on a cell to enter its reference in the formula
	![](assets/en/ViewPro/formulas.PNG)   
	OR  
	Type the first letter of the function to enter. A pop-up menu listing the availables functions and references appears, allowing you to select the desired elements:
	![](assets/en/ViewPro/formula2.PNG)   

4. Hit the **Enter** key.   

You can also create named formulas that can be called via their name. To do so, enter these formulas using the [VP ADD FORMULA NAME](method-list.md#vp-add-formula-name) command. 

### Operators and Operands

All formulas have operands and operators:

*	**Operators**: see [Values and operators](#values-and-operators) below.
*	**Operands** are divided into several categories:
	*	[values](#values-and-operators) of 5 types
	*	[references to other cells](#cell-references) (relatives, absolutes, mixed or by name)
	*	[4D fields](#field-references) declared in the virtual structure 
	*	built-in [spreadsheet functions](#using-functions) 
	*	[4D functions](#4d-functions) based upon 4D formulas registered by [VP SET CUSTOM FUNCTIONS](method-list.md#vp-set-custom-functions) (recommended) or upon 4D methods registered by [VP SET ALLOWED METHODS](method-list.md#vp-set-allowed-methods).
 
## Values and operators

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


## Field references
  

4D View Pro allows you to use references to 4D database fields in your formulas. When displaying a 4D View Pro area, a field reference is replaced by the field value in the current record. A dynamic link is kept between the area and the 4D data: if the value of the field is changed, the 4D View Pro area will use the new value.

For security reasons, only fields and tables that have been included in the database "virtual structure" (i.e., renamed using `SET TABLE TITLES` and `SET FIELD TITLES` commands and the * parameter) can be called in 4D View Pro areas.

### Requirements  

To be called in a 4D View Pro formula, a 4D field must comply to the following requirements:

*	the field belongs to the virtual structure of the database, i.e. it must be declared through the `SET TABLE TITLES` and/or `SET FIELD TITLES` commands with the \* parameter (see example),

*	table and field names must be ECMA compliant (see [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6)),

*	the field type must be supported by 4D View Pro (see below).

An error is returned in the 4D View Pro cell if the formula calls a field which is not compliant.

### Supported field types  

4D View Pro supports references to fields of the following types:

|Type	|Value type in 4D View Pro|
|---|---|
|Alpha, Text|	string|
|Integer, Long integer, Integer 64-bit, Real, Float|	number|
|Date|	JavaScript Date type (hour, minute, sec = 0)|
|Time	|JavaScript Date type (date in base date, i.e., 12/31/1899)|
|Boolean|	bool|
|Picture|	Supported picture types: jpg, png, gif, bmp, svg; other types converted into png. Creates an URI (data:image/png;base64,xxxx) set as background for the 4D View Pro cell where the formula is executed|

### Calling a field in a formula  

To insert a reference to a field in a formula, enter the field with the following syntax:

```4d
TABLENAME_FIELDNAME()
```

For example, if you declared the "Name" field of the "People" table in the virtual structure, you can call the following functions:

```4d
=PEOPLE_NAME()
=LEN(PEOPLE_NAME())
```

>*	Only fields declared in the virtual structure of the database (using `SET TABLE TITLES` and/or `SET FIELD TITLES`) can be used in 4D View Pro formulas. Non declared fields will not be listed in the type-ahead list and calling an invalid field will result in a #NAME error displayed in the cell.
>*	If a field has the same name as an allowed method, it takes priority over the method. 

### Example  

We want to print the name of a person in a 4D View Pro area cell using a 4D field:

1.	Create an "Employee" table with a "L_Name" field:  

![](assets/en/ViewPro/vpFieldMeth1.PNG)


2.	Execute the following code to initialize a virtual structure:
	  
	```4d
	ARRAY TEXT($tableTitles;1)
	ARRAY LONGINT($tableNum;1)
	$tableTitles{1}:="Emp"
	$tableNum{1}:=2
	SET TABLE TITLES($tableTitles;$tableNum;*)
	 
	ARRAY TEXT($fieldTitles;1)
	ARRAY LONGINT($fieldNum;1)
	$fieldTitles{1}:="Name"
	$fieldNum{1}:=2 //last name
	SET FIELD TITLES([Employee];$fieldTitles;$fieldNum;*)
	```

3.	Edit the content of a cell in the 4D View Pro area and enter "=e":
	
![](assets/en/ViewPro/vpFieldMeth2.PNG)


4.	Select EMP_NAME (use the Tab key) and enter the closing ).

![](assets/en/ViewPro/vpFieldMeth3.PNG)


5.	Validate the field to display the name of the current employee:

![](assets/en/ViewPro/vpFieldMeth4.PNG)


>The \[Employee] table must have a current record.

## Built-in functions

Spreadsheet functions are preset formulas used to calculate cell values. When you type the first letter of the function to enter, a pop-up menu listing the available functions and references appears, allowing you to select the desired elements:  

![](assets/en/ViewPro/vpFormula2.PNG)

See [SpreadJS's list of functions](http://help.grapecity.com/spread/SpreadSheets14/webframe.html#FormulaFunctions.html) for details and examples.


## 4D functions

4D View Pro allows you to call **4D functions**, based upon 4D formulas or 4D project methods, from within your 4D View Pro formulas. Using 4D functions extends the possibilities of your 4D View Pro documents. 4D functions can receive parameters from the 4D View Pro area, and return values. For security reasons, only functions that have been explicitly allowed can be called by the user.

> **See also** [4D View Pro: Use 4D formulas in your spreadsheet (blog post)](https://blog.4d.com/4d-view-pro-use-4d-formulas-in-your-spreadsheet/)

### Requirements  

To be called in a 4D View Pro formula, a project method must be:

*	**Allowed**: it was explicitly declared using the [VP SET CUSTOM FUNCTIONS](method-list.md#vp-set-custom-functions) method (recommended) or the [VP SET ALLOWED METHODS](method-list.md#vp-set-allowed-methods) method.

*	**Runnable**: it belongs to the host project or a loaded component with the "Shared by components and host project" option enabled (see [Sharing of project methods](../Concepts/components.md#sharing-of-project-methods)).

*	**Not in conflict** with an existing 4D View Pro spreadsheet function: if you call a 4D function with the same name as a 4D View Pro built-in function, the 4D View Pro function is called.

>If neither the [VP SET CUSTOM FUNCTIONS](method-list.md#vp-set-custom-functions) nor the [VP SET ALLOWED METHODS](method-list.md#vp-set-allowed-methods) method has been executed during the session, 4D View Pro custom functions rely on allowed methods defined by 4D's generic `SET ALLOWED METHODS` command. In this case, the project method names must comply with JavaScript Identifier Grammar (see [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6)). The global filtering option in the Settings dialog box (see *Data Access*) is ignored in all cases.


### Hello World example  

We want to print "Hello World" in a 4D View Pro area cell using a 4D project method:

1.	Create a "myMethod" project method with the following code:  

```4d
 #DECLARE->$hw Text
 $hw:="Hello World"
```

2.	Execute the following code before opening any form that contains a 4D View Pro area (for example in the `On Startup database method`):
 	  
```4d
  Case of
    :(Form event code=On Load)
       var $o : Object
       $o:=New object
  // Define "vpHello" function from the "myMethod" method
       $o.vpHello:=New object
       $o.vpHello.formula:=Formula(myMethod)
       VP SET CUSTOM FUNCTIONS("ViewProArea";$o)
 End case
```
 	
3.	Edit the content of a cell in a 4D View Pro area and type:  
	
	![](assets/en/ViewPro/vpProjMeth1.PNG)	

	"myMethod" is then called by 4D and the cell displays:
	
	![](assets/en/ViewPro/vpProjMeth2.PNG)	
	
	
### Parameters  

Parameters can be passed to 4D functions using the following syntax:

```
=METHODNAME(param1,param2,...,paramN)
```

These parameters are received in *methodName* in $1, $2...$N.

Note that the ( ) are mandatory, even if no parameters are passed:

```
=METHODWITHOUTNAME()
```

You can declare the name, type, and number of parameters through the parameters collection of the function you declared using the [VP SET CUSTOM FUNCTIONS](method-list.md#vp-set-custom-functions) or [VP SET ALLOWED METHODS](method-list.md#vp-set-allowed-methods) method. Optionally, you can control the number of parameters passed by the user through *minParams* and *maxParams* properties. 

For more information on supported incoming parameter types, please refer to the [VP SET CUSTOM FUNCTIONS](method-list.md#vp-set-custom-functions) method description. 

>If you do not declare parameters, values can be sequentially passed to methods (they will be received in $1, $2...) and their type will be automatically converted. Dates in *jstype* will be passed as [object](Concepts/dt_object.md) in 4D code with two properties:

|Property|	Type|	Description|
|---|---|---|
|value|	Date|	Date value|
|time	|Real|	Time in seconds|

4D project methods can also return values in the 4D View Pro cell formula via $0. The following data types are supported for returned parameters:

*	[text](Concepts/dt_string.md) (converted to string in 4D View Pro)
*	[real](Concepts/dt_number.md)/[longint](Concepts/dt_number.md) (converted to number in 4D View Pro)
*	[date](Concepts/dt_date.md) (converted to JS Date type in 4D View Pro - hour, minute, sec = 0)
*	[time](Concepts/dt_time.md) (converted to JS Date type in 4D View Pro - date in base date, i.e. 12/30/1899)
*	[boolean](Concepts/dt_boolean.md) (converted to bool in 4D View Pro)
*	[picture](Concepts/dt_picture.md) (jpg,png,gif,bmp,svg other types converted into png) creates a URI (data:image/png;base64,xxxx) and then used as the background in 4D View Pro in the cell where the formula is executed
*	[object](Concepts/dt_object.md) with the following two properties (allowing passing a date and time):
	  
	|Property|	Type|	Description|
	|---|---|---|
	|value|	Date|	Date value|
	|time	|Real|	Time in seconds|

If the 4D method returns nothing, an empty string is automatically returned.

An error is returned in the 4D View Pro cell if:

*	the 4D method returns another type other than those listed above,
*	an error occurred during 4D method execution (when user clicks on "abort" button).


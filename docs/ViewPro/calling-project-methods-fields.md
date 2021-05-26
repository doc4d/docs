---
id: calling-project-methods-fields
title: Calling Project Methods and Fields in Formulas
---

## Project method references

4D View Pro allows you to call 4D project methods from within your formulas. Using 4D project methods extends the possibilities of your 4D View Pro documents. 4D methods can receive parameters from the 4D View Pro area, and return values. For security reasons, only methods that have been explicitly allowed can be called by the user.

### Requirements  

To be called in a 4D View Pro formula, a project method must be:

*	**Allowed**: it was explicitly declared using the [VP SET ALLOWED METHODS](method-reference.md#vp-set-allowed-methods) command.

*	**Runnable**: it belongs to the host project or a loaded component with the "Shared by components and host project" option enabled (see [Sharing of project methods](../Concepts/components.md#sharing-of-project-methods)).

*	**Not in conflict** with an existing 4D View Pro spreadsheet function: if you call a project method with the same name as a 4D View Pro built-in function, the function is called.

>If the [VP SET ALLOWED METHODS](method-reference.md#vp-set-allowed-methods) command has never been executed during the session, 4D View Pro custom functions rely on allowed methods defined by 4D's generic `SET ALLOWED METHODS` command. In this case, the project method names must comply with JavaScript Identifier Grammar (see [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6)). The global filtering option in the Settings dialog box (see *Data Access*) is ignored in all cases.


### Hello World example  

We want to print "Hello World" in a 4D View Pro area cell using a 4D project method:

1.	Create a "myMethod" project method with the following code:  

 	```4d
 	C_TEXT($0)
 	$0:="Hello World"
 	```

2.	Execute the following code before opening any form that contains a 4D View Pro area (for example in the `On Startup database method`):
 	  
 	```4d
 	C_OBJECT($allowed;VPHello)
 	
 	$allowed:=New object
 	$allowed.VPHello:=New object
 	$allowed.VPHello.method:="myMethod"
 	$allowed.VPHello.summary:="VPHello prints Hello World" //optional
 	
 	VP SET ALLOWED METHODS($allowed)
 	```
 	
3.	Edit the content of a cell in a 4D View Pro area and type:  
	
	![](assets/en/ViewPro/vpProjMeth1.PNG)	

	"myMethod" is then called by 4D and the cell displays:
	
	![](assets/en/ViewPro/vpProjMeth2.PNG)	
	
	
### Parameters  

Parameters can be passed to 4D project methods using the following syntax:

```4d
=METHODNAME(param1,param2,...,paramN)
```

These parameters are received in *methodName* in $1, $2...$N.

Note that the ( ) are mandatory, even if no parameters are passed:

```4d
=METHODWITHOUTNAME()
```

You can declare the name, type, and number of parameters through the parameters collection of the function you declared using the [VP SET ALLOWED METHODS](method-reference.md#vp-set-allowed-methods) command. Optionally, you can control the number of parameters passed by the user through *minParams* and *maxParams* properties. Example:

```4d
C_OBJECT($allowed)
 
$allowed:=New object
 
$allowed.VPMethod:=New object
 
$allowed.VPMethod.method:="4DMethodWithParams"
 
$allowed.VPMethod.parameters:=New collection
$allowed.VPMethod.parameters.push(New object("name";"Param1";"type";Is longint))
$allowed.VPMethod.parameters.push(New object("name";"Param2";"type";Is date))
$allowed.VPMethod.parameters.push(New object("name";"Param3";"type";Is text))
 
$allowed.VPMethod.minParams:=3  
$allowed.VPMethod.maxParams:=3 //the function gets 3 mandatory parameters
 
VP SET ALLOWED METHODS($allowed)
```

For more information on supported incoming parameter types, please refer to the [VP SET ALLOWED METHODS](method-reference.md#vp-set-allowed-methods) command description. 

>If you do not declare parameters, values can be sequentially passed to methods (they will be received in $1, $2...) and their type will be automatically converted. Dates in *jstype* will be passed as [C_OBJECT](Concepts/dt_object.md) in 4D methods with two properties:

|Property|	Type|	Description|
|---|---|---|
|value|	Date|	Date value|
|time	|Real|	Time in seconds|

4D project methods can also return values in the 4D View Pro cell formula via $0. The following data types are supported for returned parameters:

*	[C_TEXT](Concepts/dt_string.md) (converted to string in 4D View Pro)

*	[C_REAL](Concepts/dt_number.md)/[C_LONGINT](Concepts/dt_number.md) (converted to number in 4D View Pro)

*	[C_DATE](Concepts/dt_date.md) (converted to JS Date type in 4D View Pro - hour, minute, sec = 0)

*	[C_TIME](Concepts/dt_time.md) (converted to JS Date type in 4D View Pro - date in base date, i.e. 12/30/1899)

*	[C_BOOLEAN](Concepts/dt_boolean.md) (converted to bool in 4D View Pro)

*	[C_PICTURE](Concepts/dt_picture.md) (jpg,png,gif,bmp,svg other types converted into png) creates a URI (data:image/png;base64,xxxx) and then used as the background in 4D View Pro in the cell where the formula is executed

*	[C_OBJECT](Concepts/dt_object.md) with the following two properties (allowing passing a date and time):
	  
	|Property|	Type|	Description|
	|---|---|---|
	|value|	Date|	Date value|
	|time	|Real|	Time in seconds|

If the 4D method returns nothing, an empty string is automatically returned.

An error is returned in the 4D View Pro cell if:

*	the 4D method returns another type other than those listed above,
*	an error occurred during 4D method execution (when user clicks on "abort" button).



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
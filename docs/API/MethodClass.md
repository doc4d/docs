---
id: MethodClass
title: Method
---


A `4D.Method` object contains a piece of code that is created from text source and can be executed. `4D.Method` methods always execute in interpreted mode, regardless of the project running mode (interpreted/compiled). This feature is especially designed to support dynamic, on-the-fly execution of code snippets.

A `4D.Method` object is created with the `4D.Method.new()` function, which evaluates the provided source code and encapsulates it as a [callable function](./FunctionClass.md#formula-objects). You can:

- store a `4D.Method` object in an object property and use the `()` operator after the property name,
- or directly call the `4D.Method` object using the [`call()`](#call) or [`apply()`](#apply) function on it.

:::tip Related blog post

[Execute Code from Text with 4D.Method](https://blog.4d.com/execute-code-from-text-with-4d-method)

:::


### Examples

#### Basic dynamic method creation

```4d
var $myCode : Text
$myCode:="#DECLARE ($number1:Integer;$number2:Integer):Integer"+Char(13)+"return $number1*$number2"

var $o : 4D.Method
$o:={}
$o.multiplication:=4D.Method.new($myCode) //put object in a property
var $result2:=$o.multiplication(2;3) // 6

var $result3:=4D.Method.new($myCode).call(Null; 10; 5) // 50
```

#### Using `This` inside method code

```4d
var $myCode : Text
$myCode:="#DECLARE ($str1:text):text"+Char(13)+"return $str1+This.name"

var $o : 4D.Method
$o:=New object("name"; "John")
$o.concat:=4D.Method.new($myCode)

var $result : Text
$result:=$o.concat("Hello ") // $result is "Hello John"
```

#### Using map & dynamic parameters

```4d
var $c; $c2 : Collection
$c:=[1; 4; 9; 10; 20]

var $source : Text
$source:="#DECLARE ($param1;$param2)"+Char(13)
$source:=$source+"if ($param1.value>0)"+Char(13)
$source:=$source+"return Round(($param1.value/$param2)*100; 2)"+Char(13)
$source:=$source+"else"+Char(13)
$source:=$source+"return 0"+Char(13)
$source:=$source+"End if"

$c2:=$c.map(4D.Method.new($source); $c.sum())
```

#### Using a text file with syntax checking

```text
//4d method stored in a text file
var $newBusinessRules:=New shared object
Use ($newBusinessRules)
	$newBusinessRules.taxRate:=0.2
	$newBusinessRules.discountFormula:="price * quantity * discountRate"
	$newBusinessRules.approvalThreshold:=10000
	$newBusinessRules.freeShippingThreshold:=150
	$newBusinessRules.defaultCurrency:="EUR"
End use 

Use (Storage)
	Storage.businessRules:=$newBusinessRules
End use  
```

This method is called in the code:

```4d
var $myFile:=File("/DATA/BusinessRules.4dm")

var $myMethod:=4D.Method.new($myFile.getText())
// Syntax errors verification
If ($myMethod.checkSyntax().success)
   $myMethod.call()
End if 
```


### Method Object

4D.Method objects provide the following properties and functions:


||
|---|
|[<!-- INCLUDE #MethodClass.apply().Syntax -->](#apply)<br/><!-- INCLUDE #MethodClass.apply().Summary -->|
|[<!-- INCLUDE #MethodClass.call().Syntax -->](#call)<br/><!-- INCLUDE #MethodClass.call().Summary -->|
|[<!-- INCLUDE #MethodClass.checkSyntax().Syntax -->](#checksyntax)<br/><!-- INCLUDE #MethodClass.checkSyntax().Summary -->|
|[<!-- INCLUDE #MethodClass.name.Syntax -->](#name)<br/><!-- INCLUDE #MethodClass.name.Summary -->|
|[<!-- INCLUDE #MethodClass.source.Syntax -->](#source)<br/><!-- INCLUDE #MethodClass.source.Summary -->|




## 4D.Method.new()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R3|Added|

</details>

<!-- REF #4D.Method.new().Syntax -->**4D.Method.new**( *source* : Text {; name : Text } ) : 4D.Method<!-- END REF -->


<!-- REF #4D.Method.new().Params -->
<div class="no-index">

|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|Text|->|Textual representation of a 4D method to be encapsuled as an object|
|name|Text|->|Name of the method to display in the debugger. If omitted, the method name will be displayed as "anonymous"|
|Result|4D.Method|<-|New Method shared object|
</div>
<!-- END REF -->


#### Description

The `4D.Method.new()` function <!-- REF #4D.Method.new().Summary -->creates and returns a new `4D.Method` object built from the *source* code<!-- END REF -->.

In the *source* parameter, pass the 4D source code of the method as text. 

In the optional *name* parameter, pass the name of the method to be displayed in the 4D debugger or Runtime explorer. If you omit this parameter, the method name will appear as "anonymous". 

The resulting 4D.Method object can be checked using [`checkSyntax()`](#checksyntax) and executed using [`.apply()`](#apply) or [`.call()`](#call).


#### Example

```4d
var $m:=4D.Method.new("#DECLARE ($t : Text) : Text \nreturn Uppercase($t)")

var $res:=$m.call(Null; "hello world")  //HELLO WORLD
```


## .apply()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R3|Added|

</details>

<!-- REF #MethodClass.apply().Syntax -->**.apply**() : any<br/>**.apply**( *thisObj* : Object { ; *methodParams* : Collection } ) : any<!-- END REF -->


<!-- REF #MethodClass.apply().Params -->
<div class="no-index">

|Parameter|Type||Description|
|---------|--- |:---:|------|
|thisObj|Object|->|Object to be returned by the This command in the method|
|methodParams|Collection|->|Collection of values to be passed as parameters to the method when it is executed|
|Result|any|<-|Value from method execution|
</div>
<!-- END REF -->


#### Description

The `.apply()` function <!-- REF #MethodClass.apply().Summary -->executes the `4D.Method` object to which it is applied, passing parameters as a collection, and returns the resulting value<!-- END REF -->.

In the *thisObj* parameter, you can pass a reference to the object to be used as `This` within the method. Pass Null if you do not want to use `This` but you want to send parameters.

You can also pass a collection to be used as parameters in the method using the optional *methodParams* parameter.

Note that `.apply()` is similar to [`.call()`](#call) except that parameters are passed as a collection.


#### Example

```4d
var $m : 4D.Method
var $coll:=[1; 2; 3; 4]
var $myCode:="#DECLARE (...:Integer):Integer\n"+\
"var $number; $total : Integer\n"+\
"For ($number; 1; Count parameters)\n"+\
"$total+=${$number}\n"+\
"End for \n"+\
"return $total"

$m:=4D.Method.new($myCode;"m_addition")
var $result:=$m.apply(Null; $coll)  //10
```


## .call()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R3|Added|

</details>

<!-- REF #MethodClass.call().Syntax -->**.call**() : any<br/>**.call**( *thisObj* : Object { ; *...params* : any } ) : any<!-- END REF -->


<!-- REF #MethodClass.call().Params -->
<div class="no-index">

|Parameter|Type||Description|
|---|---|---|---|
|thisObj|Object|->|Object to be returned by the This command in the method|
|params|any|->|Value(s) to be passed as parameter(s) when method is executed|
|Result|any|<-|Value from method execution|
</div>
<!-- END REF -->


#### Description

The `.call()` function <!-- REF #MethodClass.call().Summary -->executes the `4D.Method` object to which it is applied, with one or more parameter(s) passed directly, and returns the resulting value<!-- END REF -->.

In the *thisObj* parameter, you can pass a reference to the object to be used as `This` within the method.

You can also pass values to be used as parameters in the method using the optional *params* parameter(s).

Note that `.call()` is similar to [`.apply()`](#apply) except that parameters are passed directly.

#### Example

```4d
 var $m : 4D.Method
 var $myCode:="#DECLARE ($number1:Integer;$number2:Integer):Integer\n"+\
"return $number1*$number2"

$m:=4D.Method.new($myCode; "m_multiple")
var $result:=$m.call(Null; 10; 5) //50

```


## .checkSyntax()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R3|Added|

</details>

<!-- REF #MethodClass.checkSyntax().Syntax -->**.checkSyntax**() : Object<!-- END REF -->


<!-- REF #MethodClass.checkSyntax().Params -->
<div class="no-index">

|Parameter|Type||Description|
|---|---|---|---|
|Result|Object|<-|Syntax check result object|
</div>
<!-- END REF -->


#### Description

The `.checkSyntax()` function <!-- REF #MethodClass.checkSyntax().Summary -->checks the syntax of the source code of the `4D.Method` object and returns a result object<!-- END REF -->.

The Result object contains the following properties:

|Property||Type|Description|
|---|---|---|---|
|success||Boolean|True if no syntax error was detected, false otherwise|
|errors||Collection of objects|**Available only in case of error or warning**. Collection of objects describing errors or warnings|
||[].isError|Boolean|Error if True, warning otherwise|
||[].message|Text|Error or warning message|
||[].lineNumber|Integer|Line number of error in the code|



#### Example


```4d
var $m : 4D.Method
var $check : Object
$m:=4D.Method.new("var $a:=2026\r$a:=current date")
$check:=$m.checkSyntax()
If ($check.success=False)
	ALERT("Syntax error: "+$check.errors[0].message)
End if 
```


## .name

<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R3|Added|

</details>


<!-- REF #MethodClass.name.Syntax -->**.name** : Text<!-- END REF -->


#### Description

The `.name` property <!-- REF #MethodClass.name.Summary -->contains the name of the `4D.Method` object, if it was declared in the *name* parameter of the `new()` constructor<!-- END REF -->. Otherwise, the property is not returned. 

This property is **read-only**.


## .source

<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R3|Added|

</details>

<!-- REF #MethodClass.source.Syntax -->**.source** : Text<!-- END REF -->


#### Description

The `.source` property <!-- REF #MethodClass.source.Summary -->contains the source code of the `4D.Method` object as text<!-- END REF -->.

This property is **read-only**.

#### Example

```4d
var $myCode:="#DECLARE ():Real\n"+\
"return random*current time"
$m:=4D.Method.new($myCode)
$src:=$m.source //"#DECLARE() : Real\rreturn Random*Current time"
```

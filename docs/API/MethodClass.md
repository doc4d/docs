---
id: MethodClass
title: Method
---


A **`4D.Method`** object contains a piece of code that is created from text source and can be executed. Whether the project is launched interpreted, or compiled, this code will be executed in interpreted mode. `4D.Method` objects allow you to add and execute code dynamically in packed 4D projects, e.g. in a compiled and deployed application. 

:::tip Related blog post

[Execute Code from Text with 4D.Method](https://blog.4d.com/execute-code-from-text-with-4d-method)

:::



### Summary


||
|---|
|[<!-- INCLUDE #4D.Method.new().Syntax -->](#new)<br/><!-- INCLUDE #4D.Method.new().Summary -->|
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

In the optional *name* parameter, pass the name of the method to be displayed in the 4D debugger and Runtime explorer. If you omit this parameter, the method name will appear as "anonymous". 

The resulting 4D.Method object can be checked using [`checkSyntax()`](#checksyntax) and executed using [`.apply()`](#apply) or [`.call()`](#call).


#### Example

```4d
var $myCode:="#DECLARE ($number1:integer;$number2:integer):integer\n"+\
"return $number1*$number2"

var $o:={}
$o.multiplication:=4D.Method.new($myCode)

var $result2:=$o.multiplication(2; 3) //6

var $result3:=4D.Method.new($myCode).call(Null; 10; 5) //50
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
 var $myCode:="#DECLARE ($number1:integer;$number2:integer):integer\n"+\
"return $number1*$number2"

$m:=4D.Method.new($myCode)
var $result:=$m.call(Null; 10; 5) //50

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
 $m:=4D.Method.new("Uppercase($1)")
 $result:=$m.call(Null;"hello") // returns "HELLO"
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

The returned object contains the following properties:

|Property|Type|Description|
|---|---|---|
|success|Boolean|True if no syntax error was detected, false otherwise|
|errors|Collection|Collection of error objects if *success* is false|

Each error object in the *errors* collection contains:

|Property|Type|Description|
|---|---|---|
|message|Text|Error message|
|lineNumber|Integer|Line number where the error was found|


#### Example

```4d
 var $m : 4D.Method
 var $check : Object
 $m:=4D.Method.new("This is not valid 4D code !!!")
 $check:=$m.checkSyntax()
 If($check.success=False)
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

The `.name` property <!-- REF #MethodClass.name.Summary -->contains the name of the `4D.Method` object<!-- END REF -->.

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
 var $m : 4D.Method
 var $src : Text
 $m:=4D.Method.new("Uppercase($1)")
 $src:=$m.source //"Uppercase($1)"
```

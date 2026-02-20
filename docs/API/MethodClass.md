---
id: MethodClass
title: Method
---


A **`4D.Method`** object contains a piece of code that can be created from text source and executed. `4D.Method` objects allow you to create and execute code dynamically from text expressions.



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

<!-- REF #4D.Method.new().Syntax -->**4D.Method.new**( *source* : Text ) : 4D.Method<!-- END REF -->


<!-- REF #4D.Method.new().Params -->
<div class="no-index">

|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|Text|->|4D source code of the method|
|Result|4D.Method|<-|New Method object|
</div>
<!-- END REF -->


#### Description

The `4D.Method.new()` function <!-- REF #4D.Method.new().Summary -->creates and returns a new `4D.Method` object built from the *source* code<!-- END REF -->.

In the *source* parameter, pass the 4D source code of the method as text. The source code is compiled and the resulting method object can be executed using [`.apply()`](#apply) or [`.call()`](#call).


#### Example

```4d
 var $m : 4D.Method
 $m:=4D.Method.new("$1+$2")
 $result:=$m.call(Null;10;20) // returns 30
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
|methodParams|Collection|->|Collection of values to be passed as $1...$n when method is executed|
|Result|any|<-|Value from method execution|
</div>
<!-- END REF -->


#### Description

The `.apply()` function <!-- REF #MethodClass.apply().Summary -->executes the `4D.Method` object to which it is applied and returns the resulting value<!-- END REF -->.

In the *thisObj* parameter, you can pass a reference to the object to be used as `This` within the method.

You can also pass a collection to be used as $1...$n parameters in the method using the optional *methodParams* parameter.

Note that `.apply()` is similar to [`.call()`](#call) except that parameters are passed as a collection.


#### Example

```4d
 var $m : 4D.Method
 $m:=4D.Method.new("$1+$2+$3")

 $c:=New collection(10;20;30)
 $result:=$m.apply(Null;$c) // returns 60
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
|params|any|->|Value(s) to be passed as $1...$n when method is executed|
|Result|any|<-|Value from method execution|
</div>
<!-- END REF -->


#### Description

The `.call()` function <!-- REF #MethodClass.call().Summary -->executes the `4D.Method` object to which it is applied and returns the resulting value<!-- END REF -->.

In the *thisObj* parameter, you can pass a reference to the object to be used as `This` within the method.

You can also pass values to be used as *$1...$n* parameters in the method using the optional *params* parameter(s).

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

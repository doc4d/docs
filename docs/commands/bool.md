---
id: bool
title: Bool
---


<!-- REF #_command_.Bool.Syntax-->Bool ( expression ) -> Function result<!-- END REF-->


<!-- REF #_command_.Bool.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|expression|Expression|->|Expression for which to return the boolean form|
|Function result|Boolean|<-|Boolean form of the expression|
<!-- END REF -->


#### Description


<p>The <strong>Bool</strong> command returns the boolean form of the expression you passed in expression. </p><p>The command can return the following values, depending on the expression result type:</p><table class="rte4d_table"><tr><td><strong>Expression result type</strong></td><td><strong>Return of the Bool command</strong></td></tr><tr><td>Undefined</td><td>False</td></tr><tr><td>Null</td><td>False</td></tr><tr><td>Boolean</td><td>False if false, otherwise True</td></tr><tr><td>Number</td><td>False if 0, other True</td></tr><tr><td>Other types</td><td>False</td></tr></table><p>This command is useful when the code expects a boolean value, and when the evaluation of the expression could result in a different type (e.g. if it  evaluates to <strong>null</strong> or <strong>undefined</strong>). </p>


#### Example


You select a value depending on the contents of an object field attribute, anticipating the case where the attribute is missing:


```4d
C_TEXT($married)
$married:=Choose(Bool([Person]data.married);"Married";"Single") 
//"Single" if the "married" attribute is not found in the field
ALERT("This person is "+$married)
```




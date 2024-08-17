---
id: bool
title: Bool
displayed_sidebar: docs
---


<!-- REF #_command_.Bool.Syntax-->**Bool** ( expression ) -> Function result<!-- END REF-->


<!-- REF #_command_.Bool.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|expression|Expression|->|Expression for which to return the boolean form|
|Function result|Boolean|<-|Boolean form of the expression|
<!-- END REF -->


#### Description




The **Bool** command returns the boolean form of the expression you passed in `expression`. 

The command can return the following values, depending on the `expression` result type:

| Expression result type | Return of the Bool command     |
|------------------------|--------------------------------|
| Undefined              | FALSE                          |
| Null                   | FALSE                          |
| Boolean                | False if false, otherwise True |
| Number                 | False if 0, other True         |
| Other types            | FALSE                          |

This command is useful when the code expects a boolean value, and when the evaluation of the expression could result in a different type (e.g. if it  evaluates to **null** or **undefined**). 


#### Example


You select a value depending on the contents of an object field attribute, anticipating the case where the attribute is missing:


```4d
C_TEXT($married)
$married:=Choose(Bool([Person]data.married);"Married";"Single") 
//"Single" if the "married" attribute is not found in the field
ALERT("This person is "+$married)
```




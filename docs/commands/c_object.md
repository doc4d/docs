---
id: c_object
title: C_OBJECT
---


<!-- REF #_command_.C_OBJECT.Syntax-->C_OBJECT ( {method ;} variable {; variable2 ; ... ; variableN} ) <!-- END REF-->


<!-- REF #_command_.C_OBJECT.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|method|Method|->|Name of method|
|variable|Variable|->|Name(s) of variable(s) or parameter(s) ${...} to declare|
<!-- END REF -->


#### Description


<p>The <strong>C_OBJECT</strong> command assigns the Object type to all the variables that are specified.</p><p>The Object type is supported by the 4D language starting with v14. Objects of this type are managed by the commands of the Objects (Language) theme or through object notation (see Using object notation). </p><p>You use the first syntax of the command (when the method  parameter is not passed) to declare and type a process, interprocess or local variable. This syntax can be used in interpreted databases.</p><p>You use the second syntax of the command (when the method  parameter is passed) to declare the method’s result and/or parameters ($0, $1, $2, etc.) to the compiler in advance. You must use this syntax if you want to skip the variable typing phase in order to save time when the database is compiled.</p><p><strong>WARNING:</strong> You cannot execute the second syntax in interpreted mode. For this reason, when you use this syntax, you should store it in a method (whose name must begin with "COMPILER") that is not executed in interpreted mode.</p><p><strong>Important: </strong>The <strong>C_OBJECT </strong>command does not create an<em> </em>object named <em>variable</em>. If you want to access the properties of the object itself using object notation, you must first initialize it using the [`New object`](new-object.md) command, otherwise a syntax error is returned (see example). </p>


#### Advanced Use


The syntax **C_OBJECT**(${...}) allows you to  declare a variable number of parameters of the same type, under the  condition that these are the last parameters for the method. For  example, the declaration **C_OBJECT**(${5}) tells 4D and the compiler that starting with the fifth parameter, the method can receive a  variable number of parameters of that type. For more information, see  the Parameter indirection section.


#### Exm




```4d
C_OBJECT($obj) //The $obj variable is declared but the $obj object does not exist
$obj:=New object //The $obj object is initialized
$obj.prop:=42 //...and its properties can be accessed 
```




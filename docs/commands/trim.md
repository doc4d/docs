---
id: trim
title: Trim
displayed_sidebar: docs
---

<!--REF #_command_.Trim.Syntax-->**Trim** ( *aString* ) : Text<!-- END REF-->
<!--REF #_command_.Trim.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aString | Text | &#8594;  | Text to trim |
| Function result | Text | &#8592; | Trimmed text |

<!-- END REF-->


<details><summary>History</summary>

|Release|Changes|
|---|---|
|21|Added|

</details>



## Description 

The **Trim** command <!--REF #_command_.Trim.Summary--> removes **whitespace** from both ends of the *aString* parameter and returns a new string, without modifying the original one.<!-- END REF--> 

To return a new string with whitespace trimmed from just one end, use [`Trim start`](./trim-start.md) or [`Trim end`](./trim-end.md).

This command is based upon Ecmascript specifications. **Whitespace** is defined as [space characters](https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#sec-white-space) (spaces, tabs, etc.) and [line terminators](https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#sec-line-terminators) (LF, CR, etc.).

In the *aString* parameter, you can pass any text expression. It will be left untouched by the command. 

The command returns the trimmed version of the *aString* string. If there is no whitespace at any end of *aString*, the returned string is identical as the one passed in parameter.  


## Example

```4d
var $input; $output : Text
$input:="     Hello World!    "
$output:=Trim($input) //"Hello World!"
```

## See also 

[Trim start](./trim-start.md)  
[Trim end](./trim-end.md)  

## Properties

|  |  |
| --- | --- |
| Command number | 1853 |
| Thread safe | &check; |



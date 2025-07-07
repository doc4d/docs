---
id: trim-start
title: Trim start
displayed_sidebar: docs
---

<!--REF #_command_.Trim start.Syntax-->**Trim start** ( *aString* ) : Text<!-- END REF-->
<!--REF #_command_.Trim start.Params-->
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

The **Trim start** command <!--REF #_command_.Trim start.Summary--> removes **whitespace** from the beginning of the *aString* parameter and returns a new string, without modifying the original one.<!-- END REF--> 

To return a new string with whitespace trimmed from both ends, use [`Trim`](./trim.md). To return a new string with whitespace trimmed from the end of *aString*, use [`Trim end`](./trim-end.md).

This command is based upon Ecmascript specifications. **Whitespace** is defined as [space characters](https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#sec-white-space) (spaces, tabs, etc.) and [line terminators](https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#sec-line-terminators) (LF, CR, etc.).

In the *aString* parameter, you can pass any text expression. It will be left untouched by the command. 

The command returns the trimmed version of the *aString* string. If there is no whitespace at the beginning of *aString*, the returned string is identical as the one passed in parameter.  


## Example

```4d
var $input; $output : Text
$input:="     Hello World!    "
$output:=Trim start($input) //"Hello World!    "
```

## See also 

[Trim](./trim.md)  
[Trim end](./trim-end.md)  

## Properties

|  |  |
| --- | --- |
| Command number | 1854 |
| Thread safe | &check; |



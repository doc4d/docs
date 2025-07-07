---
id: trim-end
title: Trim end
displayed_sidebar: docs
---

<!--REF #_command_.Trim end.Syntax-->**Trim end** ( *aString* ) : Text<!-- END REF-->
<!--REF #_command_.Trim end.Params-->
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

The **Trim end** command <!--REF #_command_.Trim end.Summary--> removes **whitespace** from the end of the *aString* parameter and returns a new string, without modifying the original one.<!-- END REF--> 

To return a new string with whitespace trimmed from both ends, use [`Trim`](./trim.md). To return a new string with whitespace trimmed from the beginning of *aString*, use [`Trim start`](./trim-start.md).

This command is based upon Ecmascript specifications. **Whitespace** is defined as [space characters](https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#sec-white-space) (spaces, tabs, etc.) and [line terminators](https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#sec-line-terminators) (LF, CR, etc.).

In the *aString* parameter, you can pass any text expression. It will be left untouched by the command. 

The command returns the trimmed version of the *aString* string. If there is no whitespace at the end of *aString*, the returned string is identical as the one passed in parameter.  


## Example

```4d
var $input; $output : Text
$input:="     Hello World!    "
$output:=Trim end($input) //"     Hello World!"
```

## See also 

[Trim](./trim.md)  
[Trim start](./trim-start.md)  

## Properties

|  |  |
| --- | --- |
| Command number | 1855 |
| Thread safe | &check; |



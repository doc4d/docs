---
id: defer
title: defer
slug: /commands/defer
displayed_sidebar: docs
---

<!--REF #_command_.defer.Syntax-->**defer** ( *exitFormula* : Expression )<!-- END REF-->
<!--REF #_command_.defer.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| exitFormula | Expression | &#8594;  | Expression to be executed at exit|
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R4|Created|

</details>
</div>

## Description 

<!--REF #_command_.defer.Summary-->The `defer` command declares an *exitFormula* expression that will always be executed when the method or function exits, even if an error has been thrown or a `return` has been executed<!-- END REF-->. Using a `defer` command allows you to ensure that a method or function ends correctly by executing completion code on exit. In addition, this command saves you from having to duplicate the same exit code for every return or catch block.

:::tip Related blog post

[Streamline Your Clean-Up Code with the “defer” Command](https://blog.4d.com/streamline-your-clean-up-code-with-the-defer-command)

:::

In *exitFormula*, you pass the expression that you want to be evaluated upon method or function exit, whatever the way it exited. Note however that:

- if *exitFormula* contains another `defer` statement, an error is thrown,
- if *exitFormula* calls a `return` statement, it is ignored.

The `defer` command can be called anywhere in the method or function code. You can insert as many `defer` expressions as you want in the code. During execution, all encountered *exitFormula* expressions are stacked. When the code execution stops, whatever the reason (normal flow, break, error, user abort, return...), all expressions in the "deferred stack" are popped and executed in LIFO (*Last In First Out)* order. For example:

```4d
defer(ALERT("1"))
defer(ALERT("2"))
// At exit, alerts will display "2" and then "1"
```

Behind the scenes, the command works as follows: every time a `defer` is called, 4D converts *exitFormula* into a formula and adds it to a collection associated with the method or function. When the method or function ends, all formulas stored in the collection are evaluated in the order they appear in the collection.

As for all [formulas](../../commands/formula), if the *exitFormula* expression uses local variables, their current values are copied and stored in the formula object returned **when it is put in the *deferred stack***. When executed, the formula uses these copied values rather than the current values of the local variables. Note that the use of arrays as local variables is not supported.

:::note

Keep in mind that local variables store **references** for [object](../../Concepts/dt_object.md#assignment) and [collection](../../Concepts/dt_collection.md#assignment) values.  

:::

If the *exitFormula* expression throws an error, it is automatically caught without any interruption and the execution flow continues as it runs with a [`Try`](../../Concepts/error-handling.md#tryexpression) expression. 



## Example 1

These examples illustrate the various supported *exitCode* expressions:

```4d
// Method call
defer(aMethod)

// Object function call
defer(myObject.aFunction(something))

// Singleton function call
defer(cs.aClass.me.aFunction(something))

// Singleton function call and if an error accors, another singleton function call (here for error management)
defer(cs.aClass.me.aFunction(something) || cs.errorManager.me.log(Last errors))
```

## Example 2

You want to make sure an XML reference will be always properly released, to avoid potential memory leaks:

```4d
var $xmlRef:=DOM Create XML ref("theRoot")
defer(DOM CLOSE XML($xmlRef))
...
```

## Example 3 

You want to make sure the activity monitoring stops at the end of the method:

```4d
START MONITORING ACTIVITY(0.001;Activity all)
defer(STOP MONITORING ACTIVITY())
...
```

## Example 4 

You want to control your log generation:

```4d
$logRecording:=Get database parameter(Diagnostic log recording)
SET DATABASE PARAMETER(Diagnostic log recording; 1)
defer(SET DATABASE PARAMETER(Diagnostic log recording; $logRecording))

$logLevel:=Get database parameter(Diagnostic log level)
SET DATABASE PARAMETER(Diagnostic log level; Log trace)
defer(SET DATABASE PARAMETER(Diagnostic log level; $logLevel))
```
streamline-your-clean-up-code-with-the-new-defer-command

## See also 

[throw](../commands/throw)  
[Last errors](../commands/last-errors)  
[ON ERR CALL](../commands/on-err-call)  

## Properties

|  |  |
| --- | --- |
| Command number | 1805 |
| Thread safe | no |




---
id: control-flow
title: Control flow overview
---

Regardless of the simplicity or complexity of a method or function, you will always use one or more of three types of programming structures. Programming structures control the flow of execution, whether and in what order statements are executed within a method. There are three types of structures:

- **Sequential**: a sequential structure is a simple, linear structure. A sequence is a series of statements that 4D executes one after the other, from first to last. A one-line routine, frequently used for object methods, is the simplest case of a sequential structure. For example: `[People]lastName:=Uppercase([People]lastName)`
- **[Branching](Concepts/cf_branching.md)**: A branching structure allows methods to test a condition and take alternative paths, depending on the result. The condition is a Boolean expression, an expression that evaluates TRUE or FALSE. One branching structure is the `If...Else...End if` structure, which directs program flow along one of two paths. The other branching structure is the `Case of...Else...End case` structure, which directs program flow to one of many paths.
- **[Looping](Concepts/cf_looping.md)**: When writing methods, it is very common to find that you need a sequence of statements to repeat a number of times. To deal with this need, the 4D language provides the following looping structures:
	- `While...End while`
	- `Repeat...Until`
	- `For...End for`
	- `For each...End for each`<br>
The loops are controlled in two ways: either they loop until a condition is met, or they loop a specified number of times. Each looping structure can be used in either way, but `While` loops and `Repeat` loops are more appropriate for repeating until a condition is met, and `For` loops are more appropriate for looping a specified number of times. `For each...End for each` allows mixing both ways and is designed to loop within objects and collections. 

**Note:** 4D allows you to embed programming structures up to a "depth" of 512 levels. 


## return {expression}

The `return` statement can be called in any programming structure. When a `return` statement is used in a function or method, the execution of the function or method is stopped. The remaining code is not executed and the hand is given back to the caller. 

The `return` statement can be used to [return a value](parameters.md#return-expression) to the caller. If the value is omitted, `undefined` is returned instead.

### Example

```4d
// counter method 
  
var $result : Text
For ($i;1;1000)
	$result:=$result+String($i)+"A\r" // until 5
      If ($i = 5)
        return 
      End if
      $result:=$result+String($i)+"B\r" // until 4
End for
$result:=$result+String($i)+"C\r"  // never appears

// $result =
// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A

```


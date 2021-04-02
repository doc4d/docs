---
id: callChainPane
title: Call Chain Pane
---

One method may call other methods or class functions, which may call other methods or functions. For this reason, it is very helpful to see the Call Chain, during the debugging process. The Call Chain Pane, which provides this useful feature, is the top right pane of the Debugger window. This pane is displayed using a hierarchical list. Here is an example of the Call Chain Pane:

![call-chain-pane](assets/en/Debugging/callChainPane.png)

Each main level item is a name of a method or a class function. The top item is the one you are currently tracing, the next main level item is the name of the caller (the method or function that called the one you are currently tracing), the next one is the caller's caller, and so on. In the example above, the method M_BitTestDemo is being traced; it has been called by the method DE_LInitialize, which has been called by DE_DebugDemo.

Double-clicking the name of an element in the Call Chain pane “transports” you back to the caller, displaying its source code in the Source Code Pane. In doing so, you can quickly see “how” the caller made its call to the called element. You can examine any stage of the call chain this way.

Double-clicking the name of an element in the Call Chain pane “transports” you back to the caller, displaying its source code in the Source Code Pane. In doing so, you can quickly see “how” the caller made its call to the called element. You can examine any stage of the call chain this way.

Clicking the icon next to a method or function name expands or collapses the parameters and the result (if any). The values appear on the right side of the pane. Clicking on any value on the right side allows you to change the value of any parameter or function result. In the figure above:

1. M_BitTestDemo has not received any parameter.
2. M_BitTestDemo's $0 is currently undefined, as the method did not assign any value to $0 (because it has not executed this assignment yet or because the method is a subroutine and not a function).
3. DE_LInitialize has received three parameters from DE_DebugDemo. $1 is a pointer to the table [Customers], $2 is a pointer to the field [Customers]Company, and $3 is an alphanumeric parameter whose value is "Z".

You can display the parameter type by selecting Show types in the contextual menu:

![call-chain-show-types](assets/en/Debugging/callChainShowTypes.png)

After you have deployed the parameter list, you can also drag and drop parameters and function results to the Custom Watch Pane.

You can also use the Get call chain command to retrieve the call chain programmatically.


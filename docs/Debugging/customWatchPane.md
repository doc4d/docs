---
id: customWatchPane
title: Custom Watch Pane
---

Directly below the Call Chain Pane is the Custom Watch Pane. This pane is used to evaluate expressions. Any type of expression can be evaluated, including fields, variables, pointers, calculations, built-in functions, your own functions, and anything else that returns a value.

You can evaluate any expression that can be shown in text form. This does not cover picture and BLOB fields or variables. On the other hand, the Debugger uses deployed hierarchical lists to let you display arrays and pointers. To display BLOB contents, you can use BLOB commands, such as BLOB to text.

In the following example, you can see several of these items: two variables, a field pointer variable and the result of a built-in function, and a calculation:

![custom-Watch-pane](assets/en/Debugging/customWatchPane.png)

## Inserting a new expression 

You can add an expression to be evaluated in the Custom Watch Pane in the following way:

* Drag and drop an object or expression from the Watch Pane
* Drag and drop an object or expression from the Call Chain Pane
* In the Source Code Pane, click on an expression that can be evaluated

To create a blank expression, double-click somewhere in the empty space of the Custom Watch pane. This adds an expression //New expression and then goes into editing mode so you can edit it. You can enter any 4D formula that returns a result.

After you have entered the formula, type Enter or Return (or click somewhere else in the pane) to evaluate the expression.

To change the expression, click on it to select it, then click again (or press Enter — numeric key pad) to go into editing mode.

If you no longer need an expression, click on it to select it, then press Backspace or Delete.

**Warning:** Be careful when you evaluate a 4D expression modifying the value of one of the System Variables (for instance, the OK variable) because the execution of the rest of the method may be altered.

## Custom Watch Pane Context Menu
To help you enter and edit an expression, the Custom Watch Pane’s context menu gives you access the 4D formula editor. In fact, the context menu also proposes additional options.

To display this menu, click anywhere in the Custom Watch pane using the right mouse button

![custom-Watch-pane-context-menu](assets/en/Debugging/customWatchPaneContext.png)

**New Expression**: This inserts a new expression and displays the 4D Formula Editor (as shown) so you can edit the new expression.

![custom-Watch-pane-context-menu](assets/en/Debugging/customWatchPaneFormulaEditor.png)
For more information about the Formula Editor, see the 4D Design Reference manual.

* **Insert Command**: This hierarchical menu item is a shortcut for inserting a command as a new expression, without using the Formula Editor.
* **Delete All**: Deletes all the expressions currently present.
* **Standard Expressions**: Recopies the list of objects in the Expression area.
> This option is not available in remote debugging mode (see Debugging from Remote Machines).
* **Collapse All/Expand All**: Collapses or Expands all the expressions whose evaluation is done by the means of a hierarchical list (i.e., pointers, arrays,...)
* **Show Types**: Displays the object type for each object (when appropriate).
* **Show Field and Table Numbers**: Displays the number of each table or field of the **Fields**. If you work with table or field number or pointers using the commands such as Table or Field, this option is very useful.
* **Show Icons**: Displays an icon denoting the object type for each object. You can turn this option off in order to speed up the display, or just because you prefer to use only the Show Types option.
* **Sorted Tables and Fields**: Forces the table and fields to be displayed in alphabetical order, within their respective lists.
* **Show Integers in Hexadecimal**: Numbers are displayed using the decimal notation. This option displays them hexadecimal notation. Note: To enter a numeric value in hexadecimal, type 0x (zero + "x"), followed by the hexadecimal digits.
* **Enable activity monitoring**: Activates and displays activity monitoring information (see the Watch Pane section).
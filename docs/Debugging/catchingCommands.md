---
id: catchingCommands
title: Catching Commands
---

The Catching Commands is a page of the Runtime Explorer that enables you to add additional breaks to your code by catching calls to 4D commands.

Catching a command enables you to start tracing the execution of any process as soon as a command is called by that process. Unlike a break point, which is located in a particular project method (and therefore triggers a trace exception only when it is reached), the scope of catching a command includes all the processes that execute 4D code and call that command.

Catching a command is a convenient way to trace large portions of code without setting break points at arbitrary locations. For example, if a record that should not be deleted is deleted after you have executed one or several processes, you can try to reduce the field of your investigation by catching commands such as DELETE RECORD and DELETE SELECTION. Each time these commands are called, you can check if the record in question has been deleted, and thus isolate the faulty part of the code.

With some experience, you can combine the use of Break points and command catching.

To open the Caught Commands page:

1. Choose Runtime Explorer from the Run menu.
The Runtime Explorer can be displayed in a floating palette. In this case, the floating palette always remains displayed in the front. To do this, hold down the Shift key while selecting Runtime Explorer from the Tools menu. For more information, please refer to the Design Reference manual.

![runtime-explorer-window](assets/en/Debugging/runtimeExplorer.png)

The Runtime Explorer window appears.

2. Click on the Catch button to display the Caught Commands List:

![runtime-explorer-window](assets/en/Debugging/caughtCommands.png)

This page lists the commands to be caught during execution. It is composed of two columns:

* The left column displays the Enable/Disable status of the caught command, followed by the name of the command.
* The right column displays the condition associated with the caught command, if any.

## Adding a New Command to be Caught

To add a new command:

1. Click on the Add New Catch button (in the shape of a +) located below the list. A new entry is added to the list with the ALERT command as default.

![new-command-to-be-caught](assets/en/Debugging/newCaughtCommand.png)

You can then click on label ALERT and enter the name of the command you want to catch. Once you have finished, hit Enter or Return to validate your choice.

## Editing the Name of a Caught Command

To edit the name of a caught command:

1. Select the entry by clicking it or by using the arrow keys to navigate through the list (if the current selected entry is not already in edit mode).
2. To toggle an entry between edit mode and select mode, press Enter or Return.
3. Enter or modify the name of the command.
4. To validate your changes, press Enter or Return.

## Disabling/Enabling a Caught Command 

To disable or enable a caught command:

1. Click on the bullet (•) placed in front of the command label.
This allows you to alternately activate and/or disable the break point. The bullet's color indicates its status:
red = activated,
orange = disabled.

> Disabling a caught command has almost the same effect as deleting it. During execution, the debugger spends almost no time on the entry. The advantage of disabling an entry is that you do not have to recreate it when you need it again.

## Deleting a Caught Command 

To delete a caught command:

1. Select the entry by clicking it or by using the arrow keys to navigate through the list (if the current selected entry is not already in edit mode).
2. Press the Backspace or Delete key or click on Delete button located beneath the list.
3. To delete all the caught commands, click on the Delete All button.

## Setting a Condition for Catching a Command 

To set a condition for catching a command:

1. Click on the entry in the right column.
An input cursor appears.
2. Enter a 4D formula (expression, command call or project method) that returns a Boolean value.

> To remove a condition, delete its formula.

Adding conditions allows you to stop execution when the command is invoked only if the condition is met. For example, if you associate the condition "Records in selection(\[Emp]>10)" with the break point on the DELETE SELECTION command, the code will not be stopped during execution of the DELETE SELECTION command if the current selection of the \[Emp] table only contains 9 records (or less).

Adding conditions to caught commands slows the execution, because the condition has to be evaluated each time an exception is met. On the other hand, adding conditions accelerates the debugging process, because 4D automatically skips occurrences that do not match the conditions.


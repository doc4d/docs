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
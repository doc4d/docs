---
id: debugger
title: Debugger
---

The term Debugger comes from the term bug. A bug in a method is a mistake that you want to eliminate. When an error has occurred, or when you need to monitor the execution of your methods, you use the debugger. A debugger helps you find bugs by allowing you to slowly step through your methods and examine method information. This process of stepping through methods is called tracing.


## When is the Debugger displayed?

You can cause the Debugger window to display and then trace the methods in the following ways:

*   Clicking the Trace button in the Syntax Error Window
*   Using the TRACE command
*   Clicking the Debug button in the Execute Method window.
*   Pressing Alt+Shift+Right click (Windows) or Control+Option+Command+Click (Macintosh) while a method is executing, then selecting the process to trace in the pop-up menu:

![open-debugger](assets/en/Debugging/openDebugger.png)

*   Clicking the Trace button when a process is selected in the Process page of the Runtime Explorer.
*   Creating or editing a break point in the Method Editor window, or in the Break and Catch pages of the Runtime Explorer.

> Only the designer and users belonging to the group that has design access privileges can trace methods.

Debugger window (local):

![debugger-window-local](assets/en/Debugging/debuggerWindowLocal.png)

Debugger window (remote):

![debugger-window-remote](assets/en/Debugging/debuggerWindowRemote.png)

You can move the Debugger Window and/or resize any of its internal window panes as necessary. Displaying a new debug window uses the same configuration (size and position of the window, placing of the division lines and contents of the area that evaluates the expressions) as the last window displayed in the same session.

4D is a multi-tasking environment. If you run several user processes, you can trace them independently. You can have one debugger window open for each process.

Where is the Debugger displayed?  

The Debugger window is usually displayed on the machine where the code is executed.

*   With a **single-user application**, it is always displayed on the running application machine.

*   With a client/server application, it is displayed on the remote 4D for code running locally, and by default on the server machine for code running on the server (e.g. a method with execute on server option). If the server is running headless, no Debugger window can be displayed on the server.

However in client/server applications, you can delegate to a specific remote 4D the display of the Debugger for code running on the server. This is specially useful for server applications running headless. To do this, on a remote 4D connected to the server, select the Attach Remote Debugger command from the Run menu:

![attach-remote-debugger](assets/en/Debugging/attachRemoteDebugger.png)

You can also select the Attach Remote Debugger At Startup option if you want to automatically debug server code on the remote 4D. 

> The Debugger must have been "detached" from the server beforehand. For more information on this feature, please refer to the Debugging from Remote Machines section.

### Execution Control Tool Bar Buttons

Nine buttons are located in the Execution Control Tool Bar at the top of the Debugger window:

![attach-remote-debugger](assets/en/Debugging/attachRemoteDebugger.png)
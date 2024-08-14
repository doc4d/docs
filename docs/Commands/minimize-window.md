---
id: minimize-window
title: MINIMIZE WINDOW
displayed_sidebar: docs
---


<!-- REF #_command_.MINIMIZE WINDOW.Syntax-->MINIMIZE WINDOW {( window )}<!-- END REF-->


<!-- REF #_command_.MINIMIZE WINDOW.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|window|Longint|->|Window reference number or if omitted, all the current process frontmost windows (Windows) or current process frontmost window (macOS)|
<!-- END REF -->


#### Description




The `MINIMIZE WINDOW` command sets the size of the window whose number is passed as *window* to the size it was before being maximized. If *window* is omitted, the command applies to each window of the application (Windows) or to the frontmost window of the process (on Mac OS).

This command has the same effect as one click on the reduction box of the 4D application.


#### On Windows




The size of the window is set to its initial size, i.e., its size before being maximized. If the window parameter is omitted, all the application windows are set to their initial sizes.  

![](img/39369/pict39369.en.png)<br/>Reduction box on Windows


#### On Mac OS


The size of the window is set to its initial size (i.e. its size before being maximized). If the window parameter is omitted, the frontmost window of the current process is set to its initial size.  

![](img/39370/pict39370.en.png)<br/>Reduction/zoom box on macOS

If the windows to which the command is applied were not previously maximized (manually or using [`MAXIMIZE WINDOW`](maximize-window.md)), or if the window type does not include a zoom box, the command has no effect. 

::::info

This function is not to be confused with minimizing a window to a button (Windows) or in the Dock (macOS), which is triggered by a click on the button shown:

![](img/39371/pict39371.en.png)<br/>Windows

![](img/39372/pict39372.en.png)<br/>macOS

:::


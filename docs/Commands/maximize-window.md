---
id: maximize-window
title: MAXIMIZE WINDOW
displayed_sidebar: docs
---


<!-- REF #_command_.MAXIMIZE WINDOW.Syntax-->MAXIMIZE WINDOW {( window )}<!-- END REF-->


<!-- REF #_command_.MAXIMIZE WINDOW.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|window|Longint|->|Window reference number or if omitted, all current process frontmost windows (Windows) or current process frontmost window (Mac OS)|
<!-- END REF -->


#### Description




The `MAXIMIZE WINDOW` command triggers the expansion of the window whose reference number was passed in *window*. If this parameter is omitted, the effect is the same but is applied to all the frontmost windows of the current process (Windows) or to the frontmost window of the current process (Mac OS). 

This command has the same effect as a click on the zoom box of a 4D application window. Windows you want to maximize must have a zoom box. If the window type does not have a zoom box, the command does nothing.

A later click on the zoom box or a call to the [`MINIMIZE WINDOW`](minimize-window.md) command reduces the window to its initial size. On Windows, a call to [`MINIMIZE WINDOW`](minimize-window.md) without parameters sets the size of all application windows to their initial sizes.

If *window* is already maximized, the command does nothing.

 


#### On Windows




The size of the window is increased to match the current size of the application window (MDI mode) or the screen (SDI mode). The maximized window is set to be the frontmost window. If you do not pass the window parameter, the command is applied to all the application windows. 

![](img/39344/pict39344.en.png)<br/>Windows zoom box

In cases where the command is applied to a window whose size is subject to constraints (for example, a form window):

* If no size constraint is in conflict with the target size, the window is "maximized" (i.e., it is restored to the size of the application window (MDI mode) or the screen (SDI mode); its title bar and borders are hidden, and its control buttons - minimize, restore and close -  are moved to the right of the application menu bar). 
* If at least one size constraint is in conflict (for example, if the width of the MDI window is 100 and the form window's maximum width is set to 80), the window is not "maximized", but only restored to its maximum allowed size. This size is defined either by the MDI window, or by the constraint. This way, the interface remains consistent when windows with constraints are resized. 


#### On macOS



The size of the window is increased to match the size of its contents. If you do not pass the *window* parameter, the command is applied to the frontmost window of the current process. 

![](img/39345/pict39345.en.png)<br/>Zoom box on macOS 

* The zoom is based on the contents of the window; so, the command must be called in a context where the contents of the window are defined, for example in a form method. Otherwise, the command does nothing. 
* The window is set to its "maximum" size. If the window is actually a form whose size was  defined in the form properties, the window size is set to those values.


#### Example 1


This example sets the window size of your form to full screen when it is opened. To achieve this, the following code is placed in the form method:

```4d
//In the Form method

MAXIMIZE WINDOW
```



#### Example


This example illustrates how size constraints are handled on Windows (MDI mode). The following form has a size constraint (maximum width=400):

![](img/1476223/pict1476223.en.png)

The method of the button contains simply:


```4d
MAXIMIZE WINDOW(Current form window)
```

In this context, when the user clicks on the button:

![](img/1476225/pict1476225.en.png)

... the window is not "maximized"; only its height is increased:

![](img/1476363/pict1476363.en.png)



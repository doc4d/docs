---
id: erase-window
title: ERASE WINDOW
displayed_sidebar: docs
---


<!-- REF #_command_.ERASE WINDOW.Syntax-->ERASE WINDOW {( window )}<!-- END REF-->


<!-- REF #_command_.ERASE WINDOW.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|window|Longint|->|Window reference number, or Frontmost window of current process, if omitted|
<!-- END REF -->


#### Description


The **ERASE WINDOW** command clears the contents of the window whose reference number is passed in *window*. 

If you omit the *window* parameter, **ERASE WINDOW** clears the contents of the frontmost window for the current process.

Usually, you will use **ERASE WINDOW** in combination with [`MESSAGE`](message.md) and [`GOTO XY`](goto-xy.md). In this case, **ERASE WINDOW** clears the contents of the window and moves the cursor to the upper-left corner of the window, the [`GOTO XY`](goto-xy.md)(0; 0) position. 

Do not confuse **ERASE WINDOW**, which clears the contents of a window, with [`CLOSE WINDOW`](close-window.md), which removes the window from the screen.



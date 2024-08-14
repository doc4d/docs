---
id: window-process
title: Window process
displayed_sidebar: docs
---


<!-- REF #_command_.Window process.Syntax-->Window process {( window )} -> Function result<!-- END REF-->


<!-- REF #_command_.Window process.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|window|Longint|->|Window reference number|
|Function result|Longint|<-|Process reference number|
<!-- END REF -->


#### Description




The `Window process` command returns the process number that runs the window whose reference number is passed in *window*. If the window does not exist, 0 (zero) is returned.

If you omit the *window* parameter, `Window process` returns the process of the current frontmost window.



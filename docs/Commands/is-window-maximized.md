---
id: is-window-maximized
title: Is window maximized
displayed_sidebar: docs
---


<!-- REF #_command_.Is window maximized.Syntax-->Is window maximized ( window ) -> Function result<!-- END REF-->


<!-- REF #_command_.Is window maximized.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|window|Longint|->|Window reference number|
|Function result|Boolean|<-|True if the window is maximized, False otherwise|
<!-- END REF -->


#### Description




The **Is window maximized** command returns **True** if the window whose reference number is passed in window is currently maximized, and **False** otherwise. 


#### Example


You want to switch between the maximized and previous states:


```4d
If(Is window maximized($winRef))
MINIMIZE WINDOW($winRef)
Else
MAXIMIZE WINDOW($winRef)
End if
```




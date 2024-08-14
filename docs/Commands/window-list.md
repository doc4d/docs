---
id: window-list
title: WINDOW LIST
displayed_sidebar: docs
---


<!-- REF #_command_.WINDOW LIST.Syntax-->WINDOW LIST ( windows {; *} )<!-- END REF-->


<!-- REF #_command_.WINDOW LIST.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|windows|Array|<-|Array of window reference numbers|
|*||->|If specified, take floating windows into account If omitted, ignore floating windows|
<!-- END REF -->


#### Description




The `WINDOW LIST` command populates the array *windows* with the window reference numbers of the windows currently open in all running processes (kernel or user processes). Only "visible" windows (i.e. windows that are not hidden) are returned. 

If you do not pass the optional `*` parameter, floating windows are ignored.


#### Example


The following project method tiles all the current open window, except floating windows and dialog boxes:
 
```4d
` TILE WINDOWS project method

WINDOW LIST($alWnd)
$vlLeft:=10
$vlTop:=80 ` Leave enough room for the Tool bar
For ($vlWnd;1;Size of array($alWnd))
If (Window kind($alWnd{$vlWnd}) # Modal Dialog)
GET WINDOW RECT($vlWL;$vlWT;$vlWR;$vlWB;$alWnd{$vlWnd})
$vlWR:=$vlLeft+($vlWR-$vlWL)
$vlWB:=$vlTop+($vlWB-$vlWT)
$vlWL:=$vlLeft
$vlWT:=$vlTop
SET WINDOW RECT($vlWL;$vlWT;$vlWR;$vlWB;$alWnd{$vlWnd})
$vlLeft:=$vlLeft+10
$vlTop:=$vlTop+25
End if
End for
```

:::note

This method could be improved by adding tests on the size of the main window (on Windows) or the size and location of the screens (on Macintosh).

:::

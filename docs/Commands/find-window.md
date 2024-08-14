---
id: find-window
title: Find window
displayed_sidebar: docs
---


<!-- REF #_command_.Find window.Syntax-->Find window ( left ; top {; windowPart} ) -> Function result<!-- END REF-->


<!-- REF #_command_.Find window.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|left|Longint|->|Global left coordinate|
|top|Longint|->|Global top coordinate|
|windowPart|Longint|<-|3 if window is "touched", 0 otherwise|
|Function result|Longint|<-|Window reference number|
<!-- END REF -->


#### Description




The **Find window** command returns (if any) the reference number of the first window “touched” by the point whose coordinates passed in *left* and *top*.

The coordinates must be expressed relative to the top left corner of the contents area of the application window (Windows) or to the main screen (Macintosh).

The *windowPart* parameter returns 3 if the window is touched, and 0 otherwise. 

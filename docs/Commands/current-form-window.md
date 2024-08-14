---
id: current-form-window
title: Current form window
displayed_sidebar: docs
---


<!-- REF #_command_.Current form window.Syntax-->Current form window  -> Function result<!-- END REF-->


<!-- REF #_command_.Current form window.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Function result|Longint|<-|Current form window reference number|
<!-- END REF -->


#### Description




The **Current form window** command returns the reference of the current form window. If no window has been set for the current form, the command returns 0.

The current form window can be generated automatically using a command such as [`ADD RECORD`](add-record.md), following a user action or by using the [`Open form window`](open-form-window.md) command. 



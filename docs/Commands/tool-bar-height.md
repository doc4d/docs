---
id: tool-bar-height
title: Tool bar height
displayed_sidebar: docs
---


<!-- REF #_command_.Tool bar height.Syntax-->Tool bar height  -> Function result<!-- END REF-->


<!-- REF #_command_.Tool bar height.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Function result|Longint|<-|Height (expressed in pixels) of tool bar or 0 if tool bar is hidden|
<!-- END REF -->


#### Description




The `Tool bar height` command returns the height of the current visible tool bar, expressed in pixels. Depending on the context, it can be either the 4D Design mode toolbar, or a custom toolbar created with  [`Open form window`](open-form-window.md) (the Design mode toolbar is automatically hidden when a custom toolbar is displayed).

If no tool bar is displayed, the command returns 0.



---
id: dom-close-xml
title: DOM CLOSE XML
displayed_sidebar: docs
---


<!-- REF #_command_.DOM CLOSE XML.Syntax-->DOM CLOSE XML ( elementRef )<!-- END REF-->


<!-- REF #_command_.DOM CLOSE XML.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|elementRef|String|->|XML root element reference|
<!-- END REF -->


#### Description




The `DOM CLOSE XML` command frees up the memory occupied by the XML object designated by *elementRef*.

If *elementRef* is not an XML root object, an error is generated. 


#### System Variables or Sets




If the command has been correctly executed, the system variable OK is set to 1. If an error occurs, it is set to 0.

---
id: dom-get-root-xml-element
title: DOM Get Root XML element
displayed_sidebar: docs
---


<!-- REF #_command_.DOM Get Root XML element.Syntax-->DOM Get Root XML element ( elementRef ) -> Function result<!-- END REF-->


<!-- REF #_command_.DOM Get Root XML element.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|elementRef|String|->|XML element reference|
|Function result|String|<-|Reference of root element or "" in case of error|
<!-- END REF -->


#### Description




The `DOM Get Root XML element` command returns a reference to the root element of the document to which the XML element that is passed in the *elementRef* parameter belongs. This reference can be used with the other XML parsing commands.

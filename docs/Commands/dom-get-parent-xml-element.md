---
id: dom-get-parent-xml-element
title: DOM Get parent XML element
displayed_sidebar: docs
---


<!-- REF #_command_.DOM Get parent XML element.Syntax-->DOM Get parent XML element ( elementRef {; parentElemName {; parentElemValue}} ) -> Function result<!-- END REF-->


<!-- REF #_command_.DOM Get parent XML element.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|elementRef|String|->|XML element reference|
|parentElemName|String|<-|Name of parent XML element|
|parentElemValue|String|<-|Value of parent XML element|
|Function result|String|<-|Parent XML element reference|
<!-- END REF -->


#### Description




The `DOM Get parent XML element` command returns an XML reference to the “parent” of the XML element passed as reference in *elementRef*. This reference may be used with the other XML parsing commands.

The optional *parentElemName* and *parentElemValue* parameters, when passed, receive respectively the name and value of the parent element.

When you pass a root element in elementRef, the command returns the "#document" reference. The document node is the parent of a root element. <br/>If you use this command on a document node, the command returns a null reference ("0000000000000000") and the OK variable is set to 0.


#### System Variables or Sets




If the command has been executed correctly, the system variable OK is set to 1. Otherwise, it is set to 0.

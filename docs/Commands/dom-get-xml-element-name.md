---
id: dom-get-xml-element-name
title: DOM GET XML ELEMENT NAME
displayed_sidebar: docs
---


<!-- REF #_command_.DOM GET XML ELEMENT NAME.Syntax-->DOM GET XML ELEMENT NAME ( elementRef ; elementName )<!-- END REF-->


<!-- REF #_command_.DOM GET XML ELEMENT NAME.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|elementRef|String|->|XML element reference|
|elementName|Variable|<-|Name of the element|
<!-- END REF -->


#### Description




The `DOM GET XML ELEMENT NAME` command returns, in the *elementName* parameter, the name of the XML element designated by *elementRef*. If the *elementName* variable type is not defined, the text type is used by default. 

For more information on XML element names, refer to the Overview of XML DOM Commands section.


#### Example


This method returns the name of the $xml_Element_Ref element:
```4d
C_TEXT($xml_Element_Ref)
C_TEXT($name)

DOM GET XML ELEMENT NAME($xml_Element_Ref;$name)
```



#### System Variables or Sets




If the command has been correctly executed, the system variable OK is set to 1. If an error occurs, it is set to 0.

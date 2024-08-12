---
id: dom-get-last-child-xml-element
title: DOM Get last child XML element
displayed_sidebar: docs
---


<!-- REF #_command_.DOM Get last child XML element.Syntax-->DOM Get last child XML element ( elementRef {; childElemName {; childElemValue}} ) -> Function result<!-- END REF-->


<!-- REF #_command_.DOM Get last child XML element.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|elementRef|String|->|XML element reference|
|childElemName|String|<-|Name of child element|
|childElemValue|String|<-|Value of child element|
|Function result|String|<-|XML element reference|
<!-- END REF -->


#### Description




The `DOM Get last child XML element` command returns an XML reference to the last “child” of the XML element passed as reference in *elementRef*. This reference may be used with the other XML parsing commands.

The optional childElemName and childElemValue parameters, when passed, receive respectively the name and value of the “child” element.


#### Example


Recovery of the reference of the last XML element of the parent root. The XML structure (C:\\import.xml) is loaded into a BLOB beforehand:
```4d
C_BLOB(myBlobVar)
C_TEXT($ref_XML_Parent;$ref_XML_Child)
C_TEXT($childName;$childValue)

DOCUMENT TO BLOB("c:\\import.xml";myBlobVar)
$ref_XML_Parent:=DOM Parse XML variable(myBlobVar)
$ref_XML_Child:=DOM Get last child XML element($ref_XML_Parent;$childName;$childValue)
```



#### System Variables or Sets




If the command has been executed correctly, the system variable OK is set to 1. Otherwise, it is set to 0.

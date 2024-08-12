---
id: dom-set-xml-attribute
title: DOM SET XML ATTRIBUTE
displayed_sidebar: docs
---


<!-- REF #_command_.DOM SET XML ATTRIBUTE.Syntax-->DOM SET XML ATTRIBUTE ( elementRef ; attribName ; attrValue {; attribName2 ; attrValue2 ; ... ; attribNameN ; attrValueN} )<!-- END REF-->


<!-- REF #_command_.DOM SET XML ATTRIBUTE.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|elementRef|String|->|XML element reference|
|attribName|String|->|Attribute to set|
|attrValue|String, Boolean, Longint, Real, Time, Date|->|New attribute value|
<!-- END REF -->


#### Description




The `DOM SET XML ATTRIBUTE` command adds one or more attributes to the XML element whose reference is passed in the *elementRef* parameter. It also sets the value of each attribute defined.

Pass the attribute you want to set and its value respectively in the *attrName* and *attrValue* parameters (in the form of variables, fields or literal values). You can pass as many attribute/value pairs as you want. <br/>The *attrValue* parameter can be of the text type or another type (Boolean, integer, real, date or time). If you pass a value other than text, 4D handles its conversion to text, according to the following principles:

| **Type** | **Example of converted value**                |
|----------|-----------------------------------------------|
| Boolean  | "true" or "false"                             |
| Integer  | "123456"                                      |
| Real     | "12.34" (the decimal separator is always ".") |
| Date     | "2006-12-04T00:00:00Z" (RFC 3339 standard)    |
| Time     | "5233" (number of seconds)                    |


#### Example


In the following XML source:

```xml
<Book>
   <Title>The Best Seller</Title>
</Book>
```

If the following code is executed:
```4d
vAttrName:="Font"
vAttrVal:="Verdana"
DOM SET XML ATTRIBUTE(vElemRef;vAttrName;vAttrVal)
```
We get:
```xml
<Book>
   <Title Font=Verdana>The Best Seller</Title>
</Book>
```


#### System Variables or Sets




If the command has been executed correctly, the system variable OK is set to 1. Otherwise, it is set to 0 and an error is generated.

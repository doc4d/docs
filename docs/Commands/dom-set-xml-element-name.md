---
id: dom-set-xml-element-name
title: DOM SET XML ELEMENT NAME
displayed_sidebar: docs
---


<!-- REF #_command_.DOM SET XML ELEMENT NAME.Syntax-->DOM SET XML ELEMENT NAME ( elementRef ; elementName )<!-- END REF-->


<!-- REF #_command_.DOM SET XML ELEMENT NAME.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|elementRef|String|->|XML element reference|
|elementName|String|->|New name of element|
<!-- END REF -->


#### Description




The `DOM SET XML ELEMENT NAME` command modifies the name of the element set by *elementRef*.

Pass the reference of the element to rename in *elementRef* and the new name of the element in *elementName*. The command also takes charge of updating the open and close tags of the element.


#### Example


In the following XML source:

```xml
<Book>
   <Title>The Best Seller</Title>
</Book>```

If the following code is executed, with `vElemRef` containing the reference to the ‘Book’ element:
```4d
DOM SET XML ELEMENT NAME(vElemRef;"BestSeller")
```
We get:

```xml

<BestSeller>
   <Title>The Best Seller</Title>
</BestSeller>
```


#### System Variables or Sets




If the command was executed correctly, the system variable OK is set to 1. Otherwise, it is set to 0 and an error is generated.  


#### Error Handling




An error is generated when:

* The element reference is invalid<br/>

* The new name of the element to create is invalid (for example, if it starts with a number). <br/>

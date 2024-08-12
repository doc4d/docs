---
id: dom-append-xml-child-node
title: DOM Append XML child node
displayed_sidebar: docs
---


<!-- REF #_command_.DOM Append XML child node.Syntax-->DOM Append XML child node ( elementRef ; childType ; childValue ) -> Function result<!-- END REF-->


<!-- REF #_command_.DOM Append XML child node.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|elementRef|Text|->|XML element reference|
|childType|Longint|->|Type of child to append|
|childValue|Text, BLOB|->|Text or variable (Text or BLOB) whose value must be inserted as child node|
|Function result|Text|<-|Reference of child XML element|
<!-- END REF -->


#### Description




The `DOM Append XML child node` command is used to append the *childValue* value to the XML node designated by *elementRef*.

The type of node created is specified by the *childType* parameter. In this parameter you can pass one of the following constants:<br/>

| Constant                   | Type    | Value |
|----------------------------|---------|-------|
| XML CDATA                  | Longint | 7     |
| XML comment                | Longint | 2     |
| XML DATA                   | Longint | 6     |
| XML DOCTYPE                | Longint | 10    |
| XML ELEMENT                | Longint | 11    |
| XML processing instruction | Longint | 3     |


In *childValue*, pass the data to be inserted. You can pass a string or a 4D variable (string or BLOB). The contents of this parameter will always be converted into text.

**Note:** If the *elementRef* parameter designates the Document node (top level node), the command inserts a "Doctype" node before any other node. The same goes for processing instructions and comments, which are always inserted before the root node (but after the Doctype node).


#### Example


Adding a text type node:


```4d
Reference := DOM Create XML element (elementRef;"myElement")
DOM SET XML ELEMENT VALUE(Reference; "Hello")
temp:= DOM Create XML element (Reference; "br")
temp := DOM Append XML child node (Reference; XML DATA; "New")
temp := DOM Create XML element (Reference; "br")
temp := DOM Append XML child node(Reference; XML DATA; "York")
```

Result:

```xml
<myElement>Hello<br/>New<br/>York</myElement>
```

#### Example


Adding a processing instruction type node:


```4d
$Txt_instruction:="xml-stylesheet type = \"text/xsl\" href=\"style.xsl\""
Reference:= DOM Append XML child node(elementRef;XML Processing Instruction ; $Txt_instruction)
```

Result (inserted before first element):

```xml
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
```


#### Example


Adding a comment type node:


```4d
Reference := DOM Append XML child node (elementRef;XML Comment;"Hello world")
```

Result:

```xml
<!--Hello world-->
```

#### Example


Adding a CDATA type node:


```4d
Reference := DOM Append XML child node (elementRef; XML CDATA;"12 &lt; 18")
```

Result:

```xml

<element><![CDATA[12 < 18]]></element>

```

#### Example


Adding or replacing a Doctype declaration type node:


```4d
Reference :=DOM Append XML child node(elementRef;XML DOCTYPE;"Books SYSTEM \"Book.DTD\"")
```

Result (inserted before first element):

```xml

<!DOCTYPE Books SYSTEM  "Book.DTD">

```

#### Example


Adding or replacing an Element type node.

* if the `childValue` parameter is an XML fragment, it is inserted as child nodes:


```4d
Reference:=DOM Append XML child node(elementRef;XML ELEMENT;\
  "<child>simon</child><child>eva</child>")
```

Result:

```xml

<parent>
    <child>simon</child>
    <child>eva</child>
</parent>

```

* otherwise, a new blank child element is appended:


```4d
Reference:=DOM Append XML child node (elementRef;XML ELEMENT;"tbreak")
```

Result:

```xml

<parent>
     <tbreak/>
</parent>
```

If the contents of *childValue* are not valid, an error is returned.

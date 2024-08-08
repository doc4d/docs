---
displayed_sidebar: docs
id: sax-add-processing-instruction
title: SAX ADD PROCESSING INSTRUCTION
---

<!-- REF #_command_.SAX ADD PROCESSING INSTRUCTION.Syntax-->**SAX ADD PROCESSING INSTRUCTION** ( document ; statement )<!-- END REF-->


<!-- REF #_command_.SAX ADD PROCESSING INSTRUCTION.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|document|Time|->|Reference of open document|
|statement|Text|->|Statement to insert in the document|
<!-- END REF -->


#### Description



In the XML document referenced by document, the `SAX ADD PROCESSING INSTRUCTION` command adds an XML processing statement.  
A processing statement lets you indicate the application type and when necessary any additional parameters allowing you to process an unparsable external entity.  
The command formats the data of the statement in conformity with XML. However, the statements themselves are not parsed and it is up to the developer to make sure that they are valid.


#### Example


The following code:
```4d
vtInstruct:="xml-stylesheet type="+Char(Quote)+"text/xsl"+Char (Quote)+  
\"href="+Char(Quote)+"style.xsl"+Char (Quote)
SAX ADD PROCESSING INSTRUCTION ($DocRef;vtInstruct)
```
... will write the following line in the document:

```xml
&lt;?xml-stylesheet type="text/xsl" href="style.xsl"?&gt;
```



#### System Variables or Sets

If the command has been executed correctly, the system variable OK is set to 1. Otherwise, it is set to 0 and an error is generated.  


#### See also

[`SAX GET XML PROCESSING INSTRUCTION`](sax-get-xml-processing-instruction.md)

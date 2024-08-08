---
displayed_sidebar: docs
id: sax-add-xml-doctype
title: SAX ADD XML DOCTYPE
---

<!-- REF #_command_.SAX ADD XML DOCTYPE.Syntax-->**SAX ADD XML DOCTYPE** ( document ; docType )<!-- END REF-->


<!-- REF #_command_.SAX ADD XML DOCTYPE.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|document|Time|->|Reference of open document|
|docType|String|->|DocType to be added|
<!-- END REF -->


#### Description



The `SAX ADD XML DOCTYPE` command adds a DocType statement set by the *docType* parameter in the XML document referenced by document*.  
The DocType statement lets you indicate the type of XML in which the document has been written and to specify the Document Type Declaration (DTD) used. A DocType statement generally takes the following form: `<!DOCTYPE XML_type "DTD_address">`.


#### Example


The following statement:
```4d
vDocType := "SYSTEM Books \"Book.DTD\""
SAX ADD XML DOCTYPE ($DocRef;vDocType)
```
... will write the following line in the document:
```4d
<!DOCTYPE SYSTEM Books "Book.DTD">
```



#### System Variables or Sets



If the command has been executed correctly, the system variable OK is set to 1. Otherwise, it is set to 0.  


#### Error Handling



In the event of an error, the the command returns an error which can be intercepted using an error-handling method.


#### See also

[`SAX ADD XML COMMENT`](sax-add-xml-comment.md)

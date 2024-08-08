---
displayed_sidebar: docs
id: sax-add-xml-comment
title: SAX ADD XML COMMENT
---

<!-- REF #_command_.SAX ADD XML COMMENT.Syntax-->**SAX ADD XML COMMENT** ( document ; comment )<!-- END REF-->


<!-- REF #_command_.SAX ADD XML COMMENT.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|document|Time|->|Reference of open document|
|comment|String|->|Comment to be added|
<!-- END REF -->


#### Description



The `SAX ADD XML COMMENT` command adds a comment in the XML document referenced by *document*.  
An XML comment is a text whose contents will not be parsed by the XML interpreter. XML comments must be enclosed between the &lt;!-- and --&gt; characters.


#### Example


The following statement:
```4d
vComment:= "Created by 4D"
SAX ADD XML COMMENT ($DocRef;vComment)
```
... will write the following line in the document:
```4d
<!--Created by 4D-->
```



#### System Variables or Sets



If the command has been executed correctly, the system variable OK is set to 1. Otherwise, it is set to 0.  


#### Error Handling



In the event of an error, the command returns an error which can be intercepted using an error-handling method.

#### See also

[`SAX ADD XML DOCTYPE`](sax-add-xml-doctype.md)

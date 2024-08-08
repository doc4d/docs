---
displayed_sidebar: docs
id: sax-set-xml-declaration
title: SAX SET XML DECLARATION
---

<!-- REF #_command_.SAX SET XML DECLARATION.Syntax-->**SAX SET XML DECLARATION** ( document ; encoding {; standalone} )<!-- END REF-->


<!-- REF #_command_.SAX SET XML DECLARATION.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|document|Time|->|Reference of open document|
|encoding|String|->|XML document character set|
|standalone|Boolean|->|True = the document is standalone False (default) = document is not standalone|
<!-- END REF -->


#### Description



The `SAX SET XML DECLARATION` command initializes the XML document referenced in *document* using the specified encoding. Optionnally, you can set the *standalone* attribute.

- *encoding*: Indicates the character set used in the document. By default (if the command is not called), the UTF-8 character set (compressed Unicode) is used. <br/>**Note:** If you pass a character set that is not supported by 4D XML commands, UTF-8 will be used. Refer to Character Sets to see the list of character sets supported (UTF-8 is however recommended in most cases).
- *standalone*: Indicates whether the document is standalone (**True**) or if it needs other files or external resources to operate (**False**). By default (if the command is not called or if the parameter is omitted), the document is not standalone.

>You can specify the indentation of the document thanks to the [`XML SET OPTIONS`](xml-set-options.md) command before writing anything.

This command must be called one time per document and before the first XML set command in the document; otherwise, an error message will be generated.


#### Example


The following code:

```4d
SAX SET XML DECLARATION($DocRef;"UTF-16";True)
```
... will write this line in the document:

```xml
<<?xml version="1.0" encoding="UTF-16" standalone="yes"?>
```

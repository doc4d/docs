---
id: xml-get-options
title: XML GET OPTIONS
displayed_sidebar: docs
---


<!-- REF #_command_.XML GET OPTIONS.Syntax-->XML GET OPTIONS ( elementRef | document  ; selector ; value {; selector2 ; value2 ; ... ; selectorN ; valueN} )<!-- END REF-->


<!-- REF #_command_.XML GET OPTIONS.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|elementRef , document |Text|->|XML root element reference or Reference of open document|
|selector|Longint|->|Option to get|
|value|Longint|<-|Current value of option|
<!-- END REF -->


#### Description




The **XML GET OPTIONS** command is used to get the current value of one or more XML parameters for the current session and the current user. 

In *selector*, pass a constant indicating the option to get. The current value of the option is returned in the *value* parameter:


| Constant                       | Type    | Value | Comment|
|--------------------------------|---------|-------|-----------|
| XML binary encoding            | Longint | 5     | Specifies the way binary data will be converted. **Possible values:**<li>`XML Base64` (default value): binary data are simply converted to Base64</li><li>`XML data URI scheme`: binary data are converted to Base64 and the "data:;base64" header is added. This format mainly allows a browser to automatically decode a picture, and is also required for the insertion of  pictures. For more information, see `http://en.wikipedia.org/wiki/Data_URI_scheme`.</li>|
| XML BOM                        | Longint | 9     | Specifies if XML documents include BOM.**Possible values:** <li>`XML default` (default): use current database settings. By default, BOM is not included - except in databases/projects created with 4D versions up to v19.x, where BOM is included. See also Compatibility settings. </li><li> `XML enabled`: include BOM</li><li> `XML disabled`: do not include BOM</li> |
| XML date encoding              | Longint | 2     | Specifies the way 4D dates will be converted. For example, !01/01/2003! in the Paris time zone.**Possible values:**<li>`XML ISO` (default value): use of the format xs:datetime without indication of time zone. Result: "2003-01-01". The time part, if it is present in the 4D value (via SQL) is lost. </li><li> `XML local`: use of the format xs:date with indication of time zone. Result: "2003-01-01 +01:00". The time part, if it is present in the 4D value (via SQL) is lost. </li><li> `XML datetime local`: use of the format xs:dateTime (ISO 8601). Indication of time zone. This format allows the time part to be kept, if it is present in the 4D value (via SQL). Result: "&lt;Date&gt;2003-01-01T00:00:00 +01:00&lt;/Date&gt;". </li><li>`XML UTC`: use of the format xs:date. Result: "2003-01-01Z". The time part, if it is present in the 4D value (via SQL) is lost. </li><li> `XML datetime UTC`: use of the format xs:dateTime (ISO 8601). This format allows the time part to be kept, if it is present in the 4D value (via SQL). Result: "&lt;Date&gt;2003-01-01T00:00:00Z&lt;/Date&gt;".</li>|
| XML DOM case sensitivity       | Longint | 8     | Specifies the case sensitivity regarding element names for [`DOM Get XML element`](dom-get-xml-element.md) and [`DOM Count XML elements`](dom-count-xml-elements.md) commands. **Possible values:**<li> `XML case sensitive` (default value): commands are case sensitive.</li><li> `XML case insensitive`: commands are not case sensitive.</li> |
| XML external entity resolution | Longint | 7     | Controls whether external entities are resolved in XML documents. For security reasons, by default both DOM and SAX 4D XML parsers do not allow external entity resolution. Note that the scope of this selector is the calling process (if preemptive) or all cooperative processes (if called from a cooperative process). It globally applies to all XML documents (the first parameter is ignored, you can pass an empty string). **Possible values:**<li> `XML enabled`: allow external entity resolution in XML documents</li><li> `XML disabled` (default value): disallow external entity resolution (an external entity declaration generates a parser error)</li> |
| XML indentation       | Longint | 4     | Specifies the indentation of the XML `document`. **Possible values:** <li>`XML with indentation` (default value): the document is indented.</li><li> `XML no indentation`: the document is not indented; its contents are placed in a single line.</li>|
| XML line ending                | Longint | 10    | End-of-line characters in written XML documents.**Possible values:** <li>`XML default` (default): use current database settings. Default is LF on macOS and CRLF on Windows. However on macOS, in databases/projects created with 4D versions up to 19.x, default is CR for DOM and CRLF for SAX. See also Compatibility settings. </li><li>`XML LF`: Use LF (line feed)</li><li>`XML CR`: Use CR (carriage return)</li><li> `XML CRLF`: Use CR+LF</li>|
| XML picture encoding           | Longint | 6     | Specifies the way pictures must be converted (before encoding in Base64). **Possible values:** <li> `XML convert to PNG` (default value): pictures are converted to PNG before being encoded in Base64.</li><li> `XML native codec`: pictures are converted in their first native storage CODEC before being encoded in Base64. You must use these options to encode SVG pictures (see example for the [`XML SET OPTIONS`](xml-set-options.md) command).</li> |
| XML string encoding            | Longint | 1     | Specifies the way 4D strings are converted to element values. It does not concern the conversion to attributes for which XML imposes the use of escape characters. **Possible values:** <li>`XML with escaping` (default value): conversion of 4D strings to XML element values with replacement of characters. The Text type data are automatically parsed so that forbidden characters (&lt;&&gt;’) are replaced by XML entities (&amp;amp;&amp;lt;&amp;gt; &amp;apos;&amp;quot;).</li><li>`XML raw data`: 4D strings are sent as raw data; 4D does not carry out encoding or parsing. 4D values are converted if possible to XML fragments and inserted as a child of the target element. If a value cannot be considered as an XML fragment, it is inserted as raw data into a new CDATA node.</li> |
| XML time encoding              | Longint | 3     | Specifies the way 4D times are converted. For example, ?02/00/46? (Paris time). The encoding differs depending on whether you want to express a time or a duration. **Possible values for times:** <li>`XML datetime UTC`: time expressed in UTC (Universal Time Coordinated). Note that conversion to UTC is automatic. Result: "&lt;Duration&gt;0000-00-00T01:00:46Z&lt;/Duration&gt;". </li><li> `XML datetime local`: time expressed with the time difference of the machine of the 4D engine. Result: "&lt;Duration&gt;0000-00-00T02:00:46+01:00&lt;/Duration&gt;".</li><li> `XML datetime local absolute` (default value): time expressed without indication of time zone. No modification of the value. Result: "&lt;Duration&gt;0000-00-00T02:00:46&lt;/Duration&gt;".</li> **Possible values for durations:** <li> `XML seconds`: number of seconds since midnight; no modification of the value since it expresses a duration. Result: "&lt;Duration&gt;7246&lt;/Duration&gt;". </li><li> `XML duration`: duration expressed in compliance with XML Schema Part 2: Datatypes Second Edition. No modification of the value since it expresses a duration. Result: "&lt;Duration&gt;PT02H00M46S&lt;/Duration&gt;". </li>|

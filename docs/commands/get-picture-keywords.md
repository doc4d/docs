---
id: get-picture-keywords
title: GET PICTURE KEYWORDS
---


<!-- REF #_command_.GET PICTURE KEYWORDS.Syntax-->GET PICTURE KEYWORDS ( picture ; arrKeywords {; *} )<!-- END REF-->


<!-- REF #_command_.GET PICTURE KEYWORDS.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|picture|Picture field, Picture variable|->|Picture for which to get associated keywords|
|arrKeywords|Text array|<-|Array containing extracted keywords|
|*|Operator|->|If passed = use distinct values|
<!-- END REF -->


#### Description


<p>The <strong>GET PICTURE KEYWORDS</strong> command returns, in the arrKeywords array, the list of keywords associated with the picture passed as parameter.</p><p>Only keywords set using <strong>IPTC/Keywords</strong>  metadata are taken into account. Other types of metadata are ignored by the command. The command only works with picture types that support this type of metadata (JPEG, TIFF, etc.).</p><p><strong>Note:</strong> Metadata of the IPTC/Keywords type are now indexable in 4D (see the <em>Design Reference</em> manual).&nbsp;</p><p>If you pass the * parameter, the method only returns "distinct values" of keywords, in other words, a list with no duplicates.</p><p>If the picture does not contain keywords or IPTC/Keywords metadata, the command returns an empty array and no error is generated.</p><p><strong>Note:</strong> Results returned by this command can differ according to the current value of the "Consider only non-alphanumeric chars for keywords" database setting (see  the [`DOM GET XML CHILD NODES`](dom-get-xml-child-nodes.md)). </p>



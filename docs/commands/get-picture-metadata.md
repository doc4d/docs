---
id: get-picture-metadata
title: GET PICTURE METADATA
---


<!-- REF #_command_.GET PICTURE METADATA.Syntax-->GET PICTURE METADATA ( picture ; metaName ; metaContents {; metaName2 ; metaContents2 ; ... ; metaNameN ; metaContentsN} )<!-- END REF-->


<!-- REF #_command_.GET PICTURE METADATA.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|picture|Picture|->|Picture whose metadata you want to get|
|metaName|Text|->|Name or path of block to get|
|metaContents|Variable|<-|Metadata contents|
<!-- END REF -->


#### Description


<p>The <strong>GET PICTURE METADATA</strong> command can be used to read the contents of the metadata (or meta-tags) found in picture (4D picture field or variable). For more information about metadata, please refer to the description of the [`SET PICTURE METADATA`](set-picture-metadata.md) command.</p> <p>In the metaName parameter, pass a string specifying the type of metadata to retrieve. You can pass:</p> <ul> <li>a constant from the Picture Metadata Names theme containing a tag path,</li> <li>the name of a complete block of metadata ("TIFF", "EXIF", "GPS" or "IPTC"),</li> <li>an empty string ("").</li> </ul> <p>Pass the variable intended to receive the metadata in the metaContents parameter.&nbsp;</p> <ul> <li>If you passed a tag path in metaName, the metaContents parameter will directly contain the value to get. The value will be converted to the type of the variable (if the variable type is not defined, the Text type is used by default). Variables of the Text type will be formatted in XML (XMP standard). You can pass an array when the metadata contains more than one value (this is the case, more particularly, for the `IPTC Keywords` tags).</li> <li>If you passed a block name or an empty string in metaName, the metaContents parameter must be a valid XML DOM element reference. In this case, the contents of the designated block (or all the blocks if you passed an empty string in metaName) is recopied into the element referenced.&nbsp;</li> </ul> <p>&nbsp;</p>


#### Example


Use of DOM tree structures


```4d
$xml:=DOM Create XML Ref ("Root") //Creation of an XML DOM tree

//Reception of TIFF metadata 
$_Xml_TIFF:=DOM Create XML element ($xml;"/Root/TIFF")
GET PICTURE METADATA(vPicture;"TIFF";$_Xml_TIFF)

//Reception of GPS metadata 
$_Xml_GPS:=DOM Create XML element($xml;"/Root/GPS")
GET PICTURE METADATA(vPicture;"GPS";$_Xml_GPS)
```



#### Example


Use of variables


```4d
C_DATE($dateAsDate) 
GET PICTURE METADATA(vPicture;TIFF Date Time;$dateAsDate) 
//only returns the date since $dateAsDate is of the Date type

C_TEXT($dateAsText) 
GET PICTURE METADATA(vPicture;TIFF Date Time;$dateAsText) 
//only returns the date but in XML format

C_INTEGER($urgency)
GET PICTURE METADATA(vPicture;IPTC Urgency;$urgency)
```



#### Example


Reception of tags with multiple values in arrays


```4d
ARRAY TEXT($tTkeywords;0) 
GET PICTURE METADATA(vPicture;IPTC Keywords;$tTkeywords)
```

After execution of the command, arrTkeywords contains for example: 


```4d
$arrTkeywords{1} = "France" 
$arrTkeywords{2} = "Europe"
```



#### Example


Reception of tags with multiple values in a Text variable


```4d
C_TEXT($vTwords;0) 
GET PICTURE METADATA(vPicture;IPTC Keywords;$vTwords) 
```

After execution of the command, <em>vTwords</em> contains for example "France;Europe".


#### Example


<p>The <em>OK</em> system variable returns 1 if the retrieval of the metadata has proceeded correctly and 0 if an error occurs or if at least one of the tags is not found. In all cases, the any values that can be read are returned.</p>



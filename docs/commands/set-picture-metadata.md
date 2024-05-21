---
id: set-picture-metadata
title: SET PICTURE METADATA
---


<!-- REF #_command_.SET PICTURE METADATA.Syntax-->SET PICTURE METADATA ( picture ; metaName ; metaContents {; metaName2 ; metaContents2 ; ... ; metaNameN ; metaContentsN} )<!-- END REF-->


<!-- REF #_command_.SET PICTURE METADATA.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|picture|Picture|->|Picture whose metadata you want to set|
|metaName|Text|->|Name or path of block to set|
|metaContents|Variable|->|Metadata contents|
<!-- END REF -->


#### Example


<p>The `SET PICTURE METADATA` command lets you set or modify the contents of the metadata (or meta-tags) found in the picture (4D picture field or variable), when they are modifiable.&nbsp;</p> <p>Metadata are additional information inserted into pictures. 4D lets you handled four types of standard metadata: EXIF, GPS, IPTC and TIFF.&nbsp;</p> <p><strong>Note:</strong> For a detailed description of these metadata types, you can consult the following documents: http://www.iptc.org/std/IIM/4.1/specification/IIMV4.1.pdf (IPTC) and http://exif.org/Exif2-2.PDF (TIFF, EXIF and GPS).&nbsp;</p> <p>In the metaName parameter, pass a string specifying the type of metadata to set or modify. You can pass:</p> <ul> <li>one of the constants from the Picture Metadata Names theme. This theme groups together all the tags supported by 4D. Each constant contains a tag path (for example, "TIFF/DateTime"),</li> <li>the name of a complete block of metadata ("TIFF", "EXIF", "GPS" or "IPTC"),</li> <li>an empty string ("").</li> </ul> <p>Pass the new values of the metadata in the metaContents parameter:</p> <ul> <li>If you passed a tag path constant in metaName, in the contents parameter you can pass the value to set directly or one of the appropriate constants from the Picture Metadata Values theme. The value can be of the Text, Longint, Real, Date or Time type, according to the metadata specified. You can use an array if the metadata contains more than one value. If you pass a string, it must be formated in XML (XMP standard). You can pass an empty string ("") in order to erase any existing metadata.&nbsp;If metaName is <em>undefined</em>, an empty string is used.</li> <li>If you passed a block name or an empty string in metaName, in the metaContents parameter you can pass the XML DOM reference of the element containing the metadata to set. In the case of an empty string, all the metadata will be modified.</li> </ul> <p><strong>Warning:</strong> Certain metadata are read only and therefore cannot be modified by the <strong>SET PICTURE METADATA</strong> command, for example `TIFF XResolution`/`TIFF YResolution`, `EXIF Color Space` or `EXIF Pixel X Dimension`/`EXIF Pixel Y Dimension`.</p> <p>Under Windows, if an error occurs during execution of the command, the <em>OK</em> variable is set to 0. Note that under Mac OS, for technical reasons, metadata writing errors are not detected. Therefore this command does not modify the <em>OK</em> variable under Mac OS.</p> <p><strong>Notes:</strong></p> <ul> <li>Only certain picture formats (more specifically, JPEG and TIFF) support metadata. Conversely, formats such as GIF or BMP do not accept metadata. When you convert a picture with metadata to a format that does not support it, then information is lost.</li> <li>Under OS X version 10.7 (Lion), a bug in the native framework used for encoding and decoding picture metadata may cause inaccuracies in GPS coordinates. In this case, updating to OS X 10.8 (Mountain Lion) or 10.9 (Maverick) is strongly recommended.</li> </ul>


#### Example


Setting several values of the "Keywords" metadata via arrays:


```4d
ARRAY TEXT($arrTkeywords;2) 
$arrTkeywords{1}:="France" 
$arrTkeywords{2}:="Europe" 
SET PICTURE METADATA(vPicture;IPTC Keywords;$arrTkeywords)
```



#### Example


Setting of GPS block via a DOM reference:


```4d
C_TEXT($domMetas)
$domMetas:=DOM Parse XML source("metas.xml")
C_TEXT($gpsRef)
$gpsRef:=DOM Find XML element ($domMetas;"Metadatas/GPS")
If (OK=1)
SET PICTURE METADATA(vImage;"GPS";$refGPS) 
//here $gpsRef actually points to the GPS element
...
End if
DOM CLOSE XML($domMetas)
```



#### Example


<p>When all the metadata are handled via a DOM element reference, the tags are stored as attributes attached to an element (a child of the referenced element) whose name is the block name (TIFF, IPTC, etc.). When a specific metadata block is manipulated, the block tags are stored as attributes that are directly attached to the element referenced by the command. </p>



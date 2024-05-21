---
id: picture-to-blob
title: PICTURE TO BLOB
---


<!-- REF #_command_.PICTURE TO BLOB.Syntax-->PICTURE TO BLOB ( picture ; pictureBlob ; codec )<!-- END REF-->


<!-- REF #_command_.PICTURE TO BLOB.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|picture|Picture|->|Picture field or variable|
|pictureBlob|BLOB|<-|BLOB to receive the converted picture|
|codec|String|->|Picture Codec ID|
<!-- END REF -->


#### Description


<p>The <strong>PICTURE TO BLOB</strong> command converts a picture stored in a 4D variable or field to another format and places the resulting picture in a BLOB.</p> <p>A picture 4D field or variable is passed in the picture parameter. In the pictureBlob parameter is passed a BLOB variable or field which should contain the converted picture. </p> <p>Pass in the codec parameter a string setting the conversion format.</p><p>A Codec can be an extension (for example, “.gif”) or a Mime type (for example “image/jpeg”). You can get a list of available Codecs via the [`PICTURE CODEC LIST`](picture-codec-list.md) command.</p> <p>Once the command has been executed, the pictureBlob contains the picture in the specified format.</p> <p>If the conversion was successful, the system variable OK is set to 1. If the conversion has failed (converter not available), OK is set to 0 and the generated BLOB is empty (0 byte).</p>


#### Example


You want to convert an image from a proprietary format to GIF format and 
display it on a static web page. You can use a code such as:


```4d
C_PICTURE($picture)
C_BLOB($BLOB)
C_TEXT($path)

$path:=Get
 4D folder(Current resources folder)+"Images"+Folder 
separator+"Sunrise.psd"//find the picture in the Images folder within 
the Resources folder
READ PICTURE FILE($path;$picture)//put the picture in the picture variable

PICTURE TO BLOB($picture;$BLOB;".gif")//convert the picture to ".gif" format
WEB SEND BLOB($BLOB;"image/gif")
```




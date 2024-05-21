---
id: get-picture-file-name
title: Get picture file name
---


<!-- REF #_command_.Get picture file name.Syntax-->Get picture file name ( picture ) -> Function result<!-- END REF-->


<!-- REF #_command_.Get picture file name.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|picture|Picture field, Picture variable|->|Picture for which to get default name|
|Function result|Text|<-|Default name of picture file|
<!-- END REF -->


#### Description


<p>The <strong>Get picture file name</strong> command returns the current default name of the picture passed as parameter.</p><p>The default name is used when exporting the picture to a disk file. It can be set automatically based on the original name of the picture file imported into the picture field or variable, or using the [`SET PICTURE FILE NAME`](set-picture-file-name.md) command. For more information, refer to the <em>Design Reference</em> manual. </p><p>If the picture does not have a default name, the command returns an empty string.</p>



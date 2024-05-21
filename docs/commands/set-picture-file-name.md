---
id: set-picture-file-name
title: SET PICTURE FILE NAME
---


<!-- REF #_command_.SET PICTURE FILE NAME.Syntax-->SET PICTURE FILE NAME ( picture ; fileName )<!-- END REF-->


<!-- REF #_command_.SET PICTURE FILE NAME.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|picture|Picture field, Picture variable|->|Picture for which to set the default name|
|fileName|Text|->|Default picture name|
<!-- END REF -->


#### Description


<p>The <strong>SET PICTURE FILE NAME</strong> command sets or changes the default file name for the picture passed as parameter.</p><p>This name may have been set automatically based on the original name of the picture file imported into the picture field or variable or during a prior call to <strong>SET PICTURE FILE NAME</strong>. </p><p>The default name is used as the file name when the picture is exported in a disk file. If the contents of the field are copied into a varaible or into another field, the default name is also copied. For more information, refer to the <em>Design Reference</em> manual. </p>



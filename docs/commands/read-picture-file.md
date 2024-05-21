---
id: read-picture-file
title: READ PICTURE FILE
---


<!-- REF #_command_.READ PICTURE FILE.Syntax-->READ PICTURE FILE ( fileName ; picture {; *} )<!-- END REF-->


<!-- REF #_command_.READ PICTURE FILE.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|fileName|String|->|Name or full pathname of the file to read, or empty string|
|picture|Picture|<-|Field or variable receiving picture|
|*|Operator|->|If passed = accept any type of file|
<!-- END REF -->


#### Description


<p>The <strong>READ PICTURE FILE</strong> command opens the picture saved in the fileName disk file and loads it in the picture 4D field or variable.</p> <p>You can pass in fileName the full pathname of the file to read, or a file name only. If you pass only the file name, it should be located next to the database structure file. Under Windows, the file extension must be indicated.<br/>If an empty string ("") is passed in fileName, the standard Open file dialog box appears and the user selects the file to be read, as well as the available formats.</p> <p>You can get the list of available formats using the [`PICTURE CODEC LIST`](picture-codec-list.md) command.</p> <p>You pass in picture the picture variable or field which will receive the picture read.</p> <p><strong>Note:</strong> The internal picture format is stored within the 4D variable or field.</p> <p>If you pass the optional * parameter, the command will accept any type of file. This means that you can work with pictures without necessarily having the suitable codecs (see the description of the [`BLOB TO PICTURE`](blob-to-picture.md) command).</p>


#### System Variables or Sets


<p>If the command is executed successfully, the system variable Document contains the full pathname to the open file and the system variable OK is set to 1. Otherwise, OK is set to 0.</p> 



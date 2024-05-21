---
id: picture-codec-list
title: PICTURE CODEC LIST
---


<!-- REF #_command_.PICTURE CODEC LIST.Syntax-->PICTURE CODEC LIST ( codecArray {; namesArray}{; *} )<!-- END REF-->


<!-- REF #_command_.PICTURE CODEC LIST.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|codecArray|String array|<-|IDs of available picture Codecs|
|namesArray|String array|<-|Names of picture Codecs|
|*|Operator|->|Return list of reading (decoding) Codecs|
<!-- END REF -->


#### Description


<p>The <strong>PICTURE CODEC LIST</strong> command fills the codecArray array with the list of picture Codec IDs that are available on the machine where it is executed. This list includes the Codec IDs of picture formats that are managed natively by 4D.</p> <p>The Codec IDs can be returned in the codecArray array in the following forms:</p> <ul><li>As an extension (for example, “.gif”)</li><li>As a Mime type (for example, “image/jpeg”)</li></ul><p><strong>Compatibility note:</strong> If QuickTime has been enabled in the database  (see the Pictures section), 4-character QuickTime codes can also be returned (for example “PNTG”).</p><p>The form returned by the command will depend on the way the Codec is recorded at the operating system level. The optional namesArray array can be used to retrieve the name of each Codec. These names are more explicit than the IDs. This array can be used, for example, to build and display a menu listing the available Codecs.</p><p>By default, if you do not pass the * parameter, the command returns only the Codecs that can be used to encode (write) pictures. These IDs can be used in the <span class="rte4d_prm">format</span> parameter of the picture export commands [`WRITE PICTURE FILE`](write-picture-file.md) and [`PICTURE TO BLOB`](picture-to-blob.md).<br/> If you pass the * parameter, the command also returns the list of codecs used for decoding (reading) the pictures. The two lists are not exclusive, certain reading and writing Codecs are identical. Codecs intended for encoding pictures may usually be used for decoding. On the other hand, decoding Codecs cannot necessarily be used for encoding. For example, the ".jpg" Codec will be found in both lists, whereas the ".xbmp" Codec will only be found in the list of reading (decoding) Codecs.</p><p></p>



---
id: get-picture-from-library
title: GET PICTURE FROM LIBRARY
---


<!-- REF #_command_.GET PICTURE FROM LIBRARY.Syntax-->GET PICTURE FROM LIBRARY ( picRef | picName ; picture )<!-- END REF-->


<!-- REF #_command_.GET PICTURE FROM LIBRARY.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|picRef , picName|Longint, String|->|Reference number of Picture Library graphic or Name of Picture Library graphic|
|picture|Picture variable|<-|Picture from the Picture Library|
<!-- END REF -->


#### Description


<p>The <strong>GET PICTURE FROM LIBRARY</strong> command returns in the picture parameter the Picture Library graphic whose reference number is passed in picRef or whose name is passed in <span class="rte4d_prm">picName</span>.</p> <p>If there is no picture with that reference number or name, <strong>GET PICTURE FROM LIBRARY</strong><span class="rte4d_cmd"></span> leaves picture unchanged. </p>


#### Example 1


 The following example returns in <span class="rte4d_prm">vgMyPicture</span> the picture whose reference number is stored in the local variable <span class="rte4d_prm">$vlPicRef</span>:
```4d
GET PICTURE FROM LIBRARY($vlPicRef;vgMyPicture)
```



#### Example 2


 The following example returns in <span class="rte4d_prm">$DDcom_Prot_MyPicture</span> the picture with the name "DDcom_Prot_Button1" stored in the Picture Library:
```4d
GET PICTURE FROM LIBRARY("DDcom_Prot_Button1";$DDcom_Prot_MyPicture)
```



#### Example 3


See the third example for the [`PICTURE LIBRARY LIST`](picture-library-list.md) command.<p></p>


#### System Variables and Sets


<p>If the Picture Library exists, the <span class="rte4d_cmd">OK</span> variable is set to 1. Otherwise, <span class="rte4d_cmd">OK</span> is set to zero.</p> 


#### Error Handling


<p>If there is not enough memory to return the picture, an error -108 is generated. You can catch this error using an error-handling method.</p> 



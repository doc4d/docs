---
id: picture-library-list
title: PICTURE LIBRARY LIST
---


<!-- REF #_command_.PICTURE LIBRARY LIST.Syntax-->PICTURE LIBRARY LIST ( picRefs ; picNames )<!-- END REF-->


<!-- REF #_command_.PICTURE LIBRARY LIST.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|picRefs|Longint array|<-|Reference numbers of the Picture Library graphics|
|picNames|String array|<-|Names of the Picture Library graphics|
<!-- END REF -->


#### Description


<p>The <strong>PICTURE LIBRARY LIST</strong> command returns the reference numbers and names of the pictures currently stored in the Picture Library of the database.</p> <p>After the call, you retrieve the reference numbers in the array picRefs and the names in the array picNames. The two arrays are synchronized: the nth element of picRefs is the reference number of the Picture Library graphic whose name is returned in the nth element of picNames.</p> <p>If necessary, the command automatically creates and sizes the picRefs and picNames arrays.</p> <p>The maximum length of a Picture Library graphic name is 255 characters.</p> <p>If there are no pictures in the Picture Library, both arrays are returned empty.</p> <p>To obtain the number of pictures currently stored in the Picture Library, use the&nbsp;[`Size of array`](size-of-array.md)<span class="rte4d_cmd"> </span>command to get the size of one of the two arrays.</p>


#### Example 1


 The following code returns the catalog of the Picture Library in the arrays <span class="rte4d_prm">alPicRef</span> and <span class="rte4d_prm">asPicName</span>:
```4d
PICTURE LIBRARY LIST(alPicRef;asPicName)
```



#### Example 2


 The following example tests whether or not the Picture Library is empty:
```4d
PICTURE LIBRARY LIST(alPicRef;asPicName)
If (Size of array(alPicRef)=0)
ALERT("The Picture Library is empty.")
Else
ALERT("The Picture Library contains "+String(Size of array(alPicRef))+" pictures.")
End if
```



#### Example 3


The following example exports the Picture Library to a document on disk:
```4d
PICTURE LIBRARY LIST($alPicRef;$asPicName)
$vlNbPictures:=Size of array($alPicRef)
If ($vlNbPictures&gt;0)
SET CHANNEL(12;"")
If (OK=1)
$vsTag:="4DV6PICTURELIBRARYEXPORT"
SEND VARIABLE($vsTag)
SEND VARIABLE($vlNbPictures)
gError:=0
For($vlPicture;1;$vlNbPictures)
$vlPicRef:=$alPicRef{$vlPicture}
$vsPicName:=$asPicName{$vlPicture}
GET PICTURE FROM LIBRARY($alPicRef{$vlPicture};$vgPicture)
If (OK=1)
SEND VARIABLE($vlPicRef)
SEND VARIABLE($vsPicName)
SEND VARIABLE($vgPicture)
Else
$vlPicture:=$vlPicture+1
gError:=-108
End if
End for
SET CHANNEL(11)
If (gError#0)
ALERT("The Picture Library could not be exported, retry with more memory.")
DELETE DOCUMENT (Document)
End if
End if
Else
ALERT("The Picture Library is empty.")
End if
```




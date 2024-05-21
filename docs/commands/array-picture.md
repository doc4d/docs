---
id: array-picture
title: ARRAY PICTURE
---


<!-- REF #_command_.ARRAY PICTURE.Syntax-->ARRAY PICTURE ( arrayName ; size {; size2} )<!-- END REF-->


<!-- REF #_command_.ARRAY PICTURE.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|arrayName|Array|->|Name of the array|
|size|Longint|->|Number of elements in the array, or Number of rows if size2 is specified|
|size2|Longint|->|Number of columns in a two-dimensional array|
<!-- END REF -->


#### Description


&nbsp;The `ARRAY PICTURE`<span class="rte4d_cmd"></span> command creates and/or resizes an array of Picture elements in memory. <ul><li>The arrayName parameter is the name of the array.</li><li>The size parameter is the number of elements in the array.The size2 parameter is optional; if size2 is specified, the command creates a two-dimensional array. In this case, size specifies the number of rows and size2 specifies the number of columns in each array. Each row in a two-dimensional array can be treated as both an element and an array. This means that while working with the first dimension of the array, you can use other array commands to insert and delete entire arrays in a two-dimensional array.</li></ul><p>While applying to an existing array:</p> <ul><li>If you enlarge the array size, the existing elements are left unchanged, and the new elements are initialized to empty pictures. This means that [`Picture size`](picture-size.md) applied to one of these elements will return <span class="rte4d_prm">0</span>.</li><li>If you reduce the array size, the last elements deleted from the array are lost.</li></ul>


#### Example 1


 This example creates a process array of 100 <span class="rte4d_typ">Picture</span> elements:
```4d
ARRAY PICTURE (agValues;100)
```



#### Example 2


 This example creates a local array of 100 rows of 50 <span class="rte4d_typ">Picture</span> elements:
```4d
ARRAY PICTURE ($agValues;100;50)
```



#### Example 3


 This example creates an interprocess array of <span class="rte4d_typ">Picture</span> elements and loads each picture into one of the elements of the array. The array’s size is equal to the number of <span class="rte4d_prm">'PICT'</span> resources available to the database. The array’s resource name starts with <span class="rte4d_prm">"User Intf/"</span>:
```4d
RESOURCE LIST("PICT";$aiResIDs;$asResNames)
ARRAY PICTURE (◊agValues;Size of array($aiResIDs))
$vlPictElem:=0
For ($vlElem;1;Size of array(◊agValues))
If ($asResNames{$vlElem}="User Intf/@")
$vlPictElem:=$vlPictElem+1
GET PICTURE RESOURCE("PICT";$aiResIDs{$vlElem};$vgPicture)
◊agValues{$vlPictElem}:=$vgPicture
End if
End for
ARRAY PICTURE (◊agValues;$vlPictElem)
```




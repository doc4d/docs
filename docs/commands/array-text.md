---
id: array-text
title: ARRAY TEXT
---


<!-- REF #_command_.ARRAY TEXT.Syntax-->ARRAY TEXT ( arrayName ; size {; size2} )<!-- END REF-->


<!-- REF #_command_.ARRAY TEXT.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|arrayName|Array|->|Name of the array|
|size|Longint|->|Number of elements in the array or Number of rows if size2 is specified|
|size2|Longint|->|Number of columns in a two-dimensional array|
<!-- END REF -->


#### Description


&nbsp;The `ARRAY TEXT` command creates and/or resizes an array of Text elements in memory. <ul><li>The arrayName parameter is the name of the array.</li><li>The size parameter is the number of elements in the array.</li><li>The size2 parameter is optional; if size2 is specified, the command creates a two-dimensional array. In this case, size specifies the number of rows and size2 specifies the number of columns in each array. Each row in a two-dimensional array can be treated as both an element and an array. This means that while working with the first dimension of the array, you can use other array commands to insert and delete entire arrays in a two-dimensional array.</li></ul><p>While applying `ARRAY TEXT` to an existing array:</p> <ul><li>If you enlarge the array size, the existing elements are left unchanged, and the new elements are initialized to "" (empty string).</li><li>If you reduce the array size, the last elements deleted from the array are lost.</li></ul>


#### Example 1


 This example creates a process array of 100 <span class="rte4d_typ">Text</span> elements:
```4d
ARRAY TEXT (atValues;100)
```



#### Example 2


 This example creates a local array of 100 rows of 50 <span class="rte4d_typ">Text</span> elements:
```4d
ARRAY TEXT ($atValues;100;50)
```



#### Example 3


 This example creates an interprocess array of 50 <span class="rte4d_typ">Text</span> elements and sets each element to the value “Element #” followed by its element number:
```4d
ARRAY TEXT (◊atValues;50)
For ($vlElem;1;50)
◊atValues{$vlElem}:="Element #"+String($vlElem)
End for
```




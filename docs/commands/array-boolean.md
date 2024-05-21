---
id: array-boolean
title: ARRAY BOOLEAN
---


<!-- REF #_command_.ARRAY BOOLEAN.Syntax-->ARRAY BOOLEAN ( arrayName ; size {; size2} )<!-- END REF-->


<!-- REF #_command_.ARRAY BOOLEAN.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|arrayName|Array|->|Name of the array|
|size|Longint|->|Number of elements in the array or Number of rows if size2 is specified|
|size2|Longint|->|Number of columns in a two-dimensional array|
<!-- END REF -->


#### Description


<p>The `ARRAY BOOLEAN` command creates and/or resizes an array of Boolean elements in memory.</p><p>The arrayName parameter is the name of the array.</p><p>The size parameter is the number of elements in the array.</p><p>The size2 parameter is optional; if size2 is specified, the command creates a two-dimensional array. In this case, size specifies the number of rows and size2 specifies the number of columns in each array. Each row in a two-dimensional array can be treated as both an element and an array. This means that while working with the first dimension of the array, you can use other array commands to insert and delete entire arrays in a two-dimensional array.</p><p>While applying `ARRAY BOOLEAN` to an existing array:</p> <ul><li>If you enlarge the array size, the existing elements are left unchanged, and the new elements are initialized to False.</li><li>If you reduce the array size, the last elements deleted from the array are lost.</li></ul><p><strong>Tip:</strong> In some contexts, an alternative to using Boolean arrays is using an Integer array where each element “means true” if different from zero and “means false” if equal to zero.</p>


#### Example 1


This example creates a process array of 100 <span class="rte4d_typ">Boolean </span>elements:
```4d
ARRAY BOOLEAN (abValues;100)
```



#### Example 2


This example creates a local array of 100 rows of 50 <span class="rte4d_typ">Boolean </span>elements:
```4d
ARRAY BOOLEAN ($abValues;100;50)
```



#### Example 3


This example creates an interprocess array of 50 <span class="rte4d_typ">Boolean </span>elements and sets each even element to True:
```4d
ARRAY BOOLEAN (◊abValues;50)
For ($vlElem;1;50)
◊abValues{$vlElem}:=(($vlElem%2)=0)
End for
```




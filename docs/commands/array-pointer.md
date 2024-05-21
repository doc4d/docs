---
id: array-pointer
title: ARRAY POINTER
---


<!-- REF #_command_.ARRAY POINTER.Syntax-->ARRAY POINTER ( arrayName ; size {; size2} )<!-- END REF-->


<!-- REF #_command_.ARRAY POINTER.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|arrayName|Array|->|Name of the array|
|size|Longint|->|Number of elements in the array, or Number of rows if size2 is specified|
|size2|Longint|->|Number of columns in a two-dimensional array|
<!-- END REF -->


#### Description


<p>The <strong>ARRAY POINTER</strong><span class="rte4d_cmd"></span> command creates or resizes an array of Pointer elements in memory.</p> <ul><li>The arrayName parameter is the name of the array.</li><li>The size parameter is the number of elements in the array.</li><li>The size2 parameter is optional; if size2 is specified, the command creates a two-dimensional array. In this case, size specifies the number of rows and size2 specifies the number of columns in each array. Each row in a two-dimensional array can be treated as both an element and an array. This means that while working with the firt dimension of the array, you can use other array commands to insert and delete entire arrays in a two-dimensional array.</li></ul><p>While applying <strong>ARRAY POINTER</strong> to an existing array:</p> <ul><li>If you enlarge the array size, the existing elements are left unchanged, and the new elements are initialized to null <span class="rte4d_prm">pointer</span>. This means that [`Is nil pointer`](is-nil-pointer.md) applied to one of these elements will return True.</li><li>If you reduce the array size, the last elements deleted from the array are lost.</li></ul>


#### Example 1


 This example creates a process array of 100 <span class="rte4d_typ">Pointer</span> elements:
```4d
ARRAY POINTER (apValues;100)
```



#### Example 2


 This example creates a local array of 100 rows of 50 <span class="rte4d_typ">Pointer</span> elements:
```4d
ARRAY POINTER ($apValues;100;50)
```



#### Example 3


This example creates an interprocess array of <span class="rte4d_typ">Pointer</span> elements and sets each element pointing to the table whose number is the same as the element. The size of the array is equal to the number of tables in the database. In the case of a deleted table, the row will return <span class="rte4d_cmd">[`Is nil pointer`](is-nil-pointer.md)</span>.
```4d
ARRAY POINTER (◊apValues;Get last table number)
For ($vlElem;1;Size of array(◊apValues);1;-1)
If(Is table number valid($vlElem))
◊apValues{$vlElem}:=Table($vlElem)
End if
End for
```




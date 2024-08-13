---
id: count-in-array
title: Count in array
displayed_sidebar: docs
---


<!-- REF #_command_.Count in array.Syntax-->**Count in array** ( array ; value ) -> Function result<!-- END REF-->


<!-- REF #_command_.Count in array.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|array|Array|->|Array where count should occur|
|value|Expression|->|Value to count|
|Function result|Longint|<-|Number of instances found|
<!-- END REF -->


#### Description




The **Count in array** command returns the number of times `value` is found in `array`.

This command can be used with the following array types: Text, number, Date, Pointer, Object, and Boolean. The `array` and `value` parameters must be the same type or compatible.

**Note:** With Object arrays, you can only use object references in the `value` parameter. 

If no element in `array` matches `value`, the command returns 0.


#### Example


The following example allows displaying the number of selected lines in a list box: 


```4d
//tBList is the name of a List box column array
ALERT(String(Count in array(tBList;True))+" line(s) selected in the list box")
```



#### Example


You want to count object references in an object array:


```4d
ARRAY OBJECT($objects; 100)
$o1:={a: 10; b: "xyz"}
$o2:={a: 10; b: "xyz"}

$objects{20}:=$o1
$objects{21}:=$o1
$objects{22}:=$o1

var $n : Integer

$n:=Count in array($objects; $o1) // n = 3 
$n:=Count in array($objects; $o2) // n = 0

```




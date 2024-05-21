---
id: array-to-collection
title: ARRAY TO COLLECTION
---


<!-- REF #_command_.ARRAY TO COLLECTION.Syntax-->ARRAY TO COLLECTION ( collection ; array {; propertyName}{; array2 ; propertyName2 ; ... ; arrayN ; propertyNameN} )<!-- END REF-->


<!-- REF #_command_.ARRAY TO COLLECTION.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|collection|Collection|<-|Collection to receive the array data|
|array|Array|->|Array to copy to the collection; if propertyName passed, array to copy to the values of propertyName in the collection|
|propertyName|Text|->|Object property name whose value to fill with array elements|
<!-- END REF -->


#### Description


<p>The <strong>ARRAY TO COLLECTION</strong> command copies one or more array(s) into the elements or the propertyName values of collection.</p><p>This command can work with a collection that contains values or a collection that contains objects, in which case the&nbsp;propertyName parameter(s) are mandatory. </p><ul><li>If you omit the propertyName parameter, the command copies all array elements to collection. If collection was not empty, existing elements are replaced and new elements are added if the size of array was larger than the collection length. After the command is executed, the collection length is identical to the size of array.</li><li>If you pass one or more propertyName(s) parameters, the command creates or replaces elements of collection as objects. Each object is filled with a property whose name is provided in the propertyName  parameter, and whose value is the corresponding array element. If collection was not empty, existing  elements are replaced and new elements are added if the size of array  was larger than the collection. After the command is executed, the collection length is the same as the size of the largest array.</li></ul>


#### Example


You want to copy a text array in a collection:


```4d
C_COLLECTION($colFruits)
$colFruits:=New collection
ARRAY TEXT($artFruits;4)
$artFruits{1}:="Orange"
$artFruits{2}:="Banana"
$artFruits{3}:="Apple"
$artFruits{4}:="Grape"
ARRAY TO COLLECTION($colFruits;$artFruits)
//$colFruits[0]="Orange"
//$colFruits[1]="Banana"
//...
```



#### Example


You want to copy field values in a collection of objects through arrays:


```4d
C_COLLECTION($col)
$col:=New collection
ARRAY TEXT($artCity;0)
ARRAY LONGINT($arLZipCode;0)
SELECTION TO ARRAY([Customer]City;$artCity)
SELECTION TO ARRAY([Customer]Zipcode;$arLZipCode)
ARRAY TO COLLECTION($col;$artCity;"cityName";$arLZipCode;"Zip")
//$col[0]={"cityName":"Cleveland","Zip":35049}
//$col[1]={"cityName":"Blountsville","Zip":35031}
//...
```



#### Example


You want to copy a text array in a shared collection:


```4d
ARRAY TEXT($at;1)

APPEND TO ARRAY($at;"Apple")
APPEND TO ARRAY($at;"Orange")
APPEND TO ARRAY($at;"Grape")

C_COLLECTION($sharedCol)
$sharedCol:=New shared collection

Use ($sharedCol)
ARRAY TO COLLECTION($sharedCol;$at)
End use
```




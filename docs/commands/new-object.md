## New object


<!-- REF #_command_.New object.Syntax-->New object {( property ; value {; property2 ; value2 ; ... ; propertyN ; valueN} )} -> Function result<!-- END REF-->


<!-- REF #_command_.New object.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|property|Text|->|Name of property to create|
|value|Text, Date, Boolean, Pointer, Number, Object|->|Value of property|
|Function result|Object|<-|New language object|
<!-- END REF -->


#### Description


<p>The <strong>New object</strong> command creates a new empty or prefilled object and returns its reference. </p><p>If you do not pass any parameters, <strong>New object</strong> creates an empty object and returns its reference. You must assign this reference to a 4D variable declared with [`C_OBJECT`](c_object.md) or a 4D object field.</p><p><strong>Note:</strong> [`C_OBJECT`](c_object.md) declares a variable of the Object type but does not create any object. </p><p>Optionnally, you can prefill the new object by passing one or several property/value pairs as parameters:</p><ul><li>In the property parameter, pass the label of the property to be created. Note that the property parameter is case sensitive.&nbsp;</li><li>In the value parameter, pass the value you want to set for the property. Several data types are supported. Note that:<br/><ul><li>if you pass a pointer, it is kept as is; it will evaluated when using commands such as [`JSON Stringify`](json-stringify.md),</li><li>dates  are stored as "yyyy-mm-dd" dates or strings with the "YYYY-MM-DDTHH:mm:ss.SSSZ" format, according to the current "dates inside objects" database setting (see Compatibility page). When converting 4D  dates into text prior to storing them in the object, by default the  program takes the local time zone into account. You can modify this  behavior using the <U>Dates inside objects</U> selector of the [`SET DATABASE PARAMETER`](set-database-parameter.md) command.</li><li>if you pass a time, it is stored as a number of milliseconds (Real).</li></ul></li></ul>


#### Example


This command can create empty of filled objects:


```4d
C_OBJECT($obj1)
C_OBJECT($obj2)
C_OBJECT($obj3)
$obj1:=New object 
// $obj1 = {}
$obj2:=New object("name";"Smith") 
// $obj2 = {name:Smith}
$obj3:=New object("name";"Smith";"age";40) 
// $obj3 = {name:Smith,age:40}
```



#### Example


Creating a new object with an object as parameter value: 


```4d
C_OBJECT($Children;$Contact)

//Creating an object array
ARRAY TEXT($arrChildren;3)
$arrChildren{1}:="Richard"
$arrChildren{2}:="Susan"
$arrChildren{3}:="James"
OB SET ARRAY($Children;"Children";$arrChildren)

//Initializing the object
$Contact:=New object("FirstName";"Alan";"LastName";"Parker";"age";30;"Children";$Children)
// $Contact = {FirstName:Alan,LastName:Parker,age:30,Children:{Children:[Richard,Susan,James]}}
```



#### Example


This command is useful to pass objects as parameters:


```4d
C_OBJECT($measures)
$measures:=Get database measures(New object("path";"DB.cacheReadBytes";"withHistory";True;"historyLength";120))
```



#### Example


With this command, you can easily handle objects in loops:


```4d
ARRAY OBJECT($refs;0)
C_LONGINT (vCounter)

For (vCounter;1;100)
APPEND TO ARRAY($refs;New object("line";"Line number "+String(vCounter)))
End for 
```




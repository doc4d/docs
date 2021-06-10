---
id: variant
title: Variant
---

Variant es un tipo de variable que permite encapsular datos de todo tipo válido y estándar en una variable. Normalmente, este tipo de variable puede utilizarse para escribir código genérico que devuelva o reciba valores cuyo tipo no se conoce. Este es el caso, por ejemplo, del código que maneja los atributos de objeto.

Una variable de tipo variant puede contener un valor de los tipos de datos siguientes:

- BLOB
- booleano
- colección
- fecha
- entero largo
- objeto
- imagen
- puntero
- real
- texto
- hora
- null
- indefinido

> Las matrices no pueden almacenarse en variables de tipo variant.

Tanto en modo interpretado como en compilado, a una misma variable variant se le pueden asignar contenidos de diferentes tipos. A diferencia de los tipos de variable estándar, el tipo de contenido de la variable variant es diferente del tipo de variable variant mismo. Por ejemplo:

```4d
C_VARIANT($variant)

$variant:="hello world"
$vtype:=Type($variant) // 12 (Is variant)
$vtypeVal:=Value type($variant) // 2 (Is text)

$variant:=42
$vtype:=Type($variant) // 12 (Is variant)
$vtypeVal:=Value type($variant) // 1 (Is real)
```

You can use variant variables wherever variables are expected, you only need to make sure than the variable content data type is of the expected type. When accessing variant variables, only their current value is taken into account. Por ejemplo:

```4d
C_VARIANT($v)
$v:="hello world"
$v2:=$v //assign variable to another variable

$t:=Type($v) // 12 (Is variant)
$t2:=Type($v2) // 2 (Is text)
```

Variant can be used to declare method parameters ($0, $1,...) that can be of various types. In this case, you can build your code by testing the parameter value type, for example:

```4d
C_VARIANT($1)
Case of
: (Value type($1)=Is longint)
...
: (Value type($1)=Is text)
...
End case
```

> When variant variables are not necessary (i.e. when the data type is known), it is recommended to use regular typed variables. Regular typed variables provide better performance, make code more clear and are helpful for the compiler to prevent bugs related to passing unexpected data types. 
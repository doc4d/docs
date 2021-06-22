---
id: clases
title: Clases
---


## Generalidades

El lenguaje 4D soporta el concepto de **clases**. En un lenguaje de programación, el uso de una clase permite definir el comportamiento de un objeto con propiedades y funciones asociadas.

Una vez definida una clase usuario, puede **instanciar** los objetos de esta clase en cualquier parte de su código. Cada objeto es una instancia de su clase. Una clase puede extenderse a otra clase con la palabra clave [`extender`](#class-extends-classname), y entonces hereda sus [funciones](#function).

> El modelo de clases en 4D es similar al de las clases en JavaScript, y se basa en una cadena de prototipos.

Por ejemplo, puede crear una clase `Person` con la siguiente definición:

```4d  
//Class: Person.4dm
Class constructor($firstname : Text; $lastname : Text)
    This.firstName:=$firstname
    This.lastName:=$lastname

Function sayHello()->$welcome : Text
    $welcome:="Hello "+This.firstName+" "+This.lastName
```

En un método, creando una "Persona":

```
var $person : cs.Person //object of Person class  
var $hello : Text
$person:=cs.Person.new("John";"Doe")
// $person:{firstName: "John"; lastName: "Doe" }
$hello:=$person.sayHello() //"Hello John Doe"
```



## Gestión de clases

### Definición de una clase

Una clase usuario en 4D está definida por un archivo de método específico (.4dm), almacenado en la carpeta `/Project/Sources/Classes/`. El nombre del archivo es el nombre de la clase.

Al nombrar las clases, debe tener en cuenta las siguientes reglas:

- Un [nombre de clase](identifiers.md#classes) debe cumplir con [reglas de denominación de las propiedades](identifiers.md#object-properties).
- Class names are case sensitive.
- No se recomienda dar el mismo nombre a una clase y a una tabla de la base, para evitar conflictos.

Por ejemplo, si quiere definir una clase llamada "Polygon", tiene que crear el siguiente archivo:

- Project folder
    + Project
        * Sources
            - Clases
                + Polygon.4dm

### Borrar una clase

Para eliminar una clase existente, puede:

- en su disco, elimine el archivo de clase .4dm de la carpeta "Classes",
- en el Explorador 4D, seleccionar la clase y hacer clic en ![](assets/en/Users/MinussNew.png) o elegir **Mover a la papelera** en el menú contextual.


### Utilizar la interfaz 4D

Los archivos de clase se almacenan automáticamente en la ubicación adecuada cuando se crean a través de la interfaz de 4D, ya sea a través del menú **Archivo** o del Explorador.

#### Menú Archivo y barra de herramientas

Puede crear un nuevo archivo de clase para el proyecto seleccionando **Nuevo > Clase...** en el menú **Archivo** de 4D Developer o en la barra de herramientas.

También puede utilizar el atajo **Ctrl+Mayús+Alt+k**.

#### Explorador

En la página **Métodos** del Explorador, las clases se agrupan en la categoría **Clases**.

Para crear una nueva clase, puede:

- seleccione la categoría **Clases** y haga clic en el botón ![](assets/en/Users/PlussNew.png).
- seleccione **Nueva clase...** en el menú de acciones de la parte inferior de la ventana del Explorador, o en el menú contextual del grupo Clases. ![](assets/en/Concepts/newClass.png)
- seleccione **Nueva > Clase...** en el menú contextual de la página de inicio del Explorador.

#### Soporte del código de clase

En las diferentes ventanas 4D (editor de código, compilador, depurador, explorador de ejecución), el código de la clase se maneja básicamente como un método proyecto con algunas especificidades:

- En el editor de código:
    - una clase no puede ser ejecutada
    - una función de clase es un bloque de código
    - **Ir a la definición** en un objeto miembro busca las declaraciones de función de clase; por ejemplo, "$o.f()" encontrará "Function f".
    - **Buscar referencias** en la declaración de función de clase busca la función utilizada como miembro de objeto; por ejemplo, "Function f" encontrará "$o.f()".
- En el explorador de ejecución y el depurador, las funciones de clase se muestran con el formato \<ClassName> constructor o \<ClassName>.\<FunctionName> formato.

## Class stores

Las clases disponibles son accesibles desde sus class stores. Hay dos class stores disponibles:

- `cs` para el class store usuario
- `4D` para el class store integrado


### cs

#### cs -> classStore

| Parameter  | Tipo   |    | Descripción                                       |
| ---------- | ------ | -- | ------------------------------------------------- |
| classStore | objeto | <- | Class store usuario para el proyecto o componente |

El comando `cs` devuelve la class store usuario para el proyecto o componente actual. The `cs` command returns the user class store for the current project or component. Por defecto, sólo las [clases ORDA](ORDA/ordaClasses.md) están disponibles.

#### Ejemplo

Quiere crear una nueva instancia de un objeto de `myClass`:

```4d
$instance:=cs.myClass.new()
```

### 4D

#### 4D -> classStore

| Parameter  | Tipo   |    | Descripción    |
| ---------- | ------ | -- | -------------- |
| classStore | objeto | <- | Class store 4D |

El comando `4D` devuelve la class store 4D integrada disponible. Ofrece acceso a APIs específicas como [CryptoKey](API/cryptoKeyClass.md).

#### Ejemplo

Quiere crear una nueva llave en la clase `CryptoKey`:

```4d
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))
```




## El objeto clase

Cuando una clase es [definida](#class-definition) en el proyecto, se carga en el entorno del lenguaje 4D. Una clase es un objeto en sí mismo, de ["Class" class](API/classClass.md). Un objeto class tiene las propiedades y funciones siguientes:

- cadena [`name`](API/classClass.md#name)
- objeto [`superclass`](API/classClass.md#superclass) (null si ninguno)
- función [`new()`](API/classClass.md#new), que permite instanciar objetos de clase.

Además, un objeto clase puede hacer referencia a un objeto [`constructor`](#class-constructor) (opcional).

Un objeto de clase es un [objeto compartido](shared.md) y, por tanto, se puede acceder a él desde diferentes procesos de 4D simultáneamente.

### Herencia

Si una clase hereda de otra clase (es decir, se utiliza la palabra clave [Class extends](classes.md#class-extends-classname) en su definición), la clase padre es su [`superclass`](API/classClass.md#superclass).

Cuando 4D no encuentra una función o una propiedad en una clase, la busca en su [`superclass`](API/classClass.md#superclass); si no la encuentra, 4D sigue buscando en la superclase de la superclase, y así sucesivamente hasta que no haya más superclase (todos los objetos heredan de la superclase "Object").


## Palabras clave de clase

Specific 4D keywords can be used in class definitions:

- `Function <Name>` to define class functions of the objects.
- `Class constructor` to define the properties of the objects.
- `Class extends <ClassName>` to define inheritance.


### Function

#### Sintaxis

```4d
Function <name>({$parameterName : type; ...}){->$parameterName : type}
// code
```

Class functions are specific properties of the class. Son objetos de la clase [4D.Function](API/formulaClass.md#about-4dfunction-objects).

In the class definition file, function declarations use the `Function` keyword, and the name of the function. The function name must be compliant with [property naming rules](Concepts/identifiers.md#object-properties).

> **Consejo:** comenzar el nombre de la función con un carácter de subrayado ("_") excluirá la función de las funcionalidades de autocompletado en el editor de código 4D. For example, if you declare `Function _myPrivateFunction` in `MyClass`, it will not be proposed in the code editor when you type in `"cs.MyClass. "`.

Immediately following the function name, [parameters](#parameters) for the function can be declared with an assigned name and data type, including the return parameter (optional). Por ejemplo:

```4d
Function computeArea($width : Integer; $height : Integer)->$area : Integer
```

Within a class function, the `This` command is used as the object instance. Por ejemplo:

```4d  
Function setFullname($firstname : Text; $lastname : Text)
    This.firstName:=$firstname
    This.lastName:=$lastname

Function getFullname()->$fullname : Text
    $fullname:=This.firstName+" "+Uppercase(This.lastName)
```

For a class function, the `Current method name` command returns: "*\<ClassName>.\<FunctionName>*", for example "MyClass.myMethod".

In the application code, class functions are called as member methods of the object instance and can receive [parameters](#class-function-parameters) if any. The following syntaxes are supported:

- use of the `()` operator. Por ejemplo, `miObjeto.methodName("hola")`
- uso de un método miembro de la clase "4D.Function":
    - [`apply()`](API/formulaClass.md#apply)
    - [`call()`](API/formulaClass.md#call)

> **Advertencia de seguridad de hilos:** si una función de la clase no es segura para hilos y es llamada por un método con el atributo "Puede ejecutarse en un proceso apropiativo": - el compilador no genera ningún error (que es diferente en comparación con los métodos Clásicos), - un error es lanzado por 4D sólo en tiempo de ejecución.




#### Parámetros

Los parámetros de las funciones se declaran utilizando el nombre del parámetro y el tipo de parámetro, separados por dos puntos. The parameter name must be compliant with [property naming rules](Concepts/identifiers.md#object-properties). Multiple parameters (and types) are separated by semicolons (;).

```4d  
Function add($x; $y : Variant; $z : Integer; $xy : Object)
```
> If the type is not stated, the parameter will be defined as `Variant`.

You declare the return parameter (optional) by adding an arrow (->) and the return parameter definition after the input parameter(s) list. For example:

```4d
Function add($x : Variant; $y : Integer)->$result : Integer
```

You can also declare the return parameter only by adding `: type`, in which case it will automatically be available through $0. For example:

```4d
Function add($x : Variant; $y : Integer): Integer
    $0:=$x+$y
```
> The [classic 4D syntax](parameters.md#sequential-parameters) for method parameters can be used to declare class function parameters. Both syntaxes can be mixed. For example:
> 
> ```4d
> Function add($x : Integer)
>   var $2; $value : Integer
>   var $0 : Text
>   $value:=$x+$2
>   $0:=String($value)
> ```



#### Example

```4d
// Class: Rectangle
Class constructor($width : Integer; $height : Integer)
    This.name:="Rectangle"
    This.height:=$height
    This.width:=$width

// Function definition
Function getArea()->$result : Integer
    $result:=(This.height)*(This.width)
```

```4d
// In a project method
var $rect : cs.Rectangle
var $area : Real

$rect:=cs.Rectangle.new(50;100)  
$area:=$rect.getArea() //5000
```



### Class constructor

#### Syntax

```4d
// Class: MyClass
Class Constructor({$parameterName : type; ...})
// code
```

A class constructor function, which can accept [parameters](#parameters), can be used to define a user class.

En ese caso, cuando se llama a la función [`new()`](API/classClass.md#new), se llama al constructor de la clase con los parámetros que se pasan opcionalmente a la función `new()`.

Para una función clase constructor, el comando `Current method name` devuelve: "*\<ClassName>:constructor*", por ejemplo "MiClase:constructor".



#### Ejemplo:

```4d
// Class: MyClass
// Class constructor of MyClass
Class Constructor ($name : Text)
    This.name:=$name
```

```4d
// En un método de proyecto.
// Se puede instanciar un objeto
var $o : cs.MyClass
$o:=cs.MyClass.new("HolaMundo")  
// $o = {"nombre": "HolaMundo"}
```




### Class extends \<ClassName>

#### Syntax

```4d
// Class: ChildClass
Class extends <ParentClass>
```

La palabra clave `Class extends` se utiliza en la declaración de clases para crear una clase de usuario que sea hija de otra clase de usuario. The child class inherits all functions of the parent class.

Class extension must respect the following rules:

- A user class cannot extend a built-in class (except 4D.Object which is extended by default for user classes)
- A user class cannot extend a user class from another project or component.
- A user class cannot extend itself.
- It is not possible to extend classes in a circular way (i.e. "a" extends "b" that extends "a").

Breaking such a rule is not detected by the code editor or the interpreter, only the compiler and `check syntax` will throw an error in this case.

An extended class can call the constructor of its parent class using the [`Super`](#super) command.

#### Example

This example creates a class called `Square` from a class called `Polygon`.

```4d
//Class: Square
//path: Classes/Square.4dm 

Class extends Polygon

Class constructor ($side : Integer)

    // It calls the parent class's constructor with lengths
    // provided for the Polygon's width and height
    Super($side;$side)
    // In derived classes, Super must be called before you
    // can use 'This'
    This.name:="Square"

    Function getArea()
        C_LONGINT($0)
        $0:=This.height*This.width
```

### Super


#### Super {( param{;...;paramN} )} {-> Object}

| Parameter | Type   |    | Description                                    |
| --------- | ------ | -- | ---------------------------------------------- |
| param     | mixed  | -> | Parameter(s) to pass to the parent constructor |
| Result    | object | <- | Object's parent                                |

The `Super` keyword allows calls to the `superclass`, i.e. the parent class.

`Super` serves two different purposes:

- inside a [constructor code](#class-constructor), `Super` is a command that allows to call the constructor of the superclass. When used in a constructor, the `Super` command appears alone and must be used before the `This` keyword is used.
    - If all class constructors in the inheritance tree are not properly called, error -10748 is generated. It's 4D developer to make sure calls are valid.
    - If the `This` command is called on an object whose superclasses have not been constructed, error -10743 is generated.

    - If `Super` is called out of an object scope, or on an object whose superclass constructor has already been called, error -10746 is generated.

```4d
// inside myClass constructor
var $text1; $text2 : Text
Super($text1) //calls superclass constructor with a text param
This.param:=$text2 // use second param
```

- inside a [class member function](#class-function), `Super` designates the prototype of the superclass and allows to call a function of the superclass hierarchy.

```4d
Super.doSomething(42) //calls "doSomething" function  
//declared in superclasses
```

#### Example 1

This example illustrates the use of `Super` in a class constructor. The command is called to avoid duplicating the constructor parts that are common between `Rectangle` and `Square` classes.

```4d
// Class: Rectangle
Class constructor($width : Integer; $height : Integer)
    This.name:="Rectangle"
    This.height:=$height
    This.width:=$width


Function sayName()
    ALERT("Hi, I am a "+This.name+".")

// Function definition
Function getArea()
    var $0 : Integer
    $0:=(This.height)*(This.width)
```

```4d
//Class: Square

Class extends Rectangle

Class constructor ($side : Integer)

    // It calls the parent class's constructor with lengths
    // provided for the Rectangle's width and height
    Super($side;$side)
    // In derived classes, Super must be called before you
    // can use 'This'
    This.name:="Square"

Function getArea()
    C_LONGINT($0)
    $0:=This.height*This.width
```

#### Example 2

This example illustrates the use of `Super` in a class member method. You created the `Rectangle` class with a function:

```4d
//Class: Rectangle

Function nbSides()
    var $0 : Text
    $0:="I have 4 sides"
```

You also created the `Square` class with a function calling the superclass function:

```4d
//Class: Square

Class extends Rectangle

Function description()
    var $0 : Text
    $0:=Super.nbSides()+" which are all equal"
```

Then you can write in a project method:

```4d
var $square : Object
var $message : Text
$square:=cs.Square.new()
$message:=$square.description() //I have 4 sides which are all equal
```

### This

#### This -> Object

| Parameter | Type   |    | Description    |
| --------- | ------ | -- | -------------- |
| Result    | object | <- | Current object |

The `This` keyword returns a reference to the currently processed object. In 4D, it can be used in [different contexts](https://doc.4d.com/4Dv18/4D/18/This.301-4504875.en.html).

In most cases, the value of `This` is determined by how a function is called. No se puede definir por asignación durante la ejecución, y puede ser diferente cada vez que se llame a la función. It can't be set by assignment during execution, and it may be different each time the function is called.

When a formula is called as a member method of an object, its `This` is set to the object the method is called on. Por ejemplo:

```4d
$o:=Nuevo objeto("prop";42; "f";Formula(This.prop))
$val:=$o.f() //42
```

Cuando se utiliza una función [class constructor](#class-constructor) (con la función [`new()`](API/classClass.md#new)), su `This` se vincula al nuevo objeto que se está construyendo.

```4d
//Class: ob

Class Constructor  

    // Crear propiedades en This como
    // quiera asignándoles
    This.a:=42 
```

```4d
// en un método 4D  
$o:=cs.ob.new()
$val:=$o.a //42
```

> Cuando se llama al constructor de la superclase en un constructor que utiliza la palabra clave [Super](#super), hay que tener en cuenta que `This` no debe llamarse antes del constructor de la superclase, de lo contrario se genera un error. Ver [este ejemplo](#example-1).


En todos los casos, `Esto` se refiere al objeto al que el método fue llamado, como si el método estuviera en el objeto..

```4d
//Class: ob

Function f()
    $0:=This.a+This.b
```

Luego puede escribir en un método proyecto:

```4d
$o:=cs.ob.new()
$o.a:=5
$o.b:=3
$val:=$o.f() //8
```
En este ejemplo, el objeto asignado a la variable $o no tiene su propia propiedad *f*, la hereda de su clase. Since *f* is called as a method of $o, its `This` refers to $o.


## Class commands

Several commands of the 4D language allows you to handle class features.


### OB Class

#### OB Class ( object ) -> Object | Null

`OB Class` returns the class of the object passed in parameter.


### OB Instance of

#### OB Instance of ( object ; class ) -> Boolean

`OB Instance of` returns `true` if `object` belongs to `class` or to one of its inherited classes, and `false` otherwise.</p>


### OB Instance of

#### OB Instance of ( object ; class ) -> Boolean

`OB Instance of` devuelve `true` si `objeto` pertenece a `class` o a una de sus clases heredadas, y `false` de lo contrario,.

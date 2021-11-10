---
id: SignalClass
title: Signal
---

Las señales son herramientas que ofrece el lenguaje 4D para gestionar las interacciones y evitar conflictos entre procesos en una aplicación multiproceso. Las señales le permiten asegurarse de que uno o más procesos esperarán a que se complete una tarea específica antes de continuar la ejecución. Todo proceso puede esperar y/o liberar una señal.

> Los semáforos también pueden utilizarse para gestionar las interacciones. Los semáforos permiten asegurarse de que dos o más procesos no modifican el mismo recurso (archivo, registro...) al mismo tiempo. Sólo el proceso que define el semáforo puede eliminarlo.


### Objeto signal

Una señal es un objeto compartido que debe ser pasado como parámetro a los comandos que llaman o crean trabajadores o procesos.

Un objeto `4D.Signal` contiene los siguientes métodos y propiedades integrados:

- [`.wait()`](#wait)
- [`.trigger()`](#trigger)
- [`.signaled`](#signaled)
- [`.description`](#description).

Todo worker/proceso que llame al método `.wait()` suspenderá su ejecución hasta que la propiedad `.signaled` sea verdadera. Mientras espera una señal, el proceso que llama no utiliza ninguna CPU. Esto puede ser muy interesante para el rendimiento en aplicaciones multiproceso. La propiedad `.signaled` se convierte en true cuando cualquier worker/proceso llama al método `.trigger()`.

Tenga en cuenta que para evitar situaciones de bloqueo, el `.wait()` también puede regresar después de que se haya alcanzado un tiempo de espera definido.

Los objetos signal se crean con el comando [New signal](#new-signal).


### Trabajar con señales

En 4D, se crea un nuevo objeto signal llamando al comando [`New signal`](#new-signal). Una vez creada, esta señal debe pasarse como parámetro a los comandos `New process` o `CALL WORKER` para que la modifiquen cuando hayan terminado la tarea que quiere esperar.

- `signal.wait()` debe ser llamado desde el worker/proceso que necesita que otro worker/proceso termine una tarea para poder continuar.
- `signal.trigger()` debe llamarse desde el worker/proceso que terminó su ejecución para liberar a todos los demás.


![](assets/en/API/signal.png)

Una vez que una señal ha sido liberada utilizando una llamada `signal.trigger()`, no puede ser reutilizada de nuevo. Si desea definir otra señal, debe llamar de nuevo al comando `New signal`.

Dado que un objeto signal es un [objeto compartido](Concepts/shared.md), puede utilizarlo para devolver resultados de los workers/procesos llamados, siempre que no olvide escribir los valores dentro de una estructura `Use...End use` (ver ejemplo).

### Ejemplo

```4d
 var $signal : 4D.Signal

  // Creación de un signal
 $signal:=New signal

  // llamar al proceso principal y ejecutar el método OpenForm
 CALL WORKER(1;"OpenForm";$signal)
  // hacer otro cálculo
 ...
  // Esperando el final del proceso
 $signaled:=$signal.wait()

  // Procesamiento de los resultados
 $calc:=$signal.result+...
```

Método ***OpenForm***:

```4d
 #DECLARE ($signal : 4D.Signal)  
 var $form : Object
 $form:=New object("value";0)

  // Abrir el formulario
 $win:=Open form window("Information";Movable form dialog box)
 DIALOG("Information";$form)
 CLOSE WINDOW($win)

  // Añade un nuevo atributo a su objeto compartido $signal para pasar su resultado al otro proceso:
 Use($signal)
    $signal.result:=$form.value
 End use

  //  Activar la señal al proceso de espera
 $signal.trigger()
```

### Resumen


|                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SignalClass.description.Syntax -->](#description)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.description.Summary -->|
| [<!-- INCLUDE #SignalClass.signaled.Syntax -->](#signaled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.signaled.Summary --> |
| [<!-- INCLUDE #SignalClass.trigger().Syntax -->](#trigger)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.trigger().Summary --> |
| [<!-- INCLUDE #SignalClass.wait().Syntax -->](#wait)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.wait().Summary --> |




<!-- REF SignalClass.New signal.Desc -->
## New signal


<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |
</details>

<!-- REF #_command_.New signal.Syntax -->
**New signal** { ( *description* : Text ) } : 4D.Signal<!-- END REF -->

<!-- REF SignalClass.New signal.Params -->
| Parámetros  | Tipo      |    | Descripción                          |
| ----------- | --------- |:--:| ------------------------------------ |
| description | Texto     | -> | Descripción para la señal            |
| Resultado   | 4D.Signal | <- | Objeto nativo que encapsula la señal |
<!-- END REF -->


#### Descripción

El comando `New signal` <!-- REF #_command_.New signal.Summary -->crea un objeto `4D.Signal`<!-- END REF -->.

Una señal es un objeto compartido que puede ser pasado como parámetro de un worker o proceso a otro worker o proceso, de manera que:

*   el worker/proceso llamado puede actualizar el objeto de la señal después de que se haya completado el procesamiento específico
*   el worker/proceso que llama puede detener su ejecución y esperar hasta que se actualice la señal, sin consumir recursos de la CPU.

Opcionalmente, en el parámetro *description* puede pasar un texto personalizado que describa la señal. Este texto también puede definirse después de la creación de la señal.

Dado que el objeto señal es un objeto compartido, también se puede utilizar para mantener las propiedades del usuario, incluyendo la propiedad [`.description`](#description), llamando a la estructura `Use...End use`.


**Valor devuelto**

Un nuevo objeto [`4D.Signal`](#signal-object).

#### Ejemplo

Este es un ejemplo típico de un worker que fija una señal:

```4d
 var $signal : 4D.Signal
 $signal:=New signal("This is my first signal")

 CALL WORKER("myworker";"doSomething";$signal)
 $signaled:=$signal.wait(1) //espera 1 segundo como máximo

 If($signaled)
    ALERT("myworker finished the work. Result: "+$signal.myresult)
 Else
    ALERT("myworker no ha terminado en menos de 1s")
 End if
```


El método ***doSomething*** puede ser:

```4d
 #DECLARE ($signal : 4D.Signal)
  //todo proceso
  //...
 Use($signal)
    $signal.myresult:=$processingResult  //devolver el resultado
 End use
 $signal.trigger() //La operación se ha terminado
```

<!-- END REF -->


<!-- REF SignalClass.description.Desc -->
## .description

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |
</details>

<!-- REF #SignalClass.description.Syntax -->
**.description** : Text<!-- END REF -->

#### Descripción

La propiedad `.description` <!-- REF #SignalClass.description.Summary -->contiene una descripción personalizada para el objeto `Signal`.<!-- END REF -->.

`.description` puede definirse al crear el objeto signal o en cualquier momento. Note that since the `Signal` object is a shared object, any write-mode access to the `.description` property must be surrounded by a `Use...End use` structure.

This property is **read-write**. 

<!-- END REF -->



<!-- REF SignalClass.signaled.Desc -->
## .signaled

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |

</details>

<!-- REF #SignalClass.signaled.Syntax -->
**.signaled**: Boolean<!-- END REF -->

#### Descripción

The `.signaled` property <!-- REF #SignalClass.signaled.Summary -->contains the current state of the `Signal` object<!-- END REF -->. When the signal is created, `.signaled` is **False**. It becomes **True** when the `.trigger( )` is called on the object.

Esta propiedad es **de sólo lectura**. 

<!-- END REF -->



<!-- REF SignalClass.trigger().Desc -->
## .trigger()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |
</details>

<!-- REF #SignalClass.trigger().Syntax -->
**.trigger( )**<!-- END REF -->

<!-- REF #SignalClass.trigger().Params -->
| Parámetros | Tipo |  | Descripción                  |
| ---------- | ---- |::| ---------------------------- |
|            |      |  | No requiere ningún parámetro |
<!-- END REF -->


#### Descripción

The `.trigger( )` function <!-- REF #SignalClass.trigger().Summary -->sets the `signaled` property of the signal object to **true**<!-- END REF --> and awakens all workers or processes waiting for this signal.

If the signal is already in the signaled state (i.e., the `signaled` property is already **true**), the function does nothing.

<!-- END REF -->



<!-- REF SignalClass.wait().Desc -->
## .wait()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |
</details>

<!-- REF #SignalClass.wait().Syntax -->
**.wait**( { *timeout* : Real } ) : Boolean <!-- END REF -->

<!-- REF #SignalClass.wait().Params -->
| Parámetros | Tipo     |    | Descripción                                    |
| ---------- | -------- | -- | ---------------------------------------------- |
| timeout    | Real     | -> | Maximum waiting time for the signal in seconds |
| Resultado  | Booleano | <- | State of the `.signaled` property              |
<!-- END REF -->


#### Descripción

The `.wait( )` function <!-- REF #SignalClass.wait().Summary -->makes the current process wait until the `.signaled` property of the signal object to become **true** or the optional *timeout* to expire<!-- END REF -->.

To prevent blocking code, you can pass a maximum waiting time in seconds in the *timeout* parameter (decimals are accepted).
> **Warning**: Calling `.wait( )` without a *timeout* in the 4D main process is not recommended because it could freeze the whole 4D application.

If the signal is already in the signaled state (i.e. the `.signaled` property is already **true**), the function returns immediately, without waiting.

The function returns the value of the `.signaled` property. Evaluating this value allows knowing if the function returned because the `.trigger( )` has been called (`.signaled` is **true**) or if the *timeout* expired (`.signaled` is **false**).
> The state of a process that waits for a signal is `Waiting for internal flag`.


<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>

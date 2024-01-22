---
id: datastores
title: Utilizar un almacén de datos remoto
---

A [datastore](dsMapping.md#datastore) exposed on a 4D application can be accessed simultaneously through different clients:

- 4D remote applications using ORDA to access the main datastore with the `ds` command. Tenga en cuenta que la aplicación 4D remota puede seguir accediendo a la base de datos en modo clásico. These accesses are handled by the **4D application server**.

- Other 4D applications (4D remote, 4D Server) opening a session on the remote datastore through the [`Open datastore`](../API/DataStoreClass.md#open-datastore) command. These accesses are handled by the **HTTP REST server**.

- [4D for iOS or 4D for Android](https://developer.4d.com/go-mobile/) queries for updating mobile applications. These accesses are handled by the **HTTP server**.

## Apertura de las sesiones

When you work with a remote datastore referenced through calls to the `Open datastore` command, the connection between the requesting processes and the remote datastore is handled via sessions.

Se crea una sesión en el datastore remoto para gestionar la conexión. This session is identified using a internal session ID which is associated to the `localID` on the 4D application side. Esta sesión gestiona automáticamente el acceso a los datos, a las selecciones de entidades o a las entidades.

The `localID` is local to the machine that connects to the remote datastore, which means:

- If other processes of the same application need to access the same remote datastore, they can use the same `localID` and thus, share the same session.
- If another process of the same application opens the same remote datastore but with another `localID`, it will create a new session on the remote datastore.
- If another machine connects to the same remote datastore with the same `localID`, it will create another session with another cookie.

Estos principios se ilustran en los gráficos siguientes:

![](../assets/en/ORDA/sessions.png)

> For sessions opened by REST requests, please refer to [Users and sessions](REST/authUsers.md).

### Visualización de las sesiones

Los procesos que gestionan las sesiones de acceso al datastore se muestran en la ventana de administración de 4D Server:

- name: "REST Handler: \<process name>"
- tipo: tipo Worker Server HTTP
- session: session name is the user name passed to the `Open datastore` command.

En el siguiente ejemplo, se están ejecutando dos procesos para la misma sesión:

![](../assets/en/ORDA/sessionAdmin.png)

### Bloqueo y transacciones

Las funcionalidades ORDA relacionadas con el bloqueo de entidades y transacciones se gestionan a nivel del proceso en los datastores remotos, igual que en el modo cliente/servidor ORDA:

- If a process locks an entity from a remote datastore, the entity is locked for all other processes, even when these processes share the same session (see [Entity locking](entities.md#entity-locking)). Si varias entidades que apuntan a un mismo registro han sido bloqueadas en un proceso, todas deben ser desbloqueadas en el proceso para eliminar el bloqueo. Si se ha puesto un bloqueo en una entidad, el bloqueo se elimina cuando ya no hay ninguna referencia a esta entidad en la memoria.
- Transactions can be started, validated or cancelled separately on each remote datastore using the `dataStore.startTransaction()`, `dataStore.cancelTransaction()`, and `dataStore.validateTransaction()` functions. No afectan a otros almacenes de datos.
- Classic 4D language commands (`START TRANSACTION`, `VALIDATE TRANSACTION`, `CANCEL TRANSACTION`) only apply to the main datastore (returned by `ds`).
  Si una entidad de un datastore remoto es retenida por una transacción en un proceso, los otros procesos no pueden actualizarla, incluso si estos procesos comparten la misma sesión.
- Los bloqueos en las entidades son eliminados y las transacciones son anuladas:
  - cuando el proceso es eliminado.
  - cuando la sesión se cierra en el servidor
  - cuando la sesión es terminada desde la ventana de administración del servidor.

### Cierre de las sesiones

4D cierra automáticamente una sesión cuando no hay actividad durante el tiempo de espera. The default timeout is 60 mn, but this value can be modified using the _connectionInfo_ parameter of the `Open datastore` command.

Si se envía una solicitud al almacén de datos remoto después de haber cerrado la sesión, ésta se vuelve a crear automáticamente si es posible (licencia disponible, servidor no detenido...). Sin embargo, hay que tener en cuenta que se pierde el contexto de la sesión en cuanto a bloqueos y transacciones (ver arriba).

## Optimización cliente/servidor

4D provides optimizations for ORDA requests that use entity selections or load entities in client/server configurations (datastore accessed remotely through `ds` or via `Open datastore`). Estas optimizaciones aceleran la ejecución de su aplicación 4D reduciendo drásticamente el volumen de información transmitida por la red. Incluyen:

- the **optimization context**
- the **ORDA cache**

### Contexto

El contexto de optimización se basa en las siguientes implementaciones:

- Cuando un cliente solicita una selección de entidades al servidor, 4D "aprende" automáticamente qué atributos de la selección de entidades se utilizan realmente del lado del cliente durante la ejecución del código, y genera un "contexto de optimización" correspondiente. Este contexto se adjunta a la selección de la entidad y almacena los atributos utilizados. Se actualizará dinámicamente si se utilizan posteriormente otros atributos. Los siguientes métodos y funciones activan la fase de aprendizaje:
  - [`Create entity selection`](../API/EntitySelectionClass.md#create-entity-selection)
  - [`dataClass.fromCollection()`](../API/DataClassClass.md#fromcollection)
  - [`dataClass.all()`](../API/DataClassClass.md#all)
  - [`dataClass.get()`](../API/DataClassClass.md#get)
  - [`dataClass.query()`](../API/DataClassClass.md#query)
  - [`entitySelection.query()`](../API/EntitySelectionClass.md#query)

- Las solicitudes posteriores enviadas al servidor sobre la misma selección de entidades reutilizan automáticamente el contexto de optimización y sólo obtienen del servidor los atributos necesarios, lo que acelera el procesamiento. For example, in an [entity selection-based list box](#entity-selection-based-list-box), the learning phase takes place during the display of the first row. la visualización de las siguientes líneas está optimizada. Las siguientes funciones asocian automáticamente el contexto de optimización de la entity selection de origen a la entity selection devuelta:
  - [`entitySelection.and()`](../API/EntitySelectionClass.md#and)
  - [`entitySelection.minus()`](../API/EntitySelectionClass.md#minus)
  - [`entitySelection.or()`](../API/EntitySelectionClass.md#or)
  - [`entitySelection.orderBy()`](../API/EntitySelectionClass.md#orderBy)
  - [`entitySelection.slice()`](../API/EntitySelectionClass.md#slice)
  - [`entitySelection.drop()`](../API/EntitySelectionClass.md#drop)

- An existing optimization context can be passed as a property to another entity selection of the same dataclass, thus bypassing the learning phase and accelerating the application (see [Using the context property](#reusing-the-context-property) below).

- You can build optimization contexts manually using the [`dataStore.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) function (see [Preconfiguring contexts](#preconfiguring-contexts)).

![](../assets/en/ORDA/cs-optimization-process.png)

:::warning Compatibility Note

Contexts handled in connections established through [`Open datastore`](../API/DataStoreClass.md#open-datastore) can only be used between similar main versions of 4D. Por ejemplo, una aplicación remota 4D v20.x sólo puede utilizar contextos de un almacen de datos 4D Server v20.x.

:::

#### Ejemplo

Dado el siguiente código:

```4d
 $sel:=$ds.Employee.query("firstname = ab@")
 For each($e;$sel)
    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer refers to Company table
 End for each
```

Thanks to the optimization, this request will only get data from used attributes (firstname, lastname, employer, employer.name) in _$sel_ from the second iteration of the loop.

#### Reutilización de la propiedad context

You can increase the benefits of the optimization by using the **context** property. Esta propiedad hace referencia a un contexto de optimización "aprendido" para una selección de entidades. Se puede pasar como parámetro a las funciones ORDA que devuelven nuevas selecciones de entidades, de forma que las selecciones de entidades soliciten directamente al servidor los atributos utilizados y sin pasar por la fase de aprendizaje.

> You can also create contexts using the [`.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) function.

All ORDA functions that handle entity selections support the <strong x-id="1">context</strong> property (for example <a href="../API/DataClassClass.md#query"><code>dataClass.query()</code></a> or <a href="../API/DataClassClass.md#all"><code>dataClass.all()</code></a>). All ORDA functions that handle entity selections support the **context** property (for example [`dataClass.query()`](../API/DataClassClass.md#query) or [`dataClass.all()`](../API/DataClassClass.md#all)). Tenga en cuenta, sin embargo, que un contexto se actualiza automáticamente cuando se utilizan nuevos atributos en otras partes del código. Reutilizar el mismo contexto en diferentes códigos podría sobrecargar el contexto y, por tanto, reducir su eficacia.

> A similar mechanism is implemented for entities that are loaded, so that only used attributes are requested (see the [`dataClass.get()`](../API/DataClassClass.md#get) function).

**Example with `dataClass.query()`:**

```4d
 var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object
 var $data : Collection
 $querysettings:=New object("context";"shortList")
 $querysettings2:=New object("context";"longList")
 
 $sel1:=ds.Employee.query("lastname = S@";$querysettings)
 $data:=extractData($sel1) // In extractData method an optimization is triggered   
 // and associated to context "shortList"
 
 $sel2:=ds.Employee.query("lastname = Sm@";$querysettings)
 $data:=extractData($sel2) // In extractData method the optimization associated   
 // to context "shortList" is applied
 
 $sel3:=ds.Employee.query("lastname = Smith";$querysettings2)
 $data:=extractDetailedData($sel3) // In extractDetailedData method an optimization  
 // is triggered and associated to context "longList"
 
 $sel4:=ds.Employee.query("lastname = Brown";$querysettings2)
 $data:=extractDetailedData($sel4) // In extractDetailedData method the optimization  
 // associated to context "longList" is applied
```

#### List box basado en una selección de entidades

La optimización de la selección de entidades se aplica automáticamente a los list boxes basados en la selección de entidades en configuraciones cliente/servidor, al mostrar y desplazar el contenido de un list box: sólo se solicitan al servidor los atributos mostrados en el list box.

A specific "page mode" context is also provided when loading the current entity through the **Current item** property expression of the list box (see [Collection or entity selection type list boxes](FormObjects/listbox_overview.md#list-box-types)). Esta funcionalidad le permite no sobrecargar el contexto inicial del list box en este caso, especialmente si la "página" solicita atributos adicionales. Note that only the use of **Current item** expression will create/use the page context (access through `entitySelection\[index]` will alter the entity selection context).

Las solicitudes posteriores al servidor enviadas por las funciones de navegación de la entidad también admitirán esta optimización. Las siguientes funciones asocian automáticamente el contexto de optimización de la entidad fuente a la entidad devuelta:

- [`entity.next()`](../API/EntityClass.md#next)
- [`entity.first()`](../API/EntityClass.md#first)
- [`entity.last()`](../API/EntityClass.md#last)
- [`entity.previous()`](../API/EntityClass.md#previous)

Por ejemplo, el siguiente código carga la entidad seleccionada y permite navegar en la selección de entidades. Las entidades se cargan en un contexto separado y el contexto inicial del list box se deja intacto:

```4d
 $myEntity:=Form.currentElement //current item expression
  //... do something
 $myEntity:=$myEntity.next() //loads the next entity using the same context
```

#### Preconfiguración de contextos

Debe definirse un contexto de optimización para cada funcionalidad o algoritmo de su aplicación, con el fin de obtener el mejor rendimiento. Por ejemplo, un contexto puede utilizarse para consultas sobre clientes, otro para consultas sobre productos, etc.

Si desea entregar aplicaciones finales con el máximo nivel de optimización, puede preconfigurar sus contextos y ahorrarse así fases de aprendizaje siguiendo estos pasos:

1. Diseñe sus algoritmos.
2. Ejecute su aplicación y deje que el mecanismo de aprendizaje automático complete los contextos de optimización.
3. Call the [`dataStore.getRemoteContextInfo()`](../API/DataStoreClass.md#getremotecontextinfo) or [`dataStore.getAllRemoteContexts()`](../API/DataStoreClass.md#getallremotecontexts) function to collect  contexts. You can use the [`entitySelection.getRemoteContextAttributes()`](../API/EntitySelectionClass.md#getremotecontextattributes) and [`entity.getRemoteContextAttributes()`](../API/EntityClass.md#getremotecontextattributes) functions to analyse how your algorithms use attributes.
4. In the final step, call the [`dataStore.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) function to build contexts at application startup and [use them](#reusing-the-context-property) in your algorithms.

### Caché ORDA

Por razones de optimización, los datos solicitados al servidor a través de ORDA se cargan en la caché remota de ORDA (que es diferente de la caché 4D). La caché ORDA está organizada por dataclass y vence después de 30 segundos.

Los datos contenidos en la caché se consideran caducados cuando se alcanza el tiempo de espera. Todo acceso a los datos caducados enviará una petición al servidor. Los datos caducados permanecen en la caché hasta que se necesite el espacio.

Por defecto, la caché ORDA es manejada de forma transparente por 4D. Sin embargo, puede controlar su contenido utilizando las siguientes funciones de la clase ORDA:

- [dataClass.setRemoteCacheSettings()](../API/DataClassClass.md#setremotecachesettings)
- [dataClass.getRemoteCache()](../API/DataClassClass.md#getremotecache)
- [dataClass.clearRemoteCache()](../API/DataClassClass.md#clearremotecache)

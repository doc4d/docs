---
id: SessionClass
title: Session
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Los objetos de sesión son devueltos por el comando [`Session`](#session). Estos objetos ofrecen al desarrollador una interfaz que permite gestionar la sesión de usuario actual y ejecutar acciones como almacenar datos contextuales, compartir información entre procesos de sesión, lanzar procesos preferentes relacionados con la sesión o (sólo web) gestionar [privilegios](../ORDA/privileges.md).

### Tipos de sesiones

Esta clase admite tres tipos de sesiones:

- [**Sesiones usuario web**](WebServer/sessions.md): las sesiones usuario web están disponibles cuando [las sesiones escalables están activas en su proyecto](WebServer/sessions.md#enabling-sessions). Se utilizan para conexiones Web y REST, y se les pueden asignar privilegios.
- [Sesiones usuario cliente remoto\*\*](../Desktop/clientServer.md#remote-user-sessions): en las aplicaciones cliente/servidor, los usuarios remotos tienen sus propias sesiones gestionadas en el servidor.
- [**Sesión de procedimientos almacenados**](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html): todos los procedimientos almacenados ejecutados en el servidor comparten la misma sesión usuario virtual.

:::note

La disponibilidad de las propiedades y funciones del objeto `Session` depende del tipo de sesión.

:::

### Resumen

|                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)<br/><!-- INCLUDE #SessionClass.clearPrivileges().Summary --> |
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)<br/><!-- INCLUDE #SessionClass.expirationDate.Summary -->        |
| [<!-- INCLUDE #SessionClass.getPrivileges().Syntax -->](#getprivileges)<br/><!-- INCLUDE #SessionClass.getPrivileges().Summary -->       |
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)<br/><!-- INCLUDE #SessionClass.hasPrivilege().Summary -->          |
| [<!-- INCLUDE #SessionClass.id.Syntax -->](#id)<br/><!-- INCLUDE #SessionClass.id.Summary -->                                            |
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)<br/><!-- INCLUDE #SessionClass.idleTimeout.Summary -->                 |
| [<!-- INCLUDE #SessionClass.info.Syntax -->](#info)<br/><!-- INCLUDE #SessionClass.info.Summary -->                                      |
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)<br/><!-- INCLUDE #SessionClass.isGuest().Summary -->                         |
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)<br/><!-- INCLUDE #SessionClass.setPrivileges().Summary -->       |
| [<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)<br/><!-- INCLUDE #SessionClass.storage.Summary -->                             |
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)<br/><!-- INCLUDE #SessionClass.userName.Summary -->                          |

## Session

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                     |
| ----------- | ------------------------------------------------------------------ |
| 20 R5       | Soporte de cliente remoto y sesiones de procedimientos almacenados |
| 18 R6       | Añadidos                                                           |

</details>

<!-- REF #_command_.Session.Syntax -->**Session** : 4D.Session<!-- END REF -->

<!-- REF #_command_.Session.Params -->

| Parámetros | Tipo                       |     | Descripción    |
| ---------- | -------------------------- | :-: | -------------- |
| Result     | 4D.Session |  <- | Objeto Session |

<!-- END REF -->

#### Descripción

El comando `Session` <!-- REF #_command_.Session.Summary -->devuelve el objeto `Session` correspondiente a la sesión usuario actual<!-- END REF -->.

Dependiendo del proceso desde el que se llame al comando, la sesión de usuario actual puede ser:

- una sesión web (cuando las [sesiones escalables están activadas](WebServer/sessions.md#enabling-sessions)),
- una sesión de cliente remoto,
- la sesión de procedimientos almacenados.

Para más información, consulte el párrafo [Tipos de sesión](#tipos-de-sesión).

Si el comando se llama desde un contexto no soportado (aplicación monousuario, sesiones escalables desactivadas...), devuelve *Null*.

#### Sesiones web

El objeto `Session` de las sesiones web está disponible desde cualquier proceso web:

- Métodos base `On Web Authentication`, `On Web Connection` y `On REST Authentication`,
- código procesado a través de las etiquetas 4D en las páginas semidinámicas (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- los métodos proyecto con el atributo "Available through 4D tags and URLs (4DACTION...)" y llamados a través de 4DACTION/ urls,
- métodos base [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) y [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action) para peticiones móviles,
- Funciones ORDA [llamadas con peticiones REST](../REST/ClassFunctions.md).

Para más información sobre las sesiones usuario web, consulte la sección [Sesiones web](WebServer/sessions.md).

#### Sesiones de cliente remoto

El objeto `Session` de las sesiones cliente remotas está disponible desde:

- Métodos proyecto que tienen el atributo [Ejecutar en el Servidor](../Project/code-overview.md#execute-on-server) (se ejecutan en el proceso "twinned" del proceso cliente),
- Triggers,
- Los métodos base `On Server Open Connection` y `On Server Shutdown Connection` de la base de datos.

Para más información sobre las sesiones usuario remoto, por favor consulte el párrafo [**Sesiones usuario cliente remoto**](../Desktop/clientServer.md#remote-user-sessions).

#### Sesión de procedimientos almacenados

Todos los procesos de procedimientos almacenados comparten la misma sesión virtual de usuario. El objeto `Session` de los procedimientos almacenados está disponible desde:

- métodos llamados con el comando [`Execute on server`](https://doc.4d.com/4dv20/help/command/en/page373.html),
- Los métodos base `On Server Startup`, `On Server Shutdown`, `On Backup Startup`, `On Backup Shutdown` y `On System event`

Para obtener información sobre la sesión de usuario virtual de los procedimientos almacenados, consulte la página [4D Server y lenguaje 4D](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html).

#### Ejemplo

Ha definido el método `action_Session` con el atributo "Disponible a través de etiquetas 4D y URLs". Se llama al método introduciendo la siguiente URL en el navegador:

```
IP:port/4DACTION/action_Session
```

```4d
  //método action_Session
 Case of
    :(Session#Null)
       If(Session.hasPrivilege("WebAdmin")) //llamando a la función hasPrivilege
          WEB SEND TEXT("4DACTION --> Session is WebAdmin")
       Else
          WEB SEND TEXT("4DACTION --> Session is not WebAdmin")
       End if
    Else
       WEB SEND TEXT("4DACTION --> Session is null")
 End case
```

<!-- REF SessionClass.clearPrivileges().Desc -->

## .clearPrivileges()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R6       | Añadidos       |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->**.clearPrivileges()** : Boolean<!-- END REF -->

<!-- REF #SessionClass.clearPrivileges().Params -->

| Parámetros | Tipo    |     | Descripción                                        |
| ---------- | ------- | :-: | -------------------------------------------------- |
| Result     | Boolean |  <- | True si la ejecución se ha realizado correctamente |

<!-- END REF -->

#### Descripción

:::note

Esta función no hace nada y siempre devuelve **False** con las sesiones de clientes remotos y de los procedimientos almacenados.

:::

La función `.clearPrivileges()` <!-- REF #SessionClass.clearPrivileges().Summary -->elimina todos los privilegios asociados a la sesión y devuelve **True** si la ejecución se ha realizado correctamente<!-- END REF -->. Como resultado, la sesión se convierte automáticamente en una sesión de invitado.

#### Ejemplo

```4d
//Invalidar una sesión usuario web
var $isGuest : Boolean
var $isOK : Boolean

$isOK:=Session.clearPrivileges()
$isGuest:=Session.isGuest() //$isGuest es True
```

<!-- END REF -->

<!-- REF SessionClass.expirationDate.Desc -->

## .expirationDate

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R6       | Añadidos       |

</details>

<!-- REF #SessionClass.expirationDate.Syntax -->**.expirationDate** : Text<!-- END REF -->

#### Descripción

:::note

Esta propiedad sólo está disponible con sesiones de usuario web.

:::

La propiedad `.expirationDate` contiene <!-- REF #SessionClass.expirationDate.Summary -->la fecha y hora de expiración de la cookie de sesión<!-- END REF -->. El valor se expresa como texto en el formato ISO 8601: `YYYY-MM-DDTHH:MM:SS.mmmZ`.

Esta propiedad es de **solo lectura**. Se recalcula automáticamente si se modifica el valor de la propiedad [`.idleTimeout`](#idletimeout).

#### Ejemplo

```4d
var $expiration : Text
$expiration:=Session.expirationDate //eg "2021-11-05T17:10:42Z"
```

<!-- END REF -->

<!-- REF SessionClass.getPrivileges().Desc -->

## .getPrivileges()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R6       | Añadidos       |

</details>

<!-- REF #SessionClass.getPrivileges().Syntax -->**.getPrivileges**() : Collection<!-- END REF -->

<!-- REF #SessionClass.getPrivileges().Params -->

| Parámetros | Tipo       |     | Descripción                                                      |
| ---------- | ---------- | :-: | ---------------------------------------------------------------- |
| Result     | Collection |  <- | Colección de nombres de privilegios (cadenas) |

<!-- END REF -->

#### Descripción

La función `.getPrivileges()` <!-- REF #SessionClass.getPrivileges().Summary -->devuelve una colección de todos los nombres de privilegios asociados a la sesión<!-- END REF -->.

Con sesiones de cliente remoto y procedimiento almacenado, esta función devuelve una colección que sólo contiene "WebAdmin".

:::info

Los privilegios se asignan a una Sesión utilizando la función [`setPrivileges()`](#setprivileges).

:::

#### Ejemplo

Se ha definido el siguiente archivo [`roles.json`](../ORDA/privileges.md#rolesjson-file):

```json
{
   "privileges":[
      {
         "privilege":"simple",
         "includes":[

         ]
      },
      {
         "privilege":"medium",
         "includes":[
            "simple"
         ]
      }
   ],
   "roles":[
      {
         "role":"Medium",
         "privileges":[
            "medium"
         ]
      }
   ],
   "permissions":{
      "allowed":[

      ]
   }
}
```

El rol de sesión se asigna en una función datastore `authentify()`:

```4d
  //Clase Datastore

exposed Function authentify($role : Text) : Text
	Session.clearPrivileges()
	Session.setPrivileges({roles: $role})
```

Assuming the `authentify()` function is called with the "Medium" role:

```4d
var $privileges : Collection
$privileges := Session.getPrivileges()
//$privileges: ["simple","medium"]
```

#### Ver también

[.setPrivileges()](#setprivileges)<br/>
[Permissions – Inspect the privileges in the session for an easy debugging (blog post)](https://blog.4d.com/permissions-inspect-the-privileges-in-the-session-for-an-easy-debugging)

<!-- END REF -->

<!-- REF SessionClass.hasPrivilege().Desc -->

## .hasPrivilege()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R6       | Añadidos       |

</details>

<!-- REF #SessionClass.hasPrivilege().Syntax -->**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->

<!-- REF #SessionClass.hasPrivilege().Params -->

| Parámetros | Tipo    |     | Descripción                                                  |
| ---------- | ------- | :-: | ------------------------------------------------------------ |
| privilege  | Text    |  -> | Nombre del privilegio a verificar                            |
| Result     | Boolean |  <- | True si la sesión tiene *privilege*, False en caso contrario |

<!-- END REF -->

#### Descripción

The `.hasPrivilege()` function <!-- REF #SessionClass.hasPrivilege().Summary -->returns True if the *privilege* is associated to the session, and False otherwise<!-- END REF -->.

With remote client and stored procedure sessions, this function always returns True, whatever the *privilege*.

#### Ejemplo

You want to check if the "WebAdmin" privilege is associated to the web user session:

```4d
If (Session.hasPrivilege("WebAdmin"))
	//Access is granted, do nothing
Else
	//Display an authentication page

End if
```

<!-- END REF -->

<!-- REF SessionClass.id.Desc -->

## .id

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R5       | Añadidos       |

</details>

<!-- REF #SessionClass.id.Syntax -->**.id** : Text<!-- END REF -->

#### Descripción

The `.id` property contains <!-- REF #SessionClass.id.Summary -->the unique identifier (UUID) of the session on the server<!-- END REF -->. Esta cadena única es asignada automáticamente por el servidor para cada sesión y permite identificar sus procesos.

<!-- END REF -->

<!-- REF SessionClass.idleTimeout.Desc -->

## .idleTimeout

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R6       | Añadidos       |

</details>

<!-- REF #SessionClass.idleTimeout.Syntax -->**.idleTimeout** : Integer<!-- END REF -->

#### Descripción

:::note

Esta propiedad sólo está disponible con sesiones de usuario web.

:::

The `.idleTimeout` property contains <!-- REF #SessionClass.idleTimeout.Summary -->the inactivity session timeout (in minutes), after which the session is automatically closed by 4D<!-- END REF -->.

Si no se define esta propiedad, el valor por defecto es 60 (1h).

When this property is set, the [`.expirationDate`](#expirationdate) property is updated accordingly.

> El valor no puede ser inferior a 60: si se define un valor inferior, el tiempo de espera se eleva hasta 60.

Esta propiedad está en **lectura escritura**.

#### Ejemplo

```4d
If (Session.isGuest())
		// A Guest session will close after 60 minutes of inactivity
	Session.idleTimeout:=60
Else
		// Other sessions will close after 120 minutes of inactivity
	Session.idleTimeout:=120
End if

```

<!-- END REF -->

<!-- REF SessionClass.info.Desc -->

## .info

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R5       | Añadidos       |

</details>

<!-- REF #SessionClass.info.Syntax -->**.info** : Object<!-- END REF -->

#### Descripción

:::note

Esta propiedad sólo está disponible con sesiones de cliente remoto y procedimientos almacenados.

:::

The `.info` property <!-- REF #SessionClass.info.Summary -->describes the remote client or stored procedure session on the server<!-- END REF -->.

The `.info` object is the same object as the one returned by the [`Get process activity`](https://doc.4d.com/4dv20/help/command/en/page1495.html) command for remote client and stored procedure sessions.

The `.info` object contains the following properties:

| Propiedad        | Tipo          | Descripción                                                                                                                                                     |
| ---------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type             | Text          | Tipo de sesión: "remote" o "storedProcedure"                                                                                                    |
| userName         | Text          | 4D user name (same value as [`.userName`](#username))                                                                                        |
| machineName      | Text          | Sesiones remotas: nombre de la máquina remota. Sesión de procedimientos almacenados: nombre del equipo servidor |
| systemUserName   | Text          | Sesiones remotas: nombre de la sesión del sistema abierta en la máquina remota.                                                 |
| IPAddress        | Text          | Dirección IP de la máquina remota                                                                                                                               |
| hostType         | Text          | Tipo de host: "windows" o "mac"                                                                                                                 |
| creationDateTime | Date ISO 8601 | Fecha y hora de creación de la sesión                                                                                                                           |
| state            | Text          | Estado de la sesión: "active", "postponed", "sleeping"                                                                                          |
| ID               | Text          | UUID de sesión (el mismo valor que [`.id`](#id))                                                                                             |
| persistentID     | Text          | ID persistente de la sesión                                                                                                                                     |

:::note

Since `.info` is a computed property, it is recommended to call it once and then to store it in a local variable if you want to do some processing on its properties.

:::

<!-- END REF -->

<!-- REF SessionClass.isGuest().Desc -->

## .isGuest()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R6       | Añadidos       |

</details>

<!-- REF #SessionClass.isGuest().Syntax -->**.isGuest()** : Boolean<!-- END REF -->

<!-- REF #SessionClass.isGuest().Params -->

| Parámetros | Tipo    |     | Descripción                                                    |
| ---------- | ------- | :-: | -------------------------------------------------------------- |
| Result     | Boolean |  <- | True si la sesión es una sesión Guest, False en caso contrario |

<!-- END REF -->

#### Descripción

:::note

This function always returns **False** with remote client and stored procedure sessions.

:::

The `.isGuest()` function <!-- REF #SessionClass.isGuest().Summary -->returns True if the session is a Guest session (i.e. it has no privileges)<!-- END REF -->.

#### Ejemplo

En el método base `On Web Connection`:

```4d
If (Session.isGuest())
	//Do something for Guest user
End if
```

<!-- END REF -->

<!-- REF SessionClass.setPrivileges().Desc -->

## .setPrivileges()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                      |
| ----------- | --------------------------------------------------- |
| 19 R8       | Compatibilidad con la propiedad "roles" en Settings |
| 18 R6       | Añadidos                                            |

</details>

<!-- REF #SessionClass.setPrivileges().Syntax -->**.setPrivileges**( *privilege* : Text ) : Boolean<br/>**.setPrivileges**( *privileges* : Collection )<br/>**.setPrivileges**( *settings* : Object ) : Boolean<!-- END REF -->

<!-- REF #SessionClass.setPrivileges().Params -->

| Parámetros | Tipo       |     | Descripción                                                                    |
| ---------- | ---------- | :-: | ------------------------------------------------------------------------------ |
| privilege  | Text       |  -> | Nombre del privilegio                                                          |
| privileges | Collection |  -> | Colección de nombres de privilegios                                            |
| settings   | Object     |  -> | Objeto con una propiedad "privilegios" (cadena o colección) |
| Result     | Boolean    |  <- | True si la ejecución se ha realizado correctamente                             |

<!-- END REF -->

#### Descripción

:::note

Esta función no hace nada y siempre devuelve **False** con las sesiones de clientes remotos y de los procedimientos almacenados.

:::

The `.setPrivileges()` function <!-- REF #SessionClass.setPrivileges().Summary -->associates the privilege(s) and/or role(s) defined in the parameter to the session and returns **True** if the execution was successful<!-- END REF -->.

- In the *privilege* parameter, pass a string containing a privilege name (or several comma-separated privilege names).

- In the *privileges* parameter, pass a collection of strings containing privilege names.

- In the *settings* parameter, pass an object containing the following properties:

| Propiedad  | Tipo              | Descripción                                                                                              |
| ---------- | ----------------- | -------------------------------------------------------------------------------------------------------- |
| privileges | Text o Collection | <li>String containing a privilege name, or</li><li>Collection of strings containing privilege names</li> |
| roles      | Text o Collection | <li>String containing a role, or</li><li>Collection of strings containing roles</li>                     |
| userName   | Text              | Nombre de usuario para asociar a la sesión (opcional)                                 |

:::note

Privileges and roles are defined in [`roles.json`](../ORDA/privileges.md#rolesjson-file) file of the project. For more information, please refer to the [**Privileges**](../ORDA/privileges.md) section.

:::

If the `privileges` or `roles` property contains a name that is not declared in the [`roles.json`](../ORDA/privileges.md#rolesjson-file) file, it is ignored.

By default when no privilege or role is associated to the session, the session is a [Guest session](#isguest).

The [`userName`](#username) property is available at session object level (read-only).

#### Ejemplo

En un método de autenticación personalizado, se establece el privilegio "WebAdmin" para el usuario:

```4d
var $userOK : Boolean

... //Authenticate the user

If ($userOK) //The user has been approved
  var $info : Object
  $info:=New object()
  $info.privileges:=New collection("WebAdmin")
  Session.setPrivileges($info)
End if

```

#### Ver también

[.getPrivileges()](#getprivileges)

<!-- END REF -->

<!-- REF SessionClass.storage.Desc -->

## .storage

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                     |
| ----------- | ------------------------------------------------------------------ |
| 20 R5       | Soporte de cliente remoto y sesiones de procedimientos almacenados |
| 18 R6       | Añadidos                                                           |

</details>

<!-- REF #SessionClass.storage.Syntax -->**.storage** : Object<!-- END REF -->

#### Descripción

The `.storage` property contains <!-- REF #SessionClass.storage.Summary -->a shared object that can be used to store information available to all processes of the session<!-- END REF -->.

When a `Session` object is created, the `.storage` property is empty. Since it is a shared object, this property will be available in the `Storage` object of the server.

> Like the `Storage` object of the server, the `.storage` property is always "single": adding a shared object or a shared collection to `.storage` does not create a shared group.

This property is **read only** itself but it returns a read-write object.

<Tabs>

<TabItem value="Web session example">

Desea almacenar la IP del cliente en la propiedad `.storage`. You can write in the `On Web Authentication` database method:

```4d
If (Session.storage.clientIP=Null) //first access
    Use (Session.storage)
        Session.storage.clientIP:=New shared object("value"; $clientIP)
    End use
End if
```

</TabItem>

<TabItem value="Remote session example">

You want to share data between processes in the same session:

```4d
Use (Session.storage)
 Session.storage.settings:=New shared object("property"; $value; "property2"; $value2)
End use
```

</TabItem>

</Tabs>

<!-- END REF -->

<!-- REF SessionClass.userName.Desc -->

## .userName

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                     |
| ----------- | ------------------------------------------------------------------ |
| 20 R5       | Soporte de cliente remoto y sesiones de procedimientos almacenados |
| 18 R6       | Añadidos                                                           |

</details>

<!-- REF #SessionClass.userName.Syntax -->**.userName** : Text<!-- END REF -->

#### Descripción

The `.userName` property contains <!-- REF #SessionClass.userName.Summary -->the user name associated to the session<!-- END REF -->. Puede utilizarlo para identificar al usuario dentro de su código.

- Con las sesiones web, esta propiedad es una cadena vacía por defecto. It can be set using the `privileges` property of the [`setPrivileges()`](#setprivileges) function.
- With remote and stored procedure sessions, this property returns the same user name as the [`Current user`](https://doc.4d.com/4dv20/help/command/en/page182.html) command.

Esta propiedad es **solo lectura**.

<!-- END REF -->

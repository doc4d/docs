---
id: SessionClass
title: Session
---

Session objects are returned by the [`Session`](#session) command when [scalable sessions are enabled in your project](WebServer/sessions.md#enabling-sessions). El objeto Session es creado y mantenido automáticamente por el servidor web 4D para controlar la sesión de un cliente web (por ejemplo, un navegador). Este objeto proporciona al desarrollador web una interfaz para la sesión de usuario, permitiendo gestionar privilegios, almacenar datos contextuales, compartir información entre procesos y lanzar procesos preventivos relacionados con la sesión.

For detailed information about the session implementation, please refer to the [web server Sessions](WebServer/sessions.md) section.

### Resumen

|                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.clearPrivileges().Summary --> |
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.expirationDate.Summary -->        |
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.hasPrivilege().Summary -->          |
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.idleTimeout.Summary -->                 |
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.isGuest().Summary -->                         |
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.setPrivileges().Summary -->       |
| [<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.storage.Summary -->                             |
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.userName.Summary -->                          |

## Session

<details><summary>Historia</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |

</details>

<!-- REF #_command_.Session.Syntax -->**Session** : 4D.Session<!-- END REF -->

<!-- REF #_command_.Session.Params -->

| Parámetros | Tipo       |     | Descripción    |                  |
| ---------- | ---------- | :-: | -------------- | ---------------- |
| Result     | 4D.Session |  <- | Session object | <!-- END REF --> |

#### Descripción

The `Session` command <!-- REF #_command_.Session.Summary -->returns the `Session` object corresponding to the current scalable user web session<!-- END REF -->.

This command only works when [scalable sessions are enabled](WebServer/sessions.md#enabling-sessions). It returns _Null_ when sessions are disabled or when legacy sessions are used.

When scalable sessions are enabled, the `Session` object is available from any web processes in the following contexts:

- `On Web Authentication`, `On Web Connection`, and `On REST Authentication` database methods,
- [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) and [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action) database methods for mobile requests,
- ORDA [Data Model Class functions](ORDA/ordaClasses.md) called with REST requests,
- código procesado a través de las etiquetas 4D en las páginas semidinámicas (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- los métodos proyecto con el atributo "Available through 4D tags and URLs (4DACTION...)" y llamados a través de 4DACTION/ urls.

#### Ejemplo

You have defined the `action_Session` method with attribute "Available through 4D tags and URLs". Se llama al método introduciendo la siguiente URL en el navegador:

```
IP:port/4DACTION/action_Session
```

```4d
  //action_Session method
 Case of
    :(Session#Null)
       If(Session.hasPrivilege("WebAdmin")) //calling the hasPrivilege function
          WEB SEND TEXT("4DACTION --> Session is WebAdmin")
       Else
          WEB SEND TEXT("4DACTION --> Session is not WebAdmin")
       End if
    Else
       WEB SEND TEXT("4DACTION --> Sesion is null")
 End case
```

<!-- REF SessionClass.clearPrivileges().Desc -->

## .clearPrivileges()

<details><summary>Historia</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->**.clearPrivileges()**<!-- END REF -->

<!-- REF #SessionClass.clearPrivileges().Params -->

| Parámetros | Tipo |     | Descripción                  |                  |
| ---------- | ---- | :-: | ---------------------------- | ---------------- |
|            |      |     | No requiere ningún parámetro | <!-- END REF --> |

#### Descripción

The `.clearPrivileges()` function <!-- REF #SessionClass.clearPrivileges().Summary -->removes all the privileges associated to the session<!-- END REF -->. Como resultado, la sesión se convierte automáticamente en una sesión de invitado.

#### Ejemplo

```4d
//Invalidar una sesión
var $isGuest : Boolean  

Session.clearPrivileges()
$isGuest:=Session.isGuest() //$isGuest es True
```

<!-- END REF -->

<!-- REF SessionClass.expirationDate.Desc -->

## .expirationDate

<details><summary>Historia</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |

</details>

<!-- REF #SessionClass.expirationDate.Syntax -->**.expirationDate** : Text<!-- END REF -->

#### Descripción

The `.expirationDate` property contains <!-- REF #SessionClass.expirationDate.Summary -->the expiration date and time of the session cookie<!-- END REF -->. The value is expressed as text in the ISO 8601 format: `YYYY-MM-DDTHH:MM:SS.mmmZ`.

This property is **read-only**. It is automatically recomputed if the [`.idleTimeout`](#idletimeout) property value is modified.

#### Ejemplo

```4d
var $expiration : Text
$expiration:=Session.expirationDate //eg "2021-11-05T17:10:42Z"
```

<!-- END REF -->

<!-- REF SessionClass.hasPrivilege().Desc -->

## .hasPrivilege()

<details><summary>Historia</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |

</details>

<!-- REF #SessionClass.hasPrivilege().Syntax -->**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->

<!-- REF #SessionClass.hasPrivilege().Params -->

| Parámetros | Tipo    |     | Descripción                                      |                  |
| ---------- | ------- | :-: | ------------------------------------------------ | ---------------- |
| privilege  | Text    |  <- | Nombre del privilegio a verificar                |                  |
| Result     | Boolean |  <- | True if session has _privilege_, False otherwise | <!-- END REF --> |

#### Descripción

The `.hasPrivilege()` function <!-- REF #SessionClass.hasPrivilege().Summary -->returns True if the privilege is associated to the session, and False otherwise<!-- END REF -->.

#### Ejemplo

Quiere comprobar si el privilegio "WebAdmin" está asociado a la sesión:

```4d
If (Session.hasPrivilege("WebAdmin"))
	//Access is granted, do nothing
Else
	//Display an authentication page

End if
```

<!-- END REF -->

<!-- REF SessionClass.idleTimeout.Desc -->

## .idleTimeout

<details><summary>Historia</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |

</details>

<!-- REF #SessionClass.idleTimeout.Syntax -->**.idleTimeout** : Integer<!-- END REF -->

#### Descripción

The `.idleTimeout` property contains <!-- REF #SessionClass.idleTimeout.Summary -->the inactivity session timeout (in minutes), after which the session is automatically closed by 4D<!-- END REF -->.

Si no se define esta propiedad, el valor por defecto es 60 (1h).

When this property is set, the [`.expirationDate`](#expirationdate) property is updated accordingly.

> El valor no puede ser inferior a 60: si se define un valor inferior, el tiempo de espera se eleva hasta 60.

This property is **read write**.

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

<!-- REF SessionClass.isGuest().Desc -->

## .isGuest()

<details><summary>Historia</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |

</details>

<!-- REF #SessionClass.isGuest().Syntax -->**.isGuest()** : Boolean<!-- END REF -->

<!-- REF #SessionClass.isGuest().Params -->

| Parámetros | Tipo    |     | Descripción                                     |                  |
| ---------- | ------- | :-: | ----------------------------------------------- | ---------------- |
| Result     | Boolean |  <- | True if session is a Guest one, False otherwise | <!-- END REF --> |

#### Descripción

The `.isGuest()` function <!-- REF #SessionClass.isGuest().Summary -->returns True if the session is a Guest session (i.e. it has no privileges)<!-- END REF -->.

#### Ejemplo

In the `On Web Connection` database method:

```4d
If (Session.isGuest())
	//Do something for Guest user
End if
```

<!-- END REF -->

<!-- REF SessionClass.setPrivileges().Desc -->

## .setPrivileges()

<details><summary>Historia</summary>

| Versión | Modificaciones                                      |
| ------- | --------------------------------------------------- |
| v19 R8  | Compatibilidad con la propiedad "roles" en Settings |
| v18 R6  | Añadidos                                            |

</details>

<!-- REF #SessionClass.setPrivileges().Syntax -->**.setPrivileges**( *privilege* : Text )<br/>**.setPrivileges**( *privileges* : Collection )<br/>**.setPrivileges**( *settings* : Object )<!-- END REF -->

<!-- REF #SessionClass.setPrivileges().Params -->

| Parámetros | Tipo       |     | Descripción                                                                   |                  |
| ---------- | ---------- | :-: | ----------------------------------------------------------------------------- | ---------------- |
| privilege  | Text       |  -> | Nombre del privilegio                                                         |                  |
| privileges | Collection |  -> | Colección de nombres de privilegios                                           |                  |
| settings   | Object     |  -> | Object with a "privileges" property (string or collection) | <!-- END REF --> |

#### Descripción

The `.setPrivileges()` function <!-- REF #SessionClass.setPrivileges().Summary -->associates the privilege(s) and/or role(s) defined in the parameter to the session<!-- END REF -->.

- In the _privilege_ parameter, pass a string containing a privilege name (or several comma-separated privilege names).

- In the _privileges_ parameter, pass a collection of strings containing privilege names.

- In the _settings_ parameter, pass an object containing the following properties:

| Propiedad  | Tipo              | Descripción                                                                                              |
| ---------- | ----------------- | -------------------------------------------------------------------------------------------------------- |
| privileges | Text o Collection | <li>String containing a privilege name, or</li><li>Collection of strings containing privilege names</li> |
| roles      | Text o Collection | <li>String containing a role, or</li><li>Collection of strings containing roles</li>                     |
| userName   | Text              | Nombre de usuario para asociar a la sesión (opcional)                                 |

:::info

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

<!-- END REF -->

<!-- REF SessionClass.storage.Desc -->

## .storage

<details><summary>Historia</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |

</details>

<!-- REF #SessionClass.storage.Syntax -->**.storage** : Object<!-- END REF -->

#### Descripción

The `.storage` property contains <!-- REF #SessionClass.storage.Summary -->a shared object that can be used to store information available to all requests of the web client<!-- END REF -->.

When a `Session` object is created, the `.storage` property is empty. Since it is a shared object, this property will be available in the `Storage` object of the server.

> Like the `Storage` object of the server, the `.storage` property is always "single": adding a shared object or a shared collection to `.storage` does not create a shared group.

This property is **read only** itself but it returns a read-write object.

#### Ejemplo

You want to store the client IP in the `.storage` property. You can write in the `On Web Authentication` database method:

```4d
If (Session.storage.clientIP=Null) //first access
    Use (Session.storage)
        Session.storage.clientIP:=New shared object("value"; $clientIP)
    End use
End if

```

<!-- END REF -->

<!-- REF SessionClass.userName.Desc -->

## .userName

<details><summary>Historia</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |

</details>

<!-- REF #SessionClass.userName.Syntax -->**.userName** : Text<!-- END REF -->

#### Descripción

The `.userName` property contains <!-- REF #SessionClass.userName.Summary -->the user name associated to the session<!-- END REF -->. Puede utilizarlo para identificar al usuario dentro de su código.

Esta propiedad es una cadena vacía por defecto. It can be set using the `privileges` property of the [`setPrivileges()`](#setprivileges) function.

This property is **read only**.

<!-- END REF -->

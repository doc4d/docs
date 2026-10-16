---
id: privileges
title: Roles and Privileges
---


Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all web or REST user sessions for the various resources in your project (datastore, dataclasses, functions, etc.).



## Overview

The ORDA security architecture is based upon the concepts of privileges, permission actions (read, create, etc.), and resources. 

When web users or REST users get logged, their **session** is automatically loaded with associated privilege(s). Privileges are assigned to the session using the [`session.setPrivileges()`](../API/SessionClass.md#setprivileges) function.

Every user request sent within the session is evaluated against privileges defined in the project's `roles.json` file. If a user attempts to execute an action and does not have the appropriate permissions, a privilege error is generated or, in the case of missing Read permission on attributes, they are not sent.



![schema](../assets/en/ORDA/privileges-schema.png)

:::tip Related Blog posts

[**Filter access to your data with a complete system of permissions**](https://blog.4d.com/filter-access-to-your-data-with-a-complete-system-of-permissions/)

:::

:::info

Permissions control access to datastore objects or functions. If you want to filter read data according to some criteria, you might consider [restricting entity selections](entities.md#restricting-entity-selections) which can be more appropriate in this case.

:::



## Scope

Permissions apply to **web and REST sessions**, i.e. [**REST requests**](../REST/gettingStarted.md) (including [Qodly pages](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/pageLoaderOverview)) and **4D code executed in a web process** ([exposed](./ordaClasses.md) functions, [HTTP request handlers](../WebServer/http-request-handler.md), [On Web Connection database method](../commands/on-web-connection-database-method), as well as **code they call**). For example, a function that reads a restricted dataclass fails for a session without the read permission, even though the function call itself was allowed.

Permissions never apply to [desktop session code](../Desktop/sessions.md) (standalone, client/server, stored procedures) or [tool4d](../Admin/cli.md#tool4d). 

Project methods are not resources: no permission can be set on them.

:::info Exception

The **execute** permission of a [shared singleton](../Concepts/classes.md#shared-singleton) or [singleton function](../Concepts/classes.md#singleton-classes) is checked only when the function is [called through REST](../REST/$singleton.md). When 4D code running in a web session directly calls it (`cs.MySingleton.me.myFunction()`), no permission is checked, unlike dataclass, entity, entity selection and datastore functions, which are checked in both cases.

:::

## Resources

Each time a resource is accessed within a session (whatever the way it is accessed), 4D checks that the session has the appropriate permissions, and rejects the access if it is not authorized. 

You can assign specific permission actions to the following resources in your project:

| Resource | `applyTo` | `type` |
|---|---|---|
| [Datastore](./dsMapping.md#datastore) | `ds` | `datastore` |
| [Datastore class function](./ordaClasses.md#datastore-class) | `ds.<function>` | `method` |
| [Dataclass](./dsMapping.md#dataclass) | `<Dataclass>` | `dataclass` |
| [Attribute](./dsMapping.md#attribute) (including [computed](./ordaClasses.md#computed-attributes-1) and [alias](./ordaClasses.md#alias-attributes-1))| `<Dataclass>.<attribute>` | `attribute` |
| [Dataclass, entity or entity selection function](./ordaClasses.md) | `<Dataclass>.<function>` | `method` |
| [Shared singleton](../Concepts/classes.md#shared-singleton) (all its exposed functions) | `<Singleton>` | `singleton` |
| [Singleton function](../Concepts/classes.md#singleton-classes) | `<Singleton>.<function>` | `singletonMethod` |

`applyTo` and `type` are the property names that you need to use in the [`roles.json`](#rolesjson-file) file.



:::note Assigning permissions to ORDA class functions

When configuring permissions, ORDA class functions are declared in the `applyTo` element using the following syntax:

```json
<DataclassName>.<functionName>
```
For example, if you want to apply a permission to the following function:

```4d
// cs.CityEntity class
Class extends Entity
  Function getPopulation() : Integer
   ...
```
... you have to write:

```json
"applyTo":"City.getPopulation"
```

It means that you cannot use the same function names in the various ORDA classes (entity, entity selection, dataclass) if you want them to be assigned privileges. In this case, you need to use distinct function names. For example, if you have created a "drop" function in both `cs.CityEntity` and `cs.CitySelection` classes, you need to give them different names such as `dropEntity()` and `dropSelection()`. You can then write in the "roles.json" file:

```json
	"permissions": {
		"allowed": [
			{
				"applyTo": "City.dropEntity",
				"type": "method",
				"promote": [
					"name"
				]
			},
			{
				"applyTo": "City.dropSelection",
				"type": "method",
				"promote": [
					"name"
				]
			}
    ]
```

:::


## Permissions


A permission is the ability to do an action on a resource. For example, *execute the ds.myTable.myFunction()* represents a **permission**. Permissions are defined for the project in the [`roles.json`](#rolesjson-file) file. Each permission can be given to one or more [privileges](#privileges-and-roles). 

When **no specific permission** has been defined for a resource, access to the resource may be automatically **unrestricted** or **restricted** depending on the [default mode defined for the project](#restriction-modes). 


### Permission actions

Available actions are related to target resource.

|Actions|datastore|dataclass|attribute|function|
|---|---|---|---|---|			
|**create**|Create entity in any dataclass|Create entity in this dataclass|Create an entity with a value different from default value allowed for this attribute (ignored for alias attributes).|n/a|
|**read**|Read attributes in any dataclass|Read attributes in this dataclass|Read this attribute content|n/a|
|**update**|Update attributes in any dataclass. |Update attributes in this dataclass.|Update this attribute content (ignored for alias attributes).|n/a|
|**drop** ("Delete" column in Qodly studio)|Delete data in any dataclass. |Delete data in this dataclass. |Delete a not null value for this attribute (except for alias and computed attribute).|n/a|
|**execute**|Execute any function on the project (datastore, dataclass, entity selection, entity, singleton)|Execute any function on the dataclass. Dataclass functions, entity functions, and entity selection functions are handled as dataclass functions|n/a|Execute this function|
|**promote**|n/a|n/a|n/a|Associates a given privilege during the execution of the function. The privilege is temporary added and removed at the end of the function execution. By security, only the process executing the function is added the privilege, not the whole session. You can set/remove this action dynamically to a web process using the [`promote()`](../API/SessionClass.md#promote) and [`demote()`](../API/SessionClass.md#demote) functions. |

### Permission rules

- **update** and **drop** are refused when the session does not also have **read** on the resource; **create** does not need **read**.
- A function can be **promoted** from multiple privileges. In such cases, there's no hierarchy determining priority. Instead, the session experiencing temporary privilege elevation during function execution will have access to all resource permissions set in each of the promoting privileges.
- An [alias](./ordaClasses.md#alias-attributes-1) can be read as soon as the session privileges allow the access to the alias itself, even if the session privileges do no allow the access to the attributes resolving the alias.
- A [computed attribute](./ordaClasses.md#computed-attributes-1) can be accessed even if there are no permissions on the attributes upon which it is built.
- In REST [force login mode](../REST/authUsers.md#force-login-mode), the [`authentify()` function](../REST/authUsers.md#function-authentify) is always executable by guest users, whatever the permissions configuration.



### Inherited permissions

Permission actions are inherited according to the following rules:

1. Permissions descend **datastore → dataclass → attribute / function**, and **datastore → singleton → singleton** function.
2. Resolution is **per action**. Defining `read` on a dataclass does not change how `create`, `update`, `drop` or `execute` are resolved for it.
3. **Dataclass replaces datastore**. A permission defined on a dataclass for an action replaces the datastore permission for that action. Privileges granted the action only on the datastore lose it on that dataclass.
4. **Function replaces dataclass**. An `execute` permission defined on a function replaces the dataclass (and datastore) `execute` permission for that function. Entity and entity selection functions follow the same rule as dataclass functions.
5. **Singleton replaces datastore**, **singleton function replaces singleton**.
6. **Datastore function replaces datastore**.
7. **Attribute adds to its parent**. To act on an attribute that has its own permission, a session needs a privilege granted by the attribute permission **and** a privilege granted the action on the dataclass (directly or through the datastore).
8. A permission granted to **no privilege** (`"read": []`, or the action absent) is "not set": the level above applies; it does not mean "nobody". To give an action to nobody, use [restricted mode](#restriction-modes) with no permission on it, or grant it to a privilege that no session ever receives (see [Restriction modes](#restriction-modes) below).

#### Understanding the rules

Permissions only *allow*; there is no *deny*. Replacement at dataclass and function level is what lets you restrict one table or function below a broad datastore permission. At attribute level, access requires both a privilege granted by the attribute permission and a privilege granted the action on the dataclass. The attribute permission does not grant access to the dataclass or its other attributes.

:::tip Recommended practice

- Lock everything, then open gradually: [restricted mode or a lock privilege](#restriction-modes), the choice is yours.
- Give access to sessions through **roles** (use `Session.setPrivileges({roles: […]})`), each role describing a business profile, rather than through privileges directly, even though 4D allows it. A privilege is a building block; this is also why [Qodly Studio](https://developer.4d.com/qodly/4DQodlyPro/roles/overview) shows the effective permissions on roles only.
- An administration role that needs all access holds **every privilege** (except the lock privilege, if you use one: it is never given to any role). When you create a privilege, do not forget to add it to that role: otherwise the role loses the actions that the new privilege's dataclass-level permissions replace.
- Grant public resources (public data, and the login function unless [force login](../REST/authUsers.md#force-login-mode) is used) to `guest`, keeping in mind that `guest` permissions reach every session.
- When you change a privilege, check the impact on each role. In [Qodly Studio](https://developer.4d.com/qodly/4DQodlyPro/roles/overview), the **Detailed Permission Review** of a role shows the resulting access. To see what a session without role (guest only) can do, look at the review of a role that has no privilege.

:::


## Privileges and Roles

A **privilege** is the technical ability to run **actions** on **resources**, while a **role** is a privilege pusblished to be used by an administrator. 

Basically, a role gathers several privileges to define a business user profile. For example, "manageInvoices" could be a privilege while "secretary" could be a role (which includes "manageInvoices" and other privileges). Roles are only used with [`Session.setPrivileges({roles: […]})`](../API/SessionClass.md#setprivileges); they grant their privileges.

A privilege can be associated to several "action + resource" combinations. Several privileges can be associated to an action. 

- You **create** privileges and/or roles in the `roles.json` file (see below). You **configure** their scope by assigning them to permission action(s) applied to resource(s).
- You **allow** privileges and/or roles to every user session using the [`.setPrivileges()`](../API/SessionClass.md#setprivileges) function of the `Session` class.

### Including privileges

A privilege can include other privileges using the `includes` property of the roles.json file. Inclusion is transitive (A → B → C gives A the permissions of C) and one-way. 

[`Session.getPrivileges()`](../API/SessionClass.md#getprivileges) returns the expanded collection (e.g. A, B and C), in no guaranteed order. An included privilege must be declared before the privilege that includes it; otherwise the inclusion is dropped and an error is logged.

### Example

To allow a role in a session:

```4d

exposed Function authenticate($identifier : Text; $password : Text)->$result : Text

    var $user : cs.UsersEntity

    Session.clearPrivileges()

    $result:="Your are authenticated as Guest"

    $user:=ds.Users.query("identifier = :1"; $identifier).first()

    If ($user#Null)
        If (Verify password hash($password; $user.password))
            Session.setPrivileges(New object("roles"; $user.role))
            $result:="Your are authenticated as "+$user.role
        End if
    End if


```

## `guest` privilege

- `guest` is built in. Declaring a privilege named Guest is an error ("privilege already defined").
- Sessions without privileges (`Session.isGuest() = True`) get the permissions given to `guest`.
- Permissions given to `guest` are granted to every session, whatever its privileges (a `member` session can read what guest can read). As a consequence, you should never give `guest` something you want to keep from other privileges, and remember it when restricting with dataclass permissions.


## `roles.json` file


The `roles.json` file describes the whole web security settings for the project. The `roles.json` file syntax is the following:

|Property name|||Type|Mandatory|Description|
|---|---|---|---|---|---|
|privileges|||Collection of `privilege` objects|X|List of defined privileges|
||\[].privilege||Text||Privilege name|
||\[].includes||Collection of strings||List of included privilege names|
|roles|||Collection of `role` objects||List of defined roles|
||\[].role||Text||Role name|
||\[].privileges||Collection of strings||List of included privilege names|
|permissions|||Object|X|List of allowed actions|
||allowed||Collection of `permission` objects||List of allowed permissions|
|||\[].applyTo|Text|X|Targeted [resource](#resources) name|
|||\[].type|Text|X|[Resource](#resources) type: "datastore", "dataclass", "attribute", "method", "singletonMethod", "singleton"|
|||\[].read|Collection of strings||List of privileges|
|||\[].create|Collection of strings||List of privileges|
|||\[].update|Collection of strings||List of privileges|
|||\[].drop|Collection of strings||List of privileges|
|||\[].execute|Collection of strings||List of privileges|
|||\[].promote|Collection of strings||List of privileges|
|restrictedByDefault|||Boolean||If true, access to resources without explicit permissions is denied |
|forceLogin|||Boolean||If true, enables ["forceLogin" mode](../REST/authUsers.md#force-login-mode) |


:::note Notes

- The "WebAdmin" privilege name is reserved to the application. It is not recommended to use this name for custom privileges.
- `privileges` and `roles` names are case-insensitive. Unknown names passed to [`.setPrivileges()`](../API/SessionClass.md#setprivileges) are ignored.
- The optional `id` property can be added by Qodly Studio on privileges and roles. It used to keep references on rename.
- If you declare several entries for the same `applyTo`, they are not merged: the last one wins, without error. It is recommended to declare a single entry per resource.
- A resource entry granting no action has no effect.

:::

### Default File Location and Content

When a new project is created, a default `roles.json` file is generated at:

```
<project folder>/Project/Sources/ 
```

See [Architecture](../Project/architecture.md#sources) section.

Default content:

```json title="/Project/Sources/roles.json"

{
  "privileges": [
  ],
  "roles": [
  ],
  "permissions": {
    "allowed": [
      {
        "applyTo": "ds",
        "type": "datastore",
        "read": [],
        "create": [],
        "update": [],
        "drop": [],
        "execute": [],
        "promote": []
      }
    ]
  },
  "restrictedByDefault": false,
  "forceLogin": false
}
```




:::note Compatibility

In previous releases, the `roles.json` file was not created by default. As of 4D 20 R6, when opening an existing project that does not contain a `roles.json` file or the `"forceLogin": true` settings, the **Activate REST authentication through ds.authentify() function** button is available in the [**Web Features** page of the Settings dialog box](../settings/web.md#access). This button automatically upgrades your security settings (you may have to modify your code, [see this blog post](https://blog.4d.com/force-login-becomes-default-for-all-rest-auth/)).

:::

:::note Qodly Studio

In Qodly Studio for 4D, the login mode can be set using the [**Force login** option](https://developer.4d.com/qodly/4DQodlyPro/force-login) in the Roles and Privileges panel.

:::


## Restriction Modes

The `restrictedByDefault` property configures how every [resource](#resources) are accessed when [no specific permission is defined for it](#permissions):

- **Unrestricted mode** (`restrictedByDefault`: **false**): Resources without defined permissions are accessible to all requests. This mode is suitable for development environments where access can be gradually restricted.
- **Restricted mode** (`restrictedByDefault`: **true**): Resources without defined permissions are blocked by default. This mode is recommended for production environments where access must be explicitly granted. In this mode the [inheritance rules](#inherited-permissions) still apply.


:::note Compatibility

- When **creating a new project**, the `restrictedByDefault` property is set to **false** in the *roles.json* file (see below). Keep in mind that this configuration is tailored for quick start and smooth development. In production environment, [it is recommended to set the `restrictedByDefault` and `forceLogin` properties to **true**](#recommended-configuration).
- In **projects converted from previous releases**; when enabling access to Qodly Studio using the [One-click configuration dialog](https://developer.4d.com/qodly/4DQodlyPro/gettingStarted#one-click-configuration), the `restrictedByDefault` property is added with value **true** in the *roles.json* file. 

:::

### Restriction strategies

#### Lock everything and open gradually

Here the two ways from which you may choose:

| | Restricted mode | Lock privilege |
|---|---|---|
| Setting | `"restrictedByDefault": true` (Qodly Studio: **Restrict Access By Default**) | `"restrictedByDefault": false` - Unrestricted mode; every action on `ds` granted to a privilege that no session ever receives (e.g. `none`) |
| What is closed | Every resource without a permission  | Every resource that inherits the datastore permissions |
| How to open | Grant permissions on the datastore, dataclasses, attributes, functions | Same: permissions on dataclasses and functions replace the lock |
| Invalid entry dropped by 4D | The resource stays closed| The resource falls back to the lock, stays closed |
| To keep in mind | Public resources must be granted explicitly (usually to `guest`), including the login function unless [force login](../REST/authUsers.md#force-login-mode) is used, and [HTTP request handlers](../WebServer/http-request-handler.md) called before login. In Qodly Studio, the role review is currently wrong in this mode. | Never give the lock privilege to any role, the admin role included |

Both give the same result; the **lock privilege** makes the lock visible in the editor as a privilege, **restricted mode** needs no extra privilege. Inheritance and replacement rules apply in both cases.

#### Open everything, restrict gradually

Set unrestricted mode (`"restrictedByDefault": false`), give `ds` read to `guest`, then restrict sensitive dataclasses with dataclass-level permissions. 

Pay attention to the fact that [guest](#guest-privilege)  permissions reach every session and that, in unrestricted mode without a lock privilege, an invalid entry dropped by 4D leaves the resource open.






#### Recommended Configuration {#recommended-configuration}

Depending on your environment, the recommended settings are:

- **Production**: Set both `restrictedByDefault` and [`forceLogin`](../REST/authUsers.md#force-login-mode) to **true**. This ensures maximum security by requiring user authentication and explicitly defined permissions for resource access. 
- **Development**: Set both `restrictedByDefault` and [`forceLogin`](../REST/authUsers.md#force-login-mode) to **false**. This allows easier access during development and debugging, with the possibility to gradually apply restrictions.






### `Roles_Errors.json` file

The `roles.json` file is parsed by 4D at startup. You need to restart the application if you want modifications in this file to be taken into account.

In case of error(s) when parsing the `roles.json` file, an error file named `Roles_Errors.json` is generated in the [`Logs` folder of the project](../Project/architecture.md#logs) and describes the error line(s). This file is automatically deleted when the `roles.json` file no longer contains error(s).

It is highly recommended, especially in production, to check at startup if a `Roles_Errors.json` file exists in the [Logs folder](../Project/architecture.md#logs), which means that there was a parsing error and that accesses will not limited. You can write for example:

```4d title="/Sources/DatabaseMethods/onStartup.4dm"
If (Not(File("/LOGS/"+"Roles_Errors.json").exists))
…
Else // you can prevent the project to open
 ALERT("The roles.json file is malformed or contains inconsistencies, the application will quit.")
 QUIT 4D
End if
```

The returned errors are:

| Path | read / create / update / drop refused | execute refused |
|---|---|---|
| REST | HTTP 401 with message | **HTTP 500** with message (singleton: "Bad permission...") |
| Code (web session) | read: error 1557 (dataclass), 1607 (attribute). Create refused: error 1608 when assigning an attribute of the new entity (when create is restricted by a permission, or `save()` returning `success: false`, `statusText: "Permission Error"` (restricted mode with no permission). Update/drop refused: error 1557 when loading the entity (they need read) | error 1561 |




## Example

This example shows a broad privilege plus one sensitive dataclass, which is a common case: a *manager* privilege gets every action on the datastore, and only the *payroll* privilege may read the *Salaries* dataclass.

```json title="roles.json"

"forceLogin": true,
"restrictedByDefault": true,
"privileges": [
    {"privilege": "payroll", "includes": []},
    {"privilege": "manager", "includes": []}
],
"permissions": {"allowed": [
    {"applyTo": "ds", "type": "datastore", "read": ["manager"], "create": ["manager"],
     "update": ["manager"], "drop": ["manager"], "execute": ["manager"]},
    {"applyTo": "Salaries", "type": "dataclass", "read": ["payroll"]}
	"roles": []
]}

```

Here are the resulting rules:

| Session | read Salaries | create Salaries | update / drop Salaries | read other dataclasses |
|---|---|---|---|---|
| manager | refused (the read permission on `Salaries` replaces the one on ds) | allowed (inherited from ds) | refused (needs read) | allowed |
| payroll | allowed | refused (inherited from ds: granted to `manager` only) | refused | refused |
| role with `manager` + `payroll` | allowed | allowed | allowed | allowed |


Granting read on "Salaries" to `payroll` takes it away from `manager`, because the read permission defined on `Salaries` replaces the one defined on the datastore. To give someone access to everything, use a **role** that holds the privileges (here `manager` + `payroll`): a session with the role gets the combined access of its privileges.



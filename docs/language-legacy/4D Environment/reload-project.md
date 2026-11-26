---
id: reload-project
title: RELOAD PROJECT
slug: /commands/reload-project
displayed_sidebar: docs
---

<!--REF #_command_.RELOAD PROJECT.Syntax-->**RELOAD PROJECT** ( {*sync* : Boolean} )<!-- END REF-->
<!--REF #_command_.RELOAD PROJECT.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| sync | Boolean | &#8594; | True to wait until the project is reloaded (default is False: asynchronous execution) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R6|Support of *sync* parameter and reload of editable components|
|18 R4|Created|

</details>
</div>

## Description 

<!--REF #_command_.RELOAD PROJECT.Summary-->The **RELOAD PROJECT** command reloads the source file definitions (methods, forms, etc.) from the disk for the running project and all its loaded editable components (if any) in the current 4D environment.<!-- END REF--> This command can only be used with 4D projects executed in **interpreted mode**. 

Reloaded [editable components](../../Extensions/develop-components.md#editing-components) are components loaded in interpreted mode whose source code is available and stored locally. Other components (compiled, .4dz, or downloaded by the dependency manager) are not reloaded.

By default, the command execution is asynchronous. If you pass **True** in the *sync* parameter, the command waits until the project and all its components are reloaded before returning. In particular, this execution mode allows you to make sure that code run afterwards uses updated versions of components.  

Calling **RELOAD PROJECT** command is necessary when the [automatic project reload mechanisms](../../GettingStarted/creating.md#saving-changes) could not apply, i.e. in the following contexts:

* the project is run by 4D Server or 4D and source files are modified by an external means, for example by a *pull* action from a source control repository; and you cannot (or you don't want to) manually move the application window, for example because you want to to have an automatic execution.
* the project is run by 4D Server in [headless mode](../../Admin/cli.md) and source files have been modified.


:::note

**RELOAD PROJECT** does not reload database structure definitions. If a new field has been added for example, you need to restart the project to take the modification into account.

:::

If the Design environment is not available (for example if the project was started in Application mode), the command only clears the cache of all loaded methods; they are then reloaded the next time they are called. New or deleted files and forms are not taken into account. In this context, the command is always synchronous (the *sync* parameter is ignored). 

When the command is called from:

* a 4D connected to a 4D Server on the same machine, it is executed on 4D Server first, then on the 4D side. If *sync* is True, the command waits until 4D Server has reloaded the project, then until the local reload is done.
* a 4D connected remotely to a 4D Server, it is executed on 4D Server only. If *sync* is True, the command waits until 4D Server has reloaded the project.
* a 4D single-user or a 4D Server, it is executed locally. If *sync* is True, the command waits until the project and its editable components are reloaded.

## See also 

[Creating or opening a project](../../GettingStarted/creating.md)
[Development overview](../../Project/overview.md#development)  

## Properties

|  |  |
| --- | --- |
| Command number | 1739 |
| Thread safe | yes |



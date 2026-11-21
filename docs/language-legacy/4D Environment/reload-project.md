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

<!--REF #_command_.RELOAD PROJECT.Summary-->The **RELOAD PROJECT** command reloads the source file definitions (methods, forms, etc.) from the disk for the running project in the current 4D environment.<!-- END REF--> It can only be used with 4D projects executed in **interpreted mode**. By default, the command execution is asynchronous. If you pass **True** in the *sync* parameter, the command waits until the project is reloaded before returning. 

Usually, a project is automatically reloaded when the 4D application detects that a source file has been added, modified, or deleted. It is the case when a file was directly edited from the 4D Developer IDE, or after the 4D application window is moved from the background to the foreground of the OS. 

Calling **RELOAD PROJECT** command is necessary when the automatic project reload mechanisms could not apply, i.e. in the following contexts:

* the project is run by 4D Server or 4D Developer and source files are modified by an external means, for example by a *pull* action from a source control repository; and you cannot (or you don't want to) manually move the application window, for example because you want to to have an automatic execution.
* the project is run by 4D Server in headless mode and source files have been modified.

The command also reloads the [editable components](../../Extensions/develop-components.md#editing-components) of the project, i.e. components loaded in interpreted mode whose source code is available and stored locally. Other components (compiled, .4dz, or downloaded by the dependency manager) are not reloaded.

If the Design environment is not available (for example when the project was started in Application mode), the command only reloads the modified methods and class functions of the project and its editable components; they are reloaded the next time they are called. New or deleted files and forms are not taken into account. In this case, the command is always synchronous.

When the command is called from:

* a 4D Developer connected to a 4D Server on the same machine, it is executed on 4D Server first, then on the 4D Developer side. If *sync* is True, the command waits until 4D Server has reloaded the project, then until the local reload is done.
* a 4D Developer connected remotely to a 4D Server, it is executed on 4D Server only. If *sync* is True, the command waits until 4D Server has reloaded the project.
* a 4D single-user or a 4D Server, it is executed locally. If *sync* is True, the command waits until the project and its editable components are reloaded.

## See also 

*Developing a project*  

## Properties

|  |  |
| --- | --- |
| Command number | 1739 |
| Thread safe | yes |



---
id: reload-project
title: RELOAD PROJECT
slug: /commands/reload-project
displayed_sidebar: docs
---

<!--REF #_command_.RELOAD PROJECT.Syntax-->**RELOAD PROJECT**<!-- END REF-->
<!--REF #_command_.RELOAD PROJECT.Params-->
<div class="no-index">

| Does not require any parameters |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R6|Reloads the folder hierarchy of disk-folder projects|
|18 R4|Created|

</details>
</div>

## Description 

<!--REF #_command_.RELOAD PROJECT.Summary-->The **RELOAD PROJECT** command reloads the source file definitions (methods, forms, etc.) from the disk for the running project in the current 4D environment.<!-- END REF--> It can only be used with 4D projects executed in **interpreted mode**. The command execution is asynchronous. 

Usually, a project is automatically reloaded when the 4D application detects that a source file has been added, modified, or deleted. It is the case when a file was directly edited from the 4D Developer IDE, or after the 4D application window is moved from the background to the foreground of the OS. 

Calling **RELOAD PROJECT** command is necessary when the automatic project reload mechanisms could not apply, i.e. in the following contexts:

* the project is run by 4D Server or 4D Developer and source files are modified by an external means, for example by a *pull* action from a source control repository; and you cannot (or you don't want to) manually move the application window, for example because you want to to have an automatic execution.
* the project is run by 4D Server in headless mode and source files have been modified.

The command does nothing if the Design environnement is not opened.

When the command is called from:

* a 4D Developer connected to a 4D Server on the same machine, it is executed on 4D Server first, then on the 4D Developer side.
* a 4D Developer connected remotely to a 4D Server, it is executed on 4D Server only.
* a 4D single-user or a 4D Server, it is executed locally.

In a [disk-folder project](../../Project/architecture.md#disk-folder-projects), the command also reloads the folder hierarchy of the Explorer Home page from the folders found on disk under `Project/Sources`: folders added, renamed, moved, or deleted, and elements moved between folders. A method moved to another folder keeps its identity (open editors and breakpoints follow it). The [files at fault](../../Develop/explorer.md#files-at-fault) found on disk are reported in a dialog, or in the diagnostic log when there is no IDE.

## Example

In a disk-folder project, you want to add a folder with a method outside the Explorer, then show it on the Home page:

```4d
var $folder : 4D.Folder:=Folder(fk database folder).folder("Project/Sources/Reports/Methods")
$folder.create()
$folder.file("monthlyReport.4dm").setText("//%attributes = {}\r#DECLARE()\r")
RELOAD PROJECT  // the Reports folder and its monthlyReport method appear on the Home page
```

## See also 

*Developing a project*  

## Properties

|  |  |
| --- | --- |
| Command number | 1739 |
| Thread safe | yes |



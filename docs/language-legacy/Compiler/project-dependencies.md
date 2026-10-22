---
id: project-dependencies
title: Project dependencies
slug: /commands/project-dependencies
displayed_sidebar: docs
---

<!--REF #_command_.Project dependencies.Syntax-->**Project dependencies** ( {*projectFile* : 4D.File} ) : Object<!-- END REF-->
<!--REF #_command_.Project dependencies.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| projectFile | 4D.File | &#8594;  | .4DProject file whose dependencies must be resolved. If omitted, the current project is used. |
| Function result | Object | &#8592; | Object containing the root project file and its dependencies in compilation order. |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R6|Added|

</details>
</div>

## Description

**Project dependencies**<!--REF #_command_.Project dependencies.Summary--> returns the current project's dependencies, or the dependencies of the `.4DProject` file passed in *projectFile*. The dependencies are returned in the order required to compile them before the root project.<!-- END REF-->

The command uses the project's `dependencies-lock.json` file to determine the dependency order. In a dependency graph where multiple components depend on the same component, the shared dependency is returned only once and before its dependents. Dependency cycles do not prevent the command from returning a result; they are reported as warnings.

:::note

The command does not retrieve, download, or install dependencies. Dependency retrieval remains the responsibility of the dependency manager.

:::

The command throws a [standard 4D error](../../Concepts/error-handling.md) if the root project's `dependencies.json` or `dependencies-lock.json` file exists but cannot be read, contains invalid JSON, or has an invalid manifest structure (these errors are not returned in a dependency's `errors` collection).

## Function result

The object returned by **Project dependencies** contains the following properties:

| Property | Type | Description |
| --- | --- | --- |
| projectFile | 4D.File or Null | Root `.4DProject` file to compile last. `Null` if none was found. |
| dependencies | Collection | Dependencies in the order required for compilation. Each dependency resolved from the lock file is listed once. |
| dependencies[].projectFile | 4D.File or Null | `.4DProject` or `.4dz` file for the dependency. `Null` if the dependency is not available. |
| dependencies[].name | Text | Dependency project name. |
| dependencies[].errors | Collection | Errors for this dependency. These can describe a corrupted or invalid component, a network failure while retrieving it, or a missing component folder. |
| dependencies[].warnings | Collection | Non-blocking dependency issues. This property is returned only when at least one warning is present. Warnings can report inconsistencies between `dependencies.json` and the lock file when the dependency can still be resolved locally, dependency cycles, and warnings recorded by the dependency manager.|


## Example

Compile the resolved dependencies in the required order, then compile the root project with those dependencies declared as components:

```4d
#DECLARE : Object

var $options; $result : Object
var $dependency : Object

// Resolve dependencies for the current project
var $deps:=Project dependencies()

// Collect the compiled dependency files for the root compilation
var $components:=[]

For each ($dependency; $deps.dependencies)
	If (($dependency.projectFile#Null)&&($dependency.errors.length=0))
		// Project files must be compiled; .4dz dependencies are already compiled
		If ($dependency.projectFile.extension=".4DProject")
			$result:=Compile project($dependency.projectFile; {targets: ["x86_64_generic"]})
			If (Not($result.success))
				return $result
			End if
		End if
		$components.push($dependency.projectFile)
	End if
End for each

// Compile the root project last, using its compiled dependencies
$options:={components: $components; targets: ["x86_64_generic"]}
$result:=Compile project($deps.projectFile; $options)

return $result
```

## See also

[Compile project](../commands/compile-project)

## Properties

|  |  |
| --- | --- |
| Command number | 1868 |
| Thread safe | yes |




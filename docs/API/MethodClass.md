---
id: MethodClass
title: Method
---


A **`4D.Method`** object contains a reference to a project method or function. A `4D.Method` object can be returned by [`METHOD GET PATH`](../commands-legacy/method-get-path.md) or obtained through the `cs` class store.

:::tip Blog post

For more information, see the [**What's new in 4D 21 R3**](https://blog.4d.com/whats-new-in-4d-v21-r3/) blog post.

:::

<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R3|Class added|

</details>

### Method Object

A `4D.Method` object exposes the following properties (all read-only):

||
|---|
|[<!-- INCLUDE #MethodClass.name.Syntax -->](#name)<br/><!-- INCLUDE #MethodClass.name.Summary -->|
|[<!-- INCLUDE #MethodClass.file.Syntax -->](#file)<br/><!-- INCLUDE #MethodClass.file.Summary -->|
|[<!-- INCLUDE #MethodClass.path.Syntax -->](#path)<br/><!-- INCLUDE #MethodClass.path.Summary -->|
|[<!-- INCLUDE #MethodClass.methodType.Syntax -->](#methodtype)<br/><!-- INCLUDE #MethodClass.methodType.Summary -->|


<!-- REF MethodClass.name.Desc -->
## .name

<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R3|Added|

</details>

<!-- REF #MethodClass.name.Syntax -->**.name** : Text<!-- END REF -->

#### Description

The `.name` property <!-- REF #MethodClass.name.Summary -->returns the name of the method<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->


<!-- REF MethodClass.file.Desc -->
## .file

<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R3|Added|

</details>

<!-- REF #MethodClass.file.Syntax -->**.file** : 4D.File<!-- END REF -->

#### Description

The `.file` property <!-- REF #MethodClass.file.Summary -->returns a `4D.File` object referencing the file that defines the method<!-- END REF -->. 

This property is **read-only**. It is **Null** for methods that are not stored as files (e.g., built-in database methods or volatile methods).

<!-- END REF -->


<!-- REF MethodClass.path.Desc -->
## .path

<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R3|Added|

</details>

<!-- REF #MethodClass.path.Syntax -->**.path** : Text<!-- END REF -->

#### Description

The `.path` property <!-- REF #MethodClass.path.Summary -->returns the full internal path of the method<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->


<!-- REF MethodClass.methodType.Desc -->
## .methodType

<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R3|Added|

</details>

<!-- REF #MethodClass.methodType.Syntax -->**.methodType** : Integer<!-- END REF -->

#### Description

The `.methodType` property <!-- REF #MethodClass.methodType.Summary -->returns the type of the method<!-- END REF --> as one of the *Design Object Access* constants (e.g., `Path project method`, `Path database method`, etc.).

This property is **read-only**.

<!-- END REF -->

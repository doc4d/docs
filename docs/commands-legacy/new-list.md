---
id: new-list
title: New list
slug: /commands/new-list
displayed_sidebar: docs
---

<!--REF #_command_.New list.Syntax-->**New list**  : Integer<!-- END REF-->
<!--REF #_command_.New list.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | List reference number |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|6|Created|

</details>
</div>

## Description 

<!--REF #_command_.New list.Summary-->**New list** creates a new, empty hierarchical list in memory and returns its unique list reference number.<!-- END REF-->

**WARNING:** Hierarchical lists are held in memory. When you are finished with a hierarchical list, it is important to dispose of it and free the memory, using the command [CLEAR LIST](clear-list).

Several other commands allow you to create hierarchical lists:

* [Copy list](copy-list) duplicates a list from an existing list.
* [Load list](load-list) creates a list by loading a Choice List created (manually or programmatically) in the Design enviornment List Editor.
* [BLOB to list](blob-to-list) creates a list from the contents of a BLOB in which a list was previously saved.

After you have created a hierarchical list using **New list**, you can:

* Add items to that list, using the command [APPEND TO LIST](append-to-list) or [INSERT IN LIST](insert-in-list).
* Delete items from that list, using the command [DELETE FROM LIST](delete-from-list).

## Example 

See example for the [APPEND TO LIST](append-to-list) command.

## See also 

[APPEND TO LIST](append-to-list)  
[BLOB to list](blob-to-list)  
[CLEAR LIST](clear-list)  
[Copy list](copy-list)  
[DELETE FROM LIST](delete-from-list)  
[INSERT IN LIST](insert-in-list)  
[LIST TO BLOB](list-to-blob)  
[Load list](load-list)  

## Properties

|  |  |
| --- | --- |
| Command number | 375 |
| Thread safe | no |



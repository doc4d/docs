---
id: get-list-item-properties
title: GET LIST ITEM PROPERTIES
slug: /commands/get-list-item-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST ITEM PROPERTIES.Syntax-->**GET LIST ITEM PROPERTIES** ( * ; *list* : Text ; *itemRef* : Integer, Operator ; *enterable* : Boolean {; *styles* : Integer {; *icon* : Text, Integer {; *color* : Integer {; *selectable* : Boolean}}}} )<br/>**GET LIST ITEM PROPERTIES** ( *list* : Integer ; *itemRef* : Integer, Operator ; *enterable* : Boolean {; *styles* : Integer {; *icon* : Text, Integer {; *color* : Integer {; *selectable* : Boolean}}}} )<!-- END REF-->
<!--REF #_command_.GET LIST ITEM PROPERTIES.Params-->
<div class="no-index">


| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, list is an object name (string) If omitted, list is a list reference number |
| list | Integer, Text | &#8594;  | List reference number (if * omitted), or Name of list type object (if * passed) |
| itemRef  | Integer, Operator | &#8594;  | Item reference number, or 0 for last list item added, or * for the current list item |
| enterable | Boolean | &#8592; | TRUE = Enterable, FALSE = Non-enterable |
| styles | Integer | &#8592; | Font style for the item |
| icon | Text, Integer | &#8592; | Picture name or number |
| color | Integer | &#8592; | RGB color value |
| selectable | Boolean | &#8592; | True if the item is selectable (drop-down with List data source only) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R6|New *selectable* parameter|
|17 R6|Modified|
|11 SQL|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.GET LIST ITEM PROPERTIES.Summary-->The **GET LIST ITEM PROPERTIES** command returns the properties of the item designated by the *itemRef* parameter within the list whose list reference number or object name is passed in *list*.<!-- END REF-->

If you pass the first optional *\** parameter, you indicate that the *list* parameter is an object name (string) corresponding to a representation of the list in the form. If you do not pass this parameter, you indicate that the *list* parameter is a hierarchical list reference. If you only use a single representation of the list or work with structural items (the second *\** is omitted), you can use either syntax. Conversely, if you use several representations of the same list and work with the current item (the second *\** is passed), the syntax based on the object name is required since each representation can have its own current item.

**Note:** If you use the @ character in the object name of the list and the form contains several lists matching this name, the **GET LIST ITEM PROPERTIES** command will be applied to the first object whose name corresponds.

In *itemRef*, you can pass either a reference number, or the value 0 in order to designate the last item added to the list, or \* in order to designate the current item of the list. If several items are selected, the current item is the last one selected.

If you pass \* and no item is selected or if there is no item with the item reference number that is passed, the command leaves the parameters unchanged.

If you work with item reference numbers, build a list in which items have unique reference numbers, otherwise you will not be able to distinguish the items. For more information, refer to the description of the command [APPEND TO LIST](../commands/append-to-list).

After the call:

* *enterable* returns True if the item is enterable. In the context of a drop-down list object whose data source type is **List**, this parameter is not taken into account, use the *selectable* paramater instead. 
* *styles* returns the font style of the item.
* *icon* returns the picture assigned to the item, if any.  
   * If the icon has been specified using a picture file, the command returns in *icon* the pathname using the **path:<filesystem path>** pattern.  
   * If the icon has been specified using a library picture (binary databases only), the command returns either the number or the name of the picture, depending on the type of variable passed in this parameter. The following pattern is used for a name: **pictlib:<name>**. If you do not attribute a specific type to the *icon* variable, by default, the name of the picture is returned (text). If no icon is associated with the item, the command returns a blank value.  
         
   **Note:** You can retrieve, in a picture variable, the icon associated with an item using the [GET LIST ITEM ICON](../commands/get-list-item-icon) command*.*
* *color* returns the color of the text of the item specified.
* *selectable* returns whether the item is selectable in the drop-down. This parameter is only significant when `GET LIST ITEM PROPERTIES` targets a [drop-down list object](../../FormObjects/dropdownList_Overview.md) whose [data source type](../../FormObjects/dropdownList_Overview.md#drop-down-list-types) is **List**. It does not apply to drop-down lists bound to object or array data sources. 



For details about these properties, see the description of the command [`SET LIST ITEM PROPERTIES`](../commands/set-list-item-properties).


## See also 

[GET LIST ITEM](../commands/get-list-item)  
[GET LIST ITEM ICON](../commands/get-list-item-icon)  
[SET LIST ITEM](../commands/set-list-item)  
[SET LIST ITEM PROPERTIES](../commands/set-list-item-properties)  

## Properties

|  |  |
| --- | --- |
| Command number | 631 |
| Thread safe | no |



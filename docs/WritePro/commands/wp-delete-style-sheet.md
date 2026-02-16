---
id: wp-delete-style-sheet
title: WP DELETE STYLE SHEET
slug: /WritePro/commands/wp-delete-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE STYLE SHEET.Syntax-->**WP DELETE STYLE SHEET** ( *styleSheetObj* : Object )<br/>**WP DELETE STYLE SHEET** (*wpDoc* : Object ; *styleSheetName* : Text {; listLevelIndex : Integer })<!-- END REF-->

<!--REF #_command_.WP DELETE STYLE SHEET.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| styleSheetObj | Object | &#8594;  | Style sheet object |
| wpDoc | Object | &#8594;  | 4D Write Pro document |
| listLevelIndex | Integer | &#8594;  | Level of the style sheet in the hierarchy |
| styleSheetName | Text | &#8594;  | Name of style sheet |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.WP DELETE STYLE SHEET.Summary-->The **WP DELETE STYLE SHEET** command removes the designated paragraph or character style sheet from the current document.<!-- END REF--> When a style sheet is removed, every character or paragraph that it was applied to reverts to its original style (*i.e.* the default).

This command provides two ways to remove a style sheet. You can specify:

* the style sheet object (created with the [WP New style sheet](wp-new-style-sheet.md) or returned by the [WP Get style sheet](wp-get-style-sheet.md) command) to remove in the *styleSheetType* parameter, or
* the 4D Write Pro document along with the name of the style sheet to remove in the *wpDoc* and *styleSheetName* parameters.

In the case of a [hierarchical paragraph style sheet](../user/user-new.md#hierarchical-paragraph-style-sheets) 
you can delete on top of using name and object by using
the name of the root style and the list level index
Pay attention if you delete a hierarchical paragrapj style sheet, the *listLevelIndex* of the rest following style sheet get decremented 
and the listlevelcount attribute of all the style sheets also gets decremeted
and if you delete the root style, all the sub-levels attached to it are deleted as well

**Note**: The default ("Normal") style sheet can not be deleted.

## See also 

*Accessing document contents by programming*  
[WP Get style sheet](wp-get-style-sheet.md)  
[WP Get style sheets](wp-get-style-sheets.md)  
[WP IMPORT STYLE SHEETS](wp-import-style-sheets.md)  
[WP New style sheet](wp-new-style-sheet.md)  
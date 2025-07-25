---
id: field-properties-legacy
title: Field properties
---
<!-- REF my.section.id.Desc -->
## Definition

The "Definition" area of the **Inspector palette** configures the basic field properties. Some properties are only available when certain types of fields are selected.
<!-- END REF -->

### Color

You can assign a color to each field. Colors can be used to distinguish fields according to their role or attributes. For example, you can use one color for unique fields and another for mandatory ones.  
It is also possible to assign a color individually to each table (see [Color of the table image](#)) and to each relation (see the [Definition](#) section).  

**Note:** The field color set in the Structure editor has no effect on the color of fields displayed in forms (see [Background and border colors](#)).

The color set for a field will be applied to the field name. To set the color of one or more fields, select them and choose a color using:

- The **Color button** in the tool bar of the Structure editor,
- The **Color** command in the context menu of the fields,
- The **Color** option in the **Inspector palette**.

The **Automatic** option can be used to apply the standard original color of the field.

### Invisible

You can make a field invisible in the Application environment and for the plug-ins by selecting the **Invisible** property for this field. The **Invisible** attribute hides the field from the user. A field with this attribute does not appear in any standard 4D editors and dialog boxes that appear in the Application environment. In addition, it cannot be used by plug-ins. The following **editors** and **dialog boxes** in the Application environment are concerned:

- All query editors (see [Searching records](#)),
- The **Order by editor**,
- The **Label editor**,
- The **Quick reports**,
- The **Exporting and importing data** dialog boxes,
- The **Formula editor**.

In each of these places, the user is unable to see or choose the field. For instance, the user cannot choose an invisible field for a report created with the Quick Report editor.  

**Note:** When using the editors, users have the option of saving their specifications (e.g., the query or sort they created) to disk files. In this case, any fields specified that are subsequently declared invisible will still be used in the operation. In addition, users can type the names of invisible fields in the **Formula editor**.

Invisible fields are displayed in *italics* in the Structure editor window.


### Class



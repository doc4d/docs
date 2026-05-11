---
id: standard-actions
title: Standard actions
---

### Assigning or executing standard actions

Standard actions can be used in several ways:

- as actions for buttons and various form objects such as check boxes or pop up/drop down lists. Actions can be assigned to form objects either in the Property list of the Form editor, or using the `OBJECT SET ACTION` command.
- as actions for menu commands. They can be assigned to menu commands either in the Menu editor (see *Specifying the action of a menu*), or using the `SET MENU ITEM PROPERTY` command.
- as actions for list items (used when the list is associated to a pop up/drop down list or a hierarchical pop up menu). They can be assigned to list items either in the List editor (see *Creating and modifying lists*), or using the `SET LIST ITEM PARAMETER` command.
- as parameters for the `INVOKE ACTION` and `Action info` commands.

For form objects or menu commands can be assigned both a standard action and a method. In this case, the standard action is always executed after the method (except for the `deleteRecord` action, see below).

### Parameters for standard actions

Some standard actions accept one parameter that will define their execution. The syntax to use is similar to the URL syntax:

```4d 
standardActionName{?nameParameter=valueParameter}
```
where:

- `standardActionName` is the name of the standard action (string).
- `nameParameter` (optional) is the name of the parameter to pass (string)
- `valueParameter` (optional) is the value to set (string, longint...)

For example, to define a `gotoPage(5)` action, you can write:

```4d 
gotoPage?value=5
```
This syntax is available wherever a standard action can be defined, i.e. in the Property list, Menu editor, or in the language commands. For example, in the Property list:

//picture

### Form actions  
This section describes standard actions, available in 4D forms, that allow you to handle form pages and records.

### Web area actions 
The following standard actions are available only with Web areas.

### Application actions  

### Edit actions  

### Fonts, expressions, and spellchecking actions 

### Dynamic expressions 

### Spellchecking   

### Notes about objects and actions 
 
- *Buttons* means standard Buttons, 3D Buttons, Highlight Buttons, Picture Buttons, and Invisible Buttons. It also includes Check boxes and 3D Check boxes, that can represent actions with true/false status, e.g. `"fontBold"` (three-state option is supported with Check boxes only).
- *Pop-Up/Drop-down lists* and *Hierarchical pop up menu* objects can only be associated directly with standard actions that generate a submenu (list), such as `"backgroundColor"` or `"fontSize"`. In this case, they display an automatic list of values, unless custom standard actions have been set to list items (see below).
- *List items*: If you do not want to use automatic values, you can associate custom standard actions with items of a list (using the List editor or the `SET LIST ITEM PARAMETER` command) and set the list as "Choice list" for the Pop-Up/Drop-down lists and hierarchical pop up menu. Automatic values are replaced by custom actions at runtime. In this context, only standard actions with value parameters in relation with a submenu (list) main action can be used. For example, you can define a list of items associated with backgroundColor action values (`backgroundColor?value="red"`, `backgroundColor?value="blue"`...) and set it as Choice list for a hierarchical pop up menu.
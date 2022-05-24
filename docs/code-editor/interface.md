---
id: interface
title: Interface
---

By default, a window of the code editor consists of several areas: a toolbar, an editing area, a lists area, a status bar and a break points area.

![dropdown-list](assets/en/code-editor/code-editor-hello.png)

## Interface

Each Method editor window contains a toolbar that provides instant access to basic functions related to method execution and editing.

| Element | Icon | Description |
|--|--|--|
| **Method execution** | ![execute-method](assets/en/code-editor/execute-method.png) | Executes the method. Using the menu associated with the button, you can select the type of execution. Only project and database methods can be run using this button. |
| **Search** | ![search-icon](assets/en/code-editor/search.png) | Allows performing a search in the current method. |
| **Macros** | ![macros-button](assets/en/code-editor/macros.png) | Inserts a macro at the selection. Click the dropdown arrow to display a list of available macros. For more information on how to create and instantiate macros, see [Macros](../FormEditor/macros.md). |
| **Expand all / Collapse all** | ![expand-collapse-button](assets/en/code-editor/expand-collapse-all.png) | These buttons allow expanding or collapsing all the control flow structures of the method. |
| **Method information** | ![method-information-icon](assets/en/code-editor/method-information.png) | Displays the [Method Properties](../Concepts/methods.md#project-method-properties) dialog box (project methods only). |
| **Last clipboard values** | ![last-clipboard-values-icon](assets/en/code-editor/last-clipboard-values.png) | Displays the last values stored in the clipboard. |
| **Clipboards** | ![clipboard icons](assets/en/code-editor/clipboards.png) | Nine clipboards available in the code editor. You can use these clipboards by clicking on them directly or by using keyboard shortcuts. For more information, refer to [Writing classes and methods](./write-class-method.md#multiple-copy-paste-and-numbering-of-clipboards). |
| **Code navigation** | ![code-navigation-icons](assets/en/code-editor/tags.png) | Lets you navigate inside methods and classes with automatically tagged content or manually declared markers. See [Navigation dropdown](./navigation.md). |

## Editing area

The editing area contains the text of the method. You enter and modify the method text in this area. The editor automatically indents method text and colors the different syntax elements for clear code structure.

You can customize the display of this area. Any customization is automatically passed on to all the windows of the editor.

- **font** and **font size**: you set the character font and size to be used in the editing area on the [**Methods**](../Preferences/methods.md) page of the **Preferences**. You can also change the font size using the **Method > View** submenu: the **Bigger Font** and **Smaller Font** commands allow you to change the font size.
- **style and color of syntax elements**: You can assign a specific color and/or style to each type of element of the 4D language. To do so, right-click on a language element (variable, keyword, etc.) and choose an option from the **Style** submenu. The modification is applied to all the elements of the same type in the current window as well as any other editor windows. You can also set these options on the [**Methods**](../Preferences/methods.md) page of the **Preferences**.
- **spaces**: You can display the spaces between words using dots (.) instead of "blank space". To do this, choose the **View > White Spaces** command of the **Method** menu (a check mark indicates whether spaces are displayed). This function applies to all the code elements (command names, variables, comments, etc.). Not supported in classes.
- **width of code endentations**: You can set this option on the [**Methods**](../Preferences/methods.md) page of the **Preferences**.
- **interface colors**: You can change the different colors used in the interface of the editing area (highlighting, background, and so on) using the options found on the [**Methods**](../Preferences/methods.md) page of the **Preferences**.

For more information about entering code in this area, refer to [Writing a method](https://doc.4d.com/4Dv19R4/4D/19-R4/Writing-a-method.300-5736961.en.html).

### Lists area

The lists area lets you display one or more lists of elements necessary for writing methods (commands, constants, forms, etc.). You can choose the number and contents of the lists displayed in the window.

By default, the Method editor displays four lists. You can enlarge or reduce the relative width of each list area by dragging one of its partitions. It is also possible to adjust the size of the list area in relation to that of the editing area by dragging the dividing line between them.

- Double-clicking on an item in a list causes it to be inserted into the editing area, at the location of the cursor.
- To **modify the contents** of a list, click on the title area of the list concerned: a pop-up menu appears, enabling you to choose the type of item to be displayed.\
    ![](https://livedoc.4d.com/dynpict29400/picture/440835/pict440835.en.png)
- For **adding or removing a list**, click in the title area of one of the lists and choose the corresponding command in the pop-up menu (see below).\
    Note that at least one list must be displayed in the editor window. The **Remove this list** command is disabled when you click on the last list. If you want to hide all the lists, you must either click on the ![](https://livedoc.4d.com/dynpict29400/picture/440627/pict440627.fr.png)  button or hide them by default in the User preferences (see below).
- You can hide the lists in all the windows by deselecting the **View>Lists** option in the **Method** menu (a check mark indicates whether lists are displayed) or by unchecking the **Show Lists** option on the Options tab of the [Methods Page](https://livedoc.4d.com/4D-Design-Reference-19-R4/Preferences/Methods-Page.300-5736748.en.html) in the 4D Preferences. Any open methods must first be closed then reopened for the modifications made in the Preferences dialog box to be taken into account.

You can save the parameters set in the Method editor window in the form of a template. For more information, refer to [Save as template](https://livedoc.4d.com/4D-Design-Reference-19-R4/Editing-methods/Method-editor.300-5736959.en.html#440884).

##### Types of lists  ![Outline](https://livedoc.4d.com/dynpict29400/image/tool16x16/spacer.png "Outline")![Edit](https://livedoc.4d.com/dynpict29400/image/tool16x16/spacer.png "Edit")![Delete](https://livedoc.4d.com/dynpict29400/image/tool16x16/spacer.png "Delete")![Organize](https://livedoc.4d.com/dynpict29400/image/tool16x16/spacer.png "Organize")![See the differences](https://livedoc.4d.com/dynpict29400/image/tool16x16/spacer.png "See the differences")![Anchor](https://livedoc.4d.com/dynpict29400/image/tool16x16/spacer.png "Anchor")

You can display the following lists of items in the lists area of the Method editor window:

- **All tables and fields**: Database table and field names in the form of a hierarchical list. When you insert a field name into the method by double-clicking on its name, 4D inserts it while respecting the syntax and adds the name of the table or subtable as the case may be.
- **Table** (submenu): Field names of the table selected using the submenu.
- **Current table**: Field names of the current table (available in triggers, form methods and object methods).
- **Project forms**: Database project form names. When you double-click on a project form name, 4D inserts its while respecting the syntax: the form name is inserted between quotes.
- **Table forms**: Database table and form names in the form of a hierarchical list. When you insert a form name into a method by double-clicking its name, 4D inserts it while respecting the syntax: the form name is inserted between quotes and is preceded by the name of the table and a semi-colon. For example: [Table];"Form".
- **Methods**: Database project method names.
- **All folders**: Names of object folders and subfolders set in the database displayed in the form of a hierarchical list. Folders can be used to organize objects in a customized manner. They are managed from the [Home Page](https://livedoc.4d.com/4D-Design-Reference-19-R4/Explorer/Home-Page.300-5736736.en.html) of the Explorer.
- **Folders** (submenu): Contents of the folder selected using the submenu.
- **Macros**: Macro names defined for the database (see [Creating and using macros](https://livedoc.4d.com/4D-Design-Reference-19-R4/Editing-methods/Creating-and-using-macros.300-5736962.en.html)).
- **Commands**: 4D language commands in alphabetical order.
- **Commands by themes**: 4D language commands classified by theme in the form of a hierarchical list.
- **Menu bars**: Names and numbers of menu bars created with the 4D Menu bar editor (see the [Menus and menu bars](https://livedoc.4d.com/What-s-new/4D-Design-Reference-19-R4/Menus-and-menu-bars.200-5736723.en.html) chapter).
- **Constants**: 4D constants and those of any plug-ins, classified by theme in the form of a hierarchical list.
- **Lists**: Names of lists.
- **Pictures**: Names and numbers of pictures stored in the 4D [Picture Library](https://livedoc.4d.com/What-s-new/4D-Design-Reference-19-R4/Picture-Library.200-5736725.en.html).
- **All plug-in commands**: Commands for all the plug-ins installed in the database, classified by theme in the form of a hierarchical list.
- **Commands for the plug-in** (submenu): Commands of a specific plug-in selected using the submenu. By default, the following plug-in is available:

  - **4D Internet Commands**: This plug-in adds additional Internet functions to 4D, in particular for the management of e-mail. See [4D Internet Commands](https://livedoc.4d.com/4D-Internet-Commands-19-R4/4D-Internet-Commands.100-5805627.en.html).
- **SQL Keywords**: set of keywords recognized by the 4D SQL syntax parser. This list includes commands (e.g. SELECT), clauses (e.g. WHERE) as well as functions (ABS).
- **SQL Functions**: 4D SQL functions.

**Note:** Except for the Macros element, all the lists are in alphabetical order.

## Break points area

This area, located to the left of the editing area, allows you to display the line numbers and to insert break points directly next to specific instructions. Break points are useful during the debugging phase of your programming. They stop the execution of your code at specific locations and display the debugger.

You can display or hide the line numbers in the break points area for each window of the Method editor.

- You can enable or disable the display of line numbers by default. To do this, use the  **Show Line Numbers** option on the [Methods Page](https://livedoc.4d.com/4D-Design-Reference-19-R4/Preferences/Methods-Page.300-5736748.en.html) of the **Preferences**.

- You can also modify this display separately for each window of the Code Editor, using the **View> Line Numbers** command in the **Method** menu.

Displaying the line numbers makes it easier to find your way around in the window. The **Go to Line Number...** command in the **Method** menu also lets you take advantage of this display.

## Status bar

The status bar located at the bottom right part of the editor window displays the position of the cursor at all times:

![](https://livedoc.4d.com/dynpict29400/picture/441063/pict441063.en.png)

- **Ln**: Line number
- **Col**: Column number, i.e., the level in the hierarchy of programming structures. The first level is 0. The column number is useful for debugging since this information can be provided by the interpreter in the event of an error in the code.
- **Ch**: Location of character in the line.

#### Save as template  ![Outline](https://livedoc.4d.com/dynpict29400/image/tool16x16/spacer.png "Outline")![Edit](https://livedoc.4d.com/dynpict29400/image/tool16x16/spacer.png "Edit")![Delete](https://livedoc.4d.com/dynpict29400/image/tool16x16/spacer.png "Delete")![Organize](https://livedoc.4d.com/dynpict29400/image/tool16x16/spacer.png "Organize")![See the differences](https://livedoc.4d.com/dynpict29400/image/tool16x16/spacer.png "See the differences")![Anchor](https://livedoc.4d.com/dynpict29400/image/tool16x16/spacer.png "Anchor")

You can save the parameters set in the Method editor window in the form of a "template." Once the template is saved, the parameters set in it will be used for each new Method editor window that is opened.

The following parameters are stored in the template:

- Relative size of the editing and list areas
- Number of lists
- Location and contents of each list
- Relative width of each list

To save a Method editor window as a template, choose the **Save As Template** command in the **Method** menu. The template is saved immediately (no dialog box appears). It is stored in the Preferences of the 4D application. If a previous template already exists, it is replaced.

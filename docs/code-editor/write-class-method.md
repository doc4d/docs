---
id: write-class-method
title: Writing classes and methods
---

The 4D Code Editor works much like a text editor. Writing a method or a class is usually a combination of typing text, selecting components, and dragging items from the Explorer or other windows. You can also use various type-ahead functions to create methods faster.

You can scroll through the contents of methods, classes and functions, which can include up to 32,000 lines of code or 2 GB of text.

The 4D Code Editor provides basic syntax error-checking. Additional error-checking is performed when the code executes.

## Typing and editing text  

4D uses standard text editing techniques for typing and editing in the Code Editor.

The Code Editor uses display conventions (style, color) for the syntax elements. You can modify these conventions (see [Customizing the editing area](./interface.md#customizing-the-editing-area)). As you type, when you validate your entry, 4D evaluates the text of the line and applies the appropriate display format. 4D also indents each line to its proper level in relation to the preceding line when you use programming structures (If, End if...).

You can use the arrow keys to move from line to line quickly. Using the arrow keys to move across several lines is quicker than clicking because the editor delays evaluating the line for errors.

Under Windows, the code editor includes an Input Code Editor (IME) to facilitate code editing on Japanese or Chinese systems.

The Code Editor includes numerous navigation shortcuts. See [Navigational keyboard shortcuts](#navigational-keyboard-shortcuts).

## Adding method objects by drag-and-drop  

When writing methods, you can drag and drop items:

* from the Explorer
* within the same method, class, function
* between methods, classes, and functions

### From the Explorer

From the Explorer, you can drag and drop:

* Table names, field names, form names and project methods from the Home page.
* Table names and field names from the Tables page,
* Table names and form names from the Forms page,
* Project methods and form names from the Methods page,
* Constants from the Constants page,
* 4D commands from the Commands page.

When you drag and drop a component, 4D always uses the correct syntax for the component. For example, if you drag the field name "First Name" from the [People] table, it appears in the Code Editor as "[People]First Name." Similarly, if you drag the Form name "Input" from the People table, it appears in the Code Editor as "[People];"Input"."

When you insert a command by dragging it from the **Commands** page of the Explorer, it appears with its syntax (which consists of all of its parameters) in the Code Editor. This feature simply reminds you of the parameters that the command expects. You can then use a syntax that better suits your usage.

### Within a method, class, function or between two different ones

In the Code Editor, the drag-and-drop mechanism is activated as soon as a portion of text is selected.
By default, the drag-and-drop mechanism moves the selected text. In order to copy it, hold down the **Ctrl** key (Windows) or the **Option** key (macOS) during the operation.

## Entry on several lines  

You can write a single statement on several lines by terminating each line of the statement with a backslash "\" character. 4D will consider all the lines at once. For example, both the following statements are equivalent:

![](assets/en/code-editor/entry-several-lines.png)

## Changing case  

You can automatically modify the case of selected characters using the commands in **Methods** > **Case** or the context menu of the editor:

* **Uppercase** / **Lowercase**: Switch the selected characters to uppercase or lowercase.
* **camelCase** / **CamelCase** : Switch the selected characters to "camel case". This consists in changing each first letter of a group of attached words to uppercase. This type of notation is often used for variable nomenclatures. hireDate and PurchaseDate are examples of two variants of camel case notation.

When you apply one of these commands to a text selection, the spaces and "_" characters are removed and the first letter of each word becomes uppercase.

## Swap expression  

The **Swap Expression** function can be used to reverse the arguments of an expression assigning a value. For instance,

`variable1:=variable2`

becomes

`variable2:=variable1`

This function is extremely useful for reversing a set of assignments used to get or set properties, or to correct input errors. To use this function, select the line(s) to be modified, then choose **Method** > **Swap Expression** or use the context menu of the area. Within the selection, only the lines assigning a value will be modified.

## Multiple copy-paste and numbering of clipboards  

In addition to the standard copy-paste operation, 4D offers two additional functions that let you work with the contents of different clipboards:

* The program stores the last 10 "copy" or "cut" actions that were performed in the Code Editor in memory during the current session. Each of the different contents saved in this way can be reused at any time. To do this, use the **Clipboard History** command of the Code Editor context menu or the "Last Clipboard values" button of the toolbar:

    ![](assets/en/code-editor/last-clipboard-values-2.png)

    The first few words of the copied or cut items are displayed. Select an item to insert it at the current location of the cursor.

* Nine additional numbered clipboards are available and can be employed directly using the buttons of the Code Editor toolbar or using keyboard shortcuts:

![](assets/en/code-editor/clipboards-2.png)

|Platform|Copy selected text to a clipboard|Paste contents of a clipboard at cursor location|
    |--|--|--|
    | **Windows** | Shift or Alt+click on clipboard icon | Ctrl+click on clipboard icon |
    |  |  | Ctrl+clipboard number |
    | **Mac OS** | Shift or Alt+click on clipboard icon | Cmd+click on clipboard icon |
    |  | Cmd+Shift+clipboard number | Cmd+clipboard number |

## Moving lines  

You can move the line where the cursor is directly without selecting it first using the **Move Lines Up** and **Move Lines Down** commands in the **Method** menu. You can also do this using the combination **Alt/Option** + **Up Arrow** or **Down Arrow**.

## Change bars  

Colored bars instantly show you where lines of code were modified since the method was opened:

![](assets/en/code-editor/change-bars.png)

The change bars change colors to indicate whether or not the modifications were saved:

* yellow: Row was modified and method has not yet been saved.
* green: Row was modified and method has been saved.

## Using the autocomplete functions  

The Code Editor provides autocomplete functions. 4D automatically displays suggestions based on the first few characters typed.

In the example given below, typing the string "cop" causes the display of a blue triangle indicating that several suggestions are available:

![](assets/en/code-editor/autocomplete-1.png)

When the characters you enter correspond to a single possibility, this suggested value appears greyed out (and is inserted if you hit the **Tab** key):
![](assets/en/code-editor/autocomplete-2.png) ---> ![](assets/en/code-editor/autocomplete-3.png)

**Note:** If you checked the **Insert () and closing } ) ] "** option in the [Methods Page](https://doc.4d.com/4Dv19R4/4D/19-R4/Methods-Page.300-5736748.en.html) of the Preferences, 4D will also automatically add **()** after a 4D command, keyword or project method that requires one or more mandatory arguments (after accepting a suggestion or completion):
![](assets/en/code-editor/insert-and-closing-1.png) -> ![](assets/en/code-editor/insert-and-closing-2.png)

Autocompletion also works with code structures (e.g. If..End if, For each...End for each): when you enter the first part of the structure, the Code Editor will automatically suggest the closing part:
![](assets/en/code-editor/autocomplete-code-structures.png)

If there are several suggestions available, 4D displays them in a pop-up list when you hit the **Tab** key:

![](https://doc.4d.com/4Dv19R4/picture/441097/pict441097.en.png)

The list is in alphabetical order. Choose the value by double-clicking it or scroll the list using the arrow keys of the keyboard and then hit **Enter**, **Carriage Return** or **Tab** to insert the selected value.

By default, you can also insert a suggested value by hitting one of the following delimiter **( ; : = < [ {** keys after selecting a value: the value inserted is then followed by the delimiter, ready for data entry.

![](https://doc.4d.com/4Dv19R4/picture/441248/pict441248.en.png)  +  **(** key --> ![](https://doc.4d.com/4Dv19R4/picture/441250/pict441250.en.png)

**Note:** You can disable the use of delimiters for inserting suggested values in the [Methods Page](https://doc.4d.com/4Dv19R4/4D/19-R4/Methods-Page.300-5736748.en.html) of the Preferences.

You can press the **Esc** key to close the pop-up list or you can continue typing while it is open. The values suggested in the pop-up list are updated as additional characters are typed.

If the characters typed correspond to different types of objects, the list displays them in their current style. The following types of objects can be displayed:

* 4D commands
* SQL commands
* User methods
* Table names
* Field names
* Constants
* Local, process or interprocess variable, declared in the method
* Object property names
* Plug-in commands
* 4D keywords
* SQL keywords
* Macros (displayed between < >)

**Note:** For practical reasons, you can disable the automatic display of the list of suggestions for **constants**, **(local or interprocess) variables and object attributes** and/or **tables**. These options are found on the [Methods Page](https://doc.4d.com/4Dv19R4/4D/19-R4/Methods-Page.300-5736748.en.html) of the User preferences.

##### Object attributes  

With [Object Notation](https://doc.4d.com/4Dv19R4/4D/19-R4/Compatibility-page.300-5737012.en.html#3368899) enabled, 4D automatically displays case-sensitive suggestions of all valid object attribute names in 4D methods when you:

* type a "." after an object or
* use the Tab key after a dereferenced object pointer "->".

![](https://doc.4d.com/4Dv19R4/picture/3574568/pict3574568.en.png)

**Note:** The length attribute is always included for use with collections.

Valid object attribute names are those which are compliant with ECMA Script standards. For more information, see [Object property identifiers](https://doc.4d.com/4Dv19R4/4D/19-R4/Using-object-notation.300-5739064.en.html#3305214).

Once created, attribute names are stored in an internal global list and are available anytime a method is opened, closed or changes focus.

![](https://doc.4d.com/4Dv19R4/picture/3575080/pict3575080.en.png)

The list of suggestions is dynamically updated while a method is being edited. When switching between windows, new/edited attribute names are always added to the global list. The list is also updated when you preview methods in the Explorer.

When the database is restarted, the list is reinitialized.

**Note:** You can disable the automatic display of attribute names on the [Methods Page](https://doc.4d.com/4Dv19R4/4D/19-R4/Methods-Page.300-5736748.en.html) of the Preferences.

## Selecting text  

### Selection of enclosing block  

The **Select Enclosing Block** function is used to select the "enclosing block" of the code containing the insertion point. The enclosing block can be defined by:

* Quotation marks,
* Parentheses,
* A logical structure (If/Else/End if, While/End while, Repeat/Until Case of/End case), or,
* Braces.

If a block of text is already selected, the function selects the enclosing block of the next highest level and so on, until the entire method is selected.

Pressing **Ctrl+Shift+B** (Windows) or **Command+Shift+B** (Mac OS) enables you to reverse this operation and deselect the last enclosing block selected.

**Note:** If the insertion point is placed in an If or Else type structure, the enclosing block will be the one containing, respectively, the If or Else statement.

### Double-clicking  

You can double-click to select individual "words". When the item name referenced (command, constant, method, etc.) contains spaces, you can select the whole name (including spaces) by using the **Alt/Option + Double-click** combination.

### Navigational keyboard shortcuts  

Standard keyboard shortcuts to navigate the code are available in 4D's Code Editor.

**Note:** Under Mac OS, substitute the **Command** key for the **Ctrl** key (Windows).

| **Shortcut** | **Action** |
| [Shift]+[right arrow] | Create and enlarge the selection, character by character, to the right, or Reduce the selection, character by character, from the left |
| [Shift]+[left arrow] | Reduce the selection, character by character, from the right or Create and enlarge the selection, character by character, to the left |
| [Shift]+[down arrow] | Create and enlarge a selection, line by line, from the top to the bottom |
| [Shift]+[up arrow] | Create and enlarge a selection, line by line, from the bottom to the top |
| [Ctrl]+[Shift]+[right arrow] | Create and enlarge the selection, word by word, from the right |
| [Ctrl]+[Shift]+[left arrow] | Reduce the selection, word for word, from the right, or create and enlarge the selection, word by word, from the left |
| [Ctrl]+[right arrow] | Move the insertion point, word by word, from left to right |
| [Ctrl]+[left arrow] | Move the insertion point, word by word, from right to left |
| [Home] | Place the insertion point at the beginning of the line |
| [End] | Place the insertion point at the end of the line |
| [Ctrl]+[Home] | Place the insertion point at the beginning of the method |
| [Ctrl]+Fin | Place the insertion point at the end of the method |
| [Shift]+[Home] | Select all the characters in the line that are to the left of the cursor |
| [Shift]+[End] | Select all the characters in the line that are to the right of the cursor |
| [PgUp] | Scroll the contents of the method, page by page, from the bottom to the top (doesn't modify the insertion point) |
| [PgDn] | Scroll the contents of the method, page by page, from the top to the bottom (doesn't modify the insertion point) |

## Checking and correcting syntax errors  

4D automatically checks the method syntax to see if it is correct. If you enter text or select a component that is not syntactically correct, 4D displays a symbol to indicate the incorrect expression ![](https://doc.4d.com/4Dv19R4/picture/441044/pict441044.fr.png). When you move the mouse over the symbol, a help tip displays the cause of the error:

![](https://doc.4d.com/4Dv19R4/picture/441041/pict441041.en.png)

When entering code, you can immediately check the syntax of the current line (without advancing to the next line) by pressing the **Enter** key on the numeric keypad. 4D evaluates the line, formats it, marks any errors, and places the insertion point at the end of the line. When a line of a method is marked as having improper syntax, check and fix the entry. If the line is now correct, 4D removes the error symbol. When you save or close the window, the entire method is validated. You can also force validation by pressing the **Enter** key.

When the method is validated, 4D checks for basic syntax errors and for the structure of the statements (If, End if and so on). 4D also checks for matching enclosing characters in the code such as parentheses or quotation marks. When you type an enclosing character, 4D indicates the match by framing the start/end characters with gray rectangles:

![](https://doc.4d.com/4Dv19R4/picture/441055/pict441055.en.png)

**Note:** If you click on an enclosing character in the code, 4D indicates its match with gray rectangles by default. You can modify the way 4D indicates matching enclosing characters or disable this feature by means of the "Matching parentheses" option on the [Methods Page](https://doc.4d.com/4Dv19R4/4D/19-R4/Methods-Page.300-5736748.en.html) of the Preferences.

The Code Editor can only check for obvious syntax errors (misspellings and the like). It does not check for errors that only occur during execution. Execution errors are caught by 4D when the method is executed. 4D provides a debugger (see [Debugging](https://doc.4d.com/4Dv19R4/4D/19-R4/Debugging.200-5738443.en.html)) for handling and correcting these errors. The compiler also provides indispensable help for detecting errors. For more information about the compiler, refer to the [Compilation](https://doc.4d.com/4Dv19R4/4D/19-R4/Compilation.200-5736724.en.html) chapter.

## Using help tips and status bar  

The Code Editor provides various contextual information using help tips which appear when you move the mouse over an object and the status bar, at the bottom of a Code Editor window.

* **Errors**: When you move the mouse over the symbol indicating an error to the left of the editing area, a help tip displays the cause of the error (see the "Checking and correcting syntax errors" section).

* **4D command documentation**: When you set the cursor in a command name or parameter(s), the status bar displays the syntax of the command. If you write or select a parameter, the area shows the current parameter in **bold**:\
    ![](https://doc.4d.com/4Dv19R4/picture/3841624/pict3841624.en.png)\
    When you move the mouse over a 4D command, a help tip provides the command syntax along with a brief description of how it works.\
    ![](https://doc.4d.com/4Dv19R4/picture/443413/pict443413.en.png)

* **Variable type and description**: When you move the mouse over a variable, a help tip shows its type (if it has been explicitly defined in the method) and associated comment, if any.\
    ![](https://doc.4d.com/4Dv19R4/picture/4618457/pict4618457.en.png)

* **Project methods**: When you move the mouse over a project method, a help tip displays:

  * either the comments specified in the Explorer, if any (see [Using comments](https://doc.4d.com/4Dv19R4/4D/19-R4/Using-comments.300-5736742.en.html)).
  * or the first few lines of the method if it includes comments (lines beginning with // or /*...*/ comment block). It is common practice to insert documentation for the method as well as its parameters in the form of comments at the beginning of the method. You can get this information directly in the help tip, just make sure to first remove any comments found in the Explorer.\
        Comments at the beginning of a method:\
        ![](https://doc.4d.com/4Dv19R4/picture/3977175/pict3977175.en.png)\
        Help tip in another method:\
        ![](https://doc.4d.com/4Dv19R4/picture/443365/pict443365.fr.png)

## Display complete documentation of a command  

You can display the HTML documentation of a 4D language command at any time: to do so, select the complete command name or simply place the cursor in the name and press **F1**. The complete documentation of the command is displayed in a new window of your default browser.

4D looks for the on-line documentation of the command (on the*4D Doc Center*site) or searches locally depending on the settings made in the application Preferences (see [Documentation location](https://doc.4d.com/4Dv19R4/4D/19-R4/General-Page.300-5736746.en.html#102865)).

## Comment/ uncomment  

Comments are inactive lines of code. These lines are not interpreted by the program (4D does not apply any particular style within comments) and are not executed when the method is called.

There are two ways to create comments:

| **Syntax** | **Description** | **Example** |
| // *comment* | Used to create a single line comment.

Inserting // at the beginning of a line will create a single line comment.

The length of single line comments is limited to the maximum size of a line (32,000 characters).

 |

`//This is a comment\
 for(vCounter;1;2)\
  //comment\
  //comment\
  //comment\
 end for`

 |
| /**comment**/ | Used to surround the content to create inline comments or multiline comment blocks.

Both inline and multiline comment blocks begin with /*and end with*/.

* *Inline comments* -  can be anywhere in the code.The length of inline comments is limited to the maximum size of a line (32,000 characters).-   *Multiline comment blocks* - can be collapsed or expanded. Multiline comment blocks can be nested and each block  is expandable/collapsable. The comments on the first line of an expandable/collapsable block will remain visible when the block is collapsed. The length of multiline comments is limited to the maximum size of 32,000 characters per line. There is no limit on the number of lines.\
    **Notes**:

  * Multiline comments at the end of a line are not supported.-   Inline and multiline comment blocks are only supported in 4D v18 and newer. If using this syntax, opening the database with a version prior to 4D v18 could provoke interpretation errors. | Inline:

![](https://doc.4d.com/4Dv19R4/picture/4618546/pict4618546.en.png)

Multiline:\
![](https://doc.4d.com/4Dv19R4/picture/4618549/pict4618549.en.png)

 |

The **Comment/Uncomment** command, found in the **Method** menu as well as in the Code Editor context menu, is used to mark a group of selected lines of code as single line comments, or, on the contrary, to remove the single line comment characters from a selection.\
To use this command, select the code to be marked as commented, then select the **Comment/Uncomment** command:

![](https://doc.4d.com/4Dv19R4/picture/441334/pict441334.en.png) --> ![](https://doc.4d.com/4Dv19R4/picture/441336/pict441336.en.png)

When the selection contains only active code, the **Comment** command is applied. When the selection includes both active code and commented lines, an additional pair of comment characters ( // ) is added to the latter; this way, they will retain their initial commented status if the line is subsequently "uncommented." When the selection contains only commented lines, the **Uncomment** command is applied.

**Note:** The **Comment/Uncomment** command only operates with full lines --- it cannot be used to comment only part of a line.

## Using escape sequences  

The Code Editor allows you to use escape sequences (also called escape characters). An escape sequence is a sequence of characters that can be used to replace a "special" character.

The sequence consists of a backslash \, followed by a character. For instance, \t is an escape sequence for the **Tab** character. Escape sequences facilitate the entry of special characters: the previous example (\t) replaces the entry "Character(Tab)".

In 4D, the following escape sequences can be used:

| **Escape sequence** | **Character replaced** |
| \n | LF (Line feed) |
| \t | HT (Tab) |
| \r | CR (Carriage return) |
| \\ | \ (Backslash) |
| \" | " (Quotation marks) |

**Note:** It is possible to use either upper or lower case in escape sequences.

In the following example, the **Carriage return** character (escape sequence \r) is inserted in a statement in order to obtain the dialog box shown:

`ALERT("The operation has been completed successfully.\rYou may now disconnect.")`

![](https://doc.4d.com/4Dv19R4/picture/3976978/pict3976978.en.png)

**Warning:** The \ (backslash) character is used as a separator in pathnames under Windows. In general, 4D will correctly interpret Windows pathnames entered in the Code Editor by replacing the single backslash \ with a double backslash \\. For instance, C:\Folder will become C:\\Folder. However, if you write "C:\MyDocuments\New", 4D will display "C:\\MyDocuments\New". In this case, the second backslashþis interpreted incorrectly as \N (an existing escape sequence). You must therefore enter a double backslash \\ when you want to have a backslash in front of a character used in one of the escape sequences recognized by 4D.

## Making code editing easier  

Several functions in the Code Editor make code easier to read and facilitate browsing among the statements.

## Expand / Collapse  

4D code located inside loops and conditions can now be collapsed or expanded, in order to facilitate the reading of methods:

* Expanded code:\
    ![](https://doc.4d.com/4Dv19R4/picture/441262/pict441262.en.png)

* Collapsed code:\
    ![](https://doc.4d.com/4Dv19R4/picture/441264/pict441264.en.png)

If you place the mouse over the expand button [...], a help tip appears, displaying the first lines of the hidden code.

A collapsed portion of code can be selected, copied, pasted or deleted. All the lines included therein will be copied, pasted or deleted respectively. When a portion of code is pasted, it is automatically expanded.

There are several ways to expand and collapse code:

* Click on the expand/collapse icons ([+] and [-] under Windows) or on the opening button [...]
* Use the commands of the **Method>Collapse/Expand** submenu:

  * **Collapse Selection** / **Expand Selection**: collapses or expands all the code structures found in the text selection.
  * **Collapse Current Level** / **Expand Current Level**: collapses or expands the code structure at the level where the cursor is located. These commands are also available in the **context menu** of the editor.
  * **Collapse All**** / ****Expand All**: collapses or expands all the loops and conditions of a method. These commands are also available in the toolbar of the editor: ![](https://doc.4d.com/4Dv19R4/picture/440625/pict440625.fr.png).

## Start of Block or End of Block  

Two commands make it easier to move around within code structures (e.g. If...Else...End if):

* **Start Of Block**: places the cursor at the start of the current structure, just before the initial keyword.
* **End Of Block**: places the cursor at the end of the current structure, just after the final keyword.

These commands are found in the **Method** menu as well as the context menu of the editor. You can also use the following shortcuts:

* Windows: **Ctrl + up arrow** or **Ctrl** + **down arrow**‚
* Mac OS: **Command** + **up arrow** or **Command** +**down arrow**.

## Using bookmarks  

4D lets you associate bookmarks with certain lines in your methods. You can then browse quickly within the code by passing from one bookmark to another using specific commands.

![](https://doc.4d.com/4Dv19R4/picture/443304/pict443304.en.png)

A bookmark moves along with its original row if additional rows are inserted in the method. Bookmarks are saved with the methods.

Bookmarks are managed using the **Bookmarks** submenu of the **Method** menu:

* **Toggle**: Associates a bookmark with the current line (where the cursor is located) if it does not already have one or removes the existing bookmark if it does. This function is also available using the **Toggle Bookmark** command of the editor's context menu or using the **Ctrl+F3** (Windows) or **Command+F3** (Mac OS) keyboard shortcut.
* **Remove All**: Removes all bookmarks from the foreground window.
* **Goto Next** / **Goto Previous**: Enables browsing among bookmarks in the window. Selecting one of these commands places the cursor on the first character of the line associated with the bookmark concerned. You can also use the keyboard shortcuts **F3** (go to next) or **Shift+F3** (go to previous).

**Note:** You can use bookmarks as markers for lines that contain an item found by a search. In this case, 4D automatically adds the bookmarks. For more information, refer to [Find and replace in methods](https://doc.4d.com/4Dv19R4/4D/19-R4/Find-and-replace-in-methods.300-5736963.en.html).

## Note about language of commands and constants  

In 4D versions prior to v15, the French version of the program provided a programming language in French, while all the other versions (English, German, etc.) contained a "universal" language, in English.\
For example, command No. 53 was named **STOCKER ENREGISTREMENT** in French and **SAVE RECORD** in all the other languages. Local settings were also used for entering real numbers and dates.

This has been modified beginning with 4D v15: by default, 4D's Code Editor uses the international "English-US" mode, regardless of the 4D application language or the local system settings and command No. 53 is now named **SAVE RECORD** in the French version of 4D. Lists, type-ahead windows, on-line help, etc., display the names of the commands and constants in English. For more information about this setting, refer to the [OLD RELATED MANY](https://doc.4d.com/4Dv19R4/4D/19-R4/OLD-RELATED-MANY.301-5739234.en.html) section.

It still remains possible to restore the previous mode, based on local settings, using the "Use regional system settings" preference (see [Methods Page](https://doc.4d.com/4Dv19R4/4D/19-R4/Methods-Page.300-5736748.en.html)). Of course, regardless of the setting used, the principles for writing code described in this section remain the same.

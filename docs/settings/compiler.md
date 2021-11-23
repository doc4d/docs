---
id: compiler
title: Compiler page
---

The Compiler page lets you set parameters relating to project compilation. For more information about this, refer to the [Compilation](../Project/compiler.md) chapter.

## Compilation options

This area groups the generic options used during the compilation process.

-   **Generate the Symbol File**: Used to generate an ASCII type file containing the list of variables along with their type and the method from which their type has been inferred. The symbol file also contains the list of your methods and functions along with the type of their parameters and the type of result, if any.
-   The file is placed in the folder containing the database structure and is named *DatabaseName_symbols.txt*.\
    For more information about the symbol file, refer to [Symbol file](../Project/compiler.md#symbol-file).
-   **Generate error file**: Used to generate the error file at the time of syntax checking. It lists general errors as well as errors linked to a specific line, and warnings.\
    Any errors detected by the compiler are automatically accessible in the Method menu of 4D. However, having an error file that can be transmitted from one machine to another can be useful, particularly in a situation where several different developers are working together in a client-server environment.\
    The error file is generated in XML format in order to facilitate automatic parsing of its contents. It also allows the creation of customized error display interfaces. The error file is automatically named *DatabaseName_errors.xml* and is created next to the structure file of the database.\
    For more information about the error file, refer to [Error file](../Project/compiler.md#error-file).
-   **Compilation Target**: See [Compilation Target](../Project/compiler.md#compilation-target)
-   **Compilation Path**: Used to set the number of passes performed by the compiler and thus the duration of compilation.

    -   **Type the variables**: Passes by all the stages that make compilation possible.
    -   **Process and interprocess are typed**: The pass for typing process and interprocess variables is not carried out. This option can be used when you have already carried out the typing of all your process and interprocess variables either yourself or using the function for the automatic generation of compiler methods
    -   **All variables are typed**: The pass for typing local, process and interprocess variables is not carried out. Use this option when you are certain that all the process, interprocess and local variables have been clearly typed.

## Default typing  

You use this area to set the default type for ambiguous database objects.

-   **Numeric**: Used to force numeric typing in an unambiguous manner, either in **real** or **longint**. It has no priority over any directives that may have been placed in your database. You can optimize the running of your database by choosing the Longint type.
-   **Button**: Used to force button typing in an unambiguous manner, either in **real** or **longint**. It has no priority over any directives that may have been placed in your database. It concerns standard buttons as well as the following objects: check boxes, 3D check boxes, highlight buttons, invisible buttons, 3D buttons, picture buttons, button grids, radio buttons, 3D radio buttons, picture radio buttons, picture pop-up menus, hierarchical pop-up menus and pop-up/drop-down lists.

## Compiler Methods for...  

This area lets you rename the Compiler methods that are generated automatically by the compiler. These methods group together all the variable typing declarations, process and interprocess arrays, as well as the local variable declaration methods. These methods are generated using the compilation window. For more information, refer to the [Compiler window](../Project/compiler.md#compiler-window-features.md) section.

Up to 5 compiler methods may be generated; a compiler method is only generated if the database contains the corresponding items:

-   **Variables**: Groups together process variable declarations;
-   **Interprocess Variables**: Groups together interprocess variable declarations;
-   **Arrays**: Groups together process array declarations;
-   **Interprocess Arrays**: Groups together interprocess array declarations;
-   **Methods**: Groups together local variable declarations designating method parameters (for instance, [C_LONGINT](https://doc.4d.com/4Dv19/4D/19/C-LONGINT.301-5392144.en.html)(mymethod;$1)).

You can rename each of these methods in the corresponding areas.\
Nevertheless, they will always be preceded by the label "Compiler_" (non-modifiable). The name of each method (prefix included) must be unique and no longer than 31 characters. Extended characters (accented characters, typographical symbols, etc.) and spaces are not allowed.
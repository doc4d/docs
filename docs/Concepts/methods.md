---
id: methods
title: Methods
---


A method is basically a piece of code that executes one or several actions. A method is composed of statements; each statement consists of one line in the method. A statement performs an action, and may be simple or complex. Although a statement is always one line, that one line can be as long as needed (up to 32,000 characters, which is probably enough for most tasks). 

The maximum size of a method is limited to 2 GB of text or 32,000 lines of code.	 

## Method Types

In the 4D Language, there are several categories of methods. The category depends on how they can be called:

|Type|Calling context|Accepts parameters|Description|
|----|-----|-----|----|
|**Project method**|On demand, when the project method name is called (see [Calling project methods](#calling-project-methods))|Yes|Can contain any code to execute any custom actions. Once a project method is created, it becomes part of the language of the project.|
|**Object (widget) method**|Automatic, when an event involves the object to which the method is attached|No|Property of a form object (also called widget)|
|**Form method**|Automatic, when an event involves the form to which the method is attached|No|Property of a form. You can use a form method to manage data and objects, but it is generally simpler and more efficient to use an object method for these purposes.|
|**Trigger** (aka *Table method*)|Automatic, each time that you manipulate the records of a table (Add, Delete and Modify)|No|Property of a table. Triggers are methods that can prevent “illegal” operations with the records of your database.|
|**Database method**|Automatic, when a working session event occurs|Yes (predefined)|There are 16 database methods in 4D. See Database methods section|


> The 4D Language also supports **Class functions**, that can be called in the context of an object instance. Class functions can be built-in (*e.g.* `collection.orderBy()` or `entity.save()`), or [created by the 4D developer](classes.md#class-function). 


## Calling Project Methods

A project method can have one of the following roles, depending on how it is executed and used:

- Subroutine
- Object formula 
- Menu method
- Process method
- Event or Error catching method

### Subroutines

A subroutine is a project method that can be thought of as a servant. It performs those tasks that other methods request it to perform. A function is a subroutine that returns a value to the method that called it.

When you create a project method, it becomes part of the language of the project in which you create it. You can then call the project method from another method (project method, object method...) in the same way that you call 4D’s built-in commands. A project method used in this way is called a subroutine.

You use subroutines to:

- Reduce repetitive coding
- Clarify your methods
- Facilitate changes to your methods
- Modularize your code

For example, let’s say you have a project of customers. As you customize the project, you find that there are some tasks that you perform repeatedly, such as finding a customer and modifying his or her record. The code to do this might look like this:

```4d
  // Look for a customer
 QUERY BY EXAMPLE([Customers])
  // Select the input form
 FORM SET INPUT([Customers];"Data Entry")
  // Modify the customer's record
 MODIFY RECORD([Customers])
```

If you do not use subroutines, you will have to write the code each time you want to modify a customer’s record. If there are ten places in your project where you need to do this, you will have to write the code ten times. If you use subroutines, you will only have to write it once. This is the first advantage of subroutines—to reduce the amount of code.

If the previously described code was a method called `MODIFY_CUSTOMER`, you would execute it simply by using the name of the method in another method. For example, to modify a customer’s record and then print the record, you would write this method:

```4d
 MODIFY_CUSTOMER
 PRINT SELECTION([Customers])
```

This capability simplifies your methods dramatically. In the example, you do not need to know how the `MODIFY_CUSTOMER` method works, just what it does. This is the second reason for using subroutines—to clarify your methods. In this way, your methods become extensions to the 4D language.

If you need to change your method of finding customers in this example project, you will need to change only one method, not ten. This is the next reason to use subroutines—to facilitate changes to your methods.

Using subroutines, you make your code modular. This simply means dividing your code into modules (subroutines), each of which performs a logical task. Consider the following code from a checking account project:

```4d
 FIND_CLEARED_CHECKS //Find the cleared checks
 RECONCILE_ACCOUNT //Reconcile the account
 PRINT_CHECK_BOOK_REPORT //Print a checkbook report
```

Even for someone who doesn’t know the project, it is clear what this code does. It is not necessary to examine each subroutine. Each subroutine might be many lines long and perform some complex operations, but here it is only important that it performs its task. We recommend that you divide your code into logical tasks, or modules, whenever possible. 


### Object formulas

You can encapsulate your project methods in **formula** objects and call them from your objects.

The `Formula` or `Formula from string` commands allow you to create native formula objects that you can encapsulate in object properties. It allows you to implement custom object methods. 

To execute a method stored in an object property, use the **( )** operator after the property name. For example:

```4d
//myAlert
ALERT("Hello world!")
```

Then `myAlert` can be encapsulated in any object and called:

```4d
C_OBJECT($o)
$o:=New object("custom_Alert";Formula(myAlert))
$o.custom_Alert() //displays "Hello world!"
```

Syntax with brackets is also supported:

```4d
$o["custom_Alert"]() //displays "Hello world!"
```

You can also [pass parameters](Concepts/parameters.md) to your formula when you call it by using $1, $2… just like with 4D project methods:

```4d
//fullName method
C_TEXT($0;$1;$2)
$0:=$1+" "+$2
```

You can encapsulate `fullName` in an object:

```4d
C_OBJECT($o)
$o:=New object("full_name";Formula(fullName))
$result:=$o.full_name("John";"Smith") 
//$result = "John Smith"
// equivalent to $result:=fullName("param1";"param2")
```

Combined with the `This`function, such object methods allow writing powerful generic code. For example:

```4d
//fullName2 method
C_TEXT($0)
$0:=This.firstName+" "+This.lastName
```

Then the method acts like a new, calculated attribute that can be added to other attributes:

```4d
C_OBJECT($o)
$o:=New object("firstName";"Jim";"lastName";"Wesson")
$o.fullName:=Formula(fullName2) //add the method  

$result:=$o.fullName() 
//$result = "Jim Wesson"
```



Note that, even if it does not have parameters, an object method to be executed must be called with ( ) parenthesis. Calling only the object property will return a new reference to the formula (and will not execute it):

```4d
$o:=$f.message //returns the formula object in $o
```

### Menu Methods
A menu method is invoked when you select the custom menu command to which it is attached. You assign the method to the menu command using the Menu editor or a command of the "Menus" theme. The method executes when the menu command is chosen. By creating custom menus with menu methods that perform specific actions, you create custom interfaces for your desktop applications. 

Custom menu commands can cause one or more activities to take place. For example, a menu command for entering records might call a method that performs two tasks: displaying the appropriate input form, and calling the `ADD RECORD` command until the user cancels the data entry activity.

Automating sequences of activities is a very powerful capability of the programming language. Using custom menus, you can automate task sequences and thus provide more guidance to users of the application.


### Process Methods 

A **process method** is a project method that is called when a process is started. The process lasts only as long as the process method continues to execute, except if it is a Worker process. Note that a menu method attached to a menu command with *Start a New Process* property is also the process method for the newly started process.

### Event and Error catching Methods
An **event catching method** runs in a separate process as the process method for catching events. Usually, you let 4D do most of the event handling for you. For example, during data entry, 4D detects keystrokes and clicks, then calls the correct object and form methods so you can respond appropriately to the events from within these methods. For more information, see the description of the command `ON EVENT CALL`.

An **error catching method** is an interrupt-based project method. Each time an error or an exception occurs, it executes within the process in which it was installed. For more information, see the description of the command `ON ERR CALL`.

## Recursive Project Methods

Project methods can call themselves. For example:

- The method A may call the method B which may call A, so A will call B again and so on.
- A method can call itself.

This is called recursion. The 4D language fully supports recursion.

Here is an example. Let’s say you have a `[Friends and Relatives]` table composed of this extremely simplified set of fields:
- `[Friends and Relatives]Name`
- `[Friends and Relatives]ChildrensName`

For this example, we assume the values in the fields are unique (there are no two persons with the same name). Given a name, you want to build the sentence “A friend of mine, John who is the child of Paul who is the child of Jane who is the child of Robert who is the child of Eleanor, does this for a living!”:

1. You can build the sentence in this way:

```4d
 $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       $vtTheWholeStory:="A friend of mine, "+$vsName
       Repeat
          QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$vsName)
          $vlQueryResult:=Records in selection([Friends and Relatives])
          If($vlQueryResult>0)
             $vtTheWholeStory:=$vtTheWholeStory+" who is the child of "+[Friends and Relatives]Name
             $vsName:=[Friends and Relatives]Name
          End if
       Until($vlQueryResult=0)
       $vtTheWholeStory:=$vtTheWholeStory+", does this for a living!"
       ALERT($vtTheWholeStory)
    End if
 End if
```

2. You can also build it this way:

```4d
 $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       ALERT("A friend of mine, "+Genealogy of($vsName)+", does this for a living!")
    End if
 End if
```

with the recursive function `Genealogy of` listed here:

```4d
  ` Genealogy of project method
  ` Genealogy of ( String ) -> Text
  ` Genealogy of ( Name ) -> Part of sentence
 
 $0:=$1
 QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$1)
 If(Records in selection([Friends and Relatives])>0)
    $0:=$0+" who is the child of "+Genealogy of([Friends and Relatives]Name)
 End if
```

Note the `Genealogy of` method which calls itself.

The first way is an **iterative algorithm**. The second way is a **recursive algorithm**.

When implementing code for cases like the previous example, it is important to note that you can always write methods using iteration or recursion. Typically, recursion provides more concise, readable, and maintainable code, but using it is not mandatory.

Some typical uses of recursion in 4D are:

- Treating records within tables that relate to each other in the same way as in the example.
- Browsing documents and folders on your disk, using the commands `FOLDER LIST` and `DOCUMENT LIST`. A folder may contain folders and documents, the subfolders can themselves contain folders and documents, and so on.

**Important:** Recursive calls should always end at some point. In the example, the method `Genealogy of` stops calling itself when the query returns no records. Without this condition test, the method would call itself indefinitely; eventually, 4D would return a “Stack Full” error becuase it would no longer have space to “pile up” the calls (as well as parameters and local variables used in the method).

## Project method properties

After creating a project method, you can rename it and modify its properties. Project method properties mainly concern their access and security conditions (access by users, integrated servers or services) as well as their execution mode. 

The other types of methods do not have specific properties. Their properties are related to those of the objects to which they are attached.

To modify the properties of a project method:

1.  In the [Code Editor](../code-editor/interface.md): 
* select the **Method Properties...** command in the **Method** menu
* on the **Methods** page of the Explorer, **right-click** on the project method and select **Method Properties...** in the context menu or options menu. The **Method Properties** dialog appears.

**Note:** A batch setting function allows you to modify a property for all or part of the database project methods in a single operation (see [Batch setting for method attributes](#batch-setting-for-method-attributes)).

#### Name  

You can change the name of a project method in the **Name** area of the **Method Properties** window or in the Explorer.

The new name must comply with 4D naming rules (see [Identifiers](../Concepts/identifiers.md)). If a method with the same name already exists, 4D displays a message saying that the method name has already been used. If necessary, 4D sorts the list of methods again. 

**Warning:** Changing the name of a method already used in the database can invalidate any methods or formulas that use the old method name and runs the risk of disrupting application functioning. You can rename the method manually but it is strongly recommended to use the renaming function for project methods, described in [Renaming](https://doc.4d.com/4Dv19R5/4D/19-R5/Renaming.300-5851389.en.html). With this function, you can automatically update the name wherever the method is called throughout the Design environment.

With 4D Server, the method name is changed on the server when you finish editing it. If more than one user is modifying the method name at the same time, the final method name will be the name specified by the last user to finish editing it. You may want to specify a method owner so that only certain users can change the method's name

**Note:** Database methods cannot be renamed. The same goes for triggers, form methods, and object methods, which are bound to objects and take their names from the object concerned. 

#### Attributes  

You can control how project methods are used and/or called in different contexts using attributes. Note that you can set attributes for an entire selection of project methods using the Explorer (see following section).

##### Invisible  

If you do not want users to be able to run a project method using the **Method...** command of the **Run** menu, you can make it Invisible by checking this option. An invisible method does not appear in the method execution dialog box (see [From the Execute Method dialog box](#from-the-execute-method-dialog-box)). 

When you make a project method invisible, it is still available to database programmers. It remains listed on the [Current form table](https://doc.4d.com/4Dv19R5/4D/19-R5/Current-form-table.301-5830420.en.html) of the Explorer and in the list of routines in the Code Editor.

##### Shared by components and host database  

This attribute is used within the framework of components. When it is checked, it indicates that the method will be available to components when the application is used as the host database. On the other hand, when the application is used as a component, the method will be available to the host databases. 

For more information about components, refer to the [Developing and installing 4D components](../Extensions/develop-components.md) chapter.

##### Execute on Server  

This attribute is only taken into account for a 4D application in client-server mode. When this option is checked, the project method is always executed on the server, regardless of how it is called. 

For more information on this option, refer to [Execute on Server attribute](#execute-on-server).

#### Execution mode  

This option allows you to declare the method eligible for execution in preemptive mode. By default, 4D executes all the project methods of your applications in cooperative mode. 

If you want to benefit from the preemptive mode feature, you must explicitly declare all the methods that you want to be started in preemptive mode. The compiler will then check that these methods are actually thread-safe.

**Note:** Execution in preemptive mode is only available in compiled mode. For more information, refer to the [Preemptive 4D processes](https://doc.4d.com/4Dv19R5/4D/19-R5/Preemptive-4D-processes.300-5830919.en.html) section.

The following options are provided:

-   **Can be run in preemptive processes**: By checking this option, you declare that the method is capable of being run in a preemptive process and therefore should be run in preemptive mode whenever possible. The "preemptive" property of the method is set to "capable".

When this option is checked, the 4D compiler will verify that the method is actually capable and will return errors if this is not the case -- for example, if it directly or indirectly calls commands or methods that cannot be run in preemptive mode (the entire call chain is parsed but errors are only reported to the first sublevel). You can then edit the method so that it becomes thread-safe, or select another option.

If the method's preemptive capability is approved, it is tagged "thread-safe" internally and will be executed in preemptive mode whenever the required conditions are met. This property defines its eligibility for preemptive mode but does not guarantee that the method will actually be run in preemptive mode, since this execution mode requires a specific context (see [When is a process started preemptively?](https://doc.4d.com/4Dv19R5/4D/19-R5/Preemptive-4D-processes.300-5830919.en.html#2822148)).

-   **Cannot be run in preemptive processes**: By checking this option, you declare that the method must never be run in preemptive mode, and therefore must always be run in cooperative mode, as in previous 4D versions. The "preemptive" property of the method is set to "incapable".

When this option is checked, the 4D compiler will not verify the ability of the method to run preemptively; it is automatically tagged "thread-unsafe" internally (even if it is theoretically capable). When called at runtime, this method will "contaminate" any other methods in the same thread, thus forcing this thread to be executed in cooperative mode, even if the other methods are thread-safe.

-   **Indifferent **(default): By checking this option, you declare that you do not want to handle the preemptive property for the method. The "preemptive" property of the method is set to "indifferent".

When this option is checked, the 4D compiler will evaluate the preemptive capability of the method and will tag it internally as "thread-safe" or "thread-unsafe". No error related to preemptive execution is returned. If the method is evaluated as thread-safe, at runtime it will not prevent preemptive thread execution when called in a preemptive context. Conversely, if the method is evaluated "thread-unsafe", at runtime it will prevent any preemptive thread execution when called.\

Note that with this option, whatever the internal thread safety evaluation, the method will always be executed in cooperative mode when called directly by 4D as the first parent method (for example through the [New process](https://doc.4d.com/4Dv19R5/4D/19-R5/New-process.301-5830903.en.html) command). If tagged "thread-safe" internally, it is only taken into account when called from other methods inside a call chain.

***Particular case*:** If the method has also the **Shared by components and host database** property (see [Project method properties](https://doc.4d.com/4Dv19R5/4D/19-R5/Project-method-properties.300-5851552.en.html)), setting the **Indifferent** option will automatically tag the method as thread-unsafe. If you want a shared component method to be thread-safe, you must explicitely set it to **Can be run in preemptive processes**. 

#### Available through  

Availability attributes specify the external services which are allowed to explicitly call the method.

##### Web Services  

This attribute lets you publish the current method as a Web Service accessible via SOAP requests. For more information, refer to the [Publication and use of Web Services](https://doc.4d.com/4Dv19R5/4D/19-R5/Publication-and-use-of-Web-Services.200-5851321.en.html) chapter. When this option is checked, the **Published in WSDL** option is enabled.

In the Explorer, project methods that are offered as a Web Service are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440512/pict440512.fr.png).

**Note:** You cannot publish a method as a Web service if its name includes characters that do not comply with XML nomenclature (e.g. containing spaces). If the method name is not in keeping with this, 4D does not assign the property.

##### Published in WSDL  

This attribute is only available when the "Web Service" attribute is checked. It lets you include the current method in the WSDL of the 4D application. For more information about this, refer to [Generation of the WSDL](https://doc.4d.com/4Dv19R5/4D/19-R5/Publishing-a-Web-Service-with-4D.300-5851558.en.html#502689). 

In the Explorer, project methods that are offered as a Web Service and published in WSDL are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440526/pict440526.fr.png). 

##### 4D tags and URLs (4DACTION...)  

This option is used to reinforce 4D Web server security: when it is not checked, the project method cannot be executed via an HTTP request containing the special 4DACTION URL used for calling 4D methods, nor the special 4DSCRIPT, 4DTEXT and 4DHTML tags (as well as the former 4DVAR and 4DHTMLVAR tags). For more information, refer to [URLs and Form Actions](https://doc.4d.com/4Dv19R5/4D/14-R2/URLs-and-Form-Actions.300-1342176.en.html) and [4D Transformation Tags](https://doc.4d.com/4Dv19R5/4D/19-R5/4D-Transformation-Tags.300-5830552.en.html) in the 4D *Language Reference* manual.

In the Explorer, project methods with this attribute are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440496/pict440496.fr.png).

For security reasons, this option is unchecked by default. Each method that can be executed using the special Web URL or tags must be indicated individually.

##### SQL  

When it is checked, this option allows the project method to be executed by the SQL engine of 4D. By default, it is not selected, which means that, unless explicitly authorized, 4D project methods are protected and cannot be called by the SQL engine of 4D. 

This property applies to all internal and external SQL queries --- executed via the ODBC driver, SQL code inserted between the [Begin SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/Begin-SQL.301-5830074.en.html)/[End SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/End-SQL.301-5830073.en.html)  tags or the [QUERY BY SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/QUERY-BY-SQL.301-5830079.en.html) command.

**Notes:**

-   Even if a method has the "SQL" attribute, access rights set at the level of the database settings and method properties are taken into account for the execution of the method.
-   The ODBC **SQLProcedure** function only returns project methods with the "SQL" attribute.

For more information, refer to [4D SQL engine implementation](https://doc.4d.com/4Dv19R5/4D/19-R5/4D-SQL-engine-implementation.300-5871873.en.html) in the 4D SQL manual.

##### REST Server  

*This option is deprecated because it relies on legacy current record and current selection concepts. It is recommended to use** [ORDA data model class functions](https://developer.4d.com/docs/en/REST/classFunctions.html) for REST access. *

#### Batch setting for method attributes  

Using the "Attributes for methods" dialog box, you can modify an attribute (Invisible, Offered as a Web Service, etc.) for all or part of the database project methods in a single operation. This feature is especially useful for modifying the attributes of a large number of project methods. It can also be used during development to apply common attributes to groups of similar methods quickly.

For batch setting of method attributes:

1.  On the [Methods Page](https://doc.4d.com/4Dv19R5/4D/19-R5/Methods-Page.300-5851337.en.html) of the 4D Explorer, expand the options menu, then choose the **Batch setting of attributes...** command. The **Attributes for methods** dialog appears.
2.  In the "Matching method name:" area, enter a string that lets you designate the methods you want to modify as a batch.
The character string is used as a search criterion for the method names.
Use the wildcard character @ to help define groups of methods:
   -   To designate methods whose names begin with..., type @ at the end of the string. For example: web@
    -   To designate methods whose names contain..., type @ in the middle of the string. For example: web@write
    -   To designate methods whose names end with..., type @ at the beginning of the string. For example: @write
    -   To designate all of the methods, just type @ in the area.\
        **Notes:**
        -   The search does not take upper/lower case into account.
        -   You can enter several @ characters in the string, for example dtro_@web@pro.@
3.  In the "Attribute to Modify" area, choose an attribute from the drop-down list, then click on the **True** or **False** radio button corresponding to the value to be applied.
    **Note:** If the "Published in WSDL" attribute is set to True, it will only be applied to project methods already containing the "Offered as a Web Service" attribute.
4.  Click on **Apply**. The modification is applied instantly to all the project methods designated by the character string entered.

## Executing methods

Project methods written in your application are usually called automatically during the use of the application via menu commands, buttons, other methods, and so on. As for database methods, they are executed in relation to specific events that occur in the application. 

However, for testing and debugging purposes, 4D lets you manually execute project methods and certain database methods in Design mode. In this case, it is possible to run the method in a new process and/or directly in Debug mode, in order to check its execution step by step.

Moreover, with 4D Server, you can indicate whether 4D Server should execute a project method on the server machine or on other clients' machines. You can execute methods in two ways:

-   From the [Code Editor](../code-editor/overview.md) window,
-   From the [Execute Method](#from-the-execute-method-dialog-box) dialog box (project methods only).

### From the Code Editor 

Each [**Code Editor**](../code-editor/overview.md) window has a button that can be used to run the current method. Using the menu associated with this button, you can choose the type of execution desired:

![](assets/en/concepts/execute-method.png)

This button is only active for project methods and for the following database methods:

-   On Startup
-   On Exit
-   On Server Startup
-   On Server Shutdown

The following execution modes are available:

-   **Run new process**: Creates a process and runs the method in standard mode in this process.
-   **Run and debug new process**: Creates a new process and displays the method in the Debugger window for step by step execution in this process.
-   **Run in Application process**: Runs the method in standard mode in the context of the Application process (in other words, the record display window).
-   **Run and debug in Application process**: Displays the method in the Debugger window for step by step execution in the context of the Application process (in other words, the record display window).

#### From the Execute Method dialog box  

When you select the **Method...** command of the **Run** menu,  displays the **Execute Method** dialog.

This dialog box lists all the project methods of the database, including shared project methods of components. On the other hand, project methods that have been declared invisible will not appear. 

To execute a project method, simply select its name in the list and click on **Execute**. To run a method step by step in Debug mode, click on **Debug**. For more information about the 4D debugger, refer to the [Debugging](../Debugging/basics.md) section. 

**4D Server Note**: The **Debug** option is not available if you execute the method on the server.

If you check the **New Process** check box, the method you selected executes in another process. If the method is performing a time-consuming task such as printing a large set of records, you can continue to work with your database, adding records to a table, creating a graph to display data, and so on. For more information about processes, refer to [Processes](https://doc.4d.com/4Dv19R5/4D/19-R5/Processes.300-5830912.en.html) the 4D *Language Reference* manual.

**4D Server Note**:

-   If you want the method to be executed on the server machine rather than on the client machine, select the **On 4D Server** option in the To be executed menu. In this case, a new process, call the *stored procedure*, is created on the server machine in order to execute the method.

   This option can be used to reduce network traffic and optimize the functioning of 4D Server, in particular for methods that call data stored on the disk. All types of methods can be executed on the server machine or on another client machine, except for those that modify the user interface. In this case, stored procedures are ineffective.

-   You can also choose to run the method on another client workstation. Other client workstations will not appear in the menu, unless they have been previously "registered" (for more information, refer to the description of the [REGISTER CLIENT](https://doc.4d.com/4Dv19R5/4D/19-R5/REGISTER-CLIENT.301-5830908.en.html).

By default, the **locally** option is selected. With the 4D single-user version, this is the only option available.
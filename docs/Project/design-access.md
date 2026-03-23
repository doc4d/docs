---
id: design-object-access-commands
title: Design Object Access commands
---


With 4D, you can access the contents and paths of methods and in your applications by programming, thanks to the [**"Design Object Access" command theme**](../commands/theme/Design_Object_Access.md). This source toolkit facilitates the integration into your applications of code control tools and more particularly version control systems (VCS). It also lets you implement advanced systems for [code documentation](../Project/documentation.md), for building a custom explorer or for organizing scheduled backups of the code saved as disk files.

The following principles are implemented:

- Each method and form in a 4D application has its own address in the form of a pathname. For example, the trigger method for table 1 can be found at "[trigger]/table_1". Each object pathname is unique in an application.
- You can access objects in the 4D application using the commands of the **"Design Object Access"** command theme, for example [`METHOD GET NAMES`](../commands/method-get-names) or [`METHOD GET PATHS`](../commands/method-get-paths).
- Most of the commands in this theme work in both [interpreted and compiled](../Concepts/interpreted.md) mode. However, commands that modify properties or access contents executable from methods can only be used in interpreted mode (see the table below).
- You can use all the commands of this theme with 4D in local or remote mode. However, keep in mind that you cannot use certain commands in compiled mode: the purpose of this theme is to create custom development support tools. You must not use these commands to dynamically change the functioning of a database that is running. For example, you cannot use [`METHOD SET ATTRIBUTE`](../commands/method-set-attribute) to change a method attribute according to the status of the current user.
- When a command of this theme is called from a [component](../Project/components.md), by default it accesses the component objects. In this case, to access objects of the host, you just pass a `*` as the last parameter. 

## Use in compiled mode

For reasons related to the principle of the compilation process, only certain commands in this theme can be used in compiled mode. The following table indicates the available of the commands in compiled mode:

| Command | Can be used in compiled mode |
|---|---|
| [Current method path](../commands/current-method-path) | Yes |
| [FORM GET NAMES](../commands/form-get-names) | Yes |
| [METHOD Get attribute](../commands/method-get-attribute) | Yes |
| [METHOD GET ATTRIBUTES](../commands/method-get-attributes) | Yes |
| [METHOD GET CODE](../commands/method-get-code) | No |
| [METHOD GET COMMENTS](../commands/method-get-comments) | Yes |
| [METHOD GET FOLDERS](../commands/method-get-folders) | Yes |
| [METHOD GET MODIFICATION DATE](../commands/method-get-modification-date) | Yes |
| [METHOD GET NAMES](../commands/method-get-names) | Yes |
| [METHOD Get path](../commands/method-get-path) | Yes |
| [METHOD GET PATHS](../commands/method-get-paths) | Yes |
| [METHOD GET PATHS FORM](../commands/method-get-paths-form) | Yes |
| [METHOD OPEN PATH](../commands/method-open-path) | No  |
| [METHOD RESOLVE PATH](../commands/method-resolve-path) | Yes |
| [METHOD SET ACCESS MODE](../commands/method-set-access-mode) | Yes |
| [METHOD SET ATTRIBUTE](../commands/method-set-attribute) | No  |
| [METHOD SET ATTRIBUTES](../commands/method-set-attributes) | No  |
| [METHOD SET CODE](../commands/method-set-code) | No  |
| [METHOD SET COMMENTS](../commands/method-set-comments) | No  |

:::note

The error -9762 "The command cannot be executed in a compiled database." is generated when the command is executed in compiled mode.

:::

## Creation of pathnames  

Pathnames generated for 4D objects must be compatible with the file management of the operating system. Characters that are forbidden at the OS level such as ":" are automatically encoded in method names, so that generated files may be integrated automatically in a version control system.

Here are the encoded characters:

|Character|	Encoding|
|---|---|
|"|%22|
|*|%2A|
|/|%2F|
|:|%3A|
|\<|%3C|
|\>	|%3E|
|?	|%3F|
|\|	|%7C|
|\\	|%5C|
|%|%25|

#### Examples

`Form?1` is encoded `Form%3F1`  
`Button/1` is encoded `Button%2F1`
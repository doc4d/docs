---
id: general
title: General page
---

The General page contains options to configure generic parameters for the 4D project.

## Design

This area contains the **Display toolbar** option. When it is checked, the 4D toolbar is displayed in the Design environment.

## General

You use this area to set options concerning project startup and operation.

### Startup Environment

You use this menu to select the default startup mode for the database: **Design** or **Application**. Unless specified, 4D opens by default in the Design environment if a password access system is not activated.
## Component

This area allows component developers to configure how their component classes and functions will be exposed in the 4D method editor once the component is installed.

### Component namespace in the class store

Use this area to define a namespace for the component classes and functions in the code. By default, this area in empty: component classes are not available outside of the component context.

When you enter a value, you declare that component classes and functions will be available in the host project code through the `cs.component-name` namespace.

> The component designation must be compliant with [property naming rules](Concepts/identifiers.md#object-properties).

For example, you have developed a component creating shapes and you write "eGeometry" in the component namespace area. Assuming that you have created a `Rectangle` class containing a `getArea()` function, once your project is installed as a component, the developer of the host project can write:

```4d
var $rect: cs.eGeometry.Rectangle 
$rect:=cs.eGeometry.Rectangle.new(10;20)
$area:=$rect.getArea()
```

Of course, it is recommended to use a distinguished name to avoid any conflict with the other installed components. If a user class with the same name as a component already exists in the project, the user class is taken into account and the component classes are ignored.

### Generate syntax file for code completion when compiled

To make your component easier to use for other developers, you can create a syntax file that will be used by 4D to generate contextual help in the code editor, such as code completion and function syntax:

![](assets/en/settings/syntax-code-completion-1.png)

![](assets/en/settings/syntax-code-completion-2.png)

When you check this option, a syntax file (JSON format) is automatically created during the compilation phase, filled with the syntax of your component's classes, functions, and methods, and placed in the \Resources\en.lproj folder of the component project. 4D uses the contents of that syntax file to generate contextual help.

If you don't enter a [component namespace](#component-namespace-in-the-class-store), the resources for the classes and methods are not generated even if the syntax file option is checked.

#### Hidden classes

Just like in any project, you can create hidden classes and functions in a component by prefixing class names with an underscore ("_").

Hidden classes and functions can still be used if you know their names, but they do not appear as suggestions when using code completion.

For example, the following syntax is valid even if the `Rectangle` class is hidden:

```4d
$rect:=cs.eGeometry._Rectangle.new(10;20)
```

#### Hidden class inheritance and code completion

When working with [built components](../Desktop/building.md#build-component) (.4dz files), the attributes of a hidden parent class are not suggested when using code completion with its child classes.

For example, imagine that your component has a hidden class called `_Person` and a class called `Teacher` that [inherits](../Concepts/classes.md#inheritance) from `_Person`.

When using code completion with `Teacher`:
* the functions inside `_Person` appear as suggestions (including getter and setters)
* the attributes and function syntax of `_Person`are not displayed
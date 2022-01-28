---
id: general
title: Page Général
---

La page Général contient des options permettant de configurer les paramètres génériques du projet 4D.

## Développeur

Cette zone comporte l'option **Afficher la barre d'outils**. Lorsqu'elle est cochée, la barre d'outils 4D est affichée dans l'environnement de Développement.

## Général

Cette zone vous permet de personnaliser diverses options relatives au démarrage et au fonctionnement du projet.

### Mode de démarrage

Ce menu permet de sélectionner le mode dans lequel vous souhaitez que la base soit ouverte par défaut : **Développement** ou **Application**. A moins que vous ne le spécifiiez, 4D s'ouvre par défaut en mode Développement s’il n’y a pas de mots de passe en contrôlant l’accès.
## Component

This area allows component developers to configure how their component classes and functions will be exposed in the 4D method editor once the component is installed.

### Component namespace in the class store

Use this area to define a namespace for the component classes and functions in the code. A namespace ensures that all of a given set of objects have unique names so that they can be easily identified.

By default, this area is empty: component classes are not available outside of the component context.

When you enter a value, you declare that component classes and functions will be available in the host project's code through the `cs.value` namespace. This also ensures that no conflict emerges when a host project uses two components that have classes or functions with identical names.

> The component designation must be compliant with [property naming rules](Concepts/identifiers.md#object-properties).

For example, you have developed a component creating shapes and you enter "eGeometry" as component namespace. Assuming that you have created a `Rectangle` class containing a `getArea()` function, once your project is installed as a component, the developer of the host project can write:

```4d
var $rect: cs.eGeometry.Rectangle 
$rect:=cs.eGeometry.Rectangle.new(10;20)
$area:=$rect.getArea()
```

Of course, it is recommended to use a distinguished name to avoid any conflict with the other installed components. If a user class with the same name as a component already exists in the project, the user class is taken into account and the component classes are ignored.

A component's ORDA classes are not available in its host project. For example, if there is a dataclass called `Employees` in your component, the corresponding `cs.Employee` class cannot be used in the host project.

### Generate syntax file for code completion when compiled

To make your component easier to use for other developers, you can create a syntax file that will be used by 4D to generate contextual help in the code editor, such as code completion and function syntax:

![](assets/en/settings/syntax-code-completion-1.png)

![](assets/en/settings/syntax-code-completion-2.png)

When you check this option, a syntax file (JSON format) is automatically created during the compilation phase, filled with the syntax of your component's classes, functions, and exposed methods, and placed in the \Resources\en.lproj folder of the component project. 4D uses the contents of that syntax file to generate contextual help.

If you don't enter a [component namespace](#component-namespace-in-the-class-store), the resources for the classes and exposed methods are not generated even if the syntax file option is checked.

#### Hidden classes

Just like in any project, you can create hidden classes and functions in a component by prefixing class names with an underscore ("_").

Hidden classes and functions can still be used if you know their names, but they do not appear as suggestions when using code completion.

For example, the following syntax is valid even if the `_Rectangle` class is hidden:

```4d
$rect:=cs.eGeometry._Rectangle.new(10;20)
```

#### Hidden class inheritance and code completion

When working with [built components](../Desktop/building.md#build-component) (.4dz files), the non-hidden functions inside a parent class (including getter and setters) appear as suggestions when you use code completion with its child class.

For example, imagine that your component has a hidden class called `_Person` and a class called `Teacher` that [inherits](../Concepts/classes.md#inheritance) from `_Person`.

When using code completion with `Teacher`, the functions inside `_Person` appear as suggestions and their syntax is displayed as contextual help.
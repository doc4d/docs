---
id: components
title: Componentes
---

Un componente 4D es un conjunto de código y de formularios 4D que representan una o varias funcionalidades que pueden instalarse y utilizarse en sus proyectos. For example, the [4D SVG component](https://doc.4d.com/4Dv19R3/4D/19-R3/4D-SVG-Component.100-5681501.en.html) adds advanced commands and an integrated rendering engine that can be used to display SVG files.

## ¿Dónde encontrar los componentes?

Several components are [preinstalled in the 4D development environment](Extensions/overview.md), but a lot of 4D components from the 4D community [can be found on GitHub](https://github.com/search?q=4d-component\&type=Repositories). Additionnally, you can [develop your own 4D components](Extensions/develop-components.md).

## Instalación de los componentes

To install a component, you simply need to copy the component files into the [`Components` folder of the project](Project/architecture.md). Puede utilizar alias o atajos.

Un proyecto local que se ejecuta en modo interpretado puede utilizar componentes interpretados o compilados. Un proyecto local que se ejecuta en modo compilado no puede utilizar componentes interpretados. En este caso, sólo se pueden utilizar componentes compilados.

## Utilización de los componentes

El código expuesto de los componentes (métodos y funciones) así como los formularios pueden ser utilizados como elementos estándar en su desarrollo 4D.

When an installed component contains methods, classes, and functions, they appear in the **Component Methods** theme of the Explorer's Methods page:

![alt-text](../assets/en/Concepts/components-explorer.png)

:::note

If the component is compiled, its [namespace](../Extensions/develop-components.md#declaring-the-component-namespace) is written between parentheses after its name. Utilice este espacio de nombres para acceder a las funciones del componente.

:::

You can select a component [project method](methods.md) or [class](classes.md) and click on the **Documentation** button of the Explorer to get information about it, [if any](Project/documentation.md).

![alt-text](../assets/en/Project/compDoc.png)

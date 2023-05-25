---
id: components
title: Componentes
---

A 4D component is a set of 4D methods and forms representing one or more functionalities that can be installed in different applications. Por exemplo, o [componente 4D SVG](https://doc.4d.com/4Dv19R3/4D/19-R3/4D-SVG-Component.100-5681501.en.html) adiciona comandos avançados e um motor de renderização integrado que pode ser utilizado para apresentar ficheiros SVG.

## Onde encontrar componentes?

Criar e instalar componentes 4D é realizado diretamente a partir de 4D. Basicamente, os componentes são geridos como [plug-ins](Concepts/plug-ins.md) de acordo com os seguintes princípios: Além disso, pode [desenvolver os seus próprios componentes 4D](Extensions/develop-components.md).


## Instalação de componentes

Para instalar um componente, basta copiar os ficheiros do componente para a pasta [`Components` do projecto](Project/architecture.md). Pode usar pseudónimos ou atalhos.

Um projecto anfitrião executado em modo interpretado pode utilizar componentes interpretados ou compilados. Um projecto anfitrião executado em modo compilado não pode utilizar componentes interpretados. Por isso não pode ser usado em um componente.

## Utilização de componentes

Exposed component code (methods and functions) as well as forms can be used as standard elements in your 4D development.

When an installed component contains methods, classes, and functions, they appear in the **Component Methods** theme of the Explorer's Methods page:

![alt-text](../assets/en/Concepts/components-explorer.png)

:::note

If the component is compiled, its [namespace](../Extensions/develop-components.md#declaring-the-component-namespace) is written between parentheses after its name. Use this namespace to access the component's functions.

:::

You can select a component [project method](methods.md) or [class](classes.md) and click on the **Documentation** button of the Explorer to get information about it, [if any](Project/documentation.md).

![alt-text](../assets/en/Project/compDoc.png)

---
id: components
title: Componentes
---

Um componente 4D é um conjunto de código 4D e formulários que representam uma ou mais funcionalidades que pode instalar e usar nos seus projectos. For example, the [4D SVG component](https://doc.4d.com/4Dv20/4D/20/4D-SVG-Component.100-6342795.en.html) adds advanced commands and an integrated rendering engine that can be used to display SVG files.

## Instalação de componentes

Criar e instalar componentes 4D é realizado diretamente a partir de 4D. Basicamente, os componentes são geridos como [plug-ins](Concepts/plug-ins.md) de acordo com os seguintes princípios: Além disso, pode [desenvolver os seus próprios componentes 4D](Extensions/develop-components.md).

Installation and loading of components in your 4D projects are handled through the [4D package manager](../Project/components.md).


## Utilização de componentes

O código de componente exposto (métodos e funções) assim como os formulários podem ser usados como elementos padrão no seu desenvolvimento 4D.

Quando um componente instalado contém métodos, classes e funções, estes aparecem no tema **Component Methods** da página Métodos do Explorador:

![alt-text](../assets/en/Concepts/components-explorer.png)

:::note

Se o componente for compilado, o seu espaço de nomes [](../Extensions/develop-components.md#declaring-the-component-namespace) é escrito entre parênteses após o seu nome. Utilize este espaço de nomes para aceder às funções do componente.

:::

Pode seleccionar um componente [método de projecto](methods.md) ou [classe](classes.md) e clicar no botão **Documentação** do Explorador para obter informações sobre o mesmo, [se existir](Project/documentation.md).

![alt-text](../assets/en/Project/compDoc.png)

---
id: picturePopupMenuOverview
title: Menu pop-up imagem
---

A picture pop-up menu is a pop-up menu that displays a two-dimensional array of pictures. Se puede utilizar un menú emergente de imágenes en lugar de un [botón imagen](pictureButton_overview.md). The creation of the picture to use with a picture pop-up menu is similar to the creation of a picture for a picture button. El concepto es el mismo que el de la [rejillas de botones](buttonGrid_overview.md), salvo que la imagen se utiliza como un menú emergente en lugar de un objeto del formulario.

## Utilizar os menus emergentes de imagens

Para crear un menú emergente de imágenes, debe [referirse a una imagen](properties_Picture.md#pathname). The following example allows you to select the interface language by selecting it from a picture pop-up menu. Cada língua é representada pela bandeira correspondente:

![](../assets/en/FormObjects/picturePopupMenu_example.png)

### Programação

Pode gerir os menus pop-up de imagens utilizando métodos. Al igual que con las [rejillas de botones](buttonGrid_overview.md), las variables asociadas a los menús emergentes de imágenes se definen con el valor del elemento seleccionado en el menú emergente de imágenes. Se nenhum elemento for seleccionado, o valor é 0. Os elementos são numerados, linha a linha, da esquerda para a direita, começando pela linha superior.

### Ir para página

You can assign the `gotoPage` [standard action](https://doc.4d.com/4Dv19R4/4D/19-R4/Standard-actions.300-5736871.en.html) to a picture pop-up menu. When that action is selected, 4D will automatically display the page of the form that corresponds to the position of the picture selected in the picture array. Elements are numbered from left to right and top to bottom, beginning with the top left corner.

For example, if the user selects the 3rd element, 4D will display the third page of the current form (if it exists).
Si desea gestionar usted mismo el efecto de un clic, seleccione `Sin acción`.

## Propriedades compatíveis

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) -[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Columns](properties_Crop.md#columns) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_Picture.md#pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Rows](properties_Crop.md#rows)- [Standard action](properties_Action.md#standard-action) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

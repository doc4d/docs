---
id: staticPicture
title: Imagen estática
---


Las imágenes estáticas son [objetos estáticos](formObjects_overview.md#active-and-static-objects) que pueden ser utilizados para varios propósitos en los formularios 4D, incluyendo la decoración, el fondo o la interfaz de usuario:

![](assets/en/FormObjects/StaticPict.png)


Las imágenes estáticas se almacenan fuera de los formularios y se insertan por referencia. En el editor de formularios, los objetos imagen estáticos se crean mediante operaciones de copiar/pegar o arrastrar y soltar.

> Si coloca una imagen estática en la página 0 de un formulario de varias páginas, aparecerá automáticamente como elemento de fondo en todas las páginas. You can also include it in an inherited form, applied in the background of other different forms. Either way, your application will run faster than if the picture was pasted into each page.



## Formato y ubicación

The original picture must be stored in a format managed natively by 4D (4D recognizes the main picture formats: JPEG, PNG, BMP, SVG, GIF, etc.).

Se pueden utilizar dos ubicaciones principales para la trayectoria de la imagen estática:

- in the **Resources** folder of the project. Appropriate when you want to share static pictures between several forms in the project. In this case, the Pathname is in the "/RESOURCES/\<picture path\>".
- en una carpeta de imágenes (por ejemplo, llamada **Images**) dentro de la carpeta del formulario. Appropriate when the static pictures are used only in the form and/or yon want to be able to move or duplicate the whole form within the project or different projects. In this case, the Pathname is "<\picture path\>" and is resolved from the root of the form folder.


## Propiedades soportadas

[Bottom](properties_CoordinatesAndSizing.md#bottom) - [CSS Class](properties_Object.md#css-class) - [Display](properties_Picture.md#display) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_Picture.md#pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility)  - [Width](properties_CoordinatesAndSizing.md#width)

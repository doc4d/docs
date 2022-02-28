---
id: propertiesTextAndPicture
title: Texto e Imagen
---

---
## Ruta de acceso fondo

Define la ruta de la imagen que se dibujará en el fondo del objeto. Si el objeto utiliza un [icono](#picture-pathname) con [diferentes estados](#number-of-states), la imagen de fondo soportará automáticamente el mismo número de estados.

El nombre de la ruta a introducir es similar al de [ la propiedad Ruta de acceso para las imágenes estáticas](properties_Picture.md#pathname).

#### Gramática JSON

| Nombre                  | Tipos de datos | Valores posibles                                                                                              |
| ----------------------- | -------------- | ------------------------------------------------------------------------------------------------------------- |
| customBackgroundPicture | cadena         | Ruta relativa en sintaxis POSIX. Debe utilizarse junto con la opción "Personalizado" de la propiedad "Style". |


#### Objetos soportados

[Botón personalizado](button_overview.md#custom) - [Casilla de selección personalizada](checkbox_overview.md#custom) - [Botón radio personalizado](radio_overview.md#custom)




---
## Estilos de botón

Aspecto general del botón. El estilo del botón también influye en la disponibilidad de ciertas opciones.


#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                                                                                                                                                   |
|:------:|:--------------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| style  |     texto      | "regular", "flat", "toolbar", "bevel", "roundedBevel", "gradientBevel", "texturedBevel", "office", "help", "circular", "disclosure", "roundedDisclosure", "custom" |


#### Objetos soportados

[Botón](button_overview.md) - [Botón radio](radio_overview.md) - [Casilla de selección](checkbox_overview.md) - [Botón Radio](radio_overview.md)




---
## Margen horizontal

Esta propiedad permite definir el tamaño (en píxeles) de los márgenes horizontales del botón. Este margen delimita el área que el icono del botón y el título no deben sobrepasar.

Este parámetro es útil, por ejemplo, cuando la imagen de fondo contiene bordes:

| Con / Sin                | Ejemplo                                                   |
| ------------------------ | --------------------------------------------------------- |
| Sin margen               | ![](assets/en/FormObjects/property_horizontalMargin1.png) |
| Con un margen 13 píxeles | ![](assets/en/FormObjects/property_horizontalMargin2.png) |
> Esta propiedad funciona junto con la propiedad [Margen vertical](#vertical-margin).

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles                                   |
| ------------- | -------------- | -------------------------------------------------- |
| customBorderX | number         | Para usar con el estilo "personalizado". Mínimo: 0 |

#### Objetos soportados

[Botón personalizado](button_overview.md#custom) - [Casilla de selección personalizada](checkbox_overview.md#custom) - [Botón radio personalizado](radio_overview.md#custom)




---

## Ubicación del icono

Designa la ubicación de un icono en relación con el objeto formulario.

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles                  |
| ------------- | -------------- | --------------------------------- |
| iconPlacement | cadena         | "ninguno", "izquierda", "derecha" |

#### Objetos soportados

[Encabezado de list box](listbox_overview.md#list-box-headers)





---
## Desplazamiento icono

Define un valor de desplazamiento personalizado en píxeles, que se utilizará cuando se haga clic en el botón

El título del botón se desplazará hacia la derecha y hacia la parte inferior por el número de píxeles introducidos. This allows applying a customized 3D effect when the button is clicked.

#### Gramática JSON

| Nombre       | Tipos de datos | Valores posibles |
| ------------ | -------------- | ---------------- |
| customOffset | number         | mínimo: 0        |

#### Objetos soportados

[Botón personalizado](button_overview.md#custom) - [Casilla de selección personalizada](checkbox_overview.md#custom) - [Botón radio personalizado](radio_overview.md#custom)



---
## Número de estados

This property sets the exact number of states present in the picture used as the icon for a [button with icon](button_overview.md), a [check box](checkbox_overview.md) or a custom [radio button](radio_overview.md). In general, a button icon includes four states: active, clicked, mouse over and inactive.

Each state is represented by a different picture. In the source picture, the states must be stacked vertically:

![](assets/en/property_numberOfStates.png)

The following states are represented:
1. button not clicked / check box unchecked (variable value=0)
2. button clicked / check box checked (variable value=1)
3. pasar por encima
4. disabled


#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles |
| ---------- | -------------- | ---------------- |
| iconFrames | number         | mínimo: 1        |

#### Objetos soportados

[Button](button_overview.md) (all styles except [Help](button_overview.md#help)) - [Check Box](checkbox_overview.md) - [Radio Button](radio_overview.md)





---
## Ruta de acceso de la imagen

Sets the path of the picture that will be used as icon for the object.

El nombre de la ruta a introducir es similar al de [ la propiedad Ruta de acceso para las imágenes estáticas](properties_Picture.md#pathname).

> When used as icon for active objects, the picture must be designed to support a variable [number of states](#number-of-states).

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                             |
| ------ | -------------- | -------------------------------------------- |
| icon   | imagen         | Relative or filesystem path in POSIX syntax. |

#### Objetos soportados

[Button](button_overview.md) (all styles except [Help](button_overview.md#help)) - [Check Box](checkbox_overview.md) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md)




---
## Posición título/imagen

This property allows modifying the relative location of the button title in relation to the associated icon. This property has no effect when the button contains only a title (no associated picture) or a picture (no title). By default, when a button contains a title and a picture, the text is placed below the picture.

Here are the results using the various options for this property:

| Option        | Descripción                                                                                                                                      | Ejemplo                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| **Izquierda** | The text is placed to the left of the icon. The contents of the button are aligned to the right.                                                 | ![](assets/en/FormObjects/property_titlePosition_left.en.png)  |
| **Arriba**    | The text is placed above the icon. The contents of the button are centered.                                                                      | ![](assets/en/FormObjects/property_titlePosition_top.png)      |
| **Derecha**   | The text is placed to the right of the icon. The contents of the button are aligned to the left.                                                 | ![](assets/en/FormObjects/property_titlePosition_right.png)    |
| **Abajo**     | The text is placed below the icon. The contents of the button are centered.                                                                      | ![](assets/en/FormObjects/property_titlePosition_bottom.png)   |
| **Centrado**  | The text of the icon is centered vertically and horizontally in the button. This parameter is useful, for example, for text included in an icon. | ![](assets/en/FormObjects/property_titlePosition_centered.png) |

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles                           |
| ------------- | -------------- | ------------------------------------------ |
| textPlacement | cadena         | "left", "top", "right", "bottom", "center" |

#### Objetos soportados

[Button](button_overview.md) (all styles except [Help](button_overview.md#help)) - [Check Box](checkbox_overview.md) - [Radio Button](radio_overview.md)




---
## Margen vertical

This property allows setting the size (in pixels) of the vertical margins of the button. Este margen delimita el área que el icono del botón y el título no deben sobrepasar.

This parameter is useful, for example, when the background picture contains borders.

> This property works in conjunction with the [Horizontal Margin](#horizontal-margin) property.

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles                                   |
| ------------- | -------------- | -------------------------------------------------- |
| customBorderY | number         | Para usar con el estilo "personalizado". Mínimo: 0 |

#### Objetos soportados

[Botón personalizado](button_overview.md#custom) - [Casilla de selección personalizada](checkbox_overview.md#custom) - [Botón radio personalizado](radio_overview.md#custom)




---
## Con menú pop-up

This property allows displaying a symbol that appears as a triangle in the button to indicate the presence of an attached pop-up menu:

![](assets/en/FormObjects/property_popup.png)

The appearance and location of this symbol depends on the button style and the current platform.


### Linked and Separated

To attach a pop-up menu symbol to a button, there are two display options available:

|                       Enlazado                       |                        Separado                         |
|:----------------------------------------------------:|:-------------------------------------------------------:|
| ![](assets/en/FormObjects/property_popup_linked.png) | ![](assets/en/FormObjects/property_popup_separated.png) |
> The actual availability of a "separated" mode depends on the style of the button and the platform.

Each option specifies the relation between the button and the attached pop-up menu:

<li>When the pop-up menu is **separated**, clicking on the left part of the button directly executes the current action of the button; this action can be modified using the pop-up menu accessible in the right part of the button. <li>When the pop-up menu is **linked**, a simple click on the button only displays the pop-up menu. Only the selection of the action in the pop-up menu causes its execution.


### Managing the pop-up menu

It is important to note that the "With Pop-up Menu" property only manages the graphic aspect of the button. The display of the pop-up menu and its values must be handled entirely by the developer, more particularly using `form events` and the **[Dynamic pop up menu](https://doc.4d.com/4Dv18/4D/18/Dynamic-pop-up-menu.301-4505524.en.html)** and **[Pop up menu](https://doc.4d.com/4Dv17R5/4D/17-R5/Pop-up-menu.301-4127438.en.html)** commands.


#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles                                                                                     |
|:-------------- | -------------- | ---------------------------------------------------------------------------------------------------- |
| popupPlacement | cadena         | <li>"none"<li>"linked"<li>"separated" |


#### Objetos soportados

[Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Circle Button](button_overview.md#circle) - [Custom](button_overview.md#custom)
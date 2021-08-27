---
id: menu
title: Menú
---


## Barra de menús asociada

Cuando se asocia una barra de menú a un formulario, ésta se añade a la derecha de la barra de menú actual cuando el formulario se muestra en el entorno Aplicación.

La selección de un comando de menú hace que se envíe un evento `On Menu Selected` al método formulario; entonces puede utilizar el comando `Menu selected` para probar el menú seleccionado.

> If the menu bar of the form is identical to the current menu bar, it is not added.

The form menu bar will operate for both input and output forms.


#### Gramática JSON

| Nombre  | Tipos de datos | Valores posibles   |
| ------- | -------------- | ------------------ |
| menuBar | cadena         | Name of a menu bar |


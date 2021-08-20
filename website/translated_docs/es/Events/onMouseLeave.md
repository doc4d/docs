---
id: onMouseLeave
title: On Mouse Leave
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Definición                                             |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| 36   | [Área 4D Write Pro](FormObjects/writeProArea_overview) - [Botón](FormObjects/button_overview.md) - [Rejilla de botones](FormObjects/buttonGrid_overview.md) - [Casilla de selección](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Lista desplegable](FormObjects/dropdownList_Overview.md) - Formulario - [Lista jerárquica](FormObjects/list_overview.md#overview) - [Entrada](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Botón imagen](FormObjects/pictureButton_overview.md) - [Pop up menu imagen](FormObjects/picturePopupMenu_overview.md) - [Área de plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicador de progreso ](FormObjects/progressIndicator.md) - [Botón radio](FormObjects/radio_overview.md) - [Regla](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Pestaña](FormObjects/tabControl.md) | El cursor del ratón sake del área gráfica de un objeto |


## Descripción

This event is generated once when the mouse cursor leaves the graphic area of an object.

The `On Mouse Leave` event updates the *MouseX* and *MouseY* system variables.

Los objetos que se hacen invisibles utilizando el comando `OBJECT SET VISIBLE` o la propiedad [Visibilidad](FormObjects/properties_Display.md#visibility) no generan este evento.


### Llamar la pila

If the `On Mouse Leave` event has been checked for the form, it is generated for each form object. Si se verifica para un objeto, se genera sólo para ese objeto. Cuando hay objetos superpuestos, el evento es generado por el primer objeto capaz de gestionarlo que se encuentra yendo en orden del nivel superior al inferior.

### Ver también

- [`On Mouse Move`](onMouseMove.md)
- [`On Mouse Leave`](onMouseLeave.md)
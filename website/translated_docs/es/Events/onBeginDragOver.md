---
id: onBeginDragOver
title: On Begin Drag Over
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Definición                    |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| 17   | [Área 4D Write Pro](FormObjects/writeProArea_overview) - [Botón](FormObjects/button_overview.md) - [Rejilla de botones](FormObjects/buttonGrid_overview.md) - [Casilla de selección](FormObjects/checkbox_overview.md) - [Lista desplegable](FormObjects/dropdownList_Overview.md) - Formulario - [Lista jerárquica](FormObjects/list_overview.md#overview) - [Área de entrada](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Columna List Box](FormObjects/listbox_overview.md#list-box-columns) - [Botón imagen](FormObjects/pictureButton_overview.md) - [Pop up menu image](FormObjects/picturePopupMenu_overview.md) - [Área de plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicador de progreso](FormObjects/progressIndicator.md) - [Botón radio](FormObjects/radio_overview.md) - [Regla](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Pestaña](FormObjects/tabControl.md) | Se está arrastrando un objeto |


## Descripción

El evento de formulario `On Begin Drag Over` puede ser seleccionado para todos los objetos formulario que puedan ser arrastrados. Se genera en todos los casos en que el objeto tiene la propiedad [Draggable](FormObjects/properties_Action.md#draggable). Se puede llamar desde el método del objeto fuente o desde el método formulario del objeto fuente.

> A diferencia del evento de formulario [`On Drag Over`](onDragOver.md), `On Begin Drag Over` se llama dentro del contexto del **objeto fuente** de la acción de arrastrar.

The `On Begin Drag Over` event is useful for preparing of the drag action. Puede utilizarse para:

- Add data and signatures to the pasteboard (via the `APPEND DATA TO PASTEBOARD` command).
- Use a custom icon during the drag action (via the `SET DRAG ICON` command).
- Accept or refuse dragging via $0 in the method of the dragged object.
    - To indicate that drag actions are accepted, the method of the source object must return 0 (zero); you must therefore execute `$0:=0`.
    - To indicate that drag actions are refused, the method of the source object must return -1 (minus one); you must therefore execute `$0:=-1`.
    - If no result is returned, 4D considers that drag actions are accepted.

4D data are put in the pasteboard before calling the event. For example, in the case of dragging without the **Automatic Drag** action, the dragged text is already in the pasteboard when the event is called.
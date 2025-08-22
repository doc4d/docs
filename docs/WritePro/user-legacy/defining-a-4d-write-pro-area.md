---
id: defining-a-4d-write-pro-area
title: Configuring 4D Write Pro areas
displayed_sidebar: docs
---

## Creating a 4D Write Pro area

### Using the 4D Write Pro area object 

4D Write Pro documents are displayed and edited manually in a 4D form object: **4D Write Pro**. This object is available as part of the last tool (Plug-in Area, Web Area, etc.) found in the [object bar](../../FormEditor/formEditor.md#object-bar):  
  
![](../../assets/en/WritePro/pict4101210.en.png)  

A 4D Write Pro form area is configured by means of standard properties found in the Property List, such as **Object Name** and **Variable or Expression**, **Coordinates**, **Entry**, **Display**, **Appearance**, and/or **Events**.  
  
![](../../assets/en/WritePro/pict4101242.en.png)  

The **Variable or Expression** property can be used in the language as a reference to the 4D Write Pro area. Note that the variable must be of the [Object](../../Concepts/dt_object.md) type.

"Entry" properties manage basic features for text entry:

* **Enterable**: enables you to lock/unlock the area in order to allow or prevent editing
* **Auto Spellcheck**: available for 4D Write Pro areas
* **Context Menu**: allows you to enable/disable the context menu when the form is executed at runtime (see the [Using a 4D Write Pro area](./using-a-4d-write-pro-area.md))
* **Selection always visible**: handles text selection as in standard text areas.

### Using 4D Write Pro Interface 

You can create preconfigured 4D Write Pro areas using the **4D Write Pro** objects found in the [Object library](../../FormEditor/objectLibrary.md) of the 4D Form editor ("Entry areas" theme):  
  
![](../../assets/en/WritePro/pict4101252.en.png)  

These areas come with either a control panel or a toolbar for managing all the attributes of the area (font, color, style, etc.):  
  
![](../../assets/en/WritePro/pict4687892.en.png)  

For more information, refer to the [4D Write Pro Interface](../writeprointerface.md) section.

## Drag and Drop 

To configure the drag and drop features for your 4D Write Pro areas, you need to select the appropriate options in the "Action" theme of the Property List:  
  
![](../../assets/en/WritePro/pict4101267.en.png)  

4D Write Pro areas support two drag and drop modes:

* **Custom mode:** only "Draggable" and "Droppable" options checked. In this mode, you can select text and start to move it. The object method is then called with the [On Begin Drag Over](../../Events/onBeginDragOver.md) event, and you can define the drop action using custom code.
* **Automatic mode**: "Draggable", "Droppable", "Automatic Drag" and "Automatic Drop" options checked. In this mode, you can automatically move or copy the selected text by pressing the **Alt/Option** key. The [On Begin Drag Over](../../Events/onBeginDragOver.md) event is not triggered.

**Note:** Selecting only "Automatic Drag" and "Automatic Drop" options will have no effect in the 4D Write Pro area. 

## View properties 

Document view properties are directly available in the Property List for 4D Write Pro areas. They allow you to define how a 4D Write Pro document will be displayed by default in the 4D Write Pro area. These properties let you customize, for example, whether 4D Write Pro documents are displayed as they would be printed, or as they would be rendered in a browser. You can set different views of the same 4D Write Pro document in the same form.

**Note:** View settings can be managed dynamically using the [WP SET VIEW PROPERTIES](../commands/wp-set-view-properties) and [WP Get view properties](../commands/wp-get-view-properties) commands. 

Document view settings are handled through specific items in the **Appearance** theme of the Property List for 4D Write Pro form objects:  
  
![](../../assets/en/WritePro/pict5941073.en.png)  

* **Resolution**: Sets the screen resolution for the 4D Write Pro area contents. By default, it is set to **72 dpi (macOS)**, which is the standard resolution for 4D forms on all platforms. Setting this property to **Automatic** means that document rendering will differ between macOS and Windows platforms. Setting a specific dpi value will make the document rendering the same on both macOS and Windows platforms.
* **Zoom**: Sets the zoom percentage for displaying 4D Write Pro area contents.
* **View mode**: Sets the mode for displaying the 4D Write Pro document in the form area. Three values are available:  
   * **Page**: the most complete view mode, which includes page outlines, orientation, margins, page breaks, headers and footers, etc. For more information, please refer to the *Page view features* paragraph.  
   * **Draft**: draft mode with basic document properties  
   * **Embedded**: view mode suitable for embedded areas; it does not display margins, footers, headers, page frames, etc.  
   This mode can also be used to produce a web-like view output (if you also select the 96 dpi resolution and the **Show HTML WYSIWYG** option).  
   **Note:** The **View mode** property is only used for onscreen rendering. Regarding printing settings, specific rendering rules are automatically used.
* **Show page frame**: Displays/hides the page frame when Page view mode is set to "Page".
* **Show references**: Displays all 4D formulas (or expressions) inserted in the document as *references*. When this option is unchecked, 4D formulas are displayed as *values*. See [**Managing formulas**](../managing-formulas.md). 
**Note:** Formula references can be displayed as ![](../../assets/en/WritePro/pict6013182.en.png) symbols (see below).
* **Show headers/footers**: Displays/hides the headers and footers when Page view mode is set to "Page". 
* **Show background and anchored elements**: Displays/hides background images, background color, anchored images and text boxes.
* **Show hidden characters**: Displays/hides invisible characters
* **Show HTML WYSIWYG**: Enables/disables the HTML WYSIWYG view, in which any 4D Write Pro advanced attributes which are not compliant with all browsers are removed.
* **Show horizontal ruler**: Displays/hides the horizontal ruler. F
* **Show vertical ruler**: Displays/hides the vertical ruler when the document is in Page mode. 
* **Show empty or unsupported images**: Displays/hides a black rectangle for images that cannot be loaded or computed (empty images or images in an unsupported format). 
* **Display formula source as symbol**: Displays source text of formulas as ![](../../assets/en/WritePro/pict6013182.en.png) symbols when expressions are shown as references (see above). Displaying formulas as symbols makes template documents more compact and more *wysiwyg*.
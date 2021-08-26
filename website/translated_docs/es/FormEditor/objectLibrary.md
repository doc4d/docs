---
id: objectLibrary
title: Librerías de objetos
---


Puede utilizar librerías de objetos en sus formularios. Una librería de objetos ofrece una colección de objetos preconfigurados que pueden ser utilizados en sus formularios mediante un simple copiar y pegar o arrastrar y soltar.

4D propone dos tipos de librerías de objetos:

- una librería de objetos estándar y preconfigurada, disponible en todos sus proyectos.
- librerías de objetos personalizadas, que puede utilizar para almacenar sus objetos formularios favoritos o formularios proyecto completos.


## Utilización de la librería de objetos estándar

La librería de objetos estándar está disponible en el editor de formularios: haga clic en el último botón de la barra de herramientas:  
![](assets/en/FormEditor/library1.png)

La librería se muestra en una ventana aparte:

![](assets/en/FormEditor/library2.png)

La ventana tiene las siguientes características principales:

- Área de vista previa con mensajes de ayuda: el área central muestra una vista previa de cada objeto. You can hover on an object to obtain information about the object in a tip.
- You can filter the window contents by using the **Categories** menu: ![](assets/en/FormEditor/library3.png)
- To use an object from the library to your form, you can either:
    - right-click on an object and select **Copy** in the contextual menu
    - or drag and drop the object from the library The object is then added to the form.

This library is read-only. If you want to edit default objects or create your own library of preconfigured objects or project forms, you need to create a custom object library (see below).

All objects proposed in the standard object library are described on [this section on doc.4d.com](https://doc.4d.com/4Dv17R6/4D/17-R6/Library-objects.200-4354586.en.html).


## Crear y utilizar librerías de objetos personalizadas

You can create and use custom object libraries in 4D. A custom object library is a 4D project where you can store your favorite objects (buttons, texts, pictures, etc.) You can then reuse these objects in different forms and different projects.

Objects are stored with all their properties, including their object methods. Libraries are put together and used by simple drag-and-drop or copy-paste operations.

Using libraries, you can build form object backgrounds grouped by graphic families, by behavior, etc.


### Crear una librería de objetos

Para crear una librería de objetos, seleccione **Nuevo>Librería de objetos...** en el menú **Archivo** o en la barra de herramientas de 4D. Aparece una caja de diálogo estándar para guardar el archivo, que le permite elegir el nombre y la ubicación de la librería de objetos.

Una vez validada la caja de diálogo, 4D crea una nueva librería de objetos en su disco y muestra su ventana (vacía por defecto).

![](assets/en/FormEditor/library4.png)

Puede crear tantas librerías como desee por proyecto. Una librería creada y construida en macOS puede utilizarse en Windows y viceversa.

### Abrir una librería de objetos

Una determinada librería de objetos sólo puede ser abierta por un proyecto a la vez. Sin embargo, se pueden abrir varias librerías diferentes en el mismo proyecto.

Para abrir una librería de objetos personalizada, seleccione el comando **Abrir>Librería de objetos...** en el menú **Archivo** o en la barra de herramientas de 4D. Aparece una caja de diálogo estándar para abrir archivos, que le permite seleccionar la librería de objetos que desea abrir. Puede seleccionar los siguientes tipos de archivos:
- **.4dproject**
- **.4dz**

De hecho, las librerías de objetos personalizadas son proyectos 4D clásicos. Sólo se exponen las siguientes partes de un proyecto cuando se abre como librería:

- formularios proyecto
- form pages 1


### Crear una librería de objetos

Los objetos se colocan en una librería de objetos mediante una operación de arrastrar y soltar o de cortar, copiar y pegar. Pueden provenir de un formulario o de otra librería de objetos (incluyendo la [librería estándar](#using-the-standard-object-library)). No se conserva ningún enlace con el objeto original: si el original se modifica, el objeto copiado no se ve afectado.

> Para poder arrastrar y soltar objetos de los formularios a las librerías de objetos, debe asegurarse de seleccionar la opción **Iniciar arrastrar y soltar** en las Preferencias de 4D.

Las principales operaciones están disponibles en el menú contextual o en el menú de opciones de la ventana:

![](assets/en/FormEditor/library5.png)

- **Cortar** o **Copiar** al portapapeles
- **Pegar** un objeto del tablero portapapeles
- **Borrar** - elimina el objeto de la librería
- **Renombrar** - aparece una caja de diálogo que permite cambiar el nombre del elemento. Tenga en cuenta que los nombres de los objetos deben ser únicos en una librería.


Puede colocar objetos individuales (incluidos los subformularios) o conjuntos de objetos en una librería de objetos. Cada objeto o conjunto se agrupa en un solo elemento:

![](assets/en/FormEditor/library6.png)

Una librería de objetos puede contener hasta 32.000 elementos.

Los objetos se copian con todas sus propiedades, tanto gráficas como funcionales, incluidos sus métodos. Estas propiedades se mantienen en su totalidad cuando el elemento se copia en un formulario o en otra librería.

#### Objetos dependientes
El uso de copiar y pegar o arrastrar y soltar con ciertos objetos de librería también hace que se copien sus objetos dependientes. Por ejemplo, si se copia un botón, se copiará también el método del objeto que se pueda adjuntar. Estos objetos dependientes no se pueden copiar ni arrastrar y soltar directamente.

A continuación se muestra una lista de objetos dependientes que se pegarán en la librería al mismo tiempo que el objeto principal que los utiliza (cuando corresponda):

- Listas
- Formatos/Filtros
- Imágenes
- Mensajes de ayuda (asociados a un campo)
- Métodos objeto


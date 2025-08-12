---
id: printing-4d-write-pro-documents
title: Impresion de documentos 4D Write Pro
displayed_sidebar: docs
---

#### 

Los documentos 4D Write Pro se pueden imprimir de dos formas

* como partes de formularios 4D
* como documentos independientes

#### Impresión de documentos 

Puede imprimir objetos 4D Write Pro incluidos en cualquier tipo de formulario 4D (proyecto, tabla, entrada, o salida) utilizando comandos de impresión 4D estándar como [PRINT SELECTION](../../commands/print-selection) o [PRINT RECORD](../../commands/print-record). 

La opción estándar *Impresión tamaño variable* también es soportada(\*) para las áreas 4D Write Pro, lo que permite gestionar cambios de tamaño durante la impresión. Cuando se activa esta opción, el margen (exterior e interior) y el borde superior se aplican sólo a la primera página. El margen (exterior e interior) y el borde inferior se aplican sólo a la última página. Las propiedades de paginación del documento se ignoran: el control de viudas y huérfanos se desactiva y los saltos de página no se aplican (estas propiedades sólo se utilizan para la renderización de páginas en la pantalla o en la impresión independiente del documento). Cuando se selecciona la opción **Impresión tamaño variable**, se imprimen sólo los objetos situados por encima del área en el formulario. Para obtener más información sobre esta opción, consulte "*Impresión tamaño variable*" en el Manual de Diseño.  
  
(\*) Los comandos [Print object](../../commands/print-object) y [Print form](../../commands/print-form) no son compatibles con esta opción.

##### Modo Vista para impresión 

Cualquiera que sea el **modo Vista** para el área 4D Write Pro (ver *Configurar propiedades Vista*), siempre se imprime como en el modo **Anidado** cuando se utiliza un comando de impresión 4D como [Print form](../../commands/print-form). En este caso, las siguientes opciones de Apariencia no se tienen en cuenta para los objetos de formulario 4D Write Pro: modo vista Página (siempre "Anidado"), Mostrar encabezados, Mostrar pies de página, Mostrar marco de página (siempre "no"), Mostrar caracteres ocultos (siempre "no").

##### Ejemplo 

El siguiente ejemplo muestra el efecto de la opción **Impresión tamaño variable** en un área 4D Write Pro anidada en el formulario de salida por defecto. El siguiente código se ejecuta:

```4d
 ALL RECORDS([Movies])
 ORDER BY([Movies]Title)
 PRINT SELECTION([Movies])
```

* Con la opción Imprimir tamaño variable no **seleccionada**, tendrá el siguiente resultado:  
![](../../assets/en/WritePro/pict2646292.EN.png)
* Con la opción de Imprimir tamaño variable **seleccionada**, tendrá el siguiente resultado:  
![](../../assets/en/WritePro/pict2646294.EN.png)  
*(fuente del texto de ejemplo: Wikipedia)*

#### Impresión de documentos independientes 

A partir de 4D v15 R5, 4D Write Pro incluye nuevas funcionalidades de impresión. Utilizando estas funcionalidades estándar, podrá imprimir documentos 4D Write Pro independientes, así como también controlar las opciones de impresión estándar tales como formato, orientación o números de página.

##### Comandos 4D Write Pro 

Básicamente, dos comandos manejan la función de impresión 4D Write Pro: *WP PRINT* y *WP USE PAGE SETUP*.

* [WP PRINT](../commands/wp-print) inicia un trabajo de impresión para el documento 4D Write Pro o agrega el documento al trabajo de impresión actual.
* [WP USE PAGE SETUP](../commands/wp-use-page-setup) modifica la configuración de página de la impresora actual de los atributos de documento 4D Write Pro para el tamaño y orientación.

**Nota:** en máquinas con Windows 7 o Windows Server 2008 R2, asegúrese de que la *actualización de plataforma para Windows 7* se ha instalado de manera que las funcionalidades de impresión sean compatibles.

##### Comandos 4D regulares 

Los siguientes comandos 4D soportan las funcionalidades de impresión 4D Write Pro:

* [SET PRINT OPTION](../../commands/set-print-option) y [GET PRINT OPTION](../../commands/get-print-option): todas las opciones son soportadas para documentos 4D Write Pro impresos por [WP PRINT](../commands/wp-print). Para Paper option y Orientation option, es más eficiente llamar a [WP USE PAGE SETUP](../commands/wp-use-page-setup) para sincronizar fácilmente estos atributos con la configuración del documento 4D Write Pro. Page range option (15) le permite definir el rango de página a imprimir.
* [PRINT SETTINGS](../../commands/print-settings): permite establecer los ajustes de impresión para la impresora actual; si [WP PRINT](../commands/wp-print) se llama después, se utilizará la configuración de impresora modificada si son modificados por diálogos de configuración de impresión (con excepción de los márgenes de diálogo de configuración de página que siempre se basan en el documento 4D Write Pro).
* [OPEN PRINTING JOB](../../commands/open-printing-job) y [CLOSE PRINTING JOB](../../commands/close-printing-job): [WP PRINT](../commands/wp-print) puede llamarse entre estos comandos para insertar uno o más documentos 4D Write Pro en un trabajo de impresión.
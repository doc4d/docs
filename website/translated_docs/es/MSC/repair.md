---
id: repair
title: Página Reparación
sidebar_label: Página Reparación
---

Esta página se utiliza para reparar el archivo de datos cuando se ha dañado. Generalmente, sólo utilizará estas funciones bajo la supervisión de los equipos técnicos de 4D, cuando se hayan detectado anomalías al abrir la aplicación o tras una [verificación](verify.md).

**Atención:** cada operación de reparación implica la duplicación del archivo original, lo que aumenta el tamaño de la carpeta de la aplicación. Es importante tener esto en cuenta (especialmente en macOS, donde las aplicaciones 4D aparecen como paquetes) para que el tamaño de la aplicación no aumente excesivamente. Eliminar manualmente las copias del archivo original dentro del paquete puede ser útil para minimizar el tamaño del paquete.
> La reparación sólo está disponible en modo mantenimiento. If you attempt to carry out this operation in standard mode, a warning dialog will inform you that the application will be closed and restarted in maintenance mode.
> Cuando la base está encriptada, la reparación de datos incluye pasos de encriptación y desencriptación y, por tanto, requiere la llave de encriptación de datos actual. Si no se ha suministrado ya una llave de cifrado válida, aparecerá un cuadro de diálogo solicitando la frase de paso o la llave de cifrado (ver página Cifrado).

## Archivos

### Archivo de datos a reparar
Nombre de la ruta del archivo de datos actual. El botón **[...]** puede utilizarse para especificar otro archivo de datos. Al hacer clic en este botón, se muestra un diálogo estándar de ápertura de documentos para que pueda designar el archivo de datos a reparar. If you perform a [standard repair](#standard-repair), you must select a data file that is compatible with the open project file. Si realiza una reparación [reparación por encabezados de registros](#recover-by-record-headers), puede seleccionar todo archivo de datos. Una vez validado este diálogo, se indica en la ventana el nombre de la ruta del archivo a reparar.

### Carpeta de copia de seguridad de los archivos originales
Por defecto, el archivo de datos original se duplicará antes de la operación de reparación. It will be placed in a subfolder named “Replaced files (repairing)” in the application folder. El segundo botón **[...]** se puede utilizar para especificar otra ubicación para guardar los archivos originales antes de iniciar la reparación. Esta opción se puede utilizar más particularmente cuando se reparan archivos voluminosos mientras se utilizan diferentes discos.

### Archivos reparados
4D crea un nuevo archivo de datos vacío en la ubicación del archivo original. The original file is moved into the folder named "\Replaced Files (Repairing) date time" whose location is set in the "Original files backup folder" area (application folder by default). El archivo vacío se llena con los datos recuperados.


## Reparación estándar

Se debe elegir la reparación estándar cuando sólo están dañados unos pocos registros o índices (las tablas de direcciones están intactas). Los datos se compactan y se reparan. Este tipo de reparación sólo puede realizarse cuando los datos y el archivo de estructura coinciden.

Una vez finalizado el procedimiento de reparación, aparece la página "Reparación" del CSM. Un mensaje indica si la reparación fue exitosa. If so, you can open the application immediately. ![](assets/en/MSC/MSC_RepairOK.png)

## Reparación por encabezados de registros
Utilice esta opción de reparación de bajo nivel sólo cuando el archivo de datos esté gravemente dañado y después de que todas las demás soluciones (restitución desde una copia de seguridad, reparación estándar) hayan resultado ineficaces.

Los registros 4D varían en tamaño, por lo que es necesario mantener la ubicación donde se almacenan en el disco en una tabla específica, llamada tabla de direcciones, para poder encontrarlos de nuevo. Por lo tanto, el programa accede a la dirección del registro por medio de un índice y de la tabla de direcciones. If only records or indexes are damaged, the standard repair option is usually sufficient to resolve the problem. However, when the address table itself is affected, it requires a more sophisticated recovery since it will be necessary to reconstitute it. To do this, the MSC uses the marker located in the header of each record. The markers are compared to a summary of the record, including the bulk of their information, and from which it is possible to reconstruct the address table.

> If you have deselected the **Records definitively deleted** option in the properties of a table in the structure, performing a recovery by header markers may cause records that were previously deleted to reappear. 
> 
> Recovery by headers does not take integrity constraints into account. More specifically, after this operation you may get duplicated values with unique fields or NULL values with fields declared **Never Null**.

When you click on **Scan and repair...**, 4D performs a complete scan of the data file. When the scan is complete, the results appear in the following window:

![](assets/en/MSC/mscrepair2.png)
> If all the records and all the tables have been assigned, only the main area is displayed.

The "Records found in the data file" area includes two tables summarizing the information from the scan of the data file.

- The first table lists the information from the data file scan. Each row shows a group of recoverable records in the data file:
    - The **Order** column indicates the recovery order for the group of records.
    - The **Count** column indicates the number of the records in the table.
    - The **Destination table** column indicates the names of tables that were automatically assigned to the groups of identified records. The names of tables assigned automatically appear in green. Groups that were not assigned, i.e. tables that could not be associated with any records appear in red.
    - The **Recover** column lets you indicate, for each group, whether you want to recover the records. By default, this option is checked for every group with records that can be associated with a table.

- The second table lists the tables of the project file.


### Asignación manual
If several groups of records could not be assigned to tables due to a damaged address table, you can assign them manually. To do this, first select an unassigned group of records in the first table. The "Content of the records" area then displays a preview of the contents of the first records of the group to make it easier to assign them:

![](assets/en/MSC/mscrepair3.png)

Next select the table you want to assign to the group in the "Unassigned tables" table and click on the **Identify table** button. You can also assign a table using drag and drop. The group of records is then associated with the table and it will be recovered in this table. The names of tables that are assigned manually appear in black. Use the **Ignore records** button to remove the association made manually between the table and the group of records.


## Abrir archivo de historial

After repair is completed, 4D generates a log file in the Logs folder of the project. Este archivo permite ver todas las operaciones realizadas. It is created in XML format and named: *ApplicationName**_Repair_Log_yyyy-mm-dd hh-mm-ss.xml*" where:

- *ApplicationName* is the name of the project file without any extension, for example "Invoices",
- *yyyy-mm-dd hh-mm-ss* es la marca de tiempo del archivo, basada en la hora del sistema local cuando se inició la operación de mantenimiento, por ejemplo "2019-02-11 15-20-45".

Al presionar el botón **Abrir archivo de historial**, 4D muestra el archivo de historial más reciente en el navegador por defecto de la máquina.

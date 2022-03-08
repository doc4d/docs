---
id: restaurar
title: Página Restauración
sidebar_label: Página Restauración
---

You can manually restore an archive of the current application using the **Restore** page. This page provides several options that can be used to control the restoration:

![](assets/en/MSC/MSC_restore.png)

> 4D automatic recovery systems restore applications and include data log file when necessary.

The list found in the left part of the window displays any existing backups of the application. You can also click on the **Browse...** button found just under the area in order to open any other archive file from a different location. A continuación, se añade a la lista de archivos.

Cuando se selecciona una copia de seguridad en esta lista, la parte derecha de la ventana muestra la información relativa a esta copia de seguridad en particular:

- **Ruta**: ruta de acceso completa del archivo de copia de seguridad seleccionado. Al hacer clic en el botón Mostrar se abre el archivo de copia de seguridad en una ventana del sistema.
- **Fecha y hora**: fecha y hora de la copia de seguridad.
- **Contenido**: contenido del archivo de copia de seguridad. Cada elemento de la lista tiene una casilla de selección al lado que se puede utilizar para indicar si se quiere restaurar o no. También puede utilizar los botones **Seleccionar todo** o **Deseleccionar todo** para definir la lista de los elementos que deben restaurarse.
- **Carpeta de destino de los archivos restaurados**: carpeta donde se colocarán los archivos restaurados. By default, 4D restores the files in a folder named “Archivename” (no extension) that is placed next to the Project folder. Para cambiar esta ubicación, haga clic en **[...]** y designe la carpeta en la que desea colocar los archivos restaurados.

El botón **Restaurar** lanza la restauración manual del elemento o elementos seleccionados.

## Integración sucesiva de varios archivos de historial de datos

The **Integrate one or more log file(s) after restore** option allows you to integrate several data log files successively into an application. If, for example, you have 4 journal file archives (.4BL) corresponding to 4 backups, you can restore the first backup then integrate the journal (data log) archives one by one. Esto significa que puede, por ejemplo, recuperar un archivo de datos incluso cuando faltan los últimos archivos de copia de seguridad.

Cuando esta opción está marcada, 4D muestra la caja de diálogo estándar Abrir archivo después de la restauración, que puede utilizarse para seleccionar el archivo del diario que se va a integrar. La caja de diálogo Abrir archivo se muestra de nuevo después de cada integración hasta que se cancela.

## Restauración de una base encriptada

Keep in mind that the data encryption key (passphrase) may have been changed through several versions of backup files (.4BK), .journal files (.4BL) and the current application. Siempre deben proporcionarse claves de encriptación coincidentes.

When restoring a backup and integrating the current log file in a encrypted database:

- If you restore a backup using an old passphrase, this passphrase will be required at the next database startup.
- After an encryption, when opening the encrypted data file, a backup is run and a new journal file is created. Thus, it is not possible to restore a .4BK file encrypted with one key and integrate .4BL files encrypted with another key.

The following sequence illustrates the principles of a multi-key backup/restore operation:


| Operación                   | Archivos generados                                | Comentario                                                                                                                                                                                                                   |
| --------------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nuevo archivo de datos      |                                                   |                                                                                                                                                                                                                              |
| Añadir datos (registro # 1) |                                                   |                                                                                                                                                                                                                              |
| Backup de la base de datos  | 0000.4BL y 0001.4BK                               |                                                                                                                                                                                                                              |
| Añadir datos (registro # 2) |                                                   |                                                                                                                                                                                                                              |
| Backup de la base de datos  | 0001.4BL y 0002.4BK                               |                                                                                                                                                                                                                              |
| Añadir datos (registro # 3) |                                                   |                                                                                                                                                                                                                              |
| Encrypt data file with key1 | 0003.4BK file (encrypted with key1)               | Encryption saves original files (including journal) in folder "Replaced files (Encrypting) YYY-DD-MM HH-MM-SS". When opening the encrypted data file, a new journal is created and a backup is made to activate this journal |
| Add data (record #4)        |                                                   |                                                                                                                                                                                                                              |
| Backup de la base de datos  | 0003.4BL and 0004.4BK files (encrypted with key1) | We can restore 0003.4BK and integrate 0003.4BL                                                                                                                                                                               |
| Añadir datos (registro # 5) |                                                   |                                                                                                                                                                                                                              |
| Backup de la base de datos  | 0004.4BL and 0005.4BK files (encrypted with key1) | We can restore 0003.4BK and integrate 0003.4BL + 0004.4BL. We can restore 0004.4BK and integrate 0004.4BL                                                                                                                    |
| Añadir datos (registro # 6) |                                                   |                                                                                                                                                                                                                              |
| Encrypt data file with key2 | 0006.4BK file (encrypted with key2)               | Encryption saves original files (including journal) in folder "Replaced files (Encrypting) YYY-DD-MM HH-MM-SS". When opening the encrypted data file, a new journal is created and a backup is made to activate this journal |
| Añadir datos (registro # 7) |                                                   |                                                                                                                                                                                                                              |
| Backup de la base de datos  | 0006.4BL and 0007.4BK files (encrypted with key2) | We can restore 0006.4BK and integrate 0006.4BL                                                                                                                                                                               |
| Añadir datos (registro # 8) |                                                   |                                                                                                                                                                                                                              |
| Backup de la base de datos  | 0007.4BL and 0008.4BK files (encrypted with key2) | We can restore 0006.4BK and integrate 0006.4BL + 0007.4BL. We can restore 0007.4BK and integrate 0007.4BL                                                                                                                    |
> When restoring a backup and integrating one or several .4BL files, the restored .4BK and .4BL files must have the same encryption key. During the integration process, if no valid encryption key is found in the 4D keychain when the .4BL file is integrated, an error is generated.
> 
> If you have stored successive data keys on the same external device, restoring a backup and integrating log files will automatically find the matching key if the device is connected.

---
id: encrypt
title: Página de cifrado
sidebar_label: Página de cifrado
---

Puede utilizar esta página para cifrar o *descifrar* (es decir, eliminar el cifrado) el archivo de datos, según el estado del atributo **Encriptable** definido para cada tabla de la base. For detailed information about data encryption in 4D, please refer to the "Encrypting data" section in the *Design Reference* manual.

Se crea una nueva carpeta cada vez que se realiza una operación de cifrado/descifrado. Se denomina "Replaced Files (Encrypting) *yyyy-mm-dd hh-mm-ss*> o "Replaced Files (Decrypting) *yyyy-mm-dd hh-mm-ss*".
> El cifrado sólo está disponible en [modo mantenimiento](overview.md#display-in-maintenance-mode). If you attempt to carry out this operation in standard mode, a warning dialog will inform you that the application will be closed and restarted in maintenance mode

**Atención:**
- Encrypting a data file is a lengthy operation. Muestra un indicador de progreso (que puede ser interrumpido por el usuario). Note also that an application encryption operation always includes a compacting step.
- Cada operación de cifrado produce una copia del archivo de datos, lo que aumenta el tamaño de la carpeta de la aplicación. Es importante tener esto en cuenta (especialmente en macOS, donde las aplicaciones 4D aparecen como paquetes) para que el tamaño de la aplicación no aumente excesivamente. Mover o eliminar manualmente las copias del archivo original dentro del paquete puede ser útil para minimizar el tamaño del paquete.

## Cifrar datos por primera vez
Para cifrar los datos por primera vez con el CSM es necesario seguir los siguientes pasos:

1. En el editor de estructuras, marque el atributo **Encriptable** de cada tabla cuyos datos desee encriptar. Ver la sección "Propiedades de las tablas".
2. Abra la página de encriptación del CSM. If you open the page without setting any tables as **Encryptable**, the following message is displayed in the page: ![](assets/en/MSC/MSC_encrypt1.png) Otherwise, the following message is displayed: ![](assets/en/MSC/MSC_encrypt2.png)<p> This means that the **Encryptable** status for at least one table has been modified and the data file still has not been encrypted. **Nota: **El mismo mensaje se muestra cuando el estado **Encriptable** se ha modificado en un archivo de datos ya encriptado o después de que el archivo de datos haya sido desencriptado (ver más abajo).
3. Haga clic en el botón Encriptar imagen.  
   <img src="assets/es/MSC/MSC_encrypt3.png" alt=" />  
   Se le pedirá que introduzca una frase secreta para su archivo de datos: ![](assets/es/MSC/MSC_encrypt4.png) La frase secreta se utiliza para generar la llave de cifrado de los datos. A passphrase is a more secure version of a password and can contain a large number of characters. For example, you could enter a passphrases such as "We all came out to Montreux" or "My 1st Great Passphrase!!" For example, you could enter a passphrases such as "We all came out to Montreux" or "My 1st Great Passphrase!!" The security level indicator can help you evaluate the strength of your passphrase: ![](assets/en/MSC/MSC_encrypt5.png) (deep green is the highest level)
4. Enter to confirm your secured passphrase.

The encrypting process is then launched. If the MSC was opened in standard mode, the application is reopened in maintenance mode.

4D offers to save the encryption key (see [Saving the encryption key](#saving-the-encryption-key) below). You can do it at this moment or later. You can also open the encryption log file.

If the encryption process is successful, the Encrypt page displays Encryption maintenance operations buttons.

**Warning:** During the encryption operation, 4D creates a new, empty data file and fills it with data from the original data file. Records belonging to "encryptable" tables are encrypted then copied, other records are only copied (a compacting operation is also executed). If the operation is successful, the original data file is moved to a "Replaced Files (Encrypting)" folder. If you intend to deliver an encrypted data file, make sure to move/remove any unencrypted data file from the application folder beforehand.

## Encryption maintenance operations
When an application is encrypted (see above), the Encrypt page provides several encryption maintenance operations, corresponding to standard scenarios. ![](assets/en/MSC/MSC_encrypt6.png)


### Providing the current data encryption key
For security reasons, all encryption maintenance operations require that the current data encryption key be provided.

- If the data encryption key is already loaded in the 4D keychain(1), it is automatically reused by 4D.
- If the data encryption key is not found, you must provide it. The following dialog is displayed: ![](assets/en/MSC/MSC_encrypt7.png)

At this step, you have two options:
- enter the current passphrase(2) and click **OK**. O
- connect a device such as a USB key and click the **Scan devices** button.

(1) The 4D keychain stores all valid data encrpytion keys entered during the application session.   
(2) The current passphrase is the passphrase used to generate the current encryption key.

In all cases, if valid information is provided, 4D restarts in maintenance mode (if not already the case) and executes the operation.

### Re-encrypt data with the current encryption key

This operation is useful when the **Encryptable** attribute has been modified for one or more tables containing data. In this case, to prevent inconsistencies in the data file, 4D disallows any write access to the records of the tables in the application. Re-encrypting data is then necessary to restore a valid encryption status.

1. Click on **Re-encrypt data with the current encryption key**.
2. Enter the current data encryption key.

The data file is properly re-encrypted with the current key and a confirmation message is displayed: ![](assets/en/MSC/MSC_encrypt8.png)

### Change your passphrase and re-encrypt data
This operation is useful when you need to change the current encryption data key. For example, you may need to do so to comply with security rules (such as requiring changing the passphrase every three months).

1. Click on **Change your passphrase and re-encrypt data**.
2. Enter the current data encryption key.
3. Enter the new passphrase (for added security, you are prompted to enter it twice): ![](assets/en/MSC/MSC_encrypt9.png) The data file is encrypted with the new key and the confirmation message is displayed. ![](assets/en/MSC/MSC_encrypt8.png)

### Desencriptar todos los datos
This operation removes all encryption from the data file. If you no longer want to have your data encrypted:

1. Click on **Decrypt all data**.
2. Enter the current data encryption key (see Providing the current data encryption key).

The data file is fully decrypted and a confirmation message is displayed: ![](assets/en/MSC/MSC_encrypt10.png)
> Once the data file is decrypted, the encryption status of tables do not match their Encryptable attributes. To restore a matching status, you must deselect all **Encryptable** attributes at the database structure level.

## Saving the encryption key

4D allows you to save the data encryption key in a dedicated file. Storing this file on an external device such a USB key will facilitate the use of an encrypted application, since the user would only need to connect the device to provide the key before opening the application in order to access encrypted data.

You can save the encryption key each time a new passphrase has been provided:

- when the application is encrypted for the first time,
- when the application is re-encrypted with a new passphrase.

Successive encryption keys can be stored on the same device.

## Archivo de historial
After an encryption operation has been completed, 4D generates a file in the Logs folder of the application. It is created in XML format and named "*ApplicationName_Encrypt_Log_yyyy-mm-dd hh-mm-ss.xml*" or "*ApplicationName_Decrypt_Log_yyyy-mm-dd hh-mm-ss.xml*".

An Open log file button is displayed on the MSC page each time a new log file has been generated.

The log file lists all internal operations executed pertaining to the encryption/decryption process, as well as errors (if any).

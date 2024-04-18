---
id: encrypt
title: Page chiffrement
sidebar_label: Page chiffrement
---

You can use this page to encrypt or _decrypt_ (i.e. remove encryption from) the data file, according to the **Encryptable** attribute status defined for each table in the database.

:::info

For detailed information about data encryption in 4D, please refer to the [Encrypting data](https://doc.4d.com/4Dv20/4D/20/Encrypting-data.300-6263735.en.html) section in the _Design Reference_ manual. You can also read the [A deeper look into 4D data encryption](https://blog.4d.com/a-deeper-look-into-4d-data-encryption/) blog post.

:::

Un nouveau dossier est créé à chaque opération de chiffrement/déchiffrement. It is named "Replaced Files (Encrypting) _yyyy-mm-dd hh-mm-ss_> or "Replaced Files (Decrypting) _yyyy-mm-dd hh-mm-ss_".

> Encryption is only available in [maintenance mode](overview.md#display-in-maintenance-mode). Si vous tentez d’effectuer cette opération en mode standard, une boîte de dialogue d’alerte vous prévient que l'application va être fermée puis relancée en mode maintenance

**Warning:**

- Le chiffrement d'un fichier de données est une opération de longue durée. Un indicateur de progression de l'opération s'affiche (et peut être interrompu par l'utilisateur). À noter également que le chiffrement d'une application comprend toujours une étape de compactage.
- Chaque opération de chiffrement génère une copie du fichier de données, ce qui augmente la taille du dossier de l'application. Il est important de prendre cela en considération (notamment sous macOS, où les applications 4D apparaissent sous forme de paquet) afin de ne pas augmenter excessivement la taille de l'application. Le déplacement ou la suppression manuels des copies du fichier original dans le paquet peut aider à réduire la taille du paquet.

## Chiffrer des données pour la première fois

Trois étapes sont nécessaires pour effectuer le tout premier chiffrement de vos données à l'aide du CSM :

1. In the Structure editor, check the **Encryptable** attribute for each table whose data you want to encrypt. Consultez la section "Propriétés des tables".
2. Ouvrez la page Chiffrement du CSM.
   If you open the page without setting any tables as **Encryptable**, the following message is displayed in the page:
   ![](../assets/en/MSC/MSC_encrypt1.png)
   Otherwise, the following message is displayed:
   ![](../assets/en/MSC/MSC_encrypt2.png)<p>
   This means that the **Encryptable** status for at least one table has been modified and the data file still has not been encrypted.
   \*\*Note: \*\*The same message is displayed when the **Encryptable** status has been modified in an already encrypted data file or after the data file has been decrypted (see below).</p>
3. Click on the Encrypt picture button.\
   ![](../assets/en/MSC/MSC_encrypt3.png)\
   You will be prompted to enter a passphrase for your data file:
   ![](../assets/en/MSC/MSC_encrypt4.png)
   The passphrase is used to generate the data encryption key. Une phrase secrète est une version plus sécurisée d'un mot de passe et peut contenir un grand nombre de caractères. Par exemple, vous pouvez saisir une phrase secrète telle que "Nous sommes tous venus à Montreux" ou "Ma première phrase de passe géniale !!".
   The security level indicator can help you evaluate the strength of your passphrase:
   ![](../assets/en/MSC/MSC_encrypt5.png)
   (deep green is the highest level)
4. Tapez sur Entrée pour confirmer votre phrase secrète sécurisée.

Le processus de chiffrement est alors lancé. Si le CSM est ouvert en mode standard, l'application est rouverte en mode maintenance.

4D offers to save the encryption key (see [Saving the encryption key](#saving-the-encryption-key) below). Vous pouvez la sauvegarder à ce moment précis ou bien ultérieurement. Vous pouvez également ouvrir le fichier d'historique du chiffrement.

Si le processus de chiffrement est réussi, la page Chiffrement affiche les boutons Opérations de maintenance liées au chiffrement.

**Warning:** During the encryption operation, 4D creates a new, empty data file and fills it with data from the original data file. Les enregistrements correspondant aux tables "chiffrées" sont chiffrés puis copiés ; les autres enregistrements sont uniquement copiés (une opération de compactage est également exécutée). Si l'opération est réussie, le fichier de données original est déplacé vers un dossier "Replaced Files (Encrypting)". Si vous souhaitez transmettre un fichier de données chiffré, assurez-vous d'avoir préalablement déplacé/retiré tout fichier de données non chiffrées du dossier de l'application.

## Opérations de maintenance liées au chiffrement

When an application is encrypted (see above), the Encrypt page provides several encryption maintenance operations, corresponding to standard scenarios.
![](../assets/fr/MSC/MSC_encrypt6.png)

### Fournir la clé de chiffrement des données actuelle

Pour des raisons de sécurité, toutes les opérations de maintenance liées au chiffrement nécessitent la clé de chiffrement des données actuelle.

- Si la clé de chiffrement des données est déjà chargée dans le trousseau 4D(1), elle est automatiquement réutilisée par 4D.
- Si la clé de chiffrement des données n'est pas identifiée, vous devez la fournir. The following dialog is displayed:
  ![](../assets/en/MSC/MSC_encrypt7.png)

À ce stade, deux options s'offrent à vous :

- enter the current passphrase(2) and click **OK**.
  OU
- connect a device such as a USB key and click the **Scan devices** button.

(1) The 4D keychain stores all valid data encrpytion keys entered during the application session.\
(2) The current passphrase is the passphrase used to generate the current encryption key.

Dans tous les cas, si des informations valides sont fournies, 4D redémarre en mode maintenance (si ce n'est pas déjà le cas) et exécute l'opération.

### Re-chiffrer les données à l'aide de la clé de chiffrement actuelle

This operation is useful when the **Encryptable** attribute has been modified for one or more tables containing data. Dans ce cas, afin d'éviter toute incohérence dans le fichier de données, 4D désactive l'accès en écriture aux enregistrements des tables dans l'application. Il est alors nécessaire de re-chiffrer les données pour restituer un statut de chiffrement valide.

1. Click on **Re-encrypt data with the current encryption key**.
2. Saisissez la clé de chiffrement des données actuelle.

The data file is properly re-encrypted with the current key and a confirmation message is displayed:
![](../assets/en/MSC/MSC_encrypt8.png)

### Changer votre phrase secrète et re-chiffrer les données

Cette opération est utile en cas de modification de la clé de chiffrement des données actuelle. Par exemple, il se peut que vous la modifiiez pour vous conformer aux règles de sécurité (telles que la nécessité de modifier la phrase secrète tous les trois mois).

1. Click on **Change your passphrase and re-encrypt data**.
2. Saisissez la clé de chiffrement des données actuelle.
3. Enter the new passphrase (for added security, you are prompted to enter it twice):
   ![](../assets/en/MSC/MSC_encrypt9.png)
   The data file is encrypted with the new key and the confirmation message is displayed.
   ![](../assets/fr/MSC/MSC_encrypt8.png)

### Enlever le chiffrement de toutes les données

Cette opération supprime tout le chiffrement du fichier de données. Si vous ne souhaitez plus que vos données soient chiffrées :

1. Click on **Decrypt all data**.
2. Saisissez la clé de chiffrement de données actuelle (voir Fournir la clé de chiffrement des données actuelle).

The data file is fully decrypted and a confirmation message is displayed:
![](../assets/en/MSC/MSC_encrypt10.png)

> Une fois que le fichier de données est déchiffré, le statut de chiffrement des tables ne correspond plus à leur attribut Chiffrable. To restore a matching status, you must deselect all **Encryptable** attributes at the database structure level.

## Sauvegarder la clé de chiffrement

4D vous permet de sauvegarder la clé de chiffrement des données dans un fichier créé à cet effet. The file name must have the `.4DKeyChain` extension, for example "myKeys.4DKeyChain". La sauvegarde de ce fichier sur un appareil externe tel qu'une clé USB facilitera l'utilisation d'une application chiffrée, étant donné que l'utilisateur n'aurait plus qu'à connecter cet appareil pour fournir la clé avant d'ouvrir l'application et accéder aux données chiffrées.

Vous pouvez sauvegarder la clé de chiffrement chaque fois qu'une nouvelle phrase secrète est fournie :

- lorsque l'application est chiffrée pour la première fois,
- lorsque l'application est re-chiffrée avec une nouvelle phrase secrète.

Les clés de chiffrement successives peuvent être sauvegardées sur le même appareil.

:::caution

Storing the data encryption key file at the first level of the device is mandatory when you use the  [Automatic restore and log integration feature](../Backup/settings.md#automatic-restore-and-log-integration). Lorsque la séquence de restauration est déclenchée, 4D doit avoir accès au fichier de la clé de cryptage, sinon une erreur se produit.

:::

## Fichier d'historique

Une fois qu'une opération de chiffrement est terminée, 4D génère un fichier dans le dossier Logs de l'application. It is created in XML format and named "_ApplicationName_Encrypt_Log_yyyy-mm-dd hh-mm-ss.xml_" or "_ApplicationName_Decrypt_Log_yyyy-mm-dd hh-mm-ss.xml_".

Chaque fois qu'un nouveau fichier d'historique est généré, un bouton Voir le compte rendu s'affiche dans la page CSM.

Le fichier d'historique liste toutes les opérations internes liées au processus de chiffrement/déchiffrement qui ont été exécutées, ainsi que les erreurs (le cas échéant).

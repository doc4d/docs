---
id: print
title: Imprimer
---


## Settings

Permet de définir des paramètres d'impression spécifiques pour le formulaire. Cette fonctionnalité est utile pour afficher les limites de pages d'impression dans l'éditeur de formulaire.

> **Compatibilité** : Même si ces paramètres sont pris en compte lors de l'impression du formulaire en mode Application, il est déconseillé de s'appuyer sur cette fonctionnalité pour stocker les paramètres d'impression du formulaire, en raison des limitations liées à la plateforme et au pilote. It is highly recommended to use the 4D commands `Print settings to BLOB`/`BLOB to print settings` which are more powerful.

You can modify the following print settings:

*   Paper format
*   Paper orientation
*   Page scaling


> Available options depend on the system configuration.




#### Grammaire JSON

| Le nom      | Type de données | Valeurs possibles                                                                    |
| ----------- | --------------- | ------------------------------------------------------------------------------------ |
| pageFormat  | Objet           | Available print properties: paperName, paperWidth, paperHeight, orientation, scale   |
| paperName   | Chaîne          | "A4", "US Letter"...                                                                 |
| paperWidth  | Chaîne          | Used if a paper named paperName was not found. Requires unit suffix: pt, in, mm, cm. |
| paperHeight | Chaîne          | Used if a paper named paperName was not found. Requires unit suffix: pt, in, mm, cm. |
| orientation | Chaîne          | "landscape" (default is "portrait")                                                  |
| scale       | number          | minimum : 0                                                                          |


---









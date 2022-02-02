---
id: overview
title: Aperçu
---

Les Paramètres configurent le fonctionnement du projet en cours. Ces paramètres peuvent être différents pour chaque projet. Ils comprennent les ports d'écoute, les configurations de sauvegarde, les options de sécurité, les paramètres Web, etc.

![](assets/en/settings/main.png)

> 4D fournit un autre ensemble de paramètres, appelés **Préférences**, qui s'appliquent à l'application 4D IDE. Pour plus d'informations, reportez-vous à la section [Préférences](../Preferences/general.md).


## Accès aux paramètres

Vous pouvez accéder à la boîte de dialogue Paramètres :

-   en utilisant l'option de menu **Développement > Paramètres...**
-   en cliquant sur **Paramètres** dans la barre d'outils 4D
-   sur 4D Server, via l'option de menu **Edition > Paramètres...**

Lorsque le mode [**Paramètres utilisateur** est activé](../Desktop/user-settings.md), **Paramètres...** est renommé **Paramètres de la structure...** et deux commandes de menu supplémentaires sont disponibles à chaque emplacement :

-   **Paramètres utilisateur...** vous donne accès aux paramètres qui peuvent être stockés en externe dans un fichier utilisateur. Si ceux-ci sont modifiés, ils sont utilisés à la place des paramètres de structure.
-   **User Settings for Data File...** gives you access to settings that can be stored externally in a user file attached to the current data file. If they are modified, they are used instead of user or structure settings.

### Locking information

Locking can occur in both Project and Client/server modes when:

-   The *settings.4DSettings* file is 'Read-only' (Projects only). Modifying a setting will display an alert to unlock it, if possible.
-   Two or more users attempt to modify the same settings at the same time. The settings cannot be used until the first user frees it by closing the window. (Client/server only)

In both cases, the settings can be opened in 'Read-only', but cannot be used until the lock is removed.



## Customizing parameters

In the Settings dialog boxes, parameters whose values have been modified appear **in bold**:

![](assets/en/settings/customize-settings.png)

Parameters indicated as customized may have been modified directly in the dialog box, or may have been modified previously in the case of a converted project.

Un paramètre apparaît toujours en gras même lorsque sa valeur est remplacée manuellement par ses valeurs par défaut. Ainsi, il est toujours possible d'identifier visuellement les paramètres qui ont été personnalisés.

Most of the settings are applied immediately. However, a few of them (such as the Startup environment setting) only take effect when the database is restarted. In this case, a dialog box appears to inform you that the change will take effect at the next startup.


## Resetting the settings

To reset the parameters to their default values and remove the bold style indicating that they have been customized, click **Reset to factory settings**.

Ce bouton réinitialise tous les paramètres de la page courante. Il devient actif lorsqu'au moins un paramètre a été modifié sur la page courante.

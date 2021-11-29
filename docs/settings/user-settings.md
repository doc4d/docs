---
id: user-settings
title: User settings
---

You can generate an external file containing custom settings. When this functionality is enabled, the settings contained in the external file (called User settings) are used instead of the settings stored in the project's structure file (called Structure settings).

This means that you can keep custom settings between updates of your 4D applications, or that you can manage different settings for the same 4D application deployed on several different sites. It also makes it possible to use programming to manage setting files using XML.

4D can generate and use two types of user settings:

-   **User Settings (standard)**:
    They are used instead of structure settings for any data file opened with the application.

-   **User Settings for Data file**:
    They can be defined specifically for each data file used with your application, configuring for example the port ID or the server cache.

    With this option, you can easily deploy and update several copies of the same application with several data files, each containing different settings. 
    
    Consider for example the following configuration, where an application is duplicated and each copy uses a different Port ID setting. If this user setting is linked to the data file, you will be able to update the application without having to manually change the Port ID:

    ![](assets/en/settings/user-settings-config.png)

## Externalizing settings

To be able to externalize user settings, you need to check the **Settings** > **Security** > **Enable User Settings in External File** option:

When you check this option, the settings are separated into three dialog boxes: 
* **Structure Settings**
* **User Settings**
* **User Settings for Data file**

You can access these dialog boxes using the **Design > Settings...** menu or the **Settings** button in the toolbar:

![](assets/en/settings/user-settings-dialog.png)

When the data file is located at the same level as the structure file (default configuration when creating a database), **User Settings for Data file...** is not displayed.

You can also access these dialog boxes using the [OPEN SETTINGS WINDOW](https://doc.4d.com/4dv19R/help/command/en/page903.html) command with the appropriate settingsType selector.

The Structure Settings dialog box is identical to the standard Settings, and provides access to all its properties.

### User Settings and User Settings for Data file

The **User Settings** and **User Settings for Data File** dialog boxes contain a selection of relevant properties that can be externalized:

![](assets/en/settings/user-settings-2.png)

The following table lists the pages of settings found in the **User Settings** and **User Settings for Data File** dialog boxes and describes their main differences with respect to standard settings:

| **Page of Database Settings** | **Page of User Settings** | **Page of User Settings for Data File**|
| --- | --- | --- |
| [General page](./general.md) | N/a | N/a |
| [Interface page](./interface.md) | Identical to standard settings | Identical to standard settings |
| [Compiler page](./compiler.md) | N/a | N/a |
| [Database/Data storage page](./database.md#data-storage) | N/a | N/a |
| [Database/Memory page](./database.md#memory) | Identical to standard settings | Identical to standard settings |
| [Moving page](./moving.md) | N/a | N/a |
| [Backup/Scheduler page](./backup.md#scheduler) | N/a | Identical to standard settings |
| [Backup/Configuration page](./backup.md#configuration) | N/a | Identical to standard settings |
| [Backup/Backup & Restore page](./backup.md/backup-restore) | N/a | Identical to standard settings |
| [Client-server/Network options page](./client-server.md/#network-options) | Identical to standard settings | Identical to standard settings |
| [Client-server/IP configuration page](./client-server.md/#ip-configuration) | Identical to standard settings | Identical to standard settings |
| [Web/Configuration page](./web.md#configuration) | Identical to standard settings | Identical to standard settings |
| [Web/Options (I) page](./web.md#options) | Identical to standard settings | Identical to standard settings |
| [Web/Options (II) page](./web.md#options-ii) | Identical to standard settings | Identical to standard settings |
| [Web/Log (type) page](./web.md#log) | Identical to standard settings | Identical to standard settings |
| [Web/Log (backup) page](./web.md#log) | Identical to standard settings | Identical to standard settings |
| [Web/Web Services page](./web.md#web-services) | Method prefixing option not available | Method prefixing option not available |
| [SQL page](./sql.md) | Identical to standard settings | Identical to standard settings |
| [PHP page](./php.md) | Identical to standard settings | Identical to standard settings |
| [Security page](./security.md) | N/a | N/a |
| [Compatibility page](./compatibility.md) | N/a | N/a |

When you edit settings in this dialog box, they are automatically stored in the corresponding *settings.4DSettings* file (see below).

### SET DATABASE PARAMETER and user settings  

Some of the user settings are also available through the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) command. User settings are parameters with the **Kept between two sessions** property set to **Yes**.

When the **User Settings** feature is enabled, user settings edited by the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) command are automatically saved in the user settings for the data file.

> **Note:** Table sequence number is an exception; this setting value is always saved in the data file itself.

## settings.4DSettings files  

When you check the **Settings** > **Enable User Settings in External File** option, user settings files are automatically created. Their location depends on the type of user settings defined.

### User Settings (standard)  

The standard user settings file is automatically created and placed in a settings folder at the following location:

`ProjectFolder/Settings/settings.4DSettings`

... where ProjectFolder is the name of the folder containing the project structure file.

In merged applications, the user settings file is placed at the following location:
* In single-user versions: ProjectFolder/Database/Settings/settings.4DSettings
* In client/server versions: ProjectFolder/Server Database/Settings/settings.4DSettings

### User Settings for Data File 

The user settings file linked to the data file is automatically created and placed in a settings folder at the following location:

`DataFolder/Settings/settings.4DSettings`

... where DataFolder is the name of the folder containing the current data file of the application.

> **Note:** When the data file is located at the same level as the structure file (default when creating a database), structure-based and data-based user settings files share the same location and file. The **User Settings for Data File...** menu command is not proposed.

User settings files are XML files; they can be read and modified using integrated 4D XML commands or using an XML editor. This means that you can manage settings by programming, particularly in the context of applications compiled and merged with 4D Volume Desktop. 

When you modify this file by programming, the changes are only taken into account the next time the database is opened. 

## Priority of settings 

Database settings can be stored at three levels. Each setting defined at one level overrides the same setting defined at a previous level, if any:

| **Priority level** | **Name** | **Location** | **Comments** |
|---|---|---|---|
| 3 (lowest) | Structure settings (or Database settings when "User settings" feature not enabled) | ***settings.4DSettings*** file in the Sources folder (project databases) or in the Settings folder as the same level as the structure file (binary databases) | Unique location when user settings are not enabled. Applied to all copies of the application.  |
| 2 | User settings (all data files) | ***settings.4DSettings*** file in the Settings folder at the same level as the Project folder (project databases) or as the structure file (binary databases) | Overrides Structure settings. Stored within the application package. |
| 1 (highest) | User settings (current data file) | ***settings.4DSettings*** file in the Settings folder at the same level as the data file | Overrides Structure settings and User settings. Applied only when the linked data file is used with the application. |

Keep in mind that user settings files can only contain a subset of relevant settings, while the structure file contains all custom settings, including core settings.
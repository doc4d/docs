---
id: overview
title: Overview
---

Database settings configure how the current database functions. These parameters may be different for each database. They include the listening ports, access rights to the Design environment, SQL configurations, etc.

## Standard vs User Settings mode 

4D provides two modes of operation for these settings:

*   **Standard mode**, where all settings are stored in the database structure file and are applied in all cases (default mode).
*   **User settings mode**, where part of the custom settings are stored in an external file that is used for the database or for each data file instead of the structure settings. You enable this mode using an option located on the [Security page](./security.md) of the Database settings. This chapter describes each page of the settings as displayed in standard mode. The "user settings" mode is detailed in [User settings](./user-settings.md).

Most of the settings are applied immediately. However, a few of them (such as the Start-up environment setting) only take effect when the database is restarted. In this case, a dialog box appears to inform you that the change will take effect at the next startup.

**4D Server:** Object locking occurs when two or more users try to modify the settings in the Database Settings dialog box at the same time. Only one user can use the Database Settings dialog box at a time.

**Note**: 4D provides another set of parameters that are applied to the 4D application: the user preferences. For more information, refer to the [Preferences](../Preferences/general.md) chapter.

### Locking information  

Locking can occur in both project and client/server modes when:

-   The *settings.4DSettings* file is 'Read-only' (Projects only). Modifying a setting will display an alert to unlock it, if possible.
-   Two or more users attempt to modify the same settings at the same time. The settings cannot be used until the first user frees it by closing the window. (Client/server only)

In both cases, the settings can be opened in 'Read-only', but cannot be used until the lock is removed.

## Accessing the settings

You can access the Database Settings dialog box:

-   using the **Design > Database Settings...** menu option
-   by clicking **Settings** on the 4D toolbar
-   on 4D Server, using the **Edit > Database Settings...** menu option

**Note:** In "User settings" mode, several menu commands are available at each location:

-   **Structure Settings...** which is the same as the **Database Settings...** command in standard mode
-   **User Settings...** which gives you access to settings that can be stored externally in a user file and that are used instead of structure settings if they are modified.
-   **User Settings for Data File...** which gives you access to settings that can be stored externally in a user file attached to the current data file, and that are used instead of user or structure settings if they are modified.

For more information, refer to [User settings](./user-settings).

## Customizing parameters

In the Preferences and Settings dialog boxes, parameters whose values have been modified appear in bold:

![](assets/en/settings/customize-settings.png)   

Preferences indicated as customized may have been modified directly in the dialog box, or may have been modified previously in the case of a converted database. 

A parameter still appears in bold even when its value is replaced manually with its default values. This way it is always possible to visually identify any parameters that have been customized.
## Resetting the settings

To reset the parameters to their default values and remove the bold style indicating that they have been customized, click **Factory settings**. 
 
This button resets all the parameters of the current page. It becomes active when at least one parameter has been modified on the current page.


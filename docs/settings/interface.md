---
id: interface
title: Interface-page
---

 
You use the Interface page to set various options related to the database interface.

## General  
You use this area to set various options concerning database display.

![](assets/en/settings/interface-page.png)

### Font to use with the MESSAGE command  

You use the **Select...** button to set the font and size for the characters used by the `MESSAGE` command.

The default font and its size depend on the platform where 4D is running.

**Note:** This property also affects the following parts of 4D:

-   certain preview areas of the Explorer
-   the ruler of the Form editor

Other options configure the display of various windows in the Application mode.

-   **Splash screen**: When this option is deselected, the splash screen of the current menu bar does not appear in the Application mode (see [Managing menu bars](https://doc.4d.com/4Dv19/4D/19/Managing-menu-bars.300-5416879.en.html)). When you hide this window, it is up to you to manage the display of all your windows by programming, for example in the `On Startup` database method.

-   **Flushing progress**: When this option is checked, 4D displays a window at the bottom left of the screen while the data in the cache is flushed. Since this operation momentarily blocks user actions, displaying this window lets them know that flushing is underway.

-   **Note:** You can set the frequency for cache flushing in **Settings** > **Database** > **Memory**.

-   **Printing progress**: Lets you enable or disable the display of the printing progress dialog box when printing.

-   **Use SDI mode on Windows**: When this option checked, 4D enables automatically the SDI mode (Single-Document Interface) in your merged application if executed in a supported context.

**Note:** This option can be selected on macOS but will be ignored when the application is executed on this platform.

### Appearance  

This menu lets you select the color scheme to use at the main application level. A color scheme defines a global set of interface colors for texts, backgrounds, windows, etc., used in your forms.

**Note:** This option only works on macOS. On Windows, the "Light" scheme is always used.

The following schemes are available:

-   **Light**: the application will use the Default Light Theme
    ![](assets/en/settings/light-appearance.png)
-   **Dark**: the application will use the Default Dark Theme
    ![](assets/en/settings/dark-appearance.png)
-   **Inherited** (default): the application will inherit from the higher priority level (i.e., OS user preferences)

**Note:** Default themes can be handled using CSS. For more information, please refer to the [Media Queries](../FormEditor/stylesheets.md#media-queries) section. 

The main application scheme will be applied to forms by default. However, it can be overriden:

-   by the `SET APPLICATION COLOR SCHEME` command at the working session level;
-   using by the [Color Scheme](../FormEditor/propertiesForm.html#color-scheme) form property at each form level (highest priority level). **Note:** When printed, forms always use the "Light" scheme.

## Shortcuts  

You use the Shortcuts area for viewing and modifying default shortcuts for three basic 4D operations: Accept input form, Cancel input form and Add to subform. These shortcuts are identical for both platforms. Icons in the form of keys indicate the corresponding Windows and Mac OS keys. 

The default shortcuts are as follows:

-   Accept input form: Enter
-   Cancel input form: Esc
-   Add to subform: **Ctrl+Shift+/** (Windows) or **Command+Shift+/** (Mac OS)

To change the shortcut of an operation, click the corresponding **Edit** button. The following dialog box appears:

![](assets/en/settings/.png)

To change the shortcut, type the new key combination on your keyboard and click OK. If you prefer not to have a shortcut for an operation, click the Clear button.


---
id: moving
title: Moving page
---

You use the Moving page to pre-configure the movement of objects in the database in Design mode. 4D applies these settings to objects that are dropped/pasted into this database when it is used as a destination database.

## Default actions during the copy of dependent objects  

These options configure the moving of dependent objects, in other words, the objects linked to the forms being moved (see [Overview](https://doc.4d.com/4Dv19/4D/19/Overview.300-5416717.en.html)). You can set an action for each type of dependent object. 

These default actions are automatically applied if the moving of the objects does not cause any conflicts and if the **Only in case of name conflict** display option is selected (see next section). Otherwise, they will be selected by default in the moving dialog box. 

4D provides the **Ignore**, **Create (Rename if necessary)**, **Create (Replace if necessary)** as well as the **Use another object** actions for each type of object. Note that other more specific context actions are provided in the [Moving dialog box](https://doc.4d.com/4Dv19/4D/19/Moving-dialog-box.300-5416718.en.html) when it is displayed. Here is a description of these options:

-   **Ignore**: A dependent object of this type is never copied into the destination database. In the moving dialog box, the **Do not create** action is proposed by default.
-   **Create (Rename if necessary)**: A dependent object of this type is always copied into the destination database. In the moving dialog box, the **Create** action is proposed by default if the object does not already exist in the destination database.
    
    In the case of a name conflict with an object in the destination database, the object being copied is renamed by adding the suffix "_X," in accordance with the principle applied to the main objects. In this case, the **Rename** action is proposed by default in the moving dialog box.
-   **Create (Replace if necessary)**: A dependent object of this type is always copied into the destination database. In the moving dialog box, the **Create** action is proposed by default if the object does not already exist in the destination database.
    
    In the case of a name conflict with an object in the destination database, the object being copied replaces the existing object. In this case, the **Replace** action is proposed by default in the moving dialog box.
-   **Use another object**: This option causes the systematic display of the moving dialog box, even if the "Only in case of name conflict" option is selected. When moving objects, you must designate an object of the destination database to use instead of the dependent object being copied.

**Note:** These options are only taken into account for dependent objects. For the objects being moved, the default action is of the **Create (Rename if necessary)** type.

-   **Display of Moving Dialog**: This menu configures the display of the moving dialog box.
    When the **Always** option is selected, the dialog box appears each time objects are being moved, which permits more precise control over the operation. If the **Only in case of name conflict** option is selected, the dialog only appears when an object being moved (whether a dependent object or a main one) has a name conflict with an object of the destination database.
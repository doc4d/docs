---
id: general
title: General page
---

The General page contains various options to configure generic parameters for the 4D database.

### Design  

This area contains the **Display toolbar** option. When it is checked, the 4D toolbar is displayed in the Design environment. 

### General  

You use this area to set various options concerning database startup and operation.

### Startup Environment  

You use this menu to select the default startup mode for the database: **Design** or **Application**. Unless specified, 4D opens by default in the Design environment if a password access system is not activated. 

> You can choose to open the database in compiled or interpreted in the opening dialog box, see the [GET USER LIST](https://doc.4d.com/4dv19R/help/command/en/page609.html) command description.

### Activate Automatic Comments  

This option, associated with the area just below it, lets you activate and set the automatic comment system in your database. These parameters are described in [Using comments](https://doc.4d.com/4Dv19/4D/19/Using-comments.300-5416714.en.html).

Any comments placed in the header of a method using the // characters are displayed as help tips when this method is referenced in another method. This function, which is especially useful for documenting user methods, is not compatible with comments placed in the Explorer. If you want to use method headers for documentation areas, do not activate the automatic comments.

### CPU Priority  

**Compatibility note**: *This area is only displayed in converted databases where a custom value has previously* been set. This setting is now obsolete. *When the area is displayed, in most cases we recommend clicking on the **Factory settings** button in order to reinitialize these parameters and remove them from the dialog box.*


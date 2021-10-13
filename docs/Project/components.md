---
id: components
title: Extensions
---

The 4D [project architecture](Project/architecture) is modular. You can provide additional functionalities to your 4D projects by installing [**components**](Concepts/components.md) and [**plug-ins**](Concepts/plug-ins). Components are made of 4D code, while plug-ins can be built using any language. 


## 4D Component Library

4D includes a set of built-in 4D components, that you can see in the **Component Methods** theme of the Explorer's Methods page. 


|Component Name|Description|Main Features
|---|---|---|
|4D Labels|Internal component required to build label templates||
|[4D Mobile App Server](https://github.com/4d-go-mobile/4D-Mobile-App-Server)|Set of utility classes and functions to authenticate, manage sessions, and develop mobile applications|`.Action`, `.Authentication`, `.PushNotification`, `.WebHandler`, Authentication with email confirmation|
|[4D NetKit](https://github.com/4d/4D-NetKit)|Set of tools to connect to third-party APIs|`OAuth2Provider` class, `New OAuth2 provider`, `OAuth2ProviderObject.getToken()` |
|[4D Progress](https://doc.4d.com/4Dv19/4D/19/4D-Progress.100-5461799.en.html)|Open one or more progress bars in the same window|`Progress New`, `Progress SET ON STOP METHOD`, `Progress SET PROGRESS`, ... |
|[4D SVG](https://doc.4d.com/4Dv19/4D/19/4D-SVG-Component.300-5462064.en.html)|Create and manipulate common svg graphic objects|`SVGTool_Display_viewer`, multiple `SVG_` methods |
|[4D ViewPro](ViewPro/overview)|Spreadsheet features in your forms|See [4D View Pro overview](ViewPro/getting-started)|
|[4D Widgets](https://doc.4d.com/4Dv19/4D/19/4D-Widgets.100-5462909.en.html)|Manage DatePicker, TimePicker, SearchPicker 4D widgets|`DatePicker calendar`, `DateEntry area`, `TimeEntry`, `SearchPicker SET HELP TEXT`, ...|
|[4D WritePro Interface](https://github.com/4d/4D-WritePro-Interface)|Manage [4D Write Pro](https://doc.4d.com/4Dv19R3/4D/19-R3/4D-Write-Pro-Reference.100-5606477.en.html) palettes|`WP CreatePreview`, `WP PictureSettings`, `WP ShowTabPages`, `WP SwitchToolbar`, `WP UpdateWidget`|


## Third-party components

You can develop and install your own 4D components. See [this section](Concepts/components.md) for more information. 

Many developers from the 4D community propose public 4D components that you can install and use in you projects.

Browse Github to have the [**list of public 4D components**](https://github.com/search?q=4d-component&type=Repositories).

### Documentation in the Explorer

When an installed component contains methods, they appear in the **Component Methods** theme of the Explorer's Methods page. 

Select a component method and click on the **Documentation** button of the Explorer to get information about it, [if any](documentation.md). 

![alt-text](assets/en/Project/compDoc.png)


## Plugins

Plugins do things that 4D does not natively (e.g., specific platform technology), or would be very hard to write just using 4D. A lot of functionnalities are covered by the existing 4D plug-in library. 

Browse Github to have the [**list of public 4D plugins**](https://github.com/search?q=4d-plugin&type=Repositories).



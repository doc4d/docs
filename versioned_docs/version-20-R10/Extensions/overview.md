---
id: overview
title: Extending 4D Applications
---

The 4D architecture is open and can be extended in different ways. If you need a feature that is not available natively in 4D, you can always integrate it into your application in a variety of ways, i.e.:

- [**System workers**](../API/SystemWorkerClass.md) allow the 4D code to call any external process (a shell command, PHP, any script, etc.) and monitor its execution.
- [**SQL commands**](../commands/theme/SQL) allow you to connect and use various SQL data sources.
- The [**built-in HTTP client**](../API/HTTPRequestClass.md) can request any HTTP server and process data.
- [**Web Areas**](../FormObjects/webArea_overview.md) can give access to various contents within your forms.  
- [**Components**](Concepts/components.md). Components are made of 4D code. 4D includes by default [a set of built-in 4D components](../Project/components.md#preinstalled-4d-components). You can also [develop your own 4D components](develop-components.md), or use third-party components. Many developers from the 4D community have shared 4D components (browse Github to have a list of public 4D components gathered with the [`4d-component`](https://github.com/topics/4d-component) topic). 
- [**Plug-ins**](../Concepts/plug-ins.md). Plug-ins can be built using any language. Plugins do things that 4D does not natively (e.g., specific platform technology), or would be very hard to write just using 4D. As described in [this page](develop-plug-ins.md), you can develop your own plug-ins. A lot of functionnalities are covered by the existing 4D plug-ins. Browse Github to have a list of public 4D plugins gathered with the [`4d-plugin`](https://github.com/topics/4d-plugin) topic.


## 4D components

4D includes a set of built-in 4D components, that can be found on the [4D github repository](https://github.com/4d). 


|Component|Description|Main Features| 
|---|---|---|
|[4D AiIKit](https://github.com/4d/4D-AIKit)|Set of classes to connect to third-party OpenAI APIs|`OpenAIChat`, `OpenAIImage`...|
|[4D Labels](https://github.com/4d/4D-Labels)|Internal component required to build label templates||
|[4D NetKit](https://developer.4d.com/4D-NetKit)|Set of web service tools to connect to third-party APIs|`OAuth2Provider` class, `New OAuth2 provider`, `OAuth2ProviderObject.getToken()` |
|[4D Progress](https://github.com/4d/4D-Progress)|Open one or more progress bars in the same window|`Progress New`, `Progress SET ON STOP METHOD`, `Progress SET PROGRESS`, ... |
|[4D SVG](https://github.com/4d/4D-SVG)|Create and manipulate common svg graphic objects|`SVGTool_Display_viewer`, multiple `SVG_` methods |
|[4D ViewPro](ViewPro/getting-started.md)|Spreadsheet features in your forms|See [4D View Pro documentation](ViewPro/getting-started.md)|
|[4D Widgets](https://github.com/4d/4D-Widgets)|Manage DatePicker, TimePicker, SearchPicker 4D widgets|`DatePicker calendar`, `DateEntry area`, `TimeEntry`, `SearchPicker SET HELP TEXT`, ...|
|[4D WritePro Interface](https://github.com/4d/4D-WritePro-Interface)|Manage [4D Write Pro palettes](https://doc.4d.com/4Dv20R9/4D/20-R9/Entry-areas.300-7543821.en.html) and [table wizard](../WritePro/writeprointerface.md#table-wizard)|`WP PictureSettings`, `WP ShowTabPages`, `WP SwitchToolbar`, `WP UpdateWidget`|


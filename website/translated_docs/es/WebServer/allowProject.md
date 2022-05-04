---
id: allowProject
title: Permitir métodos proyecto
---

  
Las etiquetas 4D como `4DEVAL`, `4DTEXT`, `4DHTML`... así como la U[`URL /4DACTION`](httpRequests.md#/4daction) permiten desencadenar la ejecución de cualquier método de un proyecto 4D publicado en la web. For example, the request *http://www.server.com/4DACTION/login* causes the execution of the ***login*** project method, if it exists.

This mechanism therefore presents a security risk for the application, in particular if an Internet user intentionally (or unintentionally) triggers a method not intended for execution via the web. You can avoid this risk in the following ways:

*   Filter the methods called via the URLS using the [`On Web Authentication`](authentication.md#on-web-authentication) database method. Drawbacks: If the database includes a great number of methods, this system may be difficult to manage.

*   Use the **Available through 4D tags and URLs (4DACTION...)** option found in the Method properties dialog box:

![](assets/en/WebServer/methodProperties.png)

This option is used to individually designate each project method that can be called using the `4DACTION` special URL, or the `4DTEXT`, `4DHTML`, `4DEVAL`, `4DSCRIPT`, `4DIF`, `4DELSEIF` or `4DLOOP` tags. When it is not checked, the project method concerned cannot be directly executed through an HTTP request. Conversely, it can be executed using other types of calls (formulas, other methods, etc.).

This option is unchecked by default. Methods that can be executed through `4DACTION` or specific tags must be specifically indicated.

In the Explorer, Project methods with this property are given a specific icon:

 ![](assets/en/WebServer/methodIcon.png)
